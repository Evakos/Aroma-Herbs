{{--
  Template Name: Contact Template
--}}




@extends('layouts.app')

@include('partials.modal')


  @include('partials.header')



@section('content')
  @while(have_posts()) @php(the_post())
  
    @includeFirst(['partials.content-contact', 'partials.content'])
  @endwhile
@endsection
