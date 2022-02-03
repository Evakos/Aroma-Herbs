<?php

/**
 * Theme admin.
 */

namespace App;

use WP_Customize_Manager;

use function Roots\asset;

/**
 * Register the `.brand` selector to the blogname.
 *
 * @param  \WP_Customize_Manager $wp_customize
 * @return void
 */
// add_action('customize_register', function (WP_Customize_Manager $wp_customize) {
//     $wp_customize->get_setting('blogname')->transport = 'postMessage';
//     $wp_customize->selective_refresh->add_partial('blogname', [
//         'selector' => '.brand',
//         'render_callback' => function () {
//             bloginfo('name');
//         }
//     ]);
// });


/**
 * Add postMessage support
 */
function customize_register($wp_customize) {
    $wp_customize->get_setting('blogname')->transport = 'postMessage';
  
    // remove defaults
    // $wp_customize->remove_panel( 'widgets' );
    // $wp_customize->remove_section( 'static_front_page' );
    // remove nav menus
    // remove_action( 'customize_controls_enqueue_scripts', array( $wp_customize->nav_menus, 'enqueue_scripts' ) );
    // remove_action( 'customize_register', array( $wp_customize->nav_menus, 'customize_register' ), 11 );
    // remove_filter( 'customize_dynamic_setting_args', array( $wp_customize->nav_menus, 'filter_dynamic_setting_args' ) );
    // remove_filter( 'customize_dynamic_setting_class', array( $wp_customize->nav_menus, 'filter_dynamic_setting_class' ) );
    // remove_action( 'customize_controls_print_footer_scripts', array( $wp_customize->nav_menus, 'print_templates' ) );
    // remove_action( 'customize_controls_print_footer_scripts', array( $wp_customize->nav_menus, 'available_items_template' ) );
    // remove_action( 'customize_preview_init', array( $wp_customize->nav_menus, 'customize_preview_init' ) );
  
    $wp_customize->add_setting('custom_logo');
  
    $wp_customize->add_control(
      new \WP_Customize_Image_Control(
        $wp_customize,
        'custom_logo',
        array(
          'label' => 'Logo',
          'section' => 'title_tagline',
          'settings' => 'custom_logo',
          'transport' => 'postMessage'
        )
      )
    );
  
    $wp_customize->add_setting(
      'header_static'
    );
  
    $wp_customize->add_control(
      'header_static',
      array(
        'type' => 'checkbox',
        'label' => 'Should the header hide on scroll?',
        'section' => 'header'
      )
    );
  
    $wp_customize->add_section(
        'footercontactdetails',
        array(
            'title' => 'Footer Contact Details',
            'description' => 'Manage the contact details',
            'priority' => 35,
        )
    );
  
    $wp_customize->add_setting(
      'head_office_address',
      array(
        'default' => '',
        'sanitize_callback' => 'wp_kses_post',
        'transport' => 'postMessage'
      )
    );
  
    $wp_customize->add_control(
      'head_office_address',
      array(
        'label' => 'Head Office Address',
        'section' => 'footercontactdetails',
        'settings' => 'head_office_address'
      )
    );
  
    $wp_customize->add_setting(
      'phone_number',
      array(
        'default' => '+30 210 68 20 840',
        'sanitize_callback' => 'sanitize_text_field',
        'transport' => 'postMessage'
      )
    );
  
    $wp_customize->add_control(
      'phone_number',
      array(
        'label' => 'Phone Number',
        'section' => 'footercontactdetails',
        'settings' => 'phone_number'
      )
    );
  
    $wp_customize->add_setting(
      'phone_number',
      array(
        'default' => '+302106820840',
        'sanitize_callback' => 'sanitize_text_field',
        'transport' => 'postMessage'
      )
    );
  
    $wp_customize->add_control(
      'phone_number',
      array(
        'label' => 'Phone Number',
        'section' => 'footercontactdetails',
        'settings' => 'phone_number'
      )
    );
  
    $wp_customize->add_setting(
      'email_address',
      array(
        'default' => 'info@example.com',
        'sanitize_callback' => 'sanitize_text_field',
        'transport' => 'postMessage'
      )
    );
  
    $wp_customize->add_control(
      'email_address',
      array(
        'label' => 'Email Address',
        'section' => 'footercontactdetails',
        'settings' => 'email_address'
      )
    );

    $wp_customize->add_section(
      'subscribedetails',
      array(
          'title' => 'Subscribe Text',
          'description' => 'Manage the subscribe text',
          'priority' => 35,
      )
  );

    $wp_customize->add_setting(
      'subscribe_text',
      array(
        'default' => '',
        'section' => 'subscribedetails',
        'sanitize_callback' => 'sanitize_text_field',
        'transport' => 'postMessage'
      )
    );
  
    $wp_customize->add_control(
      'subscribe_text',
      array(
        'label' => 'Subscribe Text',
        'section' => 'subscribedetails',
        'settings' => 'subscribe_text'
      )
    );

    $wp_customize->add_setting(
      'subscribe_text_english',
      array(
        'default' => '',
        'section' => 'subscribedetails',
        'sanitize_callback' => 'sanitize_text_field',
        'transport' => 'postMessage'
      )
    );
  
    $wp_customize->add_control(
      'subscribe_text_english',
      array(
        'label' => 'Subscribe Text English',
        'section' => 'subscribedetails',
        'settings' => 'subscribe_text_english'
      )
    );



    $wp_customize->add_section( 'my_social_settings', 
		array(
			'title'    => __('Social Media Icons', 'sage'),
			'priority' => 35,
		) 
	);

	$social_sites = aroma_customizer_social_media_array();
	$priority = 5;

	foreach($social_sites as $social_site) {
		$wp_customize->add_setting( "$social_site", 
			array(
				'type'	=> 'theme_mod',
				'capability'	=> 'edit_theme_options',
			) 
		);

		$wp_customize->add_control( $social_site, 
			array(
				'label'    => __( "$social_site url:", 'sage' ),
				'section'  => 'my_social_settings',
				'type'     => 'text',
				'priority' => $priority,
			) 
		);
		$priority = $priority + 5;
	}









  
    // $wp_customize->add_setting(
    //   'twitter',
    //   array(
    //     'default' => '',
    //     'sanitize_callback' => 'sanitize_text_field'
    //   )
    // );
  
    // $wp_customize->add_control(
    //   'twitter',
    //   array(
    //     'label' => 'Twitter',
    //     'section' => 'footercontactdetails',
    //     'settings' => 'twitter'
    //   )
    // );
  
    // $wp_customize->add_setting(
    //   'facebook',
    //   array(
    //     'default' => '',
    //     'sanitize_callback' => 'sanitize_text_field'
    //   )
    // );
  
    // $wp_customize->add_control(
    //   'facebook',
    //   array(
    //     'label' => 'Facebook',
    //     'section' => 'footercontactdetails',
    //     'settings' => 'facebook'
    //   )
    // );
  
    // $wp_customize->add_setting(
    //   'pinterest',
    //   array(
    //     'default' => '',
    //     'sanitize_callback' => 'sanitize_text_field'
    //   )
    // );
  
    // $wp_customize->add_control(
    //   'pinterest',
    //   array(
    //     'label' => 'Pinterest',
    //     'section' => 'footercontactdetails',
    //     'settings' => 'pinterest'
    //   )
    // );
  
    // $wp_customize->add_setting(
    //   'facebook',
    //   array(
    //     'default' => '',
    //     'sanitize_callback' => 'sanitize_text_field'
    //   )
    // );
  
    // $wp_customize->add_control(
    //   'facebook',
    //   array(
    //     'label' => 'Facebook',
    //     'section' => 'footercontactdetails',
    //     'settings' => 'facebook'
    //   )
    // );
  
  
    // $wp_customize->add_setting(
    //   'Instagram',
    //   array(
    //     'default' => '',
    //     'sanitize_callback' => 'sanitize_text_field'
    //   )
    // );
  
    // $wp_customize->add_control(
    //   'Instagram',
    //   array(
    //     'label' => 'Instagram',
    //     'section' => 'footercontactdetails',
    //     'settings' => 'Instagram'
    //   )
    // );
  
  }
  add_action('customize_register', __NAMESPACE__ . '\\customize_register');
  
  // Print styles
  function print_styles() {
    $primary_colour                                   = get_theme_mod('primary_colour');
    $secondary_colour                                 = get_theme_mod('secondary_colour');
    $header_background_colour                         = get_theme_mod('header_background_colour');
    $header_font_colour                               = get_theme_mod('header_font_colour');
    $mobile_menu_hover_colour                         = get_theme_mod('mobile_menu_hover_colour');
    $footer_background_colour                         = get_theme_mod('footer_background_colour');
    $footer_font_colour                               = get_theme_mod('footer_font_colour');
  ?>
  <style>
      <?php if ($primary_colour) : ?>
        .Primary-bg-c {
          background-color: <?= $primary_colour; ?> !important;
        }
        .Primary-bg-c a {
          color: #FFF !important;
        }
        .Primary-bg-c a:hover {
          color: #FFF !important;
          text-decoration: underline;
        }
        .Primary-bg-c p a {
          color: #FFF !important;
        }
        .Primary-bg-c p a:hover {
          color: #FFF !important;
          text-decoration: underline;
        }
        .Primary-c {
          color: <?= $primary_colour; ?> !important;
        }
        .Primary-c--hover:hover {
          color: <?= $primary_colour; ?> !important;
        }
        .Primary-bo-c {
          border-color: <?= $primary_colour; ?> !important;
        }
        .Primary-bo-c:hover {
          background-color: <?= $primary_colour; ?> !important;
          color: #FFFFFF !important;
        }
      <?php endif; ?>
  
      <?php if ($secondary_colour) : ?>
        h2::before {
          background: <?= $secondary_colour; ?> !important;
        }
        .Breakout-text::before,
        .Breakout-text::after {
          color: <?= $secondary_colour; ?> !important;
        }
        p a {
          color: <?= $secondary_colour; ?> !important;
        }
      <?php endif; ?>
  
      <?php if ($header_background_colour) : ?>
        .Header {
          background-color: <?= $header_background_colour; ?> !important;
        }
        #shiftnav-main {
          background-color: <?= $header_background_colour; ?> !important;
        }
      <?php endif; ?>
  
      <?php if ($header_font_colour) : ?>
        .Header a {
          color: <?= $header_font_colour; ?> !important;
        }
        .shiftnav ul.shiftnav-menu li.menu-item > .shiftnav-target {
          color: <?= $header_font_colour; ?> !important;
        }
        .Menu-burger span {
          background: <?= $header_font_colour; ?> !important;
        }
      <?php endif; ?>
  
      <?php if ($mobile_menu_hover_colour) : ?>
        .shiftnav ul.shiftnav-menu li.menu-item > .shiftnav-target:hover {
          background-color: <?= $mobile_menu_hover_colour; ?> !important;
        }
      <?php endif; ?>
  
      <?php if ($footer_background_colour) : ?>
        .Footer {
          background-color: <?= $footer_background_colour; ?> !important;
        }
      <?php endif; ?>
  
      <?php if ($footer_font_colour) : ?>
        .Footer {
          color: <?= $footer_font_colour; ?> !important;
        }
        .Footer .icon,
        .Footer .icon path  {
          fill: <?= $footer_font_colour; ?> !important;
        }
      <?php endif; ?>
  
    </style>
  <?php
  }
  add_action('wp_head', __NAMESPACE__ . '\\print_styles');
  
/**
 * Register the customizer assets.
 *
 * @return void
 */
add_action('customize_preview_init', function () {
    wp_enqueue_script('sage/customizer.js', asset('scripts/customizer.js')->uri(), ['customize-preview'], null, true);
});
