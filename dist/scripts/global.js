/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/classlist-polyfill/src/index.js":
/*!******************************************************!*\
  !*** ./node_modules/classlist-polyfill/src/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n * classList.js: Cross-browser full element.classList implementation.\n * 1.1.20170427\n *\n * By Eli Grey, http://eligrey.com\n * License: Dedicated to the public domain.\n *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md\n */\n\n/*global self, document, DOMException */\n\n/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */\n\nif (\"document\" in window.self) {\n\n// Full polyfill for browsers with no classList support\n// Including IE < Edge missing SVGElement.classList\nif (!(\"classList\" in document.createElement(\"_\")) \n\t|| document.createElementNS && !(\"classList\" in document.createElementNS(\"http://www.w3.org/2000/svg\",\"g\"))) {\n\n(function (view) {\n\n\"use strict\";\n\nif (!('Element' in view)) return;\n\nvar\n\t  classListProp = \"classList\"\n\t, protoProp = \"prototype\"\n\t, elemCtrProto = view.Element[protoProp]\n\t, objCtr = Object\n\t, strTrim = String[protoProp].trim || function () {\n\t\treturn this.replace(/^\\s+|\\s+$/g, \"\");\n\t}\n\t, arrIndexOf = Array[protoProp].indexOf || function (item) {\n\t\tvar\n\t\t\t  i = 0\n\t\t\t, len = this.length\n\t\t;\n\t\tfor (; i < len; i++) {\n\t\t\tif (i in this && this[i] === item) {\n\t\t\t\treturn i;\n\t\t\t}\n\t\t}\n\t\treturn -1;\n\t}\n\t// Vendors: please allow content code to instantiate DOMExceptions\n\t, DOMEx = function (type, message) {\n\t\tthis.name = type;\n\t\tthis.code = DOMException[type];\n\t\tthis.message = message;\n\t}\n\t, checkTokenAndGetIndex = function (classList, token) {\n\t\tif (token === \"\") {\n\t\t\tthrow new DOMEx(\n\t\t\t\t  \"SYNTAX_ERR\"\n\t\t\t\t, \"An invalid or illegal string was specified\"\n\t\t\t);\n\t\t}\n\t\tif (/\\s/.test(token)) {\n\t\t\tthrow new DOMEx(\n\t\t\t\t  \"INVALID_CHARACTER_ERR\"\n\t\t\t\t, \"String contains an invalid character\"\n\t\t\t);\n\t\t}\n\t\treturn arrIndexOf.call(classList, token);\n\t}\n\t, ClassList = function (elem) {\n\t\tvar\n\t\t\t  trimmedClasses = strTrim.call(elem.getAttribute(\"class\") || \"\")\n\t\t\t, classes = trimmedClasses ? trimmedClasses.split(/\\s+/) : []\n\t\t\t, i = 0\n\t\t\t, len = classes.length\n\t\t;\n\t\tfor (; i < len; i++) {\n\t\t\tthis.push(classes[i]);\n\t\t}\n\t\tthis._updateClassName = function () {\n\t\t\telem.setAttribute(\"class\", this.toString());\n\t\t};\n\t}\n\t, classListProto = ClassList[protoProp] = []\n\t, classListGetter = function () {\n\t\treturn new ClassList(this);\n\t}\n;\n// Most DOMException implementations don't allow calling DOMException's toString()\n// on non-DOMExceptions. Error's toString() is sufficient here.\nDOMEx[protoProp] = Error[protoProp];\nclassListProto.item = function (i) {\n\treturn this[i] || null;\n};\nclassListProto.contains = function (token) {\n\ttoken += \"\";\n\treturn checkTokenAndGetIndex(this, token) !== -1;\n};\nclassListProto.add = function () {\n\tvar\n\t\t  tokens = arguments\n\t\t, i = 0\n\t\t, l = tokens.length\n\t\t, token\n\t\t, updated = false\n\t;\n\tdo {\n\t\ttoken = tokens[i] + \"\";\n\t\tif (checkTokenAndGetIndex(this, token) === -1) {\n\t\t\tthis.push(token);\n\t\t\tupdated = true;\n\t\t}\n\t}\n\twhile (++i < l);\n\n\tif (updated) {\n\t\tthis._updateClassName();\n\t}\n};\nclassListProto.remove = function () {\n\tvar\n\t\t  tokens = arguments\n\t\t, i = 0\n\t\t, l = tokens.length\n\t\t, token\n\t\t, updated = false\n\t\t, index\n\t;\n\tdo {\n\t\ttoken = tokens[i] + \"\";\n\t\tindex = checkTokenAndGetIndex(this, token);\n\t\twhile (index !== -1) {\n\t\t\tthis.splice(index, 1);\n\t\t\tupdated = true;\n\t\t\tindex = checkTokenAndGetIndex(this, token);\n\t\t}\n\t}\n\twhile (++i < l);\n\n\tif (updated) {\n\t\tthis._updateClassName();\n\t}\n};\nclassListProto.toggle = function (token, force) {\n\ttoken += \"\";\n\n\tvar\n\t\t  result = this.contains(token)\n\t\t, method = result ?\n\t\t\tforce !== true && \"remove\"\n\t\t:\n\t\t\tforce !== false && \"add\"\n\t;\n\n\tif (method) {\n\t\tthis[method](token);\n\t}\n\n\tif (force === true || force === false) {\n\t\treturn force;\n\t} else {\n\t\treturn !result;\n\t}\n};\nclassListProto.toString = function () {\n\treturn this.join(\" \");\n};\n\nif (objCtr.defineProperty) {\n\tvar classListPropDesc = {\n\t\t  get: classListGetter\n\t\t, enumerable: true\n\t\t, configurable: true\n\t};\n\ttry {\n\t\tobjCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);\n\t} catch (ex) { // IE 8 doesn't support enumerable:true\n\t\t// adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36\n\t\t// modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected\n\t\tif (ex.number === undefined || ex.number === -0x7FF5EC54) {\n\t\t\tclassListPropDesc.enumerable = false;\n\t\t\tobjCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);\n\t\t}\n\t}\n} else if (objCtr[protoProp].__defineGetter__) {\n\telemCtrProto.__defineGetter__(classListProp, classListGetter);\n}\n\n}(window.self));\n\n}\n\n// There is full or partial native classList support, so just check if we need\n// to normalize the add/remove and toggle APIs.\n\n(function () {\n\t\"use strict\";\n\n\tvar testElement = document.createElement(\"_\");\n\n\ttestElement.classList.add(\"c1\", \"c2\");\n\n\t// Polyfill for IE 10/11 and Firefox <26, where classList.add and\n\t// classList.remove exist but support only one argument at a time.\n\tif (!testElement.classList.contains(\"c2\")) {\n\t\tvar createMethod = function(method) {\n\t\t\tvar original = DOMTokenList.prototype[method];\n\n\t\t\tDOMTokenList.prototype[method] = function(token) {\n\t\t\t\tvar i, len = arguments.length;\n\n\t\t\t\tfor (i = 0; i < len; i++) {\n\t\t\t\t\ttoken = arguments[i];\n\t\t\t\t\toriginal.call(this, token);\n\t\t\t\t}\n\t\t\t};\n\t\t};\n\t\tcreateMethod('add');\n\t\tcreateMethod('remove');\n\t}\n\n\ttestElement.classList.toggle(\"c3\", false);\n\n\t// Polyfill for IE 10 and Firefox <24, where classList.toggle does not\n\t// support the second argument.\n\tif (testElement.classList.contains(\"c3\")) {\n\t\tvar _toggle = DOMTokenList.prototype.toggle;\n\n\t\tDOMTokenList.prototype.toggle = function(token, force) {\n\t\t\tif (1 in arguments && !this.contains(token) === !force) {\n\t\t\t\treturn force;\n\t\t\t} else {\n\t\t\t\treturn _toggle.call(this, token);\n\t\t\t}\n\t\t};\n\n\t}\n\n\ttestElement = null;\n}());\n\n}\n\n\n//# sourceURL=webpack:///./node_modules/classlist-polyfill/src/index.js?");

/***/ }),

/***/ "./src/scripts/deps/dropdown.js":
/*!**************************************!*\
  !*** ./src/scripts/deps/dropdown.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar phoneWidth = '480';\n\nvar Dropdown = function () {\n\tfunction Dropdown(element, openCallback) {\n\t\tvar _this = this;\n\n\t\t_classCallCheck(this, Dropdown);\n\n\t\tthis.element = element;\n\t\tthis.deactivateTimeout = -1;\n\t\tthis.clickDebounceTimeout = -1;\n\t\tthis.clickDebounce = false;\n\t\tthis.openCallback = openCallback;\n\n\t\telement.addEventListener('mouseenter', function (e) {\n\t\t\tif (window.innerWidth > phoneWidth) {\n\t\t\t\t_this.setDebouce();\n\t\t\t\t_this.open();\n\t\t\t}\n\t\t});\n\n\t\telement.addEventListener('mouseleave', function (e) {\n\t\t\tif (window.innerWidth > phoneWidth) {\n\t\t\t\t_this.clearDebounce();\n\t\t\t\t_this.close();\n\t\t\t}\n\t\t});\n\n\t\telement.addEventListener('focusout', function (e) {\n\t\t\tif (window.innerWidth > phoneWidth) {\n\t\t\t\tif (!element.contains(e.relatedTarget)) _this.close();\n\t\t\t}\n\t\t});\n\n\t\tvar dropdownAnchor = element.getElementsByTagName('a')[0];\n\n\t\tdropdownAnchor.addEventListener('click', function (e) {\n\t\t\te.preventDefault();\n\t\t\tif (!_this.clickDebounce) _this.toggle();\n\t\t});\n\t}\n\n\t_createClass(Dropdown, [{\n\t\tkey: 'open',\n\t\tvalue: function open() {\n\t\t\tclearTimeout(this.deactivateTimeout);\n\t\t\tthis.element.classList.add('active');\n\n\t\t\tif (typeof this.openCallback === 'function') this.openCallback(this);\n\t\t}\n\t}, {\n\t\tkey: 'close',\n\t\tvalue: function close(force) {\n\t\t\tvar _this2 = this;\n\n\t\t\tclearTimeout(this.deactivateTimeout);\n\t\t\tclearTimeout(this.clickDebounceTimeout);\n\n\t\t\tif (force) {\n\t\t\t\tthis.element.classList.remove('active');\n\t\t\t\tthis.element.classList.add('deactivate');\n\t\t\t} else {\n\t\t\t\tthis.deactivateTimeout = setTimeout(function () {\n\t\t\t\t\t_this2.element.classList.remove('active');\n\t\t\t\t\t_this2.element.classList.add('deactivate');\n\t\t\t\t}, 2000);\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'toggle',\n\t\tvalue: function toggle() {\n\t\t\tthis.element.classList.toggle('active');\n\t\t}\n\t}, {\n\t\tkey: 'clearDebounce',\n\t\tvalue: function clearDebounce() {\n\t\t\tthis.clickDebounce = false;\n\t\t\tclearTimeout(this.clickDebounceTimeout);\n\t\t}\n\t}, {\n\t\tkey: 'setDebouce',\n\t\tvalue: function setDebouce() {\n\t\t\tvar _this3 = this;\n\n\t\t\tthis.clearDebounce();\n\n\t\t\tthis.clickDebounce = true;\n\n\t\t\tthis.clickDebounceTimeout = setTimeout(function (e) {\n\t\t\t\t_this3.clickDebounce = false;\n\t\t\t}, 250);\n\t\t}\n\t}]);\n\n\treturn Dropdown;\n}();\n\nexports.default = Dropdown;\n\n//# sourceURL=webpack:///./src/scripts/deps/dropdown.js?");

/***/ }),

/***/ "./src/scripts/global.js":
/*!*******************************!*\
  !*** ./src/scripts/global.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! classlist-polyfill */ \"./node_modules/classlist-polyfill/src/index.js\");\n\nvar _dropdown = __webpack_require__(/*! ./deps/dropdown.js */ \"./src/scripts/deps/dropdown.js\");\n\nvar _dropdown2 = _interopRequireDefault(_dropdown);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//import { checkIfStreaming } from './deps/youtubeClient';\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n\n\tvar sgc = document.getElementById(\"header__logo__sgc\");\n\n\t// --- Logo ---\n\n\t/*var lastSize = 0;\r\n var ticking = false;\r\n \n function handleResize() {\r\n \tconst width = window.innerWidth;\r\n \tif (width < 580) {\r\n \t\tif (sgc.innerText !== \"SGC\") sgc.innerText = \"SGC\";\r\n \t} else if (sgc.innerText !== \"Slavic Gospel Chruch\") {\r\n \t\tsgc.innerText = \"Slavic Gospel Church\";\r\n \t}\r\n }\r\n \n window.addEventListener('resize', e => {\r\n \t\tif (!ticking) {\r\n \t\t\twindow.requestAnimationFrame(function() {\r\n \t\t\thandleResize();\r\n \t\t\tticking = false;\r\n \t\t});\r\n \n \t\tticking = true;\r\n \t}\r\n });*/\n\n\t// --- Youtube ---\n\n\t/*checkIfStreaming(data => {\r\n \tif (data.streaming) {\r\n \t\tconst navUL = nav.getElementsByTagName('ul')[0];\r\n \n \t\tconst item   = document.createElement('li');\r\n \t\tconst anchor = document.createElement('a');\r\n \t\tconst span   = document.createElement('span');\r\n \n \t\tspan.innerText = 'Live Now';\r\n \t\tanchor.href    = 'https://www.youtube.com/watch?v=' + data.id;\r\n \t\titem.className = 'menu-item live';\r\n \n \t\tanchor.appendChild(span);\r\n \t\titem.appendChild(anchor);\r\n \t\t\r\n \t\tnavUL.insertBefore(item, navToggle.nextElementSibling);\r\n \n \t\tnavToggle.classList.add('live');\r\n \t}\r\n });*/\n\n\t// --- Nav ---\n\n\tvar nav = document.getElementById('main-nav');\n\tvar navToggle = document.getElementById('main-nav__toggle');\n\n\tnavToggle.addEventListener('click', function (e) {\n\t\tnav.classList.toggle('main-nav--expanded');\n\t});\n\n\tvar dropdowns = Array.from(nav.querySelectorAll('.menu-item-has-children')).map(function (element) {\n\t\treturn new _dropdown2.default(element, function (openedDropdown) {\n\t\t\tdropdowns.forEach(function (dropdown) {\n\t\t\t\tif (dropdown !== openedDropdown) {\n\t\t\t\t\tdropdown.close(true);\n\t\t\t\t}\n\t\t\t});\n\t\t});\n\t});\n\n\tconsole.log(dropdowns);\n});\n\n//# sourceURL=webpack:///./src/scripts/global.js?");

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./src/scripts/global.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\wamp64\\www\\wordpress\\wp-content\\themes\\sgcbellingham\\src\\scripts\\global.js */\"./src/scripts/global.js\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/global.js?");

/***/ })

/******/ });