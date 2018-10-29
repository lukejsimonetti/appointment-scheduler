'use strict'
/* 
 * This file is used to configure webpack.  In this file, you can specify entry points, output paths, 
 * plugins, rules, webpack-dev-server, and more.  A few other config things like, webpack scripts,
 * babel plugins and presets may be found in the package.json file. 
 */

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const fs = require('fs-extra')

// creates an absolute path to the build directory
const buildPath = 	path.resolve(__dirname, 'build')
const publicPath = 	path.resolve(__dirname, 'public')
const srcPath = 	path.resolve(__dirname, 'src')

console.log('Build path:', buildPath)
console.log('Public path:', publicPath)
console.log('Src path:', srcPath)

console.log('Cleaning the build dir...')
fs.remove(buildPath)
	.then(() => {
		console.log('\nSuccessfully cleaned the build path\n')
		console.log('Copying public assets to build...')
fs.copy(publicPath, buildPath)
	.then(() => console.log('\nSuccessfully copied public assets to build\n'))
	.catch(err => console.log(err))
	}).catch(err => console.log(err))

console.log('Copying public assets to build...')
fs.copy(publicPath, buildPath)
	.then(() => console.log('\nSuccessfully copied public assets to build\n'))
	.catch(err => console.log(err))

module.exports = {
	entry: {
		// specify the entry files that webpack will look at and compile
		index: './src/index.js',
		vendor: [
			'react',
			'react-dom',
			'react-router-dom',
			'react-select',
			'react-redux',
			'redux',
			'axios',
			'moment',
			'lodash'
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			minify: false
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: 'css/[id].css'
		})
	],
	output: {
		// webpack will name all files and chunk files and place them in the public directory
		path: buildPath + '/',
		filename: 'js/[name]-[hash].bundle.js',
		chunkFilename: 'js/[name]-[hash].bundle.js'
	},
	module: {
		rules: [
			{
				// webpack will check all .js and .jsx files and use the babel-loader on them
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react'],
					plugins: ['transform-class-properties']
				}
			},
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							minimize: false
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							autoprefixer: {
								browsers: ['last 2 versions']
							},
							pulugins: () => [
								autoprefixer
							]
						}
					},
					{
						loader: 'sass-loader',
						options: {}
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: './img/[name].[ext]'
					}
				}]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader',
				options: {
					name: './fonts/[name].[ext]'
				}
			}
		]
	},
}
