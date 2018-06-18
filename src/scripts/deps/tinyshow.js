export default class Tinyshow {
	constructor(element, options) {
		this.element = element;
		this.index   = -1;
		
		this.hoverOnPause = options.hoverOnPause === undefined ? true : options.hoverOnPause;
		this.hovering     = false;
		this.currentClass = options.currentClass ? options.currentClass : 'current';
		this.slides = options.slideClass
			? element.getElementsByClassName(options.slideClass)
			: element.children;

		if (options.autoDelay && this.slides.length > 1)
			setInterval(() => {
				if (this.hoverOnPause && !this.hovering) this.changeSlide()
			},
			options.autoDelay
		);
		
		if (this.hoverOnPause) {
			const enter = () => { this.hovering = true;  }
			const exit  = () => { this.hovering = false; }

			this.element.addEventListener('mouseenter', enter);
			this.element.addEventListener('mouseleave', exit);

			this.element.addEventListener('focusin', enter);
			this.element.addEventListener('focusout', exit);
		}
		
		this.changeSlide();
	}

	changeSlide(dir) {
		if (this.slides[this.index])
			this.removeClass(this.slides[this.index], this.currentClass);
		
		dir = dir ? dir : 1;
		this.index += dir;
		this.index = Math.abs(this.index % this.slides.length);

		this.addClass(this.slides[this.index], this.currentClass);
	}

	addClass(element, className) {
		if (typeof element.className === 'string') {
			if (element.className.indexOf(className) !== -1)
				this.removeClass(element, className);
			
			void element.offsetWidth;
			element.className += ' ' + className;
		}
	}

	removeClass(element, className) {
		if (element.className) {
			const regex = new RegExp(' ' + className, 'g');
			element.className = element.className.replace(regex, '');
		}
	}
}