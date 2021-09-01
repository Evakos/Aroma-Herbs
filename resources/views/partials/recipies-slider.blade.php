<div class="container mx-auto">

    <div class="flex items-center justify-center my-20">

        <img src="@asset('images/home-title-seven.svg')" class="w-[328px] sm:w-[709px]" />

    </div>

</div>

    @php
    $query = new WP_Query([
    'post_type' => 'recipies'
    ]);
    @endphp

    <div class="flex mt-5 justify-center">
          <img src="@asset('images/sec-d.jpg')" class="w-screen object-cover"/>   
        </div>


        <div class="container mx-auto -mt-10 sm:-mt-96">

    <div id="splide-recipie-slider" class="splide">
        <div class="splide__track">

            <ul class="splide__list">
                @posts($query)
                <li class="splide__slide">@includeFirst(['partials.content-' . get_post_type(), 'partials.content'])
                </li>
                @endposts
            </ul>

        </div>

    </div>

</div>
