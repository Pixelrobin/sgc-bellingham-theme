<?php get_header(); ?>

<?php if (have_posts()): the_post(); ?>

<article>
	<?php if (get_post_type() === 'post'): ?>
		<span class="post-date text-centered"><?php the_date(); ?></span>
	<?php endif; ?>

	<h1 class="post-title"><?php the_title(); ?></h1>

	<div class="page">
		<?php if (get_post_type() === 'event'): ?>
			
			<?php $event_details = sgc_event_get_event_info($post->ID); ?>

			<p>Date: <?php echo $event_details['date']; ?></p>
			<p>Start time: <?php echo $event_details['start_time']; ?></p>
			<p>End time: <?php echo $event_details['end_time']; ?></p>

		<?php endif; ?>

		<?php the_content(); ?>
	</div>
</article>

<?php endif; ?>

<?php get_footer(); ?>