const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dashboardConfig = {
	entry: {
		generalPanel: './src/dashboard/scripts/generalPanel.js',
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'dashboard')
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
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: ['file-loader'],
			},
		]
	},
	mode: 'production'
};

const graphicsConfig = {
	entry: {
		layoutEspera: ['./src/graphics/scripts/layoutEspera.js'],
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'graphics')
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
			use: 'file-loader?name=[name].[ext]&outputPath=./images/',
		}, ]
	},
	mode: 'production'
};

module.exports = [
	dashboardConfig,
	graphicsConfig
];
