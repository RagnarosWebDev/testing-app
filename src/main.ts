import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/_styles.scss'
import { VFab } from 'vuetify/labs/VFab'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

const vuetify = createVuetify({
  components: {
    ...components,
    VFab,
  },
  directives,
  theme: {
    defaultTheme: 'dark',
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

createApp(App).use(pinia).use(Toast).use(vuetify).use(router).mount('#app')
