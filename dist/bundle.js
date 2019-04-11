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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/helicopter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/helicopter.js":
/*!**************************************!*\
  !*** ./src/javascript/helicopter.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _object_heli__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object/heli */ \"./src/object/heli.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    console.log(\"hello world\");\n    const canvas = document.getElementById('canvas');\n    const ctx = canvas.getContext('2d');\n    const heli = new _object_heli__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n\n    function draw() {\n        heli.draw();\n    }\n    \n    setInterval(draw, 30);\n\n})\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9oZWxpY29wdGVyLmpzPzMxNjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQUk7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDIiwiZmlsZSI6Ii4vc3JjL2phdmFzY3JpcHQvaGVsaWNvcHRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWxpIGZyb20gJy4uL29iamVjdC9oZWxpJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkXCIpO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb25zdCBoZWxpID0gbmV3IEhlbGkoY3R4KTtcblxuICAgIGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgICAgIGhlbGkuZHJhdygpO1xuICAgIH1cbiAgICBcbiAgICBzZXRJbnRlcnZhbChkcmF3LCAzMCk7XG5cbn0pXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/javascript/helicopter.js\n");

/***/ }),

/***/ "./src/object/heli.js":
/*!****************************!*\
  !*** ./src/object/heli.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Heli {\n    constructor(ctx){\n        this.ctx = ctx;\n        this.direction = 1;\n        this.x = 50;\n        this.y = 20;\n        this.height = 35;\n        this.width = 35;\n        this.hSpeed = 0;\n        this.acc = 1.8;\n    }\n\n    draw(){\n        this.ctx.fillStyle = 'green';\n        this.ctx.fillRect(this.x, this.y, this.width, this.height);\n    }\n\n    \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Heli);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0L2hlbGkuanM/NzcxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVlLG1FQUFJIiwiZmlsZSI6Ii4vc3JjL29iamVjdC9oZWxpLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSGVsaSB7XG4gICAgY29uc3RydWN0b3IoY3R4KXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMTtcbiAgICAgICAgdGhpcy54ID0gNTA7XG4gICAgICAgIHRoaXMueSA9IDIwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDM1O1xuICAgICAgICB0aGlzLndpZHRoID0gMzU7XG4gICAgICAgIHRoaXMuaFNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5hY2MgPSAxLjg7XG4gICAgfVxuXG4gICAgZHJhdygpe1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWxpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/object/heli.js\n");

/***/ })

/******/ });