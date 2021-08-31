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
   pagination: 'splide__pagination relative sm:absolute', // container
   page      : 'splide__pagination__page w-4 h-4 m-1', // each button
 },
  
} ).mount();
 
 var secondarySlider = new Splide( '#splide-product-thumbs', {
  direction: 'ttb',
  height   : '35rem',
  isNavigation: true,
  pagination : false,
	arrows     : false,
	cover      : false,
  type     : 'loop',
  perPage: 2,
  gap: '2rem',
  breakpoints: {
		640: {
			direction: 'ltr',
		},
	},
 
} ).mount();


// Create the main slider.
var primarySlider = new Splide( '#splide-product-main', {
	type       : 'fade',
	pagination : false,
	arrows     : false,
	cover      : true,
} );


primarySlider.sync( secondarySlider ).mount();