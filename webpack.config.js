'use strict'

const path = require('path')

const output = {
  library: 'helpers',
  libraryTarget: 'umd',
  path: path.resolve(__dirname, 'dist'),
  filename: 'admin-helpers.min.js',
  globalObject: 'this'
}

const config = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output,
  resolve: {
    mainFields: ['module', 'browser', 'main']
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
}

const externals = {
  '@ecomplus/utils': 'ecomUtils',
  jquery: 'jQuery'
}

module.exports = [
  {
    ...config,
    externals: /^(core-js|@ecomplus\/utils|jquery)/i
  },

  {
    ...config,
    output: {
      ...output,
      filename: output.filename.replace('.min.js', '.bundle.min.js')
    }
  },

  {
    ...config,
    output: {
      ...output,
      libraryTarget: 'var',
      filename: output.filename.replace('.min.js', '.var.min.js')
    },
    externals
  },

  {
    ...config,
    entry: path.resolve(__dirname, 'src/lib/toast.js'),
    output: {
      ...output,
      libraryTarget: 'var',
      filename: 'handle-api-error.var.min.js'
    },
    externals
  },

  {
    ...config,
    entry: path.resolve(__dirname, 'src/lib/handle-api-error.js'),
    output: {
      ...output,
      libraryTarget: 'var',
      filename: 'toast.var.min.js'
    },
    externals
  }
]
