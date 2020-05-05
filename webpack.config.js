module.exports = {
    entry: __dirname + "/src/app/index.js",
    output: {
        path: __dirname + "/src/public",
        filename: "bundle.js"
    },
    module: {
        rules: [{
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-react']
                }
            },
            test: /\.js$/,
            exclude: /node_module/
        }]
    }

}