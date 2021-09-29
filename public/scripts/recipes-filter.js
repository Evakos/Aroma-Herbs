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
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"jquery\");\njQuery(function ($) {\n  $(\"#recipefilter\").change(function () {\n    var recipefilter = $(\"#recipefilter\");\n    $(\"#recipe-response\").toggleClass('fade-in-fast');\n\n    if ($(\"input[name='viewall']\").prop(\"checked\")) {\n      //console.log(\"Checked\");\n      $(\"select\").val(\"select\");\n    }\n\n    $.ajax({\n      url: recipefilter.attr(\"action\"),\n      data: recipefilter.serialize(),\n      // form data\n      type: recipefilter.attr(\"method\"),\n      // POST\n      beforeSend: function beforeSend(xhr) {\n        recipefilter.find(\"button\").text(\"Processing...\"); // changing the button label\n      },\n      success: function success(data) {\n        //console.log(data);\n        recipefilter.find(\"button\").text(\"Apply filter\"); // changing the button label back\n\n        $(\"#recipe-response\").html(data); // insert data\n      }\n    });\n    return false;\n  }).change();\n});\n$(\"select\").change(function () {\n  console.log(\"select changed\"); // $(\".sub-menu li\").click(function(){\n  //   $(\".sub-menu li\").removeClass('active');//to make sure there will be only one with the class 'active'\n  //   $(this).addClass('active');\n  // });\n\n  $(this).removeClass(\"style-select\");\n  $('option', this).removeClass(\"select-active\");\n  $('option:checked', this).addClass(\"select-active\");\n  $('option', this).parent('select').removeClass(\"style-select\");\n  $('option:checked:not(.initial)', this).parent('select').addClass(\"style-select\"); //$(this).addClass('dark');\n\n  $(\"input[name='viewall']\").removeAttr(\"checked\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2NyaXB0cy9yZWNpcGVzLWZpbHRlci5qcz9iZjlhIl0sIm5hbWVzIjpbImpRdWVyeSIsIiQiLCJyZWNpcGVmaWx0ZXIiLCJ1cmwiLCJkYXRhIiwidHlwZSIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6IjtBQUFBQSxNQUFNLENBQUMsYUFBYTtBQUVsQkMsR0FBQyxDQUFEQSxlQUFDLENBQURBLFFBQTBCLFlBQVk7QUFDcEMsUUFBSUMsWUFBWSxHQUFHRCxDQUFDLENBQXBCLGVBQW9CLENBQXBCO0FBRUhBLEtBQUMsQ0FBREEsa0JBQUMsQ0FBREE7O0FBRUcsUUFBSUEsQ0FBQyxDQUFEQSx1QkFBQyxDQUFEQSxNQUFKLFNBQUlBLENBQUosRUFBZ0Q7QUFDOUM7QUFFQUEsT0FBQyxDQUFEQSxRQUFDLENBQURBO0FBQ0Q7O0FBRURBLEtBQUMsQ0FBREEsS0FBTztBQUNMRSxTQUFHLEVBQUVELFlBQVksQ0FBWkEsS0FEQSxRQUNBQSxDQURBO0FBRUxFLFVBQUksRUFBRUYsWUFBWSxDQUZiLFNBRUNBLEVBRkQ7QUFFMkI7QUFDaENHLFVBQUksRUFBRUgsWUFBWSxDQUFaQSxLQUhELFFBR0NBLENBSEQ7QUFHOEI7QUFDbkNJLGdCQUFVLEVBQUUseUJBQWU7QUFDekJKLG9CQUFZLENBQVpBLG9CQUR5QixlQUN6QkEsRUFEeUIsQ0FDMEI7QUFMaEQ7QUFPTEssYUFBTyxFQUFFLHVCQUFnQjtBQUN2QjtBQUNBTCxvQkFBWSxDQUFaQSxvQkFGdUIsY0FFdkJBLEVBRnVCLENBRTJCOztBQUNsREQsU0FBQyxDQUFEQSxrQkFBQyxDQUFEQSxNQUh1QixJQUd2QkEsRUFIdUIsQ0FHVztBQUNuQztBQVhJLEtBQVBBO0FBYUE7QUF4QkZBO0FBRkZELENBQU0sQ0FBTkE7QUErQkFDLENBQUMsQ0FBREEsUUFBQyxDQUFEQSxRQUFtQixZQUFZO0FBRTlCTyxTQUFPLENBQVBBLElBRjhCLGdCQUU5QkEsRUFGOEIsQ0FJN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUFQLEdBQUMsQ0FBREEsSUFBQyxDQUFEQTtBQUdBQSxHQUFDLFdBQURBLElBQUMsQ0FBREE7QUFDQUEsR0FBQyxtQkFBREEsSUFBQyxDQUFEQTtBQUVBQSxHQUFDLFdBQURBLElBQUMsQ0FBREE7QUFDQUEsR0FBQyxpQ0FBREEsSUFBQyxDQUFEQSwyQkFoQjZCLGNBZ0I3QkEsRUFoQjZCLENBb0I3Qjs7QUFDQUEsR0FBQyxDQUFEQSx1QkFBQyxDQUFEQTtBQXJCRkEiLCJmaWxlIjoiLi9yZXNvdXJjZXMvc2NyaXB0cy9yZWNpcGVzLWZpbHRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShmdW5jdGlvbiAoJCkge1xuXHRcbiAgJChcIiNyZWNpcGVmaWx0ZXJcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVjaXBlZmlsdGVyID0gJChcIiNyZWNpcGVmaWx0ZXJcIik7XG5cblx0JChcIiNyZWNpcGUtcmVzcG9uc2VcIikudG9nZ2xlQ2xhc3MoJ2ZhZGUtaW4tZmFzdCcpOyBcbiAgIFxuICAgIGlmICgkKFwiaW5wdXRbbmFtZT0ndmlld2FsbCddXCIpLnByb3AoXCJjaGVja2VkXCIpKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiQ2hlY2tlZFwiKTtcblxuICAgICAgJChcInNlbGVjdFwiKS52YWwoXCJzZWxlY3RcIik7XG4gICAgfVxuXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogcmVjaXBlZmlsdGVyLmF0dHIoXCJhY3Rpb25cIiksXG4gICAgICBkYXRhOiByZWNpcGVmaWx0ZXIuc2VyaWFsaXplKCksIC8vIGZvcm0gZGF0YVxuICAgICAgdHlwZTogcmVjaXBlZmlsdGVyLmF0dHIoXCJtZXRob2RcIiksIC8vIFBPU1RcbiAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICh4aHIpIHtcbiAgICAgICAgcmVjaXBlZmlsdGVyLmZpbmQoXCJidXR0b25cIikudGV4dChcIlByb2Nlc3NpbmcuLi5cIik7IC8vIGNoYW5naW5nIHRoZSBidXR0b24gbGFiZWxcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICByZWNpcGVmaWx0ZXIuZmluZChcImJ1dHRvblwiKS50ZXh0KFwiQXBwbHkgZmlsdGVyXCIpOyAvLyBjaGFuZ2luZyB0aGUgYnV0dG9uIGxhYmVsIGJhY2tcbiAgICAgICAgJChcIiNyZWNpcGUtcmVzcG9uc2VcIikuaHRtbChkYXRhKTsgLy8gaW5zZXJ0IGRhdGFcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KS5jaGFuZ2UoKTtcbn0pXG5cblxuJChcInNlbGVjdFwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuXG5cdGNvbnNvbGUubG9nKFwic2VsZWN0IGNoYW5nZWRcIik7XG5cbiAgLy8gJChcIi5zdWItbWVudSBsaVwiKS5jbGljayhmdW5jdGlvbigpe1xuICAvLyAgICQoXCIuc3ViLW1lbnUgbGlcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOy8vdG8gbWFrZSBzdXJlIHRoZXJlIHdpbGwgYmUgb25seSBvbmUgd2l0aCB0aGUgY2xhc3MgJ2FjdGl2ZSdcbiAgLy8gICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgLy8gfSk7XG5cbiAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcInN0eWxlLXNlbGVjdFwiKTtcblxuXG4gICQoJ29wdGlvbicsIHRoaXMpLnJlbW92ZUNsYXNzKFwic2VsZWN0LWFjdGl2ZVwiKTtcbiAgJCgnb3B0aW9uOmNoZWNrZWQnLCB0aGlzKS5hZGRDbGFzcyhcInNlbGVjdC1hY3RpdmVcIik7XG5cbiAgJCgnb3B0aW9uJywgdGhpcykucGFyZW50KCdzZWxlY3QnKS5yZW1vdmVDbGFzcyhcInN0eWxlLXNlbGVjdFwiKTtcbiAgJCgnb3B0aW9uOmNoZWNrZWQ6bm90KC5pbml0aWFsKScsIHRoaXMpLnBhcmVudCgnc2VsZWN0JykuYWRkQ2xhc3MoXCJzdHlsZS1zZWxlY3RcIik7XG5cbiAgXG5cbiAgLy8kKHRoaXMpLmFkZENsYXNzKCdkYXJrJyk7XG4gICQoXCJpbnB1dFtuYW1lPSd2aWV3YWxsJ11cIikucmVtb3ZlQXR0cihcImNoZWNrZWRcIikgXG5cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/scripts/recipes-filter.js\n");

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