const path = require("path");

module.exports = {
	mode: "production",
	entry: "./src/index.d.ts",
	output: {
		path: path.resolve(__dirname, "umd"),
		filename: "storagify.js",
		library: "storagify",
		libraryTarget: "umd"
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "ts-loader",
					options: {
						configFile: "tsconfig.umd.json"
					}
				}
			}
		]
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	}
};
