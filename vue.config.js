module.exports = {
  productionSourceMap: false,

  configureWebpack: (config) => {
    config.resolve.extensions = ['*', '.js', '.vue', '.json', '.scss'];
  },

  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/variables.scss";',
      },
    },
  },

  publicPath: process.env.NODE_ENV === "production" ? `/vue-movies/` : "/",

  lintOnSave: false,
};
