<h1 align="center">
    <strong>YAJS</strong>
</h1>
<p align="center">
    YET ANOTHER JAVASCRIPT SLIDER ✨ Simple, lightweight, responsive slider carousel.<br/>
    Slide your photos, images, cards or whatever you want easier with this library.
</p>
<p align="center">
    <img src="https://raw.githubusercontent.com/stefano-rainieri/yajs/master/demo/demo.gif" height="150">
</p>

## Before
This library has no dependencies.
You only have to include a JS file.
It's built with webpack, so the CSS applied to the elements, is added via the bundled JS. 
This CSS is just in order to make the right positioning of the sliding elements.
No other rules will be applied (backgrounds, colors, shadows etc...).
Of course, you can add custom css to inside sliding elements, don't worry.


## Installation
Install Yajs with your favourite package manager:
```sh
$ yarn add @stefano-rainieri/yajs
```
or
```sh
$ npm install @stefano-rainieri/yajs --save
```

Include Yajs into your project, choosing `esm` or `umd` packaging:
```html
<script type="text/javascript" src="path/to/@stefano-rainieri/yajs/dist/main.[esm|umd].bundle.js"></script>
```
- `umd` package is es5-written. Compatible with majority of browsers
- `esm` package is es6-written. Compatible with modern browsers.


## Usage
Add Yajs markup to auto-configure the slider carousel for your element: 
```html
<div class="yajs" data-yajs>
    <div class="yajs__arrow yajs__arrow--left">&lt;</div>
    <div class="yajs__container">
        <div>your first element in the slider</div>
        <div>your second element in the slider</div>
        <div>your third element in the slider</div>
        <div>...</div>
        <div>your nth element in the slider</div>
    </div>
    <div class="yajs__arrow yajs__arrow--right">&gt;</div>
</div>
```
That's all. Enjoy!


## Examples
Try some Yajs examples simply opening `index.html` under `demo/` folder.


## Test
Run Yajs test:
```sh
$ yarn test
```


## Work in progress
- configure autoplay *(now it's fixed on and scroll every 5s)*
- configure autoplay delay *(now no delay is applied)*
- dynamically add style on construction


## Contributing
Contributions are welcome! Feel free to file an [ISSUE](https://github.com/stefano-rainieri/yajs/issues) or open a [PR](https://github.com/stefano-rainieri/yajs/pulls) for this repo.


## License
Yajs is licensed under the MIT License - see the [LICENSE](https://github.com/stefano-rainieri/yajs/blob/master/LICENSE) file for details.


*Free Software, Hell Yeah!*
