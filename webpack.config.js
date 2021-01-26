const path = require('path')

module.exports = {
    // entry: './src/index.ts',
    entry: './src/index.tsx',
    module: {
        rules: [
            {

                // test: /\.ts$/,
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        // extensions: ['.ts'],
        extensions: ['.js', '.ts', '.tsx'],

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: 'dist/',
    },
    devServer: {
        hot: true,
        open: true,
    }
}