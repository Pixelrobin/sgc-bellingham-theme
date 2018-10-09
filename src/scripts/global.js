//import { checkIfStreaming } from './deps/youtubeClient';
import 'classlist-polyfill';
import Dropdown from './deps/dropdown.js';

document.addEventListener("DOMContentLoaded", () => {

	const sgc       = document.getElementById("header__logo__sgc");
	
	
	// --- Logo ---

	/*var lastSize = 0;
	var ticking = false;

	function handleResize() {
		const width = window.innerWidth;
		if (width < 580) {
			if (sgc.innerText !== "SGC") sgc.innerText = "SGC";
		} else if (sgc.innerText !== "Slavic Gospel Chruch") {
			sgc.innerText = "Slavic Gospel Church";
		}
	}

	window.addEventListener('resize', e => {
			if (!ticking) {
				window.requestAnimationFrame(function() {
				handleResize();
				ticking = false;
			});

			ticking = true;
		}
	});*/

	
	// --- Youtube ---

	/*checkIfStreaming(data => {
		if (data.streaming) {
			const navUL = nav.getElementsByTagName('ul')[0];

			const item   = document.createElement('li');
			const anchor = document.createElement('a');
			const span   = document.createElement('span');

			span.innerText = 'Live Now';
			anchor.href    = 'https://www.youtube.com/watch?v=' + data.id;
			item.className = 'menu-item live';

			anchor.appendChild(span);
			item.appendChild(anchor);
			
			navUL.insertBefore(item, navToggle.nextElementSibling);

			navToggle.classList.add('live');
		}
	});*/

	
	// --- Nav ---

	const nav       = document.getElementById('main-nav');
	const navToggle = document.getElementById('main-nav__toggle');

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