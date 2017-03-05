const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry : './lib/index.js',
	output : {
		filename : 'plate-calculator.js',
		path : path.resolve(__dirname, 'dist')
	},
	module : {
		rules : [
			{ test : /\.js$/, exclude : /node_modules/, loader : "babel-loader" }
		]
	},
};
