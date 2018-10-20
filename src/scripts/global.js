//import { checkIfStreaming } from './deps/youtubeClient';
import 'classlist-polyfill';
import Dropdown from './deps/dropdown.js';
import feather from 'feather-icons';
const throttle = require('lodash/throttle');

document.addEventListener("DOMContentLoaded", () => {

	feather.replace();
	
	// --- Nav --- //

	const navHeight = document.getElementById('mobile-nav-height');
	const nav       = document.getElementById('main-nav');
	const navToggle = document.getElementById('main-nav__toggle');

	const mobileNavHeight = navHeight.clientHeight;
	let lastScrollPos = 0;

	const updateNav = (e) => {
		const currentScrollPos = window.pageYOffset;


		if (currentScrollPos > lastScrollPos) {
			if (currentScrollPos > mobileNavHeight) {
				document.body.classList.add('js-nav-hidden');
			}
		} else document.body.classList.remove('js-nav-hidden');

		if (currentScrollPos > mobileNavHeight) {
			nav.classList.add('main-nav--shadow');
		} else nav.classList.remove('main-nav--shadow');

		lastScrollPos = currentScrollPos;
	}

	window.addEventListener('scroll', throttle(updateNav, 100));

	navToggle.addEventListener('click', e => {
		document.body.classList.toggle('js-nav-open');
	});
	
	const dropdowns = Array
		.from(nav.querySelectorAll('.menu-item-has-children'))
		.map(element => { return new Dropdown(element, openedDropdown => {
			dropdowns.forEach(
				dropdown => {
					if (dropdown !== openedDropdown) {
						dropdown.close(true);
					}
				}
			)
		}) });
});