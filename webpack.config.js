
import path, {dirname} from 'path';
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV !== "production";

//added this to resolve ES6 issues with __dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

//commonjs
// module.exports = {

// ES6
export default {
  //first file to pull all for bundle
  entry: './client/index.js',

  //output of bundle
  output: {
    //bath needs to be build inside where the index.js references
    path: path.resolve(__dirname, 'client/build'),
    publicPath: '/build',
    filename: 'bundle.js',
  },

  //takes node.env from node.js script
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        //takes all js/jsx files into the bundle
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
      },
      {
        //takes all sass and scss files into bundle
        test: /\.s[ac]ss$/i,
        use: [
          // // Creates `style` nodes from JS strings
          "style-loader",
          // // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

    ]
  },
  //still not 100% sure what this does
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  //sets up dev environment
  devServer: {
    //proxy for diff front/back end servers
    proxy: {
      '/': 'http://localhost:3000',
    },
    //sets up the path for the static files
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    port: 8080,
  },
};