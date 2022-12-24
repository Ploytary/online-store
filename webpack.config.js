const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


const ENTRY_POINT = 'index.ts'
const SOURCE_FOLDER = 'src';
const BUILD_FOLDER = 'dist';
const isProduction = process.env.NODE_ENV === 'production';

function runESLint() {
  console.log(process.env.NODE_ENV);
  return isProduction ? [new ESLintPlugin({ extensions: ['ts', 'js']})] : [];
}

module.exports = {
  entry: {
    main: `./${SOURCE_FOLDER}/${ENTRY_POINT}`,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, BUILD_FOLDER),
    clean: true,
    assetModuleFilename: 'assets/[name][ext][query]',
  },
  devServer: {
    watchFiles: [`${SOURCE_FOLDER}/*.html`],
    hot: true,
  },
  // devtool: isProduction ? 'source-map' : 'eval',
  devtool: 'source-map',
  plugins: [
    new HTMLWebpackPlugin({
        filename: 'index.html',
        template: `./${SOURCE_FOLDER}/index.html`,
        minify: {
          collapseWhitespace: isProduction,
      },
    }),
    new MiniCssExtractPlugin({
        filename: 'styles.css',
    }),
    // new CopyWebpackPlugin({
    //     patterns: [
    //         {
    //             from: path.resolve(__dirname, 'source/image'),
    //             to: path.resolve(__dirname, 'dist/image'),
    //         },
            // { from: './public'}
    //     ]
    // }),
    // new ESLintPlugin({ extensions: ['ts', 'js']}),
    ...runESLint(),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      '...',
    ],
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
        ],
      },
      {
      test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
        // generator: {
        //   filename: 'image/[name][ext][query]'
        // }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        // generator: {
        //   filename: 'font/[name][ext][query]'
        // }
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        // options: {
        //   name: 'media/[name][query].[ext]'
        // }
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
    ]
  }
};
