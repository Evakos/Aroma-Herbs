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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var simplelightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplelightbox */ \"./node_modules/simplelightbox/dist/simple-lightbox.modules.js\");\n/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @splidejs/splide */ \"./node_modules/@splidejs/splide/dist/js/splide.esm.js\");\n/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_splidejs_splide__WEBPACK_IMPORTED_MODULE_1__);\n\nnew simplelightbox__WEBPACK_IMPORTED_MODULE_0__.default('.product-image', {\n  //   /* options */ \n  loop: true,\n  nav: false,\n  showCounter: false,\n  alertError: false,\n  closeText: 'X',\n  close: false\n});\n/**\n * Splide Imports\n */\n\n //recipe Slider\n\nnew (_splidejs_splide__WEBPACK_IMPORTED_MODULE_1___default())('#splide-recipe-slider', {\n  type: 'loop',\n  perPage: 1,\n  breakpoints: {\n    640: {\n      arrows: false\n    }\n  },\n  classes: {\n    // Add classes for arrows.\n    arrows: 'splide__arrows',\n    arrow: 'splide__arrow',\n    prev: 'splide__arrow--prev',\n    next: 'splide__arrow--next',\n    // Add classes for pagination.\n    pagination: 'splide__pagination relative md:absolute md:py-10',\n    // container\n    page: 'splide__pagination__page w-4 h-4 m-1' // each button\n\n  }\n}).mount();\n\nfunction switchOrientation() {\n  // Create the main slider.\n  var primarySlider = new (_splidejs_splide__WEBPACK_IMPORTED_MODULE_1___default())('#splide-product-main', {\n    type: 'fade',\n    pagination: false,\n    arrows: false,\n    cover: true,\n    drag: false\n  }); //primarySlider.sync( secondarySlider ).mount();\n\n  if (typeof primarySlider != \"undefined\") {\n    primarySlider.destroy();\n  }\n\n  if (window.innerWidth > 600) {\n    //mainSlider.options.arrows = false;\n    // sliderNav = new Splide( '#splide-product-thumbs', sliderNavObjLarge);\n    var secondarySlider = new (_splidejs_splide__WEBPACK_IMPORTED_MODULE_1___default())('#splide-product-thumbs', {\n      direction: 'ttb',\n      height: '35rem',\n      //Needs Height\n      isNavigation: true,\n      pagination: false,\n      arrows: false,\n      cover: false,\n      type: 'slide',\n      perPage: 2,\n      gap: '2rem'\n    }).mount(); //console.log('Larger than 600');\n  } else {\n    //console.log('Smaller than 600');\n    var secondarySlider = new (_splidejs_splide__WEBPACK_IMPORTED_MODULE_1___default())('#splide-product-thumbs-mobile', {\n      isNavigation: true,\n      pagination: false,\n      arrows: false,\n      cover: false,\n      type: 'slide',\n      perPage: 2,\n      width: '160px'\n    }).mount();\n  }\n\n  primarySlider.mount();\n  primarySlider.sync(secondarySlider).mount();\n}\n\nswitchOrientation();\n\nwindow.onresize = function () {\n  switchOrientation();\n};\n\nvar productThumbs = document.querySelectorAll(\"li.splide__slide\");\nproductThumbs.forEach(function (item) {\n  item.addEventListener(\"click\", function () {\n    //console.log(this.getAttribute('data-weight'));\n    var prodWeight = this.getAttribute('data-weight');\n\n    if (prodWeight == '1') {\n      document.getElementById('weight-2').classList.add(\"hidden\");\n      document.getElementById('weight-1').classList.remove(\"hidden\");\n    } else {\n      document.getElementById('weight-1').classList.add(\"hidden\");\n      document.getElementById('weight-2').classList.remove(\"hidden\");\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2NyaXB0cy9wcm9kdWN0LmpzP2MxNTAiXSwibmFtZXMiOlsibG9vcCIsIm5hdiIsInNob3dDb3VudGVyIiwiYWxlcnRFcnJvciIsImNsb3NlVGV4dCIsImNsb3NlIiwidHlwZSIsInBlclBhZ2UiLCJicmVha3BvaW50cyIsImFycm93cyIsImNsYXNzZXMiLCJhcnJvdyIsInByZXYiLCJuZXh0IiwicGFnaW5hdGlvbiIsInBhZ2UiLCJwcmltYXJ5U2xpZGVyIiwiY292ZXIiLCJkcmFnIiwid2luZG93Iiwic2Vjb25kYXJ5U2xpZGVyIiwiZGlyZWN0aW9uIiwiaGVpZ2h0IiwiaXNOYXZpZ2F0aW9uIiwiZ2FwIiwid2lkdGgiLCJzd2l0Y2hPcmllbnRhdGlvbiIsInByb2R1Y3RUaHVtYnMiLCJkb2N1bWVudCIsIml0ZW0iLCJwcm9kV2VpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFFQSwwRUFBcUM7QUFHckM7QUFFQUEsTUFBSSxFQUxpQztBQU1yQ0MsS0FBRyxFQU5rQztBQU9yQ0MsYUFBVyxFQVAwQjtBQVFyQ0MsWUFBVSxFQVIyQjtBQVNyQ0MsV0FBUyxFQVQ0QjtBQVVyQ0MsT0FBSyxFQUFFO0FBVjhCLENBQXJDO0FBaUJBO0FBQ0E7QUFDQTs7Q0FJQzs7QUFDQSx1RkFBcUM7QUFDcENDLE1BQUksRUFEZ0M7QUFFcENDLFNBQU8sRUFGNkI7QUFHcENDLGFBQVcsRUFBRTtBQUNaLFNBQUs7QUFDSEMsWUFBTSxFQUFFO0FBREw7QUFETyxHQUh1QjtBQVFwQ0MsU0FBTyxFQUFFO0FBQ1I7QUFDQUQsVUFBTSxFQUZFO0FBR1JFLFNBQUssRUFIRztBQUlSQyxRQUFJLEVBSkk7QUFLUkMsUUFBSSxFQUxJO0FBT1I7QUFDQUMsY0FBVSxFQVJGO0FBUXdEO0FBQ2hFQyxRQUFJLEVBVEksdUNBUzRDOztBQVQ1QztBQVIyQixDQUFyQzs7QUF3QkQsNkJBQTRCO0FBRTFCO0FBQ0EsTUFBSUMsYUFBYSxHQUFHLHNGQUFvQztBQUN0RFYsUUFBSSxFQURrRDtBQUV0RFEsY0FBVSxFQUY0QztBQUd0REwsVUFBTSxFQUhnRDtBQUl0RFEsU0FBSyxFQUppRDtBQUt0REMsUUFBSSxFQUFFO0FBTGdELEdBQXBDLENBQXBCLENBSDBCLENBWTFCOztBQUdBLE1BQUcsd0JBQUgsYUFBd0M7QUFDdENGLGlCQUFhLENBQWJBO0FBQ0g7O0FBQ0MsTUFBR0csTUFBTSxDQUFOQSxhQUFILEtBQTJCO0FBQ3ZCO0FBQ0E7QUFDQSxRQUFJQyxlQUFlLEdBQUcsd0ZBQXNDO0FBQzFEQyxlQUFTLEVBRGlEO0FBRTFEQyxZQUFNLEVBRm9EO0FBRXZDO0FBQ25CQyxrQkFBWSxFQUg4QztBQUkxRFQsZ0JBQVUsRUFKZ0Q7QUFLMURMLFlBQU0sRUFMb0Q7QUFNMURRLFdBQUssRUFOcUQ7QUFPMURYLFVBQUksRUFQc0Q7QUFRMURDLGFBQU8sRUFSbUQ7QUFTMURpQixTQUFHLEVBQUU7QUFUcUQsS0FBdEMsRUFIQyxLQUdELEVBQXRCLENBSHVCLENBbUJ2QjtBQW5CSixTQXVCTztBQUVMO0FBRUEsUUFBSUosZUFBZSxHQUFJLCtGQUE2QztBQUNsRUcsa0JBQVksRUFEc0Q7QUFFbEVULGdCQUFVLEVBRndEO0FBR2xFTCxZQUFNLEVBSDREO0FBSWxFUSxXQUFLLEVBSjZEO0FBS2xFWCxVQUFJLEVBTDhEO0FBTWxFQyxhQUFPLEVBTjJEO0FBT2xFa0IsV0FBSyxFQUFFO0FBUDJELEtBQTdDLEVBQXZCLEtBQXVCLEVBQXZCO0FBY0c7O0FBRURULGVBQWEsQ0FBYkE7QUFDQUEsZUFBYSxDQUFiQTtBQUVMOztBQUVEVSxpQkFBaUI7O0FBR2ZQLE1BQU0sQ0FBTkEsV0FBa0IsWUFBVTtBQUMxQk8sbUJBQWlCO0FBRG5CUDs7QUFNRixJQUFNUSxhQUFhLEdBQUdDLFFBQVEsQ0FBUkEsaUJBQXRCLGtCQUFzQkEsQ0FBdEI7QUFFQUQsYUFBYSxDQUFiQSxRQUFzQixnQkFBYztBQUVsQ0UsTUFBSSxDQUFKQSwwQkFBK0IsWUFBVTtBQUV2QztBQUNKLFFBQU1DLFVBQVUsR0FBRyxrQkFBbkIsYUFBbUIsQ0FBbkI7O0FBRUEsUUFBSUEsVUFBVSxJQUFkLEtBQXVCO0FBR3ZCRixjQUFRLENBQVJBO0FBRUFBLGNBQVEsQ0FBUkE7QUFMQSxXQVNNO0FBRUpBLGNBQVEsQ0FBUkE7QUFFQUEsY0FBUSxDQUFSQTtBQUdEO0FBckJDQztBQUZGRiIsImZpbGUiOiIuL3Jlc291cmNlcy9zY3JpcHRzL3Byb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2ltcGxlTGlnaHRib3ggZnJvbSBcInNpbXBsZWxpZ2h0Ym94XCI7XG5cbm5ldyBTaW1wbGVMaWdodGJveCgnLnByb2R1Y3QtaW1hZ2UnLCB7IFxuICBcbiAgXG4vLyAgIC8qIG9wdGlvbnMgKi8gXG5cbmxvb3A6IHRydWUsXG5uYXY6IGZhbHNlLFxuc2hvd0NvdW50ZXI6IGZhbHNlLFxuYWxlcnRFcnJvcjogZmFsc2UsXG5jbG9zZVRleHQ6ICdYJyxcbmNsb3NlOiBmYWxzZSxcblxufSk7XG5cblxuXG5cbi8qKlxuICogU3BsaWRlIEltcG9ydHNcbiAqL1xuIGltcG9ydCBTcGxpZGUgZnJvbSAnQHNwbGlkZWpzL3NwbGlkZSc7XG5cblxuIC8vcmVjaXBlIFNsaWRlclxuIG5ldyBTcGxpZGUoICcjc3BsaWRlLXJlY2lwZS1zbGlkZXInLCB7XG4gIHR5cGUgICA6ICdsb29wJyxcbiAgcGVyUGFnZTogMSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgIDY0MDoge1xuICAgICBhcnJvd3M6IGZhbHNlXG4gICB9LFxuIH0sXG4gIGNsYXNzZXM6IHtcbiAgIC8vIEFkZCBjbGFzc2VzIGZvciBhcnJvd3MuXG4gICBhcnJvd3M6ICdzcGxpZGVfX2Fycm93cycsXG4gICBhcnJvdyA6ICdzcGxpZGVfX2Fycm93JyxcbiAgIHByZXYgIDogJ3NwbGlkZV9fYXJyb3ctLXByZXYnLFxuICAgbmV4dCAgOiAnc3BsaWRlX19hcnJvdy0tbmV4dCcsXG4gICBcbiAgIC8vIEFkZCBjbGFzc2VzIGZvciBwYWdpbmF0aW9uLlxuICAgcGFnaW5hdGlvbjogJ3NwbGlkZV9fcGFnaW5hdGlvbiByZWxhdGl2ZSBtZDphYnNvbHV0ZSBtZDpweS0xMCcsIC8vIGNvbnRhaW5lclxuICAgcGFnZSAgICAgIDogJ3NwbGlkZV9fcGFnaW5hdGlvbl9fcGFnZSB3LTQgaC00IG0tMScsIC8vIGVhY2ggYnV0dG9uXG4gfSxcbiAgXG59ICkubW91bnQoKTtcblxuXG5cbmZ1bmN0aW9uIHN3aXRjaE9yaWVudGF0aW9uKCl7XG5cbiAgLy8gQ3JlYXRlIHRoZSBtYWluIHNsaWRlci5cbiAgdmFyIHByaW1hcnlTbGlkZXIgPSBuZXcgU3BsaWRlKCAnI3NwbGlkZS1wcm9kdWN0LW1haW4nLCB7XG4gICAgdHlwZSAgICAgICA6ICdmYWRlJyxcbiAgICBwYWdpbmF0aW9uIDogZmFsc2UsXG4gICAgYXJyb3dzICAgICA6IGZhbHNlLFxuICAgIGNvdmVyICAgICAgOiB0cnVlLFxuICAgIGRyYWcgOmZhbHNlLFxuICB9ICk7XG4gIFxuICBcbiAgLy9wcmltYXJ5U2xpZGVyLnN5bmMoIHNlY29uZGFyeVNsaWRlciApLm1vdW50KCk7XG5cbiAgXG4gIGlmKHR5cGVvZiBwcmltYXJ5U2xpZGVyICAhPSBcInVuZGVmaW5lZFwiKXtcbiAgICBwcmltYXJ5U2xpZGVyLmRlc3Ryb3koKTtcbn1cbiAgaWYod2luZG93LmlubmVyV2lkdGggPiA2MDApe1xuICAgICAgLy9tYWluU2xpZGVyLm9wdGlvbnMuYXJyb3dzID0gZmFsc2U7XG4gICAgICAvLyBzbGlkZXJOYXYgPSBuZXcgU3BsaWRlKCAnI3NwbGlkZS1wcm9kdWN0LXRodW1icycsIHNsaWRlck5hdk9iakxhcmdlKTtcbiAgICAgIHZhciBzZWNvbmRhcnlTbGlkZXIgPSBuZXcgU3BsaWRlKCAnI3NwbGlkZS1wcm9kdWN0LXRodW1icycsIHtcbiAgICAgICAgZGlyZWN0aW9uOiAndHRiJyxcbiAgICAgICAgaGVpZ2h0ICAgOiAnMzVyZW0nLC8vTmVlZHMgSGVpZ2h0XG4gICAgICAgIGlzTmF2aWdhdGlvbjogdHJ1ZSxcbiAgICAgICAgcGFnaW5hdGlvbiA6IGZhbHNlLFxuICAgICAgICBhcnJvd3MgICAgIDogZmFsc2UsXG4gICAgICAgIGNvdmVyICAgICAgOiBmYWxzZSxcbiAgICAgICAgdHlwZSAgICAgOiAnc2xpZGUnLFxuICAgICAgICBwZXJQYWdlOiAyLFxuICAgICAgICBnYXA6ICcycmVtJyxcblxuICAgICAgICBcbiAgICAgIFxuICAgICAgIFxuICAgICAgfSApLm1vdW50KCk7XG5cbiAgICAgIC8vY29uc29sZS5sb2coJ0xhcmdlciB0aGFuIDYwMCcpO1xuXG4gICBcblxuICB9IGVsc2Uge1xuXG4gICAgLy9jb25zb2xlLmxvZygnU21hbGxlciB0aGFuIDYwMCcpO1xuXG4gICAgdmFyIHNlY29uZGFyeVNsaWRlciAgPSBuZXcgU3BsaWRlKCAnI3NwbGlkZS1wcm9kdWN0LXRodW1icy1tb2JpbGUnLCB7XG4gICAgICBpc05hdmlnYXRpb246IHRydWUsXG4gICAgICBwYWdpbmF0aW9uIDogZmFsc2UsXG4gICAgICBhcnJvd3MgICAgIDogZmFsc2UsXG4gICAgICBjb3ZlciAgICAgIDogZmFsc2UsXG4gICAgICB0eXBlICAgICA6ICdzbGlkZScsXG4gICAgICBwZXJQYWdlOiAyLFxuICAgICAgd2lkdGg6ICcxNjBweCdcbiAgICBcbiAgICAgXG4gICAgfSApLm1vdW50KCk7XG5cblxuXG4gICAgICB9XG4gIFxuICAgICAgcHJpbWFyeVNsaWRlci5tb3VudCgpO1xuICAgICAgcHJpbWFyeVNsaWRlci5zeW5jKHNlY29uZGFyeVNsaWRlcikubW91bnQoKTtcblxufVxuXG5zd2l0Y2hPcmllbnRhdGlvbigpO1xuXG5cbiAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKXtcbiAgICBzd2l0Y2hPcmllbnRhdGlvbigpO1xufVxuXG5cblxuY29uc3QgcHJvZHVjdFRodW1icyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5zcGxpZGVfX3NsaWRlXCIpO1xuXG5wcm9kdWN0VGh1bWJzLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XG5cbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICBcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXdlaWdodCcpKTtcbmNvbnN0IHByb2RXZWlnaHQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS13ZWlnaHQnKTtcblxuaWYgKHByb2RXZWlnaHQgPT0gJzEnKSB7XG5cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlaWdodC0yJykuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlaWdodC0xJykuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxufVxuXG5lbHNlICB7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlaWdodC0xJykuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VpZ2h0LTInKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXG5cbn1cblxuXG59KVxufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/scripts/product.js\n");

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