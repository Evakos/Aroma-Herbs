<footer class="bg-aroma-x-light-grey relative">

    <div class="container mx-auto pt-20 md:pt-52">

        <div class="flex flex-col lg:flex-row justify-center">
            <div class="flex flex-col flex-1 justify-center mb-10 md:mb-0 lg:pr-32">
                <img src="@asset('images/logo-footer.svg')" class="w-[93px] mb-5" />
            

                    <p><?php echo get_theme_mod( 'subscribe_text') ?></p>

                    <!-- Begin MailChimp Signup Form -->
 <div class="flex justify-between w-[260px] mt-10 md:mt-10 bg-light-green py-5 px-8 text-white rounded-full" id="mail-chimp">

    <form action="https://aroma-herbs.us5.list-manage.com/subscribe/post-json?u=e7af80d0d124ef0d1d2408f01&amp;id=fc0a9c6e19&c=?" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate flex">
                <input type="email" value="" name="EMAIL" class="email bg-transparent w-[170px] placeholder-current" id="mce-EMAIL" placeholder="Email" required>
                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                    <input type="text" name="b_e44c1f194bec93e238615469e_f6f826e769" tabindex="-1" value="">
                </div>


                <input type="image" value="" name="subscribe" id="mc-embedded-subscribe" src="@asset('images/envelope-white.svg')" border="0" alt="Submit" class="w-[22px] fill-current text-white">              
               
            </form>     
</div>

<div id="subscribe-result">
                </div>

            </div>

            <div class="flex flex-col flex-1 mb-10">
             <nav class="">
      @if (has_nav_menu('secondary_navigation'))
        {!! wp_nav_menu(['theme_location' => 'secondary_navigation', 'menu_class' => 'nav text-dark-green']) !!}
      @endif
    </nav>
            </div>

            <address class="flex flex-col flex-1 not-italic">
                <h4 class="text-dark-green mb-5">Επικοινωνία</h4>
                <ul>
                    <li> <?php _e( 'Διεύθυνση:', 'sage'); ?> <?php echo esc_html(get_theme_mod( 'head_office_address')); ?></li>
                    <li><?php _e( 'Τηλέφωνο: ', 'sage'); ?> <?php echo esc_html(get_theme_mod( 'phone_number')); ?></li>
                    <li> <?php _e( 'Email: ', 'sage'); ?><a href="<?php echo esc_url('mailto:' . get_theme_mod( 'email_address')) ?>" class=''><?php echo get_theme_mod( 'email_address') ?></a></li>
                </ul>
           </address>





        </div>

        <div class="flex md:justify-end border-b-2 border-light-green items-center h-28">
        @php aroma_social_media_icons() @endphp

        </div>

        <div class="flex flex-col md:flex-row md:justify-between md:items-center md:h-28">

            <div class="mb-10 mt-10 md:mt-0 md:mb-0">© 2021 Aroma Herbs.</div>

            <div classs="mb-10 md:mb-0"><img src="@asset('images/IFS.svg')" class="w-[82px]" /></div>

            <div class="mt-10 md:mt-0">Site by 
<a href="https://fluidmedia.gr" target="_blank" class="text-light-green">Fluid</a>
</div>

        </div>

    </div>





</footer>