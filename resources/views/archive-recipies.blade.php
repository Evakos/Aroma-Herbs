@extends('layouts.app')


@include('partials.modal')

    @include('partials.header')



@section('content')



@include('partials.recipies-slider')




<div class="flex items-center justify-center my-20">


    <img src="@asset('images/recipies-recipies-title.svg')" class="w-[448px]" />

</div>



@php
$query = new WP_Query([
'post_type' => 'recipies'
]);
@endphp


<div class="">

    <div class="grid grid-cols-4">
        @posts($query)
      
<div class="flex relative" id="recipies-thumbs">
  
<img src="@thumbnail('full', false)" alt="Full Image" />


<a href="@permalink" class="absolute flex w-full h-full justify-center items-center bg-light-green" id="recipies-title"><p class="text-white">@title</p></a>

</div>

        @endposts
    </div>

</div>