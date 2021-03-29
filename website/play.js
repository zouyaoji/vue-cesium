import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import App from './play/index.vue'
import '../packages/theme-default/src/index.scss'

const app = createApp(App)
app.use(VueCesium)
app.mount('#app')
