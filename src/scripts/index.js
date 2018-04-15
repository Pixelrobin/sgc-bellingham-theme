import './deps/global.js';
import onInteractive from './deps/onInteractive.js';

onInteractive(() => {
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
});