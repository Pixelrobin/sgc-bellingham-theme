!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=12)}([function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";t.a=function(t){var n=this.constructor;return this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){return n.reject(e)})})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildYTAPIRequest=s,t.getLatestVideo=function(t){var e=s("search",{channelId:i.default.YTChannelID,maxResults:1,part:"snippet",type:"video",order:"date"});fetch(e).then(function(e){return e.json()}).then(function(e){e.items&&0<e.items.length&&t(e.items[0])})},t.checkIfStreaming=function(n){var e=s("search",{channelId:i.default.YTChannelID,maxResults:1,part:"snippet",type:"video",eventType:"live"});fetch(e).then(function(e){return e.json()}).then(function(e){var t={streaming:0<e.items.length};0<e.items.length&&(t.id=e.items[0].id.videoId),n(t)})};var r,o=n(4),i=(r=o)&&r.__esModule?r:{default:r};function s(e,n){return Object.keys(n).reduce(function(e,t){return e+"&"+encodeURIComponent(t.toString())+"="+encodeURIComponent(n[t].toString())},"https://www.googleapis.com/youtube/v3/"+e+"/?key="+i.default.YTKey)}n(5),n(6)},function(e,t,n){"use strict";var r=n(2);n(11),document.addEventListener("DOMContentLoaded",function(){document.getElementById("header__logo__sgc");var i=document.getElementById("main-nav"),s=document.getElementById("main-nav__toggle");(0,r.checkIfStreaming)(function(e){if(e.streaming){var t=i.getElementsByTagName("ul")[0],n=document.createElement("li"),r=document.createElement("a"),o=document.createElement("span");o.innerText="Live Now",r.href="https://www.youtube.com/watch?v="+e.id,n.className="menu-item live",r.appendChild(o),n.appendChild(r),t.insertBefore(n,s.nextElementSibling),s.classList.add("live")}}),s.addEventListener("click",function(e){i.classList.toggle("main-nav--expanded")})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={YTKey:"AIzaSyA3qeMAOI35tvXTNFyrgRODePmS5WoT13w",YTChannelID:"UCr9ZBVBy9DfGs-NAgL5gu1Q"}},function(e,t){!function(e){"use strict";if(!e.fetch){var s={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(s.arrayBuffer)var t=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=function(e){return e&&DataView.prototype.isPrototypeOf(e)},r=ArrayBuffer.isView||function(e){return e&&-1<t.indexOf(Object.prototype.toString.call(e))};f.prototype.append=function(e,t){e=a(e),t=u(t);var n=this.map[e];this.map[e]=n?n+","+t:t},f.prototype.delete=function(e){delete this.map[a(e)]},f.prototype.get=function(e){return e=a(e),this.has(e)?this.map[e]:null},f.prototype.has=function(e){return this.map.hasOwnProperty(a(e))},f.prototype.set=function(e,t){this.map[a(e)]=u(t)},f.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},f.prototype.keys=function(){var n=[];return this.forEach(function(e,t){n.push(t)}),c(n)},f.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),c(t)},f.prototype.entries=function(){var n=[];return this.forEach(function(e,t){n.push([t,e])}),c(n)},s.iterable&&(f.prototype[Symbol.iterator]=f.prototype.entries);var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},y.call(m.prototype),y.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},b.error=function(){var e=new b(null,{status:0,statusText:""});return e.type="error",e};var o=[301,302,303,307,308];b.redirect=function(e,t){if(-1===o.indexOf(t))throw new RangeError("Invalid status code");return new b(null,{status:t,headers:{location:e}})},e.Headers=f,e.Request=m,e.Response=b,e.fetch=function(n,o){return new Promise(function(r,e){var t=new m(n,o),i=new XMLHttpRequest;i.onload=function(){var e,o,t={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||"",o=new f,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var t=e.split(":"),n=t.shift().trim();if(n){var r=t.join(":").trim();o.append(n,r)}}),o)};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var n="response"in i?i.response:i.responseText;r(new b(n,t))},i.onerror=function(){e(new TypeError("Network request failed"))},i.ontimeout=function(){e(new TypeError("Network request failed"))},i.open(t.method,t.url,!0),"include"===t.credentials?i.withCredentials=!0:"omit"===t.credentials&&(i.withCredentials=!1),"responseType"in i&&s.blob&&(i.responseType="blob"),t.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send(void 0===t._bodyInit?null:t._bodyInit)})},e.fetch.polyfill=!0}function a(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function u(e){return"string"!=typeof e&&(e=String(e)),e}function c(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return s.iterable&&(e[Symbol.iterator]=function(){return e}),e}function f(t){this.map={},t instanceof f?t.forEach(function(e,t){this.append(t,e)},this):Array.isArray(t)?t.forEach(function(e){this.append(e[0],e[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function l(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function d(n){return new Promise(function(e,t){n.onload=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function h(e){var t=new FileReader,n=d(t);return t.readAsArrayBuffer(e),n}function p(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e)if("string"==typeof e)this._bodyText=e;else if(s.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(s.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(s.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(s.arrayBuffer&&s.blob&&n(e))this._bodyArrayBuffer=p(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!s.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!r(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=p(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):s.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s.blob&&(this.blob=function(){var e=l(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var e,t,n,r=l(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=d(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s.formData&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}function m(e,t){var n,r,o=(t=t||{}).body;if(e instanceof m){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new f(e.headers)),this.method=e.method,this.mode=e.mode,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new f(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),-1<i.indexOf(r)?r:n),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function v(e){var o=new FormData;return e.trim().split("&").forEach(function(e){if(e){var t=e.split("="),n=t.shift().replace(/\+/g," "),r=t.join("=").replace(/\+/g," ");o.append(decodeURIComponent(n),decodeURIComponent(r))}}),o}function b(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new f(t.headers),this.url=t.url||"",this._initBody(e)}}("undefined"!=typeof self?self:this)},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var t=o(7),n=o(1),r=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("unable to locate global object")}();r.Promise?r.Promise.prototype.finally||(r.Promise.prototype.finally=n.a):r.Promise=t.a}.call(t,o(0))},function(e,f,l){"use strict";(function(t){var e=l(1),n=setTimeout;function r(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],c(e,this)}function o(n,r){for(;3===n._state;)n=n._value;0!==n._state?(n._handled=!0,i._immediateFn(function(){var e=1===n._state?r.onFulfilled:r.onRejected;if(null!==e){var t;try{t=e(n._value)}catch(e){return void a(r.promise,e)}s(r.promise,t)}else(1===n._state?s:a)(r.promise,n._value)})):n._deferreds.push(r)}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void u(t);if("function"==typeof n)return void c((r=n,o=e,function(){r.apply(o,arguments)}),t)}t._state=1,t._value=e,u(t)}catch(e){a(t,e)}var r,o}function a(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)o(e,e._deferreds[t]);e._deferreds=null}function c(e,t){var n=!1;try{e(function(e){n||(n=!0,s(t,e))},function(e){n||(n=!0,a(t,e))})}catch(e){if(n)return;n=!0,a(t,e)}}i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(r);return o(this,new function(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(e,t,n)),n},i.prototype.finally=e.a,i.all=function(t){return new i(function(r,o){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var i=Array.prototype.slice.call(t);if(0===i.length)return r([]);var s=i.length;function a(t,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if("function"==typeof n)return void n.call(e,function(e){a(t,e)},o)}i[t]=e,0==--s&&r(i)}catch(e){o(e)}}for(var e=0;e<i.length;e++)a(e,i[e])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(n){return new i(function(e,t){t(n)})},i.race=function(o){return new i(function(e,t){for(var n=0,r=o.length;n<r;n++)o[n].then(e,t)})},i._immediateFn="function"==typeof t&&function(e){t(e)}||function(e){n(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},f.a=i}).call(f,l(8).setImmediate)},function(e,r,o){(function(e){var t=Function.prototype.apply;function n(e,t){this._id=e,this._clearFn=t}r.setTimeout=function(){return new n(t.call(setTimeout,window,arguments),clearTimeout)},r.setInterval=function(){return new n(t.call(setInterval,window,arguments),clearInterval)},r.clearTimeout=r.clearInterval=function(e){e&&e.close()},n.prototype.unref=n.prototype.ref=function(){},n.prototype.close=function(){this._clearFn.call(window,this._id)},r.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},r.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},r._unrefActive=r.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;0<=t&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},o(9),r.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,r.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(r,o(0))},function(e,t,n){(function(e,p){!function(n,r){"use strict";if(!n.setImmediate){var o,i,t,s,e,a=1,u={},c=!1,f=n.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(n);l=l&&l.setTimeout?l:n,"[object process]"==={}.toString.call(n.process)?o=function(e){p.nextTick(function(){h(e)})}:!function(){if(n.postMessage&&!n.importScripts){var e=!0,t=n.onmessage;return n.onmessage=function(){e=!1},n.postMessage("","*"),n.onmessage=t,e}}()?n.MessageChannel?((t=new MessageChannel).port1.onmessage=function(e){h(e.data)},o=function(e){t.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(i=f.documentElement,o=function(e){var t=f.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):o=function(e){setTimeout(h,0,e)}:(s="setImmediate$"+Math.random()+"$",e=function(e){e.source===n&&"string"==typeof e.data&&0===e.data.indexOf(s)&&h(+e.data.slice(s.length))},n.addEventListener?n.addEventListener("message",e,!1):n.attachEvent("onmessage",e),o=function(e){n.postMessage(s+e,"*")}),l.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return u[a]=r,o(a),a++},l.clearImmediate=d}function d(e){delete u[e]}function h(e){if(c)setTimeout(h,0,e);else{var t=u[e];if(t){c=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(r,n)}}(t)}finally{d(e),c=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(0),n(10))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,c=[],f=!1,l=-1;function d(){f&&u&&(f=!1,u.length?c=u.concat(c):l=-1,c.length&&h())}function h(){if(!f){var e=a(d);f=!0;for(var t=c.length;t;){for(u=c,c=[];++l<t;)u&&u[l].run();l=-1,t=c.length}u=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||f||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t){"document"in window.self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||function(e){"use strict";if("Element"in e){var t="classList",n="prototype",r=e.Element[n],o=Object,i=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},s=Array[n].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1},a=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},u=function(e,t){if(""===t)throw new a("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new a("INVALID_CHARACTER_ERR","String contains an invalid character");return s.call(e,t)},c=function(e){for(var t=i.call(e.getAttribute("class")||""),n=t?t.split(/\s+/):[],r=0,o=n.length;r<o;r++)this.push(n[r]);this._updateClassName=function(){e.setAttribute("class",this.toString())}},f=c[n]=[],l=function(){return new c(this)};if(a[n]=Error[n],f.item=function(e){return this[e]||null},f.contains=function(e){return-1!==u(this,e+="")},f.add=function(){for(var e,t=arguments,n=0,r=t.length,o=!1;e=t[n]+"",-1===u(this,e)&&(this.push(e),o=!0),++n<r;);o&&this._updateClassName()},f.remove=function(){var e,t,n=arguments,r=0,o=n.length,i=!1;do{for(e=n[r]+"",t=u(this,e);-1!==t;)this.splice(t,1),i=!0,t=u(this,e)}while(++r<o);i&&this._updateClassName()},f.toggle=function(e,t){e+="";var n=this.contains(e),r=n?!0!==t&&"remove":!1!==t&&"add";return r&&this[r](e),!0===t||!1===t?t:!n},f.toString=function(){return this.join(" ")},o.defineProperty){var d={get:l,enumerable:!0,configurable:!0};try{o.defineProperty(r,t,d)}catch(e){void 0!==e.number&&-2146823252!==e.number||(d.enumerable=!1,o.defineProperty(r,t,d))}}else o[n].__defineGetter__&&r.__defineGetter__(t,l)}}(window.self),function(){"use strict";var e=document.createElement("_");if(e.classList.add("c1","c2"),!e.classList.contains("c2")){var t=function(e){var r=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(e){var t,n=arguments.length;for(t=0;t<n;t++)e=arguments[t],r.call(this,e)}};t("add"),t("remove")}if(e.classList.toggle("c3",!1),e.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:n.call(this,e)}}e=null}())},function(e,t,n){e.exports=n(3)}]);