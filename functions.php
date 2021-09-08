<?php

/*
|--------------------------------------------------------------------------
| Register The Auto Loader
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader for
| our theme. We will simply require it into the script here so that we
| don't have to worry about manually loading any of our classes later on.
|
*/

if (! file_exists($composer = __DIR__ . '/vendor/autoload.php')) {
    wp_die(__('Error locating autoloader. Please run <code>composer install</code>.', 'sage'));
}

require $composer;

/*
|--------------------------------------------------------------------------
| Run The Theme
|--------------------------------------------------------------------------
|
| Once we have the theme booted, we can handle the incoming request using
| the application's HTTP kernel. Then, we will send the response back
| to this client's browser, allowing them to enjoy our application.
|
*/

require_once __DIR__ . '/bootstrap/app.php';

// add_action( 'init', 'recipies_cpt' );

// function recipies_cpt() {

// 	$labels = array(
// 		'name' => __( 'Recipies' ),
// 		'singular_name' => __( 'Recipie' ),
// 		'all_items' => __('All Recipies'),
// 		'add_new' => _x('Add Recipie', 'eks'),
// 		'add_new_item' => __('Add Recipie'),
// 		'edit_item' => __('Edit Recipie'),
// 		'new_item' => __('New Recipie'),
// 		'view_item' => __('View Recipie'),
// 		'search_items' => __('Search in Recipies'),
// 		'not_found' =>  __('No Recipie found'),
// 		'not_found_in_trash' => __('No Recipie found in trash'),
// 		'parent_item_colon' => ''
// 	);

// 	$args = array (
// 		'labels' => $labels,
// 		'public' => true,
// 		'has_archive' => true,
// 		'menu_icon' => 'dashicons-food',
// 		'rewrite' => true,
// 		'taxonomies' => array( 'category', 'post_tag' ),
// 		'query_var' => true,
// 		'menu_position' => 5,
// 		'supports' => array(
// 			'title',
// 			'editor',
// 			'author',
// 			'thumbnail',
// 			'excerpt',
// 			'custom-fields',
// 			'revisions')

// 	);

// 	// flush_rewrite_rules( false );

// 	register_post_type( 'recipies_cpt', $args);
// }



// add_action( 'init', 'products_cpt' );

// function products_cpt() {

// 	$labels = array(
// 		'name' => __( 'Products' ),
// 		'singular_name' => __( 'Product' ),
// 		'all_items' => __('All Products'),
// 		'add_new' => _x('Add Product', 'eks'),
// 		'add_new_item' => __('Add Product'),
// 		'edit_item' => __('Edit Product'),
// 		'new_item' => __('New Product'),
// 		'view_item' => __('View Product'),
// 		'search_items' => __('Search in Products'),
// 		'not_found' =>  __('No Product found'),
// 		'not_found_in_trash' => __('No Product found in trash'),
// 		'parent_item_colon' => ''
// 	);

// 	$args = array (
// 		'labels' => $labels,
// 		'public' => true,
// 		'has_archive' => true,
// 		'menu_icon' => 'dashicons-store',
// 		'rewrite' => true,
// 		'taxonomies' => array( 'products', 'post_tag' ),
// 		'query_var' => true,
// 		'menu_position' => 5,
// 		'supports' => array(
// 			'title',
// 			'editor',
// 			'author',
// 			'thumbnail',
// 			'excerpt',
// 			'custom-fields',
// 			'revisions')

// 	);

// 	// flush_rewrite_rules( false );

// 	register_post_type( 'products_cpt', $args);
// }


// add_action( 'init', function() {
// 	register_extended_post_type( 'products' );
// } );

// add_action( 'init', function() {
// 	register_extended_taxonomy( 'location', 'article' );
// } );





//Ajax Posts Filter
add_action('wp_ajax_filterproducts', 'filter_products'); 
add_action('wp_ajax_nopriv_filterproducts', 'filter_products');
 
function filter_products(){

	$args = array(
		'orderby' => 'date', 
		'post_type' => 'products',
		'posts_per_page' => -1,
		
	);

	if( isset( $_POST['categoryfilter'] ) )
		$args['tax_query'] = array(
			array(
				'taxonomy' => 'category',
				'field' => 'id',
				'terms' => $_POST['categoryfilter']
			)
		);
 
	$query = new WP_Query( $args );

    //var_dump($query);
 
	if( $query->have_posts() ) :
        echo '<div class="grid md:grid-cols-4 gap-4">';
		while( $query->have_posts() ): $query->the_post(); 

		$featured_img_url = get_the_post_thumbnail_url(get_the_ID(),'full'); 

        $product_link = get_permalink();

// 		$thumbnail_id = get_post_meta( $post->ID, '_thumbnail_id', true );
// $img_alt = get_post_meta ( $thumbnail_id, '_wp_attachment_image_alt', true );

		//$img_alt = get_post_meta($image_id, '_wp_attachment_image_alt', true);

		// var_dump($featured_img_url);
		// var_dump($product_link);

		?>
		<div class="py-10 px-20 md:py-0 md:p-16 flex items-end single-product">
    
		<a href="<?php echo $product_link ?>" class="cursor-pointer">
	  
	  <img src="<?php echo $featured_img_url?>" alt="" class="" />
	  
	  <p class="font-takhie text-dark-green text-center py-10 text-3xl">
	  <?php the_title(); ?>
	  </p>
	  
	  </a>
	  
		  </div>

		  <?php
		endwhile;
        echo '</div>';
		wp_reset_postdata();
	else :
		echo 'Nothing Found';
	endif;
 
	die();
}


//Default Image
add_action('acf/render_field_settings/type=image', 'add_defult_image_field');
    function add_defult_image_field($field) {
        acf_render_field_setting( $field, array(
            'label'         => 'Defult Image',
            'instructions'      => 'Appears when creating a new post',
            'type'          => 'image',
            'name'          => 'defult_value',
        ));
    }


	function eks_acf_format_value( $value, $post_id, $field ) {

		// Render shortcodes in all textarea values.
		return do_shortcode( $value );
	}





function aroma_customizer_social_media_array() {
	/* store social site names in array */
	$social_sites = 
	array(
		'twitter', 
		'facebook', 
		'google-plus', 
		'flickr', 
		'pinterest', 
		'youtube', 
		'tumblr', 
		'dribbble', 
		'rss', 
		'linkedin', 
		'instagram', 
		'email'
	);
	
	return $social_sites;
}


/* takes user input from the customizer and outputs linked social media icons */
function aroma_social_media_icons() {
	$social_sites = aroma_customizer_social_media_array();
	
	/* any inputs that aren't empty are stored in $active_sites array */
	foreach($social_sites as $social_site) {
		if( strlen( get_theme_mod( $social_site ) ) > 0 ) {
			$active_sites[] = $social_site;
		}
	}
	
	/* for each active social site, add it as a list item */
	if ( ! empty( $active_sites ) ) {
		echo "<ul class='social-media-icons flex'>";
		foreach ( $active_sites as $active_site ) {
		
		/* setup the class */
		$class = 'fab fa-' . $active_site . ' fa-2x';
		if ( $active_site == 'email' ) {
	?>
	<li class="text-light-green">
		<a class="email" target="_blank" href="mailto:<?php echo antispambot( is_email( get_theme_mod( $active_site ) ) ); ?>">
			<i class="fa fa-envelope" title="<?php _e('email icon', 'text-domain'); ?>"></i>
		</a>
	</li>

<?php 
	} 
	else { ?>
	<li class="text-light-green">
		<a class="<?php echo $active_site; ?> hover:animate-bounce" target="_blank" href="<?php echo esc_url( get_theme_mod( $active_site) ); ?>">
			<i class="<?php echo esc_attr( $class ); ?>" title="<?php printf( __('%s icon', 'text-domain'), $active_site ); ?>"></i>
		</a>
	</li>
	<?php
	}
	}
	echo "</ul>";
	}
}


		