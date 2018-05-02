<?php
add_action( 'after_setup_theme', 'register_my_menu' );
add_theme_support('post-thumbnails');

function register_my_menu() {
	register_nav_menu( 'header', 'Header Menu' );
}
