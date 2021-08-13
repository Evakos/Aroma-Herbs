/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/scripts/app"],{

/***/ "./resources/scripts/app.js":
/*!**********************************!*\
  !*** ./resources/scripts/app.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"jquery\");\n/**\n * External Dependencies\n */\n\n$(\".hamburger\").click(function () {\n  $(this).toggleClass(\"is-active\"); // $(\"#menu-modal\").css(\"width\", \"60%\")\n\n  $(\"#menu-modal\").toggleClass(\"menu-active\");\n  $(\"#overlay\").toggleClass(\"hidden fade-in-fast\");\n}); // Add active class to the current button (highlight it)\n// var header = document.getElementById(\"myDIV\");\n\nvar btns = document.getElementsByClassName(\"prod-filter\");\n\nfor (var i = 0; i < btns.length; i++) {\n  btns[i].addEventListener(\"click\", function () {\n    var current = document.getElementsByClassName(\"filter-active\");\n    current[0].className = current[0].className.replace(\" filter-active\", \"\");\n    this.className += \" filter-active\";\n  });\n}\n\n$(function () {\n  //console.log('Filter Block');\n  //var default_id = 3;\n  $(\"#products\").hide(); //$('#products').removeClass('fade-in'); // remove fade-in class\n\n  $(\".prod-filter\").click(function (e) {\n    //console.log(\"Filter Clicked\");\n    var term_id = jQuery(this).attr(\"product-id\"); //console.log(\"The ID:\" + term_id);\n\n    $.ajax({\n      type: \"post\",\n      //  url : '<?php echo site_url() ?>/wp-admin/admin-ajax.php',\n      // url : sage.admin_url,\n      url: \"/wp-admin/admin-ajax.php\",\n      data: {\n        action: \"filterproducts\",\n        categoryfilter: term_id\n      },\n      success: function success(data) {\n        //console.log('This is the data' + data);\n        $(\"#products\").show();\n        $('#products').removeClass('fade-in');\n        $('#products').addClass('fade-in'); // $(\"#all-products\").toggleClass(\"fade-in\");\n\n        $(\"#products\").html(data);\n        $(\"#all-products\").hide(); // $(\".cat-filter\").removeClass(\"filter-active\");\n        // $('[product-id=\"' + term_id + '\"]').addClass(\"filter-active\");\n      }\n    });\n    e.preventDefault();\n  });\n}); // import then needed Font Awesome functionality\n\n // import the Facebook and Twitter icons\n\n // add the imported icons to the library\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__.library.add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faFacebook, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faInstagram); // tell FontAwesome to watch the DOM and add the SVGs when it detects icon markup\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__.dom.watch();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2NyaXB0cy9hcHAuanM/Y2U0YyJdLCJuYW1lcyI6WyIkIiwiYnRucyIsImRvY3VtZW50IiwiaSIsImN1cnJlbnQiLCJ0ZXJtX2lkIiwialF1ZXJ5IiwidHlwZSIsInVybCIsImRhdGEiLCJhY3Rpb24iLCJjYXRlZ29yeWZpbHRlciIsInN1Y2Nlc3MiLCJlIiwibGlicmFyeSIsImRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQUEsQ0FBQyxDQUFEQSxZQUFDLENBQURBLE9BQXNCLFlBQVk7QUFDaENBLEdBQUMsQ0FBREEsSUFBQyxDQUFEQSxhQURnQyxXQUNoQ0EsRUFEZ0MsQ0FFaEM7O0FBQ0FBLEdBQUMsQ0FBREEsYUFBQyxDQUFEQTtBQUNBQSxHQUFDLENBQURBLFVBQUMsQ0FBREE7QUFKRkEsRyxDQVFBO0FBQ0E7O0FBQ0EsSUFBSUMsSUFBSSxHQUFHQyxRQUFRLENBQVJBLHVCQUFYLGFBQVdBLENBQVg7O0FBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBR0YsSUFBSSxDQUF4QixRQUFpQ0UsQ0FBakMsSUFBc0M7QUFDcENGLE1BQUksQ0FBSkEsQ0FBSSxDQUFKQSwyQkFBa0MsWUFBVztBQUM3QyxRQUFJRyxPQUFPLEdBQUdGLFFBQVEsQ0FBUkEsdUJBQWQsZUFBY0EsQ0FBZDtBQUNBRSxXQUFPLENBQVBBLENBQU8sQ0FBUEEsYUFBdUJBLE9BQU8sQ0FBUEEsQ0FBTyxDQUFQQSxxQ0FBdkJBLEVBQXVCQSxDQUF2QkE7QUFDQTtBQUhBSDtBQUtEOztBQUVERCxDQUFDLENBQUMsWUFBTTtBQUNOO0FBRUE7QUFJQUEsR0FBQyxDQUFEQSxXQUFDLENBQURBLENBUE0sSUFPTkEsR0FQTSxDQVNOOztBQUVBQSxHQUFDLENBQURBLGNBQUMsQ0FBREEsT0FBd0IsYUFBYTtBQUNuQztBQUlBLFFBQUlLLE9BQU8sR0FBR0MsTUFBTSxDQUFOQSxJQUFNLENBQU5BLE1BTHFCLFlBS3JCQSxDQUFkLENBTG1DLENBT25DOztBQUtBTixLQUFDLENBQURBLEtBQU87QUFDTE8sVUFBSSxFQURDO0FBRUw7QUFDQTtBQUNBQyxTQUFHLEVBSkU7QUFLTEMsVUFBSSxFQUFFO0FBQUVDLGNBQU0sRUFBUjtBQUE0QkMsc0JBQWMsRUFBRU47QUFBNUMsT0FMRDtBQU1MTyxhQUFPLEVBQUUsdUJBQWdCO0FBQ3ZCO0FBRUFaLFNBQUMsQ0FBREEsV0FBQyxDQUFEQTtBQUVBQSxTQUFDLENBQURBLFdBQUMsQ0FBREE7QUFFQUEsU0FBQyxDQUFEQSxXQUFDLENBQURBLFVBUHVCLFNBT3ZCQSxFQVB1QixDQVl2Qjs7QUFFQUEsU0FBQyxDQUFEQSxXQUFDLENBQURBO0FBQ0FBLFNBQUMsQ0FBREEsZUFBQyxDQUFEQSxDQWZ1QixJQWV2QkEsR0FmdUIsQ0FnQnZCO0FBQ0E7QUFDRDtBQXhCSSxLQUFQQTtBQTBCQWEsS0FBQyxDQUFEQTtBQXRDRmI7QUFYRkEsQ0FBQyxDQUFEQSxDLENBb0RBOztDQUVBOztDQUdBOztBQUNBYyxvTyxDQUVBOztBQUNBQyIsImZpbGUiOiIuL3Jlc291cmNlcy9zY3JpcHRzL2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRXh0ZXJuYWwgRGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBcImpxdWVyeVwiO1xuXG5cbiQoXCIuaGFtYnVyZ2VyXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImlzLWFjdGl2ZVwiKTtcbiAgLy8gJChcIiNtZW51LW1vZGFsXCIpLmNzcyhcIndpZHRoXCIsIFwiNjAlXCIpXG4gICQoXCIjbWVudS1tb2RhbFwiKS50b2dnbGVDbGFzcyhcIm1lbnUtYWN0aXZlXCIpO1xuICAkKFwiI292ZXJsYXlcIikudG9nZ2xlQ2xhc3MoXCJoaWRkZW4gZmFkZS1pbi1mYXN0XCIpO1xuXG59KTtcblxuLy8gQWRkIGFjdGl2ZSBjbGFzcyB0byB0aGUgY3VycmVudCBidXR0b24gKGhpZ2hsaWdodCBpdClcbi8vIHZhciBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15RElWXCIpO1xudmFyIGJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvZC1maWx0ZXJcIik7XG5mb3IgKHZhciBpID0gMDsgaSA8IGJ0bnMubGVuZ3RoOyBpKyspIHtcbiAgYnRuc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gIHZhciBjdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZpbHRlci1hY3RpdmVcIik7XG4gIGN1cnJlbnRbMF0uY2xhc3NOYW1lID0gY3VycmVudFswXS5jbGFzc05hbWUucmVwbGFjZShcIiBmaWx0ZXItYWN0aXZlXCIsIFwiXCIpO1xuICB0aGlzLmNsYXNzTmFtZSArPSBcIiBmaWx0ZXItYWN0aXZlXCI7XG4gIH0pO1xufVxuXG4kKCgpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnRmlsdGVyIEJsb2NrJyk7XG5cbiAgLy92YXIgZGVmYXVsdF9pZCA9IDM7XG5cblxuXG4gICQoXCIjcHJvZHVjdHNcIikuaGlkZSgpO1xuXG4gIC8vJCgnI3Byb2R1Y3RzJykucmVtb3ZlQ2xhc3MoJ2ZhZGUtaW4nKTsgLy8gcmVtb3ZlIGZhZGUtaW4gY2xhc3NcblxuICAkKFwiLnByb2QtZmlsdGVyXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgLy9jb25zb2xlLmxvZyhcIkZpbHRlciBDbGlja2VkXCIpO1xuXG4gICBcblxuICAgIHZhciB0ZXJtX2lkID0galF1ZXJ5KHRoaXMpLmF0dHIoXCJwcm9kdWN0LWlkXCIpO1xuXG4gICAgLy9jb25zb2xlLmxvZyhcIlRoZSBJRDpcIiArIHRlcm1faWQpO1xuXG5cbiAgXG5cbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAvLyAgdXJsIDogJzw/cGhwIGVjaG8gc2l0ZV91cmwoKSA/Pi93cC1hZG1pbi9hZG1pbi1hamF4LnBocCcsXG4gICAgICAvLyB1cmwgOiBzYWdlLmFkbWluX3VybCxcbiAgICAgIHVybDogXCIvd3AtYWRtaW4vYWRtaW4tYWpheC5waHBcIixcbiAgICAgIGRhdGE6IHsgYWN0aW9uOiBcImZpbHRlcnByb2R1Y3RzXCIsIGNhdGVnb3J5ZmlsdGVyOiB0ZXJtX2lkIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdUaGlzIGlzIHRoZSBkYXRhJyArIGRhdGEpO1xuXG4gICAgICAgICQoXCIjcHJvZHVjdHNcIikuc2hvdygpO1xuXG4gICAgICAgICQoJyNwcm9kdWN0cycpLnJlbW92ZUNsYXNzKCdmYWRlLWluJyk7XG5cbiAgICAgICAgJCgnI3Byb2R1Y3RzJykuYWRkQ2xhc3MoJ2ZhZGUtaW4nKTtcbiAgICAgICBcblxuXG4gICAgICBcbiAgICAgICAgLy8gJChcIiNhbGwtcHJvZHVjdHNcIikudG9nZ2xlQ2xhc3MoXCJmYWRlLWluXCIpO1xuXG4gICAgICAgICQoXCIjcHJvZHVjdHNcIikuaHRtbChkYXRhKTtcbiAgICAgICAgJChcIiNhbGwtcHJvZHVjdHNcIikuaGlkZSgpO1xuICAgICAgICAvLyAkKFwiLmNhdC1maWx0ZXJcIikucmVtb3ZlQ2xhc3MoXCJmaWx0ZXItYWN0aXZlXCIpO1xuICAgICAgICAvLyAkKCdbcHJvZHVjdC1pZD1cIicgKyB0ZXJtX2lkICsgJ1wiXScpLmFkZENsYXNzKFwiZmlsdGVyLWFjdGl2ZVwiKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyB9KTtcbn0pO1xuXG4vLyBpbXBvcnQgdGhlbiBuZWVkZWQgRm9udCBBd2Vzb21lIGZ1bmN0aW9uYWxpdHlcbmltcG9ydCB7IGxpYnJhcnksIGRvbSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIjtcbi8vIGltcG9ydCB0aGUgRmFjZWJvb2sgYW5kIFR3aXR0ZXIgaWNvbnNcbmltcG9ydCB7IGZhRmFjZWJvb2ssIGZhSW5zdGFncmFtIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcblxuLy8gYWRkIHRoZSBpbXBvcnRlZCBpY29ucyB0byB0aGUgbGlicmFyeVxubGlicmFyeS5hZGQoZmFGYWNlYm9vaywgZmFJbnN0YWdyYW0pO1xuXG4vLyB0ZWxsIEZvbnRBd2Vzb21lIHRvIHdhdGNoIHRoZSBET00gYW5kIGFkZCB0aGUgU1ZHcyB3aGVuIGl0IGRldGVjdHMgaWNvbiBtYXJrdXBcbmRvbS53YXRjaCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/scripts/app.js\n");

/***/ }),

/***/ "./resources/styles/app.scss":
/*!***********************************!*\
  !*** ./resources/styles/app.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3R5bGVzL2FwcC5zY3NzP2EwZDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL3N0eWxlcy9hcHAuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/styles/app.scss\n");

/***/ }),

/***/ "./resources/styles/editor.scss":
/*!**************************************!*\
  !*** ./resources/styles/editor.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3R5bGVzL2VkaXRvci5zY3NzPzYxN2IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL3N0eWxlcy9lZGl0b3Iuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/styles/editor.scss\n");

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
/******/ __webpack_require__.O(0, ["styles/app","styles/editor","/scripts/vendor"], function() { return __webpack_exec__("./resources/scripts/app.js"), __webpack_exec__("./resources/styles/app.scss"), __webpack_exec__("./resources/styles/editor.scss"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);