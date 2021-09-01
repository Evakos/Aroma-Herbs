<header class="mx-auto bg-auto bg-center bg-no-repeat bg-white mb-20">
  
<nav class="container absolute mx-auto right-0 left-0 top-0 flex items-center justify-between flex-wrap pt-12 sm:px-16 scroll">
    <div class="flex items-center flex-shrink-0 text-white mr-6 z-10">
      <a class="text-white no-underline hover:text-white hover:no-underline" href="@permalink(11)" id="site-logo">
        <span class="flex w-[63px] sm:w-[171px]"><img src="@asset('images/logo.svg')"/></span>  
      </a>
    </div>
      <button class="hamburger hamburger--collapse self-end z-50" onclick="showDialog()" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
        </button>
  </nav>

  @hasfield('hero_image')
<div class="flex justify-center mx-auto pt-24 animate__animated animate__fadeIn animate__slow">
  <!-- <div class="overlay-top"></div>
  <div class="overlay-bot"></div> -->

<img src="@field('hero_image')" alt="Hero Image" class="object-cover w-screen min-h-[300px]"/> 
@endfield
</div>

<div class="hidden sm:flex justify-center mt-20">

<a class="text-white no-underline hover:text-white hover:no-underline animate-bounce" href="#scroll-link" id="scroll-link">
<img src="@asset('images/scroll.svg')" alt="Scroll Link" class="w-[102px]"/> 
      </a>



</div>



</header>