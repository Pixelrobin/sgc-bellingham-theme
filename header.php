<!DOCTYPE html>
<html lang="en">

<head>
	<meta name="viewport" content="width=device-width, inital-scale=1">

	<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/dist/styles/main.css">
	<link href="https://fonts.googleapis.com/css?family=Fira+Sans:600|Open+Sans&amp;subset=cyrillic" rel="stylesheet">
	<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
	<script type="text/javascript" src="<?php echo get_template_directory_uri()?>/dist/scripts/index.js"></script>
</head>

<body>
	<div id="wrapper">
		<header>
			<!--<div id="header-bg" style="background-image: url(<?php echo get_template_directory_uri();?>/media/mountain-range.jpg);">
				<div class="header__logo clearfix">
					<img src="<?php echo get_template_directory_uri()?>/media/logo.svg">
					<h1 id="header__logo__sgc">Slavic Gospel Church</h1>
					<br>
					<h2>Bellingham, WA</h2>
				</div>
			</div>-->

			<div id="header-hero">
				<svg id="header-mountains" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 895" preserveAspectRatio ="xMinYMid slice">
					<defs>
						<clipPath id="mountains-front-path">
						<path d="M0,439.05,218.76,564.66l13.75,4.2h5.34l16,6.49,3.43,2.29L289,586.8h5l2.3,2.68,7.63,2.67h2.67a17.28,17.28,0,0,0,7.26,2.67H318c3.85,4,11.07,1.91,11.07,1.91,5.77.84,8,4.58,8,4.58h3.81a16.88,16.88,0,0,0,9.17,2.29l8.78,3.06c6.37-3.85,7.25,1.91,7.25,1.91l7.26,1.91c.84-1.57,4.2.76,4.2.76,4.81-3.61,6.1,1.14,6.1,1.14l3.06,1.91h3.05l3.82,2.29,28.63,7.64c3.39-1.9,3.82,0,3.82,0,3.59-3.59,5.73,2.67,5.73,2.67,33.69,9.24,55,16,55,16,47.28,14.67,69.48,15.27,69.48,15.27,42.39,10.87,83.61,26,83.61,26,29.35,4.35,81.7,7.64,81.7,7.64,3-5.34,9.93-5,9.93-5v5.35C837.91,705.33,905.21,743,905.21,743c28.7,9.57,45.44,20.24,45.44,20.24h3.43l3.06,2.29c50.73,24.51,102,58.73,136.29,71,12.3-13.89,53.45,16.42,53.45,16.42a493,493,0,0,1,51.55,12.6l5.34-.38c24.3-19,34.74-19.47,34.74-19.47l1.53-3.82,6.49,2.29c4.86-4.37,21-1.91,21-1.91l-.38-3.44,11.07-3.43,1.53,2.29a441.6,441.6,0,0,1,82.46,7.25l21-2.67,8.4,5,3.05,3.44L1414.9,846l9.54,5.72,4.58-1.91,1.53,1.53.76,3.06,4.59,4.58c25.88,11.28,42.8,36,62.23,35.5l.18.77H.38Z"/>
						</clipPath>
					</defs>

					<image id="mountains-back" xlink:href="<?php echo get_template_directory_uri();?>/media/mountain-range.jpg" x="0" y="0" width="1920px" height="896px"/>
					<image id="mountains-front" xlink:href="<?php echo get_template_directory_uri();?>/media/mountain-range.jpg" x="0" y="0" width="1920px" height="896px" clip-path="url(#mountains-front-path)"/>
				</svg>

				<div class="header__logo clearfix">
					<img src="<?php echo get_template_directory_uri()?>/media/logo.svg">
					<h1 id="header__logo__sgc">Slavic Gospel Church</h1>
					<br>
					<h2>Bellingham, WA</h2>
				</div>
			</div>

			
				<?php wp_nav_menu(
					array(
						'menu'       => 'header',
						'container'  => 'nav',
						'menu_class' => '',
						'menu_id'    => 'main-nav'
					)
				); ?>
			
		</header>

		<div class="page">