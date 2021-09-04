<div class="container mx-auto">

        
        <div class="flex flex-col items-center justify-center sm:py-20">
          
        <img src="@asset('images/faq-title.svg')" class="w-[310px] md:w-[411px]">

        <p class="my-20">Λάβετε απαντήσεις στις πιο συχνές ερωτήσεις</p>
      
      </div>

<div class="flex flex-col">



        <ul class="faq">
  @fields('faq')
    <li>

    <details class="mb-4">
                <summary class="text-dark-green text-3xl sm:text-6xl py-2 px-4 cursor-pointer">
                @sub('question') 
                </summary>

                <span class="pl-10">
                @sub('answer')
                </span>
              </details>
      

</span>
  
  
  
  </li>
  @endfields
</ul>
        </div>

</div>