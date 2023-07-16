import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { createMetaManager } from 'vue-meta'

createApp(App).use(Quasar, quasarUserOptions).use(router).use(createMetaManager()).mount('#app')
