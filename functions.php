<?php
add_action( 'after_setup_theme', 'sgc_theme_setup' );

function sgc_theme_setup() {
	register_nav_menu('header', 'Header Menu');
	register_nav_menu('hero', 'Hero Banner Links');
	add_theme_support( 'title-tag' );
}

function sgc_theme_home_posts_query() {
	$args = array(
		'post_type' => 'post',
		'posts_per_page' => 4
	);

	return new WP_Query($args);
}

function sgc_theme_date_from_params() {
	$month = $_GET['calendar_month'];
	$year  = $_GET['calendar_year'];

	if (is_null($month) && is_null($year)) $date = new DateTime();
	else $date = DateTime::createFromFormat('Y-m-d', $year . '-' . $month. '-15');

	if ($date !== false) {
		$date_errors = DateTime::getLastErrors();

		if (!empty($date_errors['warning_count'])) return false;
	} else return false;

	return $date;
}

// Based on https://core.trac.wordpress.org/browser/tags/4.9.8/src/wp-includes/link-template.php#L2207
function sgc_theme_next_posts_link() {
	global $paged, $wp_query;

	$max_page = $wp_query->max_num_pages;
	if (!$paged) $paged = 1;

	$nextpage = intval($paged) + 1;

	if (!is_single() && ($nextpage <= $max_page)) {
		echo '<a class="button button--expanding" href="' . next_posts($max_page, false) . '">'
		. 'Older Posts '
		. '<span class="feather" data-feather="arrow-right"></span>'
		. '</a>';
	}
}

// Based on https://core.trac.wordpress.org/browser/tags/4.9.8/src/wp-includes/link-template.php#L2298
function sgc_theme_previous_posts_link() {
	global $paged;
	
	if (!is_single() && $paged > 1) {
		echo '<a class="button button--expanding" href="' . previous_posts(false) . '">'
		. '<span class="feather" data-feather="arrow-left"></span>'
		. ' Newer Posts'
		. '</a>';
	}
}

function sgc_theme_menu_link_atts( $atts, $item, $args ) {
	if ($args->theme_location === 'hero') $atts['class'] = 'button';
	return $atts;
}

add_filter( 'nav_menu_link_attributes', 'sgc_theme_menu_link_atts', 10, 3 );

// https://stackoverflow.com/questions/4586835/how-to-pass-extra-variables-in-url-with-wordpress
function sgc_theme_query_vars($vars) {
	$vars[] = 'calendar_month';
	$vars[] = 'calendar_year';
	return $vars;
}

add_filter( 'query_vars', 'sgc_theme_query_vars', 10, 1 );