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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_RemoteControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/RemoteControl */ \"./src/ts/model/RemoteControl.ts\");\n\nlet rc = new _model_RemoteControl__WEBPACK_IMPORTED_MODULE_0__[\"RemoteControl\"]();\nrc.startReco();\n\n\n//# sourceURL=webpack:///./src/ts/index.ts?");

/***/ }),

/***/ "./src/ts/model/RemoteControl.ts":
/*!***************************************!*\
  !*** ./src/ts/model/RemoteControl.ts ***!
  \***************************************/
/*! exports provided: RemoteControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RemoteControl\", function() { return RemoteControl; });\n/* harmony import */ var _comends_Comends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comends/Comends */ \"./src/ts/model/comends/Comends.ts\");\n\nclass RemoteControl {\n    /**\n     * startReco\n     */\n    startReco() {\n        const video = document.querySelector('#video');\n        const comends = new _comends_Comends__WEBPACK_IMPORTED_MODULE_0__[\"Comends\"](video);\n        // @ts-ignore: Unreachable code error\n        const reco = new webkitSpeechRecognition();\n        reco.continous = true;\n        reco.interimResults = true;\n        reco.lang = \"en-US\";\n        reco.continous = true;\n        reco.start();\n        reco.onresult = e => {\n            for (let i = e.resultIndex; i < e.results.length; ++i) {\n                if (e.results[i].isFinal) {\n                    if (e.results[i][0].transcript.trim() == 'play') {\n                        comends.play();\n                    }\n                    else if (e.results[i][0].transcript.trim() == 'stop') {\n                        comends.stop();\n                    }\n                    else if (e.results[i][0].transcript.trim() == 'mute') {\n                        comends.mute();\n                    }\n                    else if (e.results[i][0].transcript.trim() == 'unmute') {\n                        comends.unmute();\n                    }\n                    else {\n                        reco.play();\n                    }\n                    // test\n                    console.info(`You said: ${e.results[i][0].transcript}`);\n                }\n            }\n        };\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/model/RemoteControl.ts?");

/***/ }),

/***/ "./src/ts/model/comends/Comends.ts":
/*!*****************************************!*\
  !*** ./src/ts/model/comends/Comends.ts ***!
  \*****************************************/
/*! exports provided: Comends */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Comends\", function() { return Comends; });\nclass Comends {\n    constructor(element) {\n        this.mediaElement = element;\n    }\n    /**\n     * play\n     */\n    play() {\n        this.mediaElement.play();\n    }\n    /**\n     * stop\n     */\n    stop() {\n        this.mediaElement.pause();\n        this.mediaElement.currentTime = 0;\n    }\n    /**\n     * mute\n     */\n    mute() {\n        this.mediaElement.muted = true;\n    }\n    /**\n     * unmute\n     */\n    unmute() {\n        this.mediaElement.muted = false;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/model/comends/Comends.ts?");

/***/ })

/******/ });