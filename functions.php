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




//Default Image
add_action('acf/render_field_settings/type=image', 'add_defult_image_field');
    function add_defult_image_field($field) {
        acf_render_field_setting( $field, array(
            'label'         => 'Default Image',
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


// Fresh News Show More

add_action('wp_ajax_nopriv_more_news_ajax', 'more_news_ajax');
add_action('wp_ajax_more_news_ajax', 'more_news_ajax');


function more_news_ajax(){

    $ppp = (isset($_POST["ppp"])) ? $_POST["ppp"] : 4;
	
    $page = (isset($_POST['pageNumber'])) ? $_POST['pageNumber'] : 0;

    header("Content-Type: text/html");

    $args = array(
        'suppress_filters' => true,
        'post_type' => 'post',
        'posts_per_page' => $ppp,
        'paged'    => $page,
		'tax_query' => array(
            array(
                'taxonomy' => 'category',
                'field' => 'id',
                'terms' => 32
            ),
    ),
    );

    $loop = new WP_Query($args);

    if ($loop -> have_posts()) :  while ($loop -> have_posts()) : $loop -> the_post(); ?>

	<div class="relative overflow-hidden block max-h-[300px] fade-in" id="blog-card">


	<a href="<?php the_permalink();?>" class="blog-card">

	
	<div class="blog-title transition duration-700 ease-in-out bg-light-green p-5 z-50 text-white absolute bottom-0 flex justify-right opacity-80 xl:opacity-0">


	<?php $featured_image_url = wp_get_attachment_image_src( get_post_thumbnail_id( $loop->ID ), 'full' ); ?>


	<p><?php echo esc_html( get_the_title() );?></p>

	</div>

	<img src="<?php echo $featured_image_url[0]; ?>" alt="Full Image" class="object-cover w-full h-full xl:h-auto"/>

	</a>

	</div>

	<?php
		 
    endwhile;
    endif;
    wp_reset_postdata();
    
	// die();
}


//recipe Ajax Posts Filter

add_action('wp_ajax_recipefilter', 'recipe_filter'); 
add_action('wp_ajax_nopriv_recipefilter', 'recipe_filter');

function recipe_filter(){

	if( empty( $_POST['viewall'] )) {
	
	$args = array(
		'orderby' => 'date', // we will sort posts by date
		'order'	=> 'ASC', // ASC or DESC
		'posts_per_page' => -1, // get all posts
	);
 
	//Taxonomy query for recipe linked to product.
	if( isset( $_POST['productrecipefilter'] ) )
		$args['tax_query'] = array(
			array(
				'taxonomy' => 'product',
				'field' => 'id',
				'terms' => $_POST['productrecipefilter']
			)
		);

	//Taxonomy query for diet type.
	if( isset( $_POST['dietrecipefilter'] ) )
	$args['tax_query'] = array(
		array(
			'taxonomy' => 'dietary_restrictions',
			'field' => 'id',
			'terms' => $_POST['dietrecipefilter']
		)
	);

	 
	//Taxonomy query for course type.
	if( isset( $_POST['coursesrecipefilter'] ) )
		$args['tax_query'] = array(
			array(
				'taxonomy' => 'courses',
				'field' => 'id',
				'terms' => $_POST['coursesrecipefilter']
			)
		);
 
	}

	else {

		$args = array(
			'orderby' => 'date', // we will sort posts by date
			'order'	=> 'ASC', // ASC or DESC
			'posts_per_page' => -1, // get all posts
			'post_type' => 'recipes',
			'post_status' => 'publish',
		);
	}
 
	$count = 1;
	$query = new WP_Query( $args );
 
	if( $query->have_posts() ) :
        echo '<div class="grid md:grid-cols-4 md:gap-4">';


		while( $query->have_posts() ): $query->the_post(); 

		$featured_img_url = get_the_post_thumbnail_url(get_the_ID(),'full'); 

        $product_link = get_permalink();

		?>
		    <div class="grid relative mb-10 sm:m-0
        
        <?php if ($count % 5 == 1)
        {echo 'row-span-2';}
        else if ($count % 4 == 4)
        {echo 'row-span-1';}
        
else {echo 'row-span-1';}
        ?>
        ">

		<img src="<?php echo $featured_img_url?>" alt="" class="object-cover h-full" />
    
		<a href="<?php echo $product_link ?>" class="absolute flex flex-col w-full bottom-0 xl:bottom-auto p-3 xl:p-0 xl:h-full justify-center items-center bg-light-green" id="recipes-title"/>
	  

	  <p class="text-white text-2xl mb-2 xl:mb-10"><?php the_title(); ?></p>

<p class="font-takhie text-xl text-white"><?php _e( 'Μάθε Περισσότερα', 'sage'); ?></p>
	  
	  </a>
	  
		  </div>

		  
	     <!-- <?php $count++ ?>  -->
		 <?php endwhile;
        echo '</div>';
		wp_reset_postdata();
	else :
		echo _e( 'Δεν βρέθηκε', 'sage');
	endif;
 
	die();
}





//Ajax Products Filter

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

 
	if( $query->have_posts() ) :

        echo '<div id="product-grid" class="relative">'; ?>


<?php
		while( $query->have_posts() ): $query->the_post(); 

		$featured_img_url = get_the_post_thumbnail_url(get_the_ID(),'product-image'); 

        $product_link = get_permalink();

		?>
		
		<div class="py-10 md:p-16 flex px-12 items-end single-product-grid">
    
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
		echo _e( "Δεν βρέθηκε", "sage");
	endif;
 	
	die();

}

