@extends('layouts.app')




@include('partials.header')


<div class="container relative mx-auto mb-24">

        <div class="flex items-center justify-center">

          @if( ICL_LANGUAGE_CODE=='el')         
    <img src="@asset('images/from-our-kitchen-gr.svg')" class="w-[700px]">
@else
<img src="@asset('images/from-our-kitchen-en.svg')" class="w-[700px]">
@endif
    
        
    
         
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


