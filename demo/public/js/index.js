/*!
 * 
 *   @hodgef/ts-library-boilerplate-basic v1.0.141
 *   https://github.com/hodgef/ts-library-boilerplate-basic
 *
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.MPADiff=t():e.MPADiff=t()}(self,(function(){return(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>w});var n='link[rel="stylesheet"]';function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){u=!0,a=e},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw a}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"callback",(function(){})),a(this,"defaultDelay",300),a(this,"delay",this.defaultDelay),a(this,"linksHTML",[])}var t,n,o;return t=e,(n=[{key:"setCallback",value:function(e){this.callback=e}},{key:"setDelay",value:function(e){this.delay=e,this.defaultDelay=e}},{key:"didChange",value:function(e){if(e.length!==this.linksHTML.length)return!0;var t,n={},o=r(this.linksHTML);try{for(o.s();!(t=o.n()).done;)n[t.value]=0}catch(e){o.e(e)}finally{o.f()}var i,a=r(e);try{for(a.s();!(i=a.n()).done;)if(void 0===n[i.value.outerHTML])return!0}catch(e){a.e(e)}finally{a.f()}}},{key:"timedHandler",value:function(){var e=this,t=Array.from(document.getElementsByTagName("a"));this.didChange(t)?(this.delay=this.defaultDelay,this.linksHTML=t.map((function(e){return e.outerHTML})),this.callback(t),window.setTimeout((function(){return e.timedHandler()}),this.delay)):window.setTimeout((function(){return e.timedHandler()}),this.delay)}},{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.delay;this.setDelay(t),this.setCallback(e),this.timedHandler()}}])&&i(t.prototype,n),o&&i(t,o),e}(),u={};function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;t[e]||(t[e]={didFetch:!1,errored:!1,promise:fetch(e).then((function(e){return e.text()})).then((function(t){return u[e].didFetch=!0,u[e].html=t,t})).catch((function(t){return console.error(t),u[e].errored=!0,u[e].didFetch=!0,""}))})}function c(e){return!((t=e).startsWith("http")||t.startsWith("https")||t.startsWith("//"))||function(e){return d(e)===d(window.location.origin)}(e);var t}function d(e){return e.split("//").pop().split("/").shift()}function s(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw i}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p="data-mpa-diff-added-listener",b="true",g=function(){function e(){var t,n,r,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.DEFAULT_CONFIG;y(this,e),m(this,"observer",new l),m(this,"eagerLoading",!0),m(this,"defaultLoaderDelay",500),m(this,"loaderElement",void 0),this.defaultLoaderDelay=null!==(t=o.loaderDelay)&&void 0!==t?t:e.DEFAULT_CONFIG.loaderDelay,this.eagerLoading=null!==(n=o.eagerLoading)&&void 0!==n?n:e.DEFAULT_CONFIG.eagerLoading,this.loaderElement=null!==(r=o.loaderElement)&&void 0!==r?r:e.DEFAULT_CONFIG.loaderElement,this.observer.init(this.handleLinksChange.bind(this)),window.onpopstate=this.handlePopState.bind(this)}var t,r,o;return t=e,o=[{key:"init",value:function(t){window.MPADiffInstance||e.instance||(e.instance=new e(t),window.MPADiffInstance=this.instance)}},{key:"getInstance",value:function(){return e.instance||this.init(),e.instance}}],(r=[{key:"handlePopState",value:function(e){this.updateHTML(e.state.html)}},{key:"updateHTML",value:function(e){!function(e,t){var r=(new DOMParser).parseFromString(t,"text/html"),o={},i={};e.querySelectorAll(n).forEach((function(e,t){o[e.href]=t})),r.querySelectorAll(n).forEach((function(e,t){i[e.href]=t})),Object.keys(i).forEach((function(t){if(void 0===o[t]){var n=e.createElement("link");n.href=t,n.rel="stylesheet",e.head.appendChild(n)}})),Object.keys(o).forEach((function(t){var r;void 0===i[t]&&(null===(r=e.querySelectorAll(n)[o[t]])||void 0===r||r.remove())})),e.head.querySelectorAll(":not(".concat(n,")")).forEach((function(e){e.remove()})),r.head.querySelectorAll(":not(".concat(n,")")).forEach((function(t){e.head.appendChild(t.cloneNode(!0))})),e.body.innerHTML=r.body.innerHTML}(document,e)}},{key:"updateBrowserHistory",value:function(e,t,n){history.pushState({html:e},n,t)}},{key:"addListener",value:function(e){var t=this;this.eagerLoading&&f(e.href),e.addEventListener("click",(function(n){n.preventDefault();var r=!1;return t.loaderElement&&(document.body.appendChild(t.loaderElement),t.loaderElement=t.loaderElement.cloneNode(!0)),t.eagerLoading||f(e.href),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;if(!t[e])throw new Error("Couldn't find url: ".concat(e," in saved records!"));return new Promise((function(n){var r;t[e].didFetch&&n(t[e].html),n(null===(r=t[e].promise)||void 0===r?void 0:r.then((function(){return t[e].html})))}))}(e.href).then((function(n){if(!n)return console.log("Received empty/undefined html value: ",n),console.log("Reverting to default behaviour"),void(r=!0);window.setTimeout((function(){t.updateHTML(n),t.updateBrowserHistory(n,e.href,function(e){var t=e.search(/<title>.*<\/title>/);if(t<0)return"";var n=e.search(/<\/title>/);return n<0?"":e.slice(t,n).slice("<title>".length)}(n))}),t.defaultLoaderDelay)})),r&&(window.location.href=e.href),!1})),e.setAttribute(p,b)}},{key:"handleLinksChange",value:function(e){var t,n=s(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.getAttribute(p)!==b&&c(r.href)&&this.addListener(r)}}catch(e){n.e(e)}finally{n.f()}}},{key:"setEagerLoading",value:function(e){this.eagerLoading=e}},{key:"setLoader",value:function(e){this.loaderElement=e.cloneNode(!0)}},{key:"setDefaultLoaderDelay",value:function(e){this.defaultLoaderDelay=e}}])&&v(t.prototype,r),o&&v(t,o),e}();m(g,"instance",void 0),m(g,"DEFAULT_CONFIG",{loaderDelay:500,eagerLoading:!0,loaderElement:void 0});const w=g;return t})()}));
//# sourceMappingURL=index.js.map