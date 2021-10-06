<div class="container mx-auto">

        
        <div class="flex flex-col items-center justify-center sm:py-20">
          
        <img src="@asset('images/faq-title.svg')" class="w-[310px] md:w-[411px]">

        <p class="my-20">Λάβετε απαντήσεις στις πιο συχνές ερωτήσεις</p>
      
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