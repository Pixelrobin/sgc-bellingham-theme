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
	<title><?php wp_title(); ?></title>

	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/dist/styles/main.css">
	<link href="https://fonts.googleapis.com/css?family=Asap:400,400i,600" rel="stylesheet">
	
	
	<script type="text/javascript" src="<?php echo get_template_directory_uri() ?>/dist/scripts/<?php echo $script_name ?>.js"></script>

	<?php wp_head(); ?>
</head>

<body>
	<div id="wrapper">
		<div id="pre-footer">
			<header>
				<nav id="main-nav" class="clearfix main-nav <?php echo ($post_slug == 'home') ? 'main-nav--home' : '' ?>">
					<!--<?php if ($page_name != NULL): ?><div id="main-nav__title"><?php echo $page_name; ?></div><?php endif ?>-->

					<div class="main-nav__icons">
						<a href="<?php echo get_home_url(); ?>">
							<img src="<?php echo get_template_directory_uri() . '/media/logo-nav.svg' ?>" class="main-nav__logo">
						</a>

						<span id="main-nav__toggle" class="main-nav__toggle feather" data-feather="menu" role="button"></span>
					</div>
					
					<ul class="main-nav__links">
						<?php wp_nav_menu(
							array(
								'menu'        => 'header-menu',
								'container'   => '',
								'menu_class'  => '',
								'depth'       => 2,
								'items_wrap'  => '%3$s'
								//'link_before' => '<span>',
								//'link_after'  => '</span>'
							)
						); ?>
					</ul>

					<!--<a id="live-now" href="#"><span>Live Now</span></a>-->
				</nav>
			</header>