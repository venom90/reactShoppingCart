const path = require('path');
module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, './static/'),
        publicPath: './static/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        },{
            test : /\.jpg$/,
            exclude: /(node_modules)/,
            loader : 'file-loader'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
