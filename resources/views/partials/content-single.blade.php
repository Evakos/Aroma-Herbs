<div class="flex max-w-6xl mx-auto">

<div class="flex w-2/3">

<article @php(post_class())>
  <header>
    <h1 class="entry-title text-right mb-10">
      {!! $title !!}
    </h1>

  </header>

  

  <div class="entry-content text-right">


    @php(the_content())

   <div class="mt-10">
    <img src="@thumbnail('full', false)" alt="Full Image" />
</div>


 

  </div>


 

  <footer>
    {!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}
  </footer>


</article>

</div>

<aside class="sidebar flex flex-col self-start w-1/3 bg-light-green ml-12 p-12">

<p class="text-white py-3 font-advent-pro-semi-bold mb-20 border-b-2 border-white">Πρόσφατα</p>
  
  @php(dynamic_sidebar('sidebar-primary'))
  
</aside> 
</div>
