{{--
  Template Name: Products Archive Template
  Template Post Type: post, page, products
--}}


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

<div class="container relative mx-auto -mt-24 sm:-mt-96 min-h-[600px]">

<span id="loader-product" class="text-dark-green absolute"><i class="fas fa-circle-notch fa-7x fa-spin"></i></span>


  <div id="products" class="hidden">

</div>

</div>
