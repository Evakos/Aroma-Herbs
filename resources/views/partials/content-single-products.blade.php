<div class="container relative mx-auto md:mb-24 mt-10">

    <div class="flex flex-col items-center justify-center">

        <div class="flex flex-col items-center justify-center my-10" id="product-title">

        <p class="text-dark-green font-advent-pro-semi-bold uppercase tracking-widest md:text-5xl"> @field('fresh_title')</p>
        
        <div class="relative flex">
        <img src="@asset('images/whisker-left.svg')" class="absolute w-5 sm:w-10 -left-10 sm:-left-20"/> 

        
        <h2 class="font-takhie text-center text-dark-green tracking-widest text-7xl md:text-9xl">
        
        @title
        
        
</h2>

<img src="@asset('images/whisker-right.svg')" class="absolute w-5 sm:w-10 -right-10 sm:-right-20 "/> 

</div>

        </div>

    </div>

</div>


<div class="flex max-w-7xl mx-auto">

    <article @php(post_class()) style="width:100%">

        <!-- Thumbs Column -->

        <div class="flex flex-col md:flex-row mb-20">

            <div class="hidden md:flex justify-center md:w-3/12">


                @include('partials.product-thumbs-slider')

            </div>

            

            <!-- Close Thumbs Column -->

            <!-- Main Image Column -->

            <div class="flex relative mb-10 sm:mb-0 min-h-[550px] justify-center md:w-4/12">

            <img src="@asset('images/product-bg.jpg')" alt="" class="absolute object-cover w-screen p-10 sm:p-0 sm:w-auto"/> 

                @include('partials.product-main-image-slider')

            </div> <!-- Close Main Image Column -->


            <div class="sm:hidden flex justify-center sm:w-4/12">


@include('partials.product-thumbs-slider-mobile')

</div>


            <!-- Third Column -->

            <div class="flex flex-col px-10 md:w-5/12">
                <div class="flex flex-row w-full md:flex-col mt-20 md:mt-0 md:pl-20">
                    <div class="flex flex-col pr-10 items-center md:items-start">
                        <p class="mb-5 text-md font-advent-pro-light text-aroma-grey"><?php echo get_field('product_code');?></p>


                        <p class="text-3xl md:text-5xl mb-5">
                            

                        <span id="weight-1" class=""> <?php echo get_field('weight');?> </span>

                        <span id="weight-2" class="hidden"> <?php echo get_field('weight_2');?> </span>
                        
                       
                    </p>
                    
                    
                    
                    </div>
                    <p class="mb-5 font-advent-pro-light text-aroma-grey">
                      
                    <?php echo get_field('short_description');?>
                      
                      </p>

                </div>

                <div class="flex flex-col mt-20 md:pl-20">

                    <p class="uppercase mb-10">Διαθεσιμο ΣΕ</p>

                    
                    @hasfields('packaging')
                    <ul class="flex">
                    @fields('packaging')


                        <li>
                        <a href="@sub('packaging_link')" class="flex">
                            
                        
                        <span
                                class="text-white py-3 md:py-4 px-8 md:px-10 mr-3 md:mr-6 bg-pink">
                                @sub('packaging')</span>

                        </a>
                        </li>
                        @endfields                    </ul>
                        @endhasfields



                    <div class="flex flex-col mt-20 bg-light-green p-10">

<p class="uppercase mb-10 font-advent-pro-semi-bold text-white">Αγορα ONLINE</p>

@hasfields('supermarkets')
                    <ul class="">
                    @fields('supermarkets')
                            <li class="flex mb-5">
                            <a href="@sub('link')" class="flex">
                            <img src="@sub('icon')" class="mr-3" />
                            <span class="text-white">@sub('name')</span>
                            </a>
                        </li>
                
                @endfields
    </ul>
@endhasfields



</div>



                </div>

          

            </div>

        </div>

    </article>

</div>








<hr>


<div class="container relative mx-auto mb-44">

    <div class="flex flex-col md:flex-row mt-20">


        <div class="flex flex-col md:w-4/6 md:pr-10 md:pl-80 md:border-r md:border-gray-300">

            <p class="uppercase font-advent-pro-semi-bold flex md:self-center mb-10 md:mb-20">Περιγραφή</p>

            <p>          <?php echo get_field('long_description');?></p>

            <div class="">

            </div>
        </div>


        <div class="flex flex-col mt-10 md:mt-0 md:w-2/6 md:pl-10">

            <p class="uppercase flex font-advent-pro-semi-bold mb-10 md:mb-20">
Περισσότερες πληροφορίες</p>

            <p class="flex font-advent-pro-bold uppercase mb-10 text-aroma-grey">Οδηγίες Συντήρησης</p>


            <?php echo get_field('extra_info');?>
            

        </div>

    </div>


</div>

</div>
</div>



</div>

<!-- <footer>
    {!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav">
        <p>' . __('Pages:', 'sage'), 'after' => '</p>
    </nav>']) !!}
</footer> -->




</div>



<?php $recipes = get_field('recipes');?>

<!-- <?php var_dump($recipes)?> -->

<div class="flex mt-5 justify-center">
          <img src="<?php the_field('recipe_background_image', 11); ?>" class="w-screen object-cover"/>   
        </div>


        <div class="container mx-auto -mt-10 md:-mt-48 lg:-mt-96">

    <div id="splide-recipe-slider" class="splide">
        <div class="splide__track">
        <?php if( $recipes ): ?>
            <ul class="splide__list">
            <?php foreach( $recipes as $recipe ):

       
$slider_image_inset = get_field( 'slider_image_inset', $recipe->ID );
$intro_text = get_field( 'intro_text', $recipe->ID );
$featured_img_url = get_the_post_thumbnail_url($recipe->ID, 'full'); 


?>


                <li class="splide__slide">


                <div class="flex flex-col lg:py-24 lg:px-48">

<div class="flex relative justify-center">


<!-- <img data-src="@thumbnail('full', false)" class="lozad md:h-[364px] lg:h-[464px]" alt="Full Image" /> -->

<img data-src="<?php echo $featured_img_url ?>" class="lozad md:h-[364px] lg:h-[464px]" alt="Full Image" />

<img data-src="<?php echo esc_html( $slider_image_inset ); ?>" class="lozad w-[100px] sm:w-[180px] lg:w-[220px] absolute left-0 -bottom-10 sm:left-28 sm:-bottom-14"/> 


  
</div>

<div class="flex flex-1 flex-col mx-auto max-w-[36rem] md:items-end md:text-right mt-20">
  <h3 class="mb-10 text-center sm:text-right">
  <?php echo esc_html( $recipe->post_title ); ?></h3>
    <p class="mb-10 px-10 sm:px-0"><?php echo esc_html( $intro_text ); ?></p>




<a href="<?php echo get_permalink( $recipe->ID ); ?>" class="btn md:self-end mb-10 sm:mb-0">ΔΕΙΤΕ ΤΗ ΣΥΝΤΑΓΗ</a>



  
  </div>  

  </div>






                </li>
                <?php endforeach; ?>
            </ul>
            </ul>
            <?php endif; ?>

        </div>

    </div>

</div>



