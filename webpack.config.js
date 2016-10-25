var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
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
            'src/components/mission',
            'src/components/quest',
            'src/components/users',
            'src/components/navbars',
            'src/components/tasks',
            'src/components/milestones',
            'src/components/search',
            'src/components/search/searchBar',
            'src/components/search/questSearch',
            'src/components/search/missionSearch',            
            'src/components/completed',
            'src/components/countdown',
            'src/components/userall',
            'src/components/searchusers',
            'src/components/comments',
            'src/components/feed',
            'src/components',
            'src/pages',
            'src/auth',
            'src'
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
