{{--
  Template Name: Front Page Template
--}}

@include('partials.modal')

  @include('partials.header')


  <div class="container mx-auto relative hidden sm:block">

  <div class="flex justify-center h-[800px] 2xl:h-[1000px]">
      <div class="flex flex-1 relative">
      <img src="@asset('images/home-img-1.jpg')" class="absolute top-64 left-0" data-aos="move-right"/> 
      </div>
      <div class="flex flex-1 relative">
      <img src="@asset('images/home-img-2.jpg')" class="absolute right-0 bottom-auto top-56 2xl:top-96" data-aos="move-left"/>
      </div>
    </div>

  <div class="flex justify-center h-[800px]">

    <div class="flex flex-1 relative w-36">
      <img src="@asset('images/home-img-3.jpg')" class="absolute" data-aos="rotate-right"/>
    </div>
    
    <div class="flex flex-1">
  
  
    </div>
    
  
  </div>



  <div class="flex justify-center h-[1000px]">

    <div class="flex flex-1">
  
    </div>

    <div class="flex flex-1 justify-center relative">

      <img src="@asset('images/spring-onion-slices.png')" class="absolute h-[147px] left-0 top-1/4" data-aos=""/>
      <img src="@asset('images/radish.png')" class="absolute h-[673px] right-0 top-0"  data-aos="move-left-straight"/>
      <img src="@asset('images/spring-onion.png')" class="absolute h-[687px] left-20 top-0" data-aos-offset="200" data-aos-delay="350"  data-aos="rotate-right-5"/>
      <img src="@asset('images/chilli-pepper-slices.png')" class="absolute w-[244px] bottom-0 right-0" data-aos-delay="650" data-aos="rotate-left"/>
    </div>
  
    
  </div>


  <div class="flex justify-center h-[1200px]">
    <div class="flex flex-1 justify-center relative">

    <img src="@asset('images/leek.png')" class="absolute h-[720px] right-0 top-0" data-aos="rotate-right"/>
    <img src="@asset('images/leaves.png')" class="absolute w-[192px] left-1/3 bottom-1/3" data-aos="shake"/>
    </div>
    <div class="flex flex-1 justify-center relative">
    <img src="@asset('images/croutons.png')" class="absolute bottom-5 right-0"/>
    <img src="@asset('images/parsley-partial.png')" class="w-[268px] absolute bottom-0 left-36" data-aos="rotate-left"/>
    </div>
  </div>

  <div class="flex justify-center h-[800px]">
    <div class="flex justify-center relative">
    </div>
    <div class="flex flex-1 justify-center relative">
      <img src="@asset('images/basil-angle.png')" class="w-[500px] absolute right-96 top-0" data-aos-delay="350" data-aos-offset="200" data-aos="rotate-left"/>
      <img src="@asset('images/quark-with-herbs.png')" class="w-[244px] absolute bottom-40 right-64" data-aos-offset="300" data-aos="rotate-right"/>


      
    </div>
  </div>

  <div class="flex justify-center h-[450px]">
    <div class="flex flex-1 justify-center relative">
    <img src="@asset('images/home-img-9.jpg')" class="absolute right-20 -top-1/4"/>
    </div>
    <div class="flex flex-1 justify-center relative">
      <img src="@asset('images/home-img-12.png')" class="absolute right-20 top-0"/>
    </div>
  </div>

  <div class="absolute mx-auto right-0 left-0 bottom-0 top-0 z-0"/>

  @include('partials.vine')

</div>
  
  </div> 


  <!-- Mobile Tree -->
  <div class="container mx-auto relative sm:hidden">
  <div class="flex justify-center">
      <div class="flex flex-1 justify-center items-center">
      <img src="@asset('images/home-img-1.jpg')" class="w-[145px]"> 
      </div>
      <div class="flex flex-1 justify-center items-center">
      <img src="@asset('images/home-img-2.jpg')" class="w-[145px]">
      </div>
    </div>

    <div class="flex items-center justify-center my-20">
    
         
    <img src="@asset('images/fresh-spices.svg')" class="w-[300px]"/> 
      
    
      </div>



  <div class="flex justify-center">

    <div class="flex flex-1 justify-center relative w-[404px]">
      <img src="@asset('images/home-img-3.jpg')" class=""/>
    </div>
      
  </div>


  <div class="flex items-center justify-center my-20">
    
         
    <img src="@asset('images/grown-countryside-title.svg')" class="w-[272px]"/> 

      </div>



      <div class="flex justify-center">

<div class="flex flex-1 justify-center relative w-[404px]">
  <img src="@asset('images/home-img-4.jpg')" class=""/>
</div>
  
</div>

<div class="flex items-center justify-center my-20">
    
         
    <img src="@asset('images/full-aroma-title.svg')" class="w-[226px]"/> 
      
    
      </div>

      <div class="flex justify-center">

<div class="flex flex-1 justify-center relative w-[404px]">
  <img src="@asset('images/home-img-5.jpg')" class=""/>
</div>
  
</div>

<div class="flex items-center justify-center my-20">
    
         
    <img src="@asset('images/quality-guarantee-title.svg')" class="w-[300px]"/> 
      
    
      </div>

      <div class="flex justify-center">

<div class="flex flex-1 justify-center relative w-[404px]">
  <img src="@asset('images/home-img-6.jpg')" class=""/>
</div>
  
</div>

<div class="flex items-center justify-center my-20">
    
         
    <img src="@asset('images/fresh-listing-title.svg')" class="w-[300px]"/> 
      
    
      </div>

      <div class="flex justify-center">

<div class="flex flex-1 justify-center relative w-[404px]">
  <img src="@asset('images/home-img-7.jpg')" class=""/>
</div>
  
</div>

  </div>


  <div class="flex items-center justify-center my-20">
       
    <img src="@asset('images/home-title-six.svg')" class="w-[573px] z-50"/> 
      
</div>



  <div class="flex mt-5 justify-center">
          <img src="@asset('images/sec-c.jpg')" class="w-screen object-cover"/>  
        </div>

        @php
    $query = new WP_Query([
    'post_type' => 'products',
    'posts_per_page' => -1,
    'orderby' => 'menu_order',
    'order' => 'ASC',

    ]);
    @endphp

    <div class="container bg-auto bg-center bg-no-repeat mx-auto">

    <div class="container mx-auto -mt-44 sm:-mt-96">

<div id="splide-products" class="splide">
    <div class="splide__track">

        <ul class="splide__list">
            @posts($query)
            <li class="splide__slide flex justify-end flex-col single-product">@includeFirst(['partials.content-' . get_post_type(), 'partials.content'])
            </li>
            @endposts
        </ul>


    </div>


   

</div>
<div class="flex justify-center mt-10 sm:mt-0">

<a href="/products/" class="btn">
                περισσοτερα     
  </a>
  </div>
</div>

    </div>

    @include('partials.recipies-slider')


 <!-- Blog Grid Fresh News -->

 <div class="container mx-auto mt-10 sm:mt-0">

      <div class="flex items-center justify-center my-20">
    
    <img src="@asset('images/home-title-eight.svg')" class="w-[158px] sm:w-[367px]"/> 
      
      </div>
      @php
  $query = new WP_Query([
    'post_type' => 'post'
  ]);
@endphp

<div class="grid grid-cols-2 gap-4">
@posts($query)


<div class="relative"> @includeFirst(['partials.content-' . get_post_type(), 'partials.content'])</div>

  
@endposts

</div>

</div>

<!-- Our Harvest -->
        <div class="container relative mx-auto mb-10 sm:mb:0">

        <div class="flex items-center justify-center my-20">
    
        
       <img src="@asset('images/home-title-nine.svg')" class="w-[300px] sm:w-[681px]"/> 
         
         </div>

         </div>

</div>
        <div class="flex mt-5 justify-center">
          <img src="@field('harvest_image')" class="w-screen object-cover"/> 
        </div>

        <div class="container relative mx-auto mt-10 mb-10 sm:mb-0 sm:mt-10">
        <div class="flex sm:py-24 sm:px-48">

        <div class="hidden sm:flex flex-1 justify-center">
          <img src="@asset('images/ifs.svg')" class="w-[287px]"/> 
        </div>
  
        <div class="flex flex-1 flex-col sm:items-end sm:text-right">
          <h3 class="mb-10 text-center sm:text-right"> @field('harvest_title')</h3>
            <p class="mb-10">@field('harvest_text')</p>
    
              

              <a href="@field('harvest_button')" class="btn cursor-pointer">
                περισσοτερα
</a>
          
          </div>  

          </div>
    </div>

    
    


<!-- Find Us -->
        <div class="container relative mx-auto">

        <div class="flex items-center justify-center">
    
        
       <img src="@asset('images/home-title-ten.svg')" class="w-[276px] sm:w-[681px]"/> 
         
         </div>

         </div>

</div>

        <div class="flex flex-1 justify-center">
          <img src="@field('locator_image')" class="w-screen object-cover"/> 
        </div>
  
        <div class="container relative mx-auto">
        <div class="flex flex-col sm:flex-row sm:py-24 sm:px-48">
          <div class="flex flex-1 flex-col sm:items-start">
            <h3 class="mb-10 mt-10 sm:mt-0 text-center sm:text-left">@field('locator_title')</h3>
              <p class="mb-10">@field('locator_text')</p>
      
              <a href="@field('locator_button')" class="btn cursor-pointer">
                περισσοτερα
</a>
            
            </div>  

            <div class="flex flex-1 justify-center">
            
          </div>
  
            </div>
    
      </div>
    
          </div>

          @include('partials.instagram')
  

  @include('partials.footer')