var webpack = require('webpack');

module.exports = {
    entry: './index.js',

    output: {
        filename: 'bundle.js',
        path:''
    },
    module: {
        loaders: [
            {
                test:/\.scss$/,loaders:['style','css','sass']
            }
        ]
    }
}