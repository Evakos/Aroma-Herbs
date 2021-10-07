<div class="flex flex-col md:flex-row max-w-6xl mx-auto">

<div class="flex md:w-2/3 px-10 md:px-0 mb-10 md:mb-0">

<article @php(post_class())>
  <header>
    <h1 class="entry-title text-right mb-10">
      {!! $title !!}
    </h1>

  </header>

  

  <div class="entry-content">


    @php(the_content())

   <!-- <div class="mt-10">
    <img src="@thumbnail('full', false)" alt="Full Image" />
</div> -->

  </div>


  <footer>
    {!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}
  </footer>


</article>

</div>

<aside class="sidebar flex flex-col md:self-start md:w-1/3 md:ml-12">

  
  @php(dynamic_sidebar('sidebar-primary'))
  

</div>
