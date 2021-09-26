/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/scripts/product-archive"],{

/***/ "./resources/scripts/product-archive.js":
/*!**********************************************!*\
  !*** ./resources/scripts/product-archive.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ \"./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"jquery\");\nvar _this = undefined;\n\n // You can also pass an optional settings object\n// below listed default settings\n\naos__WEBPACK_IMPORTED_MODULE_0___default().init({\n  // Global settings:\n  disable: 'mobile',\n  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function\n  startEvent: 'DOMContentLoaded',\n  // name of the event dispatched on the document, that AOS should initialize on\n  initClassName: 'aos-init',\n  // class applied after initialization\n  animatedClassName: 'aos-animate',\n  // class applied on animation\n  useClassNames: false,\n  // if true, will add content of `data-aos` as classes on scroll\n  disableMutationObserver: false,\n  // disables automatic mutations' detections (advanced)\n  debounceDelay: 50,\n  // the delay on debounce used while resizing window (advanced)\n  throttleDelay: 99,\n  // the delay on throttle used while scrolling the page (advanced)\n  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:\n  offset: 0,\n  // offset (in px) from the original trigger point\n  delay: 0,\n  // values from 0 to 3000, with step 50ms\n  duration: 1000,\n  // values from 0 to 3000, with step 50ms\n  easing: 'ease',\n  // default easing for AOS animations\n  once: false,\n  // whether animation should happen only once - while scrolling down\n  mirror: true,\n  // whether elements should animate out while scrolling past them\n  anchorPlacement: 'top-center' // defines which position of the element regarding to window should trigger the animation\n\n});\n\nfunction createRow() {\n  var createRows = $(\".single-product-grid\");\n\n  for (var i = 0; i < createRows.length; i += 4) {\n    createRows.slice(i, i + 4).wrapAll(\"<div class='product-row grid md:grid-cols-4' data-aos='fade-up'></div>\");\n  }\n\n  $('.product-row').each(function (i) {\n    $(this).addClass('row-' + (i + 1));\n  });\n} //createRow();   I could call it here.\n\n\n$(function () {\n  //createRow();\n  var term_id = jQuery(_this).attr(\"product-id\"); //console.log(\"The ID:\" + term_id);\n\n  $.ajax({\n    type: \"post\",\n    //  url : '<?php echo site_url() ?>/wp-admin/admin-ajax.php',\n    // url : sage.admin_url,\n    url: \"/wp-admin/admin-ajax.php\",\n    data: {\n      action: \"filterproducts\",\n      categoryfilter: term_id\n    },\n    success: function success(data) {\n      //console.log('This is the data' + data);\n      //$(\"#products\").show();\n      // $('#products').removeClass('fade-in');\n      // $('#products').addClass('fade-in');\n      // $(\"#all-products\").toggleClass(\"fade-in\");\n      $(\"#loader-product\").removeClass(\"hidden\"); // Hide loader.\n\n      $(\"#loader-product\").addClass(\"flex\"); // Hide loader.\n\n      ;\n      $(\"#products\").html(data);\n      createRow(); //Call this here to create rows\n      //$(\"#all-products\").hide();\n      // $(\".cat-filter\").removeClass(\"filter-active\");\n      // $('[product-id=\"' + term_id + '\"]').addClass(\"filter-active\");\n    }\n  });\n  $(\".prod-filter\").click(function (e) {\n    //console.log(\"Filter Clicked\");\n    //createRow();\n    var term_id = jQuery(this).attr(\"product-id\"); //console.log(\"The ID:\" + term_id);\n\n    $.ajax({\n      type: \"post\",\n      //  url : '<?php echo site_url() ?>/wp-admin/admin-ajax.php',\n      // url : sage.admin_url,\n      url: \"/wp-admin/admin-ajax.php\",\n      data: {\n        action: \"filterproducts\",\n        categoryfilter: term_id\n      },\n      success: function success(data) {\n        //console.log('This is the data' + data);\n        //$(\"#products\").show();\n        // $('#products').removeClass('fade-in');\n        // $('#products').addClass('fade-in');\n        // $(\"#all-products\").toggleClass(\"fade-in\");\n        $(\"#loader-product\").removeClass(\"hidden\"); // Hide loader.\n\n        $(\"#loader-product\").addClass(\"flex\"); // Hide loader.\n\n        ;\n        $(\"#products\").html(data);\n        createRow(); //Call this here to create rows\n        //$(\"#all-products\").hide();\n        // $(\".cat-filter\").removeClass(\"filter-active\");\n        // $('[product-id=\"' + term_id + '\"]').addClass(\"filter-active\");\n      }\n    });\n    e.preventDefault();\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2NyaXB0cy9wcm9kdWN0LWFyY2hpdmUuanM/NDQ4OCJdLCJuYW1lcyI6WyJBT1MiLCJkaXNhYmxlIiwic3RhcnRFdmVudCIsImluaXRDbGFzc05hbWUiLCJhbmltYXRlZENsYXNzTmFtZSIsInVzZUNsYXNzTmFtZXMiLCJkaXNhYmxlTXV0YXRpb25PYnNlcnZlciIsImRlYm91bmNlRGVsYXkiLCJ0aHJvdHRsZURlbGF5Iiwib2Zmc2V0IiwiZGVsYXkiLCJkdXJhdGlvbiIsImVhc2luZyIsIm9uY2UiLCJtaXJyb3IiLCJhbmNob3JQbGFjZW1lbnQiLCJjcmVhdGVSb3dzIiwiJCIsImkiLCJ0ZXJtX2lkIiwialF1ZXJ5IiwidHlwZSIsInVybCIsImRhdGEiLCJhY3Rpb24iLCJjYXRlZ29yeWZpbHRlciIsInN1Y2Nlc3MiLCJjcmVhdGVSb3ciLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Q0FHQTtBQUNBOztBQUNBQSxnREFBUztBQUNQO0FBQ0FDLFNBQU8sRUFGQTtBQUVXO0FBQ2xCQyxZQUFVLEVBSEg7QUFHeUI7QUFDaENDLGVBQWEsRUFKTjtBQUlvQjtBQUMzQkMsbUJBQWlCLEVBTFY7QUFLMkI7QUFDbENDLGVBQWEsRUFOTjtBQU1lO0FBQ3RCQyx5QkFBdUIsRUFQaEI7QUFPeUI7QUFDaENDLGVBQWEsRUFSTjtBQVFZO0FBQ25CQyxlQUFhLEVBVE47QUFTWTtBQUduQjtBQUNBQyxRQUFNLEVBYkM7QUFhSTtBQUNYQyxPQUFLLEVBZEU7QUFjRztBQUNWQyxVQUFRLEVBZkQ7QUFlUztBQUNoQkMsUUFBTSxFQWhCQztBQWdCUztBQUNoQkMsTUFBSSxFQWpCRztBQWlCTTtBQUNiQyxRQUFNLEVBbEJDO0FBa0JPO0FBQ2RDLGlCQUFlLEVBbkJSLGFBbUJ3Qjs7QUFuQnhCLENBQVRmOztBQXdCQSxxQkFBcUI7QUFFckIsTUFBTWdCLFVBQVUsR0FBR0MsQ0FBQyxDQUFwQixzQkFBb0IsQ0FBcEI7O0FBQ0EsT0FBSSxJQUFJQyxDQUFDLEdBQVQsR0FBZUEsQ0FBQyxHQUFHRixVQUFVLENBQTdCLFFBQXNDRSxDQUFDLElBQXZDLEdBQTRDO0FBRTFDRixjQUFVLENBQVZBLFNBQW9CRSxDQUFDLEdBQXJCRjtBQUNEOztBQUVEQyxHQUFDLENBQURBLGNBQUMsQ0FBREEsTUFBdUIsYUFBWTtBQUNqQ0EsS0FBQyxDQUFEQSxJQUFDLENBQURBLFVBQWlCLFVBQVFDLENBQUMsR0FBMUJELENBQWlCLENBQWpCQTtBQURGQTtFQU9BOzs7QUFHQUEsQ0FBQyxDQUFDLFlBQU07QUFHSjtBQUVBLE1BQUlFLE9BQU8sR0FBR0MsTUFBTSxDQUFOQSxLQUFNLENBQU5BLE1BTFYsWUFLVUEsQ0FBZCxDQUxJLENBT0o7O0FBRUFILEdBQUMsQ0FBREEsS0FBTztBQUNMSSxRQUFJLEVBREM7QUFFTDtBQUNBO0FBQ0FDLE9BQUcsRUFKRTtBQUtMQyxRQUFJLEVBQUU7QUFBRUMsWUFBTSxFQUFSO0FBQTRCQyxvQkFBYyxFQUFFTjtBQUE1QyxLQUxEO0FBTUxPLFdBQU8sRUFBRSx1QkFBZ0I7QUFDdkI7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBVCxPQUFDLENBQURBLGlCQUFDLENBQURBLGFBVnVCLFFBVXZCQSxFQVZ1QixDQVVxQjs7QUFFNUNBLE9BQUMsQ0FBREEsaUJBQUMsQ0FBREEsVUFadUIsTUFZdkJBLEVBWnVCLENBWWdCOztBQUV4QztBQUVDQSxPQUFDLENBQURBLFdBQUMsQ0FBREE7QUFFQVUsZUFsQnVCLElBa0JWO0FBRWI7QUFDQTtBQUNBO0FBQ0Q7QUE3QkksR0FBUFY7QUFzQ0ZBLEdBQUMsQ0FBREEsY0FBQyxDQUFEQSxPQUF3QixhQUFhO0FBQ25DO0FBS0E7QUFFQSxRQUFJRSxPQUFPLEdBQUdDLE1BQU0sQ0FBTkEsSUFBTSxDQUFOQSxNQVJxQixZQVFyQkEsQ0FBZCxDQVJtQyxDQVVuQzs7QUFFQUgsS0FBQyxDQUFEQSxLQUFPO0FBQ0xJLFVBQUksRUFEQztBQUVMO0FBQ0E7QUFDQUMsU0FBRyxFQUpFO0FBS0xDLFVBQUksRUFBRTtBQUFFQyxjQUFNLEVBQVI7QUFBNEJDLHNCQUFjLEVBQUVOO0FBQTVDLE9BTEQ7QUFNTE8sYUFBTyxFQUFFLHVCQUFnQjtBQUN2QjtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUFULFNBQUMsQ0FBREEsaUJBQUMsQ0FBREEsYUFYdUIsUUFXdkJBLEVBWHVCLENBV3FCOztBQUU1Q0EsU0FBQyxDQUFEQSxpQkFBQyxDQUFEQSxVQWJ1QixNQWF2QkEsRUFidUIsQ0FhZ0I7O0FBR3hDO0FBRUNBLFNBQUMsQ0FBREEsV0FBQyxDQUFEQTtBQUVBVSxpQkFwQnVCLElBb0JWO0FBRWI7QUFDQTtBQUNBO0FBQ0Q7QUEvQkksS0FBUFY7QUFpQ0FXLEtBQUMsQ0FBREE7QUE3Q0ZYO0FBL0NGQSxDQUFDLENBQURBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL3NjcmlwdHMvcHJvZHVjdC1hcmNoaXZlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcblxuLy8gWW91IGNhbiBhbHNvIHBhc3MgYW4gb3B0aW9uYWwgc2V0dGluZ3Mgb2JqZWN0XG4vLyBiZWxvdyBsaXN0ZWQgZGVmYXVsdCBzZXR0aW5nc1xuQU9TLmluaXQoe1xuICAvLyBHbG9iYWwgc2V0dGluZ3M6XG4gIGRpc2FibGU6ICdtb2JpbGUnLC8vIGFjY2VwdHMgZm9sbG93aW5nIHZhbHVlczogJ3Bob25lJywgJ3RhYmxldCcsICdtb2JpbGUnLCBib29sZWFuLCBleHByZXNzaW9uIG9yIGZ1bmN0aW9uXG4gIHN0YXJ0RXZlbnQ6ICdET01Db250ZW50TG9hZGVkJywgLy8gbmFtZSBvZiB0aGUgZXZlbnQgZGlzcGF0Y2hlZCBvbiB0aGUgZG9jdW1lbnQsIHRoYXQgQU9TIHNob3VsZCBpbml0aWFsaXplIG9uXG4gIGluaXRDbGFzc05hbWU6ICdhb3MtaW5pdCcsIC8vIGNsYXNzIGFwcGxpZWQgYWZ0ZXIgaW5pdGlhbGl6YXRpb25cbiAgYW5pbWF0ZWRDbGFzc05hbWU6ICdhb3MtYW5pbWF0ZScsIC8vIGNsYXNzIGFwcGxpZWQgb24gYW5pbWF0aW9uXG4gIHVzZUNsYXNzTmFtZXM6IGZhbHNlLCAvLyBpZiB0cnVlLCB3aWxsIGFkZCBjb250ZW50IG9mIGBkYXRhLWFvc2AgYXMgY2xhc3NlcyBvbiBzY3JvbGxcbiAgZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXI6IGZhbHNlLCAvLyBkaXNhYmxlcyBhdXRvbWF0aWMgbXV0YXRpb25zJyBkZXRlY3Rpb25zIChhZHZhbmNlZClcbiAgZGVib3VuY2VEZWxheTogNTAsIC8vIHRoZSBkZWxheSBvbiBkZWJvdW5jZSB1c2VkIHdoaWxlIHJlc2l6aW5nIHdpbmRvdyAoYWR2YW5jZWQpXG4gIHRocm90dGxlRGVsYXk6IDk5LCAvLyB0aGUgZGVsYXkgb24gdGhyb3R0bGUgdXNlZCB3aGlsZSBzY3JvbGxpbmcgdGhlIHBhZ2UgKGFkdmFuY2VkKVxuICBcblxuICAvLyBTZXR0aW5ncyB0aGF0IGNhbiBiZSBvdmVycmlkZGVuIG9uIHBlci1lbGVtZW50IGJhc2lzLCBieSBgZGF0YS1hb3MtKmAgYXR0cmlidXRlczpcbiAgb2Zmc2V0OiAwLCAvLyBvZmZzZXQgKGluIHB4KSBmcm9tIHRoZSBvcmlnaW5hbCB0cmlnZ2VyIHBvaW50XG4gIGRlbGF5OiAwLCAvLyB2YWx1ZXMgZnJvbSAwIHRvIDMwMDAsIHdpdGggc3RlcCA1MG1zXG4gIGR1cmF0aW9uOiAxMDAwLCAvLyB2YWx1ZXMgZnJvbSAwIHRvIDMwMDAsIHdpdGggc3RlcCA1MG1zXG4gIGVhc2luZzogJ2Vhc2UnLCAvLyBkZWZhdWx0IGVhc2luZyBmb3IgQU9TIGFuaW1hdGlvbnNcbiAgb25jZTogZmFsc2UsIC8vIHdoZXRoZXIgYW5pbWF0aW9uIHNob3VsZCBoYXBwZW4gb25seSBvbmNlIC0gd2hpbGUgc2Nyb2xsaW5nIGRvd25cbiAgbWlycm9yOiB0cnVlLCAvLyB3aGV0aGVyIGVsZW1lbnRzIHNob3VsZCBhbmltYXRlIG91dCB3aGlsZSBzY3JvbGxpbmcgcGFzdCB0aGVtXG4gIGFuY2hvclBsYWNlbWVudDogJ3RvcC1jZW50ZXInLCAvLyBkZWZpbmVzIHdoaWNoIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50IHJlZ2FyZGluZyB0byB3aW5kb3cgc2hvdWxkIHRyaWdnZXIgdGhlIGFuaW1hdGlvblxuXG59KTtcblxuXG5mdW5jdGlvbiBjcmVhdGVSb3coKSB7XG5cbmNvbnN0IGNyZWF0ZVJvd3MgPSAkKFwiLnNpbmdsZS1wcm9kdWN0LWdyaWRcIik7XG5mb3IodmFyIGkgPSAwOyBpIDwgY3JlYXRlUm93cy5sZW5ndGg7IGkrPTQpIHtcblxuICBjcmVhdGVSb3dzLnNsaWNlKGksIGkrNCkud3JhcEFsbChcIjxkaXYgY2xhc3M9J3Byb2R1Y3Qtcm93IGdyaWQgbWQ6Z3JpZC1jb2xzLTQnIGRhdGEtYW9zPSdmYWRlLXVwJz48L2Rpdj5cIik7XG59XG5cbiQoJy5wcm9kdWN0LXJvdycpLmVhY2goZnVuY3Rpb24oaSkge1xuICAkKHRoaXMpLmFkZENsYXNzKCdyb3ctJysoaSsxKSk7XG5cbn0pO1xuXG59XG5cbi8vY3JlYXRlUm93KCk7ICAgSSBjb3VsZCBjYWxsIGl0IGhlcmUuXG5cblxuJCgoKSA9PiB7XG5cblxuICAgIC8vY3JlYXRlUm93KCk7XG5cbiAgICB2YXIgdGVybV9pZCA9IGpRdWVyeSh0aGlzKS5hdHRyKFwicHJvZHVjdC1pZFwiKTtcblxuICAgIC8vY29uc29sZS5sb2coXCJUaGUgSUQ6XCIgKyB0ZXJtX2lkKTtcblxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgIC8vICB1cmwgOiAnPD9waHAgZWNobyBzaXRlX3VybCgpID8+L3dwLWFkbWluL2FkbWluLWFqYXgucGhwJyxcbiAgICAgIC8vIHVybCA6IHNhZ2UuYWRtaW5fdXJsLFxuICAgICAgdXJsOiBcIi93cC1hZG1pbi9hZG1pbi1hamF4LnBocFwiLFxuICAgICAgZGF0YTogeyBhY3Rpb246IFwiZmlsdGVycHJvZHVjdHNcIiwgY2F0ZWdvcnlmaWx0ZXI6IHRlcm1faWQgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ1RoaXMgaXMgdGhlIGRhdGEnICsgZGF0YSk7XG5cbiAgICAgICAgLy8kKFwiI3Byb2R1Y3RzXCIpLnNob3coKTtcblxuICAgICAgICAvLyAkKCcjcHJvZHVjdHMnKS5yZW1vdmVDbGFzcygnZmFkZS1pbicpO1xuXG4gICAgICAgIC8vICQoJyNwcm9kdWN0cycpLmFkZENsYXNzKCdmYWRlLWluJyk7XG5cbiAgICAgICAgLy8gJChcIiNhbGwtcHJvZHVjdHNcIikudG9nZ2xlQ2xhc3MoXCJmYWRlLWluXCIpO1xuICAgICAgICAkKFwiI2xvYWRlci1wcm9kdWN0XCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpOyAvLyBIaWRlIGxvYWRlci5cblxuICAgICAgICAkKFwiI2xvYWRlci1wcm9kdWN0XCIpLmFkZENsYXNzKFwiZmxleFwiKTsgLy8gSGlkZSBsb2FkZXIuXG5cbiAgICAgICA7XG5cbiAgICAgICAgJChcIiNwcm9kdWN0c1wiKS5odG1sKGRhdGEpO1xuXG4gICAgICAgIGNyZWF0ZVJvdygpOyAvL0NhbGwgdGhpcyBoZXJlIHRvIGNyZWF0ZSByb3dzXG5cbiAgICAgICAgLy8kKFwiI2FsbC1wcm9kdWN0c1wiKS5oaWRlKCk7XG4gICAgICAgIC8vICQoXCIuY2F0LWZpbHRlclwiKS5yZW1vdmVDbGFzcyhcImZpbHRlci1hY3RpdmVcIik7XG4gICAgICAgIC8vICQoJ1twcm9kdWN0LWlkPVwiJyArIHRlcm1faWQgKyAnXCJdJykuYWRkQ2xhc3MoXCJmaWx0ZXItYWN0aXZlXCIpO1xuICAgICAgfSxcbiAgICB9KTtcblxuXG5cblxuXG5cblxuICAkKFwiLnByb2QtZmlsdGVyXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgLy9jb25zb2xlLmxvZyhcIkZpbHRlciBDbGlja2VkXCIpO1xuXG5cblxuXG4gICAgLy9jcmVhdGVSb3coKTtcblxuICAgIHZhciB0ZXJtX2lkID0galF1ZXJ5KHRoaXMpLmF0dHIoXCJwcm9kdWN0LWlkXCIpO1xuXG4gICAgLy9jb25zb2xlLmxvZyhcIlRoZSBJRDpcIiArIHRlcm1faWQpO1xuXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgLy8gIHVybCA6ICc8P3BocCBlY2hvIHNpdGVfdXJsKCkgPz4vd3AtYWRtaW4vYWRtaW4tYWpheC5waHAnLFxuICAgICAgLy8gdXJsIDogc2FnZS5hZG1pbl91cmwsXG4gICAgICB1cmw6IFwiL3dwLWFkbWluL2FkbWluLWFqYXgucGhwXCIsXG4gICAgICBkYXRhOiB7IGFjdGlvbjogXCJmaWx0ZXJwcm9kdWN0c1wiLCBjYXRlZ29yeWZpbHRlcjogdGVybV9pZCB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnVGhpcyBpcyB0aGUgZGF0YScgKyBkYXRhKTtcblxuICAgICAgICAvLyQoXCIjcHJvZHVjdHNcIikuc2hvdygpO1xuXG4gICAgICAgIC8vICQoJyNwcm9kdWN0cycpLnJlbW92ZUNsYXNzKCdmYWRlLWluJyk7XG5cbiAgICAgICAgLy8gJCgnI3Byb2R1Y3RzJykuYWRkQ2xhc3MoJ2ZhZGUtaW4nKTtcblxuICAgICAgICAvLyAkKFwiI2FsbC1wcm9kdWN0c1wiKS50b2dnbGVDbGFzcyhcImZhZGUtaW5cIik7XG5cbiAgICAgICAgJChcIiNsb2FkZXItcHJvZHVjdFwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTsgLy8gSGlkZSBsb2FkZXIuXG5cbiAgICAgICAgJChcIiNsb2FkZXItcHJvZHVjdFwiKS5hZGRDbGFzcyhcImZsZXhcIik7IC8vIEhpZGUgbG9hZGVyLlxuXG5cbiAgICAgICA7XG5cbiAgICAgICAgJChcIiNwcm9kdWN0c1wiKS5odG1sKGRhdGEpO1xuXG4gICAgICAgIGNyZWF0ZVJvdygpOyAvL0NhbGwgdGhpcyBoZXJlIHRvIGNyZWF0ZSByb3dzXG5cbiAgICAgICAgLy8kKFwiI2FsbC1wcm9kdWN0c1wiKS5oaWRlKCk7XG4gICAgICAgIC8vICQoXCIuY2F0LWZpbHRlclwiKS5yZW1vdmVDbGFzcyhcImZpbHRlci1hY3RpdmVcIik7XG4gICAgICAgIC8vICQoJ1twcm9kdWN0LWlkPVwiJyArIHRlcm1faWQgKyAnXCJdJykuYWRkQ2xhc3MoXCJmaWx0ZXItYWN0aXZlXCIpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cblxuXG5cblxuXG5cblxuXG5cbiAgfSk7XG59KTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/scripts/product-archive.js\n");

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
/******/ __webpack_require__.O(0, ["/scripts/vendor"], function() { return __webpack_exec__("./resources/scripts/product-archive.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);