
<div class="z-40" id="menu-modal">

<div class="items-center h-screen flex sm:w-[1250px]">

<div class="hidden sm:flex sm:invisible 2xl:visible md:px-12 2xl:px-28 flex-col items-center justify-center modal-product">

@php
  $query = new WP_Query([
    'post_type' => 'products',
    'orderby' => 'rand', 
    'showposts' => 1,
  ]);
@endphp

@posts($query)
<div class="flex flex-col justify-center items-center">
<img src="@asset('images/fresh-spices-menu-title.svg')" class="sm:w-[190px]"/>
  <h2 class="font-takhie text-dark-green my-6 text-5xl">@title</h2>
  <div class="bg-modal-product-bg bg-no-repeat bg-cover sm:w-[238px] sm:h-[400px] flex items-center justify-center p-10">
  <img src="@thumbnail('large', false)" class="w-[198px]" alt="Full Image" />
  
</div>
</div>



<a class="btn border-white text-white mt-10 hover:bg-dark-green hover:border-transparent" href="@permalink"> ΠΕΡΙΣΣΟΤΕΡΑ </a>

@endposts

</div>

<div class="flex sm:flex-1 w-screen md:w-auto justify-end md:justify-start px-12 md:px-0">
  
  <nav class="nav-primary text-right w-screen sm:w-auto">
      @if (has_nav_menu('primary_navigation'))
        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav advent-pro-semi-bold text-xl sm:text-2xl md:text-3xl 3xl:text-4xl text-white', 'echo' => false]) !!}
      @endif
    </nav>

</div>

</div>
  
  </div>

  <div id="overlay" class="h-screen fixed bg-black bg-opacity-80 z-30 w-full hidden"></div>


