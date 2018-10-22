<?php
add_action( 'after_setup_theme', 'register_my_menu' );

function register_my_menu() {
	register_nav_menu( 'header', 'Header Menu' );
	register_nav_menu( 'test', 'Test Menu' );
}

function sgc_theme_home_posts_query() {
	$args = array(
		'post_type' => 'post',
		'posts_per_page' => 4
	);

	return new WP_Query($args);
}

function sgc_theme_parse_events($posts, $from = null, $to = null) {
	if (is_null($from)) $from = new DateTime();

	foreach ($posts as $post) {
		$start_date  = DateTime::createFromFormat('Y-m-d H:i:s', $post->start_date);
		$end_date    = DateTime::createFromFormat('Y-m-d H:i:s', $post->end_date);
		$single_day  = $start_date->diff($end_date);

		$single_day = $single_day->format('%a') == '0';

		$post->sgc_theme_date_range = $start_date->format('F Y') . ' &#8211; ' . $end_date->format('F Y');
		$post->sgc_theme_time_range = $single_day
			? 'All Day'
			: $start_date->format('g:H A') . ' &#8211; ' . $end_date->format('g:H A');
	}

	return $posts;
}

function sgc_theme_date_from_params() {
	$month = $_GET['month'];
	$year  = $_GET['year'];

	if (is_null($month) && is_null($year)) $date = new DateTime();
	else $date = DateTime::createFromFormat('Y-m', $year . '-' . $month);

	if ($date !== false) {
		$date_errors = DateTime::getLastErrors();

		if (!empty($date_errors['warning_count'])) return null;
	} else return null;

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