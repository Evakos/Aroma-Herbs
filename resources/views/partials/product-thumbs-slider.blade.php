
<?php 
$images = get_field('gallery');
if( $images ): ?>
   <div id="splide-product-thumbs" class="splide">
        <div class="splide__track">

            <ul class="splide__list">

            <?php 
            $count = 1; 
        foreach( $images as $image ): ?>
        
          <li class="splide__slide" data-weight="<?php echo $count++ ?>" >
          
                     <img src="<?php echo esc_url($image['sizes']['large']); ?>" class="w-[140px]" alt="<?php echo esc_attr($image['alt']); ?>"/>

                     
              
                <p><?php echo esc_html($image['caption']); ?></p>
            </li>
        <?php endforeach; ?>
    </ul><?
else: echo 'No Thumb Images - Add Image';
?>

<?php endif; ?>

</div>

</div>
