const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', './dist/client/js/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist/client/js'),
        filename: 'js/bundle.js'
    },
    mode: "production\'",
    devServer: {
        inline: true,
        contentBase: './dist/client',
        // https: true,
        host: '0.0.0.0',
        port: 8080,
        open: true,
        // hot: true,
        // useLocalIp: true,
        // bonjour: true,
        disableHostCheck: true,
        // watchOptions: {
        //     poll: true
        // }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'dist/client/js'),
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
};
