/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/scripts/customizer"],{

/***/ "./resources/scripts/customizer.js":
/*!*****************************************!*\
  !*** ./resources/scripts/customizer.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"jquery\");\n/**\n * This file allows you to add functionality to the Theme Customizer\n * live preview. jQuery is readily available.\n *\n * {@link https://codex.wordpress.org/Theme_Customization_API}\n */\n\n/**\n * Change the blog name value.\n *\n * @param {string} value\n */\nwp.customize('blogname', function (value) {\n  value.bind(function (to) {\n    return $('.brand').text(to);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc2NyaXB0cy9jdXN0b21pemVyLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxFQUFFLENBQUZBLFNBQUFBLENBQUFBLFVBQUFBLEVBQXlCLGlCQUFTO0FBQ2hDQyxFQUFBQSxLQUFLLENBQUxBLElBQUFBLENBQVcsY0FBRTtBQUFBLFdBQUlDLENBQUMsQ0FBREEsUUFBQyxDQUFEQSxDQUFBQSxJQUFBQSxDQUFKLEVBQUlBLENBQUo7QUFBYkQsR0FBQUE7QUFERkQsQ0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2NyaXB0cy9jdXN0b21pemVyLmpzPzg0ODMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGZpbGUgYWxsb3dzIHlvdSB0byBhZGQgZnVuY3Rpb25hbGl0eSB0byB0aGUgVGhlbWUgQ3VzdG9taXplclxuICogbGl2ZSBwcmV2aWV3LiBqUXVlcnkgaXMgcmVhZGlseSBhdmFpbGFibGUuXG4gKlxuICoge0BsaW5rIGh0dHBzOi8vY29kZXgud29yZHByZXNzLm9yZy9UaGVtZV9DdXN0b21pemF0aW9uX0FQSX1cbiAqL1xuXG4vKipcbiAqIENoYW5nZSB0aGUgYmxvZyBuYW1lIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICovXG53cC5jdXN0b21pemUoJ2Jsb2duYW1lJywgdmFsdWUgPT4ge1xuICB2YWx1ZS5iaW5kKHRvID0+ICQoJy5icmFuZCcpLnRleHQodG8pKTtcbn0pO1xuIl0sIm5hbWVzIjpbIndwIiwidmFsdWUiLCIkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/scripts/customizer.js\n");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["jQuery"];

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./resources/scripts/customizer.js"));
/******/ }
]);