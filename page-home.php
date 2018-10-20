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
		<h2>Latest News</h2>

		<div class="home-news space-below">

			<a class="home-news__item" href="#">
				<span class="home-news__date">15 JAN 2019</span>
				<br>
				<span class="h3">Kid's Camp Signups</span>
			</a>

			<a class="home-news__item" href="#">
				<span class="home-news__date">15 JAN 2019</span>
				<br>
				<span class="h3">Some Other News Item</span>
			</a>

			<a class="home-news__item" href="#">
				<span class="home-news__date">15 JAN 2019</span>
				<br>
				<span class="h3">Kid's Camp Signups</span>
			</a>

			<a class="home-news__item" href="#">
				<span class="home-news__date">15 JAN 2019</span>
				<br>
				<span class="h3">Kid's Camp Signups</span>
			</a>

		</div>

		<h2>Latest Videos</h2>

		<div class="home-videos space-below">
			
			<a href="#" class="home-videos__item">
				<img class="home-videos__item__thumb" src="https://source.unsplash.com/640x400/?church&a" alt="#">
				<span class="home-videos__item__name">October 11, 2018 | Thursday Service</span>
			</a>

			<a href="#" class="home-videos__item">
				<img class="home-videos__item__thumb" src="https://source.unsplash.com/640x400/?church&b" alt="#">
				<span class="home-videos__item__name">October 11, 2018 | Thursday Service</span>
			</a>

			<a href="#" class="home-videos__item">
				<img class="home-videos__item__thumb" src="https://source.unsplash.com/640x400/?church&c" alt="#">
				<span class="home-videos__item__name">October 11, 2018 | Thursday Service</span>
			</a>

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