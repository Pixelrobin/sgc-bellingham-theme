<?php
	global $post;
	$post_slug  = $post->post_name;

	global $script_name;

	if ($script_name == NULL) $script_name = 'global';

	$stream_link = sgc_youtube_is_streaming();
?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri() ?>/media/icons/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri() ?>/media/icons/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri() ?>/media/icons/favicon-16x16.png">
	<link rel="manifest" href="<?php echo get_template_directory_uri() ?>/media/icons/site.webmanifest">
	<link rel="mask-icon" href="<?php echo get_template_directory_uri() ?>/media/icons/safari-pinned-tab.svg" color="#5bbad5">
	<link rel="shortcut icon" href="<?php echo get_template_directory_uri() ?>/media/icons/favicon.ico">
	<meta name="msapplication-TileColor" content="#00aba9">
	<meta name="msapplication-config" content="<?php echo get_template_directory_uri() ?>/media/icons/browserconfig.xml">
	<meta name="theme-color" content="#ffffff">

	<link href="https://fonts.googleapis.com/css?family=Asap:400,400i,600" rel="stylesheet">
	
	<script type="text/javascript" src="<?php echo get_template_directory_uri() ?>/assets/scripts/<?php echo $script_name ?>.js"></script>

	<?php wp_head(); ?>
</head>

<body>
	<div id="mobile-nav-height"></div>

	<div id="wrapper">
		<div id="pre-footer">
			<header>

				<?php if ($stream_link): ?>
					<div id="top-notification" class="top-notification">
						<a href="<?php echo $stream_link; ?>">We're Live! Click to watch now on YouTube.</a>
						<button id="top-notification__close" class="top-notification__close button--reset" aria-label="Close notification">
							<span class="feather" data-feather="x"></span>
						</button>
					</div>
				<?php endif; ?>

				<nav id="main-nav" class="clearfix main-nav">
					
					<div class="main-nav__icons">
						<a href="<?php echo get_home_url(); ?>">
							<img src="<?php echo get_template_directory_uri() . '/media/logo-nav.svg' ?>" class="main-nav__logo">
						</a>

						<span id="main-nav__toggle" class="main-nav__toggle feather" data-feather="menu" role="button"></span>
					</div>
					
					<ul class="main-nav__links">
						<?php wp_nav_menu(
							array(
								'theme_location' => 'header',
								'container'      => '',
								'menu_class'     => '',
								'depth'          => 2,
								'items_wrap'     => '%3$s'
							)
						); ?>
					</ul>
				</nav>
			</header>