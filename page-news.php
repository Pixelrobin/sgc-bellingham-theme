<?php get_header(); ?>
<h1>Recent updates</h1>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	<article>
		<h2><?php the_title(); ?></h1>
		<p><?php the_excerpt(); ?></p>
	</article>
<?php endwhile; endif; ?>
<?php get_footer(); ?>