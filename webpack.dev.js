'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

const common = require('./webpack.common')

module.exports = merge(common, {
	plugins: [
		new webpack.NamedModulesPlugin(),
		new ManifestPlugin({
			fileName: '../asset-manifest.json',
			publicPath: '/',
			filter: function(chunk) {
				if(chunk.chunk !== undefined && chunk.chunk.name !== null) {
					return chunk
				}
			}
		}),
		new WriteFilePlugin({
			test: /asset-manifest\.json$/
		})
	],
	output: {
		// webpack-dev-server will serve all files from this path:
		publicPath: 'https://localhost:3000/',
		filename: 'js/[name].bundle.js',
		chunkFilename: 'js/[name].bundle.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		// webpack-dev-server needs to know what path to look in for the output files
		headers: { "Access-Control-Allow-Origin": "*" },
		contentBase: path.resolve(__dirname, 'build'),
		https: true,
		port: 3000
	}
})