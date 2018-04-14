<?php get_header(); ?>

	<section id="heading">
		<div id="heading__slideshow"></div>
		<div id="heading__events">
			<h1 class="h2">Upcoming Events</h1>
			<ul>
				<li>
					<p>3/27</p>
					<h2><a href="#">Remember to do the thing</a></h2>
				<li>

				<li>
					<p>4/21</p>
					<h2><a href="#">Don't forget this other thing</a></h2>
				<li>
			</ul>

			<a href="#">Calendar</a>
		</div>
	</section>

	<section id="general-info" class="clearfix">
		<div class="general-info__item-container">
			<div class="general-info__item">
				<h1 class="h2">Location</h1>
				<p>
					276 Harvest Way,<br>
					Lynden, WA 98226
				</p>
			</div>

			<div class="general-info__item">
				<h1 class="h2">Sunday Service</h1>
				<p>
					Morning: 10:00 AM<br>
					Evening: 6:00 PM<br>
					<a href="#">Full Schedule</a>
				</p>
			</div>
		</div>
	</section>

	<section id="big-links">
		<a href="#" class="big-link" style="background-image: url('https://source.unsplash.com/800x600?nature,water?a');">
			<div class="big-link__cover"></div>
			<div class="big-link__content">
				<span class="feather" data-feather="video"></span>
				<br>
				<span>Live Stream<span>
			</div>
		</a>

		<a href="#" class="big-link" style="background-image: url('https://source.unsplash.com/800x600/?nature,water?b');">
			<div class="big-link__cover"></div>
			<div class="big-link__content">
				<span class="feather" data-feather="calendar"></span>
				<br>
				<span>Calendar<span>
			</div>
		</a>

		<a href="#" class="big-link" style="background-image: url('https://source.unsplash.com/800x600/?nature,water?c');">
			<div class="big-link__cover"></div>
			<div class="big-link__content">
				<span class="feather" data-feather="film"></span>
				<br>
				<span>Video Archive<span>
			</div>
		</a>
	</section>
</div>

<script>feather.replace()</script>
<?php get_footer(); ?>