const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './index.js',
    mode: "development",
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new MiniCssExtractPlugin()
    ],
}