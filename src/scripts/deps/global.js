document.addEventListener("DOMContentLoaded", () => {
	const sgc = document.getElementById("header__logo__sgc");

	var lastSize = 0;
	var ticking = false;

	function handleResize() {
		const width = window.innerWidth;
		if (width < 580) {
			if (sgc.innerText !== "SGC") sgc.innerText = "SGC";
		} else if (sgc.innerText !== "Slavic Gospel Chruch") {
			sgc.innerText = "Slavic Gospel Church";
		}
	}

	window.addEventListener('resize', function(e) {
			if (!ticking) {
				window.requestAnimationFrame(function() {
				handleResize();
				ticking = false;
			});
			ticking = true;
		}
	});
});