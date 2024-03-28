// Vuetify
import 'vuetify/styles'
import './style.css';

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    VBtn: {
      color: 'primary',
    },
    VTextField: {
      color: 'primary',
    }
  }
})

createApp(App).use(vuetify).mount('#app')
