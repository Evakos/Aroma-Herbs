@extends('layouts.app')

@include('partials.modal')



<header class="mx-auto bg-recipies-hero bg-auto bg-center bg-no-repeat h-[900px] bg-white mt-24 md:mt-18">

@include('partials.header')

</header>

<div class="container relative mx-auto mb-24">

        <div class="flex items-center justify-center">
    
        
       <img src="@asset('images/from-kitchen.svg')" class="w-[382px]"/> 
         
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


