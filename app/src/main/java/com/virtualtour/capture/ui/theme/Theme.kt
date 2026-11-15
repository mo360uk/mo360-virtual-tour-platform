package com.virtualtour.capture.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable

private val ViewerLightColorScheme = lightColorScheme(
    primary = CobaltBlue,
    onPrimary = ViewerCardSolid,
    secondary = BrandOchre,
    tertiary = BrandEmerald,
    background = ViewerMistBg,
    onBackground = ViewerInk,
    surface = ViewerCardSolid,
    onSurface = ViewerInk,
    surfaceVariant = ViewerMistBg,
    onSurfaceVariant = ViewerSlateMuted,
    outline = ViewerBorder
)

private val CaptureHudDarkColorScheme = darkColorScheme(
    primary = CobaltBlue,
    onPrimary = HudTextPrimary,
    secondary = BrandOchre,
    tertiary = BrandEmerald,
    background = HudVoidBg,
    onBackground = HudTextPrimary,
    surface = HudSurface,
    onSurface = HudTextPrimary,
    surfaceVariant = HudCardBg,
    onSurfaceVariant = HudTextSecondary,
    outline = HudBorder
)

@Composable
fun Mo360Theme(
    darkHudMode: Boolean = false,
    content: @Composable () -> Unit
) {
    MaterialTheme(
        colorScheme = if (darkHudMode) CaptureHudDarkColorScheme else ViewerLightColorScheme,
        typography = Mo360Typography,
        content = content
    )
}
