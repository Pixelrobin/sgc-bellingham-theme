!function(r){var n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=r,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";r(2);var n,i=r(3),o=r(6),s=(n=o)&&n.__esModule?n:{default:n};document.addEventListener("DOMContentLoaded",function(){var t=document.getElementById("mountains-back"),r=document.getElementById("mountains-front"),n=!1;function o(){var e=window.scrollY;t.setAttribute("transform","translate(0, "+.3*e+")"),r.setAttribute("transform","translate(0, "+.15*e+")"),n=!1}window.addEventListener("scroll",function(e){n||window.requestAnimationFrame(o),n=!0}),(0,i.getLatestVideo)(function(e){var t=e.id.videoId,r="https://img.youtube.com/vi/"+t+"/maxresdefault.jpg",n=e.snippet.title,o=document.getElementById("latest-service"),i=document.getElementById("latest-service__name"),s=document.getElementById("latest-service__link");console.log(e),o.style["background-image"]="url("+r+")",s.href="https://www.youtube.com/watch?v="+t,i.innerText=n});new s.default(document.getElementById("heading__slideshow"),{autoDelay:5e3,class:"heading__slideshow__slide--current"})})},function(e,t,r){"use strict";document.addEventListener("DOMContentLoaded",function(){var t=document.getElementById("header__logo__sgc"),r=!1;window.addEventListener("resize",function(e){r||(window.requestAnimationFrame(function(){window.innerWidth<580?"SGC"!==t.innerText&&(t.innerText="SGC"):"Slavic Gospel Chruch"!==t.innerText&&(t.innerText="Slavic Gospel Church"),r=!1}),r=!0)})})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildYTAPIRequest=s,t.getLatestVideo=function(t){var e=s("search",{channelId:i.default.YTChannelID,maxResults:1,part:"snippet",type:"video",order:"date"});fetch(e).then(function(e){return e.json()}).then(function(e){e.items&&0<e.items.length&&t(e.items[0])})};var n,o=r(4),i=(n=o)&&n.__esModule?n:{default:n};function s(e,r){return Object.keys(r).reduce(function(e,t){return e+"&"+encodeURIComponent(t.toString())+"="+encodeURIComponent(r[t].toString())},"https://www.googleapis.com/youtube/v3/"+e+"/?key="+i.default.YTKey)}r(5)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={YTKey:"AIzaSyA3qeMAOI35tvXTNFyrgRODePmS5WoT13w",YTChannelID:"UCr9ZBVBy9DfGs-NAgL5gu1Q"}},function(e,t){!function(e){"use strict";if(!e.fetch){var s={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(s.arrayBuffer)var t=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],r=function(e){return e&&DataView.prototype.isPrototypeOf(e)},n=ArrayBuffer.isView||function(e){return e&&-1<t.indexOf(Object.prototype.toString.call(e))};l.prototype.append=function(e,t){e=a(e),t=u(t);var r=this.map[e];this.map[e]=r?r+","+t:t},l.prototype.delete=function(e){delete this.map[a(e)]},l.prototype.get=function(e){return e=a(e),this.has(e)?this.map[e]:null},l.prototype.has=function(e){return this.map.hasOwnProperty(a(e))},l.prototype.set=function(e,t){this.map[a(e)]=u(t)},l.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},l.prototype.keys=function(){var r=[];return this.forEach(function(e,t){r.push(t)}),d(r)},l.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),d(t)},l.prototype.entries=function(){var r=[];return this.forEach(function(e,t){r.push([t,e])}),d(r)},s.iterable&&(l.prototype[Symbol.iterator]=l.prototype.entries);var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},p.call(m.prototype),p.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},w.error=function(){var e=new w(null,{status:0,statusText:""});return e.type="error",e};var o=[301,302,303,307,308];w.redirect=function(e,t){if(-1===o.indexOf(t))throw new RangeError("Invalid status code");return new w(null,{status:t,headers:{location:e}})},e.Headers=l,e.Request=m,e.Response=w,e.fetch=function(r,o){return new Promise(function(n,e){var t=new m(r,o),i=new XMLHttpRequest;i.onload=function(){var e,o,t={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||"",o=new l,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var t=e.split(":"),r=t.shift().trim();if(r){var n=t.join(":").trim();o.append(r,n)}}),o)};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var r="response"in i?i.response:i.responseText;n(new w(r,t))},i.onerror=function(){e(new TypeError("Network request failed"))},i.ontimeout=function(){e(new TypeError("Network request failed"))},i.open(t.method,t.url,!0),"include"===t.credentials?i.withCredentials=!0:"omit"===t.credentials&&(i.withCredentials=!1),"responseType"in i&&s.blob&&(i.responseType="blob"),t.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send(void 0===t._bodyInit?null:t._bodyInit)})},e.fetch.polyfill=!0}function a(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function u(e){return"string"!=typeof e&&(e=String(e)),e}function d(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return s.iterable&&(e[Symbol.iterator]=function(){return e}),e}function l(t){this.map={},t instanceof l?t.forEach(function(e,t){this.append(t,e)},this):Array.isArray(t)?t.forEach(function(e){this.append(e[0],e[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function f(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function h(r){return new Promise(function(e,t){r.onload=function(){e(r.result)},r.onerror=function(){t(r.error)}})}function c(e){var t=new FileReader,r=h(t);return t.readAsArrayBuffer(e),r}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e)if("string"==typeof e)this._bodyText=e;else if(s.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(s.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(s.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(s.arrayBuffer&&s.blob&&r(e))this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!s.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!n(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=y(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):s.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s.blob&&(this.blob=function(){var e=f(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(c)}),this.text=function(){var e,t,r,n=f(this);if(n)return n;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=h(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}function m(e,t){var r,n,o=(t=t||{}).body;if(e instanceof m){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new l(e.headers)),this.method=e.method,this.mode=e.mode,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new l(t.headers)),this.method=(r=t.method||this.method||"GET",n=r.toUpperCase(),-1<i.indexOf(n)?n:r),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function b(e){var o=new FormData;return e.trim().split("&").forEach(function(e){if(e){var t=e.split("="),r=t.shift().replace(/\+/g," "),n=t.join("=").replace(/\+/g," ");o.append(decodeURIComponent(r),decodeURIComponent(n))}}),o}function w(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new l(t.headers),this.url=t.url||"",this._initBody(e)}}("undefined"!=typeof self?self:this)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();var n=function(){function n(e,t){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.element=e,this.slides=e.children,this.index=-1,t.autoDelay&&1<this.slides&&setInterval(function(){r.nextSlide()},t.autoDelay),this.slideClass=t.class?t.class:"current",this.nextSlide()}return o(n,[{key:"nextSlide",value:function(){this.slides[this.index]&&this.removeClass(this.slides[this.index],this.slideClass),this.index++,this.index=this.index%this.slides.length,this.addClass(this.slides[this.index],this.slideClass)}},{key:"addClass",value:function(e,t){"string"==typeof e.className&&(-1!==e.className.indexOf(t)&&this.removeClass(e,t),e.offsetWidth,e.className+=" "+t)}},{key:"removeClass",value:function(e,t){if(e.className){var r=new RegExp(" "+t,"g");e.className=e.className.replace(r,"")}}}]),n}();t.default=n}]);