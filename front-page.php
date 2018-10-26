<?php
	// Global setup
	global $script_name;
	$script_name = 'index';
?>

<?php get_header(); ?>

<div class="home-hero space-below">
	<div class="home-hero__content">
		<h1><?php echo get_bloginfo('name'); ?></h1>
		<p class="h4"><?php echo get_bloginfo('description'); ?></p>

		<a href="#" class="button">When & Where</a>
		<a href="#" class="button">Our Story</a>
	</div>

	<img src="<?php echo get_template_directory_uri() . '/media/hero.jpg' ?>" alt="The front of Slavic Gospel Church on a sunny day, with people walking through the front door from a parking lot.">
</div>

<div class="home-content space-below">
	<div class="home-content__main">
		<?php $news_query = sgc_theme_home_posts_query() ?>

		<?php if ($news_query->have_posts()): ?>

			<h2>Latest News</h2>

			<div class="home-news space-below">

				<?php while ($news_query->have_posts()): $news_query->the_post(); ?>
					<a class="home-news__item" href="#">
						<span class="home-news__item__date"><?php the_date(); ?></span>
						<span class="h3"><?php the_title(); ?></span>
					</a>
				<?php endwhile; ?>

				<a href="#" class="button">More News</a>

			</div>

		<?php endif; ?>

		<h2>Latest Videos</h2>

		<div class="home-videos space-below">

			<?php $videos = sgc_youtube_get_latest_videos(3); ?>
			
			<?php foreach ($videos as $video): ?>
				<a href="#" class="home-videos__item">
					<img class="home-videos__item__thumb" src="<?php echo $video->snippet->thumbnails->medium->url; ?>" alt="">
					<span class="home-videos__item__name"><?php echo $video->snippet->title; ?></span>
				</a>
			<?php endforeach; ?>
		</div>

	</div>

	<div class="home-content__sidebar">
		<h2>Events</h2>

		<?php $events_query = sgc_event_get_upcoming_query(4); ?>

		<?php if ($events_query->have_posts()): ?>
			
			<div class="events events--home">
				
				<?php while ($events_query->have_posts()): $events_query->the_post(); ?>
					<?php $event_info = sgc_event_get_event_info(get_the_ID()); ?>

					<div class="events__item">
						<span class="events__item__date"><?php echo $event_info['date']; ?></span>
						<br>
						<a href="#" class="events__item__title"><?php echo get_the_title();?></a>
						<br>
						<span class="events__item__time"><?php echo sgc_theme_get_event_time_range($event_info); ?></span>
					</div>
				<?php endwhile; ?>
			
			</div>
		
		<?php else: ?>
			<p class="text-bold light-gray">Nothing coming up yet.</p>
		<?php endif; ?>

		<a href="#" class="button">Full Calendar</a>
	</div>
</div>

<?php get_footer(); ?>