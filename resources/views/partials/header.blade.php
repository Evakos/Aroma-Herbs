<button class="hamburger hamburger--collapse fixed right-[10%] top-[10%] z-50" onclick="showDialog()" type="button" id="hamburger">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
        </button>

<header class="mx-auto bg-auto bg-center bg-no-repeat bg-white mb-20" id="header">

<div class="" id="sticky-nav">

<nav class="flex container justify-between py-10" id="sticky-nav-inner">
    <div class="flex items-center flex-shrink-0 text-white mr-6 z-10">
      <a class="text-white no-underline hover:text-white hover:no-underline" href="@permalink(11)">
        <span class="flex w-[63px] md:w-[171px]" id="site-logo"><img src="<?php echo get_theme_mod( 'custom_logo') ?> "/></span>  
      </a>
    </div>
     
  </nav>

</div>

<!-- <?php 
if ( is_home())  {
?>
<img src="<?php the_field( "hero_image", 14);?>" alt="Hero Image" class="object-cover w-screen min-h-[300px] md:min-h-[600px] -mt-16 md:-mt-44"/>'
<?php
}
?> -->


@hasfield('hero_image')
<div class="flex justify-center mx-auto animate__animated animate__fadeIn animate__slow ">

<img src="@field('hero_image')" alt="Hero Image" class="object-cover w-screen min-h-[300px] md:min-h-[600px] -mt-16 md:-mt-44"/> 
@endfield
</div>

<div class="hidden sm:flex justify-center mt-20">

<a class="text-white no-underline hover:text-white hover:no-underline animate-bounce" href="#scroll-link" id="scroll-link">
<img src="@asset('images/scroll.svg')" alt="Scroll Link" class="w-[102px]"/> 
      </a>



</div>



</header>