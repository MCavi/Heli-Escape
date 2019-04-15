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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _object_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object/ship */ \"./src/object/ship.js\");\n/* harmony import */ var _object_gate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object/gate */ \"./src/object/gate.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    \n    console.log(\"hello world\");\n\n    const canvas = document.getElementById('canvas');\n    const ctx = canvas.getContext('2d');\n\n    const ship = new _object_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n    const gates = [];\n    gates[0] = new _object_gate__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n\n\n\n\n    // var background = new Image();\n    // background.src = \"https://ae01.alicdn.com/kf/HTB1SuU.e3KTBuNkSne1q6yJoXXaE/KATE-5x7ft-Cartoon-City-Night-Photo-Superhero-Party-Backdrop-Cosplay-Photography-Background-Kids-Birthday-Party-Decorations.jpg\";\n\n    // Make sure the image is loaded first otherwise nothing will draw.\n    // background.onload = function () {\n    //     ctx.drawImage(background, 0, 0);\n    // }\n\n    \n    document.getElementById('startButton').addEventListener('click', () => {\n        const startButton = document.getElementById('startButton');\n        startButton.style.display = 'none';\n\n        // background.onload = function () {\n        //     ctx.drawImage(background, 0, 0);\n        // }\n        \n        const interval = setInterval(gameEngine, 30);\n        \n        let score = 0;\n\n        // Adds new gate once previous gate reaches 400px.\n        // Removes gate once it leaves the bounds of the canvas.\n        function checkGate(){\n            for (let i = 0; i < gates.length; i++) {\n                gates[i].draw();\n            };\n            if (gates[0].y == 300) {\n                gates.push(new _object_gate__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx));\n            };\n            if (gates[0].y == 630) {\n                gates.shift();\n            };\n        };\n    \n        // MAIN HIT DETECTION\n        function hitDetected(){\n            // debugger\n            if ( ship.y == gates[0].y ) {\n                score += 1;\n            };\n            if ( isHittingWall() || isHittingGate() ) {\n                gameOver();\n            };\n        };\n    \n        // Wall hit detection\n        function isHittingWall(){\n            if (ship.x < -2 || ship.x > canvas.width - 35) {\n                return true;\n            };\n        };\n    \n        // Gate hit detection\n        function isHittingGate() {\n            for ( let i = 0; i < gates.length; i++ ) {\n                if (isHittingLeftGate(i) || isHittingRightGate(i)) {\n                    return true ;\n                };\n            };\n        };\n    \n        // Left gate hit detection.\n        function isHittingLeftGate(i) {\n            if (ship.x < gates[i].leftX + gates[i].leftWidth &&\n                ship.x + ship.width > gates[i].leftX &&\n                ship.y < gates[i].y + gates[i].height &&\n                ship.y + ship.height > gates[i].y) {\n                return true;\n            };\n        };\n    \n        // Right gate hit detection.\n        function isHittingRightGate(i) {\n            if (ship.x < gates[i].rightX + gates[i].rightWidth &&\n                ship.x + ship.width > gates[i].rightX &&\n                ship.y < gates[i].y + gates[i].height &&\n                ship.y + ship.height > gates[i].y) {\n                return true;\n            }\n        }\n    \n        function gameOver(){\n            alert(\"GAME OVER\");\n            document.location.reload();\n            clearInterval(interval);\n        };\n    \n        function drawScore() {\n            ctx.font = \"48px 'Chewy', cursive\";\n            ctx.fillStyle = \"white\";\n            ctx.fillText(score, 275, 50);\n        };\n        \n    \n        // MAIN GAME FUNCTION\n        function gameEngine() {\n            hitDetected();\n            ctx.clearRect( 0, 0, canvas.width, canvas.height );\n            ship.draw();\n            checkGate();\n            drawScore();\n            // requestAnimationFrame(gameEngine)\n        };\n        // gameEngine();\n    }\n    )\n\n\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9zcGFjZXNoaXAuanM/N2EwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDQTs7QUFFbEM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIsb0RBQUk7QUFDekI7QUFDQSxtQkFBbUIsb0RBQUk7Ozs7O0FBS3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isb0RBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDIiwiZmlsZSI6Ii4vc3JjL2phdmFzY3JpcHQvc3BhY2VzaGlwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoaXAgZnJvbSAnLi4vb2JqZWN0L3NoaXAnO1xuaW1wb3J0IEdhdGUgZnJvbSAnLi4vb2JqZWN0L2dhdGUnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGRcIik7XG5cbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoY3R4KTtcbiAgICBjb25zdCBnYXRlcyA9IFtdO1xuICAgIGdhdGVzWzBdID0gbmV3IEdhdGUoY3R4KTtcblxuXG5cblxuICAgIC8vIHZhciBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4gICAgLy8gYmFja2dyb3VuZC5zcmMgPSBcImh0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjFTdVUuZTNLVEJ1TmtTbmUxcTZ5Sm9YWGFFL0tBVEUtNXg3ZnQtQ2FydG9vbi1DaXR5LU5pZ2h0LVBob3RvLVN1cGVyaGVyby1QYXJ0eS1CYWNrZHJvcC1Db3NwbGF5LVBob3RvZ3JhcGh5LUJhY2tncm91bmQtS2lkcy1CaXJ0aGRheS1QYXJ0eS1EZWNvcmF0aW9ucy5qcGdcIjtcblxuICAgIC8vIE1ha2Ugc3VyZSB0aGUgaW1hZ2UgaXMgbG9hZGVkIGZpcnN0IG90aGVyd2lzZSBub3RoaW5nIHdpbGwgZHJhdy5cbiAgICAvLyBiYWNrZ3JvdW5kLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwKTtcbiAgICAvLyB9XG5cbiAgICBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRCdXR0b24nKTtcbiAgICAgICAgc3RhcnRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAvLyBiYWNrZ3JvdW5kLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZ2FtZUVuZ2luZSwgMzApO1xuICAgICAgICBcbiAgICAgICAgbGV0IHNjb3JlID0gMDtcblxuICAgICAgICAvLyBBZGRzIG5ldyBnYXRlIG9uY2UgcHJldmlvdXMgZ2F0ZSByZWFjaGVzIDQwMHB4LlxuICAgICAgICAvLyBSZW1vdmVzIGdhdGUgb25jZSBpdCBsZWF2ZXMgdGhlIGJvdW5kcyBvZiB0aGUgY2FudmFzLlxuICAgICAgICBmdW5jdGlvbiBjaGVja0dhdGUoKXtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2F0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBnYXRlc1tpXS5kcmF3KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGdhdGVzWzBdLnkgPT0gMzAwKSB7XG4gICAgICAgICAgICAgICAgZ2F0ZXMucHVzaChuZXcgR2F0ZShjdHgpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZ2F0ZXNbMF0ueSA9PSA2MzApIHtcbiAgICAgICAgICAgICAgICBnYXRlcy5zaGlmdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgLy8gTUFJTiBISVQgREVURUNUSU9OXG4gICAgICAgIGZ1bmN0aW9uIGhpdERldGVjdGVkKCl7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgaWYgKCBzaGlwLnkgPT0gZ2F0ZXNbMF0ueSApIHtcbiAgICAgICAgICAgICAgICBzY29yZSArPSAxO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICggaXNIaXR0aW5nV2FsbCgpIHx8IGlzSGl0dGluZ0dhdGUoKSApIHtcbiAgICAgICAgICAgICAgICBnYW1lT3ZlcigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgLy8gV2FsbCBoaXQgZGV0ZWN0aW9uXG4gICAgICAgIGZ1bmN0aW9uIGlzSGl0dGluZ1dhbGwoKXtcbiAgICAgICAgICAgIGlmIChzaGlwLnggPCAtMiB8fCBzaGlwLnggPiBjYW52YXMud2lkdGggLSAzNSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgLy8gR2F0ZSBoaXQgZGV0ZWN0aW9uXG4gICAgICAgIGZ1bmN0aW9uIGlzSGl0dGluZ0dhdGUoKSB7XG4gICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBnYXRlcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNIaXR0aW5nTGVmdEdhdGUoaSkgfHwgaXNIaXR0aW5nUmlnaHRHYXRlKGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlIDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgLy8gTGVmdCBnYXRlIGhpdCBkZXRlY3Rpb24uXG4gICAgICAgIGZ1bmN0aW9uIGlzSGl0dGluZ0xlZnRHYXRlKGkpIHtcbiAgICAgICAgICAgIGlmIChzaGlwLnggPCBnYXRlc1tpXS5sZWZ0WCArIGdhdGVzW2ldLmxlZnRXaWR0aCAmJlxuICAgICAgICAgICAgICAgIHNoaXAueCArIHNoaXAud2lkdGggPiBnYXRlc1tpXS5sZWZ0WCAmJlxuICAgICAgICAgICAgICAgIHNoaXAueSA8IGdhdGVzW2ldLnkgKyBnYXRlc1tpXS5oZWlnaHQgJiZcbiAgICAgICAgICAgICAgICBzaGlwLnkgKyBzaGlwLmhlaWdodCA+IGdhdGVzW2ldLnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIC8vIFJpZ2h0IGdhdGUgaGl0IGRldGVjdGlvbi5cbiAgICAgICAgZnVuY3Rpb24gaXNIaXR0aW5nUmlnaHRHYXRlKGkpIHtcbiAgICAgICAgICAgIGlmIChzaGlwLnggPCBnYXRlc1tpXS5yaWdodFggKyBnYXRlc1tpXS5yaWdodFdpZHRoICYmXG4gICAgICAgICAgICAgICAgc2hpcC54ICsgc2hpcC53aWR0aCA+IGdhdGVzW2ldLnJpZ2h0WCAmJlxuICAgICAgICAgICAgICAgIHNoaXAueSA8IGdhdGVzW2ldLnkgKyBnYXRlc1tpXS5oZWlnaHQgJiZcbiAgICAgICAgICAgICAgICBzaGlwLnkgKyBzaGlwLmhlaWdodCA+IGdhdGVzW2ldLnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnYW1lT3Zlcigpe1xuICAgICAgICAgICAgYWxlcnQoXCJHQU1FIE9WRVJcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICBmdW5jdGlvbiBkcmF3U2NvcmUoKSB7XG4gICAgICAgICAgICBjdHguZm9udCA9IFwiNDhweCAnQ2hld3knLCBjdXJzaXZlXCI7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHNjb3JlLCAyNzUsIDUwKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgXG4gICAgICAgIC8vIE1BSU4gR0FNRSBGVU5DVElPTlxuICAgICAgICBmdW5jdGlvbiBnYW1lRW5naW5lKCkge1xuICAgICAgICAgICAgaGl0RGV0ZWN0ZWQoKTtcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCApO1xuICAgICAgICAgICAgc2hpcC5kcmF3KCk7XG4gICAgICAgICAgICBjaGVja0dhdGUoKTtcbiAgICAgICAgICAgIGRyYXdTY29yZSgpO1xuICAgICAgICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVFbmdpbmUpXG4gICAgICAgIH07XG4gICAgICAgIC8vIGdhbWVFbmdpbmUoKTtcbiAgICB9XG4gICAgKVxuXG5cbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/javascript/spaceship.js\n");

/***/ }),

/***/ "./src/object/gate.js":
/*!****************************!*\
  !*** ./src/object/gate.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Gate {\n    constructor(ctx) {\n        this.ctx = ctx;\n\n        this.vSpeed = 10;\n        this.gap = 250;\n\n        // Gate Widths\n        this.leftWidth = Math.floor(Math.random() * (300 - 50) + 10);\n        this.rightWidth = 600;\n\n        // Gate Xs\n        this.leftX = 0;\n        this.rightX = this.leftWidth + this.gap;\n\n        this.height = 60;\n        this.y = -60;\n        \n    };\n\n    draw(){\n        this.y += this.vSpeed;\n        this.ctx.beginPath();\n\n        // Left gate\n        this.ctx.rect(this.leftX, this.y, this.leftWidth, this.height);\n\n        // Right gate\n        this.ctx.rect(this.rightX, this.y, this.rightWidth, this.height);\n\n        this.ctx.fillStyle = \"rgb(86,84,106)\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gate);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0L2dhdGUuanM/ZDUzMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUkiLCJmaWxlIjoiLi9zcmMvb2JqZWN0L2dhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYXRlIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy52U3BlZWQgPSAxMDtcbiAgICAgICAgdGhpcy5nYXAgPSAyNTA7XG5cbiAgICAgICAgLy8gR2F0ZSBXaWR0aHNcbiAgICAgICAgdGhpcy5sZWZ0V2lkdGggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMzAwIC0gNTApICsgMTApO1xuICAgICAgICB0aGlzLnJpZ2h0V2lkdGggPSA2MDA7XG5cbiAgICAgICAgLy8gR2F0ZSBYc1xuICAgICAgICB0aGlzLmxlZnRYID0gMDtcbiAgICAgICAgdGhpcy5yaWdodFggPSB0aGlzLmxlZnRXaWR0aCArIHRoaXMuZ2FwO1xuXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNjA7XG4gICAgICAgIHRoaXMueSA9IC02MDtcbiAgICAgICAgXG4gICAgfTtcblxuICAgIGRyYXcoKXtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMudlNwZWVkO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcblxuICAgICAgICAvLyBMZWZ0IGdhdGVcbiAgICAgICAgdGhpcy5jdHgucmVjdCh0aGlzLmxlZnRYLCB0aGlzLnksIHRoaXMubGVmdFdpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgLy8gUmlnaHQgZ2F0ZVxuICAgICAgICB0aGlzLmN0eC5yZWN0KHRoaXMucmlnaHRYLCB0aGlzLnksIHRoaXMucmlnaHRXaWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiKDg2LDg0LDEwNilcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2F0ZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/object/gate.js\n");

/***/ }),

/***/ "./src/object/ship.js":
/*!****************************!*\
  !*** ./src/object/ship.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Ship {\n    constructor(ctx){\n        this.ctx = ctx;\n        this.direction = 1;\n        this.x = 225;\n        this.y = 450;\n        this.height = 40;\n        this.width = 90;\n        this.hSpeed = 0;\n        this.acc = 1.5;\n        this.sprites = [159, 310, 460];\n        this.frameCount = 0;\n        this.tilt = 10;\n\n        this.addListeners();\n    };\n\n    draw(){\n        if (this.frameCount > 30) {\n            this.frameCount = 0;\n        } else {\n            this.frameCount += 1;\n        }\n\n        let spriteFrame = Math.floor(this.frameCount / 10);\n        this.physics();\n\n        this.x += this.hSpeed;\n        const helicopter = new Image();\n        helicopter.src = './src/assets/helicopter-spritesheet.png';\n        this.spriteIndex === 2 ? this.spriteIndex = 0 : this.spriteIndex++ ;\n        helicopter.onload = () => {\n            this.ctx.drawImage(helicopter, \n                                0, \n                                this.sprites[spriteFrame], \n                                345,\n                                135,\n                                this.x, \n                                this.y, \n                                this.width, \n                                this.height);\n        };\n    };\n\n    addListeners(){\n        document.addEventListener('click', this.handleClick.bind(this));\n    };\n\n    handleClick(){\n        this.direction = this.direction * -1;\n    };\n\n    physics(){\n            this.hSpeed += this.acc * this.direction;\n    }; \n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ship);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0L3NoaXAuanM/Yjc5YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTTs7QUFFQTs7QUFFZSxtRUFBSSIsImZpbGUiOiIuL3NyYy9vYmplY3Qvc2hpcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAxO1xuICAgICAgICB0aGlzLnggPSAyMjU7XG4gICAgICAgIHRoaXMueSA9IDQ1MDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA0MDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDkwO1xuICAgICAgICB0aGlzLmhTcGVlZCA9IDA7XG4gICAgICAgIHRoaXMuYWNjID0gMS41O1xuICAgICAgICB0aGlzLnNwcml0ZXMgPSBbMTU5LCAzMTAsIDQ2MF07XG4gICAgICAgIHRoaXMuZnJhbWVDb3VudCA9IDA7XG4gICAgICAgIHRoaXMudGlsdCA9IDEwO1xuXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfTtcblxuICAgIGRyYXcoKXtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVDb3VudCA+IDMwKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mcmFtZUNvdW50ICs9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3ByaXRlRnJhbWUgPSBNYXRoLmZsb29yKHRoaXMuZnJhbWVDb3VudCAvIDEwKTtcbiAgICAgICAgdGhpcy5waHlzaWNzKCk7XG5cbiAgICAgICAgdGhpcy54ICs9IHRoaXMuaFNwZWVkO1xuICAgICAgICBjb25zdCBoZWxpY29wdGVyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGhlbGljb3B0ZXIuc3JjID0gJy4vc3JjL2Fzc2V0cy9oZWxpY29wdGVyLXNwcml0ZXNoZWV0LnBuZyc7XG4gICAgICAgIHRoaXMuc3ByaXRlSW5kZXggPT09IDIgPyB0aGlzLnNwcml0ZUluZGV4ID0gMCA6IHRoaXMuc3ByaXRlSW5kZXgrKyA7XG4gICAgICAgIGhlbGljb3B0ZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGhlbGljb3B0ZXIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVzW3Nwcml0ZUZyYW1lXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDM0NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTM1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLngsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpZHRoLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBhZGRMaXN0ZW5lcnMoKXtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgIH07XG5cbiAgICBoYW5kbGVDbGljaygpe1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uICogLTE7XG4gICAgfTtcblxuICAgIHBoeXNpY3MoKXtcbiAgICAgICAgICAgIHRoaXMuaFNwZWVkICs9IHRoaXMuYWNjICogdGhpcy5kaXJlY3Rpb247XG4gICAgfTsgXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/object/ship.js\n");

/***/ })

/******/ });