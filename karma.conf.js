const webpack = require('webpack');
const path = require('path');

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'sinon-chai', 'webpack'],

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-coverage',
      'karma-sinon-chai',
      'karma-firefox-launcher',
      'karma-chrome-launcher',
    ],

    files: [
      'test/**/*.spec.js'
    ],

    exclude: [
    ],

    preprocessors: {
      'test/**/*.spec.js': ['webpack', 'sourcemap'],
      'src/**/*.js': ['coverage']
    },

    reporters: ['progress', 'coverage'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: [
      'FirefoxHeadless',
      'ChromeHeadless'
    ],

    singleRun: false,

    webpack: {
      mode: 'development',

      cache: true,
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.CI': JSON.stringify(process.env.CI),
          'process.env.TRAVIS': JSON.stringify(process.env.TRAVIS),
          'process.env.NODE_DEBUG': false,
          'process.stderr': null,
        })
      ],
      resolve: {
        fallback: {
          "assert": require.resolve("assert/"),
        }
      }
    },

    webpackServer: {
      stats: {
        colors: true
      }
    },
    coverageReporter: {
      reports: [ 'html', 'lcovonly', 'text-summary' ],
      dir: path.join(__dirname, 'coverage')
    }
  });
};
