<?php get_header(); ?>

<?php if (have_posts()): the_post(); ?>

<article>
	<?php if (get_post_type() === 'post'): ?>
		<span class="post-date text-centered"><?php the_date(); ?></span>
	<?php endif; ?>

	<h1 class="post-title"><?php the_title(); ?></h1>

	<div class="page">
		<?php if (get_post_type() === 'event'): ?>
			<?php $event_info = sgc_event_get_event_info($post->ID, 'l, F j'); ?>
			<?php $time_range = sgc_theme_get_event_time_range($event_info); ?>

			<div class="events__item events__item--single">
				<span class="events__item__title">Event Details:</span><br>
				<span><?php echo $event_info['date']; ?></span><br>
				<span><?php echo $time_range ?></span>
			</div>

		<?php endif; ?>

		<?php the_content(); ?>

		<?php if (get_post_type() === 'event'): ?>
			<a href="<?php echo get_permalink(get_page_by_title('Calendar')); ?>" class="button">Full Calendar</a>
		<?php endif; ?>
	</div>
</article>

<?php endif; ?>

<?php get_footer(); ?>