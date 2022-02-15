@extends('layouts.app')


@include('partials.header')



<div class="container relative mx-auto mb-24">

        <div class="flex items-center justify-center">
    
        
       <img src="@asset('images/fresh-news.svg')" class="w-[158px] md:w-[382px]"/> 
         
         </div>

         </div>

@section('content')
  @while(have_posts()) @php(the_post())
    @includeFirst(['partials.content-single-' . get_post_type(), 'partials.content-single'])
  @endwhile
@endsection

@section('sidebar')
  @include('partials.sidebar')
@endsection


