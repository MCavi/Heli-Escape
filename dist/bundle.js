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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/spaceship.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/spaceship.js":
/*!*************************************!*\
  !*** ./src/javascript/spaceship.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _object_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object/ship */ \"./src/object/ship.js\");\n/* harmony import */ var _object_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object/pipe */ \"./src/object/pipe.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    console.log(\"hello world\");\n    const canvas = document.getElementById('canvas');\n    const ctx = canvas.getContext('2d');\n    const ship = new _object_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n    const gates = [];\n    const interval = setInterval(game, 30);\n    gates[0] = new _object_pipe__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n    const background = new Image();\n    background.src = \"../assets/space-background.jpeg\"\n\n    // Adds new gate once previous gate reaches 400px.\n    // Removes gate once it leaves the bounds of the canvas.\n    function checkGate(){\n        for (let i = 0; i < gates.length; i++) {\n            gates[i].draw();\n        };\n        if (gates[0].y == 300) {\n            gates.push(new _object_pipe__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx));\n        };\n        if (gates[0].y == 630) {\n            gates.shift();\n        }\n    }\n\n    // HIT DETECTION\n    function hitDetected(){\n        if ( isHittingWall() ) {\n                alert(\"GAME OVER\");\n                document.location.reload();\n                clearInterval(interval);\n        }\n    }\n\n    // Wall hit detection\n    function isHittingWall(){\n        if (ship.x < -2 || ship.x > canvas.width - 35) {\n            return true;\n        }\n    }\n\n\n\n    // MAIN GAME FUNCTION\n    function game() {\n        hitDetected();\n        ctx.clearRect( 0, 0, canvas.width, canvas.height );\n        ship.draw();\n        checkGate();\n    }\n\n    \n\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9zcGFjZXNoaXAuanM/N2EwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDQTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQUk7QUFDekI7QUFDQTtBQUNBLG1CQUFtQixvREFBSTtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG9EQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLENBQUMiLCJmaWxlIjoiLi9zcmMvamF2YXNjcmlwdC9zcGFjZXNoaXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcCBmcm9tICcuLi9vYmplY3Qvc2hpcCc7XG5pbXBvcnQgR2F0ZSBmcm9tICcuLi9vYmplY3QvcGlwZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZFwiKTtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGN0eCk7XG4gICAgY29uc3QgZ2F0ZXMgPSBbXTtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGdhbWUsIDMwKTtcbiAgICBnYXRlc1swXSA9IG5ldyBHYXRlKGN0eCk7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICAgIGJhY2tncm91bmQuc3JjID0gXCIuLi9hc3NldHMvc3BhY2UtYmFja2dyb3VuZC5qcGVnXCJcblxuICAgIC8vIEFkZHMgbmV3IGdhdGUgb25jZSBwcmV2aW91cyBnYXRlIHJlYWNoZXMgNDAwcHguXG4gICAgLy8gUmVtb3ZlcyBnYXRlIG9uY2UgaXQgbGVhdmVzIHRoZSBib3VuZHMgb2YgdGhlIGNhbnZhcy5cbiAgICBmdW5jdGlvbiBjaGVja0dhdGUoKXtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZ2F0ZXNbaV0uZHJhdygpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoZ2F0ZXNbMF0ueSA9PSAzMDApIHtcbiAgICAgICAgICAgIGdhdGVzLnB1c2gobmV3IEdhdGUoY3R4KSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChnYXRlc1swXS55ID09IDYzMCkge1xuICAgICAgICAgICAgZ2F0ZXMuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhJVCBERVRFQ1RJT05cbiAgICBmdW5jdGlvbiBoaXREZXRlY3RlZCgpe1xuICAgICAgICBpZiAoIGlzSGl0dGluZ1dhbGwoKSApIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkdBTUUgT1ZFUlwiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdhbGwgaGl0IGRldGVjdGlvblxuICAgIGZ1bmN0aW9uIGlzSGl0dGluZ1dhbGwoKXtcbiAgICAgICAgaWYgKHNoaXAueCA8IC0yIHx8IHNoaXAueCA+IGNhbnZhcy53aWR0aCAtIDM1KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICAvLyBNQUlOIEdBTUUgRlVOQ1RJT05cbiAgICBmdW5jdGlvbiBnYW1lKCkge1xuICAgICAgICBoaXREZXRlY3RlZCgpO1xuICAgICAgICBjdHguY2xlYXJSZWN0KCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQgKTtcbiAgICAgICAgc2hpcC5kcmF3KCk7XG4gICAgICAgIGNoZWNrR2F0ZSgpO1xuICAgIH1cblxuICAgIFxuXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/javascript/spaceship.js\n");

/***/ }),

/***/ "./src/object/pipe.js":
/*!****************************!*\
  !*** ./src/object/pipe.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Gate {\n    constructor(ctx) {\n        this.ctx = ctx;\n        this.height = 60;\n        this.width = Math.floor(Math.random() * (300 - 50) + 50);\n        this.x = 0;\n        this.y = -60;\n        this.vSpeed = 5;\n        this.gap = 200;\n    }\n\n    draw(){\n        this.y += this.vSpeed;\n        this.ctx.beginPath();\n        this.ctx.rect(this.x, this.y, this.width, this.height);\n        this.ctx.rect(this.width + this.gap, this.y, 600, this.height);\n        this.ctx.fillStyle = \"blue\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gate);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0L3BpcGUuanM/OTZkMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG1FQUFJIiwiZmlsZSI6Ii4vc3JjL29iamVjdC9waXBlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2F0ZSB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmhlaWdodCA9IDYwO1xuICAgICAgICB0aGlzLndpZHRoID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDMwMCAtIDUwKSArIDUwKTtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gLTYwO1xuICAgICAgICB0aGlzLnZTcGVlZCA9IDU7XG4gICAgICAgIHRoaXMuZ2FwID0gMjAwO1xuICAgIH1cblxuICAgIGRyYXcoKXtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMudlNwZWVkO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHgucmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5yZWN0KHRoaXMud2lkdGggKyB0aGlzLmdhcCwgdGhpcy55LCA2MDAsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYXRlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/object/pipe.js\n");

/***/ }),

/***/ "./src/object/ship.js":
/*!****************************!*\
  !*** ./src/object/ship.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Ship {\n    constructor(ctx){\n        this.ctx = ctx;\n        this.direction = 1;\n        this.x = 225;\n        this.y = 450;\n        this.height = 35;\n        this.width = 35;\n        this.hSpeed = 0;\n        this.acc = 1.5;\n        this.addListeners();\n    }\n\n    draw(){\n        this.physics();\n        this.x += this.hSpeed;\n        this.ctx.beginPath();\n        this.ctx.fillStyle = 'grey';\n        this.ctx.fillRect(this.x, this.y, this.width, this.height);\n        this.ctx.closePath();\n    };\n\n    addListeners(){\n        document.addEventListener('click', this.handleClick.bind(this));\n    };\n\n    handleClick(){\n        console.log(this.direction)\n        this.direction = this.direction * -1;\n    };\n\n    physics(){\n            this.hSpeed += this.acc * this.direction;\n    } \n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ship);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0L3NoaXAuanM/Yjc5YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEs7O0FBRUE7O0FBRWUsbUVBQUkiLCJmaWxlIjoiLi9zcmMvb2JqZWN0L3NoaXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IoY3R4KXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMTtcbiAgICAgICAgdGhpcy54ID0gMjI1O1xuICAgICAgICB0aGlzLnkgPSA0NTA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMzU7XG4gICAgICAgIHRoaXMud2lkdGggPSAzNTtcbiAgICAgICAgdGhpcy5oU3BlZWQgPSAwO1xuICAgICAgICB0aGlzLmFjYyA9IDEuNTtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIHRoaXMucGh5c2ljcygpO1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5oU3BlZWQ7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnZ3JleSc7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH07XG5cbiAgICBhZGRMaXN0ZW5lcnMoKXtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgIH07XG5cbiAgICBoYW5kbGVDbGljaygpe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRpcmVjdGlvbilcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbiAqIC0xO1xuICAgIH07XG5cbiAgICBwaHlzaWNzKCl7XG4gICAgICAgICAgICB0aGlzLmhTcGVlZCArPSB0aGlzLmFjYyAqIHRoaXMuZGlyZWN0aW9uO1xuICAgIH0gXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/object/ship.js\n");

/***/ })

/******/ });