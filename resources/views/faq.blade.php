{{--
  Template Name: FAQ Template
--}}




@extends('layouts.app')




  @include('partials.header')



@section('content')
  @while(have_posts()) @php(the_post())
  
    @includeFirst(['partials.content-faq', 'partials.content'])
  @endwhile
@endsection
