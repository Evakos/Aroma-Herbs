
<div class="" id="menu-modal">

<div class="container justify-center items-center h-screen flex">

<div class="flex min-w-max">

<img src="@asset('./images/french-spices-menu-title.svg')" class="w-[171px]"/>

</div>

<div class="flex min-w-max pr-96">
  
  <nav class="nav-primary text-right">
      @if (has_nav_menu('primary_navigation'))
        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav advent-pro-bold text-5xl text-white', 'echo' => false]) !!}
      @endif
    </nav>

</div>

</div>
  
  </div>

  <div id="overlay" class="h-screen fixed bg-black bg-opacity-80 z-40 w-full hidden"></div>


