
<div class="" id="menu-modal">

<div class="items-center h-screen flex sm:w-[1250px]">

<div class="hidden sm:flex px-44 flex-col items-center justify-center">

@php
  $query = new WP_Query([
    'post_type' => 'products',
    'orderby' => 'rand', 
    'showposts' => 1,
  ]);
@endphp

@posts($query)
<div class="flex flex-col justify-center items-center">
<img src="@asset('images/fresh-spices-menu-title.svg')" class="w-[228px]"/>
  <h2 class="font-takhie text-dark-green my-8 text-5xl">@title</h2>
  <div class="bg-modal-product-bg bg-no-repeat bg-cover w-[298px] h-[500px] flex items-center justify-center p-10">
  <img src="@thumbnail('large', false)" class="w-[198px]" alt="Full Image" />
  
</div>
</div>



<a class="btn border-white text-white mt-10" href="@permalink"> ΠΕΡΙΣΣΟΤΕΡΑ </a>

@endposts

</div>

<div class="flex sm:flex-1 w-screen sm:w-auto justify-end sm:justify-start px-10 sm:px-0">
  
  <nav class="nav-primary text-right">
      @if (has_nav_menu('primary_navigation'))
        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav advent-pro-bold sm:text-4xl text-white', 'echo' => false]) !!}
      @endif
    </nav>

</div>

</div>
  
  </div>

  <div id="overlay" class="h-screen fixed bg-black bg-opacity-80 z-40 w-full hidden"></div>


