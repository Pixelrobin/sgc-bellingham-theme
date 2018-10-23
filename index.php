<?php get_header(); ?>

<h1 class="post-title"><?php echo single_post_title(); ?></h1>

<div class="page space-below">
	<?php if (have_posts()): while(have_posts()): the_post(); ?>
		<article class="space-below">
			<header>
				<span class="post-date"><?php the_date(); ?></span>
				<a class="anchor--hidden" href="<?php the_permalink(); ?>"><h1><?php the_title(); ?></h1></a>
			</header>
			<?php the_content(); ?>
		</article>

	<?php endwhile; ?>

	<?php sgc_theme_previous_posts_link(); ?>
	<?php sgc_theme_next_posts_link(); ?>

	<?php endif; ?>
</div>

<?php get_footer(); ?>