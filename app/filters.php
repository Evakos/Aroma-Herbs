<?php

/**
 * Theme filters.
 */

namespace App;

/**
 * Add "… Continued" to the excerpt.
 *
 * @return string
 */ssh
add_filter('excerpt_more', function () {
    return sprintf(' &hellip; <a href="%s">%s</a>', get_permalink(), __('Continued', 'sage'));
});

//Alow Shortcode in Contact Form Field
add_filter('acf/format_value/name=contact_form', 'eks_acf_format_value', 10, 3);


//Remove P tags in Contact Form Field
add_filter('wpcf7_autop_or_not', '__return_false');





