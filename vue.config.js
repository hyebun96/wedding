const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    allowedHosts: 'all',
    port: 3000,
    client: {
      webSocketURL: {
        protocol: 'wss',
        hostname: 'fascicular-terrilyn-unsurrealistic.ngrok-free.dev', // ngrok 주소
        port: 443,
        pathname: '/ws'
      }
    }
  }
})
