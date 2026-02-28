const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: '/wedding_hw/',
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    allowedHosts: 'all',
    port: 8080
  }
})
