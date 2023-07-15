const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'quasar'
  ],

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
/*
  pages: {
    home: {
      entry: 'src/views/Home.vue',
      title: 'Člověk a pes spolu - trenér psů - představení'
    },
    treninky: {
      entry: 'src/views/treninky.vue',
      title: 'Člověk a pes spolu - trenér psů - nabízené tréninky'

    }

  }
  */



})
