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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @splidejs/splide */ \"./node_modules/@splidejs/splide/dist/js/splide.esm.js\");\n/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_splidejs_splide__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Splide Imports\n */\n //recipe Slider\n\nnew (_splidejs_splide__WEBPACK_IMPORTED_MODULE_0___default())('#splide-recipe-slider', {\n  type: 'loop',\n  perPage: 1,\n  breakpoints: {\n    640: {\n      arrows: false\n    }\n  },\n  classes: {\n    // Add classes for arrows.\n    arrows: 'splide__arrows',\n    arrow: 'splide__arrow',\n    prev: 'splide__arrow--prev',\n    next: 'splide__arrow--next',\n    // Add classes for pagination.\n    pagination: 'splide__pagination relative md:absolute md:py-10',\n    // container\n    page: 'splide__pagination__page w-4 h-4 m-1' // each button\n\n  }\n}).mount();\n\nfunction switchOrientation() {\n  // Create the main slider.\n  var primarySlider = new (_splidejs_splide__WEBPACK_IMPORTED_MODULE_0___default())('#splide-product-main', {\n    type: 'fade',\n    pagination: false,\n    arrows: false,\n    cover: true,\n    drag: false\n  }); //primarySlider.sync( secondarySlider ).mount();\n\n  if (typeof primarySlider != \"undefined\") {\n    primarySlider.destroy();\n  }\n\n  if (window.innerWidth > 600) {\n    //mainSlider.options.arrows = false;\n    // sliderNav = new Splide( '#splide-product-thumbs', sliderNavObjLarge);\n    var secondarySlider = new (_splidejs_splide__WEBPACK_IMPORTED_MODULE_0___default())('#splide-product-thumbs', {\n      direction: 'ttb',\n      height: '35rem',\n      //Needs Height\n      isNavigation: true,\n      pagination: false,\n      arrows: false,\n      cover: false,\n      type: 'slide',\n      perPage: 2,\n      gap: '2rem'\n    }).mount();\n    console.log('Larger than 600');\n  } else {\n    console.log('Smaller than 600');\n    var secondarySlider = new (_splidejs_splide__WEBPACK_IMPORTED_MODULE_0___default())('#splide-product-thumbs-mobile', {\n      direction: 'ltr',\n      isNavigation: true,\n      pagination: false,\n      arrows: false,\n      cover: false,\n      type: 'slide',\n      perPage: 2,\n      width: '160px'\n    }).mount();\n  }\n\n  primarySlider.mount();\n  primarySlider.sync(secondarySlider).mount();\n}\n\nswitchOrientation();\n\nwindow.onresize = function () {\n  switchOrientation();\n};\n\nvar productThumbs = document.querySelectorAll(\"li.splide__slide\");\nproductThumbs.forEach(function (item) {\n  item.addEventListener(\"click\", function () {\n    //console.log(this.getAttribute('data-weight'));\n    var prodWeight = this.getAttribute('data-weight');\n\n    if (prodWeight == '1') {\n      document.getElementById('weight-2').classList.add(\"hidden\");\n      document.getElementById('weight-1').classList.remove(\"hidden\");\n    } else {\n      document.getElementById('weight-1').classList.add(\"hidden\");\n      document.getElementById('weight-2').classList.remove(\"hidden\");\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2NyaXB0cy9wcm9kdWN0LmpzP2MxNTAiXSwibmFtZXMiOlsidHlwZSIsInBlclBhZ2UiLCJicmVha3BvaW50cyIsImFycm93cyIsImNsYXNzZXMiLCJhcnJvdyIsInByZXYiLCJuZXh0IiwicGFnaW5hdGlvbiIsInBhZ2UiLCJwcmltYXJ5U2xpZGVyIiwiY292ZXIiLCJkcmFnIiwid2luZG93Iiwic2Vjb25kYXJ5U2xpZGVyIiwiZGlyZWN0aW9uIiwiaGVpZ2h0IiwiaXNOYXZpZ2F0aW9uIiwiZ2FwIiwiY29uc29sZSIsIndpZHRoIiwic3dpdGNoT3JpZW50YXRpb24iLCJwcm9kdWN0VGh1bWJzIiwiZG9jdW1lbnQiLCJpdGVtIiwicHJvZFdlaWdodCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0NBSUM7O0FBQ0EsdUZBQXFDO0FBQ3BDQSxNQUFJLEVBRGdDO0FBRXBDQyxTQUFPLEVBRjZCO0FBR3BDQyxhQUFXLEVBQUU7QUFDWixTQUFLO0FBQ0hDLFlBQU0sRUFBRTtBQURMO0FBRE8sR0FIdUI7QUFRcENDLFNBQU8sRUFBRTtBQUNSO0FBQ0FELFVBQU0sRUFGRTtBQUdSRSxTQUFLLEVBSEc7QUFJUkMsUUFBSSxFQUpJO0FBS1JDLFFBQUksRUFMSTtBQU9SO0FBQ0FDLGNBQVUsRUFSRjtBQVF3RDtBQUNoRUMsUUFBSSxFQVRJLHVDQVM0Qzs7QUFUNUM7QUFSMkIsQ0FBckM7O0FBd0JELDZCQUE0QjtBQUUxQjtBQUNBLE1BQUlDLGFBQWEsR0FBRyxzRkFBb0M7QUFDdERWLFFBQUksRUFEa0Q7QUFFdERRLGNBQVUsRUFGNEM7QUFHdERMLFVBQU0sRUFIZ0Q7QUFJdERRLFNBQUssRUFKaUQ7QUFLdERDLFFBQUksRUFBRTtBQUxnRCxHQUFwQyxDQUFwQixDQUgwQixDQVkxQjs7QUFHQSxNQUFHLHdCQUFILGFBQXdDO0FBQ3RDRixpQkFBYSxDQUFiQTtBQUNIOztBQUNDLE1BQUdHLE1BQU0sQ0FBTkEsYUFBSCxLQUEyQjtBQUN2QjtBQUNBO0FBQ0EsUUFBSUMsZUFBZSxHQUFHLHdGQUFzQztBQUMxREMsZUFBUyxFQURpRDtBQUUxREMsWUFBTSxFQUZvRDtBQUV2QztBQUNuQkMsa0JBQVksRUFIOEM7QUFJMURULGdCQUFVLEVBSmdEO0FBSzFETCxZQUFNLEVBTG9EO0FBTTFEUSxXQUFLLEVBTnFEO0FBTzFEWCxVQUFJLEVBUHNEO0FBUTFEQyxhQUFPLEVBUm1EO0FBUzFEaUIsU0FBRyxFQUFFO0FBVHFELEtBQXRDLEVBQXRCLEtBQXNCLEVBQXRCO0FBZ0JBQyxXQUFPLENBQVBBO0FBbkJKLFNBdUJPO0FBRUxBLFdBQU8sQ0FBUEE7QUFFQSxRQUFJTCxlQUFlLEdBQUksK0ZBQTZDO0FBQ2xFQyxlQUFTLEVBRHlEO0FBRWxFRSxrQkFBWSxFQUZzRDtBQUdsRVQsZ0JBQVUsRUFId0Q7QUFJbEVMLFlBQU0sRUFKNEQ7QUFLbEVRLFdBQUssRUFMNkQ7QUFNbEVYLFVBQUksRUFOOEQ7QUFPbEVDLGFBQU8sRUFQMkQ7QUFRbEVtQixXQUFLLEVBQUU7QUFSMkQsS0FBN0MsRUFBdkIsS0FBdUIsRUFBdkI7QUFlRzs7QUFFRFYsZUFBYSxDQUFiQTtBQUNBQSxlQUFhLENBQWJBO0FBRUw7O0FBRURXLGlCQUFpQjs7QUFHZlIsTUFBTSxDQUFOQSxXQUFrQixZQUFVO0FBQzFCUSxtQkFBaUI7QUFEbkJSOztBQU1GLElBQU1TLGFBQWEsR0FBR0MsUUFBUSxDQUFSQSxpQkFBdEIsa0JBQXNCQSxDQUF0QjtBQUVBRCxhQUFhLENBQWJBLFFBQXNCLGdCQUFjO0FBRWxDRSxNQUFJLENBQUpBLDBCQUErQixZQUFVO0FBRXZDO0FBQ0osUUFBTUMsVUFBVSxHQUFHLGtCQUFuQixhQUFtQixDQUFuQjs7QUFFQSxRQUFJQSxVQUFVLElBQWQsS0FBdUI7QUFHdkJGLGNBQVEsQ0FBUkE7QUFFQUEsY0FBUSxDQUFSQTtBQUxBLFdBU007QUFFSkEsY0FBUSxDQUFSQTtBQUVBQSxjQUFRLENBQVJBO0FBR0Q7QUFyQkNDO0FBRkZGIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL3NjcmlwdHMvcHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3BsaWRlIEltcG9ydHNcbiAqL1xuIGltcG9ydCBTcGxpZGUgZnJvbSAnQHNwbGlkZWpzL3NwbGlkZSc7XG5cblxuIC8vcmVjaXBlIFNsaWRlclxuIG5ldyBTcGxpZGUoICcjc3BsaWRlLXJlY2lwZS1zbGlkZXInLCB7XG4gIHR5cGUgICA6ICdsb29wJyxcbiAgcGVyUGFnZTogMSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgIDY0MDoge1xuICAgICBhcnJvd3M6IGZhbHNlXG4gICB9LFxuIH0sXG4gIGNsYXNzZXM6IHtcbiAgIC8vIEFkZCBjbGFzc2VzIGZvciBhcnJvd3MuXG4gICBhcnJvd3M6ICdzcGxpZGVfX2Fycm93cycsXG4gICBhcnJvdyA6ICdzcGxpZGVfX2Fycm93JyxcbiAgIHByZXYgIDogJ3NwbGlkZV9fYXJyb3ctLXByZXYnLFxuICAgbmV4dCAgOiAnc3BsaWRlX19hcnJvdy0tbmV4dCcsXG4gICBcbiAgIC8vIEFkZCBjbGFzc2VzIGZvciBwYWdpbmF0aW9uLlxuICAgcGFnaW5hdGlvbjogJ3NwbGlkZV9fcGFnaW5hdGlvbiByZWxhdGl2ZSBtZDphYnNvbHV0ZSBtZDpweS0xMCcsIC8vIGNvbnRhaW5lclxuICAgcGFnZSAgICAgIDogJ3NwbGlkZV9fcGFnaW5hdGlvbl9fcGFnZSB3LTQgaC00IG0tMScsIC8vIGVhY2ggYnV0dG9uXG4gfSxcbiAgXG59ICkubW91bnQoKTtcblxuXG5cbmZ1bmN0aW9uIHN3aXRjaE9yaWVudGF0aW9uKCl7XG5cbiAgLy8gQ3JlYXRlIHRoZSBtYWluIHNsaWRlci5cbiAgdmFyIHByaW1hcnlTbGlkZXIgPSBuZXcgU3BsaWRlKCAnI3NwbGlkZS1wcm9kdWN0LW1haW4nLCB7XG4gICAgdHlwZSAgICAgICA6ICdmYWRlJyxcbiAgICBwYWdpbmF0aW9uIDogZmFsc2UsXG4gICAgYXJyb3dzICAgICA6IGZhbHNlLFxuICAgIGNvdmVyICAgICAgOiB0cnVlLFxuICAgIGRyYWcgOmZhbHNlLFxuICB9ICk7XG4gIFxuICBcbiAgLy9wcmltYXJ5U2xpZGVyLnN5bmMoIHNlY29uZGFyeVNsaWRlciApLm1vdW50KCk7XG5cbiAgXG4gIGlmKHR5cGVvZiBwcmltYXJ5U2xpZGVyICAhPSBcInVuZGVmaW5lZFwiKXtcbiAgICBwcmltYXJ5U2xpZGVyLmRlc3Ryb3koKTtcbn1cbiAgaWYod2luZG93LmlubmVyV2lkdGggPiA2MDApe1xuICAgICAgLy9tYWluU2xpZGVyLm9wdGlvbnMuYXJyb3dzID0gZmFsc2U7XG4gICAgICAvLyBzbGlkZXJOYXYgPSBuZXcgU3BsaWRlKCAnI3NwbGlkZS1wcm9kdWN0LXRodW1icycsIHNsaWRlck5hdk9iakxhcmdlKTtcbiAgICAgIHZhciBzZWNvbmRhcnlTbGlkZXIgPSBuZXcgU3BsaWRlKCAnI3NwbGlkZS1wcm9kdWN0LXRodW1icycsIHtcbiAgICAgICAgZGlyZWN0aW9uOiAndHRiJyxcbiAgICAgICAgaGVpZ2h0ICAgOiAnMzVyZW0nLC8vTmVlZHMgSGVpZ2h0XG4gICAgICAgIGlzTmF2aWdhdGlvbjogdHJ1ZSxcbiAgICAgICAgcGFnaW5hdGlvbiA6IGZhbHNlLFxuICAgICAgICBhcnJvd3MgICAgIDogZmFsc2UsXG4gICAgICAgIGNvdmVyICAgICAgOiBmYWxzZSxcbiAgICAgICAgdHlwZSAgICAgOiAnc2xpZGUnLFxuICAgICAgICBwZXJQYWdlOiAyLFxuICAgICAgICBnYXA6ICcycmVtJyxcblxuICAgICAgICBcbiAgICAgIFxuICAgICAgIFxuICAgICAgfSApLm1vdW50KCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdMYXJnZXIgdGhhbiA2MDAnKTtcblxuICAgXG5cbiAgfSBlbHNlIHtcblxuICAgIGNvbnNvbGUubG9nKCdTbWFsbGVyIHRoYW4gNjAwJyk7XG5cbiAgICB2YXIgc2Vjb25kYXJ5U2xpZGVyICA9IG5ldyBTcGxpZGUoICcjc3BsaWRlLXByb2R1Y3QtdGh1bWJzLW1vYmlsZScsIHtcbiAgICAgIGRpcmVjdGlvbjogJ2x0cicsXG4gICAgICBpc05hdmlnYXRpb246IHRydWUsXG4gICAgICBwYWdpbmF0aW9uIDogZmFsc2UsXG4gICAgICBhcnJvd3MgICAgIDogZmFsc2UsXG4gICAgICBjb3ZlciAgICAgIDogZmFsc2UsXG4gICAgICB0eXBlICAgICA6ICdzbGlkZScsXG4gICAgICBwZXJQYWdlOiAyLFxuICAgICAgd2lkdGg6ICcxNjBweCcsXG4gICAgXG4gICAgIFxuICAgIH0gKS5tb3VudCgpO1xuXG5cblxuICAgICAgfVxuICBcbiAgICAgIHByaW1hcnlTbGlkZXIubW91bnQoKTtcbiAgICAgIHByaW1hcnlTbGlkZXIuc3luYyhzZWNvbmRhcnlTbGlkZXIpLm1vdW50KCk7XG5cbn1cblxuc3dpdGNoT3JpZW50YXRpb24oKTtcblxuXG4gIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCl7XG4gICAgc3dpdGNoT3JpZW50YXRpb24oKTtcbn1cblxuXG5cbmNvbnN0IHByb2R1Y3RUaHVtYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGkuc3BsaWRlX19zbGlkZVwiKTtcblxucHJvZHVjdFRodW1icy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xuXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS13ZWlnaHQnKSk7XG5jb25zdCBwcm9kV2VpZ2h0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2VpZ2h0Jyk7XG5cbmlmIChwcm9kV2VpZ2h0ID09ICcxJykge1xuXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWlnaHQtMicpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWlnaHQtMScpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cbn1cblxuZWxzZSAge1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWlnaHQtMScpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlaWdodC0yJykuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuXG59XG5cblxufSlcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/scripts/product.js\n");

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