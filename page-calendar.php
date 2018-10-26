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

	$next_month_link = $url . "/?month={$next_month->format('m')}&year={$next_month->format('Y')}";
	$previous_month_link = $url . "/?month={$previous_month->format('m')}&year={$previous_month->format('Y')}";

	$events_query = sgc_event_get_month_query(intval($date->format('m')), intval($date->format('Y')));
?>

<h1 class="post-title"><?php echo $date->format('F Y') ?></h1>

<div class="page space-below">

	<?php if ($events_query->have_posts()): ?>
		
		<div class="events">
			
			<?php while ($events_query->have_posts()): $events_query->the_post(); ?>
				<?php $event_info = sgc_event_get_event_info(get_the_ID()); ?>

				<div class="events__item">
					<span class="events__item__date"><?php echo $event_info['date']; ?></span>
					<br>
					<a href="<?php the_permalink(); ?>" class="events__item__title"><?php echo get_the_title();?></a>
					<br>
					<span class="events__item__time"><?php echo sgc_theme_get_event_time_range($event_info); ?></span>
				</div>
			<?php endwhile; ?>
		
		</div>
	
	<?php else: ?>
		<p class="text-bold light-gray">Nothing this month.</p>
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