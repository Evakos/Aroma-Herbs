<div class="flex flex-col md:flex-row max-w-6xl mx-auto relative">

<div class="flex md:w-2/3 px-10 md:px-0 mb-10 md:mb-0">

<article @php(post_class())>
  <header>
    <h1 class="entry-title text-right mb-10">
      {!! $title !!}
    </h1>

    <!-- @include('partials/entry-meta') -->
  </header>


  <div class="entry-content">

    @php(the_content())

  <div class="flex flex-col md:flex-row">


  <div class="flex sm:hidden flex-col mb-10 md:mb-0 md:ml-20 bg-light-green p-10">

@hasfield('sidebar')
<div class="flex flex-1 text-left flex-col bg-light-green rounded-lg sm:p-10">
<p class="uppercase text-white font-advent-pro-semi-bold mb-10">  <?php _e( 'Εύκολη', 'sage'); ?></p>
<ul>
  @fields('sidebar')
    <li class="text-white">@sub('title') <br> @sub('details')</li>
  @endfields
</ul>
</div>
@endfield

</div>

@hasfield('ingredients')
<div class="flex text-left flex-1 flex-col mb-10 bg-light-green rounded-lg md:mr-10 p-10">
<p class="uppercase text-white font-advent-pro-semi-bold mb-10"><?php _e( 'Υλικα ', 'sage'); ?></p>
<ul>
  @fields('ingredients')
  <li class="text-white mb-3">@sub('amount') @sub('details')</li>
  @endfields
</ul>
</div>
@endfield


@hasfield('directions')
<div class="flex flex-1 text-left flex-col mb-10 bg-light-green rounded-lg p-10">
<p class="uppercase text-white font-advent-pro-semi-bold mb-10"> <?php _e( 'Εκτέλεση ', 'sage'); ?></p>
<ul>
  @fields('directions')
    <li class="text-white mb-3">@sub('details')</li>
  @endfields
</ul>
</div>
@endfield


  </div>

  <!-- <div class="flex mb-10 md:my-20">

  <?php echo get_the_tag_list( sprintf( '<p class="font-advent-pro-light text-left"><span class="uppercase font-advent-pro-semi-bold">%s:&nbsp; &nbsp;</p> ', __( 'Tags', 'sage' ) ), ', ', '</p>' );?>

</div> -->


@hasfield('chef_name')
  <div class="flex flex-1 text-left flex-col bg-light-green rounded-lg p-10">

<div class="flex flex-col sm:flex-row">

<div class="flex items-center mr-10">
<img src="@field('chef_image')" alt="Chef Image" class="rounded-full" width="100" height="100"> 
</div>
<div class="flex flex-col">
<p class="font-advent-pro-semi-bold text-white mt-10 md:mt-0 mb-10">@field('chef_name')</p>
<p class="">@field('chef_text')</p>
</div>
</div>
</div>
@endfield



</div>
 

  <footer>
    {!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}
  </footer>



</article>

</div>

<aside class="sidebar hidden md:flex flex-col md:self-start md:w-1/3 md:ml-12 sticky top-[150px]">

<div class="flex flex-col ml-20 bg-light-green">

@hasfield('sidebar')
<div class="flex flex-1 text-left flex-col bg-light-green rounded-lg sm:p-10">
<p class="uppercase text-white font-advent-pro-semi-bold mb-5">@field('difficulty_level') </p>
<ul>
  @fields('sidebar')
    <li class="text-white mb-5">@sub('title') <br> <span class="font-advent-pro-semi-bold">@sub('details')</span></li>
  @endfields
</ul>
</div>
@endfield

</div>
  
</aside> 
</div>
