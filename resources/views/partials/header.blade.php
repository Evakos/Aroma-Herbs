<header class="mx-auto bg-auto bg-center bg-no-repeat bg-white mb-20">
  
<nav class="container absolute mx-auto right-0 left-0 top-0 flex items-center justify-between flex-wrap pt-16 sm:px-16 scroll">
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

<div class="flex justify-center mx-auto sm:h-[900px] animate__animated animate__fadeIn ">
@hasfield('hero_image')
<img src="@field('hero_image')" alt="Hero Image" class="pt-24 max-w-3xl sm:max-w-full"/> 
@endfield
</div>

<div class="hidden sm:flex justify-center mt-20">

<a class="text-white no-underline hover:text-white hover:no-underline animate-bounce" href="#scroll-link" id="scroll-link">
<img src="@asset('images/scroll.svg')" alt="Scroll Link" class="w-[102px]"/> 
      </a>



</div>



</header>