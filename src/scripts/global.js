import { checkIfStreaming } from './deps/youtubeClient';
import 'classlist-polyfill';

const phoneWidth = '480';

document.addEventListener("DOMContentLoaded", () => {

	console.log("ontouchstart" in document.documentElement);

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
		nav.classList.toggle('main-nav--expanded');
	});
	
	const dropdowns = Array
		.from(nav.querySelectorAll('.menu-item-has-children'))
		.map(element => {
			return {
				element: element,
				deactivateTimeout: -1,
				clickDebounceTimeout: -1,
				clickDebounce: false
			}
		});

	dropdowns.forEach((dropdown) => {

		const activate = () => {
			clearTimeout(dropdown.deactivateTimeout);
			dropdown.element.classList.add('active');
		}

		const deactivate = () => {
			clearTimeout(dropdown.deactivateTimeout);

			dropdown.deactivateTimeout = setTimeout(() => {
				dropdown.element.classList.remove('active');
				dropdown.element.classList.add('deactivate');
			}, 500);
		}

		const clearDebounce = () => {
			dropdown.clickDebounce = false;
			clearTimeout(dropdown.clickDebounceTimeout);
		}

		const setDebouce = () => {
			clearDebounce();

			dropdown.clickDebounce = true;

			dropdown.clickDebounceTimeout = setTimeout(e => {
				dropdown.clickDebounce = false;
			}, 250);
		}

		dropdown.element.addEventListener('mouseenter', e => {
			if (window.innerWidth > phoneWidth) {
				setDebouce();
				activate();
			}
		});

		dropdown.element.addEventListener('mouseleave', e => {
			if (window.innerWidth > phoneWidth) {
				clearDebounce();
				deactivate();
			}
		});
		
		dropdown.element.addEventListener('focusout', e => {
			if (window.innerWidth > phoneWidth) {
				if (!dropdown.element.contains(e.relatedTarget)) deactivate();
			}
		});

		const dropdownAnchor = dropdown.element.getElementsByTagName('a')[0];

		dropdownAnchor.addEventListener('click', e => {
			e.preventDefault();
			if (!dropdown.clickDebounce)
				dropdown.element.classList.toggle('active');
		});
	});
});