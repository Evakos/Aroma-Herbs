/**
 * Splide Imports
 */
 import Splide from '@splidejs/splide';


 //Recipie Slider
 new Splide( '#splide-recipie-slider', {
  type   : 'loop',
  perPage: 1,
  breakpoints: {
   640: {
     arrows: false
   },
 },
  classes: {
   // Add classes for arrows.
   arrows: 'splide__arrows',
   arrow : 'splide__arrow',
   prev  : 'splide__arrow--prev',
   next  : 'splide__arrow--next',
   
   // Add classes for pagination.
   pagination: 'splide__pagination relative md:absolute md:py-10', // container
   page      : 'splide__pagination__page w-4 h-4 m-1', // each button
 },
  
} ).mount();



function switchOrientation(){

  // Create the main slider.
  var primarySlider = new Splide( '#splide-product-main', {
    type       : 'fade',
    pagination : false,
    arrows     : false,
    cover      : true,
    drag :false,
  } );
  
  
  //primarySlider.sync( secondarySlider ).mount();

  
  if(typeof primarySlider  != "undefined"){
    primarySlider.destroy();
}
  if(window.innerWidth > 600){
      //mainSlider.options.arrows = false;
      // sliderNav = new Splide( '#splide-product-thumbs', sliderNavObjLarge);
      var secondarySlider = new Splide( '#splide-product-thumbs', {
        direction: 'ttb',
        height   : '35rem',//Needs Height
        isNavigation: true,
        pagination : false,
        arrows     : false,
        cover      : false,
        type     : 'loop',
        perPage: 2,
        gap: '2rem',
      
       
      } ).mount();

      console.log('Larger than 600');

  } else {

    console.log('Smaller than 600');

    var secondarySlider  = new Splide( '#splide-product-thumbs-mobile', {
      direction: 'ltr',
      isNavigation: true,
      pagination : false,
      arrows     : false,
      cover      : false,
      type     : 'loop',
      perPage: 2,
      width: '160px',
    
     
    } ).mount();



      }
  
      primarySlider.mount();
      primarySlider.sync(secondarySlider).mount();

}

switchOrientation();


  window.onresize = function(){
    switchOrientation();
}

// var mainSlider, sliderNav;

// function switchSliderOrientation(){

  
//   if(typeof sliderNav != "undefined"){
//   sliderNav.destroy();
// }
//   if(window.innerWidth > 300){
//       mainSlider.options.arrows = false;
//       sliderNav = new Splide( '#splide-product-thumbs', sliderNavObjLarge);
//   } else {
//           sliderNav = new Splide( '#splide-product-thumbs', sliderNavObjMobile);
//       }
  
//       mainSlider.mount();
//       sliderNav.sync(  mainSlider).mount();

// }

//   switchSliderOrientation();


//   window.onresize = function(){
//   switchSliderOrientation();
// }