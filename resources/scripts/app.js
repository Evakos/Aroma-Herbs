/**
 * External Dependencies
 */
import "jquery";


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


//console.log("This is the sticky position:" + sticky)

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
