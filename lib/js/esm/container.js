export class Container {
    constructor(containerElement) {
        this._nativeElement = containerElement;
        if (!this._nativeElement) {
            throw new Error('Container element must be defined');
        }

        this._startX = undefined;
        this._scrollLeft = undefined;
        this._scrolling = false;

        this._bindEvents();
    }

    get nativeElement() {
        return this._nativeElement;
    }

    arrowScroll(scrollStep) {
        const childCoefficient = Array.prototype.slice.call(this._nativeElement.querySelector(':scope > *')).length > 5 ? 2 : 1;
        let scrollAmount = 1;

        const slideTimer = setInterval(() => {
            this._scrollLeft = this._nativeElement.scrollLeft += scrollStep;

            scrollAmount += scrollStep;
            scrollStep += scrollStep / scrollAmount;
            if (scrollAmount >= (296 * childCoefficient)) {
                clearInterval(slideTimer);
            }
        }, 5);
    }

    _manualStartScrolling(pageX) {
        this._scrolling = true;
        this._nativeElement.classList.add('yajs__container--scrolling');
        this._startX = pageX -this._nativeElement.offsetLeft;
        this._scrollLeft = this._nativeElement.scrollLeft;
    }

    _manualStopScrolling() {
        this._scrolling = false;
        this._nativeElement.classList.remove('yajs__container--scrolling');
    }

    _manualScrolling(pageX) {
        const x = pageX - this._nativeElement.offsetLeft;
        const walk = (x - this._startX) * 3;
        this._nativeElement.scrollLeft = this._scrollLeft - walk;
    }

    _bindEvents() {
        this._nativeElement.addEventListener('mouseup', () => {
            this._manualStopScrolling();
        });

        this._nativeElement.addEventListener('mouseleave', () => {
            this._manualStopScrolling();
        });

        this._nativeElement.addEventListener('mousedown', (event) => {
            this._manualStartScrolling(event.pageX);
        });

        this._nativeElement.addEventListener('mousemove', (event) => {
            if (!this._scrolling) {
                return;
            }

            event.preventDefault();
            this._manualScrolling(event.pageX);
        });
    }
}