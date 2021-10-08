{{--
  Template Name: About Template
--}}

@extends('layouts.app')

@include('partials.modal')


  @include('partials.header')



  <div class="container relative mx-auto">

<div class="flex items-center my-20 justify-center">

<img src="@asset('images/harvest-title-alt.svg')" class="w-[289px] sm:w-[681px]"/> 
 
 </div>

 </div>


 @fields('section_1')
 <div class="flex mt-5 justify-center ">
          <img src="@sub('image')" class="w-screen object-cover min-h-[300px]"/>  
          
        </div>
<div class="container flex justify-center relative mx-auto">
        <div class="flex flex-col py-24 md:w-1/2 justify-center">
        
          <h3 class="mb-10 sm:px-24 text-center">@sub('title')</h3>
            <p class="mb-10">@sub('text')</p>
            @endfields
    
          </div>  

    </div>


    
    <div class="container relative mx-auto">

<div class="flex items-center my-20 justify-center">


<img src="@asset('images/our-history-title.svg')" class="w-[681px]"/> 
 
 </div>


 </div>

 @fields('section_2')
 <div class="flex mt-5 justify-center">
 <img src="@sub('image')" class="w-screen object-cover min-h-[300px]"/> 
        </div>
        <div class="container flex justify-center relative mx-auto">
        <div class="flex flex-col py-24 md:w-1/2 justify-center">

            <p class="mb-10">@sub('text')</p>
        

      
 <div class="quote flex flex-col py-12 px-12 md:py-24 md:px-24 justify-center">

 <div class="mb-5">
 <img src="@asset('images/quote.svg')" class="w-[68px]"/> 
</div>

 <h4 class="text-2xl">@sub('quote')</h4>
  

<p class="text-sm font-advent-pro-semi-bold text-red-500 pt-10">@sub('author')</p>

<p class="text-sm text-aroma-grey">@sub('position')</p>


</div>

<p class="mb-10">@sub('text_2')

 </p>

 @endfields
    
          </div>  

    </div>

    <div class="container relative mx-auto">

<div class="flex items-center my-20 justify-center">


<img src="@asset('images/our-mission-title.svg')" class="w-[680px]"/> 
 
 </div>


 </div>

 @fields('section_3')
 <div class="flex mt-5 justify-center">
          <img src="@sub('image')" class="w-screen object-cover min-h-[300px]"/> 
        </div>


       
        <div class="container flex justify-center relative mx-auto">
        <div class="flex flex-col py-24 md:w-1/2 justify-center">

            <p class="mb-10">@sub('text')</p>

            @endfields
    
          </div>  

    </div>


    <div class="sm:container mx-auto mb-20">

<div class="flex items-center justify-center">

    <?php 
$images = get_field('gallery');
$classes = array('span-1', 'span-2', 'span-2 row-span-3');
if( $images ): ?>
    <div class="grid sm:grid-rows-2 sm:grid-flow-col">
        <?php foreach( $images as $key => $image ): ?>

          <div class="col-<?php echo $classes[$key % 3]; ?>">

                <!-- <a href="<?php echo esc_url($image['url']); ?>"> -->
                     <img src="<?php echo esc_url($image['sizes']['large']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" class="object-cover h-full"/>
                <!-- </a> -->
            
        </div>
        <?php endforeach; ?>
        </div>
<?php endif; ?>

  </div>

</div>








  <div class="container relative mx-auto">

<div class="flex items-center justify-center">


<img src="@asset('images/center-excellence-title.svg')" class="w-[680px]"/> 
 
 </div>

 </div>

 @fields('section_4')
 <div class="flex mt-5 justify-center">
        <img src="@sub('image')" class="w-screen object-cover min-h-[300px]"/> 
        </div>

 <div class="container flex justify-center relative mx-auto">
        <div class="flex flex-col py-24 md:w-1/2 justify-center">

        <p class="mb-10">@sub('text')</p>



 <div class="quote flex flex-col py-24 sm:px-24 justify-center">

 <div class="mb-5">
 <img src="@asset('images/quote.svg')" class="w-[68px]"/> 
</div>


 <h4 class="text-2xl">@sub('quote')</h4>
  

<p class="text-sm font-advent-pro-semi-bold text-red-500 pt-10">@sub('author')</p>

<p class="text-sm text-aroma-grey">@sub('position')</p>



</div>

<p class="mb-10">@sub('text_2')</p>
    
          </div>  

    </div>

    @endfields
