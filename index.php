<?php get_header(); ?>
	<?php $post_iterator = 0; ?>

	<?php if (have_posts()): while (have_posts()): the_post(); ?>
		<?php
			$thumb = has_post_thumbnail();
			$single = is_singular();
		?>

		<section class="blog-post <?php echo $thumb ? 'blog-post--with-thumbnail' : ''; ?> <?php echo $single ? '' : 'blog-post--preview'; ?>">
			<article>
				<?php if ($thumb): ?>
					<div class="blog-post__thumbnail" style="background-image: url(<?php the_post_thumbnail_url($single ? 'large' : 'medium_large'); ?>);"></div>
					<?php $post_iterator ++; ?>
				<?php endif; ?>

				<div class="blog-post__content">
					<h1><?php the_title(); ?></h1>
					<?php the_excerpt(); ?>
					<a href="<?php the_permalink(); ?>" class="button">Read More</a>
				</div>
			</article>
		</section>

	<?php endwhile; else: ?>
		<h1>Nothing Found</h1>
<?php endif; ?>
<?php get_footer(); ?>