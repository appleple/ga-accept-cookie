!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.gaAcceptCookie=t():e.gaAcceptCookie=t()}(window,function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="bundle",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var n=function(){return(n=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var a in t=arguments[o])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a={storageName:"ga_cookie_opt_in",debuglog:!1,acceptBoxText:"このサイトでは Google アナリティクスの Cookie（クッキー）を使用して、ユーザーのWebサイト閲覧データを記録しています。",acceptBtnLabel:"同意して Cookie を受け入れる",cancelBtnLabel:"同意しない"};t.default=function(e,t){var o=n({},a,t),c=o.debuglog,i=o.storageName,r=o.acceptBtnLabel,l=o.cancelBtnLabel,u=o.acceptBoxText,d=localStorage.getItem(i);if("no"===d)c&&console.log("ga_cookie_opt_in = no / ga-disable = true"),window["ga-disable-"+e]=!0;else if("yes"===d)window["ga-disable-"+e]=!1;else{c&&console.log("ga_cookie_opt_in = null"),window["ga-disable-UA-XXXX-Y"]=!0;var s=document.createElement("div");s.setAttribute("class","module-ga-cookie-accept-bar"),s.setAttribute("id","name-ga-cookie-accept-bar"),s.innerHTML="\n      <p>\n        "+u+'\n      </p>\n      <p>\n        <button id="name-ga-cookie-accept-btn" class="module-ga-cookie-accept-btn">'+r+'</button> \n        <button id="name-ga-cookie-deny-btn" class="module-ga-cookie-accept-btn module-ga-cookie-deny-btn">'+l+"</button>\n      </p>\n    ",document.body.appendChild(s);var p=document.getElementById("name-ga-cookie-accept-btn"),g=document.getElementById("name-ga-cookie-deny-btn"),f=document.getElementById("name-ga-cookie-reset-btn");p&&(p.onclick=function(){localStorage.setItem("ga_cookie_opt_in","yes");var e=document.getElementById("name-ga-cookie-accept-bar");e&&e.classList.add("state-remove"),window.setTimeout("window.location.reload(false)",500)}),g&&(g.onclick=function(){localStorage.setItem("ga_cookie_opt_in","no");var e=document.getElementById("name-ga-cookie-accept-bar");e&&e.classList.add("state-remove"),window.setTimeout("window.location.reload(false)",500)}),f&&(f.onclick=function(){localStorage.removeItem("ga_cookie_opt_in"),location.reload(!1)})}}}]).default});