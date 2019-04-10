const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [new MomentLocalesPlugin()]
  },
  chainWebpack: config => {
    // Pug Pre-Processor
    config.module
      .rule("pug")
      .test(/\.pug$/)
      .oneOf("vuetemplate")
        .resourceQuery(/^\?vue/)
        .use("pug-plain-loader")
          .loader("pug-plain-loader")
          .end()
        .end()
      .oneOf("javascript")
        .use("raw-loader")
          .loader("raw-loader")
          .end()
        .use("pug-plain-loader")
          .loader("pug-plain-loader")
          .end()
        .end()
  }
};
