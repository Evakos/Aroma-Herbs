/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/scripts/recipies"],{

/***/ "./resources/scripts/recipies.js":
/*!***************************************!*\
  !*** ./resources/scripts/recipies.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @splidejs/splide */ \"./node_modules/@splidejs/splide/dist/js/splide.esm.js\");\n/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_splidejs_splide__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Splide Imports\n */\n //recipe Slider\n\nnew (_splidejs_splide__WEBPACK_IMPORTED_MODULE_0___default())('#splide-recipe-slider', {\n  type: 'loop',\n  perPage: 1,\n  breakpoints: {\n    640: {\n      arrows: false,\n      pagination: true\n    }\n  },\n  classes: {\n    // Add classes for arrows.\n    arrows: 'splide__arrows your-class-arrows',\n    arrow: 'splide__arrow your-class-arrow',\n    prev: 'splide__arrow--prev left-60',\n    next: 'splide__arrow--next right-60',\n    // Add classes for pagination.\n    pagination: 'splide__pagination relative',\n    // container\n    page: 'splide__pagination__page w-4 h-4 m-1' // each button\n\n  }\n}).mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2NyaXB0cy9yZWNpcGllcy5qcz84MWVhIl0sIm5hbWVzIjpbInR5cGUiLCJwZXJQYWdlIiwiYnJlYWtwb2ludHMiLCJhcnJvd3MiLCJwYWdpbmF0aW9uIiwiY2xhc3NlcyIsImFycm93IiwicHJldiIsIm5leHQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7Q0FJQzs7QUFDQSx1RkFBcUM7QUFDcENBLE1BQUksRUFEZ0M7QUFFcENDLFNBQU8sRUFGNkI7QUFHcENDLGFBQVcsRUFBRTtBQUNaLFNBQUs7QUFDSEMsWUFBTSxFQURIO0FBRUhDLGdCQUFVLEVBQUU7QUFGVDtBQURPLEdBSHVCO0FBU3BDQyxTQUFPLEVBQUU7QUFDUjtBQUNBRixVQUFNLEVBRkU7QUFHUkcsU0FBSyxFQUhHO0FBSVJDLFFBQUksRUFKSTtBQUtSQyxRQUFJLEVBTEk7QUFPUjtBQUNBSixjQUFVLEVBUkY7QUFRbUM7QUFDM0NLLFFBQUksRUFUSSx1Q0FTNEM7O0FBVDVDO0FBVDJCLENBQXJDIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL3NjcmlwdHMvcmVjaXBpZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNwbGlkZSBJbXBvcnRzXG4gKi9cbiBpbXBvcnQgU3BsaWRlIGZyb20gJ0BzcGxpZGVqcy9zcGxpZGUnO1xuXG5cbiAvL3JlY2lwZSBTbGlkZXJcbiBuZXcgU3BsaWRlKCAnI3NwbGlkZS1yZWNpcGUtc2xpZGVyJywge1xuICB0eXBlICAgOiAnbG9vcCcsXG4gIHBlclBhZ2U6IDEsXG4gIGJyZWFrcG9pbnRzOiB7XG4gICA2NDA6IHtcbiAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgIH0sXG4gfSxcbiAgY2xhc3Nlczoge1xuICAgLy8gQWRkIGNsYXNzZXMgZm9yIGFycm93cy5cbiAgIGFycm93czogJ3NwbGlkZV9fYXJyb3dzIHlvdXItY2xhc3MtYXJyb3dzJyxcbiAgIGFycm93IDogJ3NwbGlkZV9fYXJyb3cgeW91ci1jbGFzcy1hcnJvdycsXG4gICBwcmV2ICA6ICdzcGxpZGVfX2Fycm93LS1wcmV2IGxlZnQtNjAnLFxuICAgbmV4dCAgOiAnc3BsaWRlX19hcnJvdy0tbmV4dCByaWdodC02MCcsXG4gICBcbiAgIC8vIEFkZCBjbGFzc2VzIGZvciBwYWdpbmF0aW9uLlxuICAgcGFnaW5hdGlvbjogJ3NwbGlkZV9fcGFnaW5hdGlvbiByZWxhdGl2ZScsIC8vIGNvbnRhaW5lclxuICAgcGFnZSAgICAgIDogJ3NwbGlkZV9fcGFnaW5hdGlvbl9fcGFnZSB3LTQgaC00IG0tMScsIC8vIGVhY2ggYnV0dG9uXG4gfSxcbiAgXG59ICkubW91bnQoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/scripts/recipies.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["/scripts/vendor"], function() { return __webpack_exec__("./resources/scripts/recipies.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);