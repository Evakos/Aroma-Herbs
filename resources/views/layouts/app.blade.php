<div class="container relative mx-auto">
    <a class="sr-only focus:not-sr-only" href="#main">
        {{ __('Skip to content') }}
    </a>

    <!-- @include('partials.header') -->




        @yield('content')



    <!-- <aside class="sidebar w-1/3">
        @yield('sidebar-primary')

        @php(dynamic_sidebar('sidebar-primary'))
    </aside> -->



</div>


@include('partials.instagram')


@include('partials.footer')