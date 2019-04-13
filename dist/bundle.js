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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _object_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object/ship */ \"./src/object/ship.js\");\n/* harmony import */ var _object_gate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object/gate */ \"./src/object/gate.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    console.log(\"hello world\");\n    const canvas = document.getElementById('canvas');\n    const ctx = canvas.getContext('2d');\n    const ship = new _object_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n    const gates = [];\n    const interval = setInterval(game, 30);\n    gates[0] = new _object_gate__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n    const background = new Image();\n    background.src = \"../assets/space-background.jpeg\"\n\n    // Adds new gate once previous gate reaches 400px.\n    // Removes gate once it leaves the bounds of the canvas.\n    function checkGate(){\n        for (let i = 0; i < gates.length; i++) {\n            gates[i].draw();\n        };\n        if (gates[0].y == 300) {\n            gates.push(new _object_gate__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx));\n        };\n        if (gates[0].y == 630) {\n            gates.shift();\n        }\n    }\n\n    // MAIN HIT DETECTION\n    function hitDetected(){\n        if ( isHittingWall() || isHittingGate() ) {\n            gameOver();\n        }\n    }\n\n    // Wall hit detection\n    function isHittingWall(){\n        if (ship.x < -2 || ship.x > canvas.width - 35) {\n            return true;\n        }\n    }\n\n    // Left gate hit detection.\n    function isHittingLeftGate(i) {\n        if (ship.x < gates[i].leftX + gates[i].leftWidth &&\n            ship.x + ship.width > gates[i].leftX &&\n            ship.y < gates[i].y + gates[i].height &&\n            ship.y + ship.height > gates[i].y) {\n            return true;\n        };\n    };\n\n    // Right gate hit detection.\n    function isHittingRightGate(i) {\n        if (ship.x < gates[i].rightX + gates[i].rightWidth &&\n            ship.x + ship.width > gates[i].rightX &&\n            ship.y < gates[i].y + gates[i].height &&\n            ship.y + ship.height > gates[i].y) {\n            return true;\n        }\n    }\n\n    // Gate hit detection\n    function isHittingGate() {\n        for ( let i = 0; i < gates.length; i++ ) {\n            if (isHittingLeftGate(i) || isHittingRightGate(i)) {\n                return true ;\n            }\n        }\n    }\n\n\n\n    // MAIN GAME FUNCTION\n    function game() {\n        hitDetected();\n        ctx.clearRect( 0, 0, canvas.width, canvas.height );\n        ship.draw();\n        checkGate();\n        isHittingGate();\n    }\n\n    function gameOver(){\n        alert(\"GAME OVER\");\n        document.location.reload();\n        clearInterval(interval);\n    }\n\n    \n\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9zcGFjZXNoaXAuanM/N2EwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDQTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQUk7QUFDekI7QUFDQTtBQUNBLG1CQUFtQixvREFBSTtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG9EQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxDQUFDIiwiZmlsZSI6Ii4vc3JjL2phdmFzY3JpcHQvc3BhY2VzaGlwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoaXAgZnJvbSAnLi4vb2JqZWN0L3NoaXAnO1xuaW1wb3J0IEdhdGUgZnJvbSAnLi4vb2JqZWN0L2dhdGUnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGRcIik7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChjdHgpO1xuICAgIGNvbnN0IGdhdGVzID0gW107XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChnYW1lLCAzMCk7XG4gICAgZ2F0ZXNbMF0gPSBuZXcgR2F0ZShjdHgpO1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbiAgICBiYWNrZ3JvdW5kLnNyYyA9IFwiLi4vYXNzZXRzL3NwYWNlLWJhY2tncm91bmQuanBlZ1wiXG5cbiAgICAvLyBBZGRzIG5ldyBnYXRlIG9uY2UgcHJldmlvdXMgZ2F0ZSByZWFjaGVzIDQwMHB4LlxuICAgIC8vIFJlbW92ZXMgZ2F0ZSBvbmNlIGl0IGxlYXZlcyB0aGUgYm91bmRzIG9mIHRoZSBjYW52YXMuXG4gICAgZnVuY3Rpb24gY2hlY2tHYXRlKCl7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2F0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGdhdGVzW2ldLmRyYXcoKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGdhdGVzWzBdLnkgPT0gMzAwKSB7XG4gICAgICAgICAgICBnYXRlcy5wdXNoKG5ldyBHYXRlKGN0eCkpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoZ2F0ZXNbMF0ueSA9PSA2MzApIHtcbiAgICAgICAgICAgIGdhdGVzLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNQUlOIEhJVCBERVRFQ1RJT05cbiAgICBmdW5jdGlvbiBoaXREZXRlY3RlZCgpe1xuICAgICAgICBpZiAoIGlzSGl0dGluZ1dhbGwoKSB8fCBpc0hpdHRpbmdHYXRlKCkgKSB7XG4gICAgICAgICAgICBnYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2FsbCBoaXQgZGV0ZWN0aW9uXG4gICAgZnVuY3Rpb24gaXNIaXR0aW5nV2FsbCgpe1xuICAgICAgICBpZiAoc2hpcC54IDwgLTIgfHwgc2hpcC54ID4gY2FudmFzLndpZHRoIC0gMzUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTGVmdCBnYXRlIGhpdCBkZXRlY3Rpb24uXG4gICAgZnVuY3Rpb24gaXNIaXR0aW5nTGVmdEdhdGUoaSkge1xuICAgICAgICBpZiAoc2hpcC54IDwgZ2F0ZXNbaV0ubGVmdFggKyBnYXRlc1tpXS5sZWZ0V2lkdGggJiZcbiAgICAgICAgICAgIHNoaXAueCArIHNoaXAud2lkdGggPiBnYXRlc1tpXS5sZWZ0WCAmJlxuICAgICAgICAgICAgc2hpcC55IDwgZ2F0ZXNbaV0ueSArIGdhdGVzW2ldLmhlaWdodCAmJlxuICAgICAgICAgICAgc2hpcC55ICsgc2hpcC5oZWlnaHQgPiBnYXRlc1tpXS55KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLy8gUmlnaHQgZ2F0ZSBoaXQgZGV0ZWN0aW9uLlxuICAgIGZ1bmN0aW9uIGlzSGl0dGluZ1JpZ2h0R2F0ZShpKSB7XG4gICAgICAgIGlmIChzaGlwLnggPCBnYXRlc1tpXS5yaWdodFggKyBnYXRlc1tpXS5yaWdodFdpZHRoICYmXG4gICAgICAgICAgICBzaGlwLnggKyBzaGlwLndpZHRoID4gZ2F0ZXNbaV0ucmlnaHRYICYmXG4gICAgICAgICAgICBzaGlwLnkgPCBnYXRlc1tpXS55ICsgZ2F0ZXNbaV0uaGVpZ2h0ICYmXG4gICAgICAgICAgICBzaGlwLnkgKyBzaGlwLmhlaWdodCA+IGdhdGVzW2ldLnkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2F0ZSBoaXQgZGV0ZWN0aW9uXG4gICAgZnVuY3Rpb24gaXNIaXR0aW5nR2F0ZSgpIHtcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgZ2F0ZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICBpZiAoaXNIaXR0aW5nTGVmdEdhdGUoaSkgfHwgaXNIaXR0aW5nUmlnaHRHYXRlKGkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWUgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIC8vIE1BSU4gR0FNRSBGVU5DVElPTlxuICAgIGZ1bmN0aW9uIGdhbWUoKSB7XG4gICAgICAgIGhpdERldGVjdGVkKCk7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCApO1xuICAgICAgICBzaGlwLmRyYXcoKTtcbiAgICAgICAgY2hlY2tHYXRlKCk7XG4gICAgICAgIGlzSGl0dGluZ0dhdGUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnYW1lT3Zlcigpe1xuICAgICAgICBhbGVydChcIkdBTUUgT1ZFUlwiKTtcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIFxuXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/javascript/spaceship.js\n");

/***/ }),

/***/ "./src/object/gate.js":
/*!****************************!*\
  !*** ./src/object/gate.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Gate {\n    constructor(ctx) {\n        this.ctx = ctx;\n\n        this.vSpeed = 5;\n        this.gap = 200;\n\n        // Gate Widths\n        this.leftWidth = Math.floor(Math.random() * (300 - 50) + 50);\n        this.rightWidth = 600;\n\n        // Gate Xs\n        this.leftX = 0;\n        this.rightX = this.leftWidth + this.gap;\n\n        this.height = 60;\n        this.y = -60;\n        \n    }\n\n    draw(){\n        this.y += this.vSpeed;\n        this.ctx.beginPath();\n\n        // Left gate\n        this.ctx.rect(this.leftX, this.y, this.leftWidth, this.height);\n\n        // Right gate\n        this.ctx.rect(this.rightX, this.y, this.rightWidth, this.height);\n\n        this.ctx.fillStyle = \"blue\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gate);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0L2dhdGUuanM/ZDUzMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUkiLCJmaWxlIjoiLi9zcmMvb2JqZWN0L2dhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYXRlIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy52U3BlZWQgPSA1O1xuICAgICAgICB0aGlzLmdhcCA9IDIwMDtcblxuICAgICAgICAvLyBHYXRlIFdpZHRoc1xuICAgICAgICB0aGlzLmxlZnRXaWR0aCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgzMDAgLSA1MCkgKyA1MCk7XG4gICAgICAgIHRoaXMucmlnaHRXaWR0aCA9IDYwMDtcblxuICAgICAgICAvLyBHYXRlIFhzXG4gICAgICAgIHRoaXMubGVmdFggPSAwO1xuICAgICAgICB0aGlzLnJpZ2h0WCA9IHRoaXMubGVmdFdpZHRoICsgdGhpcy5nYXA7XG5cbiAgICAgICAgdGhpcy5oZWlnaHQgPSA2MDtcbiAgICAgICAgdGhpcy55ID0gLTYwO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZTcGVlZDtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgLy8gTGVmdCBnYXRlXG4gICAgICAgIHRoaXMuY3R4LnJlY3QodGhpcy5sZWZ0WCwgdGhpcy55LCB0aGlzLmxlZnRXaWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIFJpZ2h0IGdhdGVcbiAgICAgICAgdGhpcy5jdHgucmVjdCh0aGlzLnJpZ2h0WCwgdGhpcy55LCB0aGlzLnJpZ2h0V2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhdGU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/object/gate.js\n");

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