<?php get_header(); ?>

<?php if (have_posts()): the_post(); ?>

<article>
	<?php if (get_post_type() === 'post'): ?>
		<span class="post-date text-centered"><?php the_date(); ?></span>
	<?php endif; ?>

	<h1 class="text-centered"><?php the_title(); ?></h1>

	<div class="page">
		<?php the_content(); ?>
	</div>
</article>

<?php endif; ?>

<?php get_footer(); ?>