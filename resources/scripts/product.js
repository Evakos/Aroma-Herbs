/**
 * Splide Imports
 */
 import Splide from '@splidejs/splide';


 //Recipie Slider
 new Splide( '#splide-recipie-slider', {
   type   : 'loop',
   perPage: 1
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
 
} ).mount();


// Create the main slider.
var primarySlider = new Splide( '#splide-product-main', {
	type       : 'fade',
	pagination : false,
	arrows     : false,
	cover      : true,
} );


primarySlider.sync( secondarySlider ).mount();