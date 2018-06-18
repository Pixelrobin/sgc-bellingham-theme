<?php
	// Global setup
	global $script_name;
	$script_name = 'index';
?>

<?php get_header(); ?>
	<section id="heading">
		<div id="heading__slideshow">
			<div tabindex="0" aria-hidden id="heading__slideshow__left">
				<span class="feather" data-feather="chevron-left"></span>
			</div>
			
			<?php
				$args = array(
					'category_name' => 'slideshow'
				);

				$posts_query = new WP_Query($args);
			?>

			<?php if ($posts_query->have_posts()) : ?>
				<?php while ( $posts_query->have_posts() ) : $posts_query->the_post(); ?>

					<div
						class="heading__slideshow__slide"
						style="background-image: url('<?php
							if (has_post_thumbnail()) {
								the_post_thumbnail_url('large');
							}
						?>');"
					>
						<div class="heading__slideshow__slide__cover"></div>

						<div class="heading__slideshow__slide__content">
							<a href="<?php the_permalink() ?>"><h1><?php the_title(); ?></h1></a>

							<a href="<?php the_permalink() ?>" class="button button--white">Read more</a>
						</div>
					</div>
				
				<?php endwhile; ?>
			<?php endif ?>
			
			<div tabindex="0" aria-hidden id="heading__slideshow__right">
				<span class="feather" data-feather="chevron-right"></span>
			</div>
		</div>
	</section>

	<section class="flex-row home-row mb-2">
		<div id="latest-service" href="#" class="flex-row__item video-thumbnail mb-1" style="flex-basis: 33%;">
			<div class="video-thumbnail__cover"></div>
			<div class="video-thumbnail__content">
				<h1>Latest Video</h1>
				<p id="latest-service__name" class="text-caption mb-1"></p>
				<a id="latest-service__link" class="button button--white">Watch now</a>
			</div>
		</div>

		<div class="flex-row__item mb-1">
			<h1 class="mb-1 h2 text-centered">Upcoming events</h1>

			<?php
				$upcoming_events = sgc_theme_parse_events_for_cards(
					wp_ec_getter_get_results(array(
						'limit' => 5
					))
				);

				global $post;
			?>
			
			<?php if ($upcoming_events): ?>
				<?php foreach ($upcoming_events as $post): ?>
					<?php setup_postdata($post); ?>

					<a href="<?php the_permalink(); ?>" class="black-link no-decoration">
						<div class="upcoming-event">

							<div class="upcoming-event__date">
								<?php if ($post->sgc_theme_show_date): ?>
									<span class="text-caption" style="color: white;"><?php echo $post->sgc_theme_date_weekday ?></span>
									<br>
									<span class="h1"><?php echo $post->sgc_theme_date_day ?></span>
								<?php endif ?>
							</div>

							<div class="upcoming-event__content">
								<h1 class="h3" style="font-size: 1.25rem;">
									<?php
										$span = '';

										if (!is_null($post->sgc_theme_tag)) {
											$span = '(' . $post->sgc_theme_tag . ')';
										}

										echo $post->post_title . ' ' . $span;
									?>
								</h1>
								<p><?php echo $post->sgc_theme_time ?></p>
							</div>
						</div>
					</a>

				<?php endforeach ?>
			<?php endif ?>

			<a href="#" class="button full-width button--blue">Full Calendar</a>
		</div>
	</section>
<?php get_footer(); ?>