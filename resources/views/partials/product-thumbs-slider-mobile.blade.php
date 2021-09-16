<?php $images = get_field('gallery');
if( $images ): ?>
   <div id="splide-product-thumbs-mobile" class="splide">
        <div class="splide__track">

            <ul class="splide__list">
        <?php foreach( $images as $image ): ?>
          <li class="splide__slide">
          
                     <img src="<?php echo esc_url($image['sizes']['large']); ?>" class="" alt="<?php echo esc_attr($image['alt']); ?>" />
              
                <p><?php echo esc_html($image['caption']); ?></p>
            </li>
        <?php endforeach; ?>
    </ul><?php else: echo 'No Thumb Images - Add Image';


endif; 

?>

</div>

</div>
