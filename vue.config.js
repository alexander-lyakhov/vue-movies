module.exports = {
  productionSourceMap: false,

  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/variables.scss";`
      }
    }
  },

  lintOnSave: false
}