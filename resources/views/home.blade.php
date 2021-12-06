{{--
  Template Name: Blog Archive Template
--}}



@extends('layouts.app')

@include('partials.modal')

@include('partials.header')


<div class="container relative mx-auto mb-24">

        <div class="flex items-center justify-center">
    
        
       @if( ICL_LANGUAGE_CODE=='el')         
    <img src="@asset('images/fresh-news-gr.svg')" class="w-[158px] lg:w-[367px]" />
@else
<img src="@asset('images/fresh-news-en.svg')" class="w-[158px] lg:w-[367px]" />
@endif
         
         </div>

         </div>


@section('content')


  @if (! have_posts())
    <x-alert type="warning">
      {!! __('Sorry, no results were found.', 'sage') !!}
    </x-alert>

    {!! get_search_form(false) !!}
  @endif


<div class="container relative mx-auto mb-24">



@php
    $query = new WP_Query([
    'post_type' => 'post',
    'posts_per_page' => 4,
    'tax_query' => array(
            array(
                'taxonomy' => 'category',
                'field' => 'id',
                'terms' => 32
            ),
    ),
    ]);
    @endphp

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" id="ajax-posts">
        @posts($query)


        <div class="relative overflow-hidden block max-h-[300px]" id="blog-card"> @includeFirst(['partials.content-' . get_post_type(),
            'partials.content'])

        </div>

        @endposts

    </div>

    <div id="more-posts" class="btn mx-auto max-w-max mt-10 flex self-center justify-center md:self-end cursor-pointer">

<span id="loader" class="hidden mr-2">@fas('circle-notch', 'fa-spin')</span>

<?php _e( 'Περισσοτερα', 'sage'); ?>

</div>


</div>

  <!-- {!! get_the_posts_navigation() !!} -->
@endsection


