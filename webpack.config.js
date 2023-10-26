const webpack = require('webpack');

module.exports = {
    name: 'woody_js',
    mode: 'production',
    stats: 'errors-only',
    entry: {
        'connect-client': './src/connect-client.js',
        thrift: './src/client/gen.js',
    },
    resolve: {
        extensions: ['.js'],
        fallback: {
            https: false,
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/',
            },
        ],
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        library: {
            name: 'woody_js',
            type: 'umd',
        },
    },
};
