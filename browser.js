// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";function t(t){return Object.keys(Object(t))}var e=void 0!==Object.keys,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return n&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString,o=Object.prototype.hasOwnProperty;function u(t,e){return null!=t&&o.call(t,e)}var a,c="function"==typeof Symbol?Symbol:void 0,l="function"==typeof c?c.toStringTag:"",f=r()?function(t){var e,n,r;if(null==t)return i.call(t);n=t[l],e=u(t,l);try{t[l]=void 0}catch(e){return i.call(t)}return r=i.call(t),e?t[l]=n:delete t[l],r}:function(t){return i.call(t)};function s(t){return"[object Arguments]"===f(t)}a=function(){return s(arguments)}();var p=a,g="function"==typeof Object.defineProperty?Object.defineProperty:null,y=Object.defineProperty;function b(t){return"number"==typeof t}function d(t){var e,n="";for(e=0;e<t;e++)n+="0";return n}function h(t,e,n){var r=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(r=!0,t=t.substr(1)),t=n?t+d(i):d(i)+t,r&&(t="-"+t)),t}var m=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function w(t){var e,n,r;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,r=parseInt(n,10),!isFinite(r)){if(!b(n))throw new Error("invalid integer. Value: "+n);r=0}return r<0&&("u"===t.specifier||10!==e)&&(r=4294967295+r+1),r<0?(n=(-r).toString(e),t.precision&&(n=h(n,t.precision,t.padRight)),n="-"+n):(n=r.toString(e),r||t.precision?t.precision&&(n=h(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===v.call(t.specifier)?v.call(n):m.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function j(t){return"string"==typeof t}var _=Math.abs,x=String.prototype.toLowerCase,O=String.prototype.toUpperCase,S=String.prototype.replace,E=/e\+(\d)$/,T=/e-(\d)$/,k=/^(\d+)$/,I=/^(\d+)e/,P=/\.0$/,V=/\.0*e/,A=/(\..*[^0])0*e/;function F(t){var e,n,r=parseFloat(t.arg);if(!isFinite(r)){if(!b(t.arg))throw new Error("invalid floating-point number. Value: "+n);r=t.arg}switch(t.specifier){case"e":case"E":n=r.toExponential(t.precision);break;case"f":case"F":n=r.toFixed(t.precision);break;case"g":case"G":_(r)<1e-4?((e=t.precision)>0&&(e-=1),n=r.toExponential(e)):n=r.toPrecision(t.precision),t.alternate||(n=S.call(n,A,"$1e"),n=S.call(n,V,"e"),n=S.call(n,P,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=S.call(n,E,"e+0$1"),n=S.call(n,T,"e-0$1"),t.alternate&&(n=S.call(n,k,"$1."),n=S.call(n,I,"$1.e")),r>=0&&t.sign&&(n=t.sign+n),n=t.specifier===O.call(t.specifier)?O.call(n):x.call(n)}function N(t){var e,n="";for(e=0;e<t;e++)n+=" ";return n}function $(t,e,n){var r=e-t.length;return r<0?t:t=n?t+N(r):N(r)+t}var C=String.fromCharCode,B=isNaN,L=Array.isArray;function R(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function G(t){var e,n,r,i,o,u,a,c,l;if(!L(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",a=1,c=0;c<t.length;c++)if(j(r=t[c]))u+=r;else{if(e=void 0!==r.precision,!(r=R(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+r+"`.");for(r.mapping&&(a=r.mapping),n=r.flags,l=0;l<n.length;l++)switch(i=n.charAt(l)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===r.width){if(r.width=parseInt(arguments[a],10),a+=1,B(r.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(e&&"*"===r.precision){if(r.precision=parseInt(arguments[a],10),a+=1,B(r.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,e=!1)}switch(r.arg=arguments[a],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(r.padZeros=!1),r.arg=w(r);break;case"s":r.maxWidth=e?r.precision:-1;break;case"c":if(!B(r.arg)){if((o=parseInt(r.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=B(o)?String(r.arg):C(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(r.precision=6),r.arg=F(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=h(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=$(r.arg,r.width,r.padRight)),u+=r.arg||"",a+=1}return u}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function X(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function Z(t){var e,n,r,i;for(n=[],i=0,r=W.exec(t);r;)(e=t.slice(i,W.lastIndex-r[0].length)).length&&n.push(e),n.push(X(r)),i=W.lastIndex,r=W.exec(t);return(e=t.slice(i)).length&&n.push(e),n}function M(t){return"string"==typeof t}function Y(t){var e,n,r;if(!M(t))throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=Z(t),(n=new Array(arguments.length))[0]=e,r=1;r<n.length;r++)n[r]=arguments[r];return G.apply(null,n)}var U,H=Object.prototype,z=H.toString,D=H.__defineGetter__,q=H.__defineSetter__,J=H.__lookupGetter__,K=H.__lookupSetter__;U=function(){try{return g({},"x",{}),!0}catch(t){return!1}}()?y:function(t,e,n){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===z.call(t))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof n||null===n||"[object Array]"===z.call(n))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(J.call(t,e)||K.call(t,e)?(r=t.__proto__,t.__proto__=H,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),o="get"in n,u="set"in n,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&D&&D.call(t,e,n.get),u&&q&&q.call(t,e,n.set),t};var Q=U;function tt(t,e,n){Q(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function et(t){return"string"==typeof t}var nt=String.prototype.valueOf,rt=r();function it(t){return"object"==typeof t&&(t instanceof String||(rt?function(t){try{return nt.call(t),!0}catch(t){return!1}}(t):"[object String]"===f(t)))}function ot(t){return et(t)||it(t)}function ut(t){return"number"==typeof t}tt(ot,"isPrimitive",et),tt(ot,"isObject",it);var at=Number,ct=at.prototype.toString,lt=r();function ft(t){return"object"==typeof t&&(t instanceof at||(lt?function(t){try{return ct.call(t),!0}catch(t){return!1}}(t):"[object Number]"===f(t)))}function st(t){return ut(t)||ft(t)}function pt(t){return t!=t}function gt(t){return ut(t)&&pt(t)}function yt(t){return ft(t)&&pt(t.valueOf())}function bt(t){return gt(t)||yt(t)}tt(st,"isPrimitive",ut),tt(st,"isObject",ft),tt(bt,"isPrimitive",gt),tt(bt,"isObject",yt);var dt=Number.POSITIVE_INFINITY,ht=at.NEGATIVE_INFINITY,mt=Math.floor;function vt(t){return mt(t)===t}function wt(t){return t<dt&&t>ht&&vt(t)}function jt(t){return ut(t)&&wt(t)}function _t(t){return ft(t)&&wt(t.valueOf())}function xt(t){return jt(t)||_t(t)}tt(xt,"isPrimitive",jt),tt(xt,"isObject",_t);var Ot=Object.prototype.propertyIsEnumerable,St=!Ot.call("beep","0");function Et(t,e){var n;return null!=t&&(!(n=Ot.call(t,e))&&St&&ot(t)?!gt(e=+e)&&jt(e)&&e>=0&&e<t.length:n)}var Tt=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)},kt=p?s:function(t){return null!==t&&"object"==typeof t&&!Tt(t)&&"number"==typeof t.length&&vt(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!Et(t,"callee")},It=Array.prototype.slice;function Pt(t){return null!==t&&"object"==typeof t}tt(Pt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(Y("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var n,r;if(!Tt(e))return!1;if(0===(n=e.length))return!1;for(r=0;r<n;r++)if(!1===t(e[r]))return!1;return!0}}(Pt));var Vt=Et((function(){}),"prototype"),At=!Et({toString:null},"toString");function Ft(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&vt(t.length)&&t.length>=0&&t.length<=9007199254740991}function Nt(t,e,n){var r,i;if(!Ft(t)&&!et(t))throw new TypeError(Y("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!jt(n))throw new TypeError(Y("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=r)return-1;i=n}else(i=r+n)<0&&(i=0)}else i=0;if(bt(e)){for(;i<r;i++)if(bt(t[i]))return i}else for(;i<r;i++)if(t[i]===e)return i;return-1}var $t=/./;function Ct(t){return"boolean"==typeof t}var Bt=Boolean,Lt=Boolean.prototype.toString,Rt=r();function Gt(t){return"object"==typeof t&&(t instanceof Bt||(Rt?function(t){try{return Lt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function Wt(t){return Ct(t)||Gt(t)}function Xt(){return new Function("return this;")()}tt(Wt,"isPrimitive",Ct),tt(Wt,"isObject",Gt);var Zt="object"==typeof self?self:null,Mt="object"==typeof window?window:null,Yt="object"==typeof globalThis?globalThis:null,Ut=function(t){if(arguments.length){if(!Ct(t))throw new TypeError(Y("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Xt()}if(Yt)return Yt;if(Zt)return Zt;if(Mt)return Mt;throw new Error("unexpected error. Unable to resolve global object.")}(),Ht=Ut.document&&Ut.document.childNodes,zt=Int8Array;function Dt(){return/^\s*function\s*([^(]*)/i}var qt=/^\s*function\s*([^(]*)/i;function Jt(t){var e,n,r,i;if(("Object"===(n=f(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(e=qt.exec(r.toString()))return e[1]}return Pt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}tt(Dt,"REGEXP",qt);var Kt="function"==typeof $t||"object"==typeof zt||"function"==typeof Ht?function(t){return Jt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"==(e=typeof t)?Jt(t).toLowerCase():e};function Qt(t){return t.constructor&&t.constructor.prototype===t}var te,ee=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ne="undefined"==typeof window?void 0:window,re=function(){var t;if("undefined"===Kt(ne))return!1;for(t in ne)try{-1===Nt(ee,t)&&u(ne,t)&&null!==ne[t]&&"object"===Kt(ne[t])&&Qt(ne[t])}catch(t){return!0}return!1}(),ie="undefined"!=typeof window,oe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];te=e?function(){return 2!==(t(arguments)||"").length}(1,2)?function(e){return kt(e)?t(It.call(e)):t(e)}:t:function(t){var e,n,r,i,o,a,c;if(i=[],kt(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(0==(r="function"==typeof t)&&!Pt(t))return i;n=Vt&&r}for(o in t)n&&"prototype"===o||!u(t,o)||i.push(String(o));if(At)for(e=function(t){if(!1===ie&&!re)return Qt(t);try{return Qt(t)}catch(t){return!1}}(t),c=0;c<oe.length;c++)a=oe[c],e&&"constructor"===a||!u(t,a)||i.push(String(a));return i};var ue=te;function ae(t){return"function"===Kt(t)}var ce,le=Object,fe=Object.getPrototypeOf;ce=ae(Object.getPrototypeOf)?fe:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===f(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var se=ce,pe=Object.prototype;function ge(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!Tt(t)}(t)&&(e=function(t){return null==t?null:(t=le(t),se(t))}(t),!e||!u(t,"constructor")&&u(e,"constructor")&&ae(e.constructor)&&"[object Function]"===f(e.constructor)&&u(e,"isPrototypeOf")&&ae(e.isPrototypeOf)&&(e===pe||function(t){var e;for(e in t)if(!u(t,e))return!1;return!0}(t)))}var ye=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function be(){return ye.slice()}var de={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function he(){var t;return 0===arguments.length?de.all.slice():(t=de[arguments[0]])?t.slice():[]}function me(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function ve(t,e,n){Q(t,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}tt(he,"enum",me),function(t,e){var n,r,i;for(n=ue(e),i=0;i<n.length;i++)ve(t,r=n[i],e[r])}(he,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var we={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function je(){return{bool:we.bool,int8:we.int8,uint8:we.uint8,uint8c:we.uint8c,int16:we.int16,uint16:we.uint16,int32:we.int32,uint32:we.uint32,int64:we.int64,uint64:we.uint64,float32:we.float32,float64:we.float64,complex64:we.complex64,complex128:we.complex128,binary:we.binary,generic:we.generic,notype:we.notype,userdefined_type:we.userdefined_type}}tt(be,"enum",je),function(t,e){var n,r,i;for(n=ue(e),i=0;i<n.length;i++)ve(t,r=n[i],e[r])}(be,je());var _e=function(t,e){var n,r,i,o,a,c,l,f=!0;if(!Pt(t))throw new TypeError(Y("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!ge(e))throw new TypeError(Y("invalid argument. Options argument must be an object. Value: `%s`.",e));if(u(e,"duplicates")&&!Ct(f=e.duplicates))throw new TypeError(Y("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(r=(n=ue(t)).length,a={},f)for(l=0;l<r;l++)u(a,o=t[i=n[l]])?(c=a[o],Tt(c)?a[o].push(i):a[o]=[c,i]):a[o]=i;else for(l=0;l<r;l++)a[t[i=n[l]]]=i;return a}(je(),{duplicates:!1});return function(t){var e=_e[t];return"string"==typeof e?e:null}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).enum2str=e();
//# sourceMappingURL=browser.js.map
