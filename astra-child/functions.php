<?php
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
 
    $parent_style = 'astra-style'; 
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.min.css',
        array( $parent_style ),
        date("h:i:s")
    );

}

function my_scripts()
{
    wp_register_script('custom', get_stylesheet_directory_uri() . '/assets/js/custom.min.js' , array(), date("h:i:s"), true);
    wp_enqueue_script('custom');
    wp_register_script('vendor', get_stylesheet_directory_uri() . '/assets/js/vendor.min.js' , array(), date("h:i:s"), true);
    wp_enqueue_script('vendor');
}

add_action('wp_enqueue_scripts', 'my_scripts');