const jsdom = require('jsdom');
const { JSDOM } = jsdom;

export const DOM = new JSDOM(`
    <div class="yajs" data-yajs>
        <div class="yajs__arrow yajs__arrow--left"></div>
        <div class="yajs__container">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="yajs__arrow yajs__arrow--right"></div>
    </div>
`);

export const DOM_NO_CONTAINER = new JSDOM(`
    <div class="yajs" data-yajs>
        <div class="yajs__arrow yajs__arrow--left"></div>
        <div></div>
        <div></div>
        <div></div>
        <div class="yajs__arrow yajs__arrow--right"></div>
    </div>
`);

export const DOM_NO_ARROWS = new JSDOM(`
    <div class="yajs" data-yajs>
        <div class="yajs__container">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
`);