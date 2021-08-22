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
