<script>
import { defineComponent, h, computed, watch, getCurrentInstance, onMounted } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { ElScrollbar } from 'element-plus'
import { ElMessageBox } from 'element-plus'
import MainHeader from './components/header'
import MainFooter from './components/footer'
import { use } from '@vue-cesium/locale'
import zhLocale from '@vue-cesium/locale/lang/zh-hans'
import enLocale from '@vue-cesium/locale/lang/en-us'
import { Language } from './enums/language'

const lang = location.hash.replace('#', '').split('/')[1] || Language.CN
const localize = lang => {
  switch (lang) {
    case Language.CN:
      use(zhLocale)
      break
    default:
      use(enLocale)
  }
}
localize(lang)

export default defineComponent({
  name: 'App',

  setup(){
    const route = useRoute()

    const lang = computed(() => route.path.split('/')[1] || Language.CN)

    const isComponent = computed(() => /^component-/.test(route.name || ''))

    const suggestJump = () => {
      if (process.env.NODE_ENV !== 'production') return

      const href = location.href
      const preferGithub = localStorage.getItem('PREFER_GITHUB')
      const cnHref = href.indexOf('zouyaoji.gitee.io') > -1
      if (cnHref || preferGithub) return
      setTimeout(() => {
        if (lang.value !== Language.CN) return
        ElMessageBox.confirm('建议大陆用户访问部署在国内的站点，是否跳转？', '提示')
          .then(() => {
            location.replace('https://zouyaoji.gitee.io/vue-cesium')
          })
          .catch(() => {
            localStorage.setItem('PREFER_GITHUB', 'true')
          })
      }, 1000)
    }

    watch(() => lang.value, val => {
      if (val === Language.CN) suggestJump()
      localize(val)
    })

    onMounted(() => {
      localize(lang.value)

      if (lang.value === Language.CN) suggestJump()
    })

    return {
      lang,
      isComponent,
    }
  },

  render() {
    const notPlay = this.lang !== 'play'

    const notComponent = !this.isComponent

    const mainHeader = notPlay ? h(MainHeader, {
      style: 'position: fixed;top: 0;width: 100%;z-index: 2000',
    }) : null

    const mainFooter = notPlay && notComponent ? h(MainFooter) : null

    const content = [h('div', {
      class: 'main-cnt',
    }, [h(RouterView)]), mainFooter]

    const contentWrapper = notComponent
      ? h(ElScrollbar, null, { default: () => content })
      : content

    return h('div', {
      id: 'app',
      class: [this.isComponent ? 'is-component' : '', this.lang],
    }, [mainHeader, contentWrapper])
  },
})
</script>
