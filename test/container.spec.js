import { expect } from 'chai';
import { DOM } from "./dom";
import { Container } from "../lib/js/esm/container";

describe('Container', () => {
    let container, element;

    before(() => {
        element = DOM.window.document.querySelector('.yajs__container');

        container = new Container(element);
    })
    describe('#constructor', () => {
        it('should save native element', () => {
            expect(container._nativeElement).to.equal(element);
        });

        it('should init startX', () => {
            expect(container._startX).to.equal(undefined);
        });

        it('should init scrollLeft', () => {
            expect(container._scrollLeft).to.equal(undefined);
        });

        it('should init scrolling', () => {
            expect(container._scrolling).to.equal(false);
        });

        it('should throw if no container defined', () => {
            expect(() => new Container(null)).to.throw().with.property('message', 'Container element must be defined');
        });
    });
});