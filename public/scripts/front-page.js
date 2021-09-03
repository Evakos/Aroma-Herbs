/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/scripts/front-page"],{

/***/ "./resources/scripts/front-page.js":
/*!*****************************************!*\
  !*** ./resources/scripts/front-page.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @splidejs/splide */ \"./node_modules/@splidejs/splide/dist/js/splide.esm.js\");\n/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_splidejs_splide__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * External Dependencies\n */\n\n/**\n * Splide Imports\n */\n\n //Recipie Slider\n\nnew (_splidejs_splide__WEBPACK_IMPORTED_MODULE_1___default())('#splide-recipie-slider', {\n  type: 'loop',\n  perPage: 1,\n  breakpoints: {\n    640: {\n      arrows: false\n    }\n  },\n  classes: {\n    // Add classes for arrows.\n    arrows: 'splide__arrows invisible sm:visible',\n    arrow: 'splide__arrow ',\n    prev: 'splide__arrow--prev ',\n    next: 'splide__arrow--next',\n    // Add classes for pagination.\n    pagination: 'splide__pagination relative sm:absolute',\n    // container\n    page: 'splide__pagination__page w-4 h-4 m-1' // each button\n\n  }\n}).mount(); //Products Slider\n\nnew (_splidejs_splide__WEBPACK_IMPORTED_MODULE_1___default())('#splide-products', {\n  type: 'loop',\n  perPage: 4,\n  breakpoints: {\n    640: {\n      pagination: false,\n      perPage: 1\n    }\n  },\n  classes: {\n    // Add classes for arrows.\n    arrows: 'splide__arrows your-class-arrows',\n    arrow: 'splide__arrow your-class-arrow',\n    prev: 'splide__arrow--prev -left-5 sm:-left-10',\n    next: 'splide__arrow--next -right-5 sm:-right-10',\n    // Add classes for pagination.\n    pagination: 'splide__pagination relative my-20',\n    // container\n    page: 'splide__pagination__page w-4 h-4 m-1' // each button\n\n  }\n}).mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2NyaXB0cy9mcm9udC1wYWdlLmpzP2NmMmIiXSwibmFtZXMiOlsidHlwZSIsInBlclBhZ2UiLCJicmVha3BvaW50cyIsImFycm93cyIsImNsYXNzZXMiLCJhcnJvdyIsInByZXYiLCJuZXh0IiwicGFnaW5hdGlvbiIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0NBSUM7O0FBQ0Esd0ZBQXNDO0FBQ3JDQSxNQUFJLEVBRGlDO0FBRXJDQyxTQUFPLEVBRjhCO0FBR3JDQyxhQUFXLEVBQUU7QUFDYixTQUFLO0FBQ0pDLFlBQU0sRUFBRTtBQURKO0FBRFEsR0FId0I7QUFRckNDLFNBQU8sRUFBRTtBQUNUO0FBQ0FELFVBQU0sRUFGRztBQUdURSxTQUFLLEVBSEk7QUFJVEMsUUFBSSxFQUpLO0FBS1RDLFFBQUksRUFMSztBQU9UO0FBQ0FDLGNBQVUsRUFSRDtBQVE4QztBQUN2REMsUUFBSSxFQVRLLHVDQVMyQzs7QUFUM0M7QUFSNEIsQ0FBdEMsVSxDQXNCQTs7QUFDQSxrRkFBZ0M7QUFDL0JULE1BQUksRUFEMkI7QUFFL0JDLFNBQU8sRUFGd0I7QUFHL0JDLGFBQVcsRUFBRTtBQUViLFNBQUs7QUFDSk0sZ0JBQVUsRUFETjtBQUVKUCxhQUFPLEVBQUU7QUFGTDtBQUZRLEdBSGtCO0FBVWhDRyxTQUFPLEVBQUU7QUFDUjtBQUNBRCxVQUFNLEVBRkU7QUFHUkUsU0FBSyxFQUhHO0FBSVJDLFFBQUksRUFKSTtBQUtSQyxRQUFJLEVBTEk7QUFPUjtBQUNBQyxjQUFVLEVBUkY7QUFReUM7QUFDakRDLFFBQUksRUFUSSx1Q0FTNEM7O0FBVDVDO0FBVnVCLENBQWhDIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL3NjcmlwdHMvZnJvbnQtcGFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRXh0ZXJuYWwgRGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBcImpxdWVyeVwiO1xuXG4vKipcbiAqIFNwbGlkZSBJbXBvcnRzXG4gKi9cbiBpbXBvcnQgU3BsaWRlIGZyb20gJ0BzcGxpZGVqcy9zcGxpZGUnO1xuXG5cbiAvL1JlY2lwaWUgU2xpZGVyXG4gbmV3IFNwbGlkZSggJyNzcGxpZGUtcmVjaXBpZS1zbGlkZXInLCB7XG5cdCB0eXBlICAgOiAnbG9vcCcsXG5cdCBwZXJQYWdlOiAxLFxuXHQgYnJlYWtwb2ludHM6IHtcblx0XHQ2NDA6IHtcblx0XHRcdGFycm93czogZmFsc2Vcblx0XHR9LFxuXHR9LFxuXHQgY2xhc3Nlczoge1xuXHRcdC8vIEFkZCBjbGFzc2VzIGZvciBhcnJvd3MuXG5cdFx0YXJyb3dzOiAnc3BsaWRlX19hcnJvd3MgaW52aXNpYmxlIHNtOnZpc2libGUnLFxuXHRcdGFycm93IDogJ3NwbGlkZV9fYXJyb3cgJyxcblx0XHRwcmV2ICA6ICdzcGxpZGVfX2Fycm93LS1wcmV2ICcsXG5cdFx0bmV4dCAgOiAnc3BsaWRlX19hcnJvdy0tbmV4dCcgLFxuXHRcdFxuXHRcdC8vIEFkZCBjbGFzc2VzIGZvciBwYWdpbmF0aW9uLlxuXHRcdHBhZ2luYXRpb246ICdzcGxpZGVfX3BhZ2luYXRpb24gcmVsYXRpdmUgc206YWJzb2x1dGUnLCAvLyBjb250YWluZXJcblx0XHRwYWdlICAgICAgOiAnc3BsaWRlX19wYWdpbmF0aW9uX19wYWdlIHctNCBoLTQgbS0xJywgLy8gZWFjaCBidXR0b25cblx0fSxcblx0IFxuIH0gKS5tb3VudCgpO1xuIFxuIC8vUHJvZHVjdHMgU2xpZGVyXG4gbmV3IFNwbGlkZSggJyNzcGxpZGUtcHJvZHVjdHMnLCB7XG5cdCB0eXBlICAgOiAnbG9vcCcsXG5cdCBwZXJQYWdlOiA0LFxuXHQgYnJlYWtwb2ludHM6IHtcblx0XHQgXG5cdFx0NjQwOiB7XG5cdFx0XHRwYWdpbmF0aW9uOiBmYWxzZSxcblx0XHRcdHBlclBhZ2U6IDEsXG5cdFx0fSxcblx0fSxcblx0Y2xhc3Nlczoge1xuXHRcdC8vIEFkZCBjbGFzc2VzIGZvciBhcnJvd3MuXG5cdFx0YXJyb3dzOiAnc3BsaWRlX19hcnJvd3MgeW91ci1jbGFzcy1hcnJvd3MnLFxuXHRcdGFycm93IDogJ3NwbGlkZV9fYXJyb3cgeW91ci1jbGFzcy1hcnJvdycsXG5cdFx0cHJldiAgOiAnc3BsaWRlX19hcnJvdy0tcHJldiAtbGVmdC01IHNtOi1sZWZ0LTEwJyxcblx0XHRuZXh0ICA6ICdzcGxpZGVfX2Fycm93LS1uZXh0IC1yaWdodC01IHNtOi1yaWdodC0xMCcsXG5cdFx0XG5cdFx0Ly8gQWRkIGNsYXNzZXMgZm9yIHBhZ2luYXRpb24uXG5cdFx0cGFnaW5hdGlvbjogJ3NwbGlkZV9fcGFnaW5hdGlvbiByZWxhdGl2ZSBteS0yMCcsIC8vIGNvbnRhaW5lclxuXHRcdHBhZ2UgICAgICA6ICdzcGxpZGVfX3BhZ2luYXRpb25fX3BhZ2Ugdy00IGgtNCBtLTEnLCAvLyBlYWNoIGJ1dHRvblxuXHR9LFxuIH0gKS5tb3VudCgpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/scripts/front-page.js\n");

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
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["/scripts/vendor"], function() { return __webpack_exec__("./resources/scripts/front-page.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);