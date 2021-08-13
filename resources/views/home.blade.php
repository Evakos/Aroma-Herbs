@extends('layouts.app')

@include('partials.modal')



<header class="mx-auto bg-blog-hero bg-auto bg-center bg-no-repeat h-[900px] bg-white mt-24 md:mt-18">

@include('partials.header')

</header>

<div class="container relative mx-auto mb-24">

        <div class="flex items-center justify-center">
    
        
       <img src="@asset('images/fresh-news.svg')" class="w-[382px]"/> 
         
         </div>

         </div>


@section('content')


  @if (! have_posts())
    <x-alert type="warning">
      {!! __('Sorry, no results were found.', 'sage') !!}
    </x-alert>

    {!! get_search_form(false) !!}
  @endif

  <div class="grid grid-cols-2 gap-4">

  @while(have_posts()) @php(the_post())

   <div class="relative"> @includeFirst(['partials.content-' . get_post_type(), 'partials.content'])</div>

  @endwhile
  </div>

  {!! get_the_posts_navigation() !!}
@endsection


