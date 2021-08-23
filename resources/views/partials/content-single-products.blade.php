<div class="container relative mx-auto mb-24 mt-10">

        <div class="flex flex-col  items-center justify-center">


        <!-- <p class="uppercase font-advent-pro-light text-2xl sm:text-5xl tracking-widest text-dark-green"> <img src="@asset('images/fresh-title.svg')" class="w-[208px]"/> </p> -->
    

        <div class="flex items-center justify-center my-10">
    
         
        <img src="@asset('images/fresh-title.svg')" class="w-[208px]"/> 
      
    
      </div>

        


      <p class="font-takhie text-dark-green tracking-widest text-7xl sm:text-9xl">@title</p>
         
         </div>

         </div>



<div class="flex max-w-6xl mx-auto">

<article @php(post_class())>

<div class="flex flex-col sm:flex-row mb-20">

  <div class="flex justify-center sm:w-2/6">
  @include('partials.product-thumbs-slider')

        </div> <!-- Close Column -->


  <div class="flex justify-center sm:w-2/6">

  <?php 
$images = get_field('gallery');
if( $images ): ?>
   <div id="splide-product-main" class="splide">
        <div class="splide__track">

            <ul class="splide__list">
        <?php foreach( $images as $image ): ?>
          <li class="splide__slide">
                <a href="<?php echo esc_url($image['url']); ?>">
                     <img src="<?php echo esc_url($image['sizes']['large']); ?>" class="w-[229px] sm:w-[390px]" alt="<?php echo esc_attr($image['alt']); ?>""  />
                </a>
                <p><?php echo esc_html($image['caption']); ?></p>
            </li>
        <?php endforeach; ?>
    </ul>
<?php endif; ?>
        </div>
        </div>

</div> <!-- Close Column -->

<div class="flex flex-col">
<div class="flex flex-row w-full sm:flex-col mt-20 sm:pl-20">
<div class="flex flex-col pr-10 items-center sm:items-start">
<p class="mb-5 text-sm font-advent-pro-light text-aroma-grey">8571018926</p>
<p class="text-3xl sm:text-5xl mb-5">25g</p>
        </div>
<p class="mb-5 font-advent-pro-light text-aroma-grey">Το δεντρολίβανο είναι αυτοφυές και αειθαλές φυτό, γνωστό από την αρχαιότητα στη Ρώμη και στην Ελλάδα, που το χρησιμοποιούσαν και στην ιατρική και στη μαγειρική.</p>

        </div>

        <div class="flex flex-col mt-20 sm:pl-20">

<p class="uppercase mb-10">ΔιαθΕσιμο ΣΕ</p>

<?php
$packages = get_field('packaging');
if( $packages ): ?>
<ul class="flex">
    <?php foreach( $packages as $package ): ?>
        <li><span class="text-white py-3 sm:py-4 px-8 sm:px-10 mr-3 sm:mr-6 bg-pink"><?php echo $package['label']; ?></span></li>
    <?php endforeach; ?>
</ul>
<?php endif; ?>

    </div>

</div> <!-- Close Column -->

</div>

    </div>


<hr>


<div class="container relative mx-auto mb-24">

<div class="flex flex-col sm:flex-row mt-20">

<div class="flex sm:w-2/6">

</div>  

<div class="flex flex-col sm:w-3/6 sm:pr-10 sm:border-r sm:border-gray-300">


<p class="uppercase font-advent-pro-semi-bold flex sm:self-center mb-10 sm:mb-20">περιγραφη</p>

<p>Χρήσεις στη μαγειρική: Το δενδρολίβανο είναι από τα βασικά μυρωδικά της μεσογειακής κουζίνας. Ταιριάζει με τις πατάτες στο φούρνο, αλλά και με τις τηγανιτές. Αρωματίζει υπέροχα το ψωμί, το μοσχάρι, το αρνί, το κυνήγι, το ψάρι, τα θαλασσινά, τις ομελέτες, τις σούπες, τις σάλτσες, τα λαχανικά, καθώς και τα σαλιγκάρια. Πριν το χρησιμοποιήσετε στη συνταγή σας μη ξεχάσετε να ξεπλύνετε και εσείς μόνο την ποσότητα που θα χρησιμοποιήσετε. Εμείς συνειδητά αποφύγαμε την έντονη έκπλυση για να φτάσει φρέσκο σε εσάς, χωρίς να χάσει τα ευεργετικά συστατικά του. Πάντα τα μυρωδικά τα πλένουμε μόλις είμαστε έτοιμοι να τα χρησιμοποιήσουμε και ποτέ πριν γιατί χάνουν τα αιθέρια έλαιά τους και ατονεί το άρωμά τους.</p>

 <div class="">

</div>
</div>


<div class="flex flex-col mt-10 sm:mt-0 sm:w-1/6 sm:pl-10">

<p class="uppercase flex font-advent-pro-semi-bold mb-10 sm:mb-20">Περισσοτερες ΠΛΗΡΟΦΟΡΙΕΣ</p>

<p class="flex font-advent-pro-bold uppercase mb-10 text-aroma-grey">ΟδηγΙες ΣυντΗρησης</p>



<ul>

<li>Εντος ψυγείου (6-8oC )</li>
<li>Διάρκεια: 10-15 ημέρες</li>

</ul>

</div>  

</div>


</div>  

</div>
</div>

</article>

</div> <!-- Close Narrow Column -->





 

  <footer>
    {!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}
  </footer>




</div>



@include('partials.recipies-slider')


