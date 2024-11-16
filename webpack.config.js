const path=require('path');
const HtmlWebPackPlugin=require('html-webpack-plugin');
const { type } = require('os');
const { watchFile } = require('fs');

module.exports={
    mode:"development",
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist'),
        clean:true,
    },
    devtool:"eval-source-map",
    devServer:{
        watchFile:['./src/template.html'],
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:'./src/template.html',
        }),

    ],
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader'],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    devServer:{
        static:'./dist',
    },
};