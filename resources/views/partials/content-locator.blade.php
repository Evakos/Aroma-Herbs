<div class="container mx-auto">

        
        <div class="flex flex-col items-center justify-center md:py-20">



    @if( ICL_LANGUAGE_CODE=='el')         
    <img src="@asset('images/store-locator-title-gr.svg')" class="w-[247px] md:w-[588px]">
@else
<img src="@asset('images/store-locator-title-en.svg')" class="w-[247px] md:w-[588px]">
@endif
          
     

      
      </div>

      </div>

<div class="flex flex-col">

<!-- @field('store_locator') -->

@php echo do_shortcode('[wpgmza id="1"]') @endphp

        </div>


        <div class="container relative mx-auto">
        <div class="flex flex-col mt-10 md:m-0 md:flex-row md:py-24 md:px-48">
          <div class="flex flex-1 flex-col sm:items-start">
            <h3 class="mb-10 mt-10 sm:mt-0 text-center sm:text-left">
            
            <?php _e( 'Διαθέσιμα σε επιλεγμένα supermarket & καταστήματα', 'sage'); ?>
            
             </h3>
              <p class="mb-10">
                   <?php _e( 'Παράγουμε, συσκευάζουμε και διανέμουμε στην εγχώρια 
                και σε ξένες αγορές, προϊόντα υψηλής ποιότητας και διατροφής.', 'sage'); ?>
              
              </p>
            
            </div>  

            <div class="hidden md:flex flex-1 justify-center">
            
          </div>
  
            </div>
    
      </div>

