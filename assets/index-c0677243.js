(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Ds(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var T0={exports:{}},ku={},A0={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ns=Symbol.for("react.element"),kS=Symbol.for("react.portal"),FS=Symbol.for("react.fragment"),zS=Symbol.for("react.strict_mode"),BS=Symbol.for("react.profiler"),HS=Symbol.for("react.provider"),GS=Symbol.for("react.context"),VS=Symbol.for("react.forward_ref"),WS=Symbol.for("react.suspense"),jS=Symbol.for("react.memo"),$S=Symbol.for("react.lazy"),Fp=Symbol.iterator;function XS(t){return t===null||typeof t!="object"?null:(t=Fp&&t[Fp]||t["@@iterator"],typeof t=="function"?t:null)}var C0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R0=Object.assign,P0={};function pa(t,e,n){this.props=t,this.context=e,this.refs=P0,this.updater=n||C0}pa.prototype.isReactComponent={};pa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};pa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function L0(){}L0.prototype=pa.prototype;function ah(t,e,n){this.props=t,this.context=e,this.refs=P0,this.updater=n||C0}var sh=ah.prototype=new L0;sh.constructor=ah;R0(sh,pa.prototype);sh.isPureReactComponent=!0;var zp=Array.isArray,O0=Object.prototype.hasOwnProperty,lh={current:null},D0={key:!0,ref:!0,__self:!0,__source:!0};function N0(t,e,n){var r,i={},o=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(o=""+e.key),e)O0.call(e,r)&&!D0.hasOwnProperty(r)&&(i[r]=e[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in s=t.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Ns,type:t,key:o,ref:a,props:i,_owner:lh.current}}function qS(t,e){return{$$typeof:Ns,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function uh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ns}function YS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bp=/\/+/g;function gc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?YS(""+t.key):e.toString(36)}function Fl(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ns:case kS:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+gc(a,0):r,zp(i)?(n="",t!=null&&(n=t.replace(Bp,"$&/")+"/"),Fl(i,e,n,"",function(u){return u})):i!=null&&(uh(i)&&(i=qS(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Bp,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",zp(t))for(var s=0;s<t.length;s++){o=t[s];var l=r+gc(o,s);a+=Fl(o,e,n,l,i)}else if(l=XS(t),typeof l=="function")for(t=l.call(t),s=0;!(o=t.next()).done;)o=o.value,l=r+gc(o,s++),a+=Fl(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ws(t,e,n){if(t==null)return t;var r=[],i=0;return Fl(t,r,"","",function(o){return e.call(n,o,i++)}),r}function KS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},zl={transition:null},ZS={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:zl,ReactCurrentOwner:lh};Qe.Children={map:Ws,forEach:function(t,e,n){Ws(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ws(t,function(){e++}),e},toArray:function(t){return Ws(t,function(e){return e})||[]},only:function(t){if(!uh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Qe.Component=pa;Qe.Fragment=FS;Qe.Profiler=BS;Qe.PureComponent=ah;Qe.StrictMode=zS;Qe.Suspense=WS;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZS;Qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=R0({},t.props),i=t.key,o=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,a=lh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)O0.call(e,l)&&!D0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ns,type:t.type,key:i,ref:o,props:r,_owner:a}};Qe.createContext=function(t){return t={$$typeof:GS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:HS,_context:t},t.Consumer=t};Qe.createElement=N0;Qe.createFactory=function(t){var e=N0.bind(null,t);return e.type=t,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(t){return{$$typeof:VS,render:t}};Qe.isValidElement=uh;Qe.lazy=function(t){return{$$typeof:$S,_payload:{_status:-1,_result:t},_init:KS}};Qe.memo=function(t,e){return{$$typeof:jS,type:t,compare:e===void 0?null:e}};Qe.startTransition=function(t){var e=zl.transition;zl.transition={};try{t()}finally{zl.transition=e}};Qe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Qe.useCallback=function(t,e){return dn.current.useCallback(t,e)};Qe.useContext=function(t){return dn.current.useContext(t)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};Qe.useEffect=function(t,e){return dn.current.useEffect(t,e)};Qe.useId=function(){return dn.current.useId()};Qe.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};Qe.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};Qe.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};Qe.useMemo=function(t,e){return dn.current.useMemo(t,e)};Qe.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};Qe.useRef=function(t){return dn.current.useRef(t)};Qe.useState=function(t){return dn.current.useState(t)};Qe.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};Qe.useTransition=function(){return dn.current.useTransition()};Qe.version="18.2.0";A0.exports=Qe;var tt=A0.exports;const I0=Ds(tt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QS=tt,JS=Symbol.for("react.element"),eM=Symbol.for("react.fragment"),tM=Object.prototype.hasOwnProperty,nM=QS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rM={key:!0,ref:!0,__self:!0,__source:!0};function U0(t,e,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)tM.call(e,r)&&!rM.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:JS,type:t,key:o,ref:a,props:i,_owner:nM.current}}ku.Fragment=eM;ku.jsx=U0;ku.jsxs=U0;T0.exports=ku;var Pe=T0.exports,If={},k0={exports:{}},Pn={},F0={exports:{}},z0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,W){var N=z.length;z.push(W);e:for(;0<N;){var V=N-1>>>1,Y=z[V];if(0<i(Y,W))z[V]=W,z[N]=Y,N=V;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var W=z[0],N=z.pop();if(N!==W){z[0]=N;e:for(var V=0,Y=z.length,G=Y>>>1;V<G;){var $=2*(V+1)-1,q=z[$],re=$+1,F=z[re];if(0>i(q,N))re<Y&&0>i(F,q)?(z[V]=F,z[re]=N,V=re):(z[V]=q,z[$]=N,V=$);else if(re<Y&&0>i(F,N))z[V]=F,z[re]=N,V=re;else break e}}return W}function i(z,W){var N=z.sortIndex-W.sortIndex;return N!==0?N:z.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();t.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,d=null,h=3,p=!1,g=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(z){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=z)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function x(z){if(v=!1,y(z),!g)if(n(l)!==null)g=!0,D(S);else{var W=n(u);W!==null&&J(x,W.startTime-z)}}function S(z,W){g=!1,v&&(v=!1,f(A),A=-1),p=!0;var N=h;try{for(y(W),d=n(l);d!==null&&(!(d.expirationTime>W)||z&&!B());){var V=d.callback;if(typeof V=="function"){d.callback=null,h=d.priorityLevel;var Y=V(d.expirationTime<=W);W=t.unstable_now(),typeof Y=="function"?d.callback=Y:d===n(l)&&r(l),y(W)}else r(l);d=n(l)}if(d!==null)var G=!0;else{var $=n(u);$!==null&&J(x,$.startTime-W),G=!1}return G}finally{d=null,h=N,p=!1}}var M=!1,E=null,A=-1,w=5,b=-1;function B(){return!(t.unstable_now()-b<w)}function k(){if(E!==null){var z=t.unstable_now();b=z;var W=!0;try{W=E(!0,z)}finally{W?te():(M=!1,E=null)}}else M=!1}var te;if(typeof _=="function")te=function(){_(k)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,L=R.port2;R.port1.onmessage=k,te=function(){L.postMessage(null)}}else te=function(){m(k,0)};function D(z){E=z,M||(M=!0,te())}function J(z,W){A=m(function(){z(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,D(S))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(h){case 1:case 2:case 3:var W=3;break;default:W=h}var N=h;h=W;try{return z()}finally{h=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,W){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var N=h;h=z;try{return W()}finally{h=N}},t.unstable_scheduleCallback=function(z,W,N){var V=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?V+N:V):N=V,z){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=N+Y,z={id:c++,callback:W,priorityLevel:z,startTime:N,expirationTime:Y,sortIndex:-1},N>V?(z.sortIndex=N,e(u,z),n(l)===null&&z===n(u)&&(v?(f(A),A=-1):v=!0,J(x,N-V))):(z.sortIndex=Y,e(l,z),g||p||(g=!0,D(S))),z},t.unstable_shouldYield=B,t.unstable_wrapCallback=function(z){var W=h;return function(){var N=h;h=W;try{return z.apply(this,arguments)}finally{h=N}}}})(z0);F0.exports=z0;var iM=F0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0=tt,Rn=iM;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var H0=new Set,fs={};function io(t,e){ta(t,e),ta(t+"Capture",e)}function ta(t,e){for(fs[t]=e,t=0;t<e.length;t++)H0.add(e[t])}var Hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=Object.prototype.hasOwnProperty,oM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hp={},Gp={};function aM(t){return Uf.call(Gp,t)?!0:Uf.call(Hp,t)?!1:oM.test(t)?Gp[t]=!0:(Hp[t]=!0,!1)}function sM(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lM(t,e,n,r){if(e===null||typeof e>"u"||sM(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,r,i,o,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=a}var Yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Yt[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Yt[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Yt[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Yt[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Yt[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Yt[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Yt[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Yt[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Yt[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var ch=/[\-:]([a-z])/g;function fh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ch,fh);Yt[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ch,fh);Yt[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ch,fh);Yt[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Yt[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});Yt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Yt[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function dh(t,e,n,r){var i=Yt.hasOwnProperty(e)?Yt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lM(e,n,i,r)&&(n=null),r||i===null?aM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xr=B0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,js=Symbol.for("react.element"),Po=Symbol.for("react.portal"),Lo=Symbol.for("react.fragment"),hh=Symbol.for("react.strict_mode"),kf=Symbol.for("react.profiler"),G0=Symbol.for("react.provider"),V0=Symbol.for("react.context"),ph=Symbol.for("react.forward_ref"),Ff=Symbol.for("react.suspense"),zf=Symbol.for("react.suspense_list"),mh=Symbol.for("react.memo"),ii=Symbol.for("react.lazy"),W0=Symbol.for("react.offscreen"),Vp=Symbol.iterator;function Ma(t){return t===null||typeof t!="object"?null:(t=Vp&&t[Vp]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,vc;function Va(t){if(vc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vc=e&&e[1]||""}return`
`+vc+t}var _c=!1;function yc(t,e){if(!t||_c)return"";_c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=s);break}}}finally{_c=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Va(t):""}function uM(t){switch(t.tag){case 5:return Va(t.type);case 16:return Va("Lazy");case 13:return Va("Suspense");case 19:return Va("SuspenseList");case 0:case 2:case 15:return t=yc(t.type,!1),t;case 11:return t=yc(t.type.render,!1),t;case 1:return t=yc(t.type,!0),t;default:return""}}function Bf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Lo:return"Fragment";case Po:return"Portal";case kf:return"Profiler";case hh:return"StrictMode";case Ff:return"Suspense";case zf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V0:return(t.displayName||"Context")+".Consumer";case G0:return(t._context.displayName||"Context")+".Provider";case ph:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mh:return e=t.displayName||null,e!==null?e:Bf(t.type)||"Memo";case ii:e=t._payload,t=t._init;try{return Bf(t(e))}catch{}}return null}function cM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bf(e);case 8:return e===hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function j0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fM(t){var e=j0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $s(t){t._valueTracker||(t._valueTracker=fM(t))}function $0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=j0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function eu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hf(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Mi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function X0(t,e){e=e.checked,e!=null&&dh(t,"checked",e,!1)}function Gf(t,e){X0(t,e);var n=Mi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vf(t,e.type,Mi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vf(t,e,n){(e!=="number"||eu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Wa=Array.isArray;function Xo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Mi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Wf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $p(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Wa(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mi(n)}}function q0(t,e){var n=Mi(e.value),r=Mi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Xp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Y0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Y0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xs,K0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xs=Xs||document.createElement("div"),Xs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ds(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Za={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dM=["Webkit","ms","Moz","O"];Object.keys(Za).forEach(function(t){dM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Za[e]=Za[t]})});function Z0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Za.hasOwnProperty(t)&&Za[t]?(""+e).trim():e+"px"}function Q0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Z0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var hM=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $f(t,e){if(e){if(hM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Xf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qf=null;function gh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yf=null,qo=null,Yo=null;function qp(t){if(t=ks(t)){if(typeof Yf!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Gu(e),Yf(t.stateNode,t.type,e))}}function J0(t){qo?Yo?Yo.push(t):Yo=[t]:qo=t}function e_(){if(qo){var t=qo,e=Yo;if(Yo=qo=null,qp(t),e)for(t=0;t<e.length;t++)qp(e[t])}}function t_(t,e){return t(e)}function n_(){}var xc=!1;function r_(t,e,n){if(xc)return t(e,n);xc=!0;try{return t_(t,e,n)}finally{xc=!1,(qo!==null||Yo!==null)&&(n_(),e_())}}function hs(t,e){var n=t.stateNode;if(n===null)return null;var r=Gu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Kf=!1;if(Hr)try{var Ea={};Object.defineProperty(Ea,"passive",{get:function(){Kf=!0}}),window.addEventListener("test",Ea,Ea),window.removeEventListener("test",Ea,Ea)}catch{Kf=!1}function pM(t,e,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Qa=!1,tu=null,nu=!1,Zf=null,mM={onError:function(t){Qa=!0,tu=t}};function gM(t,e,n,r,i,o,a,s,l){Qa=!1,tu=null,pM.apply(mM,arguments)}function vM(t,e,n,r,i,o,a,s,l){if(gM.apply(this,arguments),Qa){if(Qa){var u=tu;Qa=!1,tu=null}else throw Error(se(198));nu||(nu=!0,Zf=u)}}function oo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function i_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yp(t){if(oo(t)!==t)throw Error(se(188))}function _M(t){var e=t.alternate;if(!e){if(e=oo(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Yp(i),t;if(o===r)return Yp(i),e;o=o.sibling}throw Error(se(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==r)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function o_(t){return t=_M(t),t!==null?a_(t):null}function a_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=a_(t);if(e!==null)return e;t=t.sibling}return null}var s_=Rn.unstable_scheduleCallback,Kp=Rn.unstable_cancelCallback,yM=Rn.unstable_shouldYield,xM=Rn.unstable_requestPaint,Ct=Rn.unstable_now,SM=Rn.unstable_getCurrentPriorityLevel,vh=Rn.unstable_ImmediatePriority,l_=Rn.unstable_UserBlockingPriority,ru=Rn.unstable_NormalPriority,MM=Rn.unstable_LowPriority,u_=Rn.unstable_IdlePriority,Fu=null,vr=null;function EM(t){if(vr&&typeof vr.onCommitFiberRoot=="function")try{vr.onCommitFiberRoot(Fu,t,void 0,(t.current.flags&128)===128)}catch{}}var or=Math.clz32?Math.clz32:TM,wM=Math.log,bM=Math.LN2;function TM(t){return t>>>=0,t===0?32:31-(wM(t)/bM|0)|0}var qs=64,Ys=4194304;function ja(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function iu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=ja(s):(o&=a,o!==0&&(r=ja(o)))}else a=n&~i,a!==0?r=ja(a):o!==0&&(r=ja(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-or(e),i=1<<n,r|=t[n],e&=~i;return r}function AM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function CM(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-or(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=AM(s,e)):l<=e&&(t.expiredLanes|=s),o&=~s}}function Qf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function c_(){var t=qs;return qs<<=1,!(qs&4194240)&&(qs=64),t}function Sc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Is(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-or(e),t[e]=n}function RM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-or(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function _h(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-or(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var at=0;function f_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var d_,yh,h_,p_,m_,Jf=!1,Ks=[],di=null,hi=null,pi=null,ps=new Map,ms=new Map,ai=[],PM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zp(t,e){switch(t){case"focusin":case"focusout":di=null;break;case"dragenter":case"dragleave":hi=null;break;case"mouseover":case"mouseout":pi=null;break;case"pointerover":case"pointerout":ps.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ms.delete(e.pointerId)}}function wa(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=ks(e),e!==null&&yh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function LM(t,e,n,r,i){switch(e){case"focusin":return di=wa(di,t,e,n,r,i),!0;case"dragenter":return hi=wa(hi,t,e,n,r,i),!0;case"mouseover":return pi=wa(pi,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return ps.set(o,wa(ps.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ms.set(o,wa(ms.get(o)||null,t,e,n,r,i)),!0}return!1}function g_(t){var e=Gi(t.target);if(e!==null){var n=oo(e);if(n!==null){if(e=n.tag,e===13){if(e=i_(n),e!==null){t.blockedOn=e,m_(t.priority,function(){h_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ed(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);qf=r,n.target.dispatchEvent(r),qf=null}else return e=ks(n),e!==null&&yh(e),t.blockedOn=n,!1;e.shift()}return!0}function Qp(t,e,n){Bl(t)&&n.delete(e)}function OM(){Jf=!1,di!==null&&Bl(di)&&(di=null),hi!==null&&Bl(hi)&&(hi=null),pi!==null&&Bl(pi)&&(pi=null),ps.forEach(Qp),ms.forEach(Qp)}function ba(t,e){t.blockedOn===e&&(t.blockedOn=null,Jf||(Jf=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,OM)))}function gs(t){function e(i){return ba(i,t)}if(0<Ks.length){ba(Ks[0],t);for(var n=1;n<Ks.length;n++){var r=Ks[n];r.blockedOn===t&&(r.blockedOn=null)}}for(di!==null&&ba(di,t),hi!==null&&ba(hi,t),pi!==null&&ba(pi,t),ps.forEach(e),ms.forEach(e),n=0;n<ai.length;n++)r=ai[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ai.length&&(n=ai[0],n.blockedOn===null);)g_(n),n.blockedOn===null&&ai.shift()}var Ko=Xr.ReactCurrentBatchConfig,ou=!0;function DM(t,e,n,r){var i=at,o=Ko.transition;Ko.transition=null;try{at=1,xh(t,e,n,r)}finally{at=i,Ko.transition=o}}function NM(t,e,n,r){var i=at,o=Ko.transition;Ko.transition=null;try{at=4,xh(t,e,n,r)}finally{at=i,Ko.transition=o}}function xh(t,e,n,r){if(ou){var i=ed(t,e,n,r);if(i===null)Lc(t,e,r,au,n),Zp(t,r);else if(LM(i,t,e,n,r))r.stopPropagation();else if(Zp(t,r),e&4&&-1<PM.indexOf(t)){for(;i!==null;){var o=ks(i);if(o!==null&&d_(o),o=ed(t,e,n,r),o===null&&Lc(t,e,r,au,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Lc(t,e,r,null,n)}}var au=null;function ed(t,e,n,r){if(au=null,t=gh(r),t=Gi(t),t!==null)if(e=oo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=i_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return au=t,null}function v_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(SM()){case vh:return 1;case l_:return 4;case ru:case MM:return 16;case u_:return 536870912;default:return 16}default:return 16}}var li=null,Sh=null,Hl=null;function __(){if(Hl)return Hl;var t,e=Sh,n=e.length,r,i="value"in li?li.value:li.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[o-r];r++);return Hl=i.slice(t,1<r?1-r:void 0)}function Gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zs(){return!0}function Jp(){return!1}function Ln(t){function e(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Zs:Jp,this.isPropagationStopped=Jp,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zs)},persist:function(){},isPersistent:Zs}),e}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mh=Ln(ma),Us=Mt({},ma,{view:0,detail:0}),IM=Ln(Us),Mc,Ec,Ta,zu=Mt({},Us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ta&&(Ta&&t.type==="mousemove"?(Mc=t.screenX-Ta.screenX,Ec=t.screenY-Ta.screenY):Ec=Mc=0,Ta=t),Mc)},movementY:function(t){return"movementY"in t?t.movementY:Ec}}),em=Ln(zu),UM=Mt({},zu,{dataTransfer:0}),kM=Ln(UM),FM=Mt({},Us,{relatedTarget:0}),wc=Ln(FM),zM=Mt({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),BM=Ln(zM),HM=Mt({},ma,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),GM=Ln(HM),VM=Mt({},ma,{data:0}),tm=Ln(VM),WM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$M={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$M[t])?!!e[t]:!1}function Eh(){return XM}var qM=Mt({},Us,{key:function(t){if(t.key){var e=WM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eh,charCode:function(t){return t.type==="keypress"?Gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),YM=Ln(qM),KM=Mt({},zu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nm=Ln(KM),ZM=Mt({},Us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eh}),QM=Ln(ZM),JM=Mt({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),eE=Ln(JM),tE=Mt({},zu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nE=Ln(tE),rE=[9,13,27,32],wh=Hr&&"CompositionEvent"in window,Ja=null;Hr&&"documentMode"in document&&(Ja=document.documentMode);var iE=Hr&&"TextEvent"in window&&!Ja,y_=Hr&&(!wh||Ja&&8<Ja&&11>=Ja),rm=String.fromCharCode(32),im=!1;function x_(t,e){switch(t){case"keyup":return rE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Oo=!1;function oE(t,e){switch(t){case"compositionend":return S_(e);case"keypress":return e.which!==32?null:(im=!0,rm);case"textInput":return t=e.data,t===rm&&im?null:t;default:return null}}function aE(t,e){if(Oo)return t==="compositionend"||!wh&&x_(t,e)?(t=__(),Hl=Sh=li=null,Oo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return y_&&e.locale!=="ko"?null:e.data;default:return null}}var sE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function om(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sE[t.type]:e==="textarea"}function M_(t,e,n,r){J0(r),e=su(e,"onChange"),0<e.length&&(n=new Mh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var es=null,vs=null;function lE(t){D_(t,0)}function Bu(t){var e=Io(t);if($0(e))return t}function uE(t,e){if(t==="change")return e}var E_=!1;if(Hr){var bc;if(Hr){var Tc="oninput"in document;if(!Tc){var am=document.createElement("div");am.setAttribute("oninput","return;"),Tc=typeof am.oninput=="function"}bc=Tc}else bc=!1;E_=bc&&(!document.documentMode||9<document.documentMode)}function sm(){es&&(es.detachEvent("onpropertychange",w_),vs=es=null)}function w_(t){if(t.propertyName==="value"&&Bu(vs)){var e=[];M_(e,vs,t,gh(t)),r_(lE,e)}}function cE(t,e,n){t==="focusin"?(sm(),es=e,vs=n,es.attachEvent("onpropertychange",w_)):t==="focusout"&&sm()}function fE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bu(vs)}function dE(t,e){if(t==="click")return Bu(e)}function hE(t,e){if(t==="input"||t==="change")return Bu(e)}function pE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var lr=typeof Object.is=="function"?Object.is:pE;function _s(t,e){if(lr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Uf.call(e,i)||!lr(t[i],e[i]))return!1}return!0}function lm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function um(t,e){var n=lm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lm(n)}}function b_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?b_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function T_(){for(var t=window,e=eu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=eu(t.document)}return e}function bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mE(t){var e=T_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&b_(n.ownerDocument.documentElement,n)){if(r!==null&&bh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=um(n,o);var a=um(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gE=Hr&&"documentMode"in document&&11>=document.documentMode,Do=null,td=null,ts=null,nd=!1;function cm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nd||Do==null||Do!==eu(r)||(r=Do,"selectionStart"in r&&bh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ts&&_s(ts,r)||(ts=r,r=su(td,"onSelect"),0<r.length&&(e=new Mh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Do)))}function Qs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var No={animationend:Qs("Animation","AnimationEnd"),animationiteration:Qs("Animation","AnimationIteration"),animationstart:Qs("Animation","AnimationStart"),transitionend:Qs("Transition","TransitionEnd")},Ac={},A_={};Hr&&(A_=document.createElement("div").style,"AnimationEvent"in window||(delete No.animationend.animation,delete No.animationiteration.animation,delete No.animationstart.animation),"TransitionEvent"in window||delete No.transitionend.transition);function Hu(t){if(Ac[t])return Ac[t];if(!No[t])return t;var e=No[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in A_)return Ac[t]=e[n];return t}var C_=Hu("animationend"),R_=Hu("animationiteration"),P_=Hu("animationstart"),L_=Hu("transitionend"),O_=new Map,fm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ti(t,e){O_.set(t,e),io(e,[t])}for(var Cc=0;Cc<fm.length;Cc++){var Rc=fm[Cc],vE=Rc.toLowerCase(),_E=Rc[0].toUpperCase()+Rc.slice(1);Ti(vE,"on"+_E)}Ti(C_,"onAnimationEnd");Ti(R_,"onAnimationIteration");Ti(P_,"onAnimationStart");Ti("dblclick","onDoubleClick");Ti("focusin","onFocus");Ti("focusout","onBlur");Ti(L_,"onTransitionEnd");ta("onMouseEnter",["mouseout","mouseover"]);ta("onMouseLeave",["mouseout","mouseover"]);ta("onPointerEnter",["pointerout","pointerover"]);ta("onPointerLeave",["pointerout","pointerover"]);io("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));io("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));io("onBeforeInput",["compositionend","keypress","textInput","paste"]);io("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));io("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));io("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yE=new Set("cancel close invalid load scroll toggle".split(" ").concat($a));function dm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,vM(r,e,void 0,t),t.currentTarget=null}function D_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;dm(i,s,u),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;dm(i,s,u),o=l}}}if(nu)throw t=Zf,nu=!1,Zf=null,t}function ft(t,e){var n=e[sd];n===void 0&&(n=e[sd]=new Set);var r=t+"__bubble";n.has(r)||(N_(e,t,2,!1),n.add(r))}function Pc(t,e,n){var r=0;e&&(r|=4),N_(n,t,r,e)}var Js="_reactListening"+Math.random().toString(36).slice(2);function ys(t){if(!t[Js]){t[Js]=!0,H0.forEach(function(n){n!=="selectionchange"&&(yE.has(n)||Pc(n,!1,t),Pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Js]||(e[Js]=!0,Pc("selectionchange",!1,e))}}function N_(t,e,n,r){switch(v_(e)){case 1:var i=DM;break;case 4:i=NM;break;default:i=xh}n=i.bind(null,e,n,t),i=void 0,!Kf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Lc(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Gi(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}r_(function(){var u=o,c=gh(n),d=[];e:{var h=O_.get(t);if(h!==void 0){var p=Mh,g=t;switch(t){case"keypress":if(Gl(n)===0)break e;case"keydown":case"keyup":p=YM;break;case"focusin":g="focus",p=wc;break;case"focusout":g="blur",p=wc;break;case"beforeblur":case"afterblur":p=wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=kM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=QM;break;case C_:case R_:case P_:p=BM;break;case L_:p=eE;break;case"scroll":p=IM;break;case"wheel":p=nE;break;case"copy":case"cut":case"paste":p=GM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=nm}var v=(e&4)!==0,m=!v&&t==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var _=u,y;_!==null;){y=_;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,f!==null&&(x=hs(_,f),x!=null&&v.push(xs(_,x,y)))),m)break;_=_.return}0<v.length&&(h=new p(h,g,null,n,c),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==qf&&(g=n.relatedTarget||n.fromElement)&&(Gi(g)||g[Gr]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Gi(g):null,g!==null&&(m=oo(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(v=em,x="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=nm,x="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?h:Io(p),y=g==null?h:Io(g),h=new v(x,_+"leave",p,n,c),h.target=m,h.relatedTarget=y,x=null,Gi(c)===u&&(v=new v(f,_+"enter",g,n,c),v.target=y,v.relatedTarget=m,x=v),m=x,p&&g)t:{for(v=p,f=g,_=0,y=v;y;y=lo(y))_++;for(y=0,x=f;x;x=lo(x))y++;for(;0<_-y;)v=lo(v),_--;for(;0<y-_;)f=lo(f),y--;for(;_--;){if(v===f||f!==null&&v===f.alternate)break t;v=lo(v),f=lo(f)}v=null}else v=null;p!==null&&hm(d,h,p,v,!1),g!==null&&m!==null&&hm(d,m,g,v,!0)}}e:{if(h=u?Io(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var S=uE;else if(om(h))if(E_)S=hE;else{S=fE;var M=cE}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=dE);if(S&&(S=S(t,u))){M_(d,S,n,c);break e}M&&M(t,h,u),t==="focusout"&&(M=h._wrapperState)&&M.controlled&&h.type==="number"&&Vf(h,"number",h.value)}switch(M=u?Io(u):window,t){case"focusin":(om(M)||M.contentEditable==="true")&&(Do=M,td=u,ts=null);break;case"focusout":ts=td=Do=null;break;case"mousedown":nd=!0;break;case"contextmenu":case"mouseup":case"dragend":nd=!1,cm(d,n,c);break;case"selectionchange":if(gE)break;case"keydown":case"keyup":cm(d,n,c)}var E;if(wh)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Oo?x_(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(y_&&n.locale!=="ko"&&(Oo||A!=="onCompositionStart"?A==="onCompositionEnd"&&Oo&&(E=__()):(li=c,Sh="value"in li?li.value:li.textContent,Oo=!0)),M=su(u,A),0<M.length&&(A=new tm(A,t,null,n,c),d.push({event:A,listeners:M}),E?A.data=E:(E=S_(n),E!==null&&(A.data=E)))),(E=iE?oE(t,n):aE(t,n))&&(u=su(u,"onBeforeInput"),0<u.length&&(c=new tm("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=E))}D_(d,e)})}function xs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function su(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=hs(t,n),o!=null&&r.unshift(xs(t,o,i)),o=hs(t,e),o!=null&&r.push(xs(t,o,i))),t=t.return}return r}function lo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hm(t,e,n,r,i){for(var o=e._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=hs(n,o),l!=null&&a.unshift(xs(n,l,s))):i||(l=hs(n,o),l!=null&&a.push(xs(n,l,s)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var xE=/\r\n?/g,SE=/\u0000|\uFFFD/g;function pm(t){return(typeof t=="string"?t:""+t).replace(xE,`
`).replace(SE,"")}function el(t,e,n){if(e=pm(e),pm(t)!==e&&n)throw Error(se(425))}function lu(){}var rd=null,id=null;function od(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,ME=typeof clearTimeout=="function"?clearTimeout:void 0,mm=typeof Promise=="function"?Promise:void 0,EE=typeof queueMicrotask=="function"?queueMicrotask:typeof mm<"u"?function(t){return mm.resolve(null).then(t).catch(wE)}:ad;function wE(t){setTimeout(function(){throw t})}function Oc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),gs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);gs(e)}function mi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ga=Math.random().toString(36).slice(2),gr="__reactFiber$"+ga,Ss="__reactProps$"+ga,Gr="__reactContainer$"+ga,sd="__reactEvents$"+ga,bE="__reactListeners$"+ga,TE="__reactHandles$"+ga;function Gi(t){var e=t[gr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gr]||n[gr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gm(t);t!==null;){if(n=t[gr])return n;t=gm(t)}return e}t=n,n=t.parentNode}return null}function ks(t){return t=t[gr]||t[Gr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Io(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Gu(t){return t[Ss]||null}var ld=[],Uo=-1;function Ai(t){return{current:t}}function ht(t){0>Uo||(t.current=ld[Uo],ld[Uo]=null,Uo--)}function ut(t,e){Uo++,ld[Uo]=t.current,t.current=e}var Ei={},nn=Ai(Ei),vn=Ai(!1),Qi=Ei;function na(t,e){var n=t.type.contextTypes;if(!n)return Ei;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function _n(t){return t=t.childContextTypes,t!=null}function uu(){ht(vn),ht(nn)}function vm(t,e,n){if(nn.current!==Ei)throw Error(se(168));ut(nn,e),ut(vn,n)}function I_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(se(108,cM(t)||"Unknown",i));return Mt({},n,r)}function cu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ei,Qi=nn.current,ut(nn,t),ut(vn,vn.current),!0}function _m(t,e,n){var r=t.stateNode;if(!r)throw Error(se(169));n?(t=I_(t,e,Qi),r.__reactInternalMemoizedMergedChildContext=t,ht(vn),ht(nn),ut(nn,t)):ht(vn),ut(vn,n)}var Pr=null,Vu=!1,Dc=!1;function U_(t){Pr===null?Pr=[t]:Pr.push(t)}function AE(t){Vu=!0,U_(t)}function Ci(){if(!Dc&&Pr!==null){Dc=!0;var t=0,e=at;try{var n=Pr;for(at=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Pr=null,Vu=!1}catch(i){throw Pr!==null&&(Pr=Pr.slice(t+1)),s_(vh,Ci),i}finally{at=e,Dc=!1}}return null}var ko=[],Fo=0,fu=null,du=0,In=[],Un=0,Ji=null,Nr=1,Ir="";function ki(t,e){ko[Fo++]=du,ko[Fo++]=fu,fu=t,du=e}function k_(t,e,n){In[Un++]=Nr,In[Un++]=Ir,In[Un++]=Ji,Ji=t;var r=Nr;t=Ir;var i=32-or(r)-1;r&=~(1<<i),n+=1;var o=32-or(e)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Nr=1<<32-or(e)+i|n<<i|r,Ir=o+t}else Nr=1<<o|n<<i|r,Ir=t}function Th(t){t.return!==null&&(ki(t,1),k_(t,1,0))}function Ah(t){for(;t===fu;)fu=ko[--Fo],ko[Fo]=null,du=ko[--Fo],ko[Fo]=null;for(;t===Ji;)Ji=In[--Un],In[Un]=null,Ir=In[--Un],In[Un]=null,Nr=In[--Un],In[Un]=null}var Cn=null,An=null,vt=!1,Jn=null;function F_(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ym(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,An=mi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ji!==null?{id:Nr,overflow:Ir}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Cn=t,An=null,!0):!1;default:return!1}}function ud(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cd(t){if(vt){var e=An;if(e){var n=e;if(!ym(t,e)){if(ud(t))throw Error(se(418));e=mi(n.nextSibling);var r=Cn;e&&ym(t,e)?F_(r,n):(t.flags=t.flags&-4097|2,vt=!1,Cn=t)}}else{if(ud(t))throw Error(se(418));t.flags=t.flags&-4097|2,vt=!1,Cn=t}}}function xm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function tl(t){if(t!==Cn)return!1;if(!vt)return xm(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!od(t.type,t.memoizedProps)),e&&(e=An)){if(ud(t))throw z_(),Error(se(418));for(;e;)F_(t,e),e=mi(e.nextSibling)}if(xm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=mi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=Cn?mi(t.stateNode.nextSibling):null;return!0}function z_(){for(var t=An;t;)t=mi(t.nextSibling)}function ra(){An=Cn=null,vt=!1}function Ch(t){Jn===null?Jn=[t]:Jn.push(t)}var CE=Xr.ReactCurrentBatchConfig;function Kn(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var hu=Ai(null),pu=null,zo=null,Rh=null;function Ph(){Rh=zo=pu=null}function Lh(t){var e=hu.current;ht(hu),t._currentValue=e}function fd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Zo(t,e){pu=t,Rh=zo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function Gn(t){var e=t._currentValue;if(Rh!==t)if(t={context:t,memoizedValue:e,next:null},zo===null){if(pu===null)throw Error(se(308));zo=t,pu.dependencies={lanes:0,firstContext:t}}else zo=zo.next=t;return e}var Vi=null;function Oh(t){Vi===null?Vi=[t]:Vi.push(t)}function B_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Oh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Vr(t,r)}function Vr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var oi=!1;function Dh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function H_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,nt&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Vr(t,n)}return i=r.interleaved,i===null?(e.next=e,Oh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Vr(t,n)}function Vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_h(t,n)}}function Sm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function mu(t,e,n,r){var i=t.updateQueue;oi=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=t.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;a=0,c=u=l=null,s=o;do{var h=s.lane,p=s.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=t,v=s;switch(h=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(p,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(p,d,h):g,h==null)break e;d=Mt({},d,h);break e;case 2:oi=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else p={eventTime:p,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,a|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);to|=a,t.lanes=a,t.memoizedState=d}}function Mm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(se(191,i));i.call(r)}}}var G_=new B0.Component().refs;function dd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wu={isMounted:function(t){return(t=t._reactInternals)?oo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=cn(),i=_i(t),o=Fr(r,i);o.payload=e,n!=null&&(o.callback=n),e=gi(t,o,i),e!==null&&(ar(e,t,i,r),Vl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=cn(),i=_i(t),o=Fr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=gi(t,o,i),e!==null&&(ar(e,t,i,r),Vl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),r=_i(t),i=Fr(n,r);i.tag=2,e!=null&&(i.callback=e),e=gi(t,i,r),e!==null&&(ar(e,t,r,n),Vl(e,t,r))}};function Em(t,e,n,r,i,o,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,a):e.prototype&&e.prototype.isPureReactComponent?!_s(n,r)||!_s(i,o):!0}function V_(t,e,n){var r=!1,i=Ei,o=e.contextType;return typeof o=="object"&&o!==null?o=Gn(o):(i=_n(e)?Qi:nn.current,r=e.contextTypes,o=(r=r!=null)?na(t,i):Ei),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function wm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wu.enqueueReplaceState(e,e.state,null)}function hd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=G_,Dh(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Gn(o):(o=_n(e)?Qi:nn.current,i.context=na(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(dd(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wu.enqueueReplaceState(i,i.state,null),mu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Aa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var r=n.stateNode}if(!r)throw Error(se(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(a){var s=i.refs;s===G_&&(s=i.refs={}),a===null?delete s[o]:s[o]=a},e._stringRef=o,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function nl(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bm(t){var e=t._init;return e(t._payload)}function W_(t){function e(f,_){if(t){var y=f.deletions;y===null?(f.deletions=[_],f.flags|=16):y.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function r(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function i(f,_){return f=yi(f,_),f.index=0,f.sibling=null,f}function o(f,_,y){return f.index=y,t?(y=f.alternate,y!==null?(y=y.index,y<_?(f.flags|=2,_):y):(f.flags|=2,_)):(f.flags|=1048576,_)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function s(f,_,y,x){return _===null||_.tag!==6?(_=Bc(y,f.mode,x),_.return=f,_):(_=i(_,y),_.return=f,_)}function l(f,_,y,x){var S=y.type;return S===Lo?c(f,_,y.props.children,x,y.key):_!==null&&(_.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ii&&bm(S)===_.type)?(x=i(_,y.props),x.ref=Aa(f,_,y),x.return=f,x):(x=Yl(y.type,y.key,y.props,null,f.mode,x),x.ref=Aa(f,_,y),x.return=f,x)}function u(f,_,y,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==y.containerInfo||_.stateNode.implementation!==y.implementation?(_=Hc(y,f.mode,x),_.return=f,_):(_=i(_,y.children||[]),_.return=f,_)}function c(f,_,y,x,S){return _===null||_.tag!==7?(_=Xi(y,f.mode,x,S),_.return=f,_):(_=i(_,y),_.return=f,_)}function d(f,_,y){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Bc(""+_,f.mode,y),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case js:return y=Yl(_.type,_.key,_.props,null,f.mode,y),y.ref=Aa(f,null,_),y.return=f,y;case Po:return _=Hc(_,f.mode,y),_.return=f,_;case ii:var x=_._init;return d(f,x(_._payload),y)}if(Wa(_)||Ma(_))return _=Xi(_,f.mode,y,null),_.return=f,_;nl(f,_)}return null}function h(f,_,y,x){var S=_!==null?_.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:s(f,_,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case js:return y.key===S?l(f,_,y,x):null;case Po:return y.key===S?u(f,_,y,x):null;case ii:return S=y._init,h(f,_,S(y._payload),x)}if(Wa(y)||Ma(y))return S!==null?null:c(f,_,y,x,null);nl(f,y)}return null}function p(f,_,y,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(y)||null,s(_,f,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case js:return f=f.get(x.key===null?y:x.key)||null,l(_,f,x,S);case Po:return f=f.get(x.key===null?y:x.key)||null,u(_,f,x,S);case ii:var M=x._init;return p(f,_,y,M(x._payload),S)}if(Wa(x)||Ma(x))return f=f.get(y)||null,c(_,f,x,S,null);nl(_,x)}return null}function g(f,_,y,x){for(var S=null,M=null,E=_,A=_=0,w=null;E!==null&&A<y.length;A++){E.index>A?(w=E,E=null):w=E.sibling;var b=h(f,E,y[A],x);if(b===null){E===null&&(E=w);break}t&&E&&b.alternate===null&&e(f,E),_=o(b,_,A),M===null?S=b:M.sibling=b,M=b,E=w}if(A===y.length)return n(f,E),vt&&ki(f,A),S;if(E===null){for(;A<y.length;A++)E=d(f,y[A],x),E!==null&&(_=o(E,_,A),M===null?S=E:M.sibling=E,M=E);return vt&&ki(f,A),S}for(E=r(f,E);A<y.length;A++)w=p(E,f,A,y[A],x),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?A:w.key),_=o(w,_,A),M===null?S=w:M.sibling=w,M=w);return t&&E.forEach(function(B){return e(f,B)}),vt&&ki(f,A),S}function v(f,_,y,x){var S=Ma(y);if(typeof S!="function")throw Error(se(150));if(y=S.call(y),y==null)throw Error(se(151));for(var M=S=null,E=_,A=_=0,w=null,b=y.next();E!==null&&!b.done;A++,b=y.next()){E.index>A?(w=E,E=null):w=E.sibling;var B=h(f,E,b.value,x);if(B===null){E===null&&(E=w);break}t&&E&&B.alternate===null&&e(f,E),_=o(B,_,A),M===null?S=B:M.sibling=B,M=B,E=w}if(b.done)return n(f,E),vt&&ki(f,A),S;if(E===null){for(;!b.done;A++,b=y.next())b=d(f,b.value,x),b!==null&&(_=o(b,_,A),M===null?S=b:M.sibling=b,M=b);return vt&&ki(f,A),S}for(E=r(f,E);!b.done;A++,b=y.next())b=p(E,f,A,b.value,x),b!==null&&(t&&b.alternate!==null&&E.delete(b.key===null?A:b.key),_=o(b,_,A),M===null?S=b:M.sibling=b,M=b);return t&&E.forEach(function(k){return e(f,k)}),vt&&ki(f,A),S}function m(f,_,y,x){if(typeof y=="object"&&y!==null&&y.type===Lo&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case js:e:{for(var S=y.key,M=_;M!==null;){if(M.key===S){if(S=y.type,S===Lo){if(M.tag===7){n(f,M.sibling),_=i(M,y.props.children),_.return=f,f=_;break e}}else if(M.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ii&&bm(S)===M.type){n(f,M.sibling),_=i(M,y.props),_.ref=Aa(f,M,y),_.return=f,f=_;break e}n(f,M);break}else e(f,M);M=M.sibling}y.type===Lo?(_=Xi(y.props.children,f.mode,x,y.key),_.return=f,f=_):(x=Yl(y.type,y.key,y.props,null,f.mode,x),x.ref=Aa(f,_,y),x.return=f,f=x)}return a(f);case Po:e:{for(M=y.key;_!==null;){if(_.key===M)if(_.tag===4&&_.stateNode.containerInfo===y.containerInfo&&_.stateNode.implementation===y.implementation){n(f,_.sibling),_=i(_,y.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=Hc(y,f.mode,x),_.return=f,f=_}return a(f);case ii:return M=y._init,m(f,_,M(y._payload),x)}if(Wa(y))return g(f,_,y,x);if(Ma(y))return v(f,_,y,x);nl(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,_!==null&&_.tag===6?(n(f,_.sibling),_=i(_,y),_.return=f,f=_):(n(f,_),_=Bc(y,f.mode,x),_.return=f,f=_),a(f)):n(f,_)}return m}var ia=W_(!0),j_=W_(!1),Fs={},_r=Ai(Fs),Ms=Ai(Fs),Es=Ai(Fs);function Wi(t){if(t===Fs)throw Error(se(174));return t}function Nh(t,e){switch(ut(Es,e),ut(Ms,t),ut(_r,Fs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jf(e,t)}ht(_r),ut(_r,e)}function oa(){ht(_r),ht(Ms),ht(Es)}function $_(t){Wi(Es.current);var e=Wi(_r.current),n=jf(e,t.type);e!==n&&(ut(Ms,t),ut(_r,n))}function Ih(t){Ms.current===t&&(ht(_r),ht(Ms))}var yt=Ai(0);function gu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nc=[];function Uh(){for(var t=0;t<Nc.length;t++)Nc[t]._workInProgressVersionPrimary=null;Nc.length=0}var Wl=Xr.ReactCurrentDispatcher,Ic=Xr.ReactCurrentBatchConfig,eo=0,xt=null,Dt=null,Bt=null,vu=!1,ns=!1,ws=0,RE=0;function Zt(){throw Error(se(321))}function kh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!lr(t[n],e[n]))return!1;return!0}function Fh(t,e,n,r,i,o){if(eo=o,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wl.current=t===null||t.memoizedState===null?DE:NE,t=n(r,i),ns){o=0;do{if(ns=!1,ws=0,25<=o)throw Error(se(301));o+=1,Bt=Dt=null,e.updateQueue=null,Wl.current=IE,t=n(r,i)}while(ns)}if(Wl.current=_u,e=Dt!==null&&Dt.next!==null,eo=0,Bt=Dt=xt=null,vu=!1,e)throw Error(se(300));return t}function zh(){var t=ws!==0;return ws=0,t}function hr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?xt.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function Vn(){if(Dt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=Bt===null?xt.memoizedState:Bt.next;if(e!==null)Bt=e,Dt=t;else{if(t===null)throw Error(se(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Bt===null?xt.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function bs(t,e){return typeof e=="function"?e(t):e}function Uc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var r=Dt,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((eo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,a=r):l=l.next=d,xt.lanes|=c,to|=c}u=u.next}while(u!==null&&u!==o);l===null?a=r:l.next=s,lr(r,e.memoizedState)||(gn=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,xt.lanes|=o,to|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=t(o,a.action),a=a.next;while(a!==i);lr(o,e.memoizedState)||(gn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function X_(){}function q_(t,e){var n=xt,r=Vn(),i=e(),o=!lr(r.memoizedState,i);if(o&&(r.memoizedState=i,gn=!0),r=r.queue,Bh(Z_.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,Ts(9,K_.bind(null,n,r,i,e),void 0,null),Wt===null)throw Error(se(349));eo&30||Y_(n,e,i)}return i}function Y_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function K_(t,e,n,r){e.value=n,e.getSnapshot=r,Q_(e)&&J_(t)}function Z_(t,e,n){return n(function(){Q_(e)&&J_(t)})}function Q_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!lr(t,n)}catch{return!0}}function J_(t){var e=Vr(t,1);e!==null&&ar(e,t,1,-1)}function Tm(t){var e=hr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:t},e.queue=t,t=t.dispatch=OE.bind(null,xt,t),[e.memoizedState,t]}function Ts(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ey(){return Vn().memoizedState}function jl(t,e,n,r){var i=hr();xt.flags|=t,i.memoizedState=Ts(1|e,n,void 0,r===void 0?null:r)}function ju(t,e,n,r){var i=Vn();r=r===void 0?null:r;var o=void 0;if(Dt!==null){var a=Dt.memoizedState;if(o=a.destroy,r!==null&&kh(r,a.deps)){i.memoizedState=Ts(e,n,o,r);return}}xt.flags|=t,i.memoizedState=Ts(1|e,n,o,r)}function Am(t,e){return jl(8390656,8,t,e)}function Bh(t,e){return ju(2048,8,t,e)}function ty(t,e){return ju(4,2,t,e)}function ny(t,e){return ju(4,4,t,e)}function ry(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function iy(t,e,n){return n=n!=null?n.concat([t]):null,ju(4,4,ry.bind(null,e,t),n)}function Hh(){}function oy(t,e){var n=Vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&kh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ay(t,e){var n=Vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&kh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function sy(t,e,n){return eo&21?(lr(n,e)||(n=c_(),xt.lanes|=n,to|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function PE(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var r=Ic.transition;Ic.transition={};try{t(!1),e()}finally{at=n,Ic.transition=r}}function ly(){return Vn().memoizedState}function LE(t,e,n){var r=_i(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uy(t))cy(e,n);else if(n=B_(t,e,n,r),n!==null){var i=cn();ar(n,t,r,i),fy(n,e,r)}}function OE(t,e,n){var r=_i(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uy(t))cy(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,lr(s,a)){var l=e.interleaved;l===null?(i.next=i,Oh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=B_(t,e,i,r),n!==null&&(i=cn(),ar(n,t,r,i),fy(n,e,r))}}function uy(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function cy(t,e){ns=vu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function fy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_h(t,n)}}var _u={readContext:Gn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},DE={readContext:Gn,useCallback:function(t,e){return hr().memoizedState=[t,e===void 0?null:e],t},useContext:Gn,useEffect:Am,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,jl(4194308,4,ry.bind(null,e,t),n)},useLayoutEffect:function(t,e){return jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return jl(4,2,t,e)},useMemo:function(t,e){var n=hr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=LE.bind(null,xt,t),[r.memoizedState,t]},useRef:function(t){var e=hr();return t={current:t},e.memoizedState=t},useState:Tm,useDebugValue:Hh,useDeferredValue:function(t){return hr().memoizedState=t},useTransition:function(){var t=Tm(!1),e=t[0];return t=PE.bind(null,t[1]),hr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xt,i=hr();if(vt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Wt===null)throw Error(se(349));eo&30||Y_(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Am(Z_.bind(null,r,o,t),[t]),r.flags|=2048,Ts(9,K_.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=hr(),e=Wt.identifierPrefix;if(vt){var n=Ir,r=Nr;n=(r&~(1<<32-or(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ws++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=RE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},NE={readContext:Gn,useCallback:oy,useContext:Gn,useEffect:Bh,useImperativeHandle:iy,useInsertionEffect:ty,useLayoutEffect:ny,useMemo:ay,useReducer:Uc,useRef:ey,useState:function(){return Uc(bs)},useDebugValue:Hh,useDeferredValue:function(t){var e=Vn();return sy(e,Dt.memoizedState,t)},useTransition:function(){var t=Uc(bs)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:X_,useSyncExternalStore:q_,useId:ly,unstable_isNewReconciler:!1},IE={readContext:Gn,useCallback:oy,useContext:Gn,useEffect:Bh,useImperativeHandle:iy,useInsertionEffect:ty,useLayoutEffect:ny,useMemo:ay,useReducer:kc,useRef:ey,useState:function(){return kc(bs)},useDebugValue:Hh,useDeferredValue:function(t){var e=Vn();return Dt===null?e.memoizedState=t:sy(e,Dt.memoizedState,t)},useTransition:function(){var t=kc(bs)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:X_,useSyncExternalStore:q_,useId:ly,unstable_isNewReconciler:!1};function aa(t,e){try{var n="",r=e;do n+=uM(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Fc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function pd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var UE=typeof WeakMap=="function"?WeakMap:Map;function dy(t,e,n){n=Fr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xu||(xu=!0,wd=r),pd(t,e)},n}function hy(t,e,n){n=Fr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){pd(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){pd(t,e),typeof r!="function"&&(vi===null?vi=new Set([this]):vi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Cm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new UE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=KE.bind(null,t,e,n),e.then(t,t))}function Rm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fr(-1,1),e.tag=2,gi(n,e,1))),n.lanes|=1),t)}var kE=Xr.ReactCurrentOwner,gn=!1;function sn(t,e,n,r){e.child=t===null?j_(e,null,n,r):ia(e,t.child,n,r)}function Lm(t,e,n,r,i){n=n.render;var o=e.ref;return Zo(e,i),r=Fh(t,e,n,r,o,i),n=zh(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wr(t,e,i)):(vt&&n&&Th(e),e.flags|=1,sn(t,e,r,i),e.child)}function Om(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Yh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,py(t,e,o,r,i)):(t=Yl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:_s,n(a,r)&&t.ref===e.ref)return Wr(t,e,i)}return e.flags|=1,t=yi(o,r),t.ref=e.ref,t.return=e,e.child=t}function py(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(_s(o,r)&&t.ref===e.ref)if(gn=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,Wr(t,e,i)}return md(t,e,n,r,i)}function my(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(Ho,Tn),Tn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(Ho,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ut(Ho,Tn),Tn|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,ut(Ho,Tn),Tn|=r;return sn(t,e,i,n),e.child}function gy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function md(t,e,n,r,i){var o=_n(n)?Qi:nn.current;return o=na(e,o),Zo(e,i),n=Fh(t,e,n,r,o,i),r=zh(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wr(t,e,i)):(vt&&r&&Th(e),e.flags|=1,sn(t,e,n,i),e.child)}function Dm(t,e,n,r,i){if(_n(n)){var o=!0;cu(e)}else o=!1;if(Zo(e,i),e.stateNode===null)$l(t,e),V_(e,n,r),hd(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,s=e.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Gn(u):(u=_n(n)?Qi:nn.current,u=na(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&wm(e,a,r,u),oi=!1;var h=e.memoizedState;a.state=h,mu(e,r,a,i),l=e.memoizedState,s!==r||h!==l||vn.current||oi?(typeof c=="function"&&(dd(e,n,c,r),l=e.memoizedState),(s=oi||Em(e,n,s,r,h,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,H_(t,e),s=e.memoizedProps,u=e.type===e.elementType?s:Kn(e.type,s),a.props=u,d=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=_n(n)?Qi:nn.current,l=na(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||h!==l)&&wm(e,a,r,l),oi=!1,h=e.memoizedState,a.state=h,mu(e,r,a,i);var g=e.memoizedState;s!==d||h!==g||vn.current||oi?(typeof p=="function"&&(dd(e,n,p,r),g=e.memoizedState),(u=oi||Em(e,n,u,r,h,g,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),a.props=r,a.state=g,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return gd(t,e,n,r,o,i)}function gd(t,e,n,r,i,o){gy(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&_m(e,n,!1),Wr(t,e,o);r=e.stateNode,kE.current=e;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=ia(e,t.child,null,o),e.child=ia(e,null,s,o)):sn(t,e,s,o),e.memoizedState=r.state,i&&_m(e,n,!0),e.child}function vy(t){var e=t.stateNode;e.pendingContext?vm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vm(t,e.context,!1),Nh(t,e.containerInfo)}function Nm(t,e,n,r,i){return ra(),Ch(i),e.flags|=256,sn(t,e,n,r),e.child}var vd={dehydrated:null,treeContext:null,retryLane:0};function _d(t){return{baseLanes:t,cachePool:null,transitions:null}}function _y(t,e,n){var r=e.pendingProps,i=yt.current,o=!1,a=(e.flags&128)!==0,s;if((s=a)||(s=t!==null&&t.memoizedState===null?!1:(i&2)!==0),s?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ut(yt,i&1),t===null)return cd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,o?(r=e.mode,o=e.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=qu(a,r,0,null),t=Xi(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=_d(n),e.memoizedState=vd,t):Gh(e,a));if(i=t.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return FE(t,e,a,r,s,i,n);if(o){o=r.fallback,a=e.mode,i=t.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=yi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=yi(s,o):(o=Xi(o,a,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,a=t.child.memoizedState,a=a===null?_d(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=t.childLanes&~n,e.memoizedState=vd,r}return o=t.child,t=o.sibling,r=yi(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Gh(t,e){return e=qu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function rl(t,e,n,r){return r!==null&&Ch(r),ia(e,t.child,null,n),t=Gh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FE(t,e,n,r,i,o,a){if(n)return e.flags&256?(e.flags&=-257,r=Fc(Error(se(422))),rl(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=qu({mode:"visible",children:r.children},i,0,null),o=Xi(o,i,a,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&ia(e,t.child,null,a),e.child.memoizedState=_d(a),e.memoizedState=vd,o);if(!(e.mode&1))return rl(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(se(419)),r=Fc(o,r,void 0),rl(t,e,a,r)}if(s=(a&t.childLanes)!==0,gn||s){if(r=Wt,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Vr(t,i),ar(r,t,i,-1))}return qh(),r=Fc(Error(se(421))),rl(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ZE.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,An=mi(i.nextSibling),Cn=e,vt=!0,Jn=null,t!==null&&(In[Un++]=Nr,In[Un++]=Ir,In[Un++]=Ji,Nr=t.id,Ir=t.overflow,Ji=e),e=Gh(e,r.children),e.flags|=4096,e)}function Im(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),fd(t.return,e,n)}function zc(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function yy(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(sn(t,e,r.children,n),r=yt.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Im(t,n,e);else if(t.tag===19)Im(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ut(yt,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&gu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),zc(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&gu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}zc(e,!0,n,null,o);break;case"together":zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $l(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),to|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=yi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zE(t,e,n){switch(e.tag){case 3:vy(e),ra();break;case 5:$_(e);break;case 1:_n(e.type)&&cu(e);break;case 4:Nh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ut(hu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ut(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?_y(t,e,n):(ut(yt,yt.current&1),t=Wr(t,e,n),t!==null?t.sibling:null);ut(yt,yt.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return yy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ut(yt,yt.current),r)break;return null;case 22:case 23:return e.lanes=0,my(t,e,n)}return Wr(t,e,n)}var xy,yd,Sy,My;xy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yd=function(){};Sy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Wi(_r.current);var o=null;switch(n){case"input":i=Hf(t,i),r=Hf(t,r),o=[];break;case"select":i=Mt({},i,{value:void 0}),r=Mt({},r,{value:void 0}),o=[];break;case"textarea":i=Wf(t,i),r=Wf(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=lu)}$f(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ft("scroll",t),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};My=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ca(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function BE(t,e,n){var r=e.pendingProps;switch(Ah(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return _n(e.type)&&uu(),Qt(e),null;case 3:return r=e.stateNode,oa(),ht(vn),ht(nn),Uh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(tl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jn!==null&&(Ad(Jn),Jn=null))),yd(t,e),Qt(e),null;case 5:Ih(e);var i=Wi(Es.current);if(n=e.type,t!==null&&e.stateNode!=null)Sy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(se(166));return Qt(e),null}if(t=Wi(_r.current),tl(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[gr]=e,r[Ss]=o,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",r),ft("close",r);break;case"iframe":case"object":case"embed":ft("load",r);break;case"video":case"audio":for(i=0;i<$a.length;i++)ft($a[i],r);break;case"source":ft("error",r);break;case"img":case"image":case"link":ft("error",r),ft("load",r);break;case"details":ft("toggle",r);break;case"input":Wp(r,o),ft("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ft("invalid",r);break;case"textarea":$p(r,o),ft("invalid",r)}$f(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&el(r.textContent,s,t),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&el(r.textContent,s,t),i=["children",""+s]):fs.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ft("scroll",r)}switch(n){case"input":$s(r),jp(r,o,!0);break;case"textarea":$s(r),Xp(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=lu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Y0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[gr]=e,t[Ss]=r,xy(t,e,!1,!1),e.stateNode=t;e:{switch(a=Xf(n,r),n){case"dialog":ft("cancel",t),ft("close",t),i=r;break;case"iframe":case"object":case"embed":ft("load",t),i=r;break;case"video":case"audio":for(i=0;i<$a.length;i++)ft($a[i],t);i=r;break;case"source":ft("error",t),i=r;break;case"img":case"image":case"link":ft("error",t),ft("load",t),i=r;break;case"details":ft("toggle",t),i=r;break;case"input":Wp(t,r),i=Hf(t,r),ft("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Mt({},r,{value:void 0}),ft("invalid",t);break;case"textarea":$p(t,r),i=Wf(t,r),ft("invalid",t);break;default:i=r}$f(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Q0(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&K0(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ds(t,l):typeof l=="number"&&ds(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(fs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ft("scroll",t):l!=null&&dh(t,o,l,a))}switch(n){case"input":$s(t),jp(t,r,!1);break;case"textarea":$s(t),Xp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Mi(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Xo(t,!!r.multiple,o,!1):r.defaultValue!=null&&Xo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=lu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(t&&e.stateNode!=null)My(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(se(166));if(n=Wi(Es.current),Wi(_r.current),tl(e)){if(r=e.stateNode,n=e.memoizedProps,r[gr]=e,(o=r.nodeValue!==n)&&(t=Cn,t!==null))switch(t.tag){case 3:el(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&el(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gr]=e,e.stateNode=r}return Qt(e),null;case 13:if(ht(yt),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&An!==null&&e.mode&1&&!(e.flags&128))z_(),ra(),e.flags|=98560,o=!1;else if(o=tl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(se(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(se(317));o[gr]=e}else ra(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),o=!1}else Jn!==null&&(Ad(Jn),Jn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Nt===0&&(Nt=3):qh())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return oa(),yd(t,e),t===null&&ys(e.stateNode.containerInfo),Qt(e),null;case 10:return Lh(e.type._context),Qt(e),null;case 17:return _n(e.type)&&uu(),Qt(e),null;case 19:if(ht(yt),o=e.memoizedState,o===null)return Qt(e),null;if(r=(e.flags&128)!==0,a=o.rendering,a===null)if(r)Ca(o,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=gu(t),a!==null){for(e.flags|=128,Ca(o,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,t=a.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(yt,yt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ct()>sa&&(e.flags|=128,r=!0,Ca(o,!1),e.lanes=4194304)}else{if(!r)if(t=gu(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ca(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!vt)return Qt(e),null}else 2*Ct()-o.renderingStartTime>sa&&n!==1073741824&&(e.flags|=128,r=!0,Ca(o,!1),e.lanes=4194304);o.isBackwards?(a.sibling=e.child,e.child=a):(n=o.last,n!==null?n.sibling=a:e.child=a,o.last=a)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ct(),e.sibling=null,n=yt.current,ut(yt,r?n&1|2:n&1),e):(Qt(e),null);case 22:case 23:return Xh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tn&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function HE(t,e){switch(Ah(e),e.tag){case 1:return _n(e.type)&&uu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return oa(),ht(vn),ht(nn),Uh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ih(e),null;case 13:if(ht(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));ra()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(yt),null;case 4:return oa(),null;case 10:return Lh(e.type._context),null;case 22:case 23:return Xh(),null;case 24:return null;default:return null}}var il=!1,tn=!1,GE=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Bo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){bt(t,e,r)}else n.current=null}function xd(t,e,n){try{n()}catch(r){bt(t,e,r)}}var Um=!1;function VE(t,e){if(rd=ou,t=T_(),bh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(s=a+i),d!==o||r!==0&&d.nodeType!==3||(l=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===i&&(s=a),h===o&&++c===r&&(l=a),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(id={focusedElem:t,selectionRange:n},ou=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,m=g.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?v:Kn(e.type,v),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(x){bt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return g=Um,Um=!1,g}function rs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&xd(e,n,o)}i=i.next}while(i!==r)}}function $u(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ey(t){var e=t.alternate;e!==null&&(t.alternate=null,Ey(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gr],delete e[Ss],delete e[sd],delete e[bE],delete e[TE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wy(t){return t.tag===5||t.tag===3||t.tag===4}function km(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Md(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=lu));else if(r!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}function Ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}var $t=null,Zn=!1;function Yr(t,e,n){for(n=n.child;n!==null;)by(t,e,n),n=n.sibling}function by(t,e,n){if(vr&&typeof vr.onCommitFiberUnmount=="function")try{vr.onCommitFiberUnmount(Fu,n)}catch{}switch(n.tag){case 5:tn||Bo(n,e);case 6:var r=$t,i=Zn;$t=null,Yr(t,e,n),$t=r,Zn=i,$t!==null&&(Zn?(t=$t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$t.removeChild(n.stateNode));break;case 18:$t!==null&&(Zn?(t=$t,n=n.stateNode,t.nodeType===8?Oc(t.parentNode,n):t.nodeType===1&&Oc(t,n),gs(t)):Oc($t,n.stateNode));break;case 4:r=$t,i=Zn,$t=n.stateNode.containerInfo,Zn=!0,Yr(t,e,n),$t=r,Zn=i;break;case 0:case 11:case 14:case 15:if(!tn&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&xd(n,e,a),i=i.next}while(i!==r)}Yr(t,e,n);break;case 1:if(!tn&&(Bo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){bt(n,e,s)}Yr(t,e,n);break;case 21:Yr(t,e,n);break;case 22:n.mode&1?(tn=(r=tn)||n.memoizedState!==null,Yr(t,e,n),tn=r):Yr(t,e,n);break;default:Yr(t,e,n)}}function Fm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new GE),e.forEach(function(r){var i=QE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Wn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,a=e,s=a;e:for(;s!==null;){switch(s.tag){case 5:$t=s.stateNode,Zn=!1;break e;case 3:$t=s.stateNode.containerInfo,Zn=!0;break e;case 4:$t=s.stateNode.containerInfo,Zn=!0;break e}s=s.return}if($t===null)throw Error(se(160));by(o,a,i),$t=null,Zn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){bt(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ty(e,t),e=e.sibling}function Ty(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wn(e,t),dr(t),r&4){try{rs(3,t,t.return),$u(3,t)}catch(v){bt(t,t.return,v)}try{rs(5,t,t.return)}catch(v){bt(t,t.return,v)}}break;case 1:Wn(e,t),dr(t),r&512&&n!==null&&Bo(n,n.return);break;case 5:if(Wn(e,t),dr(t),r&512&&n!==null&&Bo(n,n.return),t.flags&32){var i=t.stateNode;try{ds(i,"")}catch(v){bt(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,a=n!==null?n.memoizedProps:o,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&X0(i,o),Xf(s,a);var u=Xf(s,o);for(a=0;a<l.length;a+=2){var c=l[a],d=l[a+1];c==="style"?Q0(i,d):c==="dangerouslySetInnerHTML"?K0(i,d):c==="children"?ds(i,d):dh(i,c,d,u)}switch(s){case"input":Gf(i,o);break;case"textarea":q0(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Xo(i,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?Xo(i,!!o.multiple,o.defaultValue,!0):Xo(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ss]=o}catch(v){bt(t,t.return,v)}}break;case 6:if(Wn(e,t),dr(t),r&4){if(t.stateNode===null)throw Error(se(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(v){bt(t,t.return,v)}}break;case 3:if(Wn(e,t),dr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gs(e.containerInfo)}catch(v){bt(t,t.return,v)}break;case 4:Wn(e,t),dr(t);break;case 13:Wn(e,t),dr(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(jh=Ct())),r&4&&Fm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(tn=(u=tn)||c,Wn(e,t),tn=u):Wn(e,t),dr(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(Ee=t,c=t.child;c!==null;){for(d=Ee=c;Ee!==null;){switch(h=Ee,p=h.child,h.tag){case 0:case 11:case 14:case 15:rs(4,h,h.return);break;case 1:Bo(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){bt(r,n,v)}}break;case 5:Bo(h,h.return);break;case 22:if(h.memoizedState!==null){Bm(d);continue}}p!==null?(p.return=h,Ee=p):Bm(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Z0("display",a))}catch(v){bt(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){bt(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Wn(e,t),dr(t),r&4&&Fm(t);break;case 21:break;default:Wn(e,t),dr(t)}}function dr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wy(n)){var r=n;break e}n=n.return}throw Error(se(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ds(i,""),r.flags&=-33);var o=km(t);Ed(t,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=km(t);Md(t,s,a);break;default:throw Error(se(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WE(t,e,n){Ee=t,Ay(t)}function Ay(t,e,n){for(var r=(t.mode&1)!==0;Ee!==null;){var i=Ee,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||il;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||tn;s=il;var u=tn;if(il=a,(tn=l)&&!u)for(Ee=i;Ee!==null;)a=Ee,l=a.child,a.tag===22&&a.memoizedState!==null?Hm(i):l!==null?(l.return=a,Ee=l):Hm(i);for(;o!==null;)Ee=o,Ay(o),o=o.sibling;Ee=i,il=s,tn=u}zm(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Ee=o):zm(t)}}function zm(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||$u(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tn)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Kn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Mm(e,o,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Mm(e,a,n)}break;case 5:var s=e.stateNode;if(n===null&&e.flags&4){n=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&gs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}tn||e.flags&512&&Sd(e)}catch(h){bt(e,e.return,h)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Bm(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Hm(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$u(4,e)}catch(l){bt(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){bt(e,i,l)}}var o=e.return;try{Sd(e)}catch(l){bt(e,o,l)}break;case 5:var a=e.return;try{Sd(e)}catch(l){bt(e,a,l)}}}catch(l){bt(e,e.return,l)}if(e===t){Ee=null;break}var s=e.sibling;if(s!==null){s.return=e.return,Ee=s;break}Ee=e.return}}var jE=Math.ceil,yu=Xr.ReactCurrentDispatcher,Vh=Xr.ReactCurrentOwner,Hn=Xr.ReactCurrentBatchConfig,nt=0,Wt=null,Ot=null,Xt=0,Tn=0,Ho=Ai(0),Nt=0,As=null,to=0,Xu=0,Wh=0,is=null,mn=null,jh=0,sa=1/0,Rr=null,xu=!1,wd=null,vi=null,ol=!1,ui=null,Su=0,os=0,bd=null,Xl=-1,ql=0;function cn(){return nt&6?Ct():Xl!==-1?Xl:Xl=Ct()}function _i(t){return t.mode&1?nt&2&&Xt!==0?Xt&-Xt:CE.transition!==null?(ql===0&&(ql=c_()),ql):(t=at,t!==0||(t=window.event,t=t===void 0?16:v_(t.type)),t):1}function ar(t,e,n,r){if(50<os)throw os=0,bd=null,Error(se(185));Is(t,n,r),(!(nt&2)||t!==Wt)&&(t===Wt&&(!(nt&2)&&(Xu|=n),Nt===4&&si(t,Xt)),yn(t,r),n===1&&nt===0&&!(e.mode&1)&&(sa=Ct()+500,Vu&&Ci()))}function yn(t,e){var n=t.callbackNode;CM(t,e);var r=iu(t,t===Wt?Xt:0);if(r===0)n!==null&&Kp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Kp(n),e===1)t.tag===0?AE(Gm.bind(null,t)):U_(Gm.bind(null,t)),EE(function(){!(nt&6)&&Ci()}),n=null;else{switch(f_(r)){case 1:n=vh;break;case 4:n=l_;break;case 16:n=ru;break;case 536870912:n=u_;break;default:n=ru}n=Iy(n,Cy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cy(t,e){if(Xl=-1,ql=0,nt&6)throw Error(se(327));var n=t.callbackNode;if(Qo()&&t.callbackNode!==n)return null;var r=iu(t,t===Wt?Xt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Mu(t,r);else{e=r;var i=nt;nt|=2;var o=Py();(Wt!==t||Xt!==e)&&(Rr=null,sa=Ct()+500,$i(t,e));do try{qE();break}catch(s){Ry(t,s)}while(1);Ph(),yu.current=o,nt=i,Ot!==null?e=0:(Wt=null,Xt=0,e=Nt)}if(e!==0){if(e===2&&(i=Qf(t),i!==0&&(r=i,e=Td(t,i))),e===1)throw n=As,$i(t,0),si(t,r),yn(t,Ct()),n;if(e===6)si(t,r);else{if(i=t.current.alternate,!(r&30)&&!$E(i)&&(e=Mu(t,r),e===2&&(o=Qf(t),o!==0&&(r=o,e=Td(t,o))),e===1))throw n=As,$i(t,0),si(t,r),yn(t,Ct()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(se(345));case 2:Fi(t,mn,Rr);break;case 3:if(si(t,r),(r&130023424)===r&&(e=jh+500-Ct(),10<e)){if(iu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){cn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ad(Fi.bind(null,t,mn,Rr),e);break}Fi(t,mn,Rr);break;case 4:if(si(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-or(r);o=1<<a,a=e[a],a>i&&(i=a),r&=~o}if(r=i,r=Ct()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jE(r/1960))-r,10<r){t.timeoutHandle=ad(Fi.bind(null,t,mn,Rr),r);break}Fi(t,mn,Rr);break;case 5:Fi(t,mn,Rr);break;default:throw Error(se(329))}}}return yn(t,Ct()),t.callbackNode===n?Cy.bind(null,t):null}function Td(t,e){var n=is;return t.current.memoizedState.isDehydrated&&($i(t,e).flags|=256),t=Mu(t,e),t!==2&&(e=mn,mn=n,e!==null&&Ad(e)),t}function Ad(t){mn===null?mn=t:mn.push.apply(mn,t)}function $E(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!lr(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function si(t,e){for(e&=~Wh,e&=~Xu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-or(e),r=1<<n;t[n]=-1,e&=~r}}function Gm(t){if(nt&6)throw Error(se(327));Qo();var e=iu(t,0);if(!(e&1))return yn(t,Ct()),null;var n=Mu(t,e);if(t.tag!==0&&n===2){var r=Qf(t);r!==0&&(e=r,n=Td(t,r))}if(n===1)throw n=As,$i(t,0),si(t,e),yn(t,Ct()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fi(t,mn,Rr),yn(t,Ct()),null}function $h(t,e){var n=nt;nt|=1;try{return t(e)}finally{nt=n,nt===0&&(sa=Ct()+500,Vu&&Ci())}}function no(t){ui!==null&&ui.tag===0&&!(nt&6)&&Qo();var e=nt;nt|=1;var n=Hn.transition,r=at;try{if(Hn.transition=null,at=1,t)return t()}finally{at=r,Hn.transition=n,nt=e,!(nt&6)&&Ci()}}function Xh(){Tn=Ho.current,ht(Ho)}function $i(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ME(n)),Ot!==null)for(n=Ot.return;n!==null;){var r=n;switch(Ah(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&uu();break;case 3:oa(),ht(vn),ht(nn),Uh();break;case 5:Ih(r);break;case 4:oa();break;case 13:ht(yt);break;case 19:ht(yt);break;case 10:Lh(r.type._context);break;case 22:case 23:Xh()}n=n.return}if(Wt=t,Ot=t=yi(t.current,null),Xt=Tn=e,Nt=0,As=null,Wh=Xu=to=0,mn=is=null,Vi!==null){for(e=0;e<Vi.length;e++)if(n=Vi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Vi=null}return t}function Ry(t,e){do{var n=Ot;try{if(Ph(),Wl.current=_u,vu){for(var r=xt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vu=!1}if(eo=0,Bt=Dt=xt=null,ns=!1,ws=0,Vh.current=null,n===null||n.return===null){Nt=1,As=e,Ot=null;break}e:{var o=t,a=n.return,s=n,l=e;if(e=Xt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Rm(a);if(p!==null){p.flags&=-257,Pm(p,a,s,o,e),p.mode&1&&Cm(o,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){Cm(o,u,e),qh();break e}l=Error(se(426))}}else if(vt&&s.mode&1){var m=Rm(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Pm(m,a,s,o,e),Ch(aa(l,s));break e}}o=l=aa(l,s),Nt!==4&&(Nt=2),is===null?is=[o]:is.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=dy(o,l,e);Sm(o,f);break e;case 1:s=l;var _=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof _.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(vi===null||!vi.has(y)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=hy(o,s,e);Sm(o,x);break e}}o=o.return}while(o!==null)}Oy(n)}catch(S){e=S,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(1)}function Py(){var t=yu.current;return yu.current=_u,t===null?_u:t}function qh(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Wt===null||!(to&268435455)&&!(Xu&268435455)||si(Wt,Xt)}function Mu(t,e){var n=nt;nt|=2;var r=Py();(Wt!==t||Xt!==e)&&(Rr=null,$i(t,e));do try{XE();break}catch(i){Ry(t,i)}while(1);if(Ph(),nt=n,yu.current=r,Ot!==null)throw Error(se(261));return Wt=null,Xt=0,Nt}function XE(){for(;Ot!==null;)Ly(Ot)}function qE(){for(;Ot!==null&&!yM();)Ly(Ot)}function Ly(t){var e=Ny(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?Oy(t):Ot=e,Vh.current=null}function Oy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=HE(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Ot=null;return}}else if(n=BE(n,e,Tn),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);Nt===0&&(Nt=5)}function Fi(t,e,n){var r=at,i=Hn.transition;try{Hn.transition=null,at=1,YE(t,e,n,r)}finally{Hn.transition=i,at=r}return null}function YE(t,e,n,r){do Qo();while(ui!==null);if(nt&6)throw Error(se(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(RM(t,o),t===Wt&&(Ot=Wt=null,Xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ol||(ol=!0,Iy(ru,function(){return Qo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Hn.transition,Hn.transition=null;var a=at;at=1;var s=nt;nt|=4,Vh.current=null,VE(t,n),Ty(n,t),mE(id),ou=!!rd,id=rd=null,t.current=n,WE(n),xM(),nt=s,at=a,Hn.transition=o}else t.current=n;if(ol&&(ol=!1,ui=t,Su=i),o=t.pendingLanes,o===0&&(vi=null),EM(n.stateNode),yn(t,Ct()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xu)throw xu=!1,t=wd,wd=null,t;return Su&1&&t.tag!==0&&Qo(),o=t.pendingLanes,o&1?t===bd?os++:(os=0,bd=t):os=0,Ci(),null}function Qo(){if(ui!==null){var t=f_(Su),e=Hn.transition,n=at;try{if(Hn.transition=null,at=16>t?16:t,ui===null)var r=!1;else{if(t=ui,ui=null,Su=0,nt&6)throw Error(se(331));var i=nt;for(nt|=4,Ee=t.current;Ee!==null;){var o=Ee,a=o.child;if(Ee.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(Ee=u;Ee!==null;){var c=Ee;switch(c.tag){case 0:case 11:case 15:rs(8,c,o)}var d=c.child;if(d!==null)d.return=c,Ee=d;else for(;Ee!==null;){c=Ee;var h=c.sibling,p=c.return;if(Ey(c),c===u){Ee=null;break}if(h!==null){h.return=p,Ee=h;break}Ee=p}}}var g=o.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}Ee=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,Ee=a;else e:for(;Ee!==null;){if(o=Ee,o.flags&2048)switch(o.tag){case 0:case 11:case 15:rs(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,Ee=f;break e}Ee=o.return}}var _=t.current;for(Ee=_;Ee!==null;){a=Ee;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Ee=y;else e:for(a=_;Ee!==null;){if(s=Ee,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:$u(9,s)}}catch(S){bt(s,s.return,S)}if(s===a){Ee=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,Ee=x;break e}Ee=s.return}}if(nt=i,Ci(),vr&&typeof vr.onPostCommitFiberRoot=="function")try{vr.onPostCommitFiberRoot(Fu,t)}catch{}r=!0}return r}finally{at=n,Hn.transition=e}}return!1}function Vm(t,e,n){e=aa(n,e),e=dy(t,e,1),t=gi(t,e,1),e=cn(),t!==null&&(Is(t,1,e),yn(t,e))}function bt(t,e,n){if(t.tag===3)Vm(t,t,n);else for(;e!==null;){if(e.tag===3){Vm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vi===null||!vi.has(r))){t=aa(n,t),t=hy(e,t,1),e=gi(e,t,1),t=cn(),e!==null&&(Is(e,1,t),yn(e,t));break}}e=e.return}}function KE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&(Xt&n)===n&&(Nt===4||Nt===3&&(Xt&130023424)===Xt&&500>Ct()-jh?$i(t,0):Wh|=n),yn(t,e)}function Dy(t,e){e===0&&(t.mode&1?(e=Ys,Ys<<=1,!(Ys&130023424)&&(Ys=4194304)):e=1);var n=cn();t=Vr(t,e),t!==null&&(Is(t,e,n),yn(t,n))}function ZE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Dy(t,n)}function QE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(se(314))}r!==null&&r.delete(e),Dy(t,n)}var Ny;Ny=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vn.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,zE(t,e,n);gn=!!(t.flags&131072)}else gn=!1,vt&&e.flags&1048576&&k_(e,du,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;$l(t,e),t=e.pendingProps;var i=na(e,nn.current);Zo(e,n),i=Fh(null,e,r,t,i,n);var o=zh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(r)?(o=!0,cu(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Dh(e),i.updater=Wu,e.stateNode=i,i._reactInternals=e,hd(e,r,t,n),e=gd(null,e,r,!0,o,n)):(e.tag=0,vt&&o&&Th(e),sn(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch($l(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=e1(r),t=Kn(r,t),i){case 0:e=md(null,e,r,t,n);break e;case 1:e=Dm(null,e,r,t,n);break e;case 11:e=Lm(null,e,r,t,n);break e;case 14:e=Om(null,e,r,Kn(r.type,t),n);break e}throw Error(se(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),md(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),Dm(t,e,r,i,n);case 3:e:{if(vy(e),t===null)throw Error(se(387));r=e.pendingProps,o=e.memoizedState,i=o.element,H_(t,e),mu(e,r,null,n);var a=e.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=aa(Error(se(423)),e),e=Nm(t,e,r,n,i);break e}else if(r!==i){i=aa(Error(se(424)),e),e=Nm(t,e,r,n,i);break e}else for(An=mi(e.stateNode.containerInfo.firstChild),Cn=e,vt=!0,Jn=null,n=j_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ra(),r===i){e=Wr(t,e,n);break e}sn(t,e,r,n)}e=e.child}return e;case 5:return $_(e),t===null&&cd(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,a=i.children,od(r,i)?a=null:o!==null&&od(r,o)&&(e.flags|=32),gy(t,e),sn(t,e,a,n),e.child;case 6:return t===null&&cd(e),null;case 13:return _y(t,e,n);case 4:return Nh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ia(e,null,r,n):sn(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),Lm(t,e,r,i,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,a=i.value,ut(hu,r._currentValue),r._currentValue=a,o!==null)if(lr(o.value,a)){if(o.children===i.children&&!vn.current){e=Wr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Fr(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),fd(o.return,n,e),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===e.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(se(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),fd(a,n,e),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===e){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}sn(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Zo(e,n),i=Gn(i),r=r(i),e.flags|=1,sn(t,e,r,n),e.child;case 14:return r=e.type,i=Kn(r,e.pendingProps),i=Kn(r.type,i),Om(t,e,r,i,n);case 15:return py(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),$l(t,e),e.tag=1,_n(r)?(t=!0,cu(e)):t=!1,Zo(e,n),V_(e,r,i),hd(e,r,i,n),gd(null,e,r,!0,t,n);case 19:return yy(t,e,n);case 22:return my(t,e,n)}throw Error(se(156,e.tag))};function Iy(t,e){return s_(t,e)}function JE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,r){return new JE(t,e,n,r)}function Yh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function e1(t){if(typeof t=="function")return Yh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ph)return 11;if(t===mh)return 14}return 2}function yi(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yl(t,e,n,r,i,o){var a=2;if(r=t,typeof t=="function")Yh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Lo:return Xi(n.children,i,o,e);case hh:a=8,i|=8;break;case kf:return t=Bn(12,n,e,i|2),t.elementType=kf,t.lanes=o,t;case Ff:return t=Bn(13,n,e,i),t.elementType=Ff,t.lanes=o,t;case zf:return t=Bn(19,n,e,i),t.elementType=zf,t.lanes=o,t;case W0:return qu(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G0:a=10;break e;case V0:a=9;break e;case ph:a=11;break e;case mh:a=14;break e;case ii:a=16,r=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Bn(a,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Xi(t,e,n,r){return t=Bn(7,t,r,e),t.lanes=n,t}function qu(t,e,n,r){return t=Bn(22,t,r,e),t.elementType=W0,t.lanes=n,t.stateNode={isHidden:!1},t}function Bc(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function Hc(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function t1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sc(0),this.expirationTimes=Sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kh(t,e,n,r,i,o,a,s,l){return t=new t1(t,e,n,s,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Bn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dh(o),t}function n1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Po,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Uy(t){if(!t)return Ei;t=t._reactInternals;e:{if(oo(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(_n(n))return I_(t,n,e)}return e}function ky(t,e,n,r,i,o,a,s,l){return t=Kh(n,r,!0,t,i,o,a,s,l),t.context=Uy(null),n=t.current,r=cn(),i=_i(n),o=Fr(r,i),o.callback=e??null,gi(n,o,i),t.current.lanes=i,Is(t,i,r),yn(t,r),t}function Yu(t,e,n,r){var i=e.current,o=cn(),a=_i(i);return n=Uy(n),e.context===null?e.context=n:e.pendingContext=n,e=Fr(o,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gi(i,e,a),t!==null&&(ar(t,i,a,o),Vl(t,i,a)),a}function Eu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zh(t,e){Wm(t,e),(t=t.alternate)&&Wm(t,e)}function r1(){return null}var Fy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qh(t){this._internalRoot=t}Ku.prototype.render=Qh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Yu(t,e,null,null)};Ku.prototype.unmount=Qh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;no(function(){Yu(null,t,null,null)}),e[Gr]=null}};function Ku(t){this._internalRoot=t}Ku.prototype.unstable_scheduleHydration=function(t){if(t){var e=p_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ai.length&&e!==0&&e<ai[n].priority;n++);ai.splice(n,0,t),n===0&&g_(t)}};function Jh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jm(){}function i1(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Eu(a);o.call(u)}}var a=ky(e,r,t,0,null,!1,!1,"",jm);return t._reactRootContainer=a,t[Gr]=a.current,ys(t.nodeType===8?t.parentNode:t),no(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Eu(l);s.call(u)}}var l=Kh(t,0,!1,null,null,!1,!1,"",jm);return t._reactRootContainer=l,t[Gr]=l.current,ys(t.nodeType===8?t.parentNode:t),no(function(){Yu(e,l,n,r)}),l}function Qu(t,e,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=Eu(a);s.call(l)}}Yu(e,a,t,i)}else a=i1(n,e,t,i,r);return Eu(a)}d_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ja(e.pendingLanes);n!==0&&(_h(e,n|1),yn(e,Ct()),!(nt&6)&&(sa=Ct()+500,Ci()))}break;case 13:no(function(){var r=Vr(t,1);if(r!==null){var i=cn();ar(r,t,1,i)}}),Zh(t,1)}};yh=function(t){if(t.tag===13){var e=Vr(t,134217728);if(e!==null){var n=cn();ar(e,t,134217728,n)}Zh(t,134217728)}};h_=function(t){if(t.tag===13){var e=_i(t),n=Vr(t,e);if(n!==null){var r=cn();ar(n,t,e,r)}Zh(t,e)}};p_=function(){return at};m_=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};Yf=function(t,e,n){switch(e){case"input":if(Gf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Gu(r);if(!i)throw Error(se(90));$0(r),Gf(r,i)}}}break;case"textarea":q0(t,n);break;case"select":e=n.value,e!=null&&Xo(t,!!n.multiple,e,!1)}};t_=$h;n_=no;var o1={usingClientEntryPoint:!1,Events:[ks,Io,Gu,J0,e_,$h]},Ra={findFiberByHostInstance:Gi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},a1={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=o_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||r1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{Fu=al.inject(a1),vr=al}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o1;Pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jh(e))throw Error(se(200));return n1(t,e,null,n)};Pn.createRoot=function(t,e){if(!Jh(t))throw Error(se(299));var n=!1,r="",i=Fy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Kh(t,1,!1,null,null,n,!1,r,i),t[Gr]=e.current,ys(t.nodeType===8?t.parentNode:t),new Qh(e)};Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=o_(e),t=t===null?null:t.stateNode,t};Pn.flushSync=function(t){return no(t)};Pn.hydrate=function(t,e,n){if(!Zu(e))throw Error(se(200));return Qu(null,t,e,!0,n)};Pn.hydrateRoot=function(t,e,n){if(!Jh(t))throw Error(se(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Fy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=ky(e,null,t,1,n??null,i,!1,o,a),t[Gr]=e.current,ys(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ku(e)};Pn.render=function(t,e,n){if(!Zu(e))throw Error(se(200));return Qu(null,t,e,!1,n)};Pn.unmountComponentAtNode=function(t){if(!Zu(t))throw Error(se(40));return t._reactRootContainer?(no(function(){Qu(null,null,t,!1,function(){t._reactRootContainer=null,t[Gr]=null})}),!0):!1};Pn.unstable_batchedUpdates=$h;Pn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zu(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Qu(t,e,n,!1,r)};Pn.version="18.2.0-next-9e3b772b8-20220608";function zy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zy)}catch(t){console.error(t)}}zy(),k0.exports=Pn;var s1=k0.exports,$m=s1;If.createRoot=$m.createRoot,If.hydrateRoot=$m.hydrateRoot;function By(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=By(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function l1(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=By(t))&&(r&&(r+=" "),r+=e);return r}function u1(){for(var t=0,e,n,r="";t<arguments.length;)(e=arguments[t++])&&(n=Hy(e))&&(r&&(r+=" "),r+=n);return r}function Hy(t){if(typeof t=="string")return t;for(var e,n="",r=0;r<t.length;r++)t[r]&&(e=Hy(t[r]))&&(n&&(n+=" "),n+=e);return n}var ep="-";function c1(t){var e=d1(t),n=t.conflictingClassGroups,r=t.conflictingClassGroupModifiers,i=r===void 0?{}:r;function o(s){var l=s.split(ep);return l[0]===""&&l.length!==1&&l.shift(),Gy(l,e)||f1(s)}function a(s,l){var u=n[s]||[];return l&&i[s]?[].concat(u,i[s]):u}return{getClassGroupId:o,getConflictingClassGroupIds:a}}function Gy(t,e){var a;if(t.length===0)return e.classGroupId;var n=t[0],r=e.nextPart.get(n),i=r?Gy(t.slice(1),r):void 0;if(i)return i;if(e.validators.length!==0){var o=t.join(ep);return(a=e.validators.find(function(s){var l=s.validator;return l(o)}))==null?void 0:a.classGroupId}}var Xm=/^\[(.+)\]$/;function f1(t){if(Xm.test(t)){var e=Xm.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}}function d1(t){var e=t.theme,n=t.prefix,r={nextPart:new Map,validators:[]},i=p1(Object.entries(t.classGroups),n);return i.forEach(function(o){var a=o[0],s=o[1];Cd(s,r,a,e)}),r}function Cd(t,e,n,r){t.forEach(function(i){if(typeof i=="string"){var o=i===""?e:qm(e,i);o.classGroupId=n;return}if(typeof i=="function"){if(h1(i)){Cd(i(r),e,n,r);return}e.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(function(a){var s=a[0],l=a[1];Cd(l,qm(e,s),n,r)})})}function qm(t,e){var n=t;return e.split(ep).forEach(function(r){n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function h1(t){return t.isThemeGetter}function p1(t,e){return e?t.map(function(n){var r=n[0],i=n[1],o=i.map(function(a){return typeof a=="string"?e+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(function(s){var l=s[0],u=s[1];return[e+l,u]})):a});return[r,o]}):t}function m1(t){if(t<1)return{get:function(){},set:function(){}};var e=0,n=new Map,r=new Map;function i(o,a){n.set(o,a),e++,e>t&&(e=0,r=n,n=new Map)}return{get:function(a){var s=n.get(a);if(s!==void 0)return s;if((s=r.get(a))!==void 0)return i(a,s),s},set:function(a,s){n.has(a)?n.set(a,s):i(a,s)}}}var Vy="!";function g1(t){var e=t.separator||":",n=e.length===1,r=e[0],i=e.length;return function(a){for(var s=[],l=0,u=0,c,d=0;d<a.length;d++){var h=a[d];if(l===0){if(h===r&&(n||a.slice(d,d+i)===e)){s.push(a.slice(u,d)),u=d+i;continue}if(h==="/"){c=d;continue}}h==="["?l++:h==="]"&&l--}var p=s.length===0?a:a.substring(u),g=p.startsWith(Vy),v=g?p.substring(1):p,m=c&&c>u?c-u:void 0;return{modifiers:s,hasImportantModifier:g,baseClassName:v,maybePostfixModifierPosition:m}}}function v1(t){if(t.length<=1)return t;var e=[],n=[];return t.forEach(function(r){var i=r[0]==="[";i?(e.push.apply(e,n.sort().concat([r])),n=[]):n.push(r)}),e.push.apply(e,n.sort()),e}function _1(t){return{cache:m1(t.cacheSize),splitModifiers:g1(t),...c1(t)}}var y1=/\s+/;function x1(t,e){var n=e.splitModifiers,r=e.getClassGroupId,i=e.getConflictingClassGroupIds,o=new Set;return t.trim().split(y1).map(function(a){var s=n(a),l=s.modifiers,u=s.hasImportantModifier,c=s.baseClassName,d=s.maybePostfixModifierPosition,h=r(d?c.substring(0,d):c),p=!!d;if(!h){if(!d)return{isTailwindClass:!1,originalClassName:a};if(h=r(c),!h)return{isTailwindClass:!1,originalClassName:a};p=!1}var g=v1(l).join(":"),v=u?g+Vy:g;return{isTailwindClass:!0,modifierId:v,classGroupId:h,originalClassName:a,hasPostfixModifier:p}}).reverse().filter(function(a){if(!a.isTailwindClass)return!0;var s=a.modifierId,l=a.classGroupId,u=a.hasPostfixModifier,c=s+l;return o.has(c)?!1:(o.add(c),i(l,u).forEach(function(d){return o.add(s+d)}),!0)}).reverse().map(function(a){return a.originalClassName}).join(" ")}function S1(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r,i,o,a=s;function s(u){var c=e[0],d=e.slice(1),h=d.reduce(function(p,g){return g(p)},c());return r=_1(h),i=r.cache.get,o=r.cache.set,a=l,l(u)}function l(u){var c=i(u);if(c)return c;var d=x1(u,r);return o(u,d),d}return function(){return a(u1.apply(null,arguments))}}function ct(t){var e=function(r){return r[t]||[]};return e.isThemeGetter=!0,e}var Wy=/^\[(?:([a-z-]+):)?(.+)\]$/i,M1=/^\d+\/\d+$/,E1=new Set(["px","full","screen"]),w1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,b1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,T1=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function jn(t){return ji(t)||E1.has(t)||M1.test(t)||Rd(t)}function Rd(t){return ao(t,"length",O1)}function A1(t){return ao(t,"size",jy)}function C1(t){return ao(t,"position",jy)}function R1(t){return ao(t,"url",D1)}function sl(t){return ao(t,"number",ji)}function ji(t){return!Number.isNaN(Number(t))}function P1(t){return t.endsWith("%")&&ji(t.slice(0,-1))}function Pa(t){return Ym(t)||ao(t,"number",Ym)}function Ze(t){return Wy.test(t)}function La(){return!0}function Kr(t){return w1.test(t)}function L1(t){return ao(t,"",N1)}function ao(t,e,n){var r=Wy.exec(t);return r?r[1]?r[1]===e:n(r[2]):!1}function O1(t){return b1.test(t)}function jy(){return!1}function D1(t){return t.startsWith("url(")}function Ym(t){return Number.isInteger(Number(t))}function N1(t){return T1.test(t)}function I1(){var t=ct("colors"),e=ct("spacing"),n=ct("blur"),r=ct("brightness"),i=ct("borderColor"),o=ct("borderRadius"),a=ct("borderSpacing"),s=ct("borderWidth"),l=ct("contrast"),u=ct("grayscale"),c=ct("hueRotate"),d=ct("invert"),h=ct("gap"),p=ct("gradientColorStops"),g=ct("gradientColorStopPositions"),v=ct("inset"),m=ct("margin"),f=ct("opacity"),_=ct("padding"),y=ct("saturate"),x=ct("scale"),S=ct("sepia"),M=ct("skew"),E=ct("space"),A=ct("translate"),w=function(){return["auto","contain","none"]},b=function(){return["auto","hidden","clip","visible","scroll"]},B=function(){return["auto",Ze,e]},k=function(){return[Ze,e]},te=function(){return["",jn]},R=function(){return["auto",ji,Ze]},L=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},D=function(){return["solid","dashed","dotted","double","none"]},J=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},z=function(){return["start","end","center","between","around","evenly","stretch"]},W=function(){return["","0",Ze]},N=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},V=function(){return[ji,sl]},Y=function(){return[ji,Ze]};return{cacheSize:500,theme:{colors:[La],spacing:[jn],blur:["none","",Kr,Ze],brightness:V(),borderColor:[t],borderRadius:["none","","full",Kr,Ze],borderSpacing:k(),borderWidth:te(),contrast:V(),grayscale:W(),hueRotate:Y(),invert:W(),gap:k(),gradientColorStops:[t],gradientColorStopPositions:[P1,Rd],inset:B(),margin:B(),opacity:V(),padding:k(),saturate:V(),scale:V(),sepia:W(),skew:Y(),space:k(),translate:k()},classGroups:{aspect:[{aspect:["auto","square","video",Ze]}],container:["container"],columns:[{columns:[Kr]}],"break-after":[{"break-after":N()}],"break-before":[{"break-before":N()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(L(),[Ze])}],overflow:[{overflow:b()}],"overflow-x":[{"overflow-x":b()}],"overflow-y":[{"overflow-y":b()}],overscroll:[{overscroll:w()}],"overscroll-x":[{"overscroll-x":w()}],"overscroll-y":[{"overscroll-y":w()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Pa]}],basis:[{basis:B()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Ze]}],grow:[{grow:W()}],shrink:[{shrink:W()}],order:[{order:["first","last","none",Pa]}],"grid-cols":[{"grid-cols":[La]}],"col-start-end":[{col:["auto",{span:["full",Pa]},Ze]}],"col-start":[{"col-start":R()}],"col-end":[{"col-end":R()}],"grid-rows":[{"grid-rows":[La]}],"row-start-end":[{row:["auto",{span:[Pa]},Ze]}],"row-start":[{"row-start":R()}],"row-end":[{"row-end":R()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Ze]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Ze]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal"].concat(z())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(z(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(z(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[_]}],px:[{px:[_]}],py:[{py:[_]}],ps:[{ps:[_]}],pe:[{pe:[_]}],pt:[{pt:[_]}],pr:[{pr:[_]}],pb:[{pb:[_]}],pl:[{pl:[_]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[E]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[E]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",Ze,e]}],"min-w":[{"min-w":["min","max","fit",Ze,jn]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[Kr]},Kr,Ze]}],h:[{h:[Ze,e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",Ze,jn]}],"max-h":[{"max-h":[Ze,e,"min","max","fit"]}],"font-size":[{text:["base",Kr,Rd]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",sl]}],"font-family":[{font:[La]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Ze]}],"line-clamp":[{"line-clamp":["none",ji,sl]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ze,jn]}],"list-image":[{"list-image":["none",Ze]}],"list-style-type":[{list:["none","disc","decimal",Ze]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(D(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",jn]}],"underline-offset":[{"underline-offset":["auto",Ze,jn]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:k()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ze]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ze]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(L(),[C1])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",A1]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},R1]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[].concat(D(),["hidden"])}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:D()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:[""].concat(D())}],"outline-offset":[{"outline-offset":[Ze,jn]}],"outline-w":[{outline:[jn]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:te()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[jn]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",Kr,L1]}],"shadow-color":[{shadow:[La]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":J()}],"bg-blend":[{"bg-blend":J()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Kr,Ze]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[d]}],saturate:[{saturate:[y]}],sepia:[{sepia:[S]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[S]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Ze]}],duration:[{duration:Y()}],ease:[{ease:["linear","in","out","in-out",Ze]}],delay:[{delay:Y()}],animate:[{animate:["none","spin","ping","pulse","bounce",Ze]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[Pa,Ze]}],"translate-x":[{"translate-x":[A]}],"translate-y":[{"translate-y":[A]}],"skew-x":[{"skew-x":[M]}],"skew-y":[{"skew-y":[M]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Ze]}],accent:[{accent:["auto",t]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ze]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":k()}],"scroll-mx":[{"scroll-mx":k()}],"scroll-my":[{"scroll-my":k()}],"scroll-ms":[{"scroll-ms":k()}],"scroll-me":[{"scroll-me":k()}],"scroll-mt":[{"scroll-mt":k()}],"scroll-mr":[{"scroll-mr":k()}],"scroll-mb":[{"scroll-mb":k()}],"scroll-ml":[{"scroll-ml":k()}],"scroll-p":[{"scroll-p":k()}],"scroll-px":[{"scroll-px":k()}],"scroll-py":[{"scroll-py":k()}],"scroll-ps":[{"scroll-ps":k()}],"scroll-pe":[{"scroll-pe":k()}],"scroll-pt":[{"scroll-pt":k()}],"scroll-pr":[{"scroll-pr":k()}],"scroll-pb":[{"scroll-pb":k()}],"scroll-pl":[{"scroll-pl":k()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ze]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[jn,sl]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var U1=S1(I1);function Ri(...t){return U1(l1(t))}const $y=tt.forwardRef(({className:t,type:e,...n},r)=>Pe.jsx("input",{type:e,className:Ri("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...n}));$y.displayName="Input";const k1=({searchTerm:t,setSearchTerm:e,handleKeyDown:n})=>Pe.jsx("div",{className:"absolute top-4 left-1/2 transform -translate-x-1/2 w-96",children:Pe.jsx($y,{placeholder:"Search...",value:t,onChange:r=>e(r.target.value),onKeyDown:n,className:"w-full"})}),F1=()=>{const[t,e]=tt.useState("Wikipedia"),[n,r]=tt.useState(""),[i,o]=tt.useState(!1),a=tt.useRef(!1);tt.useEffect(()=>{a.current?s(t).then(u=>{u&&r(u==null?void 0:u.extract)}).catch(u=>{console.error("Error fetching Wikipedia data: ",u)}):a.current=!0},[i]);async function s(u){if(!u)return;const d=`https://wikigraph-server-8042906eb85c.herokuapp.com/getWikiArticle?${new URLSearchParams({searchTerm:u}).toString()}`;try{return fetch(d,{method:"GET",headers:{Accept:"application/json"}}).then(h=>h.json()).then(h=>h).catch(h=>console.error("Error:",h))}catch(h){return console.error("Error fetching Wikipedia data:",h),null}}return{searchTerm:t,setSearchTerm:e,articleContent:n,handleSearchToggle:()=>{console.log(i),o(u=>!u)},searching:i,fetchWikipediaData:s}};function z1(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,o,a,s=[],l=!0,u=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(s.push(r.value),s.length!==e);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return s}}function B1(t,e,n){return e=q1(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Km(t,e){return V1(t)||z1(t,e)||Xy(t,e)||$1()}function H1(t){return G1(t)||W1(t)||Xy(t)||j1()}function G1(t){if(Array.isArray(t))return Pd(t)}function V1(t){if(Array.isArray(t))return t}function W1(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Xy(t,e){if(t){if(typeof t=="string")return Pd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pd(t,e)}}function Pd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function j1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X1(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function q1(t){var e=X1(t,"string");return typeof e=="symbol"?e:String(e)}var Y1=function(e,n){var r=new Set(n);return Object.assign.apply(Object,[{}].concat(H1(Object.entries(e).filter(function(i){var o=Km(i,1),a=o[0];return!r.has(a)}).map(function(i){var o=Km(i,2),a=o[0],s=o[1];return B1({},a,s)}))))};/*! fromentries. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var K1=function(e){return[...e].reduce((n,[r,i])=>(n[r]=i,n),{})};const Zm=Ds(K1);function Z1(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,o,a,s=[],l=!0,u=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(s.push(r.value),s.length!==e);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return s}}function Ld(t){"@babel/helpers - typeof";return Ld=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ld(t)}function qy(t,e){return J1(t)||Z1(t,e)||Yy(t,e)||nw()}function Qm(t){return Q1(t)||ew(t)||Yy(t)||tw()}function Q1(t){if(Array.isArray(t))return Od(t)}function J1(t){if(Array.isArray(t))return t}function ew(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Yy(t,e){if(t){if(typeof t=="string")return Od(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Od(t,e)}}function Od(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function tw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rw(t,e){var n=Ld(e)==="object"?e:{wrapperElementType:e,methodNames:(arguments.length<=2?void 0:arguments[2])||void 0,initPropNames:(arguments.length<=3?void 0:arguments[3])||void 0},r=n.wrapperElementType,i=r===void 0?"div":r,o=n.nodeMapper,a=o===void 0?function(d){return d}:o,s=n.methodNames,l=s===void 0?[]:s,u=n.initPropNames,c=u===void 0?[]:u;return tt.forwardRef(function(d,h){var p=tt.useRef(),g=tt.useState({}),v=qy(g,2),m=v[0],f=v[1];tt.useEffect(function(){return f(d)});var _=tt.useMemo(function(){var S=Zm(c.filter(function(M){return d.hasOwnProperty(M)}).map(function(M){return[M,d[M]]}));return t(S)},[]);Jm(function(){_(a(p.current))},tt.useLayoutEffect),Jm(function(){return _._destructor instanceof Function?_._destructor:void 0});var y=tt.useCallback(function(S){for(var M=arguments.length,E=new Array(M>1?M-1:0),A=1;A<M;A++)E[A-1]=arguments[A];return _[S]instanceof Function?_[S].apply(_,E):void 0},[_]),x=Y1(d,[].concat(Qm(l),Qm(c)));return Object.keys(x).filter(function(S){return m[S]!==d[S]}).forEach(function(S){return y(S,d[S])}),tt.useImperativeHandle(h,function(){return Zm(l.map(function(S){return[S,function(){for(var M=arguments.length,E=new Array(M),A=0;A<M;A++)E[A]=arguments[A];return y.apply(void 0,[S].concat(E))}]}))}),I0.createElement(i,{ref:p})})}function Jm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:tt.useEffect,n=tt.useRef(),r=tt.useRef(!1),i=tt.useRef(!1),o=tt.useState(0),a=qy(o,2);a[0];var s=a[1];r.current&&(i.current=!0),e(function(){return r.current||(n.current=t(),r.current=!0),s(function(l){return l+1}),function(){i.current&&n.current&&n.current()}},[])}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tp="160",pr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},uo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iw=0,eg=1,ow=2,Ky=1,aw=2,Cr=3,wi=0,fn=1,Dr=2,zr=0,Jo=1,tg=2,ng=3,rg=4,sw=5,Bi=100,lw=101,uw=102,ig=103,og=104,cw=200,fw=201,dw=202,hw=203,Dd=204,Nd=205,pw=206,mw=207,gw=208,vw=209,_w=210,yw=211,xw=212,Sw=213,Mw=214,Ew=0,ww=1,bw=2,wu=3,Tw=4,Aw=5,Cw=6,Rw=7,np=0,Pw=1,Lw=2,xi=0,Ow=1,Dw=2,Nw=3,Iw=4,Uw=5,kw=6,Zy=300,la=301,ua=302,Id=303,Ud=304,Ju=306,kd=1e3,tr=1001,Fd=1002,ln=1003,ag=1004,Gc=1005,kn=1006,Fw=1007,Cs=1008,Si=1009,zw=1010,Bw=1011,rp=1012,Qy=1013,ci=1014,fi=1015,ca=1016,Jy=1017,ex=1018,qi=1020,Hw=1021,nr=1023,Gw=1024,Vw=1025,Yi=1026,fa=1027,Ww=1028,tx=1029,jw=1030,nx=1031,rx=1033,Vc=33776,Wc=33777,jc=33778,$c=33779,sg=35840,lg=35841,ug=35842,cg=35843,ix=36196,fg=37492,dg=37496,hg=37808,pg=37809,mg=37810,gg=37811,vg=37812,_g=37813,yg=37814,xg=37815,Sg=37816,Mg=37817,Eg=37818,wg=37819,bg=37820,Tg=37821,Xc=36492,Ag=36494,Cg=36495,$w=36283,Rg=36284,Pg=36285,Lg=36286,ox=3e3,Ki=3001,Xw=3200,qw=3201,ax=0,Yw=1,zn="",Ht="srgb",jr="srgb-linear",ip="display-p3",ec="display-p3-linear",bu="linear",dt="srgb",Tu="rec709",Au="p3",co=7680,Og=519,Kw=512,Zw=513,Qw=514,sx=515,Jw=516,eb=517,tb=518,nb=519,Dg=35044,Ng="300 es",zd=1035,Ur=2e3,Cu=2001;class cr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let o=0,a=i.length;o<a;o++)i[o].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ig=1234567;const as=Math.PI/180,Rs=180/Math.PI;function va(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[r&255]+Jt[r>>8&255]+Jt[r>>16&255]+Jt[r>>24&255]).toLowerCase()}function Gt(t,e,n){return Math.max(e,Math.min(n,t))}function op(t,e){return(t%e+e)%e}function rb(t,e,n,r,i){return r+(t-e)*(i-r)/(n-e)}function ib(t,e,n){return t!==e?(n-t)/(e-t):0}function ss(t,e,n){return(1-n)*t+n*e}function ob(t,e,n,r){return ss(t,e,1-Math.exp(-n*r))}function ab(t,e=1){return e-Math.abs(op(t,e*2)-e)}function sb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function lb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function ub(t,e){return t+Math.floor(Math.random()*(e-t+1))}function cb(t,e){return t+Math.random()*(e-t)}function fb(t){return t*(.5-Math.random())}function db(t){t!==void 0&&(Ig=t);let e=Ig+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hb(t){return t*as}function pb(t){return t*Rs}function Bd(t){return(t&t-1)===0&&t!==0}function mb(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Ru(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function gb(t,e,n,r,i){const o=Math.cos,a=Math.sin,s=o(n/2),l=a(n/2),u=o((e+r)/2),c=a((e+r)/2),d=o((e-r)/2),h=a((e-r)/2),p=o((r-e)/2),g=a((r-e)/2);switch(i){case"XYX":t.set(s*c,l*d,l*h,s*u);break;case"YZY":t.set(l*h,s*c,l*d,s*u);break;case"ZXZ":t.set(l*d,l*h,s*c,s*u);break;case"XZX":t.set(s*c,l*g,l*p,s*u);break;case"YXY":t.set(l*p,s*c,l*g,s*u);break;case"ZYZ":t.set(l*g,l*p,s*c,s*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ro(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Hd={DEG2RAD:as,RAD2DEG:Rs,generateUUID:va,clamp:Gt,euclideanModulo:op,mapLinear:rb,inverseLerp:ib,lerp:ss,damp:ob,pingpong:ab,smoothstep:sb,smootherstep:lb,randInt:ub,randFloat:cb,randFloatSpread:fb,seededRandom:db,degToRad:hb,radToDeg:pb,isPowerOfTwo:Bd,ceilPowerOfTwo:mb,floorPowerOfTwo:Ru,setQuaternionFromProperEuler:gb,normalize:on,denormalize:Ro};class me{constructor(e=0,n=0){me.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,i=e.elements;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),i=Math.sin(n),o=this.x-e.x,a=this.y-e.y;return this.x=o*r-a*i+e.x,this.y=o*i+a*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,n,r,i,o,a,s,l,u){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,i,o,a,s,l,u)}set(e,n,r,i,o,a,s,l,u){const c=this.elements;return c[0]=e,c[1]=i,c[2]=s,c[3]=n,c[4]=o,c[5]=l,c[6]=r,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,o=this.elements,a=r[0],s=r[3],l=r[6],u=r[1],c=r[4],d=r[7],h=r[2],p=r[5],g=r[8],v=i[0],m=i[3],f=i[6],_=i[1],y=i[4],x=i[7],S=i[2],M=i[5],E=i[8];return o[0]=a*v+s*_+l*S,o[3]=a*m+s*y+l*M,o[6]=a*f+s*x+l*E,o[1]=u*v+c*_+d*S,o[4]=u*m+c*y+d*M,o[7]=u*f+c*x+d*E,o[2]=h*v+p*_+g*S,o[5]=h*m+p*y+g*M,o[8]=h*f+p*x+g*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8];return n*a*c-n*s*u-r*o*c+r*s*l+i*o*u-i*a*l}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8],d=c*a-s*u,h=s*l-c*o,p=u*o-a*l,g=n*d+r*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(i*u-c*r)*v,e[2]=(s*r-i*a)*v,e[3]=h*v,e[4]=(c*n-i*l)*v,e[5]=(i*o-s*n)*v,e[6]=p*v,e[7]=(r*l-u*n)*v,e[8]=(a*n-r*o)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,i,o,a,s){const l=Math.cos(o),u=Math.sin(o);return this.set(r*l,r*u,-r*(l*a+u*s)+a+e,-i*u,i*l,-i*(-u*a+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(qc.makeScale(e,n)),this}rotate(e){return this.premultiply(qc.makeRotation(-e)),this}translate(e,n){return this.premultiply(qc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<9;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qc=new qe;function lx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ps(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function vb(){const t=Ps("canvas");return t.style.display="block",t}const Ug={};function ls(t){t in Ug||(Ug[t]=!0,console.warn(t))}const kg=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fg=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ll={[jr]:{transfer:bu,primaries:Tu,toReference:t=>t,fromReference:t=>t},[Ht]:{transfer:dt,primaries:Tu,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ec]:{transfer:bu,primaries:Au,toReference:t=>t.applyMatrix3(Fg),fromReference:t=>t.applyMatrix3(kg)},[ip]:{transfer:dt,primaries:Au,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Fg),fromReference:t=>t.applyMatrix3(kg).convertLinearToSRGB()}},_b=new Set([jr,ec]),st={enabled:!0,_workingColorSpace:jr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!_b.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const r=ll[e].toReference,i=ll[n].fromReference;return i(r(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ll[t].primaries},getTransfer:function(t){return t===zn?bu:ll[t].transfer}};function ea(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Yc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let fo;class ux{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fo===void 0&&(fo=Ps("canvas")),fo.width=e.width,fo.height=e.height;const r=fo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=fo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ps("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),o=i.data;for(let a=0;a<o.length;a++)o[a]=ea(o[a]/255)*255;return r.putImageData(i,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(ea(n[r]/255)*255):n[r]=ea(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yb=0;class cx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yb++}),this.uuid=va(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?o.push(Kc(i[a].image)):o.push(Kc(i[a]))}else o=Kc(i);r.url=o}return n||(e.images[this.uuid]=r),r}}function Kc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ux.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xb=0;class xn extends cr{constructor(e=xn.DEFAULT_IMAGE,n=xn.DEFAULT_MAPPING,r=tr,i=tr,o=kn,a=Cs,s=nr,l=Si,u=xn.DEFAULT_ANISOTROPY,c=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=va(),this.name="",this.source=new cx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Ki?Ht:zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kd:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kd:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ht?Ki:ox}set encoding(e){ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ki?Ht:zn}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Zy;xn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,n=0,r=0,i=1){Vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,i){return this.x=e,this.y=n,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,o=this.w,a=e.elements;return this.x=a[0]*n+a[4]*r+a[8]*i+a[12]*o,this.y=a[1]*n+a[5]*r+a[9]*i+a[13]*o,this.z=a[2]*n+a[6]*r+a[10]*i+a[14]*o,this.w=a[3]*n+a[7]*r+a[11]*i+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,i,o;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,x=(p+1)/2,S=(f+1)/2,M=(c+h)/4,E=(d+v)/4,A=(g+m)/4;return y>x&&y>S?y<.01?(r=0,i=.707106781,o=.707106781):(r=Math.sqrt(y),i=M/r,o=E/r):x>S?x<.01?(r=.707106781,i=0,o=.707106781):(i=Math.sqrt(x),r=M/i,o=A/i):S<.01?(r=.707106781,i=.707106781,o=0):(o=Math.sqrt(S),r=E/o,i=A/o),this.set(r,i,o,n),this}let _=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-v)/_,this.z=(h-c)/_,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sb extends cr{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Vt(0,0,e,n),this.scissorTest=!1,this.viewport=new Vt(0,0,e,n);const i={width:e,height:n,depth:1};r.encoding!==void 0&&(ls("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Ki?Ht:zn),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new xn(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,n,r=1){(this.width!==e||this.height!==n||this.depth!==r)&&(this.width=e,this.height=n,this.depth=r,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new cx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends Sb{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class fx extends xn{constructor(e=null,n=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mb extends xn{constructor(e=null,n=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ur{constructor(e=0,n=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=i}static slerpFlat(e,n,r,i,o,a,s){let l=r[i+0],u=r[i+1],c=r[i+2],d=r[i+3];const h=o[a+0],p=o[a+1],g=o[a+2],v=o[a+3];if(s===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(s===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(d!==v||l!==h||u!==p||c!==g){let m=1-s;const f=l*h+u*p+c*g+d*v,_=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const S=Math.sqrt(y),M=Math.atan2(S,f*_);m=Math.sin(m*M)/S,s=Math.sin(s*M)/S}const x=s*_;if(l=l*m+h*x,u=u*m+p*x,c=c*m+g*x,d=d*m+v*x,m===1-s){const S=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=S,u*=S,c*=S,d*=S}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,r,i,o,a){const s=r[i],l=r[i+1],u=r[i+2],c=r[i+3],d=o[a],h=o[a+1],p=o[a+2],g=o[a+3];return e[n]=s*g+c*d+l*p-u*h,e[n+1]=l*g+c*h+u*d-s*p,e[n+2]=u*g+c*p+s*h-l*d,e[n+3]=c*g-s*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,i){return this._x=e,this._y=n,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,i=e._y,o=e._z,a=e._order,s=Math.cos,l=Math.sin,u=s(r/2),c=s(i/2),d=s(o/2),h=l(r/2),p=l(i/2),g=l(o/2);switch(a){case"XYZ":this._x=h*c*d+u*p*g,this._y=u*p*d-h*c*g,this._z=u*c*g+h*p*d,this._w=u*c*d-h*p*g;break;case"YXZ":this._x=h*c*d+u*p*g,this._y=u*p*d-h*c*g,this._z=u*c*g-h*p*d,this._w=u*c*d+h*p*g;break;case"ZXY":this._x=h*c*d-u*p*g,this._y=u*p*d+h*c*g,this._z=u*c*g+h*p*d,this._w=u*c*d-h*p*g;break;case"ZYX":this._x=h*c*d-u*p*g,this._y=u*p*d+h*c*g,this._z=u*c*g-h*p*d,this._w=u*c*d+h*p*g;break;case"YZX":this._x=h*c*d+u*p*g,this._y=u*p*d+h*c*g,this._z=u*c*g-h*p*d,this._w=u*c*d-h*p*g;break;case"XZY":this._x=h*c*d-u*p*g,this._y=u*p*d-h*c*g,this._z=u*c*g+h*p*d,this._w=u*c*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],i=n[4],o=n[8],a=n[1],s=n[5],l=n[9],u=n[2],c=n[6],d=n[10],h=r+s+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(o-u)*p,this._z=(a-i)*p}else if(r>s&&r>d){const p=2*Math.sqrt(1+r-s-d);this._w=(c-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(o+u)/p}else if(s>d){const p=2*Math.sqrt(1+s-r-d);this._w=(o-u)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-r-s);this._w=(a-i)/p,this._x=(o+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,n/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,i=e._y,o=e._z,a=e._w,s=n._x,l=n._y,u=n._z,c=n._w;return this._x=r*c+a*s+i*u-o*l,this._y=i*c+a*l+o*s-r*u,this._z=o*c+a*u+r*l-i*s,this._w=a*c-r*s-i*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,i=this._y,o=this._z,a=this._w;let s=a*e._w+r*e._x+i*e._y+o*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=r,this._y=i,this._z=o,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*r+n*this._x,this._y=p*i+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,s),d=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=a*d+this._w*h,this._x=r*d+this._x*h,this._y=i*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=Math.random(),n=Math.sqrt(1-e),r=Math.sqrt(e),i=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(i),r*Math.sin(o),r*Math.cos(o),n*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,r=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6]*i,this.y=o[1]*n+o[4]*r+o[7]*i,this.z=o[2]*n+o[5]*r+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,o=e.elements,a=1/(o[3]*n+o[7]*r+o[11]*i+o[15]);return this.x=(o[0]*n+o[4]*r+o[8]*i+o[12])*a,this.y=(o[1]*n+o[5]*r+o[9]*i+o[13])*a,this.z=(o[2]*n+o[6]*r+o[10]*i+o[14])*a,this}applyQuaternion(e){const n=this.x,r=this.y,i=this.z,o=e.x,a=e.y,s=e.z,l=e.w,u=2*(a*i-s*r),c=2*(s*n-o*i),d=2*(o*r-a*n);return this.x=n+l*u+a*d-s*c,this.y=r+l*c+s*u-o*d,this.z=i+l*d+o*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,i=this.z,o=e.elements;return this.x=o[0]*n+o[4]*r+o[8]*i,this.y=o[1]*n+o[5]*r+o[9]*i,this.z=o[2]*n+o[6]*r+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,i=e.y,o=e.z,a=n.x,s=n.y,l=n.z;return this.x=i*l-o*s,this.y=o*a-r*l,this.z=r*s-i*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Zc.copy(this).projectOnVector(e),this.sub(Zc)}reflect(e){return this.sub(Zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return n*n+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const i=Math.sin(n)*e;return this.x=i*Math.sin(r),this.y=Math.cos(n)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(n),this.y=r*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zc=new I,zg=new ur;class so{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint($n.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint($n.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=$n.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const o=r.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=o.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(o,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ul.copy(r.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const i=e.children;for(let o=0,a=i.length;o<a;o++)this.expandByObject(i[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),cl.subVectors(this.max,Oa),ho.subVectors(e.a,Oa),po.subVectors(e.b,Oa),mo.subVectors(e.c,Oa),Zr.subVectors(po,ho),Qr.subVectors(mo,po),Di.subVectors(ho,mo);let n=[0,-Zr.z,Zr.y,0,-Qr.z,Qr.y,0,-Di.z,Di.y,Zr.z,0,-Zr.x,Qr.z,0,-Qr.x,Di.z,0,-Di.x,-Zr.y,Zr.x,0,-Qr.y,Qr.x,0,-Di.y,Di.x,0];return!Qc(n,ho,po,mo,cl)||(n=[1,0,0,0,1,0,0,0,1],!Qc(n,ho,po,mo,cl))?!1:(fl.crossVectors(Zr,Qr),n=[fl.x,fl.y,fl.z],Qc(n,ho,po,mo,cl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sr=[new I,new I,new I,new I,new I,new I,new I,new I],$n=new I,ul=new so,ho=new I,po=new I,mo=new I,Zr=new I,Qr=new I,Di=new I,Oa=new I,cl=new I,fl=new I,Ni=new I;function Qc(t,e,n,r,i){for(let o=0,a=t.length-3;o<=a;o+=3){Ni.fromArray(t,o);const s=i.x*Math.abs(Ni.x)+i.y*Math.abs(Ni.y)+i.z*Math.abs(Ni.z),l=e.dot(Ni),u=n.dot(Ni),c=r.dot(Ni);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>s)return!1}return!0}const Eb=new so,Da=new I,Jc=new I;class tc{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Eb.setFromPoints(e).getCenter(r);let i=0;for(let o=0,a=e.length;o<a;o++)i=Math.max(i,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Da.subVectors(e,this.center);const n=Da.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),i=(r-this.radius)*.5;this.center.addScaledVector(Da,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Da.copy(e.center).add(Jc)),this.expandByPoint(Da.copy(e.center).sub(Jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mr=new I,ef=new I,dl=new I,Jr=new I,tf=new I,hl=new I,nf=new I;class nc{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mr.copy(this.origin).addScaledVector(this.direction,n),Mr.distanceToSquared(e))}distanceSqToSegment(e,n,r,i){ef.copy(e).add(n).multiplyScalar(.5),dl.copy(n).sub(e).normalize(),Jr.copy(this.origin).sub(ef);const o=e.distanceTo(n)*.5,a=-this.direction.dot(dl),s=Jr.dot(this.direction),l=-Jr.dot(dl),u=Jr.lengthSq(),c=Math.abs(1-a*a);let d,h,p,g;if(c>0)if(d=a*l-s,h=a*s-l,g=o*c,d>=0)if(h>=-g)if(h<=g){const v=1/c;d*=v,h*=v,p=d*(d+a*h+2*s)+h*(a*d+h+2*l)+u}else h=o,d=Math.max(0,-(a*h+s)),p=-d*d+h*(h+2*l)+u;else h=-o,d=Math.max(0,-(a*h+s)),p=-d*d+h*(h+2*l)+u;else h<=-g?(d=Math.max(0,-(-a*o+s)),h=d>0?-o:Math.min(Math.max(-o,-l),o),p=-d*d+h*(h+2*l)+u):h<=g?(d=0,h=Math.min(Math.max(-o,-l),o),p=h*(h+2*l)+u):(d=Math.max(0,-(a*o+s)),h=d>0?o:Math.min(Math.max(-o,-l),o),p=-d*d+h*(h+2*l)+u);else h=a>0?-o:o,d=Math.max(0,-(a*h+s)),p=-d*d+h*(h+2*l)+u;return r&&r.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ef).addScaledVector(dl,h),p}intersectSphere(e,n){Mr.subVectors(e.center,this.origin);const r=Mr.dot(this.direction),i=Mr.dot(Mr)-r*r,o=e.radius*e.radius;if(i>o)return null;const a=Math.sqrt(o-i),s=r-a,l=r+a;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,i,o,a,s,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(r=(e.min.x-h.x)*u,i=(e.max.x-h.x)*u):(r=(e.max.x-h.x)*u,i=(e.min.x-h.x)*u),c>=0?(o=(e.min.y-h.y)*c,a=(e.max.y-h.y)*c):(o=(e.max.y-h.y)*c,a=(e.min.y-h.y)*c),r>a||o>i||((o>r||isNaN(r))&&(r=o),(a<i||isNaN(i))&&(i=a),d>=0?(s=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(s=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),r>l||s>i)||((s>r||r!==r)&&(r=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,n)}intersectsBox(e){return this.intersectBox(e,Mr)!==null}intersectTriangle(e,n,r,i,o){tf.subVectors(n,e),hl.subVectors(r,e),nf.crossVectors(tf,hl);let a=this.direction.dot(nf),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Jr.subVectors(this.origin,e);const l=s*this.direction.dot(hl.crossVectors(Jr,hl));if(l<0)return null;const u=s*this.direction.dot(tf.cross(Jr));if(u<0||l+u>a)return null;const c=-s*Jr.dot(nf);return c<0?null:this.at(c/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,n,r,i,o,a,s,l,u,c,d,h,p,g,v,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,i,o,a,s,l,u,c,d,h,p,g,v,m)}set(e,n,r,i,o,a,s,l,u,c,d,h,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=r,f[12]=i,f[1]=o,f[5]=a,f[9]=s,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,i=1/go.setFromMatrixColumn(e,0).length(),o=1/go.setFromMatrixColumn(e,1).length(),a=1/go.setFromMatrixColumn(e,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=0,n[8]=r[8]*a,n[9]=r[9]*a,n[10]=r[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,i=e.y,o=e.z,a=Math.cos(r),s=Math.sin(r),l=Math.cos(i),u=Math.sin(i),c=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=a*c,p=a*d,g=s*c,v=s*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=p+g*u,n[5]=h-v*u,n[9]=-s*l,n[2]=v-h*u,n[6]=g+p*u,n[10]=a*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,g=u*c,v=u*d;n[0]=h+v*s,n[4]=g*s-p,n[8]=a*u,n[1]=a*d,n[5]=a*c,n[9]=-s,n[2]=p*s-g,n[6]=v+h*s,n[10]=a*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,g=u*c,v=u*d;n[0]=h-v*s,n[4]=-a*d,n[8]=g+p*s,n[1]=p+g*s,n[5]=a*c,n[9]=v-h*s,n[2]=-a*u,n[6]=s,n[10]=a*l}else if(e.order==="ZYX"){const h=a*c,p=a*d,g=s*c,v=s*d;n[0]=l*c,n[4]=g*u-p,n[8]=h*u+v,n[1]=l*d,n[5]=v*u+h,n[9]=p*u-g,n[2]=-u,n[6]=s*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*u,g=s*l,v=s*u;n[0]=l*c,n[4]=v-h*d,n[8]=g*d+p,n[1]=d,n[5]=a*c,n[9]=-s*c,n[2]=-u*c,n[6]=p*d+g,n[10]=h-v*d}else if(e.order==="XZY"){const h=a*l,p=a*u,g=s*l,v=s*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=h*d+v,n[5]=a*c,n[9]=p*d-g,n[2]=g*d-p,n[6]=s*c,n[10]=v*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wb,e,bb)}lookAt(e,n,r){const i=this.elements;return En.subVectors(e,n),En.lengthSq()===0&&(En.z=1),En.normalize(),ei.crossVectors(r,En),ei.lengthSq()===0&&(Math.abs(r.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),ei.crossVectors(r,En)),ei.normalize(),pl.crossVectors(En,ei),i[0]=ei.x,i[4]=pl.x,i[8]=En.x,i[1]=ei.y,i[5]=pl.y,i[9]=En.y,i[2]=ei.z,i[6]=pl.z,i[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,o=this.elements,a=r[0],s=r[4],l=r[8],u=r[12],c=r[1],d=r[5],h=r[9],p=r[13],g=r[2],v=r[6],m=r[10],f=r[14],_=r[3],y=r[7],x=r[11],S=r[15],M=i[0],E=i[4],A=i[8],w=i[12],b=i[1],B=i[5],k=i[9],te=i[13],R=i[2],L=i[6],D=i[10],J=i[14],z=i[3],W=i[7],N=i[11],V=i[15];return o[0]=a*M+s*b+l*R+u*z,o[4]=a*E+s*B+l*L+u*W,o[8]=a*A+s*k+l*D+u*N,o[12]=a*w+s*te+l*J+u*V,o[1]=c*M+d*b+h*R+p*z,o[5]=c*E+d*B+h*L+p*W,o[9]=c*A+d*k+h*D+p*N,o[13]=c*w+d*te+h*J+p*V,o[2]=g*M+v*b+m*R+f*z,o[6]=g*E+v*B+m*L+f*W,o[10]=g*A+v*k+m*D+f*N,o[14]=g*w+v*te+m*J+f*V,o[3]=_*M+y*b+x*R+S*z,o[7]=_*E+y*B+x*L+S*W,o[11]=_*A+y*k+x*D+S*N,o[15]=_*w+y*te+x*J+S*V,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],i=e[8],o=e[12],a=e[1],s=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+o*l*d-i*u*d-o*s*h+r*u*h+i*s*p-r*l*p)+v*(+n*l*p-n*u*h+o*a*h-i*a*p+i*u*c-o*l*c)+m*(+n*u*d-n*s*p-o*a*d+r*a*p+o*s*c-r*u*c)+f*(-i*s*c-n*l*d+n*s*h+i*a*d-r*a*h+r*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],_=d*m*u-v*h*u+v*l*p-s*m*p-d*l*f+s*h*f,y=g*h*u-c*m*u-g*l*p+a*m*p+c*l*f-a*h*f,x=c*v*u-g*d*u+g*s*p-a*v*p-c*s*f+a*d*f,S=g*d*l-c*v*l-g*s*h+a*v*h+c*s*m-a*d*m,M=n*_+r*y+i*x+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=_*E,e[1]=(v*h*o-d*m*o-v*i*p+r*m*p+d*i*f-r*h*f)*E,e[2]=(s*m*o-v*l*o+v*i*u-r*m*u-s*i*f+r*l*f)*E,e[3]=(d*l*o-s*h*o-d*i*u+r*h*u+s*i*p-r*l*p)*E,e[4]=y*E,e[5]=(c*m*o-g*h*o+g*i*p-n*m*p-c*i*f+n*h*f)*E,e[6]=(g*l*o-a*m*o-g*i*u+n*m*u+a*i*f-n*l*f)*E,e[7]=(a*h*o-c*l*o+c*i*u-n*h*u-a*i*p+n*l*p)*E,e[8]=x*E,e[9]=(g*d*o-c*v*o-g*r*p+n*v*p+c*r*f-n*d*f)*E,e[10]=(a*v*o-g*s*o+g*r*u-n*v*u-a*r*f+n*s*f)*E,e[11]=(c*s*o-a*d*o-c*r*u+n*d*u+a*r*p-n*s*p)*E,e[12]=S*E,e[13]=(c*v*i-g*d*i+g*r*h-n*v*h-c*r*m+n*d*m)*E,e[14]=(g*s*i-a*v*i-g*r*l+n*v*l+a*r*m-n*s*m)*E,e[15]=(a*d*i-c*s*i+c*r*l-n*d*l-a*r*h+n*s*h)*E,this}scale(e){const n=this.elements,r=e.x,i=e.y,o=e.z;return n[0]*=r,n[4]*=i,n[8]*=o,n[1]*=r,n[5]*=i,n[9]*=o,n[2]*=r,n[6]*=i,n[10]*=o,n[3]*=r,n[7]*=i,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,i))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),i=Math.sin(n),o=1-r,a=e.x,s=e.y,l=e.z,u=o*a,c=o*s;return this.set(u*a+r,u*s-i*l,u*l+i*s,0,u*s+i*l,c*s+r,c*l-i*a,0,u*l-i*s,c*l+i*a,o*l*l+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,i,o,a){return this.set(1,r,o,0,e,1,a,0,n,i,1,0,0,0,0,1),this}compose(e,n,r){const i=this.elements,o=n._x,a=n._y,s=n._z,l=n._w,u=o+o,c=a+a,d=s+s,h=o*u,p=o*c,g=o*d,v=a*c,m=a*d,f=s*d,_=l*u,y=l*c,x=l*d,S=r.x,M=r.y,E=r.z;return i[0]=(1-(v+f))*S,i[1]=(p+x)*S,i[2]=(g-y)*S,i[3]=0,i[4]=(p-x)*M,i[5]=(1-(h+f))*M,i[6]=(m+_)*M,i[7]=0,i[8]=(g+y)*E,i[9]=(m-_)*E,i[10]=(1-(h+v))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,r){const i=this.elements;let o=go.set(i[0],i[1],i[2]).length();const a=go.set(i[4],i[5],i[6]).length(),s=go.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],Xn.copy(this);const u=1/o,c=1/a,d=1/s;return Xn.elements[0]*=u,Xn.elements[1]*=u,Xn.elements[2]*=u,Xn.elements[4]*=c,Xn.elements[5]*=c,Xn.elements[6]*=c,Xn.elements[8]*=d,Xn.elements[9]*=d,Xn.elements[10]*=d,n.setFromRotationMatrix(Xn),r.x=o,r.y=a,r.z=s,this}makePerspective(e,n,r,i,o,a,s=Ur){const l=this.elements,u=2*o/(n-e),c=2*o/(r-i),d=(n+e)/(n-e),h=(r+i)/(r-i);let p,g;if(s===Ur)p=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(s===Cu)p=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,r,i,o,a,s=Ur){const l=this.elements,u=1/(n-e),c=1/(r-i),d=1/(a-o),h=(n+e)*u,p=(r+i)*c;let g,v;if(s===Ur)g=(a+o)*d,v=-2*d;else if(s===Cu)g=o*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<16;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const go=new I,Xn=new St,wb=new I(0,0,0),bb=new I(1,1,1),ei=new I,pl=new I,En=new I,Bg=new St,Hg=new ur;class rc{constructor(e=0,n=0,r=0,i=rc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,i=this._order){return this._x=e,this._y=n,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const i=e.elements,o=i[0],a=i[4],s=i[8],l=i[1],u=i[5],c=i[9],d=i[2],h=i[6],p=i[10];switch(n){case"XYZ":this._y=Math.asin(Gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Bg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bg,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Hg.setFromEuler(this),this.setFromQuaternion(Hg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rc.DEFAULT_ORDER="XYZ";class ap{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tb=0;const Gg=new I,vo=new ur,Er=new St,ml=new I,Na=new I,Ab=new I,Cb=new ur,Vg=new I(1,0,0),Wg=new I(0,1,0),jg=new I(0,0,1),Rb={type:"added"},Pb={type:"removed"};class qt extends cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new I,n=new rc,r=new ur,i=new I(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new St},normalMatrix:{value:new qe}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ap,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vo.setFromAxisAngle(e,n),this.quaternion.multiply(vo),this}rotateOnWorldAxis(e,n){return vo.setFromAxisAngle(e,n),this.quaternion.premultiply(vo),this}rotateX(e){return this.rotateOnAxis(Vg,e)}rotateY(e){return this.rotateOnAxis(Wg,e)}rotateZ(e){return this.rotateOnAxis(jg,e)}translateOnAxis(e,n){return Gg.copy(e).applyQuaternion(this.quaternion),this.position.add(Gg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Vg,e)}translateY(e){return this.translateOnAxis(Wg,e)}translateZ(e){return this.translateOnAxis(jg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Er.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ml.copy(e):ml.set(e,n,r);const i=this.parent;this.updateWorldMatrix(!0,!1),Na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Er.lookAt(Na,ml,this.up):Er.lookAt(ml,Na,this.up),this.quaternion.setFromRotationMatrix(Er),i&&(Er.extractRotation(i.matrixWorld),vo.setFromRotationMatrix(Er),this.quaternion.premultiply(vo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Rb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Pb)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Er.multiply(e.parent.matrixWorld)),e.applyMatrix4(Er),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,i=this.children.length;r<i;r++){const a=this.children[r].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,e,Ab),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,Cb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,i=n.length;r<i;r++){const o=n[r];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const i=this.children;for(let o=0,a=i.length;o<a;o++){const s=i[o];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(o(e.materials,this.material[l]));i.material=s}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(o(e.animations,l))}}if(n){const s=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);s.length>0&&(r.geometries=s),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),c.length>0&&(r.images=c),d.length>0&&(r.shapes=d),h.length>0&&(r.skeletons=h),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=i,r;function a(s){const l=[];for(const u in s){const c=s[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}qt.DEFAULT_UP=new I(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new I,wr=new I,rf=new I,br=new I,_o=new I,yo=new I,$g=new I,of=new I,af=new I,sf=new I;let gl=!1;class er{constructor(e=new I,n=new I,r=new I){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,i){i.subVectors(r,n),qn.subVectors(e,n),i.cross(qn);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,n,r,i,o){qn.subVectors(i,n),wr.subVectors(r,n),rf.subVectors(e,n);const a=qn.dot(qn),s=qn.dot(wr),l=qn.dot(rf),u=wr.dot(wr),c=wr.dot(rf),d=a*u-s*s;if(d===0)return o.set(0,0,0),null;const h=1/d,p=(u*l-s*c)*h,g=(a*c-s*l)*h;return o.set(1-p-g,g,p)}static containsPoint(e,n,r,i){return this.getBarycoord(e,n,r,i,br)===null?!1:br.x>=0&&br.y>=0&&br.x+br.y<=1}static getUV(e,n,r,i,o,a,s,l){return gl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gl=!0),this.getInterpolation(e,n,r,i,o,a,s,l)}static getInterpolation(e,n,r,i,o,a,s,l){return this.getBarycoord(e,n,r,i,br)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,br.x),l.addScaledVector(a,br.y),l.addScaledVector(s,br.z),l)}static isFrontFacing(e,n,r,i){return qn.subVectors(r,n),wr.subVectors(e,n),qn.cross(wr).dot(i)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,i){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,r,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),wr.subVectors(this.a,this.b),qn.cross(wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return er.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return er.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,r,i,o){return gl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gl=!0),er.getInterpolation(e,this.a,this.b,this.c,n,r,i,o)}getInterpolation(e,n,r,i,o){return er.getInterpolation(e,this.a,this.b,this.c,n,r,i,o)}containsPoint(e){return er.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return er.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,i=this.b,o=this.c;let a,s;_o.subVectors(i,r),yo.subVectors(o,r),of.subVectors(e,r);const l=_o.dot(of),u=yo.dot(of);if(l<=0&&u<=0)return n.copy(r);af.subVectors(e,i);const c=_o.dot(af),d=yo.dot(af);if(c>=0&&d<=c)return n.copy(i);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return a=l/(l-c),n.copy(r).addScaledVector(_o,a);sf.subVectors(e,o);const p=_o.dot(sf),g=yo.dot(sf);if(g>=0&&p<=g)return n.copy(o);const v=p*u-l*g;if(v<=0&&u>=0&&g<=0)return s=u/(u-g),n.copy(r).addScaledVector(yo,s);const m=c*g-p*d;if(m<=0&&d-c>=0&&p-g>=0)return $g.subVectors(o,i),s=(d-c)/(d-c+(p-g)),n.copy(i).addScaledVector($g,s);const f=1/(m+v+h);return a=v*f,s=h*f,n.copy(r).addScaledVector(_o,a).addScaledVector(yo,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},vl={h:0,s:0,l:0};function lf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,r,i=st.workingColorSpace){return this.r=e,this.g=n,this.b=r,st.toWorkingColorSpace(this,i),this}setHSL(e,n,r,i=st.workingColorSpace){if(e=op(e,1),n=Gt(n,0,1),r=Gt(r,0,1),n===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+n):r+n-r*n,a=2*r-o;this.r=lf(a,o,e+1/3),this.g=lf(a,o,e),this.b=lf(a,o,e-1/3)}return st.toWorkingColorSpace(this,i),this}setStyle(e,n=Ht){function r(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=i[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ht){const r=dx[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}copyLinearToSRGB(e){return this.r=Yc(e.r),this.g=Yc(e.g),this.b=Yc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return st.fromWorkingColorSpace(en.copy(this),e),Math.round(Gt(en.r*255,0,255))*65536+Math.round(Gt(en.g*255,0,255))*256+Math.round(Gt(en.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(en.copy(this),n);const r=en.r,i=en.g,o=en.b,a=Math.max(r,i,o),s=Math.min(r,i,o);let l,u;const c=(s+a)/2;if(s===a)l=0,u=0;else{const d=a-s;switch(u=c<=.5?d/(a+s):d/(2-a-s),a){case r:l=(i-o)/d+(i<o?6:0);break;case i:l=(o-r)/d+2;break;case o:l=(r-i)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Ht){st.fromWorkingColorSpace(en.copy(this),e);const n=en.r,r=en.g,i=en.b;return e!==Ht?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,n,r){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+n,ti.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(ti),e.getHSL(vl);const r=ss(ti.h,vl.h,n),i=ss(ti.s,vl.s,n),o=ss(ti.l,vl.l,n);return this.setHSL(r,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,i=this.b,o=e.elements;return this.r=o[0]*n+o[3]*r+o[6]*i,this.g=o[1]*n+o[4]*r+o[7]*i,this.b=o[2]*n+o[5]*r+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new et;et.NAMES=dx;let Lb=0;class _a extends cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=va(),this.name="",this.type="Material",this.blending=Jo,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dd,this.blendDst=Nd,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=wu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Og,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Jo&&(r.blending=this.blending),this.side!==wi&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Dd&&(r.blendSrc=this.blendSrc),this.blendDst!==Nd&&(r.blendDst=this.blendDst),this.blendEquation!==Bi&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==wu&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Og&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==co&&(r.stencilFail=this.stencilFail),this.stencilZFail!==co&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==co&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(o){const a=[];for(const s in o){const l=o[s];delete l.metadata,a.push(l)}return a}if(n){const o=i(e.textures),a=i(e.images);o.length>0&&(r.textures=o),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const i=n.length;r=new Array(i);for(let o=0;o!==i;++o)r[o]=n[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class sp extends _a{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=np,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new I,_l=new me;class sr{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Dg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=n.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)_l.fromBufferAttribute(this,n),_l.applyMatrix3(e),this.setXY(n,_l.x,_l.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ro(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=on(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ro(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ro(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ro(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ro(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),r=on(r,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,n,r,i,o){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),r=on(r,this.array),i=on(i,this.array),o=on(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dg&&(e.usage=this.usage),e}}class hx extends sr{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class px extends sr{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class It extends sr{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Ob=0;const Nn=new St,uf=new qt,xo=new I,wn=new so,Ia=new so,zt=new I;class On extends cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=va(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lx(e)?px:hx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new qe().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,r){return Nn.makeTranslation(e,n,r),this.applyMatrix4(Nn),this}scale(e,n,r){return Nn.makeScale(e,n,r),this.applyMatrix4(Nn),this}lookAt(e){return uf.lookAt(e),uf.updateMatrix(),this.applyMatrix4(uf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xo).negate(),this.translate(xo.x,xo.y,xo.z),this}setFromPoints(e){const n=[];for(let r=0,i=e.length;r<i;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new It(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new so);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,i=n.length;r<i;r++){const o=n[r];wn.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const r=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let o=0,a=n.length;o<a;o++){const s=n[o];Ia.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(wn.min,Ia.min),wn.expandByPoint(zt),zt.addVectors(wn.max,Ia.max),wn.expandByPoint(zt)):(wn.expandByPoint(Ia.min),wn.expandByPoint(Ia.max))}wn.getCenter(r);let i=0;for(let o=0,a=e.count;o<a;o++)zt.fromBufferAttribute(e,o),i=Math.max(i,r.distanceToSquared(zt));if(n)for(let o=0,a=n.length;o<a;o++){const s=n[o],l=this.morphTargetsRelative;for(let u=0,c=s.count;u<c;u++)zt.fromBufferAttribute(s,u),l&&(xo.fromBufferAttribute(e,u),zt.add(xo)),i=Math.max(i,r.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,i=n.position.array,o=n.normal.array,a=n.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sr(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let b=0;b<s;b++)u[b]=new I,c[b]=new I;const d=new I,h=new I,p=new I,g=new me,v=new me,m=new me,f=new I,_=new I;function y(b,B,k){d.fromArray(i,b*3),h.fromArray(i,B*3),p.fromArray(i,k*3),g.fromArray(a,b*2),v.fromArray(a,B*2),m.fromArray(a,k*2),h.sub(d),p.sub(d),v.sub(g),m.sub(g);const te=1/(v.x*m.y-m.x*v.y);isFinite(te)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(te),_.copy(p).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(te),u[b].add(f),u[B].add(f),u[k].add(f),c[b].add(_),c[B].add(_),c[k].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:r.length}]);for(let b=0,B=x.length;b<B;++b){const k=x[b],te=k.start,R=k.count;for(let L=te,D=te+R;L<D;L+=3)y(r[L+0],r[L+1],r[L+2])}const S=new I,M=new I,E=new I,A=new I;function w(b){E.fromArray(o,b*3),A.copy(E);const B=u[b];S.copy(B),S.sub(E.multiplyScalar(E.dot(B))).normalize(),M.crossVectors(A,B);const te=M.dot(c[b])<0?-1:1;l[b*4]=S.x,l[b*4+1]=S.y,l[b*4+2]=S.z,l[b*4+3]=te}for(let b=0,B=x.length;b<B;++b){const k=x[b],te=k.start,R=k.count;for(let L=te,D=te+R;L<D;L+=3)w(r[L+0]),w(r[L+1]),w(r[L+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new sr(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let h=0,p=r.count;h<p;h++)r.setXYZ(h,0,0,0);const i=new I,o=new I,a=new I,s=new I,l=new I,u=new I,c=new I,d=new I;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(n,g),o.fromBufferAttribute(n,v),a.fromBufferAttribute(n,m),c.subVectors(a,o),d.subVectors(i,o),c.cross(d),s.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),u.fromBufferAttribute(r,m),s.add(c),l.add(c),u.add(c),r.setXYZ(g,s.x,s.y,s.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)i.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),c.subVectors(a,o),d.subVectors(i,o),c.cross(d),r.setXYZ(h+0,c.x,c.y,c.z),r.setXYZ(h+1,c.x,c.y,c.z),r.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(s,l){const u=s.array,c=s.itemSize,d=s.normalized,h=new u.constructor(l.length*c);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){s.isInterleavedBufferAttribute?p=l[v]*s.data.stride+s.offset:p=l[v]*c;for(let f=0;f<c;f++)h[g++]=u[p++]}return new sr(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new On,r=this.index.array,i=this.attributes;for(const s in i){const l=i[s],u=e(l,r);n.setAttribute(s,u)}const o=this.morphAttributes;for(const s in o){const l=[],u=o[s];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,r);l.push(p)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const u=a[s];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const l in r){const u=r[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(i[l]=c,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const i=e.attributes;for(const u in i){const c=i[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],d=o[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xg=new St,Ii=new nc,yl=new tc,qg=new I,So=new I,Mo=new I,Eo=new I,cf=new I,xl=new I,Sl=new me,Ml=new me,El=new me,Yg=new I,Kg=new I,Zg=new I,wl=new I,bl=new I;class rr extends qt{constructor(e=new On,n=new sp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const s=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}getVertexPosition(e,n){const r=this.geometry,i=r.attributes.position,o=r.morphAttributes.position,a=r.morphTargetsRelative;n.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(o&&s){xl.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=s[l],d=o[l];c!==0&&(cf.fromBufferAttribute(d,e),a?xl.addScaledVector(cf,c):xl.addScaledVector(cf.sub(n),c))}n.add(xl)}return n}raycast(e,n){const r=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yl.copy(r.boundingSphere),yl.applyMatrix4(o),Ii.copy(e.ray).recast(e.near),!(yl.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(yl,qg)===null||Ii.origin.distanceToSquared(qg)>(e.far-e.near)**2))&&(Xg.copy(o).invert(),Ii.copy(e.ray).applyMatrix4(Xg),!(r.boundingBox!==null&&Ii.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Ii)))}_computeIntersections(e,n,r){let i;const o=this.geometry,a=this.material,s=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,d=o.attributes.normal,h=o.groups,p=o.drawRange;if(s!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=a[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(s.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,S=y;x<S;x+=3){const M=s.getX(x),E=s.getX(x+1),A=s.getX(x+2);i=Tl(this,f,e,r,u,c,d,M,E,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(s.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const _=s.getX(m),y=s.getX(m+1),x=s.getX(m+2);i=Tl(this,a,e,r,u,c,d,_,y,x),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=a[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,S=y;x<S;x+=3){const M=x,E=x+1,A=x+2;i=Tl(this,f,e,r,u,c,d,M,E,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,n.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const _=m,y=m+1,x=m+2;i=Tl(this,a,e,r,u,c,d,_,y,x),i&&(i.faceIndex=Math.floor(m/3),n.push(i))}}}}function Db(t,e,n,r,i,o,a,s){let l;if(e.side===fn?l=r.intersectTriangle(a,o,i,!0,s):l=r.intersectTriangle(i,o,a,e.side===wi,s),l===null)return null;bl.copy(s),bl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(bl);return u<n.near||u>n.far?null:{distance:u,point:bl.clone(),object:t}}function Tl(t,e,n,r,i,o,a,s,l,u){t.getVertexPosition(s,So),t.getVertexPosition(l,Mo),t.getVertexPosition(u,Eo);const c=Db(t,e,n,r,So,Mo,Eo,wl);if(c){i&&(Sl.fromBufferAttribute(i,s),Ml.fromBufferAttribute(i,l),El.fromBufferAttribute(i,u),c.uv=er.getInterpolation(wl,So,Mo,Eo,Sl,Ml,El,new me)),o&&(Sl.fromBufferAttribute(o,s),Ml.fromBufferAttribute(o,l),El.fromBufferAttribute(o,u),c.uv1=er.getInterpolation(wl,So,Mo,Eo,Sl,Ml,El,new me),c.uv2=c.uv1),a&&(Yg.fromBufferAttribute(a,s),Kg.fromBufferAttribute(a,l),Zg.fromBufferAttribute(a,u),c.normal=er.getInterpolation(wl,So,Mo,Eo,Yg,Kg,Zg,new I),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));const d={a:s,b:l,c:u,normal:new I,materialIndex:0};er.getNormal(So,Mo,Eo,d.normal),c.face=d}return c}class zs extends On{constructor(e=1,n=1,r=1,i=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:i,heightSegments:o,depthSegments:a};const s=this;i=Math.floor(i),o=Math.floor(o),a=Math.floor(a);const l=[],u=[],c=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,r,n,e,a,o,0),g("z","y","x",1,-1,r,n,-e,a,o,1),g("x","z","y",1,1,e,r,n,i,a,2),g("x","z","y",1,-1,e,r,-n,i,a,3),g("x","y","z",1,-1,e,n,r,i,o,4),g("x","y","z",-1,-1,e,n,-r,i,o,5),this.setIndex(l),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(c,3)),this.setAttribute("uv",new It(d,2));function g(v,m,f,_,y,x,S,M,E,A,w){const b=x/E,B=S/A,k=x/2,te=S/2,R=M/2,L=E+1,D=A+1;let J=0,z=0;const W=new I;for(let N=0;N<D;N++){const V=N*B-te;for(let Y=0;Y<L;Y++){const G=Y*b-k;W[v]=G*_,W[m]=V*y,W[f]=R,u.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[f]=M>0?1:-1,c.push(W.x,W.y,W.z),d.push(Y/E),d.push(1-N/A),J+=1}}for(let N=0;N<A;N++)for(let V=0;V<E;V++){const Y=h+V+L*N,G=h+V+L*(N+1),$=h+(V+1)+L*(N+1),q=h+(V+1)+L*N;l.push(Y,G,q),l.push(G,$,q),z+=6}s.addGroup(p,z,w),p+=z,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function da(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const i=t[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=i.clone():Array.isArray(i)?e[n][r]=i.slice():e[n][r]=i}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const r=da(t[n]);for(const i in r)e[i]=r[i]}return e}function Nb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function mx(t){return t.getRenderTarget()===null?t.outputColorSpace:st.workingColorSpace}const gx={clone:da,merge:an};var Ib=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ub=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $r extends _a{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ib,this.fragmentShader=Ub,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=da(e.uniforms),this.uniformsGroups=Nb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?n.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[i]={type:"m4",value:a.toArray()}:n.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class vx extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Ur}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fn extends vx{constructor(e=50,n=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Rs*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,r,i,o,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(as*.5*this.fov)/this.zoom,r=2*n,i=this.aspect*r,o=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;o+=a.offsetX*i/l,n-=a.offsetY*r/u,i*=a.width/l,r*=a.height/u}const s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const wo=-90,bo=1;class kb extends qt{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Fn(wo,bo,e,n);i.layers=this.layers,this.add(i);const o=new Fn(wo,bo,e,n);o.layers=this.layers,this.add(o);const a=new Fn(wo,bo,e,n);a.layers=this.layers,this.add(a);const s=new Fn(wo,bo,e,n);s.layers=this.layers,this.add(s);const l=new Fn(wo,bo,e,n);l.layers=this.layers,this.add(l);const u=new Fn(wo,bo,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,i,o,a,s,l]=n;for(const u of n)this.remove(u);if(e===Ur)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cu)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,s,l,u,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(n,o),e.setRenderTarget(r,1,i),e.render(n,a),e.setRenderTarget(r,2,i),e.render(n,s),e.setRenderTarget(r,3,i),e.render(n,l),e.setRenderTarget(r,4,i),e.render(n,u),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,i),e.render(n,c),e.setRenderTarget(d,h,p),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class _x extends xn{constructor(e,n,r,i,o,a,s,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:la,super(e,n,r,i,o,a,s,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fb extends bi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];n.encoding!==void 0&&(ls("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ki?Ht:zn),this.texture=new _x(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new zs(5,5,5),o=new $r({name:"CubemapFromEquirect",uniforms:da(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:fn,blending:zr});o.uniforms.tEquirect.value=n;const a=new rr(i,o),s=n.minFilter;return n.minFilter===Cs&&(n.minFilter=kn),new kb(1,10,this).update(e,a),n.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,r,i){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,r,i);e.setRenderTarget(o)}}const ff=new I,zb=new I,Bb=new qe;class Lr{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,i){return this.normal.set(e,n,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const i=ff.subVectors(r,n).cross(zb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(ff),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Bb.getNormalMatrix(e),i=this.coplanarPoint(ff).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new tc,Al=new I;class lp{constructor(e=new Lr,n=new Lr,r=new Lr,i=new Lr,o=new Lr,a=new Lr){this.planes=[e,n,r,i,o,a]}set(e,n,r,i,o,a){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(r),s[3].copy(i),s[4].copy(o),s[5].copy(a),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ur){const r=this.planes,i=e.elements,o=i[0],a=i[1],s=i[2],l=i[3],u=i[4],c=i[5],d=i[6],h=i[7],p=i[8],g=i[9],v=i[10],m=i[11],f=i[12],_=i[13],y=i[14],x=i[15];if(r[0].setComponents(l-o,h-u,m-p,x-f).normalize(),r[1].setComponents(l+o,h+u,m+p,x+f).normalize(),r[2].setComponents(l+a,h+c,m+g,x+_).normalize(),r[3].setComponents(l-a,h-c,m-g,x-_).normalize(),r[4].setComponents(l-s,h-d,m-v,x-y).normalize(),n===Ur)r[5].setComponents(l+s,h+d,m+v,x+y).normalize();else if(n===Cu)r[5].setComponents(s,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ui.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const n=this.planes,r=e.center,i=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const i=n[r];if(Al.x=i.normal.x>0?e.max.x:e.min.x,Al.y=i.normal.y>0?e.max.y:e.min.y,Al.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Al)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yx(){let t=null,e=!1,n=null,r=null;function i(o,a){n(o,a),r=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(i),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function Hb(t,e){const n=e.isWebGL2,r=new WeakMap;function i(u,c){const d=u.array,h=u.usage,p=d.byteLength,g=t.createBuffer();t.bindBuffer(c,g),t.bufferData(c,d,h),u.onUploadCallback();let v;if(d instanceof Float32Array)v=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=t.SHORT;else if(d instanceof Uint32Array)v=t.UNSIGNED_INT;else if(d instanceof Int32Array)v=t.INT;else if(d instanceof Int8Array)v=t.BYTE;else if(d instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:p}}function o(u,c,d){const h=c.array,p=c._updateRange,g=c.updateRanges;if(t.bindBuffer(d,u),p.count===-1&&g.length===0&&t.bufferSubData(d,0,h),g.length!==0){for(let v=0,m=g.length;v<m;v++){const f=g[v];n?t.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):t.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),r.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=r.get(u);c&&(t.deleteBuffer(c.buffer),r.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=r.get(u);(!h||h.version<u.version)&&r.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=r.get(u);if(d===void 0)r.set(u,i(u,c));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(d.buffer,u,c),d.version=u.version}}return{get:a,remove:s,update:l}}class up extends On{constructor(e=1,n=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:i};const o=e/2,a=n/2,s=Math.floor(r),l=Math.floor(i),u=s+1,c=l+1,d=e/s,h=n/l,p=[],g=[],v=[],m=[];for(let f=0;f<c;f++){const _=f*h-a;for(let y=0;y<u;y++){const x=y*d-o;g.push(x,-_,0),v.push(0,0,1),m.push(y/s),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<s;_++){const y=_+u*f,x=_+u*(f+1),S=_+1+u*(f+1),M=_+1+u*f;p.push(y,x,M),p.push(x,S,M)}this.setIndex(p),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(v,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new up(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vb=`#ifdef USE_ALPHAHASH
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
#endif`,Wb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$b=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qb=`#ifdef USE_AOMAP
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
#endif`,Yb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kb=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Zb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tT=`#ifdef USE_IRIDESCENCE
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
#endif`,nT=`#ifdef USE_BUMPMAP
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
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fT=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,dT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hT=`vec3 transformedNormal = objectNormal;
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
#endif`,pT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_T="gl_FragColor = linearToOutputTexel( gl_FragColor );",yT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,xT=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ST=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,MT=`#ifdef USE_ENVMAP
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
#endif`,ET=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
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
#endif`,bT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RT=`#ifdef USE_GRADIENTMAP
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
}`,PT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,LT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NT=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,IT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,UT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BT=`PhysicalMaterial material;
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
#endif`,HT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,GT=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,VT=`#if defined( RE_IndirectDiffuse )
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
#endif`,WT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$T=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,YT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,QT=`#if defined( USE_POINTS_UV )
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
#endif`,JT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,rA=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,iA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,oA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cA=`#ifdef USE_NORMALMAP
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
#endif`,fA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,vA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_A=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,wA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CA=`#ifdef USE_SKINNING
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
#endif`,RA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PA=`#ifdef USE_SKINNING
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
#endif`,LA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NA=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,IA=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,UA=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GA=`uniform sampler2D t2D;
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
}`,VA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$A=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XA=`#include <common>
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
}`,qA=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,YA=`#define DISTANCE
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
}`,KA=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ZA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eC=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tC=`#include <common>
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
}`,nC=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,rC=`#define LAMBERT
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
}`,iC=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,oC=`#define MATCAP
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
}`,aC=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,sC=`#define NORMAL
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
}`,lC=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uC=`#define PHONG
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
}`,cC=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,fC=`#define STANDARD
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
}`,dC=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,hC=`#define TOON
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
}`,pC=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,mC=`uniform float size;
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
}`,gC=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,_C=`uniform vec3 color;
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
}`,yC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,xC=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,We={alphahash_fragment:Gb,alphahash_pars_fragment:Vb,alphamap_fragment:Wb,alphamap_pars_fragment:jb,alphatest_fragment:$b,alphatest_pars_fragment:Xb,aomap_fragment:qb,aomap_pars_fragment:Yb,batching_pars_vertex:Kb,batching_vertex:Zb,begin_vertex:Qb,beginnormal_vertex:Jb,bsdfs:eT,iridescence_fragment:tT,bumpmap_pars_fragment:nT,clipping_planes_fragment:rT,clipping_planes_pars_fragment:iT,clipping_planes_pars_vertex:oT,clipping_planes_vertex:aT,color_fragment:sT,color_pars_fragment:lT,color_pars_vertex:uT,color_vertex:cT,common:fT,cube_uv_reflection_fragment:dT,defaultnormal_vertex:hT,displacementmap_pars_vertex:pT,displacementmap_vertex:mT,emissivemap_fragment:gT,emissivemap_pars_fragment:vT,colorspace_fragment:_T,colorspace_pars_fragment:yT,envmap_fragment:xT,envmap_common_pars_fragment:ST,envmap_pars_fragment:MT,envmap_pars_vertex:ET,envmap_physical_pars_fragment:IT,envmap_vertex:wT,fog_vertex:bT,fog_pars_vertex:TT,fog_fragment:AT,fog_pars_fragment:CT,gradientmap_pars_fragment:RT,lightmap_fragment:PT,lightmap_pars_fragment:LT,lights_lambert_fragment:OT,lights_lambert_pars_fragment:DT,lights_pars_begin:NT,lights_toon_fragment:UT,lights_toon_pars_fragment:kT,lights_phong_fragment:FT,lights_phong_pars_fragment:zT,lights_physical_fragment:BT,lights_physical_pars_fragment:HT,lights_fragment_begin:GT,lights_fragment_maps:VT,lights_fragment_end:WT,logdepthbuf_fragment:jT,logdepthbuf_pars_fragment:$T,logdepthbuf_pars_vertex:XT,logdepthbuf_vertex:qT,map_fragment:YT,map_pars_fragment:KT,map_particle_fragment:ZT,map_particle_pars_fragment:QT,metalnessmap_fragment:JT,metalnessmap_pars_fragment:eA,morphcolor_vertex:tA,morphnormal_vertex:nA,morphtarget_pars_vertex:rA,morphtarget_vertex:iA,normal_fragment_begin:oA,normal_fragment_maps:aA,normal_pars_fragment:sA,normal_pars_vertex:lA,normal_vertex:uA,normalmap_pars_fragment:cA,clearcoat_normal_fragment_begin:fA,clearcoat_normal_fragment_maps:dA,clearcoat_pars_fragment:hA,iridescence_pars_fragment:pA,opaque_fragment:mA,packing:gA,premultiplied_alpha_fragment:vA,project_vertex:_A,dithering_fragment:yA,dithering_pars_fragment:xA,roughnessmap_fragment:SA,roughnessmap_pars_fragment:MA,shadowmap_pars_fragment:EA,shadowmap_pars_vertex:wA,shadowmap_vertex:bA,shadowmask_pars_fragment:TA,skinbase_vertex:AA,skinning_pars_vertex:CA,skinning_vertex:RA,skinnormal_vertex:PA,specularmap_fragment:LA,specularmap_pars_fragment:OA,tonemapping_fragment:DA,tonemapping_pars_fragment:NA,transmission_fragment:IA,transmission_pars_fragment:UA,uv_pars_fragment:kA,uv_pars_vertex:FA,uv_vertex:zA,worldpos_vertex:BA,background_vert:HA,background_frag:GA,backgroundCube_vert:VA,backgroundCube_frag:WA,cube_vert:jA,cube_frag:$A,depth_vert:XA,depth_frag:qA,distanceRGBA_vert:YA,distanceRGBA_frag:KA,equirect_vert:ZA,equirect_frag:QA,linedashed_vert:JA,linedashed_frag:eC,meshbasic_vert:tC,meshbasic_frag:nC,meshlambert_vert:rC,meshlambert_frag:iC,meshmatcap_vert:oC,meshmatcap_frag:aC,meshnormal_vert:sC,meshnormal_frag:lC,meshphong_vert:uC,meshphong_frag:cC,meshphysical_vert:fC,meshphysical_frag:dC,meshtoon_vert:hC,meshtoon_frag:pC,points_vert:mC,points_frag:gC,shadow_vert:vC,shadow_frag:_C,sprite_vert:yC,sprite_frag:xC},pe={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},mr={basic:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new et(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:an([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:an([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new et(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:an([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:an([pe.points,pe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:an([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:an([pe.common,pe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:an([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:an([pe.sprite,pe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:an([pe.common,pe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:an([pe.lights,pe.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};mr.physical={uniforms:an([mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Cl={r:0,b:0,g:0};function SC(t,e,n,r,i,o,a){const s=new et(0);let l=o===!0?0:1,u,c,d=null,h=0,p=null;function g(m,f){let _=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?n:e).get(y)),y===null?v(s,l):y&&y.isColor&&(v(y,1),_=!0);const x=t.xr.getEnvironmentBlendMode();x==="additive"?r.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,a),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ju)?(c===void 0&&(c=new rr(new zs(1,1,1),new $r({name:"BackgroundCubeMaterial",uniforms:da(mr.backgroundCube.uniforms),vertexShader:mr.backgroundCube.vertexShader,fragmentShader:mr.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=st.getTransfer(y.colorSpace)!==dt,(d!==y||h!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new rr(new up(2,2),new $r({name:"BackgroundMaterial",uniforms:da(mr.background.uniforms),vertexShader:mr.background.vertexShader,fragmentShader:mr.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=st.getTransfer(y.colorSpace)!==dt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,h=y.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function v(m,f){m.getRGB(Cl,mx(t)),r.buffers.color.setClear(Cl.r,Cl.g,Cl.b,f,a)}return{getClearColor:function(){return s},setClearColor:function(m,f=1){s.set(m),l=f,v(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(s,l)},render:g}}function MC(t,e,n,r){const i=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=r.isWebGL2?null:e.get("OES_vertex_array_object"),a=r.isWebGL2||o!==null,s={},l=m(null);let u=l,c=!1;function d(R,L,D,J,z){let W=!1;if(a){const N=v(J,D,L);u!==N&&(u=N,p(u.object)),W=f(R,J,D,z),W&&_(R,J,D,z)}else{const N=L.wireframe===!0;(u.geometry!==J.id||u.program!==D.id||u.wireframe!==N)&&(u.geometry=J.id,u.program=D.id,u.wireframe=N,W=!0)}z!==null&&n.update(z,t.ELEMENT_ARRAY_BUFFER),(W||c)&&(c=!1,A(R,L,D,J),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(z).buffer))}function h(){return r.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function p(R){return r.isWebGL2?t.bindVertexArray(R):o.bindVertexArrayOES(R)}function g(R){return r.isWebGL2?t.deleteVertexArray(R):o.deleteVertexArrayOES(R)}function v(R,L,D){const J=D.wireframe===!0;let z=s[R.id];z===void 0&&(z={},s[R.id]=z);let W=z[L.id];W===void 0&&(W={},z[L.id]=W);let N=W[J];return N===void 0&&(N=m(h()),W[J]=N),N}function m(R){const L=[],D=[],J=[];for(let z=0;z<i;z++)L[z]=0,D[z]=0,J[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:J,object:R,attributes:{},index:null}}function f(R,L,D,J){const z=u.attributes,W=L.attributes;let N=0;const V=D.getAttributes();for(const Y in V)if(V[Y].location>=0){const $=z[Y];let q=W[Y];if(q===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(q=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(q=R.instanceColor)),$===void 0||$.attribute!==q||q&&$.data!==q.data)return!0;N++}return u.attributesNum!==N||u.index!==J}function _(R,L,D,J){const z={},W=L.attributes;let N=0;const V=D.getAttributes();for(const Y in V)if(V[Y].location>=0){let $=W[Y];$===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&($=R.instanceColor));const q={};q.attribute=$,$&&$.data&&(q.data=$.data),z[Y]=q,N++}u.attributes=z,u.attributesNum=N,u.index=J}function y(){const R=u.newAttributes;for(let L=0,D=R.length;L<D;L++)R[L]=0}function x(R){S(R,0)}function S(R,L){const D=u.newAttributes,J=u.enabledAttributes,z=u.attributeDivisors;D[R]=1,J[R]===0&&(t.enableVertexAttribArray(R),J[R]=1),z[R]!==L&&((r.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,L),z[R]=L)}function M(){const R=u.newAttributes,L=u.enabledAttributes;for(let D=0,J=L.length;D<J;D++)L[D]!==R[D]&&(t.disableVertexAttribArray(D),L[D]=0)}function E(R,L,D,J,z,W,N){N===!0?t.vertexAttribIPointer(R,L,D,z,W):t.vertexAttribPointer(R,L,D,J,z,W)}function A(R,L,D,J){if(r.isWebGL2===!1&&(R.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const z=J.attributes,W=D.getAttributes(),N=L.defaultAttributeValues;for(const V in W){const Y=W[V];if(Y.location>=0){let G=z[V];if(G===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(G=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(G=R.instanceColor)),G!==void 0){const $=G.normalized,q=G.itemSize,re=n.get(G);if(re===void 0)continue;const F=re.buffer,ne=re.type,de=re.bytesPerElement,he=r.isWebGL2===!0&&(ne===t.INT||ne===t.UNSIGNED_INT||G.gpuType===Qy);if(G.isInterleavedBufferAttribute){const _e=G.data,j=_e.stride,pt=G.offset;if(_e.isInstancedInterleavedBuffer){for(let Me=0;Me<Y.locationSize;Me++)S(Y.location+Me,_e.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Me=0;Me<Y.locationSize;Me++)x(Y.location+Me);t.bindBuffer(t.ARRAY_BUFFER,F);for(let Me=0;Me<Y.locationSize;Me++)E(Y.location+Me,q/Y.locationSize,ne,$,j*de,(pt+q/Y.locationSize*Me)*de,he)}else{if(G.isInstancedBufferAttribute){for(let _e=0;_e<Y.locationSize;_e++)S(Y.location+_e,G.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let _e=0;_e<Y.locationSize;_e++)x(Y.location+_e);t.bindBuffer(t.ARRAY_BUFFER,F);for(let _e=0;_e<Y.locationSize;_e++)E(Y.location+_e,q/Y.locationSize,ne,$,q*de,q/Y.locationSize*_e*de,he)}}else if(N!==void 0){const $=N[V];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(Y.location,$);break;case 3:t.vertexAttrib3fv(Y.location,$);break;case 4:t.vertexAttrib4fv(Y.location,$);break;default:t.vertexAttrib1fv(Y.location,$)}}}}M()}function w(){k();for(const R in s){const L=s[R];for(const D in L){const J=L[D];for(const z in J)g(J[z].object),delete J[z];delete L[D]}delete s[R]}}function b(R){if(s[R.id]===void 0)return;const L=s[R.id];for(const D in L){const J=L[D];for(const z in J)g(J[z].object),delete J[z];delete L[D]}delete s[R.id]}function B(R){for(const L in s){const D=s[L];if(D[R.id]===void 0)continue;const J=D[R.id];for(const z in J)g(J[z].object),delete J[z];delete D[R.id]}}function k(){te(),c=!0,u!==l&&(u=l,p(u.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:te,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfProgram:B,initAttributes:y,enableAttribute:x,disableUnusedAttributes:M}}function EC(t,e,n,r){const i=r.isWebGL2;let o;function a(c){o=c}function s(c,d){t.drawArrays(o,c,d),n.update(d,o,1)}function l(c,d,h){if(h===0)return;let p,g;if(i)p=t,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](o,c,d,h),n.update(d,o,h)}function u(c,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h;g++)this.render(c[g],d[g]);else{p.multiDrawArraysWEBGL(o,c,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=d[v];n.update(g,o,1)}}this.setMode=a,this.render=s,this.renderInstances=l,this.renderMultiDraw=u}function wC(t,e,n){let r;function i(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let s=n.precision!==void 0?n.precision:"highp";const l=o(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const u=a||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,x=a||e.has("OES_texture_float"),S=y&&x,M=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:o,precision:s,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:S,maxSamples:M}}function bC(t){const e=this;let n=null,r=0,i=!1,o=!1;const a=new Lr,s=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||r!==0||i;return i=h,r=d.length,p},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){n=c(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!i||g===null||g.length===0||o&&!m)o?c(null):u();else{const _=o?0:r,y=_*4;let x=f.clippingState||null;l.value=x,x=c(g,h,y,p);for(let S=0;S!==y;++S)x[S]=n[S];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function c(d,h,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,_=h.matrixWorldInverse;s.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,x=p;y!==v;++y,x+=4)a.copy(d[y]).applyMatrix4(_,s),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function TC(t){let e=new WeakMap;function n(a,s){return s===Id?a.mapping=la:s===Ud&&(a.mapping=ua),a}function r(a){if(a&&a.isTexture){const s=a.mapping;if(s===Id||s===Ud)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Fb(l.height/2);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",i),n(u.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function o(){e=new WeakMap}return{get:r,dispose:o}}class cp extends vx{constructor(e=-1,n=1,r=1,i=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=i,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,i,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=r-e,a=r+e,s=i+n,l=i-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,a=o+u*this.view.width,s-=c*this.view.offsetY,l=s-c*this.view.height}this.projectionMatrix.makeOrthographic(o,a,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Go=4,Qg=[.125,.215,.35,.446,.526,.582],Hi=20,df=new cp,Jg=new et;let hf=null,pf=0,mf=0;const zi=(1+Math.sqrt(5))/2,To=1/zi,ev=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,zi,To),new I(0,zi,-To),new I(To,0,zi),new I(-To,0,zi),new I(zi,To,0),new I(-zi,To,0)];class tv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,i=100){hf=this._renderer.getRenderTarget(),pf=this._renderer.getActiveCubeFace(),mf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,r,i,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hf,pf,mf),e.scissorTest=!1,Rl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===la||e.mapping===ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hf=this._renderer.getRenderTarget(),pf=this._renderer.getActiveCubeFace(),mf=this._renderer.getActiveMipmapLevel();const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:ca,format:nr,colorSpace:jr,depthBuffer:!1},i=nv(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nv(e,n,r);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AC(o)),this._blurMaterial=CC(o,e,n)}return i}_compileMaterial(e){const n=new rr(this._lodPlanes[0],e);this._renderer.compile(n,df)}_sceneToCubeUV(e,n,r,i){const s=new Fn(90,1,n,r),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(Jg),c.toneMapping=xi,c.autoClear=!1;const p=new sp({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new rr(new zs,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Jg),v=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(s.up.set(0,l[f],0),s.lookAt(u[f],0,0)):_===1?(s.up.set(0,0,l[f]),s.lookAt(0,u[f],0)):(s.up.set(0,l[f],0),s.lookAt(0,0,u[f]));const y=this._cubeSize;Rl(i,_*y,f>2?y:0,y,y),c.setRenderTarget(i),v&&c.render(g,s),c.render(e,s)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=m}_textureToCubeUV(e,n){const r=this._renderer,i=e.mapping===la||e.mapping===ua;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=iv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rv());const o=i?this._cubemapMaterial:this._equirectMaterial,a=new rr(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=e;const l=this._cubeSize;Rl(n,0,0,3*l,2*l),r.setRenderTarget(n),r.render(a,df)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const o=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=ev[(i-1)%ev.length];this._blur(e,i-1,i,o,a)}n.autoClear=r}_blur(e,n,r,i,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,r,i,"latitudinal",o),this._halfBlur(a,e,r,r,i,"longitudinal",o)}_halfBlur(e,n,r,i,o,a,s){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new rr(this._lodPlanes[i],u),h=u.uniforms,p=this._sizeLods[r]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Hi-1),v=o/g,m=isFinite(o)?1+Math.floor(c*v):Hi;m>Hi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);const f=[];let _=0;for(let E=0;E<Hi;++E){const A=E/v,w=Math.exp(-A*A/2);f.push(w),E===0?_+=w:E<m&&(_+=2*w)}for(let E=0;E<f.length;E++)f[E]=f[E]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-r;const x=this._sizeLods[i],S=3*x*(i>y-Go?i-y+Go:0),M=4*(this._cubeSize-x);Rl(n,S,M,3*x,2*x),l.setRenderTarget(n),l.render(d,df)}}function AC(t){const e=[],n=[],r=[];let i=t;const o=t-Go+1+Qg.length;for(let a=0;a<o;a++){const s=Math.pow(2,i);n.push(s);let l=1/s;a>t-Go?l=Qg[a-t+Go-1]:a===0&&(l=0),r.push(l);const u=1/(s-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,g=6,v=3,m=2,f=1,_=new Float32Array(v*g*p),y=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let M=0;M<p;M++){const E=M%3*2/3-1,A=M>2?0:-1,w=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];_.set(w,v*g*M),y.set(h,m*g*M);const b=[M,M,M,M,M,M];x.set(b,f*g*M)}const S=new On;S.setAttribute("position",new sr(_,v)),S.setAttribute("uv",new sr(y,m)),S.setAttribute("faceIndex",new sr(x,f)),e.push(S),i>Go&&i--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function nv(t,e,n){const r=new bi(t,e,n);return r.texture.mapping=Ju,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Rl(t,e,n,r,i){t.viewport.set(e,n,r,i),t.scissor.set(e,n,r,i)}function CC(t,e,n){const r=new Float32Array(Hi),i=new I(0,1,0);return new $r({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fp(),fragmentShader:`

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
		`,blending:zr,depthTest:!1,depthWrite:!1})}function rv(){return new $r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fp(),fragmentShader:`

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
		`,blending:zr,depthTest:!1,depthWrite:!1})}function iv(){return new $r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zr,depthTest:!1,depthWrite:!1})}function fp(){return`

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
	`}function RC(t){let e=new WeakMap,n=null;function r(s){if(s&&s.isTexture){const l=s.mapping,u=l===Id||l===Ud,c=l===la||l===ua;if(u||c)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return n===null&&(n=new tv(t)),d=u?n.fromEquirectangular(s,d):n.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(u&&d&&d.height>0||c&&d&&i(d)){n===null&&(n=new tv(t));const h=u?n.fromEquirectangular(s):n.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",o),h.texture}else return null}}}return s}function i(s){let l=0;const u=6;for(let c=0;c<u;c++)s[c]!==void 0&&l++;return l===u}function o(s){const l=s.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:a}}function PC(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(r)}return e[r]=i,i}return{has:function(r){return n(r)!==null},init:function(r){r.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(r){const i=n(r);return i===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function LC(t,e,n,r){const i={},o=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}h.removeEventListener("dispose",a),delete i[h.id];const p=o.get(h);p&&(e.remove(p),o.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function s(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],t.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let y=0,x=_.length;y<x;y+=3){const S=_[y+0],M=_[y+1],E=_[y+2];h.push(S,M,M,E,E,S)}}else if(g!==void 0){const _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const S=y+0,M=y+1,E=y+2;h.push(S,M,M,E,E,S)}}else return;const m=new(lx(h)?px:hx)(h,1);m.version=v;const f=o.get(d);f&&e.remove(f),o.set(d,m)}function c(d){const h=o.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return o.get(d)}return{get:s,update:l,getWireframeAttribute:c}}function OC(t,e,n,r){const i=r.isWebGL2;let o;function a(p){o=p}let s,l;function u(p){s=p.type,l=p.bytesPerElement}function c(p,g){t.drawElements(o,g,s,p*l),n.update(g,o,1)}function d(p,g,v){if(v===0)return;let m,f;if(i)m=t,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](o,g,s,p*l,v),n.update(g,o,v)}function h(p,g,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<v;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(o,g,0,s,p,0,v);let f=0;for(let _=0;_<v;_++)f+=g[_];n.update(f,o,1)}}this.setMode=a,this.setIndex=u,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function DC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,a,s){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=s*(o/3);break;case t.LINES:n.lines+=s*(o/2);break;case t.LINE_STRIP:n.lines+=s*(o-1);break;case t.LINE_LOOP:n.lines+=s*o;break;case t.POINTS:n.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:r}}function NC(t,e){return t[0]-e[0]}function IC(t,e){return Math.abs(e[1])-Math.abs(t[1])}function UC(t,e,n){const r={},i=new Float32Array(8),o=new WeakMap,a=new Vt,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=g!==void 0?g.length:0;let m=o.get(c);if(m===void 0||m.count!==v){let L=function(){te.dispose(),o.delete(c),c.removeEventListener("dispose",L)};var p=L;m!==void 0&&m.texture.dispose();const y=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],E=c.morphAttributes.normal||[],A=c.morphAttributes.color||[];let w=0;y===!0&&(w=1),x===!0&&(w=2),S===!0&&(w=3);let b=c.attributes.position.count*w,B=1;b>e.maxTextureSize&&(B=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const k=new Float32Array(b*B*4*v),te=new fx(k,b,B,v);te.type=fi,te.needsUpdate=!0;const R=w*4;for(let D=0;D<v;D++){const J=M[D],z=E[D],W=A[D],N=b*B*4*D;for(let V=0;V<J.count;V++){const Y=V*R;y===!0&&(a.fromBufferAttribute(J,V),k[N+Y+0]=a.x,k[N+Y+1]=a.y,k[N+Y+2]=a.z,k[N+Y+3]=0),x===!0&&(a.fromBufferAttribute(z,V),k[N+Y+4]=a.x,k[N+Y+5]=a.y,k[N+Y+6]=a.z,k[N+Y+7]=0),S===!0&&(a.fromBufferAttribute(W,V),k[N+Y+8]=a.x,k[N+Y+9]=a.y,k[N+Y+10]=a.z,k[N+Y+11]=W.itemSize===4?a.w:1)}}m={count:v,texture:te,size:new me(b,B)},o.set(c,m),c.addEventListener("dispose",L)}let f=0;for(let y=0;y<h.length;y++)f+=h[y];const _=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let v=r[c.id];if(v===void 0||v.length!==g){v=[];for(let x=0;x<g;x++)v[x]=[x,0];r[c.id]=v}for(let x=0;x<g;x++){const S=v[x];S[0]=x,S[1]=h[x]}v.sort(IC);for(let x=0;x<8;x++)x<g&&v[x][1]?(s[x][0]=v[x][0],s[x][1]=v[x][1]):(s[x][0]=Number.MAX_SAFE_INTEGER,s[x][1]=0);s.sort(NC);const m=c.morphAttributes.position,f=c.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const S=s[x],M=S[0],E=S[1];M!==Number.MAX_SAFE_INTEGER&&E?(m&&c.getAttribute("morphTarget"+x)!==m[M]&&c.setAttribute("morphTarget"+x,m[M]),f&&c.getAttribute("morphNormal"+x)!==f[M]&&c.setAttribute("morphNormal"+x,f[M]),i[x]=E,_+=E):(m&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),f&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),i[x]=0)}const y=c.morphTargetsRelative?1:1-_;d.getUniforms().setValue(t,"morphTargetBaseInfluence",y),d.getUniforms().setValue(t,"morphTargetInfluences",i)}}return{update:l}}function kC(t,e,n,r){let i=new WeakMap;function o(l){const u=r.render.frame,c=l.geometry,d=e.get(l,c);if(i.get(d)!==u&&(e.update(d),i.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),i.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),i.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==u&&(h.update(),i.set(h,u))}return d}function a(){i=new WeakMap}function s(l){const u=l.target;u.removeEventListener("dispose",s),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}class xx extends xn{constructor(e,n,r,i,o,a,s,l,u,c){if(c=c!==void 0?c:Yi,c!==Yi&&c!==fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&c===Yi&&(r=ci),r===void 0&&c===fa&&(r=qi),super(null,i,o,a,s,l,c,r,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Sx=new xn,Mx=new xx(1,1);Mx.compareFunction=sx;const Ex=new fx,wx=new Mb,bx=new _x,ov=[],av=[],sv=new Float32Array(16),lv=new Float32Array(9),uv=new Float32Array(4);function ya(t,e,n){const r=t[0];if(r<=0||r>0)return t;const i=e*n;let o=ov[i];if(o===void 0&&(o=new Float32Array(i),ov[i]=o),e!==0){r.toArray(o,0);for(let a=1,s=0;a!==e;++a)s+=n,t[a].toArray(o,s)}return o}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function ic(t,e){let n=av[e];n===void 0&&(n=new Int32Array(e),av[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function FC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function zC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function BC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function HC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function GC(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ut(n,r))return;uv.set(r),t.uniformMatrix2fv(this.addr,!1,uv),kt(n,r)}}function VC(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ut(n,r))return;lv.set(r),t.uniformMatrix3fv(this.addr,!1,lv),kt(n,r)}}function WC(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ut(n,r))return;sv.set(r),t.uniformMatrix4fv(this.addr,!1,sv),kt(n,r)}}function jC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function $C(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function XC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function qC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function YC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function KC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function ZC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function QC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function JC(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i);const o=this.type===t.SAMPLER_2D_SHADOW?Mx:Sx;n.setTexture2D(e||o,i)}function eR(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(e||wx,i)}function tR(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(e||bx,i)}function nR(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(e||Ex,i)}function rR(t){switch(t){case 5126:return FC;case 35664:return zC;case 35665:return BC;case 35666:return HC;case 35674:return GC;case 35675:return VC;case 35676:return WC;case 5124:case 35670:return jC;case 35667:case 35671:return $C;case 35668:case 35672:return XC;case 35669:case 35673:return qC;case 5125:return YC;case 36294:return KC;case 36295:return ZC;case 36296:return QC;case 35678:case 36198:case 36298:case 36306:case 35682:return JC;case 35679:case 36299:case 36307:return eR;case 35680:case 36300:case 36308:case 36293:return tR;case 36289:case 36303:case 36311:case 36292:return nR}}function iR(t,e){t.uniform1fv(this.addr,e)}function oR(t,e){const n=ya(e,this.size,2);t.uniform2fv(this.addr,n)}function aR(t,e){const n=ya(e,this.size,3);t.uniform3fv(this.addr,n)}function sR(t,e){const n=ya(e,this.size,4);t.uniform4fv(this.addr,n)}function lR(t,e){const n=ya(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function uR(t,e){const n=ya(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function cR(t,e){const n=ya(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function fR(t,e){t.uniform1iv(this.addr,e)}function dR(t,e){t.uniform2iv(this.addr,e)}function hR(t,e){t.uniform3iv(this.addr,e)}function pR(t,e){t.uniform4iv(this.addr,e)}function mR(t,e){t.uniform1uiv(this.addr,e)}function gR(t,e){t.uniform2uiv(this.addr,e)}function vR(t,e){t.uniform3uiv(this.addr,e)}function _R(t,e){t.uniform4uiv(this.addr,e)}function yR(t,e,n){const r=this.cache,i=e.length,o=ic(n,i);Ut(r,o)||(t.uniform1iv(this.addr,o),kt(r,o));for(let a=0;a!==i;++a)n.setTexture2D(e[a]||Sx,o[a])}function xR(t,e,n){const r=this.cache,i=e.length,o=ic(n,i);Ut(r,o)||(t.uniform1iv(this.addr,o),kt(r,o));for(let a=0;a!==i;++a)n.setTexture3D(e[a]||wx,o[a])}function SR(t,e,n){const r=this.cache,i=e.length,o=ic(n,i);Ut(r,o)||(t.uniform1iv(this.addr,o),kt(r,o));for(let a=0;a!==i;++a)n.setTextureCube(e[a]||bx,o[a])}function MR(t,e,n){const r=this.cache,i=e.length,o=ic(n,i);Ut(r,o)||(t.uniform1iv(this.addr,o),kt(r,o));for(let a=0;a!==i;++a)n.setTexture2DArray(e[a]||Ex,o[a])}function ER(t){switch(t){case 5126:return iR;case 35664:return oR;case 35665:return aR;case 35666:return sR;case 35674:return lR;case 35675:return uR;case 35676:return cR;case 5124:case 35670:return fR;case 35667:case 35671:return dR;case 35668:case 35672:return hR;case 35669:case 35673:return pR;case 5125:return mR;case 36294:return gR;case 36295:return vR;case 36296:return _R;case 35678:case 36198:case 36298:case 36306:case 35682:return yR;case 35679:case 36299:case 36307:return xR;case 35680:case 36300:case 36308:case 36293:return SR;case 36289:case 36303:case 36311:case 36292:return MR}}class wR{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=rR(n.type)}}class bR{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ER(n.type)}}class TR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const i=this.seq;for(let o=0,a=i.length;o!==a;++o){const s=i[o];s.setValue(e,n[s.id],r)}}}const gf=/(\w+)(\])?(\[|\.)?/g;function cv(t,e){t.seq.push(e),t.map[e.id]=e}function AR(t,e,n){const r=t.name,i=r.length;for(gf.lastIndex=0;;){const o=gf.exec(r),a=gf.lastIndex;let s=o[1];const l=o[2]==="]",u=o[3];if(l&&(s=s|0),u===void 0||u==="["&&a+2===i){cv(n,u===void 0?new wR(s,t,e):new bR(s,t,e));break}else{let d=n.map[s];d===void 0&&(d=new TR(s),cv(n,d)),n=d}}}class Kl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const o=e.getActiveUniform(n,i),a=e.getUniformLocation(n,o.name);AR(o,a,this)}}setValue(e,n,r,i){const o=this.map[n];o!==void 0&&o.setValue(e,r,i)}setOptional(e,n,r){const i=n[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,n,r,i){for(let o=0,a=n.length;o!==a;++o){const s=n[o],l=r[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,n){const r=[];for(let i=0,o=e.length;i!==o;++i){const a=e[i];a.id in n&&r.push(a)}return r}}function fv(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}const CR=37297;let RR=0;function PR(t,e){const n=t.split(`
`),r=[],i=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let a=i;a<o;a++){const s=a+1;r.push(`${s===e?">":" "} ${s}: ${n[a]}`)}return r.join(`
`)}function LR(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let r;switch(e===n?r="":e===Au&&n===Tu?r="LinearDisplayP3ToLinearSRGB":e===Tu&&n===Au&&(r="LinearSRGBToLinearDisplayP3"),t){case jr:case ec:return[r,"LinearTransferOETF"];case Ht:case ip:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[r,"LinearTransferOETF"]}}function dv(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),i=t.getShaderInfoLog(e).trim();if(r&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+i+`

`+PR(t.getShaderSource(e),a)}else return i}function OR(t,e){const n=LR(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function DR(t,e){let n;switch(e){case Ow:n="Linear";break;case Dw:n="Reinhard";break;case Nw:n="OptimizedCineon";break;case Iw:n="ACESFilmic";break;case kw:n="AgX";break;case Uw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function NR(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vo).join(`
`)}function IR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Vo).join(`
`)}function UR(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function kR(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const o=t.getActiveAttrib(e,i),a=o.name;let s=1;o.type===t.FLOAT_MAT2&&(s=2),o.type===t.FLOAT_MAT3&&(s=3),o.type===t.FLOAT_MAT4&&(s=4),n[a]={type:o.type,location:t.getAttribLocation(e,a),locationSize:s}}return n}function Vo(t){return t!==""}function hv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gd(t){return t.replace(FR,BR)}const zR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function BR(t,e){let n=We[e];if(n===void 0){const r=zR.get(e);if(r!==void 0)n=We[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Gd(n)}const HR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mv(t){return t.replace(HR,GR)}function GR(t,e,n,r){let i="";for(let o=parseInt(e);o<parseInt(n);o++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function gv(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function VR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ky?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===aw?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Cr&&(e="SHADOWMAP_TYPE_VSM"),e}function WR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case la:case ua:e="ENVMAP_TYPE_CUBE";break;case Ju:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ua:e="ENVMAP_MODE_REFRACTION";break}return e}function $R(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case np:e="ENVMAP_BLENDING_MULTIPLY";break;case Pw:e="ENVMAP_BLENDING_MIX";break;case Lw:e="ENVMAP_BLENDING_ADD";break}return e}function XR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function qR(t,e,n,r){const i=t.getContext(),o=n.defines;let a=n.vertexShader,s=n.fragmentShader;const l=VR(n),u=WR(n),c=jR(n),d=$R(n),h=XR(n),p=n.isWebGL2?"":NR(n),g=IR(n),v=UR(o),m=i.createProgram();let f,_,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Vo).join(`
`),f.length>0&&(f+=`
`),_=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Vo).join(`
`),_.length>0&&(_+=`
`)):(f=[gv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),_=[p,gv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xi?"#define TONE_MAPPING":"",n.toneMapping!==xi?We.tonemapping_pars_fragment:"",n.toneMapping!==xi?DR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,OR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vo).join(`
`)),a=Gd(a),a=hv(a,n),a=pv(a,n),s=Gd(s),s=hv(s,n),s=pv(s,n),a=mv(a),s=mv(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Ng?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ng?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=y+f+a,S=y+_+s,M=fv(i,i.VERTEX_SHADER,x),E=fv(i,i.FRAGMENT_SHADER,S);i.attachShader(m,M),i.attachShader(m,E),n.index0AttributeName!==void 0?i.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function A(k){if(t.debug.checkShaderErrors){const te=i.getProgramInfoLog(m).trim(),R=i.getShaderInfoLog(M).trim(),L=i.getShaderInfoLog(E).trim();let D=!0,J=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,m,M,E);else{const z=dv(i,M,"vertex"),W=dv(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+z+`
`+W)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(R===""||L==="")&&(J=!1);J&&(k.diagnostics={runnable:D,programLog:te,vertexShader:{log:R,prefix:f},fragmentShader:{log:L,prefix:_}})}i.deleteShader(M),i.deleteShader(E),w=new Kl(i,m),b=kR(i,m)}let w;this.getUniforms=function(){return w===void 0&&A(this),w};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let B=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=i.getProgramParameter(m,CR)),B},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=RR++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=E,this}let YR=0;class KR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(n),o=this._getShaderStage(r),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new ZR(e),n.set(e,r)),r}}class ZR{constructor(e){this.id=YR++,this.code=e,this.usedTimes=0}}function QR(t,e,n,r,i,o,a){const s=new ap,l=new KR,u=[],c=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return w===0?"uv":`uv${w}`}function m(w,b,B,k,te){const R=k.fog,L=te.geometry,D=w.isMeshStandardMaterial?k.environment:null,J=(w.isMeshStandardMaterial?n:e).get(w.envMap||D),z=J&&J.mapping===Ju?J.image.height:null,W=g[w.type];w.precision!==null&&(p=i.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const N=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,V=N!==void 0?N.length:0;let Y=0;L.morphAttributes.position!==void 0&&(Y=1),L.morphAttributes.normal!==void 0&&(Y=2),L.morphAttributes.color!==void 0&&(Y=3);let G,$,q,re;if(W){const Tt=mr[W];G=Tt.vertexShader,$=Tt.fragmentShader}else G=w.vertexShader,$=w.fragmentShader,l.update(w),q=l.getVertexShaderID(w),re=l.getFragmentShaderID(w);const F=t.getRenderTarget(),ne=te.isInstancedMesh===!0,de=te.isBatchedMesh===!0,he=!!w.map,_e=!!w.matcap,j=!!J,pt=!!w.aoMap,Me=!!w.lightMap,Oe=!!w.bumpMap,ye=!!w.normalMap,Je=!!w.displacementMap,Fe=!!w.emissiveMap,P=!!w.metalnessMap,T=!!w.roughnessMap,K=w.anisotropy>0,le=w.clearcoat>0,oe=w.iridescence>0,ue=w.sheen>0,Ae=w.transmission>0,ve=K&&!!w.anisotropyMap,be=le&&!!w.clearcoatMap,Ne=le&&!!w.clearcoatNormalMap,Ge=le&&!!w.clearcoatRoughnessMap,ie=oe&&!!w.iridescenceMap,ot=oe&&!!w.iridescenceThicknessMap,je=ue&&!!w.sheenColorMap,ze=ue&&!!w.sheenRoughnessMap,Le=!!w.specularMap,xe=!!w.specularColorMap,O=!!w.specularIntensityMap,ce=Ae&&!!w.transmissionMap,Ce=Ae&&!!w.thicknessMap,we=!!w.gradientMap,ae=!!w.alphaMap,U=w.alphaTest>0,fe=!!w.alphaHash,ge=!!w.extensions,Ue=!!L.attributes.uv1,De=!!L.attributes.uv2,Ye=!!L.attributes.uv3;let Ke=xi;return w.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ke=t.toneMapping),{isWebGL2:c,shaderID:W,shaderType:w.type,shaderName:w.name,vertexShader:G,fragmentShader:$,defines:w.defines,customVertexShaderID:q,customFragmentShaderID:re,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:de,instancing:ne,instancingColor:ne&&te.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:F===null?t.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:jr,map:he,matcap:_e,envMap:j,envMapMode:j&&J.mapping,envMapCubeUVHeight:z,aoMap:pt,lightMap:Me,bumpMap:Oe,normalMap:ye,displacementMap:h&&Je,emissiveMap:Fe,normalMapObjectSpace:ye&&w.normalMapType===Yw,normalMapTangentSpace:ye&&w.normalMapType===ax,metalnessMap:P,roughnessMap:T,anisotropy:K,anisotropyMap:ve,clearcoat:le,clearcoatMap:be,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Ge,iridescence:oe,iridescenceMap:ie,iridescenceThicknessMap:ot,sheen:ue,sheenColorMap:je,sheenRoughnessMap:ze,specularMap:Le,specularColorMap:xe,specularIntensityMap:O,transmission:Ae,transmissionMap:ce,thicknessMap:Ce,gradientMap:we,opaque:w.transparent===!1&&w.blending===Jo,alphaMap:ae,alphaTest:U,alphaHash:fe,combine:w.combine,mapUv:he&&v(w.map.channel),aoMapUv:pt&&v(w.aoMap.channel),lightMapUv:Me&&v(w.lightMap.channel),bumpMapUv:Oe&&v(w.bumpMap.channel),normalMapUv:ye&&v(w.normalMap.channel),displacementMapUv:Je&&v(w.displacementMap.channel),emissiveMapUv:Fe&&v(w.emissiveMap.channel),metalnessMapUv:P&&v(w.metalnessMap.channel),roughnessMapUv:T&&v(w.roughnessMap.channel),anisotropyMapUv:ve&&v(w.anisotropyMap.channel),clearcoatMapUv:be&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:je&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:ze&&v(w.sheenRoughnessMap.channel),specularMapUv:Le&&v(w.specularMap.channel),specularColorMapUv:xe&&v(w.specularColorMap.channel),specularIntensityMapUv:O&&v(w.specularIntensityMap.channel),transmissionMapUv:ce&&v(w.transmissionMap.channel),thicknessMapUv:Ce&&v(w.thicknessMap.channel),alphaMapUv:ae&&v(w.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ye||K),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:De,vertexUv3s:Ye,pointsUvs:te.isPoints===!0&&!!L.attributes.uv&&(he||ae),fog:!!R,useFog:w.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:te.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:Y,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&B.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ke,useLegacyLights:t._useLegacyLights,decodeVideoTexture:he&&w.map.isVideoTexture===!0&&st.getTransfer(w.map.colorSpace)===dt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Dr,flipSided:w.side===fn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:ge&&w.extensions.derivatives===!0,extensionFragDepth:ge&&w.extensions.fragDepth===!0,extensionDrawBuffers:ge&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&w.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function f(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const B in w.defines)b.push(B),b.push(w.defines[B]);return w.isRawShaderMaterial===!1&&(_(b,w),y(b,w),b.push(t.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function _(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function y(w,b){s.disableAll(),b.isWebGL2&&s.enable(0),b.supportsVertexTextures&&s.enable(1),b.instancing&&s.enable(2),b.instancingColor&&s.enable(3),b.matcap&&s.enable(4),b.envMap&&s.enable(5),b.normalMapObjectSpace&&s.enable(6),b.normalMapTangentSpace&&s.enable(7),b.clearcoat&&s.enable(8),b.iridescence&&s.enable(9),b.alphaTest&&s.enable(10),b.vertexColors&&s.enable(11),b.vertexAlphas&&s.enable(12),b.vertexUv1s&&s.enable(13),b.vertexUv2s&&s.enable(14),b.vertexUv3s&&s.enable(15),b.vertexTangents&&s.enable(16),b.anisotropy&&s.enable(17),b.alphaHash&&s.enable(18),b.batching&&s.enable(19),w.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.skinning&&s.enable(4),b.morphTargets&&s.enable(5),b.morphNormals&&s.enable(6),b.morphColors&&s.enable(7),b.premultipliedAlpha&&s.enable(8),b.shadowMapEnabled&&s.enable(9),b.useLegacyLights&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),w.push(s.mask)}function x(w){const b=g[w.type];let B;if(b){const k=mr[b];B=gx.clone(k.uniforms)}else B=w.uniforms;return B}function S(w,b){let B;for(let k=0,te=u.length;k<te;k++){const R=u[k];if(R.cacheKey===b){B=R,++B.usedTimes;break}}return B===void 0&&(B=new qR(t,b,w,o),u.push(B)),B}function M(w){if(--w.usedTimes===0){const b=u.indexOf(w);u[b]=u[u.length-1],u.pop(),w.destroy()}}function E(w){l.remove(w)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:S,releaseProgram:M,releaseShaderCache:E,programs:u,dispose:A}}function JR(){let t=new WeakMap;function e(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function n(o){t.delete(o)}function r(o,a,s){t.get(o)[a]=s}function i(){t=new WeakMap}return{get:e,remove:n,update:r,dispose:i}}function eP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function vv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function _v(){const t=[];let e=0;const n=[],r=[],i=[];function o(){e=0,n.length=0,r.length=0,i.length=0}function a(d,h,p,g,v,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=m),e++,f}function s(d,h,p,g,v,m){const f=a(d,h,p,g,v,m);p.transmission>0?r.push(f):p.transparent===!0?i.push(f):n.push(f)}function l(d,h,p,g,v,m){const f=a(d,h,p,g,v,m);p.transmission>0?r.unshift(f):p.transparent===!0?i.unshift(f):n.unshift(f)}function u(d,h){n.length>1&&n.sort(d||eP),r.length>1&&r.sort(h||vv),i.length>1&&i.sort(h||vv)}function c(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:r,transparent:i,init:o,push:s,unshift:l,finish:c,sort:u}}function tP(){let t=new WeakMap;function e(r,i){const o=t.get(r);let a;return o===void 0?(a=new _v,t.set(r,[a])):i>=o.length?(a=new _v,o.push(a)):a=o[i],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function nP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new et};break;case"SpotLight":n={position:new I,direction:new I,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function rP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let iP=0;function oP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function aP(t,e){const n=new nP,r=rP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const o=new I,a=new St,s=new St;function l(c,d){let h=0,p=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let v=0,m=0,f=0,_=0,y=0,x=0,S=0,M=0,E=0,A=0,w=0;c.sort(oP);const b=d===!0?Math.PI:1;for(let k=0,te=c.length;k<te;k++){const R=c[k],L=R.color,D=R.intensity,J=R.distance,z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=L.r*D*b,p+=L.g*D*b,g+=L.b*D*b;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],D);w++}else if(R.isDirectionalLight){const W=n.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*b),R.castShadow){const N=R.shadow,V=r.get(R);V.shadowBias=N.bias,V.shadowNormalBias=N.normalBias,V.shadowRadius=N.radius,V.shadowMapSize=N.mapSize,i.directionalShadow[v]=V,i.directionalShadowMap[v]=z,i.directionalShadowMatrix[v]=R.shadow.matrix,x++}i.directional[v]=W,v++}else if(R.isSpotLight){const W=n.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(L).multiplyScalar(D*b),W.distance=J,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[f]=W;const N=R.shadow;if(R.map&&(i.spotLightMap[E]=R.map,E++,N.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[f]=N.matrix,R.castShadow){const V=r.get(R);V.shadowBias=N.bias,V.shadowNormalBias=N.normalBias,V.shadowRadius=N.radius,V.shadowMapSize=N.mapSize,i.spotShadow[f]=V,i.spotShadowMap[f]=z,M++}f++}else if(R.isRectAreaLight){const W=n.get(R);W.color.copy(L).multiplyScalar(D),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[_]=W,_++}else if(R.isPointLight){const W=n.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*b),W.distance=R.distance,W.decay=R.decay,R.castShadow){const N=R.shadow,V=r.get(R);V.shadowBias=N.bias,V.shadowNormalBias=N.normalBias,V.shadowRadius=N.radius,V.shadowMapSize=N.mapSize,V.shadowCameraNear=N.camera.near,V.shadowCameraFar=N.camera.far,i.pointShadow[m]=V,i.pointShadowMap[m]=z,i.pointShadowMatrix[m]=R.shadow.matrix,S++}i.point[m]=W,m++}else if(R.isHemisphereLight){const W=n.get(R);W.skyColor.copy(R.color).multiplyScalar(D*b),W.groundColor.copy(R.groundColor).multiplyScalar(D*b),i.hemi[y]=W,y++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=g;const B=i.hash;(B.directionalLength!==v||B.pointLength!==m||B.spotLength!==f||B.rectAreaLength!==_||B.hemiLength!==y||B.numDirectionalShadows!==x||B.numPointShadows!==S||B.numSpotShadows!==M||B.numSpotMaps!==E||B.numLightProbes!==w)&&(i.directional.length=v,i.spot.length=f,i.rectArea.length=_,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,B.directionalLength=v,B.pointLength=m,B.spotLength=f,B.rectAreaLength=_,B.hemiLength=y,B.numDirectionalShadows=x,B.numPointShadows=S,B.numSpotShadows=M,B.numSpotMaps=E,B.numLightProbes=w,i.version=iP++)}function u(c,d){let h=0,p=0,g=0,v=0,m=0;const f=d.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){const x=c[_];if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),o.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(f),h++}else if(x.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(x.matrixWorld),o.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(f),g++}else if(x.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),s.identity(),a.copy(x.matrixWorld),a.premultiply(f),s.extractRotation(a),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),v++}else if(x.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:l,setupView:u,state:i}}function yv(t,e){const n=new aP(t,e),r=[],i=[];function o(){r.length=0,i.length=0}function a(d){r.push(d)}function s(d){i.push(d)}function l(d){n.setup(r,d)}function u(d){n.setupView(r,d)}return{init:o,state:{lightsArray:r,shadowsArray:i,lights:n},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:s}}function sP(t,e){let n=new WeakMap;function r(o,a=0){const s=n.get(o);let l;return s===void 0?(l=new yv(t,e),n.set(o,[l])):a>=s.length?(l=new yv(t,e),s.push(l)):l=s[a],l}function i(){n=new WeakMap}return{get:r,dispose:i}}class lP extends _a{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uP extends _a{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fP=`uniform sampler2D shadow_pass;
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
}`;function dP(t,e,n){let r=new lp;const i=new me,o=new me,a=new Vt,s=new lP({depthPacking:qw}),l=new uP,u={},c=n.maxTextureSize,d={[wi]:fn,[fn]:wi,[Dr]:Dr},h=new $r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:cP,fragmentShader:fP}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new On;g.setAttribute("position",new sr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new rr(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ky;let f=this.type;this.render=function(M,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const w=t.getRenderTarget(),b=t.getActiveCubeFace(),B=t.getActiveMipmapLevel(),k=t.state;k.setBlending(zr),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const te=f!==Cr&&this.type===Cr,R=f===Cr&&this.type!==Cr;for(let L=0,D=M.length;L<D;L++){const J=M[L],z=J.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const W=z.getFrameExtents();if(i.multiply(W),o.copy(z.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(o.x=Math.floor(c/W.x),i.x=o.x*W.x,z.mapSize.x=o.x),i.y>c&&(o.y=Math.floor(c/W.y),i.y=o.y*W.y,z.mapSize.y=o.y)),z.map===null||te===!0||R===!0){const V=this.type!==Cr?{minFilter:ln,magFilter:ln}:{};z.map!==null&&z.map.dispose(),z.map=new bi(i.x,i.y,V),z.map.texture.name=J.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const N=z.getViewportCount();for(let V=0;V<N;V++){const Y=z.getViewport(V);a.set(o.x*Y.x,o.y*Y.y,o.x*Y.z,o.y*Y.w),k.viewport(a),z.updateMatrices(J,V),r=z.getFrustum(),x(E,A,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===Cr&&_(z,A),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(w,b,B)};function _(M,E){const A=e.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new bi(i.x,i.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(E,null,A,h,v,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(E,null,A,p,v,null)}function y(M,E,A,w){let b=null;const B=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(B!==void 0)b=B;else if(b=A.isPointLight===!0?l:s,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const k=b.uuid,te=E.uuid;let R=u[k];R===void 0&&(R={},u[k]=R);let L=R[te];L===void 0&&(L=b.clone(),R[te]=L,E.addEventListener("dispose",S)),b=L}if(b.visible=E.visible,b.wireframe=E.wireframe,w===Cr?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:d[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,A.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const k=t.properties.get(b);k.light=A}return b}function x(M,E,A,w,b){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===Cr)&&(!M.frustumCulled||r.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const te=e.update(M),R=M.material;if(Array.isArray(R)){const L=te.groups;for(let D=0,J=L.length;D<J;D++){const z=L[D],W=R[z.materialIndex];if(W&&W.visible){const N=y(M,W,w,b);M.onBeforeShadow(t,M,E,A,te,N,z),t.renderBufferDirect(A,null,te,N,M,z),M.onAfterShadow(t,M,E,A,te,N,z)}}}else if(R.visible){const L=y(M,R,w,b);M.onBeforeShadow(t,M,E,A,te,L,null),t.renderBufferDirect(A,null,te,L,M,null),M.onAfterShadow(t,M,E,A,te,L,null)}}const k=M.children;for(let te=0,R=k.length;te<R;te++)x(k[te],E,A,w,b)}function S(M){M.target.removeEventListener("dispose",S);for(const A in u){const w=u[A],b=M.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}function hP(t,e,n){const r=n.isWebGL2;function i(){let U=!1;const fe=new Vt;let ge=null;const Ue=new Vt(0,0,0,0);return{setMask:function(De){ge!==De&&!U&&(t.colorMask(De,De,De,De),ge=De)},setLocked:function(De){U=De},setClear:function(De,Ye,Ke,Et,Tt){Tt===!0&&(De*=Et,Ye*=Et,Ke*=Et),fe.set(De,Ye,Ke,Et),Ue.equals(fe)===!1&&(t.clearColor(De,Ye,Ke,Et),Ue.copy(fe))},reset:function(){U=!1,ge=null,Ue.set(-1,0,0,0)}}}function o(){let U=!1,fe=null,ge=null,Ue=null;return{setTest:function(De){De?de(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(De){fe!==De&&!U&&(t.depthMask(De),fe=De)},setFunc:function(De){if(ge!==De){switch(De){case Ew:t.depthFunc(t.NEVER);break;case ww:t.depthFunc(t.ALWAYS);break;case bw:t.depthFunc(t.LESS);break;case wu:t.depthFunc(t.LEQUAL);break;case Tw:t.depthFunc(t.EQUAL);break;case Aw:t.depthFunc(t.GEQUAL);break;case Cw:t.depthFunc(t.GREATER);break;case Rw:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=De}},setLocked:function(De){U=De},setClear:function(De){Ue!==De&&(t.clearDepth(De),Ue=De)},reset:function(){U=!1,fe=null,ge=null,Ue=null}}}function a(){let U=!1,fe=null,ge=null,Ue=null,De=null,Ye=null,Ke=null,Et=null,Tt=null;return{setTest:function(rt){U||(rt?de(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(rt){fe!==rt&&!U&&(t.stencilMask(rt),fe=rt)},setFunc:function(rt,Rt,fr){(ge!==rt||Ue!==Rt||De!==fr)&&(t.stencilFunc(rt,Rt,fr),ge=rt,Ue=Rt,De=fr)},setOp:function(rt,Rt,fr){(Ye!==rt||Ke!==Rt||Et!==fr)&&(t.stencilOp(rt,Rt,fr),Ye=rt,Ke=Rt,Et=fr)},setLocked:function(rt){U=rt},setClear:function(rt){Tt!==rt&&(t.clearStencil(rt),Tt=rt)},reset:function(){U=!1,fe=null,ge=null,Ue=null,De=null,Ye=null,Ke=null,Et=null,Tt=null}}}const s=new i,l=new o,u=new a,c=new WeakMap,d=new WeakMap;let h={},p={},g=new WeakMap,v=[],m=null,f=!1,_=null,y=null,x=null,S=null,M=null,E=null,A=null,w=new et(0,0,0),b=0,B=!1,k=null,te=null,R=null,L=null,D=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,W=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(N)[1]),z=W>=1):N.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),z=W>=2);let V=null,Y={};const G=t.getParameter(t.SCISSOR_BOX),$=t.getParameter(t.VIEWPORT),q=new Vt().fromArray(G),re=new Vt().fromArray($);function F(U,fe,ge,Ue){const De=new Uint8Array(4),Ye=t.createTexture();t.bindTexture(U,Ye),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<ge;Ke++)r&&(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)?t.texImage3D(fe,0,t.RGBA,1,1,Ue,0,t.RGBA,t.UNSIGNED_BYTE,De):t.texImage2D(fe+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,De);return Ye}const ne={};ne[t.TEXTURE_2D]=F(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=F(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(ne[t.TEXTURE_2D_ARRAY]=F(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=F(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),u.setClear(0),de(t.DEPTH_TEST),l.setFunc(wu),Fe(!1),P(eg),de(t.CULL_FACE),ye(zr);function de(U){h[U]!==!0&&(t.enable(U),h[U]=!0)}function he(U){h[U]!==!1&&(t.disable(U),h[U]=!1)}function _e(U,fe){return p[U]!==fe?(t.bindFramebuffer(U,fe),p[U]=fe,r&&(U===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=fe),U===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=fe)),!0):!1}function j(U,fe){let ge=v,Ue=!1;if(U)if(ge=g.get(fe),ge===void 0&&(ge=[],g.set(fe,ge)),U.isWebGLMultipleRenderTargets){const De=U.texture;if(ge.length!==De.length||ge[0]!==t.COLOR_ATTACHMENT0){for(let Ye=0,Ke=De.length;Ye<Ke;Ye++)ge[Ye]=t.COLOR_ATTACHMENT0+Ye;ge.length=De.length,Ue=!0}}else ge[0]!==t.COLOR_ATTACHMENT0&&(ge[0]=t.COLOR_ATTACHMENT0,Ue=!0);else ge[0]!==t.BACK&&(ge[0]=t.BACK,Ue=!0);Ue&&(n.isWebGL2?t.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function pt(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const Me={[Bi]:t.FUNC_ADD,[lw]:t.FUNC_SUBTRACT,[uw]:t.FUNC_REVERSE_SUBTRACT};if(r)Me[ig]=t.MIN,Me[og]=t.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Me[ig]=U.MIN_EXT,Me[og]=U.MAX_EXT)}const Oe={[cw]:t.ZERO,[fw]:t.ONE,[dw]:t.SRC_COLOR,[Dd]:t.SRC_ALPHA,[_w]:t.SRC_ALPHA_SATURATE,[gw]:t.DST_COLOR,[pw]:t.DST_ALPHA,[hw]:t.ONE_MINUS_SRC_COLOR,[Nd]:t.ONE_MINUS_SRC_ALPHA,[vw]:t.ONE_MINUS_DST_COLOR,[mw]:t.ONE_MINUS_DST_ALPHA,[yw]:t.CONSTANT_COLOR,[xw]:t.ONE_MINUS_CONSTANT_COLOR,[Sw]:t.CONSTANT_ALPHA,[Mw]:t.ONE_MINUS_CONSTANT_ALPHA};function ye(U,fe,ge,Ue,De,Ye,Ke,Et,Tt,rt){if(U===zr){f===!0&&(he(t.BLEND),f=!1);return}if(f===!1&&(de(t.BLEND),f=!0),U!==sw){if(U!==_||rt!==B){if((y!==Bi||M!==Bi)&&(t.blendEquation(t.FUNC_ADD),y=Bi,M=Bi),rt)switch(U){case Jo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case tg:t.blendFunc(t.ONE,t.ONE);break;case ng:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case rg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Jo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case tg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case ng:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case rg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,S=null,E=null,A=null,w.set(0,0,0),b=0,_=U,B=rt}return}De=De||fe,Ye=Ye||ge,Ke=Ke||Ue,(fe!==y||De!==M)&&(t.blendEquationSeparate(Me[fe],Me[De]),y=fe,M=De),(ge!==x||Ue!==S||Ye!==E||Ke!==A)&&(t.blendFuncSeparate(Oe[ge],Oe[Ue],Oe[Ye],Oe[Ke]),x=ge,S=Ue,E=Ye,A=Ke),(Et.equals(w)===!1||Tt!==b)&&(t.blendColor(Et.r,Et.g,Et.b,Tt),w.copy(Et),b=Tt),_=U,B=!1}function Je(U,fe){U.side===Dr?he(t.CULL_FACE):de(t.CULL_FACE);let ge=U.side===fn;fe&&(ge=!ge),Fe(ge),U.blending===Jo&&U.transparent===!1?ye(zr):ye(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),s.setMask(U.colorWrite);const Ue=U.stencilWrite;u.setTest(Ue),Ue&&(u.setMask(U.stencilWriteMask),u.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),u.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),K(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(U){k!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),k=U)}function P(U){U!==iw?(de(t.CULL_FACE),U!==te&&(U===eg?t.cullFace(t.BACK):U===ow?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),te=U}function T(U){U!==R&&(z&&t.lineWidth(U),R=U)}function K(U,fe,ge){U?(de(t.POLYGON_OFFSET_FILL),(L!==fe||D!==ge)&&(t.polygonOffset(fe,ge),L=fe,D=ge)):he(t.POLYGON_OFFSET_FILL)}function le(U){U?de(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function oe(U){U===void 0&&(U=t.TEXTURE0+J-1),V!==U&&(t.activeTexture(U),V=U)}function ue(U,fe,ge){ge===void 0&&(V===null?ge=t.TEXTURE0+J-1:ge=V);let Ue=Y[ge];Ue===void 0&&(Ue={type:void 0,texture:void 0},Y[ge]=Ue),(Ue.type!==U||Ue.texture!==fe)&&(V!==ge&&(t.activeTexture(ge),V=ge),t.bindTexture(U,fe||ne[U]),Ue.type=U,Ue.texture=fe)}function Ae(){const U=Y[V];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ve(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ge(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function je(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(U){q.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),q.copy(U))}function ce(U){re.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),re.copy(U))}function Ce(U,fe){let ge=d.get(fe);ge===void 0&&(ge=new WeakMap,d.set(fe,ge));let Ue=ge.get(U);Ue===void 0&&(Ue=t.getUniformBlockIndex(fe,U.name),ge.set(U,Ue))}function we(U,fe){const Ue=d.get(fe).get(U);c.get(fe)!==Ue&&(t.uniformBlockBinding(fe,Ue,U.__bindingPointIndex),c.set(fe,Ue))}function ae(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),r===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},V=null,Y={},p={},g=new WeakMap,v=[],m=null,f=!1,_=null,y=null,x=null,S=null,M=null,E=null,A=null,w=new et(0,0,0),b=0,B=!1,k=null,te=null,R=null,L=null,D=null,q.set(0,0,t.canvas.width,t.canvas.height),re.set(0,0,t.canvas.width,t.canvas.height),s.reset(),l.reset(),u.reset()}return{buffers:{color:s,depth:l,stencil:u},enable:de,disable:he,bindFramebuffer:_e,drawBuffers:j,useProgram:pt,setBlending:ye,setMaterial:Je,setFlipSided:Fe,setCullFace:P,setLineWidth:T,setPolygonOffset:K,setScissorTest:le,activeTexture:oe,bindTexture:ue,unbindTexture:Ae,compressedTexImage2D:ve,compressedTexImage3D:be,texImage2D:Le,texImage3D:xe,updateUBOMapping:Ce,uniformBlockBinding:we,texStorage2D:je,texStorage3D:ze,texSubImage2D:Ne,texSubImage3D:Ge,compressedTexSubImage2D:ie,compressedTexSubImage3D:ot,scissor:O,viewport:ce,reset:ae}}function pP(t,e,n,r,i,o,a){const s=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return p?new OffscreenCanvas(P,T):Ps("canvas")}function v(P,T,K,le){let oe=1;if((P.width>le||P.height>le)&&(oe=le/Math.max(P.width,P.height)),oe<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ue=T?Ru:Math.floor,Ae=ue(oe*P.width),ve=ue(oe*P.height);d===void 0&&(d=g(Ae,ve));const be=K?g(Ae,ve):d;return be.width=Ae,be.height=ve,be.getContext("2d").drawImage(P,0,0,Ae,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ae+"x"+ve+")."),be}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function m(P){return Bd(P.width)&&Bd(P.height)}function f(P){return s?!1:P.wrapS!==tr||P.wrapT!==tr||P.minFilter!==ln&&P.minFilter!==kn}function _(P,T){return P.generateMipmaps&&T&&P.minFilter!==ln&&P.minFilter!==kn}function y(P){t.generateMipmap(P)}function x(P,T,K,le,oe=!1){if(s===!1)return T;if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=T;if(T===t.RED&&(K===t.FLOAT&&(ue=t.R32F),K===t.HALF_FLOAT&&(ue=t.R16F),K===t.UNSIGNED_BYTE&&(ue=t.R8)),T===t.RED_INTEGER&&(K===t.UNSIGNED_BYTE&&(ue=t.R8UI),K===t.UNSIGNED_SHORT&&(ue=t.R16UI),K===t.UNSIGNED_INT&&(ue=t.R32UI),K===t.BYTE&&(ue=t.R8I),K===t.SHORT&&(ue=t.R16I),K===t.INT&&(ue=t.R32I)),T===t.RG&&(K===t.FLOAT&&(ue=t.RG32F),K===t.HALF_FLOAT&&(ue=t.RG16F),K===t.UNSIGNED_BYTE&&(ue=t.RG8)),T===t.RGBA){const Ae=oe?bu:st.getTransfer(le);K===t.FLOAT&&(ue=t.RGBA32F),K===t.HALF_FLOAT&&(ue=t.RGBA16F),K===t.UNSIGNED_BYTE&&(ue=Ae===dt?t.SRGB8_ALPHA8:t.RGBA8),K===t.UNSIGNED_SHORT_4_4_4_4&&(ue=t.RGBA4),K===t.UNSIGNED_SHORT_5_5_5_1&&(ue=t.RGB5_A1)}return(ue===t.R16F||ue===t.R32F||ue===t.RG16F||ue===t.RG32F||ue===t.RGBA16F||ue===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function S(P,T,K){return _(P,K)===!0||P.isFramebufferTexture&&P.minFilter!==ln&&P.minFilter!==kn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function M(P){return P===ln||P===ag||P===Gc?t.NEAREST:t.LINEAR}function E(P){const T=P.target;T.removeEventListener("dispose",E),w(T),T.isVideoTexture&&c.delete(T)}function A(P){const T=P.target;T.removeEventListener("dispose",A),B(T)}function w(P){const T=r.get(P);if(T.__webglInit===void 0)return;const K=P.source,le=h.get(K);if(le){const oe=le[T.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&b(P),Object.keys(le).length===0&&h.delete(K)}r.remove(P)}function b(P){const T=r.get(P);t.deleteTexture(T.__webglTexture);const K=P.source,le=h.get(K);delete le[T.__cacheKey],a.memory.textures--}function B(P){const T=P.texture,K=r.get(P),le=r.get(T);if(le.__webglTexture!==void 0&&(t.deleteTexture(le.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(K.__webglFramebuffer[oe]))for(let ue=0;ue<K.__webglFramebuffer[oe].length;ue++)t.deleteFramebuffer(K.__webglFramebuffer[oe][ue]);else t.deleteFramebuffer(K.__webglFramebuffer[oe]);K.__webglDepthbuffer&&t.deleteRenderbuffer(K.__webglDepthbuffer[oe])}else{if(Array.isArray(K.__webglFramebuffer))for(let oe=0;oe<K.__webglFramebuffer.length;oe++)t.deleteFramebuffer(K.__webglFramebuffer[oe]);else t.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&t.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&t.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let oe=0;oe<K.__webglColorRenderbuffer.length;oe++)K.__webglColorRenderbuffer[oe]&&t.deleteRenderbuffer(K.__webglColorRenderbuffer[oe]);K.__webglDepthRenderbuffer&&t.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let oe=0,ue=T.length;oe<ue;oe++){const Ae=r.get(T[oe]);Ae.__webglTexture&&(t.deleteTexture(Ae.__webglTexture),a.memory.textures--),r.remove(T[oe])}r.remove(T),r.remove(P)}let k=0;function te(){k=0}function R(){const P=k;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),k+=1,P}function L(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function D(P,T){const K=r.get(P);if(P.isVideoTexture&&Je(P),P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){const le=P.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(K,P,T);return}}n.bindTexture(t.TEXTURE_2D,K.__webglTexture,t.TEXTURE0+T)}function J(P,T){const K=r.get(P);if(P.version>0&&K.__version!==P.version){q(K,P,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,K.__webglTexture,t.TEXTURE0+T)}function z(P,T){const K=r.get(P);if(P.version>0&&K.__version!==P.version){q(K,P,T);return}n.bindTexture(t.TEXTURE_3D,K.__webglTexture,t.TEXTURE0+T)}function W(P,T){const K=r.get(P);if(P.version>0&&K.__version!==P.version){re(K,P,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture,t.TEXTURE0+T)}const N={[kd]:t.REPEAT,[tr]:t.CLAMP_TO_EDGE,[Fd]:t.MIRRORED_REPEAT},V={[ln]:t.NEAREST,[ag]:t.NEAREST_MIPMAP_NEAREST,[Gc]:t.NEAREST_MIPMAP_LINEAR,[kn]:t.LINEAR,[Fw]:t.LINEAR_MIPMAP_NEAREST,[Cs]:t.LINEAR_MIPMAP_LINEAR},Y={[Kw]:t.NEVER,[nb]:t.ALWAYS,[Zw]:t.LESS,[sx]:t.LEQUAL,[Qw]:t.EQUAL,[tb]:t.GEQUAL,[Jw]:t.GREATER,[eb]:t.NOTEQUAL};function G(P,T,K){if(K?(t.texParameteri(P,t.TEXTURE_WRAP_S,N[T.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,N[T.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,N[T.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,V[T.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,V[T.minFilter])):(t.texParameteri(P,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(P,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(T.wrapS!==tr||T.wrapT!==tr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(P,t.TEXTURE_MAG_FILTER,M(T.magFilter)),t.texParameteri(P,t.TEXTURE_MIN_FILTER,M(T.minFilter)),T.minFilter!==ln&&T.minFilter!==kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Y[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===ln||T.minFilter!==Gc&&T.minFilter!==Cs||T.type===fi&&e.has("OES_texture_float_linear")===!1||s===!1&&T.type===ca&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||r.get(T).__currentAnisotropy)&&(t.texParameterf(P,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy)}}function $(P,T){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",E));const le=T.source;let oe=h.get(le);oe===void 0&&(oe={},h.set(le,oe));const ue=L(T);if(ue!==P.__cacheKey){oe[ue]===void 0&&(oe[ue]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,K=!0),oe[ue].usedTimes++;const Ae=oe[P.__cacheKey];Ae!==void 0&&(oe[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&b(T)),P.__cacheKey=ue,P.__webglTexture=oe[ue].texture}return K}function q(P,T,K){let le=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(le=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(le=t.TEXTURE_3D);const oe=$(P,T),ue=T.source;n.bindTexture(le,P.__webglTexture,t.TEXTURE0+K);const Ae=r.get(ue);if(ue.version!==Ae.__version||oe===!0){n.activeTexture(t.TEXTURE0+K);const ve=st.getPrimaries(st.workingColorSpace),be=T.colorSpace===zn?null:st.getPrimaries(T.colorSpace),Ne=T.colorSpace===zn||ve===be?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Ge=f(T)&&m(T.image)===!1;let ie=v(T.image,Ge,!1,i.maxTextureSize);ie=Fe(T,ie);const ot=m(ie)||s,je=o.convert(T.format,T.colorSpace);let ze=o.convert(T.type),Le=x(T.internalFormat,je,ze,T.colorSpace,T.isVideoTexture);G(le,T,ot);let xe;const O=T.mipmaps,ce=s&&T.isVideoTexture!==!0&&Le!==ix,Ce=Ae.__version===void 0||oe===!0,we=S(T,ie,ot);if(T.isDepthTexture)Le=t.DEPTH_COMPONENT,s?T.type===fi?Le=t.DEPTH_COMPONENT32F:T.type===ci?Le=t.DEPTH_COMPONENT24:T.type===qi?Le=t.DEPTH24_STENCIL8:Le=t.DEPTH_COMPONENT16:T.type===fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Yi&&Le===t.DEPTH_COMPONENT&&T.type!==rp&&T.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=ci,ze=o.convert(T.type)),T.format===fa&&Le===t.DEPTH_COMPONENT&&(Le=t.DEPTH_STENCIL,T.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=qi,ze=o.convert(T.type))),Ce&&(ce?n.texStorage2D(t.TEXTURE_2D,1,Le,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Le,ie.width,ie.height,0,je,ze,null));else if(T.isDataTexture)if(O.length>0&&ot){ce&&Ce&&n.texStorage2D(t.TEXTURE_2D,we,Le,O[0].width,O[0].height);for(let ae=0,U=O.length;ae<U;ae++)xe=O[ae],ce?n.texSubImage2D(t.TEXTURE_2D,ae,0,0,xe.width,xe.height,je,ze,xe.data):n.texImage2D(t.TEXTURE_2D,ae,Le,xe.width,xe.height,0,je,ze,xe.data);T.generateMipmaps=!1}else ce?(Ce&&n.texStorage2D(t.TEXTURE_2D,we,Le,ie.width,ie.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,je,ze,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Le,ie.width,ie.height,0,je,ze,ie.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ce&&Ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,we,Le,O[0].width,O[0].height,ie.depth);for(let ae=0,U=O.length;ae<U;ae++)xe=O[ae],T.format!==nr?je!==null?ce?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,ie.depth,je,xe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ae,Le,xe.width,xe.height,ie.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,ie.depth,je,ze,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ae,Le,xe.width,xe.height,ie.depth,0,je,ze,xe.data)}else{ce&&Ce&&n.texStorage2D(t.TEXTURE_2D,we,Le,O[0].width,O[0].height);for(let ae=0,U=O.length;ae<U;ae++)xe=O[ae],T.format!==nr?je!==null?ce?n.compressedTexSubImage2D(t.TEXTURE_2D,ae,0,0,xe.width,xe.height,je,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,ae,Le,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?n.texSubImage2D(t.TEXTURE_2D,ae,0,0,xe.width,xe.height,je,ze,xe.data):n.texImage2D(t.TEXTURE_2D,ae,Le,xe.width,xe.height,0,je,ze,xe.data)}else if(T.isDataArrayTexture)ce?(Ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,we,Le,ie.width,ie.height,ie.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,je,ze,ie.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,ie.width,ie.height,ie.depth,0,je,ze,ie.data);else if(T.isData3DTexture)ce?(Ce&&n.texStorage3D(t.TEXTURE_3D,we,Le,ie.width,ie.height,ie.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,je,ze,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Le,ie.width,ie.height,ie.depth,0,je,ze,ie.data);else if(T.isFramebufferTexture){if(Ce)if(ce)n.texStorage2D(t.TEXTURE_2D,we,Le,ie.width,ie.height);else{let ae=ie.width,U=ie.height;for(let fe=0;fe<we;fe++)n.texImage2D(t.TEXTURE_2D,fe,Le,ae,U,0,je,ze,null),ae>>=1,U>>=1}}else if(O.length>0&&ot){ce&&Ce&&n.texStorage2D(t.TEXTURE_2D,we,Le,O[0].width,O[0].height);for(let ae=0,U=O.length;ae<U;ae++)xe=O[ae],ce?n.texSubImage2D(t.TEXTURE_2D,ae,0,0,je,ze,xe):n.texImage2D(t.TEXTURE_2D,ae,Le,je,ze,xe);T.generateMipmaps=!1}else ce?(Ce&&n.texStorage2D(t.TEXTURE_2D,we,Le,ie.width,ie.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,je,ze,ie)):n.texImage2D(t.TEXTURE_2D,0,Le,je,ze,ie);_(T,ot)&&y(le),Ae.__version=ue.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function re(P,T,K){if(T.image.length!==6)return;const le=$(P,T),oe=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+K);const ue=r.get(oe);if(oe.version!==ue.__version||le===!0){n.activeTexture(t.TEXTURE0+K);const Ae=st.getPrimaries(st.workingColorSpace),ve=T.colorSpace===zn?null:st.getPrimaries(T.colorSpace),be=T.colorSpace===zn||Ae===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ne=T.isCompressedTexture||T.image[0].isCompressedTexture,Ge=T.image[0]&&T.image[0].isDataTexture,ie=[];for(let ae=0;ae<6;ae++)!Ne&&!Ge?ie[ae]=v(T.image[ae],!1,!0,i.maxCubemapSize):ie[ae]=Ge?T.image[ae].image:T.image[ae],ie[ae]=Fe(T,ie[ae]);const ot=ie[0],je=m(ot)||s,ze=o.convert(T.format,T.colorSpace),Le=o.convert(T.type),xe=x(T.internalFormat,ze,Le,T.colorSpace),O=s&&T.isVideoTexture!==!0,ce=ue.__version===void 0||le===!0;let Ce=S(T,ot,je);G(t.TEXTURE_CUBE_MAP,T,je);let we;if(Ne){O&&ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,xe,ot.width,ot.height);for(let ae=0;ae<6;ae++){we=ie[ae].mipmaps;for(let U=0;U<we.length;U++){const fe=we[U];T.format!==nr?ze!==null?O?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,U,0,0,fe.width,fe.height,ze,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,U,xe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,U,0,0,fe.width,fe.height,ze,Le,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,U,xe,fe.width,fe.height,0,ze,Le,fe.data)}}}else{we=T.mipmaps,O&&ce&&(we.length>0&&Ce++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,xe,ie[0].width,ie[0].height));for(let ae=0;ae<6;ae++)if(Ge){O?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ie[ae].width,ie[ae].height,ze,Le,ie[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,xe,ie[ae].width,ie[ae].height,0,ze,Le,ie[ae].data);for(let U=0;U<we.length;U++){const ge=we[U].image[ae].image;O?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,U+1,0,0,ge.width,ge.height,ze,Le,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,U+1,xe,ge.width,ge.height,0,ze,Le,ge.data)}}else{O?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ze,Le,ie[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,xe,ze,Le,ie[ae]);for(let U=0;U<we.length;U++){const fe=we[U];O?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,U+1,0,0,ze,Le,fe.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,U+1,xe,ze,Le,fe.image[ae])}}}_(T,je)&&y(t.TEXTURE_CUBE_MAP),ue.__version=oe.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function F(P,T,K,le,oe,ue){const Ae=o.convert(K.format,K.colorSpace),ve=o.convert(K.type),be=x(K.internalFormat,Ae,ve,K.colorSpace);if(!r.get(T).__hasExternalTextures){const Ge=Math.max(1,T.width>>ue),ie=Math.max(1,T.height>>ue);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,ue,be,Ge,ie,T.depth,0,Ae,ve,null):n.texImage2D(oe,ue,be,Ge,ie,0,Ae,ve,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),ye(T)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,oe,r.get(K).__webglTexture,0,Oe(T)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,le,oe,r.get(K).__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ne(P,T,K){if(t.bindRenderbuffer(t.RENDERBUFFER,P),T.depthBuffer&&!T.stencilBuffer){let le=s===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(K||ye(T)){const oe=T.depthTexture;oe&&oe.isDepthTexture&&(oe.type===fi?le=t.DEPTH_COMPONENT32F:oe.type===ci&&(le=t.DEPTH_COMPONENT24));const ue=Oe(T);ye(T)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,le,T.width,T.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,le,T.width,T.height)}else t.renderbufferStorage(t.RENDERBUFFER,le,T.width,T.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,P)}else if(T.depthBuffer&&T.stencilBuffer){const le=Oe(T);K&&ye(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,t.DEPTH24_STENCIL8,T.width,T.height):ye(T)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,t.DEPTH24_STENCIL8,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,P)}else{const le=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let oe=0;oe<le.length;oe++){const ue=le[oe],Ae=o.convert(ue.format,ue.colorSpace),ve=o.convert(ue.type),be=x(ue.internalFormat,Ae,ve,ue.colorSpace),Ne=Oe(T);K&&ye(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,be,T.width,T.height):ye(T)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ne,be,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,be,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),D(T.depthTexture,0);const le=r.get(T.depthTexture).__webglTexture,oe=Oe(T);if(T.depthTexture.format===Yi)ye(T)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0);else if(T.depthTexture.format===fa)ye(T)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function he(P){const T=r.get(P),K=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");de(T.__webglFramebuffer,P)}else if(K){T.__webglDepthbuffer=[];for(let le=0;le<6;le++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[le]),T.__webglDepthbuffer[le]=t.createRenderbuffer(),ne(T.__webglDepthbuffer[le],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),ne(T.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function _e(P,T,K){const le=r.get(P);T!==void 0&&F(le.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),K!==void 0&&he(P)}function j(P){const T=P.texture,K=r.get(P),le=r.get(T);P.addEventListener("dispose",A),P.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture()),le.__version=T.version,a.memory.textures++);const oe=P.isWebGLCubeRenderTarget===!0,ue=P.isWebGLMultipleRenderTargets===!0,Ae=m(P)||s;if(oe){K.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(s&&T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[ve]=[];for(let be=0;be<T.mipmaps.length;be++)K.__webglFramebuffer[ve][be]=t.createFramebuffer()}else K.__webglFramebuffer[ve]=t.createFramebuffer()}else{if(s&&T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let ve=0;ve<T.mipmaps.length;ve++)K.__webglFramebuffer[ve]=t.createFramebuffer()}else K.__webglFramebuffer=t.createFramebuffer();if(ue)if(i.drawBuffers){const ve=P.texture;for(let be=0,Ne=ve.length;be<Ne;be++){const Ge=r.get(ve[be]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&P.samples>0&&ye(P)===!1){const ve=ue?T:[T];K.__webglMultisampledFramebuffer=t.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let be=0;be<ve.length;be++){const Ne=ve[be];K.__webglColorRenderbuffer[be]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,K.__webglColorRenderbuffer[be]);const Ge=o.convert(Ne.format,Ne.colorSpace),ie=o.convert(Ne.type),ot=x(Ne.internalFormat,Ge,ie,Ne.colorSpace,P.isXRRenderTarget===!0),je=Oe(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,je,ot,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,K.__webglColorRenderbuffer[be])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=t.createRenderbuffer(),ne(K.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,le.__webglTexture),G(t.TEXTURE_CUBE_MAP,T,Ae);for(let ve=0;ve<6;ve++)if(s&&T.mipmaps&&T.mipmaps.length>0)for(let be=0;be<T.mipmaps.length;be++)F(K.__webglFramebuffer[ve][be],P,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,be);else F(K.__webglFramebuffer[ve],P,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);_(T,Ae)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){const ve=P.texture;for(let be=0,Ne=ve.length;be<Ne;be++){const Ge=ve[be],ie=r.get(Ge);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),G(t.TEXTURE_2D,Ge,Ae),F(K.__webglFramebuffer,P,Ge,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,0),_(Ge,Ae)&&y(t.TEXTURE_2D)}n.unbindTexture()}else{let ve=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(s?ve=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ve,le.__webglTexture),G(ve,T,Ae),s&&T.mipmaps&&T.mipmaps.length>0)for(let be=0;be<T.mipmaps.length;be++)F(K.__webglFramebuffer[be],P,T,t.COLOR_ATTACHMENT0,ve,be);else F(K.__webglFramebuffer,P,T,t.COLOR_ATTACHMENT0,ve,0);_(T,Ae)&&y(ve),n.unbindTexture()}P.depthBuffer&&he(P)}function pt(P){const T=m(P)||s,K=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let le=0,oe=K.length;le<oe;le++){const ue=K[le];if(_(ue,T)){const Ae=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ve=r.get(ue).__webglTexture;n.bindTexture(Ae,ve),y(Ae),n.unbindTexture()}}}function Me(P){if(s&&P.samples>0&&ye(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],K=P.width,le=P.height;let oe=t.COLOR_BUFFER_BIT;const ue=[],Ae=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=r.get(P),be=P.isWebGLMultipleRenderTargets===!0;if(be)for(let Ne=0;Ne<T.length;Ne++)n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){ue.push(t.COLOR_ATTACHMENT0+Ne),P.depthBuffer&&ue.push(Ae);const Ge=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(Ge===!1&&(P.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),be&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ve.__webglColorRenderbuffer[Ne]),Ge===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ae]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ae])),be){const ie=r.get(T[Ne]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ie,0)}t.blitFramebuffer(0,0,K,le,0,0,K,le,oe,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ue)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),be)for(let Ne=0;Ne<T.length;Ne++){n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.RENDERBUFFER,ve.__webglColorRenderbuffer[Ne]);const Ge=r.get(T[Ne]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.TEXTURE_2D,Ge,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function Oe(P){return Math.min(i.maxSamples,P.samples)}function ye(P){const T=r.get(P);return s&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Je(P){const T=a.render.frame;c.get(P)!==T&&(c.set(P,T),P.update())}function Fe(P,T){const K=P.colorSpace,le=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===zd||K!==jr&&K!==zn&&(st.getTransfer(K)===dt?s===!1?e.has("EXT_sRGB")===!0&&le===nr?(P.format=zd,P.minFilter=kn,P.generateMipmaps=!1):T=ux.sRGBToLinear(T):(le!==nr||oe!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}this.allocateTextureUnit=R,this.resetTextureUnits=te,this.setTexture2D=D,this.setTexture2DArray=J,this.setTexture3D=z,this.setTextureCube=W,this.rebindTextures=_e,this.setupRenderTarget=j,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=F,this.useMultisampledRTT=ye}function mP(t,e,n){const r=n.isWebGL2;function i(o,a=zn){let s;const l=st.getTransfer(a);if(o===Si)return t.UNSIGNED_BYTE;if(o===Jy)return t.UNSIGNED_SHORT_4_4_4_4;if(o===ex)return t.UNSIGNED_SHORT_5_5_5_1;if(o===zw)return t.BYTE;if(o===Bw)return t.SHORT;if(o===rp)return t.UNSIGNED_SHORT;if(o===Qy)return t.INT;if(o===ci)return t.UNSIGNED_INT;if(o===fi)return t.FLOAT;if(o===ca)return r?t.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(o===Hw)return t.ALPHA;if(o===nr)return t.RGBA;if(o===Gw)return t.LUMINANCE;if(o===Vw)return t.LUMINANCE_ALPHA;if(o===Yi)return t.DEPTH_COMPONENT;if(o===fa)return t.DEPTH_STENCIL;if(o===zd)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(o===Ww)return t.RED;if(o===tx)return t.RED_INTEGER;if(o===jw)return t.RG;if(o===nx)return t.RG_INTEGER;if(o===rx)return t.RGBA_INTEGER;if(o===Vc||o===Wc||o===jc||o===$c)if(l===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(o===Vc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===jc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===$c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(o===Vc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Wc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===jc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===$c)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===sg||o===lg||o===ug||o===cg)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(o===sg)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===lg)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===ug)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===cg)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===ix)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===fg||o===dg)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(o===fg)return l===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(o===dg)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===hg||o===pg||o===mg||o===gg||o===vg||o===_g||o===yg||o===xg||o===Sg||o===Mg||o===Eg||o===wg||o===bg||o===Tg)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(o===hg)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===pg)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===mg)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===gg)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===vg)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===_g)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===yg)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===xg)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Sg)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Mg)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Eg)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===wg)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===bg)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Tg)return l===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Xc||o===Ag||o===Cg)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(o===Xc)return l===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Ag)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Cg)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===$w||o===Rg||o===Pg||o===Lg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(o===Xc)return s.COMPRESSED_RED_RGTC1_EXT;if(o===Rg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Pg)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Lg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===qi?r?t.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:i}}class gP extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Wo=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const vP={type:"move"};class vf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let i=null,o=null,a=null;const s=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,r),f=this._getHandJoint(u,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,g=.005;u.inputState.pinching&&h>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,r),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=n.getPose(e.targetRaySpace,r),i===null&&o!==null&&(i=o),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(vP)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Wo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class _P extends cr{constructor(e,n){super();const r=this;let i=null,o=1,a=null,s="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,g=null;const v=n.getContextAttributes();let m=null,f=null;const _=[],y=[],x=new me;let S=null;const M=new Fn;M.layers.enable(1),M.viewport=new Vt;const E=new Fn;E.layers.enable(2),E.viewport=new Vt;const A=[M,E],w=new gP;w.layers.enable(1),w.layers.enable(2);let b=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=_[G];return $===void 0&&($=new vf,_[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=_[G];return $===void 0&&($=new vf,_[G]=$),$.getGripSpace()},this.getHand=function(G){let $=_[G];return $===void 0&&($=new vf,_[G]=$),$.getHandSpace()};function k(G){const $=y.indexOf(G.inputSource);if($===-1)return;const q=_[$];q!==void 0&&(q.update(G.inputSource,G.frame,u||a),q.dispatchEvent({type:G.type,data:G.inputSource}))}function te(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",te),i.removeEventListener("inputsourceschange",R);for(let G=0;G<_.length;G++){const $=y[G];$!==null&&(y[G]=null,_[G].disconnect($))}b=null,B=null,e.setRenderTarget(m),p=null,h=null,d=null,i=null,f=null,Y.stop(),r.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){o=G,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){s=G,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",te),i.addEventListener("inputsourceschange",R),v.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(i,n,$),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new bi(p.framebufferWidth,p.framebufferHeight,{format:nr,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let $=null,q=null,re=null;v.depth&&(re=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,$=v.stencil?fa:Yi,q=v.stencil?qi:ci);const F={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:o};d=new XRWebGLBinding(i,n),h=d.createProjectionLayer(F),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new bi(h.textureWidth,h.textureHeight,{format:nr,type:Si,depthTexture:new xx(h.textureWidth,h.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const ne=e.properties.get(f);ne.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await i.requestReferenceSpace(s),Y.setContext(i),Y.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function R(G){for(let $=0;$<G.removed.length;$++){const q=G.removed[$],re=y.indexOf(q);re>=0&&(y[re]=null,_[re].disconnect(q))}for(let $=0;$<G.added.length;$++){const q=G.added[$];let re=y.indexOf(q);if(re===-1){for(let ne=0;ne<_.length;ne++)if(ne>=y.length){y.push(q),re=ne;break}else if(y[ne]===null){y[ne]=q,re=ne;break}if(re===-1)break}const F=_[re];F&&F.connect(q)}}const L=new I,D=new I;function J(G,$,q){L.setFromMatrixPosition($.matrixWorld),D.setFromMatrixPosition(q.matrixWorld);const re=L.distanceTo(D),F=$.projectionMatrix.elements,ne=q.projectionMatrix.elements,de=F[14]/(F[10]-1),he=F[14]/(F[10]+1),_e=(F[9]+1)/F[5],j=(F[9]-1)/F[5],pt=(F[8]-1)/F[0],Me=(ne[8]+1)/ne[0],Oe=de*pt,ye=de*Me,Je=re/(-pt+Me),Fe=Je*-pt;$.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Fe),G.translateZ(Je),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const P=de+Je,T=he+Je,K=Oe-Fe,le=ye+(re-Fe),oe=_e*he/T*P,ue=j*he/T*P;G.projectionMatrix.makePerspective(K,le,oe,ue,P,T),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function z(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;w.near=E.near=M.near=G.near,w.far=E.far=M.far=G.far,(b!==w.near||B!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),b=w.near,B=w.far);const $=G.parent,q=w.cameras;z(w,$);for(let re=0;re<q.length;re++)z(q[re],$);q.length===2?J(w,M,E):w.projectionMatrix.copy(M.projectionMatrix),W(G,w,$)};function W(G,$,q){q===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(q.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Rs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let N=null;function V(G,$){if(c=$.getViewerPose(u||a),g=$,c!==null){const q=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let re=!1;q.length!==w.cameras.length&&(w.cameras.length=0,re=!0);for(let F=0;F<q.length;F++){const ne=q[F];let de=null;if(p!==null)de=p.getViewport(ne);else{const _e=d.getViewSubImage(h,ne);de=_e.viewport,F===0&&(e.setRenderTargetTextures(f,_e.colorTexture,h.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(f))}let he=A[F];he===void 0&&(he=new Fn,he.layers.enable(F),he.viewport=new Vt,A[F]=he),he.matrix.fromArray(ne.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ne.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(de.x,de.y,de.width,de.height),F===0&&(w.matrix.copy(he.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),re===!0&&w.cameras.push(he)}}for(let q=0;q<_.length;q++){const re=y[q],F=_[q];re!==null&&F!==void 0&&F.update(re,$,u||a)}N&&N(G,$),$.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:$}),g=null}const Y=new yx;Y.setAnimationLoop(V),this.setAnimationLoop=function(G){N=G},this.dispose=function(){}}}function yP(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function r(m,f){f.color.getRGB(m.fogColor.value,mx(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,_,y,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(m,f):f.isMeshToonMaterial?(o(m,f),d(m,f)):f.isMeshPhongMaterial?(o(m,f),c(m,f)):f.isMeshStandardMaterial?(o(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(o(m,f),g(m,f)):f.isMeshDepthMaterial?o(m,f):f.isMeshDistanceMaterial?(o(m,f),v(m,f)):f.isMeshNormalMaterial?o(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&s(m,f)):f.isPointsMaterial?l(m,f,_,y):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===fn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===fn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const y=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y,n(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function s(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=y*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===fn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function xP(t,e,n,r){let i={},o={},a=[];const s=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,y){const x=y.program;r.uniformBlockBinding(_,x)}function u(_,y){let x=i[_.id];x===void 0&&(g(_),x=c(_),i[_.id]=x,_.addEventListener("dispose",m));const S=y.program;r.updateUBOMapping(_,S);const M=e.render.frame;o[_.id]!==M&&(h(_),o[_.id]=M)}function c(_){const y=d();_.__bindingPointIndex=y;const x=t.createBuffer(),S=_.__size,M=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,S,M),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,x),x}function d(){for(let _=0;_<s;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const y=i[_.id],x=_.uniforms,S=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let M=0,E=x.length;M<E;M++){const A=Array.isArray(x[M])?x[M]:[x[M]];for(let w=0,b=A.length;w<b;w++){const B=A[w];if(p(B,M,w,S)===!0){const k=B.__offset,te=Array.isArray(B.value)?B.value:[B.value];let R=0;for(let L=0;L<te.length;L++){const D=te[L],J=v(D);typeof D=="number"||typeof D=="boolean"?(B.__data[0]=D,t.bufferSubData(t.UNIFORM_BUFFER,k+R,B.__data)):D.isMatrix3?(B.__data[0]=D.elements[0],B.__data[1]=D.elements[1],B.__data[2]=D.elements[2],B.__data[3]=0,B.__data[4]=D.elements[3],B.__data[5]=D.elements[4],B.__data[6]=D.elements[5],B.__data[7]=0,B.__data[8]=D.elements[6],B.__data[9]=D.elements[7],B.__data[10]=D.elements[8],B.__data[11]=0):(D.toArray(B.__data,R),R+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,B.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,y,x,S){const M=_.value,E=y+"_"+x;if(S[E]===void 0)return typeof M=="number"||typeof M=="boolean"?S[E]=M:S[E]=M.clone(),!0;{const A=S[E];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return S[E]=M,!0}else if(A.equals(M)===!1)return A.copy(M),!0}return!1}function g(_){const y=_.uniforms;let x=0;const S=16;for(let E=0,A=y.length;E<A;E++){const w=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,B=w.length;b<B;b++){const k=w[b],te=Array.isArray(k.value)?k.value:[k.value];for(let R=0,L=te.length;R<L;R++){const D=te[R],J=v(D),z=x%S;z!==0&&S-z<J.boundary&&(x+=S-z),k.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=J.storage}}}const M=x%S;return M>0&&(x+=S-M),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),t.deleteBuffer(i[y.id]),delete i[y.id],delete o[y.id]}function f(){for(const _ in i)t.deleteBuffer(i[_]);a=[],i={},o={}}return{bind:l,update:u,dispose:f}}class Tx{constructor(e={}){const{canvas:n=vb(),context:r=null,depth:i=!0,stencil:o=!0,alpha:a=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;r!==null?h=r.getContextAttributes().alpha:h=a;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ht,this._useLegacyLights=!1,this.toneMapping=xi,this.toneMappingExposure=1;const y=this;let x=!1,S=0,M=0,E=null,A=-1,w=null;const b=new Vt,B=new Vt;let k=null;const te=new et(0);let R=0,L=n.width,D=n.height,J=1,z=null,W=null;const N=new Vt(0,0,L,D),V=new Vt(0,0,L,D);let Y=!1;const G=new lp;let $=!1,q=!1,re=null;const F=new St,ne=new me,de=new I,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return E===null?J:1}let j=r;function pt(C,X){for(let Q=0;Q<C.length;Q++){const ee=C[Q],Z=n.getContext(ee,X);if(Z!==null)return Z}return null}try{const C={alpha:!0,depth:i,stencil:o,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tp}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",U,!1),n.addEventListener("webglcontextcreationerror",fe,!1),j===null){const X=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&X.shift(),j=pt(X,C),j===null)throw pt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Me,Oe,ye,Je,Fe,P,T,K,le,oe,ue,Ae,ve,be,Ne,Ge,ie,ot,je,ze,Le,xe,O,ce;function Ce(){Me=new PC(j),Oe=new wC(j,Me,e),Me.init(Oe),xe=new mP(j,Me,Oe),ye=new hP(j,Me,Oe),Je=new DC(j),Fe=new JR,P=new pP(j,Me,ye,Fe,Oe,xe,Je),T=new TC(y),K=new RC(y),le=new Hb(j,Oe),O=new MC(j,Me,le,Oe),oe=new LC(j,le,Je,O),ue=new kC(j,oe,le,Je),je=new UC(j,Oe,P),Ge=new bC(Fe),Ae=new QR(y,T,K,Me,Oe,O,Ge),ve=new yP(y,Fe),be=new tP,Ne=new sP(Me,Oe),ot=new SC(y,T,K,ye,ue,h,l),ie=new dP(y,ue,Oe),ce=new xP(j,Je,Oe,ye),ze=new EC(j,Me,Je,Oe),Le=new OC(j,Me,Je,Oe),Je.programs=Ae.programs,y.capabilities=Oe,y.extensions=Me,y.properties=Fe,y.renderLists=be,y.shadowMap=ie,y.state=ye,y.info=Je}Ce();const we=new _P(y,j);this.xr=we,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const C=Me.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Me.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize(L,D,!1))},this.getSize=function(C){return C.set(L,D)},this.setSize=function(C,X,Q=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=C,D=X,n.width=Math.floor(C*J),n.height=Math.floor(X*J),Q===!0&&(n.style.width=C+"px",n.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(L*J,D*J).floor()},this.setDrawingBufferSize=function(C,X,Q){L=C,D=X,J=Q,n.width=Math.floor(C*Q),n.height=Math.floor(X*Q),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(N)},this.setViewport=function(C,X,Q,ee){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,X,Q,ee),ye.viewport(b.copy(N).multiplyScalar(J).floor())},this.getScissor=function(C){return C.copy(V)},this.setScissor=function(C,X,Q,ee){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,X,Q,ee),ye.scissor(B.copy(V).multiplyScalar(J).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(C){ye.setScissorTest(Y=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){W=C},this.getClearColor=function(C){return C.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(C=!0,X=!0,Q=!0){let ee=0;if(C){let Z=!1;if(E!==null){const Se=E.texture.format;Z=Se===rx||Se===nx||Se===tx}if(Z){const Se=E.texture.type,Re=Se===Si||Se===ci||Se===rp||Se===qi||Se===Jy||Se===ex,ke=ot.getClearColor(),Be=ot.getClearAlpha(),$e=ke.r,He=ke.g,Ve=ke.b;Re?(p[0]=$e,p[1]=He,p[2]=Ve,p[3]=Be,j.clearBufferuiv(j.COLOR,0,p)):(g[0]=$e,g[1]=He,g[2]=Ve,g[3]=Be,j.clearBufferiv(j.COLOR,0,g))}else ee|=j.COLOR_BUFFER_BIT}X&&(ee|=j.DEPTH_BUFFER_BIT),Q&&(ee|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",U,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),be.dispose(),Ne.dispose(),Fe.dispose(),T.dispose(),K.dispose(),ue.dispose(),O.dispose(),ce.dispose(),Ae.dispose(),we.dispose(),we.removeEventListener("sessionstart",Tt),we.removeEventListener("sessionend",rt),re&&(re.dispose(),re=null),Rt.stop()};function ae(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const C=Je.autoReset,X=ie.enabled,Q=ie.autoUpdate,ee=ie.needsUpdate,Z=ie.type;Ce(),Je.autoReset=C,ie.enabled=X,ie.autoUpdate=Q,ie.needsUpdate=ee,ie.type=Z}function fe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ge(C){const X=C.target;X.removeEventListener("dispose",ge),Ue(X)}function Ue(C){De(C),Fe.remove(C)}function De(C){const X=Fe.get(C).programs;X!==void 0&&(X.forEach(function(Q){Ae.releaseProgram(Q)}),C.isShaderMaterial&&Ae.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,Q,ee,Z,Se){X===null&&(X=he);const Re=Z.isMesh&&Z.matrixWorld.determinant()<0,ke=DS(C,X,Q,ee,Z);ye.setMaterial(ee,Re);let Be=Q.index,$e=1;if(ee.wireframe===!0){if(Be=oe.getWireframeAttribute(Q),Be===void 0)return;$e=2}const He=Q.drawRange,Ve=Q.attributes.position;let At=He.start*$e,Mn=(He.start+He.count)*$e;Se!==null&&(At=Math.max(At,Se.start*$e),Mn=Math.min(Mn,(Se.start+Se.count)*$e)),Be!==null?(At=Math.max(At,0),Mn=Math.min(Mn,Be.count)):Ve!=null&&(At=Math.max(At,0),Mn=Math.min(Mn,Ve.count));const Ft=Mn-At;if(Ft<0||Ft===1/0)return;O.setup(Z,ee,ke,Q,Be);let xr,_t=ze;if(Be!==null&&(xr=le.get(Be),_t=Le,_t.setIndex(xr)),Z.isMesh)ee.wireframe===!0?(ye.setLineWidth(ee.wireframeLinewidth*_e()),_t.setMode(j.LINES)):_t.setMode(j.TRIANGLES);else if(Z.isLine){let Xe=ee.linewidth;Xe===void 0&&(Xe=1),ye.setLineWidth(Xe*_e()),Z.isLineSegments?_t.setMode(j.LINES):Z.isLineLoop?_t.setMode(j.LINE_LOOP):_t.setMode(j.LINE_STRIP)}else Z.isPoints?_t.setMode(j.POINTS):Z.isSprite&&_t.setMode(j.TRIANGLES);if(Z.isBatchedMesh)_t.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)_t.renderInstances(At,Ft,Z.count);else if(Q.isInstancedBufferGeometry){const Xe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,dc=Math.min(Q.instanceCount,Xe);_t.renderInstances(At,Ft,dc)}else _t.render(At,Ft)};function Ye(C,X,Q){C.transparent===!0&&C.side===Dr&&C.forceSinglePass===!1?(C.side=fn,C.needsUpdate=!0,Vs(C,X,Q),C.side=wi,C.needsUpdate=!0,Vs(C,X,Q),C.side=Dr):Vs(C,X,Q)}this.compile=function(C,X,Q=null){Q===null&&(Q=C),m=Ne.get(Q),m.init(),_.push(m),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),C!==Q&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights(y._useLegacyLights);const ee=new Set;return C.traverse(function(Z){const Se=Z.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const ke=Se[Re];Ye(ke,Q,Z),ee.add(ke)}else Ye(Se,Q,Z),ee.add(Se)}),_.pop(),m=null,ee},this.compileAsync=function(C,X,Q=null){const ee=this.compile(C,X,Q);return new Promise(Z=>{function Se(){if(ee.forEach(function(Re){Fe.get(Re).currentProgram.isReady()&&ee.delete(Re)}),ee.size===0){Z(C);return}setTimeout(Se,10)}Me.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Ke=null;function Et(C){Ke&&Ke(C)}function Tt(){Rt.stop()}function rt(){Rt.start()}const Rt=new yx;Rt.setAnimationLoop(Et),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(C){Ke=C,we.setAnimationLoop(C),C===null?Rt.stop():Rt.start()},we.addEventListener("sessionstart",Tt),we.addEventListener("sessionend",rt),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(X),X=we.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,X,E),m=Ne.get(C,_.length),m.init(),_.push(m),F.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),G.setFromProjectionMatrix(F),q=this.localClippingEnabled,$=Ge.init(this.clippingPlanes,q),v=be.get(C,f.length),v.init(),f.push(v),fr(C,X,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(z,W),this.info.render.frame++,$===!0&&Ge.beginShadows();const Q=m.state.shadowsArray;if(ie.render(Q,C,X),$===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),ot.render(v,C),m.setupLights(y._useLegacyLights),X.isArrayCamera){const ee=X.cameras;for(let Z=0,Se=ee.length;Z<Se;Z++){const Re=ee[Z];Op(v,C,Re,Re.viewport)}}else Op(v,C,X);E!==null&&(P.updateMultisampleRenderTarget(E),P.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(y,C,X),O.resetDefaultState(),A=-1,w=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function fr(C,X,Q,ee){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||G.intersectsSprite(C)){ee&&de.setFromMatrixPosition(C.matrixWorld).applyMatrix4(F);const Re=ue.update(C),ke=C.material;ke.visible&&v.push(C,Re,ke,Q,de.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||G.intersectsObject(C))){const Re=ue.update(C),ke=C.material;if(ee&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),de.copy(C.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),de.copy(Re.boundingSphere.center)),de.applyMatrix4(C.matrixWorld).applyMatrix4(F)),Array.isArray(ke)){const Be=Re.groups;for(let $e=0,He=Be.length;$e<He;$e++){const Ve=Be[$e],At=ke[Ve.materialIndex];At&&At.visible&&v.push(C,Re,At,Q,de.z,Ve)}}else ke.visible&&v.push(C,Re,ke,Q,de.z,null)}}const Se=C.children;for(let Re=0,ke=Se.length;Re<ke;Re++)fr(Se[Re],X,Q,ee)}function Op(C,X,Q,ee){const Z=C.opaque,Se=C.transmissive,Re=C.transparent;m.setupLightsView(Q),$===!0&&Ge.setGlobalState(y.clippingPlanes,Q),Se.length>0&&OS(Z,Se,X,Q),ee&&ye.viewport(b.copy(ee)),Z.length>0&&Gs(Z,X,Q),Se.length>0&&Gs(Se,X,Q),Re.length>0&&Gs(Re,X,Q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function OS(C,X,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;const Se=Oe.isWebGL2;re===null&&(re=new bi(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?ca:Si,minFilter:Cs,samples:Se?4:0})),y.getDrawingBufferSize(ne),Se?re.setSize(ne.x,ne.y):re.setSize(Ru(ne.x),Ru(ne.y));const Re=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor(te),R=y.getClearAlpha(),R<1&&y.setClearColor(16777215,.5),y.clear();const ke=y.toneMapping;y.toneMapping=xi,Gs(C,Q,ee),P.updateMultisampleRenderTarget(re),P.updateRenderTargetMipmap(re);let Be=!1;for(let $e=0,He=X.length;$e<He;$e++){const Ve=X[$e],At=Ve.object,Mn=Ve.geometry,Ft=Ve.material,xr=Ve.group;if(Ft.side===Dr&&At.layers.test(ee.layers)){const _t=Ft.side;Ft.side=fn,Ft.needsUpdate=!0,Dp(At,Q,ee,Mn,Ft,xr),Ft.side=_t,Ft.needsUpdate=!0,Be=!0}}Be===!0&&(P.updateMultisampleRenderTarget(re),P.updateRenderTargetMipmap(re)),y.setRenderTarget(Re),y.setClearColor(te,R),y.toneMapping=ke}function Gs(C,X,Q){const ee=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,Se=C.length;Z<Se;Z++){const Re=C[Z],ke=Re.object,Be=Re.geometry,$e=ee===null?Re.material:ee,He=Re.group;ke.layers.test(Q.layers)&&Dp(ke,X,Q,Be,$e,He)}}function Dp(C,X,Q,ee,Z,Se){C.onBeforeRender(y,X,Q,ee,Z,Se),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(y,X,Q,ee,C,Se),Z.transparent===!0&&Z.side===Dr&&Z.forceSinglePass===!1?(Z.side=fn,Z.needsUpdate=!0,y.renderBufferDirect(Q,X,ee,Z,C,Se),Z.side=wi,Z.needsUpdate=!0,y.renderBufferDirect(Q,X,ee,Z,C,Se),Z.side=Dr):y.renderBufferDirect(Q,X,ee,Z,C,Se),C.onAfterRender(y,X,Q,ee,Z,Se)}function Vs(C,X,Q){X.isScene!==!0&&(X=he);const ee=Fe.get(C),Z=m.state.lights,Se=m.state.shadowsArray,Re=Z.state.version,ke=Ae.getParameters(C,Z.state,Se,X,Q),Be=Ae.getProgramCacheKey(ke);let $e=ee.programs;ee.environment=C.isMeshStandardMaterial?X.environment:null,ee.fog=X.fog,ee.envMap=(C.isMeshStandardMaterial?K:T).get(C.envMap||ee.environment),$e===void 0&&(C.addEventListener("dispose",ge),$e=new Map,ee.programs=$e);let He=$e.get(Be);if(He!==void 0){if(ee.currentProgram===He&&ee.lightsStateVersion===Re)return Ip(C,ke),He}else ke.uniforms=Ae.getUniforms(C),C.onBuild(Q,ke,y),C.onBeforeCompile(ke,y),He=Ae.acquireProgram(ke,Be),$e.set(Be,He),ee.uniforms=ke.uniforms;const Ve=ee.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=Ge.uniform),Ip(C,ke),ee.needsLights=IS(C),ee.lightsStateVersion=Re,ee.needsLights&&(Ve.ambientLightColor.value=Z.state.ambient,Ve.lightProbe.value=Z.state.probe,Ve.directionalLights.value=Z.state.directional,Ve.directionalLightShadows.value=Z.state.directionalShadow,Ve.spotLights.value=Z.state.spot,Ve.spotLightShadows.value=Z.state.spotShadow,Ve.rectAreaLights.value=Z.state.rectArea,Ve.ltc_1.value=Z.state.rectAreaLTC1,Ve.ltc_2.value=Z.state.rectAreaLTC2,Ve.pointLights.value=Z.state.point,Ve.pointLightShadows.value=Z.state.pointShadow,Ve.hemisphereLights.value=Z.state.hemi,Ve.directionalShadowMap.value=Z.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ve.spotShadowMap.value=Z.state.spotShadowMap,Ve.spotLightMatrix.value=Z.state.spotLightMatrix,Ve.spotLightMap.value=Z.state.spotLightMap,Ve.pointShadowMap.value=Z.state.pointShadowMap,Ve.pointShadowMatrix.value=Z.state.pointShadowMatrix),ee.currentProgram=He,ee.uniformsList=null,He}function Np(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Kl.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function Ip(C,X){const Q=Fe.get(C);Q.outputColorSpace=X.outputColorSpace,Q.batching=X.batching,Q.instancing=X.instancing,Q.instancingColor=X.instancingColor,Q.skinning=X.skinning,Q.morphTargets=X.morphTargets,Q.morphNormals=X.morphNormals,Q.morphColors=X.morphColors,Q.morphTargetsCount=X.morphTargetsCount,Q.numClippingPlanes=X.numClippingPlanes,Q.numIntersection=X.numClipIntersection,Q.vertexAlphas=X.vertexAlphas,Q.vertexTangents=X.vertexTangents,Q.toneMapping=X.toneMapping}function DS(C,X,Q,ee,Z){X.isScene!==!0&&(X=he),P.resetTextureUnits();const Se=X.fog,Re=ee.isMeshStandardMaterial?X.environment:null,ke=E===null?y.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:jr,Be=(ee.isMeshStandardMaterial?K:T).get(ee.envMap||Re),$e=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,He=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ve=!!Q.morphAttributes.position,At=!!Q.morphAttributes.normal,Mn=!!Q.morphAttributes.color;let Ft=xi;ee.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ft=y.toneMapping);const xr=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,_t=xr!==void 0?xr.length:0,Xe=Fe.get(ee),dc=m.state.lights;if($===!0&&(q===!0||C!==w)){const Dn=C===w&&ee.id===A;Ge.setState(ee,C,Dn)}let wt=!1;ee.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==dc.state.version||Xe.outputColorSpace!==ke||Z.isBatchedMesh&&Xe.batching===!1||!Z.isBatchedMesh&&Xe.batching===!0||Z.isInstancedMesh&&Xe.instancing===!1||!Z.isInstancedMesh&&Xe.instancing===!0||Z.isSkinnedMesh&&Xe.skinning===!1||!Z.isSkinnedMesh&&Xe.skinning===!0||Z.isInstancedMesh&&Xe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Xe.instancingColor===!1&&Z.instanceColor!==null||Xe.envMap!==Be||ee.fog===!0&&Xe.fog!==Se||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ge.numPlanes||Xe.numIntersection!==Ge.numIntersection)||Xe.vertexAlphas!==$e||Xe.vertexTangents!==He||Xe.morphTargets!==Ve||Xe.morphNormals!==At||Xe.morphColors!==Mn||Xe.toneMapping!==Ft||Oe.isWebGL2===!0&&Xe.morphTargetsCount!==_t)&&(wt=!0):(wt=!0,Xe.__version=ee.version);let Li=Xe.currentProgram;wt===!0&&(Li=Vs(ee,X,Z));let Up=!1,Sa=!1,hc=!1;const Kt=Li.getUniforms(),Oi=Xe.uniforms;if(ye.useProgram(Li.program)&&(Up=!0,Sa=!0,hc=!0),ee.id!==A&&(A=ee.id,Sa=!0),Up||w!==C){Kt.setValue(j,"projectionMatrix",C.projectionMatrix),Kt.setValue(j,"viewMatrix",C.matrixWorldInverse);const Dn=Kt.map.cameraPosition;Dn!==void 0&&Dn.setValue(j,de.setFromMatrixPosition(C.matrixWorld)),Oe.logarithmicDepthBuffer&&Kt.setValue(j,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Kt.setValue(j,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,Sa=!0,hc=!0)}if(Z.isSkinnedMesh){Kt.setOptional(j,Z,"bindMatrix"),Kt.setOptional(j,Z,"bindMatrixInverse");const Dn=Z.skeleton;Dn&&(Oe.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),Kt.setValue(j,"boneTexture",Dn.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(Kt.setOptional(j,Z,"batchingTexture"),Kt.setValue(j,"batchingTexture",Z._matricesTexture,P));const pc=Q.morphAttributes;if((pc.position!==void 0||pc.normal!==void 0||pc.color!==void 0&&Oe.isWebGL2===!0)&&je.update(Z,Q,Li),(Sa||Xe.receiveShadow!==Z.receiveShadow)&&(Xe.receiveShadow=Z.receiveShadow,Kt.setValue(j,"receiveShadow",Z.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Oi.envMap.value=Be,Oi.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Sa&&(Kt.setValue(j,"toneMappingExposure",y.toneMappingExposure),Xe.needsLights&&NS(Oi,hc),Se&&ee.fog===!0&&ve.refreshFogUniforms(Oi,Se),ve.refreshMaterialUniforms(Oi,ee,J,D,re),Kl.upload(j,Np(Xe),Oi,P)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Kl.upload(j,Np(Xe),Oi,P),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Kt.setValue(j,"center",Z.center),Kt.setValue(j,"modelViewMatrix",Z.modelViewMatrix),Kt.setValue(j,"normalMatrix",Z.normalMatrix),Kt.setValue(j,"modelMatrix",Z.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Dn=ee.uniformsGroups;for(let mc=0,US=Dn.length;mc<US;mc++)if(Oe.isWebGL2){const kp=Dn[mc];ce.update(kp,Li),ce.bind(kp,Li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Li}function NS(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function IS(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,X,Q){Fe.get(C.texture).__webglTexture=X,Fe.get(C.depthTexture).__webglTexture=Q;const ee=Fe.get(C);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=Q===void 0,ee.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,X){const Q=Fe.get(C);Q.__webglFramebuffer=X,Q.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,Q=0){E=C,S=X,M=Q;let ee=!0,Z=null,Se=!1,Re=!1;if(C){const Be=Fe.get(C);Be.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(j.FRAMEBUFFER,null),ee=!1):Be.__webglFramebuffer===void 0?P.setupRenderTarget(C):Be.__hasExternalTextures&&P.rebindTextures(C,Fe.get(C.texture).__webglTexture,Fe.get(C.depthTexture).__webglTexture);const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Re=!0);const He=Fe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(He[X])?Z=He[X][Q]:Z=He[X],Se=!0):Oe.isWebGL2&&C.samples>0&&P.useMultisampledRTT(C)===!1?Z=Fe.get(C).__webglMultisampledFramebuffer:Array.isArray(He)?Z=He[Q]:Z=He,b.copy(C.viewport),B.copy(C.scissor),k=C.scissorTest}else b.copy(N).multiplyScalar(J).floor(),B.copy(V).multiplyScalar(J).floor(),k=Y;if(ye.bindFramebuffer(j.FRAMEBUFFER,Z)&&Oe.drawBuffers&&ee&&ye.drawBuffers(C,Z),ye.viewport(b),ye.scissor(B),ye.setScissorTest(k),Se){const Be=Fe.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,Q)}else if(Re){const Be=Fe.get(C.texture),$e=X||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Be.__webglTexture,Q||0,$e)}A=-1},this.readRenderTargetPixels=function(C,X,Q,ee,Z,Se,Re){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(ke=ke[Re]),ke){ye.bindFramebuffer(j.FRAMEBUFFER,ke);try{const Be=C.texture,$e=Be.format,He=Be.type;if($e!==nr&&xe.convert($e)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=He===ca&&(Me.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&Me.has("EXT_color_buffer_float"));if(He!==Si&&xe.convert(He)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===fi&&(Oe.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-ee&&Q>=0&&Q<=C.height-Z&&j.readPixels(X,Q,ee,Z,xe.convert($e),xe.convert(He),Se)}finally{const Be=E!==null?Fe.get(E).__webglFramebuffer:null;ye.bindFramebuffer(j.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(C,X,Q=0){const ee=Math.pow(2,-Q),Z=Math.floor(X.image.width*ee),Se=Math.floor(X.image.height*ee);P.setTexture2D(X,0),j.copyTexSubImage2D(j.TEXTURE_2D,Q,0,0,C.x,C.y,Z,Se),ye.unbindTexture()},this.copyTextureToTexture=function(C,X,Q,ee=0){const Z=X.image.width,Se=X.image.height,Re=xe.convert(Q.format),ke=xe.convert(Q.type);P.setTexture2D(Q,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Q.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,Q.unpackAlignment),X.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,ee,C.x,C.y,Z,Se,Re,ke,X.image.data):X.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,ee,C.x,C.y,X.mipmaps[0].width,X.mipmaps[0].height,Re,X.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,ee,C.x,C.y,Re,ke,X.image),ee===0&&Q.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(C,X,Q,ee,Z=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=C.max.x-C.min.x+1,Re=C.max.y-C.min.y+1,ke=C.max.z-C.min.z+1,Be=xe.convert(ee.format),$e=xe.convert(ee.type);let He;if(ee.isData3DTexture)P.setTexture3D(ee,0),He=j.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)P.setTexture2DArray(ee,0),He=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,ee.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,ee.unpackAlignment);const Ve=j.getParameter(j.UNPACK_ROW_LENGTH),At=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Mn=j.getParameter(j.UNPACK_SKIP_PIXELS),Ft=j.getParameter(j.UNPACK_SKIP_ROWS),xr=j.getParameter(j.UNPACK_SKIP_IMAGES),_t=Q.isCompressedTexture?Q.mipmaps[Z]:Q.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,_t.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,_t.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,C.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,C.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,C.min.z),Q.isDataTexture||Q.isData3DTexture?j.texSubImage3D(He,Z,X.x,X.y,X.z,Se,Re,ke,Be,$e,_t.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(He,Z,X.x,X.y,X.z,Se,Re,ke,Be,_t.data)):j.texSubImage3D(He,Z,X.x,X.y,X.z,Se,Re,ke,Be,$e,_t),j.pixelStorei(j.UNPACK_ROW_LENGTH,Ve),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,At),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Mn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Ft),j.pixelStorei(j.UNPACK_SKIP_IMAGES,xr),Z===0&&ee.generateMipmaps&&j.generateMipmap(He),ye.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),ye.unbindTexture()},this.resetState=function(){S=0,M=0,E=null,ye.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ur}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ip?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===ec?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ht?Ki:ox}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ki?Ht:jr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class SP extends Tx{}SP.prototype.isWebGL1Renderer=!0;class MP extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Ax extends _a{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xv=new I,Sv=new I,Mv=new St,_f=new nc,Pl=new tc;class EP extends qt{constructor(e=new On,n=new Ax){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let i=1,o=n.count;i<o;i++)xv.fromBufferAttribute(n,i-1),Sv.fromBufferAttribute(n,i),r[i]=r[i-1],r[i]+=xv.distanceTo(Sv);e.setAttribute("lineDistance",new It(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,i=this.matrixWorld,o=e.params.Line.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Pl.copy(r.boundingSphere),Pl.applyMatrix4(i),Pl.radius+=o,e.ray.intersectsSphere(Pl)===!1)return;Mv.copy(i).invert(),_f.copy(e.ray).applyMatrix4(Mv);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,u=new I,c=new I,d=new I,h=new I,p=this.isLineSegments?2:1,g=r.index,m=r.attributes.position;if(g!==null){const f=Math.max(0,a.start),_=Math.min(g.count,a.start+a.count);for(let y=f,x=_-1;y<x;y+=p){const S=g.getX(y),M=g.getX(y+1);if(u.fromBufferAttribute(m,S),c.fromBufferAttribute(m,M),_f.distanceSqToSegment(u,c,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||n.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let y=f,x=_-1;y<x;y+=p){if(u.fromBufferAttribute(m,y),c.fromBufferAttribute(m,y+1),_f.distanceSqToSegment(u,c,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(h);M<e.near||M>e.far||n.push({distance:M,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const s=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}class qr{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const r=this.getUtoTmapping(e);return this.getPoint(r,n)}getPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPoint(r/e));return n}getSpacedPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPointAt(r/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let r,i=this.getPoint(0),o=0;n.push(0);for(let a=1;a<=e;a++)r=this.getPoint(a/e),o+=r.distanceTo(i),n.push(o),i=r;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const r=this.getLengths();let i=0;const o=r.length;let a;n?a=n:a=e*r[o-1];let s=0,l=o-1,u;for(;s<=l;)if(i=Math.floor(s+(l-s)/2),u=r[i]-a,u<0)s=i+1;else if(u>0)l=i-1;else{l=i;break}if(i=l,r[i]===a)return i/(o-1);const c=r[i],h=r[i+1]-c,p=(a-c)/h;return(i+p)/(o-1)}getTangent(e,n){let i=e-1e-4,o=e+1e-4;i<0&&(i=0),o>1&&(o=1);const a=this.getPoint(i),s=this.getPoint(o),l=n||(a.isVector2?new me:new I);return l.copy(s).sub(a).normalize(),l}getTangentAt(e,n){const r=this.getUtoTmapping(e);return this.getTangent(r,n)}computeFrenetFrames(e,n){const r=new I,i=[],o=[],a=[],s=new I,l=new St;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new I)}o[0]=new I,a[0]=new I;let u=Number.MAX_VALUE;const c=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);c<=u&&(u=c,r.set(1,0,0)),d<=u&&(u=d,r.set(0,1,0)),h<=u&&r.set(0,0,1),s.crossVectors(i[0],r).normalize(),o[0].crossVectors(i[0],s),a[0].crossVectors(i[0],o[0]);for(let p=1;p<=e;p++){if(o[p]=o[p-1].clone(),a[p]=a[p-1].clone(),s.crossVectors(i[p-1],i[p]),s.length()>Number.EPSILON){s.normalize();const g=Math.acos(Gt(i[p-1].dot(i[p]),-1,1));o[p].applyMatrix4(l.makeRotationAxis(s,g))}a[p].crossVectors(i[p],o[p])}if(n===!0){let p=Math.acos(Gt(o[0].dot(o[e]),-1,1));p/=e,i[0].dot(s.crossVectors(o[0],o[e]))>0&&(p=-p);for(let g=1;g<=e;g++)o[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],o[g])}return{tangents:i,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Cx extends qr{constructor(e=0,n=0,r=1,i=1,o=0,a=Math.PI*2,s=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=r,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=s,this.aRotation=l}getPoint(e,n){const r=n||new me,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(a?o=0:o=i),this.aClockwise===!0&&!a&&(o===i?o=-i:o=o-i);const s=this.aStartAngle+e*o;let l=this.aX+this.xRadius*Math.cos(s),u=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){const c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=u-this.aY;l=h*c-p*d+this.aX,u=h*d+p*c+this.aY}return r.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class wP extends Cx{constructor(e,n,r,i,o,a){super(e,n,r,r,i,o,a),this.isArcCurve=!0,this.type="ArcCurve"}}function dp(){let t=0,e=0,n=0,r=0;function i(o,a,s,l){t=o,e=s,n=-3*o+3*a-2*s-l,r=2*o-2*a+s+l}return{initCatmullRom:function(o,a,s,l,u){i(a,s,u*(s-o),u*(l-a))},initNonuniformCatmullRom:function(o,a,s,l,u,c,d){let h=(a-o)/u-(s-o)/(u+c)+(s-a)/c,p=(s-a)/c-(l-a)/(c+d)+(l-s)/d;h*=c,p*=c,i(a,s,h,p)},calc:function(o){const a=o*o,s=a*o;return t+e*o+n*a+r*s}}}const Ll=new I,yf=new dp,xf=new dp,Sf=new dp;class bP extends qr{constructor(e=[],n=!1,r="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=r,this.tension=i}getPoint(e,n=new I){const r=n,i=this.points,o=i.length,a=(o-(this.closed?0:1))*e;let s=Math.floor(a),l=a-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/o)+1)*o:l===0&&s===o-1&&(s=o-2,l=1);let u,c;this.closed||s>0?u=i[(s-1)%o]:(Ll.subVectors(i[0],i[1]).add(i[0]),u=Ll);const d=i[s%o],h=i[(s+1)%o];if(this.closed||s+2<o?c=i[(s+2)%o]:(Ll.subVectors(i[o-1],i[o-2]).add(i[o-1]),c=Ll),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(c),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),yf.initNonuniformCatmullRom(u.x,d.x,h.x,c.x,g,v,m),xf.initNonuniformCatmullRom(u.y,d.y,h.y,c.y,g,v,m),Sf.initNonuniformCatmullRom(u.z,d.z,h.z,c.z,g,v,m)}else this.curveType==="catmullrom"&&(yf.initCatmullRom(u.x,d.x,h.x,c.x,this.tension),xf.initCatmullRom(u.y,d.y,h.y,c.y,this.tension),Sf.initCatmullRom(u.z,d.z,h.z,c.z,this.tension));return r.set(yf.calc(l),xf.calc(l),Sf.calc(l)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const i=e.points[n];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const i=this.points[n];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const i=e.points[n];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ev(t,e,n,r,i){const o=(r-e)*.5,a=(i-n)*.5,s=t*t,l=t*s;return(2*n-2*r+o+a)*l+(-3*n+3*r-2*o-a)*s+o*t+n}function TP(t,e){const n=1-t;return n*n*e}function AP(t,e){return 2*(1-t)*t*e}function CP(t,e){return t*t*e}function us(t,e,n,r){return TP(t,e)+AP(t,n)+CP(t,r)}function RP(t,e){const n=1-t;return n*n*n*e}function PP(t,e){const n=1-t;return 3*n*n*t*e}function LP(t,e){return 3*(1-t)*t*t*e}function OP(t,e){return t*t*t*e}function cs(t,e,n,r,i){return RP(t,e)+PP(t,n)+LP(t,r)+OP(t,i)}class DP extends qr{constructor(e=new me,n=new me,r=new me,i=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=r,this.v3=i}getPoint(e,n=new me){const r=n,i=this.v0,o=this.v1,a=this.v2,s=this.v3;return r.set(cs(e,i.x,o.x,a.x,s.x),cs(e,i.y,o.y,a.y,s.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rx extends qr{constructor(e=new I,n=new I,r=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=r,this.v3=i}getPoint(e,n=new I){const r=n,i=this.v0,o=this.v1,a=this.v2,s=this.v3;return r.set(cs(e,i.x,o.x,a.x,s.x),cs(e,i.y,o.y,a.y,s.y),cs(e,i.z,o.z,a.z,s.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class NP extends qr{constructor(e=new me,n=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new me){const r=n;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new me){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class IP extends qr{constructor(e=new I,n=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new I){const r=n;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new I){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class UP extends qr{constructor(e=new me,n=new me,r=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=r}getPoint(e,n=new me){const r=n,i=this.v0,o=this.v1,a=this.v2;return r.set(us(e,i.x,o.x,a.x),us(e,i.y,o.y,a.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hp extends qr{constructor(e=new I,n=new I,r=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=r}getPoint(e,n=new I){const r=n,i=this.v0,o=this.v1,a=this.v2;return r.set(us(e,i.x,o.x,a.x),us(e,i.y,o.y,a.y),us(e,i.z,o.z,a.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kP extends qr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new me){const r=n,i=this.points,o=(i.length-1)*e,a=Math.floor(o),s=o-a,l=i[a===0?a:a-1],u=i[a],c=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return r.set(Ev(s,l.x,u.x,c.x,d.x),Ev(s,l.y,u.y,c.y,d.y)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const i=e.points[n];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const i=this.points[n];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const i=e.points[n];this.points.push(new me().fromArray(i))}return this}}var FP=Object.freeze({__proto__:null,ArcCurve:wP,CatmullRomCurve3:bP,CubicBezierCurve:DP,CubicBezierCurve3:Rx,EllipseCurve:Cx,LineCurve:NP,LineCurve3:IP,QuadraticBezierCurve:UP,QuadraticBezierCurve3:hp,SplineCurve:kP});class oc extends On{constructor(e=1,n=1,r=1,i=32,o=1,a=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:i,heightSegments:o,openEnded:a,thetaStart:s,thetaLength:l};const u=this;i=Math.floor(i),o=Math.floor(o);const c=[],d=[],h=[],p=[];let g=0;const v=[],m=r/2;let f=0;_(),a===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new It(d,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(p,2));function _(){const x=new I,S=new I;let M=0;const E=(n-e)/r;for(let A=0;A<=o;A++){const w=[],b=A/o,B=b*(n-e)+e;for(let k=0;k<=i;k++){const te=k/i,R=te*l+s,L=Math.sin(R),D=Math.cos(R);S.x=B*L,S.y=-b*r+m,S.z=B*D,d.push(S.x,S.y,S.z),x.set(L,E,D).normalize(),h.push(x.x,x.y,x.z),p.push(te,1-b),w.push(g++)}v.push(w)}for(let A=0;A<i;A++)for(let w=0;w<o;w++){const b=v[w][A],B=v[w+1][A],k=v[w+1][A+1],te=v[w][A+1];c.push(b,B,te),c.push(B,k,te),M+=6}u.addGroup(f,M,0),f+=M}function y(x){const S=g,M=new me,E=new I;let A=0;const w=x===!0?e:n,b=x===!0?1:-1;for(let k=1;k<=i;k++)d.push(0,m*b,0),h.push(0,b,0),p.push(.5,.5),g++;const B=g;for(let k=0;k<=i;k++){const R=k/i*l+s,L=Math.cos(R),D=Math.sin(R);E.x=w*D,E.y=m*b,E.z=w*L,d.push(E.x,E.y,E.z),h.push(0,b,0),M.x=L*.5+.5,M.y=D*.5*b+.5,p.push(M.x,M.y),g++}for(let k=0;k<i;k++){const te=S+k,R=B+k;x===!0?c.push(R,R+1,te):c.push(R+1,R,te),A+=3}u.addGroup(f,A,x===!0?1:2),f+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pp extends oc{constructor(e=1,n=1,r=32,i=1,o=!1,a=0,s=Math.PI*2){super(0,e,n,r,i,o,a,s),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:i,openEnded:o,thetaStart:a,thetaLength:s}}static fromJSON(e){return new pp(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ac extends On{constructor(e=1,n=32,r=16,i=0,o=Math.PI*2,a=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:i,phiLength:o,thetaStart:a,thetaLength:s},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const l=Math.min(a+s,Math.PI);let u=0;const c=[],d=new I,h=new I,p=[],g=[],v=[],m=[];for(let f=0;f<=r;f++){const _=[],y=f/r;let x=0;f===0&&a===0?x=.5/n:f===r&&l===Math.PI&&(x=-.5/n);for(let S=0;S<=n;S++){const M=S/n;d.x=-e*Math.cos(i+M*o)*Math.sin(a+y*s),d.y=e*Math.cos(a+y*s),d.z=e*Math.sin(i+M*o)*Math.sin(a+y*s),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(M+x,1-y),_.push(u++)}c.push(_)}for(let f=0;f<r;f++)for(let _=0;_<n;_++){const y=c[f][_+1],x=c[f][_],S=c[f+1][_],M=c[f+1][_+1];(f!==0||a>0)&&p.push(y,x,M),(f!==r-1||l<Math.PI)&&p.push(x,S,M)}this.setIndex(p),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(v,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mp extends On{constructor(e=new hp(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),n=64,r=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:r,radialSegments:i,closed:o};const a=e.computeFrenetFrames(n,o);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const s=new I,l=new I,u=new me;let c=new I;const d=[],h=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new It(d,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(p,2));function v(){for(let y=0;y<n;y++)m(y);m(o===!1?n:0),_(),f()}function m(y){c=e.getPointAt(y/n,c);const x=a.normals[y],S=a.binormals[y];for(let M=0;M<=i;M++){const E=M/i*Math.PI*2,A=Math.sin(E),w=-Math.cos(E);l.x=w*x.x+A*S.x,l.y=w*x.y+A*S.y,l.z=w*x.z+A*S.z,l.normalize(),h.push(l.x,l.y,l.z),s.x=c.x+r*l.x,s.y=c.y+r*l.y,s.z=c.z+r*l.z,d.push(s.x,s.y,s.z)}}function f(){for(let y=1;y<=n;y++)for(let x=1;x<=i;x++){const S=(i+1)*(y-1)+(x-1),M=(i+1)*y+(x-1),E=(i+1)*y+x,A=(i+1)*(y-1)+x;g.push(S,M,A),g.push(M,E,A)}}function _(){for(let y=0;y<=n;y++)for(let x=0;x<=i;x++)u.x=y/n,u.y=x/i,p.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new mp(new FP[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class zP extends _a{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ax,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=np,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const wv={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class BP{constructor(e,n,r){const i=this;let o=!1,a=0,s=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(c){s++,o===!1&&i.onStart!==void 0&&i.onStart(c,a,s),o=!0},this.itemEnd=function(c){a++,i.onProgress!==void 0&&i.onProgress(c,a,s),a===s&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,h=u.length;d<h;d+=2){const p=u[d],g=u[d+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null}}}const HP=new BP;class gp{constructor(e){this.manager=e!==void 0?e:HP,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(i,o){r.load(e,i,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gp.DEFAULT_MATERIAL_NAME="__DEFAULT";class GP extends gp{constructor(e){super(e)}load(e,n,r,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,a=wv.get(e);if(a!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(a),o.manager.itemEnd(e)},0),a;const s=Ps("img");function l(){c(),wv.add(e,this),n&&n(this),o.manager.itemEnd(e)}function u(d){c(),i&&i(d),o.manager.itemError(e),o.manager.itemEnd(e)}function c(){s.removeEventListener("load",l,!1),s.removeEventListener("error",u,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),o.manager.itemStart(e),s.src=e,s}}class VP extends gp{constructor(e){super(e)}load(e,n,r,i){const o=new xn,a=new GP(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){o.image=s,o.needsUpdate=!0,n!==void 0&&n(o)},r,i),o}}class Px extends qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Mf=new St,bv=new I,Tv=new I;class WP{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lp,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;bv.setFromMatrixPosition(e.matrixWorld),n.position.copy(bv),Tv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Tv),n.updateMatrixWorld(),Mf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Mf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jP extends WP{constructor(){super(new cp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $P extends Px{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new jP}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class XP extends Px{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Lx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Av(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Av();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Av(){return(typeof performance>"u"?Date:performance).now()}class Ox{constructor(e,n,r=0,i=1/0){this.ray=new nc(e,n),this.near=r,this.far=i,this.camera=null,this.layers=new ap,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,r=[]){return Vd(e,this,r,n),r.sort(Cv),r}intersectObjects(e,n=!0,r=[]){for(let i=0,o=e.length;i<o;i++)Vd(e[i],this,r,n);return r.sort(Cv),r}}function Cv(t,e){return t.distance-e.distance}function Vd(t,e,n,r){if(t.layers.test(e.layers)&&t.raycast(e,n),r===!0){const i=t.children;for(let o=0,a=i.length;o<a;o++)Vd(i[o],e,n,!0)}}class Wd{constructor(e=1,n=0,r=0){return this.radius=e,this.phi=n,this.theta=r,this}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tp);const Ao=new Lr,ni=new Ox,Ua=new me,Rv=new I,Ol=new I,Ef=new I,Pv=new St;class qP extends cr{constructor(e,n,r){super(),r.style.touchAction="none";let i=null,o=null;const a=[],s=this;function l(){r.addEventListener("pointermove",p),r.addEventListener("pointerdown",g),r.addEventListener("pointerup",v),r.addEventListener("pointerleave",v)}function u(){r.removeEventListener("pointermove",p),r.removeEventListener("pointerdown",g),r.removeEventListener("pointerup",v),r.removeEventListener("pointerleave",v),r.style.cursor=""}function c(){u()}function d(){return e}function h(){return ni}function p(f){if(s.enabled!==!1){if(m(f),ni.setFromCamera(Ua,n),i){ni.ray.intersectPlane(Ao,Ol)&&i.position.copy(Ol.sub(Rv).applyMatrix4(Pv)),s.dispatchEvent({type:"drag",object:i});return}if(f.pointerType==="mouse"||f.pointerType==="pen")if(a.length=0,ni.setFromCamera(Ua,n),ni.intersectObjects(e,s.recursive,a),a.length>0){const _=a[0].object;Ao.setFromNormalAndCoplanarPoint(n.getWorldDirection(Ao.normal),Ef.setFromMatrixPosition(_.matrixWorld)),o!==_&&o!==null&&(s.dispatchEvent({type:"hoveroff",object:o}),r.style.cursor="auto",o=null),o!==_&&(s.dispatchEvent({type:"hoveron",object:_}),r.style.cursor="pointer",o=_)}else o!==null&&(s.dispatchEvent({type:"hoveroff",object:o}),r.style.cursor="auto",o=null)}}function g(f){s.enabled!==!1&&(m(f),a.length=0,ni.setFromCamera(Ua,n),ni.intersectObjects(e,s.recursive,a),a.length>0&&(i=s.transformGroup===!0?e[0]:a[0].object,Ao.setFromNormalAndCoplanarPoint(n.getWorldDirection(Ao.normal),Ef.setFromMatrixPosition(i.matrixWorld)),ni.ray.intersectPlane(Ao,Ol)&&(Pv.copy(i.parent.matrixWorld).invert(),Rv.copy(Ol).sub(Ef.setFromMatrixPosition(i.matrixWorld))),r.style.cursor="move",s.dispatchEvent({type:"dragstart",object:i})))}function v(){s.enabled!==!1&&(i&&(s.dispatchEvent({type:"dragend",object:i}),i=null),r.style.cursor=o?"pointer":"auto")}function m(f){const _=r.getBoundingClientRect();Ua.x=(f.clientX-_.left)/_.width*2-1,Ua.y=-(f.clientY-_.top)/_.height*2+1}l(),this.enabled=!0,this.recursive=!0,this.transformGroup=!1,this.activate=l,this.deactivate=u,this.dispose=c,this.getObjects=d,this.getRaycaster=h}}function YP(t,e,n){var r,i=1;t==null&&(t=0),e==null&&(e=0),n==null&&(n=0);function o(){var a,s=r.length,l,u=0,c=0,d=0;for(a=0;a<s;++a)l=r[a],u+=l.x||0,c+=l.y||0,d+=l.z||0;for(u=(u/s-t)*i,c=(c/s-e)*i,d=(d/s-n)*i,a=0;a<s;++a)l=r[a],u&&(l.x-=u),c&&(l.y-=c),d&&(l.z-=d)}return o.initialize=function(a){r=a},o.x=function(a){return arguments.length?(t=+a,o):t},o.y=function(a){return arguments.length?(e=+a,o):e},o.z=function(a){return arguments.length?(n=+a,o):n},o.strength=function(a){return arguments.length?(i=+a,o):i},o}function KP(t){const e=+this._x.call(null,t);return Dx(this.cover(e),e,t)}function Dx(t,e,n){if(isNaN(e))return t;var r,i=t._root,o={data:n},a=t._x0,s=t._x1,l,u,c,d,h;if(!i)return t._root=o,t;for(;i.length;)if((c=e>=(l=(a+s)/2))?a=l:s=l,r=i,!(i=i[d=+c]))return r[d]=o,t;if(u=+t._x.call(null,i.data),e===u)return o.next=i,r?r[d]=o:t._root=o,t;do r=r?r[d]=new Array(2):t._root=new Array(2),(c=e>=(l=(a+s)/2))?a=l:s=l;while((d=+c)==(h=+(u>=l)));return r[h]=i,r[d]=o,t}function ZP(t){Array.isArray(t)||(t=Array.from(t));const e=t.length,n=new Float64Array(e);let r=1/0,i=-1/0;for(let o=0,a;o<e;++o)isNaN(a=+this._x.call(null,t[o]))||(n[o]=a,a<r&&(r=a),a>i&&(i=a));if(r>i)return this;this.cover(r).cover(i);for(let o=0;o<e;++o)Dx(this,n[o],t[o]);return this}function QP(t){if(isNaN(t=+t))return this;var e=this._x0,n=this._x1;if(isNaN(e))n=(e=Math.floor(t))+1;else{for(var r=n-e||1,i=this._root,o,a;e>t||t>=n;)switch(a=+(t<e),o=new Array(2),o[a]=i,i=o,r*=2,a){case 0:n=e+r;break;case 1:e=n-r;break}this._root&&this._root.length&&(this._root=i)}return this._x0=e,this._x1=n,this}function JP(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function e2(t){return arguments.length?this.cover(+t[0][0]).cover(+t[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function Br(t,e,n){this.node=t,this.x0=e,this.x1=n}function t2(t,e){var n,r=this._x0,i,o,a=this._x1,s=[],l=this._root,u,c;for(l&&s.push(new Br(l,r,a)),e==null?e=1/0:(r=t-e,a=t+e);u=s.pop();)if(!(!(l=u.node)||(i=u.x0)>a||(o=u.x1)<r))if(l.length){var d=(i+o)/2;s.push(new Br(l[1],d,o),new Br(l[0],i,d)),(c=+(t>=d))&&(u=s[s.length-1],s[s.length-1]=s[s.length-1-c],s[s.length-1-c]=u)}else{var h=Math.abs(t-+this._x.call(null,l.data));h<e&&(e=h,r=t-h,a=t+h,n=l.data)}return n}function n2(t){if(isNaN(l=+this._x.call(null,t)))return this;var e,n=this._root,r,i,o,a=this._x0,s=this._x1,l,u,c,d,h;if(!n)return this;if(n.length)for(;;){if((c=l>=(u=(a+s)/2))?a=u:s=u,e=n,!(n=n[d=+c]))return this;if(!n.length)break;e[d+1&1]&&(r=e,h=d)}for(;n.data!==t;)if(i=n,!(n=n.next))return this;return(o=n.next)&&delete n.next,i?(o?i.next=o:delete i.next,this):e?(o?e[d]=o:delete e[d],(n=e[0]||e[1])&&n===(e[1]||e[0])&&!n.length&&(r?r[h]=n:this._root=n),this):(this._root=o,this)}function r2(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function i2(){return this._root}function o2(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function a2(t){var e=[],n,r=this._root,i,o,a;for(r&&e.push(new Br(r,this._x0,this._x1));n=e.pop();)if(!t(r=n.node,o=n.x0,a=n.x1)&&r.length){var s=(o+a)/2;(i=r[1])&&e.push(new Br(i,s,a)),(i=r[0])&&e.push(new Br(i,o,s))}return this}function s2(t){var e=[],n=[],r;for(this._root&&e.push(new Br(this._root,this._x0,this._x1));r=e.pop();){var i=r.node;if(i.length){var o,a=r.x0,s=r.x1,l=(a+s)/2;(o=i[0])&&e.push(new Br(o,a,l)),(o=i[1])&&e.push(new Br(o,l,s))}n.push(r)}for(;r=n.pop();)t(r.node,r.x0,r.x1);return this}function l2(t){return t[0]}function u2(t){return arguments.length?(this._x=t,this):this._x}function Nx(t,e){var n=new vp(e??l2,NaN,NaN);return t==null?n:n.addAll(t)}function vp(t,e,n){this._x=t,this._x0=e,this._x1=n,this._root=void 0}function Lv(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var Sn=Nx.prototype=vp.prototype;Sn.copy=function(){var t=new vp(this._x,this._x0,this._x1),e=this._root,n,r;if(!e)return t;if(!e.length)return t._root=Lv(e),t;for(n=[{source:e,target:t._root=new Array(2)}];e=n.pop();)for(var i=0;i<2;++i)(r=e.source[i])&&(r.length?n.push({source:r,target:e.target[i]=new Array(2)}):e.target[i]=Lv(r));return t};Sn.add=KP;Sn.addAll=ZP;Sn.cover=QP;Sn.data=JP;Sn.extent=e2;Sn.find=t2;Sn.remove=n2;Sn.removeAll=r2;Sn.root=i2;Sn.size=o2;Sn.visit=a2;Sn.visitAfter=s2;Sn.x=u2;function c2(t){const e=+this._x.call(null,t),n=+this._y.call(null,t);return Ix(this.cover(e,n),e,n,t)}function Ix(t,e,n,r){if(isNaN(e)||isNaN(n))return t;var i,o=t._root,a={data:r},s=t._x0,l=t._y0,u=t._x1,c=t._y1,d,h,p,g,v,m,f,_;if(!o)return t._root=a,t;for(;o.length;)if((v=e>=(d=(s+u)/2))?s=d:u=d,(m=n>=(h=(l+c)/2))?l=h:c=h,i=o,!(o=o[f=m<<1|v]))return i[f]=a,t;if(p=+t._x.call(null,o.data),g=+t._y.call(null,o.data),e===p&&n===g)return a.next=o,i?i[f]=a:t._root=a,t;do i=i?i[f]=new Array(4):t._root=new Array(4),(v=e>=(d=(s+u)/2))?s=d:u=d,(m=n>=(h=(l+c)/2))?l=h:c=h;while((f=m<<1|v)===(_=(g>=h)<<1|p>=d));return i[_]=o,i[f]=a,t}function f2(t){var e,n,r=t.length,i,o,a=new Array(r),s=new Array(r),l=1/0,u=1/0,c=-1/0,d=-1/0;for(n=0;n<r;++n)isNaN(i=+this._x.call(null,e=t[n]))||isNaN(o=+this._y.call(null,e))||(a[n]=i,s[n]=o,i<l&&(l=i),i>c&&(c=i),o<u&&(u=o),o>d&&(d=o));if(l>c||u>d)return this;for(this.cover(l,u).cover(c,d),n=0;n<r;++n)Ix(this,a[n],s[n],t[n]);return this}function d2(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(n))i=(n=Math.floor(t))+1,o=(r=Math.floor(e))+1;else{for(var a=i-n||1,s=this._root,l,u;n>t||t>=i||r>e||e>=o;)switch(u=(e<r)<<1|t<n,l=new Array(4),l[u]=s,s=l,a*=2,u){case 0:i=n+a,o=r+a;break;case 1:n=i-a,o=r+a;break;case 2:i=n+a,r=o-a;break;case 3:n=i-a,r=o-a;break}this._root&&this._root.length&&(this._root=s)}return this._x0=n,this._y0=r,this._x1=i,this._y1=o,this}function h2(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function p2(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function un(t,e,n,r,i){this.node=t,this.x0=e,this.y0=n,this.x1=r,this.y1=i}function m2(t,e,n){var r,i=this._x0,o=this._y0,a,s,l,u,c=this._x1,d=this._y1,h=[],p=this._root,g,v;for(p&&h.push(new un(p,i,o,c,d)),n==null?n=1/0:(i=t-n,o=e-n,c=t+n,d=e+n,n*=n);g=h.pop();)if(!(!(p=g.node)||(a=g.x0)>c||(s=g.y0)>d||(l=g.x1)<i||(u=g.y1)<o))if(p.length){var m=(a+l)/2,f=(s+u)/2;h.push(new un(p[3],m,f,l,u),new un(p[2],a,f,m,u),new un(p[1],m,s,l,f),new un(p[0],a,s,m,f)),(v=(e>=f)<<1|t>=m)&&(g=h[h.length-1],h[h.length-1]=h[h.length-1-v],h[h.length-1-v]=g)}else{var _=t-+this._x.call(null,p.data),y=e-+this._y.call(null,p.data),x=_*_+y*y;if(x<n){var S=Math.sqrt(n=x);i=t-S,o=e-S,c=t+S,d=e+S,r=p.data}}return r}function g2(t){if(isNaN(c=+this._x.call(null,t))||isNaN(d=+this._y.call(null,t)))return this;var e,n=this._root,r,i,o,a=this._x0,s=this._y0,l=this._x1,u=this._y1,c,d,h,p,g,v,m,f;if(!n)return this;if(n.length)for(;;){if((g=c>=(h=(a+l)/2))?a=h:l=h,(v=d>=(p=(s+u)/2))?s=p:u=p,e=n,!(n=n[m=v<<1|g]))return this;if(!n.length)break;(e[m+1&3]||e[m+2&3]||e[m+3&3])&&(r=e,f=m)}for(;n.data!==t;)if(i=n,!(n=n.next))return this;return(o=n.next)&&delete n.next,i?(o?i.next=o:delete i.next,this):e?(o?e[m]=o:delete e[m],(n=e[0]||e[1]||e[2]||e[3])&&n===(e[3]||e[2]||e[1]||e[0])&&!n.length&&(r?r[f]=n:this._root=n),this):(this._root=o,this)}function v2(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function _2(){return this._root}function y2(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function x2(t){var e=[],n,r=this._root,i,o,a,s,l;for(r&&e.push(new un(r,this._x0,this._y0,this._x1,this._y1));n=e.pop();)if(!t(r=n.node,o=n.x0,a=n.y0,s=n.x1,l=n.y1)&&r.length){var u=(o+s)/2,c=(a+l)/2;(i=r[3])&&e.push(new un(i,u,c,s,l)),(i=r[2])&&e.push(new un(i,o,c,u,l)),(i=r[1])&&e.push(new un(i,u,a,s,c)),(i=r[0])&&e.push(new un(i,o,a,u,c))}return this}function S2(t){var e=[],n=[],r;for(this._root&&e.push(new un(this._root,this._x0,this._y0,this._x1,this._y1));r=e.pop();){var i=r.node;if(i.length){var o,a=r.x0,s=r.y0,l=r.x1,u=r.y1,c=(a+l)/2,d=(s+u)/2;(o=i[0])&&e.push(new un(o,a,s,c,d)),(o=i[1])&&e.push(new un(o,c,s,l,d)),(o=i[2])&&e.push(new un(o,a,d,c,u)),(o=i[3])&&e.push(new un(o,c,d,l,u))}n.push(r)}for(;r=n.pop();)t(r.node,r.x0,r.y0,r.x1,r.y1);return this}function M2(t){return t[0]}function E2(t){return arguments.length?(this._x=t,this):this._x}function w2(t){return t[1]}function b2(t){return arguments.length?(this._y=t,this):this._y}function Ux(t,e,n){var r=new _p(e??M2,n??w2,NaN,NaN,NaN,NaN);return t==null?r:r.addAll(t)}function _p(t,e,n,r,i,o){this._x=t,this._y=e,this._x0=n,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function Ov(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var pn=Ux.prototype=_p.prototype;pn.copy=function(){var t=new _p(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,n,r;if(!e)return t;if(!e.length)return t._root=Ov(e),t;for(n=[{source:e,target:t._root=new Array(4)}];e=n.pop();)for(var i=0;i<4;++i)(r=e.source[i])&&(r.length?n.push({source:r,target:e.target[i]=new Array(4)}):e.target[i]=Ov(r));return t};pn.add=c2;pn.addAll=f2;pn.cover=d2;pn.data=h2;pn.extent=p2;pn.find=m2;pn.remove=g2;pn.removeAll=v2;pn.root=_2;pn.size=y2;pn.visit=x2;pn.visitAfter=S2;pn.x=E2;pn.y=b2;function T2(t){const e=+this._x.call(null,t),n=+this._y.call(null,t),r=+this._z.call(null,t);return kx(this.cover(e,n,r),e,n,r,t)}function kx(t,e,n,r,i){if(isNaN(e)||isNaN(n)||isNaN(r))return t;var o,a=t._root,s={data:i},l=t._x0,u=t._y0,c=t._z0,d=t._x1,h=t._y1,p=t._z1,g,v,m,f,_,y,x,S,M,E,A;if(!a)return t._root=s,t;for(;a.length;)if((x=e>=(g=(l+d)/2))?l=g:d=g,(S=n>=(v=(u+h)/2))?u=v:h=v,(M=r>=(m=(c+p)/2))?c=m:p=m,o=a,!(a=a[E=M<<2|S<<1|x]))return o[E]=s,t;if(f=+t._x.call(null,a.data),_=+t._y.call(null,a.data),y=+t._z.call(null,a.data),e===f&&n===_&&r===y)return s.next=a,o?o[E]=s:t._root=s,t;do o=o?o[E]=new Array(8):t._root=new Array(8),(x=e>=(g=(l+d)/2))?l=g:d=g,(S=n>=(v=(u+h)/2))?u=v:h=v,(M=r>=(m=(c+p)/2))?c=m:p=m;while((E=M<<2|S<<1|x)===(A=(y>=m)<<2|(_>=v)<<1|f>=g));return o[A]=a,o[E]=s,t}function A2(t){Array.isArray(t)||(t=Array.from(t));const e=t.length,n=new Float64Array(e),r=new Float64Array(e),i=new Float64Array(e);let o=1/0,a=1/0,s=1/0,l=-1/0,u=-1/0,c=-1/0;for(let d=0,h,p,g,v;d<e;++d)isNaN(p=+this._x.call(null,h=t[d]))||isNaN(g=+this._y.call(null,h))||isNaN(v=+this._z.call(null,h))||(n[d]=p,r[d]=g,i[d]=v,p<o&&(o=p),p>l&&(l=p),g<a&&(a=g),g>u&&(u=g),v<s&&(s=v),v>c&&(c=v));if(o>l||a>u||s>c)return this;this.cover(o,a,s).cover(l,u,c);for(let d=0;d<e;++d)kx(this,n[d],r[d],i[d],t[d]);return this}function C2(t,e,n){if(isNaN(t=+t)||isNaN(e=+e)||isNaN(n=+n))return this;var r=this._x0,i=this._y0,o=this._z0,a=this._x1,s=this._y1,l=this._z1;if(isNaN(r))a=(r=Math.floor(t))+1,s=(i=Math.floor(e))+1,l=(o=Math.floor(n))+1;else{for(var u=a-r||1,c=this._root,d,h;r>t||t>=a||i>e||e>=s||o>n||n>=l;)switch(h=(n<o)<<2|(e<i)<<1|t<r,d=new Array(8),d[h]=c,c=d,u*=2,h){case 0:a=r+u,s=i+u,l=o+u;break;case 1:r=a-u,s=i+u,l=o+u;break;case 2:a=r+u,i=s-u,l=o+u;break;case 3:r=a-u,i=s-u,l=o+u;break;case 4:a=r+u,s=i+u,o=l-u;break;case 5:r=a-u,s=i+u,o=l-u;break;case 6:a=r+u,i=s-u,o=l-u;break;case 7:r=a-u,i=s-u,o=l-u;break}this._root&&this._root.length&&(this._root=c)}return this._x0=r,this._y0=i,this._z0=o,this._x1=a,this._y1=s,this._z1=l,this}function R2(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function P2(t){return arguments.length?this.cover(+t[0][0],+t[0][1],+t[0][2]).cover(+t[1][0],+t[1][1],+t[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function lt(t,e,n,r,i,o,a){this.node=t,this.x0=e,this.y0=n,this.z0=r,this.x1=i,this.y1=o,this.z1=a}function L2(t,e,n,r){var i,o=this._x0,a=this._y0,s=this._z0,l,u,c,d,h,p,g=this._x1,v=this._y1,m=this._z1,f=[],_=this._root,y,x;for(_&&f.push(new lt(_,o,a,s,g,v,m)),r==null?r=1/0:(o=t-r,a=e-r,s=n-r,g=t+r,v=e+r,m=n+r,r*=r);y=f.pop();)if(!(!(_=y.node)||(l=y.x0)>g||(u=y.y0)>v||(c=y.z0)>m||(d=y.x1)<o||(h=y.y1)<a||(p=y.z1)<s))if(_.length){var S=(l+d)/2,M=(u+h)/2,E=(c+p)/2;f.push(new lt(_[7],S,M,E,d,h,p),new lt(_[6],l,M,E,S,h,p),new lt(_[5],S,u,E,d,M,p),new lt(_[4],l,u,E,S,M,p),new lt(_[3],S,M,c,d,h,E),new lt(_[2],l,M,c,S,h,E),new lt(_[1],S,u,c,d,M,E),new lt(_[0],l,u,c,S,M,E)),(x=(n>=E)<<2|(e>=M)<<1|t>=S)&&(y=f[f.length-1],f[f.length-1]=f[f.length-1-x],f[f.length-1-x]=y)}else{var A=t-+this._x.call(null,_.data),w=e-+this._y.call(null,_.data),b=n-+this._z.call(null,_.data),B=A*A+w*w+b*b;if(B<r){var k=Math.sqrt(r=B);o=t-k,a=e-k,s=n-k,g=t+k,v=e+k,m=n+k,i=_.data}}return i}function O2(t){if(isNaN(h=+this._x.call(null,t))||isNaN(p=+this._y.call(null,t))||isNaN(g=+this._z.call(null,t)))return this;var e,n=this._root,r,i,o,a=this._x0,s=this._y0,l=this._z0,u=this._x1,c=this._y1,d=this._z1,h,p,g,v,m,f,_,y,x,S,M;if(!n)return this;if(n.length)for(;;){if((_=h>=(v=(a+u)/2))?a=v:u=v,(y=p>=(m=(s+c)/2))?s=m:c=m,(x=g>=(f=(l+d)/2))?l=f:d=f,e=n,!(n=n[S=x<<2|y<<1|_]))return this;if(!n.length)break;(e[S+1&7]||e[S+2&7]||e[S+3&7]||e[S+4&7]||e[S+5&7]||e[S+6&7]||e[S+7&7])&&(r=e,M=S)}for(;n.data!==t;)if(i=n,!(n=n.next))return this;return(o=n.next)&&delete n.next,i?(o?i.next=o:delete i.next,this):e?(o?e[S]=o:delete e[S],(n=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&n===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!n.length&&(r?r[M]=n:this._root=n),this):(this._root=o,this)}function D2(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function N2(){return this._root}function I2(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function U2(t){var e=[],n,r=this._root,i,o,a,s,l,u,c;for(r&&e.push(new lt(r,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));n=e.pop();)if(!t(r=n.node,o=n.x0,a=n.y0,s=n.z0,l=n.x1,u=n.y1,c=n.z1)&&r.length){var d=(o+l)/2,h=(a+u)/2,p=(s+c)/2;(i=r[7])&&e.push(new lt(i,d,h,p,l,u,c)),(i=r[6])&&e.push(new lt(i,o,h,p,d,u,c)),(i=r[5])&&e.push(new lt(i,d,a,p,l,h,c)),(i=r[4])&&e.push(new lt(i,o,a,p,d,h,c)),(i=r[3])&&e.push(new lt(i,d,h,s,l,u,p)),(i=r[2])&&e.push(new lt(i,o,h,s,d,u,p)),(i=r[1])&&e.push(new lt(i,d,a,s,l,h,p)),(i=r[0])&&e.push(new lt(i,o,a,s,d,h,p))}return this}function k2(t){var e=[],n=[],r;for(this._root&&e.push(new lt(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));r=e.pop();){var i=r.node;if(i.length){var o,a=r.x0,s=r.y0,l=r.z0,u=r.x1,c=r.y1,d=r.z1,h=(a+u)/2,p=(s+c)/2,g=(l+d)/2;(o=i[0])&&e.push(new lt(o,a,s,l,h,p,g)),(o=i[1])&&e.push(new lt(o,h,s,l,u,p,g)),(o=i[2])&&e.push(new lt(o,a,p,l,h,c,g)),(o=i[3])&&e.push(new lt(o,h,p,l,u,c,g)),(o=i[4])&&e.push(new lt(o,a,s,g,h,p,d)),(o=i[5])&&e.push(new lt(o,h,s,g,u,p,d)),(o=i[6])&&e.push(new lt(o,a,p,g,h,c,d)),(o=i[7])&&e.push(new lt(o,h,p,g,u,c,d))}n.push(r)}for(;r=n.pop();)t(r.node,r.x0,r.y0,r.z0,r.x1,r.y1,r.z1);return this}function F2(t){return t[0]}function z2(t){return arguments.length?(this._x=t,this):this._x}function B2(t){return t[1]}function H2(t){return arguments.length?(this._y=t,this):this._y}function G2(t){return t[2]}function V2(t){return arguments.length?(this._z=t,this):this._z}function Fx(t,e,n,r){var i=new yp(e??F2,n??B2,r??G2,NaN,NaN,NaN,NaN,NaN,NaN);return t==null?i:i.addAll(t)}function yp(t,e,n,r,i,o,a,s,l){this._x=t,this._y=e,this._z=n,this._x0=r,this._y0=i,this._z0=o,this._x1=a,this._y1=s,this._z1=l,this._root=void 0}function Dv(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var rn=Fx.prototype=yp.prototype;rn.copy=function(){var t=new yp(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,n,r;if(!e)return t;if(!e.length)return t._root=Dv(e),t;for(n=[{source:e,target:t._root=new Array(8)}];e=n.pop();)for(var i=0;i<8;++i)(r=e.source[i])&&(r.length?n.push({source:r,target:e.target[i]=new Array(8)}):e.target[i]=Dv(r));return t};rn.add=T2;rn.addAll=A2;rn.cover=C2;rn.data=R2;rn.extent=P2;rn.find=L2;rn.remove=O2;rn.removeAll=D2;rn.root=N2;rn.size=I2;rn.visit=U2;rn.visitAfter=k2;rn.x=z2;rn.y=H2;rn.z=V2;function kr(t){return function(){return t}}function Or(t){return(t()-.5)*1e-6}function W2(t){return t.index}function Nv(t,e){var n=t.get(e);if(!n)throw new Error("node not found: "+e);return n}function j2(t){var e=W2,n=h,r,i=kr(30),o,a,s,l,u,c,d=1;t==null&&(t=[]);function h(f){return 1/Math.min(l[f.source.index],l[f.target.index])}function p(f){for(var _=0,y=t.length;_<d;++_)for(var x=0,S,M,E,A=0,w=0,b=0,B,k;x<y;++x)S=t[x],M=S.source,E=S.target,A=E.x+E.vx-M.x-M.vx||Or(c),s>1&&(w=E.y+E.vy-M.y-M.vy||Or(c)),s>2&&(b=E.z+E.vz-M.z-M.vz||Or(c)),B=Math.sqrt(A*A+w*w+b*b),B=(B-o[x])/B*f*r[x],A*=B,w*=B,b*=B,E.vx-=A*(k=u[x]),s>1&&(E.vy-=w*k),s>2&&(E.vz-=b*k),M.vx+=A*(k=1-k),s>1&&(M.vy+=w*k),s>2&&(M.vz+=b*k)}function g(){if(a){var f,_=a.length,y=t.length,x=new Map(a.map((M,E)=>[e(M,E,a),M])),S;for(f=0,l=new Array(_);f<y;++f)S=t[f],S.index=f,typeof S.source!="object"&&(S.source=Nv(x,S.source)),typeof S.target!="object"&&(S.target=Nv(x,S.target)),l[S.source.index]=(l[S.source.index]||0)+1,l[S.target.index]=(l[S.target.index]||0)+1;for(f=0,u=new Array(y);f<y;++f)S=t[f],u[f]=l[S.source.index]/(l[S.source.index]+l[S.target.index]);r=new Array(y),v(),o=new Array(y),m()}}function v(){if(a)for(var f=0,_=t.length;f<_;++f)r[f]=+n(t[f],f,t)}function m(){if(a)for(var f=0,_=t.length;f<_;++f)o[f]=+i(t[f],f,t)}return p.initialize=function(f,..._){a=f,c=_.find(y=>typeof y=="function")||Math.random,s=_.find(y=>[1,2,3].includes(y))||2,g()},p.links=function(f){return arguments.length?(t=f,g(),p):t},p.id=function(f){return arguments.length?(e=f,p):e},p.iterations=function(f){return arguments.length?(d=+f,p):d},p.strength=function(f){return arguments.length?(n=typeof f=="function"?f:kr(+f),v(),p):n},p.distance=function(f){return arguments.length?(i=typeof f=="function"?f:kr(+f),m(),p):i},p}var $2={value:()=>{}};function zx(){for(var t=0,e=arguments.length,n={},r;t<e;++t){if(!(r=arguments[t]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new Zl(n)}function Zl(t){this._=t}function X2(t,e){return t.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}Zl.prototype=zx.prototype={constructor:Zl,on:function(t,e){var n=this._,r=X2(t+"",n),i,o=-1,a=r.length;if(arguments.length<2){for(;++o<a;)if((i=(t=r[o]).type)&&(i=q2(n[i],t.name)))return i;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<a;)if(i=(t=r[o]).type)n[i]=Iv(n[i],t.name,e);else if(e==null)for(i in n)n[i]=Iv(n[i],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Zl(t)},call:function(t,e){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,o;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],r=0,i=o.length;r<i;++r)o[r].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(e,n)}};function q2(t,e){for(var n=0,r=t.length,i;n<r;++n)if((i=t[n]).name===e)return i.value}function Iv(t,e,n){for(var r=0,i=t.length;r<i;++r)if(t[r].name===e){t[r]=$2,t=t.slice(0,r).concat(t.slice(r+1));break}return n!=null&&t.push({name:e,value:n}),t}var ha=0,Xa=0,ka=0,Bx=1e3,Pu,qa,Lu=0,ro=0,sc=0,Ls=typeof performance=="object"&&performance.now?performance:Date,Hx=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Gx(){return ro||(Hx(Y2),ro=Ls.now()+sc)}function Y2(){ro=0}function jd(){this._call=this._time=this._next=null}jd.prototype=Vx.prototype={constructor:jd,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?Gx():+n)+(e==null?0:+e),!this._next&&qa!==this&&(qa?qa._next=this:Pu=this,qa=this),this._call=t,this._time=n,$d()},stop:function(){this._call&&(this._call=null,this._time=1/0,$d())}};function Vx(t,e,n){var r=new jd;return r.restart(t,e,n),r}function K2(){Gx(),++ha;for(var t=Pu,e;t;)(e=ro-t._time)>=0&&t._call.call(void 0,e),t=t._next;--ha}function Uv(){ro=(Lu=Ls.now())+sc,ha=Xa=0;try{K2()}finally{ha=0,Q2(),ro=0}}function Z2(){var t=Ls.now(),e=t-Lu;e>Bx&&(sc-=e,Lu=t)}function Q2(){for(var t,e=Pu,n,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Pu=n);qa=t,$d(r)}function $d(t){if(!ha){Xa&&(Xa=clearTimeout(Xa));var e=t-ro;e>24?(t<1/0&&(Xa=setTimeout(Uv,t-Ls.now()-sc)),ka&&(ka=clearInterval(ka))):(ka||(Lu=Ls.now(),ka=setInterval(Z2,Bx)),ha=1,Hx(Uv))}}const J2=1664525,eL=1013904223,kv=4294967296;function tL(){let t=1;return()=>(t=(J2*t+eL)%kv)/kv}var Fv=3;function wf(t){return t.x}function zv(t){return t.y}function nL(t){return t.z}var rL=10,iL=Math.PI*(3-Math.sqrt(5)),oL=Math.PI*20/(9+Math.sqrt(221));function aL(t,e){e=e||2;var n=Math.min(Fv,Math.max(1,Math.round(e))),r,i=1,o=.001,a=1-Math.pow(o,1/300),s=0,l=.6,u=new Map,c=Vx(p),d=zx("tick","end"),h=tL();t==null&&(t=[]);function p(){g(),d.call("tick",r),i<o&&(c.stop(),d.call("end",r))}function g(f){var _,y=t.length,x;f===void 0&&(f=1);for(var S=0;S<f;++S)for(i+=(s-i)*a,u.forEach(function(M){M(i)}),_=0;_<y;++_)x=t[_],x.fx==null?x.x+=x.vx*=l:(x.x=x.fx,x.vx=0),n>1&&(x.fy==null?x.y+=x.vy*=l:(x.y=x.fy,x.vy=0)),n>2&&(x.fz==null?x.z+=x.vz*=l:(x.z=x.fz,x.vz=0));return r}function v(){for(var f=0,_=t.length,y;f<_;++f){if(y=t[f],y.index=f,y.fx!=null&&(y.x=y.fx),y.fy!=null&&(y.y=y.fy),y.fz!=null&&(y.z=y.fz),isNaN(y.x)||n>1&&isNaN(y.y)||n>2&&isNaN(y.z)){var x=rL*(n>2?Math.cbrt(.5+f):n>1?Math.sqrt(.5+f):f),S=f*iL,M=f*oL;n===1?y.x=x:n===2?(y.x=x*Math.cos(S),y.y=x*Math.sin(S)):(y.x=x*Math.sin(S)*Math.cos(M),y.y=x*Math.cos(S),y.z=x*Math.sin(S)*Math.sin(M))}(isNaN(y.vx)||n>1&&isNaN(y.vy)||n>2&&isNaN(y.vz))&&(y.vx=0,n>1&&(y.vy=0),n>2&&(y.vz=0))}}function m(f){return f.initialize&&f.initialize(t,h,n),f}return v(),r={tick:g,restart:function(){return c.restart(p),r},stop:function(){return c.stop(),r},numDimensions:function(f){return arguments.length?(n=Math.min(Fv,Math.max(1,Math.round(f))),u.forEach(m),r):n},nodes:function(f){return arguments.length?(t=f,v(),u.forEach(m),r):t},alpha:function(f){return arguments.length?(i=+f,r):i},alphaMin:function(f){return arguments.length?(o=+f,r):o},alphaDecay:function(f){return arguments.length?(a=+f,r):+a},alphaTarget:function(f){return arguments.length?(s=+f,r):s},velocityDecay:function(f){return arguments.length?(l=1-f,r):1-l},randomSource:function(f){return arguments.length?(h=f,u.forEach(m),r):h},force:function(f,_){return arguments.length>1?(_==null?u.delete(f):u.set(f,m(_)),r):u.get(f)},find:function(){var f=Array.prototype.slice.call(arguments),_=f.shift()||0,y=(n>1?f.shift():null)||0,x=(n>2?f.shift():null)||0,S=f.shift()||1/0,M=0,E=t.length,A,w,b,B,k,te;for(S*=S,M=0;M<E;++M)k=t[M],A=_-k.x,w=y-(k.y||0),b=x-(k.z||0),B=A*A+w*w+b*b,B<S&&(te=k,S=B);return te},on:function(f,_){return arguments.length>1?(d.on(f,_),r):d.on(f)}}}function sL(){var t,e,n,r,i,o=kr(-30),a,s=1,l=1/0,u=.81;function c(g){var v,m=t.length,f=(e===1?Nx(t,wf):e===2?Ux(t,wf,zv):e===3?Fx(t,wf,zv,nL):null).visitAfter(h);for(i=g,v=0;v<m;++v)n=t[v],f.visit(p)}function d(){if(t){var g,v=t.length,m;for(a=new Array(v),g=0;g<v;++g)m=t[g],a[m.index]=+o(m,g,t)}}function h(g){var v=0,m,f,_=0,y,x,S,M,E=g.length;if(E){for(y=x=S=M=0;M<E;++M)(m=g[M])&&(f=Math.abs(m.value))&&(v+=m.value,_+=f,y+=f*(m.x||0),x+=f*(m.y||0),S+=f*(m.z||0));v*=Math.sqrt(4/E),g.x=y/_,e>1&&(g.y=x/_),e>2&&(g.z=S/_)}else{m=g,m.x=m.data.x,e>1&&(m.y=m.data.y),e>2&&(m.z=m.data.z);do v+=a[m.data.index];while(m=m.next)}g.value=v}function p(g,v,m,f,_){if(!g.value)return!0;var y=[m,f,_][e-1],x=g.x-n.x,S=e>1?g.y-n.y:0,M=e>2?g.z-n.z:0,E=y-v,A=x*x+S*S+M*M;if(E*E/u<A)return A<l&&(x===0&&(x=Or(r),A+=x*x),e>1&&S===0&&(S=Or(r),A+=S*S),e>2&&M===0&&(M=Or(r),A+=M*M),A<s&&(A=Math.sqrt(s*A)),n.vx+=x*g.value*i/A,e>1&&(n.vy+=S*g.value*i/A),e>2&&(n.vz+=M*g.value*i/A)),!0;if(g.length||A>=l)return;(g.data!==n||g.next)&&(x===0&&(x=Or(r),A+=x*x),e>1&&S===0&&(S=Or(r),A+=S*S),e>2&&M===0&&(M=Or(r),A+=M*M),A<s&&(A=Math.sqrt(s*A)));do g.data!==n&&(E=a[g.data.index]*i/A,n.vx+=x*E,e>1&&(n.vy+=S*E),e>2&&(n.vz+=M*E));while(g=g.next)}return c.initialize=function(g,...v){t=g,r=v.find(m=>typeof m=="function")||Math.random,e=v.find(m=>[1,2,3].includes(m))||2,d()},c.strength=function(g){return arguments.length?(o=typeof g=="function"?g:kr(+g),d(),c):o},c.distanceMin=function(g){return arguments.length?(s=g*g,c):Math.sqrt(s)},c.distanceMax=function(g){return arguments.length?(l=g*g,c):Math.sqrt(l)},c.theta=function(g){return arguments.length?(u=g*g,c):Math.sqrt(u)},c}function lL(t,e,n,r){var i,o,a=kr(.1),s,l;typeof t!="function"&&(t=kr(+t)),e==null&&(e=0),n==null&&(n=0),r==null&&(r=0);function u(d){for(var h=0,p=i.length;h<p;++h){var g=i[h],v=g.x-e||1e-6,m=(g.y||0)-n||1e-6,f=(g.z||0)-r||1e-6,_=Math.sqrt(v*v+m*m+f*f),y=(l[h]-_)*s[h]*d/_;g.vx+=v*y,o>1&&(g.vy+=m*y),o>2&&(g.vz+=f*y)}}function c(){if(i){var d,h=i.length;for(s=new Array(h),l=new Array(h),d=0;d<h;++d)l[d]=+t(i[d],d,i),s[d]=isNaN(l[d])?0:+a(i[d],d,i)}}return u.initialize=function(d,...h){i=d,o=h.find(p=>[1,2,3].includes(p))||2,c()},u.strength=function(d){return arguments.length?(a=typeof d=="function"?d:kr(+d),c(),u):a},u.radius=function(d){return arguments.length?(t=typeof d=="function"?d:kr(+d),c(),u):t},u.x=function(d){return arguments.length?(e=+d,u):e},u.y=function(d){return arguments.length?(n=+d,u):n},u.z=function(d){return arguments.length?(r=+d,u):r},u}var xp=function(e){cL(e);var n=uL(e);return e.on=n.on,e.off=n.off,e.fire=n.fire,e};function uL(t){var e=Object.create(null);return{on:function(n,r,i){if(typeof r!="function")throw new Error("callback is expected to be a function");var o=e[n];return o||(o=e[n]=[]),o.push({callback:r,ctx:i}),t},off:function(n,r){var i=typeof n>"u";if(i)return e=Object.create(null),t;if(e[n]){var o=typeof r!="function";if(o)delete e[n];else for(var a=e[n],s=0;s<a.length;++s)a[s].callback===r&&a.splice(s,1)}return t},fire:function(n){var r=e[n];if(!r)return t;var i;arguments.length>1&&(i=Array.prototype.splice.call(arguments,1));for(var o=0;o<r.length;++o){var a=r[o];a.callback.apply(a.ctx,i)}return t}}}function cL(t){if(!t)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],n=0;n<e.length;++n)if(t.hasOwnProperty(e[n]))throw new Error("Subject cannot be eventified, since it already has property '"+e[n]+"'")}var fL=hL,dL=xp;function hL(t){if(t=t||{},"uniqueLinkId"in t&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),t.multigraph=t.uniqueLinkId),t.multigraph===void 0&&(t.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,n=new Map,r={},i=0,o=t.multigraph?x:y,a=[],s=D,l=D,u=D,c=D,d={version:20,addNode:v,addLink:_,removeLink:A,removeNode:f,getNode:m,getNodeCount:S,getLinkCount:M,getEdgeCount:M,getLinksCount:M,getNodesCount:S,getLinks:E,forEachNode:W,forEachLinkedNode:te,forEachLink:k,beginUpdate:u,endUpdate:c,clear:B,hasLink:b,hasNode:m,getLink:b};return dL(d),h(),d;function h(){var N=d.on;d.on=V;function V(){return d.beginUpdate=u=J,d.endUpdate=c=z,s=p,l=g,d.on=N,N.apply(d,arguments)}}function p(N,V){a.push({link:N,changeType:V})}function g(N,V){a.push({node:N,changeType:V})}function v(N,V){if(N===void 0)throw new Error("Invalid node identifier");u();var Y=m(N);return Y?(Y.data=V,l(Y,"update")):(Y=new pL(N,V),l(Y,"add")),e.set(N,Y),c(),Y}function m(N){return e.get(N)}function f(N){var V=m(N);if(!V)return!1;u();var Y=V.links;return Y&&(Y.forEach(w),V.links=null),e.delete(N),l(V,"remove"),c(),!0}function _(N,V,Y){u();var G=m(N)||v(N),$=m(V)||v(V),q=o(N,V,Y),re=n.has(q.id);return n.set(q.id,q),Bv(G,q),N!==V&&Bv($,q),s(q,re?"update":"add"),c(),q}function y(N,V,Y){var G=Dl(N,V),$=n.get(G);return $?($.data=Y,$):new Hv(N,V,Y,G)}function x(N,V,Y){var G=Dl(N,V),$=r.hasOwnProperty(G);if($||b(N,V)){$||(r[G]=0);var q="@"+ ++r[G];G=Dl(N+q,V+q)}return new Hv(N,V,Y,G)}function S(){return e.size}function M(){return n.size}function E(N){var V=m(N);return V?V.links:null}function A(N,V){return V!==void 0&&(N=b(N,V)),w(N)}function w(N){if(!N||!n.get(N.id))return!1;u(),n.delete(N.id);var V=m(N.fromId),Y=m(N.toId);return V&&V.links.delete(N),Y&&Y.links.delete(N),s(N,"remove"),c(),!0}function b(N,V){if(!(N===void 0||V===void 0))return n.get(Dl(N,V))}function B(){u(),W(function(N){f(N.id)}),c()}function k(N){if(typeof N=="function")for(var V=n.values(),Y=V.next();!Y.done;){if(N(Y.value))return!0;Y=V.next()}}function te(N,V,Y){var G=m(N);if(G&&G.links&&typeof V=="function")return Y?L(G.links,N,V):R(G.links,N,V)}function R(N,V,Y){for(var G,$=N.values(),q=$.next();!q.done;){var re=q.value,F=re.fromId===V?re.toId:re.fromId;if(G=Y(e.get(F),re),G)return!0;q=$.next()}}function L(N,V,Y){for(var G,$=N.values(),q=$.next();!q.done;){var re=q.value;if(re.fromId===V&&(G=Y(e.get(re.toId),re),G))return!0;q=$.next()}}function D(){}function J(){i+=1}function z(){i-=1,i===0&&a.length>0&&(d.fire("changed",a),a.length=0)}function W(N){if(typeof N!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+N);for(var V=e.values(),Y=V.next();!Y.done;){if(N(Y.value))return!0;Y=V.next()}}}function pL(t,e){this.id=t,this.links=null,this.data=e}function Bv(t,e){t.links?t.links.add(e):t.links=new Set([e])}function Hv(t,e,n,r){this.fromId=t,this.toId=e,this.data=n,this.id=r}function Dl(t,e){return t.toString()+"👉 "+e.toString()}const mL=Ds(fL);var Sp={exports:{}},Bs={exports:{}},Wx=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const gL=Wx;var xa=function(e){return n;function n(r,i){let o=i&&i.indent||0,a=i&&i.join!==void 0?i.join:`
`,s=Array(o+1).join(" "),l=[];for(let u=0;u<e;++u){let c=gL(u),d=u===0?"":s;l.push(d+r.replace(/{var}/g,c))}return l.join(a)}};const jx=xa;Bs.exports=vL;Bs.exports.generateCreateBodyFunctionBody=$x;Bs.exports.getVectorCode=qx;Bs.exports.getBodyCode=Xx;function vL(t,e){let n=$x(t,e),{Body:r}=new Function(n)();return r}function $x(t,e){return`
${qx(t,e)}
${Xx(t)}
return {Body: Body, Vector: Vector};
`}function Xx(t){let e=jx(t),n=e("{var}",{join:", "});return`
function Body(${n}) {
  this.isPinned = false;
  this.pos = new Vector(${n});
  this.force = new Vector();
  this.velocity = new Vector();
  this.mass = 1;

  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.reset = function() {
  this.force.reset();
  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.setPosition = function (${n}) {
  ${e("this.pos.{var} = {var} || 0;",{indent:2})}
};`}function qx(t,e){let n=jx(t),r="";return e&&(r=`${n(`
   var v{var};
Object.defineProperty(this, '{var}', {
  set: function(v) { 
    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
    v{var} = v; 
  },
  get: function() { return v{var}; }
});`)}`),`function Vector(${n("{var}",{join:", "})}) {
  ${r}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${n('if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");',{indent:4})}
      ${n("this.{var} = v.{var};",{indent:4})}
    } else {
      ${n('this.{var} = typeof {var} === "number" ? {var} : 0;',{indent:4})}
    }
  }
  
  Vector.prototype.reset = function () {
    ${n("this.{var} = ",{join:""})}0;
  };`}var _L=Bs.exports,Pi={exports:{}};const Mp=xa,ri=Wx;Pi.exports=yL;Pi.exports.generateQuadTreeFunctionBody=Yx;Pi.exports.getInsertStackCode=eS;Pi.exports.getQuadNodeCode=Jx;Pi.exports.isSamePosition=Kx;Pi.exports.getChildBodyCode=Qx;Pi.exports.setChildBodyCode=Zx;function yL(t){let e=Yx(t);return new Function(e)()}function Yx(t){let e=Mp(t),n=Math.pow(2,t);return`
${eS()}
${Jx(t)}
${Kx(t)}
${Qx(t)}
${Zx(t)}

function createQuadTree(options, random) {
  options = options || {};
  options.gravity = typeof options.gravity === 'number' ? options.gravity : -1;
  options.theta = typeof options.theta === 'number' ? options.theta : 0.8;

  var gravity = options.gravity;
  var updateQueue = [];
  var insertStack = new InsertStack();
  var theta = options.theta;

  var nodesCache = [];
  var currentInCache = 0;
  var root = newNode();

  return {
    insertBodies: insertBodies,

    /**
     * Gets root node if it is present
     */
    getRoot: function() {
      return root;
    },

    updateBodyForce: update,

    options: function(newOptions) {
      if (newOptions) {
        if (typeof newOptions.gravity === 'number') {
          gravity = newOptions.gravity;
        }
        if (typeof newOptions.theta === 'number') {
          theta = newOptions.theta;
        }

        return this;
      }

      return {
        gravity: gravity,
        theta: theta
      };
    }
  };

  function newNode() {
    // To avoid pressure on GC we reuse nodes.
    var node = nodesCache[currentInCache];
    if (node) {
${a("      node.")}
      node.body = null;
      node.mass = ${e("node.mass_{var} = ",{join:""})}0;
      ${e("node.min_{var} = node.max_{var} = ",{join:""})}0;
    } else {
      node = new QuadNode();
      nodesCache[currentInCache] = node;
    }

    ++currentInCache;
    return node;
  }

  function update(sourceBody) {
    var queue = updateQueue;
    var v;
    ${e("var d{var};",{indent:4})}
    var r; 
    ${e("var f{var} = 0;",{indent:4})}
    var queueLength = 1;
    var shiftIdx = 0;
    var pushIdx = 1;

    queue[0] = root;

    while (queueLength) {
      var node = queue[shiftIdx];
      var body = node.body;

      queueLength -= 1;
      shiftIdx += 1;
      var differentBody = (body !== sourceBody);
      if (body && differentBody) {
        // If the current node is a leaf node (and it is not source body),
        // calculate the force exerted by the current node on body, and add this
        // amount to body's net force.
        ${e("d{var} = body.pos.{var} - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Poor man's protection against zero distance.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }

        // This is standard gravitation force calculation but we divide
        // by r^3 to save two operations when normalizing force vector.
        v = gravity * body.mass * sourceBody.mass / (r * r * r);
        ${e("f{var} += v * d{var};",{indent:8})}
      } else if (differentBody) {
        // Otherwise, calculate the ratio s / r,  where s is the width of the region
        // represented by the internal node, and r is the distance between the body
        // and the node's center-of-mass
        ${e("d{var} = node.mass_{var} / node.mass - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Sorry about code duplication. I don't want to create many functions
          // right away. Just want to see performance first.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }
        // If s / r < θ, treat this internal node as a single body, and calculate the
        // force it exerts on sourceBody, and add this amount to sourceBody's net force.
        if ((node.max_${ri(0)} - node.min_${ri(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${e("f{var} += v * d{var};",{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${o()}
        }
      }
    }

    ${e("sourceBody.force.{var} += f{var};",{indent:4})}
  }

  function insertBodies(bodies) {
    ${e("var {var}min = Number.MAX_VALUE;",{indent:4})}
    ${e("var {var}max = Number.MIN_VALUE;",{indent:4})}
    var i = bodies.length;

    // To reduce quad tree depth we are looking for exact bounding box of all particles.
    while (i--) {
      var pos = bodies[i].pos;
      ${e("if (pos.{var} < {var}min) {var}min = pos.{var};",{indent:6})}
      ${e("if (pos.{var} > {var}max) {var}max = pos.{var};",{indent:6})}
    }

    // Makes the bounds square.
    var maxSideLength = -Infinity;
    ${e("if ({var}max - {var}min > maxSideLength) maxSideLength = {var}max - {var}min ;",{indent:4})}

    currentInCache = 0;
    root = newNode();
    ${e("root.min_{var} = {var}min;",{indent:4})}
    ${e("root.max_{var} = {var}min + maxSideLength;",{indent:4})}

    i = bodies.length - 1;
    if (i >= 0) {
      root.body = bodies[i];
    }
    while (i--) {
      insert(bodies[i], root);
    }
  }

  function insert(newBody) {
    insertStack.reset();
    insertStack.push(root, newBody);

    while (!insertStack.isEmpty()) {
      var stackItem = insertStack.pop();
      var node = stackItem.node;
      var body = stackItem.body;

      if (!node.body) {
        // This is internal node. Update the total mass of the node and center-of-mass.
        ${e("var {var} = body.pos.{var};",{indent:8})}
        node.mass += body.mass;
        ${e("node.mass_{var} += body.mass * {var};",{indent:8})}

        // Recursively insert the body in the appropriate quadrant.
        // But first find the appropriate quadrant.
        var quadIdx = 0; // Assume we are in the 0's quad.
        ${e("var min_{var} = node.min_{var};",{indent:8})}
        ${e("var max_{var} = (min_{var} + node.max_{var}) / 2;",{indent:8})}

${i(8)}

        var child = getChild(node, quadIdx);

        if (!child) {
          // The node is internal but this quadrant is not taken. Add
          // subnode to it.
          child = newNode();
          ${e("child.min_{var} = min_{var};",{indent:10})}
          ${e("child.max_{var} = max_{var};",{indent:10})}
          child.body = body;

          setChild(node, quadIdx, child);
        } else {
          // continue searching in this quadrant.
          insertStack.push(child, body);
        }
      } else {
        // We are trying to add to the leaf node.
        // We have to convert current leaf into internal node
        // and continue adding two nodes.
        var oldBody = node.body;
        node.body = null; // internal nodes do not cary bodies

        if (isSamePosition(oldBody.pos, body.pos)) {
          // Prevent infinite subdivision by bumping one node
          // anywhere in this quadrant
          var retriesCount = 3;
          do {
            var offset = random.nextDouble();
            ${e("var d{var} = (node.max_{var} - node.min_{var}) * offset;",{indent:12})}

            ${e("oldBody.pos.{var} = node.min_{var} + d{var};",{indent:12})}
            retriesCount -= 1;
            // Make sure we don't bump it out of the box. If we do, next iteration should fix it
          } while (retriesCount > 0 && isSamePosition(oldBody.pos, body.pos));

          if (retriesCount === 0 && isSamePosition(oldBody.pos, body.pos)) {
            // This is very bad, we ran out of precision.
            // if we do not return from the method we'll get into
            // infinite loop here. So we sacrifice correctness of layout, and keep the app running
            // Next layout iteration should get larger bounding box in the first step and fix this
            return;
          }
        }
        // Next iteration should subdivide node further.
        insertStack.push(node, oldBody);
        insertStack.push(node, body);
      }
    }
  }
}
return createQuadTree;

`;function i(s){let l=[],u=Array(s+1).join(" ");for(let c=0;c<t;++c)l.push(u+`if (${ri(c)} > max_${ri(c)}) {`),l.push(u+`  quadIdx = quadIdx + ${Math.pow(2,c)};`),l.push(u+`  min_${ri(c)} = max_${ri(c)};`),l.push(u+`  max_${ri(c)} = node.max_${ri(c)};`),l.push(u+"}");return l.join(`
`)}function o(){let s=Array(11).join(" "),l=[];for(let u=0;u<n;++u)l.push(s+`if (node.quad${u}) {`),l.push(s+`  queue[pushIdx] = node.quad${u};`),l.push(s+"  queueLength += 1;"),l.push(s+"  pushIdx += 1;"),l.push(s+"}");return l.join(`
`)}function a(s){let l=[];for(let u=0;u<n;++u)l.push(`${s}quad${u} = null;`);return l.join(`
`)}}function Kx(t){let e=Mp(t);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function Zx(t){var e=Math.pow(2,t);return`
function setChild(node, idx, child) {
  ${n()}
}`;function n(){let r=[];for(let i=0;i<e;++i){let o=i===0?"  ":"  else ";r.push(`${o}if (idx === ${i}) node.quad${i} = child;`)}return r.join(`
`)}}function Qx(t){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let n=[],r=Math.pow(2,t);for(let i=0;i<r;++i)n.push(`  if (idx === ${i}) return node.quad${i};`);return n.join(`
`)}}function Jx(t){let e=Mp(t),n=Math.pow(2,t);var r=`
function QuadNode() {
  // body stored inside this node. In quad tree only leaf nodes (by construction)
  // contain bodies:
  this.body = null;

  // Child nodes are stored in quads. Each quad is presented by number:
  // 0 | 1
  // -----
  // 2 | 3
${i("  this.")}

  // Total mass of current node
  this.mass = 0;

  // Center of mass coordinates
  ${e("this.mass_{var} = 0;",{indent:2})}

  // bounding box coordinates
  ${e("this.min_{var} = 0;",{indent:2})}
  ${e("this.max_{var} = 0;",{indent:2})}
}
`;return r;function i(o){let a=[];for(let s=0;s<n;++s)a.push(`${o}quad${s} = null;`);return a.join(`
`)}}function eS(){return`
/**
 * Our implementation of QuadTree is non-recursive to avoid GC hit
 * This data structure represent stack of elements
 * which we are trying to insert into quad tree.
 */
function InsertStack () {
    this.stack = [];
    this.popIdx = 0;
}

InsertStack.prototype = {
    isEmpty: function() {
        return this.popIdx === 0;
    },
    push: function (node, body) {
        var item = this.stack[this.popIdx];
        if (!item) {
            // we are trying to avoid memory pressure: create new element
            // only when absolutely necessary
            this.stack[this.popIdx] = new InsertStackElement(node, body);
        } else {
            item.node = node;
            item.body = body;
        }
        ++this.popIdx;
    },
    pop: function () {
        if (this.popIdx > 0) {
            return this.stack[--this.popIdx];
        }
    },
    reset: function () {
        this.popIdx = 0;
    }
};

function InsertStackElement(node, body) {
    this.node = node; // QuadTree node
    this.body = body; // physical body which needs to be inserted to node
}
`}var xL=Pi.exports,Ep={exports:{}};Ep.exports=ML;Ep.exports.generateFunctionBody=tS;const SL=xa;function ML(t){let e=tS(t);return new Function("bodies","settings","random",e)}function tS(t){let e=SL(t);return`
  var boundingBox = {
    ${e("min_{var}: 0, max_{var}: 0,",{indent:4})}
  };

  return {
    box: boundingBox,

    update: updateBoundingBox,

    reset: resetBoundingBox,

    getBestNewPosition: function (neighbors) {
      var ${e("base_{var} = 0",{join:", "})};

      if (neighbors.length) {
        for (var i = 0; i < neighbors.length; ++i) {
          let neighborPos = neighbors[i].pos;
          ${e("base_{var} += neighborPos.{var};",{indent:10})}
        }

        ${e("base_{var} /= neighbors.length;",{indent:8})}
      } else {
        ${e("base_{var} = (boundingBox.min_{var} + boundingBox.max_{var}) / 2;",{indent:8})}
      }

      var springLength = settings.springLength;
      return {
        ${e("{var}: base_{var} + (random.nextDouble() - 0.5) * springLength,",{indent:8})}
      };
    }
  };

  function updateBoundingBox() {
    var i = bodies.length;
    if (i === 0) return; // No bodies - no borders.

    ${e("var max_{var} = -Infinity;",{indent:4})}
    ${e("var min_{var} = Infinity;",{indent:4})}

    while(i--) {
      // this is O(n), it could be done faster with quadtree, if we check the root node bounds
      var bodyPos = bodies[i].pos;
      ${e("if (bodyPos.{var} < min_{var}) min_{var} = bodyPos.{var};",{indent:6})}
      ${e("if (bodyPos.{var} > max_{var}) max_{var} = bodyPos.{var};",{indent:6})}
    }

    ${e("boundingBox.min_{var} = min_{var};",{indent:4})}
    ${e("boundingBox.max_{var} = max_{var};",{indent:4})}
  }

  function resetBoundingBox() {
    ${e("boundingBox.min_{var} = boundingBox.max_{var} = 0;",{indent:4})}
  }
`}var EL=Ep.exports,wp={exports:{}};const wL=xa;wp.exports=bL;wp.exports.generateCreateDragForceFunctionBody=nS;function bL(t){let e=nS(t);return new Function("options",e)}function nS(t){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${wL(t)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var TL=wp.exports,bp={exports:{}};const AL=xa;bp.exports=CL;bp.exports.generateCreateSpringForceFunctionBody=rS;function CL(t){let e=rS(t);return new Function("options","random",e)}function rS(t){let e=AL(t);return`
  if (!Number.isFinite(options.springCoefficient)) throw new Error('Spring coefficient is not a number');
  if (!Number.isFinite(options.springLength)) throw new Error('Spring length is not a number');

  return {
    /**
     * Updates forces acting on a spring
     */
    update: function (spring) {
      var body1 = spring.from;
      var body2 = spring.to;
      var length = spring.length < 0 ? options.springLength : spring.length;
      ${e("var d{var} = body2.pos.{var} - body1.pos.{var};",{indent:6})}
      var r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

      if (r === 0) {
        ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
      }

      var d = r - length;
      var coefficient = ((spring.coefficient > 0) ? spring.coefficient : options.springCoefficient) * d / r;

      ${e("body1.force.{var} += coefficient * d{var}",{indent:6})};
      body1.springCount += 1;
      body1.springLength += r;

      ${e("body2.force.{var} -= coefficient * d{var}",{indent:6})};
      body2.springCount += 1;
      body2.springLength += r;
    }
  };
`}var RL=bp.exports,Tp={exports:{}};const PL=xa;Tp.exports=LL;Tp.exports.generateIntegratorFunctionBody=iS;function LL(t){let e=iS(t);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function iS(t){let e=PL(t);return`
  var length = bodies.length;
  if (length === 0) return 0;

  ${e("var d{var} = 0, t{var} = 0;",{indent:2})}

  for (var i = 0; i < length; ++i) {
    var body = bodies[i];
    if (body.isPinned) continue;

    if (adaptiveTimeStepWeight && body.springCount) {
      timeStep = (adaptiveTimeStepWeight * body.springLength/body.springCount);
    }

    var coeff = timeStep / body.mass;

    ${e("body.velocity.{var} += coeff * body.force.{var};",{indent:4})}
    ${e("var v{var} = body.velocity.{var};",{indent:4})}
    var v = Math.sqrt(${e("v{var} * v{var}",{join:" + "})});

    if (v > 1) {
      // We normalize it so that we move within timeStep range. 
      // for the case when v <= 1 - we let velocity to fade out.
      ${e("body.velocity.{var} = v{var} / v;",{indent:6})}
    }

    ${e("d{var} = timeStep * body.velocity.{var};",{indent:4})}

    ${e("body.pos.{var} += d{var};",{indent:4})}

    ${e("t{var} += Math.abs(d{var});",{indent:4})}
  }

  return (${e("t{var} * t{var}",{join:" + "})})/length;
`}var OL=Tp.exports,bf,Gv;function DL(){if(Gv)return bf;Gv=1,bf=t;function t(e,n,r,i){this.from=e,this.to=n,this.length=r,this.coefficient=i}return bf}var Tf,Vv;function NL(){if(Vv)return Tf;Vv=1,Tf=t;function t(e,n){var r;if(e||(e={}),n){for(r in n)if(n.hasOwnProperty(r)){var i=e.hasOwnProperty(r),o=typeof n[r],a=!i||typeof e[r]!==o;a?e[r]=n[r]:o==="object"&&(e[r]=t(e[r],n[r]))}}return e}return Tf}var Fa={exports:{}},Wv;function IL(){if(Wv)return Fa.exports;Wv=1,Fa.exports=t,Fa.exports.random=t,Fa.exports.randomIterator=s;function t(l){var u=typeof l=="number"?l:+new Date;return new e(u)}function e(l){this.seed=l}e.prototype.next=a,e.prototype.nextDouble=o,e.prototype.uniform=o,e.prototype.gaussian=n;function n(){var l,u,c;do u=this.nextDouble()*2-1,c=this.nextDouble()*2-1,l=u*u+c*c;while(l>=1||l===0);return u*Math.sqrt(-2*Math.log(l)/l)}e.prototype.levy=r;function r(){var l=1.5,u=Math.pow(i(1+l)*Math.sin(Math.PI*l/2)/(i((1+l)/2)*l*Math.pow(2,(l-1)/2)),1/l);return this.gaussian()*u/Math.pow(Math.abs(this.gaussian()),1/l)}function i(l){return Math.sqrt(2*Math.PI/l)*Math.pow(1/Math.E*(l+1/(12*l-1/(10*l))),l)}function o(){var l=this.seed;return l=l+2127912214+(l<<12)&4294967295,l=(l^3345072700^l>>>19)&4294967295,l=l+374761393+(l<<5)&4294967295,l=(l+3550635116^l<<9)&4294967295,l=l+4251993797+(l<<3)&4294967295,l=(l^3042594569^l>>>16)&4294967295,this.seed=l,(l&268435455)/268435456}function a(l){return Math.floor(this.nextDouble()*l)}function s(l,u){var c=u||t();if(typeof c.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:h,shuffle:d};function d(){var p,g,v;for(p=l.length-1;p>0;--p)g=c.next(p+1),v=l[g],l[g]=l[p],l[p]=v;return l}function h(p){var g,v,m;for(g=l.length-1;g>0;--g)v=c.next(g+1),m=l[v],l[v]=l[g],l[g]=m,p(m);l.length&&p(l[0])}}return Fa.exports}var oS=GL,UL=_L,kL=xL,FL=EL,zL=TL,BL=RL,HL=OL,jv={};function GL(t){var e=DL(),n=NL(),r=xp;if(t){if(t.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(t.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}t=n(t,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var i=jv[t.dimensions];if(!i){var o=t.dimensions;i={Body:UL(o,t.debug),createQuadTree:kL(o),createBounds:FL(o),createDragForce:zL(o),createSpringForce:BL(o),integrate:HL(o)},jv[o]=i}var a=i.Body,s=i.createQuadTree,l=i.createBounds,u=i.createDragForce,c=i.createSpringForce,d=i.integrate,h=L=>new a(L),p=IL().random(42),g=[],v=[],m=s(t,p),f=l(g,t,p),_=c(t,p),y=u(t),x=0,S=[],M=new Map,E=0;b("nbody",te),b("spring",R);var A={bodies:g,quadTree:m,springs:v,settings:t,addForce:b,removeForce:B,getForces:k,step:function(){for(var L=0;L<S.length;++L)S[L](E);var D=d(g,t.timeStep,t.adaptiveTimeStepWeight);return E+=1,D},addBody:function(L){if(!L)throw new Error("Body is required");return g.push(L),L},addBodyAt:function(L){if(!L)throw new Error("Body position is required");var D=h(L);return g.push(D),D},removeBody:function(L){if(L){var D=g.indexOf(L);if(!(D<0))return g.splice(D,1),g.length===0&&f.reset(),!0}},addSpring:function(L,D,J,z){if(!L||!D)throw new Error("Cannot add null spring to force simulator");typeof J!="number"&&(J=-1);var W=new e(L,D,J,z>=0?z:-1);return v.push(W),W},getTotalMovement:function(){return x},removeSpring:function(L){if(L){var D=v.indexOf(L);if(D>-1)return v.splice(D,1),!0}},getBestNewBodyPosition:function(L){return f.getBestNewPosition(L)},getBBox:w,getBoundingBox:w,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(L){return L!==void 0?(t.gravity=L,m.options({gravity:L}),this):t.gravity},theta:function(L){return L!==void 0?(t.theta=L,m.options({theta:L}),this):t.theta},random:p};return VL(t,A),r(A),A;function w(){return f.update(),f.box}function b(L,D){if(M.has(L))throw new Error("Force "+L+" is already added");M.set(L,D),S.push(D)}function B(L){var D=S.indexOf(M.get(L));D<0||(S.splice(D,1),M.delete(L))}function k(){return M}function te(){if(g.length!==0){m.insertBodies(g);for(var L=g.length;L--;){var D=g[L];D.isPinned||(D.reset(),m.updateBodyForce(D),y.update(D))}}}function R(){for(var L=v.length;L--;)_.update(v[L])}}function VL(t,e){for(var n in t)WL(t,e,n)}function WL(t,e,n){if(t.hasOwnProperty(n)&&typeof e[n]!="function"){var r=Number.isFinite(t[n]);r?e[n]=function(i){if(i!==void 0){if(!Number.isFinite(i))throw new Error("Value of "+n+" should be a valid number.");return t[n]=i,e}return t[n]}:e[n]=function(i){return i!==void 0?(t[n]=i,e):t[n]}}}Sp.exports=$L;Sp.exports.simulator=oS;var jL=xp;function $L(t,e){if(!t)throw new Error("Graph structure cannot be undefined");var n=e&&e.createSimulator||oS,r=n(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var i=t.version>19?te:k;e&&typeof e.nodeMass=="function"&&(i=e.nodeMass);var o=new Map,a={},s=0,l=r.settings.springTransform||XL;y(),m();var u=!1,c={step:function(){if(s===0)return d(!0),!0;var R=r.step();c.lastMove=R,c.fire("step");var L=R/s,D=L<=.01;return d(D),D},getNodePosition:function(R){return B(R).pos},setNodePosition:function(R){var L=B(R);L.setPosition.apply(L,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(R){var L=a[R];if(L)return{from:L.from.pos,to:L.to.pos}},getGraphRect:function(){return r.getBBox()},forEachBody:h,pinNode:function(R,L){var D=B(R.id);D.isPinned=!!L},isNodePinned:function(R){return B(R.id).isPinned},dispose:function(){t.off("changed",_),c.fire("disposed")},getBody:v,getSpring:g,getForceVectorLength:p,simulator:r,graph:t,lastMove:0};return jL(c),c;function d(R){u!==R&&(u=R,f(R))}function h(R){o.forEach(R)}function p(){var R=0,L=0;return h(function(D){R+=Math.abs(D.force.x),L+=Math.abs(D.force.y)}),Math.sqrt(R*R+L*L)}function g(R,L){var D;if(L===void 0)typeof R!="object"?D=R:D=R.id;else{var J=t.hasLink(R,L);if(!J)return;D=J.id}return a[D]}function v(R){return o.get(R)}function m(){t.on("changed",_)}function f(R){c.fire("stable",R)}function _(R){for(var L=0;L<R.length;++L){var D=R[L];D.changeType==="add"?(D.node&&x(D.node.id),D.link&&M(D.link)):D.changeType==="remove"&&(D.node&&S(D.node),D.link&&E(D.link))}s=t.getNodesCount()}function y(){s=0,t.forEachNode(function(R){x(R.id),s+=1}),t.forEachLink(M)}function x(R){var L=o.get(R);if(!L){var D=t.getNode(R);if(!D)throw new Error("initBody() was called with unknown node id");var J=D.position;if(!J){var z=A(D);J=r.getBestNewBodyPosition(z)}L=r.addBodyAt(J),L.id=R,o.set(R,L),w(R),b(D)&&(L.isPinned=!0)}}function S(R){var L=R.id,D=o.get(L);D&&(o.delete(L),r.removeBody(D))}function M(R){w(R.fromId),w(R.toId);var L=o.get(R.fromId),D=o.get(R.toId),J=r.addSpring(L,D,R.length);l(R,J),a[R.id]=J}function E(R){var L=a[R.id];if(L){var D=t.getNode(R.fromId),J=t.getNode(R.toId);D&&w(D.id),J&&w(J.id),delete a[R.id],r.removeSpring(L)}}function A(R){var L=[];if(!R.links)return L;for(var D=Math.min(R.links.length,2),J=0;J<D;++J){var z=R.links[J],W=z.fromId!==R.id?o.get(z.fromId):o.get(z.toId);W&&W.pos&&L.push(W)}return L}function w(R){var L=o.get(R);if(L.mass=i(R),Number.isNaN(L.mass))throw new Error("Node mass should be a number")}function b(R){return R&&(R.isPinned||R.data&&R.data.isPinned)}function B(R){var L=o.get(R);return L||(x(R),L=o.get(R)),L}function k(R){var L=t.getLinks(R);return L?1+L.length/3:1}function te(R){var L=t.getLinks(R);return L?1+L.size/3:1}}function XL(){}var qL=Sp.exports;const YL=Ds(qL);function Xd(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var KL=typeof global=="object"&&global&&global.Object===Object&&global;const ZL=KL;var QL=typeof self=="object"&&self&&self.Object===Object&&self,JL=ZL||QL||Function("return this")();const aS=JL;var eO=function(){return aS.Date.now()};const Af=eO;var tO=/\s/;function nO(t){for(var e=t.length;e--&&tO.test(t.charAt(e)););return e}var rO=/^\s+/;function iO(t){return t&&t.slice(0,nO(t)+1).replace(rO,"")}var oO=aS.Symbol;const Ou=oO;var sS=Object.prototype,aO=sS.hasOwnProperty,sO=sS.toString,za=Ou?Ou.toStringTag:void 0;function lO(t){var e=aO.call(t,za),n=t[za];try{t[za]=void 0;var r=!0}catch{}var i=sO.call(t);return r&&(e?t[za]=n:delete t[za]),i}var uO=Object.prototype,cO=uO.toString;function fO(t){return cO.call(t)}var dO="[object Null]",hO="[object Undefined]",$v=Ou?Ou.toStringTag:void 0;function pO(t){return t==null?t===void 0?hO:dO:$v&&$v in Object(t)?lO(t):fO(t)}function mO(t){return t!=null&&typeof t=="object"}var gO="[object Symbol]";function vO(t){return typeof t=="symbol"||mO(t)&&pO(t)==gO}var Xv=0/0,_O=/^[-+]0x[0-9a-f]+$/i,yO=/^0b[01]+$/i,xO=/^0o[0-7]+$/i,SO=parseInt;function qv(t){if(typeof t=="number")return t;if(vO(t))return Xv;if(Xd(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Xd(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=iO(t);var n=yO.test(t);return n||xO.test(t)?SO(t.slice(2),n?2:8):_O.test(t)?Xv:+t}var MO="Expected a function",EO=Math.max,wO=Math.min;function bO(t,e,n){var r,i,o,a,s,l,u=0,c=!1,d=!1,h=!0;if(typeof t!="function")throw new TypeError(MO);e=qv(e)||0,Xd(n)&&(c=!!n.leading,d="maxWait"in n,o=d?EO(qv(n.maxWait)||0,e):o,h="trailing"in n?!!n.trailing:h);function p(M){var E=r,A=i;return r=i=void 0,u=M,a=t.apply(A,E),a}function g(M){return u=M,s=setTimeout(f,e),c?p(M):a}function v(M){var E=M-l,A=M-u,w=e-E;return d?wO(w,o-A):w}function m(M){var E=M-l,A=M-u;return l===void 0||E>=e||E<0||d&&A>=o}function f(){var M=Af();if(m(M))return _(M);s=setTimeout(f,v(M))}function _(M){return s=void 0,h&&r?p(M):(r=i=void 0,a)}function y(){s!==void 0&&clearTimeout(s),u=0,r=l=i=s=void 0}function x(){return s===void 0?a:_(Af())}function S(){var M=Af(),E=m(M);if(r=arguments,i=this,l=M,E){if(s===void 0)return g(l);if(d)return clearTimeout(s),s=setTimeout(f,e),p(l)}return s===void 0&&(s=setTimeout(f,e)),a}return S.cancel=y,S.flush=x,S}function TO(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,o,a,s=[],l=!0,u=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(s.push(r.value),s.length!==e);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return s}}function AO(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Yv(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,NO(r.key),r)}}function CO(t,e,n){return e&&Yv(t.prototype,e),n&&Yv(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function RO(t,e){return PO(t)||TO(t,e)||LO(t,e)||OO()}function PO(t){if(Array.isArray(t))return t}function LO(t,e){if(t){if(typeof t=="string")return Kv(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kv(t,e)}}function Kv(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function OO(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function DO(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function NO(t){var e=DO(t,"string");return typeof e=="symbol"?e:String(e)}var IO=CO(function t(e,n){var r=n.default,i=r===void 0?null:r,o=n.triggerUpdate,a=o===void 0?!0:o,s=n.onChange,l=s===void 0?function(u,c){}:s;AO(this,t),this.name=e,this.defaultVal=i,this.triggerUpdate=a,this.onChange=l});function Ap(t){var e=t.stateInit,n=e===void 0?function(){return{}}:e,r=t.props,i=r===void 0?{}:r,o=t.methods,a=o===void 0?{}:o,s=t.aliases,l=s===void 0?{}:s,u=t.init,c=u===void 0?function(){}:u,d=t.update,h=d===void 0?function(){}:d,p=Object.keys(i).map(function(g){return new IO(g,i[g])});return function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=Object.assign({},n instanceof Function?n(g):n,{initialised:!1}),m={};function f(x){return _(x,g),y(),f}var _=function(S,M){c.call(f,S,v,M),v.initialised=!0},y=bO(function(){v.initialised&&(h.call(f,v,m),m={})},1);return p.forEach(function(x){f[x.name]=S(x);function S(M){var E=M.name,A=M.triggerUpdate,w=A===void 0?!1:A,b=M.onChange,B=b===void 0?function(R,L){}:b,k=M.defaultVal,te=k===void 0?null:k;return function(R){var L=v[E];if(!arguments.length)return L;var D=R===void 0?te:R;return v[E]=D,B.call(f,D,v,L),!m.hasOwnProperty(E)&&(m[E]=L),w&&y(),f}}}),Object.keys(a).forEach(function(x){f[x]=function(){for(var S,M=arguments.length,E=new Array(M),A=0;A<M;A++)E[A]=arguments[A];return(S=a[x]).call.apply(S,[f,v].concat(E))}}),Object.entries(l).forEach(function(x){var S=RO(x,2),M=S[0],E=S[1];return f[M]=f[E]}),f.resetProps=function(){return p.forEach(function(x){f[x.name](x.defaultVal)}),f},f.resetProps(),v._rerender=y,f}}var it=function(t){return typeof t=="function"?t:typeof t=="string"?function(e){return e[t]}:function(e){return t}};class Zv extends Map{constructor(e,n=FO){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),e!=null)for(const[r,i]of e)this.set(r,i)}get(e){return super.get(Qv(this,e))}has(e){return super.has(Qv(this,e))}set(e,n){return super.set(UO(this,e),n)}delete(e){return super.delete(kO(this,e))}}function Qv({_intern:t,_key:e},n){const r=e(n);return t.has(r)?t.get(r):n}function UO({_intern:t,_key:e},n){const r=e(n);return t.has(r)?t.get(r):(t.set(r,n),n)}function kO({_intern:t,_key:e},n){const r=e(n);return t.has(r)&&(n=t.get(r),t.delete(r)),n}function FO(t){return t!==null&&typeof t=="object"?t.valueOf():t}function zO(t,e){let n;if(e===void 0)for(const r of t)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let i of t)(i=e(i,++r,t))!=null&&(n<i||n===void 0&&i>=i)&&(n=i)}return n}function BO(t,e){let n;if(e===void 0)for(const r of t)r!=null&&(n>r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let i of t)(i=e(i,++r,t))!=null&&(n>i||n===void 0&&i>=i)&&(n=i)}return n}function HO(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,o,a,s=[],l=!0,u=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(s.push(r.value),s.length!==e);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return s}}function GO(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function VO(t,e){if(t==null)return{};var n=GO(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function WO(t,e){return XO(t)||HO(t,e)||lS(t,e)||KO()}function jO(t){return $O(t)||qO(t)||lS(t)||YO()}function $O(t){if(Array.isArray(t))return qd(t)}function XO(t){if(Array.isArray(t))return t}function qO(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function lS(t,e){if(t){if(typeof t=="string")return qd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qd(t,e)}}function qd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function YO(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function KO(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ZO(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function QO(t){var e=ZO(t,"string");return typeof e=="symbol"?e:String(e)}var Jv=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,i=(e instanceof Array?e.length?e:[void 0]:[e]).map(function(s){return{keyAccessor:s,isProp:!(s instanceof Function)}}),o=t.reduce(function(s,l){var u=s,c=l;return i.forEach(function(d,h){var p=d.keyAccessor,g=d.isProp,v;if(g){var m=c,f=m[p],_=VO(m,[p].map(QO));v=f,c=_}else v=p(c,h);h+1<i.length?(u.hasOwnProperty(v)||(u[v]={}),u=u[v]):n?(u.hasOwnProperty(v)||(u[v]=[]),u[v].push(c)):u[v]=c}),s},{});n instanceof Function&&function s(l){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;u===i.length?Object.keys(l).forEach(function(c){return l[c]=n(l[c])}):Object.values(l).forEach(function(c){return s(c,u+1)})}(o);var a=o;return r&&(a=[],function s(l){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];u.length===i.length?a.push({keys:u,vals:l}):Object.entries(l).forEach(function(c){var d=WO(c,2),h=d[0],p=d[1];return s(p,[].concat(jO(u),[h]))})}(o),e instanceof Array&&e.length===0&&a.length===1&&(a[0].keys=[])),a};function JO(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,o,a,s=[],l=!0,u=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(s.push(r.value),s.length!==e);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return s}}function e0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function eD(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?e0(Object(n),!0).forEach(function(r){uS(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function uS(t,e,n){return e=uD(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function tD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function nD(t,e){if(t==null)return{};var n=tD(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function cS(t,e){return iD(t)||JO(t,e)||fS(t,e)||sD()}function Du(t){return rD(t)||oD(t)||fS(t)||aD()}function rD(t){if(Array.isArray(t))return Yd(t)}function iD(t){if(Array.isArray(t))return t}function oD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function fS(t,e){if(t){if(typeof t=="string")return Yd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yd(t,e)}}function Yd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function aD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lD(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function uD(t){var e=lD(t,"string");return typeof e=="symbol"?e:String(e)}var cD=["createObj","updateObj","exitObj","objBindAttr","dataBindAttr"];function fD(t,e,n){var r={enter:[],update:[],exit:[]};if(n){var a=Jv(t,n,!1),s=Jv(e,n,!1),l=Object.assign({},a,s);Object.entries(l).forEach(function(u){var c=cS(u,2),d=c[0],h=c[1],p=a.hasOwnProperty(d)?s.hasOwnProperty(d)?"update":"exit":"enter";r[p].push(p==="update"?[a[d],s[d]]:h)})}else{var i=new Set(t),o=new Set(e);new Set([].concat(Du(i),Du(o))).forEach(function(u){var c=i.has(u)?o.has(u)?"update":"exit":"enter";r[c].push(c==="update"?[u,u]:u)})}return r}function dD(t,e,n){var r=n.objBindAttr,i=r===void 0?"__obj":r,o=n.dataBindAttr,a=o===void 0?"__data":o,s=n.idAccessor,l=n.purge,u=l===void 0?!1:l,c=function(m){return m.hasOwnProperty(a)},d=e.filter(function(v){return!c(v)}),h=e.filter(c).map(function(v){return v[a]}),p=t,g=u?{enter:p,exit:h,update:[]}:fD(h,p,s);return g.update=g.update.map(function(v){var m=cS(v,2),f=m[0],_=m[1];return f!==_&&(_[i]=f[i],_[i][a]=_),_}),g.exit=g.exit.concat(d.map(function(v){return uS({},i,v)})),g}function hD(t,e,n,r,i){var o=i.createObj,a=o===void 0?function(A){return{}}:o,s=i.updateObj,l=s===void 0?function(A,w){}:s,u=i.exitObj,c=u===void 0?function(A){}:u,d=i.objBindAttr,h=d===void 0?"__obj":d,p=i.dataBindAttr,g=p===void 0?"__data":p,v=nD(i,cD),m=dD(t,e,eD({objBindAttr:h,dataBindAttr:g},v)),f=m.enter,_=m.update,y=m.exit;y.forEach(function(A){var w=A[h];delete A[h],c(w),r(w)});var x=M(f),S=[].concat(Du(f),Du(_));E(S),x.forEach(n);function M(A){var w=[];return A.forEach(function(b){var B=a(b);B&&(B[g]=b,b[h]=B,w.push(B))}),w}function E(A){A.forEach(function(w){var b=w[h];b&&(b[g]=w,l(b,w))})}}function pD(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}const t0=Symbol("implicit");function dS(){var t=new Zv,e=[],n=[],r=t0;function i(o){let a=t.get(o);if(a===void 0){if(r!==t0)return r;t.set(o,a=e.push(o)-1)}return n[a%n.length]}return i.domain=function(o){if(!arguments.length)return e.slice();e=[],t=new Zv;for(const a of o)t.has(a)||t.set(a,e.push(a)-1);return i},i.range=function(o){return arguments.length?(n=Array.from(o),i):n.slice()},i.unknown=function(o){return arguments.length?(r=o,i):r},i.copy=function(){return dS(e,n).unknown(r)},pD.apply(i,arguments),i}function mD(t){for(var e=t.length/6|0,n=new Array(e),r=0;r<e;)n[r]="#"+t.slice(r*6,++r*6);return n}const gD=mD("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");function Nu(t){"@babel/helpers - typeof";return Nu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nu(t)}var vD=/^\s+/,_D=/\s+$/;function Te(t,e){if(t=t||"",e=e||{},t instanceof Te)return t;if(!(this instanceof Te))return new Te(t,e);var n=yD(t);this._originalInput=t,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||n.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}Te.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),n,r,i,o,a,s;return n=e.r/255,r=e.g/255,i=e.b/255,n<=.03928?o=n/12.92:o=Math.pow((n+.055)/1.055,2.4),r<=.03928?a=r/12.92:a=Math.pow((r+.055)/1.055,2.4),i<=.03928?s=i/12.92:s=Math.pow((i+.055)/1.055,2.4),.2126*o+.7152*a+.0722*s},setAlpha:function(e){return this._a=hS(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=r0(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=r0(this._r,this._g,this._b),n=Math.round(e.h*360),r=Math.round(e.s*100),i=Math.round(e.v*100);return this._a==1?"hsv("+n+", "+r+"%, "+i+"%)":"hsva("+n+", "+r+"%, "+i+"%, "+this._roundA+")"},toHsl:function(){var e=n0(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=n0(this._r,this._g,this._b),n=Math.round(e.h*360),r=Math.round(e.s*100),i=Math.round(e.l*100);return this._a==1?"hsl("+n+", "+r+"%, "+i+"%)":"hsla("+n+", "+r+"%, "+i+"%, "+this._roundA+")"},toHex:function(e){return i0(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return ED(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(gt(this._r,255)*100)+"%",g:Math.round(gt(this._g,255)*100)+"%",b:Math.round(gt(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(gt(this._r,255)*100)+"%, "+Math.round(gt(this._g,255)*100)+"%, "+Math.round(gt(this._b,255)*100)+"%)":"rgba("+Math.round(gt(this._r,255)*100)+"%, "+Math.round(gt(this._g,255)*100)+"%, "+Math.round(gt(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:ID[i0(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var n="#"+o0(this._r,this._g,this._b,this._a),r=n,i=this._gradientType?"GradientType = 1, ":"";if(e){var o=Te(e);r="#"+o0(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+i+"startColorstr="+n+",endColorstr="+r+")"},toString:function(e){var n=!!e;e=e||this._format;var r=!1,i=this._a<1&&this._a>=0,o=!n&&i&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return o?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return Te(this.toString())},_applyModification:function(e,n){var r=e.apply(null,[this].concat([].slice.call(n)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(AD,arguments)},brighten:function(){return this._applyModification(CD,arguments)},darken:function(){return this._applyModification(RD,arguments)},desaturate:function(){return this._applyModification(wD,arguments)},saturate:function(){return this._applyModification(bD,arguments)},greyscale:function(){return this._applyModification(TD,arguments)},spin:function(){return this._applyModification(PD,arguments)},_applyCombination:function(e,n){return e.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(DD,arguments)},complement:function(){return this._applyCombination(LD,arguments)},monochromatic:function(){return this._applyCombination(ND,arguments)},splitcomplement:function(){return this._applyCombination(OD,arguments)},triad:function(){return this._applyCombination(a0,[3])},tetrad:function(){return this._applyCombination(a0,[4])}};Te.fromRatio=function(t,e){if(Nu(t)=="object"){var n={};for(var r in t)t.hasOwnProperty(r)&&(r==="a"?n[r]=t[r]:n[r]=Ya(t[r]));t=n}return Te(t,e)};function yD(t){var e={r:0,g:0,b:0},n=1,r=null,i=null,o=null,a=!1,s=!1;return typeof t=="string"&&(t=zD(t)),Nu(t)=="object"&&(Tr(t.r)&&Tr(t.g)&&Tr(t.b)?(e=xD(t.r,t.g,t.b),a=!0,s=String(t.r).substr(-1)==="%"?"prgb":"rgb"):Tr(t.h)&&Tr(t.s)&&Tr(t.v)?(r=Ya(t.s),i=Ya(t.v),e=MD(t.h,r,i),a=!0,s="hsv"):Tr(t.h)&&Tr(t.s)&&Tr(t.l)&&(r=Ya(t.s),o=Ya(t.l),e=SD(t.h,r,o),a=!0,s="hsl"),t.hasOwnProperty("a")&&(n=t.a)),n=hS(n),{ok:a,format:t.format||s,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:n}}function xD(t,e,n){return{r:gt(t,255)*255,g:gt(e,255)*255,b:gt(n,255)*255}}function n0(t,e,n){t=gt(t,255),e=gt(e,255),n=gt(n,255);var r=Math.max(t,e,n),i=Math.min(t,e,n),o,a,s=(r+i)/2;if(r==i)o=a=0;else{var l=r-i;switch(a=s>.5?l/(2-r-i):l/(r+i),r){case t:o=(e-n)/l+(e<n?6:0);break;case e:o=(n-t)/l+2;break;case n:o=(t-e)/l+4;break}o/=6}return{h:o,s:a,l:s}}function SD(t,e,n){var r,i,o;t=gt(t,360),e=gt(e,100),n=gt(n,100);function a(u,c,d){return d<0&&(d+=1),d>1&&(d-=1),d<1/6?u+(c-u)*6*d:d<1/2?c:d<2/3?u+(c-u)*(2/3-d)*6:u}if(e===0)r=i=o=n;else{var s=n<.5?n*(1+e):n+e-n*e,l=2*n-s;r=a(l,s,t+1/3),i=a(l,s,t),o=a(l,s,t-1/3)}return{r:r*255,g:i*255,b:o*255}}function r0(t,e,n){t=gt(t,255),e=gt(e,255),n=gt(n,255);var r=Math.max(t,e,n),i=Math.min(t,e,n),o,a,s=r,l=r-i;if(a=r===0?0:l/r,r==i)o=0;else{switch(r){case t:o=(e-n)/l+(e<n?6:0);break;case e:o=(n-t)/l+2;break;case n:o=(t-e)/l+4;break}o/=6}return{h:o,s:a,v:s}}function MD(t,e,n){t=gt(t,360)*6,e=gt(e,100),n=gt(n,100);var r=Math.floor(t),i=t-r,o=n*(1-e),a=n*(1-i*e),s=n*(1-(1-i)*e),l=r%6,u=[n,a,o,o,s,n][l],c=[s,n,n,a,o,o][l],d=[o,o,s,n,n,a][l];return{r:u*255,g:c*255,b:d*255}}function i0(t,e,n,r){var i=[ir(Math.round(t).toString(16)),ir(Math.round(e).toString(16)),ir(Math.round(n).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function ED(t,e,n,r,i){var o=[ir(Math.round(t).toString(16)),ir(Math.round(e).toString(16)),ir(Math.round(n).toString(16)),ir(pS(r))];return i&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function o0(t,e,n,r){var i=[ir(pS(r)),ir(Math.round(t).toString(16)),ir(Math.round(e).toString(16)),ir(Math.round(n).toString(16))];return i.join("")}Te.equals=function(t,e){return!t||!e?!1:Te(t).toRgbString()==Te(e).toRgbString()};Te.random=function(){return Te.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function wD(t,e){e=e===0?0:e||10;var n=Te(t).toHsl();return n.s-=e/100,n.s=lc(n.s),Te(n)}function bD(t,e){e=e===0?0:e||10;var n=Te(t).toHsl();return n.s+=e/100,n.s=lc(n.s),Te(n)}function TD(t){return Te(t).desaturate(100)}function AD(t,e){e=e===0?0:e||10;var n=Te(t).toHsl();return n.l+=e/100,n.l=lc(n.l),Te(n)}function CD(t,e){e=e===0?0:e||10;var n=Te(t).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(e/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(e/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(e/100)))),Te(n)}function RD(t,e){e=e===0?0:e||10;var n=Te(t).toHsl();return n.l-=e/100,n.l=lc(n.l),Te(n)}function PD(t,e){var n=Te(t).toHsl(),r=(n.h+e)%360;return n.h=r<0?360+r:r,Te(n)}function LD(t){var e=Te(t).toHsl();return e.h=(e.h+180)%360,Te(e)}function a0(t,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var n=Te(t).toHsl(),r=[Te(t)],i=360/e,o=1;o<e;o++)r.push(Te({h:(n.h+o*i)%360,s:n.s,l:n.l}));return r}function OD(t){var e=Te(t).toHsl(),n=e.h;return[Te(t),Te({h:(n+72)%360,s:e.s,l:e.l}),Te({h:(n+216)%360,s:e.s,l:e.l})]}function DD(t,e,n){e=e||6,n=n||30;var r=Te(t).toHsl(),i=360/n,o=[Te(t)];for(r.h=(r.h-(i*e>>1)+720)%360;--e;)r.h=(r.h+i)%360,o.push(Te(r));return o}function ND(t,e){e=e||6;for(var n=Te(t).toHsv(),r=n.h,i=n.s,o=n.v,a=[],s=1/e;e--;)a.push(Te({h:r,s:i,v:o})),o=(o+s)%1;return a}Te.mix=function(t,e,n){n=n===0?0:n||50;var r=Te(t).toRgb(),i=Te(e).toRgb(),o=n/100,a={r:(i.r-r.r)*o+r.r,g:(i.g-r.g)*o+r.g,b:(i.b-r.b)*o+r.b,a:(i.a-r.a)*o+r.a};return Te(a)};Te.readability=function(t,e){var n=Te(t),r=Te(e);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)};Te.isReadable=function(t,e,n){var r=Te.readability(t,e),i,o;switch(o=!1,i=BD(n),i.level+i.size){case"AAsmall":case"AAAlarge":o=r>=4.5;break;case"AAlarge":o=r>=3;break;case"AAAsmall":o=r>=7;break}return o};Te.mostReadable=function(t,e,n){var r=null,i=0,o,a,s,l;n=n||{},a=n.includeFallbackColors,s=n.level,l=n.size;for(var u=0;u<e.length;u++)o=Te.readability(t,e[u]),o>i&&(i=o,r=Te(e[u]));return Te.isReadable(t,r,{level:s,size:l})||!a?r:(n.includeFallbackColors=!1,Te.mostReadable(t,["#fff","#000"],n))};var Kd=Te.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},ID=Te.hexNames=UD(Kd);function UD(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[t[n]]=n);return e}function hS(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function gt(t,e){kD(t)&&(t="100%");var n=FD(t);return t=Math.min(e,Math.max(0,parseFloat(t))),n&&(t=parseInt(t*e,10)/100),Math.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function lc(t){return Math.min(1,Math.max(0,t))}function bn(t){return parseInt(t,16)}function kD(t){return typeof t=="string"&&t.indexOf(".")!=-1&&parseFloat(t)===1}function FD(t){return typeof t=="string"&&t.indexOf("%")!=-1}function ir(t){return t.length==1?"0"+t:""+t}function Ya(t){return t<=1&&(t=t*100+"%"),t}function pS(t){return Math.round(parseFloat(t)*255).toString(16)}function s0(t){return bn(t)/255}var Yn=function(){var t="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",n="(?:"+e+")|(?:"+t+")",r="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?",i="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?";return{CSS_UNIT:new RegExp(n),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+i),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+i),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+i),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function Tr(t){return!!Yn.CSS_UNIT.exec(t)}function zD(t){t=t.replace(vD,"").replace(_D,"").toLowerCase();var e=!1;if(Kd[t])t=Kd[t],e=!0;else if(t=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n;return(n=Yn.rgb.exec(t))?{r:n[1],g:n[2],b:n[3]}:(n=Yn.rgba.exec(t))?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=Yn.hsl.exec(t))?{h:n[1],s:n[2],l:n[3]}:(n=Yn.hsla.exec(t))?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=Yn.hsv.exec(t))?{h:n[1],s:n[2],v:n[3]}:(n=Yn.hsva.exec(t))?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=Yn.hex8.exec(t))?{r:bn(n[1]),g:bn(n[2]),b:bn(n[3]),a:s0(n[4]),format:e?"name":"hex8"}:(n=Yn.hex6.exec(t))?{r:bn(n[1]),g:bn(n[2]),b:bn(n[3]),format:e?"name":"hex"}:(n=Yn.hex4.exec(t))?{r:bn(n[1]+""+n[1]),g:bn(n[2]+""+n[2]),b:bn(n[3]+""+n[3]),a:s0(n[4]+""+n[4]),format:e?"name":"hex8"}:(n=Yn.hex3.exec(t))?{r:bn(n[1]+""+n[1]),g:bn(n[2]+""+n[2]),b:bn(n[3]+""+n[3]),format:e?"name":"hex"}:!1}function BD(t){var e,n;return t=t||{level:"AA",size:"small"},e=(t.level||"AA").toUpperCase(),n=(t.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),n!=="small"&&n!=="large"&&(n="small"),{level:e,size:n}}function HD(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,o,a,s=[],l=!0,u=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(s.push(r.value),s.length!==e);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return s}}function l0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function mS(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?l0(Object(n),!0).forEach(function(r){Cp(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Zd(t){"@babel/helpers - typeof";return Zd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zd(t)}function GD(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,yS(r.key),r)}}function VD(t,e,n){return e&&u0(t.prototype,e),n&&u0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Cp(t,e,n){return e=yS(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function WD(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Uu(t,e)}function Iu(t){return Iu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Iu(t)}function Uu(t,e){return Uu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Uu(t,e)}function gS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ql(t,e,n){return gS()?Ql=Reflect.construct.bind():Ql=function(i,o,a){var s=[null];s.push.apply(s,o);var l=Function.bind.apply(i,s),u=new l;return a&&Uu(u,a.prototype),u},Ql.apply(null,arguments)}function jD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function $D(t,e){if(t==null)return{};var n=jD(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function vS(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function XD(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return vS(t)}function qD(t){var e=gS();return function(){var r=Iu(t),i;if(e){var o=Iu(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return XD(this,i)}}function c0(t,e){return KD(t)||HD(t,e)||_S(t,e)||JD()}function Qn(t){return YD(t)||ZD(t)||_S(t)||QD()}function YD(t){if(Array.isArray(t))return Qd(t)}function KD(t){if(Array.isArray(t))return t}function ZD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function _S(t,e){if(t){if(typeof t=="string")return Qd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qd(t,e)}}function Qd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function QD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function JD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e3(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function yS(t){var e=e3(t,"string");return typeof e=="symbol"?e:String(e)}var t3=function t(e){e instanceof Array?e.forEach(t):(e.map&&e.map.dispose(),e.dispose())},n3=function t(e){e.geometry&&e.geometry.dispose(),e.material&&t3(e.material),e.texture&&e.texture.dispose(),e.children&&e.children.forEach(t)},Jd=function(e){for(;e.children.length;){var n=e.children[0];e.remove(n),n3(n)}},r3=["objFilter"];function Ba(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.objFilter,i=r===void 0?function(){return!0}:r,o=$D(n,r3);return hD(t,e.children.filter(i),function(a){return e.add(a)},function(a){e.remove(a),Jd(a)},mS({objBindAttr:"__threeObj"},o))}var Ha=function(e){return isNaN(e)?parseInt(Te(e).toHex(),16):e},Cf=function(e){return isNaN(e)?Te(e).getAlpha():1},i3=dS(gD);function f0(t,e,n){!e||typeof n!="string"||t.filter(function(r){return!r[n]}).forEach(function(r){r[n]=i3(e(r))})}function o3(t,e){var n=t.nodes,r=t.links,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=i.nodeFilter,a=o===void 0?function(){return!0}:o,s=i.onLoopError,l=s===void 0?function(p){throw"Invalid DAG structure! Found cycle in node path: ".concat(p.join(" -> "),".")}:s,u={};n.forEach(function(p){return u[e(p)]={data:p,out:[],depth:-1,skip:!a(p)}}),r.forEach(function(p){var g=p.source,v=p.target,m=x(g),f=x(v);if(!u.hasOwnProperty(m))throw"Missing source node with id: ".concat(m);if(!u.hasOwnProperty(f))throw"Missing target node with id: ".concat(f);var _=u[m],y=u[f];_.out.push(y);function x(S){return Zd(S)==="object"?e(S):S}});var c=[];h(Object.values(u));var d=Object.assign.apply(Object,[{}].concat(Qn(Object.entries(u).filter(function(p){var g=c0(p,2),v=g[1];return!v.skip}).map(function(p){var g=c0(p,2),v=g[0],m=g[1];return Cp({},v,m.depth)}))));return d;function h(p){for(var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,m=function(){var S=p[f];if(g.indexOf(S)!==-1){var M=[].concat(Qn(g.slice(g.indexOf(S))),[S]).map(function(E){return e(E.data)});return c.some(function(E){return E.length===M.length&&E.every(function(A,w){return A===M[w]})})||(c.push(M),l(M)),"continue"}v>S.depth&&(S.depth=v,h(S.out,[].concat(Qn(g),[S]),v+(S.skip?0:1)))},f=0,_=p.length;f<_;f++)var y=m()}}var Ie=window.THREE?window.THREE:{Group:Wo,Mesh:rr,MeshLambertMaterial:zP,Color:et,BufferGeometry:On,BufferAttribute:sr,Matrix4:St,Vector3:I,SphereGeometry:ac,CylinderGeometry:oc,TubeGeometry:mp,ConeGeometry:pp,Line:EP,LineBasicMaterial:Ax,QuadraticBezierCurve3:hp,CubicBezierCurve3:Rx,Box3:so},d0={graph:mL,forcelayout:YL},a3=2,h0=new Ie.BufferGeometry().setAttribute?"setAttribute":"addAttribute",Nl=new Ie.BufferGeometry().applyMatrix4?"applyMatrix4":"applyMatrix",s3=Ap({props:{jsonUrl:{onChange:function(e,n){var r=this;e&&!n.fetchingJson&&(n.fetchingJson=!0,n.onLoading(),fetch(e).then(function(i){return i.json()}).then(function(i){n.fetchingJson=!1,n.onFinishLoading(i),r.graphData(i)}))},triggerUpdate:!1},graphData:{default:{nodes:[],links:[]},onChange:function(e,n){n.engineRunning=!1}},numDimensions:{default:3,onChange:function(e,n){var r=n.d3ForceLayout.force("charge");r&&r.strength(e>2?-60:-30),e<3&&i(n.graphData.nodes,"z"),e<2&&i(n.graphData.nodes,"y");function i(o,a){o.forEach(function(s){delete s[a],delete s["v".concat(a)]})}}},dagMode:{onChange:function(e,n){!e&&n.forceEngine==="d3"&&(n.graphData.nodes||[]).forEach(function(r){return r.fx=r.fy=r.fz=void 0})}},dagLevelDistance:{},dagNodeFilter:{default:function(e){return!0}},onDagError:{triggerUpdate:!1},nodeRelSize:{default:4},nodeId:{default:"id"},nodeVal:{default:"val"},nodeResolution:{default:8},nodeColor:{default:"color"},nodeAutoColorBy:{},nodeOpacity:{default:.75},nodeVisibility:{default:!0},nodeThreeObject:{},nodeThreeObjectExtend:{default:!1},nodePositionUpdate:{triggerUpdate:!1},linkSource:{default:"source"},linkTarget:{default:"target"},linkVisibility:{default:!0},linkColor:{default:"color"},linkAutoColorBy:{},linkOpacity:{default:.2},linkWidth:{},linkResolution:{default:6},linkCurvature:{default:0,triggerUpdate:!1},linkCurveRotation:{default:0,triggerUpdate:!1},linkMaterial:{},linkThreeObject:{},linkThreeObjectExtend:{default:!1},linkPositionUpdate:{triggerUpdate:!1},linkDirectionalArrowLength:{default:0},linkDirectionalArrowColor:{},linkDirectionalArrowRelPos:{default:.5,triggerUpdate:!1},linkDirectionalArrowResolution:{default:8},linkDirectionalParticles:{default:0},linkDirectionalParticleSpeed:{default:.01,triggerUpdate:!1},linkDirectionalParticleWidth:{default:.5},linkDirectionalParticleColor:{},linkDirectionalParticleResolution:{default:4},forceEngine:{default:"d3"},d3AlphaMin:{default:0},d3AlphaDecay:{default:.0228,triggerUpdate:!1,onChange:function(e,n){n.d3ForceLayout.alphaDecay(e)}},d3AlphaTarget:{default:0,triggerUpdate:!1,onChange:function(e,n){n.d3ForceLayout.alphaTarget(e)}},d3VelocityDecay:{default:.4,triggerUpdate:!1,onChange:function(e,n){n.d3ForceLayout.velocityDecay(e)}},ngraphPhysics:{default:{timeStep:20,gravity:-1.2,theta:.8,springLength:30,springCoefficient:8e-4,dragCoefficient:.02}},warmupTicks:{default:0,triggerUpdate:!1},cooldownTicks:{default:1/0,triggerUpdate:!1},cooldownTime:{default:15e3,triggerUpdate:!1},onLoading:{default:function(){},triggerUpdate:!1},onFinishLoading:{default:function(){},triggerUpdate:!1},onUpdate:{default:function(){},triggerUpdate:!1},onFinishUpdate:{default:function(){},triggerUpdate:!1},onEngineTick:{default:function(){},triggerUpdate:!1},onEngineStop:{default:function(){},triggerUpdate:!1}},methods:{refresh:function(e){return e._flushObjects=!0,e._rerender(),this},d3Force:function(e,n,r){return r===void 0?e.d3ForceLayout.force(n):(e.d3ForceLayout.force(n,r),this)},d3ReheatSimulation:function(e){return e.d3ForceLayout.alpha(1),this.resetCountdown(),this},resetCountdown:function(e){return e.cntTicks=0,e.startTickTime=new Date,e.engineRunning=!0,this},tickFrame:function(e){var n=e.forceEngine!=="ngraph";return e.engineRunning&&r(),i(),o(),this;function r(){++e.cntTicks>e.cooldownTicks||new Date-e.startTickTime>e.cooldownTime||n&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin?(e.engineRunning=!1,e.onEngineStop()):(e.layout[n?"tick":"step"](),e.onEngineTick());var a=it(e.nodeThreeObjectExtend);e.graphData.nodes.forEach(function(h){var p=h.__threeObj;if(p){var g=n?h:e.layout.getNodePosition(h[e.nodeId]),v=a(h);(!e.nodePositionUpdate||!e.nodePositionUpdate(v?p.children[0]:p,{x:g.x,y:g.y,z:g.z},h)||v)&&(p.position.x=g.x,p.position.y=g.y||0,p.position.z=g.z||0)}});var s=it(e.linkWidth),l=it(e.linkCurvature),u=it(e.linkCurveRotation),c=it(e.linkThreeObjectExtend);e.graphData.links.forEach(function(h){var p=h.__lineObj;if(p){var g=n?h:e.layout.getLinkPosition(e.layout.graph.getLink(h.source,h.target).id),v=g[n?"source":"from"],m=g[n?"target":"to"];if(!(!v||!m||!v.hasOwnProperty("x")||!m.hasOwnProperty("x"))){d(h);var f=c(h);if(!(e.linkPositionUpdate&&e.linkPositionUpdate(f?p.children[1]:p,{start:{x:v.x,y:v.y,z:v.z},end:{x:m.x,y:m.y,z:m.z}},h)&&!f)){var _=30,y=h.__curve,x=p.children.length?p.children[0]:p;if(x.type==="Line"){if(y)x.geometry.setFromPoints(y.getPoints(_));else{var S=x.geometry.getAttribute("position");(!S||!S.array||S.array.length!==6)&&x.geometry[h0]("position",S=new Ie.BufferAttribute(new Float32Array(2*3),3)),S.array[0]=v.x,S.array[1]=v.y||0,S.array[2]=v.z||0,S.array[3]=m.x,S.array[4]=m.y||0,S.array[5]=m.z||0,S.needsUpdate=!0}x.geometry.computeBoundingSphere()}else if(x.type==="Mesh")if(y){x.geometry.type.match(/^Tube(Buffer)?Geometry$/)||(x.position.set(0,0,0),x.rotation.set(0,0,0),x.scale.set(1,1,1));var k=Math.ceil(s(h)*10)/10,te=k/2,R=new Ie.TubeGeometry(y,_,te,e.linkResolution,!1);x.geometry.dispose(),x.geometry=R}else{if(!x.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)){var M=Math.ceil(s(h)*10)/10,E=M/2,A=new Ie.CylinderGeometry(E,E,1,e.linkResolution,1,!1);A[Nl](new Ie.Matrix4().makeTranslation(0,1/2,0)),A[Nl](new Ie.Matrix4().makeRotationX(Math.PI/2)),x.geometry.dispose(),x.geometry=A}var w=new Ie.Vector3(v.x,v.y||0,v.z||0),b=new Ie.Vector3(m.x,m.y||0,m.z||0),B=w.distanceTo(b);x.position.x=w.x,x.position.y=w.y,x.position.z=w.z,x.scale.z=B,x.parent.localToWorld(b),x.lookAt(b)}}}}});function d(h){var p=n?h:e.layout.getLinkPosition(e.layout.graph.getLink(h.source,h.target).id),g=p[n?"source":"from"],v=p[n?"target":"to"];if(!(!g||!v||!g.hasOwnProperty("x")||!v.hasOwnProperty("x"))){var m=l(h);if(!m)h.__curve=null;else{var f=new Ie.Vector3(g.x,g.y||0,g.z||0),_=new Ie.Vector3(v.x,v.y||0,v.z||0),y=f.distanceTo(_),x,S=u(h);if(y>0){var M=v.x-g.x,E=v.y-g.y||0,A=new Ie.Vector3().subVectors(_,f),w=A.clone().multiplyScalar(m).cross(M!==0||E!==0?new Ie.Vector3(0,0,1):new Ie.Vector3(0,1,0)).applyAxisAngle(A.normalize(),S).add(new Ie.Vector3().addVectors(f,_).divideScalar(2));x=new Ie.QuadraticBezierCurve3(f,w,_)}else{var b=m*70,B=-S,k=B+Math.PI/2;x=new Ie.CubicBezierCurve3(f,new Ie.Vector3(b*Math.cos(k),b*Math.sin(k),0).add(f),new Ie.Vector3(b*Math.cos(B),b*Math.sin(B),0).add(f),_)}h.__curve=x}}}}function i(){var a=it(e.linkDirectionalArrowRelPos),s=it(e.linkDirectionalArrowLength),l=it(e.nodeVal);e.graphData.links.forEach(function(u){var c=u.__arrowObj;if(c){var d=n?u:e.layout.getLinkPosition(e.layout.graph.getLink(u.source,u.target).id),h=d[n?"source":"from"],p=d[n?"target":"to"];if(!(!h||!p||!h.hasOwnProperty("x")||!p.hasOwnProperty("x"))){var g=Math.cbrt(Math.max(0,l(h)||1))*e.nodeRelSize,v=Math.cbrt(Math.max(0,l(p)||1))*e.nodeRelSize,m=s(u),f=a(u),_=u.__curve?function(A){return u.__curve.getPoint(A)}:function(A){var w=function(B,k,te,R){return k[B]+(te[B]-k[B])*R||0};return{x:w("x",h,p,A),y:w("y",h,p,A),z:w("z",h,p,A)}},y=u.__curve?u.__curve.getLength():Math.sqrt(["x","y","z"].map(function(A){return Math.pow((p[A]||0)-(h[A]||0),2)}).reduce(function(A,w){return A+w},0)),x=g+m+(y-g-v-m)*f,S=_(x/y),M=_((x-m)/y);["x","y","z"].forEach(function(A){return c.position[A]=M[A]});var E=Ql(Ie.Vector3,Qn(["x","y","z"].map(function(A){return S[A]})));c.parent.localToWorld(E),c.lookAt(E)}}})}function o(){var a=it(e.linkDirectionalParticleSpeed);e.graphData.links.forEach(function(s){var l=s.__photonsObj&&s.__photonsObj.children,u=s.__singleHopPhotonsObj&&s.__singleHopPhotonsObj.children;if(!((!u||!u.length)&&(!l||!l.length))){var c=n?s:e.layout.getLinkPosition(e.layout.graph.getLink(s.source,s.target).id),d=c[n?"source":"from"],h=c[n?"target":"to"];if(!(!d||!h||!d.hasOwnProperty("x")||!h.hasOwnProperty("x"))){var p=a(s),g=s.__curve?function(m){return s.__curve.getPoint(m)}:function(m){var f=function(y,x,S,M){return x[y]+(S[y]-x[y])*M||0};return{x:f("x",d,h,m),y:f("y",d,h,m),z:f("z",d,h,m)}},v=[].concat(Qn(l||[]),Qn(u||[]));v.forEach(function(m,f){var _=m.parent.__linkThreeObjType==="singleHopPhotons";if(m.hasOwnProperty("__progressRatio")||(m.__progressRatio=_?0:f/l.length),m.__progressRatio+=p,m.__progressRatio>=1)if(!_)m.__progressRatio=m.__progressRatio%1;else{m.parent.remove(m),Jd(m);return}var y=m.__progressRatio,x=g(y);["x","y","z"].forEach(function(S){return m.position[S]=x[S]})})}}})}},emitParticle:function(e,n){if(n&&e.graphData.links.includes(n)){if(!n.__singleHopPhotonsObj){var r=new Ie.Group;r.__linkThreeObjType="singleHopPhotons",n.__singleHopPhotonsObj=r,e.graphScene.add(r)}var i=it(e.linkDirectionalParticleWidth),o=Math.ceil(i(n)*10)/10/2,a=e.linkDirectionalParticleResolution,s=new Ie.SphereGeometry(o,a,a),l=it(e.linkColor),u=it(e.linkDirectionalParticleColor),c=u(n)||l(n)||"#f0f0f0",d=new Ie.Color(Ha(c)),h=e.linkOpacity*3,p=new Ie.MeshLambertMaterial({color:d,transparent:!0,opacity:h});n.__singleHopPhotonsObj.add(new Ie.Mesh(s,p))}return this},getGraphBbox:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0};if(!e.initialised)return null;var r=function i(o){var a=[];if(o.geometry){o.geometry.computeBoundingBox();var s=new Ie.Box3;s.copy(o.geometry.boundingBox).applyMatrix4(o.matrixWorld),a.push(s)}return a.concat.apply(a,Qn((o.children||[]).filter(function(l){return!l.hasOwnProperty("__graphObjType")||l.__graphObjType==="node"&&n(l.__data)}).map(i)))}(e.graphScene);return r.length?Object.assign.apply(Object,Qn(["x","y","z"].map(function(i){return Cp({},i,[BO(r,function(o){return o.min[i]}),zO(r,function(o){return o.max[i]})])}))):null}},stateInit:function(){return{d3ForceLayout:aL().force("link",j2()).force("charge",sL()).force("center",YP()).force("dagRadial",null).stop(),engineRunning:!1}},init:function(e,n){n.graphScene=e},update:function(e,n){var r=function(q){return q.some(function(re){return n.hasOwnProperty(re)})};if(e.engineRunning=!1,e.onUpdate(),e.nodeAutoColorBy!==null&&r(["nodeAutoColorBy","graphData","nodeColor"])&&f0(e.graphData.nodes,it(e.nodeAutoColorBy),e.nodeColor),e.linkAutoColorBy!==null&&r(["linkAutoColorBy","graphData","linkColor"])&&f0(e.graphData.links,it(e.linkAutoColorBy),e.linkColor),e._flushObjects||r(["graphData","nodeThreeObject","nodeThreeObjectExtend","nodeVal","nodeColor","nodeVisibility","nodeRelSize","nodeResolution","nodeOpacity"])){var i=it(e.nodeThreeObject),o=it(e.nodeThreeObjectExtend),a=it(e.nodeVal),s=it(e.nodeColor),l=it(e.nodeVisibility),u={},c={};Ba(e.graphData.nodes.filter(l),e.graphScene,{purge:e._flushObjects||r(["nodeThreeObject","nodeThreeObjectExtend"]),objFilter:function(q){return q.__graphObjType==="node"},createObj:function(q){var re=i(q),F=o(q);re&&e.nodeThreeObject===re&&(re=re.clone());var ne;return re&&!F?ne=re:(ne=new Ie.Mesh,ne.__graphDefaultObj=!0,re&&F&&ne.add(re)),ne.__graphObjType="node",ne},updateObj:function(q,re){if(q.__graphDefaultObj){var F=a(re)||1,ne=Math.cbrt(F)*e.nodeRelSize,de=e.nodeResolution;(!q.geometry.type.match(/^Sphere(Buffer)?Geometry$/)||q.geometry.parameters.radius!==ne||q.geometry.parameters.widthSegments!==de)&&(u.hasOwnProperty(F)||(u[F]=new Ie.SphereGeometry(ne,de,de)),q.geometry.dispose(),q.geometry=u[F]);var he=s(re),_e=new Ie.Color(Ha(he||"#ffffaa")),j=e.nodeOpacity*Cf(he);(q.material.type!=="MeshLambertMaterial"||!q.material.color.equals(_e)||q.material.opacity!==j)&&(c.hasOwnProperty(he)||(c[he]=new Ie.MeshLambertMaterial({color:_e,transparent:!0,opacity:j})),q.material.dispose(),q.material=c[he])}}})}if(e._flushObjects||r(["graphData","linkThreeObject","linkThreeObjectExtend","linkMaterial","linkColor","linkWidth","linkVisibility","linkResolution","linkOpacity","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution"])){var d=it(e.linkThreeObject),h=it(e.linkThreeObjectExtend),p=it(e.linkMaterial),g=it(e.linkVisibility),v=it(e.linkColor),m=it(e.linkWidth),f={},_={},y={},x=e.graphData.links.filter(g);if(Ba(x,e.graphScene,{objBindAttr:"__lineObj",purge:e._flushObjects||r(["linkThreeObject","linkThreeObjectExtend","linkWidth"]),objFilter:function(q){return q.__graphObjType==="link"},exitObj:function(q){var re=q.__data&&q.__data.__singleHopPhotonsObj;re&&(re.parent.remove(re),Jd(re),delete q.__data.__singleHopPhotonsObj)},createObj:function(q){var re=d(q),F=h(q);re&&e.linkThreeObject===re&&(re=re.clone());var ne;if(!re||F){var de=!!m(q);if(de)ne=new Ie.Mesh;else{var he=new Ie.BufferGeometry;he[h0]("position",new Ie.BufferAttribute(new Float32Array(2*3),3)),ne=new Ie.Line(he)}}var _e;return re?F?(_e=new Ie.Group,_e.__graphDefaultObj=!0,_e.add(ne),_e.add(re)):_e=re:(_e=ne,_e.__graphDefaultObj=!0),_e.renderOrder=10,_e.__graphObjType="link",_e},updateObj:function(q,re){if(q.__graphDefaultObj){var F=q.children.length?q.children[0]:q,ne=Math.ceil(m(re)*10)/10,de=!!ne;if(de){var he=ne/2,_e=e.linkResolution;if(!F.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)||F.geometry.parameters.radiusTop!==he||F.geometry.parameters.radialSegments!==_e){if(!f.hasOwnProperty(ne)){var j=new Ie.CylinderGeometry(he,he,1,_e,1,!1);j[Nl](new Ie.Matrix4().makeTranslation(0,1/2,0)),j[Nl](new Ie.Matrix4().makeRotationX(Math.PI/2)),f[ne]=j}F.geometry.dispose(),F.geometry=f[ne]}}var pt=p(re);if(pt)F.material=pt;else{var Me=v(re),Oe=new Ie.Color(Ha(Me||"#f0f0f0")),ye=e.linkOpacity*Cf(Me),Je=de?"MeshLambertMaterial":"LineBasicMaterial";if(F.material.type!==Je||!F.material.color.equals(Oe)||F.material.opacity!==ye){var Fe=de?_:y;Fe.hasOwnProperty(Me)||(Fe[Me]=new Ie[Je]({color:Oe,transparent:ye<1,opacity:ye,depthWrite:ye>=1})),F.material.dispose(),F.material=Fe[Me]}}}}}),e.linkDirectionalArrowLength||n.hasOwnProperty("linkDirectionalArrowLength")){var S=it(e.linkDirectionalArrowLength),M=it(e.linkDirectionalArrowColor);Ba(x.filter(S),e.graphScene,{objBindAttr:"__arrowObj",objFilter:function(q){return q.__linkThreeObjType==="arrow"},createObj:function(){var q=new Ie.Mesh(void 0,new Ie.MeshLambertMaterial({transparent:!0}));return q.__linkThreeObjType="arrow",q},updateObj:function(q,re){var F=S(re),ne=e.linkDirectionalArrowResolution;if(!q.geometry.type.match(/^Cone(Buffer)?Geometry$/)||q.geometry.parameters.height!==F||q.geometry.parameters.radialSegments!==ne){var de=new Ie.ConeGeometry(F*.25,F,ne);de.translate(0,F/2,0),de.rotateX(Math.PI/2),q.geometry.dispose(),q.geometry=de}var he=M(re)||v(re)||"#f0f0f0";q.material.color=new Ie.Color(Ha(he)),q.material.opacity=e.linkOpacity*3*Cf(he)}})}if(e.linkDirectionalParticles||n.hasOwnProperty("linkDirectionalParticles")){var E=it(e.linkDirectionalParticles),A=it(e.linkDirectionalParticleWidth),w=it(e.linkDirectionalParticleColor),b={},B={};Ba(x.filter(E),e.graphScene,{objBindAttr:"__photonsObj",objFilter:function(q){return q.__linkThreeObjType==="photons"},createObj:function(){var q=new Ie.Group;return q.__linkThreeObjType="photons",q},updateObj:function(q,re){var F=Math.round(Math.abs(E(re))),ne=!!q.children.length&&q.children[0],de=Math.ceil(A(re)*10)/10/2,he=e.linkDirectionalParticleResolution,_e;ne&&ne.geometry.parameters.radius===de&&ne.geometry.parameters.widthSegments===he?_e=ne.geometry:(B.hasOwnProperty(de)||(B[de]=new Ie.SphereGeometry(de,he,he)),_e=B[de],ne&&ne.geometry.dispose());var j=w(re)||v(re)||"#f0f0f0",pt=new Ie.Color(Ha(j)),Me=e.linkOpacity*3,Oe;ne&&ne.material.color.equals(pt)&&ne.material.opacity===Me?Oe=ne.material:(b.hasOwnProperty(j)||(b[j]=new Ie.MeshLambertMaterial({color:pt,transparent:!0,opacity:Me})),Oe=b[j],ne&&ne.material.dispose()),Ba(Qn(new Array(F)).map(function(ye,Je){return{idx:Je}}),q,{idAccessor:function(Je){return Je.idx},createObj:function(){return new Ie.Mesh(_e,Oe)},updateObj:function(Je){Je.geometry=_e,Je.material=Oe}})}})}}if(e._flushObjects=!1,r(["graphData","nodeId","linkSource","linkTarget","numDimensions","forceEngine","dagMode","dagNodeFilter","dagLevelDistance"])){e.engineRunning=!1,e.graphData.links.forEach(function($){$.source=$[e.linkSource],$.target=$[e.linkTarget]});var k=e.forceEngine!=="ngraph",te;if(k){(te=e.d3ForceLayout).stop().alpha(1).numDimensions(e.numDimensions).nodes(e.graphData.nodes);var R=e.d3ForceLayout.force("link");R&&R.id(function($){return $[e.nodeId]}).links(e.graphData.links);var L=e.dagMode&&o3(e.graphData,function($){return $[e.nodeId]},{nodeFilter:e.dagNodeFilter,onLoopError:e.onDagError||void 0}),D=Math.max.apply(Math,Qn(Object.values(L||[]))),J=e.dagLevelDistance||e.graphData.nodes.length/(D||1)*a3*(["radialin","radialout"].indexOf(e.dagMode)!==-1?.7:1);if(e.dagMode){var z=function(q,re){return function(F){return q?(L[F[e.nodeId]]-D/2)*J*(re?-1:1):void 0}},W=z(["lr","rl"].indexOf(e.dagMode)!==-1,e.dagMode==="rl"),N=z(["td","bu"].indexOf(e.dagMode)!==-1,e.dagMode==="td"),V=z(["zin","zout"].indexOf(e.dagMode)!==-1,e.dagMode==="zout");e.graphData.nodes.filter(e.dagNodeFilter).forEach(function($){$.fx=W($),$.fy=N($),$.fz=V($)})}e.d3ForceLayout.force("dagRadial",["radialin","radialout"].indexOf(e.dagMode)!==-1?lL(function($){var q=L[$[e.nodeId]]||-1;return(e.dagMode==="radialin"?D-q:q)*J}).strength(function($){return e.dagNodeFilter($)?1:0}):null)}else{var Y=d0.graph();e.graphData.nodes.forEach(function($){Y.addNode($[e.nodeId])}),e.graphData.links.forEach(function($){Y.addLink($.source,$.target)}),te=d0.forcelayout(Y,mS({dimensions:e.numDimensions},e.ngraphPhysics)),te.graph=Y}for(var G=0;G<e.warmupTicks&&!(k&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin);G++)te[k?"tick":"step"]();e.layout=te,this.resetCountdown()}e.engineRunning=!0,e.onFinishUpdate()}});function l3(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Object,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=function(i){WD(a,i);var o=qD(a);function a(){var s;GD(this,a);for(var l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];return s=o.call.apply(o,[this].concat(u)),s.__kapsuleInstance=t().apply(void 0,[].concat(Qn(n?[vS(s)]:[]),u)),s}return VD(a)}(e);return Object.keys(t()).forEach(function(i){return r.prototype[i]=function(){var o,a=(o=this.__kapsuleInstance)[i].apply(o,arguments);return a===this.__kapsuleInstance?this:a}}),r}var u3=window.THREE?window.THREE:{Group:Wo},xS=l3(s3,u3.Group,!0);const Rf={type:"change"},Pf={type:"start"},Lf={type:"end"};class c3 extends cr{constructor(e,n){super();const r=this,i={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:pr.ROTATE,MIDDLE:pr.DOLLY,RIGHT:pr.PAN},this.target=new I;const o=1e-6,a=new I;let s=1,l=i.NONE,u=i.NONE,c=0,d=0,h=0;const p=new I,g=new me,v=new me,m=new I,f=new me,_=new me,y=new me,x=new me,S=[],M={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const F=r.domElement.getBoundingClientRect(),ne=r.domElement.ownerDocument.documentElement;r.screen.left=F.left+window.pageXOffset-ne.clientLeft,r.screen.top=F.top+window.pageYOffset-ne.clientTop,r.screen.width=F.width,r.screen.height=F.height};const E=function(){const F=new me;return function(de,he){return F.set((de-r.screen.left)/r.screen.width,(he-r.screen.top)/r.screen.height),F}}(),A=function(){const F=new me;return function(de,he){return F.set((de-r.screen.width*.5-r.screen.left)/(r.screen.width*.5),(r.screen.height+2*(r.screen.top-he))/r.screen.width),F}}();this.rotateCamera=function(){const F=new I,ne=new ur,de=new I,he=new I,_e=new I,j=new I;return function(){j.set(v.x-g.x,v.y-g.y,0);let Me=j.length();Me?(p.copy(r.object.position).sub(r.target),de.copy(p).normalize(),he.copy(r.object.up).normalize(),_e.crossVectors(he,de).normalize(),he.setLength(v.y-g.y),_e.setLength(v.x-g.x),j.copy(he.add(_e)),F.crossVectors(j,p).normalize(),Me*=r.rotateSpeed,ne.setFromAxisAngle(F,Me),p.applyQuaternion(ne),r.object.up.applyQuaternion(ne),m.copy(F),h=Me):!r.staticMoving&&h&&(h*=Math.sqrt(1-r.dynamicDampingFactor),p.copy(r.object.position).sub(r.target),ne.setFromAxisAngle(m,h),p.applyQuaternion(ne),r.object.up.applyQuaternion(ne)),g.copy(v)}}(),this.zoomCamera=function(){let F;l===i.TOUCH_ZOOM_PAN?(F=c/d,c=d,r.object.isPerspectiveCamera?p.multiplyScalar(F):r.object.isOrthographicCamera?(r.object.zoom=Hd.clamp(r.object.zoom/F,r.minZoom,r.maxZoom),s!==r.object.zoom&&r.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(F=1+(_.y-f.y)*r.zoomSpeed,F!==1&&F>0&&(r.object.isPerspectiveCamera?p.multiplyScalar(F):r.object.isOrthographicCamera?(r.object.zoom=Hd.clamp(r.object.zoom/F,r.minZoom,r.maxZoom),s!==r.object.zoom&&r.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),r.staticMoving?f.copy(_):f.y+=(_.y-f.y)*this.dynamicDampingFactor)},this.panCamera=function(){const F=new me,ne=new I,de=new I;return function(){if(F.copy(x).sub(y),F.lengthSq()){if(r.object.isOrthographicCamera){const _e=(r.object.right-r.object.left)/r.object.zoom/r.domElement.clientWidth,j=(r.object.top-r.object.bottom)/r.object.zoom/r.domElement.clientWidth;F.x*=_e,F.y*=j}F.multiplyScalar(p.length()*r.panSpeed),de.copy(p).cross(r.object.up).setLength(F.x),de.add(ne.copy(r.object.up).setLength(F.y)),r.object.position.add(de),r.target.add(de),r.staticMoving?y.copy(x):y.add(F.subVectors(x,y).multiplyScalar(r.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!r.noZoom||!r.noPan)&&(p.lengthSq()>r.maxDistance*r.maxDistance&&(r.object.position.addVectors(r.target,p.setLength(r.maxDistance)),f.copy(_)),p.lengthSq()<r.minDistance*r.minDistance&&(r.object.position.addVectors(r.target,p.setLength(r.minDistance)),f.copy(_)))},this.update=function(){p.subVectors(r.object.position,r.target),r.noRotate||r.rotateCamera(),r.noZoom||r.zoomCamera(),r.noPan||r.panCamera(),r.object.position.addVectors(r.target,p),r.object.isPerspectiveCamera?(r.checkDistances(),r.object.lookAt(r.target),a.distanceToSquared(r.object.position)>o&&(r.dispatchEvent(Rf),a.copy(r.object.position))):r.object.isOrthographicCamera?(r.object.lookAt(r.target),(a.distanceToSquared(r.object.position)>o||s!==r.object.zoom)&&(r.dispatchEvent(Rf),a.copy(r.object.position),s=r.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=i.NONE,u=i.NONE,r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.up.copy(r.up0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),p.subVectors(r.object.position,r.target),r.object.lookAt(r.target),r.dispatchEvent(Rf),a.copy(r.object.position),s=r.object.zoom};function w(F){r.enabled!==!1&&(S.length===0&&(r.domElement.setPointerCapture(F.pointerId),r.domElement.addEventListener("pointermove",b),r.domElement.addEventListener("pointerup",B)),G(F),F.pointerType==="touch"?W(F):L(F))}function b(F){r.enabled!==!1&&(F.pointerType==="touch"?N(F):D(F))}function B(F){r.enabled!==!1&&(F.pointerType==="touch"?V(F):J(),$(F),S.length===0&&(r.domElement.releasePointerCapture(F.pointerId),r.domElement.removeEventListener("pointermove",b),r.domElement.removeEventListener("pointerup",B)))}function k(F){$(F)}function te(F){r.enabled!==!1&&(window.removeEventListener("keydown",te),u===i.NONE&&(F.code===r.keys[i.ROTATE]&&!r.noRotate?u=i.ROTATE:F.code===r.keys[i.ZOOM]&&!r.noZoom?u=i.ZOOM:F.code===r.keys[i.PAN]&&!r.noPan&&(u=i.PAN)))}function R(){r.enabled!==!1&&(u=i.NONE,window.addEventListener("keydown",te))}function L(F){if(l===i.NONE)switch(F.button){case r.mouseButtons.LEFT:l=i.ROTATE;break;case r.mouseButtons.MIDDLE:l=i.ZOOM;break;case r.mouseButtons.RIGHT:l=i.PAN;break}const ne=u!==i.NONE?u:l;ne===i.ROTATE&&!r.noRotate?(v.copy(A(F.pageX,F.pageY)),g.copy(v)):ne===i.ZOOM&&!r.noZoom?(f.copy(E(F.pageX,F.pageY)),_.copy(f)):ne===i.PAN&&!r.noPan&&(y.copy(E(F.pageX,F.pageY)),x.copy(y)),r.dispatchEvent(Pf)}function D(F){const ne=u!==i.NONE?u:l;ne===i.ROTATE&&!r.noRotate?(g.copy(v),v.copy(A(F.pageX,F.pageY))):ne===i.ZOOM&&!r.noZoom?_.copy(E(F.pageX,F.pageY)):ne===i.PAN&&!r.noPan&&x.copy(E(F.pageX,F.pageY))}function J(){l=i.NONE,r.dispatchEvent(Lf)}function z(F){if(r.enabled!==!1&&r.noZoom!==!0){switch(F.preventDefault(),F.deltaMode){case 2:f.y-=F.deltaY*.025;break;case 1:f.y-=F.deltaY*.01;break;default:f.y-=F.deltaY*25e-5;break}r.dispatchEvent(Pf),r.dispatchEvent(Lf)}}function W(F){switch(q(F),S.length){case 1:l=i.TOUCH_ROTATE,v.copy(A(S[0].pageX,S[0].pageY)),g.copy(v);break;default:l=i.TOUCH_ZOOM_PAN;const ne=S[0].pageX-S[1].pageX,de=S[0].pageY-S[1].pageY;d=c=Math.sqrt(ne*ne+de*de);const he=(S[0].pageX+S[1].pageX)/2,_e=(S[0].pageY+S[1].pageY)/2;y.copy(E(he,_e)),x.copy(y);break}r.dispatchEvent(Pf)}function N(F){switch(q(F),S.length){case 1:g.copy(v),v.copy(A(F.pageX,F.pageY));break;default:const ne=re(F),de=F.pageX-ne.x,he=F.pageY-ne.y;d=Math.sqrt(de*de+he*he);const _e=(F.pageX+ne.x)/2,j=(F.pageY+ne.y)/2;x.copy(E(_e,j));break}}function V(F){switch(S.length){case 0:l=i.NONE;break;case 1:l=i.TOUCH_ROTATE,v.copy(A(F.pageX,F.pageY)),g.copy(v);break;case 2:l=i.TOUCH_ZOOM_PAN;for(let ne=0;ne<S.length;ne++)if(S[ne].pointerId!==F.pointerId){const de=M[S[ne].pointerId];v.copy(A(de.x,de.y)),g.copy(v);break}break}r.dispatchEvent(Lf)}function Y(F){r.enabled!==!1&&F.preventDefault()}function G(F){S.push(F)}function $(F){delete M[F.pointerId];for(let ne=0;ne<S.length;ne++)if(S[ne].pointerId==F.pointerId){S.splice(ne,1);return}}function q(F){let ne=M[F.pointerId];ne===void 0&&(ne=new me,M[F.pointerId]=ne),ne.set(F.pageX,F.pageY)}function re(F){const ne=F.pointerId===S[0].pointerId?S[1]:S[0];return M[ne.pointerId]}this.dispose=function(){r.domElement.removeEventListener("contextmenu",Y),r.domElement.removeEventListener("pointerdown",w),r.domElement.removeEventListener("pointercancel",k),r.domElement.removeEventListener("wheel",z),r.domElement.removeEventListener("pointermove",b),r.domElement.removeEventListener("pointerup",B),window.removeEventListener("keydown",te),window.removeEventListener("keyup",R)},this.domElement.addEventListener("contextmenu",Y),this.domElement.addEventListener("pointerdown",w),this.domElement.addEventListener("pointercancel",k),this.domElement.addEventListener("wheel",z,{passive:!1}),window.addEventListener("keydown",te),window.addEventListener("keyup",R),this.handleResize(),this.update()}}const p0={type:"change"},Of={type:"start"},m0={type:"end"},Il=new nc,g0=new Lr,f3=Math.cos(70*Hd.DEG2RAD);class d3 extends cr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pr.ROTATE,MIDDLE:pr.DOLLY,RIGHT:pr.PAN},this.touches={ONE:uo.ROTATE,TWO:uo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",Ne),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ne),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(p0),r.update(),o=i.NONE},this.update=function(){const O=new I,ce=new ur().setFromUnitVectors(e.up,new I(0,1,0)),Ce=ce.clone().invert(),we=new I,ae=new ur,U=new I,fe=2*Math.PI;return function(Ue=null){const De=r.object.position;O.copy(De).sub(r.target),O.applyQuaternion(ce),s.setFromVector3(O),r.autoRotate&&o===i.NONE&&k(b(Ue)),r.enableDamping?(s.theta+=l.theta*r.dampingFactor,s.phi+=l.phi*r.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Ye=r.minAzimuthAngle,Ke=r.maxAzimuthAngle;isFinite(Ye)&&isFinite(Ke)&&(Ye<-Math.PI?Ye+=fe:Ye>Math.PI&&(Ye-=fe),Ke<-Math.PI?Ke+=fe:Ke>Math.PI&&(Ke-=fe),Ye<=Ke?s.theta=Math.max(Ye,Math.min(Ke,s.theta)):s.theta=s.theta>(Ye+Ke)/2?Math.max(Ye,s.theta):Math.min(Ke,s.theta)),s.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,s.phi)),s.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(c,r.dampingFactor):r.target.add(c),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&M||r.object.isOrthographicCamera?s.radius=N(s.radius):s.radius=N(s.radius*u),O.setFromSpherical(s),O.applyQuaternion(Ce),De.copy(r.target).add(O),r.object.lookAt(r.target),r.enableDamping===!0?(l.theta*=1-r.dampingFactor,l.phi*=1-r.dampingFactor,c.multiplyScalar(1-r.dampingFactor)):(l.set(0,0,0),c.set(0,0,0));let Et=!1;if(r.zoomToCursor&&M){let Tt=null;if(r.object.isPerspectiveCamera){const rt=O.length();Tt=N(rt*u);const Rt=rt-Tt;r.object.position.addScaledVector(x,Rt),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const rt=new I(S.x,S.y,0);rt.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/u)),r.object.updateProjectionMatrix(),Et=!0;const Rt=new I(S.x,S.y,0);Rt.unproject(r.object),r.object.position.sub(Rt).add(rt),r.object.updateMatrixWorld(),Tt=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;Tt!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(Tt).add(r.object.position):(Il.origin.copy(r.object.position),Il.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(Il.direction))<f3?e.lookAt(r.target):(g0.setFromNormalAndCoplanarPoint(r.object.up,r.target),Il.intersectPlane(g0,r.target))))}else r.object.isOrthographicCamera&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/u)),r.object.updateProjectionMatrix(),Et=!0);return u=1,M=!1,Et||we.distanceToSquared(r.object.position)>a||8*(1-ae.dot(r.object.quaternion))>a||U.distanceToSquared(r.target)>0?(r.dispatchEvent(p0),we.copy(r.object.position),ae.copy(r.object.quaternion),U.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",ot),r.domElement.removeEventListener("pointerdown",P),r.domElement.removeEventListener("pointercancel",K),r.domElement.removeEventListener("wheel",ue),r.domElement.removeEventListener("pointermove",T),r.domElement.removeEventListener("pointerup",K),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",Ne),r._domElementKeyEvents=null)};const r=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=i.NONE;const a=1e-6,s=new Wd,l=new Wd;let u=1;const c=new I,d=new me,h=new me,p=new me,g=new me,v=new me,m=new me,f=new me,_=new me,y=new me,x=new I,S=new me;let M=!1;const E=[],A={};let w=!1;function b(O){return O!==null?2*Math.PI/60*r.autoRotateSpeed*O:2*Math.PI/60/60*r.autoRotateSpeed}function B(O){const ce=Math.abs(O*.01);return Math.pow(.95,r.zoomSpeed*ce)}function k(O){l.theta-=O}function te(O){l.phi-=O}const R=function(){const O=new I;return function(Ce,we){O.setFromMatrixColumn(we,0),O.multiplyScalar(-Ce),c.add(O)}}(),L=function(){const O=new I;return function(Ce,we){r.screenSpacePanning===!0?O.setFromMatrixColumn(we,1):(O.setFromMatrixColumn(we,0),O.crossVectors(r.object.up,O)),O.multiplyScalar(Ce),c.add(O)}}(),D=function(){const O=new I;return function(Ce,we){const ae=r.domElement;if(r.object.isPerspectiveCamera){const U=r.object.position;O.copy(U).sub(r.target);let fe=O.length();fe*=Math.tan(r.object.fov/2*Math.PI/180),R(2*Ce*fe/ae.clientHeight,r.object.matrix),L(2*we*fe/ae.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(R(Ce*(r.object.right-r.object.left)/r.object.zoom/ae.clientWidth,r.object.matrix),L(we*(r.object.top-r.object.bottom)/r.object.zoom/ae.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function J(O){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?u/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function z(O){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?u*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function W(O,ce){if(!r.zoomToCursor)return;M=!0;const Ce=r.domElement.getBoundingClientRect(),we=O-Ce.left,ae=ce-Ce.top,U=Ce.width,fe=Ce.height;S.x=we/U*2-1,S.y=-(ae/fe)*2+1,x.set(S.x,S.y,1).unproject(r.object).sub(r.object.position).normalize()}function N(O){return Math.max(r.minDistance,Math.min(r.maxDistance,O))}function V(O){d.set(O.clientX,O.clientY)}function Y(O){W(O.clientX,O.clientX),f.set(O.clientX,O.clientY)}function G(O){g.set(O.clientX,O.clientY)}function $(O){h.set(O.clientX,O.clientY),p.subVectors(h,d).multiplyScalar(r.rotateSpeed);const ce=r.domElement;k(2*Math.PI*p.x/ce.clientHeight),te(2*Math.PI*p.y/ce.clientHeight),d.copy(h),r.update()}function q(O){_.set(O.clientX,O.clientY),y.subVectors(_,f),y.y>0?J(B(y.y)):y.y<0&&z(B(y.y)),f.copy(_),r.update()}function re(O){v.set(O.clientX,O.clientY),m.subVectors(v,g).multiplyScalar(r.panSpeed),D(m.x,m.y),g.copy(v),r.update()}function F(O){W(O.clientX,O.clientY),O.deltaY<0?z(B(O.deltaY)):O.deltaY>0&&J(B(O.deltaY)),r.update()}function ne(O){let ce=!1;switch(O.code){case r.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?te(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):D(0,r.keyPanSpeed),ce=!0;break;case r.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?te(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):D(0,-r.keyPanSpeed),ce=!0;break;case r.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?k(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):D(r.keyPanSpeed,0),ce=!0;break;case r.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?k(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):D(-r.keyPanSpeed,0),ce=!0;break}ce&&(O.preventDefault(),r.update())}function de(O){if(E.length===1)d.set(O.pageX,O.pageY);else{const ce=xe(O),Ce=.5*(O.pageX+ce.x),we=.5*(O.pageY+ce.y);d.set(Ce,we)}}function he(O){if(E.length===1)g.set(O.pageX,O.pageY);else{const ce=xe(O),Ce=.5*(O.pageX+ce.x),we=.5*(O.pageY+ce.y);g.set(Ce,we)}}function _e(O){const ce=xe(O),Ce=O.pageX-ce.x,we=O.pageY-ce.y,ae=Math.sqrt(Ce*Ce+we*we);f.set(0,ae)}function j(O){r.enableZoom&&_e(O),r.enablePan&&he(O)}function pt(O){r.enableZoom&&_e(O),r.enableRotate&&de(O)}function Me(O){if(E.length==1)h.set(O.pageX,O.pageY);else{const Ce=xe(O),we=.5*(O.pageX+Ce.x),ae=.5*(O.pageY+Ce.y);h.set(we,ae)}p.subVectors(h,d).multiplyScalar(r.rotateSpeed);const ce=r.domElement;k(2*Math.PI*p.x/ce.clientHeight),te(2*Math.PI*p.y/ce.clientHeight),d.copy(h)}function Oe(O){if(E.length===1)v.set(O.pageX,O.pageY);else{const ce=xe(O),Ce=.5*(O.pageX+ce.x),we=.5*(O.pageY+ce.y);v.set(Ce,we)}m.subVectors(v,g).multiplyScalar(r.panSpeed),D(m.x,m.y),g.copy(v)}function ye(O){const ce=xe(O),Ce=O.pageX-ce.x,we=O.pageY-ce.y,ae=Math.sqrt(Ce*Ce+we*we);_.set(0,ae),y.set(0,Math.pow(_.y/f.y,r.zoomSpeed)),J(y.y),f.copy(_);const U=(O.pageX+ce.x)*.5,fe=(O.pageY+ce.y)*.5;W(U,fe)}function Je(O){r.enableZoom&&ye(O),r.enablePan&&Oe(O)}function Fe(O){r.enableZoom&&ye(O),r.enableRotate&&Me(O)}function P(O){r.enabled!==!1&&(E.length===0&&(r.domElement.setPointerCapture(O.pointerId),r.domElement.addEventListener("pointermove",T),r.domElement.addEventListener("pointerup",K)),je(O),O.pointerType==="touch"?Ge(O):le(O))}function T(O){r.enabled!==!1&&(O.pointerType==="touch"?ie(O):oe(O))}function K(O){ze(O),E.length===0&&(r.domElement.releasePointerCapture(O.pointerId),r.domElement.removeEventListener("pointermove",T),r.domElement.removeEventListener("pointerup",K)),r.dispatchEvent(m0),o=i.NONE}function le(O){let ce;switch(O.button){case 0:ce=r.mouseButtons.LEFT;break;case 1:ce=r.mouseButtons.MIDDLE;break;case 2:ce=r.mouseButtons.RIGHT;break;default:ce=-1}switch(ce){case pr.DOLLY:if(r.enableZoom===!1)return;Y(O),o=i.DOLLY;break;case pr.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(r.enablePan===!1)return;G(O),o=i.PAN}else{if(r.enableRotate===!1)return;V(O),o=i.ROTATE}break;case pr.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(r.enableRotate===!1)return;V(O),o=i.ROTATE}else{if(r.enablePan===!1)return;G(O),o=i.PAN}break;default:o=i.NONE}o!==i.NONE&&r.dispatchEvent(Of)}function oe(O){switch(o){case i.ROTATE:if(r.enableRotate===!1)return;$(O);break;case i.DOLLY:if(r.enableZoom===!1)return;q(O);break;case i.PAN:if(r.enablePan===!1)return;re(O);break}}function ue(O){r.enabled===!1||r.enableZoom===!1||o!==i.NONE||(O.preventDefault(),r.dispatchEvent(Of),F(Ae(O)),r.dispatchEvent(m0))}function Ae(O){const ce=O.deltaMode,Ce={clientX:O.clientX,clientY:O.clientY,deltaY:O.deltaY};switch(ce){case 1:Ce.deltaY*=16;break;case 2:Ce.deltaY*=100;break}return O.ctrlKey&&!w&&(Ce.deltaY*=10),Ce}function ve(O){O.key==="Control"&&(w=!0,document.addEventListener("keyup",be,{passive:!0,capture:!0}))}function be(O){O.key==="Control"&&(w=!1,document.removeEventListener("keyup",be,{passive:!0,capture:!0}))}function Ne(O){r.enabled===!1||r.enablePan===!1||ne(O)}function Ge(O){switch(Le(O),E.length){case 1:switch(r.touches.ONE){case uo.ROTATE:if(r.enableRotate===!1)return;de(O),o=i.TOUCH_ROTATE;break;case uo.PAN:if(r.enablePan===!1)return;he(O),o=i.TOUCH_PAN;break;default:o=i.NONE}break;case 2:switch(r.touches.TWO){case uo.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;j(O),o=i.TOUCH_DOLLY_PAN;break;case uo.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;pt(O),o=i.TOUCH_DOLLY_ROTATE;break;default:o=i.NONE}break;default:o=i.NONE}o!==i.NONE&&r.dispatchEvent(Of)}function ie(O){switch(Le(O),o){case i.TOUCH_ROTATE:if(r.enableRotate===!1)return;Me(O),r.update();break;case i.TOUCH_PAN:if(r.enablePan===!1)return;Oe(O),r.update();break;case i.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Je(O),r.update();break;case i.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Fe(O),r.update();break;default:o=i.NONE}}function ot(O){r.enabled!==!1&&O.preventDefault()}function je(O){E.push(O.pointerId)}function ze(O){delete A[O.pointerId];for(let ce=0;ce<E.length;ce++)if(E[ce]==O.pointerId){E.splice(ce,1);return}}function Le(O){let ce=A[O.pointerId];ce===void 0&&(ce=new me,A[O.pointerId]=ce),ce.set(O.pageX,O.pageY)}function xe(O){const ce=O.pointerId===E[0]?E[1]:E[0];return A[ce]}r.domElement.addEventListener("contextmenu",ot),r.domElement.addEventListener("pointerdown",P),r.domElement.addEventListener("pointercancel",K),r.domElement.addEventListener("wheel",ue,{passive:!1}),document.addEventListener("keydown",ve,{passive:!0,capture:!0}),this.update()}}const h3={type:"change"};class p3 extends cr{constructor(e,n){super(),this.object=e,this.domElement=n,this.enabled=!0,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const r=this,i=1e-6,o=new ur,a=new I;this.tmpQuaternion=new ur,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new I(0,0,0),this.rotationVector=new I(0,0,0),this.keydown=function(g){if(!(g.altKey||this.enabled===!1)){switch(g.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(g){if(this.enabled!==!1){switch(g.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()}},this.pointerdown=function(g){if(this.enabled!==!1)if(this.dragToLook)this.status++;else{switch(g.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(g){if(this.enabled!==!1&&(!this.dragToLook||this.status>0)){const v=this.getContainerDimensions(),m=v.size[0]/2,f=v.size[1]/2;this.moveState.yawLeft=-(g.pageX-v.offset[0]-m)/m,this.moveState.pitchDown=(g.pageY-v.offset[1]-f)/f,this.updateRotationVector()}},this.pointerup=function(g){if(this.enabled!==!1){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(g.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()}},this.pointercancel=function(){this.enabled!==!1&&(this.dragToLook?(this.status=0,this.moveState.yawLeft=this.moveState.pitchDown=0):(this.moveState.forward=0,this.moveState.back=0,this.updateMovementVector()),this.updateRotationVector())},this.contextMenu=function(g){this.enabled!==!1&&g.preventDefault()},this.update=function(g){if(this.enabled===!1)return;const v=g*r.movementSpeed,m=g*r.rollSpeed;r.object.translateX(r.moveVector.x*v),r.object.translateY(r.moveVector.y*v),r.object.translateZ(r.moveVector.z*v),r.tmpQuaternion.set(r.rotationVector.x*m,r.rotationVector.y*m,r.rotationVector.z*m,1).normalize(),r.object.quaternion.multiply(r.tmpQuaternion),(a.distanceToSquared(r.object.position)>i||8*(1-o.dot(r.object.quaternion))>i)&&(r.dispatchEvent(h3),o.copy(r.object.quaternion),a.copy(r.object.position))},this.updateMovementVector=function(){const g=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-g+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",s),this.domElement.removeEventListener("pointerdown",u),this.domElement.removeEventListener("pointermove",l),this.domElement.removeEventListener("pointerup",c),this.domElement.removeEventListener("pointercancel",d),window.removeEventListener("keydown",h),window.removeEventListener("keyup",p)};const s=this.contextMenu.bind(this),l=this.pointermove.bind(this),u=this.pointerdown.bind(this),c=this.pointerup.bind(this),d=this.pointercancel.bind(this),h=this.keydown.bind(this),p=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",s),this.domElement.addEventListener("pointerdown",u),this.domElement.addEventListener("pointermove",l),this.domElement.addEventListener("pointerup",c),this.domElement.addEventListener("pointercancel",d),window.addEventListener("keydown",h),window.addEventListener("keyup",p),this.updateMovementVector(),this.updateRotationVector()}}const m3={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class uc{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const g3=new cp(-1,1,1,-1,0,1);class v3 extends On{constructor(){super(),this.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new It([0,2,0,0,2,0],2))}}const _3=new v3;class y3{constructor(e){this._mesh=new rr(_3,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,g3)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class x3 extends uc{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof $r?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=gx.clone(e.uniforms),this.material=new $r({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new y3(this.material)}render(e,n,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class v0 extends uc{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,r){const i=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,s;this.inverse?(a=0,s=1):(a=1,s=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),o.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),o.buffers.stencil.setClear(s),o.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(i.EQUAL,1,4294967295),o.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),o.buffers.stencil.setLocked(!0)}}class S3 extends uc{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class M3{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const r=e.getSize(new me);this._width=r.width,this._height=r.height,n=new bi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ca}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new x3(m3),this.copyPass.material.blending=zr,this.clock=new Lx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let r=!1;for(let i=0,o=this.passes.length;i<o;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),a.needsSwap){if(r){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}v0!==void 0&&(a instanceof v0?r=!0:a instanceof S3&&(r=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class E3 extends uc{constructor(e,n,r=null,i=null,o=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=r,this.clearColor=i,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new et}render(e,n,r){const i=e.autoClear;e.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}function eh(){return eh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},eh.apply(this,arguments)}function w3(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Os(t,e){return Os=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Os(t,e)}function b3(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Os(t,e)}function th(t){return th=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},th(t)}function T3(t){try{return Function.toString.call(t).indexOf("[native code]")!==-1}catch{return typeof t=="function"}}function SS(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(SS=function(){return!!t})()}function A3(t,e,n){if(SS())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var i=new(t.bind.apply(t,r));return n&&Os(i,n.prototype),i}function nh(t){var e=typeof Map=="function"?new Map:void 0;return nh=function(r){if(r===null||!T3(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,i)}function i(){return A3(r,arguments,th(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Os(i,r)},nh(t)}var jo=function(t){b3(e,t);function e(n){var r;return r=t.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+n+" for more information.")||this,w3(r)}return e}(nh(Error));function Df(t){return Math.round(t*255)}function C3(t,e,n){return Df(t)+","+Df(e)+","+Df(n)}function _0(t,e,n,r){if(r===void 0&&(r=C3),e===0)return r(n,n,n);var i=(t%360+360)%360/60,o=(1-Math.abs(2*n-1))*e,a=o*(1-Math.abs(i%2-1)),s=0,l=0,u=0;i>=0&&i<1?(s=o,l=a):i>=1&&i<2?(s=a,l=o):i>=2&&i<3?(l=o,u=a):i>=3&&i<4?(l=a,u=o):i>=4&&i<5?(s=a,u=o):i>=5&&i<6&&(s=o,u=a);var c=n-o/2,d=s+c,h=l+c,p=u+c;return r(d,h,p)}var y0={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function R3(t){if(typeof t!="string")return t;var e=t.toLowerCase();return y0[e]?"#"+y0[e]:t}var P3=/^#[a-fA-F0-9]{6}$/,L3=/^#[a-fA-F0-9]{8}$/,O3=/^#[a-fA-F0-9]{3}$/,D3=/^#[a-fA-F0-9]{4}$/,Nf=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,N3=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,I3=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,U3=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function Rp(t){if(typeof t!="string")throw new jo(3);var e=R3(t);if(e.match(P3))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(L3)){var n=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:n}}if(e.match(O3))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(D3)){var r=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:r}}var i=Nf.exec(e);if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10)};var o=N3.exec(e.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var a=I3.exec(e);if(a){var s=parseInt(""+a[1],10),l=parseInt(""+a[2],10)/100,u=parseInt(""+a[3],10)/100,c="rgb("+_0(s,l,u)+")",d=Nf.exec(c);if(!d)throw new jo(4,e,c);return{red:parseInt(""+d[1],10),green:parseInt(""+d[2],10),blue:parseInt(""+d[3],10)}}var h=U3.exec(e.substring(0,50));if(h){var p=parseInt(""+h[1],10),g=parseInt(""+h[2],10)/100,v=parseInt(""+h[3],10)/100,m="rgb("+_0(p,g,v)+")",f=Nf.exec(m);if(!f)throw new jo(4,e,m);return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10),alpha:parseFloat(""+h[4])>1?parseFloat(""+h[4])/100:parseFloat(""+h[4])}}throw new jo(5)}var k3=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},x0=k3;function Co(t){var e=t.toString(16);return e.length===1?"0"+e:e}function S0(t,e,n){if(typeof t=="number"&&typeof e=="number"&&typeof n=="number")return x0("#"+Co(t)+Co(e)+Co(n));if(typeof t=="object"&&e===void 0&&n===void 0)return x0("#"+Co(t.red)+Co(t.green)+Co(t.blue));throw new jo(6)}function F3(t,e,n,r){if(typeof t=="string"&&typeof e=="number"){var i=Rp(t);return"rgba("+i.red+","+i.green+","+i.blue+","+e+")"}else{if(typeof t=="number"&&typeof e=="number"&&typeof n=="number"&&typeof r=="number")return r>=1?S0(t,e,n):"rgba("+t+","+e+","+n+","+r+")";if(typeof t=="object"&&e===void 0&&n===void 0&&r===void 0)return t.alpha>=1?S0(t.red,t.green,t.blue):"rgba("+t.red+","+t.green+","+t.blue+","+t.alpha+")"}throw new jo(7)}function MS(t,e,n){return function(){var i=n.concat(Array.prototype.slice.call(arguments));return i.length>=e?t.apply(this,i):MS(t,e,i)}}function z3(t){return MS(t,t.length,[])}function B3(t,e,n){return Math.max(t,Math.min(e,n))}function H3(t,e){if(e==="transparent")return e;var n=Rp(e),r=typeof n.alpha=="number"?n.alpha:1,i=eh({},n,{alpha:B3(0,1,(r*100+parseFloat(t)*100)/100)});return F3(i)}var G3=z3(H3),V3=G3,Zi=Object.freeze({Linear:Object.freeze({None:function(t){return t},In:function(t){return this.None(t)},Out:function(t){return this.None(t)},InOut:function(t){return this.None(t)}}),Quadratic:Object.freeze({In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}}),Cubic:Object.freeze({In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}}),Quartic:Object.freeze({In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}}),Quintic:Object.freeze({In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}}),Sinusoidal:Object.freeze({In:function(t){return 1-Math.sin((1-t)*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.sin(Math.PI*(.5-t)))}}),Exponential:Object.freeze({In:function(t){return t===0?0:Math.pow(1024,t-1)},Out:function(t){return t===1?1:1-Math.pow(2,-10*t)},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}}),Circular:Object.freeze({In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}}),Elastic:Object.freeze({In:function(t){return t===0?0:t===1?1:-Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI)},Out:function(t){return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t-.1)*5*Math.PI)+1},InOut:function(t){return t===0?0:t===1?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin((t-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(t){var e=1.70158;return t===1?1:t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return t===0?0:--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}}),Bounce:Object.freeze({In:function(t){return 1-Zi.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?Zi.Bounce.In(t*2)*.5:Zi.Bounce.Out(t*2-1)*.5+.5}}),generatePow:function(t){return t===void 0&&(t=4),t=t<Number.EPSILON?Number.EPSILON:t,t=t>1e4?1e4:t,{In:function(e){return Math.pow(e,t)},Out:function(e){return 1-Math.pow(1-e,t)},InOut:function(e){return e<.5?Math.pow(e*2,t)/2:(1-Math.pow(2-e*2,t))/2+.5}}}}),Ka=function(){return performance.now()},W3=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(n){return e._tweens[n]})},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},t.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},t.prototype.update=function(e,n){e===void 0&&(e=Ka()),n===void 0&&(n=!1);var r=Object.keys(this._tweens);if(r.length===0)return!1;for(;r.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<r.length;i++){var o=this._tweens[r[i]],a=!n;o&&o.update(e,a)===!1&&!n&&delete this._tweens[r[i]]}r=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),$o={Linear:function(t,e){var n=t.length-1,r=n*e,i=Math.floor(r),o=$o.Utils.Linear;return e<0?o(t[0],t[1],r):e>1?o(t[n],t[n-1],n-r):o(t[i],t[i+1>n?n:i+1],r-i)},Bezier:function(t,e){for(var n=0,r=t.length-1,i=Math.pow,o=$o.Utils.Bernstein,a=0;a<=r;a++)n+=i(1-e,r-a)*i(e,a)*t[a]*o(r,a);return n},CatmullRom:function(t,e){var n=t.length-1,r=n*e,i=Math.floor(r),o=$o.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(i=Math.floor(r=n*(1+e))),o(t[(i-1+n)%n],t[i],t[(i+1)%n],t[(i+2)%n],r-i)):e<0?t[0]-(o(t[0],t[0],t[1],t[1],-r)-t[0]):e>1?t[n]-(o(t[n],t[n],t[n-1],t[n-1],r-n)-t[n]):o(t[i?i-1:0],t[i],t[n<i+1?n:i+1],t[n<i+2?n:i+2],r-i)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=$o.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var r=e;r>1;r--)n*=r;return t[e]=n,n}}(),CatmullRom:function(t,e,n,r,i){var o=(n-t)*.5,a=(r-e)*.5,s=i*i,l=i*s;return(2*e-2*n+o+a)*l+(-3*e+3*n-2*o-a)*s+o*i+e}}},j3=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),rh=new W3,M0=function(){function t(e,n){n===void 0&&(n=rh),this._object=e,this._group=n,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Zi.Linear.None,this._interpolationFunction=$o.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=j3.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.to=function(e,n){if(n===void 0&&(n=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=n,this},t.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e,this},t.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},t.prototype.start=function(e,n){if(e===void 0&&(e=Ka()),n===void 0&&(n=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var r in this._valuesStartRepeat)this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||n){if(this._propertiesAreSetUp=!0,!this._isDynamic){var i={};for(var o in this._valuesEnd)i[o]=this._valuesEnd[o];this._valuesEnd=i}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,n)}return this},t.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},t.prototype._setupProperties=function(e,n,r,i,o){for(var a in r){var s=e[a],l=Array.isArray(s),u=l?"array":typeof s,c=!l&&Array.isArray(r[a]);if(!(u==="undefined"||u==="function")){if(c){var d=r[a];if(d.length===0)continue;for(var h=[s],p=0,g=d.length;p<g;p+=1){var v=this._handleRelativeValue(s,d[p]);if(isNaN(v)){c=!1,console.warn("Found invalid interpolation list. Skipping.");break}h.push(v)}c&&(r[a]=h)}if((u==="object"||l)&&s&&!c){n[a]=l?[]:{};var m=s;for(var f in m)n[a][f]=m[f];i[a]=l?[]:{};var d=r[a];if(!this._isDynamic){var _={};for(var f in d)_[f]=d[f];r[a]=d=_}this._setupProperties(m,n[a],d,i[a],o)}else(typeof n[a]>"u"||o)&&(n[a]=s),l||(n[a]*=1),c?i[a]=r[a].slice().reverse():i[a]=n[a]||0}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},t.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},t.prototype.pause=function(e){return e===void 0&&(e=Ka()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},t.prototype.resume=function(e){return e===void 0&&(e=Ka()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},t.prototype.stopChainedTweens=function(){for(var e=0,n=this._chainedTweens.length;e<n;e++)this._chainedTweens[e].stop();return this},t.prototype.group=function(e){return e===void 0&&(e=rh),this._group=e,this},t.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},t.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},t.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},t.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},t.prototype.easing=function(e){return e===void 0&&(e=Zi.Linear.None),this._easingFunction=e,this},t.prototype.interpolation=function(e){return e===void 0&&(e=$o.Linear),this._interpolationFunction=e,this},t.prototype.chain=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return this._chainedTweens=e,this},t.prototype.onStart=function(e){return this._onStartCallback=e,this},t.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},t.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},t.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},t.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},t.prototype.onStop=function(e){return this._onStopCallback=e,this},t.prototype.update=function(e,n){if(e===void 0&&(e=Ka()),n===void 0&&(n=!0),this._isPaused)return!0;var r,i,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>o)return!1;n&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),i=(e-this._startTime)/this._duration,i=this._duration===0||i>1?1:i;var a=this._easingFunction(i);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,a),this._onUpdateCallback&&this._onUpdateCallback(this._object,i),i===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var s=0,l=this._chainedTweens.length;s<l;s++)this._chainedTweens[s].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},t.prototype._updateProperties=function(e,n,r,i){for(var o in r)if(n[o]!==void 0){var a=n[o]||0,s=r[o],l=Array.isArray(e[o]),u=Array.isArray(s),c=!l&&u;c?e[o]=this._interpolationFunction(s,i):typeof s=="object"&&s?this._updateProperties(e[o],a,s,i):(s=this._handleRelativeValue(a,s),typeof s=="number"&&(e[o]=a+(s-a)*i))}},t.prototype._handleRelativeValue=function(e,n){return typeof n!="string"?n:n.charAt(0)==="+"||n.charAt(0)==="-"?e+parseFloat(n):parseFloat(n)},t.prototype._swapEndStartRepeatValues=function(e){var n=this._valuesStartRepeat[e],r=this._valuesEnd[e];typeof r=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(r):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=n},t}(),yr=rh;yr.getAll.bind(yr);yr.removeAll.bind(yr);yr.add.bind(yr);yr.remove.bind(yr);var $3=yr.update.bind(yr);function X3(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}var q3=`.scene-nav-info {
  bottom: 5px;
  width: 100%;
  text-align: center;
  color: slategrey;
  opacity: 0.7;
  font-size: 10px;
}

.scene-tooltip {
  top: 0;
  color: lavender;
  font-size: 15px;
}

.scene-nav-info, .scene-tooltip {
  position: absolute;
  font-family: sans-serif;
  pointer-events: none;
  user-select: none;
}

.scene-container canvas:focus {
  outline: none;
}`;X3(q3);function Y3(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,o,a,s=[],l=!0,u=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(s.push(r.value),s.length!==e);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return s}}function K3(t,e,n){return e=iN(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Z3(t,e){return J3(t)||Y3(t,e)||ES(t,e)||nN()}function Ga(t){return Q3(t)||eN(t)||ES(t)||tN()}function Q3(t){if(Array.isArray(t))return ih(t)}function J3(t){if(Array.isArray(t))return t}function eN(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ES(t,e){if(t){if(typeof t=="string")return ih(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ih(t,e)}}function ih(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function tN(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nN(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rN(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function iN(t){var e=rN(t,"string");return typeof e=="symbol"?e:String(e)}var mt=window.THREE?window.THREE:{WebGLRenderer:Tx,Scene:MP,PerspectiveCamera:Fn,Raycaster:Ox,SRGBColorSpace:Ht,TextureLoader:VP,Vector2:me,Vector3:I,Box3:so,Color:et,Mesh:rr,SphereGeometry:ac,MeshBasicMaterial:sp,BackSide:fn,EventDispatcher:cr,MOUSE:pr,Quaternion:ur,Spherical:Wd,Clock:Lx},wS=Ap({props:{width:{default:window.innerWidth,onChange:function(e,n,r){isNaN(e)&&(n.width=r)}},height:{default:window.innerHeight,onChange:function(e,n,r){isNaN(e)&&(n.height=r)}},backgroundColor:{default:"#000011"},backgroundImageUrl:{},onBackgroundImageLoaded:{},showNavInfo:{default:!0},skyRadius:{default:5e4},objects:{default:[]},lights:{default:[]},enablePointerInteraction:{default:!0,onChange:function(e,n){n.hoverObj=null,n.toolTipElem&&(n.toolTipElem.innerHTML="")},triggerUpdate:!1},lineHoverPrecision:{default:1,triggerUpdate:!1},hoverOrderComparator:{default:function(){return-1},triggerUpdate:!1},hoverFilter:{default:function(){return!0},triggerUpdate:!1},tooltipContent:{triggerUpdate:!1},hoverDuringDrag:{default:!1,triggerUpdate:!1},clickAfterDrag:{default:!1,triggerUpdate:!1},onHover:{default:function(){},triggerUpdate:!1},onClick:{default:function(){},triggerUpdate:!1},onRightClick:{triggerUpdate:!1}},methods:{tick:function(e){if(e.initialised){if(e.controls.update&&e.controls.update(e.clock.getDelta()),e.postProcessingComposer?e.postProcessingComposer.render():e.renderer.render(e.scene,e.camera),e.extraRenderers.forEach(function(o){return o.render(e.scene,e.camera)}),e.enablePointerInteraction){var n=null;if(e.hoverDuringDrag||!e.isPointerDragging){var r=this.intersectingObjects(e.pointerPos.x,e.pointerPos.y).filter(function(o){return e.hoverFilter(o.object)}).sort(function(o,a){return e.hoverOrderComparator(o.object,a.object)}),i=r.length?r[0]:null;n=i?i.object:null,e.intersectionPoint=i?i.point:null}n!==e.hoverObj&&(e.onHover(n,e.hoverObj),e.toolTipElem.innerHTML=n&&it(e.tooltipContent)(n)||"",e.hoverObj=n)}$3()}return this},getPointerPos:function(e){var n=e.pointerPos,r=n.x,i=n.y;return{x:r,y:i}},cameraPosition:function(e,n,r,i){var o=e.camera;if(n&&e.initialised){var a=n,s=r||{x:0,y:0,z:0};if(!i)c(a),d(s);else{var l=Object.assign({},o.position),u=h();new M0(l).to(a,i).easing(Zi.Quadratic.Out).onUpdate(c).start(),new M0(u).to(s,i/3).easing(Zi.Quadratic.Out).onUpdate(d).start()}return this}return Object.assign({},o.position,{lookAt:h()});function c(p){var g=p.x,v=p.y,m=p.z;g!==void 0&&(o.position.x=g),v!==void 0&&(o.position.y=v),m!==void 0&&(o.position.z=m)}function d(p){var g=new mt.Vector3(p.x,p.y,p.z);e.controls.target?e.controls.target=g:o.lookAt(g)}function h(){return Object.assign(new mt.Vector3(0,0,-1e3).applyQuaternion(o.quaternion).add(o.position))}},zoomToFit:function(e){for(var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,i=arguments.length,o=new Array(i>3?i-3:0),a=3;a<i;a++)o[a-3]=arguments[a];return this.fitToBbox(this.getBbox.apply(this,o),n,r)},fitToBbox:function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10,o=e.camera;if(n){var a=new mt.Vector3(0,0,0),s=Math.max.apply(Math,Ga(Object.entries(n).map(function(p){var g=Z3(p,2),v=g[0],m=g[1];return Math.max.apply(Math,Ga(m.map(function(f){return Math.abs(a[v]-f)})))})))*2,l=(1-i*2/e.height)*o.fov,u=s/Math.atan(l*Math.PI/180),c=u/o.aspect,d=Math.max(u,c);if(d>0){var h=a.clone().sub(o.position).normalize().multiplyScalar(-d);this.cameraPosition(h,a,r)}}return this},getBbox:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0},r=new mt.Box3(new mt.Vector3(0,0,0),new mt.Vector3(0,0,0)),i=e.objects.filter(n);return i.length?(i.forEach(function(o){return r.expandByObject(o)}),Object.assign.apply(Object,Ga(["x","y","z"].map(function(o){return K3({},o,[r.min[o],r.max[o]])})))):null},getScreenCoords:function(e,n,r,i){var o=new mt.Vector3(n,r,i);return o.project(this.camera()),{x:(o.x+1)*e.width/2,y:-(o.y-1)*e.height/2}},getSceneCoords:function(e,n,r){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=new mt.Vector2(n/e.width*2-1,-(r/e.height)*2+1),a=new mt.Raycaster;return a.setFromCamera(o,e.camera),Object.assign({},a.ray.at(i,new mt.Vector3))},intersectingObjects:function(e,n,r){var i=new mt.Vector2(n/e.width*2-1,-(r/e.height)*2+1),o=new mt.Raycaster;return o.params.Line.threshold=e.lineHoverPrecision,o.setFromCamera(i,e.camera),o.intersectObjects(e.objects,!0)},renderer:function(e){return e.renderer},scene:function(e){return e.scene},camera:function(e){return e.camera},postProcessingComposer:function(e){return e.postProcessingComposer},controls:function(e){return e.controls},tbControls:function(e){return e.controls}},stateInit:function(){return{scene:new mt.Scene,camera:new mt.PerspectiveCamera,clock:new mt.Clock}},init:function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=r.controlType,o=i===void 0?"trackball":i,a=r.rendererConfig,s=a===void 0?{}:a,l=r.extraRenderers,u=l===void 0?[]:l,c=r.waitForLoadComplete,d=c===void 0?!0:c;e.innerHTML="",e.appendChild(n.container=document.createElement("div")),n.container.className="scene-container",n.container.style.position="relative",n.container.appendChild(n.navInfo=document.createElement("div")),n.navInfo.className="scene-nav-info",n.navInfo.textContent={orbit:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",trackball:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",fly:"WASD: move, R|F: up | down, Q|E: roll, up|down: pitch, left|right: yaw"}[o]||"",n.navInfo.style.display=n.showNavInfo?null:"none",n.toolTipElem=document.createElement("div"),n.toolTipElem.classList.add("scene-tooltip"),n.container.appendChild(n.toolTipElem),n.pointerPos=new mt.Vector2,n.pointerPos.x=-2,n.pointerPos.y=-2,["pointermove","pointerdown"].forEach(function(h){return n.container.addEventListener(h,function(p){if(h==="pointerdown"&&(n.isPointerPressed=!0),!n.isPointerDragging&&p.type==="pointermove"&&(p.pressure>0||n.isPointerPressed)&&(p.pointerType!=="touch"||p.movementX===void 0||[p.movementX,p.movementY].some(function(m){return Math.abs(m)>1}))&&(n.isPointerDragging=!0),n.enablePointerInteraction){var g=v(n.container);n.pointerPos.x=p.pageX-g.left,n.pointerPos.y=p.pageY-g.top,n.toolTipElem.style.top="".concat(n.pointerPos.y,"px"),n.toolTipElem.style.left="".concat(n.pointerPos.x,"px"),n.toolTipElem.style.transform="translate(-".concat(n.pointerPos.x/n.width*100,"%, ").concat(n.height-n.pointerPos.y<100?"calc(-100% - 8px)":"21px",")")}function v(m){var f=m.getBoundingClientRect(),_=window.pageXOffset||document.documentElement.scrollLeft,y=window.pageYOffset||document.documentElement.scrollTop;return{top:f.top+y,left:f.left+_}}},{passive:!0})}),n.container.addEventListener("pointerup",function(h){n.isPointerPressed=!1,!(n.isPointerDragging&&(n.isPointerDragging=!1,!n.clickAfterDrag))&&requestAnimationFrame(function(){h.button===0&&n.onClick(n.hoverObj||null,h,n.intersectionPoint),h.button===2&&n.onRightClick&&n.onRightClick(n.hoverObj||null,h,n.intersectionPoint)})},{passive:!0,capture:!0}),n.container.addEventListener("contextmenu",function(h){n.onRightClick&&h.preventDefault()}),n.renderer=new mt.WebGLRenderer(Object.assign({antialias:!0,alpha:!0},s)),n.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),n.container.appendChild(n.renderer.domElement),n.extraRenderers=u,n.extraRenderers.forEach(function(h){h.domElement.style.position="absolute",h.domElement.style.top="0px",h.domElement.style.pointerEvents="none",n.container.appendChild(h.domElement)}),n.postProcessingComposer=new M3(n.renderer),n.postProcessingComposer.addPass(new E3(n.scene,n.camera)),n.controls=new{trackball:c3,orbit:d3,fly:p3}[o](n.camera,n.renderer.domElement),o==="fly"&&(n.controls.movementSpeed=300,n.controls.rollSpeed=Math.PI/6,n.controls.dragToLook=!0),(o==="trackball"||o==="orbit")&&(n.controls.minDistance=.1,n.controls.maxDistance=n.skyRadius,n.controls.addEventListener("start",function(){n.controlsEngaged=!0}),n.controls.addEventListener("change",function(){n.controlsEngaged&&(n.controlsDragging=!0)}),n.controls.addEventListener("end",function(){n.controlsEngaged=!1,n.controlsDragging=!1})),[n.renderer,n.postProcessingComposer].concat(Ga(n.extraRenderers)).forEach(function(h){return h.setSize(n.width,n.height)}),n.camera.aspect=n.width/n.height,n.camera.updateProjectionMatrix(),n.camera.position.z=1e3,n.scene.add(n.skysphere=new mt.Mesh),n.skysphere.visible=!1,n.loadComplete=n.scene.visible=!d,window.scene=n.scene},update:function(e,n){if(e.width&&e.height&&(n.hasOwnProperty("width")||n.hasOwnProperty("height"))&&(e.container.style.width="".concat(e.width,"px"),e.container.style.height="".concat(e.height,"px"),[e.renderer,e.postProcessingComposer].concat(Ga(e.extraRenderers)).forEach(function(o){return o.setSize(e.width,e.height)}),e.camera.aspect=e.width/e.height,e.camera.updateProjectionMatrix()),n.hasOwnProperty("skyRadius")&&e.skyRadius&&(e.controls.hasOwnProperty("maxDistance")&&n.skyRadius&&(e.controls.maxDistance=Math.min(e.controls.maxDistance,e.skyRadius)),e.camera.far=e.skyRadius*2.5,e.camera.updateProjectionMatrix(),e.skysphere.geometry=new mt.SphereGeometry(e.skyRadius)),n.hasOwnProperty("backgroundColor")){var r=Rp(e.backgroundColor).alpha;r===void 0&&(r=1),e.renderer.setClearColor(new mt.Color(V3(1,e.backgroundColor)),r)}n.hasOwnProperty("backgroundImageUrl")&&(e.backgroundImageUrl?new mt.TextureLoader().load(e.backgroundImageUrl,function(o){o.colorSpace=mt.SRGBColorSpace,e.skysphere.material=new mt.MeshBasicMaterial({map:o,side:mt.BackSide}),e.skysphere.visible=!0,e.onBackgroundImageLoaded&&setTimeout(e.onBackgroundImageLoaded),!e.loadComplete&&i()}):(e.skysphere.visible=!1,e.skysphere.material.map=null,!e.loadComplete&&i())),n.hasOwnProperty("showNavInfo")&&(e.navInfo.style.display=e.showNavInfo?null:"none"),n.hasOwnProperty("lights")&&((n.lights||[]).forEach(function(o){return e.scene.remove(o)}),e.lights.forEach(function(o){return e.scene.add(o)})),n.hasOwnProperty("objects")&&((n.objects||[]).forEach(function(o){return e.scene.remove(o)}),e.objects.forEach(function(o){return e.scene.add(o)}));function i(){e.loadComplete=e.scene.visible=!0}}});function oN(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}var aN=`.graph-info-msg {
  top: 50%;
  width: 100%;
  text-align: center;
  color: lavender;
  opacity: 0.7;
  font-size: 22px;
  position: absolute;
  font-family: Sans-serif;
}

.scene-container .clickable {
  cursor: pointer;
}

.scene-container .grabbable {
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

.scene-container .grabbable:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}`;oN(aN);function E0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ul(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?E0(Object(n),!0).forEach(function(r){Hs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Hs(t,e,n){return e=dN(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function cc(t){return sN(t)||lN(t)||uN(t)||cN()}function sN(t){if(Array.isArray(t))return oh(t)}function lN(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function uN(t,e){if(t){if(typeof t=="string")return oh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return oh(t,e)}}function oh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function cN(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fN(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function dN(t){var e=fN(t,"string");return typeof e=="symbol"?e:String(e)}function bS(t,e){var n=new e;return n._destructor&&n._destructor(),{linkProp:function(i){return{default:n[i](),onChange:function(a,s){s[t][i](a)},triggerUpdate:!1}},linkMethod:function(i){return function(o){for(var a=o[t],s=arguments.length,l=new Array(s>1?s-1:0),u=1;u<s;u++)l[u-1]=arguments[u];var c=a[i].apply(a,l);return c===a?this:c}}}}var w0=window.THREE?window.THREE:{AmbientLight:XP,DirectionalLight:$P,Vector3:I},hN=170,TS=bS("forceGraph",xS),pN=Object.assign.apply(Object,cc(["jsonUrl","graphData","numDimensions","dagMode","dagLevelDistance","dagNodeFilter","onDagError","nodeRelSize","nodeId","nodeVal","nodeResolution","nodeColor","nodeAutoColorBy","nodeOpacity","nodeVisibility","nodeThreeObject","nodeThreeObjectExtend","linkSource","linkTarget","linkVisibility","linkColor","linkAutoColorBy","linkOpacity","linkWidth","linkResolution","linkCurvature","linkCurveRotation","linkMaterial","linkThreeObject","linkThreeObjectExtend","linkPositionUpdate","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowRelPos","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleSpeed","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution","forceEngine","d3AlphaDecay","d3VelocityDecay","d3AlphaMin","ngraphPhysics","warmupTicks","cooldownTicks","cooldownTime","onEngineTick","onEngineStop"].map(function(t){return Hs({},t,TS.linkProp(t))}))),mN=Object.assign.apply(Object,cc(["refresh","getGraphBbox","d3Force","d3ReheatSimulation","emitParticle"].map(function(t){return Hs({},t,TS.linkMethod(t))}))),Jl=bS("renderObjs",wS),gN=Object.assign.apply(Object,cc(["width","height","backgroundColor","showNavInfo","enablePointerInteraction"].map(function(t){return Hs({},t,Jl.linkProp(t))}))),vN=Object.assign.apply(Object,cc(["lights","cameraPosition","postProcessingComposer"].map(function(t){return Hs({},t,Jl.linkMethod(t))})).concat([{graph2ScreenCoords:Jl.linkMethod("getScreenCoords"),screen2GraphCoords:Jl.linkMethod("getSceneCoords")}])),_N=Ap({props:Ul(Ul({nodeLabel:{default:"name",triggerUpdate:!1},linkLabel:{default:"name",triggerUpdate:!1},linkHoverPrecision:{default:1,onChange:function(e,n){return n.renderObjs.lineHoverPrecision(e)},triggerUpdate:!1},enableNavigationControls:{default:!0,onChange:function(e,n){var r=n.renderObjs.controls();r&&(r.enabled=e,e&&r.domElement&&r.domElement.dispatchEvent(new PointerEvent("pointerup")))},triggerUpdate:!1},enableNodeDrag:{default:!0,triggerUpdate:!1},onNodeDrag:{default:function(){},triggerUpdate:!1},onNodeDragEnd:{default:function(){},triggerUpdate:!1},onNodeClick:{triggerUpdate:!1},onNodeRightClick:{triggerUpdate:!1},onNodeHover:{triggerUpdate:!1},onLinkClick:{triggerUpdate:!1},onLinkRightClick:{triggerUpdate:!1},onLinkHover:{triggerUpdate:!1},onBackgroundClick:{triggerUpdate:!1},onBackgroundRightClick:{triggerUpdate:!1}},pN),gN),methods:Ul(Ul({zoomToFit:function(e,n,r){for(var i,o=arguments.length,a=new Array(o>3?o-3:0),s=3;s<o;s++)a[s-3]=arguments[s];return e.renderObjs.fitToBbox((i=e.forceGraph).getGraphBbox.apply(i,a),n,r),this},pauseAnimation:function(e){return e.animationFrameRequestId!==null&&(cancelAnimationFrame(e.animationFrameRequestId),e.animationFrameRequestId=null),this},resumeAnimation:function(e){return e.animationFrameRequestId===null&&this._animationCycle(),this},_animationCycle:function(e){e.enablePointerInteraction&&(this.renderer().domElement.style.cursor=null),e.forceGraph.tickFrame(),e.renderObjs.tick(),e.animationFrameRequestId=requestAnimationFrame(this._animationCycle)},scene:function(e){return e.renderObjs.scene()},camera:function(e){return e.renderObjs.camera()},renderer:function(e){return e.renderObjs.renderer()},controls:function(e){return e.renderObjs.controls()},tbControls:function(e){return e.renderObjs.tbControls()},_destructor:function(){this.pauseAnimation(),this.graphData({nodes:[],links:[]})}},mN),vN),stateInit:function(e){var n=e.controlType,r=e.rendererConfig,i=e.extraRenderers,o=new xS;return{forceGraph:o,renderObjs:wS({controlType:n,rendererConfig:r,extraRenderers:i}).objects([o]).lights([new w0.AmbientLight(13421772,Math.PI),new w0.DirectionalLight(16777215,.6*Math.PI)])}},init:function(e,n){e.innerHTML="",e.appendChild(n.container=document.createElement("div")),n.container.style.position="relative";var r=document.createElement("div");n.container.appendChild(r),n.renderObjs(r);var i=n.renderObjs.camera(),o=n.renderObjs.renderer(),a=n.renderObjs.controls();a.enabled=!!n.enableNavigationControls,n.lastSetCameraZ=i.position.z;var s;n.container.appendChild(s=document.createElement("div")),s.className="graph-info-msg",s.textContent="",n.forceGraph.onLoading(function(){s.textContent="Loading..."}).onFinishLoading(function(){s.textContent=""}).onUpdate(function(){n.graphData=n.forceGraph.graphData(),i.position.x===0&&i.position.y===0&&i.position.z===n.lastSetCameraZ&&n.graphData.nodes.length&&(i.lookAt(n.forceGraph.position),n.lastSetCameraZ=i.position.z=Math.cbrt(n.graphData.nodes.length)*hN)}).onFinishUpdate(function(){if(n._dragControls){var l=n.graphData.nodes.find(function(c){return c.__initialFixedPos&&!c.__disposeControlsAfterDrag});l?l.__disposeControlsAfterDrag=!0:n._dragControls.dispose(),n._dragControls=void 0}if(n.enableNodeDrag&&n.enablePointerInteraction&&n.forceEngine==="d3"){var u=n._dragControls=new qP(n.graphData.nodes.map(function(c){return c.__threeObj}).filter(function(c){return c}),i,o.domElement);u.addEventListener("dragstart",function(c){a.enabled=!1,c.object.__initialPos=c.object.position.clone(),c.object.__prevPos=c.object.position.clone();var d=Ar(c.object).__data;!d.__initialFixedPos&&(d.__initialFixedPos={fx:d.fx,fy:d.fy,fz:d.fz}),!d.__initialPos&&(d.__initialPos={x:d.x,y:d.y,z:d.z}),["x","y","z"].forEach(function(h){return d["f".concat(h)]=d[h]}),o.domElement.classList.add("grabbable")}),u.addEventListener("drag",function(c){var d=Ar(c.object);if(!c.object.hasOwnProperty("__graphObjType")){var h=c.object.__initialPos,p=c.object.__prevPos,g=c.object.position;d.position.add(g.clone().sub(p)),p.copy(g),g.copy(h)}var v=d.__data,m=d.position,f={x:m.x-v.x,y:m.y-v.y,z:m.z-v.z};["x","y","z"].forEach(function(_){return v["f".concat(_)]=v[_]=m[_]}),n.forceGraph.d3AlphaTarget(.3).resetCountdown(),v.__dragged=!0,n.onNodeDrag(v,f)}),u.addEventListener("dragend",function(c){delete c.object.__initialPos,delete c.object.__prevPos;var d=Ar(c.object).__data;d.__disposeControlsAfterDrag&&(u.dispose(),delete d.__disposeControlsAfterDrag);var h=d.__initialFixedPos,p=d.__initialPos,g={x:p.x-d.x,y:p.y-d.y,z:p.z-d.z};h&&(["x","y","z"].forEach(function(v){var m="f".concat(v);h[m]===void 0&&delete d[m]}),delete d.__initialFixedPos,delete d.__initialPos,d.__dragged&&(delete d.__dragged,n.onNodeDragEnd(d,g))),n.forceGraph.d3AlphaTarget(0).resetCountdown(),n.enableNavigationControls&&(a.enabled=!0,a.domElement&&a.domElement.ownerDocument&&a.domElement.ownerDocument.dispatchEvent(new PointerEvent("pointerup",{pointerType:"touch"}))),o.domElement.classList.remove("grabbable")})}}),n.renderObjs.renderer().useLegacyLights=!1,n.renderObjs.hoverOrderComparator(function(l,u){var c=Ar(l);if(!c)return 1;var d=Ar(u);if(!d)return-1;var h=function(g){return g.__graphObjType==="node"};return h(d)-h(c)}).tooltipContent(function(l){var u=Ar(l);return u&&it(n["".concat(u.__graphObjType,"Label")])(u.__data)||""}).hoverDuringDrag(!1).onHover(function(l){var u=Ar(l);if(u!==n.hoverObj){var c=n.hoverObj?n.hoverObj.__graphObjType:null,d=n.hoverObj?n.hoverObj.__data:null,h=u?u.__graphObjType:null,p=u?u.__data:null;if(c&&c!==h){var g=n["on".concat(c==="node"?"Node":"Link","Hover")];g&&g(null,d)}if(h){var v=n["on".concat(h==="node"?"Node":"Link","Hover")];v&&v(p,c===h?d:null)}o.domElement.classList[u&&n["on".concat(h==="node"?"Node":"Link","Click")]||!u&&n.onBackgroundClick?"add":"remove"]("clickable"),n.hoverObj=u}}).clickAfterDrag(!1).onClick(function(l,u){var c=Ar(l);if(c){var d=n["on".concat(c.__graphObjType==="node"?"Node":"Link","Click")];d&&d(c.__data,u)}else n.onBackgroundClick&&n.onBackgroundClick(u)}).onRightClick(function(l,u){var c=Ar(l);if(c){var d=n["on".concat(c.__graphObjType==="node"?"Node":"Link","RightClick")];d&&d(c.__data,u)}else n.onBackgroundRightClick&&n.onBackgroundRightClick(u)}),this._animationCycle()}});function Ar(t){for(var e=t;e&&!e.hasOwnProperty("__graphObjType");)e=e.parent;return e}var AS={exports:{}},yN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",xN=yN,SN=xN;function CS(){}function RS(){}RS.resetWarningCache=CS;var MN=function(){function t(r,i,o,a,s,l){if(l!==SN){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:RS,resetWarningCache:CS};return n.PropTypes=n,n};AS.exports=MN();var EN=AS.exports;const H=Ds(EN),fc={width:H.number,height:H.number,graphData:H.shape({nodes:H.arrayOf(H.object).isRequired,links:H.arrayOf(H.object).isRequired}),backgroundColor:H.string,nodeRelSize:H.number,nodeId:H.string,nodeLabel:H.oneOfType([H.string,H.func]),nodeVal:H.oneOfType([H.number,H.string,H.func]),nodeVisibility:H.oneOfType([H.bool,H.string,H.func]),nodeColor:H.oneOfType([H.string,H.func]),nodeAutoColorBy:H.oneOfType([H.string,H.func]),onNodeHover:H.func,onNodeClick:H.func,linkSource:H.string,linkTarget:H.string,linkLabel:H.oneOfType([H.string,H.func]),linkVisibility:H.oneOfType([H.bool,H.string,H.func]),linkColor:H.oneOfType([H.string,H.func]),linkAutoColorBy:H.oneOfType([H.string,H.func]),linkWidth:H.oneOfType([H.number,H.string,H.func]),linkCurvature:H.oneOfType([H.number,H.string,H.func]),linkDirectionalArrowLength:H.oneOfType([H.number,H.string,H.func]),linkDirectionalArrowColor:H.oneOfType([H.string,H.func]),linkDirectionalArrowRelPos:H.oneOfType([H.number,H.string,H.func]),linkDirectionalParticles:H.oneOfType([H.number,H.string,H.func]),linkDirectionalParticleSpeed:H.oneOfType([H.number,H.string,H.func]),linkDirectionalParticleWidth:H.oneOfType([H.number,H.string,H.func]),linkDirectionalParticleColor:H.oneOfType([H.string,H.func]),onLinkHover:H.func,onLinkClick:H.func,dagMode:H.oneOf(["td","bu","lr","rl","zin","zout","radialin","radialout"]),dagLevelDistance:H.number,dagNodeFilter:H.func,onDagError:H.func,d3AlphaMin:H.number,d3AlphaDecay:H.number,d3VelocityDecay:H.number,warmupTicks:H.number,cooldownTicks:H.number,cooldownTime:H.number,onEngineTick:H.func,onEngineStop:H.func,getGraphBbox:H.func},PS={zoomToFit:H.func,onNodeRightClick:H.func,onNodeDrag:H.func,onNodeDragEnd:H.func,onLinkRightClick:H.func,linkHoverPrecision:H.number,onBackgroundClick:H.func,onBackgroundRightClick:H.func,enablePointerInteraction:H.bool,enableNodeDrag:H.bool},Pp={showNavInfo:H.bool,nodeOpacity:H.number,nodeResolution:H.number,nodeThreeObject:H.oneOfType([H.object,H.string,H.func]),nodeThreeObjectExtend:H.oneOfType([H.bool,H.string,H.func]),linkOpacity:H.number,linkResolution:H.number,linkCurveRotation:H.oneOfType([H.number,H.string,H.func]),linkMaterial:H.oneOfType([H.object,H.string,H.func]),linkThreeObject:H.oneOfType([H.object,H.string,H.func]),linkThreeObjectExtend:H.oneOfType([H.bool,H.string,H.func]),linkPositionUpdate:H.func,linkDirectionalArrowResolution:H.number,linkDirectionalParticleResolution:H.number,forceEngine:H.oneOf(["d3","ngraph"]),ngraphPhysics:H.object,numDimensions:H.oneOf([1,2,3])};Object.assign({},fc,PS,{linkLineDash:H.oneOfType([H.arrayOf(H.number),H.string,H.func]),nodeCanvasObjectMode:H.oneOfType([H.string,H.func]),nodeCanvasObject:H.func,nodePointerAreaPaint:H.func,linkCanvasObjectMode:H.oneOfType([H.string,H.func]),linkCanvasObject:H.func,linkPointerAreaPaint:H.func,autoPauseRedraw:H.bool,minZoom:H.number,maxZoom:H.number,enableZoomInteraction:H.bool,enablePanInteraction:H.bool,onZoom:H.func,onZoomEnd:H.func,onRenderFramePre:H.func,onRenderFramePost:H.func});const wN=Object.assign({},fc,PS,Pp,{enableNavigationControls:H.bool,controlType:H.oneOf(["trackball","orbit","fly"]),rendererConfig:H.object,extraRenderers:H.arrayOf(H.shape({render:H.func.isRequired}))});Object.assign({},fc,Pp,{nodeDesc:H.oneOfType([H.string,H.func]),linkDesc:H.oneOfType([H.string,H.func])});Object.assign({},fc,Pp,{markerAttrs:H.object,yOffset:H.number,glScale:H.number});const Lp=rw(_N,{methodNames:["emitParticle","d3Force","d3ReheatSimulation","stopAnimation","pauseAnimation","resumeAnimation","cameraPosition","zoomToFit","getGraphBbox","screen2GraphCoords","graph2ScreenCoords","postProcessingComposer","lights","scene","camera","renderer","controls","refresh"],initPropNames:["controlType","rendererConfig","extraRenderers"]});Lp.displayName="ForceGraph3D";Lp.propTypes=wN;const bN=t=>{const[e,n]=tt.useState(t),r=tt.useCallback((a,s)=>{n(l=>{const u=[...l.nodes,...a],c=[...l.links,...s];return{nodes:u,links:c}})},[]),i=tt.useCallback(a=>{n(({nodes:s,links:l})=>{const u=l.filter(d=>d.source!==a&&d.target!==a);return{nodes:s.filter(d=>d.id!==a),links:u}})},[]);return{data:e,removeNode:i,addMultipleNodes:r,clearGraph:()=>{n(t)}}};let kl;const TN=new Uint8Array(16);function AN(){if(!kl&&(kl=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!kl))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return kl(TN)}const jt=[];for(let t=0;t<256;++t)jt.push((t+256).toString(16).slice(1));function CN(t,e=0){return jt[t[e+0]]+jt[t[e+1]]+jt[t[e+2]]+jt[t[e+3]]+"-"+jt[t[e+4]]+jt[t[e+5]]+"-"+jt[t[e+6]]+jt[t[e+7]]+"-"+jt[t[e+8]]+jt[t[e+9]]+"-"+jt[t[e+10]]+jt[t[e+11]]+jt[t[e+12]]+jt[t[e+13]]+jt[t[e+14]]+jt[t[e+15]]}const RN=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),b0={randomUUID:RN};function PN(t,e,n){if(b0.randomUUID&&!e&&!t)return b0.randomUUID();t=t||{};const r=t.random||(t.rng||AN)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return CN(r)}const LN=({searchTerm:t,searching:e,fetchWikipediaData:n,setSearchTerm:r,handleSearchToggle:i})=>{const[o,a]=tt.useState(new Set([t])),s={nodes:[{id:"0",title:t}],links:[]},{data:l,addMultipleNodes:u,clearGraph:c}=bN(s),d=async(p,g,v=500)=>{let m=[{nodeId:p,term:g}],f=0;for(;m.length>0&&f<v;){const{nodeId:_,term:y}=m.shift();try{let x=await n(y);x.links&&(x=x.links);const S=[],M=[];for(let E of x)if(!o.has(E)&&f<v){const A=PN();S.push({id:A,title:E}),M.push({source:_,target:A}),m.push({nodeId:A,term:E}),f++}a(E=>{const A=new Set(E);return S.forEach(w=>{w&&A.add(w.title)}),A}),S!=null&&u(S,M)}catch(x){console.error("Error fetching data:",x)}}};tt.useEffect(()=>{console.log("Graphcanvas useeffect!"),c(),d("0",t)},[e]);const h=p=>{console.log("must be here"),r(p.title),a(new Set([])),i()};return Pe.jsx(Pe.Fragment,{children:Pe.jsx(Lp,{enableNodeDrag:!1,onNodeClick:h,graphData:l,nodeLabel:p=>p.title})})},LS=tt.forwardRef(({className:t,...e},n)=>Pe.jsx("div",{ref:n,className:Ri("rounded-lg border bg-card text-card-foreground shadow-sm",t),...e}));LS.displayName="Card";const ON=tt.forwardRef(({className:t,...e},n)=>Pe.jsx("div",{ref:n,className:Ri("flex flex-col space-y-1.5 p-6",t),...e}));ON.displayName="CardHeader";const DN=tt.forwardRef(({className:t,...e},n)=>Pe.jsx("h3",{ref:n,className:Ri("text-2xl font-semibold leading-none tracking-tight",t),...e}));DN.displayName="CardTitle";const NN=tt.forwardRef(({className:t,...e},n)=>Pe.jsx("p",{ref:n,className:Ri("text-sm text-muted-foreground",t),...e}));NN.displayName="CardDescription";const IN=tt.forwardRef(({className:t,...e},n)=>Pe.jsx("div",{ref:n,className:Ri("p-6 pt-0",t),...e}));IN.displayName="CardContent";const UN=tt.forwardRef(({className:t,...e},n)=>Pe.jsx("div",{ref:n,className:Ri("flex items-center p-6 pt-0",t),...e}));UN.displayName="CardFooter";function Lt({className:t,...e}){return Pe.jsx("div",{className:Ri("animate-pulse rounded-md bg-muted",t),...e})}const kN=({articleContent:t,searchTerm:e})=>{const n=Pe.jsxs(Pe.Fragment,{children:[Pe.jsxs("div",{className:"space-y-4",children:[Pe.jsx(Lt,{className:"h-4 w-3/4 m-1 mt-6"}),Pe.jsx(Lt,{className:"h-8 m-1"}),Pe.jsx(Lt,{className:"h-6 w-1/2 m-1"}),Pe.jsx(Lt,{className:"h-16 w-2/3 m-1"}),Pe.jsx(Lt,{className:"h-max w-1/2 m-1"})]}),Pe.jsxs("div",{className:"space-y-4",children:[Pe.jsx(Lt,{className:"h-8 m-1"}),Pe.jsx(Lt,{className:"h-max w-1/2 m-1"}),Pe.jsx(Lt,{className:"h-6 w-1/2 m-1"}),Pe.jsx(Lt,{className:"h-16 w-2/3 m-1"}),Pe.jsx(Lt,{className:"h-4 w-3/4 m-1 mt-8"})]}),Pe.jsxs("div",{className:"space-y-4",children:[Pe.jsx(Lt,{className:"h-max w-1/2 m-1"}),Pe.jsx(Lt,{className:"h-8 m-1"}),Pe.jsx(Lt,{className:"h-16 w-2/3 m-1"}),Pe.jsx(Lt,{className:"h-6 w-1/2 m-1"}),Pe.jsx(Lt,{className:"h-4 w-3/4 m-1 mt-8"})]}),Pe.jsxs("div",{className:"space-y-4",children:[Pe.jsx(Lt,{className:"h-8 m-1 mt-8"}),Pe.jsx(Lt,{className:"h-4 w-3/4 m-1 "}),Pe.jsx(Lt,{className:"h-6 w-1/2 m-1"}),Pe.jsx(Lt,{className:"h-16 w-2/3 m-1"}),Pe.jsx(Lt,{className:"h-max w-1/2 m-1"})]})]});return Pe.jsx(LS,{className:"h-full dark",children:Pe.jsx("div",{className:"overflow-y-auto p-4 h-full",children:t?Pe.jsxs(Pe.Fragment,{children:[Pe.jsx("h1",{children:e}),Pe.jsx("div",{className:"text-lg leading-relaxed mb-4 text-white",dangerouslySetInnerHTML:{__html:t}})]}):Pe.jsx(Pe.Fragment,{children:n})})})},FN=()=>{const{searchTerm:t,setSearchTerm:e,articleContent:n,handleSearchToggle:r,searching:i,fetchWikipediaData:o}=F1(),a=s=>{s.key==="Enter"&&r()};return Pe.jsxs("main",{className:"relative h-screen ",children:[Pe.jsx(LN,{searchTerm:t,searching:i,handleSearchToggle:r,fetchWikipediaData:o,setSearchTerm:e}),Pe.jsx("div",{className:"absolute top-0 right-0 h-full w-1/3 p-8",children:Pe.jsx(kN,{searchTerm:t,articleContent:n})}),Pe.jsx("div",{className:"absolute top-4 left-1/2 transform -translate-x-1/2",children:Pe.jsx(k1,{searchTerm:t,setSearchTerm:e,handleKeyDown:a})})]})};If.createRoot(document.getElementById("root")).render(Pe.jsx(I0.StrictMode,{children:Pe.jsx(FN,{})}));
