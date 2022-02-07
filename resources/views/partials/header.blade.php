<div class="z-40" id="menu-modal">

    <div id="language-switcher" class="absolute top-20 left-10 z-50 sm:hidden"><?php do_action('wpml_add_language_selector');?></div>

<div class="items-center h-screen flex">

<div class="hidden sm:flex sm:w-[10rem] xl:w-auto sm:invisible 2xl:visible md:px-12 2xl:px-28 2xl:w-[500px] flex-col items-center justify-center modal-product">

@php
  $query = new WP_Query([
    'post_type' => 'products',
  'posts_per_page' => 1,
    'showposts' => 1,
    'category' => 'featured'
  ]);
@endphp

@posts($query)
<div class="flex flex-col justify-center items-center">

@if( ICL_LANGUAGE_CODE=='el')         
<img src="@asset('images/fresh-herbs-menu-gr.svg')" class="sm:w-[190px]"/>

@else
<img src="@asset('images/fresh-herbs-menu-en.svg')" class="sm:w-[298px]"/>
@endif



  <h2 class="font-takhie text-dark-green my-6 text-5xl">@title</h2>
  <div class="bg-modal-product-bg bg-no-repeat bg-cover sm:w-[238px] sm:h-[400px] flex items-center justify-center p-10">
  <img src="@thumbnail('large', false)" class="w-[198px]" alt="Full Image" />
  
</div>
</div>



<a class="btn border-white text-white mt-10 hover:bg-dark-green hover:border-transparent" href="@permalink"><?php _e( 'Περισσότερα', 'sage'); ?>  </a>
@endposts

</div>

<div class="flex flex-col w-screen h-screen relative items-center md:w-auto justify-center mt-28  md:px-0">


<button class="hamburger hamburger--collapse @field('class') is-active absolute top-5 right-[8%] 2xl:right-[15%]" type="button" id="hamburger-open">
        <span class="hamburger-box ">
          <span class="hamburger-inner"></span>
        </span>
        </button>
  
  <nav class="nav-primary text-right w-screen sm:w-auto">
      @if (has_nav_menu('primary_navigation'))
        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav advent-pro-semi-bold text-2xl md:text-3xl 3xl:text-4xl text-white mx-10 2xl:mx-28', 'echo' => false]) !!}
      @endif
    </nav>

</div>

</div>
  
  </div>

  <div id="overlay" class="h-screen fixed bg-black bg-opacity-80 z-30 w-full top-0 hidden"></div>


<header class="mx-auto bg-auto bg-center bg-no-repeat bg-white mb-20" id="header">

<div class="" id="sticky-nav">

<nav class="flex container justify-between py-10 relative" id="sticky-nav-inner">

    <div class="flex items-center flex-shrink-0 text-white mr-6 z-10">
      <a class="text-white no-underline hover:text-white hover:no-underline" href="@permalink(11)">

@if( ICL_LANGUAGE_CODE=='el')         

        <span class="flex w-[63px] md:w-[171px]" id="site-logo"><img src="<?php echo get_theme_mod( 'custom_logo') ?> "/></span>  

@else

        <span class="flex w-[63px] md:w-[171px]" id="site-logo"><img src="<?php echo get_theme_mod( 'custom_logo_eng') ?> "/></span>  
@endif

      </a>
    </div>


<button class="hamburger hamburger--collapse @field('class') absolute right-5" type="button" id="hamburger">
        <span class="hamburger-box ">
          <span class="hamburger-inner"></span>
        </span>
        </button>

        <div id="language-switcher-screen" class="hidden sm:block absolute right-0"><?php do_action('wpml_add_language_selector');?></div>







 
  </nav>



</div>

@hasfield('hero_image')
<div class="flex justify-center mx-auto animate__animated animate__fadeIn animate__slow ">

<img src="@field('hero_image')" alt="Hero Image" class="text-white object-cover w-screen min-h-[300px] md:min-h-[600px] -mt-16 md:-mt-32"/> 
@endfield
</div>

<div class="hidden sm:flex justify-center mt-20">

<a class="text-white no-underline hover:text-white hover:no-underline animate-bounce" href="#scroll-link" id="scroll-link">
<img src="@asset('images/scroll.svg')" alt="Scroll Link" class="w-[102px]"/> 
      </a>



</div>



</header>