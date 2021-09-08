@extends('layouts.app')


@include('partials.modal')

    @include('partials.header')



@section('content')



@include('partials.recipies-slider')




<div class="flex items-center justify-center my-20">


    <img src="@asset('images/recipies-recipies-title.svg')" class="w-[300px] lg:w-[448px]" />

</div>


<div class="container">

<p class="text-light-green uppercase border-b-2 border-aroma-grey-light py-10 mb-10">
ΦΙλτρα συνταγών
</p>

<div class="flex flex-wrap mb-10">

<form action="<?php echo site_url() ?>/wp-admin/admin-ajax.php" method="POST" id="filter">

 <?php
// The Query
$the_query = new WP_Query( ['post_type' => 'products' ]);
  
// The Loop
if ( $the_query->have_posts() ) {
    echo '<select name="categoryfilter" class="bg-light-green text-white p-5 rounded-full">';
    while ( $the_query->have_posts() ) {
        $the_query->the_post();
        echo '<option value="' . get_the_id() . '">' . get_the_title() . '</option>';
    }
    echo '</select>';
} else {
    // no posts found
}
/* Restore original Post Data */
wp_reset_postdata();


		// if( $terms = get_terms( array( 'taxonomy' => 'post_tag', 'orderby' => 'name' ) ) ) : 
	
		// 	echo '<select name="categoryfilter">';
		// 	foreach ( $terms as $term ) :
		// 		echo '<option value="' . $term->term_id . '">' . $term->name . '</option>'; // ID of the category as the value of an option
		// 	endforeach;
		// 	echo '</select>';
		// endif;



        // if( $terms = get_terms( array( 'taxonomy' => 'post_tag', 'orderby' => 'name' ) ) ) : 
	
		// 	echo '<select name="categoryfilter"><option value="">Select category...</option>';
		// 	foreach ( $terms as $term ) :
		// 		echo '<option value="' . $term->term_id . '">' . $term->name . '</option>'; // ID of the category as the value of an option
		// 	endforeach;
		// 	echo '</select>';
		// endif;






	?>







	<!-- <input type="text" name="price_min" placeholder="Min price" />
	<input type="text" name="price_max" placeholder="Max price" />
	<label>
		<input type="radio" name="date" value="ASC" /> Date: Ascending
	</label>
	<label>
		<input type="radio" name="date" value="DESC" selected="selected" /> Date: Descending
	</label>
	<label>
		<input type="checkbox" name="featured_image" /> Only posts with featured images
	</label> -->
	<!-- <button>Apply filter</button>
	<input type="hidden" name="action" value="myfilter"> -->
</form>

    </div>
<div id="response"></div>


@php
$query = new WP_Query([
'post_type' => 'recipies'
]);
@endphp




    <div class="grid md:grid-cols-4">
        @posts($query)
      
<div class="flex relative mb-10 sm:m-0" id="recipies-thumbs">
  
<img src="@thumbnail('full', false)" alt="Full Image" />


<a href="@permalink" class="absolute flex flex-col w-full h-full justify-center items-center bg-light-green" id="recipies-title">

<p class="text-white text-2xl mb-10">@title</p>

<p class="font-takhie text-xl text-white">Μάθε Περισσότερα</p>

</a>

</div>

        @endposts
    </div>

</div>