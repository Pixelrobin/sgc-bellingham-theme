const onInteractive = (callback) => {
	document.addEventListener('readystatechange', (e) => {
		if (e.target.readyState === 'interactive') {
			callback();
		}
	});
}

export default onInteractive;