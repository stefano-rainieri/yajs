import { Yajs } from './yajs';

document.addEventListener('DOMContentLoaded', () => Array
    .prototype
    .slice
    .call(document.querySelectorAll('[data-yajs]'))
    .forEach((element) => new Yajs(element))
);
