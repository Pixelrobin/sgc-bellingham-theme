<?php get_header(); ?>

<?php
	global $wp;

	$date = sgc_theme_date_from_params();
	$url  = home_url($wp->request);
	
	$next_month = clone $date;
	$previous_month = clone $date;

	$next_month->modify('first day of next month');
	$previous_month->modify('first day of previous month');

	$next_link = $url . "/?month={$next_month->format('m')}&year={$next_month->format('Y')}";
	$previous_link = $url . "/?month={$previous_month->format('m')}&year={$previous_month->format('Y')}";

	$events = wp_ec_getter_get_results(array(
		'from' => $date->format('Y-m') . '-01 00:00:00',
		'to'   => $date->format('Y-m-t')  . ' 23:59:59'
	));

	$upcoming_events = sgc_theme_parse_events($events);

	global $post;
?>

<h1 class="text-centered mb-2"><?php echo $date->format('F Y') ?></h1>

<div class="clearfix mb-2">
	<a href="<?php echo $previous_link ?>" class="h4 black-link float-left"><span data-feather="chevron-left"></span> <?php echo strtoupper($previous_month->format('F Y')); ?></a>
	<a href="<?php echo $next_link; ?>" class="h4 black-link float-right"><?php echo strtoupper($next_month->format('F Y')); ?><span data-feather="chevron-right"></span></a>
</div>

<?php if (!is_null($upcoming_events) && $upcoming_events): ?>
	<ul class="calendar">
	<?php foreach ($upcoming_events as $post): ?>
		<?php setup_postdata($post); ?>
			<li>
				<h1 class="h2">
					<?php
						$span = '';

						if (!is_null($post->sgc_theme_tag)) {
							$span = '(' . $post->sgc_theme_tag . ')';
						}

						echo $post->post_title . ' ' . $span;
					?>
				</h1>
				
				<dl>
					<dt><span aria-label="The date" data-feather="calendar"></span></dt>
					<dd><?php echo $post->sgc_theme_date_range; ?><br></dd>

					<dt><span aria-label="The time" data-feather="clock"></span></dt>
					<dd><?php echo $post->sgc_theme_time_range; ?><br></dd>

					<?php if ($post->location): ?>
						<dt><span aria-label="The location" data-feather="map-pin"></span></dt>
						<dd><?php echo $post->location; ?><br></dd>
					<?php endif ?>
				</dl>
				
				<?php if (!sgc_theme_empty_content($post->post_content)): ?><h2 class="h4">Details:</h2><?php endif; ?>
				<?php the_content(); ?>
			</li>
	<?php endforeach ?>
	</ul>
<?php else: ?>

	<span class="h4 block text-centered light-gray">Nothing for this Month</span>
<?php endif ?>

<?php get_footer(); ?>