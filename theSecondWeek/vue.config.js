module.exports = {
  devServer: {
    host: '127.0.0.1',
    // 修复不断bug Invalid Host/Origin header
    disableHostCheck: true
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}