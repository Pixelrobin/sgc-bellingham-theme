export default class Tinyshow {
	constructor(element, options) {
		this.element = element;
		this.slides  = element.children;
		this.index   = -1;

		if (options.autoDelay && this.slides > 1)
			setInterval(() => { this.nextSlide() }, options.autoDelay);
		
		this.slideClass = options.class ? options.class : 'current';
		this.nextSlide();
	}

	nextSlide() {
		if (this.slides[this.index])
			this.removeClass(this.slides[this.index], this.slideClass);
		
		this.index ++;
		this.index = this.index % this.slides.length;

		this.addClass(this.slides[this.index], this.slideClass);
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