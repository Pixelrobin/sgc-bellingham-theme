<?php get_header(); ?>

	<section id="heading">
		<div id="heading__slideshow">
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
						<div class="heading__slideshow__slide__content">
							<h1><?php the_title(); ?></h1>
							<a href="#" class="button button--white">Read more</a>
						</div>
					</div>
				
				<?php endwhile; ?>
			<?php endif ?>
		</div>
	</section>

	<section class="flex-row home-row">
		<div id="latest-service" href="#" class="flex-row__item video-thumbnail mb-1" style="flex-basis: 33%;">
			<div class="video-thumbnail__cover"></div>
			<div class="video-thumbnail__content">
				<span class="feather" data-feather="play"></span>
				<br>
				<h1>Latest Video</h1>
				<p id="latest-service__name" class="text-caption mb-1">Video name goes here</p>
				<a id="latest-service__link" class="button button--white">Watch now</a>
			</div>
		</div>

		<div class="flex-row__item mb-1">
			<h1 class="mb-1">Upcoming events</h1>

			<div class="subtle-card mb-1">
				<p class="text-caption">May 10</p>
				<a href="#" class="black-link"><h2 class="m-0">Lorem Ipsum</h2></a>
			</div>

			<div class="subtle-card mb-1">
				<p class="text-caption">May 15</p>
				<a href="#" class="black-link"><h2 class="m-0">Sit Amet</h2></a>
			</div>

			<div class="subtle-card mb-1">
				<p class="text-caption">May 15</p>
				<a href="#" class="black-link"><h2 class="m-0">But this title is much longer, haha!</h2></a>
			</div>

			<a href="#" class="button">Full Calendar</a>
		</div>
	</section>

	<section class="text-centered pt-2 pb-2 mb-1">
		<h1 class="h2">
			276 Harvest Way,<br>
			Lynden, WA 98226
		</h1>

		<a href="#" class="button m-0">View on map</a>
	</section>


	<section>
		<h1 class="text-centered mb-1">Times</h1>
		<div class="flex-row home-times">
			<div class="flex-row__item mb-1 text-centered">
				<h1 class="h2">Sunday</h1>
				
				<p>
					Morning: <span class="text-bold">10:00 AM</span><br>
					Evening: <span class="text-bold">6:00 PM</span><br>
				</p>
			</div>

			<div class="flex-row__item mb-1 text-centered">
				<h1 class="h2">Monday</h1>
				
				<p>
					Main Choir: <span class="text-bold">7:00 PM</span><br>
					Prayer: <span class="text-bold">7:00 PM</span><br>
				</p>
			</div>

			<div class="flex-row__item mb-1 text-centered">
				<h1 class="h2">Tuesday</h1>
				
				<p>
					Youth Prayer: <span class="text-bold">7:15 PM</span><br>
				</p>
			</div>

			<div class="flex-row__item mb-1 text-centered">
				<h1 class="h2">Wednesday</h1>

				<p>
					Teen Bible School: <span class="text-bold">7:00 PM</span><br>
					Bible Study: <span class="text-bold">7:00 PM</span><br>
					Youth Choir: <span class="text-bold">7:30 PM</span><br>
				</p>
			</div>

			<div class="flex-row__item mb-1 text-centered">
				<h1 class="h2">Thursday</h1>
				
				<p>
					Prayer Service: <span class="text-bold">7:00 PM</span><br>
					Russian School: <span class="text-bold">7:00 PM</span><br>
				</p>
			</div>

			<div class="flex-row__item mb-1 text-centered">
				<h1 class="h2">Friday</h1>
				
				<p>
					Youth Service: <span class="text-bold">7:00 PM</span><br>
				</p>
			</div>
		</div>
	</section>
</div>

<script>feather.replace()</script>
<?php get_footer(); ?>