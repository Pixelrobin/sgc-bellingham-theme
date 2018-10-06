const phoneWidth = '480';

export default class Dropdown {
	constructor(element, openCallback) {
		this.element              = element;
		this.deactivateTimeout    = -1;
		this.clickDebounceTimeout = -1;
		this.clickDebounce        = false;
		this.openCallback       = openCallback;

		element.addEventListener('mouseenter', e => {
			if (window.innerWidth > phoneWidth) {
				this.setDebouce();
				this.open();
			}
		});

		element.addEventListener('mouseleave', e => {
			if (window.innerWidth > phoneWidth) {
				this.clearDebounce();
				this.close();
			}
		});
		
		element.addEventListener('focusout', e => {
			if (window.innerWidth > phoneWidth) {
				if (!element.contains(e.relatedTarget)) this.close();
			}
		});

		const dropdownAnchor = element.getElementsByTagName('a')[0];

		dropdownAnchor.addEventListener('click', e => {
			e.preventDefault();
			if (!this.clickDebounce) this.toggle();
		});
	}

	open() {
		clearTimeout(this.deactivateTimeout);
		this.element.classList.add('active');

		if (typeof this.openCallback === 'function') this.openCallback(this);
	}

	close(force) {
		clearTimeout(this.deactivateTimeout);
		clearTimeout(this.clickDebounceTimeout);

		if (force) {
			this.element.classList.remove('active');
			this.element.classList.add('deactivate');
		} else {
			this.deactivateTimeout = setTimeout(() => {
				this.element.classList.remove('active');
				this.element.classList.add('deactivate');
			}, 2000);
		}
	}

	toggle() {
		this.element.classList.toggle('active');
	}

	clearDebounce() {
		this.clickDebounce = false;
		clearTimeout(this.clickDebounceTimeout);
	}

	setDebouce() {
		this.clearDebounce();

		this.clickDebounce = true;

		this.clickDebounceTimeout = setTimeout(e => {
			this.clickDebounce = false;
		}, 250);
	}
}