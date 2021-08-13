<div class="container mx-auto">

        
        <div class="flex flex-col items-center justify-center py-20">
          
        <img src="@asset('images/faq-title.svg')" class="w-[411px]">

        <p class="mt-20">Λάβετε απαντήσεις στις πιο συχνές ερωτήσεις</p>
      
      </div>

<div class="flex flex-col">



        <ul class="faq">
  @fields('faq')
    <li>

    <details class="mb-4">
                <summary class="text-dark-green text-6xl py-2 px-4">
                @sub('question') 
                </summary>

                <span>
                @sub('answer')
                </span>
              </details>
      

</span>
  
  
  
  </li>
  @endfields
</ul>
        </div>

</div>