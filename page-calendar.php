<?php get_header(); ?>

<?php
	global $wp;
	$date = sgc_theme_date_from_params();
	$url  = home_url($wp->request);

	if ($date === false) $date = new DateTime();
	
	$next_month = clone $date;
	$previous_month = clone $date;
	
	$next_month->modify('first day of next month');
	$previous_month->modify('first day of previous month');

	$next_month_link = $url . "/?calendar_month={$next_month->format('m')}&calendar_year={$next_month->format('Y')}";
	$previous_month_link = $url . "/?calendar_month={$previous_month->format('m')}&calendar_year={$previous_month->format('Y')}";

	$events_query = event_getter_get_month_query(intval($date->format('m')), intval($date->format('Y')));
?>

<h1 class="post-title"><?php echo $date->format('F Y') ?></h1>

<div class="page space-below">

	<?php if ($events_query->have_posts()): ?>
		
		<div class="tile-container">
			
			<?php while ($events_query->have_posts()): $events_query->the_post(); ?>
				<?php $event_info = event_getter_get_event_info(get_the_ID()); ?>

				<a href="<?php the_permalink(); ?>" class="tile">
					<span class="tile__date"><?php echo event_getter_get_event_range(get_the_ID()); ?></span>
					<h2 class="h4 tile__title"><?php the_title(); ?></h2>
					<span class="tile__more-details">More Details</span>
				</a>
			<?php endwhile; ?>
		
		</div>
	
	<?php else: ?>
		<p class="event-nothing">Nothing this month yet.</p>
	<?php endif; ?>

	<a
		class="button button--expanding"
		href="<?php echo $previous_month_link; ?>"
	><span class="feather" data-feather="arrow-left"></span> <?php echo $previous_month->format('F'); ?></a>

	<a
		class="button button--expanding"
		href="<?php echo $next_month_link; ?>"
	><?php echo $next_month->format('F') ?> <span class="feather" data-feather="arrow-right"></span></a>
	
</div>

<?php get_footer(); ?>