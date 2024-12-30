const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({

  publicPath: 'https://github.com/umulewi/simba',
  transpileDependencies: true,
  devServer: {
    port: 3000,
  },
});


