import './global.js';
import { getLatestVideo, checkIfStreaming } from './deps/youtubeClient';
import Tinyshow from './deps/tinyshow';

/*
document.addEventListener("DOMContentLoaded", () => {

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

	const show = new Tinyshow(document.getElementById('heading__slideshow'), {
		autoDelay: 5000,
		slideClass: 'heading__slideshow__slide',
		currentClass: 'heading__slideshow__slide--current'
	});

	const previousButton = document.getElementById('heading__slideshow__left');
	const nextButton     = document.getElementById('heading__slideshow__right');

	previousButton.addEventListener('click', () => { show.changeSlide(-1); });
	nextButton.addEventListener('click', () => { show.changeSlide(1); });
});*/