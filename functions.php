<?php
add_action( 'after_setup_theme', 'register_my_menu' );
add_theme_support('post-thumbnails');

function register_my_menu() {
	register_nav_menu( 'header', 'Header Menu' );
}

function sgc_theme_parse_events_for_cards($posts, $from = null, $to = null) {
	if (is_null($from)) $from = new DateTime();

	foreach ($posts as $post) {
		$start_date  = DateTime::createFromFormat('Y-m-d H:i:s', $post->start_date);
		$end_date    = DateTime::createFromFormat('Y-m-d H:i:s', $post->end_date);
		$single_day  = $start_date->diff($end_date);

		$single_day = $single_day->format('%a') == '0';
		
		$time         = '';
		$date_weekday = $start_date->format('D');
		$date_day     = $start_date->format('j');
		$ends         = false;
		$show_date    = true;
		$tag          = null;
		$description  = array();

		if ($single_day) {
			if ($post->all_day == '1') {
				$time = "All Day";
				$description = array(
					array(
						'name'  => 'Date:',
						'value' => $start_date->format('F j, Y')
					)
				);
			} else {
				$time = $start_date->format('g:H A') . ' - ' . $end_date->format('g:H A');
				$description = array(
					array(
						'name'  => 'Starts:',
						'value' => $start_date->format('F j, Y \a\t g:i A')
					),

					array(
						'name'  => 'Ends:',
						'value' => 'Same day at ' . $end_date->format('g:i A')
					)
				);
			}
		} else {
			if ($start_date > $from) {
				$time = $start_date->format('g:H A') . ' (Ends ' . $end_date->format('n/j') . ')';
			} else {
				if (!is_null($to) && $end_date > $to) {
					$time = 'Ends ' . $end_date->format('n/j') . ' at ' . $end_date->format('g:H A');
					$show_date = false;
				} else {
					$time = 'Ends at ' . $end_date->format('g:H A');
					$tag = 'Ends';
				}
			}

			$description = array(
				array(
					'name'  => 'Starts:',
					'value' => $start_date->format('F j, Y \a\t g:i A')
				),

				array(
					'name'  => 'Ends:',
					'value' => 'Same day at ' . $end_date->format('g:i A')
				)
			);
		}

		if ($start_date < $from) {
			$date_weekday = $end_date->format('D');
			$date_day     = $end_date->format('j');
		}

		/*if ($post->all_day == '1') {
			$time_start = $start_date->format('F j, Y');
			$time_end   = $end_date->format('F j, Y');
		} else {
			$time_start = $start_date->format('F j, Y');
			$time_end   = $end_date->format('F j, Y');
		}*/

		$post->sgc_theme_time         = $time;
		$post->sgc_theme_date_weekday = $date_weekday;
		$post->sgc_theme_date_day     = $date_day;
		$post->sgc_theme_show_date    = $show_date;
		$post->sgc_theme_tag          = $tag;
		$post->sgc_theme_description  = $description;
	}

	return $posts;
}

function sgc_theme_parse_calendar_params() {
	$month = $_GET['month'];
	$year  = $_GET['year'];

	if (is_null($month) && is_null($year)) $date = new DateTime();
	else $date = DateTime::createFromFormat('Y-m', $year . '-' . $month);

	if ($date !== false) {
		$date_errors = DateTime::getLastErrors();

		if (!empty($date_errors['warning_count'])) return null;
	} else return null;

	$result = wp_ec_getter_get_results(array(
		'from' => $date->format('Y-m') . '-01 00:00:00',
		'to'   => $date->format('Y-m-t')  . ' 23:59:59'
	));

	return $result;
}