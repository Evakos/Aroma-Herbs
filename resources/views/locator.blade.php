{{--
  Template Name: Store Locator Template
--}}




@extends('layouts.app')




  @include('partials.header')



@section('content')
  @while(have_posts()) @php(the_post())
  
    @includeFirst(['partials.content-locator', 'partials.content'])
  @endwhile
@endsection
