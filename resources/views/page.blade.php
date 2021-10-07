@extends('layouts.app')
@include('partials.modal')

@include('partials.header')

@section('content')
  @while(have_posts()) @php(the_post())
    <!-- @include('partials.page-header') -->
    @includeFirst(['partials.content-page', 'partials.content'])
  @endwhile
@endsection
