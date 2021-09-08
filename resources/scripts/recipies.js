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
     arrows: false,
     pagination: true,
   },
 },
  classes: {
   // Add classes for arrows.
   arrows: 'splide__arrows your-class-arrows',
   arrow : 'splide__arrow your-class-arrow',
   prev  : 'splide__arrow--prev your-class-prev',
   next  : 'splide__arrow--next your-class-next',
   
   // Add classes for pagination.
   pagination: 'splide__pagination relative', // container
   		page      : 'splide__pagination__page w-4 h-4 m-1', // each button
 },
  
} ).mount();