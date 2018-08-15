<?php
	global $post;
	$post_slug  = $post->post_name;

	global $script_name;
	global $page_name;

	if ($script_name == NULL) $script_name = 'global';
?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/dist/styles/main.css">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&amp;subset=cyrillic" rel="stylesheet">
	<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
	
	<script type="text/javascript" src="<?php echo get_template_directory_uri() ?>/dist/scripts/<?php echo $script_name ?>.js"></script>
</head>

<body>
	<div id="wrapper">
		<div id="pre-footer">
			<header>
				<?php if ($post_slug == 'home'): ?>
					<div
						id="header-hero"
						style="<?php echo 'background-image: url(' . get_template_directory_uri() . '/media/mountain-range.jpg);' ?>"
					>

						<a href="<?php get_home_url(); ?>"><img src="<?php echo get_template_directory_uri()?>/media/logo.svg" alt="Slavic Gospel Church logo." id="header-hero__logo"></a>
					</div>
				<?php endif; ?>

				

				<nav id="main-nav" class="<?php echo ($post_slug == 'home') ? 'main-nav--home' : '' ?>">
					<?php if ($page_name != NULL): ?><div id="main-nav__title"><?php echo $page_name; ?></div><?php endif ?>

					<?php if ($post_slug != 'home'): ?>
						<a href="<?php echo get_home_url(); ?>">
							<div id="header-mini-logo">
								<img src="<?php echo get_template_directory_uri() . '/media/logo-nav.svg' ?>">
								<span>SGC</span>
							</div>
						</a>
					<?php endif; ?>
					
					<span id="main-nav__toggle" class="feather" data-feather="menu" role="button"></span>

					<ul class="clearfix">
						<?php wp_nav_menu(
							array(
								'menu'        => 'header-menu',
								'container'   => '',
								'menu_class'  => '',
								'depth'       => 2,
								'items_wrap'  => '%3$s',
								'link_before' => '<span>',
								'link_after'  => '</span>'
							)
						); ?>
					</ul>

					<a id="live-now" href="#"><span>Live Now</span></a>
				</nav>
			</header>

			<div class="page">