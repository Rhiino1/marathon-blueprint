const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dashboardConfig = {
	entry: {
		generalPanel: './src/dashboard/scripts/generalPanel.js',
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'dashboard'),
		assetModuleFilename: 'images/[hash][ext]'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'generalPanel.html',
			template: './src/dashboard/generalPanel.html',
			chunks: ['generalPanel']
		}),
	],
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}, {
			test: /\.(png|jpg|gif|ttf|mp4)$/i,
			type: 'asset/resource'
		}, ]
	},
	mode: 'production'
};

const graphicsConfig = {
	entry: {
		layoutEspera: ['./src/graphics/scripts/layoutEspera.js'],
		layout169: ['./src/graphics/scripts/layout16-9.js'],
		layout43: ['./src/graphics/scripts/layout4-3.js'],
		layoutDs: ['./src/graphics/scripts/layoutDs.js'],
		layoutCarreras2: ['./src/graphics/scripts/layoutCarreras2.js'],
		layoutCarreras4: ['./src/graphics/scripts/layoutCarreras4.js'],
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'graphics'),
		assetModuleFilename: 'images/[hash][ext]'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'layoutEspera.html',
			template: './src/graphics/layoutEspera.html',
			chunks: ['layoutEspera']
		}),
		new HtmlWebpackPlugin({
			filename: 'layout16-9.html',
			template: './src/graphics/layout16-9.html',
			chunks: ['layout169']
		}),
		new HtmlWebpackPlugin({
			filename: 'layout4-3.html',
			template: './src/graphics/layout4-3.html',
			chunks: ['layout43']
		}),
		new HtmlWebpackPlugin({
			filename: 'layoutDs.html',
			template: './src/graphics/layoutDs.html',
			chunks: ['layoutDs']
		}),
		new HtmlWebpackPlugin({
			filename: 'layoutCarreras2.html',
			template: './src/graphics/layoutCarreras2.html',
			chunks: ['layoutCarreras2']
		}),
		new HtmlWebpackPlugin({
			filename: 'layoutCarreras4.html',
			template: './src/graphics/layoutCarreras4.html',
			chunks: ['layoutCarreras4']
		}),
	],
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}, {
			test: /\.(png|jpg|gif|ttf|mp4)$/i,
			type: 'asset/resource'
		}, ]
	},
	mode: 'production'
};

module.exports = [
	dashboardConfig,
	graphicsConfig
];
