/**
 * External Dependencies
 */
 import "jquery";



/**
 * Splide Imports
 */
 import Splide from '@splidejs/splide';


 //recipe Slider
 new Splide( '#splide-recipe-slider', {
  type   : 'loop',
  perPage: 1,
  breakpoints: {
   640: {
     arrows: false,
     pagination: true,
   },
 },
  classes: {
   // Add classes for arrows.
   arrows: 'splide__arrows',
   arrow : 'splide__arrow',
   prev  : 'splide__arrow--prev xl:left-60',
   next  : 'splide__arrow--next xl:right-60',
   
   // Add classes for pagination.
   pagination: 'splide__pagination', // container
   page      : 'splide__pagination__page w-4 h-4 m-1', // each button
 },
  
} ).mount();

