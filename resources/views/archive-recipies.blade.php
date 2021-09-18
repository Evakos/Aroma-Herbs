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
Φιλτρα συνταγών
</p>





<!-- Start Filter by Category and Tasks Here: -->

<div class="flex flex-wrap mb-10">

<form action="<?php echo site_url() ?>/wp-admin/admin-ajax.php" method="POST" id="recipiefilter">

<?php

$product = get_terms( array(
	'taxonomy' => 'product',
	'hide_empty' => false,
	'orderby'       => 'id',
	'order'         => 'ASC',
) );

if ( !empty($product) ) :
    echo '<select name="productrecipiefilter" class="bg-light-green text-white p-5 mr-4 rounded-full mb-5 w-full md:w-[250px]">';
    echo '<option value="select" name="select">Product</option>';
    foreach( $product as $term ) {

		echo '<option value="' . esc_attr( $term->term_id )  . '">' . esc_html( $term->name ) . '</option>';
     
    }
    echo '</select>';
   
endif;


$restrictions = get_terms( array(
	'taxonomy' => 'dietary_restrictions',
	'hide_empty' => false,
	'orderby'       => 'id',
	'order'         => 'ASC',
) );

if ( !empty($restrictions) ) :
    echo '<select name="dietrecipiefilter" class="bg-light-green text-white p-5 mr-4 rounded-full mb-5 w-full md:w-[250px]">';
    echo '<option value="select" name="select">Diet Requirements</option>';
    foreach( $restrictions as $term ) {

		echo '<option value="' . esc_attr( $term->term_id )  . '">' . esc_html( $term->name ) . '</option>';
     
    }
    echo '</select>';
   
endif;



$courses = get_terms( array(
    'taxonomy' => 'courses',
    'hide_empty' => false
) );
 
if ( !empty($courses) ) :
    echo '<select name="coursesrecipiefilter" class="bg-light-green text-white p-5 mr-4 rounded-full mb-5 w-full md:w-[250px]">';
    echo '<option value="select" name="select">Courses</option>';
    
    foreach( $courses as $term ) {
     
                echo '<option value="'. esc_attr( $term->term_id ) .'">
                    '. esc_html( $term->name ) .'</option>';
                }
    
    
    echo '</select>';

endif;

?> 

<?php echo "<input type='checkbox' name='viewall' checked> View All";?>

	<!-- <button>View All</button> -->
	<input type="hidden" name="action" value="recipiefilter">
</form>

    </div>



<div id="recipie-response" class="container"></div>




<!-- 

@php
$query = new WP_Query([
'post_type' => 'recipies'
]);
@endphp

    <div class="grid md:grid-cols-4">
        @posts($query)
      
<div class="flex relative mb-10 sm:m-0" id="recipies-thumbs">
  
<img src="@thumbnail('full', false)" alt="Full Image" />


<a href="@permalink" class="absolute flex flex-col w-full bottom-0 xl:bottom-auto p-3 xl:p-0 xl:h-full justify-center items-center bg-light-green" id="recipies-title">

<p class="text-white text-2xl mb-2 xl:mb-10">@title</p>

<p class="font-takhie text-xl text-white">Μάθε Περισσότερα</p>

</a>

</div>

        @endposts
    </div> -->


	<div class="flex items-center justify-center my-20">


<img src="@asset('images/tips-twists.svg')" class="w-[300px] lg:w-[448px]" />

</div>

<?php
    $args = array(
        'post_type' => 'post',
        'order' => 'ASC',
        'orderby' => 'ID',
        'tax_query' => array(
            array(
                'taxonomy' => 'category',
                'field' => 'id',
                'terms' => 5
            ),
    ));
    ?>

    <?php $count = 1 ?>
    <?php $loop = new WP_Query( $args ); ?>
    <div class="grid md:grid-cols-4 md:grid-rows-2 mb-0 sm:mb-20">
        <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
        <div class="grid relative mb-10 sm:m-0
        
        <?php if ($count % 4 == 1)
        {echo 'row-span-2';}
        else if ($count % 4 == 4)
        {echo 'row-span-1';}
        
else {echo 'row-span-1';}
        ?>
        ">
        <img src="@thumbnail('full', false)" alt="Full Image" class="object-cover h-full" />


<a href="@permalink" class="absolute flex flex-col w-full bottom-0 xl:bottom-auto p-3 xl:p-0 xl:h-full justify-center items-center bg-light-green" id="twists-title">

<p class="text-white text-2xl mb-2 xl:mb-10">@title</p>


<p class="font-takhie text-xl text-white">Μάθε Περισσότερα</p>

</a>
        </div>
    <?php $count++ ; 
    endwhile ?>




<!-- 

@php
  $query = new WP_Query([
    'post_type' => 'post',
	'tax_query' => array(
        array(
            'taxonomy' => 'category',
            'field' => 'id',
            'terms' => 5
        ),
    ),
  ]);
@endphp

    <div class="grid md:grid-cols-4">
        @posts($query)

<div class="grid relative mb-10 sm:m-0 grid-rows-2" id="recipies-thumbs">
  
<img src="@thumbnail('full', false)" alt="Full Image" />


<a href="@permalink" class="absolute flex flex-col w-full h-full justify-center items-center bg-light-green" id="recipies-title">

<p class="text-white text-2xl mb-10">@title</p>

<p class="font-takhie text-xl text-white">Μάθε Περισσότερα</p>

</a>

</div>

        @endposts
    </div> -->






</div>
</div>