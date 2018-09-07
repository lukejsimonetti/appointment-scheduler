'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

const common = require('./webpack.common')

module.exports = merge(common, {
    plugins: [
        // uglifies JS (tree shaking, minify)
        //new UglifyJSPlugin(),
        // defines 'production' as the NODE_ENV
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.HashedModuleIdsPlugin(),
        new ManifestPlugin({
            fileName: '../asset-manifest.json',
            publicPath: '/build/',
			filter: function(chunk) {
				if(chunk.chunk !== undefined && chunk.chunk.name !== null) {
					return chunk
				}
			}
		})
    ],
    output: {
        publicPath: '/build/'
    }
})