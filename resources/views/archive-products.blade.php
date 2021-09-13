@extends('layouts.app')


@include('partials.modal')


  @include('partials.header')


  <div class="container mx-auto mb-30">

<div class="flex justify-center">
    <div class="hidden sm:flex flex-1 justify-center">
    <img src="@asset('images/products-img-1.jpg')" class=""/> 
    </div>
    <div class="flex flex-1 justify-center">
    <img src="@asset('images/fresh-spices.svg')" class="">
    </div>
    <div class="hidden sm:flex flex-1 justify-center">
    <img src="@asset('images/home-img-2.jpg')" class="">
    </div>
  </div>
</div>

<div class="flex justify-center py-10">
  
    <img src="@asset('images/discover.svg')" class="w-[254px]">

  </div>


<div class="container mx-auto py-10 md:py-20">

  <div class="flex justify-center items-center ">

      <a class="prod-filter font-takhie text-center leading-none text-gray-300 p-10 text-2xl sm:text-5xl transition duration-500 ease-in-out hover:text-dark-green filter-active"  product-id="3" href="#">ΦΡΕΣΚΑ ΜΥΡΩΔΙΚΑ</a>

<div id="leaf-element"><img src="@asset('images/leaf.svg')" class="flex -mt-5 w-[40px]"></div>

      <a class="prod-filter font-takhie text-gray-300 text-center leading-none p-10 text-2xl sm:text-5xl transition duration-500 ease-in-out hover:text-dark-green"  product-id="4" href="#">ΦΡΕΣΚΑ ΛΑΧΑΝΙΚΑ</a>

      </div>

</div>

<div class="flex mt-5 justify-center">
    <img src="<?php the_field( "product_background_image", 11 ); ?>" class="object-cover w-screen min-h-[300px] md:min-h-[600px]" />
</div>

<div class="container mx-auto">

  <div id="products" class="min-h-screen"></div>

<!-- Initial display of products -->
<div id="all-products" class="min-h-screen">

@section('content')

  @if (!have_posts())
    <x-alert type="warning">
      {!! __('Sorry, no results were found.', 'sage') !!}
    </x-alert>

    {!! get_search_form(false) !!}
  @endif

  <div class="grid md:grid-cols-4 md:gap-4 -mt-28 md:-mt-64">

  @php
$args = array('post_type' => 'products', 'posts_per_page' => -1, 'tax_query' => array(
        array(
            'taxonomy' => 'category',
            'field' => 'id',
            'terms' => 'fresh-spices',
        )
     ));
$loop = new WP_Query($args);
@endphp
  

  @while($loop->have_posts()) @php($loop->the_post())

  <div class="py-10 px-20 md:p-16 flex items-end single-product">
    
  <a href="@permalink" class="cursor-pointer">

<img src="@thumbnail('full', false)" alt="Full Image" />

<p class="font-takhie text-dark-green text-center py-10 text-3xl">
@title
</p>

</a>

    </div>
  @endwhile

  </div>

    </div>

    </div>

  {!! get_the_posts_navigation() !!}
  
@endsection

<!-- @section('sidebar')
  @include('partials.sidebar')
@endsection -->