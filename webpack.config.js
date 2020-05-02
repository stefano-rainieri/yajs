const path = require('path');

module.exports = {
    entry: {
        esm: [
            './lib/js/esm/index.js',
            './lib/css/index.js',
        ],
        umd: [
            './lib/js/umd/index.js',
            './lib/css/index.js',
        ],
    },
    output: {
        filename: 'main.[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },
        ],
    },
};