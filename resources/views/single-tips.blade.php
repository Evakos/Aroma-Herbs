@extends('layouts.app')

@include('partials.modal')


@include('partials.header')


<div class="container relative mx-auto mb-24">

        <div class="flex items-center justify-center">
    
        
       <img src="@asset('images/tips-twists.svg')" class="w-[700px]"/> 
         
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


