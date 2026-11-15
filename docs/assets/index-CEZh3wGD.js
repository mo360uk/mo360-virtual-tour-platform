(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function D0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cm={exports:{}},Dl={},Rm={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=Symbol.for("react.element"),U0=Symbol.for("react.portal"),I0=Symbol.for("react.fragment"),N0=Symbol.for("react.strict_mode"),F0=Symbol.for("react.profiler"),O0=Symbol.for("react.provider"),k0=Symbol.for("react.context"),B0=Symbol.for("react.forward_ref"),z0=Symbol.for("react.suspense"),H0=Symbol.for("react.memo"),V0=Symbol.for("react.lazy"),lh=Symbol.iterator;function G0(t){return t===null||typeof t!="object"?null:(t=lh&&t[lh]||t["@@iterator"],typeof t=="function"?t:null)}var bm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pm=Object.assign,Lm={};function Fs(t,e,n){this.props=t,this.context=e,this.refs=Lm,this.updater=n||bm}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dm(){}Dm.prototype=Fs.prototype;function Vd(t,e,n){this.props=t,this.context=e,this.refs=Lm,this.updater=n||bm}var Gd=Vd.prototype=new Dm;Gd.constructor=Vd;Pm(Gd,Fs.prototype);Gd.isPureReactComponent=!0;var ch=Array.isArray,Um=Object.prototype.hasOwnProperty,Wd={current:null},Im={key:!0,ref:!0,__self:!0,__source:!0};function Nm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Um.call(e,i)&&!Im.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Vo,type:t,key:s,ref:o,props:r,_owner:Wd.current}}function W0(t,e){return{$$typeof:Vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vo}function X0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var uh=/\/+/g;function tc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?X0(""+t.key):e.toString(36)}function Ba(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Vo:case U0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+tc(o,0):i,ch(r)?(n="",t!=null&&(n=t.replace(uh,"$&/")+"/"),Ba(r,e,n,"",function(c){return c})):r!=null&&(Xd(r)&&(r=W0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(uh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ch(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+tc(s,a);o+=Ba(s,e,n,l,r)}else if(l=G0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+tc(s,a++),o+=Ba(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Jo(t,e,n){if(t==null)return t;var i=[],r=0;return Ba(t,i,"","",function(s){return e.call(n,s,r++)}),i}function j0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},za={transition:null},Y0={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:za,ReactCurrentOwner:Wd};function Fm(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:Jo,forEach:function(t,e,n){Jo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Jo(t,function(){e++}),e},toArray:function(t){return Jo(t,function(e){return e})||[]},only:function(t){if(!Xd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=Fs;ze.Fragment=I0;ze.Profiler=F0;ze.PureComponent=Vd;ze.StrictMode=N0;ze.Suspense=z0;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y0;ze.act=Fm;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Pm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Um.call(e,l)&&!Im.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Vo,type:t.type,key:r,ref:s,props:i,_owner:o}};ze.createContext=function(t){return t={$$typeof:k0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:O0,_context:t},t.Consumer=t};ze.createElement=Nm;ze.createFactory=function(t){var e=Nm.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:B0,render:t}};ze.isValidElement=Xd;ze.lazy=function(t){return{$$typeof:V0,_payload:{_status:-1,_result:t},_init:j0}};ze.memo=function(t,e){return{$$typeof:H0,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=za.transition;za.transition={};try{t()}finally{za.transition=e}};ze.unstable_act=Fm;ze.useCallback=function(t,e){return Yt.current.useCallback(t,e)};ze.useContext=function(t){return Yt.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};ze.useEffect=function(t,e){return Yt.current.useEffect(t,e)};ze.useId=function(){return Yt.current.useId()};ze.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return Yt.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};ze.useRef=function(t){return Yt.current.useRef(t)};ze.useState=function(t){return Yt.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return Yt.current.useTransition()};ze.version="18.3.1";Rm.exports=ze;var Ce=Rm.exports;const $0=D0(Ce);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0=Ce,K0=Symbol.for("react.element"),Z0=Symbol.for("react.fragment"),Q0=Object.prototype.hasOwnProperty,J0=q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,e_={key:!0,ref:!0,__self:!0,__source:!0};function Om(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Q0.call(e,i)&&!e_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:K0,type:t,key:s,ref:o,props:r,_owner:J0.current}}Dl.Fragment=Z0;Dl.jsx=Om;Dl.jsxs=Om;Cm.exports=Dl;var F=Cm.exports,su={},km={exports:{}},pn={},Bm={exports:{}},zm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,X){var W=L.length;L.push(X);e:for(;0<W;){var ne=W-1>>>1,le=L[ne];if(0<r(le,X))L[ne]=X,L[W]=le,W=ne;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var X=L[0],W=L.pop();if(W!==X){L[0]=W;e:for(var ne=0,le=L.length,be=le>>>1;ne<be;){var j=2*(ne+1)-1,Y=L[j],ae=j+1,se=L[ae];if(0>r(Y,W))ae<le&&0>r(se,Y)?(L[ne]=se,L[ae]=W,ne=ae):(L[ne]=Y,L[j]=W,ne=j);else if(ae<le&&0>r(se,W))L[ne]=se,L[ae]=W,ne=ae;else break e}}return X}function r(L,X){var W=L.sortIndex-X.sortIndex;return W!==0?W:L.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,p=!1,_=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=L)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function y(L){if(v=!1,x(L),!_)if(n(l)!==null)_=!0,q(P);else{var X=n(c);X!==null&&k(y,X.startTime-L)}}function P(L,X){_=!1,v&&(v=!1,u(T),T=-1),p=!0;var W=h;try{for(x(X),f=n(l);f!==null&&(!(f.expirationTime>X)||L&&!b());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,h=f.priorityLevel;var le=ne(f.expirationTime<=X);X=t.unstable_now(),typeof le=="function"?f.callback=le:f===n(l)&&i(l),x(X)}else i(l);f=n(l)}if(f!==null)var be=!0;else{var j=n(c);j!==null&&k(y,j.startTime-X),be=!1}return be}finally{f=null,h=W,p=!1}}var R=!1,A=null,T=-1,E=5,S=-1;function b(){return!(t.unstable_now()-S<E)}function G(){if(A!==null){var L=t.unstable_now();S=L;var X=!0;try{X=A(!0,L)}finally{X?O():(R=!1,A=null)}}else R=!1}var O;if(typeof g=="function")O=function(){g(G)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,Q=$.port2;$.port1.onmessage=G,O=function(){Q.postMessage(null)}}else O=function(){m(G,0)};function q(L){A=L,R||(R=!0,O())}function k(L,X){T=m(function(){L(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,q(P))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var X=3;break;default:X=h}var W=h;h=X;try{return L()}finally{h=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,X){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var W=h;h=L;try{return X()}finally{h=W}},t.unstable_scheduleCallback=function(L,X,W){var ne=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ne+W:ne):W=ne,L){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=W+le,L={id:d++,callback:X,priorityLevel:L,startTime:W,expirationTime:le,sortIndex:-1},W>ne?(L.sortIndex=W,e(c,L),n(l)===null&&L===n(c)&&(v?(u(T),T=-1):v=!0,k(y,W-ne))):(L.sortIndex=le,e(l,L),_||p||(_=!0,q(P))),L},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(L){var X=h;return function(){var W=h;h=X;try{return L.apply(this,arguments)}finally{h=W}}}})(zm);Bm.exports=zm;var t_=Bm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_=Ce,hn=t_;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hm=new Set,Mo={};function Lr(t,e){Ss(t,e),Ss(t+"Capture",e)}function Ss(t,e){for(Mo[t]=e,t=0;t<e.length;t++)Hm.add(e[t])}var vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=Object.prototype.hasOwnProperty,i_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dh={},fh={};function r_(t){return ou.call(fh,t)?!0:ou.call(dh,t)?!1:i_.test(t)?fh[t]=!0:(dh[t]=!0,!1)}function s_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function o_(t,e,n,i){if(e===null||typeof e>"u"||s_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ut[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ut[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ut[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ut[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ut[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ut[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ut[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ut[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ut[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var jd=/[\-:]([a-z])/g;function Yd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jd,Yd);Ut[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jd,Yd);Ut[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jd,Yd);Ut[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ut[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});Ut.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ut[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function $d(t,e,n,i){var r=Ut.hasOwnProperty(e)?Ut[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(o_(e,n,r,i)&&(n=null),i||r===null?r_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var wi=n_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ea=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),Qr=Symbol.for("react.fragment"),qd=Symbol.for("react.strict_mode"),au=Symbol.for("react.profiler"),Vm=Symbol.for("react.provider"),Gm=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),lu=Symbol.for("react.suspense"),cu=Symbol.for("react.suspense_list"),Zd=Symbol.for("react.memo"),Ii=Symbol.for("react.lazy"),Wm=Symbol.for("react.offscreen"),hh=Symbol.iterator;function Xs(t){return t===null||typeof t!="object"?null:(t=hh&&t[hh]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,nc;function io(t){if(nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nc=e&&e[1]||""}return`
`+nc+t}var ic=!1;function rc(t,e){if(!t||ic)return"";ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?io(t):""}function a_(t){switch(t.tag){case 5:return io(t.type);case 16:return io("Lazy");case 13:return io("Suspense");case 19:return io("SuspenseList");case 0:case 2:case 15:return t=rc(t.type,!1),t;case 11:return t=rc(t.type.render,!1),t;case 1:return t=rc(t.type,!0),t;default:return""}}function uu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qr:return"Fragment";case Zr:return"Portal";case au:return"Profiler";case qd:return"StrictMode";case lu:return"Suspense";case cu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gm:return(t.displayName||"Context")+".Consumer";case Vm:return(t._context.displayName||"Context")+".Provider";case Kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zd:return e=t.displayName||null,e!==null?e:uu(t.type)||"Memo";case Ii:e=t._payload,t=t._init;try{return uu(t(e))}catch{}}return null}function l_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uu(e);case 8:return e===qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function c_(t){var e=Xm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ta(t){t._valueTracker||(t._valueTracker=c_(t))}function jm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Xm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function du(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ph(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ym(t,e){e=e.checked,e!=null&&$d(t,"checked",e,!1)}function fu(t,e){Ym(t,e);var n=Zi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hu(t,e.type,n):e.hasOwnProperty("defaultValue")&&hu(t,e.type,Zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hu(t,e,n){(e!=="number"||sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ro=Array.isArray;function ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Zi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function pu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(ro(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zi(n)}}function $m(t,e){var n=Zi(e.value),i=Zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function vh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var na,Km=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(na=na||document.createElement("div"),na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Eo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},u_=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(t){u_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),co[e]=co[t]})});function Zm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||co.hasOwnProperty(t)&&co[t]?(""+e).trim():e+"px"}function Qm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Zm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var d_=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gu(t,e){if(e){if(d_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function vu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _u=null;function Qd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xu=null,fs=null,hs=null;function _h(t){if(t=Xo(t)){if(typeof xu!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Ol(e),xu(t.stateNode,t.type,e))}}function Jm(t){fs?hs?hs.push(t):hs=[t]:fs=t}function eg(){if(fs){var t=fs,e=hs;if(hs=fs=null,_h(t),e)for(t=0;t<e.length;t++)_h(e[t])}}function tg(t,e){return t(e)}function ng(){}var sc=!1;function ig(t,e,n){if(sc)return t(e,n);sc=!0;try{return tg(t,e,n)}finally{sc=!1,(fs!==null||hs!==null)&&(ng(),eg())}}function wo(t,e){var n=t.stateNode;if(n===null)return null;var i=Ol(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var yu=!1;if(vi)try{var js={};Object.defineProperty(js,"passive",{get:function(){yu=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{yu=!1}function f_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var uo=!1,ol=null,al=!1,Su=null,h_={onError:function(t){uo=!0,ol=t}};function p_(t,e,n,i,r,s,o,a,l){uo=!1,ol=null,f_.apply(h_,arguments)}function m_(t,e,n,i,r,s,o,a,l){if(p_.apply(this,arguments),uo){if(uo){var c=ol;uo=!1,ol=null}else throw Error(ie(198));al||(al=!0,Su=c)}}function Dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xh(t){if(Dr(t)!==t)throw Error(ie(188))}function g_(t){var e=t.alternate;if(!e){if(e=Dr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return xh(r),t;if(s===i)return xh(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function sg(t){return t=g_(t),t!==null?og(t):null}function og(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=og(t);if(e!==null)return e;t=t.sibling}return null}var ag=hn.unstable_scheduleCallback,yh=hn.unstable_cancelCallback,v_=hn.unstable_shouldYield,__=hn.unstable_requestPaint,_t=hn.unstable_now,x_=hn.unstable_getCurrentPriorityLevel,Jd=hn.unstable_ImmediatePriority,lg=hn.unstable_UserBlockingPriority,ll=hn.unstable_NormalPriority,y_=hn.unstable_LowPriority,cg=hn.unstable_IdlePriority,Ul=null,$n=null;function S_(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Ul,t,void 0,(t.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:w_,M_=Math.log,E_=Math.LN2;function w_(t){return t>>>=0,t===0?32:31-(M_(t)/E_|0)|0}var ia=64,ra=4194304;function so(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=so(a):(s&=o,s!==0&&(i=so(s)))}else o=n&~r,o!==0?i=so(o):s!==0&&(i=so(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-kn(e),r=1<<n,i|=t[n],e&=~r;return i}function T_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function A_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-kn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=T_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Mu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ug(){var t=ia;return ia<<=1,!(ia&4194240)&&(ia=64),t}function oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kn(e),t[e]=n}function C_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ef(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function dg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var fg,tf,hg,pg,mg,Eu=!1,sa=[],Hi=null,Vi=null,Gi=null,To=new Map,Ao=new Map,Fi=[],R_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sh(t,e){switch(t){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Gi=null;break;case"pointerover":case"pointerout":To.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(e.pointerId)}}function Ys(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Xo(e),e!==null&&tf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function b_(t,e,n,i,r){switch(e){case"focusin":return Hi=Ys(Hi,t,e,n,i,r),!0;case"dragenter":return Vi=Ys(Vi,t,e,n,i,r),!0;case"mouseover":return Gi=Ys(Gi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return To.set(s,Ys(To.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ao.set(s,Ys(Ao.get(s)||null,t,e,n,i,r)),!0}return!1}function gg(t){var e=vr(t.target);if(e!==null){var n=Dr(e);if(n!==null){if(e=n.tag,e===13){if(e=rg(n),e!==null){t.blockedOn=e,mg(t.priority,function(){hg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ha(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);_u=i,n.target.dispatchEvent(i),_u=null}else return e=Xo(n),e!==null&&tf(e),t.blockedOn=n,!1;e.shift()}return!0}function Mh(t,e,n){Ha(t)&&n.delete(e)}function P_(){Eu=!1,Hi!==null&&Ha(Hi)&&(Hi=null),Vi!==null&&Ha(Vi)&&(Vi=null),Gi!==null&&Ha(Gi)&&(Gi=null),To.forEach(Mh),Ao.forEach(Mh)}function $s(t,e){t.blockedOn===e&&(t.blockedOn=null,Eu||(Eu=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,P_)))}function Co(t){function e(r){return $s(r,t)}if(0<sa.length){$s(sa[0],t);for(var n=1;n<sa.length;n++){var i=sa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Hi!==null&&$s(Hi,t),Vi!==null&&$s(Vi,t),Gi!==null&&$s(Gi,t),To.forEach(e),Ao.forEach(e),n=0;n<Fi.length;n++)i=Fi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Fi.length&&(n=Fi[0],n.blockedOn===null);)gg(n),n.blockedOn===null&&Fi.shift()}var ps=wi.ReactCurrentBatchConfig,ul=!0;function L_(t,e,n,i){var r=Qe,s=ps.transition;ps.transition=null;try{Qe=1,nf(t,e,n,i)}finally{Qe=r,ps.transition=s}}function D_(t,e,n,i){var r=Qe,s=ps.transition;ps.transition=null;try{Qe=4,nf(t,e,n,i)}finally{Qe=r,ps.transition=s}}function nf(t,e,n,i){if(ul){var r=wu(t,e,n,i);if(r===null)gc(t,e,i,dl,n),Sh(t,i);else if(b_(r,t,e,n,i))i.stopPropagation();else if(Sh(t,i),e&4&&-1<R_.indexOf(t)){for(;r!==null;){var s=Xo(r);if(s!==null&&fg(s),s=wu(t,e,n,i),s===null&&gc(t,e,i,dl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else gc(t,e,i,null,n)}}var dl=null;function wu(t,e,n,i){if(dl=null,t=Qd(i),t=vr(t),t!==null)if(e=Dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dl=t,null}function vg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(x_()){case Jd:return 1;case lg:return 4;case ll:case y_:return 16;case cg:return 536870912;default:return 16}default:return 16}}var Bi=null,rf=null,Va=null;function _g(){if(Va)return Va;var t,e=rf,n=e.length,i,r="value"in Bi?Bi.value:Bi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Va=r.slice(t,1<i?1-i:void 0)}function Ga(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oa(){return!0}function Eh(){return!1}function mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oa:Eh,this.isPropagationStopped=Eh,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oa)},persist:function(){},isPersistent:oa}),e}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sf=mn(Os),Wo=pt({},Os,{view:0,detail:0}),U_=mn(Wo),ac,lc,qs,Il=pt({},Wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(ac=t.screenX-qs.screenX,lc=t.screenY-qs.screenY):lc=ac=0,qs=t),ac)},movementY:function(t){return"movementY"in t?t.movementY:lc}}),wh=mn(Il),I_=pt({},Il,{dataTransfer:0}),N_=mn(I_),F_=pt({},Wo,{relatedTarget:0}),cc=mn(F_),O_=pt({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),k_=mn(O_),B_=pt({},Os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),z_=mn(B_),H_=pt({},Os,{data:0}),Th=mn(H_),V_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=W_[t])?!!e[t]:!1}function of(){return X_}var j_=pt({},Wo,{key:function(t){if(t.key){var e=V_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ga(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?G_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?Ga(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ga(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Y_=mn(j_),$_=pt({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ah=mn($_),q_=pt({},Wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),K_=mn(q_),Z_=pt({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q_=mn(Z_),J_=pt({},Il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ex=mn(J_),tx=[9,13,27,32],af=vi&&"CompositionEvent"in window,fo=null;vi&&"documentMode"in document&&(fo=document.documentMode);var nx=vi&&"TextEvent"in window&&!fo,xg=vi&&(!af||fo&&8<fo&&11>=fo),Ch=" ",Rh=!1;function yg(t,e){switch(t){case"keyup":return tx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function ix(t,e){switch(t){case"compositionend":return Sg(e);case"keypress":return e.which!==32?null:(Rh=!0,Ch);case"textInput":return t=e.data,t===Ch&&Rh?null:t;default:return null}}function rx(t,e){if(Jr)return t==="compositionend"||!af&&yg(t,e)?(t=_g(),Va=rf=Bi=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xg&&e.locale!=="ko"?null:e.data;default:return null}}var sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sx[t.type]:e==="textarea"}function Mg(t,e,n,i){Jm(i),e=fl(e,"onChange"),0<e.length&&(n=new sf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ho=null,Ro=null;function ox(t){Ug(t,0)}function Nl(t){var e=ns(t);if(jm(e))return t}function ax(t,e){if(t==="change")return e}var Eg=!1;if(vi){var uc;if(vi){var dc="oninput"in document;if(!dc){var Ph=document.createElement("div");Ph.setAttribute("oninput","return;"),dc=typeof Ph.oninput=="function"}uc=dc}else uc=!1;Eg=uc&&(!document.documentMode||9<document.documentMode)}function Lh(){ho&&(ho.detachEvent("onpropertychange",wg),Ro=ho=null)}function wg(t){if(t.propertyName==="value"&&Nl(Ro)){var e=[];Mg(e,Ro,t,Qd(t)),ig(ox,e)}}function lx(t,e,n){t==="focusin"?(Lh(),ho=e,Ro=n,ho.attachEvent("onpropertychange",wg)):t==="focusout"&&Lh()}function cx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nl(Ro)}function ux(t,e){if(t==="click")return Nl(e)}function dx(t,e){if(t==="input"||t==="change")return Nl(e)}function fx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:fx;function bo(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ou.call(e,r)||!Hn(t[r],e[r]))return!1}return!0}function Dh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uh(t,e){var n=Dh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dh(n)}}function Tg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ag(){for(var t=window,e=sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sl(t.document)}return e}function lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hx(t){var e=Ag(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tg(n.ownerDocument.documentElement,n)){if(i!==null&&lf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Uh(n,s);var o=Uh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var px=vi&&"documentMode"in document&&11>=document.documentMode,es=null,Tu=null,po=null,Au=!1;function Ih(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Au||es==null||es!==sl(i)||(i=es,"selectionStart"in i&&lf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),po&&bo(po,i)||(po=i,i=fl(Tu,"onSelect"),0<i.length&&(e=new sf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=es)))}function aa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ts={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},fc={},Cg={};vi&&(Cg=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function Fl(t){if(fc[t])return fc[t];if(!ts[t])return t;var e=ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cg)return fc[t]=e[n];return t}var Rg=Fl("animationend"),bg=Fl("animationiteration"),Pg=Fl("animationstart"),Lg=Fl("transitionend"),Dg=new Map,Nh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){Dg.set(t,e),Lr(e,[t])}for(var hc=0;hc<Nh.length;hc++){var pc=Nh[hc],mx=pc.toLowerCase(),gx=pc[0].toUpperCase()+pc.slice(1);er(mx,"on"+gx)}er(Rg,"onAnimationEnd");er(bg,"onAnimationIteration");er(Pg,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(Lg,"onTransitionEnd");Ss("onMouseEnter",["mouseout","mouseover"]);Ss("onMouseLeave",["mouseout","mouseover"]);Ss("onPointerEnter",["pointerout","pointerover"]);Ss("onPointerLeave",["pointerout","pointerover"]);Lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vx=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function Fh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,m_(i,e,void 0,t),t.currentTarget=null}function Ug(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Fh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Fh(r,a,c),s=l}}}if(al)throw t=Su,al=!1,Su=null,t}function ct(t,e){var n=e[Lu];n===void 0&&(n=e[Lu]=new Set);var i=t+"__bubble";n.has(i)||(Ig(e,t,2,!1),n.add(i))}function mc(t,e,n){var i=0;e&&(i|=4),Ig(n,t,i,e)}var la="_reactListening"+Math.random().toString(36).slice(2);function Po(t){if(!t[la]){t[la]=!0,Hm.forEach(function(n){n!=="selectionchange"&&(vx.has(n)||mc(n,!1,t),mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[la]||(e[la]=!0,mc("selectionchange",!1,e))}}function Ig(t,e,n,i){switch(vg(e)){case 1:var r=L_;break;case 4:r=D_;break;default:r=nf}n=r.bind(null,e,n,t),r=void 0,!yu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function gc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=vr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ig(function(){var c=s,d=Qd(n),f=[];e:{var h=Dg.get(t);if(h!==void 0){var p=sf,_=t;switch(t){case"keypress":if(Ga(n)===0)break e;case"keydown":case"keyup":p=Y_;break;case"focusin":_="focus",p=cc;break;case"focusout":_="blur",p=cc;break;case"beforeblur":case"afterblur":p=cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=N_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=K_;break;case Rg:case bg:case Pg:p=k_;break;case Lg:p=Q_;break;case"scroll":p=U_;break;case"wheel":p=ex;break;case"copy":case"cut":case"paste":p=z_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ah}var v=(e&4)!==0,m=!v&&t==="scroll",u=v?h!==null?h+"Capture":null:h;v=[];for(var g=c,x;g!==null;){x=g;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,u!==null&&(y=wo(g,u),y!=null&&v.push(Lo(g,y,x)))),m)break;g=g.return}0<v.length&&(h=new p(h,_,null,n,d),f.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==_u&&(_=n.relatedTarget||n.fromElement)&&(vr(_)||_[_i]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?vr(_):null,_!==null&&(m=Dr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(v=wh,y="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=Ah,y="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?h:ns(p),x=_==null?h:ns(_),h=new v(y,g+"leave",p,n,d),h.target=m,h.relatedTarget=x,y=null,vr(d)===c&&(v=new v(u,g+"enter",_,n,d),v.target=x,v.relatedTarget=m,y=v),m=y,p&&_)t:{for(v=p,u=_,g=0,x=v;x;x=Ir(x))g++;for(x=0,y=u;y;y=Ir(y))x++;for(;0<g-x;)v=Ir(v),g--;for(;0<x-g;)u=Ir(u),x--;for(;g--;){if(v===u||u!==null&&v===u.alternate)break t;v=Ir(v),u=Ir(u)}v=null}else v=null;p!==null&&Oh(f,h,p,v,!1),_!==null&&m!==null&&Oh(f,m,_,v,!0)}}e:{if(h=c?ns(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var P=ax;else if(bh(h))if(Eg)P=dx;else{P=cx;var R=lx}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=ux);if(P&&(P=P(t,c))){Mg(f,P,n,d);break e}R&&R(t,h,c),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&hu(h,"number",h.value)}switch(R=c?ns(c):window,t){case"focusin":(bh(R)||R.contentEditable==="true")&&(es=R,Tu=c,po=null);break;case"focusout":po=Tu=es=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,Ih(f,n,d);break;case"selectionchange":if(px)break;case"keydown":case"keyup":Ih(f,n,d)}var A;if(af)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Jr?yg(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(xg&&n.locale!=="ko"&&(Jr||T!=="onCompositionStart"?T==="onCompositionEnd"&&Jr&&(A=_g()):(Bi=d,rf="value"in Bi?Bi.value:Bi.textContent,Jr=!0)),R=fl(c,T),0<R.length&&(T=new Th(T,t,null,n,d),f.push({event:T,listeners:R}),A?T.data=A:(A=Sg(n),A!==null&&(T.data=A)))),(A=nx?ix(t,n):rx(t,n))&&(c=fl(c,"onBeforeInput"),0<c.length&&(d=new Th("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=A))}Ug(f,e)})}function Lo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=wo(t,n),s!=null&&i.unshift(Lo(t,s,r)),s=wo(t,e),s!=null&&i.push(Lo(t,s,r))),t=t.return}return i}function Ir(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Oh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=wo(n,s),l!=null&&o.unshift(Lo(n,l,a))):r||(l=wo(n,s),l!=null&&o.push(Lo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var _x=/\r\n?/g,xx=/\u0000|\uFFFD/g;function kh(t){return(typeof t=="string"?t:""+t).replace(_x,`
`).replace(xx,"")}function ca(t,e,n){if(e=kh(e),kh(t)!==e&&n)throw Error(ie(425))}function hl(){}var Cu=null,Ru=null;function bu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pu=typeof setTimeout=="function"?setTimeout:void 0,yx=typeof clearTimeout=="function"?clearTimeout:void 0,Bh=typeof Promise=="function"?Promise:void 0,Sx=typeof queueMicrotask=="function"?queueMicrotask:typeof Bh<"u"?function(t){return Bh.resolve(null).then(t).catch(Mx)}:Pu;function Mx(t){setTimeout(function(){throw t})}function vc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Co(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Co(e)}function Wi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),jn="__reactFiber$"+ks,Do="__reactProps$"+ks,_i="__reactContainer$"+ks,Lu="__reactEvents$"+ks,Ex="__reactListeners$"+ks,wx="__reactHandles$"+ks;function vr(t){var e=t[jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_i]||n[jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zh(t);t!==null;){if(n=t[jn])return n;t=zh(t)}return e}t=n,n=t.parentNode}return null}function Xo(t){return t=t[jn]||t[_i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Ol(t){return t[Do]||null}var Du=[],is=-1;function tr(t){return{current:t}}function ut(t){0>is||(t.current=Du[is],Du[is]=null,is--)}function st(t,e){is++,Du[is]=t.current,t.current=e}var Qi={},zt=tr(Qi),en=tr(!1),wr=Qi;function Ms(t,e){var n=t.type.contextTypes;if(!n)return Qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function pl(){ut(en),ut(zt)}function Hh(t,e,n){if(zt.current!==Qi)throw Error(ie(168));st(zt,e),st(en,n)}function Ng(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,l_(t)||"Unknown",r));return pt({},n,i)}function ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,wr=zt.current,st(zt,t),st(en,en.current),!0}function Vh(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=Ng(t,e,wr),i.__reactInternalMemoizedMergedChildContext=t,ut(en),ut(zt),st(zt,t)):ut(en),st(en,n)}var li=null,kl=!1,_c=!1;function Fg(t){li===null?li=[t]:li.push(t)}function Tx(t){kl=!0,Fg(t)}function nr(){if(!_c&&li!==null){_c=!0;var t=0,e=Qe;try{var n=li;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}li=null,kl=!1}catch(r){throw li!==null&&(li=li.slice(t+1)),ag(Jd,nr),r}finally{Qe=e,_c=!1}}return null}var rs=[],ss=0,gl=null,vl=0,_n=[],xn=0,Tr=null,ui=1,di="";function dr(t,e){rs[ss++]=vl,rs[ss++]=gl,gl=t,vl=e}function Og(t,e,n){_n[xn++]=ui,_n[xn++]=di,_n[xn++]=Tr,Tr=t;var i=ui;t=di;var r=32-kn(i)-1;i&=~(1<<r),n+=1;var s=32-kn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ui=1<<32-kn(e)+r|n<<r|i,di=s+t}else ui=1<<s|n<<r|i,di=t}function cf(t){t.return!==null&&(dr(t,1),Og(t,1,0))}function uf(t){for(;t===gl;)gl=rs[--ss],rs[ss]=null,vl=rs[--ss],rs[ss]=null;for(;t===Tr;)Tr=_n[--xn],_n[xn]=null,di=_n[--xn],_n[xn]=null,ui=_n[--xn],_n[xn]=null}var dn=null,un=null,dt=!1,In=null;function kg(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,un=Wi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Tr!==null?{id:ui,overflow:di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,un=null,!0):!1;default:return!1}}function Uu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Iu(t){if(dt){var e=un;if(e){var n=e;if(!Gh(t,e)){if(Uu(t))throw Error(ie(418));e=Wi(n.nextSibling);var i=dn;e&&Gh(t,e)?kg(i,n):(t.flags=t.flags&-4097|2,dt=!1,dn=t)}}else{if(Uu(t))throw Error(ie(418));t.flags=t.flags&-4097|2,dt=!1,dn=t}}}function Wh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function ua(t){if(t!==dn)return!1;if(!dt)return Wh(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!bu(t.type,t.memoizedProps)),e&&(e=un)){if(Uu(t))throw Bg(),Error(ie(418));for(;e;)kg(t,e),e=Wi(e.nextSibling)}if(Wh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=Wi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=dn?Wi(t.stateNode.nextSibling):null;return!0}function Bg(){for(var t=un;t;)t=Wi(t.nextSibling)}function Es(){un=dn=null,dt=!1}function df(t){In===null?In=[t]:In.push(t)}var Ax=wi.ReactCurrentBatchConfig;function Ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function da(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xh(t){var e=t._init;return e(t._payload)}function zg(t){function e(u,g){if(t){var x=u.deletions;x===null?(u.deletions=[g],u.flags|=16):x.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=$i(u,g),u.index=0,u.sibling=null,u}function s(u,g,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<g?(u.flags|=2,g):x):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,x,y){return g===null||g.tag!==6?(g=Tc(x,u.mode,y),g.return=u,g):(g=r(g,x),g.return=u,g)}function l(u,g,x,y){var P=x.type;return P===Qr?d(u,g,x.props.children,y,x.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ii&&Xh(P)===g.type)?(y=r(g,x.props),y.ref=Ks(u,g,x),y.return=u,y):(y=Ka(x.type,x.key,x.props,null,u.mode,y),y.ref=Ks(u,g,x),y.return=u,y)}function c(u,g,x,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Ac(x,u.mode,y),g.return=u,g):(g=r(g,x.children||[]),g.return=u,g)}function d(u,g,x,y,P){return g===null||g.tag!==7?(g=Er(x,u.mode,y,P),g.return=u,g):(g=r(g,x),g.return=u,g)}function f(u,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Tc(""+g,u.mode,x),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ea:return x=Ka(g.type,g.key,g.props,null,u.mode,x),x.ref=Ks(u,null,g),x.return=u,x;case Zr:return g=Ac(g,u.mode,x),g.return=u,g;case Ii:var y=g._init;return f(u,y(g._payload),x)}if(ro(g)||Xs(g))return g=Er(g,u.mode,x,null),g.return=u,g;da(u,g)}return null}function h(u,g,x,y){var P=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return P!==null?null:a(u,g,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ea:return x.key===P?l(u,g,x,y):null;case Zr:return x.key===P?c(u,g,x,y):null;case Ii:return P=x._init,h(u,g,P(x._payload),y)}if(ro(x)||Xs(x))return P!==null?null:d(u,g,x,y,null);da(u,x)}return null}function p(u,g,x,y,P){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(x)||null,a(g,u,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ea:return u=u.get(y.key===null?x:y.key)||null,l(g,u,y,P);case Zr:return u=u.get(y.key===null?x:y.key)||null,c(g,u,y,P);case Ii:var R=y._init;return p(u,g,x,R(y._payload),P)}if(ro(y)||Xs(y))return u=u.get(x)||null,d(g,u,y,P,null);da(g,y)}return null}function _(u,g,x,y){for(var P=null,R=null,A=g,T=g=0,E=null;A!==null&&T<x.length;T++){A.index>T?(E=A,A=null):E=A.sibling;var S=h(u,A,x[T],y);if(S===null){A===null&&(A=E);break}t&&A&&S.alternate===null&&e(u,A),g=s(S,g,T),R===null?P=S:R.sibling=S,R=S,A=E}if(T===x.length)return n(u,A),dt&&dr(u,T),P;if(A===null){for(;T<x.length;T++)A=f(u,x[T],y),A!==null&&(g=s(A,g,T),R===null?P=A:R.sibling=A,R=A);return dt&&dr(u,T),P}for(A=i(u,A);T<x.length;T++)E=p(A,u,T,x[T],y),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?T:E.key),g=s(E,g,T),R===null?P=E:R.sibling=E,R=E);return t&&A.forEach(function(b){return e(u,b)}),dt&&dr(u,T),P}function v(u,g,x,y){var P=Xs(x);if(typeof P!="function")throw Error(ie(150));if(x=P.call(x),x==null)throw Error(ie(151));for(var R=P=null,A=g,T=g=0,E=null,S=x.next();A!==null&&!S.done;T++,S=x.next()){A.index>T?(E=A,A=null):E=A.sibling;var b=h(u,A,S.value,y);if(b===null){A===null&&(A=E);break}t&&A&&b.alternate===null&&e(u,A),g=s(b,g,T),R===null?P=b:R.sibling=b,R=b,A=E}if(S.done)return n(u,A),dt&&dr(u,T),P;if(A===null){for(;!S.done;T++,S=x.next())S=f(u,S.value,y),S!==null&&(g=s(S,g,T),R===null?P=S:R.sibling=S,R=S);return dt&&dr(u,T),P}for(A=i(u,A);!S.done;T++,S=x.next())S=p(A,u,T,S.value,y),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?T:S.key),g=s(S,g,T),R===null?P=S:R.sibling=S,R=S);return t&&A.forEach(function(G){return e(u,G)}),dt&&dr(u,T),P}function m(u,g,x,y){if(typeof x=="object"&&x!==null&&x.type===Qr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ea:e:{for(var P=x.key,R=g;R!==null;){if(R.key===P){if(P=x.type,P===Qr){if(R.tag===7){n(u,R.sibling),g=r(R,x.props.children),g.return=u,u=g;break e}}else if(R.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ii&&Xh(P)===R.type){n(u,R.sibling),g=r(R,x.props),g.ref=Ks(u,R,x),g.return=u,u=g;break e}n(u,R);break}else e(u,R);R=R.sibling}x.type===Qr?(g=Er(x.props.children,u.mode,y,x.key),g.return=u,u=g):(y=Ka(x.type,x.key,x.props,null,u.mode,y),y.ref=Ks(u,g,x),y.return=u,u=y)}return o(u);case Zr:e:{for(R=x.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(u,g.sibling),g=r(g,x.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Ac(x,u.mode,y),g.return=u,u=g}return o(u);case Ii:return R=x._init,m(u,g,R(x._payload),y)}if(ro(x))return _(u,g,x,y);if(Xs(x))return v(u,g,x,y);da(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,x),g.return=u,u=g):(n(u,g),g=Tc(x,u.mode,y),g.return=u,u=g),o(u)):n(u,g)}return m}var ws=zg(!0),Hg=zg(!1),_l=tr(null),xl=null,os=null,ff=null;function hf(){ff=os=xl=null}function pf(t){var e=_l.current;ut(_l),t._currentValue=e}function Nu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ms(t,e){xl=t,ff=os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(ff!==t)if(t={context:t,memoizedValue:e,next:null},os===null){if(xl===null)throw Error(ie(308));os=t,xl.dependencies={lanes:0,firstContext:t}}else os=os.next=t;return e}var _r=null;function mf(t){_r===null?_r=[t]:_r.push(t)}function Vg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,mf(e)):(n.next=r.next,r.next=n),e.interleaved=n,xi(t,i)}function xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ni=!1;function gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,xi(t,n)}return r=i.interleaved,r===null?(e.next=e,mf(i)):(e.next=r.next,r.next=e),i.interleaved=e,xi(t,n)}function Wa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ef(t,n)}}function jh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function yl(t,e,n,i){var r=t.updateQueue;Ni=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,v=a;switch(h=e,p=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=pt({},f,h);break e;case 2:Ni=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Cr|=o,t.lanes=o,t.memoizedState=f}}function Yh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var jo={},qn=tr(jo),Uo=tr(jo),Io=tr(jo);function xr(t){if(t===jo)throw Error(ie(174));return t}function vf(t,e){switch(st(Io,e),st(Uo,t),st(qn,jo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mu(e,t)}ut(qn),st(qn,e)}function Ts(){ut(qn),ut(Uo),ut(Io)}function Wg(t){xr(Io.current);var e=xr(qn.current),n=mu(e,t.type);e!==n&&(st(Uo,t),st(qn,n))}function _f(t){Uo.current===t&&(ut(qn),ut(Uo))}var ft=tr(0);function Sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xc=[];function xf(){for(var t=0;t<xc.length;t++)xc[t]._workInProgressVersionPrimary=null;xc.length=0}var Xa=wi.ReactCurrentDispatcher,yc=wi.ReactCurrentBatchConfig,Ar=0,ht=null,wt=null,bt=null,Ml=!1,mo=!1,No=0,Cx=0;function Nt(){throw Error(ie(321))}function yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function Sf(t,e,n,i,r,s){if(Ar=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xa.current=t===null||t.memoizedState===null?Lx:Dx,t=n(i,r),mo){s=0;do{if(mo=!1,No=0,25<=s)throw Error(ie(301));s+=1,bt=wt=null,e.updateQueue=null,Xa.current=Ux,t=n(i,r)}while(mo)}if(Xa.current=El,e=wt!==null&&wt.next!==null,Ar=0,bt=wt=ht=null,Ml=!1,e)throw Error(ie(300));return t}function Mf(){var t=No!==0;return No=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?ht.memoizedState=bt=t:bt=bt.next=t,bt}function Tn(){if(wt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=bt===null?ht.memoizedState:bt.next;if(e!==null)bt=e,wt=t;else{if(t===null)throw Error(ie(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},bt===null?ht.memoizedState=bt=t:bt=bt.next=t}return bt}function Fo(t,e){return typeof e=="function"?e(t):e}function Sc(t){var e=Tn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Ar&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,ht.lanes|=d,Cr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Hn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,Cr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mc(t){var e=Tn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Hn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Xg(){}function jg(t,e){var n=ht,i=Tn(),r=e(),s=!Hn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,Ef(qg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,Oo(9,$g.bind(null,n,i,r,e),void 0,null),Pt===null)throw Error(ie(349));Ar&30||Yg(n,e,r)}return r}function Yg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $g(t,e,n,i){e.value=n,e.getSnapshot=i,Kg(e)&&Zg(t)}function qg(t,e,n){return n(function(){Kg(e)&&Zg(t)})}function Kg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function Zg(t){var e=xi(t,1);e!==null&&Bn(e,t,1,-1)}function $h(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:t},e.queue=t,t=t.dispatch=Px.bind(null,ht,t),[e.memoizedState,t]}function Oo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Qg(){return Tn().memoizedState}function ja(t,e,n,i){var r=Wn();ht.flags|=t,r.memoizedState=Oo(1|e,n,void 0,i===void 0?null:i)}function Bl(t,e,n,i){var r=Tn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&yf(i,o.deps)){r.memoizedState=Oo(e,n,s,i);return}}ht.flags|=t,r.memoizedState=Oo(1|e,n,s,i)}function qh(t,e){return ja(8390656,8,t,e)}function Ef(t,e){return Bl(2048,8,t,e)}function Jg(t,e){return Bl(4,2,t,e)}function ev(t,e){return Bl(4,4,t,e)}function tv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nv(t,e,n){return n=n!=null?n.concat([t]):null,Bl(4,4,tv.bind(null,e,t),n)}function wf(){}function iv(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function rv(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function sv(t,e,n){return Ar&21?(Hn(n,e)||(n=ug(),ht.lanes|=n,Cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function Rx(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=yc.transition;yc.transition={};try{t(!1),e()}finally{Qe=n,yc.transition=i}}function ov(){return Tn().memoizedState}function bx(t,e,n){var i=Yi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},av(t))lv(e,n);else if(n=Vg(t,e,n,i),n!==null){var r=Xt();Bn(n,t,i,r),cv(n,e,i)}}function Px(t,e,n){var i=Yi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(av(t))lv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Hn(a,o)){var l=e.interleaved;l===null?(r.next=r,mf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Vg(t,e,r,i),n!==null&&(r=Xt(),Bn(n,t,i,r),cv(n,e,i))}}function av(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function lv(t,e){mo=Ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ef(t,n)}}var El={readContext:wn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},Lx={readContext:wn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:qh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ja(4194308,4,tv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ja(4194308,4,t,e)},useInsertionEffect:function(t,e){return ja(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Wn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=bx.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:$h,useDebugValue:wf,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=$h(!1),e=t[0];return t=Rx.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=Wn();if(dt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Pt===null)throw Error(ie(349));Ar&30||Yg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,qh(qg.bind(null,i,s,t),[t]),i.flags|=2048,Oo(9,$g.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=Pt.identifierPrefix;if(dt){var n=di,i=ui;n=(i&~(1<<32-kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=No++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Cx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Dx={readContext:wn,useCallback:iv,useContext:wn,useEffect:Ef,useImperativeHandle:nv,useInsertionEffect:Jg,useLayoutEffect:ev,useMemo:rv,useReducer:Sc,useRef:Qg,useState:function(){return Sc(Fo)},useDebugValue:wf,useDeferredValue:function(t){var e=Tn();return sv(e,wt.memoizedState,t)},useTransition:function(){var t=Sc(Fo)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:Xg,useSyncExternalStore:jg,useId:ov,unstable_isNewReconciler:!1},Ux={readContext:wn,useCallback:iv,useContext:wn,useEffect:Ef,useImperativeHandle:nv,useInsertionEffect:Jg,useLayoutEffect:ev,useMemo:rv,useReducer:Mc,useRef:Qg,useState:function(){return Mc(Fo)},useDebugValue:wf,useDeferredValue:function(t){var e=Tn();return wt===null?e.memoizedState=t:sv(e,wt.memoizedState,t)},useTransition:function(){var t=Mc(Fo)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:Xg,useSyncExternalStore:jg,useId:ov,unstable_isNewReconciler:!1};function Dn(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Fu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zl={isMounted:function(t){return(t=t._reactInternals)?Dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Yi(t),s=mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Xi(t,s,r),e!==null&&(Bn(e,t,r,i),Wa(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Yi(t),s=mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xi(t,s,r),e!==null&&(Bn(e,t,r,i),Wa(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=Yi(t),r=mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Xi(t,r,i),e!==null&&(Bn(e,t,i,n),Wa(e,t,i))}};function Kh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!bo(n,i)||!bo(r,s):!0}function uv(t,e,n){var i=!1,r=Qi,s=e.contextType;return typeof s=="object"&&s!==null?s=wn(s):(r=tn(e)?wr:zt.current,i=e.contextTypes,s=(i=i!=null)?Ms(t,r):Qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&zl.enqueueReplaceState(e,e.state,null)}function Ou(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},gf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=wn(s):(s=tn(e)?wr:zt.current,r.context=Ms(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Fu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&zl.enqueueReplaceState(r,r.state,null),yl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e){try{var n="",i=e;do n+=a_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ku(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ix=typeof WeakMap=="function"?WeakMap:Map;function dv(t,e,n){n=mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Tl||(Tl=!0,$u=i),ku(t,e)},n}function fv(t,e,n){n=mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ku(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ku(t,e),typeof i!="function"&&(ji===null?ji=new Set([this]):ji.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ix;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=$x.bind(null,t,e,n),e.then(t,t))}function Jh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ep(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mi(-1,1),e.tag=2,Xi(n,e,1))),n.lanes|=1),t)}var Nx=wi.ReactCurrentOwner,Jt=!1;function Gt(t,e,n,i){e.child=t===null?Hg(e,null,n,i):ws(e,t.child,n,i)}function tp(t,e,n,i,r){n=n.render;var s=e.ref;return ms(e,r),i=Sf(t,e,n,i,s,r),n=Mf(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yi(t,e,r)):(dt&&n&&cf(e),e.flags|=1,Gt(t,e,i,r),e.child)}function np(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Df(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,hv(t,e,s,i,r)):(t=Ka(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:bo,n(o,i)&&t.ref===e.ref)return yi(t,e,r)}return e.flags|=1,t=$i(s,i),t.ref=e.ref,t.return=e,e.child=t}function hv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(bo(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,yi(t,e,r)}return Bu(t,e,n,i,r)}function pv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(ls,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(ls,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(ls,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(ls,cn),cn|=i;return Gt(t,e,r,n),e.child}function mv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bu(t,e,n,i,r){var s=tn(n)?wr:zt.current;return s=Ms(e,s),ms(e,r),n=Sf(t,e,n,i,s,r),i=Mf(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yi(t,e,r)):(dt&&i&&cf(e),e.flags|=1,Gt(t,e,n,r),e.child)}function ip(t,e,n,i,r){if(tn(n)){var s=!0;ml(e)}else s=!1;if(ms(e,r),e.stateNode===null)Ya(t,e),uv(e,n,i),Ou(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=wn(c):(c=tn(n)?wr:zt.current,c=Ms(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Zh(e,o,i,c),Ni=!1;var h=e.memoizedState;o.state=h,yl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||en.current||Ni?(typeof d=="function"&&(Fu(e,n,d,i),l=e.memoizedState),(a=Ni||Kh(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Gg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Dn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=wn(l):(l=tn(n)?wr:zt.current,l=Ms(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Zh(e,o,i,l),Ni=!1,h=e.memoizedState,o.state=h,yl(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||en.current||Ni?(typeof p=="function"&&(Fu(e,n,p,i),_=e.memoizedState),(c=Ni||Kh(e,n,c,i,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return zu(t,e,n,i,s,r)}function zu(t,e,n,i,r,s){mv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Vh(e,n,!1),yi(t,e,s);i=e.stateNode,Nx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ws(e,t.child,null,s),e.child=ws(e,null,a,s)):Gt(t,e,a,s),e.memoizedState=i.state,r&&Vh(e,n,!0),e.child}function gv(t){var e=t.stateNode;e.pendingContext?Hh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hh(t,e.context,!1),vf(t,e.containerInfo)}function rp(t,e,n,i,r){return Es(),df(r),e.flags|=256,Gt(t,e,n,i),e.child}var Hu={dehydrated:null,treeContext:null,retryLane:0};function Vu(t){return{baseLanes:t,cachePool:null,transitions:null}}function vv(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(ft,r&1),t===null)return Iu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gl(o,i,0,null),t=Er(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vu(n),e.memoizedState=Hu,t):Tf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Fx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=$i(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=$i(a,s):(s=Er(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Vu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Hu,i}return s=t.child,t=s.sibling,i=$i(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Tf(t,e){return e=Gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fa(t,e,n,i){return i!==null&&df(i),ws(e,t.child,null,n),t=Tf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Fx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ec(Error(ie(422))),fa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Gl({mode:"visible",children:i.children},r,0,null),s=Er(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ws(e,t.child,null,o),e.child.memoizedState=Vu(o),e.memoizedState=Hu,s);if(!(e.mode&1))return fa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=Ec(s,i,void 0),fa(t,e,o,i)}if(a=(o&t.childLanes)!==0,Jt||a){if(i=Pt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,xi(t,r),Bn(i,t,r,-1))}return Lf(),i=Ec(Error(ie(421))),fa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=qx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,un=Wi(r.nextSibling),dn=e,dt=!0,In=null,t!==null&&(_n[xn++]=ui,_n[xn++]=di,_n[xn++]=Tr,ui=t.id,di=t.overflow,Tr=e),e=Tf(e,i.children),e.flags|=4096,e)}function sp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Nu(t.return,e,n)}function wc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function _v(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Gt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sp(t,n,e);else if(t.tag===19)sp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Sl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),wc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Sl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}wc(e,!0,n,null,s);break;case"together":wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ya(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=$i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ox(t,e,n){switch(e.tag){case 3:gv(e),Es();break;case 5:Wg(e);break;case 1:tn(e.type)&&ml(e);break;case 4:vf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(_l,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?vv(t,e,n):(st(ft,ft.current&1),t=yi(t,e,n),t!==null?t.sibling:null);st(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return _v(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,pv(t,e,n)}return yi(t,e,n)}var xv,Gu,yv,Sv;xv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gu=function(){};yv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,xr(qn.current);var s=null;switch(n){case"input":r=du(t,r),i=du(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=pu(t,r),i=pu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=hl)}gu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ct("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Sv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Zs(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function kx(t,e,n){var i=e.pendingProps;switch(uf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return tn(e.type)&&pl(),Ft(e),null;case 3:return i=e.stateNode,Ts(),ut(en),ut(zt),xf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ua(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(Zu(In),In=null))),Gu(t,e),Ft(e),null;case 5:_f(e);var r=xr(Io.current);if(n=e.type,t!==null&&e.stateNode!=null)yv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Ft(e),null}if(t=xr(qn.current),ua(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[jn]=e,i[Do]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<oo.length;r++)ct(oo[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":ph(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":gh(i,s),ct("invalid",i)}gu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ca(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ca(i.textContent,a,t),r=["children",""+a]):Mo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ct("scroll",i)}switch(n){case"input":ta(i),mh(i,s,!0);break;case"textarea":ta(i),vh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=hl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[jn]=e,t[Do]=i,xv(t,e,!1,!1),e.stateNode=t;e:{switch(o=vu(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<oo.length;r++)ct(oo[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":ph(t,i),r=du(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),ct("invalid",t);break;case"textarea":gh(t,i),r=pu(t,i),ct("invalid",t);break;default:r=i}gu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Qm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Km(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Eo(t,l):typeof l=="number"&&Eo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Mo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",t):l!=null&&$d(t,s,l,o))}switch(n){case"input":ta(t),mh(t,i,!1);break;case"textarea":ta(t),vh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Zi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=hl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)Sv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=xr(Io.current),xr(qn.current),ua(e)){if(i=e.stateNode,n=e.memoizedProps,i[jn]=e,(s=i.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:ca(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ca(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[jn]=e,e.stateNode=i}return Ft(e),null;case 13:if(ut(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&un!==null&&e.mode&1&&!(e.flags&128))Bg(),Es(),e.flags|=98560,s=!1;else if(s=ua(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[jn]=e}else Es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else In!==null&&(Zu(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?Tt===0&&(Tt=3):Lf())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return Ts(),Gu(t,e),t===null&&Po(e.stateNode.containerInfo),Ft(e),null;case 10:return pf(e.type._context),Ft(e),null;case 17:return tn(e.type)&&pl(),Ft(e),null;case 19:if(ut(ft),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Zs(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Sl(t),o!==null){for(e.flags|=128,Zs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>Cs&&(e.flags|=128,i=!0,Zs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Sl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!dt)return Ft(e),null}else 2*_t()-s.renderingStartTime>Cs&&n!==1073741824&&(e.flags|=128,i=!0,Zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=ft.current,st(ft,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return Pf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function Bx(t,e){switch(uf(e),e.tag){case 1:return tn(e.type)&&pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ts(),ut(en),ut(zt),xf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _f(e),null;case 13:if(ut(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(ft),null;case 4:return Ts(),null;case 10:return pf(e.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var ha=!1,Bt=!1,zx=typeof WeakSet=="function"?WeakSet:Set,me=null;function as(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function Wu(t,e,n){try{n()}catch(i){vt(t,e,i)}}var op=!1;function Hx(t,e){if(Cu=ul,t=Ag(),lf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ru={focusedElem:t,selectionRange:n},ul=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,m=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?v:Dn(e.type,v),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(y){vt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return _=op,op=!1,_}function go(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Wu(e,n,s)}r=r.next}while(r!==i)}}function Hl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Xu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Mv(t){var e=t.alternate;e!==null&&(t.alternate=null,Mv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jn],delete e[Do],delete e[Lu],delete e[Ex],delete e[wx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ev(t){return t.tag===5||t.tag===3||t.tag===4}function ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ev(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ju(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hl));else if(i!==4&&(t=t.child,t!==null))for(ju(t,e,n),t=t.sibling;t!==null;)ju(t,e,n),t=t.sibling}function Yu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Yu(t,e,n),t=t.sibling;t!==null;)Yu(t,e,n),t=t.sibling}var Lt=null,Un=!1;function Ci(t,e,n){for(n=n.child;n!==null;)wv(t,e,n),n=n.sibling}function wv(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Ul,n)}catch{}switch(n.tag){case 5:Bt||as(n,e);case 6:var i=Lt,r=Un;Lt=null,Ci(t,e,n),Lt=i,Un=r,Lt!==null&&(Un?(t=Lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Lt.removeChild(n.stateNode));break;case 18:Lt!==null&&(Un?(t=Lt,n=n.stateNode,t.nodeType===8?vc(t.parentNode,n):t.nodeType===1&&vc(t,n),Co(t)):vc(Lt,n.stateNode));break;case 4:i=Lt,r=Un,Lt=n.stateNode.containerInfo,Un=!0,Ci(t,e,n),Lt=i,Un=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Wu(n,e,o),r=r.next}while(r!==i)}Ci(t,e,n);break;case 1:if(!Bt&&(as(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Ci(t,e,n);break;case 21:Ci(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,Ci(t,e,n),Bt=i):Ci(t,e,n);break;default:Ci(t,e,n)}}function lp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zx),e.forEach(function(i){var r=Kx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Rn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Lt=a.stateNode,Un=!1;break e;case 3:Lt=a.stateNode.containerInfo,Un=!0;break e;case 4:Lt=a.stateNode.containerInfo,Un=!0;break e}a=a.return}if(Lt===null)throw Error(ie(160));wv(s,o,r),Lt=null,Un=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tv(e,t),e=e.sibling}function Tv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rn(e,t),Gn(t),i&4){try{go(3,t,t.return),Hl(3,t)}catch(v){vt(t,t.return,v)}try{go(5,t,t.return)}catch(v){vt(t,t.return,v)}}break;case 1:Rn(e,t),Gn(t),i&512&&n!==null&&as(n,n.return);break;case 5:if(Rn(e,t),Gn(t),i&512&&n!==null&&as(n,n.return),t.flags&32){var r=t.stateNode;try{Eo(r,"")}catch(v){vt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ym(r,s),vu(a,o);var c=vu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Qm(r,f):d==="dangerouslySetInnerHTML"?Km(r,f):d==="children"?Eo(r,f):$d(r,d,f,c)}switch(a){case"input":fu(r,s);break;case"textarea":$m(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ds(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?ds(r,!!s.multiple,s.defaultValue,!0):ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[Do]=s}catch(v){vt(t,t.return,v)}}break;case 6:if(Rn(e,t),Gn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){vt(t,t.return,v)}}break;case 3:if(Rn(e,t),Gn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Co(e.containerInfo)}catch(v){vt(t,t.return,v)}break;case 4:Rn(e,t),Gn(t);break;case 13:Rn(e,t),Gn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Rf=_t())),i&4&&lp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(c=Bt)||d,Rn(e,t),Bt=c):Rn(e,t),Gn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(me=t,d=t.child;d!==null;){for(f=me=d;me!==null;){switch(h=me,p=h.child,h.tag){case 0:case 11:case 14:case 15:go(4,h,h.return);break;case 1:as(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){vt(i,n,v)}}break;case 5:as(h,h.return);break;case 22:if(h.memoizedState!==null){up(f);continue}}p!==null?(p.return=h,me=p):up(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Zm("display",o))}catch(v){vt(t,t.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){vt(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Rn(e,t),Gn(t),i&4&&lp(t);break;case 21:break;default:Rn(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ev(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Eo(r,""),i.flags&=-33);var s=ap(t);Yu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=ap(t);ju(t,a,o);break;default:throw Error(ie(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Vx(t,e,n){me=t,Av(t)}function Av(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ha;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Bt;a=ha;var c=Bt;if(ha=o,(Bt=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?dp(r):l!==null?(l.return=o,me=l):dp(r);for(;s!==null;)me=s,Av(s),s=s.sibling;me=r,ha=a,Bt=c}cp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):cp(t)}}function cp(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||Hl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Dn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Yh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Yh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Co(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Bt||e.flags&512&&Xu(e)}catch(h){vt(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function up(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function dp(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hl(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{Xu(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{Xu(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var Gx=Math.ceil,wl=wi.ReactCurrentDispatcher,Af=wi.ReactCurrentOwner,En=wi.ReactCurrentBatchConfig,je=0,Pt=null,Et=null,Dt=0,cn=0,ls=tr(0),Tt=0,ko=null,Cr=0,Vl=0,Cf=0,vo=null,Zt=null,Rf=0,Cs=1/0,ai=null,Tl=!1,$u=null,ji=null,pa=!1,zi=null,Al=0,_o=0,qu=null,$a=-1,qa=0;function Xt(){return je&6?_t():$a!==-1?$a:$a=_t()}function Yi(t){return t.mode&1?je&2&&Dt!==0?Dt&-Dt:Ax.transition!==null?(qa===0&&(qa=ug()),qa):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:vg(t.type)),t):1}function Bn(t,e,n,i){if(50<_o)throw _o=0,qu=null,Error(ie(185));Go(t,n,i),(!(je&2)||t!==Pt)&&(t===Pt&&(!(je&2)&&(Vl|=n),Tt===4&&Oi(t,Dt)),nn(t,i),n===1&&je===0&&!(e.mode&1)&&(Cs=_t()+500,kl&&nr()))}function nn(t,e){var n=t.callbackNode;A_(t,e);var i=cl(t,t===Pt?Dt:0);if(i===0)n!==null&&yh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&yh(n),e===1)t.tag===0?Tx(fp.bind(null,t)):Fg(fp.bind(null,t)),Sx(function(){!(je&6)&&nr()}),n=null;else{switch(dg(i)){case 1:n=Jd;break;case 4:n=lg;break;case 16:n=ll;break;case 536870912:n=cg;break;default:n=ll}n=Iv(n,Cv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cv(t,e){if($a=-1,qa=0,je&6)throw Error(ie(327));var n=t.callbackNode;if(gs()&&t.callbackNode!==n)return null;var i=cl(t,t===Pt?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Cl(t,i);else{e=i;var r=je;je|=2;var s=bv();(Pt!==t||Dt!==e)&&(ai=null,Cs=_t()+500,Mr(t,e));do try{jx();break}catch(a){Rv(t,a)}while(!0);hf(),wl.current=s,je=r,Et!==null?e=0:(Pt=null,Dt=0,e=Tt)}if(e!==0){if(e===2&&(r=Mu(t),r!==0&&(i=r,e=Ku(t,r))),e===1)throw n=ko,Mr(t,0),Oi(t,i),nn(t,_t()),n;if(e===6)Oi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Wx(r)&&(e=Cl(t,i),e===2&&(s=Mu(t),s!==0&&(i=s,e=Ku(t,s))),e===1))throw n=ko,Mr(t,0),Oi(t,i),nn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:fr(t,Zt,ai);break;case 3:if(Oi(t,i),(i&130023424)===i&&(e=Rf+500-_t(),10<e)){if(cl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Pu(fr.bind(null,t,Zt,ai),e);break}fr(t,Zt,ai);break;case 4:if(Oi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-kn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Gx(i/1960))-i,10<i){t.timeoutHandle=Pu(fr.bind(null,t,Zt,ai),i);break}fr(t,Zt,ai);break;case 5:fr(t,Zt,ai);break;default:throw Error(ie(329))}}}return nn(t,_t()),t.callbackNode===n?Cv.bind(null,t):null}function Ku(t,e){var n=vo;return t.current.memoizedState.isDehydrated&&(Mr(t,e).flags|=256),t=Cl(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&Zu(e)),t}function Zu(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function Wx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Hn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Oi(t,e){for(e&=~Cf,e&=~Vl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kn(e),i=1<<n;t[n]=-1,e&=~i}}function fp(t){if(je&6)throw Error(ie(327));gs();var e=cl(t,0);if(!(e&1))return nn(t,_t()),null;var n=Cl(t,e);if(t.tag!==0&&n===2){var i=Mu(t);i!==0&&(e=i,n=Ku(t,i))}if(n===1)throw n=ko,Mr(t,0),Oi(t,e),nn(t,_t()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fr(t,Zt,ai),nn(t,_t()),null}function bf(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(Cs=_t()+500,kl&&nr())}}function Rr(t){zi!==null&&zi.tag===0&&!(je&6)&&gs();var e=je;je|=1;var n=En.transition,i=Qe;try{if(En.transition=null,Qe=1,t)return t()}finally{Qe=i,En.transition=n,je=e,!(je&6)&&nr()}}function Pf(){cn=ls.current,ut(ls)}function Mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yx(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(uf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&pl();break;case 3:Ts(),ut(en),ut(zt),xf();break;case 5:_f(i);break;case 4:Ts();break;case 13:ut(ft);break;case 19:ut(ft);break;case 10:pf(i.type._context);break;case 22:case 23:Pf()}n=n.return}if(Pt=t,Et=t=$i(t.current,null),Dt=cn=e,Tt=0,ko=null,Cf=Vl=Cr=0,Zt=vo=null,_r!==null){for(e=0;e<_r.length;e++)if(n=_r[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}_r=null}return t}function Rv(t,e){do{var n=Et;try{if(hf(),Xa.current=El,Ml){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ml=!1}if(Ar=0,bt=wt=ht=null,mo=!1,No=0,Af.current=null,n===null||n.return===null){Tt=1,ko=e,Et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Jh(o);if(p!==null){p.flags&=-257,ep(p,o,a,s,e),p.mode&1&&Qh(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){Qh(s,c,e),Lf();break e}l=Error(ie(426))}}else if(dt&&a.mode&1){var m=Jh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),ep(m,o,a,s,e),df(As(l,a));break e}}s=l=As(l,a),Tt!==4&&(Tt=2),vo===null?vo=[s]:vo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=dv(s,l,e);jh(s,u);break e;case 1:a=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ji===null||!ji.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=fv(s,a,e);jh(s,y);break e}}s=s.return}while(s!==null)}Lv(n)}catch(P){e=P,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function bv(){var t=wl.current;return wl.current=El,t===null?El:t}function Lf(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Pt===null||!(Cr&268435455)&&!(Vl&268435455)||Oi(Pt,Dt)}function Cl(t,e){var n=je;je|=2;var i=bv();(Pt!==t||Dt!==e)&&(ai=null,Mr(t,e));do try{Xx();break}catch(r){Rv(t,r)}while(!0);if(hf(),je=n,wl.current=i,Et!==null)throw Error(ie(261));return Pt=null,Dt=0,Tt}function Xx(){for(;Et!==null;)Pv(Et)}function jx(){for(;Et!==null&&!v_();)Pv(Et)}function Pv(t){var e=Uv(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?Lv(t):Et=e,Af.current=null}function Lv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Bx(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,Et=null;return}}else if(n=kx(n,e,cn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);Tt===0&&(Tt=5)}function fr(t,e,n){var i=Qe,r=En.transition;try{En.transition=null,Qe=1,Yx(t,e,n,i)}finally{En.transition=r,Qe=i}return null}function Yx(t,e,n,i){do gs();while(zi!==null);if(je&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(C_(t,s),t===Pt&&(Et=Pt=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pa||(pa=!0,Iv(ll,function(){return gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=En.transition,En.transition=null;var o=Qe;Qe=1;var a=je;je|=4,Af.current=null,Hx(t,n),Tv(n,t),hx(Ru),ul=!!Cu,Ru=Cu=null,t.current=n,Vx(n),__(),je=a,Qe=o,En.transition=s}else t.current=n;if(pa&&(pa=!1,zi=t,Al=r),s=t.pendingLanes,s===0&&(ji=null),S_(n.stateNode),nn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Tl)throw Tl=!1,t=$u,$u=null,t;return Al&1&&t.tag!==0&&gs(),s=t.pendingLanes,s&1?t===qu?_o++:(_o=0,qu=t):_o=0,nr(),null}function gs(){if(zi!==null){var t=dg(Al),e=En.transition,n=Qe;try{if(En.transition=null,Qe=16>t?16:t,zi===null)var i=!1;else{if(t=zi,zi=null,Al=0,je&6)throw Error(ie(331));var r=je;for(je|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var d=me;switch(d.tag){case 0:case 11:case 15:go(8,d,s)}var f=d.child;if(f!==null)f.return=d,me=f;else for(;me!==null;){d=me;var h=d.sibling,p=d.return;if(Mv(d),d===c){me=null;break}if(h!==null){h.return=p,me=h;break}me=p}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:go(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,me=u;break e}me=s.return}}var g=t.current;for(me=g;me!==null;){o=me;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,me=x;else e:for(o=g;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hl(9,a)}}catch(P){vt(a,a.return,P)}if(a===o){me=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,me=y;break e}me=a.return}}if(je=r,nr(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Ul,t)}catch{}i=!0}return i}finally{Qe=n,En.transition=e}}return!1}function hp(t,e,n){e=As(n,e),e=dv(t,e,1),t=Xi(t,e,1),e=Xt(),t!==null&&(Go(t,1,e),nn(t,e))}function vt(t,e,n){if(t.tag===3)hp(t,t,n);else for(;e!==null;){if(e.tag===3){hp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ji===null||!ji.has(i))){t=As(n,t),t=fv(e,t,1),e=Xi(e,t,1),t=Xt(),e!==null&&(Go(e,1,t),nn(e,t));break}}e=e.return}}function $x(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,Pt===t&&(Dt&n)===n&&(Tt===4||Tt===3&&(Dt&130023424)===Dt&&500>_t()-Rf?Mr(t,0):Cf|=n),nn(t,e)}function Dv(t,e){e===0&&(t.mode&1?(e=ra,ra<<=1,!(ra&130023424)&&(ra=4194304)):e=1);var n=Xt();t=xi(t,e),t!==null&&(Go(t,e,n),nn(t,n))}function qx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Dv(t,n)}function Kx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Dv(t,n)}var Uv;Uv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,Ox(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,dt&&e.flags&1048576&&Og(e,vl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ya(t,e),t=e.pendingProps;var r=Ms(e,zt.current);ms(e,n),r=Sf(null,e,i,t,r,n);var s=Mf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,ml(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gf(e),r.updater=zl,e.stateNode=r,r._reactInternals=e,Ou(e,i,t,n),e=zu(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&cf(e),Gt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ya(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Qx(i),t=Dn(i,t),r){case 0:e=Bu(null,e,i,t,n);break e;case 1:e=ip(null,e,i,t,n);break e;case 11:e=tp(null,e,i,t,n);break e;case 14:e=np(null,e,i,Dn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Bu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),ip(t,e,i,r,n);case 3:e:{if(gv(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Gg(t,e),yl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=As(Error(ie(423)),e),e=rp(t,e,i,n,r);break e}else if(i!==r){r=As(Error(ie(424)),e),e=rp(t,e,i,n,r);break e}else for(un=Wi(e.stateNode.containerInfo.firstChild),dn=e,dt=!0,In=null,n=Hg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Es(),i===r){e=yi(t,e,n);break e}Gt(t,e,i,n)}e=e.child}return e;case 5:return Wg(e),t===null&&Iu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,bu(i,r)?o=null:s!==null&&bu(i,s)&&(e.flags|=32),mv(t,e),Gt(t,e,o,n),e.child;case 6:return t===null&&Iu(e),null;case 13:return vv(t,e,n);case 4:return vf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ws(e,null,i,n):Gt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),tp(t,e,i,r,n);case 7:return Gt(t,e,e.pendingProps,n),e.child;case 8:return Gt(t,e,e.pendingProps.children,n),e.child;case 12:return Gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(_l,i._currentValue),i._currentValue=o,s!==null)if(Hn(s.value,o)){if(s.children===r.children&&!en.current){e=yi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=mi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Gt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ms(e,n),r=wn(r),i=i(r),e.flags|=1,Gt(t,e,i,n),e.child;case 14:return i=e.type,r=Dn(i,e.pendingProps),r=Dn(i.type,r),np(t,e,i,r,n);case 15:return hv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Ya(t,e),e.tag=1,tn(i)?(t=!0,ml(e)):t=!1,ms(e,n),uv(e,i,r),Ou(e,i,r,n),zu(null,e,i,!0,t,n);case 19:return _v(t,e,n);case 22:return pv(t,e,n)}throw Error(ie(156,e.tag))};function Iv(t,e){return ag(t,e)}function Zx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,i){return new Zx(t,e,n,i)}function Df(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qx(t){if(typeof t=="function")return Df(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kd)return 11;if(t===Zd)return 14}return 2}function $i(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ka(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Df(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qr:return Er(n.children,r,s,e);case qd:o=8,r|=8;break;case au:return t=Sn(12,n,e,r|2),t.elementType=au,t.lanes=s,t;case lu:return t=Sn(13,n,e,r),t.elementType=lu,t.lanes=s,t;case cu:return t=Sn(19,n,e,r),t.elementType=cu,t.lanes=s,t;case Wm:return Gl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vm:o=10;break e;case Gm:o=9;break e;case Kd:o=11;break e;case Zd:o=14;break e;case Ii:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Sn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Er(t,e,n,i){return t=Sn(7,t,i,e),t.lanes=n,t}function Gl(t,e,n,i){return t=Sn(22,t,i,e),t.elementType=Wm,t.lanes=n,t.stateNode={isHidden:!1},t}function Tc(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function Ac(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Jx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oc(0),this.expirationTimes=oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Uf(t,e,n,i,r,s,o,a,l){return t=new Jx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gf(s),t}function ey(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Nv(t){if(!t)return Qi;t=t._reactInternals;e:{if(Dr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(tn(n))return Ng(t,n,e)}return e}function Fv(t,e,n,i,r,s,o,a,l){return t=Uf(n,i,!0,t,r,s,o,a,l),t.context=Nv(null),n=t.current,i=Xt(),r=Yi(n),s=mi(i,r),s.callback=e??null,Xi(n,s,r),t.current.lanes=r,Go(t,r,i),nn(t,i),t}function Wl(t,e,n,i){var r=e.current,s=Xt(),o=Yi(r);return n=Nv(n),e.context===null?e.context=n:e.pendingContext=n,e=mi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Xi(r,e,o),t!==null&&(Bn(t,r,o,s),Wa(t,r,o)),o}function Rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function If(t,e){pp(t,e),(t=t.alternate)&&pp(t,e)}function ty(){return null}var Ov=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nf(t){this._internalRoot=t}Xl.prototype.render=Nf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Wl(t,e,null,null)};Xl.prototype.unmount=Nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){Wl(null,t,null,null)}),e[_i]=null}};function Xl(t){this._internalRoot=t}Xl.prototype.unstable_scheduleHydration=function(t){if(t){var e=pg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fi.length&&e!==0&&e<Fi[n].priority;n++);Fi.splice(n,0,t),n===0&&gg(t)}};function Ff(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mp(){}function ny(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Rl(o);s.call(c)}}var o=Fv(e,i,t,0,null,!1,!1,"",mp);return t._reactRootContainer=o,t[_i]=o.current,Po(t.nodeType===8?t.parentNode:t),Rr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Rl(l);a.call(c)}}var l=Uf(t,0,!1,null,null,!1,!1,"",mp);return t._reactRootContainer=l,t[_i]=l.current,Po(t.nodeType===8?t.parentNode:t),Rr(function(){Wl(e,l,n,i)}),l}function Yl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Rl(o);a.call(l)}}Wl(e,o,t,r)}else o=ny(n,e,t,r,i);return Rl(o)}fg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=so(e.pendingLanes);n!==0&&(ef(e,n|1),nn(e,_t()),!(je&6)&&(Cs=_t()+500,nr()))}break;case 13:Rr(function(){var i=xi(t,1);if(i!==null){var r=Xt();Bn(i,t,1,r)}}),If(t,1)}};tf=function(t){if(t.tag===13){var e=xi(t,134217728);if(e!==null){var n=Xt();Bn(e,t,134217728,n)}If(t,134217728)}};hg=function(t){if(t.tag===13){var e=Yi(t),n=xi(t,e);if(n!==null){var i=Xt();Bn(n,t,e,i)}If(t,e)}};pg=function(){return Qe};mg=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};xu=function(t,e,n){switch(e){case"input":if(fu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ol(i);if(!r)throw Error(ie(90));jm(i),fu(i,r)}}}break;case"textarea":$m(t,n);break;case"select":e=n.value,e!=null&&ds(t,!!n.multiple,e,!1)}};tg=bf;ng=Rr;var iy={usingClientEntryPoint:!1,Events:[Xo,ns,Ol,Jm,eg,bf]},Qs={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ry={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sg(t),t===null?null:t.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||ty,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{Ul=ma.inject(ry),$n=ma}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iy;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ff(e))throw Error(ie(200));return ey(t,e,null,n)};pn.createRoot=function(t,e){if(!Ff(t))throw Error(ie(299));var n=!1,i="",r=Ov;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Uf(t,1,!1,null,null,n,!1,i,r),t[_i]=e.current,Po(t.nodeType===8?t.parentNode:t),new Nf(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=sg(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return Rr(t)};pn.hydrate=function(t,e,n){if(!jl(e))throw Error(ie(200));return Yl(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!Ff(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Ov;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Fv(e,null,t,1,n??null,r,!1,s,o),t[_i]=e.current,Po(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Xl(e)};pn.render=function(t,e,n){if(!jl(e))throw Error(ie(200));return Yl(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!jl(t))throw Error(ie(40));return t._reactRootContainer?(Rr(function(){Yl(null,null,t,!1,function(){t._reactRootContainer=null,t[_i]=null})}),!0):!1};pn.unstable_batchedUpdates=bf;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!jl(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Yl(t,e,n,!1,i)};pn.version="18.3.1-next-f1338f8080-20240426";function kv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kv)}catch(t){console.error(t)}}kv(),km.exports=pn;var sy=km.exports,gp=sy;su.createRoot=gp.createRoot,su.hydrateRoot=gp.hydrateRoot;/*! Capacitor: https://capacitorjs.com/ - MIT License */const oy=t=>{const e=new Map;e.set("web",{name:"web"});const n=t.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},i=(s,o)=>{n.platforms.set(s,o)},r=s=>{n.platforms.has(s)&&(n.currentPlatform=n.platforms.get(s))};return n.addPlatform=i,n.setPlatform=r,n},ay=t=>t.CapacitorPlatforms=oy(t),Bv=ay(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});Bv.addPlatform;Bv.setPlatform;var Rs;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(Rs||(Rs={}));class Cc extends Error{constructor(e,n,i){super(e),this.message=e,this.code=n,this.data=i}}const ly=t=>{var e,n;return t!=null&&t.androidBridge?"android":!((n=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},cy=t=>{var e,n,i,r,s;const o=t.CapacitorCustomPlatform||null,a=t.Capacitor||{},l=a.Plugins=a.Plugins||{},c=t.CapacitorPlatforms,d=()=>o!==null?o.name:ly(t),f=((e=c==null?void 0:c.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||d,h=()=>f()!=="web",p=((n=c==null?void 0:c.currentPlatform)===null||n===void 0?void 0:n.isNativePlatform)||h,_=A=>{const T=y.get(A);return!!(T!=null&&T.platforms.has(f())||u(A))},v=((i=c==null?void 0:c.currentPlatform)===null||i===void 0?void 0:i.isPluginAvailable)||_,m=A=>{var T;return(T=a.PluginHeaders)===null||T===void 0?void 0:T.find(E=>E.name===A)},u=((r=c==null?void 0:c.currentPlatform)===null||r===void 0?void 0:r.getPluginHeader)||m,g=A=>t.console.error(A),x=(A,T,E)=>Promise.reject(`${E} does not have an implementation of "${T}".`),y=new Map,P=(A,T={})=>{const E=y.get(A);if(E)return console.warn(`Capacitor plugin "${A}" already registered. Cannot register plugins twice.`),E.proxy;const S=f(),b=u(A);let G;const O=async()=>(!G&&S in T?G=typeof T[S]=="function"?G=await T[S]():G=T[S]:o!==null&&!G&&"web"in T&&(G=typeof T.web=="function"?G=await T.web():G=T.web),G),$=(W,ne)=>{var le,be;if(b){const j=b==null?void 0:b.methods.find(Y=>ne===Y.name);if(j)return j.rtype==="promise"?Y=>a.nativePromise(A,ne.toString(),Y):(Y,ae)=>a.nativeCallback(A,ne.toString(),Y,ae);if(W)return(le=W[ne])===null||le===void 0?void 0:le.bind(W)}else{if(W)return(be=W[ne])===null||be===void 0?void 0:be.bind(W);throw new Cc(`"${A}" plugin is not implemented on ${S}`,Rs.Unimplemented)}},Q=W=>{let ne;const le=(...be)=>{const j=O().then(Y=>{const ae=$(Y,W);if(ae){const se=ae(...be);return ne=se==null?void 0:se.remove,se}else throw new Cc(`"${A}.${W}()" is not implemented on ${S}`,Rs.Unimplemented)});return W==="addListener"&&(j.remove=async()=>ne()),j};return le.toString=()=>`${W.toString()}() { [capacitor code] }`,Object.defineProperty(le,"name",{value:W,writable:!1,configurable:!1}),le},q=Q("addListener"),k=Q("removeListener"),L=(W,ne)=>{const le=q({eventName:W},ne),be=async()=>{const Y=await le;k({eventName:W,callbackId:Y},ne)},j=new Promise(Y=>le.then(()=>Y({remove:be})));return j.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await be()},j},X=new Proxy({},{get(W,ne){switch(ne){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return b?L:q;case"removeListener":return k;default:return Q(ne)}}});return l[A]=X,y.set(A,{name:A,proxy:X,platforms:new Set([...Object.keys(T),...b?[S]:[]])}),X},R=((s=c==null?void 0:c.currentPlatform)===null||s===void 0?void 0:s.registerPlugin)||P;return a.convertFileSrc||(a.convertFileSrc=A=>A),a.getPlatform=f,a.handleError=g,a.isNativePlatform=p,a.isPluginAvailable=v,a.pluginMethodNoop=x,a.registerPlugin=R,a.Exception=Cc,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a.platform=a.getPlatform(),a.isNative=a.isNativePlatform(),a},uy=t=>t.Capacitor=cy(t),Qn=uy(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),$l=Qn.registerPlugin;Qn.Plugins;class zv{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,n){let i=!1;this.listeners[e]||(this.listeners[e]=[],i=!0),this.listeners[e].push(n);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),i&&this.sendRetainedArgumentsForEvent(e);const o=async()=>this.removeListener(e,n);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n,i){const r=this.listeners[e];if(!r){if(i){let s=this.retainedEventArguments[e];s||(s=[]),s.push(n),this.retainedEventArguments[e]=s}return}r.forEach(s=>s(n))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:i=>{this.notifyListeners(n,i)}}}unimplemented(e="not implemented"){return new Qn.Exception(e,Rs.Unimplemented)}unavailable(e="not available"){return new Qn.Exception(e,Rs.Unavailable)}async removeListener(e,n){const i=this.listeners[e];if(!i)return;const r=i.indexOf(n);this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const n=this.retainedEventArguments[e];n&&(delete this.retainedEventArguments[e],n.forEach(i=>{this.notifyListeners(e,i)}))}}const vp=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),_p=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class dy extends zv{async getCookies(){const e=document.cookie,n={};return e.split(";").forEach(i=>{if(i.length<=0)return;let[r,s]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");r=_p(r).trim(),s=_p(s).trim(),n[r]=s}),n}async setCookie(e){try{const n=vp(e.key),i=vp(e.value),r=`; expires=${(e.expires||"").replace("expires=","")}`,s=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${i||""}${r}; path=${s}; ${o};`}catch(n){return Promise.reject(n)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}$l("CapacitorCookies",{web:()=>new dy});const fy=async t=>new Promise((e,n)=>{const i=new FileReader;i.onload=()=>{const r=i.result;e(r.indexOf(",")>=0?r.split(",")[1]:r)},i.onerror=r=>n(r),i.readAsDataURL(t)}),hy=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(r=>r.toLocaleLowerCase()).reduce((r,s,o)=>(r[s]=t[e[o]],r),{})},py=(t,e=!0)=>t?Object.entries(t).reduce((i,r)=>{const[s,o]=r;let a,l;return Array.isArray(o)?(l="",o.forEach(c=>{a=e?encodeURIComponent(c):c,l+=`${s}=${a}&`}),l.slice(0,-1)):(a=e?encodeURIComponent(o):o,l=`${s}=${a}`),`${i}&${l}`},"").substr(1):null,my=(t,e={})=>{const n=Object.assign({method:t.method||"GET",headers:t.headers},e),r=hy(t.headers)["content-type"]||"";if(typeof t.data=="string")n.body=t.data;else if(r.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[o,a]of Object.entries(t.data||{}))s.set(o,a);n.body=s.toString()}else if(r.includes("multipart/form-data")||t.data instanceof FormData){const s=new FormData;if(t.data instanceof FormData)t.data.forEach((a,l)=>{s.append(l,a)});else for(const a of Object.keys(t.data))s.append(a,t.data[a]);n.body=s;const o=new Headers(n.headers);o.delete("content-type"),n.headers=o}else(r.includes("application/json")||typeof t.data=="object")&&(n.body=JSON.stringify(t.data));return n};class gy extends zv{async request(e){const n=my(e,e.webFetchExtra),i=py(e.params,e.shouldEncodeUrlParams),r=i?`${e.url}?${i}`:e.url,s=await fetch(r,n),o=s.headers.get("content-type")||"";let{responseType:a="text"}=s.ok?e:{};o.includes("application/json")&&(a="json");let l,c;switch(a){case"arraybuffer":case"blob":c=await s.blob(),l=await fy(c);break;case"json":l=await s.json();break;case"document":case"text":default:l=await s.text()}const d={};return s.headers.forEach((f,h)=>{d[h]=f}),{data:l,headers:d,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}$l("CapacitorHttp",{web:()=>new gy});/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hv=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=Ce.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>Ce.createElement("svg",{ref:l,..._y,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Hv("lucide",r),...a},[...o.map(([c,d])=>Ce.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=(t,e)=>{const n=Ce.forwardRef(({className:i,...r},s)=>Ce.createElement(xy,{ref:s,iconNode:e,className:Hv(`lucide-${vy(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=mt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=mt("BatteryCharging",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=mt("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=mt("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=mt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=mt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=mt("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=mt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=mt("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=mt("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=mt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=mt("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=mt("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=mt("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=mt("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=mt("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=mt("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=mt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=mt("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=mt("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=mt("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=mt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=mt("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]),Rc={id:"harbourside-penthouse-plymouth",title:"The Harbourside Penthouse",address:"Sutton Harbour, Plymouth PL4 0DX, UK",agencyName:"Mo360 Immersive Studio",agentName:"Mohamed Elwakil",agentPhone:"+44 1752 000 360",createdAt:"2026-11-15T06:00:00.000Z",updatedAt:"2026-11-15T06:30:00.000Z",rooms:[{id:"living-room",name:"Living Room",panoPreviewUrl:"panoramas/living-room.jpg",panoHighResUrl:"panoramas/living-room.jpg",initialYaw:0,floorplanCoords:{x:28,y:56},dimensions:"8.0m × 6.4m",synced:!0,hotspots:[{id:"hs-lr-to-kitchen",targetRoomId:"kitchen",yaw:52,pitch:-5,label:"Kitchen & Island"},{id:"hs-lr-to-bedroom",targetRoomId:"master-bedroom",yaw:-58,pitch:-5,label:"Master Bedroom"}]},{id:"kitchen",name:"Kitchen",panoPreviewUrl:"panoramas/kitchen.jpg",panoHighResUrl:"panoramas/kitchen.jpg",initialYaw:15,floorplanCoords:{x:72,y:56},dimensions:"6.6m × 5.8m",synced:!0,hotspots:[{id:"hs-k-to-lr",targetRoomId:"living-room",yaw:-125,pitch:-5,label:"Living Room"},{id:"hs-k-to-bedroom",targetRoomId:"master-bedroom",yaw:-165,pitch:-5,label:"Master Bedroom"}]},{id:"master-bedroom",name:"Master Bedroom",panoPreviewUrl:"panoramas/master-bedroom.jpg",panoHighResUrl:"panoramas/master-bedroom.jpg",initialYaw:0,floorplanCoords:{x:50,y:24},dimensions:"6.8m × 6.0m",synced:!0,hotspots:[{id:"hs-mb-to-lr",targetRoomId:"living-room",yaw:135,pitch:-5,label:"Living Room"},{id:"hs-mb-to-kitchen",targetRoomId:"kitchen",yaw:-140,pitch:-5,label:"Kitchen & Island"}]}]};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Of="170",By=0,yp=1,zy=2,Xv=1,Hy=2,oi=3,Si=0,rn=1,ci=2,qi=0,vs=1,Sp=2,Mp=3,Ep=4,Vy=5,mr=100,Gy=101,Wy=102,Xy=103,jy=104,Yy=200,$y=201,qy=202,Ky=203,Qu=204,Ju=205,Zy=206,Qy=207,Jy=208,eS=209,tS=210,nS=211,iS=212,rS=213,sS=214,ed=0,td=1,nd=2,bs=3,id=4,rd=5,sd=6,od=7,jv=0,oS=1,aS=2,Ki=0,lS=1,cS=2,uS=3,dS=4,fS=5,hS=6,pS=7,Yv=300,Ps=301,Ls=302,ad=303,ld=304,ql=306,cd=1e3,yr=1001,ud=1002,zn=1003,mS=1004,ga=1005,Mn=1006,bc=1007,Sr=1008,Mi=1009,$v=1010,qv=1011,Bo=1012,kf=1013,br=1014,fi=1015,Yo=1016,Bf=1017,zf=1018,Ds=1020,Kv=35902,Zv=1021,Qv=1022,On=1023,Jv=1024,e0=1025,_s=1026,Us=1027,t0=1028,Hf=1029,n0=1030,Vf=1031,Gf=1033,Za=33776,Qa=33777,Ja=33778,el=33779,dd=35840,fd=35841,hd=35842,pd=35843,md=36196,gd=37492,vd=37496,_d=37808,xd=37809,yd=37810,Sd=37811,Md=37812,Ed=37813,wd=37814,Td=37815,Ad=37816,Cd=37817,Rd=37818,bd=37819,Pd=37820,Ld=37821,tl=36492,Dd=36494,Ud=36495,i0=36283,Id=36284,Nd=36285,Fd=36286,gS=3200,vS=3201,_S=0,xS=1,ki="",Kt="srgb",Bs="srgb-linear",Kl="linear",Je="srgb",Nr=7680,wp=519,yS=512,SS=513,MS=514,r0=515,ES=516,wS=517,TS=518,AS=519,Tp=35044,Ap="300 es",hi=2e3,bl=2001;class zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cp=1234567;const xo=Math.PI/180,zo=180/Math.PI;function Hs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Wt(t,e,n){return Math.max(e,Math.min(n,t))}function Wf(t,e){return(t%e+e)%e}function CS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function RS(t,e,n){return t!==e?(n-t)/(e-t):0}function yo(t,e,n){return(1-n)*t+n*e}function bS(t,e,n,i){return yo(t,e,1-Math.exp(-n*i))}function PS(t,e=1){return e-Math.abs(Wf(t,e*2)-e)}function LS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function DS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function US(t,e){return t+Math.floor(Math.random()*(e-t+1))}function IS(t,e){return t+Math.random()*(e-t)}function NS(t){return t*(.5-Math.random())}function FS(t){t!==void 0&&(Cp=t);let e=Cp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function OS(t){return t*xo}function kS(t){return t*zo}function BS(t){return(t&t-1)===0&&t!==0}function zS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function HS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function VS(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),d=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*d,l*f,l*h,a*c);break;case"YZY":t.set(l*h,a*d,l*f,a*c);break;case"ZXZ":t.set(l*f,l*h,a*d,a*c);break;case"XZX":t.set(a*d,l*_,l*p,a*c);break;case"YXY":t.set(l*p,a*d,l*_,a*c);break;case"ZYZ":t.set(l*_,l*p,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ht(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Nn={DEG2RAD:xo,RAD2DEG:zo,generateUUID:Hs,clamp:Wt,euclideanModulo:Wf,mapLinear:CS,inverseLerp:RS,lerp:yo,damp:bS,pingpong:PS,smoothstep:LS,smootherstep:DS,randInt:US,randFloat:IS,randFloatSpread:NS,seededRandom:FS,degToRad:OS,radToDeg:kS,isPowerOfTwo:BS,ceilPowerOfTwo:zS,floorPowerOfTwo:HS,setQuaternionFromProperEuler:VS,normalize:Ht,denormalize:qr};class tt{constructor(e=0,n=0){tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,n,i,r,s,o,a,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],p=i[5],_=i[8],v=r[0],m=r[3],u=r[6],g=r[1],x=r[4],y=r[7],P=r[2],R=r[5],A=r[8];return s[0]=o*v+a*g+l*P,s[3]=o*m+a*x+l*R,s[6]=o*u+a*y+l*A,s[1]=c*v+d*g+f*P,s[4]=c*m+d*x+f*R,s[7]=c*u+d*y+f*A,s[2]=h*v+p*g+_*P,s[5]=h*m+p*x+_*R,s[8]=h*u+p*y+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,p=c*s-o*l,_=n*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*c-d*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(d*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Pc.makeScale(e,n)),this}rotate(e){return this.premultiply(Pc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Pc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pc=new Ne;function s0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ho(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function GS(){const t=Ho("canvas");return t.style.display="block",t}const Rp={};function ao(t){t in Rp||(Rp[t]=!0,console.warn(t))}function WS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function XS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function jS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xe={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Je&&(t.r=gi(t.r),t.g=gi(t.g),t.b=gi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Je&&(t.r=xs(t.r),t.g=xs(t.g),t.b=xs(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===ki?Kl:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function gi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function xs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const bp=[.64,.33,.3,.6,.15,.06],Pp=[.2126,.7152,.0722],Lp=[.3127,.329],Dp=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Up=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xe.define({[Bs]:{primaries:bp,whitePoint:Lp,transfer:Kl,toXYZ:Dp,fromXYZ:Up,luminanceCoefficients:Pp,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:bp,whitePoint:Lp,transfer:Je,toXYZ:Dp,fromXYZ:Up,luminanceCoefficients:Pp,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}});let Fr;class YS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fr===void 0&&(Fr=Ho("canvas")),Fr.width=e.width,Fr.height=e.height;const i=Fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ho("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=gi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(gi(n[i]/255)*255):n[i]=gi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $S=0;class o0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Hs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Lc(r[o].image)):s.push(Lc(r[o]))}else s=Lc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Lc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?YS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qS=0;class jt extends zs{constructor(e=jt.DEFAULT_IMAGE,n=jt.DEFAULT_MAPPING,i=yr,r=yr,s=Mn,o=Sr,a=On,l=Mi,c=jt.DEFAULT_ANISOTROPY,d=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=Hs(),this.name="",this.source=new o0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cd:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case ud:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cd:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case ud:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Yv;jt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,n=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],_=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(p+1)/2,P=(u+1)/2,R=(d+h)/4,A=(f+v)/4,T=(_+m)/4;return x>y&&x>P?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=R/i,s=A/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=T/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=A/s,r=T/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(h-d)*(h-d));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(f-v)/g,this.z=(h-d)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KS extends zs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new xt(0,0,e,n),this.scissorTest=!1,this.viewport=new xt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new o0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends KS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class a0 extends jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZS extends jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $o{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=v;return}if(f!==v||l!==h||c!==p||d!==_){let m=1-a;const u=l*h+c*p+d*_+f*v,g=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const P=Math.sqrt(x),R=Math.atan2(P,u*g);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}const y=a*g;if(l=l*m+h*y,c=c*m+p*y,d=d*m+_*y,f=f*m+v*y,m===1-a){const P=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=P,c*=P,d*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+d*f+l*p-c*h,e[n+1]=l*_+d*h+c*f-a*p,e[n+2]=c*_+d*p+a*h-l*f,e[n+3]=d*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f-h*p*_;break;case"YXZ":this._x=h*d*f+c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f+h*p*_;break;case"ZXY":this._x=h*d*f-c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f-h*p*_;break;case"ZYX":this._x=h*d*f-c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f+h*p*_;break;case"YZX":this._x=h*d*f+c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f-h*p*_;break;case"XZY":this._x=h*d*f-c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ip.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ip.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dc=new H,Ip=new $o;class qo{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(s,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),va.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),va.copy(i.boundingBox)),va.applyMatrix4(e.matrixWorld),this.union(va)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),_a.subVectors(this.max,Js),Or.subVectors(e.a,Js),kr.subVectors(e.b,Js),Br.subVectors(e.c,Js),Ri.subVectors(kr,Or),bi.subVectors(Br,kr),sr.subVectors(Or,Br);let n=[0,-Ri.z,Ri.y,0,-bi.z,bi.y,0,-sr.z,sr.y,Ri.z,0,-Ri.x,bi.z,0,-bi.x,sr.z,0,-sr.x,-Ri.y,Ri.x,0,-bi.y,bi.x,0,-sr.y,sr.x,0];return!Uc(n,Or,kr,Br,_a)||(n=[1,0,0,0,1,0,0,0,1],!Uc(n,Or,kr,Br,_a))?!1:(xa.crossVectors(Ri,bi),n=[xa.x,xa.y,xa.z],Uc(n,Or,kr,Br,_a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new H,new H,new H,new H,new H,new H,new H,new H],bn=new H,va=new qo,Or=new H,kr=new H,Br=new H,Ri=new H,bi=new H,sr=new H,Js=new H,_a=new H,xa=new H,or=new H;function Uc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){or.fromArray(t,s);const a=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),c=n.dot(or),d=i.dot(or);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const QS=new qo,eo=new H,Ic=new H;class Xf{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):QS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const n=eo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(eo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(Ic)),this.expandByPoint(eo.copy(e.center).sub(Ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new H,Nc=new H,ya=new H,Pi=new H,Fc=new H,Sa=new H,Oc=new H;class l0{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,n),ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Nc.copy(e).add(n).multiplyScalar(.5),ya.copy(n).sub(e).normalize(),Pi.copy(this.origin).sub(Nc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ya),a=Pi.dot(this.direction),l=-Pi.dot(ya),c=Pi.lengthSq(),d=Math.abs(1-o*o);let f,h,p,_;if(d>0)if(f=o*l-a,h=o*a-l,_=s*d,f>=0)if(h>=-_)if(h<=_){const v=1/d;f*=v,h*=v,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Nc).addScaledVector(ya,h),p}intersectSphere(e,n){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,n,i,r,s){Fc.subVectors(n,e),Sa.subVectors(i,e),Oc.crossVectors(Fc,Sa);let o=this.direction.dot(Oc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);const l=a*this.direction.dot(Sa.crossVectors(Pi,Sa));if(l<0)return null;const c=a*this.direction.dot(Fc.cross(Pi));if(c<0||l+c>o)return null;const d=-a*Pi.dot(Oc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,i,r,s,o,a,l,c,d,f,h,p,_,v,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,p,_,v,m)}set(e,n,i,r,s,o,a,l,c,d,f,h,p,_,v,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=_,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/zr.setFromMatrixColumn(e,0).length(),s=1/zr.setFromMatrixColumn(e,1).length(),o=1/zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,p=o*f,_=a*d,v=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=h-v*c,n[9]=-a*l,n[2]=v-h*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,_=c*d,v=c*f;n[0]=h+v*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=p*a-_,n[6]=v+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,_=c*d,v=c*f;n[0]=h-v*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*d,n[9]=v-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,p=o*f,_=a*d,v=a*f;n[0]=l*d,n[4]=_*c-p,n[8]=h*c+v,n[1]=l*f,n[5]=v*c+h,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,v=a*c;n[0]=l*d,n[4]=v-h*f,n[8]=_*f+p,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*f+_,n[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,v=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+v,n[5]=o*d,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*d,n[10]=v*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(JS,e,eM)}lookAt(e,n,i){const r=this.elements;return an.subVectors(e,n),an.lengthSq()===0&&(an.z=1),an.normalize(),Li.crossVectors(i,an),Li.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Li.crossVectors(i,an)),Li.normalize(),Ma.crossVectors(an,Li),r[0]=Li.x,r[4]=Ma.x,r[8]=an.x,r[1]=Li.y,r[5]=Ma.y,r[9]=an.y,r[2]=Li.z,r[6]=Ma.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],p=i[13],_=i[2],v=i[6],m=i[10],u=i[14],g=i[3],x=i[7],y=i[11],P=i[15],R=r[0],A=r[4],T=r[8],E=r[12],S=r[1],b=r[5],G=r[9],O=r[13],$=r[2],Q=r[6],q=r[10],k=r[14],L=r[3],X=r[7],W=r[11],ne=r[15];return s[0]=o*R+a*S+l*$+c*L,s[4]=o*A+a*b+l*Q+c*X,s[8]=o*T+a*G+l*q+c*W,s[12]=o*E+a*O+l*k+c*ne,s[1]=d*R+f*S+h*$+p*L,s[5]=d*A+f*b+h*Q+p*X,s[9]=d*T+f*G+h*q+p*W,s[13]=d*E+f*O+h*k+p*ne,s[2]=_*R+v*S+m*$+u*L,s[6]=_*A+v*b+m*Q+u*X,s[10]=_*T+v*G+m*q+u*W,s[14]=_*E+v*O+m*k+u*ne,s[3]=g*R+x*S+y*$+P*L,s[7]=g*A+x*b+y*Q+P*X,s[11]=g*T+x*G+y*q+P*W,s[15]=g*E+x*O+y*k+P*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],_=e[3],v=e[7],m=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+v*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*d-s*l*d)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],_=e[12],v=e[13],m=e[14],u=e[15],g=f*m*c-v*h*c+v*l*p-a*m*p-f*l*u+a*h*u,x=_*h*c-d*m*c-_*l*p+o*m*p+d*l*u-o*h*u,y=d*v*c-_*f*c+_*a*p-o*v*p-d*a*u+o*f*u,P=_*f*l-d*v*l-_*a*h+o*v*h+d*a*m-o*f*m,R=n*g+i*x+r*y+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=g*A,e[1]=(v*h*s-f*m*s-v*r*p+i*m*p+f*r*u-i*h*u)*A,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*u+i*l*u)*A,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*A,e[4]=x*A,e[5]=(d*m*s-_*h*s+_*r*p-n*m*p-d*r*u+n*h*u)*A,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*u-n*l*u)*A,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*p+n*l*p)*A,e[8]=y*A,e[9]=(_*f*s-d*v*s-_*i*p+n*v*p+d*i*u-n*f*u)*A,e[10]=(o*v*s-_*a*s+_*i*c-n*v*c-o*i*u+n*a*u)*A,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*p-n*a*p)*A,e[12]=P*A,e[13]=(d*v*r-_*f*r+_*i*h-n*v*h-d*i*m+n*f*m)*A,e[14]=(_*a*r-o*v*r-_*i*l+n*v*l+o*i*m-n*a*m)*A,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,p=s*d,_=s*f,v=o*d,m=o*f,u=a*f,g=l*c,x=l*d,y=l*f,P=i.x,R=i.y,A=i.z;return r[0]=(1-(v+u))*P,r[1]=(p+y)*P,r[2]=(_-x)*P,r[3]=0,r[4]=(p-y)*R,r[5]=(1-(h+u))*R,r[6]=(m+g)*R,r[7]=0,r[8]=(_+x)*A,r[9]=(m-g)*A,r[10]=(1-(h+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=zr.set(r[0],r[1],r[2]).length();const o=zr.set(r[4],r[5],r[6]).length(),a=zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);const c=1/s,d=1/o,f=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=d,Pn.elements[5]*=d,Pn.elements[6]*=d,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,n.setFromRotationMatrix(Pn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=hi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,_;if(a===hi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===bl)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=hi){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*d;let _,v;if(a===hi)_=(o+s)*f,v=-2*f;else if(a===bl)_=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const zr=new H,Pn=new yt,JS=new H(0,0,0),eM=new H(1,1,1),Li=new H,Ma=new H,an=new H,Np=new yt,Fp=new $o;class Ei{constructor(e=0,n=0,i=0,r=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Np.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Np,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fp.setFromEuler(this),this.setFromQuaternion(Fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class jf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tM=0;const Op=new H,Hr=new $o,ii=new yt,Ea=new H,to=new H,nM=new H,iM=new $o,kp=new H(1,0,0),Bp=new H(0,1,0),zp=new H(0,0,1),Hp={type:"added"},rM={type:"removed"},Vr={type:"childadded",child:null},kc={type:"childremoved",child:null};class fn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new H,n=new Ei,i=new $o,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ne}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(kp,e)}rotateY(e){return this.rotateOnAxis(Bp,e)}rotateZ(e){return this.rotateOnAxis(zp,e)}translateOnAxis(e,n){return Op.copy(e).applyQuaternion(this.quaternion),this.position.add(Op.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(kp,e)}translateY(e){return this.translateOnAxis(Bp,e)}translateZ(e){return this.translateOnAxis(zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ea.copy(e):Ea.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(to,Ea,this.up):ii.lookAt(Ea,to,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(ii),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hp),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(rM),kc.child=e,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hp),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,e,nM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,iM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}fn.DEFAULT_UP=new H(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new H,ri=new H,Bc=new H,si=new H,Gr=new H,Wr=new H,Vp=new H,zc=new H,Hc=new H,Vc=new H,Gc=new xt,Wc=new xt,Xc=new xt;class Fn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ln.subVectors(e,n),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ln.subVectors(r,n),ri.subVectors(i,n),Bc.subVectors(e,n);const o=Ln.dot(Ln),a=Ln.dot(ri),l=Ln.dot(Bc),c=ri.dot(ri),d=ri.dot(Bc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*d)*h,_=(o*d-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Gc.setScalar(0),Wc.setScalar(0),Xc.setScalar(0),Gc.fromBufferAttribute(e,n),Wc.fromBufferAttribute(e,i),Xc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Gc,s.x),o.addScaledVector(Wc,s.y),o.addScaledVector(Xc,s.z),o}static isFrontFacing(e,n,i,r){return Ln.subVectors(i,n),ri.subVectors(e,n),Ln.cross(ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Ln.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Fn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Fn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Gr.subVectors(r,i),Wr.subVectors(s,i),zc.subVectors(e,i);const l=Gr.dot(zc),c=Wr.dot(zc);if(l<=0&&c<=0)return n.copy(i);Hc.subVectors(e,r);const d=Gr.dot(Hc),f=Wr.dot(Hc);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Gr,o);Vc.subVectors(e,s);const p=Gr.dot(Vc),_=Wr.dot(Vc);if(_>=0&&p<=_)return n.copy(s);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Wr,a);const m=d*_-p*f;if(m<=0&&f-d>=0&&p-_>=0)return Vp.subVectors(s,r),a=(f-d)/(f-d+(p-_)),n.copy(r).addScaledVector(Vp,a);const u=1/(m+v+h);return o=v*u,a=h*u,n.copy(i).addScaledVector(Gr,o).addScaledVector(Wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const c0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},wa={h:0,s:0,l:0};function jc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Xe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Xe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Xe.workingColorSpace){if(e=Wf(e,1),n=Wt(n,0,1),i=Wt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=jc(o,s,e+1/3),this.g=jc(o,s,e),this.b=jc(o,s,e-1/3)}return Xe.toWorkingColorSpace(this,r),this}setStyle(e,n=Kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kt){const i=c0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Xe.fromWorkingColorSpace(kt.copy(this),e),Math.round(Wt(kt.r*255,0,255))*65536+Math.round(Wt(kt.g*255,0,255))*256+Math.round(Wt(kt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xe.workingColorSpace){Xe.fromWorkingColorSpace(kt.copy(this),n);const i=kt.r,r=kt.g,s=kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(kt.copy(this),n),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Kt){Xe.fromWorkingColorSpace(kt.copy(this),e);const n=kt.r,i=kt.g,r=kt.b;return e!==Kt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+n,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Di),e.getHSL(wa);const i=yo(Di.h,wa.h,n),r=yo(Di.s,wa.s,n),s=yo(Di.l,wa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new et;et.NAMES=c0;let sM=0;class Zl extends zs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Hs(),this.name="",this.blending=vs,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qu,this.blendDst=Ju,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==Si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qu&&(i.blendSrc=this.blendSrc),this.blendDst!==Ju&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yf extends Zl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=jv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new H,Ta=new tt;class Kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Tp,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ta.fromBufferAttribute(this,n),Ta.applyMatrix3(e),this.setXY(n,Ta.x,Ta.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),i=Ht(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Ht(n,this.array),i=Ht(i,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tp&&(e.usage=this.usage),e}}class u0 extends Kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class d0 extends Kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Zn extends Kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let oM=0;const vn=new yt,Yc=new fn,Xr=new H,ln=new qo,no=new qo,Rt=new H;class ir extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(s0(e)?d0:u0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,n,i){return vn.makeTranslation(e,n,i),this.applyMatrix4(vn),this}scale(e,n,i){return vn.makeScale(e,n,i),this.applyMatrix4(vn),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zn(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];no.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(ln.min,no.min),ln.expandByPoint(Rt),Rt.addVectors(ln.max,no.max),ln.expandByPoint(Rt)):(ln.expandByPoint(no.min),ln.expandByPoint(no.max))}ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Rt.fromBufferAttribute(a,c),l&&(Xr.fromBufferAttribute(e,c),Rt.add(Xr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<i.count;T++)a[T]=new H,l[T]=new H;const c=new H,d=new H,f=new H,h=new tt,p=new tt,_=new tt,v=new H,m=new H;function u(T,E,S){c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,T),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,S),d.sub(c),f.sub(c),p.sub(h),_.sub(h);const b=1/(p.x*_.y-_.x*p.y);isFinite(b)&&(v.copy(d).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(b),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(b),a[T].add(v),a[E].add(v),a[S].add(v),l[T].add(m),l[E].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let T=0,E=g.length;T<E;++T){const S=g[T],b=S.start,G=S.count;for(let O=b,$=b+G;O<$;O+=3)u(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new H,y=new H,P=new H,R=new H;function A(T){P.fromBufferAttribute(r,T),R.copy(P);const E=a[T];x.copy(E),x.sub(P.multiplyScalar(P.dot(E))).normalize(),y.crossVectors(R,E);const b=y.dot(l[T])<0?-1:1;o.setXYZW(T,x.x,x.y,x.z,b)}for(let T=0,E=g.length;T<E;++T){const S=g[T],b=S.start,G=S.count;for(let O=b,$=b+G;O<$;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,d=new H,f=new H;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*d;for(let u=0;u<d;u++)h[_++]=c[p++]}return new Kn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ir,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gp=new yt,ar=new l0,Aa=new Xf,Wp=new H,Ca=new H,Ra=new H,ba=new H,$c=new H,Pa=new H,Xp=new H,La=new H;class Yn extends fn{constructor(e=new ir,n=new Yf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Pa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&($c.fromBufferAttribute(f,e),o?Pa.addScaledVector($c,d):Pa.addScaledVector($c.sub(n),d))}n.add(Pa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(Aa.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Aa,Wp)===null||ar.origin.distanceToSquared(Wp)>(e.far-e.near)**2))&&(Gp.copy(s).invert(),ar.copy(e.ray).applyMatrix4(Gp),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],u=o[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,P=x;y<P;y+=3){const R=a.getX(y),A=a.getX(y+1),T=a.getX(y+2);r=Da(this,u,e,i,c,d,f,R,A,T),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,u=v;m<u;m+=3){const g=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=Da(this,o,e,i,c,d,f,g,x,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],u=o[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,P=x;y<P;y+=3){const R=y,A=y+1,T=y+2;r=Da(this,u,e,i,c,d,f,R,A,T),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,u=v;m<u;m+=3){const g=m,x=m+1,y=m+2;r=Da(this,o,e,i,c,d,f,g,x,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function aM(t,e,n,i,r,s,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Si,a),l===null)return null;La.copy(a),La.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(La);return c<n.near||c>n.far?null:{distance:c,point:La.clone(),object:t}}function Da(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ca),t.getVertexPosition(l,Ra),t.getVertexPosition(c,ba);const d=aM(t,e,n,i,Ca,Ra,ba,Xp);if(d){const f=new H;Fn.getBarycoord(Xp,Ca,Ra,ba,f),r&&(d.uv=Fn.getInterpolatedAttribute(r,a,l,c,f,new tt)),s&&(d.uv1=Fn.getInterpolatedAttribute(s,a,l,c,f,new tt)),o&&(d.normal=Fn.getInterpolatedAttribute(o,a,l,c,f,new H),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new H,materialIndex:0};Fn.getNormal(Ca,Ra,ba,h.normal),d.face=h,d.barycoord=f}return d}class Ko extends ir{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Zn(c,3)),this.setAttribute("normal",new Zn(d,3)),this.setAttribute("uv",new Zn(f,2));function _(v,m,u,g,x,y,P,R,A,T,E){const S=y/A,b=P/T,G=y/2,O=P/2,$=R/2,Q=A+1,q=T+1;let k=0,L=0;const X=new H;for(let W=0;W<q;W++){const ne=W*b-O;for(let le=0;le<Q;le++){const be=le*S-G;X[v]=be*g,X[m]=ne*x,X[u]=$,c.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[u]=R>0?1:-1,d.push(X.x,X.y,X.z),f.push(le/A),f.push(1-W/T),k+=1}}for(let W=0;W<T;W++)for(let ne=0;ne<A;ne++){const le=h+ne+Q*W,be=h+ne+Q*(W+1),j=h+(ne+1)+Q*(W+1),Y=h+(ne+1)+Q*W;l.push(le,be,Y),l.push(be,j,Y),L+=6}a.addGroup(p,L,E),p+=L,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Vt(t){const e={};for(let n=0;n<t.length;n++){const i=Is(t[n]);for(const r in i)e[r]=i[r]}return e}function lM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function f0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const cM={clone:Is,merge:Vt};var uM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Zl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uM,this.fragmentShader=dM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=lM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class h0 extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new H,jp=new tt,Yp=new tt;class yn extends h0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,n){return this.getViewBounds(e,jp,Yp),n.subVectors(Yp,jp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(xo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const jr=-90,Yr=1;class fM extends fn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(jr,Yr,e,n);r.layers=this.layers,this.add(r);const s=new yn(jr,Yr,e,n);s.layers=this.layers,this.add(s);const o=new yn(jr,Yr,e,n);o.layers=this.layers,this.add(o);const a=new yn(jr,Yr,e,n);a.layers=this.layers,this.add(a);const l=new yn(jr,Yr,e,n);l.layers=this.layers,this.add(l);const c=new yn(jr,Yr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class p0 extends jt{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Ps,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hM extends Pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new p0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ko(5,5,5),s=new Ji({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:qi});s.uniforms.tEquirect.value=n;const o=new Yn(r,s),a=n.minFilter;return n.minFilter===Sr&&(n.minFilter=Mn),new fM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const qc=new H,pM=new H,mM=new Ne;class hr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=qc.subVectors(i,n).cross(pM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(qc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||mM.getNormalMatrix(e),r=this.coplanarPoint(qc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Xf,Ua=new H;class m0{constructor(e=new hr,n=new hr,i=new hr,r=new hr,s=new hr,o=new hr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],p=r[8],_=r[9],v=r[10],m=r[11],u=r[12],g=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-p,y-u).normalize(),i[1].setComponents(l+s,h+c,m+p,y+u).normalize(),i[2].setComponents(l+o,h+d,m+_,y+g).normalize(),i[3].setComponents(l-o,h-d,m-_,y-g).normalize(),i[4].setComponents(l-a,h-f,m-v,y-x).normalize(),n===hi)i[5].setComponents(l+a,h+f,m+v,y+x).normalize();else if(n===bl)i[5].setComponents(a,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ua.x=r.normal.x>0?e.max.x:e.min.x,Ua.y=r.normal.y>0?e.max.y:e.min.y,Ua.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function g0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function gM(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,f[h]=v)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];t.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Ql extends ir{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,p=[],_=[],v=[],m=[];for(let u=0;u<d;u++){const g=u*h-o;for(let x=0;x<c;x++){const y=x*f-s;_.push(y,-g,0),v.push(0,0,1),m.push(x/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const x=g+c*u,y=g+c*(u+1),P=g+1+c*(u+1),R=g+1+c*u;p.push(x,y,R),p.push(y,P,R)}this.setIndex(p),this.setAttribute("position",new Zn(_,3)),this.setAttribute("normal",new Zn(v,3)),this.setAttribute("uv",new Zn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.width,e.height,e.widthSegments,e.heightSegments)}}var vM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_M=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,EM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,AM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,PM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,LM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,HM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,VM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,GM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YM="gl_FragColor = linearToOutputTexel( gl_FragColor );",$M=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,KM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,QM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_E=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ME=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,AE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,UE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,NE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$E=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,JE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,e1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,t1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,n1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,r1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,o1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,u1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,d1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,m1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,E1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,w1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,T1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,L1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,N1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,O1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,k1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,H1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,X1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:vM,alphahash_pars_fragment:_M,alphamap_fragment:xM,alphamap_pars_fragment:yM,alphatest_fragment:SM,alphatest_pars_fragment:MM,aomap_fragment:EM,aomap_pars_fragment:wM,batching_pars_vertex:TM,batching_vertex:AM,begin_vertex:CM,beginnormal_vertex:RM,bsdfs:bM,iridescence_fragment:PM,bumpmap_pars_fragment:LM,clipping_planes_fragment:DM,clipping_planes_pars_fragment:UM,clipping_planes_pars_vertex:IM,clipping_planes_vertex:NM,color_fragment:FM,color_pars_fragment:OM,color_pars_vertex:kM,color_vertex:BM,common:zM,cube_uv_reflection_fragment:HM,defaultnormal_vertex:VM,displacementmap_pars_vertex:GM,displacementmap_vertex:WM,emissivemap_fragment:XM,emissivemap_pars_fragment:jM,colorspace_fragment:YM,colorspace_pars_fragment:$M,envmap_fragment:qM,envmap_common_pars_fragment:KM,envmap_pars_fragment:ZM,envmap_pars_vertex:QM,envmap_physical_pars_fragment:cE,envmap_vertex:JM,fog_vertex:eE,fog_pars_vertex:tE,fog_fragment:nE,fog_pars_fragment:iE,gradientmap_pars_fragment:rE,lightmap_pars_fragment:sE,lights_lambert_fragment:oE,lights_lambert_pars_fragment:aE,lights_pars_begin:lE,lights_toon_fragment:uE,lights_toon_pars_fragment:dE,lights_phong_fragment:fE,lights_phong_pars_fragment:hE,lights_physical_fragment:pE,lights_physical_pars_fragment:mE,lights_fragment_begin:gE,lights_fragment_maps:vE,lights_fragment_end:_E,logdepthbuf_fragment:xE,logdepthbuf_pars_fragment:yE,logdepthbuf_pars_vertex:SE,logdepthbuf_vertex:ME,map_fragment:EE,map_pars_fragment:wE,map_particle_fragment:TE,map_particle_pars_fragment:AE,metalnessmap_fragment:CE,metalnessmap_pars_fragment:RE,morphinstance_vertex:bE,morphcolor_vertex:PE,morphnormal_vertex:LE,morphtarget_pars_vertex:DE,morphtarget_vertex:UE,normal_fragment_begin:IE,normal_fragment_maps:NE,normal_pars_fragment:FE,normal_pars_vertex:OE,normal_vertex:kE,normalmap_pars_fragment:BE,clearcoat_normal_fragment_begin:zE,clearcoat_normal_fragment_maps:HE,clearcoat_pars_fragment:VE,iridescence_pars_fragment:GE,opaque_fragment:WE,packing:XE,premultiplied_alpha_fragment:jE,project_vertex:YE,dithering_fragment:$E,dithering_pars_fragment:qE,roughnessmap_fragment:KE,roughnessmap_pars_fragment:ZE,shadowmap_pars_fragment:QE,shadowmap_pars_vertex:JE,shadowmap_vertex:e1,shadowmask_pars_fragment:t1,skinbase_vertex:n1,skinning_pars_vertex:i1,skinning_vertex:r1,skinnormal_vertex:s1,specularmap_fragment:o1,specularmap_pars_fragment:a1,tonemapping_fragment:l1,tonemapping_pars_fragment:c1,transmission_fragment:u1,transmission_pars_fragment:d1,uv_pars_fragment:f1,uv_pars_vertex:h1,uv_vertex:p1,worldpos_vertex:m1,background_vert:g1,background_frag:v1,backgroundCube_vert:_1,backgroundCube_frag:x1,cube_vert:y1,cube_frag:S1,depth_vert:M1,depth_frag:E1,distanceRGBA_vert:w1,distanceRGBA_frag:T1,equirect_vert:A1,equirect_frag:C1,linedashed_vert:R1,linedashed_frag:b1,meshbasic_vert:P1,meshbasic_frag:L1,meshlambert_vert:D1,meshlambert_frag:U1,meshmatcap_vert:I1,meshmatcap_frag:N1,meshnormal_vert:F1,meshnormal_frag:O1,meshphong_vert:k1,meshphong_frag:B1,meshphysical_vert:z1,meshphysical_frag:H1,meshtoon_vert:V1,meshtoon_frag:G1,points_vert:W1,points_frag:X1,shadow_vert:j1,shadow_frag:Y1,sprite_vert:$1,sprite_frag:q1},ce={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Xn={basic:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new et(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Vt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Vt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new et(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Vt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Vt([ce.points,ce.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Vt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Vt([ce.common,ce.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Vt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Vt([ce.sprite,ce.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Vt([ce.common,ce.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Vt([ce.lights,ce.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Xn.physical={uniforms:Vt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Ia={r:0,b:0,g:0},cr=new Ei,K1=new yt;function Z1(t,e,n,i,r,s,o){const a=new et(0);let l=s===!0?0:1,c,d,f=null,h=0,p=null;function _(g){let x=g.isScene===!0?g.background:null;return x&&x.isTexture&&(x=(g.backgroundBlurriness>0?n:e).get(x)),x}function v(g){let x=!1;const y=_(g);y===null?u(a,l):y&&y.isColor&&(u(y,1),x=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,x){const y=_(x);y&&(y.isCubeTexture||y.mapping===ql)?(d===void 0&&(d=new Yn(new Ko(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Is(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),cr.copy(x.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(K1.makeRotationFromEuler(cr)),d.material.toneMapped=Xe.getTransfer(y.colorSpace)!==Je,(f!==y||h!==y.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=y,h=y.version,p=t.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Yn(new Ql(2,2),new Ji({name:"BackgroundMaterial",uniforms:Is(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(y.colorSpace)!==Je,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,x){g.getRGB(Ia,f0(t)),i.buffers.color.setClear(Ia.r,Ia.g,Ia.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(g,x=1){a.set(g),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(a,l)},render:v,addToRenderList:m}}function Q1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,b,G,O,$){let Q=!1;const q=f(O,G,b);s!==q&&(s=q,c(s.object)),Q=p(S,O,G,$),Q&&_(S,O,G,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,y(S,b,G,O),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function f(S,b,G){const O=G.wireframe===!0;let $=i[S.id];$===void 0&&($={},i[S.id]=$);let Q=$[b.id];Q===void 0&&(Q={},$[b.id]=Q);let q=Q[O];return q===void 0&&(q=h(l()),Q[O]=q),q}function h(S){const b=[],G=[],O=[];for(let $=0;$<n;$++)b[$]=0,G[$]=0,O[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:G,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,b,G,O){const $=s.attributes,Q=b.attributes;let q=0;const k=G.getAttributes();for(const L in k)if(k[L].location>=0){const W=$[L];let ne=Q[L];if(ne===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),W===void 0||W.attribute!==ne||ne&&W.data!==ne.data)return!0;q++}return s.attributesNum!==q||s.index!==O}function _(S,b,G,O){const $={},Q=b.attributes;let q=0;const k=G.getAttributes();for(const L in k)if(k[L].location>=0){let W=Q[L];W===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(W=S.instanceColor));const ne={};ne.attribute=W,W&&W.data&&(ne.data=W.data),$[L]=ne,q++}s.attributes=$,s.attributesNum=q,s.index=O}function v(){const S=s.newAttributes;for(let b=0,G=S.length;b<G;b++)S[b]=0}function m(S){u(S,0)}function u(S,b){const G=s.newAttributes,O=s.enabledAttributes,$=s.attributeDivisors;G[S]=1,O[S]===0&&(t.enableVertexAttribArray(S),O[S]=1),$[S]!==b&&(t.vertexAttribDivisor(S,b),$[S]=b)}function g(){const S=s.newAttributes,b=s.enabledAttributes;for(let G=0,O=b.length;G<O;G++)b[G]!==S[G]&&(t.disableVertexAttribArray(G),b[G]=0)}function x(S,b,G,O,$,Q,q){q===!0?t.vertexAttribIPointer(S,b,G,$,Q):t.vertexAttribPointer(S,b,G,O,$,Q)}function y(S,b,G,O){v();const $=O.attributes,Q=G.getAttributes(),q=b.defaultAttributeValues;for(const k in Q){const L=Q[k];if(L.location>=0){let X=$[k];if(X===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(X=S.instanceColor)),X!==void 0){const W=X.normalized,ne=X.itemSize,le=e.get(X);if(le===void 0)continue;const be=le.buffer,j=le.type,Y=le.bytesPerElement,ae=j===t.INT||j===t.UNSIGNED_INT||X.gpuType===kf;if(X.isInterleavedBufferAttribute){const se=X.data,Te=se.stride,Le=X.offset;if(se.isInstancedInterleavedBuffer){for(let Fe=0;Fe<L.locationSize;Fe++)u(L.location+Fe,se.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Fe=0;Fe<L.locationSize;Fe++)m(L.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,be);for(let Fe=0;Fe<L.locationSize;Fe++)x(L.location+Fe,ne/L.locationSize,j,W,Te*Y,(Le+ne/L.locationSize*Fe)*Y,ae)}else{if(X.isInstancedBufferAttribute){for(let se=0;se<L.locationSize;se++)u(L.location+se,X.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let se=0;se<L.locationSize;se++)m(L.location+se);t.bindBuffer(t.ARRAY_BUFFER,be);for(let se=0;se<L.locationSize;se++)x(L.location+se,ne/L.locationSize,j,W,ne*Y,ne/L.locationSize*se*Y,ae)}}else if(q!==void 0){const W=q[k];if(W!==void 0)switch(W.length){case 2:t.vertexAttrib2fv(L.location,W);break;case 3:t.vertexAttrib3fv(L.location,W);break;case 4:t.vertexAttrib4fv(L.location,W);break;default:t.vertexAttrib1fv(L.location,W)}}}}g()}function P(){T();for(const S in i){const b=i[S];for(const G in b){const O=b[G];for(const $ in O)d(O[$].object),delete O[$];delete b[G]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const b=i[S.id];for(const G in b){const O=b[G];for(const $ in O)d(O[$].object),delete O[$];delete b[G]}delete i[S.id]}function A(S){for(const b in i){const G=i[b];if(G[S.id]===void 0)continue;const O=G[S.id];for(const $ in O)d(O[$].object),delete O[$];delete G[S.id]}}function T(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:g}}function J1(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let p=0;for(let _=0;_<f;_++)p+=d[_];n.update(p,i,1)}function l(c,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],d[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let _=0;for(let v=0;v<f;v++)_+=d[v]*h[v];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ew(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==On&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const T=A===Yo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Mi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==fi&&!T)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:P,maxSamples:R}}function tw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new hr,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?d(null):c();else{const g=s?0:i,x=g*4;let y=u.clippingState||null;l.value=y,y=d(_,h,x,p);for(let P=0;P!==x;++P)y[P]=n[P];u.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const u=p+v*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,y=p;x!==v;++x,y+=4)o.copy(f[x]).applyMatrix4(g,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function nw(t){let e=new WeakMap;function n(o,a){return a===ad?o.mapping=Ps:a===ld&&(o.mapping=Ls),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ad||a===ld)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new hM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class iw extends h0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const cs=4,$p=[.125,.215,.35,.446,.526,.582],gr=20,Kc=new iw,qp=new et;let Zc=null,Qc=0,Jc=0,eu=!1;const pr=(1+Math.sqrt(5))/2,$r=1/pr,Kp=[new H(-pr,$r,0),new H(pr,$r,0),new H(-$r,0,pr),new H($r,0,pr),new H(0,pr,-$r),new H(0,pr,$r),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Zp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Zc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc,Qc,Jc),this._renderer.xr.enabled=eu,e.scissorTest=!1,Na(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ps||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Yo,format:On,colorSpace:Bs,depthBuffer:!1},r=Qp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rw(s)),this._blurMaterial=sw(s,e,n)}return r}_compileMaterial(e){const n=new Yn(this._lodPlanes[0],e);this._renderer.compile(n,Kc)}_sceneToCubeUV(e,n,i,r){const a=new yn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(qp),d.toneMapping=Ki,d.autoClear=!1;const p=new Yf({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),_=new Yn(new Ko,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(qp),v=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const x=this._cubeSize;Na(r,g*x,u>2?x:0,x,x),d.setRenderTarget(r),v&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ps||e.mapping===Ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Yn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Na(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Kc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Kp[(r-s-1)%Kp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Yn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*gr-1),v=s/_,m=isFinite(s)?1+Math.floor(d*v):gr;m>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gr}`);const u=[];let g=0;for(let A=0;A<gr;++A){const T=A/v,E=Math.exp(-T*T/2);u.push(E),A===0?g+=E:A<m&&(g+=2*E)}for(let A=0;A<u.length;A++)u[A]=u[A]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const y=this._sizeLods[r],P=3*y*(r>x-cs?r-x+cs:0),R=4*(this._cubeSize-y);Na(n,P,R,3*y,2*y),l.setRenderTarget(n),l.render(f,Kc)}}function rw(t){const e=[],n=[],i=[];let r=t;const s=t-cs+1+$p.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-cs?l=$p[o-t+cs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,_=6,v=3,m=2,u=1,g=new Float32Array(v*_*p),x=new Float32Array(m*_*p),y=new Float32Array(u*_*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,T=R>2?0:-1,E=[A,T,0,A+2/3,T,0,A+2/3,T+1,0,A,T,0,A+2/3,T+1,0,A,T+1,0];g.set(E,v*_*R),x.set(h,m*_*R);const S=[R,R,R,R,R,R];y.set(S,u*_*R)}const P=new ir;P.setAttribute("position",new Kn(g,v)),P.setAttribute("uv",new Kn(x,m)),P.setAttribute("faceIndex",new Kn(y,u)),e.push(P),r>cs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Qp(t,e,n){const i=new Pr(t,e,n);return i.texture.mapping=ql,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Na(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function sw(t,e,n){const i=new Float32Array(gr),r=new H(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Jp(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function em(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function $f(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ow(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ad||l===ld,d=l===Ps||l===Ls;if(c||d){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Zp(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new Zp(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function aw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ao("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function lw(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const v=h.morphAttributes[_];for(let m=0,u=v.length;m<u;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const v=p[_];for(let m=0,u=v.length;m<u;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const g=p.array;v=p.version;for(let x=0,y=g.length;x<y;x+=3){const P=g[x+0],R=g[x+1],A=g[x+2];h.push(P,R,R,A,A,P)}}else if(_!==void 0){const g=_.array;v=_.version;for(let x=0,y=g.length/3-1;x<y;x+=3){const P=x+0,R=x+1,A=x+2;h.push(P,R,R,A,A,P)}}else return;const m=new(s0(h)?d0:u0)(h,1);m.version=v;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function d(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function cw(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*o,_),n.update(p,i,_))}function d(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];n.update(m,i,1)}function f(h,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,v,0,_);let u=0;for(let g=0;g<_;g++)u+=p[g]*v[g];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function uw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function dw(t,e,n){const i=new WeakMap,r=new xt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let E=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),_===!0&&(x=2),v===!0&&(x=3);let y=a.attributes.position.count*x,P=1;y>e.maxTextureSize&&(P=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const R=new Float32Array(y*P*4*f),A=new a0(R,y,P,f);A.type=fi,A.needsUpdate=!0;const T=x*4;for(let S=0;S<f;S++){const b=m[S],G=u[S],O=g[S],$=y*P*4*S;for(let Q=0;Q<b.count;Q++){const q=Q*T;p===!0&&(r.fromBufferAttribute(b,Q),R[$+q+0]=r.x,R[$+q+1]=r.y,R[$+q+2]=r.z,R[$+q+3]=0),_===!0&&(r.fromBufferAttribute(G,Q),R[$+q+4]=r.x,R[$+q+5]=r.y,R[$+q+6]=r.z,R[$+q+7]=0),v===!0&&(r.fromBufferAttribute(O,Q),R[$+q+8]=r.x,R[$+q+9]=r.y,R[$+q+10]=r.z,R[$+q+11]=O.itemSize===4?r.w:1)}}h={count:f,texture:A,size:new tt(y,P)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function fw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class v0 extends jt{constructor(e,n,i,r,s,o,a,l,c,d=_s){if(d!==_s&&d!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===_s&&(i=br),i===void 0&&d===Us&&(i=Ds),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const _0=new jt,tm=new v0(1,1),x0=new a0,y0=new ZS,S0=new p0,nm=[],im=[],rm=new Float32Array(16),sm=new Float32Array(9),om=new Float32Array(4);function Vs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=nm[r];if(s===void 0&&(s=new Float32Array(r),nm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Jl(t,e){let n=im[e];n===void 0&&(n=new Int32Array(e),im[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function hw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function vw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;om.set(i),t.uniformMatrix2fv(this.addr,!1,om),Ct(n,i)}}function _w(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;sm.set(i),t.uniformMatrix3fv(this.addr,!1,sm),Ct(n,i)}}function xw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;rm.set(i),t.uniformMatrix4fv(this.addr,!1,rm),Ct(n,i)}}function yw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function Mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function Ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function ww(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function Rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(tm.compareFunction=r0,s=tm):s=_0,n.setTexture2D(e||s,r)}function bw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||y0,r)}function Pw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||S0,r)}function Lw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||x0,r)}function Dw(t){switch(t){case 5126:return hw;case 35664:return pw;case 35665:return mw;case 35666:return gw;case 35674:return vw;case 35675:return _w;case 35676:return xw;case 5124:case 35670:return yw;case 35667:case 35671:return Sw;case 35668:case 35672:return Mw;case 35669:case 35673:return Ew;case 5125:return ww;case 36294:return Tw;case 36295:return Aw;case 36296:return Cw;case 35678:case 36198:case 36298:case 36306:case 35682:return Rw;case 35679:case 36299:case 36307:return bw;case 35680:case 36300:case 36308:case 36293:return Pw;case 36289:case 36303:case 36311:case 36292:return Lw}}function Uw(t,e){t.uniform1fv(this.addr,e)}function Iw(t,e){const n=Vs(e,this.size,2);t.uniform2fv(this.addr,n)}function Nw(t,e){const n=Vs(e,this.size,3);t.uniform3fv(this.addr,n)}function Fw(t,e){const n=Vs(e,this.size,4);t.uniform4fv(this.addr,n)}function Ow(t,e){const n=Vs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function kw(t,e){const n=Vs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Bw(t,e){const n=Vs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function zw(t,e){t.uniform1iv(this.addr,e)}function Hw(t,e){t.uniform2iv(this.addr,e)}function Vw(t,e){t.uniform3iv(this.addr,e)}function Gw(t,e){t.uniform4iv(this.addr,e)}function Ww(t,e){t.uniform1uiv(this.addr,e)}function Xw(t,e){t.uniform2uiv(this.addr,e)}function jw(t,e){t.uniform3uiv(this.addr,e)}function Yw(t,e){t.uniform4uiv(this.addr,e)}function $w(t,e,n){const i=this.cache,r=e.length,s=Jl(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||_0,s[o])}function qw(t,e,n){const i=this.cache,r=e.length,s=Jl(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||y0,s[o])}function Kw(t,e,n){const i=this.cache,r=e.length,s=Jl(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||S0,s[o])}function Zw(t,e,n){const i=this.cache,r=e.length,s=Jl(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||x0,s[o])}function Qw(t){switch(t){case 5126:return Uw;case 35664:return Iw;case 35665:return Nw;case 35666:return Fw;case 35674:return Ow;case 35675:return kw;case 35676:return Bw;case 5124:case 35670:return zw;case 35667:case 35671:return Hw;case 35668:case 35672:return Vw;case 35669:case 35673:return Gw;case 5125:return Ww;case 36294:return Xw;case 36295:return jw;case 36296:return Yw;case 35678:case 36198:case 36298:case 36306:case 35682:return $w;case 35679:case 36299:case 36307:return qw;case 35680:case 36300:case 36308:case 36293:return Kw;case 36289:case 36303:case 36311:case 36292:return Zw}}class Jw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Dw(n.type)}}class eT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Qw(n.type)}}class tT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const tu=/(\w+)(\])?(\[|\.)?/g;function am(t,e){t.seq.push(e),t.map[e.id]=e}function nT(t,e,n){const i=t.name,r=i.length;for(tu.lastIndex=0;;){const s=tu.exec(i),o=tu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){am(n,c===void 0?new Jw(a,t,e):new eT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new tT(a),am(n,f)),n=f}}}class nl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);nT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function lm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const iT=37297;let rT=0;function sT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const cm=new Ne;function oT(t){Xe._getMatrix(cm,Xe.workingColorSpace,t);const e=`mat3( ${cm.elements.map(n=>n.toFixed(4))} )`;switch(Xe.getTransfer(t)){case Kl:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function um(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+sT(t.getShaderSource(e),o)}else return r}function aT(t,e){const n=oT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function lT(t,e){let n;switch(e){case lS:n="Linear";break;case cS:n="Reinhard";break;case uS:n="Cineon";break;case dS:n="ACESFilmic";break;case hS:n="AgX";break;case pS:n="Neutral";break;case fS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Fa=new H;function cT(){Xe.getLuminanceCoefficients(Fa);const t=Fa.x.toFixed(4),e=Fa.y.toFixed(4),n=Fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function dT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function fT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function lo(t){return t!==""}function dm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Od(t){return t.replace(hT,mT)}const pT=new Map;function mT(t,e){let n=ke[e];if(n===void 0){const i=pT.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Od(n)}const gT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hm(t){return t.replace(gT,vT)}function vT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _T(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Xv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Hy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function xT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ps:case Ls:e="ENVMAP_TYPE_CUBE";break;case ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function ST(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case jv:e="ENVMAP_BLENDING_MULTIPLY";break;case oS:e="ENVMAP_BLENDING_MIX";break;case aS:e="ENVMAP_BLENDING_ADD";break}return e}function MT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ET(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=_T(n),c=xT(n),d=yT(n),f=ST(n),h=MT(n),p=uT(n),_=dT(s),v=r.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(lo).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(lo).join(`
`),u.length>0&&(u+=`
`)):(m=[pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),u=[pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ki?"#define TONE_MAPPING":"",n.toneMapping!==Ki?ke.tonemapping_pars_fragment:"",n.toneMapping!==Ki?lT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,aT("linearToOutputTexel",n.outputColorSpace),cT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(lo).join(`
`)),o=Od(o),o=dm(o,n),o=fm(o,n),a=Od(a),a=dm(a,n),a=fm(a,n),o=hm(o),a=hm(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Ap?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ap?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=g+m+o,y=g+u+a,P=lm(r,r.VERTEX_SHADER,x),R=lm(r,r.FRAGMENT_SHADER,y);r.attachShader(v,P),r.attachShader(v,R),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(b){if(t.debug.checkShaderErrors){const G=r.getProgramInfoLog(v).trim(),O=r.getShaderInfoLog(P).trim(),$=r.getShaderInfoLog(R).trim();let Q=!0,q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,P,R);else{const k=um(r,P,"vertex"),L=um(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+G+`
`+k+`
`+L)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(O===""||$==="")&&(q=!1);q&&(b.diagnostics={runnable:Q,programLog:G,vertexShader:{log:O,prefix:m},fragmentShader:{log:$,prefix:u}})}r.deleteShader(P),r.deleteShader(R),T=new nl(r,v),E=fT(r,v)}let T;this.getUniforms=function(){return T===void 0&&A(this),T};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,iT)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=R,this}let wT=0;class TT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new AT(e),n.set(e,i)),i}}class AT{constructor(e){this.id=wT++,this.code=e,this.usedTimes=0}}function CT(t,e,n,i,r,s,o){const a=new jf,l=new TT,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,b,G,O){const $=G.fog,Q=O.geometry,q=E.isMeshStandardMaterial?G.environment:null,k=(E.isMeshStandardMaterial?n:e).get(E.envMap||q),L=k&&k.mapping===ql?k.image.height:null,X=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const W=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ne=W!==void 0?W.length:0;let le=0;Q.morphAttributes.position!==void 0&&(le=1),Q.morphAttributes.normal!==void 0&&(le=2),Q.morphAttributes.color!==void 0&&(le=3);let be,j,Y,ae;if(X){const Ze=Xn[X];be=Ze.vertexShader,j=Ze.fragmentShader}else be=E.vertexShader,j=E.fragmentShader,l.update(E),Y=l.getVertexShaderID(E),ae=l.getFragmentShaderID(E);const se=t.getRenderTarget(),Te=t.state.buffers.depth.getReversed(),Le=O.isInstancedMesh===!0,Fe=O.isBatchedMesh===!0,nt=!!E.map,Be=!!E.matcap,$e=!!k,I=!!E.aoMap,sn=!!E.lightMap,He=!!E.bumpMap,Ve=!!E.normalMap,Ae=!!E.displacementMap,ot=!!E.emissiveMap,we=!!E.metalnessMap,C=!!E.roughnessMap,M=E.anisotropy>0,B=E.clearcoat>0,J=E.dispersion>0,te=E.iridescence>0,Z=E.sheen>0,Me=E.transmission>0,de=M&&!!E.anisotropyMap,ge=B&&!!E.clearcoatMap,We=B&&!!E.clearcoatNormalMap,re=B&&!!E.clearcoatRoughnessMap,ve=te&&!!E.iridescenceMap,Re=te&&!!E.iridescenceThicknessMap,Pe=Z&&!!E.sheenColorMap,_e=Z&&!!E.sheenRoughnessMap,Ge=!!E.specularMap,Oe=!!E.specularColorMap,it=!!E.specularIntensityMap,D=Me&&!!E.transmissionMap,ue=Me&&!!E.thicknessMap,K=!!E.gradientMap,ee=!!E.alphaMap,pe=E.alphaTest>0,fe=!!E.alphaHash,Ue=!!E.extensions;let gt=Ki;E.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(gt=t.toneMapping);const It={shaderID:X,shaderType:E.type,shaderName:E.name,vertexShader:be,fragmentShader:j,defines:E.defines,customVertexShaderID:Y,customFragmentShaderID:ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&O._colorsTexture!==null,instancing:Le,instancingColor:Le&&O.instanceColor!==null,instancingMorph:Le&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Bs,alphaToCoverage:!!E.alphaToCoverage,map:nt,matcap:Be,envMap:$e,envMapMode:$e&&k.mapping,envMapCubeUVHeight:L,aoMap:I,lightMap:sn,bumpMap:He,normalMap:Ve,displacementMap:h&&Ae,emissiveMap:ot,normalMapObjectSpace:Ve&&E.normalMapType===xS,normalMapTangentSpace:Ve&&E.normalMapType===_S,metalnessMap:we,roughnessMap:C,anisotropy:M,anisotropyMap:de,clearcoat:B,clearcoatMap:ge,clearcoatNormalMap:We,clearcoatRoughnessMap:re,dispersion:J,iridescence:te,iridescenceMap:ve,iridescenceThicknessMap:Re,sheen:Z,sheenColorMap:Pe,sheenRoughnessMap:_e,specularMap:Ge,specularColorMap:Oe,specularIntensityMap:it,transmission:Me,transmissionMap:D,thicknessMap:ue,gradientMap:K,opaque:E.transparent===!1&&E.blending===vs&&E.alphaToCoverage===!1,alphaMap:ee,alphaTest:pe,alphaHash:fe,combine:E.combine,mapUv:nt&&v(E.map.channel),aoMapUv:I&&v(E.aoMap.channel),lightMapUv:sn&&v(E.lightMap.channel),bumpMapUv:He&&v(E.bumpMap.channel),normalMapUv:Ve&&v(E.normalMap.channel),displacementMapUv:Ae&&v(E.displacementMap.channel),emissiveMapUv:ot&&v(E.emissiveMap.channel),metalnessMapUv:we&&v(E.metalnessMap.channel),roughnessMapUv:C&&v(E.roughnessMap.channel),anisotropyMapUv:de&&v(E.anisotropyMap.channel),clearcoatMapUv:ge&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:We&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(E.sheenRoughnessMap.channel),specularMapUv:Ge&&v(E.specularMap.channel),specularColorMapUv:Oe&&v(E.specularColorMap.channel),specularIntensityMapUv:it&&v(E.specularIntensityMap.channel),transmissionMapUv:D&&v(E.transmissionMap.channel),thicknessMapUv:ue&&v(E.thicknessMap.channel),alphaMapUv:ee&&v(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ve||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Q.attributes.uv&&(nt||ee),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Te,skinning:O.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:le,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:gt,decodeVideoTexture:nt&&E.map.isVideoTexture===!0&&Xe.getTransfer(E.map.colorSpace)===Je,decodeVideoTextureEmissive:ot&&E.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(E.emissiveMap.colorSpace)===Je,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ci,flipSided:E.side===rn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ue&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&E.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function u(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const b in E.defines)S.push(b),S.push(E.defines[b]);return E.isRawShaderMaterial===!1&&(g(S,E),x(S,E),S.push(t.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function g(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function x(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const S=_[E.type];let b;if(S){const G=Xn[S];b=cM.clone(G.uniforms)}else b=E.uniforms;return b}function P(E,S){let b;for(let G=0,O=d.length;G<O;G++){const $=d[G];if($.cacheKey===S){b=$,++b.usedTimes;break}}return b===void 0&&(b=new ET(t,S,E,s),d.push(b)),b}function R(E){if(--E.usedTimes===0){const S=d.indexOf(E);d[S]=d[d.length-1],d.pop(),E.destroy()}}function A(E){l.remove(E)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:P,releaseProgram:R,releaseShaderCache:A,programs:d,dispose:T}}function RT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function bT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function mm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function gm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,_,v,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=v,u.group=m),e++,u}function a(f,h,p,_,v,m){const u=o(f,h,p,_,v,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,h,p,_,v,m){const u=o(f,h,p,_,v,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||bT),i.length>1&&i.sort(h||mm),r.length>1&&r.sort(h||mm)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function PT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new gm,t.set(i,[o])):r>=s.length?(o=new gm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function LT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new et};break;case"SpotLight":n={position:new H,direction:new H,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function DT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let UT=0;function IT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function NT(t){const e=new LT,n=DT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new yt,o=new yt;function a(c){let d=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,v=0,m=0,u=0,g=0,x=0,y=0,P=0,R=0,A=0;c.sort(IT);for(let E=0,S=c.length;E<S;E++){const b=c[E],G=b.color,O=b.intensity,$=b.distance,Q=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)d+=G.r*O,f+=G.g*O,h+=G.b*O;else if(b.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(b.sh.coefficients[q],O);A++}else if(b.isDirectionalLight){const q=e.get(b);if(q.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const k=b.shadow,L=n.get(b);L.shadowIntensity=k.intensity,L.shadowBias=k.bias,L.shadowNormalBias=k.normalBias,L.shadowRadius=k.radius,L.shadowMapSize=k.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=b.shadow.matrix,g++}i.directional[p]=q,p++}else if(b.isSpotLight){const q=e.get(b);q.position.setFromMatrixPosition(b.matrixWorld),q.color.copy(G).multiplyScalar(O),q.distance=$,q.coneCos=Math.cos(b.angle),q.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),q.decay=b.decay,i.spot[v]=q;const k=b.shadow;if(b.map&&(i.spotLightMap[P]=b.map,P++,k.updateMatrices(b),b.castShadow&&R++),i.spotLightMatrix[v]=k.matrix,b.castShadow){const L=n.get(b);L.shadowIntensity=k.intensity,L.shadowBias=k.bias,L.shadowNormalBias=k.normalBias,L.shadowRadius=k.radius,L.shadowMapSize=k.mapSize,i.spotShadow[v]=L,i.spotShadowMap[v]=Q,y++}v++}else if(b.isRectAreaLight){const q=e.get(b);q.color.copy(G).multiplyScalar(O),q.halfWidth.set(b.width*.5,0,0),q.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=q,m++}else if(b.isPointLight){const q=e.get(b);if(q.color.copy(b.color).multiplyScalar(b.intensity),q.distance=b.distance,q.decay=b.decay,b.castShadow){const k=b.shadow,L=n.get(b);L.shadowIntensity=k.intensity,L.shadowBias=k.bias,L.shadowNormalBias=k.normalBias,L.shadowRadius=k.radius,L.shadowMapSize=k.mapSize,L.shadowCameraNear=k.camera.near,L.shadowCameraFar=k.camera.far,i.pointShadow[_]=L,i.pointShadowMap[_]=Q,i.pointShadowMatrix[_]=b.shadow.matrix,x++}i.point[_]=q,_++}else if(b.isHemisphereLight){const q=e.get(b);q.skyColor.copy(b.color).multiplyScalar(O),q.groundColor.copy(b.groundColor).multiplyScalar(O),i.hemi[u]=q,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const T=i.hash;(T.directionalLength!==p||T.pointLength!==_||T.spotLength!==v||T.rectAreaLength!==m||T.hemiLength!==u||T.numDirectionalShadows!==g||T.numPointShadows!==x||T.numSpotShadows!==y||T.numSpotMaps!==P||T.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,T.directionalLength=p,T.pointLength=_,T.spotLength=v,T.rectAreaLength=m,T.hemiLength=u,T.numDirectionalShadows=g,T.numPointShadows=x,T.numSpotShadows=y,T.numSpotMaps=P,T.numLightProbes=A,i.version=UT++)}function l(c,d){let f=0,h=0,p=0,_=0,v=0;const m=d.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const x=c[u];if(x.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function vm(t){const e=new NT(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function FT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new vm(t),e.set(r,[a])):s>=o.length?(a=new vm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class OT extends Zl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kT extends Zl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const BT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function HT(t,e,n){let i=new m0;const r=new tt,s=new tt,o=new xt,a=new OT({depthPacking:vS}),l=new kT,c={},d=n.maxTextureSize,f={[Si]:rn,[rn]:Si,[ci]:ci},h=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:BT,fragmentShader:zT}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new ir;_.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Yn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xv;let u=this.type;this.render=function(R,A,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=t.getRenderTarget(),S=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),G=t.state;G.setBlending(qi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const O=u!==oi&&this.type===oi,$=u===oi&&this.type!==oi;for(let Q=0,q=R.length;Q<q;Q++){const k=R[Q],L=k.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const X=L.getFrameExtents();if(r.multiply(X),s.copy(L.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/X.x),r.x=s.x*X.x,L.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/X.y),r.y=s.y*X.y,L.mapSize.y=s.y)),L.map===null||O===!0||$===!0){const ne=this.type!==oi?{minFilter:zn,magFilter:zn}:{};L.map!==null&&L.map.dispose(),L.map=new Pr(r.x,r.y,ne),L.map.texture.name=k.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const W=L.getViewportCount();for(let ne=0;ne<W;ne++){const le=L.getViewport(ne);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),G.viewport(o),L.updateMatrices(k,ne),i=L.getFrustum(),y(A,T,L.camera,k,this.type)}L.isPointLightShadow!==!0&&this.type===oi&&g(L,T),L.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(E,S,b)};function g(R,A){const T=e.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Pr(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(A,null,T,h,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(A,null,T,p,v,null)}function x(R,A,T,E){let S=null;const b=T.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(b!==void 0)S=b;else if(S=T.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=S.uuid,O=A.uuid;let $=c[G];$===void 0&&($={},c[G]=$);let Q=$[O];Q===void 0&&(Q=S.clone(),$[O]=Q,A.addEventListener("dispose",P)),S=Q}if(S.visible=A.visible,S.wireframe=A.wireframe,E===oi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:f[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=t.properties.get(S);G.light=T}return S}function y(R,A,T,E,S){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===oi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,R.matrixWorld);const O=e.update(R),$=R.material;if(Array.isArray($)){const Q=O.groups;for(let q=0,k=Q.length;q<k;q++){const L=Q[q],X=$[L.materialIndex];if(X&&X.visible){const W=x(R,X,E,S);R.onBeforeShadow(t,R,A,T,O,W,L),t.renderBufferDirect(T,null,O,W,R,L),R.onAfterShadow(t,R,A,T,O,W,L)}}}else if($.visible){const Q=x(R,$,E,S);R.onBeforeShadow(t,R,A,T,O,Q,null),t.renderBufferDirect(T,null,O,Q,R,null),R.onAfterShadow(t,R,A,T,O,Q,null)}}const G=R.children;for(let O=0,$=G.length;O<$;O++)y(G[O],A,T,E,S)}function P(R){R.target.removeEventListener("dispose",P);for(const T in c){const E=c[T],S=R.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const VT={[ed]:td,[nd]:sd,[id]:od,[bs]:rd,[td]:ed,[sd]:nd,[od]:id,[rd]:bs};function GT(t,e){function n(){let D=!1;const ue=new xt;let K=null;const ee=new xt(0,0,0,0);return{setMask:function(pe){K!==pe&&!D&&(t.colorMask(pe,pe,pe,pe),K=pe)},setLocked:function(pe){D=pe},setClear:function(pe,fe,Ue,gt,It){It===!0&&(pe*=gt,fe*=gt,Ue*=gt),ue.set(pe,fe,Ue,gt),ee.equals(ue)===!1&&(t.clearColor(pe,fe,Ue,gt),ee.copy(ue))},reset:function(){D=!1,K=null,ee.set(-1,0,0,0)}}}function i(){let D=!1,ue=!1,K=null,ee=null,pe=null;return{setReversed:function(fe){if(ue!==fe){const Ue=e.get("EXT_clip_control");ue?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT);const gt=pe;pe=null,this.setClear(gt)}ue=fe},getReversed:function(){return ue},setTest:function(fe){fe?se(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(fe){K!==fe&&!D&&(t.depthMask(fe),K=fe)},setFunc:function(fe){if(ue&&(fe=VT[fe]),ee!==fe){switch(fe){case ed:t.depthFunc(t.NEVER);break;case td:t.depthFunc(t.ALWAYS);break;case nd:t.depthFunc(t.LESS);break;case bs:t.depthFunc(t.LEQUAL);break;case id:t.depthFunc(t.EQUAL);break;case rd:t.depthFunc(t.GEQUAL);break;case sd:t.depthFunc(t.GREATER);break;case od:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=fe}},setLocked:function(fe){D=fe},setClear:function(fe){pe!==fe&&(ue&&(fe=1-fe),t.clearDepth(fe),pe=fe)},reset:function(){D=!1,K=null,ee=null,pe=null,ue=!1}}}function r(){let D=!1,ue=null,K=null,ee=null,pe=null,fe=null,Ue=null,gt=null,It=null;return{setTest:function(Ze){D||(Ze?se(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(Ze){ue!==Ze&&!D&&(t.stencilMask(Ze),ue=Ze)},setFunc:function(Ze,An,Jn){(K!==Ze||ee!==An||pe!==Jn)&&(t.stencilFunc(Ze,An,Jn),K=Ze,ee=An,pe=Jn)},setOp:function(Ze,An,Jn){(fe!==Ze||Ue!==An||gt!==Jn)&&(t.stencilOp(Ze,An,Jn),fe=Ze,Ue=An,gt=Jn)},setLocked:function(Ze){D=Ze},setClear:function(Ze){It!==Ze&&(t.clearStencil(Ze),It=Ze)},reset:function(){D=!1,ue=null,K=null,ee=null,pe=null,fe=null,Ue=null,gt=null,It=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,p=[],_=null,v=!1,m=null,u=null,g=null,x=null,y=null,P=null,R=null,A=new et(0,0,0),T=0,E=!1,S=null,b=null,G=null,O=null,$=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,k=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(L)[1]),q=k>=1):L.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),q=k>=2);let X=null,W={};const ne=t.getParameter(t.SCISSOR_BOX),le=t.getParameter(t.VIEWPORT),be=new xt().fromArray(ne),j=new xt().fromArray(le);function Y(D,ue,K,ee){const pe=new Uint8Array(4),fe=t.createTexture();t.bindTexture(D,fe),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<K;Ue++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(ue+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return fe}const ae={};ae[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(t.DEPTH_TEST),o.setFunc(bs),He(!1),Ve(yp),se(t.CULL_FACE),I(qi);function se(D){d[D]!==!0&&(t.enable(D),d[D]=!0)}function Te(D){d[D]!==!1&&(t.disable(D),d[D]=!1)}function Le(D,ue){return f[D]!==ue?(t.bindFramebuffer(D,ue),f[D]=ue,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ue),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Fe(D,ue){let K=p,ee=!1;if(D){K=h.get(ue),K===void 0&&(K=[],h.set(ue,K));const pe=D.textures;if(K.length!==pe.length||K[0]!==t.COLOR_ATTACHMENT0){for(let fe=0,Ue=pe.length;fe<Ue;fe++)K[fe]=t.COLOR_ATTACHMENT0+fe;K.length=pe.length,ee=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,ee=!0);ee&&t.drawBuffers(K)}function nt(D){return _!==D?(t.useProgram(D),_=D,!0):!1}const Be={[mr]:t.FUNC_ADD,[Gy]:t.FUNC_SUBTRACT,[Wy]:t.FUNC_REVERSE_SUBTRACT};Be[Xy]=t.MIN,Be[jy]=t.MAX;const $e={[Yy]:t.ZERO,[$y]:t.ONE,[qy]:t.SRC_COLOR,[Qu]:t.SRC_ALPHA,[tS]:t.SRC_ALPHA_SATURATE,[Jy]:t.DST_COLOR,[Zy]:t.DST_ALPHA,[Ky]:t.ONE_MINUS_SRC_COLOR,[Ju]:t.ONE_MINUS_SRC_ALPHA,[eS]:t.ONE_MINUS_DST_COLOR,[Qy]:t.ONE_MINUS_DST_ALPHA,[nS]:t.CONSTANT_COLOR,[iS]:t.ONE_MINUS_CONSTANT_COLOR,[rS]:t.CONSTANT_ALPHA,[sS]:t.ONE_MINUS_CONSTANT_ALPHA};function I(D,ue,K,ee,pe,fe,Ue,gt,It,Ze){if(D===qi){v===!0&&(Te(t.BLEND),v=!1);return}if(v===!1&&(se(t.BLEND),v=!0),D!==Vy){if(D!==m||Ze!==E){if((u!==mr||y!==mr)&&(t.blendEquation(t.FUNC_ADD),u=mr,y=mr),Ze)switch(D){case vs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sp:t.blendFunc(t.ONE,t.ONE);break;case Mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ep:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case vs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ep:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}g=null,x=null,P=null,R=null,A.set(0,0,0),T=0,m=D,E=Ze}return}pe=pe||ue,fe=fe||K,Ue=Ue||ee,(ue!==u||pe!==y)&&(t.blendEquationSeparate(Be[ue],Be[pe]),u=ue,y=pe),(K!==g||ee!==x||fe!==P||Ue!==R)&&(t.blendFuncSeparate($e[K],$e[ee],$e[fe],$e[Ue]),g=K,x=ee,P=fe,R=Ue),(gt.equals(A)===!1||It!==T)&&(t.blendColor(gt.r,gt.g,gt.b,It),A.copy(gt),T=It),m=D,E=!1}function sn(D,ue){D.side===ci?Te(t.CULL_FACE):se(t.CULL_FACE);let K=D.side===rn;ue&&(K=!K),He(K),D.blending===vs&&D.transparent===!1?I(qi):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const ee=D.stencilWrite;a.setTest(ee),ee&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ot(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(D){S!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),S=D)}function Ve(D){D!==By?(se(t.CULL_FACE),D!==b&&(D===yp?t.cullFace(t.BACK):D===zy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),b=D}function Ae(D){D!==G&&(q&&t.lineWidth(D),G=D)}function ot(D,ue,K){D?(se(t.POLYGON_OFFSET_FILL),(O!==ue||$!==K)&&(t.polygonOffset(ue,K),O=ue,$=K)):Te(t.POLYGON_OFFSET_FILL)}function we(D){D?se(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function C(D){D===void 0&&(D=t.TEXTURE0+Q-1),X!==D&&(t.activeTexture(D),X=D)}function M(D,ue,K){K===void 0&&(X===null?K=t.TEXTURE0+Q-1:K=X);let ee=W[K];ee===void 0&&(ee={type:void 0,texture:void 0},W[K]=ee),(ee.type!==D||ee.texture!==ue)&&(X!==K&&(t.activeTexture(K),X=K),t.bindTexture(D,ue||ae[D]),ee.type=D,ee.texture=ue)}function B(){const D=W[X];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(D){be.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),be.copy(D))}function _e(D){j.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),j.copy(D))}function Ge(D,ue){let K=c.get(ue);K===void 0&&(K=new WeakMap,c.set(ue,K));let ee=K.get(D);ee===void 0&&(ee=t.getUniformBlockIndex(ue,D.name),K.set(D,ee))}function Oe(D,ue){const ee=c.get(ue).get(D);l.get(ue)!==ee&&(t.uniformBlockBinding(ue,ee,D.__bindingPointIndex),l.set(ue,ee))}function it(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},X=null,W={},f={},h=new WeakMap,p=[],_=null,v=!1,m=null,u=null,g=null,x=null,y=null,P=null,R=null,A=new et(0,0,0),T=0,E=!1,S=null,b=null,G=null,O=null,$=null,be.set(0,0,t.canvas.width,t.canvas.height),j.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:Te,bindFramebuffer:Le,drawBuffers:Fe,useProgram:nt,setBlending:I,setMaterial:sn,setFlipSided:He,setCullFace:Ve,setLineWidth:Ae,setPolygonOffset:ot,setScissorTest:we,activeTexture:C,bindTexture:M,unbindTexture:B,compressedTexImage2D:J,compressedTexImage3D:te,texImage2D:ve,texImage3D:Re,updateUBOMapping:Ge,uniformBlockBinding:Oe,texStorage2D:We,texStorage3D:re,texSubImage2D:Z,texSubImage3D:Me,compressedTexSubImage2D:de,compressedTexSubImage3D:ge,scissor:Pe,viewport:_e,reset:it}}function _m(t,e,n,i){const r=WT(i);switch(n){case Zv:return t*e;case Jv:return t*e;case e0:return t*e*2;case t0:return t*e/r.components*r.byteLength;case Hf:return t*e/r.components*r.byteLength;case n0:return t*e*2/r.components*r.byteLength;case Vf:return t*e*2/r.components*r.byteLength;case Qv:return t*e*3/r.components*r.byteLength;case On:return t*e*4/r.components*r.byteLength;case Gf:return t*e*4/r.components*r.byteLength;case Za:case Qa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ja:case el:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fd:case pd:return Math.max(t,16)*Math.max(e,8)/4;case dd:case hd:return Math.max(t,8)*Math.max(e,8)/2;case md:case gd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case yd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Md:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case wd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Td:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ad:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case bd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Pd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ld:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case tl:case Dd:case Ud:return Math.ceil(t/4)*Math.ceil(e/4)*16;case i0:case Id:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Nd:case Fd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function WT(t){switch(t){case Mi:case $v:return{byteLength:1,components:1};case Bo:case qv:case Yo:return{byteLength:2,components:1};case Bf:case zf:return{byteLength:2,components:4};case br:case kf:case fi:return{byteLength:4,components:1};case Kv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function XT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return p?new OffscreenCanvas(C,M):Ho("canvas")}function v(C,M,B){let J=1;const te=we(C);if((te.width>B||te.height>B)&&(J=B/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(J*te.width),Me=Math.floor(J*te.height);f===void 0&&(f=_(Z,Me));const de=M?_(Z,Me):f;return de.width=Z,de.height=Me,de.getContext("2d").drawImage(C,0,0,Z,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+Me+")."),de}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),C;return C}function m(C){return C.generateMipmaps}function u(C){t.generateMipmap(C)}function g(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(C,M,B,J,te=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=M;if(M===t.RED&&(B===t.FLOAT&&(Z=t.R32F),B===t.HALF_FLOAT&&(Z=t.R16F),B===t.UNSIGNED_BYTE&&(Z=t.R8)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.R8UI),B===t.UNSIGNED_SHORT&&(Z=t.R16UI),B===t.UNSIGNED_INT&&(Z=t.R32UI),B===t.BYTE&&(Z=t.R8I),B===t.SHORT&&(Z=t.R16I),B===t.INT&&(Z=t.R32I)),M===t.RG&&(B===t.FLOAT&&(Z=t.RG32F),B===t.HALF_FLOAT&&(Z=t.RG16F),B===t.UNSIGNED_BYTE&&(Z=t.RG8)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.RG8UI),B===t.UNSIGNED_SHORT&&(Z=t.RG16UI),B===t.UNSIGNED_INT&&(Z=t.RG32UI),B===t.BYTE&&(Z=t.RG8I),B===t.SHORT&&(Z=t.RG16I),B===t.INT&&(Z=t.RG32I)),M===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),B===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),B===t.UNSIGNED_INT&&(Z=t.RGB32UI),B===t.BYTE&&(Z=t.RGB8I),B===t.SHORT&&(Z=t.RGB16I),B===t.INT&&(Z=t.RGB32I)),M===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),B===t.UNSIGNED_INT&&(Z=t.RGBA32UI),B===t.BYTE&&(Z=t.RGBA8I),B===t.SHORT&&(Z=t.RGBA16I),B===t.INT&&(Z=t.RGBA32I)),M===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),M===t.RGBA){const Me=te?Kl:Xe.getTransfer(J);B===t.FLOAT&&(Z=t.RGBA32F),B===t.HALF_FLOAT&&(Z=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Z=Me===Je?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(C,M){let B;return C?M===null||M===br||M===Ds?B=t.DEPTH24_STENCIL8:M===fi?B=t.DEPTH32F_STENCIL8:M===Bo&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===br||M===Ds?B=t.DEPTH_COMPONENT24:M===fi?B=t.DEPTH_COMPONENT32F:M===Bo&&(B=t.DEPTH_COMPONENT16),B}function P(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==zn&&C.minFilter!==Mn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){const M=C.target;M.removeEventListener("dispose",R),T(M),M.isVideoTexture&&d.delete(M)}function A(C){const M=C.target;M.removeEventListener("dispose",A),S(M)}function T(C){const M=i.get(C);if(M.__webglInit===void 0)return;const B=C.source,J=h.get(B);if(J){const te=J[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(C),Object.keys(J).length===0&&h.delete(B)}i.remove(C)}function E(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const B=C.source,J=h.get(B);delete J[M.__cacheKey],o.memory.textures--}function S(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let te=0;te<M.__webglFramebuffer[J].length;te++)t.deleteFramebuffer(M.__webglFramebuffer[J][te]);else t.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)t.deleteFramebuffer(M.__webglFramebuffer[J]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=C.textures;for(let J=0,te=B.length;J<te;J++){const Z=i.get(B[J]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(B[J])}i.remove(C)}let b=0;function G(){b=0}function O(){const C=b;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),b+=1,C}function $(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function Q(C,M){const B=i.get(C);if(C.isVideoTexture&&Ae(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(B,C,M);return}}n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function q(C,M){const B=i.get(C);if(C.version>0&&B.__version!==C.version){j(B,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function k(C,M){const B=i.get(C);if(C.version>0&&B.__version!==C.version){j(B,C,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function L(C,M){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Y(B,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const X={[cd]:t.REPEAT,[yr]:t.CLAMP_TO_EDGE,[ud]:t.MIRRORED_REPEAT},W={[zn]:t.NEAREST,[mS]:t.NEAREST_MIPMAP_NEAREST,[ga]:t.NEAREST_MIPMAP_LINEAR,[Mn]:t.LINEAR,[bc]:t.LINEAR_MIPMAP_NEAREST,[Sr]:t.LINEAR_MIPMAP_LINEAR},ne={[yS]:t.NEVER,[AS]:t.ALWAYS,[SS]:t.LESS,[r0]:t.LEQUAL,[MS]:t.EQUAL,[TS]:t.GEQUAL,[ES]:t.GREATER,[wS]:t.NOTEQUAL};function le(C,M){if(M.type===fi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Mn||M.magFilter===bc||M.magFilter===ga||M.magFilter===Sr||M.minFilter===Mn||M.minFilter===bc||M.minFilter===ga||M.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,X[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,X[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,X[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,W[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,W[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,ne[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===zn||M.minFilter!==ga&&M.minFilter!==Sr||M.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function be(C,M){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));const J=M.source;let te=h.get(J);te===void 0&&(te={},h.set(J,te));const Z=$(M);if(Z!==C.__cacheKey){te[Z]===void 0&&(te[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),te[Z].usedTimes++;const Me=te[C.__cacheKey];Me!==void 0&&(te[C.__cacheKey].usedTimes--,Me.usedTimes===0&&E(M)),C.__cacheKey=Z,C.__webglTexture=te[Z].texture}return B}function j(C,M,B){let J=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=t.TEXTURE_3D);const te=be(C,M),Z=M.source;n.bindTexture(J,C.__webglTexture,t.TEXTURE0+B);const Me=i.get(Z);if(Z.version!==Me.__version||te===!0){n.activeTexture(t.TEXTURE0+B);const de=Xe.getPrimaries(Xe.workingColorSpace),ge=M.colorSpace===ki?null:Xe.getPrimaries(M.colorSpace),We=M.colorSpace===ki||de===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let re=v(M.image,!1,r.maxTextureSize);re=ot(M,re);const ve=s.convert(M.format,M.colorSpace),Re=s.convert(M.type);let Pe=x(M.internalFormat,ve,Re,M.colorSpace,M.isVideoTexture);le(J,M);let _e;const Ge=M.mipmaps,Oe=M.isVideoTexture!==!0,it=Me.__version===void 0||te===!0,D=Z.dataReady,ue=P(M,re);if(M.isDepthTexture)Pe=y(M.format===Us,M.type),it&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,Pe,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Pe,re.width,re.height,0,ve,Re,null));else if(M.isDataTexture)if(Ge.length>0){Oe&&it&&n.texStorage2D(t.TEXTURE_2D,ue,Pe,Ge[0].width,Ge[0].height);for(let K=0,ee=Ge.length;K<ee;K++)_e=Ge[K],Oe?D&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,_e.width,_e.height,ve,Re,_e.data):n.texImage2D(t.TEXTURE_2D,K,Pe,_e.width,_e.height,0,ve,Re,_e.data);M.generateMipmaps=!1}else Oe?(it&&n.texStorage2D(t.TEXTURE_2D,ue,Pe,re.width,re.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,ve,Re,re.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,re.width,re.height,0,ve,Re,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Oe&&it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,Pe,Ge[0].width,Ge[0].height,re.depth);for(let K=0,ee=Ge.length;K<ee;K++)if(_e=Ge[K],M.format!==On)if(ve!==null)if(Oe){if(D)if(M.layerUpdates.size>0){const pe=_m(_e.width,_e.height,M.format,M.type);for(const fe of M.layerUpdates){const Ue=_e.data.subarray(fe*pe/_e.data.BYTES_PER_ELEMENT,(fe+1)*pe/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,fe,_e.width,_e.height,1,ve,Ue)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,_e.width,_e.height,re.depth,ve,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Pe,_e.width,_e.height,re.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,_e.width,_e.height,re.depth,ve,Re,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Pe,_e.width,_e.height,re.depth,0,ve,Re,_e.data)}else{Oe&&it&&n.texStorage2D(t.TEXTURE_2D,ue,Pe,Ge[0].width,Ge[0].height);for(let K=0,ee=Ge.length;K<ee;K++)_e=Ge[K],M.format!==On?ve!==null?Oe?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,_e.width,_e.height,ve,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Pe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?D&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,_e.width,_e.height,ve,Re,_e.data):n.texImage2D(t.TEXTURE_2D,K,Pe,_e.width,_e.height,0,ve,Re,_e.data)}else if(M.isDataArrayTexture)if(Oe){if(it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,Pe,re.width,re.height,re.depth),D)if(M.layerUpdates.size>0){const K=_m(re.width,re.height,M.format,M.type);for(const ee of M.layerUpdates){const pe=re.data.subarray(ee*K/re.data.BYTES_PER_ELEMENT,(ee+1)*K/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,re.width,re.height,1,ve,Re,pe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,Re,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,re.width,re.height,re.depth,0,ve,Re,re.data);else if(M.isData3DTexture)Oe?(it&&n.texStorage3D(t.TEXTURE_3D,ue,Pe,re.width,re.height,re.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,Re,re.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,re.width,re.height,re.depth,0,ve,Re,re.data);else if(M.isFramebufferTexture){if(it)if(Oe)n.texStorage2D(t.TEXTURE_2D,ue,Pe,re.width,re.height);else{let K=re.width,ee=re.height;for(let pe=0;pe<ue;pe++)n.texImage2D(t.TEXTURE_2D,pe,Pe,K,ee,0,ve,Re,null),K>>=1,ee>>=1}}else if(Ge.length>0){if(Oe&&it){const K=we(Ge[0]);n.texStorage2D(t.TEXTURE_2D,ue,Pe,K.width,K.height)}for(let K=0,ee=Ge.length;K<ee;K++)_e=Ge[K],Oe?D&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ve,Re,_e):n.texImage2D(t.TEXTURE_2D,K,Pe,ve,Re,_e);M.generateMipmaps=!1}else if(Oe){if(it){const K=we(re);n.texStorage2D(t.TEXTURE_2D,ue,Pe,K.width,K.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Re,re)}else n.texImage2D(t.TEXTURE_2D,0,Pe,ve,Re,re);m(M)&&u(J),Me.__version=Z.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Y(C,M,B){if(M.image.length!==6)return;const J=be(C,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+B);const Z=i.get(te);if(te.version!==Z.__version||J===!0){n.activeTexture(t.TEXTURE0+B);const Me=Xe.getPrimaries(Xe.workingColorSpace),de=M.colorSpace===ki?null:Xe.getPrimaries(M.colorSpace),ge=M.colorSpace===ki||Me===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const We=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let ee=0;ee<6;ee++)!We&&!re?ve[ee]=v(M.image[ee],!0,r.maxCubemapSize):ve[ee]=re?M.image[ee].image:M.image[ee],ve[ee]=ot(M,ve[ee]);const Re=ve[0],Pe=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),Ge=x(M.internalFormat,Pe,_e,M.colorSpace),Oe=M.isVideoTexture!==!0,it=Z.__version===void 0||J===!0,D=te.dataReady;let ue=P(M,Re);le(t.TEXTURE_CUBE_MAP,M);let K;if(We){Oe&&it&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,Ge,Re.width,Re.height);for(let ee=0;ee<6;ee++){K=ve[ee].mipmaps;for(let pe=0;pe<K.length;pe++){const fe=K[pe];M.format!==On?Pe!==null?Oe?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,fe.width,fe.height,Pe,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,Ge,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,fe.width,fe.height,Pe,_e,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,Ge,fe.width,fe.height,0,Pe,_e,fe.data)}}}else{if(K=M.mipmaps,Oe&&it){K.length>0&&ue++;const ee=we(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,Ge,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(re){Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ve[ee].width,ve[ee].height,Pe,_e,ve[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ge,ve[ee].width,ve[ee].height,0,Pe,_e,ve[ee].data);for(let pe=0;pe<K.length;pe++){const Ue=K[pe].image[ee].image;Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,Ue.width,Ue.height,Pe,_e,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,Ge,Ue.width,Ue.height,0,Pe,_e,Ue.data)}}else{Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Pe,_e,ve[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ge,Pe,_e,ve[ee]);for(let pe=0;pe<K.length;pe++){const fe=K[pe];Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,Pe,_e,fe.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,Ge,Pe,_e,fe.image[ee])}}}m(M)&&u(t.TEXTURE_CUBE_MAP),Z.__version=te.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ae(C,M,B,J,te,Z){const Me=s.convert(B.format,B.colorSpace),de=s.convert(B.type),ge=x(B.internalFormat,Me,de,B.colorSpace),We=i.get(M),re=i.get(B);if(re.__renderTarget=M,!We.__hasExternalTextures){const ve=Math.max(1,M.width>>Z),Re=Math.max(1,M.height>>Z);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,Z,ge,ve,Re,M.depth,0,Me,de,null):n.texImage2D(te,Z,ge,ve,Re,0,Me,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Ve(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,te,re.__webglTexture,0,He(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,te,re.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function se(C,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const J=M.depthTexture,te=J&&J.isDepthTexture?J.type:null,Z=y(M.stencilBuffer,te),Me=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=He(M);Ve(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,Z,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,Z,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Z,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,C)}else{const J=M.textures;for(let te=0;te<J.length;te++){const Z=J[te],Me=s.convert(Z.format,Z.colorSpace),de=s.convert(Z.type),ge=x(Z.internalFormat,Me,de,Z.colorSpace),We=He(M);B&&Ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,We,ge,M.width,M.height):Ve(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,We,ge,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ge,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Te(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q(M.depthTexture,0);const te=J.__webglTexture,Z=He(M);if(M.depthTexture.format===_s)Ve(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(M.depthTexture.format===Us)Ve(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Le(C){const M=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=J}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Te(M.__webglFramebuffer,C)}else if(B){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=t.createRenderbuffer(),se(M.__webglDepthbuffer[J],C,!1);else{const te=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,Z)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),se(M.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(C,M,B){const J=i.get(C);M!==void 0&&ae(J.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Le(C)}function nt(C){const M=C.texture,B=i.get(C),J=i.get(M);C.addEventListener("dispose",A);const te=C.textures,Z=C.isWebGLCubeRenderTarget===!0,Me=te.length>1;if(Me||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=M.version,o.memory.textures++),Z){B.__webglFramebuffer=[];for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[de]=[];for(let ge=0;ge<M.mipmaps.length;ge++)B.__webglFramebuffer[de][ge]=t.createFramebuffer()}else B.__webglFramebuffer[de]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)B.__webglFramebuffer[de]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Me)for(let de=0,ge=te.length;de<ge;de++){const We=i.get(te[de]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Ve(C)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let de=0;de<te.length;de++){const ge=te[de];B.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[de]);const We=s.convert(ge.format,ge.colorSpace),re=s.convert(ge.type),ve=x(ge.internalFormat,We,re,ge.colorSpace,C.isXRRenderTarget===!0),Re=He(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,ve,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,B.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),se(B.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),le(t.TEXTURE_CUBE_MAP,M);for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)ae(B.__webglFramebuffer[de][ge],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ge);else ae(B.__webglFramebuffer[de],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let de=0,ge=te.length;de<ge;de++){const We=te[de],re=i.get(We);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),le(t.TEXTURE_2D,We),ae(B.__webglFramebuffer,C,We,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),m(We)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,J.__webglTexture),le(de,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)ae(B.__webglFramebuffer[ge],C,M,t.COLOR_ATTACHMENT0,de,ge);else ae(B.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,de,0);m(M)&&u(de),n.unbindTexture()}C.depthBuffer&&Le(C)}function Be(C){const M=C.textures;for(let B=0,J=M.length;B<J;B++){const te=M[B];if(m(te)){const Z=g(C),Me=i.get(te).__webglTexture;n.bindTexture(Z,Me),u(Z),n.unbindTexture()}}}const $e=[],I=[];function sn(C){if(C.samples>0){if(Ve(C)===!1){const M=C.textures,B=C.width,J=C.height;let te=t.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(C),de=M.length>1;if(de)for(let ge=0;ge<M.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ge]);const We=i.get(M[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,We,0)}t.blitFramebuffer(0,0,B,J,0,0,B,J,te,t.NEAREST),l===!0&&($e.length=0,I.length=0,$e.push(t.COLOR_ATTACHMENT0+ge),C.depthBuffer&&C.resolveDepthBuffer===!1&&($e.push(Z),I.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,I)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,$e))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let ge=0;ge<M.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ge]);const We=i.get(M[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,We,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function He(C){return Math.min(r.maxSamples,C.samples)}function Ve(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ae(C){const M=o.render.frame;d.get(C)!==M&&(d.set(C,M),C.update())}function ot(C,M){const B=C.colorSpace,J=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Bs&&B!==ki&&(Xe.getTransfer(B)===Je?(J!==On||te!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function we(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=G,this.setTexture2D=Q,this.setTexture2DArray=q,this.setTexture3D=k,this.setTextureCube=L,this.rebindTextures=Fe,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ve}function jT(t,e){function n(i,r=ki){let s;const o=Xe.getTransfer(r);if(i===Mi)return t.UNSIGNED_BYTE;if(i===Bf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===zf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Kv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===$v)return t.BYTE;if(i===qv)return t.SHORT;if(i===Bo)return t.UNSIGNED_SHORT;if(i===kf)return t.INT;if(i===br)return t.UNSIGNED_INT;if(i===fi)return t.FLOAT;if(i===Yo)return t.HALF_FLOAT;if(i===Zv)return t.ALPHA;if(i===Qv)return t.RGB;if(i===On)return t.RGBA;if(i===Jv)return t.LUMINANCE;if(i===e0)return t.LUMINANCE_ALPHA;if(i===_s)return t.DEPTH_COMPONENT;if(i===Us)return t.DEPTH_STENCIL;if(i===t0)return t.RED;if(i===Hf)return t.RED_INTEGER;if(i===n0)return t.RG;if(i===Vf)return t.RG_INTEGER;if(i===Gf)return t.RGBA_INTEGER;if(i===Za||i===Qa||i===Ja||i===el)if(o===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Za)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Za)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===el)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dd||i===fd||i===hd||i===pd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===dd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===md||i===gd||i===vd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===md||i===gd)return o===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vd)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_d||i===xd||i===yd||i===Sd||i===Md||i===Ed||i===wd||i===Td||i===Ad||i===Cd||i===Rd||i===bd||i===Pd||i===Ld)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===_d)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xd)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yd)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sd)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Md)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ed)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wd)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Td)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ad)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cd)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rd)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bd)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pd)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ld)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tl||i===Dd||i===Ud)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===tl)return o===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ud)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===i0||i===Id||i===Nd||i===Fd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===tl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Id)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ds?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class YT extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Oa extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $T={type:"move"};class nu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($T)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Oa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const qT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ZT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ji({vertexShader:qT,fragmentShader:KT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Yn(new Ql(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QT extends zs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,_=null;const v=new ZT,m=n.getContextAttributes();let u=null,g=null;const x=[],y=[],P=new tt;let R=null;const A=new yn;A.viewport=new xt;const T=new yn;T.viewport=new xt;const E=[A,T],S=new YT;let b=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Y=x[j];return Y===void 0&&(Y=new nu,x[j]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(j){let Y=x[j];return Y===void 0&&(Y=new nu,x[j]=Y),Y.getGripSpace()},this.getHand=function(j){let Y=x[j];return Y===void 0&&(Y=new nu,x[j]=Y),Y.getHandSpace()};function O(j){const Y=y.indexOf(j.inputSource);if(Y===-1)return;const ae=x[Y];ae!==void 0&&(ae.update(j.inputSource,j.frame,c||o),ae.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Q);for(let j=0;j<x.length;j++){const Y=y[j];Y!==null&&(y[j]=null,x[j].disconnect(Y))}b=null,G=null,v.reset(),e.setRenderTarget(u),p=null,h=null,f=null,r=null,g=null,be.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Y),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Pr(p.framebufferWidth,p.framebufferHeight,{format:On,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,ae=null,se=null;m.depth&&(se=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Y=m.stencil?Us:_s,ae=m.stencil?Ds:br);const Te={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Te),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new Pr(h.textureWidth,h.textureHeight,{format:On,type:Mi,depthTexture:new v0(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),be.setContext(r),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(j){for(let Y=0;Y<j.removed.length;Y++){const ae=j.removed[Y],se=y.indexOf(ae);se>=0&&(y[se]=null,x[se].disconnect(ae))}for(let Y=0;Y<j.added.length;Y++){const ae=j.added[Y];let se=y.indexOf(ae);if(se===-1){for(let Le=0;Le<x.length;Le++)if(Le>=y.length){y.push(ae),se=Le;break}else if(y[Le]===null){y[Le]=ae,se=Le;break}if(se===-1)break}const Te=x[se];Te&&Te.connect(ae)}}const q=new H,k=new H;function L(j,Y,ae){q.setFromMatrixPosition(Y.matrixWorld),k.setFromMatrixPosition(ae.matrixWorld);const se=q.distanceTo(k),Te=Y.projectionMatrix.elements,Le=ae.projectionMatrix.elements,Fe=Te[14]/(Te[10]-1),nt=Te[14]/(Te[10]+1),Be=(Te[9]+1)/Te[5],$e=(Te[9]-1)/Te[5],I=(Te[8]-1)/Te[0],sn=(Le[8]+1)/Le[0],He=Fe*I,Ve=Fe*sn,Ae=se/(-I+sn),ot=Ae*-I;if(Y.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ot),j.translateZ(Ae),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Te[10]===-1)j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const we=Fe+Ae,C=nt+Ae,M=He-ot,B=Ve+(se-ot),J=Be*nt/C*we,te=$e*nt/C*we;j.projectionMatrix.makePerspective(M,B,J,te,we,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function X(j,Y){Y===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Y.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let Y=j.near,ae=j.far;v.texture!==null&&(v.depthNear>0&&(Y=v.depthNear),v.depthFar>0&&(ae=v.depthFar)),S.near=T.near=A.near=Y,S.far=T.far=A.far=ae,(b!==S.near||G!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,G=S.far),A.layers.mask=j.layers.mask|2,T.layers.mask=j.layers.mask|4,S.layers.mask=A.layers.mask|T.layers.mask;const se=j.parent,Te=S.cameras;X(S,se);for(let Le=0;Le<Te.length;Le++)X(Te[Le],se);Te.length===2?L(S,A,T):S.projectionMatrix.copy(A.projectionMatrix),W(j,S,se)};function W(j,Y,ae){ae===null?j.matrix.copy(Y.matrixWorld):(j.matrix.copy(ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(Y.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=zo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let ne=null;function le(j,Y){if(d=Y.getViewerPose(c||o),_=Y,d!==null){const ae=d.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let se=!1;ae.length!==S.cameras.length&&(S.cameras.length=0,se=!0);for(let Le=0;Le<ae.length;Le++){const Fe=ae[Le];let nt=null;if(p!==null)nt=p.getViewport(Fe);else{const $e=f.getViewSubImage(h,Fe);nt=$e.viewport,Le===0&&(e.setRenderTargetTextures(g,$e.colorTexture,h.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(g))}let Be=E[Le];Be===void 0&&(Be=new yn,Be.layers.enable(Le),Be.viewport=new xt,E[Le]=Be),Be.matrix.fromArray(Fe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Fe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(nt.x,nt.y,nt.width,nt.height),Le===0&&(S.matrix.copy(Be.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),se===!0&&S.cameras.push(Be)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Le=f.getDepthInformation(ae[0]);Le&&Le.isValid&&Le.texture&&v.init(e,Le,r.renderState)}}for(let ae=0;ae<x.length;ae++){const se=y[ae],Te=x[ae];se!==null&&Te!==void 0&&Te.update(se,Y,c||o)}ne&&ne(j,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),_=null}const be=new g0;be.setAnimationLoop(le),this.setAnimationLoop=function(j){ne=j},this.dispose=function(){}}}const ur=new Ei,JT=new yt;function eA(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,f0(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,g,x,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),v(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,g,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===rn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===rn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),x=g.envMap,y=g.envMapRotation;x&&(m.envMap.value=x,ur.copy(y),ur.x*=-1,ur.y*=-1,ur.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),m.envMapRotation.value.setFromMatrix4(JT.makeRotationFromEuler(ur)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=x*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===rn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const y=x.program;i.uniformBlockBinding(g,y)}function c(g,x){let y=r[g.id];y===void 0&&(_(g),y=d(g),r[g.id]=y,g.addEventListener("dispose",m));const P=x.program;i.updateUBOMapping(g,P);const R=e.render.frame;s[g.id]!==R&&(h(g),s[g.id]=R)}function d(g){const x=f();g.__bindingPointIndex=x;const y=t.createBuffer(),P=g.__size,R=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,P,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const x=r[g.id],y=g.uniforms,P=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let R=0,A=y.length;R<A;R++){const T=Array.isArray(y[R])?y[R]:[y[R]];for(let E=0,S=T.length;E<S;E++){const b=T[E];if(p(b,R,E,P)===!0){const G=b.__offset,O=Array.isArray(b.value)?b.value:[b.value];let $=0;for(let Q=0;Q<O.length;Q++){const q=O[Q],k=v(q);typeof q=="number"||typeof q=="boolean"?(b.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,G+$,b.__data)):q.isMatrix3?(b.__data[0]=q.elements[0],b.__data[1]=q.elements[1],b.__data[2]=q.elements[2],b.__data[3]=0,b.__data[4]=q.elements[3],b.__data[5]=q.elements[4],b.__data[6]=q.elements[5],b.__data[7]=0,b.__data[8]=q.elements[6],b.__data[9]=q.elements[7],b.__data[10]=q.elements[8],b.__data[11]=0):(q.toArray(b.__data,$),$+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,b.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,x,y,P){const R=g.value,A=x+"_"+y;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{const T=P[A];if(typeof R=="number"||typeof R=="boolean"){if(T!==R)return P[A]=R,!0}else if(T.equals(R)===!1)return T.copy(R),!0}return!1}function _(g){const x=g.uniforms;let y=0;const P=16;for(let A=0,T=x.length;A<T;A++){const E=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,b=E.length;S<b;S++){const G=E[S],O=Array.isArray(G.value)?G.value:[G.value];for(let $=0,Q=O.length;$<Q;$++){const q=O[$],k=v(q),L=y%P,X=L%k.boundary,W=L+X;y+=X,W!==0&&P-W<k.storage&&(y+=P-W),G.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=k.storage}}}const R=y%P;return R>0&&(y+=P-R),g.__size=y,g.__cache={},this}function v(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class nA{constructor(e={}){const{canvas:n=GS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const g=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this.toneMapping=Ki,this.toneMappingExposure=1;const y=this;let P=!1,R=0,A=0,T=null,E=-1,S=null;const b=new xt,G=new xt;let O=null;const $=new et(0);let Q=0,q=n.width,k=n.height,L=1,X=null,W=null;const ne=new xt(0,0,q,k),le=new xt(0,0,q,k);let be=!1;const j=new m0;let Y=!1,ae=!1;const se=new yt,Te=new yt,Le=new H,Fe=new xt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function $e(){return T===null?L:1}let I=i;function sn(w,U){return n.getContext(w,U)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Of}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",fe,!1),I===null){const U="webgl2";if(I=sn(U,w),I===null)throw sn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let He,Ve,Ae,ot,we,C,M,B,J,te,Z,Me,de,ge,We,re,ve,Re,Pe,_e,Ge,Oe,it,D;function ue(){He=new aw(I),He.init(),Oe=new jT(I,He),Ve=new ew(I,He,e,Oe),Ae=new GT(I,He),Ve.reverseDepthBuffer&&h&&Ae.buffers.depth.setReversed(!0),ot=new uw(I),we=new RT,C=new XT(I,He,Ae,we,Ve,Oe,ot),M=new nw(y),B=new ow(y),J=new gM(I),it=new Q1(I,J),te=new lw(I,J,ot,it),Z=new fw(I,te,J,ot),Pe=new dw(I,Ve,C),re=new tw(we),Me=new CT(y,M,B,He,Ve,it,re),de=new eA(y,we),ge=new PT,We=new FT(He),Re=new Z1(y,M,B,Ae,Z,p,l),ve=new HT(y,Z,Ve),D=new tA(I,ot,Ve,Ae),_e=new J1(I,He,ot),Ge=new cw(I,He,ot),ot.programs=Me.programs,y.capabilities=Ve,y.extensions=He,y.properties=we,y.renderLists=ge,y.shadowMap=ve,y.state=Ae,y.info=ot}ue();const K=new QT(y,I);this.xr=K,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=He.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=He.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(w){w!==void 0&&(L=w,this.setSize(q,k,!1))},this.getSize=function(w){return w.set(q,k)},this.setSize=function(w,U,z=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,k=U,n.width=Math.floor(w*L),n.height=Math.floor(U*L),z===!0&&(n.style.width=w+"px",n.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(q*L,k*L).floor()},this.setDrawingBufferSize=function(w,U,z){q=w,k=U,L=z,n.width=Math.floor(w*z),n.height=Math.floor(U*z),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy(ne)},this.setViewport=function(w,U,z,V){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,U,z,V),Ae.viewport(b.copy(ne).multiplyScalar(L).round())},this.getScissor=function(w){return w.copy(le)},this.setScissor=function(w,U,z,V){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,U,z,V),Ae.scissor(G.copy(le).multiplyScalar(L).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(w){Ae.setScissorTest(be=w)},this.setOpaqueSort=function(w){X=w},this.setTransparentSort=function(w){W=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(w=!0,U=!0,z=!0){let V=0;if(w){let N=!1;if(T!==null){const oe=T.texture.format;N=oe===Gf||oe===Vf||oe===Hf}if(N){const oe=T.texture.type,he=oe===Mi||oe===br||oe===Bo||oe===Ds||oe===Bf||oe===zf,xe=Re.getClearColor(),ye=Re.getClearAlpha(),De=xe.r,Ie=xe.g,Se=xe.b;he?(_[0]=De,_[1]=Ie,_[2]=Se,_[3]=ye,I.clearBufferuiv(I.COLOR,0,_)):(v[0]=De,v[1]=Ie,v[2]=Se,v[3]=ye,I.clearBufferiv(I.COLOR,0,v))}else V|=I.COLOR_BUFFER_BIT}U&&(V|=I.DEPTH_BUFFER_BIT),z&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),ge.dispose(),We.dispose(),we.dispose(),M.dispose(),B.dispose(),Z.dispose(),it.dispose(),D.dispose(),Me.dispose(),K.dispose(),K.removeEventListener("sessionstart",eh),K.removeEventListener("sessionend",th),rr.stop()};function ee(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=ot.autoReset,U=ve.enabled,z=ve.autoUpdate,V=ve.needsUpdate,N=ve.type;ue(),ot.autoReset=w,ve.enabled=U,ve.autoUpdate=z,ve.needsUpdate=V,ve.type=N}function fe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ue(w){const U=w.target;U.removeEventListener("dispose",Ue),gt(U)}function gt(w){It(w),we.remove(w)}function It(w){const U=we.get(w).programs;U!==void 0&&(U.forEach(function(z){Me.releaseProgram(z)}),w.isShaderMaterial&&Me.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,z,V,N,oe){U===null&&(U=nt);const he=N.isMesh&&N.matrixWorld.determinant()<0,xe=b0(w,U,z,V,N);Ae.setMaterial(V,he);let ye=z.index,De=1;if(V.wireframe===!0){if(ye=te.getWireframeAttribute(z),ye===void 0)return;De=2}const Ie=z.drawRange,Se=z.attributes.position;let Ye=Ie.start*De,rt=(Ie.start+Ie.count)*De;oe!==null&&(Ye=Math.max(Ye,oe.start*De),rt=Math.min(rt,(oe.start+oe.count)*De)),ye!==null?(Ye=Math.max(Ye,0),rt=Math.min(rt,ye.count)):Se!=null&&(Ye=Math.max(Ye,0),rt=Math.min(rt,Se.count));const at=rt-Ye;if(at<0||at===1/0)return;it.setup(N,V,xe,z,ye);let qt,qe=_e;if(ye!==null&&(qt=J.get(ye),qe=Ge,qe.setIndex(qt)),N.isMesh)V.wireframe===!0?(Ae.setLineWidth(V.wireframeLinewidth*$e()),qe.setMode(I.LINES)):qe.setMode(I.TRIANGLES);else if(N.isLine){let Ee=V.linewidth;Ee===void 0&&(Ee=1),Ae.setLineWidth(Ee*$e()),N.isLineSegments?qe.setMode(I.LINES):N.isLineLoop?qe.setMode(I.LINE_LOOP):qe.setMode(I.LINE_STRIP)}else N.isPoints?qe.setMode(I.POINTS):N.isSprite&&qe.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)qe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))qe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ee=N._multiDrawStarts,ei=N._multiDrawCounts,Ke=N._multiDrawCount,Cn=ye?J.get(ye).bytesPerElement:1,Ur=we.get(V).currentProgram.getUniforms();for(let on=0;on<Ke;on++)Ur.setValue(I,"_gl_DrawID",on),qe.render(Ee[on]/Cn,ei[on])}else if(N.isInstancedMesh)qe.renderInstances(Ye,at,N.count);else if(z.isInstancedBufferGeometry){const Ee=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ei=Math.min(z.instanceCount,Ee);qe.renderInstances(Ye,at,ei)}else qe.render(Ye,at)};function Ze(w,U,z){w.transparent===!0&&w.side===ci&&w.forceSinglePass===!1?(w.side=rn,w.needsUpdate=!0,Qo(w,U,z),w.side=Si,w.needsUpdate=!0,Qo(w,U,z),w.side=ci):Qo(w,U,z)}this.compile=function(w,U,z=null){z===null&&(z=w),u=We.get(z),u.init(U),x.push(u),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),w!==z&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();const V=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const oe=N.material;if(oe)if(Array.isArray(oe))for(let he=0;he<oe.length;he++){const xe=oe[he];Ze(xe,z,N),V.add(xe)}else Ze(oe,z,N),V.add(oe)}),x.pop(),u=null,V},this.compileAsync=function(w,U,z=null){const V=this.compile(w,U,z);return new Promise(N=>{function oe(){if(V.forEach(function(he){we.get(he).currentProgram.isReady()&&V.delete(he)}),V.size===0){N(w);return}setTimeout(oe,10)}He.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let An=null;function Jn(w){An&&An(w)}function eh(){rr.stop()}function th(){rr.start()}const rr=new g0;rr.setAnimationLoop(Jn),typeof self<"u"&&rr.setContext(self),this.setAnimationLoop=function(w){An=w,K.setAnimationLoop(w),w===null?rr.stop():rr.start()},K.addEventListener("sessionstart",eh),K.addEventListener("sessionend",th),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(U),U=K.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,U,T),u=We.get(w,x.length),u.init(U),x.push(u),Te.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(Te),ae=this.localClippingEnabled,Y=re.init(this.clippingPlanes,ae),m=ge.get(w,g.length),m.init(),g.push(m),K.enabled===!0&&K.isPresenting===!0){const oe=y.xr.getDepthSensingMesh();oe!==null&&ec(oe,U,-1/0,y.sortObjects)}ec(w,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(X,W),Be=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Be&&Re.addToRenderList(m,w),this.info.render.frame++,Y===!0&&re.beginShadows();const z=u.state.shadowsArray;ve.render(z,w,U),Y===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,N=m.transmissive;if(u.setupLights(),U.isArrayCamera){const oe=U.cameras;if(N.length>0)for(let he=0,xe=oe.length;he<xe;he++){const ye=oe[he];ih(V,N,w,ye)}Be&&Re.render(w);for(let he=0,xe=oe.length;he<xe;he++){const ye=oe[he];nh(m,w,ye,ye.viewport)}}else N.length>0&&ih(V,N,w,U),Be&&Re.render(w),nh(m,w,U);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(y,w,U),it.resetDefaultState(),E=-1,S=null,x.pop(),x.length>0?(u=x[x.length-1],Y===!0&&re.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function ec(w,U,z,V){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){V&&Fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Te);const he=Z.update(w),xe=w.material;xe.visible&&m.push(w,he,xe,z,Fe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){const he=Z.update(w),xe=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Fe.copy(w.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Fe.copy(he.boundingSphere.center)),Fe.applyMatrix4(w.matrixWorld).applyMatrix4(Te)),Array.isArray(xe)){const ye=he.groups;for(let De=0,Ie=ye.length;De<Ie;De++){const Se=ye[De],Ye=xe[Se.materialIndex];Ye&&Ye.visible&&m.push(w,he,Ye,z,Fe.z,Se)}}else xe.visible&&m.push(w,he,xe,z,Fe.z,null)}}const oe=w.children;for(let he=0,xe=oe.length;he<xe;he++)ec(oe[he],U,z,V)}function nh(w,U,z,V){const N=w.opaque,oe=w.transmissive,he=w.transparent;u.setupLightsView(z),Y===!0&&re.setGlobalState(y.clippingPlanes,z),V&&Ae.viewport(b.copy(V)),N.length>0&&Zo(N,U,z),oe.length>0&&Zo(oe,U,z),he.length>0&&Zo(he,U,z),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function ih(w,U,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[V.id]===void 0&&(u.state.transmissionRenderTarget[V.id]=new Pr(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Yo:Mi,minFilter:Sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const oe=u.state.transmissionRenderTarget[V.id],he=V.viewport||b;oe.setSize(he.z,he.w);const xe=y.getRenderTarget();y.setRenderTarget(oe),y.getClearColor($),Q=y.getClearAlpha(),Q<1&&y.setClearColor(16777215,.5),y.clear(),Be&&Re.render(z);const ye=y.toneMapping;y.toneMapping=Ki;const De=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),u.setupLightsView(V),Y===!0&&re.setGlobalState(y.clippingPlanes,V),Zo(w,z,V),C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Se=0,Ye=U.length;Se<Ye;Se++){const rt=U[Se],at=rt.object,qt=rt.geometry,qe=rt.material,Ee=rt.group;if(qe.side===ci&&at.layers.test(V.layers)){const ei=qe.side;qe.side=rn,qe.needsUpdate=!0,rh(at,z,V,qt,qe,Ee),qe.side=ei,qe.needsUpdate=!0,Ie=!0}}Ie===!0&&(C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe))}y.setRenderTarget(xe),y.setClearColor($,Q),De!==void 0&&(V.viewport=De),y.toneMapping=ye}function Zo(w,U,z){const V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,oe=w.length;N<oe;N++){const he=w[N],xe=he.object,ye=he.geometry,De=V===null?he.material:V,Ie=he.group;xe.layers.test(z.layers)&&rh(xe,U,z,ye,De,Ie)}}function rh(w,U,z,V,N,oe){w.onBeforeRender(y,U,z,V,N,oe),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(y,U,z,V,w,oe),N.transparent===!0&&N.side===ci&&N.forceSinglePass===!1?(N.side=rn,N.needsUpdate=!0,y.renderBufferDirect(z,U,V,N,w,oe),N.side=Si,N.needsUpdate=!0,y.renderBufferDirect(z,U,V,N,w,oe),N.side=ci):y.renderBufferDirect(z,U,V,N,w,oe),w.onAfterRender(y,U,z,V,N,oe)}function Qo(w,U,z){U.isScene!==!0&&(U=nt);const V=we.get(w),N=u.state.lights,oe=u.state.shadowsArray,he=N.state.version,xe=Me.getParameters(w,N.state,oe,U,z),ye=Me.getProgramCacheKey(xe);let De=V.programs;V.environment=w.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(w.isMeshStandardMaterial?B:M).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,De===void 0&&(w.addEventListener("dispose",Ue),De=new Map,V.programs=De);let Ie=De.get(ye);if(Ie!==void 0){if(V.currentProgram===Ie&&V.lightsStateVersion===he)return oh(w,xe),Ie}else xe.uniforms=Me.getUniforms(w),w.onBeforeCompile(xe,y),Ie=Me.acquireProgram(xe,ye),De.set(ye,Ie),V.uniforms=xe.uniforms;const Se=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Se.clippingPlanes=re.uniform),oh(w,xe),V.needsLights=L0(w),V.lightsStateVersion=he,V.needsLights&&(Se.ambientLightColor.value=N.state.ambient,Se.lightProbe.value=N.state.probe,Se.directionalLights.value=N.state.directional,Se.directionalLightShadows.value=N.state.directionalShadow,Se.spotLights.value=N.state.spot,Se.spotLightShadows.value=N.state.spotShadow,Se.rectAreaLights.value=N.state.rectArea,Se.ltc_1.value=N.state.rectAreaLTC1,Se.ltc_2.value=N.state.rectAreaLTC2,Se.pointLights.value=N.state.point,Se.pointLightShadows.value=N.state.pointShadow,Se.hemisphereLights.value=N.state.hemi,Se.directionalShadowMap.value=N.state.directionalShadowMap,Se.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Se.spotShadowMap.value=N.state.spotShadowMap,Se.spotLightMatrix.value=N.state.spotLightMatrix,Se.spotLightMap.value=N.state.spotLightMap,Se.pointShadowMap.value=N.state.pointShadowMap,Se.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Ie,V.uniformsList=null,Ie}function sh(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=nl.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function oh(w,U){const z=we.get(w);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function b0(w,U,z,V,N){U.isScene!==!0&&(U=nt),C.resetTextureUnits();const oe=U.fog,he=V.isMeshStandardMaterial?U.environment:null,xe=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Bs,ye=(V.isMeshStandardMaterial?B:M).get(V.envMap||he),De=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ie=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Se=!!z.morphAttributes.position,Ye=!!z.morphAttributes.normal,rt=!!z.morphAttributes.color;let at=Ki;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(at=y.toneMapping);const qt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,qe=qt!==void 0?qt.length:0,Ee=we.get(V),ei=u.state.lights;if(Y===!0&&(ae===!0||w!==S)){const gn=w===S&&V.id===E;re.setState(V,w,gn)}let Ke=!1;V.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==ei.state.version||Ee.outputColorSpace!==xe||N.isBatchedMesh&&Ee.batching===!1||!N.isBatchedMesh&&Ee.batching===!0||N.isBatchedMesh&&Ee.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ee.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ee.instancing===!1||!N.isInstancedMesh&&Ee.instancing===!0||N.isSkinnedMesh&&Ee.skinning===!1||!N.isSkinnedMesh&&Ee.skinning===!0||N.isInstancedMesh&&Ee.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ee.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ee.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ee.instancingMorph===!1&&N.morphTexture!==null||Ee.envMap!==ye||V.fog===!0&&Ee.fog!==oe||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==re.numPlanes||Ee.numIntersection!==re.numIntersection)||Ee.vertexAlphas!==De||Ee.vertexTangents!==Ie||Ee.morphTargets!==Se||Ee.morphNormals!==Ye||Ee.morphColors!==rt||Ee.toneMapping!==at||Ee.morphTargetsCount!==qe)&&(Ke=!0):(Ke=!0,Ee.__version=V.version);let Cn=Ee.currentProgram;Ke===!0&&(Cn=Qo(V,U,N));let Ur=!1,on=!1,Gs=!1;const lt=Cn.getUniforms(),Vn=Ee.uniforms;if(Ae.useProgram(Cn.program)&&(Ur=!0,on=!0,Gs=!0),V.id!==E&&(E=V.id,on=!0),Ur||S!==w){Ae.buffers.depth.getReversed()?(se.copy(w.projectionMatrix),XS(se),jS(se),lt.setValue(I,"projectionMatrix",se)):lt.setValue(I,"projectionMatrix",w.projectionMatrix),lt.setValue(I,"viewMatrix",w.matrixWorldInverse);const Ti=lt.map.cameraPosition;Ti!==void 0&&Ti.setValue(I,Le.setFromMatrixPosition(w.matrixWorld)),Ve.logarithmicDepthBuffer&&lt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&lt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,on=!0,Gs=!0)}if(N.isSkinnedMesh){lt.setOptional(I,N,"bindMatrix"),lt.setOptional(I,N,"bindMatrixInverse");const gn=N.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),lt.setValue(I,"boneTexture",gn.boneTexture,C))}N.isBatchedMesh&&(lt.setOptional(I,N,"batchingTexture"),lt.setValue(I,"batchingTexture",N._matricesTexture,C),lt.setOptional(I,N,"batchingIdTexture"),lt.setValue(I,"batchingIdTexture",N._indirectTexture,C),lt.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&lt.setValue(I,"batchingColorTexture",N._colorsTexture,C));const Ws=z.morphAttributes;if((Ws.position!==void 0||Ws.normal!==void 0||Ws.color!==void 0)&&Pe.update(N,z,Cn),(on||Ee.receiveShadow!==N.receiveShadow)&&(Ee.receiveShadow=N.receiveShadow,lt.setValue(I,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Vn.envMap.value=ye,Vn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Vn.envMapIntensity.value=U.environmentIntensity),on&&(lt.setValue(I,"toneMappingExposure",y.toneMappingExposure),Ee.needsLights&&P0(Vn,Gs),oe&&V.fog===!0&&de.refreshFogUniforms(Vn,oe),de.refreshMaterialUniforms(Vn,V,L,k,u.state.transmissionRenderTarget[w.id]),nl.upload(I,sh(Ee),Vn,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(nl.upload(I,sh(Ee),Vn,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&lt.setValue(I,"center",N.center),lt.setValue(I,"modelViewMatrix",N.modelViewMatrix),lt.setValue(I,"normalMatrix",N.normalMatrix),lt.setValue(I,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const gn=V.uniformsGroups;for(let Ti=0,Ai=gn.length;Ti<Ai;Ti++){const ah=gn[Ti];D.update(ah,Cn),D.bind(ah,Cn)}}return Cn}function P0(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function L0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,U,z){we.get(w.texture).__webglTexture=U,we.get(w.depthTexture).__webglTexture=z;const V=we.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const z=we.get(w);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,z=0){T=w,R=U,A=z;let V=!0,N=null,oe=!1,he=!1;if(w){const ye=we.get(w);if(ye.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(ye.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(ye.__hasExternalTextures)C.rebindTextures(w,we.get(w.texture).__webglTexture,we.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Se=w.depthTexture;if(ye.__boundDepthTexture!==Se){if(Se!==null&&we.has(Se)&&(w.width!==Se.image.width||w.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const De=w.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(he=!0);const Ie=we.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?N=Ie[U][z]:N=Ie[U],oe=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?N=we.get(w).__webglMultisampledFramebuffer:Array.isArray(Ie)?N=Ie[z]:N=Ie,b.copy(w.viewport),G.copy(w.scissor),O=w.scissorTest}else b.copy(ne).multiplyScalar(L).floor(),G.copy(le).multiplyScalar(L).floor(),O=be;if(Ae.bindFramebuffer(I.FRAMEBUFFER,N)&&V&&Ae.drawBuffers(w,N),Ae.viewport(b),Ae.scissor(G),Ae.setScissorTest(O),oe){const ye=we.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,z)}else if(he){const ye=we.get(w.texture),De=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ye.__webglTexture,z||0,De)}E=-1},this.readRenderTargetPixels=function(w,U,z,V,N,oe,he){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=we.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){Ae.bindFramebuffer(I.FRAMEBUFFER,xe);try{const ye=w.texture,De=ye.format,Ie=ye.type;if(!Ve.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-V&&z>=0&&z<=w.height-N&&I.readPixels(U,z,V,N,Oe.convert(De),Oe.convert(Ie),oe)}finally{const ye=T!==null?we.get(T).__webglFramebuffer:null;Ae.bindFramebuffer(I.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(w,U,z,V,N,oe,he){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=we.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){const ye=w.texture,De=ye.format,Ie=ye.type;if(!Ve.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-V&&z>=0&&z<=w.height-N){Ae.bindFramebuffer(I.FRAMEBUFFER,xe);const Se=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Se),I.bufferData(I.PIXEL_PACK_BUFFER,oe.byteLength,I.STREAM_READ),I.readPixels(U,z,V,N,Oe.convert(De),Oe.convert(Ie),0);const Ye=T!==null?we.get(T).__webglFramebuffer:null;Ae.bindFramebuffer(I.FRAMEBUFFER,Ye);const rt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await WS(I,rt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Se),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,oe),I.deleteBuffer(Se),I.deleteSync(rt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,z=0){w.isTexture!==!0&&(ao("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-z),N=Math.floor(w.image.width*V),oe=Math.floor(w.image.height*V),he=U!==null?U.x:0,xe=U!==null?U.y:0;C.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,he,xe,N,oe),Ae.unbindTexture()},this.copyTextureToTexture=function(w,U,z=null,V=null,N=0){w.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,z=null);let oe,he,xe,ye,De,Ie,Se,Ye,rt;const at=w.isCompressedTexture?w.mipmaps[N]:w.image;z!==null?(oe=z.max.x-z.min.x,he=z.max.y-z.min.y,xe=z.isBox3?z.max.z-z.min.z:1,ye=z.min.x,De=z.min.y,Ie=z.isBox3?z.min.z:0):(oe=at.width,he=at.height,xe=at.depth||1,ye=0,De=0,Ie=0),V!==null?(Se=V.x,Ye=V.y,rt=V.z):(Se=0,Ye=0,rt=0);const qt=Oe.convert(U.format),qe=Oe.convert(U.type);let Ee;U.isData3DTexture?(C.setTexture3D(U,0),Ee=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(C.setTexture2DArray(U,0),Ee=I.TEXTURE_2D_ARRAY):(C.setTexture2D(U,0),Ee=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const ei=I.getParameter(I.UNPACK_ROW_LENGTH),Ke=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Cn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ur=I.getParameter(I.UNPACK_SKIP_ROWS),on=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,at.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,at.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ye),I.pixelStorei(I.UNPACK_SKIP_ROWS,De),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ie);const Gs=w.isDataArrayTexture||w.isData3DTexture,lt=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Vn=we.get(w),Ws=we.get(U),gn=we.get(Vn.__renderTarget),Ti=we.get(Ws.__renderTarget);Ae.bindFramebuffer(I.READ_FRAMEBUFFER,gn.__webglFramebuffer),Ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ai=0;Ai<xe;Ai++)Gs&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.get(w).__webglTexture,N,Ie+Ai),w.isDepthTexture?(lt&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.get(U).__webglTexture,N,rt+Ai),I.blitFramebuffer(ye,De,oe,he,Se,Ye,oe,he,I.DEPTH_BUFFER_BIT,I.NEAREST)):lt?I.copyTexSubImage3D(Ee,N,Se,Ye,rt+Ai,ye,De,oe,he):I.copyTexSubImage2D(Ee,N,Se,Ye,rt+Ai,ye,De,oe,he);Ae.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else lt?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Ee,N,Se,Ye,rt,oe,he,xe,qt,qe,at.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Ee,N,Se,Ye,rt,oe,he,xe,qt,at.data):I.texSubImage3D(Ee,N,Se,Ye,rt,oe,he,xe,qt,qe,at):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,N,Se,Ye,oe,he,qt,qe,at.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,N,Se,Ye,at.width,at.height,qt,at.data):I.texSubImage2D(I.TEXTURE_2D,N,Se,Ye,oe,he,qt,qe,at);I.pixelStorei(I.UNPACK_ROW_LENGTH,ei),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ke),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Cn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ur),I.pixelStorei(I.UNPACK_SKIP_IMAGES,on),N===0&&U.generateMipmaps&&I.generateMipmap(Ee),Ae.unbindTexture()},this.copyTextureToTexture3D=function(w,U,z=null,V=null,N=0){return w.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),ao('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,z,V,N)},this.initRenderTarget=function(w){we.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Ae.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,Ae.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Xe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Xe._getUnpackColorSpace()}}class iA extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class qf extends ir{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new H,h=new H,p=[],_=[],v=[],m=[];for(let u=0;u<=i;u++){const g=[],x=u/i;let y=0;u===0&&o===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let P=0;P<=n;P++){const R=P/n;f.x=-e*Math.cos(r+R*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+R*s)*Math.sin(o+x*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(R+y,1-x),g.push(c++)}d.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const x=d[u][g+1],y=d[u][g],P=d[u+1][g],R=d[u+1][g+1];(u!==0||o>0)&&p.push(x,y,R),(u!==i-1||l<Math.PI)&&p.push(y,P,R)}this.setIndex(p),this.setAttribute("position",new Zn(_,3)),this.setAttribute("normal",new Zn(v,3)),this.setAttribute("uv",new Zn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const xm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class rA{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){const f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(d))return _}return null}}}const sA=new rA;class Kf{constructor(e){this.manager=e!==void 0?e:sA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Kf.DEFAULT_MATERIAL_NAME="__DEFAULT";class oA extends Kf{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=xm.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Ho("img");function l(){d(),xm.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){d(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class aA extends Kf{constructor(e){super(e)}load(e,n,i,r){const s=new jt,o=new oA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}const ym=new yt;class lA{constructor(e,n,i=0,r=1/0){this.ray=new l0(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new jf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return ym.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ym),this}intersectObject(e,n=!0,i=[]){return kd(e,this,i,n),i.sort(Sm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)kd(e[r],this,i,n);return i.sort(Sm),i}}function Sm(t,e){return t.distance-e.distance}function kd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)kd(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Of}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Of);function Mm(t,e,n=1){const i=Nn.degToRad(90-e),r=Nn.degToRad(t);return new H(n*Math.sin(i)*Math.sin(r),n*Math.cos(i),n*Math.sin(i)*Math.cos(r))}function cA(t){const e=t.clone().normalize(),n=Nn.radToDeg(Math.asin(Nn.clamp(e.y,-1,1)));return{yaw:Nn.radToDeg(Math.atan2(e.x,e.z)),pitch:n}}const M0=({room:t,autoRotate:e=!1,fov:n,onFovChange:i,onSelectHotspot:r,onYawChange:s,onPlaceHotspot:o,placementMode:a=!1,className:l=""})=>{const c=Ce.useRef(null),d=Ce.useRef(new Map),[f,h]=Ce.useState(!1),[p,_]=Ce.useState(null),v=Ce.useRef({targetYaw:t.initialYaw??0,targetPitch:0,currentYaw:t.initialYaw??0,currentPitch:0,targetFov:n??75,currentFov:n??75,isDragging:!1,pointerStartX:0,pointerStartY:0,pointerDownX:0,pointerDownY:0,lastPinchDist:null,autoRotate:e,placementMode:a,hotspots:t.hotspots,lastEmittedYaw:t.initialYaw??0}),m=Ce.useRef({onYawChange:s,onPlaceHotspot:o,onFovChange:i});Ce.useEffect(()=>{m.current={onYawChange:s,onPlaceHotspot:o,onFovChange:i}},[s,o,i]),Ce.useEffect(()=>{v.current.autoRotate=e},[e]),Ce.useEffect(()=>{v.current.placementMode=a},[a]),Ce.useEffect(()=>{v.current.hotspots=t.hotspots},[t.hotspots]),Ce.useEffect(()=>{typeof n=="number"&&(v.current.targetFov=Nn.clamp(n,35,95))},[n]);const u=Ce.useRef(null);Ce.useEffect(()=>{const T=c.current;if(!T)return;const E=T.clientWidth||window.innerWidth,S=T.clientHeight||window.innerHeight,b=new iA,G=new yn(v.current.currentFov,E/S,.1,1100);G.position.set(0,0,0);const O=new nA({antialias:!0,powerPreference:"high-performance"});O.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),O.setSize(E,S),O.outputColorSpace=Kt,T.appendChild(O.domElement);const $=new qf(500,64,40);$.scale(-1,1,1);const Q=new Yf({color:16777215,side:Si}),q=new Yn($,Q);b.add(q);const k=new aA,L=new lA;u.current={renderer:O,scene:b,camera:G,material:Q,textureLoader:k,raycaster:L,currentTexture:null};const X=()=>{if(!c.current||!u.current)return;const Y=c.current.clientWidth||window.innerWidth,ae=c.current.clientHeight||window.innerHeight;u.current.camera.aspect=Y/ae,u.current.camera.updateProjectionMatrix(),u.current.renderer.setSize(Y,ae)},W=new ResizeObserver(X);W.observe(T),window.addEventListener("resize",X);let ne=0;const le=new H,be=new H,j=()=>{var Fe,nt;ne=requestAnimationFrame(j);const Y=v.current,ae=u.current;if(!ae)return;Y.autoRotate&&!Y.isDragging&&!Y.placementMode&&(Y.targetYaw+=.08),Y.targetPitch=Nn.clamp(Y.targetPitch,-82,82),Y.targetFov=Nn.clamp(Y.targetFov,35,95),Y.currentYaw+=(Y.targetYaw-Y.currentYaw)*.14,Y.currentPitch+=(Y.targetPitch-Y.currentPitch)*.14,Y.currentFov+=(Y.targetFov-Y.currentFov)*.16,Math.abs(ae.camera.fov-Y.currentFov)>.02&&(ae.camera.fov=Y.currentFov,ae.camera.updateProjectionMatrix()),le.copy(Mm(Y.currentYaw,Y.currentPitch,1)),ae.camera.lookAt(le),ae.renderer.render(ae.scene,ae.camera);const se=(Y.currentYaw%360+360)%360;Math.abs(se-Y.lastEmittedYaw)>.35&&(Y.lastEmittedYaw=se,(nt=(Fe=m.current).onYawChange)==null||nt.call(Fe,se));const Te=T.clientWidth||window.innerWidth,Le=T.clientHeight||window.innerHeight;for(const Be of Y.hotspots){const $e=d.current.get(Be.id);if(!$e)continue;const I=Mm(Be.yaw,Be.pitch,1);if(le.dot(I)<=.12){$e.style.opacity="0",$e.style.pointerEvents="none";continue}if(be.copy(I).multiplyScalar(450).project(ae.camera),be.z>=1){$e.style.opacity="0",$e.style.pointerEvents="none";continue}const He=(be.x*.5+.5)*Te,Ve=(-be.y*.5+.5)*Le;$e.style.left=`${He}px`,$e.style.top=`${Ve}px`,$e.style.opacity="1",$e.style.pointerEvents="auto"}};return ne=requestAnimationFrame(j),()=>{var Y;cancelAnimationFrame(ne),W.disconnect(),window.removeEventListener("resize",X),(Y=u.current)!=null&&Y.currentTexture&&u.current.currentTexture.dispose(),$.dispose(),Q.dispose(),O.dispose(),O.domElement.parentNode===T&&T.removeChild(O.domElement),u.current=null}},[]),Ce.useEffect(()=>{const T=u.current;if(!T)return;let E=!1;const S=t.panoHighResUrl||t.panoPreviewUrl;return T.currentTexture&&(h(!0),v.current.targetFov=58),T.textureLoader.load(S,b=>{var $,Q;if(E){b.dispose();return}b.colorSpace=Kt,b.minFilter=Mn,b.magFilter=Mn,b.generateMipmaps=!1;const G=T.currentTexture;T.material.map=b,T.material.needsUpdate=!0,T.currentTexture=b,G&&G!==b&&G.dispose();const O=t.initialYaw??0;v.current.targetYaw=O,v.current.currentYaw=O,v.current.targetPitch=0,v.current.currentPitch=0,v.current.targetFov=n??75,v.current.lastEmittedYaw=(O%360+360)%360,(Q=($=m.current).onYawChange)==null||Q.call($,v.current.lastEmittedYaw),setTimeout(()=>{E||h(!1)},180)},void 0,()=>{E||h(!1)}),()=>{E=!0}},[t.id,t.panoHighResUrl,t.panoPreviewUrl,t.initialYaw,n]);const g=T=>{T.target.closest('button[data-hotspot="true"]')||(T.currentTarget.setPointerCapture(T.pointerId),v.current.isDragging=!0,v.current.pointerStartX=T.clientX,v.current.pointerStartY=T.clientY,v.current.pointerDownX=T.clientX,v.current.pointerDownY=T.clientY)},x=T=>{if(!v.current.isDragging)return;const E=T.clientX-v.current.pointerStartX,S=T.clientY-v.current.pointerStartY;v.current.pointerStartX=T.clientX,v.current.pointerStartY=T.clientY;const b=v.current.currentFov/75*.22;v.current.targetYaw-=E*b,v.current.targetPitch=Nn.clamp(v.current.targetPitch+S*b,-82,82)},y=T=>{if(!v.current.isDragging)return;if(v.current.isDragging=!1,Math.hypot(T.clientX-v.current.pointerDownX,T.clientY-v.current.pointerDownY)<6&&v.current.placementMode&&m.current.onPlaceHotspot&&c.current&&u.current){const S=c.current.getBoundingClientRect(),b=new tt((T.clientX-S.left)/S.width*2-1,-((T.clientY-S.top)/S.height)*2+1);u.current.raycaster.setFromCamera(b,u.current.camera);const{yaw:G,pitch:O}=cA(u.current.raycaster.ray.direction);m.current.onPlaceHotspot(Math.round(G),Math.round(O))}},P=T=>{var S,b;const E=Nn.clamp(v.current.targetFov+T.deltaY*.04,35,95);v.current.targetFov=E,(b=(S=m.current).onFovChange)==null||b.call(S,Math.round(E))},R=T=>{var E,S;if(T.touches.length===2){const b=Math.hypot(T.touches[0].clientX-T.touches[1].clientX,T.touches[0].clientY-T.touches[1].clientY);if(v.current.lastPinchDist!==null){const G=v.current.lastPinchDist-b,O=Nn.clamp(v.current.targetFov+G*.15,35,95);v.current.targetFov=O,(S=(E=m.current).onFovChange)==null||S.call(E,Math.round(O))}v.current.lastPinchDist=b}},A=()=>{v.current.lastPinchDist=null};return F.jsxs("div",{ref:c,onPointerDown:g,onPointerMove:x,onPointerUp:y,onPointerCancel:y,onWheel:P,onTouchMove:R,onTouchEnd:A,className:`relative w-full h-full select-none overflow-hidden touch-none ${a?"cursor-crosshair":"cursor-grab active:cursor-grabbing"} ${l}`,children:[F.jsx("div",{className:`pointer-events-none absolute inset-0 z-10 bg-slate-950 transition-opacity duration-300 ${f?"opacity-65":"opacity-0"}`}),a&&F.jsxs("div",{className:"pointer-events-none absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 rounded-full bg-blue-600/95 px-4 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md",children:[F.jsx(Wv,{className:"h-3.5 w-3.5"}),F.jsx("span",{children:"Tap anywhere in the 360° view to place navigation hotspot"})]}),t.hotspots.map(T=>{const E=p===T.id;return F.jsxs("button",{type:"button","data-hotspot":"true",ref:S=>{S?d.current.set(T.id,S):d.current.delete(T.id)},onClick:S=>{S.stopPropagation(),r==null||r(T)},onMouseEnter:()=>_(T.id),onMouseLeave:()=>_(null),style:{opacity:0,left:"50%",top:"50%"},className:"hotspot-beacon group absolute z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#2563EB] text-white shadow-xl transition-transform duration-150 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-400/50","aria-label":`Go to ${T.label}`,children:[F.jsx(yy,{className:"h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}),F.jsx("span",{className:`pointer-events-none absolute bottom-full mb-2.5 whitespace-nowrap rounded-lg bg-[#0F172A]/90 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-150 ${E?"opacity-100 translate-y-0":"opacity-90 translate-y-0.5 sm:opacity-0 sm:group-hover:opacity-100"}`,children:T.label})]},T.id)}),F.jsxs("div",{className:"pointer-events-none absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-1.5 rounded-full bg-[#0F172A]/70 px-3 py-1 text-[11px] font-mono text-slate-200 backdrop-blur-md",children:[F.jsx(Ay,{className:"h-3.5 w-3.5 text-blue-400"}),F.jsx("span",{children:"Drag to look • Scroll to zoom"})]})]})},uA=({rooms:t,activeRoomId:e,currentYaw:n,fov:i=75,onSelectRoom:r,className:s=""})=>{const[o,a]=Ce.useState(!1),l=t.find(m=>m.id===e)??t[0],c=i/2*Math.PI/180,d=18,f=-Math.sin(c)*d,h=-Math.cos(c)*d,p=Math.sin(c)*d,_=-Math.cos(c)*d,v=`M 0 0 L ${f.toFixed(2)} ${h.toFixed(2)} A ${d} ${d} 0 0 1 ${p.toFixed(2)} ${_.toFixed(2)} Z`;return F.jsxs("div",{className:`rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF]/95 shadow-xl backdrop-blur-md transition-all duration-200 ${s}`,children:[F.jsxs("button",{type:"button",onClick:()=>a(m=>!m),className:"flex w-full items-center justify-between gap-3 px-3.5 py-2.5 text-left",children:[F.jsxs("div",{className:"flex items-center gap-2",children:[F.jsx("span",{className:"flex h-6 w-6 items-center justify-center rounded-lg bg-[#F8FAFC] text-[#2563EB] border border-[#E2E8F0]",children:F.jsx(by,{className:"h-3.5 w-3.5"})}),F.jsxs("div",{children:[F.jsx("p",{className:"text-[11px] font-bold uppercase tracking-wider text-[#0F172A]",children:"Floor Plan"}),l&&F.jsxs("p",{className:"text-[11px] text-slate-500",children:[l.name,l.dimensions?` • ${l.dimensions}`:""]})]})]}),F.jsx("span",{className:"text-slate-400 hover:text-[#0F172A]",children:o?F.jsx(wy,{className:"h-4 w-4"}):F.jsx(Gv,{className:"h-4 w-4"})})]}),!o&&F.jsx("div",{className:"px-3 pb-3",children:F.jsx("div",{className:"relative overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-2",children:F.jsxs("svg",{viewBox:"0 0 100 78",className:"h-40 w-56 sm:h-44 sm:w-64",role:"img","aria-label":"Interactive 2D Property Floor Plan",children:[F.jsx("defs",{children:F.jsxs("radialGradient",{id:"fovRadarGrad",cx:"0",cy:"0",r:"1",gradientUnits:"objectBoundingBox",children:[F.jsx("stop",{offset:"0%",stopColor:"#2563EB",stopOpacity:"0.45"}),F.jsx("stop",{offset:"100%",stopColor:"#2563EB",stopOpacity:"0.06"})]})}),F.jsxs("g",{stroke:"#E2E8F0",strokeWidth:"0.35",children:[F.jsx("line",{x1:"0",y1:"20",x2:"100",y2:"20"}),F.jsx("line",{x1:"0",y1:"40",x2:"100",y2:"40"}),F.jsx("line",{x1:"0",y1:"60",x2:"100",y2:"60"}),F.jsx("line",{x1:"25",y1:"0",x2:"25",y2:"78"}),F.jsx("line",{x1:"50",y1:"0",x2:"50",y2:"78"}),F.jsx("line",{x1:"75",y1:"0",x2:"75",y2:"78"})]}),F.jsx("rect",{x:"6",y:"6",width:"88",height:"66",rx:"2",fill:"#FFFFFF",stroke:"#0F172A",strokeWidth:"1.4"}),F.jsx("line",{x1:"6",y1:"38",x2:"40",y2:"38",stroke:"#0F172A",strokeWidth:"1.1"}),F.jsx("line",{x1:"56",y1:"38",x2:"94",y2:"38",stroke:"#0F172A",strokeWidth:"1.1"}),F.jsx("line",{x1:"50",y1:"46",x2:"50",y2:"72",stroke:"#0F172A",strokeWidth:"1.1",strokeDasharray:"3 2"}),F.jsx("line",{x1:"14",y1:"72",x2:"86",y2:"72",stroke:"#2563EB",strokeWidth:"2.2"}),l&&F.jsx("g",{transform:`translate(${l.floorplanCoords.x}, ${l.floorplanCoords.y}) rotate(${n})`,children:F.jsx("path",{d:v,fill:"url(#fovRadarGrad)",stroke:"#2563EB",strokeWidth:"0.4",strokeOpacity:"0.65"})}),t.map(m=>{const u=m.id===e;return F.jsxs("g",{transform:`translate(${m.floorplanCoords.x}, ${m.floorplanCoords.y})`,onClick:()=>r(m.id),className:"cursor-pointer",children:[F.jsx("circle",{r:"7",fill:"transparent"}),u&&F.jsx("circle",{r:"5.2",fill:"#2563EB",fillOpacity:"0.18"}),F.jsx("circle",{r:u?"3.3":"2.6",fill:u?"#2563EB":"#FFFFFF",stroke:u?"#FFFFFF":"#0F172A",strokeWidth:"1.2"}),F.jsx("text",{y:"7.8",textAnchor:"middle",fontSize:"4.1",fontWeight:u?"700":"600",fill:u?"#2563EB":"#0F172A",children:m.name})]},m.id)})]})})})]})},dA="modulepreload",fA=function(t,e){return new URL(t,e).href},Em={},E0=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(c=>{if(c=fA(c,i),c in Em)return;Em[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!i)for(let _=o.length-1;_>=0;_--){const v=o[_];if(v.href===c&&(!d||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":dA,d||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),d)return new Promise((_,v)=>{p.addEventListener("load",_),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};var Ns;(function(t){t.Documents="DOCUMENTS",t.Data="DATA",t.Library="LIBRARY",t.Cache="CACHE",t.External="EXTERNAL",t.ExternalStorage="EXTERNAL_STORAGE"})(Ns||(Ns={}));var Bd;(function(t){t.UTF8="utf8",t.ASCII="ascii",t.UTF16="utf16"})(Bd||(Bd={}));const Pl=$l("Filesystem",{web:()=>E0(()=>import("./web-DPVaOCHt.js"),[],import.meta.url).then(t=>new t.FilesystemWeb)}),iu={},So="http://192.168.1.1",Zf="mo360_use_mock_theta";function hA(){if(typeof window<"u"&&window.localStorage){const e=window.localStorage.getItem(Zf);if(e==="true")return!0;if(e==="false")return!1}const t=iu==null?void 0:iu.VITE_USE_MOCK_THETA;return t==="false"?!1:t==="true"?!0:!Qn.isNativePlatform()||!1}let il=hA();function w0(){if(typeof window<"u"&&window.localStorage){const t=window.localStorage.getItem(Zf);if(t==="true")return il=!0,!0;if(t==="false")return il=!1,!1}return il}function pA(t){il=t,typeof window<"u"&&window.localStorage&&window.localStorage.setItem(Zf,String(t))}function Kr(t){return new Promise(e=>setTimeout(e,t))}async function mA(t){return new Promise((e,n)=>{const i=new FileReader;i.onloadend=()=>{const r=i.result;if(typeof r!="string"){n(new Error("Failed to convert downloaded panorama blob to base64."));return}const s=r.indexOf(",");e(s>=0?r.slice(s+1):r)},i.onerror=()=>n(i.error??new Error("FileReader error")),i.readAsDataURL(t)})}function gA(t){const i=document.createElement("canvas");i.width=2048,i.height=1024;const r=i.getContext("2d");if(!r)return"";const s=r.createLinearGradient(0,0,0,1024*.5);s.addColorStop(0,"#0f172a"),s.addColorStop(1,"#1e293b"),r.fillStyle=s,r.fillRect(0,0,2048,1024*.5);const o=r.createLinearGradient(0,1024*.5,0,1024);o.addColorStop(0,"#334155"),o.addColorStop(1,"#0b1120"),r.fillStyle=o,r.fillRect(0,1024*.5,2048,1024*.5),r.strokeStyle="#C87D28",r.lineWidth=4,r.beginPath(),r.moveTo(0,1024*.5),r.lineTo(2048,1024*.5),r.stroke(),r.strokeStyle="rgba(200, 125, 40, 0.28)",r.lineWidth=2;for(let l=0;l<=2048;l+=2048/12)r.beginPath(),r.moveTo(l,0),r.lineTo(l,1024),r.stroke();for(let l=0;l<=1024;l+=1024/6)r.beginPath(),r.moveTo(0,l),r.lineTo(2048,l),r.stroke();const a=["N (0°)","E (90°)","S (180°)","W (270°)"];return r.fillStyle="#F8FAFC",r.font="bold 36px sans-serif",r.textAlign="center",a.forEach((l,c)=>{const d=c*2048/4+256;r.fillText(l,d,1024*.5-24)}),r.fillStyle="#C87D28",r.font="bold 28px monospace",r.fillText(`MO360 MOCK 360° • ROOM: ${t}`,2048/2,1024*.5+54),i.toDataURL("image/jpeg",.9)}async function vA(t=So){const e=await fetch(`${t}/osc/info`,{method:"GET",headers:{Accept:"application/json"}});if(!e.ok)throw new Error(`Failed to query THETA /osc/info (HTTP ${e.status})`);const n=await e.json();return{version:(Array.isArray(n.apiLevel)?n.apiLevel:[]).includes(2)?"2.1":"2.0",info:n}}async function ka(t,e,n){var o;const i={name:e};n&&Object.keys(n).length>0&&(i.parameters=n);const r=await fetch(`${t}/osc/commands/execute`,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Accept:"application/json"},body:JSON.stringify(i)}),s=await r.json();if(!r.ok||s.state==="error"){const a=((o=s.error)==null?void 0:o.message)??`OSC command ${e} failed (HTTP ${r.status})`;throw new Error(a)}return s}async function _A(t,e,n,i){var s;const r=Date.now();for(;Date.now()-r<i;){const o=await fetch(`${t}/osc/commands/status`,{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Accept:"application/json"},body:JSON.stringify({id:e})});if(!o.ok)throw new Error(`OSC status poll failed (HTTP ${o.status})`);const a=await o.json();if(a.state==="done")return a;if(a.state==="error")throw new Error(((s=a.error)==null?void 0:s.message)??"Camera capture failed during processing.");await Kr(n)}throw new Error(`Timed out waiting for THETA capture status after ${i}ms.`)}async function xA(t,e){const n=(a,l,c,d)=>{e==null||e({step:a,progress:l,message:c,fileUrl:d})};n("connecting",10,"Connecting to Mock RICOH THETA (OSC v2.1)..."),await Kr(250),n("capturing",30,"Triggering 360° dual-fisheye shutter..."),await Kr(450);const i=`http://192.168.1.1/files/100RICOH/R001_${t}.JPG`;n("processing",55,"Stitching equirectangular panorama...",i),await Kr(450),n("downloading",78,"Streaming high-res JPEG to local storage...",i);const r=gA(t),s=`panos/${t}_${Date.now()}.jpg`;if(Qn.isNativePlatform()&&r.includes(",")){const a=r.split(",")[1];await Pl.writeFile({path:s,data:a,directory:Ns.Data,recursive:!0})}await Kr(300),n("wiping",92,"Wiping camera storage (camera.delete)...",i),await Kr(200);const o=new Date().toISOString();return n("done",100,"Capture, download, and camera wipe complete.",i),{roomId:t,localPath:s,displayUrl:r,cameraFileUrl:i,apiVersion:"mock",wipedFromCamera:!0,capturedAt:o}}async function yA(t,e={},n){var c,d;if(w0())return xA(t,n);const i=e.baseUrl??So,r=e.pollIntervalMs??500,s=e.timeoutMs??3e4,o=(f,h,p,_)=>{n==null||n({step:f,progress:h,message:p,fileUrl:_})};o("connecting",10,`Querying ${i}/osc/info...`);const{version:a}=await vA(i);let l;a==="2.0"&&(l=(c=(await ka(i,"camera.startSession")).results)==null?void 0:c.sessionId);try{o("capturing",25,`Executing camera.takePicture (OSC v${a})...`);let h=await ka(i,"camera.takePicture",l?{sessionId:l}:void 0);h.state==="inProgress"&&h.id&&(o("processing",45,"Stitching equirectangular panorama..."),h=await _A(i,h.id,r,s));const p=(d=h.results)==null?void 0:d.fileUrl;if(!p)throw new Error("THETA camera.takePicture completed without returning results.fileUrl.");o("downloading",70,"Downloading equirectangular JPEG to device...",p);const _=await fetch(p,{method:"GET"});if(!_.ok)throw new Error(`Failed to download panorama from ${p} (HTTP ${_.status})`);const v=await _.blob(),m=await mA(v),u=`panos/${t}_${Date.now()}.jpg`;await Pl.writeFile({path:u,data:m,directory:Ns.Data,recursive:!0});const g=await Pl.getUri({path:u,directory:Ns.Data}),x=Qn.isNativePlatform()?Qn.convertFileSrc(g.uri):URL.createObjectURL(v);o("wiping",90,"Deleting image from camera storage (camera.delete)...",p);const y={fileUrls:[p]};l&&(y.sessionId=l),await ka(i,"camera.delete",y);const P=new Date().toISOString();return o("done",100,"Capture, download, and camera wipe complete.",p),{roomId:t,localPath:u,displayUrl:x,cameraFileUrl:p,apiVersion:a,wipedFromCamera:!0,capturedAt:P}}finally{if(a==="2.0"&&l)try{await ka(i,"camera.closeSession",{sessionId:l})}catch{}}}const wm=$l("Network",{web:()=>E0(()=>import("./web-Dhz6S3AL.js"),[],import.meta.url).then(t=>new t.NetworkWeb)}),ru={},T0="mo360_sync_queue_v1",SA="mo360_tour_manifest_v1_",A0="mo360_last_synced_at_v1",MA="mo360-tours";let Mt=EA(),Qt=typeof navigator<"u"?navigator.onLine:!0,us=Qt?"wifi":"none",rl=!1,C0=TA(),Tm=!1;const zd=new Set;function EA(){if(typeof localStorage>"u")return[];try{const t=localStorage.getItem(T0);if(!t)return[];const e=JSON.parse(t);return Array.isArray(e)?e:[]}catch{return[]}}function wA(t){if(!(typeof localStorage>"u"))try{localStorage.setItem(T0,JSON.stringify(t))}catch{}}function TA(){if(typeof localStorage>"u")return null;try{return localStorage.getItem(A0)}catch{return null}}function AA(t){if(!(typeof localStorage>"u"))try{localStorage.setItem(A0,t)}catch{}}async function Qf(t,e){if(Qn.isNativePlatform())try{await Pl.writeFile({path:`${MA}/${t}`,data:JSON.stringify(e,null,2),directory:Ns.Data,encoding:Bd.UTF8,recursive:!0})}catch{}}async function R0(t){if(typeof localStorage<"u")try{localStorage.setItem(`${SA}${t.id}`,JSON.stringify(t))}catch{}await Qf(`${t.id}/manifest.json`,t)}function ys(){let t=0,e=0,n=0,i=0;for(const r of Mt)r.status==="pending"?t+=1:r.status==="syncing"?e+=1:r.status==="synced"?n+=1:r.status==="failed"&&(i+=1);return{isOnline:Qt,connectionType:us,isFlushing:rl,pendingCount:t,syncingCount:e,syncedCount:n,failedCount:i,totalCount:Mt.length,lastSyncedAt:C0,items:Mt.map(r=>({...r}))}}function pi(){const t=ys();for(const e of zd)e(t)}async function Hd(){wA(Mt),await Qf("sync-queue.json",Mt)}async function CA(t){const e=typeof import.meta<"u"&&(ru==null?void 0:ru.VITE_SYNC_ENDPOINT);if(e){const n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tourId:t.tourId,room:t.room,localImageUri:t.localImageUri,previewImageUri:t.previewImageUri,manifest:t.manifestSnapshot})});if(!n.ok)throw new Error(`Cloud sync failed with HTTP ${n.status}`);return}await new Promise(n=>setTimeout(n,180))}function RA(t){const e=!Qt;Qt=t.connected,us=t.connectionType,pi(),Qt&&(e||Mt.some(n=>n.status==="pending"))&&Ll()}async function Jf(){if(!Tm){Tm=!0;try{const t=await wm.getStatus();Qt=t.connected,us=t.connectionType}catch{Qt=typeof navigator<"u"?navigator.onLine:!0,us=Qt?"wifi":"none"}try{await wm.addListener("networkStatusChange",RA)}catch{}typeof window<"u"&&(window.addEventListener("online",()=>{Qt=!0,us="wifi",pi(),Ll()}),window.addEventListener("offline",()=>{Qt=!1,us="none",pi()})),pi(),Qt&&Mt.some(t=>t.status==="pending")&&Ll()}}async function bA(t){await Jf();const e=new Date().toISOString(),n={...t.room,capturedAt:t.room.capturedAt??e,synced:!1},i={...t.tour,updatedAt:e,rooms:t.tour.rooms.some(s=>s.id===n.id)?t.tour.rooms.map(s=>s.id===n.id?n:s):[...t.tour.rooms,n]};await R0(i);const r={id:`sync_${t.tour.id}_${n.id}_${Date.now()}`,tourId:t.tour.id,room:n,localImageUri:t.localImageUri,previewImageUri:t.previewImageUri,manifestSnapshot:i,status:"pending",attempts:0,createdAt:e,updatedAt:e};return Mt=[...Mt.filter(s=>!(s.tourId===r.tourId&&s.room.id===r.room.id&&s.status!=="synced")),r],await Hd(),await Qf(`${t.tour.id}/rooms/${n.id}.json`,r),pi(),Qt&&Ll(),r}function PA(){return ys()}async function Ll(t){if(await Jf(),!Qt||rl)return ys();const e=Mt.map((i,r)=>i.status==="pending"||i.status==="failed"?r:-1).filter(i=>i!==-1);if(e.length===0)return ys();rl=!0,pi();const n=CA;try{for(const i of e){if(!Qt)break;const r=Mt[i];if(r){Mt[i]={...r,status:"syncing",attempts:r.attempts+1,updatedAt:new Date().toISOString(),lastError:void 0},await Hd(),pi();try{await n(Mt[i]);const s=new Date().toISOString(),o={...Mt[i].room,synced:!0},a={...Mt[i].manifestSnapshot,updatedAt:s,rooms:Mt[i].manifestSnapshot.rooms.map(l=>l.id===o.id?o:l)};await R0(a),Mt[i]={...Mt[i],room:o,manifestSnapshot:a,status:"synced",updatedAt:s},C0=s,AA(s)}catch(s){Mt[i]={...Mt[i],status:"failed",updatedAt:new Date().toISOString(),lastError:s instanceof Error?s.message:"Unknown sync error"}}await Hd(),pi()}}}finally{rl=!1,pi()}return ys()}function LA(t){return zd.add(t),Jf(),t(ys()),()=>{zd.delete(t)}}const Am=[{id:"shutter",label:"Triggering Shutter",steps:["connecting","capturing"]},{id:"stitch",label:"Internal Stitching",steps:["processing"]},{id:"download",label:"Downloading to Pixel",steps:["downloading"]},{id:"wipe",label:"Wiping Theta Memory",steps:["wiping"]},{id:"ready",label:"Ready",steps:["done"]}],DA=({tour:t,onUpdateTour:e,onSwitchToViewer:n})=>{var $,Q,q;const[i,r]=Ce.useState((($=t.rooms[0])==null?void 0:$.id)??"living-room"),[s,o]=Ce.useState(((Q=t.rooms[1])==null?void 0:Q.id)??((q=t.rooms[0])==null?void 0:q.id)??""),[a,l]=Ce.useState(()=>w0()),[c,d]=Ce.useState("hdr"),[f,h]=Ce.useState(200),[p,_]=Ce.useState("1/125"),[v,m]=Ce.useState(!1),[u,g]=Ce.useState(null),[x,y]=Ce.useState(null),[P,R]=Ce.useState(!1),[A,T]=Ce.useState(()=>PA());Ce.useEffect(()=>LA(T),[]);const E=Ce.useMemo(()=>t.rooms.find(k=>k.id===i)??t.rooms[0],[t.rooms,i]);Ce.useEffect(()=>{if(s===i){const k=t.rooms.find(L=>L.id!==i);k&&o(k.id)}},[i,s,t.rooms]);const S=()=>{const k=!a;pA(k),l(k)},b=async()=>{if(!(v||!E)){m(!0),y(null),g({step:"connecting",progress:5,message:`Connecting to ${So}...`});try{const k=await yA(E.id,{baseUrl:So,hdr:c==="hdr",exposureCompensation:c==="hdr"?0:void 0},W=>{g(W)}),L={...E,panoPreviewUrl:k.displayUrl||E.panoPreviewUrl,panoHighResUrl:k.displayUrl||E.panoHighResUrl,capturedAt:k.capturedAt,synced:!1},X={...t,updatedAt:k.capturedAt,rooms:t.rooms.map(W=>W.id===L.id?L:W)};e(X),await bA({tour:X,room:L,localImageUri:k.localPath,previewImageUri:k.displayUrl})}catch(k){y(k instanceof Error?k.message:"Capture failed.")}finally{m(!1)}}},G=(k,L)=>{if(!E||!s)return;const X=t.rooms.find(le=>le.id===s);if(!X)return;const W={id:`hs-${E.id}-to-${X.id}-${Date.now()}`,targetRoomId:X.id,yaw:k,pitch:L,label:X.name},ne={...E,hotspots:[...E.hotspots,W]};e({...t,updatedAt:new Date().toISOString(),rooms:t.rooms.map(le=>le.id===E.id?ne:le)}),R(!1)},O=Ce.useMemo(()=>u?Am.findIndex(k=>k.steps.includes(u.step)):-1,[u]);return F.jsxs("div",{className:"flex h-full w-full flex-col bg-[#090D16] text-slate-100 select-none",children:[F.jsxs("header",{className:"flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/90 bg-[#0D1320] px-4 py-2.5",children:[F.jsxs("div",{className:"flex items-center gap-3",children:[F.jsxs("div",{className:"flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1",children:[F.jsx("span",{className:"h-2 w-2 rounded-full bg-[#10B981] animate-pulse"}),F.jsx(ky,{className:"h-3.5 w-3.5 text-[#10B981]"}),F.jsx("span",{className:"font-mono text-xs font-medium text-emerald-300",children:So}),F.jsx("span",{className:"hidden sm:inline text-[11px] text-slate-400",children:"• Ricoh Theta SC/S"})]}),F.jsxs("div",{className:"hidden md:flex items-center gap-3 text-xs text-slate-300 font-mono",children:[F.jsxs("span",{className:"flex items-center gap-1.5 rounded-lg bg-slate-900/90 px-2.5 py-1 border border-slate-800",children:[F.jsx(Sy,{className:"h-3.5 w-3.5 text-[#10B981]"}),"84%"]}),F.jsxs("span",{className:"flex items-center gap-1.5 rounded-lg bg-slate-900/90 px-2.5 py-1 border border-slate-800",children:[F.jsx(Ry,{className:"h-3.5 w-3.5 text-blue-400"}),"Pixel 9 Pro: 184 GB free"]}),F.jsxs("span",{className:"flex items-center gap-1.5 rounded-lg bg-slate-900/90 px-2.5 py-1 border border-slate-800",children:[F.jsx(Iy,{className:"h-3.5 w-3.5 text-amber-400"}),"Sync: ",A.pendingCount," pending"]})]})]}),F.jsxs("div",{className:"flex items-center gap-2",children:[F.jsxs("button",{type:"button",onClick:S,className:`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${a?"border-amber-500/40 bg-amber-500/15 text-amber-300":"border-emerald-500/40 bg-emerald-500/15 text-emerald-300"}`,children:[F.jsx("span",{className:`h-2 w-2 rounded-full ${a?"bg-amber-400":"bg-[#10B981]"}`}),F.jsxs("span",{children:["USE_MOCK_THETA: ",a?"ON":"OFF"]})]}),n&&F.jsxs("button",{type:"button",onClick:n,className:"flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition",children:[F.jsx(Cy,{className:"h-3.5 w-3.5 text-blue-400"}),F.jsx("span",{children:"Preview Tour"})]})]})]}),F.jsxs("div",{className:"relative flex flex-1 flex-col lg:flex-row overflow-hidden",children:[F.jsxs("div",{className:"relative flex-1 min-h-[260px] bg-black",children:[E&&F.jsx(M0,{room:E,placementMode:P,onPlaceHotspot:G,onSelectHotspot:k=>r(k.targetRoomId)}),F.jsxs("div",{className:"pointer-events-none absolute top-3 left-3 z-20 flex items-center gap-2 rounded-xl border border-slate-700/70 bg-[#090D16]/80 px-3 py-1.5 backdrop-blur-md",children:[F.jsx("span",{className:"h-2 w-2 rounded-full bg-[#2563EB]"}),F.jsx("span",{className:"text-xs font-semibold text-white",children:E==null?void 0:E.name}),(E==null?void 0:E.capturedAt)&&F.jsx("span",{className:"font-mono text-[10px] text-emerald-400",children:"CAPTURED"})]})]}),F.jsxs("aside",{className:"flex w-full lg:w-[390px] shrink-0 flex-col gap-4 overflow-y-auto border-t lg:border-t-0 lg:border-l border-slate-800 bg-[#0D1320] p-4",children:[F.jsxs("div",{children:[F.jsx("label",{className:"mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"Active Capture Room"}),F.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:t.rooms.map(k=>{const L=k.id===(E==null?void 0:E.id);return F.jsx("button",{type:"button",onClick:()=>r(k.id),className:`rounded-xl border px-2.5 py-2 text-xs font-semibold transition truncate ${L?"border-[#2563EB] bg-[#2563EB]/20 text-white shadow-sm":"border-slate-800 bg-slate-900/70 text-slate-300 hover:border-slate-700"}`,children:k.name},k.id)})})]}),F.jsxs("div",{children:[F.jsxs("label",{className:"mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400",children:[F.jsx(Oy,{className:"h-3.5 w-3.5 text-amber-400"}),"Exposure Preset"]}),F.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"auto",title:"Auto",sub:"Balanced"},{id:"hdr",title:"HDR Bracket",sub:"-2 / 0 / +2 EV"},{id:"manual",title:"Manual",sub:"ISO / Shutter"}].map(k=>{const L=c===k.id;return F.jsxs("button",{type:"button",onClick:()=>d(k.id),className:`flex flex-col items-start rounded-xl border p-2.5 text-left transition ${L?"border-blue-500 bg-blue-500/15 text-white":"border-slate-800 bg-slate-900/70 text-slate-400 hover:border-slate-700"}`,children:[F.jsx("span",{className:"text-xs font-bold",children:k.title}),F.jsx("span",{className:"mt-0.5 font-mono text-[10px] opacity-80",children:k.sub})]},k.id)})}),c==="manual"&&F.jsxs("div",{className:"mt-2 grid grid-cols-2 gap-2 rounded-xl border border-slate-800 bg-slate-900/80 p-2.5",children:[F.jsxs("label",{className:"text-[11px] text-slate-400",children:["ISO",F.jsx("select",{value:f,onChange:k=>h(Number(k.target.value)),className:"mt-1 w-full rounded-lg border border-slate-700 bg-[#090D16] px-2 py-1 font-mono text-xs text-white",children:[100,200,400,800,1600].map(k=>F.jsxs("option",{value:k,children:["ISO ",k]},k))})]}),F.jsxs("label",{className:"text-[11px] text-slate-400",children:["Shutter",F.jsx("select",{value:p,onChange:k=>_(k.target.value),className:"mt-1 w-full rounded-lg border border-slate-700 bg-[#090D16] px-2 py-1 font-mono text-xs text-white",children:["1/30","1/60","1/125","1/250","1/500"].map(k=>F.jsxs("option",{value:k,children:[k,"s"]},k))})]})]})]}),F.jsxs("button",{type:"button",disabled:v,onClick:b,className:"flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#2563EB] px-4 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 active:scale-[0.99] disabled:opacity-60",children:[v?F.jsx(xp,{className:"h-5 w-5 animate-spin"}):F.jsx(Vv,{className:"h-5 w-5"}),F.jsx("span",{children:v?"Capturing & Offloading...":"Capture Room & Auto-Offload"})]}),F.jsxs("div",{className:"space-y-1.5 rounded-2xl border border-slate-800 bg-[#090D16] p-3",children:[F.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1",children:[F.jsx("span",{children:"OSC PIPELINE"}),F.jsx("span",{children:u?`${u.progress}%`:"IDLE"})]}),F.jsx("div",{className:"grid grid-cols-1 gap-1.5",children:Am.map((k,L)=>{const X=O>L||O===4&&L===4,W=O===L&&(u==null?void 0:u.step)!=="done";return F.jsxs("div",{className:`flex items-center justify-between rounded-xl border px-3 py-1.5 text-xs font-medium transition ${X?"border-emerald-500/40 bg-emerald-500/10 text-emerald-300":W?"border-blue-500/50 bg-blue-500/15 text-blue-200":"border-slate-800/80 bg-slate-900/50 text-slate-500"}`,children:[F.jsx("span",{children:k.label}),X?F.jsx(Ty,{className:"h-3.5 w-3.5 text-[#10B981]"}):W?F.jsx(xp,{className:"h-3.5 w-3.5 animate-spin text-blue-400"}):F.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-slate-700"})]},k.id)})}),x&&F.jsx("p",{className:"mt-2 rounded-lg bg-red-500/15 px-2.5 py-1.5 text-xs text-red-300 border border-red-500/30",children:x})]}),F.jsxs("div",{className:"rounded-2xl border border-slate-800 bg-slate-900/60 p-3",children:[F.jsx("label",{className:"mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-slate-400",children:"Drop Navigation Hotspot"}),F.jsxs("div",{className:"flex items-center gap-2",children:[F.jsx("select",{value:s,onChange:k=>o(k.target.value),className:"flex-1 rounded-xl border border-slate-700 bg-[#090D16] px-2.5 py-2 text-xs font-medium text-white",children:t.rooms.filter(k=>k.id!==(E==null?void 0:E.id)).map(k=>F.jsxs("option",{value:k.id,children:["Link to: ",k.name]},k.id))}),F.jsxs("button",{type:"button",onClick:()=>R(k=>!k),className:`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition ${P?"bg-blue-600 text-white shadow-md":"border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700"}`,children:[F.jsx(Wv,{className:"h-3.5 w-3.5"}),F.jsx("span",{children:P?"Tap 360°":"Place Pin"})]})]})]})]})]})]})};function UA(){if(typeof window<"u"){const e=new URLSearchParams(window.location.search).get("mode");if(e==="capture")return"capture";if(e==="viewer")return"viewer"}return Qn.isNativePlatform()?"capture":"viewer"}function IA(){return typeof window>"u"?!1:new URLSearchParams(window.location.search).get("unbranded")==="true"}const NA=()=>{const[t,e]=Ce.useState(UA),[n]=Ce.useState(IA),[i,r]=Ce.useState(Rc),[s,o]=Ce.useState(Rc.rooms[0].id),[a,l]=Ce.useState(Rc.rooms[0].initialYaw),[c,d]=Ce.useState(75),[f,h]=Ce.useState(!1),[p,_]=Ce.useState(!1),[v,m]=Ce.useState(!1),u=Ce.useMemo(()=>i.rooms.find(y=>y.id===s)??i.rooms[0],[i.rooms,s]);Ce.useEffect(()=>{const y=()=>m(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",y),()=>document.removeEventListener("fullscreenchange",y)},[]);const g=async()=>{try{await navigator.clipboard.writeText(window.location.href),_(!0),setTimeout(()=>_(!1),2e3)}catch{}},x=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{}};return t==="capture"?F.jsx(DA,{tour:i,onUpdateTour:r,onSwitchToViewer:()=>e("viewer")}):F.jsxs("main",{className:"relative h-full w-full overflow-hidden bg-[#F8FAFC] text-[#0F172A]",children:[F.jsx(M0,{room:u,autoRotate:f,fov:c,onFovChange:d,onYawChange:l,onSelectHotspot:y=>o(y.targetRoomId)}),F.jsxs("header",{className:"pointer-events-auto absolute top-4 left-4 z-30 flex max-w-[calc(100vw-2rem)] sm:max-w-md flex-col gap-2.5 rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF]/88 p-3.5 shadow-xl backdrop-blur-md",children:[F.jsxs("div",{className:"flex items-start justify-between gap-3",children:[F.jsxs("div",{className:"min-w-0",children:[F.jsx("h1",{className:"truncate font-display text-base sm:text-lg font-bold tracking-tight text-[#0F172A]",children:i.title}),F.jsx("p",{className:"truncate text-xs text-slate-500",children:i.address})]}),F.jsx("button",{type:"button",onClick:g,className:"flex shrink-0 items-center gap-1.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1.5 text-xs font-semibold text-[#0F172A] transition hover:border-[#2563EB]/40 hover:text-[#2563EB]",title:"Copy tour link",children:p?F.jsxs(F.Fragment,{children:[F.jsx(Ey,{className:"h-3.5 w-3.5 text-[#10B981]"}),F.jsx("span",{className:"text-[#10B981]",children:"Copied"})]}):F.jsxs(F.Fragment,{children:[F.jsx(Fy,{className:"h-3.5 w-3.5 text-[#2563EB]"}),F.jsx("span",{children:"Share"})]})})]}),F.jsxs("div",{className:"relative",children:[F.jsx("select",{"aria-label":"Select Room",value:u.id,onChange:y=>o(y.target.value),className:"w-full appearance-none rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] py-2 pl-3 pr-9 text-xs font-semibold text-[#0F172A] outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20",children:i.rooms.map(y=>F.jsxs("option",{value:y.id,children:[y.name,y.dimensions?` (${y.dimensions})`:""]},y.id))}),F.jsx(Gv,{className:"pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"})]})]}),F.jsxs("div",{className:"pointer-events-auto absolute top-4 right-4 z-30 flex flex-col items-end gap-2",children:[F.jsxs("div",{className:"flex items-center gap-1.5 rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF]/88 p-1.5 shadow-lg backdrop-blur-md",children:[F.jsxs("button",{type:"button",onClick:()=>h(y=>!y),className:`flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs font-semibold transition ${f?"bg-[#2563EB] text-white":"text-[#0F172A] hover:bg-[#F8FAFC]"}`,title:f?"Pause auto-rotate":"Auto-rotate view",children:[f?F.jsx(Dy,{className:"h-3.5 w-3.5"}):F.jsx(Ny,{className:"h-3.5 w-3.5"}),F.jsx("span",{className:"hidden sm:inline",children:f?"Pause":"Auto-Rotate"})]}),F.jsx("button",{type:"button",onClick:x,className:"rounded-xl p-1.5 text-[#0F172A] hover:bg-[#F8FAFC] transition",title:v?"Exit Fullscreen":"Enter Fullscreen","aria-label":"Toggle Fullscreen",children:v?F.jsx(Ly,{className:"h-4 w-4"}):F.jsx(Py,{className:"h-4 w-4"})}),!n&&F.jsxs("button",{type:"button",onClick:()=>e("capture"),className:"hidden sm:flex items-center gap-1.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1.5 text-xs font-semibold text-[#0F172A] hover:border-[#2563EB]/40 hover:text-[#2563EB] transition",title:"Open Capture HUD",children:[F.jsx(Vv,{className:"h-3.5 w-3.5 text-[#2563EB]"}),F.jsx("span",{children:"Capture HUD"})]})]}),!n&&F.jsxs("div",{className:"hidden md:flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF]/88 px-3.5 py-2 shadow-lg backdrop-blur-md",children:[F.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-xl bg-[#2563EB]/10 text-[#2563EB]",children:F.jsx(My,{className:"h-4 w-4"})}),F.jsxs("div",{className:"text-right",children:[F.jsx("p",{className:"text-xs font-bold text-[#0F172A]",children:i.agencyName}),i.agentName&&F.jsxs("p",{className:"flex items-center justify-end gap-1 text-[11px] text-slate-500",children:[F.jsx("span",{children:i.agentName}),i.agentPhone&&F.jsxs(F.Fragment,{children:[F.jsx("span",{children:"•"}),F.jsx(Uy,{className:"h-3 w-3 text-[#2563EB]"}),F.jsx("span",{children:i.agentPhone})]})]})]})]})]}),F.jsx("nav",{"aria-label":"Rooms",className:"pointer-events-auto absolute bottom-4 left-1/2 -translate-x-1/2 z-30 hidden md:flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-[#FFFFFF]/90 p-1.5 shadow-xl backdrop-blur-md",children:i.rooms.map(y=>{const P=y.id===u.id;return F.jsx("button",{type:"button",onClick:()=>o(y.id),className:`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${P?"bg-[#2563EB] text-white shadow-sm":"text-[#0F172A] hover:bg-[#F8FAFC]"}`,children:y.name},y.id)})}),F.jsx(uA,{rooms:i.rooms,activeRoomId:u.id,currentYaw:a,fov:c,onSelectRoom:o,className:"pointer-events-auto absolute bottom-4 right-4 z-30"})]})};su.createRoot(document.getElementById("root")).render(F.jsx($0.StrictMode,{children:F.jsx(NA,{})}));export{Bd as E,zv as W,my as b};
//# sourceMappingURL=index-CEZh3wGD.js.map
