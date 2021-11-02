import SimpleLightbox from "simplelightbox";

new SimpleLightbox('.product-image', { 
  
  
//   /* options */ 

loop: true,
nav: false,
showCounter: false,
alertError: false,
closeText: 'X',
close: false,

});




/**
 * Splide Imports
 */
 import Splide from '@splidejs/splide';


 //recipe Slider
 const recipeSlider = new Splide( '#splide-recipe-slider', {
  type   : 'loop',
  perPage: 1,
  pagination: true,
  arrows: true,
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

// recipeSlider.on( 'mounted', function() {

//   if ( recipeSlider.length <= recipeSlider.options.perPage ) {
//       recipeSlider.options.pagination = false;
//       recipeSlider.options.type = "";
//       recipeSlider.options.arrows = false;
//       console.log(recipeSlider.options);
//   }
// });

var items = recipeSlider.length; //Amount of items
var perPage = recipeSlider.options.perPage; //The perPage value

if ( items <= perPage ) { 
  recipeSlider.options = {
          type: "slide",
          pagination: false,
          arrows: false,
     };
}

//console.log(recipeSlider.options);



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
        type     : 'slide',
        perPage: 2,
        gap: '2rem',

        
      
       
      } ).mount();

      //console.log('Larger than 600');

   

  } else {

    //console.log('Smaller than 600');

    var secondarySlider  = new Splide( '#splide-product-thumbs-mobile', {
      isNavigation: true,
      pagination : false,
      arrows     : false,
      cover      : false,
      type     : 'slide',
      perPage: 2,
      width: '160px'
    
     
    } ).mount();



      }
  
      primarySlider.mount();
      primarySlider.sync(secondarySlider).mount();

}

switchOrientation();


  window.onresize = function(){
    switchOrientation();
}



const productThumbs = document.querySelectorAll("li.splide__slide");

productThumbs.forEach(function(item){

  item.addEventListener("click", function(){
    
    //console.log(this.getAttribute('data-weight'));
const prodWeight = this.getAttribute('data-weight');

if (prodWeight == '1') {


document.getElementById('weight-2').classList.add("hidden");

document.getElementById('weight-1').classList.remove("hidden");

}

else  {

  document.getElementById('weight-1').classList.add("hidden");

  document.getElementById('weight-2').classList.remove("hidden");


}


})
})



// const activePackage = document.getElementById("package");

// activePackage.addEventListener("click", function(e){

//   e.preventDefault();

//   console.log('Clicked');

//   this.classList.add("active");

// }
// );