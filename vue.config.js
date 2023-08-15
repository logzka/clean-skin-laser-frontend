const { defineConfig } = require('@vue/cli-service');

const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = defineConfig({
  publicPath: isDev ? '/' : '/clean-skin-laser-frontend/',

  transpileDependencies: true,

  css: {
    sourceMap: isDev,
  },

  productionSourceMap: false,

  devServer: {
    compress: true,
    port: 8002,
  },

  chainWebpack: (config) => {
    config.module.rule('pug')
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end();

    // config.module.rule('asset').uses.clear();
  },

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(png|webp|svg)(\?.*)?$/,
          type: 'images',
          // generator: {
          //   filename: 'img/[name][ext]',
          // },
        },
      ],
    },
    optimization: {
      minimizer: [
        '...',
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              plugins: [
                'imagemin-optipng',
                'imagemin-svgo',
              ],
            },
          },
        }),
      ],
    },
  },
});
