const mix = require('laravel-mix');
require('@tinypixelco/laravel-mix-wp-blocks');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Sage application. By default, we are compiling the Sass file
 | for your application, as well as bundling up your JS files.
 |
 */

mix
  .setPublicPath('./public')
  .browserSync('aroma-herbs.local');

mix
  .sass('resources/styles/app.scss', 'styles')
  .sass('resources/styles/editor.scss', 'styles')
  .options({
    processCssUrls: false,
    postCss: [require('tailwindcss/jit')],
  });

mix
  .js('resources/scripts/app.js', 'scripts')
  .js('resources/scripts/accents.js', 'scripts')
  .js('resources/scripts/product.js', 'scripts')
  .js('resources/scripts/recipes.js', 'scripts')
  .js('resources/scripts/front-page.js', 'scripts')
  .js('resources/scripts/customizer.js', 'scripts')
  .js('resources/scripts/animation.js', 'scripts')
  .js('resources/scripts/load-more.js', 'scripts')
  .js('resources/scripts/recipes-filter.js', 'scripts')
  .js('resources/scripts/product-archive.js', 'scripts')
  .blocks('resources/scripts/editor.js', 'scripts')
  .autoload({ jquery: ['$', 'window.jQuery'] })
  .extract();

mix
  .copyDirectory('resources/images', 'public/images')
  .copyDirectory('resources/fonts', 'public/fonts');

mix
  .sourceMaps()
  .version();
