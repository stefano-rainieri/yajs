const path = require('path');

module.exports = {
    entry: './lib/js/esm/index.js',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};