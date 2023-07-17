import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { createMetaManager } from 'vue-meta'

router.afterEach((to) => {
    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.href = "https://pes.academy" + to.fullPath
    }
  })

createApp(App).use(Quasar, quasarUserOptions).use(router).use(createMetaManager()).mount('#app')
