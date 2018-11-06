const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js',
    'basics/HelloWorld/bundle': './src/basics/HelloWorld/index.js',
    'basics/InstancedQuads/bundle': './src/basics/InstancedQuads/main.js',
    'advanced/HelloWorld/bundle': './src/advanced/HelloWorld/index.js',
    'advanced/SpriteGroup/bundle': './src/advanced/SpriteGroup/index.js',
    'advanced/HelloInstancedWorld/bundle': './src/advanced/HelloInstancedWorld/index.js',
    'advanced/TexturedSpriteGroup/bundle': './src/advanced/TexturedSpriteGroup/index.js',
    'demo/Starscape/bundle': './src/demo/Starscape/index.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    compress: true,
    host: '0.0.0.0',
    port: 8080,
    open: true,
    useLocalIp: true,
    disableHostCheck: true,
  },
  // resolve: {
  //   alias: {
  //     '@picimo/core': path.resolve(__dirname, '../packages/picimo-core'),
  //     '@picimo/ecs': path.resolve(__dirname, '../packages/picimo-ecs'),
  //     '@picimo/renderer': path.resolve(__dirname, '../packages/picimo-renderer'),
  //     '@picimo/toolkit': path.resolve(__dirname, '../packages/picimo-toolkit'),
  //     '@picimo/utils': path.resolve(__dirname, '../packages/picimo-utils'),
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
          publicPath: '/',
          // publicPath: 'http://localhost:8080/',
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                debug: true,
                useBuiltIns: 'entry',
                targets: {
                  browsers: [
                    'and_chr 64',
                    'chrome 64',
                    'ios_saf 11',
                    'firefox 57',
                    'samsung 6.2',
                    'edge 16',
                  ],
                },
              }],
            ],
          },
        },
      },
    ],
  },
};
