<div class="container mx-auto">

        <div class="flex flex-col items-center justify-center md:py-20">

        @if( ICL_LANGUAGE_CODE=='el')         
        <img src="@asset('images/contact-gr.svg')" class="w-[229px] lg:w-[411px]">
@else
<img src="@asset('images/contact-en.svg')" class="w-[229px] lg:w-[411px]">
@endif


          
      
      </div>

<div class="flex flex-col sm:flex-row mt-10 sm:mt-auto flex-wrap-reverse">

<div class="flex flex-1 flex-col sm:pr-44">

<h3 class="text-3xl mb-10"> <?php _e( 'Επικοινωνήστε μαζί μας', 'sage'); ?></h3>

<p class="mb-10 text-aroma-grey"><?php _e( 'Για οποιαδήποτε πληροφορία που μπορεί να χρειαστείτε, είμαστε στη διάθεση σας.', 'sage'); ?></p>

<p class="flex items-center text-aroma-grey mb-10"><img src="@asset('images/map-marker.svg')" class="pr-10"> 




  <?php if ( ICL_LANGUAGE_CODE=='el' ) : ?>
 
                      <?php echo esc_html(get_theme_mod( 'head_office_address')); ?>
  
 <?php else: ?>

                    
           <?php echo esc_html(get_theme_mod( 'head_office_address_en')); ?>

                    <?php endif; ?>









</p>

<p class="flex items-center text-aroma-grey mb-10"><img src="@asset('images/mobile.svg')" class="pr-10"><?php echo get_theme_mod( 'phone_number') ?></p>

<p class="flex items-center text-dark-green mb-10"><img src="@asset('images/envelope.svg')" class="pr-10"><a href="mailto:<?php echo get_theme_mod( 'email_address') ?>" class=''><?php echo get_theme_mod( 'email_address') ?></a></p>

</div>


<div class="flex flex-1 flex-col relative">

<h3 class="text-3xl uppercase mb-10"><?php _e( 'Αποστολη μηνυματος', 'sage'); ?></h3>


@field('contact_form')


        </div>

</div>