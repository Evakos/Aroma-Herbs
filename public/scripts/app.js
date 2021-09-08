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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ \"./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"jquery\");\n/**\n * External Dependencies\n */\n\n // You can also pass an optional settings object\n// below listed default settings\n\naos__WEBPACK_IMPORTED_MODULE_1___default().init({\n  // Global settings:\n  disable: false,\n  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function\n  startEvent: 'DOMContentLoaded',\n  // name of the event dispatched on the document, that AOS should initialize on\n  initClassName: false,\n  // class applied after initialization\n  animatedClassName: 'animated',\n  // class applied on animation\n  useClassNames: true,\n  // if true, will add content of `data-aos` as classes on scroll\n  disableMutationObserver: false,\n  // disables automatic mutations' detections (advanced)\n  debounceDelay: 50,\n  // the delay on debounce used while resizing window (advanced)\n  throttleDelay: 99,\n  // the delay on throttle used while scrolling the page (advanced)\n  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:\n  offset: 0,\n  // offset (in px) from the original trigger point\n  delay: 0,\n  // values from 0 to 3000, with step 50ms\n  duration: 1000,\n  // values from 0 to 3000, with step 50ms\n  easing: 'ease',\n  // default easing for AOS animations\n  once: false,\n  // whether animation should happen only once - while scrolling down\n  mirror: true,\n  // whether elements should animate out while scrolling past them\n  anchorPlacement: 'bottom-bottom' // defines which position of the element regarding to window should trigger the animation\n\n}); // getSingleProduct.addEventListener(\"mouseover\", mOver, false);\n// getSingleProduct.addEventListener(\"mouseout\", mOut, false);\n// function mOver() {\n//   getSingleProduct.setAttribute(\"style\", \"background-color:blue;\")\n// }\n// function mOut() {  \n//   getSingleProduct.setAttribute(\"style\", \"background-color:green;\")\n// }\n\nvar getSingleProducts = document.querySelectorAll(\".single-product\");\ngetSingleProducts.forEach(function (getSingleProduct) {\n  getSingleProduct.addEventListener('mouseover', function () {\n    getSingleProduct.classList.add('slide-up');\n  });\n  getSingleProduct.addEventListener('mouseout', function () {\n    getSingleProduct.classList.remove('slide-up');\n  });\n}); // const element = document.querySelector('.my-element');\n// element.classList.add('animate__animated', 'animate__bounceOutLeft');\n// element.addEventListener('animationend', () => {\n//   // do something\n// });\n\nvar getFilterButtons = document.querySelectorAll(\".prod-filter\");\nvar getLeafElement = document.getElementById(\"leaf-element\");\ngetFilterButtons.forEach(function (getFilterButton) {\n  getFilterButton.addEventListener('mouseover', function () {\n    getLeafElement.classList.add('animate__animated', 'animate__bounce');\n  });\n  getFilterButton.addEventListener('mouseout', function () {\n    getLeafElement.classList.remove('animate__animated', 'animate__bounce');\n  });\n});\n$(document).ready(function () {\n  // Add smooth scrolling to all links\n  $(\"#scroll-link\").on('click', function (event) {\n    // Make sure this.hash has a value before overriding default behavior\n    if (this.hash !== \"\") {\n      // Prevent default anchor click behavior\n      event.preventDefault(); // Store hash\n\n      var hash = this.hash;\n      console.log(hash); // Using jQuery's animate() method to add smooth page scroll\n      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area\n\n      $('html, body').animate({\n        scrollTop: $(hash).offset().top\n      }, 800, function () {\n        // Add hash (#) to URL when done scrolling (default click behavior)\n        window.location.hash = hash;\n      });\n    } // End if\n\n  });\n});\n$('.grid .relative:nth-child(4n + 1)').addClass('half-div-left');\n$('.grid .relative:nth-child(4n + 2)').addClass('half-div-right');\n$(\".hamburger\").click(function () {\n  $(this).toggleClass(\"is-active\"); // $(\"#menu-modal\").css(\"width\", \"60%\")\n\n  $(\"#menu-modal\").toggleClass('menu-active');\n  $(\"#overlay\").toggleClass('hidden animate__animated animate__fadeIn');\n}); // Add active class to the current button (highlight it)\n// var header = document.getElementById(\"myDIV\");\n\nvar btns = document.getElementsByClassName(\"prod-filter\");\n\nfor (var i = 0; i < btns.length; i++) {\n  btns[i].addEventListener(\"click\", function () {\n    var current = document.getElementsByClassName(\"filter-active\");\n    current[0].className = current[0].className.replace(\" filter-active\", \"\");\n    this.className += \" filter-active\";\n  });\n}\n\n$(function () {\n  //console.log('Filter Block');\n  //var default_id = 3;\n  $(\"#products\").hide(); //$('#products').removeClass('fade-in'); // remove fade-in class\n\n  $(\".prod-filter\").click(function (e) {\n    //console.log(\"Filter Clicked\");\n    var term_id = jQuery(this).attr(\"product-id\"); //console.log(\"The ID:\" + term_id);\n\n    $.ajax({\n      type: \"post\",\n      //  url : '<?php echo site_url() ?>/wp-admin/admin-ajax.php',\n      // url : sage.admin_url,\n      url: \"/wp-admin/admin-ajax.php\",\n      data: {\n        action: \"filterproducts\",\n        categoryfilter: term_id\n      },\n      success: function success(data) {\n        //console.log('This is the data' + data);\n        $(\"#products\").show(); // $('#products').removeClass('fade-in');\n        // $('#products').addClass('fade-in');\n        // $(\"#all-products\").toggleClass(\"fade-in\");\n\n        $(\"#products\").html(data);\n        $(\"#all-products\").hide(); // $(\".cat-filter\").removeClass(\"filter-active\");\n        // $('[product-id=\"' + term_id + '\"]').addClass(\"filter-active\");\n      }\n    });\n    e.preventDefault();\n  });\n}); // import then needed Font Awesome functionality\n\n // import the Facebook and Twitter icons\n\n // add the imported icons to the library\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.library.add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faFacebook, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faInstagram); // tell FontAwesome to watch the DOM and add the SVGs when it detects icon markup\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.dom.watch();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2NyaXB0cy9hcHAuanM/Y2U0YyJdLCJuYW1lcyI6WyJBT1MiLCJkaXNhYmxlIiwic3RhcnRFdmVudCIsImluaXRDbGFzc05hbWUiLCJhbmltYXRlZENsYXNzTmFtZSIsInVzZUNsYXNzTmFtZXMiLCJkaXNhYmxlTXV0YXRpb25PYnNlcnZlciIsImRlYm91bmNlRGVsYXkiLCJ0aHJvdHRsZURlbGF5Iiwib2Zmc2V0IiwiZGVsYXkiLCJkdXJhdGlvbiIsImVhc2luZyIsIm9uY2UiLCJtaXJyb3IiLCJhbmNob3JQbGFjZW1lbnQiLCJnZXRTaW5nbGVQcm9kdWN0cyIsImRvY3VtZW50IiwiZ2V0U2luZ2xlUHJvZHVjdCIsImdldEZpbHRlckJ1dHRvbnMiLCJnZXRMZWFmRWxlbWVudCIsImdldEZpbHRlckJ1dHRvbiIsIiQiLCJldmVudCIsImhhc2giLCJjb25zb2xlIiwic2Nyb2xsVG9wIiwidG9wIiwid2luZG93IiwiYnRucyIsImkiLCJjdXJyZW50IiwidGVybV9pZCIsImpRdWVyeSIsInR5cGUiLCJ1cmwiLCJkYXRhIiwiYWN0aW9uIiwiY2F0ZWdvcnlmaWx0ZXIiLCJzdWNjZXNzIiwiZSIsImxpYnJhcnkiLCJkb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FLQTtBQUNBOztBQUNBQSxnREFBUztBQUNQO0FBQ0FDLFNBQU8sRUFGQTtBQUVTO0FBQ2hCQyxZQUFVLEVBSEg7QUFHeUI7QUFDaENDLGVBQWEsRUFKTjtBQUllO0FBQ3RCQyxtQkFBaUIsRUFMVjtBQUt3QjtBQUMvQkMsZUFBYSxFQU5OO0FBTWM7QUFDckJDLHlCQUF1QixFQVBoQjtBQU95QjtBQUNoQ0MsZUFBYSxFQVJOO0FBUVk7QUFDbkJDLGVBQWEsRUFUTjtBQVNZO0FBR25CO0FBQ0FDLFFBQU0sRUFiQztBQWFJO0FBQ1hDLE9BQUssRUFkRTtBQWNHO0FBQ1ZDLFVBQVEsRUFmRDtBQWVTO0FBQ2hCQyxRQUFNLEVB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VUFBSSxFQURDO0FBRUw7QUFDQTtBQUNBQyxTQUFHLEVBSkU7QUFLTEMsVUFBSSxFQUFFO0FBQUVDLGNBQU0sRUFBUjtBQUE0QkMsc0JBQWMsRUFBRU47QUFBNUMsT0FMRDtBQU1MTyxhQUFPLEVBQUUsdUJBQWdCO0FBQ3ZCO0FBRUFqQixTQUFDLENBQURBLFdBQUMsQ0FBREEsQ0FIdUIsSUFHdkJBLEdBSHVCLENBS3ZCO0FBRUE7QUFLQTs7QUFFQUEsU0FBQyxDQUFEQSxXQUFDLENBQURBO0FBQ0FBLFNBQUMsQ0FBREEsZUFBQyxDQUFEQSxDQWZ1QixJQWV2QkEsR0FmdUIsQ0FnQnZCO0FBQ0E7QUFDRDtBQXhCSSxLQUFQQTtBQTBCQWtCLEtBQUMsQ0FBREE7QUF0Q0ZsQjtBQVhGQSxDQUFDLENBQURBLEMsQ0FvREE7O0NBRUE7O0NBR0E7O0FBQ0FtQixvTyxDQUVBOztBQUNBQyIsImZpbGUiOiIuL3Jlc291cmNlcy9zY3JpcHRzL2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRXh0ZXJuYWwgRGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBcImpxdWVyeVwiO1xuXG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5cblxuLy8gWW91IGNhbiBhbHNvIHBhc3MgYW4gb3B0aW9uYWwgc2V0dGluZ3Mgb2JqZWN0XG4vLyBiZWxvdyBsaXN0ZWQgZGVmYXVsdCBzZXR0aW5nc1xuQU9TLmluaXQoe1xuICAvLyBHbG9iYWwgc2V0dGluZ3M6XG4gIGRpc2FibGU6IGZhbHNlLCAvLyBhY2NlcHRzIGZvbGxvd2luZyB2YWx1ZXM6ICdwaG9uZScsICd0YWJsZXQnLCAnbW9iaWxlJywgYm9vbGVhbiwgZXhwcmVzc2lvbiBvciBmdW5jdGlvblxuICBzdGFydEV2ZW50OiAnRE9NQ29udGVudExvYWRlZCcsIC8vIG5hbWUgb2YgdGhlIGV2ZW50IGRpc3BhdGNoZWQgb24gdGhlIGRvY3VtZW50LCB0aGF0IEFPUyBzaG91bGQgaW5pdGlhbGl6ZSBvblxuICBpbml0Q2xhc3NOYW1lOiBmYWxzZSwgLy8gY2xhc3MgYXBwbGllZCBhZnRlciBpbml0aWFsaXphdGlvblxuICBhbmltYXRlZENsYXNzTmFtZTogJ2FuaW1hdGVkJywgLy8gY2xhc3MgYXBwbGllZCBvbiBhbmltYXRpb25cbiAgdXNlQ2xhc3NOYW1lczogdHJ1ZSwgLy8gaWYgdHJ1ZSwgd2lsbCBhZGQgY29udGVudCBvZiBgZGF0YS1hb3NgIGFzIGNsYXNzZXMgb24gc2Nyb2xsXG4gIGRpc2FibGVNdXRhdGlvbk9ic2VydmVyOiBmYWxzZSwgLy8gZGlzYWJsZXMgYXV0b21hdGljIG11dGF0aW9ucycgZGV0ZWN0aW9ucyAoYWR2YW5jZWQpXG4gIGRlYm91bmNlRGVsYXk6IDUwLCAvLyB0aGUgZGVsYXkgb24gZGVib3VuY2UgdXNlZCB3aGlsZSByZXNpemluZyB3aW5kb3cgKGFkdmFuY2VkKVxuICB0aHJvdHRsZURlbGF5OiA5OSwgLy8gdGhlIGRlbGF5IG9uIHRocm90dGxlIHVzZWQgd2hpbGUgc2Nyb2xsaW5nIHRoZSBwYWdlIChhZHZhbmNlZClcbiAgXG5cbiAgLy8gU2V0dGluZ3MgdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiBvbiBwZXItZWxlbWVudCBiYXNpcywgYnkgYGRhdGEtYW9zLSpgIGF0dHJpYnV0ZXM6XG4gIG9mZnNldDogMCwgLy8gb2Zmc2V0IChpbiBweCkgZnJvbSB0aGUgb3JpZ2luYWwgdHJpZ2dlciBwb2ludFxuICBkZWxheTogMCwgLy8gdmFsdWVzIGZyb20gMCB0byAzMDAwLCB3aXRoIHN0ZXAgNTBtc1xuICBkdXJhdGlvbjogMTAwMCwgLy8gdmFsdWVzIGZyb20gMCB0byAzMDAwLCB3aXRoIHN0ZXAgNTBtc1xuICBlYXNpbmc6ICdlYXNlJywgLy8gZGVmYXVsdCBlYXNpbmcgZm9yIEFPUyBhbmltYXRpb25zXG4gIG9uY2U6IGZhbHNlLCAvLyB3aGV0aGVyIGFuaW1hdGlvbiBzaG91bGQgaGFwcGVuIG9ubHkgb25jZSAtIHdoaWxlIHNjcm9sbGluZyBkb3duXG4gIG1pcnJvcjogdHJ1ZSwgLy8gd2hldGhlciBlbGVtZW50cyBzaG91bGQgYW5pbWF0ZSBvdXQgd2hpbGUgc2Nyb2xsaW5nIHBhc3QgdGhlbVxuICBhbmNob3JQbGFjZW1lbnQ6ICdib3R0b20tYm90dG9tJywgLy8gZGVmaW5lcyB3aGljaCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudCByZWdhcmRpbmcgdG8gd2luZG93IHNob3VsZCB0cmlnZ2VyIHRoZSBhbmltYXRpb25cblxufSk7XG5cblxuXG5cbi8vIGdldFNpbmdsZVByb2R1Y3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBtT3ZlciwgZmFsc2UpO1xuLy8gZ2V0U2luZ2xlUHJvZHVjdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgbU91dCwgZmFsc2UpO1xuXG4vLyBmdW5jdGlvbiBtT3ZlcigpIHtcbi8vICAgZ2V0U2luZ2xlUHJvZHVjdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6Ymx1ZTtcIilcbi8vIH1cblxuLy8gZnVuY3Rpb24gbU91dCgpIHsgIFxuLy8gICBnZXRTaW5nbGVQcm9kdWN0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjpncmVlbjtcIilcbi8vIH1cblxuY29uc3QgZ2V0U2luZ2xlUHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpbmdsZS1wcm9kdWN0XCIpO1xuXG5nZXRTaW5nbGVQcm9kdWN0cy5mb3JFYWNoKChnZXRTaW5nbGVQcm9kdWN0KSA9PiB7XG4gIGdldFNpbmdsZVByb2R1Y3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgIGdldFNpbmdsZVByb2R1Y3QuY2xhc3NMaXN0LmFkZCgnc2xpZGUtdXAnKTtcbiAgfSk7XG4gIGdldFNpbmdsZVByb2R1Y3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgZ2V0U2luZ2xlUHJvZHVjdC5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZS11cCcpO1xuICB9KTtcbn0pO1xuXG4vLyBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LWVsZW1lbnQnKTtcbi8vIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnLCAnYW5pbWF0ZV9fYm91bmNlT3V0TGVmdCcpO1xuXG4vLyBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbi8vICAgLy8gZG8gc29tZXRoaW5nXG4vLyB9KTtcblxuXG5cbmNvbnN0IGdldEZpbHRlckJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2QtZmlsdGVyXCIpO1xuXG5jb25zdCBnZXRMZWFmRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVhZi1lbGVtZW50XCIpO1xuXG5nZXRGaWx0ZXJCdXR0b25zLmZvckVhY2goKGdldEZpbHRlckJ1dHRvbikgPT4ge1xuICBnZXRGaWx0ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgIGdldExlYWZFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJyAsICdhbmltYXRlX19ib3VuY2UnKTtcbiAgfSk7XG4gIGdldEZpbHRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICBnZXRMZWFmRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlX19hbmltYXRlZCcgLCAnYW5pbWF0ZV9fYm91bmNlJyk7XG4gIH0pO1xufSk7XG5cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgLy8gQWRkIHNtb290aCBzY3JvbGxpbmcgdG8gYWxsIGxpbmtzXG4gICQoXCIjc2Nyb2xsLWxpbmtcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgIC8vIE1ha2Ugc3VyZSB0aGlzLmhhc2ggaGFzIGEgdmFsdWUgYmVmb3JlIG92ZXJyaWRpbmcgZGVmYXVsdCBiZWhhdmlvclxuICAgIGlmICh0aGlzLmhhc2ggIT09IFwiXCIpIHtcbiAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBhbmNob3IgY2xpY2sgYmVoYXZpb3JcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIFN0b3JlIGhhc2hcbiAgICAgIHZhciBoYXNoID0gdGhpcy5oYXNoO1xuXG4gICAgICBjb25zb2xlLmxvZyhoYXNoKTtcblxuICAgICAgLy8gVXNpbmcgalF1ZXJ5J3MgYW5pbWF0ZSgpIG1ldGhvZCB0byBhZGQgc21vb3RoIHBhZ2Ugc2Nyb2xsXG4gICAgICAvLyBUaGUgb3B0aW9uYWwgbnVtYmVyICg4MDApIHNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0YWtlcyB0byBzY3JvbGwgdG8gdGhlIHNwZWNpZmllZCBhcmVhXG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgIHNjcm9sbFRvcDogJChoYXNoKS5vZmZzZXQoKS50b3BcbiAgICAgIH0sIDgwMCwgZnVuY3Rpb24oKXtcblxuICAgICAgICAvLyBBZGQgaGFzaCAoIykgdG8gVVJMIHdoZW4gZG9uZSBzY3JvbGxpbmcgKGRlZmF1bHQgY2xpY2sgYmVoYXZpb3IpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcbiAgICAgIH0pO1xuICAgIH0gLy8gRW5kIGlmXG4gIH0pO1xufSk7XG5cblxuXG4kKCcuZ3JpZCAucmVsYXRpdmU6bnRoLWNoaWxkKDRuICsgMSknKS5hZGRDbGFzcygnaGFsZi1kaXYtbGVmdCcpOyAgXG5cbiQoJy5ncmlkIC5yZWxhdGl2ZTpudGgtY2hpbGQoNG4gKyAyKScpLmFkZENsYXNzKCdoYWxmLWRpdi1yaWdodCcpO1xuXG5cblxuXG5cblxuXG5cblxuJChcIi5oYW1idXJnZXJcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiaXMtYWN0aXZlXCIpO1xuICAvLyAkKFwiI21lbnUtbW9kYWxcIikuY3NzKFwid2lkdGhcIiwgXCI2MCVcIilcbiAgJChcIiNtZW51LW1vZGFsXCIpLnRvZ2dsZUNsYXNzKCdtZW51LWFjdGl2ZScpO1xuICAkKFwiI292ZXJsYXlcIikudG9nZ2xlQ2xhc3MoJ2hpZGRlbiBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW4nKTtcblxuXG59KTtcblxuLy8gQWRkIGFjdGl2ZSBjbGFzcyB0byB0aGUgY3VycmVudCBidXR0b24gKGhpZ2hsaWdodCBpdClcbi8vIHZhciBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15RElWXCIpO1xudmFyIGJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvZC1maWx0ZXJcIik7XG5mb3IgKHZhciBpID0gMDsgaSA8IGJ0bnMubGVuZ3RoOyBpKyspIHtcbiAgYnRuc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gIHZhciBjdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZpbHRlci1hY3RpdmVcIik7XG4gIGN1cnJlbnRbMF0uY2xhc3NOYW1lID0gY3VycmVudFswXS5jbGFzc05hbWUucmVwbGFjZShcIiBmaWx0ZXItYWN0aXZlXCIsIFwiXCIpO1xuICB0aGlzLmNsYXNzTmFtZSArPSBcIiBmaWx0ZXItYWN0aXZlXCI7XG4gIH0pO1xufVxuXG4kKCgpID0+IHtcbiAgLy9jb25zb2xlLmxvZygnRmlsdGVyIEJsb2NrJyk7XG5cbiAgLy92YXIgZGVmYXVsdF9pZCA9IDM7XG5cblxuXG4gICQoXCIjcHJvZHVjdHNcIikuaGlkZSgpO1xuXG4gIC8vJCgnI3Byb2R1Y3RzJykucmVtb3ZlQ2xhc3MoJ2ZhZGUtaW4nKTsgLy8gcmVtb3ZlIGZhZGUtaW4gY2xhc3NcblxuICAkKFwiLnByb2QtZmlsdGVyXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgLy9jb25zb2xlLmxvZyhcIkZpbHRlciBDbGlja2VkXCIpO1xuXG4gICBcblxuICAgIHZhciB0ZXJtX2lkID0galF1ZXJ5KHRoaXMpLmF0dHIoXCJwcm9kdWN0LWlkXCIpO1xuXG4gICAgLy9jb25zb2xlLmxvZyhcIlRoZSBJRDpcIiArIHRlcm1faWQpO1xuXG5cbiAgXG5cbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAvLyAgdXJsIDogJzw/cGhwIGVjaG8gc2l0ZV91cmwoKSA/Pi93cC1hZG1pbi9hZG1pbi1hamF4LnBocCcsXG4gICAgICAvLyB1cmwgOiBzYWdlLmFkbWluX3VybCxcbiAgICAgIHVybDogXCIvd3AtYWRtaW4vYWRtaW4tYWpheC5waHBcIixcbiAgICAgIGRhdGE6IHsgYWN0aW9uOiBcImZpbHRlcnByb2R1Y3RzXCIsIGNhdGVnb3J5ZmlsdGVyOiB0ZXJtX2lkIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdUaGlzIGlzIHRoZSBkYXRhJyArIGRhdGEpO1xuXG4gICAgICAgICQoXCIjcHJvZHVjdHNcIikuc2hvdygpO1xuXG4gICAgICAgIC8vICQoJyNwcm9kdWN0cycpLnJlbW92ZUNsYXNzKCdmYWRlLWluJyk7XG5cbiAgICAgICAgLy8gJCgnI3Byb2R1Y3RzJykuYWRkQ2xhc3MoJ2ZhZGUtaW4nKTtcbiAgICAgICBcblxuXG4gICAgICBcbiAgICAgICAgLy8gJChcIiNhbGwtcHJvZHVjdHNcIikudG9nZ2xlQ2xhc3MoXCJmYWRlLWluXCIpO1xuXG4gICAgICAgICQoXCIjcHJvZHVjdHNcIikuaHRtbChkYXRhKTtcbiAgICAgICAgJChcIiNhbGwtcHJvZHVjdHNcIikuaGlkZSgpO1xuICAgICAgICAvLyAkKFwiLmNhdC1maWx0ZXJcIikucmVtb3ZlQ2xhc3MoXCJmaWx0ZXItYWN0aXZlXCIpO1xuICAgICAgICAvLyAkKCdbcHJvZHVjdC1pZD1cIicgKyB0ZXJtX2lkICsgJ1wiXScpLmFkZENsYXNzKFwiZmlsdGVyLWFjdGl2ZVwiKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyB9KTtcbn0pO1xuXG4vLyBpbXBvcnQgdGhlbiBuZWVkZWQgRm9udCBBd2Vzb21lIGZ1bmN0aW9uYWxpdHlcbmltcG9ydCB7IGxpYnJhcnksIGRvbSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIjtcbi8vIGltcG9ydCB0aGUgRmFjZWJvb2sgYW5kIFR3aXR0ZXIgaWNvbnNcbmltcG9ydCB7IGZhRmFjZWJvb2ssIGZhSW5zdGFncmFtIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcblxuLy8gYWRkIHRoZSBpbXBvcnRlZCBpY29ucyB0byB0aGUgbGlicmFyeVxubGlicmFyeS5hZGQoZmFGYWNlYm9vaywgZmFJbnN0YWdyYW0pO1xuXG4vLyB0ZWxsIEZvbnRBd2Vzb21lIHRvIHdhdGNoIHRoZSBET00gYW5kIGFkZCB0aGUgU1ZHcyB3aGVuIGl0IGRldGVjdHMgaWNvbiBtYXJrdXBcbmRvbS53YXRjaCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/scripts/app.js\n");

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