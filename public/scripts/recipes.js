"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/scripts/recipes"],{

/***/ "./resources/scripts/recipes.js":
/*!**************************************!*\
  !*** ./resources/scripts/recipes.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @splidejs/splide */ \"./node_modules/@splidejs/splide/dist/js/splide.esm.js\");\n/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_splidejs_splide__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * External Dependencies\n */\n\n/**\n * Splide Imports\n */\n\n //recipe Slider\n\nnew (_splidejs_splide__WEBPACK_IMPORTED_MODULE_1___default())('#splide-recipe-slider', {\n  type: 'loop',\n  perPage: 1,\n  breakpoints: {\n    640: {\n      arrows: false,\n      pagination: true\n    }\n  },\n  classes: {\n    // Add classes for arrows.\n    arrows: 'splide__arrows',\n    arrow: 'splide__arrow',\n    prev: 'splide__arrow--prev xl:left-60',\n    next: 'splide__arrow--next xl:right-60',\n    // Add classes for pagination.\n    pagination: 'splide__pagination',\n    // container\n    page: 'splide__pagination__page w-4 h-4 m-1' // each button\n\n  }\n}).mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc2NyaXB0cy9yZWNpcGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0M7QUFJRDtBQUNBO0FBQ0E7O0NBSUM7O0FBQ0EsdUZBQXFDO0FBQ3BDQSxFQUFBQSxJQUFJLEVBRGdDO0FBRXBDQyxFQUFBQSxPQUFPLEVBRjZCO0FBR3BDQyxFQUFBQSxXQUFXLEVBQUU7QUFDWixTQUFLO0FBQ0hDLE1BQUFBLE1BQU0sRUFESDtBQUVIQyxNQUFBQSxVQUFVLEVBQUU7QUFGVDtBQURPLEdBSHVCO0FBU3BDQyxFQUFBQSxPQUFPLEVBQUU7QUFDUjtBQUNBRixJQUFBQSxNQUFNLEVBRkU7QUFHUkcsSUFBQUEsS0FBSyxFQUhHO0FBSVJDLElBQUFBLElBQUksRUFKSTtBQUtSQyxJQUFBQSxJQUFJLEVBTEk7QUFPUjtBQUNBSixJQUFBQSxVQUFVLEVBUkY7QUFRMEI7QUFDbENLLElBQUFBLElBQUksRUFUSSx1Q0FTNEM7O0FBVDVDO0FBVDJCLENBQXJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NjcmlwdHMvcmVjaXBlcy5qcz9lNjliIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRXh0ZXJuYWwgRGVwZW5kZW5jaWVzXG4gKi9cbiBpbXBvcnQgXCJqcXVlcnlcIjtcblxuXG5cbi8qKlxuICogU3BsaWRlIEltcG9ydHNcbiAqL1xuIGltcG9ydCBTcGxpZGUgZnJvbSAnQHNwbGlkZWpzL3NwbGlkZSc7XG5cblxuIC8vcmVjaXBlIFNsaWRlclxuIG5ldyBTcGxpZGUoICcjc3BsaWRlLXJlY2lwZS1zbGlkZXInLCB7XG4gIHR5cGUgICA6ICdsb29wJyxcbiAgcGVyUGFnZTogMSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgIDY0MDoge1xuICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICBwYWdpbmF0aW9uOiB0cnVlLFxuICAgfSxcbiB9LFxuICBjbGFzc2VzOiB7XG4gICAvLyBBZGQgY2xhc3NlcyBmb3IgYXJyb3dzLlxuICAgYXJyb3dzOiAnc3BsaWRlX19hcnJvd3MnLFxuICAgYXJyb3cgOiAnc3BsaWRlX19hcnJvdycsXG4gICBwcmV2ICA6ICdzcGxpZGVfX2Fycm93LS1wcmV2IHhsOmxlZnQtNjAnLFxuICAgbmV4dCAgOiAnc3BsaWRlX19hcnJvdy0tbmV4dCB4bDpyaWdodC02MCcsXG4gICBcbiAgIC8vIEFkZCBjbGFzc2VzIGZvciBwYWdpbmF0aW9uLlxuICAgcGFnaW5hdGlvbjogJ3NwbGlkZV9fcGFnaW5hdGlvbicsIC8vIGNvbnRhaW5lclxuICAgcGFnZSAgICAgIDogJ3NwbGlkZV9fcGFnaW5hdGlvbl9fcGFnZSB3LTQgaC00IG0tMScsIC8vIGVhY2ggYnV0dG9uXG4gfSxcbiAgXG59ICkubW91bnQoKTtcblxuIl0sIm5hbWVzIjpbInR5cGUiLCJwZXJQYWdlIiwiYnJlYWtwb2ludHMiLCJhcnJvd3MiLCJwYWdpbmF0aW9uIiwiY2xhc3NlcyIsImFycm93IiwicHJldiIsIm5leHQiLCJwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/scripts/recipes.js\n");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module) {

module.exports = window["jQuery"];

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["/scripts/vendor"], function() { return __webpack_exec__("./resources/scripts/recipes.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);