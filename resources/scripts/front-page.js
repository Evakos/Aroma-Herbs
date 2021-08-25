/**
 * External Dependencies
 */
import "jquery";

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
 
 //Products Slider
 new Splide( '#splide-products', {
	 type   : 'loop',
	 perPage: 4,
	 breakpoints: {
		640: {
			perPage: 1,
		},
	},
	classes: {
		// Add classes for arrows.
		arrows: 'splide__arrows your-class-arrows',
		arrow : 'splide__arrow your-class-arrow',
		prev  : 'splide__arrow--prev your-class-prev',
		next  : 'splide__arrow--next your-class-next',
		
		// Add classes for pagination.
		pagination: 'splide__pagination relative my-20', // container
		page      : 'splide__pagination__page your-class-page', // each button
	},
 } ).mount();
