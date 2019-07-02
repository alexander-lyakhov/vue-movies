module.exports = {
  productionSourceMap: false,

  configureWebpack: config => {
    config.resolve.extensions = ['*', '.js', '.vue', '.json']
  },

  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/variables.scss";`
      }
    }
  },

  lintOnSave: false
}