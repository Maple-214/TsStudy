const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    entry: {
        path: './src/index.tsx'
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        environment: {
            arrowFunction: false,
            const: false
        }

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html')
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: {
                                            'chrome': '88'
                                        },
                                        'corejs': '3',
                                        'useBuiltIns': 'usage'
                                    }
                                ],
                                [
                                    '@babel/preset-typescript'
                                ]
                            ]

                        }
                    },
                    'ts-loader'
                ],

            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                // plugins: [
                                //     'postcss-preset-env', {
                                //         browsers: 'last 2 versions'
                                //     }
                                // ]
                            }
                        }

                    },
                    'less-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devServer: {
        port: 3001,
    },

}