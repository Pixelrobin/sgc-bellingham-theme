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
						<span class="home-news__item__date">15 JAN 2019</span>
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

		<div class="home-events">
		
			<div class="home-events__item">
				<span class="home-events__item__date">15 JAN 2019</span>
				<br>
				<a href="#" class="home-events__item__title">Event Title</a>
				<br>
				<span class="home-events__item__time">6:00 PM - 8:00 PM</span>
			</div>

			<div class="home-events__item">
				<span class="home-events__item__date">15 JAN 2019</span>
				<br>
				<a href="#" class="home-events__item__title">Event Title</a>
				<br>
				<span class="home-events__item__time">6:00 PM - 8:00 PM</span>
			</div>

			<div class="home-events__item">
				<span class="home-events__item__date">15 JAN 2019</span>
				<br>
				<a href="#" class="home-events__item__title">Event Title is Really Long Yes</a>
				<br>
				<span class="home-events__item__time">6:00 PM - 8:00 PM</span>
			</div>

			<div class="home-events__item">
				<span class="home-events__item__date">15 JAN 2019</span>
				<br>
				<a href="#" class="home-events__item__title">Event Title</a>
				<br>
				<span class="home-events__item__time">6:00 PM - 8:00 PM</span>
			</div>

			<div class="home-events__item">
				<span class="home-events__item__date">15 JAN 2019</span>
				<br>
				<a href="#" class="home-events__item__title">Event Title</a>
				<br>
				<span class="home-events__item__time">6:00 PM - 8:00 PM</span>
			</div>
		
		</div>
	</div>
</div>

<?php get_footer(); ?>