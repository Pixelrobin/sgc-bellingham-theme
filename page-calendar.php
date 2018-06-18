<?php get_header(); ?>

<h1 class="text-centered mb-2">Calendar</h1>

<div class="calendar">
	<div class="upcoming-event">
		
	</div>
</div>

<?php /*
<?php
	$upcoming_events = sgc_theme_parse_events_for_cards(sgc_theme_parse_calendar_params());

	global $post;
?>

<?php if (!is_null($upcoming_events) && $upcoming_events): ?>
	<?php foreach ($upcoming_events as $post): ?>
		<?php setup_postdata($post); ?>
		<div class="calendar">

			<div class="upcoming-event__content">
				<a href="<?php the_permalink(); ?>"><h1 class="h3">
					<?php
						$span = '';

						if (!is_null($post->sgc_theme_tag)) {
							$span = '(' . $post->sgc_theme_tag . ')';
						}

						echo $post->post_title . ' ' . $span;
					?>
				</h1></a>
				
				<dl>
					<?php foreach ($post->sgc_theme_description as $data): ?>
						<div>
							<dt><?php echo $data['name']; ?></dt>
							<dd><?php echo $data['value']; ?></dd>
						</div>
					<?php endforeach ?>
				</dl>
			</div>
		</div>

	<?php endforeach ?>
<?php endif ?>

*/ ?>



<?php get_footer(); ?>