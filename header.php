<?php
	global $post;
	$post_slug  = $post->post_name;
	$post_title = $post->post_title;

	global $script_name;

	if ($script_name == NULL) $script_name = 'global';
?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta name="viewport" content="width=device-width, inital-scale=1">

	<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/dist/styles/main.css">
	<link href="https://fonts.googleapis.com/css?family=Fira+Sans:600|Open+Sans&amp;subset=cyrillic" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Roboto:500" rel="stylesheet">
	<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
	
	<script type="text/javascript" src="<?php echo get_template_directory_uri() ?>/dist/scripts/<?php echo $script_name ?>.js"></script>
</head>

<body>
	<div id="wrapper">
		<div id="pre-footer">
			<header>
				<div
					id="header-hero"
					class="<?php if ($post_slug == 'home') echo 'home' ?>"
					style="background-image: url(<?php echo get_template_directory_uri();?>/media/mountain-range.jpg); padding: <?php echo is_front_page() ? 5 : 2; ?>rem"
				>

					<a href="<?php get_home_url(); ?>"><img src="<?php echo get_template_directory_uri()?>/media/logo.svg" alt="Slavig Gospel Church logo." id="header-hero__logo"></a>
				</div>

					<nav id="main-nav">
						<div id="main-nav__title"><?php echo $post_title ?></div>
						<ul class="clearfix">
							<li id="main-nav__toggle"><span class="feather" data-feather="menu"></span></li>

							<?php wp_nav_menu(
								array(
									'menu'        => 'header',
									'container'   => '',
									'menu_class'  => '',
									'depth'       => 1,
									'items_wrap'  => '%3$s',
									'link_before' => '<span>',
									'link_after'  => '</span>'
								)
							); ?>
						</ul>
					</nav>
				
			</header>

			<div class="page">