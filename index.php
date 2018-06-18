<?php get_header(); ?>
	<?php if (have_posts()): while (have_posts()): the_post(); ?>

		<section class="blog-post mb-4 p-0">
			<article>
				<div class="blog-post__image">
					<?php if (has_post_thumbnail()): ?>
						<?php the_post_thumbnail('medium_large'); ?>
						<div class="blog-post__image__cover"></div>
					<?php endif; ?>

					<div class="blog-post__heading white">
						<a href="<?php the_permalink(); ?>" class="link-inherit"><h1><?php the_title() ?></h1></a>
						
						<dl>
							<dt>Posted on</dt>
							<dd><?php the_date(); ?></dd>
						</dl>
					</div>
				</div>

				<div class="p-2">
					
					<?php if (is_singular()): ?>
						<?php the_content(); ?>
					<?php else: ?>
						<?php the_excerpt(); ?>

						<br>
						<div class="text-centered">
							<a href="<?php the_permalink(); ?>" class="button">Read more</a>
						</div>
					<?php endif; ?>
				</div>
			</article>
		</section>

	<?php endwhile; else: ?>
		<h1>Nothing Found</h1>
<?php endif; ?>
<?php get_footer(); ?>