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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/spaceShip.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/spaceShip.js":
/*!*************************************!*\
  !*** ./src/javascript/spaceShip.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _object_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object/ship */ \"./src/object/ship.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    console.log(\"hello world\");\n    const canvas = document.getElementById('canvas');\n    const ctx = canvas.getContext('2d');\n    const ship = new _object_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n    const background = new Image();\n    background.src = \"../assets/space-background.jpeg\"\n\n    function draw() {\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n        ship.draw();\n    }\n    \n    setInterval(draw, 30);\n\n})\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9zcGFjZVNoaXAuanM/MTE4NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvREFBSTtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUMiLCJmaWxlIjoiLi9zcmMvamF2YXNjcmlwdC9zcGFjZVNoaXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcCBmcm9tICcuLi9vYmplY3Qvc2hpcCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZFwiKTtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGN0eCk7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICAgIGJhY2tncm91bmQuc3JjID0gXCIuLi9hc3NldHMvc3BhY2UtYmFja2dyb3VuZC5qcGVnXCJcblxuICAgIGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgc2hpcC5kcmF3KCk7XG4gICAgfVxuICAgIFxuICAgIHNldEludGVydmFsKGRyYXcsIDMwKTtcblxufSlcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/javascript/spaceShip.js\n");

/***/ }),

/***/ "./src/object/ship.js":
/*!****************************!*\
  !*** ./src/object/ship.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Ship {\n    constructor(ctx, canvas){\n        this.ctx = ctx;\n        this.canvas = canvas;\n        this.direction = 1;\n        this.x = 50;\n        this.y = 450;\n        this.height = 35;\n        this.width = 35;\n        this.hSpeed = 0;\n        this.acc = 1.5;\n        this.addListeners();\n    }\n\n    draw(){\n        this.physics();\n        this.x += this.hSpeed;\n        this.ctx.beginPath();\n        this.ctx.fillStyle = 'green';\n        this.ctx.fillRect(this.x, this.y, this.width, this.height);\n        this.ctx.closePath();\n    };\n\n    addListeners(){\n        document.addEventListener('click', this.handleClick.bind(this));\n    };\n\n    handleClick(){\n        console.log(this.direction)\n        this.direction = this.direction * -1;\n    };\n\n    physics(){\n        if (this.isHittingWall()) {\n            // hit detection\n            // game over\n            this.hSpeed = 0;\n            this.x = 200;\n        } else {\n            this.hSpeed += this.acc * this.direction;\n        }\n    } \n\n    isHittingWall(){\n        if (this.x < 0 || this.x > 500) {\n            return true;\n        } else {\n            return false;\n        };\n    };\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ship);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0L3NoaXAuanM/Yjc5YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsSzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7QUFHQTs7QUFFZSxtRUFBSSIsImZpbGUiOiIuL3NyYy9vYmplY3Qvc2hpcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzKXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgIHRoaXMueCA9IDUwO1xuICAgICAgICB0aGlzLnkgPSA0NTA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMzU7XG4gICAgICAgIHRoaXMud2lkdGggPSAzNTtcbiAgICAgICAgdGhpcy5oU3BlZWQgPSAwO1xuICAgICAgICB0aGlzLmFjYyA9IDEuNTtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIHRoaXMucGh5c2ljcygpO1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5oU3BlZWQ7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9O1xuXG4gICAgYWRkTGlzdGVuZXJzKCl7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlQ2xpY2soKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kaXJlY3Rpb24pXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb24gKiAtMTtcbiAgICB9O1xuXG4gICAgcGh5c2ljcygpe1xuICAgICAgICBpZiAodGhpcy5pc0hpdHRpbmdXYWxsKCkpIHtcbiAgICAgICAgICAgIC8vIGhpdCBkZXRlY3Rpb25cbiAgICAgICAgICAgIC8vIGdhbWUgb3ZlclxuICAgICAgICAgICAgdGhpcy5oU3BlZWQgPSAwO1xuICAgICAgICAgICAgdGhpcy54ID0gMjAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oU3BlZWQgKz0gdGhpcy5hY2MgKiB0aGlzLmRpcmVjdGlvbjtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBpc0hpdHRpbmdXYWxsKCl7XG4gICAgICAgIGlmICh0aGlzLnggPCAwIHx8IHRoaXMueCA+IDUwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgfTtcblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/object/ship.js\n");

/***/ })

/******/ });