<footer class="bg-aroma-x-light-grey relative">

    <div class="container mx-auto pt-20 md:pt-52">

        <div class="flex flex-col lg:flex-row justify-center">
            <div class="flex flex-col flex-1 justify-center mb-10 md:mb-0 lg:pr-32">
                <img src="@asset('images/logo-footer.svg')" class="w-[93px] mb-5" />
            

                    <p><?php echo get_theme_mod( 'subscribe_text') ?></p>

                    <!-- <div class="flex justify-between w-[260px] mt-10 md:mt-10 bg-light-green py-5 px-8 text-white rounded-full"> <input type="text" id="sign-up" class="bg-transparent w-3/4 placeholder-white" placeholder="Email Address" name=""><img src="@asset('images/envelope-white.svg')" class="w-[16px] fill-current text-white" /></div> -->

                    <!-- Begin MailChimp Signup Form -->
 <div class="flex justify-between w-[260px] mt-10 md:mt-10 bg-light-green py-5 px-8 text-white rounded-full">



    <form action="https://evakos.us5.list-manage.com/subscribe/post?u=dd1bc7cedc4df039c67a9f1ab&amp;id=66edf0c659" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate flex">
                <input type="email" value="" name="EMAIL" class="email bg-transparent w-[170px] placeholder-current" id="mce-EMAIL" placeholder="Email" required>
                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                    <input type="text" name="b_e44c1f194bec93e238615469e_f6f826e769" tabindex="-1" value="">
                </div>


                <input type="image" value="" name="subscribe" id="mc-embedded-subscribe" src="@asset('images/envelope-white.svg')" border="0" alt="Submit" class="w-[22px] fill-current text-white">              
                <div id="subscribe-result">
                </div>
            </form>









</div>
<!--End mc_embed_signup-->



<!--End mc_embed_signup-->
                    

            </div>












            <div class="flex flex-col flex-1 mb-10">
             <nav class="">
      @if (has_nav_menu('primary_navigation'))
        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav text-dark-green']) !!}
      @endif
    </nav>
            </div>

            <div class="flex flex-col flex-1">
                <h4 class="text-dark-green mb-5">Επικοινωνία</h4>
                <ul>
                    <li>Διεύθυνση: <?php echo wp_kses_post(get_theme_mod( 'head_office_address')); ?></li>
                    <li>Τηλέφωνο: <?php echo get_theme_mod( 'phone_number') ?></li>
                    <li>Email: <a href="mailto:<?php echo get_theme_mod( 'email_address') ?>" class=''><?php echo get_theme_mod( 'email_address') ?></a></li>
                </ul>
            </div>

        </div>

        <div class="flex md:justify-end border-b-2 border-light-green items-center h-28">
        @php aroma_social_media_icons() @endphp

        </div>

        <div class="flex flex-col md:flex-row md:justify-between md:items-center md:h-28">

            <div class="mb-10 mt-10 md:mt-0 md:mb-0">© 2021 Aroma Herbs.</div>

            <div classs="mb-10 md:mb-0"><img src="@asset('images/IFS.svg')" class="w-[82px]" /></div>

            <div class="mt-10 md:mt-0">Site by 
<a href="url" class="text-light-green">Fluid</a>
</div>

        </div>

    </div>





</footer>