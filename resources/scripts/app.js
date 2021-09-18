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

// Define our viewportWidth variable
let viewportWidth;

// Set/update the viewportWidth value
let setViewportWidth = function () {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
};

// Log the viewport width into the console
const logWidth = function () {
  if (viewportWidth > 768) {
    console.log("Wide viewport");

    $("#blog-card:nth-child(4n + 1)").addClass("half-div-left");

    $("#blog-card:nth-child(4n + 2)").addClass("half-div-right");
  } else {
    console.log("Small viewport");

    $("#blog-card:nth-child(4n + 1)").removeClass("half-div-left");

    $("#blog-card:nth-child(4n + 2)").removeClass("half-div-right");
  }
};

// Set our initial width and log it
setViewportWidth();
logWidth();

// On resize events, recalculate and log
window.addEventListener(
  "resize",
  function () {
    setViewportWidth();
    logWidth();
  },
  false
);



// $(function() {
//   var header = document.getElementById("header");
//   $(window).scroll(function() {
//       console.log(header.getBoundingClientRect().top);
//   });
// });

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {

  //console.log("This is the sticky logo:" + stickyLogo)

  const navOuter = document.getElementById("sticky-nav");

  // Get the header

  const header = document.getElementById("header");

  // Get the offset position of the navbar

  const sticky = header.getBoundingClientRect().top;

  //console.log(sticky);

  const logo = document.getElementById("site-logo");
  const navInner = document.getElementById("sticky-nav-inner");
 
  const floating = document.getElementById("floating");


  if (sticky < 0) {


console.log("This is the sticky position:" + sticky)

    navOuter.classList.add("is-sticky");
    logo.classList.add("shrink-logo");
    navOuter.classList.add("fade-in-fast");
    navInner.classList.remove("py-10");
    navInner.classList.add("py-2");
   
    floating.classList.remove("pt-24");

    floating.classList.add("pt-6");
  } else {
    navOuter.classList.remove("is-sticky");
    logo.classList.remove("shrink-logo");
    navOuter.classList.remove("fade-in-fast");
    navInner.classList.add("py-10");
    navInner.classList.remove("py-2");
    floating.classList.add("pt-24");
    floating.classList.remove("pt-6");


  }
}

window.onscroll = function () {
  stickyHeader();
};

// //Floating Nav Bar

// // const setScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

// window.addEventListener("scroll", function() {

//   //console.log(getHamburger);

//   if (window.pageYOffset > 0) {

//   } else {

//   }
//   });

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


$(document).ready(function () {
  var $form = $('#mc-embedded-subscribe-form')
  if ($form.length > 0) {
    $('form input[type="submit"]').bind('click', function (event) {


      console.log("Subscribing...");
      if (event) event.preventDefault()
      register($form)
    })
  }
})
$(document).ready(function () {
  var $form = $('#mc-embedded-subscribe-form')
  if ($form.length > 0) {
    $('form input[type="image"]').bind('click', function (event) {
      if (event) event.preventDefault()
      register($form)
    })
  }
})

function register($form) {
  $('#mc-embedded-subscribe').val('Sending...');
  $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    cache: false,
    dataType: 'json',
    contentType: 'application/json; charset=utf-8',
    error: function (err) { alert('Could not connect to the registration server. Please try again later.') },
    success: function (data) {
      $('#mc-embedded-subscribe').val('subscribe')
      if (data.result === 'success') {
        // Yeahhhh Success
        console.log(data.msg)
        $('#mce-EMAIL').css('borderColor', '#ffffff')
        $('#subscribe-result').css('color', 'rgb(53, 114, 210)')
        $('#subscribe-result').html('<p>Thank you for subscribing. We have sent you a confirmation email.</p>')
        $('#mce-EMAIL').val('')
      } else {
        // Something went wrong, do something to notify the user.
        console.log(data.msg)
        $('#mce-EMAIL').css('borderColor', '#ff8282')
        $('#subscribe-result').css('color', '#ff8282')
        $('#subscribe-result').html('<p>' + data.msg.substring(4) + '</p>')
      }
    }
  })
};

// import then needed Font Awesome functionality
import { library, dom } from "@fortawesome/fontawesome-svg-core";
// import the Facebook and Twitter icons
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";


import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'



// add the imported icons to the library
library.add(faFacebook, faInstagram, faCircleNotch);

// tell FontAwesome to watch the DOM and add the SVGs when it detects icon markup
dom.watch();
