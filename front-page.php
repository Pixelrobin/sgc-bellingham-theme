<?php get_header(); ?>

<div class="home-hero space-below">
	<div class="home-hero__content">
		<h1><?php echo get_bloginfo('name'); ?></h1>
		<p class="h4"><?php echo get_bloginfo('description'); ?></p>

		<?php
			$cta_items = wp_nav_menu(
				array(
					'theme_location' => 'hero',
					'container'      => false,
					'menu_class'     => false,
					'depth'          => 1,
					'echo'           => false,
					'items_wrap'     => '%3$s'
				)
			);

			echo strip_tags($cta_items, '<a>' );
		?>
	</div>

	<img src="<?php echo get_template_directory_uri() . '/media/hero.jpg' ?>" alt="The front of Slavic Gospel Church on a sunny day, with people walking through the front door from a parking lot.">
</div>

<div class="home-content space-below">
	<div class="home-content__main">
		<?php $news_query = sgc_theme_home_posts_query() ?>

		<?php if ($news_query->have_posts()): ?>

			<h2>Latest News</h2>

			<div class="tile-container">

				<?php while ($news_query->have_posts()): $news_query->the_post(); ?>
					<a href="<?php the_permalink(); ?>" class="tile tile--black">
						<span class="tile__date"><?php the_date(); ?></span>
						<h2 class="h4 tile__title"><?php the_title(); ?></h2>
						<span class="tile__more-details">More Details</span>
					</a>
				<?php endwhile; ?>

			</div>

			<a href="<?php echo get_permalink(get_option('page_for_posts')); ?>" class="button space-below">More News</a>

		<?php endif; ?>

		<h2>Latest Videos</h2>

		<div class="home-videos">

			<?php $videos = sgc_youtube_get_latest_videos(3); ?>
			
			<?php foreach ($videos as $video): ?>
				<a href="https://youtube.com/watch?v=<?php echo $video->id->videoId ?>" class="home-videos__item">
					<img class="home-videos__item__thumb" src="<?php echo $video->snippet->thumbnails->medium->url; ?>" alt="">
					<span class="home-videos__item__name"><?php echo $video->snippet->title; ?></span>
				</a>
			<?php endforeach; ?>
		</div>

		<a href="https://www.youtube.com/channel/UCr9ZBVBy9DfGs-NAgL5gu1Q" class="button space-below">More Videos</a>

	</div>

	<div class="home-content__sidebar">
		<h2>Events</h2>

		<?php $events_query = event_getter_get_month_query(); ?>

		<?php if ($events_query->have_posts()): ?>
			
			<div class="tile-container tine-container--home">
				
				<?php while ($events_query->have_posts()): $events_query->the_post(); ?>
					<?php $event_info = event_getter_get_event_info(get_the_ID()); ?>

					<a href="<?php the_permalink(); ?>" class="tile tile--single">
						<span class="tile__date"><?php echo event_getter_get_event_range(get_the_ID()); ?></span>
						<h2 class="h4 tile__title"><?php the_title(); ?></h2>
						<span class="tile__more-details">More Details</span>
					</a>
				<?php endwhile; ?>
			
			</div>
		
		<?php else: ?>
			<p class="text-bold light-gray">Nothing coming up yet.</p>
		<?php endif; ?>

		<a href="<?php echo get_permalink(get_page_by_title('Calendar')); ?>" class="button">Full Calendar</a>
	</div>
</div>

<?php get_footer(); ?>