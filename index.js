
import './polyfill';
class Lazyload {
    constructor(options){
        this.setting = Object.assign({}, { 
            src: 'data-src', 
            selector: '.lazyload'
        }, options);
        this.images = document.querySelectorAll(this.setting.selector)
        this.observer = null;
        this._init();
    }

    _init(){
        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const target = entry.target
                if (entry.intersectionRatio > 0) {
                    const src = target.getAttribute(this.setting.src)
                    if ('img' === target.tagName.toLowerCase()) {
                        target.src = src
                        target.removeAttribute(this.setting.src)
                    } else {
                        target.style.backgroundImage = `url(${src})`
                    }
                    this.observer.unobserve(target)
                }
            })
        });
        this.images.forEach(image => {
            this.observer.observe(image)
        })
    }

    update(){
        this.images = document.querySelectorAll(this.setting.selector);
        this.images.forEach(image => this.observer.observe(image))
    }
}

export {Lazyload};