/**
 * External Dependencies
 */
import "jquery";

import lozad from 'lozad';

const observer = lozad();
observer.observe();


const getSingleProducts = document.querySelectorAll(".single-product");

getSingleProducts.forEach((getSingleProduct) => {
  getSingleProduct.addEventListener("mouseover", () => {
    getSingleProduct.classList.add("slide-up");
  });
  getSingleProduct.addEventListener("mouseout", () => {
    getSingleProduct.classList.remove("slide-up");
  });
});
 // do something
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



// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {

  const navOuter = document.getElementById("sticky-nav");

  // Get the header
  const header = document.getElementById("header");

  const sticky = header.getBoundingClientRect().top;

  const logo = document.getElementById("site-logo");

  const navInner = document.getElementById("sticky-nav-inner");
 
  //const floating = document.getElementById("floating");

  const hamburger = document.getElementById("hamburger");

  const hamburgerOpen = document.getElementById("hamburger-open");

  const wpml = document.querySelector(".wpml-ls-statics-shortcode_actions");

  const switchLang = document.getElementById("language-switcher-screen");

  //wpml.classList.add("wpml-sticky");

  if (sticky < 0) {
    //wpml.classList.remove("wpml-ls");  
    navOuter.classList.add("is-sticky");
    logo.classList.add("shrink-logo");
    navOuter.classList.add("fade-in-fast");
    navInner.classList.add("py-2");
    //floating.classList.add("pt-6");
    navInner.classList.remove("py-10");
 
    //floating.classList.remove("pt-24");
    // switchLang.classList.remove("right-32");
    // switchLang.classList.add("right-48");
    hamburger.classList.remove("top-32");
    hamburger.classList.add("top-9");

   

    switchLang.classList.remove("right-0");
    switchLang.classList.add("right-24");

    switchLang.classList.add("top-10");
 


    if ($(window).width() <  1024) {

      //     hamburger.classList.add("md:-mb-36");
    
      hamburger.classList.remove("top-16");
      hamburger.classList.add("top-4");
       
    }
   

  } 
  
  else {

    switchLang.classList.remove("right-24");
    switchLang.classList.add("right-0");

    switchLang.classList.remove("top-10");

   
    // switchLang.classList.remove("right-48");
    wpml.classList.add("wpml-ls");
    navOuter.classList.remove("is-sticky");
    logo.classList.remove("shrink-logo");
    navOuter.classList.remove("fade-in-fast");
    //floating.classList.remove("pt-6");
    navInner.classList.remove("py-2");
    //floating.classList.add("pt-24");
    navInner.classList.add("py-10");
    
    hamburger.classList.add("top-32");
    hamburger.classList.remove("top-9");

  
  

if ($(window).width() <  1024) {

  //     hamburger.classList.add("md:-mb-36");

  hamburger.classList.add("top-16");
  hamburger.classList.remove("top-4");
   
}
   

    


  }
}

window.onscroll = function () {
  stickyHeader();
};

stickyHeader();






$("#hamburger").click(function () {
  $(this).toggleClass("is-active");
  // $("#menu-modal").css("width", "60%")
  $("#menu-modal").toggleClass("menu-active");
  $("#overlay").toggleClass("hidden animate__animated animate__fadeIn");

  // Do this instead

  // $("#language-switcher").toggleClass("hidden");

  // $("#language-switcher-screen").css("display" , "none");

  // var active = $("#language-switcher-screen").toggleClass('active').hasClass('active');
  // $("#language-switcher-screen").css('display', !active ? 'block' : 'none');



  
});

$("#hamburger-open").click(function () {
  $(this).toggleClass("is-active");
  // // $("#menu-modal").css("width", "60%")
  $("#menu-modal").toggleClass("menu-active");
  $("#overlay").toggleClass("hidden animate__animated animate__fadeIn");
  $("#hamburger").toggleClass("is-active");
  $("#hamburger-open").toggleClass("is-active");

  // Do this instead

  // $("#language-switcher").toggleClass("hidden");

  // // $("#language-switcher-screen").css("display" , "none");

  // var active = $("#language-switcher-screen").toggleClass('active').hasClass('active');
  // $("#language-switcher-screen").css('display', !active ? 'block' : 'none');



  
});



const homeLogo = document.getElementById("site-logo");
function goHome() {

  window.location.href = '/';
};

homeLogo.addEventListener("click", goHome, false);






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
        $('#mail-chimp').hide();
        $('#mce-EMAIL').css('borderColor', '#ffffff')
        $('#subscribe-result').css('color', 'rgb(181, 217, 99')
        $('#subscribe-result').html('<p style="margin-top:3rem">Thank you for subscribing. We have sent you a confirmation email.</p>')
        $('#mce-EMAIL').val('')
      } else {
        // Something went wrong, do something to notify the user.
        console.log(data.msg)
        $('#mce-EMAIL').css('borderColor', '#ff8282')
        $('#subscribe-result').css('color', '#ff8282')
        $('#subscribe-result').html('<p style="margin-top:3rem">' + data.msg.substring(4) + '</p>')
      }
    }
  })
};



document.getElementById("site-logo").addEventListener("click", function (event) {

console.log('Logo Clicked');

});


// import then needed Font Awesome functionality
import { library, dom } from "@fortawesome/fontawesome-svg-core";
// import the Facebook and Twitter icons
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";


import { faCircleNotch, faTimes } from '@fortawesome/free-solid-svg-icons'



// add the imported icons to the library
library.add(faFacebook, faInstagram, faCircleNotch, faTimes);

// tell FontAwesome to watch the DOM and add the SVGs when it detects icon markup
dom.watch();
