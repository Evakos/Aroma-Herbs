/**
 * External Dependencies
 */
import "jquery";


$(".hamburger").click(function () {
  $(this).toggleClass("is-active");
  // $("#menu-modal").css("width", "60%")
  $("#menu-modal").toggleClass("menu-active");
  $("#overlay").toggleClass("hidden fade-in-fast");

});

// Add active class to the current button (highlight it)
// var header = document.getElementById("myDIV");
var btns = document.getElementsByClassName("prod-filter");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
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

        $('#products').removeClass('fade-in');

        $('#products').addClass('fade-in');
       


      
        // $("#all-products").toggleClass("fade-in");

        $("#products").html(data);
        $("#all-products").hide();
        // $(".cat-filter").removeClass("filter-active");
        // $('[product-id="' + term_id + '"]').addClass("filter-active");
      },
    });
    e.preventDefault(); });
});

// import then needed Font Awesome functionality
import { library, dom } from "@fortawesome/fontawesome-svg-core";
// import the Facebook and Twitter icons
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

// add the imported icons to the library
library.add(faFacebook, faInstagram);

// tell FontAwesome to watch the DOM and add the SVGs when it detects icon markup
dom.watch();
