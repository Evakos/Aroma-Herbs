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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @splidejs/splide */ \"./node_modules/@splidejs/splide/dist/js/splide.esm.js\");\n/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_splidejs_splide__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * External Dependencies\n */\n\n/**\n * Splide Imports\n */\n\n //recipe Slider\n\nvar recipeSlide = new (_splidejs_splide__WEBPACK_IMPORTED_MODULE_1___default())('#splide-recipe-slider', {\n  type: 'loop',\n  perPage: 1,\n  breakpoints: {\n    640: {\n      arrows: false,\n      pagination: true\n    }\n  },\n  classes: {\n    // Add classes for arrows.\n    arrows: 'splide__arrows',\n    arrow: 'splide__arrow',\n    prev: 'splide__arrow--prev xl:left-60',\n    next: 'splide__arrow--next xl:right-60',\n    // Add classes for pagination.\n    pagination: 'splide__pagination',\n    // container\n    page: 'splide__pagination__page w-4 h-4 m-1' // each button\n\n  }\n}).mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc2NyaXB0cy9yZWNpcGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0M7QUFJRDtBQUNBO0FBQ0E7O0NBSUM7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHLHVGQUFxQztBQUN4REMsRUFBQUEsSUFBSSxFQURvRDtBQUV4REMsRUFBQUEsT0FBTyxFQUZpRDtBQUd4REMsRUFBQUEsV0FBVyxFQUFFO0FBQ1osU0FBSztBQUNIQyxNQUFBQSxNQUFNLEVBREg7QUFFSEMsTUFBQUEsVUFBVSxFQUFFO0FBRlQ7QUFETyxHQUgyQztBQVN4REMsRUFBQUEsT0FBTyxFQUFFO0FBQ1I7QUFDQUYsSUFBQUEsTUFBTSxFQUZFO0FBR1JHLElBQUFBLEtBQUssRUFIRztBQUlSQyxJQUFBQSxJQUFJLEVBSkk7QUFLUkMsSUFBQUEsSUFBSSxFQUxJO0FBT1I7QUFDQUosSUFBQUEsVUFBVSxFQVJGO0FBUTBCO0FBQ2xDSyxJQUFBQSxJQUFJLEVBVEksdUNBUzRDOztBQVQ1QztBQVQrQyxDQUFyQyxFQUFwQixLQUFvQixFQUFwQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zY3JpcHRzL3JlY2lwZXMuanM/ZTY5YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEV4dGVybmFsIERlcGVuZGVuY2llc1xuICovXG4gaW1wb3J0IFwianF1ZXJ5XCI7XG5cblxuXG4vKipcbiAqIFNwbGlkZSBJbXBvcnRzXG4gKi9cbiBpbXBvcnQgU3BsaWRlIGZyb20gJ0BzcGxpZGVqcy9zcGxpZGUnO1xuXG5cbiAvL3JlY2lwZSBTbGlkZXJcbiBjb25zdCByZWNpcGVTbGlkZSA9IG5ldyBTcGxpZGUoICcjc3BsaWRlLXJlY2lwZS1zbGlkZXInLCB7XG4gIHR5cGUgICA6ICdsb29wJyxcbiAgcGVyUGFnZTogMSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgIDY0MDoge1xuICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICBwYWdpbmF0aW9uOiB0cnVlLFxuICAgfSxcbiB9LFxuICBjbGFzc2VzOiB7XG4gICAvLyBBZGQgY2xhc3NlcyBmb3IgYXJyb3dzLlxuICAgYXJyb3dzOiAnc3BsaWRlX19hcnJvd3MnLFxuICAgYXJyb3cgOiAnc3BsaWRlX19hcnJvdycsXG4gICBwcmV2ICA6ICdzcGxpZGVfX2Fycm93LS1wcmV2IHhsOmxlZnQtNjAnLFxuICAgbmV4dCAgOiAnc3BsaWRlX19hcnJvdy0tbmV4dCB4bDpyaWdodC02MCcsXG4gICBcbiAgIC8vIEFkZCBjbGFzc2VzIGZvciBwYWdpbmF0aW9uLlxuICAgcGFnaW5hdGlvbjogJ3NwbGlkZV9fcGFnaW5hdGlvbicsIC8vIGNvbnRhaW5lclxuICAgcGFnZSAgICAgIDogJ3NwbGlkZV9fcGFnaW5hdGlvbl9fcGFnZSB3LTQgaC00IG0tMScsIC8vIGVhY2ggYnV0dG9uXG4gfSxcbiAgXG59ICkubW91bnQoKTtcblxuIl0sIm5hbWVzIjpbInJlY2lwZVNsaWRlIiwidHlwZSIsInBlclBhZ2UiLCJicmVha3BvaW50cyIsImFycm93cyIsInBhZ2luYXRpb24iLCJjbGFzc2VzIiwiYXJyb3ciLCJwcmV2IiwibmV4dCIsInBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/scripts/recipes.js\n");

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