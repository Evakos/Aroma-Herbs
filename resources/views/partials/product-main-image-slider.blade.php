<?php 
$images = get_field('gallery');
if( $images ): ?>
   <div id="splide-product-main" class="splide">
        <div class="splide__track">
            <ul class="splide__list">
        <?php foreach( $images as $image ): ?>
          <li class="splide__slide">
                <a href="<?php echo esc_url($image['url']); ?>" class="product-image">
                     <img src="<?php echo esc_url($image['sizes']['large']); ?>" class="mx-auto w-[229px] sm:w-[340px] pt-44" alt="<?php echo esc_attr($image['alt']); ?>" />
                </a>
                <p><?php echo esc_html($image['caption']); ?></p>
            </li>
        <?php endforeach; ?>
        </ul><?php else: echo 'No Main Image - Add Image';
endif; ?>
        </div>

        </div>

    
        
