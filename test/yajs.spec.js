import { expect } from 'chai';
import { Yajs } from '../lib/js/esm/yajs';
import { DOM, DOM_NO_ARROWS } from "./dom";

describe('Yajs', () => {
    let yajs, element, container, arrowLeft, arrowRight;

    before(() => {
        element = DOM.window.document.querySelector('[data-yajs]');
        container = DOM.window.document.querySelector('.yajs__container');
        arrowLeft = DOM.window.document.querySelector('.yajs__arrow--left');
        arrowRight = DOM.window.document.querySelector('.yajs__arrow--right');

        yajs = new Yajs(element);
    })

    describe('#constructor', () => {
        it('should save native element', () => {
            expect(yajs._nativeElement).to.equal(element);
        });

        it('should save container', () => {
            expect(yajs._container.nativeElement).to.equal(container);
        });

        it('should save arrow left', () => {
            expect(yajs._arrowLeftNativeElement).to.equal(arrowLeft);
        });

        it('should save arrow right', () => {
            expect(yajs._arrowRightNativeElement).to.equal(arrowRight);
        });

        it('should throw if no element defined', () => {
            expect(() => new Yajs(null)).to.throw().with.property('message', 'Yajs element must be defined');
        });

        it('should throw if no arrows defined', () => {
            expect(() => new Yajs(DOM_NO_ARROWS.window.document.querySelector('[data-yajs]'))).to.throw().with.property('message', 'Arrows must be defined');
        });
    });
});
