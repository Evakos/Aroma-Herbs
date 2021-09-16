/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/scripts/load-more"],{

/***/ "./resources/scripts/load-more.js":
/*!****************************************!*\
  !*** ./resources/scripts/load-more.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"jquery\");\nvar ppp = 4; // Post per page\n\nvar pageNumber = 1;\n\nfunction load_posts() {\n  pageNumber++;\n  var str = '&pageNumber=' + pageNumber + '&ppp=' + ppp + '&action=more_post_ajax';\n  $.ajax({\n    type: \"POST\",\n    dataType: \"html\",\n    url: \"/wp-admin/admin-ajax.php\",\n    data: str,\n    success: function success(data) {\n      var $data = $(data);\n\n      if ($data.length) {\n        $(\"#ajax-posts\").append($data);\n        $(\"#more-posts\").attr(\"disabled\", false);\n        $(\"#loader\").addClass(\"hidden\"); // Show loader.\n      } else {\n        $(\"#more-posts\").attr(\"disabled\", true);\n        $(\"#more-posts\").addClass(\"opacity-30\");\n        $(\"#more-posts\").html(\"All Loaded!\");\n      }\n    }\n  });\n  return false;\n}\n\n$(\"#more-posts\").on(\"click\", function () {\n  // When btn is pressed.\n  $(\"#more-posts\").attr(\"disabled\", true); // Disable the button, temp.\n\n  $(\"#loader\").removeClass(\"hidden\"); // Show loader.\n\n  load_posts();\n  $(this).insertAfter('#ajax-posts'); // Move the 'Load More' button to the end of the the newly added posts.\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2NyaXB0cy9sb2FkLW1vcmUuanM/N2ViMSJdLCJuYW1lcyI6WyJwcHAiLCJwYWdlTnVtYmVyIiwic3RyIiwiJCIsInR5cGUiLCJkYXRhVHlwZSIsInVybCIsImRhdGEiLCJzdWNjZXNzIiwiJGRhdGEiLCJsb2FkX3Bvc3RzIl0sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSUEsR0FBRyxHQUFQLEUsQ0FBYTs7QUFDYixJQUFJQyxVQUFVLEdBQWQ7O0FBR0Esc0JBQXFCO0FBQ2pCQSxZQUFVO0FBQ1YsTUFBSUMsR0FBRyxHQUFHLDhDQUFWO0FBQ0FDLEdBQUMsQ0FBREEsS0FBTztBQUNIQyxRQUFJLEVBREQ7QUFFSEMsWUFBUSxFQUZMO0FBR0hDLE9BQUcsRUFIQTtBQUlIQyxRQUFJLEVBSkQ7QUFLSEMsV0FBTyxFQUFFLHVCQUFjO0FBRW5CLFVBQUlDLEtBQUssR0FBR04sQ0FBQyxDQUFiLElBQWEsQ0FBYjs7QUFDQSxVQUFHTSxLQUFLLENBQVIsUUFBZ0I7QUFDWk4sU0FBQyxDQUFEQSxhQUFDLENBQURBO0FBQ0FBLFNBQUMsQ0FBREEsYUFBQyxDQUFEQTtBQUNBQSxTQUFDLENBQURBLFNBQUMsQ0FBREEsVUFIWSxRQUdaQSxFQUhZLENBR3FCO0FBSHJDLGFBTU07QUFDRkEsU0FBQyxDQUFEQSxhQUFDLENBQURBO0FBQ0FBLFNBQUMsQ0FBREEsYUFBQyxDQUFEQTtBQUNBQSxTQUFDLENBQURBLGFBQUMsQ0FBREE7QUFDSDtBQUNKO0FBbkJFLEdBQVBBO0FBc0JBO0FBQ0g7O0FBRURBLENBQUMsQ0FBREEsYUFBQyxDQUFEQSxhQUE0QixZQUFVO0FBQUU7QUFDcENBLEdBQUMsQ0FBREEsYUFBQyxDQUFEQSxrQkFEa0MsSUFDbENBLEVBRGtDLENBQ007O0FBQ3hDQSxHQUFDLENBQURBLFNBQUMsQ0FBREEsYUFGa0MsUUFFbENBLEVBRmtDLENBRUU7O0FBQ3BDTyxZQUFVO0FBQ1ZQLEdBQUMsQ0FBREEsSUFBQyxDQUFEQSxhQUprQyxhQUlsQ0EsRUFKa0MsQ0FJRTtBQUp4Q0EiLCJmaWxlIjoiLi9yZXNvdXJjZXMvc2NyaXB0cy9sb2FkLW1vcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcHBwID0gNDsgLy8gUG9zdCBwZXIgcGFnZVxudmFyIHBhZ2VOdW1iZXIgPSAxO1xuXG5cbmZ1bmN0aW9uIGxvYWRfcG9zdHMoKXtcbiAgICBwYWdlTnVtYmVyKys7XG4gICAgdmFyIHN0ciA9ICcmcGFnZU51bWJlcj0nICsgcGFnZU51bWJlciArICcmcHBwPScgKyBwcHAgKyAnJmFjdGlvbj1tb3JlX3Bvc3RfYWpheCc7XG4gICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgIGRhdGFUeXBlOiBcImh0bWxcIixcbiAgICAgICAgdXJsOiBcIi93cC1hZG1pbi9hZG1pbi1hamF4LnBocFwiLFxuICAgICAgICBkYXRhOiBzdHIsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciAkZGF0YSA9ICQoZGF0YSk7XG4gICAgICAgICAgICBpZigkZGF0YS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICQoXCIjYWpheC1wb3N0c1wiKS5hcHBlbmQoJGRhdGEpO1xuICAgICAgICAgICAgICAgICQoXCIjbW9yZS1wb3N0c1wiKS5hdHRyKFwiZGlzYWJsZWRcIixmYWxzZSk7XG4gICAgICAgICAgICAgICAgJChcIiNsb2FkZXJcIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7IC8vIFNob3cgbG9hZGVyLlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgJChcIiNtb3JlLXBvc3RzXCIpLmF0dHIoXCJkaXNhYmxlZFwiLHRydWUpO1xuICAgICAgICAgICAgICAgICQoXCIjbW9yZS1wb3N0c1wiKS5hZGRDbGFzcyhcIm9wYWNpdHktMzBcIik7XG4gICAgICAgICAgICAgICAgJChcIiNtb3JlLXBvc3RzXCIpLmh0bWwoXCJBbGwgTG9hZGVkIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSk7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4kKFwiI21vcmUtcG9zdHNcIikub24oXCJjbGlja1wiLGZ1bmN0aW9uKCl7IC8vIFdoZW4gYnRuIGlzIHByZXNzZWQuXG4gICAgJChcIiNtb3JlLXBvc3RzXCIpLmF0dHIoXCJkaXNhYmxlZFwiLHRydWUpOyAvLyBEaXNhYmxlIHRoZSBidXR0b24sIHRlbXAuXG4gICAgJChcIiNsb2FkZXJcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7IC8vIFNob3cgbG9hZGVyLlxuICAgIGxvYWRfcG9zdHMoKTtcbiAgICAkKHRoaXMpLmluc2VydEFmdGVyKCcjYWpheC1wb3N0cycpOyAvLyBNb3ZlIHRoZSAnTG9hZCBNb3JlJyBidXR0b24gdG8gdGhlIGVuZCBvZiB0aGUgdGhlIG5ld2x5IGFkZGVkIHBvc3RzLlxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/scripts/load-more.js\n");

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
/******/ var __webpack_exports__ = (__webpack_exec__("./resources/scripts/load-more.js"));
/******/ }
]);