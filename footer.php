		</div>
		
		<footer class="<?php echo is_front_page() ? 'footer--home' : ''; ?>">
			<div class="footer-container">
				<div class="footer-columns">
					<div class="footer-columns__item">
						<h2>Location</h2>

						<p>
							<span class="text-bold">Slavic Gospel Church</span><br>
							276 Harvest Way,<br>
							Bellingham, WA 98226
						</p>

						<a href="https://goo.gl/maps/5vTvs2bz2b22" class="button button--white">View on Map</a>
					</div>

					<div class="footer-columns__item">
						<h2>Service Times</h2>

						<div class="footer-times">
							<p class="footer-times__item">
								<span class="text-bold">Sunday:</span><br>
								Morning Service: 10 AM<br>
								Evening Service: 5 PM
							</p>

							<p class="footer-times__item">
								<span class="text-bold">Thursday:</span><br>
								Prayer Service: 7:00 PM
							</p>

							<p class="footer-times__item">
								<span class="text-bold">Friday:</span><br>
								Youth Service: 7:30 PM
							</p>
						</div>

						<a href="<?php echo get_permalink(get_page_by_title('When & Where')); ?>" class="button button--white">More Times</a>
					</div>
				</div>

				<span>&copy; 2018</span>
			</div>
		</footer>
	</div>

	<?php wp_footer(); ?>
</body>