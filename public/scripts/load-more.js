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

eval("/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"jquery\");\nvar ppp = 4; // Post per page\n\nvar pageNumber = 1;\n\nfunction load_posts() {\n  pageNumber++;\n  var str = '&pageNumber=' + pageNumber + '&ppp=' + ppp + '&action=more_post_ajax';\n  $.ajax({\n    type: \"POST\",\n    dataType: \"html\",\n    url: \"/wp-admin/admin-ajax.php\",\n    data: str,\n    success: function success(data) {\n      var $data = $(data);\n\n      if ($data.length) {\n        $(\"#ajax-posts\").append($data);\n        $(\"#more-posts\").attr(\"disabled\", false);\n      } else {\n        $(\"#more-posts\").attr(\"disabled\", true);\n        $(\"#more-posts\").addClass(\"opacity-20\");\n        $(\"#more-posts\").html(\"All Loaded!\");\n      }\n    },\n    error: function error(jqXHR, textStatus, errorThrown) {//$loader.html(jqXHR + \" :: \" + textStatus + \" :: \" + errorThrown);\n    }\n  });\n  return false;\n}\n\n$(\"#more-posts\").on(\"click\", function () {\n  // When btn is pressed.\n  $(\"#more-posts\").attr(\"disabled\", true); // Disable the button, temp.\n\n  load_posts();\n  $(this).insertAfter('#ajax-posts'); // Move the 'Load More' button to the end of the the newly added posts.\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2NyaXB0cy9sb2FkLW1vcmUuanM/N2ViMSJdLCJuYW1lcyI6WyJwcHAiLCJwYWdlTnVtYmVyIiwic3RyIiwiJCIsInR5cGUiLCJkYXRhVHlwZSIsInVybCIsImRhdGEiLCJzdWNjZXNzIiwiJGRhdGEiLCJlcnJvciIsImxvYWRfcG9zdHMiXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFJQSxHQUFHLEdBQVAsRSxDQUFhOztBQUNiLElBQUlDLFVBQVUsR0FBZDs7QUFHQSxzQkFBcUI7QUFDakJBLFlBQVU7QUFDVixNQUFJQyxHQUFHLEdBQUcsOENBQVY7QUFDQUMsR0FBQyxDQUFEQSxLQUFPO0FBQ0hDLFFBQUksRUFERDtBQUVIQyxZQUFRLEVBRkw7QUFHSEMsT0FBRyxFQUhBO0FBSUhDLFFBQUksRUFKRDtBQUtIQyxXQUFPLEVBQUUsdUJBQWM7QUFDbkIsVUFBSUMsS0FBSyxHQUFHTixDQUFDLENBQWIsSUFBYSxDQUFiOztBQUNBLFVBQUdNLEtBQUssQ0FBUixRQUFnQjtBQUNaTixTQUFDLENBQURBLGFBQUMsQ0FBREE7QUFDQUEsU0FBQyxDQUFEQSxhQUFDLENBQURBO0FBRkosYUFHTTtBQUNGQSxTQUFDLENBQURBLGFBQUMsQ0FBREE7QUFDQUEsU0FBQyxDQUFEQSxhQUFDLENBQURBO0FBQ0FBLFNBQUMsQ0FBREEsYUFBQyxDQUFEQTtBQUNIO0FBZEY7QUFnQkhPLFNBQUssRUFBRywrQ0FBeUMsQ0FDN0M7QUFDSDtBQWxCRSxHQUFQUDtBQXFCQTtBQUNIOztBQUVEQSxDQUFDLENBQURBLGFBQUMsQ0FBREEsYUFBNEIsWUFBVTtBQUFFO0FBQ3BDQSxHQUFDLENBQURBLGFBQUMsQ0FBREEsa0JBRGtDLElBQ2xDQSxFQURrQyxDQUNNOztBQUN4Q1EsWUFBVTtBQUNWUixHQUFDLENBQURBLElBQUMsQ0FBREEsYUFIa0MsYUFHbENBLEVBSGtDLENBR0U7QUFIeENBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL3NjcmlwdHMvbG9hZC1tb3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHBwcCA9IDQ7IC8vIFBvc3QgcGVyIHBhZ2VcbnZhciBwYWdlTnVtYmVyID0gMTtcblxuXG5mdW5jdGlvbiBsb2FkX3Bvc3RzKCl7XG4gICAgcGFnZU51bWJlcisrO1xuICAgIHZhciBzdHIgPSAnJnBhZ2VOdW1iZXI9JyArIHBhZ2VOdW1iZXIgKyAnJnBwcD0nICsgcHBwICsgJyZhY3Rpb249bW9yZV9wb3N0X2FqYXgnO1xuICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICBkYXRhVHlwZTogXCJodG1sXCIsXG4gICAgICAgIHVybDogXCIvd3AtYWRtaW4vYWRtaW4tYWpheC5waHBcIixcbiAgICAgICAgZGF0YTogc3RyLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIHZhciAkZGF0YSA9ICQoZGF0YSk7XG4gICAgICAgICAgICBpZigkZGF0YS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICQoXCIjYWpheC1wb3N0c1wiKS5hcHBlbmQoJGRhdGEpO1xuICAgICAgICAgICAgICAgICQoXCIjbW9yZS1wb3N0c1wiKS5hdHRyKFwiZGlzYWJsZWRcIixmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgJChcIiNtb3JlLXBvc3RzXCIpLmF0dHIoXCJkaXNhYmxlZFwiLHRydWUpO1xuICAgICAgICAgICAgICAgICQoXCIjbW9yZS1wb3N0c1wiKS5hZGRDbGFzcyhcIm9wYWNpdHktMjBcIik7XG4gICAgICAgICAgICAgICAgJChcIiNtb3JlLXBvc3RzXCIpLmh0bWwoXCJBbGwgTG9hZGVkIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgIC8vJGxvYWRlci5odG1sKGpxWEhSICsgXCIgOjogXCIgKyB0ZXh0U3RhdHVzICsgXCIgOjogXCIgKyBlcnJvclRocm93bik7XG4gICAgICAgIH1cblxuICAgIH0pO1xuICAgIHJldHVybiBmYWxzZTtcbn1cblxuJChcIiNtb3JlLXBvc3RzXCIpLm9uKFwiY2xpY2tcIixmdW5jdGlvbigpeyAvLyBXaGVuIGJ0biBpcyBwcmVzc2VkLlxuICAgICQoXCIjbW9yZS1wb3N0c1wiKS5hdHRyKFwiZGlzYWJsZWRcIix0cnVlKTsgLy8gRGlzYWJsZSB0aGUgYnV0dG9uLCB0ZW1wLlxuICAgIGxvYWRfcG9zdHMoKTtcbiAgICAkKHRoaXMpLmluc2VydEFmdGVyKCcjYWpheC1wb3N0cycpOyAvLyBNb3ZlIHRoZSAnTG9hZCBNb3JlJyBidXR0b24gdG8gdGhlIGVuZCBvZiB0aGUgdGhlIG5ld2x5IGFkZGVkIHBvc3RzLlxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/scripts/load-more.js\n");

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