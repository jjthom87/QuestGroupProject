var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: './client/src/index.jsx',
    output: {
        path: __dirname,
        filename: './client/public/bundle.js'
    },
    watch: true,
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
          '$': 'jquery',
          'jQuery': 'jquery'
        })
    ],
    resolve: {
        root: __dirname,
        modulesDirectories: [
            'node_modules', 
            './client/src/components/mission',
            './client/src/components/quest',
            './client/src/components/users',
            './client/src/components/navbars',
            './client/src/components/tasks',
            './client/src/components/milestones',
            './client/src/components/search',
            './client/src/components/search/searchBar',
            './client/src/components/search/questSearch',
            './client/src/components/search/missionSearch',            
            './client/src/components/completed',
            './client/src/components/countdown',
            './client/src/components/userall',
            './client/src/components/searchusers',
            './client/src/components/comments',
            './client/src/components/feed',
            './client/src/components',
            './client/src/pages',
            './client/src/auth',
            './client/src'
        ],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    }
};
