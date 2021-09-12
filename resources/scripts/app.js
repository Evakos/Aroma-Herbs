/**
 * External Dependencies
 */
import "jquery";

import AOS from "aos";

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: false, // class applied after initialization
  animatedClassName: "animated", // class applied on animation
  useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 0, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: "bottom-bottom", // defines which position of the element regarding to window should trigger the animation
});

// getSingleProduct.addEventListener("mouseover", mOver, false);
// getSingleProduct.addEventListener("mouseout", mOut, false);

// function mOver() {
//   getSingleProduct.setAttribute("style", "background-color:blue;")
// }

// function mOut() {
//   getSingleProduct.setAttribute("style", "background-color:green;")
// }

const getSingleProducts = document.querySelectorAll(".single-product");

getSingleProducts.forEach((getSingleProduct) => {
  getSingleProduct.addEventListener("mouseover", () => {
    getSingleProduct.classList.add("slide-up");
  });
  getSingleProduct.addEventListener("mouseout", () => {
    getSingleProduct.classList.remove("slide-up");
  });
});

// const element = document.querySelector('.my-element');
// element.classList.add('animate__animated', 'animate__bounceOutLeft');

// element.addEventListener('animationend', () => {
//   // do something
// });

const getFilterButtons = document.querySelectorAll(".prod-filter");

const getLeafElement = document.getElementById("leaf-element");

getFilterButtons.forEach((getFilterButton) => {
  getFilterButton.addEventListener("mouseover", () => {
    getLeafElement.classList.add("animate__animated", "animate__bounce");
  });
  getFilterButton.addEventListener("mouseout", () => {
    getLeafElement.classList.remove("animate__animated", "animate__bounce");
  });
});

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("#scroll-link").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      console.log(hash);

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});





const mql = window.matchMedia('(max-width: 768px)');

$("#blog-card:nth-child(4n + 1)").addClass("half-div-left");

$("#blog-card:nth-child(4n + 2)").addClass("half-div-right");

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    $("#blog-card:nth-child(4n + 1)").removeClass("half-div-left");

    $("#blog-card:nth-child(4n + 2)").removeClass("half-div-right");
  } else {
    /* the viewport is more than 600 pixels wide */
    $("#blog-card:nth-child(4n + 1)").addClass("half-div-left");

    $("#blog-card:nth-child(4n + 2)").addClass("half-div-right");
  }
}

mql.addEventListener('change', screenTest);


//Floating Nav Bar
window.addEventListener("scroll", function() {
  const navOuter= document.getElementById("sticky-nav");
  const logo = document.getElementById("site-logo");
  const navInner = document.getElementById("sticky-nav-inner");
  
  if (window.pageYOffset > 0) {
  navOuter.classList.add("is-sticky");
  logo.classList.add("shrink-logo");
  navOuter.classList.add("fade-in-fast");
  navInner.classList.remove("py-10");
  navInner.classList.add("py-2");
  
  

  } else {
  navOuter.classList.remove("is-sticky");
  logo.classList.remove("shrink-logo");
  navOuter.classList.remove("fade-in-fast");
  navInner.classList.add("py-10");
  navInner.classList.remove("py-2");
 
  }
  });
  





$(".hamburger").click(function () {
  $(this).toggleClass("is-active");
  // $("#menu-modal").css("width", "60%")
  $("#menu-modal").toggleClass("menu-active");
  $("#overlay").toggleClass("hidden animate__animated animate__fadeIn");
});

// Add active class to the current button (highlight it)
// var header = document.getElementById("myDIV");
var btns = document.getElementsByClassName("prod-filter");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("filter-active");
    current[0].className = current[0].className.replace(" filter-active", "");
    this.className += " filter-active";
  });
}

$(() => {
  //console.log('Filter Block');

  //var default_id = 3;

  $("#products").hide();

  //$('#products').removeClass('fade-in'); // remove fade-in class

  $(".prod-filter").click(function (e) {
    //console.log("Filter Clicked");

    var term_id = jQuery(this).attr("product-id");

    //console.log("The ID:" + term_id);

    $.ajax({
      type: "post",
      //  url : '<?php echo site_url() ?>/wp-admin/admin-ajax.php',
      // url : sage.admin_url,
      url: "/wp-admin/admin-ajax.php",
      data: { action: "filterproducts", categoryfilter: term_id },
      success: function (data) {
        //console.log('This is the data' + data);

        $("#products").show();

        // $('#products').removeClass('fade-in');

        // $('#products').addClass('fade-in');

        // $("#all-products").toggleClass("fade-in");

        $("#products").html(data);
        $("#all-products").hide();
        // $(".cat-filter").removeClass("filter-active");
        // $('[product-id="' + term_id + '"]').addClass("filter-active");
      },
    });
    e.preventDefault();
  });
});

// import then needed Font Awesome functionality
import { library, dom } from "@fortawesome/fontawesome-svg-core";
// import the Facebook and Twitter icons
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

// add the imported icons to the library
library.add(faFacebook, faInstagram);

// tell FontAwesome to watch the DOM and add the SVGs when it detects icon markup
dom.watch();
