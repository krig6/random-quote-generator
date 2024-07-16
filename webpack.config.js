const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    cache: {
        type: 'filesystem',
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'The Sage Says...',
            filename: 'index.html',
            template: 'src/template.html'
        }),
    ],
}