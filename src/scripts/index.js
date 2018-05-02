import './deps/global.js';
import { getLatestVideo } from './deps/youtubeClient';
import Tinyshow from './deps/tinyshow';

document.addEventListener("DOMContentLoaded", () => {
	
	// 3D Scroll effect
	
	const mountainsBack = document.getElementById('mountains-back');
	const mountainsFront = document.getElementById('mountains-front');

	let ticking = false;

	function setMountainParallax() {
		const scrollPos = window.scrollY;

		mountainsBack.setAttribute('transform', `translate(0, ${scrollPos * 0.3})`);
		mountainsFront.setAttribute('transform', `translate(0, ${scrollPos * 0.15})`);
		ticking = false;
	}

	window.addEventListener('scroll', (e) => {
		if (!ticking) window.requestAnimationFrame(setMountainParallax);
		ticking = true;
	});

	// Youtube stuff

	getLatestVideo((data) => {
		const id = data.id.videoId;
		const img = `https://img.youtube.com/vi/${ id }/maxresdefault.jpg`;
		const title = data.snippet.title;
	
		const thumbnail = document.getElementById('latest-service');
		const name      = document.getElementById('latest-service__name');
		const link      = document.getElementById('latest-service__link');
	
		console.log(data);
	
		thumbnail.style['background-image'] = `url(${ img })`;
		link.href = `https://www.youtube.com/watch?v=${ id }`;
		name.innerText = title;
	});

	// Slideshow

	let show = new Tinyshow(document.getElementById('heading__slideshow'), {
		autoDelay: 5000,
		class: 'heading__slideshow__slide--current'
	});
});