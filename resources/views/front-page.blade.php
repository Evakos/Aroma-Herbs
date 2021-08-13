{{--
  Template Name: Front Page Template
--}}



@include('partials.modal')



  @include('partials.header')



  
  <div class="container mx-auto relative">

  <div class="flex justify-center h-[1000px]">
      <div class="flex flex-1 justify-center relative">
      <img src="@asset('images/home-img-1.jpg')" class="absolute top-64 left-0"/> 
      </div>
      <div class="flex flex-1 justify-center relative">
      <img src="@asset('images/home-img-2.jpg')" class="absolute right-0 bottom-10">
      </div>
    </div>



  <!-- <div class="flex justify-center ">

    
    <div class="flex flex-1 justify-center relative">
  
      <img src="@asset('images/home-img-3.jpg')" class="absolute left-0">


    </div>
    <div class="flex flex-1">
      <img src="@asset('images/home-img-4.jpg')" class=""/>
    </div>
  
  </div> -->

  <div class="flex justify-center h-[1000px]">

    <div class="flex flex-1 justify-center relative w-36">
      <img src="@asset('images/home-img-3.jpg')" class="absolute"/>
    </div>
    
    <div class="flex flex-1">
  
  
    </div>
    
  
  </div>



  <div class="flex justify-center h-[1000px]">

    
    <div class="flex flex-1">
  

    </div>

    <div class="flex flex-1 justify-center relative">

      <img src="@asset('images/home-img-4.jpg')" class="absolute top-0"/>
    </div>
  
    
  
  </div>


  <div class="flex justify-center">
    <div class="flex flex-1">

    <img src="@asset('images/home-img-7.jpg')" class=""/>
    </div>
    <div class="flex flex-1">
    <img src="@asset('images/home-img-8.jpg')" class=""/>
    </div>
  </div>

  <div class="flex justify-center">
    <div class="flex flex-1 justify-center">
    </div>
    <div class="flex flex-1 justify-center">
      <img src="@asset('images/home-img-8.jpg')" class=""/>
    </div>
  </div>




  <img src="@asset('images/vine-whole.svg')" class="absolute mx-auto right-0 left-0 bottom-0 top-0 z-0"/>
  
  </div>

  <div class="flex items-center justify-center">
    
  <img src="@asset('images/home-img-9.jpg')" class="w-[573px]"/>
  
  </div>


  <div class="flex mt-5 justify-center">
          <img src="@asset('images/sec-c.jpg')" class=""/> 
        </div>

        @php
    $query = new WP_Query([
    'post_type' => 'products'
    ]);
    @endphp

    <div class="container bg-auto bg-center bg-no-repeat mx-auto">

    <div class="container mx-auto -mt-96">

<div id="splide-products" class="splide">
    <div class="splide__track">

        <ul class="splide__list">
            @posts($query)
            <li class="splide__slide flex flex-col">@includeFirst(['partials.content-' . get_post_type(), 'partials.content'])
            </li>
            @endposts
        </ul>

    </div>

</div>

</div>

    </div>




    @include('partials.recipies-slider')





 <!-- Blog grid -->

 <div class="container mx-auto">

      <div class="flex items-center justify-center my-20">
    
         
    <img src="@asset('images/home-title-eight.svg')" class="w-[367px]"/> 
      
    
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
        <div class="container relative mx-auto">

        <div class="flex items-center justify-center my-20">
    
        
       <img src="@asset('images/home-title-nine.svg')" class="w-[681px]"/> 
         
         </div>

         </div>

        <div class="flex mt-5 justify-center">
          <img src="@asset('images/sec-f.jpg')" class=""/> 
        </div>

        <div class="container relative mx-auto">
        <div class="flex py-24 px-48">

        <div class="flex flex-1 justify-center">
          <img src="@asset('images/ifs.svg')" class="w-[287px]"/> 
        </div>
  
        <div class="flex flex-1 flex-col items-end text-right">
          <h3 class="mb-10">Μεγαλώνουν στην ύπαιθρο
            κάτω από τον ελληνικό ήλιο</h3>
            <p class="mb-10">Παράγουμε, με παραδοσιακές μεθόδους παραγωγής, 
              αξιοποιώντας τις γηγενείς ποικιλίες της ελληνικής γης.</p>
    
              <button class="btn">
                περισσοτερα
                </button>
          
          </div>  

          </div>
    </div>

    
    


<!-- Find Us -->
        <div class="container relative mx-auto">

        <div class="flex items-center justify-center">
    
        
       <img src="@asset('images/home-title-ten.svg')" class="w-[681px]"/> 
         
         </div>

         </div>

        <div class="flex flex-1 justify-center">
          <img src="@asset('images/sec-g.jpg')" class=""/> 
        </div>
  
        <div class="container relative mx-auto">
        <div class="flex py-24 px-48">

          
    
          <div class="flex flex-1 flex-col items-start">
            <h3 class="mb-10">Διαθέσιμα σε επιλεγμένα supermarket & καταστήματα </h3>
              <p class="mb-10">Παράγουμε, συσκευάζουμε και διανέμουμε στην εγχώρια 
                και σε ξένες αγορές, προϊόντα υψηλής ποιότητας και διατροφής.</p>
      
                <button class="btn">
                  περισσοτερα
                  </button>
            
            </div>  

            <div class="flex flex-1 justify-center">
            
          </div>
  
            </div>
    
      </div>
    
          </div>

          @include('partials.instagram')
  

  @include('partials.footer')