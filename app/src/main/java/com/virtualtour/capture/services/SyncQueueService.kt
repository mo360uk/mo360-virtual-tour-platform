package com.virtualtour.capture.services

import android.content.Context
import android.net.ConnectivityManager
import android.net.Network
import android.net.NetworkCapabilities
import com.virtualtour.capture.BuildConfig
import com.virtualtour.capture.data.PropertyTour
import com.virtualtour.capture.data.RoomNode
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import kotlinx.coroutines.withContext
import kotlinx.serialization.Serializable
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.File
import java.time.Instant
import java.util.concurrent.TimeUnit

@Serializable
enum class SyncItemStatus {
    PENDING,
    SYNCING,
    SYNCED,
    FAILED
}

@Serializable
data class SyncQueueItem(
    val id: String,
    val tourId: String,
    val room: RoomNode,
    val localImageUri: String,
    val previewImageUri: String? = null,
    val manifestSnapshot: PropertyTour,
    val status: SyncItemStatus,
    val attempts: Int,
    val createdAt: String,
    val updatedAt: String,
    val lastError: String? = null
)

data class QueueStatus(
    val isOnline: Boolean = true,
    val connectionType: String = "wifi",
    val isFlushing: Boolean = false,
    val pendingCount: Int = 0,
    val syncingCount: Int = 0,
    val syncedCount: Int = 0,
    val failedCount: Int = 0,
    val totalCount: Int = 0,
    val lastSyncedAt: String? = null,
    val items: List<SyncQueueItem> = emptyList()
)

@Serializable
private data class SyncPayload(
    val tourId: String,
    val room: RoomNode,
    val localImageUri: String,
    val previewImageUri: String?,
    val manifest: PropertyTour
)

class SyncQueueService(context: Context) {

    private val appContext = context.applicationContext
    private val rootDir = File(appContext.filesDir, "mo360-tours").apply { mkdirs() }
    private val queueFile = File(rootDir, "sync-queue.json")
    private val prefs = appContext.getSharedPreferences("mo360_prefs", Context.MODE_PRIVATE)
    private val json = Json {
        ignoreUnknownKeys = true
        prettyPrint = true
    }

    private val scope = CoroutineScope(SupervisorJob() + Dispatchers.IO)
    private val flushMutex = Mutex()
    private val queueItems = mutableListOf<SyncQueueItem>()

    private var isOnline: Boolean = true
    private var connectionType: String = "wifi"
    private var isFlushing: Boolean = false
    private var lastSyncedAt: String? = prefs.getString("mo360_last_synced_at_v1", null)

    private val _status = MutableStateFlow(QueueStatus())
    val status: StateFlow<QueueStatus> = _status.asStateFlow()

    private val connectivityManager =
        appContext.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager

    private val httpClient = OkHttpClient.Builder()
        .connectTimeout(15, TimeUnit.SECONDS)
        .readTimeout(30, TimeUnit.SECONDS)
        .build()

    init {
        loadQueueFromDisk()
        registerNetworkMonitor()
        emitStatus()
        if (isOnline && queueItems.any { it.status == SyncItemStatus.PENDING }) {
            scope.launch { flushQueue() }
        }
    }

    private fun loadQueueFromDisk() {
        if (!queueFile.exists()) return
        runCatching {
            val loaded = json.decodeFromString<List<SyncQueueItem>>(queueFile.readText())
            queueItems.clear()
            queueItems.addAll(loaded)
        }
    }

    private fun persistQueueToDisk() {
        runCatching {
            queueFile.writeText(json.encodeToString(queueItems.toList()))
        }
    }

    fun saveTourManifest(tour: PropertyTour) {
        runCatching {
            val tourDir = File(rootDir, tour.id).apply { mkdirs() }
            File(tourDir, "manifest.json").writeText(json.encodeToString(tour))
        }
    }

    fun loadTourManifest(tourId: String): PropertyTour? {
        val file = File(File(rootDir, tourId), "manifest.json")
        if (!file.exists()) return null
        return runCatching {
            json.decodeFromString<PropertyTour>(file.readText())
        }.getOrNull()
    }

    private fun registerNetworkMonitor() {
        val active = connectivityManager.activeNetwork
        val caps = active?.let { connectivityManager.getNetworkCapabilities(it) }
        updateNetworkState(caps)

        runCatching {
            connectivityManager.registerDefaultNetworkCallback(object : ConnectivityManager.NetworkCallback() {
                override fun onAvailable(network: Network) {
                    val c = connectivityManager.getNetworkCapabilities(network)
                    val wasOffline = !isOnline
                    updateNetworkState(c)
                    emitStatus()
                    if (isOnline && (wasOffline || queueItems.any { it.status == SyncItemStatus.PENDING })) {
                        scope.launch { flushQueue() }
                    }
                }

                override fun onCapabilitiesChanged(network: Network, networkCapabilities: NetworkCapabilities) {
                    updateNetworkState(networkCapabilities)
                    emitStatus()
                }

                override fun onLost(network: Network) {
                    isOnline = false
                    connectionType = "none"
                    emitStatus()
                }
            })
        }
    }

    private fun updateNetworkState(caps: NetworkCapabilities?) {
        if (caps == null) {
            isOnline = false
            connectionType = "none"
            return
        }
        val hasInternet = caps.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)
        isOnline = hasInternet
        connectionType = when {
            !hasInternet -> "none"
            caps.hasTransport(NetworkCapabilities.TRANSPORT_WIFI) -> "wifi"
            caps.hasTransport(NetworkCapabilities.TRANSPORT_CELLULAR) -> "cellular"
            else -> "other"
        }
    }

    private fun computeStatus(): QueueStatus {
        var pending = 0
        var syncing = 0
        var synced = 0
        var failed = 0
        for (item in queueItems) {
            when (item.status) {
                SyncItemStatus.PENDING -> pending++
                SyncItemStatus.SYNCING -> syncing++
                SyncItemStatus.SYNCED -> synced++
                SyncItemStatus.FAILED -> failed++
            }
        }
        return QueueStatus(
            isOnline = isOnline,
            connectionType = connectionType,
            isFlushing = isFlushing,
            pendingCount = pending,
            syncingCount = syncing,
            syncedCount = synced,
            failedCount = failed,
            totalCount = queueItems.size,
            lastSyncedAt = lastSyncedAt,
            items = queueItems.toList()
        )
    }

    private fun emitStatus() {
        _status.value = computeStatus()
    }

    suspend fun enqueueRoom(
        tour: PropertyTour,
        room: RoomNode,
        localImageUri: String,
        previewImageUri: String? = null
    ): SyncQueueItem = withContext(Dispatchers.IO) {
        val now = Instant.now().toString()
        val roomToQueue = room.copy(
            capturedAt = room.capturedAt ?: now,
            synced = false
        )

        val updatedRooms = if (tour.rooms.any { it.id == roomToQueue.id }) {
            tour.rooms.map { if (it.id == roomToQueue.id) roomToQueue else it }
        } else {
            tour.rooms + roomToQueue
        }
        val updatedTour = tour.copy(
            updatedAt = now,
            rooms = updatedRooms
        )

        saveTourManifest(updatedTour)

        val item = SyncQueueItem(
            id = "sync_${tour.id}_${roomToQueue.id}_${System.currentTimeMillis()}",
            tourId = tour.id,
            room = roomToQueue,
            localImageUri = localImageUri,
            previewImageUri = previewImageUri,
            manifestSnapshot = updatedTour,
            status = SyncItemStatus.PENDING,
            attempts = 0,
            createdAt = now,
            updatedAt = now
        )

        flushMutex.withLock {
            queueItems.removeAll {
                it.tourId == item.tourId && it.room.id == item.room.id && it.status != SyncItemStatus.SYNCED
            }
            queueItems.add(item)
            persistQueueToDisk()
            runCatching {
                val roomsDir = File(File(rootDir, tour.id), "rooms").apply { mkdirs() }
                File(roomsDir, "${roomToQueue.id}.json").writeText(json.encodeToString(item))
            }
            emitStatus()
        }

        if (isOnline) {
            scope.launch { flushQueue() }
        }
        item
    }

    suspend fun flushQueue() = withContext(Dispatchers.IO) {
        if (!isOnline) return@withContext
        flushMutex.withLock {
            if (!isOnline || isFlushing) return@withContext
            val indices = queueItems.indices.filter {
                queueItems[it].status == SyncItemStatus.PENDING ||
                    queueItems[it].status == SyncItemStatus.FAILED
            }
            if (indices.isEmpty()) return@withContext

            isFlushing = true
            emitStatus()

            try {
                for (idx in indices) {
                    if (!isOnline) break
                    val current = queueItems.getOrNull(idx) ?: continue
                    queueItems[idx] = current.copy(
                        status = SyncItemStatus.SYNCING,
                        attempts = current.attempts + 1,
                        updatedAt = Instant.now().toString(),
                        lastError = null
                    )
                    persistQueueToDisk()
                    emitStatus()

                    try {
                        uploadItem(queueItems[idx])
                        val syncedAt = Instant.now().toString()
                        val syncedRoom = queueItems[idx].room.copy(synced = true)
                        val updatedManifest = queueItems[idx].manifestSnapshot.copy(
                            updatedAt = syncedAt,
                            rooms = queueItems[idx].manifestSnapshot.rooms.map {
                                if (it.id == syncedRoom.id) syncedRoom else it
                            }
                        )
                        saveTourManifest(updatedManifest)
                        queueItems[idx] = queueItems[idx].copy(
                            room = syncedRoom,
                            manifestSnapshot = updatedManifest,
                            status = SyncItemStatus.SYNCED,
                            updatedAt = syncedAt
                        )
                        lastSyncedAt = syncedAt
                        prefs.edit().putString("mo360_last_synced_at_v1", syncedAt).apply()
                    } catch (e: Exception) {
                        queueItems[idx] = queueItems[idx].copy(
                            status = SyncItemStatus.FAILED,
                            updatedAt = Instant.now().toString(),
                            lastError = e.message ?: "Unknown sync error"
                        )
                    }
                    persistQueueToDisk()
                    emitStatus()
                }
            } finally {
                isFlushing = false
                emitStatus()
            }
        }
    }

    private suspend fun uploadItem(item: SyncQueueItem) {
        val endpoint = BuildConfig.SYNC_ENDPOINT.trim()
        if (endpoint.isNotEmpty()) {
            val payload = SyncPayload(
                tourId = item.tourId,
                room = item.room,
                localImageUri = item.localImageUri,
                previewImageUri = item.previewImageUri,
                manifest = item.manifestSnapshot
            )
            val body = json.encodeToString(payload)
                .toRequestBody("application/json; charset=utf-8".toMediaType())
            val req = Request.Builder().url(endpoint).post(body).build()
            httpClient.newCall(req).execute().use { res ->
                if (!res.isSuccessful) {
                    throw IllegalStateException("Cloud sync failed with HTTP ${res.code}")
                }
            }
            return
        }
        // Offline-first local manifest commit when no remote endpoint is configured
        delay(180)
    }
}
