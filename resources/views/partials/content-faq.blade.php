<div class="container mx-auto">

        
        <div class="flex flex-col items-center justify-center sm:pb-20">

        @if( ICL_LANGUAGE_CODE=='el')         
        <img src="@asset('images/faq-gr.svg')" class="w-[310px] md:w-[411px]">
@else
<img src="@asset('images/faq-en.svg')" class="w-[310px] md:w-[411px]">
@endif

        <p class="mt-10">	@php echo _e( 'Λάβετε απαντήσεις στις πιο συχνές ερωτήσεις', 'sage');  @endphp</p>
      
      </div>

<div class="flex flex-col max-w-[1200px] mx-auto">



        <ul class="faq">
  @fields('faq')
    <li>

    <details class="mb-4">
                <summary class="text-dark-green text-3xl sm:text-4xl pt-16 px-4 cursor-pointer" >
                @sub('question') 
                </summary>

                <span class="pl-12 block my-10">
                @sub('answer')
                </span>
              </details>
      

</span>
  
  
  
  </li>
  <hr>
  @endfields
</ul>


        </div>

</div>