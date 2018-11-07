<?php get_header(); ?>

<?php if (have_posts()): the_post(); ?>

<article>
	<?php if (get_post_type() === 'post'): ?>
		<span class="post-date text-centered"><?php the_date(); ?></span>
	<?php endif; ?>

	<h1 class="post-title"><?php the_title(); ?></h1>

	<div class="page">
		<?php if (get_post_type() === 'event'): ?>
			<?php $event_info = event_getter_get_event_info($post->ID, 'l, F j'); ?>

			<div class="event__details event__details--single">
				<h2 class="event__details__title">Event Details:</h2>

				<div class="event__details__table">
					<span class="event__details__table__row">
						<span class="event__details__table__key">Name:</span>
						<span class="event__details__table__value"><?php the_title(); ?></span>
					</span>

					<span class="event__details__table__row">
						<span class="event__details__table__key">Starts:</span>
						<span class="event__details__table__value"><?php echo $event_info['date_start']; ?></span>
					</span>

					<?php if ($event_info['date_end']): ?>
						<span class="event__details__table__row">
							<span class="event__details__table__key">Ends:</span>
							<span class="event__details__table__value"><?php echo $event_info['date_end']; ?></span>
						</span>
					<?php endif; ?>

					<?php if ($event_info['location']): ?>
						<span class="event__details__table__row">
							<span class="event__details__table__key">Location:</span>
							<span class="event__details__table__value"><?php echo $event_info['location']; ?></span>
						</span>
					<?php endif; ?>
				</div>
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