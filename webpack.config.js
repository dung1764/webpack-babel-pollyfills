module.exports = {
    mode: 'development',
    entry: ['./index.js'],
    output: {
        path: __dirname,
        filename: 'webpack_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', { 
                            modules: false,
                            useBuiltIns: 'usage',
                            corejs: 3
                        }]]
                    }
                }
            }
        ]
    }
}