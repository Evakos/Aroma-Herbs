<div class="container relative mx-auto mb-24 mt-10">

    <div class="flex flex-col items-center justify-center">

        <div class="flex items-center justify-center my-10">

            <img src="@asset('images/fresh-title.svg')" class="w-[208px]" />

        </div>

        <p class="font-takhie text-dark-green tracking-widest text-7xl sm:text-9xl">@title</p>

    </div>

</div>


<div class="flex max-w-7xl mx-auto">

    <article @php(post_class()) style="width:100%">

        <!-- Thumbs Column -->

        <div class="flex flex-col sm:flex-row mb-20">

            <div class="flex justify-center sm:w-4/12">


                @include('partials.product-thumbs-slider')

            </div>

            <!-- Close Thumbs Column -->

            <!-- Main Image Column -->

            <div class="flex justify-center sm:w-4/12">

                @include('partials.product-main-image-slider')

            </div> <!-- Close Main Image Column -->


            <!-- Third Column -->

            <div class="flex flex-col sm:w-4/12">
                <div class="flex flex-row w-full sm:flex-col mt-20 sm:pl-20">
                    <div class="flex flex-col pr-10 items-center sm:items-start">
                        <p class="mb-5 text-sm font-advent-pro-light text-aroma-grey"><?php echo get_field('product_code');?></p>
                        <p class="text-3xl sm:text-5xl mb-5"><?php echo get_field('weight');?></p>
                    </div>
                    <p class="mb-5 font-advent-pro-light text-aroma-grey">
                      
                    <?php echo get_field('short_description');?>
                      
                      </p>

                </div>

                <div class="flex flex-col mt-20 sm:pl-20">

                    <p class="uppercase mb-10">ΔιαθΕσιμο ΣΕ</p>

                    <?php
$packages = get_field('packaging');
if( $packages ): ?>
                    <ul class="flex">
                        <?php foreach( $packages as $package ): ?>
                        <li><span
                                class="text-white py-3 sm:py-4 px-8 sm:px-10 mr-3 sm:mr-6 bg-pink"><?php echo $package['label']; ?></span>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                    <?php endif; ?>



                    <div class="flex flex-col mt-20 bg-light-green sm:p-10">

<p class="uppercase mb-10 font-advent-pro-semi-bold text-white">ΑΓΟΡΑ ONLINE</p>

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

    <div class="flex flex-col sm:flex-row mt-20">


        <div class="flex flex-col sm:w-4/6 sm:pr-10 sm:pl-80 sm:border-r sm:border-gray-300">

            <p class="uppercase font-advent-pro-semi-bold flex sm:self-center mb-10 sm:mb-20">περιγραφη</p>

            <p>          <?php echo get_field('long_description');?></p>

            <div class="">

            </div>
        </div>


        <div class="flex flex-col mt-10 sm:mt-0 sm:w-2/6 sm:pl-10">

            <p class="uppercase flex font-advent-pro-semi-bold mb-10 sm:mb-20">Περισσοτερες ΠΛΗΡΟΦΟΡΙΕΣ</p>

            <p class="flex font-advent-pro-bold uppercase mb-10 text-aroma-grey">ΟδηγΙες ΣυντΗρησης</p>


            <?php echo get_field('extra_info');?>
            

        </div>

    </div>


</div>

</div>
</div>



</div>

<footer>
    {!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav">
        <p>' . __('Pages:', 'sage'), 'after' => '</p>
    </nav>']) !!}
</footer>




</div>



@include('partials.recipies-slider')