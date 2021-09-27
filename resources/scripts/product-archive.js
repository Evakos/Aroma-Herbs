/**
 * External Dependencies
 */
 import "jquery";


import AOS from "aos";

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: 'mobile',// accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 0, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation

});


function createRow() {

const createRows = $(".single-product-grid");
for(var i = 0; i < createRows.length; i+=4) {

  createRows.slice(i, i+4).wrapAll("<div class='product-row grid md:grid-cols-4' data-aos='fade-up'></div>");
}

$('.product-row').each(function(i) {
  $(this).addClass('row-'+(i+1));

});

}

//createRow();   I could call it here.


$(() => {



    //createRow();

    var term_id = jQuery(this).attr("product-id");

    //console.log("The ID:" + term_id);

    $.ajax({
      type: "post",
      //  url : '<?php echo site_url() ?>/wp-admin/admin-ajax.php',
      // url : sage.admin_url,
      url: "/wp-admin/admin-ajax.php",
      data: { action: "filterproducts", categoryfilter: term_id },
      success: function (data) {
        
        $("#products").html(data);

        createRow();
      
        console.log('Got Data')
      },

    }).done(function() {
     document.getElementById('loader-product').style.display = "none"; 

     $("#products").removeClass("hidden"); // Hide loader.

    //console.log("finished all loaded");
    });





  $(".prod-filter").click(function (e) {
 
    var term_id = jQuery(this).attr("product-id");


    $.ajax({
      type: "post",
     
      url: "/wp-admin/admin-ajax.php",
      data: { action: "filterproducts", categoryfilter: term_id },
      success: function (data) {
      
        $("#products").html(data);

        createRow(); //Call this here to create rows

        document.getElementById('loader-product').style.display = "none"; //Hide Loader

     $("#products").removeClass("hidden"); // Reveal Products.
      },
    });
    e.preventDefault();

  });



  
});


