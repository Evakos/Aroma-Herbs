/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/scripts/recipes-filter"],{

/***/ "./resources/scripts/recipes-filter.js":
/*!*********************************************!*\
  !*** ./resources/scripts/recipes-filter.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"jquery\");\n/**\n * External Dependencies\n */\n\n\nfunction getRecipes() {\n  var recipefilter = $(\"#recipefilter\");\n  $(\"#recipe-response\").toggleClass('fade-in-fast');\n\n  if ($(\"input[name='viewall']\").prop(\"checked\")) {\n    //console.log(\"Checked\");\n    $('select').removeClass(\"style-select\");\n    $(\"select\").val(\"select\");\n  }\n\n  $.ajax({\n    url: recipefilter.attr(\"action\"),\n    data: recipefilter.serialize(),\n    // form data\n    type: recipefilter.attr(\"method\"),\n    // POST\n    beforeSend: function beforeSend(xhr) {\n      recipefilter.find(\"button\").text(\"Processing...\"); // changing the button label\n    },\n    success: function success(data) {\n      //console.log(data);\n      recipefilter.find(\"button\").text(\"Apply filter\"); // changing the button label back\n\n      $(\"#recipe-response\").html(data); // insert data\n    }\n  });\n  return false;\n}\n\ngetRecipes();\n$(\"#recipefilter\").change(function () {\n  getRecipes();\n});\n$(\"select\").change(function () {\n  console.log(\"select changed\");\n  $(this).removeClass(\"style-select\");\n  $('option', this).removeClass(\"select-active\");\n  $('option:checked', this).addClass(\"select-active\");\n  $('option', this).parent('select').removeClass(\"style-select\");\n  $('option:checked:not(.initial)', this).parent('select').addClass(\"style-select\"); //$(this).addClass('dark');\n\n  $(\"input[name='viewall']\").removeAttr(\"checked\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2NyaXB0cy9yZWNpcGVzLWZpbHRlci5qcz9iZjlhIl0sIm5hbWVzIjpbInJlY2lwZWZpbHRlciIsIiQiLCJ1cmwiLCJkYXRhIiwidHlwZSIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwiZ2V0UmVjaXBlcyIsImNvbnNvbGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQzs7QUFHQyxzQkFBdUI7QUFDckIsTUFBSUEsWUFBWSxHQUFHQyxDQUFDLENBQXBCLGVBQW9CLENBQXBCO0FBRUhBLEdBQUMsQ0FBREEsa0JBQUMsQ0FBREE7O0FBRUcsTUFBSUEsQ0FBQyxDQUFEQSx1QkFBQyxDQUFEQSxNQUFKLFNBQUlBLENBQUosRUFBZ0Q7QUFDOUM7QUFFQUEsS0FBQyxDQUFEQSxRQUFDLENBQURBO0FBRUFBLEtBQUMsQ0FBREEsUUFBQyxDQUFEQTtBQUNEOztBQUVEQSxHQUFDLENBQURBLEtBQU87QUFDTEMsT0FBRyxFQUFFRixZQUFZLENBQVpBLEtBREEsUUFDQUEsQ0FEQTtBQUVMRyxRQUFJLEVBQUVILFlBQVksQ0FGYixTQUVDQSxFQUZEO0FBRTJCO0FBQ2hDSSxRQUFJLEVBQUVKLFlBQVksQ0FBWkEsS0FIRCxRQUdDQSxDQUhEO0FBRzhCO0FBQ25DSyxjQUFVLEVBQUUseUJBQWU7QUFDekJMLGtCQUFZLENBQVpBLG9CQUR5QixlQUN6QkEsRUFEeUIsQ0FDMEI7QUFMaEQ7QUFPTE0sV0FBTyxFQUFFLHVCQUFnQjtBQUN2QjtBQUNBTixrQkFBWSxDQUFaQSxvQkFGdUIsY0FFdkJBLEVBRnVCLENBRTJCOztBQUNsREMsT0FBQyxDQUFEQSxrQkFBQyxDQUFEQSxNQUh1QixJQUd2QkEsRUFIdUIsQ0FHVztBQUNuQztBQVhJLEdBQVBBO0FBYUE7QUFFRDs7QUFFRE0sVUFBVTtBQUVWTixDQUFDLENBQURBLGVBQUMsQ0FBREEsUUFBMEIsWUFBWTtBQUdwQ00sWUFBVTtBQUhaTjtBQVVGQSxDQUFDLENBQURBLFFBQUMsQ0FBREEsUUFBbUIsWUFBWTtBQUU5Qk8sU0FBTyxDQUFQQTtBQUVDUCxHQUFDLENBQURBLElBQUMsQ0FBREE7QUFDQUEsR0FBQyxXQUFEQSxJQUFDLENBQURBO0FBQ0FBLEdBQUMsbUJBQURBLElBQUMsQ0FBREE7QUFFQUEsR0FBQyxXQUFEQSxJQUFDLENBQURBO0FBQ0FBLEdBQUMsaUNBQURBLElBQUMsQ0FBREEsMkJBVDZCLGNBUzdCQSxFQVQ2QixDQVc3Qjs7QUFDQUEsR0FBQyxDQUFEQSx1QkFBQyxDQUFEQTtBQVpGQSIsImZpbGUiOiIuL3Jlc291cmNlcy9zY3JpcHRzL3JlY2lwZXMtZmlsdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEV4dGVybmFsIERlcGVuZGVuY2llc1xuICovXG4gaW1wb3J0IFwianF1ZXJ5XCI7XG5cblxuICBmdW5jdGlvbiBnZXRSZWNpcGVzICgpIHtcbiAgICB2YXIgcmVjaXBlZmlsdGVyID0gJChcIiNyZWNpcGVmaWx0ZXJcIik7XG5cblx0JChcIiNyZWNpcGUtcmVzcG9uc2VcIikudG9nZ2xlQ2xhc3MoJ2ZhZGUtaW4tZmFzdCcpOyBcbiAgIFxuICAgIGlmICgkKFwiaW5wdXRbbmFtZT0ndmlld2FsbCddXCIpLnByb3AoXCJjaGVja2VkXCIpKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiQ2hlY2tlZFwiKTtcblxuICAgICAgJCgnc2VsZWN0JykucmVtb3ZlQ2xhc3MoXCJzdHlsZS1zZWxlY3RcIik7XG5cbiAgICAgICQoXCJzZWxlY3RcIikudmFsKFwic2VsZWN0XCIpO1xuICAgIH1cblxuICAgICQuYWpheCh7XG4gICAgICB1cmw6IHJlY2lwZWZpbHRlci5hdHRyKFwiYWN0aW9uXCIpLFxuICAgICAgZGF0YTogcmVjaXBlZmlsdGVyLnNlcmlhbGl6ZSgpLCAvLyBmb3JtIGRhdGFcbiAgICAgIHR5cGU6IHJlY2lwZWZpbHRlci5hdHRyKFwibWV0aG9kXCIpLCAvLyBQT1NUXG4gICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAoeGhyKSB7XG4gICAgICAgIHJlY2lwZWZpbHRlci5maW5kKFwiYnV0dG9uXCIpLnRleHQoXCJQcm9jZXNzaW5nLi4uXCIpOyAvLyBjaGFuZ2luZyB0aGUgYnV0dG9uIGxhYmVsXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgcmVjaXBlZmlsdGVyLmZpbmQoXCJidXR0b25cIikudGV4dChcIkFwcGx5IGZpbHRlclwiKTsgLy8gY2hhbmdpbmcgdGhlIGJ1dHRvbiBsYWJlbCBiYWNrXG4gICAgICAgICQoXCIjcmVjaXBlLXJlc3BvbnNlXCIpLmh0bWwoZGF0YSk7IC8vIGluc2VydCBkYXRhXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiBmYWxzZTtcblxuICB9XG5cbiAgZ2V0UmVjaXBlcygpO1xuXG4gICQoXCIjcmVjaXBlZmlsdGVyXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cblxuICAgIGdldFJlY2lwZXMoKTtcbiAgXG5cbiAgfSk7XG5cblxuXG4kKFwic2VsZWN0XCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cblx0Y29uc29sZS5sb2coXCJzZWxlY3QgY2hhbmdlZFwiKTtcblxuICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwic3R5bGUtc2VsZWN0XCIpO1xuICAkKCdvcHRpb24nLCB0aGlzKS5yZW1vdmVDbGFzcyhcInNlbGVjdC1hY3RpdmVcIik7XG4gICQoJ29wdGlvbjpjaGVja2VkJywgdGhpcykuYWRkQ2xhc3MoXCJzZWxlY3QtYWN0aXZlXCIpO1xuXG4gICQoJ29wdGlvbicsIHRoaXMpLnBhcmVudCgnc2VsZWN0JykucmVtb3ZlQ2xhc3MoXCJzdHlsZS1zZWxlY3RcIik7XG4gICQoJ29wdGlvbjpjaGVja2VkOm5vdCguaW5pdGlhbCknLCB0aGlzKS5wYXJlbnQoJ3NlbGVjdCcpLmFkZENsYXNzKFwic3R5bGUtc2VsZWN0XCIpO1xuXG4gIC8vJCh0aGlzKS5hZGRDbGFzcygnZGFyaycpO1xuICAkKFwiaW5wdXRbbmFtZT0ndmlld2FsbCddXCIpLnJlbW92ZUF0dHIoXCJjaGVja2VkXCIpIFxuXG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/scripts/recipes-filter.js\n");

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
/******/ var __webpack_exports__ = (__webpack_exec__("./resources/scripts/recipes-filter.js"));
/******/ }
]);