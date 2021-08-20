/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/scripts/product"],{

/***/ "./resources/scripts/product.js":
/*!**************************************!*\
  !*** ./resources/scripts/product.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @splidejs/splide */ \"./node_modules/@splidejs/splide/dist/js/splide.esm.js\");\n/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_splidejs_splide__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Splide Imports\n */\n //Recipie Slider\n\nnew (_splidejs_splide__WEBPACK_IMPORTED_MODULE_0___default())('#splide-recipie-slider', {\n  type: 'loop',\n  perPage: 1\n}).mount();\nvar secondarySlider = new (_splidejs_splide__WEBPACK_IMPORTED_MODULE_0___default())('#splide-product-thumbs', {\n  direction: 'ttb',\n  height: '35rem',\n  isNavigation: true,\n  pagination: false,\n  arrows: false,\n  cover: false,\n  type: 'loop',\n  perPage: 2,\n  gap: '2rem'\n}).mount(); // Create the main slider.\n\nvar primarySlider = new (_splidejs_splide__WEBPACK_IMPORTED_MODULE_0___default())('#splide-product-main', {\n  type: 'fade',\n  pagination: false,\n  arrows: false,\n  cover: true\n});\nprimarySlider.sync(secondarySlider).mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2NyaXB0cy9wcm9kdWN0LmpzP2MxNTAiXSwibmFtZXMiOlsidHlwZSIsInBlclBhZ2UiLCJzZWNvbmRhcnlTbGlkZXIiLCJkaXJlY3Rpb24iLCJoZWlnaHQiLCJpc05hdmlnYXRpb24iLCJwYWdpbmF0aW9uIiwiYXJyb3dzIiwiY292ZXIiLCJnYXAiLCJwcmltYXJ5U2xpZGVyIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7Q0FJQzs7QUFDQSx3RkFBc0M7QUFDcENBLE1BQUksRUFEZ0M7QUFFcENDLFNBQU8sRUFBRTtBQUYyQixDQUF0QztBQUtBLElBQUlDLGVBQWUsR0FBRyx3RkFBc0M7QUFDM0RDLFdBQVMsRUFEa0Q7QUFFM0RDLFFBQU0sRUFGcUQ7QUFHM0RDLGNBQVksRUFIK0M7QUFJM0RDLFlBQVUsRUFKaUQ7QUFLNURDLFFBQU0sRUFMc0Q7QUFNNURDLE9BQUssRUFOdUQ7QUFPM0RSLE1BQUksRUFQdUQ7QUFRM0RDLFNBQU8sRUFSb0Q7QUFTM0RRLEtBQUcsRUFBRTtBQVRzRCxDQUF0QyxFQUF0QixLQUFzQixFQUF0QixDLENBY0Q7O0FBQ0EsSUFBSUMsYUFBYSxHQUFHLHNGQUFvQztBQUN2RFYsTUFBSSxFQURtRDtBQUV2RE0sWUFBVSxFQUY2QztBQUd2REMsUUFBTSxFQUhpRDtBQUl2REMsT0FBSyxFQUFRO0FBSjBDLENBQXBDLENBQXBCO0FBUUFFLGFBQWEsQ0FBYkEiLCJmaWxlIjoiLi9yZXNvdXJjZXMvc2NyaXB0cy9wcm9kdWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTcGxpZGUgSW1wb3J0c1xuICovXG4gaW1wb3J0IFNwbGlkZSBmcm9tICdAc3BsaWRlanMvc3BsaWRlJztcblxuXG4gLy9SZWNpcGllIFNsaWRlclxuIG5ldyBTcGxpZGUoICcjc3BsaWRlLXJlY2lwaWUtc2xpZGVyJywge1xuICAgdHlwZSAgIDogJ2xvb3AnLFxuICAgcGVyUGFnZTogMVxuIH0gKS5tb3VudCgpO1xuIFxuIHZhciBzZWNvbmRhcnlTbGlkZXIgPSBuZXcgU3BsaWRlKCAnI3NwbGlkZS1wcm9kdWN0LXRodW1icycsIHtcbiAgZGlyZWN0aW9uOiAndHRiJyxcbiAgaGVpZ2h0ICAgOiAnMzVyZW0nLFxuICBpc05hdmlnYXRpb246IHRydWUsXG4gIHBhZ2luYXRpb24gOiBmYWxzZSxcblx0YXJyb3dzICAgICA6IGZhbHNlLFxuXHRjb3ZlciAgICAgIDogZmFsc2UsXG4gIHR5cGUgICAgIDogJ2xvb3AnLFxuICBwZXJQYWdlOiAyLFxuICBnYXA6ICcycmVtJyxcbiBcbn0gKS5tb3VudCgpO1xuXG5cbi8vIENyZWF0ZSB0aGUgbWFpbiBzbGlkZXIuXG52YXIgcHJpbWFyeVNsaWRlciA9IG5ldyBTcGxpZGUoICcjc3BsaWRlLXByb2R1Y3QtbWFpbicsIHtcblx0dHlwZSAgICAgICA6ICdmYWRlJyxcblx0cGFnaW5hdGlvbiA6IGZhbHNlLFxuXHRhcnJvd3MgICAgIDogZmFsc2UsXG5cdGNvdmVyICAgICAgOiB0cnVlLFxufSApO1xuXG5cbnByaW1hcnlTbGlkZXIuc3luYyggc2Vjb25kYXJ5U2xpZGVyICkubW91bnQoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/scripts/product.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["/scripts/vendor"], function() { return __webpack_exec__("./resources/scripts/product.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);