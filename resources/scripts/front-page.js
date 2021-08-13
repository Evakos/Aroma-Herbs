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
	 perPage: 1
 } ).mount();
 
 //Products Slider
 new Splide( '#splide-products', {
	 type   : 'loop',
	 perPage: 4
 } ).mount();