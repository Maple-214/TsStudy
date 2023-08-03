const path = require('path')
module.exports = {
    entry: {
        path: './src/index.ts'

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        environment: {
            arrowFunction: false
        }

    },
    plugins: [
        {

        }
    ],
    module: {
        rules: [
            {
                test: /node_module/,
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
                                        'chorejs': '3',
                                        'useBuiltIns': 'usage'
                                    }
                                ]
                            ]

                        }
                    },
                    'ts-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }

}