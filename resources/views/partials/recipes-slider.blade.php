<div class="container mx-auto">

    <div class="flex items-center justify-center my-20">

        <img src="@asset('images/from-kitchen.svg')" class="w-[328px] lg:w-[709px]" />

    </div>

</div>

<?php 
$terms = get_terms(array(
    'taxonomy' => 'product',
    'hide_empty' => false,
));
// $slugs = wp_list_pluck( $terms, 'slug' ); 
$names = wp_list_pluck( $terms, 'slug' );

//var_dump($names);



foreach ( $names as $term ) {

    $items[] = $term;
}

?>




<!-- Need to get id of recipies -->


    @php


    $args = array(
        'post_type' => 'recipes',
		'tax_query' => array(
            array(
                'taxonomy' => 'product',
                'field' => 'slug',
                'terms' => $items,
            ),
    ),

  


    );




    $query = new WP_Query($args);


    

    @endphp


  









    <div class="flex mt-5 justify-center">
          <img src="<?php the_field('recipe_background_image', 11); ?>" class="w-screen object-cover"/>   
        </div>


        <div class="container mx-auto -mt-10 md:-mt-48 lg:-mt-96">

    <div id="splide-recipe-slider" class="splide">
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
