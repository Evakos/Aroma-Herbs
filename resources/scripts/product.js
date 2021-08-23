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
   arrows: 'splide__arrows your-class-arrows',
   arrow : 'splide__arrow your-class-arrow',
   prev  : 'splide__arrow--prev your-class-prev',
   next  : 'splide__arrow--next your-class-next',
   
   // Add classes for pagination.
   pagination: 'splide__pagination relative sm:absolute', // container
   page      : 'splide__pagination__page your-class-page', // each button
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