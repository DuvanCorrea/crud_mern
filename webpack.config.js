module.exports = {
    entry: __dirname + "/src/app/index.js",
    output: {
        path: __dirname + "/src/public",
        filename: "bundle.js"
    },
    module: {
        rules: [{
            use: "babel-loader",
            test: /\.js$/,
            exclude: /node_module/
        }]
    }

}