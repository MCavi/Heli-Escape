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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _object_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object/ship */ \"./src/object/ship.js\");\n/* harmony import */ var _object_gate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object/gate */ \"./src/object/gate.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    \n    console.log(\"hello world\");\n\n    // Firebase Config\n    const firebaseConfig = {\n        apiKey: \"AIzaSyDMyAUaLi0HoaZsTsfFUJ7v0KjPSM5iERc\",\n        authDomain: \"heli-escape.firebaseapp.com\",\n        databaseURL: \"https://heli-escape.firebaseio.com\",\n        projectId: \"heli-escape\",\n        storageBucket: \"heli-escape.appspot.com\",\n        messagingSenderId: \"83868845549\"\n    };\n    firebase.initializeApp(firebaseConfig);    \n\n    \n    const database = firebase.database();\n    const ref = database.ref('scores');\n    // Push to database\n    // const data = {\n    //     name: \"MAC\",\n    //     score: 44\n    // }\n    \n    // ref.push(data);\n\n    // Canvas\n    const canvas = document.getElementById('canvas');\n    const ctx = canvas.getContext('2d');\n\n    const ship = new _object_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n   \n    document.getElementById('startButton').addEventListener('keydown', () => {\n\n        const gates = [];\n        gates[0] = new _object_gate__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n        const startButton = document.getElementById('startButton');\n        startButton.style.display = 'none';\n        \n        // const interval = setInterval(gameEngine, 30);\n        \n        let score = 0;\n\n        // Adds new gate once previous gate reaches 400px.\n        // Removes gate once it leaves the bounds of the canvas.\n        function checkGate(){\n            for (let i = 0; i < gates.length; i++) {\n                gates[i].draw();\n            };\n            if (gates[0].y == 300) {\n                gates.push(new _object_gate__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx));\n            };\n            if (gates[0].y == 630) {\n                gates.shift();\n            };\n        };\n    \n        // MAIN HIT DETECTION\n        function hitDetected(){\n            // debugger\n            if ( ship.y == gates[0].y ) {\n                score += 1;\n            };\n            if ( isHittingWall() || isHittingGate() ) {\n                gameOver();\n            };\n        };\n    \n        // Wall hit detection\n        function isHittingWall(){\n            if (ship.x < -2 || ship.x > canvas.width - 35) {\n                return true;\n            };\n        };\n    \n        // Gate hit detection\n        function isHittingGate() {\n            for ( let i = 0; i < gates.length; i++ ) {\n                if (isHittingLeftGate(i) || isHittingRightGate(i)) {\n                    return true ;\n                };\n            };\n        };\n    \n        // Left gate hit detection.\n        function isHittingLeftGate(i) {\n            if (ship.x < gates[i].leftX + gates[i].leftWidth &&\n                ship.x + ship.width > gates[i].leftX &&\n                ship.y < gates[i].y + gates[i].height &&\n                ship.y + ship.height > gates[i].y) {\n                return true;\n            };\n        };\n    \n        // Right gate hit detection.\n        function isHittingRightGate(i) {\n            if (ship.x < gates[i].rightX + gates[i].rightWidth &&\n                ship.x + ship.width > gates[i].rightX &&\n                ship.y < gates[i].y + gates[i].height &&\n                ship.y + ship.height > gates[i].y) {\n                return true;\n            }\n        }\n    \n        function gameOver(){\n            alert(\"GAME OVER\");\n            document.location.reload();\n            clearInterval(interval);\n        };\n    \n        function drawScore() {\n            ctx.font = \"48px 'Chewy', cursive\";\n            ctx.fillStyle = \"white\";\n            ctx.fillText(score, 275, 50);\n        };\n        \n    \n        // MAIN GAME FUNCTION\n        function gameEngine() {\n            hitDetected();\n            ctx.clearRect( 0, 0, canvas.width, canvas.height );\n            checkGate();\n            drawScore();\n            ship.draw();\n            requestAnimationFrame(gameEngine)\n        };\n        gameEngine();\n    }\n    )\n\n\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9zcGFjZXNoaXAuanM/N2EwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDQTs7QUFFbEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsb0RBQUk7O0FBRXpCOztBQUVBO0FBQ0EsdUJBQXVCLG9EQUFJO0FBQzNCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isb0RBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDIiwiZmlsZSI6Ii4vc3JjL2phdmFzY3JpcHQvc3BhY2VzaGlwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoaXAgZnJvbSAnLi4vb2JqZWN0L3NoaXAnO1xuaW1wb3J0IEdhdGUgZnJvbSAnLi4vb2JqZWN0L2dhdGUnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGRcIik7XG5cbiAgICAvLyBGaXJlYmFzZSBDb25maWdcbiAgICBjb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgICAgICAgYXBpS2V5OiBcIkFJemFTeURNeUFVYUxpMEhvYVpzVHNmRlVKN3YwS2pQU001aUVSY1wiLFxuICAgICAgICBhdXRoRG9tYWluOiBcImhlbGktZXNjYXBlLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgICAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2hlbGktZXNjYXBlLmZpcmViYXNlaW8uY29tXCIsXG4gICAgICAgIHByb2plY3RJZDogXCJoZWxpLWVzY2FwZVwiLFxuICAgICAgICBzdG9yYWdlQnVja2V0OiBcImhlbGktZXNjYXBlLmFwcHNwb3QuY29tXCIsXG4gICAgICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjgzODY4ODQ1NTQ5XCJcbiAgICB9O1xuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpOyAgICBcblxuICAgIFxuICAgIGNvbnN0IGRhdGFiYXNlID0gZmlyZWJhc2UuZGF0YWJhc2UoKTtcbiAgICBjb25zdCByZWYgPSBkYXRhYmFzZS5yZWYoJ3Njb3JlcycpO1xuICAgIC8vIFB1c2ggdG8gZGF0YWJhc2VcbiAgICAvLyBjb25zdCBkYXRhID0ge1xuICAgIC8vICAgICBuYW1lOiBcIk1BQ1wiLFxuICAgIC8vICAgICBzY29yZTogNDRcbiAgICAvLyB9XG4gICAgXG4gICAgLy8gcmVmLnB1c2goZGF0YSk7XG5cbiAgICAvLyBDYW52YXNcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoY3R4KTtcbiAgIFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgZ2F0ZXMgPSBbXTtcbiAgICAgICAgZ2F0ZXNbMF0gPSBuZXcgR2F0ZShjdHgpO1xuICAgICAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEJ1dHRvbicpO1xuICAgICAgICBzdGFydEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBcbiAgICAgICAgLy8gY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChnYW1lRW5naW5lLCAzMCk7XG4gICAgICAgIFxuICAgICAgICBsZXQgc2NvcmUgPSAwO1xuXG4gICAgICAgIC8vIEFkZHMgbmV3IGdhdGUgb25jZSBwcmV2aW91cyBnYXRlIHJlYWNoZXMgNDAwcHguXG4gICAgICAgIC8vIFJlbW92ZXMgZ2F0ZSBvbmNlIGl0IGxlYXZlcyB0aGUgYm91bmRzIG9mIHRoZSBjYW52YXMuXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrR2F0ZSgpe1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGdhdGVzW2ldLmRyYXcoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZ2F0ZXNbMF0ueSA9PSAzMDApIHtcbiAgICAgICAgICAgICAgICBnYXRlcy5wdXNoKG5ldyBHYXRlKGN0eCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChnYXRlc1swXS55ID09IDYzMCkge1xuICAgICAgICAgICAgICAgIGdhdGVzLnNoaWZ0KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICAvLyBNQUlOIEhJVCBERVRFQ1RJT05cbiAgICAgICAgZnVuY3Rpb24gaGl0RGV0ZWN0ZWQoKXtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICBpZiAoIHNoaXAueSA9PSBnYXRlc1swXS55ICkge1xuICAgICAgICAgICAgICAgIHNjb3JlICs9IDE7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCBpc0hpdHRpbmdXYWxsKCkgfHwgaXNIaXR0aW5nR2F0ZSgpICkge1xuICAgICAgICAgICAgICAgIGdhbWVPdmVyKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICAvLyBXYWxsIGhpdCBkZXRlY3Rpb25cbiAgICAgICAgZnVuY3Rpb24gaXNIaXR0aW5nV2FsbCgpe1xuICAgICAgICAgICAgaWYgKHNoaXAueCA8IC0yIHx8IHNoaXAueCA+IGNhbnZhcy53aWR0aCAtIDM1KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICAvLyBHYXRlIGhpdCBkZXRlY3Rpb25cbiAgICAgICAgZnVuY3Rpb24gaXNIaXR0aW5nR2F0ZSgpIHtcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGdhdGVzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgICAgIGlmIChpc0hpdHRpbmdMZWZ0R2F0ZShpKSB8fCBpc0hpdHRpbmdSaWdodEdhdGUoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWUgO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICAvLyBMZWZ0IGdhdGUgaGl0IGRldGVjdGlvbi5cbiAgICAgICAgZnVuY3Rpb24gaXNIaXR0aW5nTGVmdEdhdGUoaSkge1xuICAgICAgICAgICAgaWYgKHNoaXAueCA8IGdhdGVzW2ldLmxlZnRYICsgZ2F0ZXNbaV0ubGVmdFdpZHRoICYmXG4gICAgICAgICAgICAgICAgc2hpcC54ICsgc2hpcC53aWR0aCA+IGdhdGVzW2ldLmxlZnRYICYmXG4gICAgICAgICAgICAgICAgc2hpcC55IDwgZ2F0ZXNbaV0ueSArIGdhdGVzW2ldLmhlaWdodCAmJlxuICAgICAgICAgICAgICAgIHNoaXAueSArIHNoaXAuaGVpZ2h0ID4gZ2F0ZXNbaV0ueSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgLy8gUmlnaHQgZ2F0ZSBoaXQgZGV0ZWN0aW9uLlxuICAgICAgICBmdW5jdGlvbiBpc0hpdHRpbmdSaWdodEdhdGUoaSkge1xuICAgICAgICAgICAgaWYgKHNoaXAueCA8IGdhdGVzW2ldLnJpZ2h0WCArIGdhdGVzW2ldLnJpZ2h0V2lkdGggJiZcbiAgICAgICAgICAgICAgICBzaGlwLnggKyBzaGlwLndpZHRoID4gZ2F0ZXNbaV0ucmlnaHRYICYmXG4gICAgICAgICAgICAgICAgc2hpcC55IDwgZ2F0ZXNbaV0ueSArIGdhdGVzW2ldLmhlaWdodCAmJlxuICAgICAgICAgICAgICAgIHNoaXAueSArIHNoaXAuaGVpZ2h0ID4gZ2F0ZXNbaV0ueSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdhbWVPdmVyKCl7XG4gICAgICAgICAgICBhbGVydChcIkdBTUUgT1ZFUlwiKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGRyYXdTY29yZSgpIHtcbiAgICAgICAgICAgIGN0eC5mb250ID0gXCI0OHB4ICdDaGV3eScsIGN1cnNpdmVcIjtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoc2NvcmUsIDI3NSwgNTApO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICBcbiAgICAgICAgLy8gTUFJTiBHQU1FIEZVTkNUSU9OXG4gICAgICAgIGZ1bmN0aW9uIGdhbWVFbmdpbmUoKSB7XG4gICAgICAgICAgICBoaXREZXRlY3RlZCgpO1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCggMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0ICk7XG4gICAgICAgICAgICBjaGVja0dhdGUoKTtcbiAgICAgICAgICAgIGRyYXdTY29yZSgpO1xuICAgICAgICAgICAgc2hpcC5kcmF3KCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUVuZ2luZSlcbiAgICAgICAgfTtcbiAgICAgICAgZ2FtZUVuZ2luZSgpO1xuICAgIH1cbiAgICApXG5cblxufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/javascript/spaceship.js\n");

/***/ }),

/***/ "./src/object/gate.js":
/*!****************************!*\
  !*** ./src/object/gate.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Gate {\n    constructor(ctx) {\n        this.ctx = ctx;\n\n        this.vSpeed = 5;\n        this.gap = 250;\n\n        // Gate Widths\n        this.leftWidth = Math.floor(Math.random() * (300 - 50) + 10);\n        this.rightWidth = 600;\n\n        // Gate Xs\n        this.leftX = 0;\n        this.rightX = this.leftWidth + this.gap;\n\n        this.height = 60;\n        this.y = -60;\n        \n    };\n\n    draw(){\n        this.y += this.vSpeed;\n        this.ctx.beginPath();\n\n        // Left gate\n        this.ctx.rect(this.leftX, this.y, this.leftWidth, this.height);\n\n        // Right gate\n        this.ctx.rect(this.rightX, this.y, this.rightWidth, this.height);\n\n        this.ctx.fillStyle = \"rgb(86,84,106)\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gate);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0L2dhdGUuanM/ZDUzMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUkiLCJmaWxlIjoiLi9zcmMvb2JqZWN0L2dhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYXRlIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy52U3BlZWQgPSA1O1xuICAgICAgICB0aGlzLmdhcCA9IDI1MDtcblxuICAgICAgICAvLyBHYXRlIFdpZHRoc1xuICAgICAgICB0aGlzLmxlZnRXaWR0aCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgzMDAgLSA1MCkgKyAxMCk7XG4gICAgICAgIHRoaXMucmlnaHRXaWR0aCA9IDYwMDtcblxuICAgICAgICAvLyBHYXRlIFhzXG4gICAgICAgIHRoaXMubGVmdFggPSAwO1xuICAgICAgICB0aGlzLnJpZ2h0WCA9IHRoaXMubGVmdFdpZHRoICsgdGhpcy5nYXA7XG5cbiAgICAgICAgdGhpcy5oZWlnaHQgPSA2MDtcbiAgICAgICAgdGhpcy55ID0gLTYwO1xuICAgICAgICBcbiAgICB9O1xuXG4gICAgZHJhdygpe1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy52U3BlZWQ7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIC8vIExlZnQgZ2F0ZVxuICAgICAgICB0aGlzLmN0eC5yZWN0KHRoaXMubGVmdFgsIHRoaXMueSwgdGhpcy5sZWZ0V2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgICAgICAvLyBSaWdodCBnYXRlXG4gICAgICAgIHRoaXMuY3R4LnJlY3QodGhpcy5yaWdodFgsIHRoaXMueSwgdGhpcy5yaWdodFdpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2IoODYsODQsMTA2KVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYXRlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/object/gate.js\n");

/***/ }),

/***/ "./src/object/ship.js":
/*!****************************!*\
  !*** ./src/object/ship.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nclass Ship {\n    constructor(ctx){\n        this.ctx = ctx;\n        this.direction = 1;\n        this.x = 225;\n        this.y = 450;\n        this.height = 40;\n        this.width = 90;\n        this.hSpeed = 0;\n        this.acc = .6;\n        this.sprites = [159, 310, 460];\n        this.frameCount = 0;\n        this.tilt = 0;\n        this.helicopter = new Image();\n        this.helicopter.src = './src/assets/helicopter-spritesheet.png';\n        this.addListeners();\n    };\n\n    draw(){\n        if (this.frameCount > 10) {\n            this.frameCount = 0;\n            this.spriteIndex === 2 ? this.spriteIndex = 0 : this.spriteIndex++;\n        } else {\n            this.frameCount += 1;\n        }\n\n        let spriteFrame = Math.floor(this.frameCount / 10);\n        this.physics();\n\n        this.x += this.hSpeed;\n        \n        // helicopter.onload = () => {\n            this.ctx.drawImage(this.helicopter, \n                                0, \n                                this.sprites[spriteFrame], \n                                // 159,\n                                345,\n                                135,\n                                this.x, \n                                this.y, \n                                this.width, \n                                this.height);\n        // };\n    };\n\n    addListeners(){\n        document.addEventListener('click', this.handleClick.bind(this));\n        document.addEventListener('keydown', this.handleKeyDown.bind(this));\n    };\n\n    handleClick(){\n        this.direction = this.direction * -1;\n    };\n\n    handleKeyDown(e){\n        if (e.key == \"space\" || e.key == \" \") {\n            this.direction = this.direction * -1;\n        };\n    };\n\n    physics(){\n            this.hSpeed += this.acc * this.direction;\n    }; \n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ship);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0L3NoaXAuanM/Yjc5YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTTs7QUFFQTs7QUFFZSxtRUFBSSIsImZpbGUiOiIuL3NyYy9vYmplY3Qvc2hpcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpe1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAxO1xuICAgICAgICB0aGlzLnggPSAyMjU7XG4gICAgICAgIHRoaXMueSA9IDQ1MDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA0MDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDkwO1xuICAgICAgICB0aGlzLmhTcGVlZCA9IDA7XG4gICAgICAgIHRoaXMuYWNjID0gLjY7XG4gICAgICAgIHRoaXMuc3ByaXRlcyA9IFsxNTksIDMxMCwgNDYwXTtcbiAgICAgICAgdGhpcy5mcmFtZUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy50aWx0ID0gMDtcbiAgICAgICAgdGhpcy5oZWxpY29wdGVyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuaGVsaWNvcHRlci5zcmMgPSAnLi9zcmMvYXNzZXRzL2hlbGljb3B0ZXItc3ByaXRlc2hlZXQucG5nJztcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9O1xuXG4gICAgZHJhdygpe1xuICAgICAgICBpZiAodGhpcy5mcmFtZUNvdW50ID4gMTApIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVDb3VudCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZUluZGV4ID09PSAyID8gdGhpcy5zcHJpdGVJbmRleCA9IDAgOiB0aGlzLnNwcml0ZUluZGV4Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lQ291bnQgKz0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzcHJpdGVGcmFtZSA9IE1hdGguZmxvb3IodGhpcy5mcmFtZUNvdW50IC8gMTApO1xuICAgICAgICB0aGlzLnBoeXNpY3MoKTtcblxuICAgICAgICB0aGlzLnggKz0gdGhpcy5oU3BlZWQ7XG4gICAgICAgIFxuICAgICAgICAvLyBoZWxpY29wdGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmhlbGljb3B0ZXIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVzW3Nwcml0ZUZyYW1lXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDE1OSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzQ1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2lkdGgsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCk7XG4gICAgICAgIC8vIH07XG4gICAgfTtcblxuICAgIGFkZExpc3RlbmVycygpe1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKSk7XG4gICAgfTtcblxuICAgIGhhbmRsZUNsaWNrKCl7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb24gKiAtMTtcbiAgICB9O1xuXG4gICAgaGFuZGxlS2V5RG93bihlKXtcbiAgICAgICAgaWYgKGUua2V5ID09IFwic3BhY2VcIiB8fCBlLmtleSA9PSBcIiBcIikge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbiAqIC0xO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBwaHlzaWNzKCl7XG4gICAgICAgICAgICB0aGlzLmhTcGVlZCArPSB0aGlzLmFjYyAqIHRoaXMuZGlyZWN0aW9uO1xuICAgIH07IFxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/object/ship.js\n");

/***/ })

/******/ });