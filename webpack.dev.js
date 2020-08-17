const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:"./src/ts/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist/client/js'),
        filename: "js/index.js"
    },
    mode: "development",
    devServer: {
        inline: true,
        contentBase: './dist/client',
        watchContentBase: true,
        // https: true,
        // host: '0.0.0.0',
        port: 1337, //8080
        open: true,
        // useLocalIp: true,
        // bonjour: true,
        // disableHostCheck: true,
        watchOptions: {
            poll: true,
            ignored: /node_modules/
        }
    },
    module:{
        rules: [
            {
                test:/\.ts?$/,
                include: path.resolve(__dirname, 'src/ts'),
                exclude: /node_modules/,
                use: {
                    loader:"ts-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
};
