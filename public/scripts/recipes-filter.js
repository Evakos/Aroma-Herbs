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

eval("/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"jquery\");\njQuery(function ($) {\n  $(\"#recipefilter\").change(function () {\n    var recipefilter = $(\"#recipefilter\");\n    $(\"#recipe-response\").toggleClass('fade-in-fast');\n\n    if ($(\"input[name='viewall']\").prop(\"checked\")) {\n      //console.log(\"Checked\");\n      $('select').removeClass(\"style-select\");\n      $(\"select\").val(\"select\");\n    }\n\n    $.ajax({\n      url: recipefilter.attr(\"action\"),\n      data: recipefilter.serialize(),\n      // form data\n      type: recipefilter.attr(\"method\"),\n      // POST\n      beforeSend: function beforeSend(xhr) {\n        recipefilter.find(\"button\").text(\"Processing...\"); // changing the button label\n      },\n      success: function success(data) {\n        //console.log(data);\n        recipefilter.find(\"button\").text(\"Apply filter\"); // changing the button label back\n\n        $(\"#recipe-response\").html(data); // insert data\n      }\n    });\n    return false;\n  }).change();\n});\n$(\"select\").change(function () {\n  console.log(\"select changed\"); // $(\".sub-menu li\").click(function(){\n  //   $(\".sub-menu li\").removeClass('active');//to make sure there will be only one with the class 'active'\n  //   $(this).addClass('active');\n  // });\n\n  $(this).removeClass(\"style-select\");\n  $('option', this).removeClass(\"select-active\");\n  $('option:checked', this).addClass(\"select-active\");\n  $('option', this).parent('select').removeClass(\"style-select\");\n  $('option:checked:not(.initial)', this).parent('select').addClass(\"style-select\"); //$(this).addClass('dark');\n\n  $(\"input[name='viewall']\").removeAttr(\"checked\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2NyaXB0cy9yZWNpcGVzLWZpbHRlci5qcz9iZjlhIl0sIm5hbWVzIjpbImpRdWVyeSIsIiQiLCJyZWNpcGVmaWx0ZXIiLCJ1cmwiLCJkYXRhIiwidHlwZSIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6IjtBQUFBQSxNQUFNLENBQUMsYUFBYTtBQUVsQkMsR0FBQyxDQUFEQSxlQUFDLENBQURBLFFBQTBCLFlBQVk7QUFDcEMsUUFBSUMsWUFBWSxHQUFHRCxDQUFDLENBQXBCLGVBQW9CLENBQXBCO0FBRUhBLEtBQUMsQ0FBREEsa0JBQUMsQ0FBREE7O0FBRUcsUUFBSUEsQ0FBQyxDQUFEQSx1QkFBQyxDQUFEQSxNQUFKLFNBQUlBLENBQUosRUFBZ0Q7QUFDOUM7QUFFQUEsT0FBQyxDQUFEQSxRQUFDLENBQURBO0FBRUFBLE9BQUMsQ0FBREEsUUFBQyxDQUFEQTtBQUNEOztBQUVEQSxLQUFDLENBQURBLEtBQU87QUFDTEUsU0FBRyxFQUFFRCxZQUFZLENBQVpBLEtBREEsUUFDQUEsQ0FEQTtBQUVMRSxVQUFJLEVBQUVGLFlBQVksQ0FGYixTQUVDQSxFQUZEO0FBRTJCO0FBQ2hDRyxVQUFJLEVBQUVILFlBQVksQ0FBWkEsS0FIRCxRQUdDQSxDQUhEO0FBRzhCO0FBQ25DSSxnQkFBVSxFQUFFLHlCQUFlO0FBQ3pCSixvQkFBWSxDQUFaQSxvQkFEeUIsZUFDekJBLEVBRHlCLENBQzBCO0FBTGhEO0FBT0xLLGFBQU8sRUFBRSx1QkFBZ0I7QUFDdkI7QUFDQUwsb0JBQVksQ0FBWkEsb0JBRnVCLGNBRXZCQSxFQUZ1QixDQUUyQjs7QUFDbERELFNBQUMsQ0FBREEsa0JBQUMsQ0FBREEsTUFIdUIsSUFHdkJBLEVBSHVCLENBR1c7QUFDbkM7QUFYSSxLQUFQQTtBQWFBO0FBMUJGQTtBQUZGRCxDQUFNLENBQU5BO0FBaUNBQyxDQUFDLENBQURBLFFBQUMsQ0FBREEsUUFBbUIsWUFBWTtBQUU5Qk8sU0FBTyxDQUFQQSxJQUY4QixnQkFFOUJBLEVBRjhCLENBSTdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBUCxHQUFDLENBQURBLElBQUMsQ0FBREE7QUFHQUEsR0FBQyxXQUFEQSxJQUFDLENBQURBO0FBQ0FBLEdBQUMsbUJBQURBLElBQUMsQ0FBREE7QUFFQUEsR0FBQyxXQUFEQSxJQUFDLENBQURBO0FBQ0FBLEdBQUMsaUNBQURBLElBQUMsQ0FBREEsMkJBaEI2QixjQWdCN0JBLEVBaEI2QixDQW9CN0I7O0FBQ0FBLEdBQUMsQ0FBREEsdUJBQUMsQ0FBREE7QUFyQkZBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL3NjcmlwdHMvcmVjaXBlcy1maWx0ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJqUXVlcnkoZnVuY3Rpb24gKCQpIHtcblx0XG4gICQoXCIjcmVjaXBlZmlsdGVyXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlY2lwZWZpbHRlciA9ICQoXCIjcmVjaXBlZmlsdGVyXCIpO1xuXG5cdCQoXCIjcmVjaXBlLXJlc3BvbnNlXCIpLnRvZ2dsZUNsYXNzKCdmYWRlLWluLWZhc3QnKTsgXG4gICBcbiAgICBpZiAoJChcImlucHV0W25hbWU9J3ZpZXdhbGwnXVwiKS5wcm9wKFwiY2hlY2tlZFwiKSkge1xuICAgICAgLy9jb25zb2xlLmxvZyhcIkNoZWNrZWRcIik7XG5cbiAgICAgICQoJ3NlbGVjdCcpLnJlbW92ZUNsYXNzKFwic3R5bGUtc2VsZWN0XCIpO1xuXG4gICAgICAkKFwic2VsZWN0XCIpLnZhbChcInNlbGVjdFwiKTtcbiAgICB9XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiByZWNpcGVmaWx0ZXIuYXR0cihcImFjdGlvblwiKSxcbiAgICAgIGRhdGE6IHJlY2lwZWZpbHRlci5zZXJpYWxpemUoKSwgLy8gZm9ybSBkYXRhXG4gICAgICB0eXBlOiByZWNpcGVmaWx0ZXIuYXR0cihcIm1ldGhvZFwiKSwgLy8gUE9TVFxuICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHhocikge1xuICAgICAgICByZWNpcGVmaWx0ZXIuZmluZChcImJ1dHRvblwiKS50ZXh0KFwiUHJvY2Vzc2luZy4uLlwiKTsgLy8gY2hhbmdpbmcgdGhlIGJ1dHRvbiBsYWJlbFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHJlY2lwZWZpbHRlci5maW5kKFwiYnV0dG9uXCIpLnRleHQoXCJBcHBseSBmaWx0ZXJcIik7IC8vIGNoYW5naW5nIHRoZSBidXR0b24gbGFiZWwgYmFja1xuICAgICAgICAkKFwiI3JlY2lwZS1yZXNwb25zZVwiKS5odG1sKGRhdGEpOyAvLyBpbnNlcnQgZGF0YVxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pLmNoYW5nZSgpO1xufSlcblxuXG4kKFwic2VsZWN0XCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG5cblx0Y29uc29sZS5sb2coXCJzZWxlY3QgY2hhbmdlZFwiKTtcblxuICAvLyAkKFwiLnN1Yi1tZW51IGxpXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gIC8vICAgJChcIi5zdWItbWVudSBsaVwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7Ly90byBtYWtlIHN1cmUgdGhlcmUgd2lsbCBiZSBvbmx5IG9uZSB3aXRoIHRoZSBjbGFzcyAnYWN0aXZlJ1xuICAvLyAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAvLyB9KTtcblxuICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwic3R5bGUtc2VsZWN0XCIpO1xuXG5cbiAgJCgnb3B0aW9uJywgdGhpcykucmVtb3ZlQ2xhc3MoXCJzZWxlY3QtYWN0aXZlXCIpO1xuICAkKCdvcHRpb246Y2hlY2tlZCcsIHRoaXMpLmFkZENsYXNzKFwic2VsZWN0LWFjdGl2ZVwiKTtcblxuICAkKCdvcHRpb24nLCB0aGlzKS5wYXJlbnQoJ3NlbGVjdCcpLnJlbW92ZUNsYXNzKFwic3R5bGUtc2VsZWN0XCIpO1xuICAkKCdvcHRpb246Y2hlY2tlZDpub3QoLmluaXRpYWwpJywgdGhpcykucGFyZW50KCdzZWxlY3QnKS5hZGRDbGFzcyhcInN0eWxlLXNlbGVjdFwiKTtcblxuICBcblxuICAvLyQodGhpcykuYWRkQ2xhc3MoJ2RhcmsnKTtcbiAgJChcImlucHV0W25hbWU9J3ZpZXdhbGwnXVwiKS5yZW1vdmVBdHRyKFwiY2hlY2tlZFwiKSBcblxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/scripts/recipes-filter.js\n");

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