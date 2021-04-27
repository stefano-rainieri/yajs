import { Container } from './container';

export class Yajs {
    constructor(yajsElement) {
        this._nativeElement = yajsElement;
        if (!yajsElement) {
            throw new Error('Yajs element must be defined');
        }

        this._arrowLeftNativeElement = this._nativeElement.querySelector('.yajs__arrow--left');
        this._arrowRightNativeElement = this._nativeElement.querySelector('.yajs__arrow--right');
        if (!this._arrowLeftNativeElement || !this._arrowRightNativeElement) {
            throw new Error('Arrows must be defined');
        }

        this._container = new Container(this._nativeElement.querySelector('.yajs__container'));
        if (this._container.nativeElement.scrollWidth <= this._container.nativeElement.clientWidth) {
            this._arrowLeftNativeElement.classList.add('yajs__arrow--hidden');
            this._arrowRightNativeElement.classList.add('yajs__arrow--hidden');
        }

        this._autoplay = undefined;

        this._startAutoscroll();
        this._bindEvents();
    }

    _startAutoscroll() {
        if (!this._container.nativeElement.scrollTo) {
            return;
        }

        this._autoplay = setInterval(() => {
            if (this._container.nativeElement.scrollWidth - this._container.nativeElement.clientWidth > this._container.nativeElement.scrollLeft + 2) {
                this._container.arrowScroll(10);

                return;
            }

            try {
                this._container.nativeElement.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                });
            } catch (err) {
                this._container.nativeElement.scrollTo(0, 0);
            }
        }, 5000);
    }

    _stopAutoscroll() {
        if (this._autoplay) {
            clearInterval(this._autoplay);
        }
    }

    _bindEvents() {
        this._nativeElement.addEventListener('mouseover', () => {
            this._stopAutoscroll();
        });

        this._nativeElement.addEventListener('mouseout', () => {
            this._startAutoscroll();
        });

        this._arrowLeftNativeElement.addEventListener('click', () => {
            this._container.nativeElement.arrowScroll(-10);
        });

        this._arrowRightNativeElement.addEventListener('click', () => {
            this._container.nativeElement.arrowScroll(10);
        });
    }
}
