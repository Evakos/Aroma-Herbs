<?php

/**
 * Theme setup.
 */

namespace App;

use function Roots\asset;

/**
 * Register the theme assets.
 *
 * @return void
 */
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_script('sage/vendor.js', asset('scripts/vendor.js')->uri(), ['jquery'], null, true);
    wp_enqueue_script('sage/app.js', asset('scripts/app.js')->uri(), ['sage/vendor.js'], null, true);
    wp_enqueue_script('sage/accents.js', asset('scripts/accents.js')->uri(), ['sage/vendor.js'], null, true);
    wp_enqueue_script('sage/load-more.js', asset('scripts/load-more.js')->uri(), ['sage/vendor.js', 'sage/app.js'], null, true);
    //wp_enqueue_script('sage/Recipes-filter.js', asset('scripts/Recipes-filter.js')->uri(), ['sage/vendor.js', 'sage/app.js'], null, true);



    
    if ( is_page( 34 )  ) {

        wp_enqueue_script('sage/product-archive.js', asset('scripts/product-archive.js')->uri(), ['sage/vendor.js', 'sage/app.js'], null, true);
        
    }

    if ( 'products' == get_post_type() && is_singular() ) {

        wp_enqueue_script('sage/product.js', asset('scripts/product.js')->uri(), ['sage/vendor.js', 'sage/app.js'], null, true);
        
    }


    

    if ( is_front_page() ) {

        wp_enqueue_script('sage/front-page.js', asset('scripts/front-page.js')->uri(), ['sage/vendor.js', 'sage/app.js'], null, true);
        // wp_enqueue_script('sage/animation.js', asset('scripts/animation.js')->uri(), ['sage/vendor.js', 'sage/app.js'], null, true);
        wp_enqueue_script('sage/recipes.js', asset('scripts/recipes.js')->uri(), ['sage/vendor.js', 'sage/app.js'], null, true);

        wp_enqueue_script('sage/load-more.js', asset('scripts/load-more.js')->uri(), ['sage/vendor.js', 'sage/app.js'], null, true);
        
    }

    if ( is_page( 30 )  ) 

  {

        wp_enqueue_script('sage/recipes.js', asset('scripts/recipes.js')->uri(), ['sage/vendor.js', 'sage/app.js'], null, true);
        wp_enqueue_script('sage/recipes-filter.js', asset('scripts/recipes-filter.js')->uri(), ['sage/vendor.js', 'sage/app.js'], null, true);

        
        
    }






      // + Localize script /Providers/Ajax
    //   wp_localize_script('sage/app.js', 'sage', Providers\Ajax::localize_script_vars());

    wp_add_inline_script('sage/vendor.js', asset('scripts/manifest.js')->contents(), 'before');

    if (is_single() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }

    wp_enqueue_style('sage/app.css', asset('styles/app.css')->uri(), false, null);
}, 100);


/**
 * Register the theme assets with the block editor.
 *
 * @return void
 */
add_action('enqueue_block_editor_assets', function () {
    if ($manifest = asset('scripts/manifest.asset.php')->load()) {
        wp_enqueue_script('sage/vendor.js', asset('scripts/vendor.js')->uri(), ...array_values($manifest));
        wp_enqueue_script('sage/editor.js', asset('scripts/editor.js')->uri(), ['sage/vendor.js'], null, true);

        wp_add_inline_script('sage/vendor.js', asset('scripts/manifest.js')->contents(), 'before');
    }

    wp_enqueue_style('sage/editor.css', asset('styles/editor.css')->uri(), false, null);
}, 100);




/**
 * Register the initial theme setup.
 *
 * @return void
 */
add_action('after_setup_theme', function () {


    add_image_size( 'product-image', 400); // width, height, crop



    /**
     * Enable features from the Soil plugin if activated.
     * @link https://roots.io/plugins/soil/
     */
    add_theme_support('soil', [
        'clean-up',
        'nav-walker',
        'nice-search',
        'relative-urls'
    ]);

  
   
    
  
    /**
     * Disable full-site editing support.
     *
     * @link https://wptavern.com/gutenberg-10-5-embeds-pdfs-adds-verse-block-color-options-and-introduces-new-patterns
     */
    remove_theme_support('block-templates');

    /**
     * Register the navigation menus.
     * @link https://developer.wordpress.org/reference/functions/register_nav_menus/
     */
    register_nav_menus([
        'primary_navigation' => __('Primary Navigation', 'sage'),
        'secondary_navigation' => __('Secondary Navigation', 'sage')
    ]);

    /**
     * Register the editor color palette.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#block-color-palettes
     */
    add_theme_support('editor-color-palette', []);

    /**
     * Register the editor color gradient presets.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#block-gradient-presets
     */
    add_theme_support('editor-gradient-presets', []);

    /**
     * Register the editor font sizes.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#block-font-sizes
     */
    add_theme_support('editor-font-sizes', []);

    /**
     * Register relative length units in the editor.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#support-custom-units
     */
    add_theme_support('custom-units');

    /**
     * Enable support for custom line heights in the editor.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#supporting-custom-line-heights
     */
    add_theme_support('custom-line-height');

    /**
     * Enable support for custom block spacing control in the editor.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#spacing-control
     */
    add_theme_support('custom-spacing');

    /**
     * Disable custom colors in the editor.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#disabling-custom-colors-in-block-color-palettes
     */
    add_theme_support('disable-custom-colors');

    /**
     * Disable custom color gradients in the editor.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#disabling-custom-gradients
     */
    add_theme_support('disable-custom-gradients');

    /**
     * Disable custom font sizes in the editor.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#disabling-custom-font-sizes
     */
    add_theme_support('disable-custom-font-sizes');

    /**
     * Disable the default block patterns.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#disabling-the-default-block-patterns
     */
    remove_theme_support('core-block-patterns');

    /**
     * Enable plugins to manage the document title.
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#title-tag
     */
    add_theme_support('title-tag');

    /**
     * Enable post thumbnail support.
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support('post-thumbnails');

    /**
     * Enable wide alignment support.
     * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/themes/theme-support/#wide-alignment
     */
    add_theme_support('align-wide');

    /**
     * Enable responsive embed support.
     * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/themes/theme-support/#responsive-embedded-content
     */
    add_theme_support('responsive-embeds');

    /**
     * Enable HTML5 markup support.
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#html5
     */
    add_theme_support('html5', [
        'caption',
        'comment-form',
        'comment-list',
        'gallery',
        'search-form',
        'script',
        'style'
    ]);


    /**
     * Enable selective refresh for widgets in customizer.
     * @link https://developer.wordpress.org/themes/advanced-topics/customizer-api/#theme-support-in-sidebars
     */
    add_theme_support('customize-selective-refresh-widgets');
}, 20);






/**
 * Async load CSS
 */

// add_filter('style_loader_tag', function (string $html, string $handle): string {
//     $dom = new \DOMDocument();
//     $dom->loadHTML($html);
//     $tag = $dom->getElementById($handle . '-css');
//     $tag->setAttribute('media', 'print');
//     $tag->setAttribute('onload', "this.media='all'");
//     $tag->removeAttribute('type');
//     $tag->removeAttribute('id');
//     $html = $dom->saveHTML($tag);

//     return $html;
// }, 999, 2);

/**
 * Register the theme sidebars.
 *
 * @return void
 */
add_action('widgets_init', function () {
    $config = [
        'before_widget' => '<section class="widget %1$s %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h3>',
        'after_title' => '</h3>'
    ];

    register_sidebar([
        'name' => __('Primary', 'sage'),
        'id' => 'sidebar-primary'
    ] + $config);

    register_sidebar([
        'name' => __('Footer', 'sage'),
        'id' => 'sidebar-footer'
    ] + $config);
});


// 1. customize ACF path
add_filter('acf/settings/path', __NAMESPACE__. '\my_acf_settings_path');
function my_acf_settings_path( $path ) {
 // update path
 $path = get_stylesheet_directory() . '/acf/';
 // return
 return $path; 
}
// 2. customize ACF dir
add_filter('acf/settings/dir', __NAMESPACE__ . '\my_acf_settings_dir');
function my_acf_settings_dir( $dir ) {
 // update path
 $dir = get_stylesheet_directory_uri() . '/resources/acf/';
 // return
 return $dir; 
}
// 3. Hide ACF field group menu item
//add_filter('acf/settings/show_admin', '__return_false');
// 4. Include ACF
include_once( get_stylesheet_directory() . '/resources/acf/acf.php' );


 


// Recipes CPT

add_action( 'init', function() {
	register_extended_post_type( 'recipes', [
'show_in_feed' => true,
'menu_icon'    => 'dashicons-food',
'show_in_rest' => true,


'has_archive'  => false,


'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ),
'taxonomies' => array('recipes', 'category', 'courses', 'dietary_restrictions'),

# Add some custom columns to the admin screen:
		'admin_cols' => [
			'courses' => [
            'taxonomy' => 'courses'
            ],
			'dietary_restrictions' => [
				'taxonomy' => 'dietary_restrictions'
		]
		],
		'archive' => [
			'nopaging' => true,
		],

	], [

		'singular' => 'Recipe',
		'plural'   => 'Recipes',
		'slug'     => 'Recipes',

	] );

	register_extended_taxonomy( 'courses', 'recipes', array(

		'dashboard_glance' => true,
        'show_in_rest'      => true, // Needed for tax to appear in Gutenberg editor.

		'admin_cols' => array(
				'updated' => array(
						'title'       => 'Updated',
						'meta_key'    => 'updated_date',
						'date_format' => 'd/m/Y'
				),
		),

), array(

		'singular' => 'Course',
		'plural'   => 'Courses',
		'slug'     => 'course'

) );


register_extended_taxonomy( 'dietary_restrictions', 'recipes', array(

    'dashboard_glance' => true,
    'show_in_rest'      => true, // Needed for tax to appear in Gutenberg editor.

    'admin_cols' => array(
            'updated' => array(
                    'title'       => 'Updated',
                    'meta_key'    => 'updated_date',
                    'date_format' => 'd/m/Y'
            ),
    ),

), array(

    'singular' => 'Diet Restriction',
    'plural'   => 'Dietary Restrictions',
    'slug'     => 'dietary_restrictions'

) );


register_extended_taxonomy( 'product', 'recipes', array(

    'dashboard_glance' => true,
    'show_in_rest'      => true, // Needed for tax to appear in Gutenberg editor.

    'admin_cols' => array(
            'updated' => array(
                    'title'       => 'Updated',
                    'meta_key'    => 'updated_date',
                    'date_format' => 'd/m/Y'
            ),
    ),

), array(

    'singular' => 'Product',
    'plural'   => 'Products',
    'slug'     => 'product'

) );




} );









//Tips & Τwists CPT

add_action( 'init', function() {
	register_extended_post_type( 'tips', [
'show_in_feed' => true,
'menu_icon'    => 'dashicons-pressthis',
'show_in_rest' => true,
'has_archive'  => false,
'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ),
'taxonomies' => array('category', 'tags'),


# Add some custom columns to the admin screen:
		'admin_cols' => [

            'product_featured_image' => [
				'title'          => 'Product Image',
				'featured_image' => 'thumbnail'
			],
			'category' => [
            'taxonomy' => 'category'
			],
            'tags' => [
                'taxonomy' => 'tags'
                ],
		],

		'archive' => [
			'nopaging' => true,
		],

	], [

		'singular' => 'Tip',
		'plural'   => 'Tips',
		'slug'     => 'tips',

	] );

	register_extended_taxonomy( 'tip-tags', 'tips', array(

		'dashboard_glance' => true,

		'admin_cols' => array(
				'updated' => array(
						'title'       => 'Updated',
						'meta_key'    => 'updated_date',
						'date_format' => 'd/m/Y'
				),
		),

), array(

		'singular' => 'Tip Tag',
		'plural'   => 'Tip Tags',
		'slug'     => 'tip-tag'

) );

} );








//Products CPT

add_action( 'init', function() {
	register_extended_post_type( 'products', [
'show_in_feed' => true,
'menu_icon'    => 'dashicons-store',
'show_in_rest' => true,
'has_archive'  => false,
'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' ),
'taxonomies' => array('category', 'tags'),


# Add some custom columns to the admin screen:
		'admin_cols' => [

            'product_featured_image' => [
				'title'          => 'Product Image',
				'featured_image' => 'thumbnail'
			],
			'category' => [
            'taxonomy' => 'category'
			],
            'tags' => [
                'taxonomy' => 'tags'
                ],
		],

		'archive' => [
			'nopaging' => true,
		],

	], [

		'singular' => 'Product',
		'plural'   => 'Products',
		'slug'     => 'product',

	] );

	register_extended_taxonomy( 'product-tags', 'products', array(

		'dashboard_glance' => true,

		'admin_cols' => array(
				'updated' => array(
						'title'       => 'Updated',
						'meta_key'    => 'updated_date',
						'date_format' => 'd/m/Y'
				),
		),

), array(

		'singular' => 'Product Tag',
		'plural'   => 'Product Tags',
		'slug'     => 'product-tag'

) );

} );
