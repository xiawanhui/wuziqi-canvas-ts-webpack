
//loader是下载后直接使用，plugins是下载后引入再使用


const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    /**入口文件 */
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    /**出口文件 */
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'bulid')
    },
    /**loader翻译规则 */
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    /**执行顺序是从右向左，从下到上 */
                    /**下载style-loader和css-loader */
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    /**plugins插件 */
    plugins: [
        new HtmlWebpackPlugin({
            //复制一个html文件，并自动引入打包的所有资源
            template: './src/index.html'
        })

    ],
    /**mode模式 */
    mode: 'development'
}