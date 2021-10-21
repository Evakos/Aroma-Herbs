/**
 * External Dependencies
 */
import "jquery";


import AOS from "aos";

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: false, // class applied after initialization
  animatedClassName: "animated", // class applied on animation
  useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: -1000, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-top", // defines which position of the element regarding to window should trigger the animation
});

/**
 * Splide Imports
 */
 import Splide from '@splidejs/splide';

 
 //Products Slider
 new Splide( '#splide-products', {
	 type   : 'loop',
	 perPage: 4,
	 breakpoints: {

		600: {
			pagination: false,
			perPage: 1,
		},
		 
		768: {
			pagination: false,
			perPage: 2,
		},

		1024: {
			pagination: false,
			perPage: 3,
		},
	},
	classes: {
		// Add classes for arrows.
		arrows: 'splide__arrows',
		arrow : 'splide__arrow',
		prev  : 'splide__arrow--prev -left-2',
		next  : 'splide__arrow--next -right-2',
		
		// Add classes for pagination.
		pagination: 'splide__pagination relative my-10', // container
		page      : 'splide__pagination__page w-4 h-4 m-1', // each button
	},
 } ).mount();