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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _object_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object/ship */ \"./src/object/ship.js\");\n/* harmony import */ var _object_gate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object/gate */ \"./src/object/gate.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n    const canvas = document.getElementById('canvas');\n    const ctx = canvas.getContext('2d');\n\n    // var background = new Image();\n    // background.src = \"https://ae01.alicdn.com/kf/HTB1SuU.e3KTBuNkSne1q6yJoXXaE/KATE-5x7ft-Cartoon-City-Night-Photo-Superhero-Party-Backdrop-Cosplay-Photography-Background-Kids-Birthday-Party-Decorations.jpg\";\n\n    // Make sure the image is loaded first otherwise nothing will draw.\n    // background.onload = function () {\n    //     ctx.drawImage(background, 0, 0);\n    // }\n\n    \n    document.getElementById('startButton').addEventListener('click', () => {\n\n        // background.onload = function () {\n        //     ctx.drawImage(background, 0, 0);\n        // }\n\n        const startButton = document.getElementById('startButton');\n        startButton.style.display = 'none';\n        console.log(\"hello world\");\n        \n        const ship = new _object_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n        const gates = [];\n        const interval = setInterval(gameEngine, 30);\n\n\n        gates[0] = new _object_gate__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n        let score = 0;\n\n        // Adds new gate once previous gate reaches 400px.\n        // Removes gate once it leaves the bounds of the canvas.\n        function checkGate(){\n            for (let i = 0; i < gates.length; i++) {\n                gates[i].draw();\n            };\n            if (gates[0].y == 300) {\n                gates.push(new _object_gate__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx));\n            };\n            if (gates[0].y == 630) {\n                gates.shift();\n            };\n        };\n    \n        // MAIN HIT DETECTION\n        function hitDetected(){\n            // debugger\n            if ( ship.y == gates[0].y ) {\n                score += 1;\n            };\n            if ( isHittingWall() || isHittingGate() ) {\n                gameOver();\n            };\n        };\n    \n        // Wall hit detection\n        function isHittingWall(){\n            if (ship.x < -2 || ship.x > canvas.width - 35) {\n                return true;\n            };\n        };\n    \n        // Gate hit detection\n        function isHittingGate() {\n            for ( let i = 0; i < gates.length; i++ ) {\n                if (isHittingLeftGate(i) || isHittingRightGate(i)) {\n                    return true ;\n                };\n            };\n        };\n    \n        // Left gate hit detection.\n        function isHittingLeftGate(i) {\n            if (ship.x < gates[i].leftX + gates[i].leftWidth &&\n                ship.x + ship.width > gates[i].leftX &&\n                ship.y < gates[i].y + gates[i].height &&\n                ship.y + ship.height > gates[i].y) {\n                return true;\n            };\n        };\n    \n        // Right gate hit detection.\n        function isHittingRightGate(i) {\n            if (ship.x < gates[i].rightX + gates[i].rightWidth &&\n                ship.x + ship.width > gates[i].rightX &&\n                ship.y < gates[i].y + gates[i].height &&\n                ship.y + ship.height > gates[i].y) {\n                return true;\n            }\n        }\n    \n        function gameOver(){\n            alert(\"GAME OVER\");\n            document.location.reload();\n            clearInterval(interval);\n        };\n    \n        function drawScore() {\n            ctx.font = \"48px sans serif\";\n            ctx.fillStyle = \"#0095DD\";\n            ctx.fillText(score, 275, 50);\n        };\n        \n    \n        // MAIN GAME FUNCTION\n        function gameEngine() {\n            hitDetected();\n            ctx.clearRect( 0, 0, canvas.width, canvas.height );\n            ship.draw();\n            drawScore();\n            checkGate();\n            // requestAnimationFrame(gameEngine)\n        };\n        // gameEngine();\n    }\n    )\n\n\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9zcGFjZXNoaXAuanM/N2EwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDQTs7QUFFbEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixvREFBSTtBQUM3QjtBQUNBOzs7QUFHQSx1QkFBdUIsb0RBQUk7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isb0RBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDIiwiZmlsZSI6Ii4vc3JjL2phdmFzY3JpcHQvc3BhY2VzaGlwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoaXAgZnJvbSAnLi4vb2JqZWN0L3NoaXAnO1xuaW1wb3J0IEdhdGUgZnJvbSAnLi4vb2JqZWN0L2dhdGUnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgLy8gdmFyIGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbiAgICAvLyBiYWNrZ3JvdW5kLnNyYyA9IFwiaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMVN1VS5lM0tUQnVOa1NuZTFxNnlKb1hYYUUvS0FURS01eDdmdC1DYXJ0b29uLUNpdHktTmlnaHQtUGhvdG8tU3VwZXJoZXJvLVBhcnR5LUJhY2tkcm9wLUNvc3BsYXktUGhvdG9ncmFwaHktQmFja2dyb3VuZC1LaWRzLUJpcnRoZGF5LVBhcnR5LURlY29yYXRpb25zLmpwZ1wiO1xuXG4gICAgLy8gTWFrZSBzdXJlIHRoZSBpbWFnZSBpcyBsb2FkZWQgZmlyc3Qgb3RoZXJ3aXNlIG5vdGhpbmcgd2lsbCBkcmF3LlxuICAgIC8vIGJhY2tncm91bmQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDApO1xuICAgIC8vIH1cblxuICAgIFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgIC8vIGJhY2tncm91bmQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0QnV0dG9uJyk7XG4gICAgICAgIHN0YXJ0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGRcIik7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoY3R4KTtcbiAgICAgICAgY29uc3QgZ2F0ZXMgPSBbXTtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChnYW1lRW5naW5lLCAzMCk7XG5cblxuICAgICAgICBnYXRlc1swXSA9IG5ldyBHYXRlKGN0eCk7XG4gICAgICAgIGxldCBzY29yZSA9IDA7XG5cbiAgICAgICAgLy8gQWRkcyBuZXcgZ2F0ZSBvbmNlIHByZXZpb3VzIGdhdGUgcmVhY2hlcyA0MDBweC5cbiAgICAgICAgLy8gUmVtb3ZlcyBnYXRlIG9uY2UgaXQgbGVhdmVzIHRoZSBib3VuZHMgb2YgdGhlIGNhbnZhcy5cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tHYXRlKCl7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZ2F0ZXNbaV0uZHJhdygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChnYXRlc1swXS55ID09IDMwMCkge1xuICAgICAgICAgICAgICAgIGdhdGVzLnB1c2gobmV3IEdhdGUoY3R4KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGdhdGVzWzBdLnkgPT0gNjMwKSB7XG4gICAgICAgICAgICAgICAgZ2F0ZXMuc2hpZnQoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIC8vIE1BSU4gSElUIERFVEVDVElPTlxuICAgICAgICBmdW5jdGlvbiBoaXREZXRlY3RlZCgpe1xuICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIGlmICggc2hpcC55ID09IGdhdGVzWzBdLnkgKSB7XG4gICAgICAgICAgICAgICAgc2NvcmUgKz0gMTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIGlzSGl0dGluZ1dhbGwoKSB8fCBpc0hpdHRpbmdHYXRlKCkgKSB7XG4gICAgICAgICAgICAgICAgZ2FtZU92ZXIoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIC8vIFdhbGwgaGl0IGRldGVjdGlvblxuICAgICAgICBmdW5jdGlvbiBpc0hpdHRpbmdXYWxsKCl7XG4gICAgICAgICAgICBpZiAoc2hpcC54IDwgLTIgfHwgc2hpcC54ID4gY2FudmFzLndpZHRoIC0gMzUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIC8vIEdhdGUgaGl0IGRldGVjdGlvblxuICAgICAgICBmdW5jdGlvbiBpc0hpdHRpbmdHYXRlKCkge1xuICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgZ2F0ZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzSGl0dGluZ0xlZnRHYXRlKGkpIHx8IGlzSGl0dGluZ1JpZ2h0R2F0ZShpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZSA7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIC8vIExlZnQgZ2F0ZSBoaXQgZGV0ZWN0aW9uLlxuICAgICAgICBmdW5jdGlvbiBpc0hpdHRpbmdMZWZ0R2F0ZShpKSB7XG4gICAgICAgICAgICBpZiAoc2hpcC54IDwgZ2F0ZXNbaV0ubGVmdFggKyBnYXRlc1tpXS5sZWZ0V2lkdGggJiZcbiAgICAgICAgICAgICAgICBzaGlwLnggKyBzaGlwLndpZHRoID4gZ2F0ZXNbaV0ubGVmdFggJiZcbiAgICAgICAgICAgICAgICBzaGlwLnkgPCBnYXRlc1tpXS55ICsgZ2F0ZXNbaV0uaGVpZ2h0ICYmXG4gICAgICAgICAgICAgICAgc2hpcC55ICsgc2hpcC5oZWlnaHQgPiBnYXRlc1tpXS55KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICAvLyBSaWdodCBnYXRlIGhpdCBkZXRlY3Rpb24uXG4gICAgICAgIGZ1bmN0aW9uIGlzSGl0dGluZ1JpZ2h0R2F0ZShpKSB7XG4gICAgICAgICAgICBpZiAoc2hpcC54IDwgZ2F0ZXNbaV0ucmlnaHRYICsgZ2F0ZXNbaV0ucmlnaHRXaWR0aCAmJlxuICAgICAgICAgICAgICAgIHNoaXAueCArIHNoaXAud2lkdGggPiBnYXRlc1tpXS5yaWdodFggJiZcbiAgICAgICAgICAgICAgICBzaGlwLnkgPCBnYXRlc1tpXS55ICsgZ2F0ZXNbaV0uaGVpZ2h0ICYmXG4gICAgICAgICAgICAgICAgc2hpcC55ICsgc2hpcC5oZWlnaHQgPiBnYXRlc1tpXS55KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2FtZU92ZXIoKXtcbiAgICAgICAgICAgIGFsZXJ0KFwiR0FNRSBPVkVSXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZHJhd1Njb3JlKCkge1xuICAgICAgICAgICAgY3R4LmZvbnQgPSBcIjQ4cHggc2FucyBzZXJpZlwiO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHNjb3JlLCAyNzUsIDUwKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgXG4gICAgICAgIC8vIE1BSU4gR0FNRSBGVU5DVElPTlxuICAgICAgICBmdW5jdGlvbiBnYW1lRW5naW5lKCkge1xuICAgICAgICAgICAgaGl0RGV0ZWN0ZWQoKTtcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCApO1xuICAgICAgICAgICAgc2hpcC5kcmF3KCk7XG4gICAgICAgICAgICBkcmF3U2NvcmUoKTtcbiAgICAgICAgICAgIGNoZWNrR2F0ZSgpO1xuICAgICAgICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVFbmdpbmUpXG4gICAgICAgIH07XG4gICAgICAgIC8vIGdhbWVFbmdpbmUoKTtcbiAgICB9XG4gICAgKVxuXG5cbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/javascript/spaceship.js\n");

/***/ }),

/***/ "./src/object/gate.js":
/*!****************************!*\
  !*** ./src/object/gate.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Gate {\n    constructor(ctx) {\n        this.ctx = ctx;\n\n        this.vSpeed = 5;\n        this.gap = 200;\n\n        // Gate Widths\n        this.leftWidth = Math.floor(Math.random() * (300 - 50) + 50);\n        this.rightWidth = 600;\n\n        // Gate Xs\n        this.leftX = 0;\n        this.rightX = this.leftWidth + this.gap;\n\n        this.height = 60;\n        this.y = -60;\n        \n    };\n\n    draw(){\n        this.y += this.vSpeed;\n        this.ctx.beginPath();\n\n        // Left gate\n        this.ctx.rect(this.leftX, this.y, this.leftWidth, this.height);\n\n        // Right gate\n        this.ctx.rect(this.rightX, this.y, this.rightWidth, this.height);\n\n        this.ctx.fillStyle = \"blue\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gate);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0L2dhdGUuanM/ZDUzMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUkiLCJmaWxlIjoiLi9zcmMvb2JqZWN0L2dhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYXRlIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy52U3BlZWQgPSA1O1xuICAgICAgICB0aGlzLmdhcCA9IDIwMDtcblxuICAgICAgICAvLyBHYXRlIFdpZHRoc1xuICAgICAgICB0aGlzLmxlZnRXaWR0aCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgzMDAgLSA1MCkgKyA1MCk7XG4gICAgICAgIHRoaXMucmlnaHRXaWR0aCA9IDYwMDtcblxuICAgICAgICAvLyBHYXRlIFhzXG4gICAgICAgIHRoaXMubGVmdFggPSAwO1xuICAgICAgICB0aGlzLnJpZ2h0WCA9IHRoaXMubGVmdFdpZHRoICsgdGhpcy5nYXA7XG5cbiAgICAgICAgdGhpcy5oZWlnaHQgPSA2MDtcbiAgICAgICAgdGhpcy55ID0gLTYwO1xuICAgICAgICBcbiAgICB9O1xuXG4gICAgZHJhdygpe1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy52U3BlZWQ7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIC8vIExlZnQgZ2F0ZVxuICAgICAgICB0aGlzLmN0eC5yZWN0KHRoaXMubGVmdFgsIHRoaXMueSwgdGhpcy5sZWZ0V2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBSaWdodCBnYXRlXG4gICAgICAgIHRoaXMuY3R4LnJlY3QodGhpcy5yaWdodFgsIHRoaXMueSwgdGhpcy5yaWdodFdpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhdGU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/object/gate.js\n");

/***/ }),

/***/ "./src/object/ship.js":
/*!****************************!*\
  !*** ./src/object/ship.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Ship {\n    constructor(ctx){\n        this.ctx = ctx;\n        this.direction = 1;\n        this.x = 225;\n        this.y = 450;\n        this.height = 40;\n        this.width = 80;\n        this.hSpeed = 0;\n        this.acc = 1.5;\n        this.sprites = [159, 310, 460];\n        this.frameCount = 0;\n        this.options = {\n\n        }\n\n        this.addListeners();\n    };\n\n    draw(){\n        if (this.frameCount > 30) {\n            this.frameCount = 0;\n        } else {\n            this.frameCount += 1;\n        }\n\n        let spriteFrame = Math.floor(this.frameCount / 10);\n        this.physics();\n\n        this.x += this.hSpeed;\n        const helicopter = new Image();\n        helicopter.src = './src/assets/helicopter-spritesheet.png';\n        this.spriteIndex === 2 ? this.spriteIndex = 0 : this.spriteIndex++ ;\n        helicopter.onload = () => {\n            this.ctx.drawImage(helicopter, \n                                0, \n                                this.sprites[spriteFrame], \n                                345,\n                                135,\n                                this.x, \n                                this.y, \n                                this.width, \n                                this.height);\n        };\n    };\n\n    addListeners(){\n        document.addEventListener('click', this.handleClick.bind(this));\n    };\n\n    handleClick(){\n        console.log(this.direction);\n        this.direction = this.direction * -1;\n    };\n\n    physics(){\n            this.hSpeed += this.acc * this.direction;\n    }; \n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ship);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0L3NoaXAuanM/Yjc5YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNOztBQUVBOztBQUVlLG1FQUFJIiwiZmlsZSI6Ii4vc3JjL29iamVjdC9zaGlwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGN0eCl7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgIHRoaXMueCA9IDIyNTtcbiAgICAgICAgdGhpcy55ID0gNDUwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDQwO1xuICAgICAgICB0aGlzLndpZHRoID0gODA7XG4gICAgICAgIHRoaXMuaFNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5hY2MgPSAxLjU7XG4gICAgICAgIHRoaXMuc3ByaXRlcyA9IFsxNTksIDMxMCwgNDYwXTtcbiAgICAgICAgdGhpcy5mcmFtZUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH07XG5cbiAgICBkcmF3KCl7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lQ291bnQgPiAzMCkge1xuICAgICAgICAgICAgdGhpcy5mcmFtZUNvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVDb3VudCArPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNwcml0ZUZyYW1lID0gTWF0aC5mbG9vcih0aGlzLmZyYW1lQ291bnQgLyAxMCk7XG4gICAgICAgIHRoaXMucGh5c2ljcygpO1xuXG4gICAgICAgIHRoaXMueCArPSB0aGlzLmhTcGVlZDtcbiAgICAgICAgY29uc3QgaGVsaWNvcHRlciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBoZWxpY29wdGVyLnNyYyA9ICcuL3NyYy9hc3NldHMvaGVsaWNvcHRlci1zcHJpdGVzaGVldC5wbmcnO1xuICAgICAgICB0aGlzLnNwcml0ZUluZGV4ID09PSAyID8gdGhpcy5zcHJpdGVJbmRleCA9IDAgOiB0aGlzLnNwcml0ZUluZGV4KysgO1xuICAgICAgICBoZWxpY29wdGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShoZWxpY29wdGVyLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlc1tzcHJpdGVGcmFtZV0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzNDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEzNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgYWRkTGlzdGVuZXJzKCl7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlQ2xpY2soKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uICogLTE7XG4gICAgfTtcblxuICAgIHBoeXNpY3MoKXtcbiAgICAgICAgICAgIHRoaXMuaFNwZWVkICs9IHRoaXMuYWNjICogdGhpcy5kaXJlY3Rpb247XG4gICAgfTsgXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/object/ship.js\n");

/***/ })

/******/ });