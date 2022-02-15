{{--
  Template Name: Front Page Template
--}}



@include('partials.header')


<!-- Animation Mark Up Desktop -->
<div class="container mx-auto relative h-[4600px] 2xl:h-[5200px] hidden xl:flex">

    <!-- First Image Row -->
    <img src="@asset('images/home-img-1.jpg')" class="absolute top-64 left-0" data-aos="move-right" />
    <img src="@asset('images/home-img-2.jpg')" class="absolute right-0 bottom-auto top-56 2xl:top-96"
        data-aos="move-left" />

    <!-- Second Image Row -->
    <img src="@asset('images/home-img-3.jpg')" class="max-w-full absolute top-[800px] 2xl:top-[1000px]"
        data-aos="rotate-right" />

    <!-- Third Image Row -->
    <img src="@asset('images/spring-onion-slices.png')" class="absolute right-[600px] top-[1800px] 2xl:top-[2000px]"
        data-aos="" />
    <img src="@asset('images/radish.png')" class="absolute right-0 w-[208px] 2xl:w-auto top-[1400px] 2xl:top-[1600px]"
        data-aos="move-left-straight" />
    <img src="@asset('images/spring-onion.png')"
        class="absolute w-[310px] 2xl:w-auto right-[300px] top-[1600px] 2xl:top-[1800px]" data-aos="rotate-right-5" />
    <img src="@asset('images/chilli-pepper-slices.png')"
        class="absolute w-[234px] right-0 top-[2000px] 2xl:top-[2400px]" data-aos="rotate-left" />

    <!-- Forth Image Row -->
    <img src="@asset('images/leek.png')"
        class="absolute h-[520px] 2xl:h-[720px] left-[300px] 2xl-[400px] top-[2400px] 2xl:top-[2800px]"
        data-aos="rotate-right" />
    <img src="@asset('images/leaves.png')" class="absolute left-[300px] 2xl:left-[350px] top-[2800px] 2xl:top-[3300px]"/>

    <!-- Fifth Image Row -->
    <img src="@asset('images/croutons.png')" class="absolute right-0 top-[2900px] 2xl:top-[3300px]" />
    <img src="@asset('images/parsley-partial.png')" class="absolute right-[300px] top-[3200px] 2xl:top-[3600px]"
        data-aos="rotate-left" />

    <!-- Sixth Image Row -->
    <img src="@asset('images/basil-angle.png')"
        class="absolute max-w-[420px] left-[600px] top-[3500px] 2xl:top-[4000px]" data-aos-delay="350"
        data-aos-offset="200" data-aos="rotate-left" />
    <img src="@asset('images/quark-with-herbs.png')"
        class="max-w-[244px] absolute right-[180px] 2xl:right-[320px] top-[3800px] 2xl:top-[4300px]"
        data-aos-offset="300" data-aos="rotate-right" />

    <!-- Last Image Row -->
    <img src="@asset('images/aroma_peppers_habanero_pack-front.png')"
        class="absolute max-w-[500px] left-0 bottom-0 " />
    <img src="@asset('images/home-img-12.png')" class="absolute right-[100px] bottom-0" />


    <div class="absolute mx-auto right-0 left-0 bottom-0 top-0 z-0" />

    @if( ICL_LANGUAGE_CODE=='el')         
    @include('partials.vine')
@else
@include('partials.vine-en')
@endif

 

</div>

</div>

<!-- Animation Mark Up Mobile -->

<div class="container mx-auto relative xl:hidden">
    <div class="flex justify-center">
        <div class="flex flex-1 justify-center items-center">
            <img src="@asset('images/home-img-1.jpg')" class="w-[145px]" />


        </div>
        <div class="flex flex-1 justify-center items-center">
            <img src="@asset('images/home-img-2.jpg')" class="w-[145px]" />
        </div>
    </div>

    <div class="flex items-center justify-center my-20">

       @if( ICL_LANGUAGE_CODE=='el')         
    <img src="@asset('images/fresh-herbs-veg-gr.svg')" class="w-[300px]" />
@else
<img src="@asset('images/fresh-herbs-veg-en.svg')" class="w-[300px]" />
@endif

</div>


    <div class="flex justify-center">

        <div class="flex flex-1 justify-center relative w-[404px]">
            <img src="@asset('images/home-img-3.jpg')" class="" />
        </div>

    </div>


    <div class="flex items-center justify-center my-20">

           @if( ICL_LANGUAGE_CODE=='el')         
    <img src="@asset('images/grown-countryside-gr.svg')" class="w-[272px]" />
@else
<img src="@asset('images/grown-countryside-en.svg')" class="w-[200px]" />
@endif

    </div>



    <div class="flex justify-center">

        <div class="flex flex-1 justify-center relative w-[404px]">
            <img src="@asset('images/home-img-4.jpg')" class="" />
        </div>

    </div>

    <div class="flex items-center justify-center my-20">


           @if( ICL_LANGUAGE_CODE=='el')         
    <img src="@asset('images/full-aroma-gr.svg')" class="w-[226px]" />
@else
<img src="@asset('images/full-aroma-en.svg')" class="w-[226px]" />
@endif

    </div>

    <div class="flex justify-center">

        <div class="flex flex-1 justify-center relative w-[404px]">
            <img src="@asset('images/home-img-5.jpg')" class="" />
        </div>

    </div>

    <div class="flex items-center justify-center my-20">

              @if( ICL_LANGUAGE_CODE=='el')         
       <img src="@asset('images/quality-guarantee-gr.svg')" class="w-[300px]" />
@else
    <img src="@asset('images/quality-guarantee-en.svg')" class="w-[300px]" />
@endif

    </div>

    <div class="flex justify-center">

        <div class="flex flex-1 justify-center relative w-[404px]">
            <img src="@asset('images/home-img-6.jpg')" class="" />
        </div>

    </div>

    <div class="flex items-center justify-center my-20">

                  @if( ICL_LANGUAGE_CODE=='el')         
       <img src="@asset('images/fresh-lasting-gr.svg')" class="w-[300px]" />
@else
    <img src="@asset('images/fresh-lasting-en.svg')" class="w-[300px]" />
@endif


    </div>

    <div class="flex justify-center">

        <div class="flex flex-1 justify-center relative w-[404px]">
            <img src="@asset('images/home-img-7.jpg')" class="" />
        </div>

    </div>

</div>


<div class="flex items-center justify-center my-20">

@if( ICL_LANGUAGE_CODE=='el')         
    <img src="@asset('images/aroma-taste-gr.svg')" class="w-[158px] lg:w-[573px]" />
@else
<img src="@asset('images/aroma-taste-en.svg')" class="w-[298px] lg:w-[828px]" />
@endif

</div>


<div class="flex mt-5 justify-center">
<img data-src="@field('product_background_image')" class="lozad object-cover w-screen min-h-[300px] md:min-h-[600px]" />
</div>

@php
$query = new WP_Query([
'post_type' => 'products',
'posts_per_page' => -1,
'orderby' => 'menu_order',
'order' => 'ASC',

]);
@endphp

<div class="container bg-auto bg-center bg-no-repeat mx-auto">

    <div class="container mx-auto -mt-52 sm:-mt-96">

        <div id="splide-products" class="splide">

            <div class="splide__track">

                <ul class="splide__list">
                    @posts($query)
                    <li class="splide__slide flex justify-end flex-col single-product">
                        @includeFirst(['partials.content-' . get_post_type(), 'partials.content'])
                    </li>
                    @endposts
                </ul>

            </div>

        </div>

        <div class="flex justify-center mt-10">

            <a href="<?php echo get_permalink(icl_object_id(34,'page',false));?>" class="btn">
            <?php _e( 'Περισσοτερα', 'sage'); ?>
            </a>

        </div>

    </div>

</div>

<!-- Recipes Slider -->

@include('partials.recipes-slider')

<!-- Blog Grid Fresh News -->

<div class="container mx-auto mt-10 sm:mt-0">

    <div class="flex items-center justify-center my-20">


    @if( ICL_LANGUAGE_CODE=='el')         
    <img src="@asset('images/fresh-news-gr.svg')" class="w-[158px] lg:w-[367px]" />
@else
<img src="@asset('images/fresh-news-en.svg')" class="w-[158px] lg:w-[367px]" />
@endif

    </div>

    @php
    $query = new WP_Query([
    'post_type' => 'post',
    'posts_per_page' => 4,
    'tax_query' => array(
            array(
                'taxonomy' => 'category',
                'field' => 'id',
                'terms' => 32
            ),
    ),
    ]);
    @endphp

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" id="ajax-posts">
        @posts($query)


        <div class="relative overflow-hidden block max-h-[300px]" id="blog-card"> @includeFirst(['partials.content-' . get_post_type(),
            'partials.content'])

        </div>

        @endposts

    </div>

    <div id="more-posts" class="btn mx-auto max-w-max mt-10 flex self-center justify-center md:self-end cursor-pointer">

    <span id="loader" class="hidden mr-2">@fas('circle-notch', 'fa-spin')</span>

   <?php _e( 'Περισσοτερα', 'sage'); ?>

</div>


</div>

<!-- Our Farm Section -->

<div class="container relative mx-auto mb-10 sm:mb:0">

    <div class="flex items-center justify-center my-20">


    @if( ICL_LANGUAGE_CODE=='el')         
    <img src="@asset('images/our-farm-gr.svg')" class="w-[300px] lg:w-[711px]" />
@else
<img src="@asset('images/our-farm-en.svg')" class="w-[300px] lg:w-[440px]" />
@endif

    </div>

</div>

</div>
<div class="flex mt-5 justify-center">
<img data-src="@field('harvest_image')" class="lozad h-[288px] sm:h-auto w-screen object-cover" />
</div>

<div class="container relative mx-auto mt-10 mb-10 md:mb-0 md:mt-10">
    <div class="flex md:py-24 md:px-24 lg:px-48">

        <div class="hidden md:flex flex-1 justify-center">
            <img src="@asset('images/IFS.svg')" class="max-w-[287px] w-full" />
        </div>

        <div class="flex flex-1 flex-col md:items-end md:text-right">
            <h3 class="mb-10 text-center md:text-right"> @field('harvest_title')</h3>
            <p class="mb-10">@field('harvest_text')</p>

            <a href="@field('harvest_button')" class="btn md:self-end cursor-pointer">
            <?php _e( 'Περισσοτερα', 'sage'); ?>
            </a>

        </div>
        
    </div>
</div>


<!-- Find Us -->
<div class="container relative mx-auto">

    <div class="flex items-center justify-center my-20"">

    @if( ICL_LANGUAGE_CODE=='el')         
    <img src="@asset('images/find-us-gr.svg')" class="w-[300px] lg:w-[590px]" />
@else
<img src="@asset('images/find-us-en.svg')" class="w-[300px] lg:w-[495px]" />
@endif

    </div>

</div>

</div>

<div class="flex flex-1 justify-center">
<img data-src="@field('locator_image')" class="lozad h-[288px] sm:h-auto w-screen object-cover" />
</div>

<div class="container relative mx-auto">
    <div class="flex flex-col md:flex-row py-24 md:px-24">
        <div class="flex flex-1 flex-col md:items-start">
            <h3 class="mb-10 mt-10 sm:mt-0 text-center sm:text-left">@field('locator_title')</h3>
            <p class="mb-10">@field('locator_text')</p>

            <a href="@field('locator_button')" class="btn md:self-start cursor-pointer">
            <?php _e( 'Περισσοτερα', 'sage'); ?>
            </a>

        </div>

        <div class="flex flex-1 justify-center">

        </div>

    </div>

</div>

</div>

@include('partials.instagram')


@include('partials.footer')