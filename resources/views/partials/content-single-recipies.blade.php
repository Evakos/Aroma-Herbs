<div class="flex max-w-6xl mx-auto">

<div class="flex w-2/3">

<article @php(post_class())>
  <header>
    <h1 class="entry-title text-right mb-10">
      {!! $title !!}
    </h1>

    <!-- @include('partials/entry-meta') -->
  </header>

  

  <div class="entry-content text-right">


    @php(the_content())

  <div class="flex">

@hasfield('ingredients')
<div class="flex text-left flex-1 flex-col bg-light-green rounded-lg mr-10 sm:p-10">
<p class="uppercase text-white font-advent-pro-semi-bold mb-10">Υλικα</p>
<ul>
  @fields('ingredients')
  <li class="text-white">@sub('amount') @sub('details')</li>
  @endfields
</ul>
</div>
@endfield


@hasfield('directions')
<div class="flex flex-1 text-left flex-col bg-light-green rounded-lg sm:p-10">
<p class="uppercase text-white font-advent-pro-semi-bold mb-10">ΕκτΕλεση</p>
<ul>
  @fields('directions')
    <li class="text-white">@sub('details')</li>
  @endfields
</ul>
</div>
@endfield


  </div>

  <div class="flex py-20">

  <?php echo get_the_tag_list( sprintf( '<p class="font-advent-pro-light text-left"><span class="uppercase font-advent-pro-semi-bold">%s:&nbsp; &nbsp;</p> ', __( 'Tags', 'sage' ) ), ', ', '</p>' );?>

</div>
@hasfield('chef_name')
  <div class="flex flex-1 text-left flex-col bg-light-green rounded-lg sm:p-10">

<div class="flex">
<div class="flex items-center mr-10">
<img src="@field('chef_image')" alt="Chef Image" class="rounded-full" width="100" height="100"> 
</div>
<div class="flex flex-col">
<p class="font-advent-pro-semi-bold text-white mb-10">@field('chef_name')</p>
<p class="">@field('chef_text')</p>
</div>
</div>
</div>
@endfield



</div>
 

  <footer>
    {!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}
  </footer>

  <!-- @php(comments_template()) -->
</article>

</div>

<aside class="sidebar w-1/3">

<div class="flex flex-col ml-20 mt-20 bg-light-green sm:p-10">

@hasfield('sidebar')
<div class="flex flex-1 text-left flex-col bg-light-green rounded-lg sm:p-10">
<p class="uppercase text-white font-advent-pro-semi-bold mb-10">ΕΥΚΟΛΗ</p>
<ul>
  @fields('sidebar')
    <li class="text-white">@sub('title') <br> @sub('details')</li>
  @endfields
</ul>
</div>
@endfield

</div>
  
</aside> 
</div>
