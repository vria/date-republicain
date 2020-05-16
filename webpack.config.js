const path = require('path');

const webConfig = {
    context: path.resolve(__dirname, 'src'),
    entry: './date-republicain.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'date-republicain.js',
        library: 'getRepublicainDate',
        libraryExport: 'default'
    },
    externals: {
        moment: 'moment'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};

module.exports = [webConfig];
