@extends('layouts.app')


@include('partials.modal')


  @include('partials.header')


  <div class="container mx-auto">

<div class="flex justify-center">
    <div class="flex flex-1 justify-center">
    <img src="@asset('images/products-img-1.jpg')" class=""/> 
    </div>
    <div class="flex flex-1 justify-center">
    <img src="@asset('images/fresh-spices.svg')" class="">
    </div>
    <div class="flex flex-1 justify-center">
    <img src="@asset('images/home-img-2.jpg')" class="">
    </div>
  </div>
</div>

<div class="container mx-auto py-20">


<!--
<div class=""> 

    <div class=""> 

    <!-- <div class="filter-mob-menu"><span class="mob-filter-text">Filter Stories</span><span id="mobile-filter-button"><i class="fas fa-bars"></i></span></div> -->

	<!-- <?php
		if( $terms = get_terms( array( 'taxonomy' => 'category', 'exclude'=>1, 'orderby' => 'date', 'hide_empty' => false ) ) ) : 
            
?> -->


  <!-- <div class="filter-button-container" id="mobile-filter-menu"><?php
			foreach ( $terms as $term ) :

                 echo '<a class="prod-filter font-takhie text-grey text-center p-10 text-3xl"  product-id="' . $term->term_id . '" href="#">' . $term->name . '</a>';
             
			endforeach;
?>
      
	<?
		endif;
        echo '</div>';
        
 
	?>


  </div>

  </div> -->


  <div class="flex justify-center items-center ">

      <a class="prod-filter font-takhie text-center leading-none text-gray-300 p-10 text-5xl transition duration-500 ease-in-out hover:text-dark-green filter-active"  product-id="3" href="#">ΦΡΕΣΚΑ ΜΥΡΩΔΙΚΑ</a>

<div class="flex"><img src="@asset('images/leaf.svg')" class=""></div>

      <a class="prod-filter font-takhie text-gray-300 text-center leading-none p-10 text-5xl transition duration-500 ease-in-out hover:text-dark-green"  product-id="4" href="#">ΦΡΕΣΚΑ ΛΑΧΑΝΙΚΑ</a>

      <!-- <a class="prod-filter font-takhie text-grey text-center p-10 text-3xl"  product-id="' . $fresh_veg . '" href="#">' . $term->name . '</a>' -->

      </div>


  <div id="products" class=""></div>


<!-- Initial display of products -->
<div id="all-products" class="fade-in">

@section('content')
  <!-- @include('partials.page-header') -->

  @if (!have_posts())
    <x-alert type="warning">
      {!! __('Sorry, no results were found.', 'sage') !!}
    </x-alert>

    {!! get_search_form(false) !!}
  @endif

  <div class="flex">

  @php
$args = array('post_type' => 'products', 'tax_query' => array(
        array(
            'taxonomy' => 'category',
            'field' => 'id',
            'terms' => $term->term_id,
        )
     ));
$loop = new WP_Query($args);
@endphp
  

  @while($loop->have_posts()) @php($loop->the_post())


  <div class="p-16">
    
  <a href="@permalink" class="">


<!-- <div class="bg-light-green p-2 text-white absolute bottom-0 z-50 flex justify-right w-full opacity-80">



</div> -->
<img src="@thumbnail('full', false)" alt="Full Image" />

<p class="font-takhie text-dark-green text-center p-10 text-3xl">
@title
</p>

</a>

    </div>
  @endwhile

 

  </div>

  {!! get_the_posts_navigation() !!}
@endsection

@section('sidebar')
  @include('partials.sidebar')
@endsection