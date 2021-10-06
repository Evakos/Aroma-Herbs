<?php

/**
 * Theme filters.
 */

namespace App;

/**
 * Add "… Continued" to the excerpt.
 *
 * @return string
 */
add_filter('excerpt_more', function () {
    return sprintf(' &hellip; <a href="%s">%s</a>', get_permalink(), __('Continued', 'sage'));
});

//Alow Shortcode in Contact Form Field
add_filter('acf/format_value/name=contact_form', 'eks_acf_format_value', 10, 3);


//Remove P tags in Contact Form Field
add_filter('wpcf7_autop_or_not', '__return_false');


// Allow SVG// Allow SVG
add_filter('wp_check_filetype_and_ext', function ($data, $file, $filename, $mimes) {

    if (!$data['type']) {
        $wp_filetype = wp_check_filetype($filename, $mimes);
        $ext = $wp_filetype['ext'];
        $type = $wp_filetype['type'];
        $proper_filename = $filename;
        if ($type && 0 === strpos($type, 'image/') && $ext !== 'svg') {
            $ext = $type = false;
        }
        $data['ext'] = $ext;
        $data['type'] = $type;
        $data['proper_filename'] = $proper_filename;
    }
    return $data;


}, 10, 4);


add_filter('upload_mimes', function ($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
});


/**
 * Use Lozad (lazy loading) for attachments/featured images
 */
// add_filter('wp_get_attachment_image_attributes', function ($attr, $attachment) {
//     // Bail on admin
//     if (is_admin()) {
//         return $attr;
//     }

//     $attr['data-src'] = $attr['src'];
//     $attr['class'] .= ' lozad';
//     unset($attr['src']);

//     return $attr;
// }, 10, 2);



