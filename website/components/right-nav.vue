<template>
  <el-scrollbar
    ref="navScroll"
    class="right-nav"
    wrap-style="max-height: 450px"
    style="position: fixed; right: 10px; top: 100px; width: 230px; border-left: 1px solid rgb(220, 223, 230); height: auto; max-height: 450px"
  >
    <div v-for="item in anchors" :key="item" style="margin: 3px 0 3px 10px">
      <el-link
        :id="item"
        :title="item"
        class="link"
        :type="active === item ? 'primary' : 'default'"
        href="javascript:void 0;"
        @click="handleAnchorClick(item)"
      >
        {{ item }}
      </el-link>
    </div>
    <app-link href="https://home.502502.xyz/#/register?code=jlz6Frzz" style="position: absolute">
      <span style="padding-left: 10px; line-height: 120px">{{ otherAd }}<el-tag effect="dark" type="success">jlz6Frzz</el-tag></span>
    </app-link>
  </el-scrollbar>

  <ad-sense
    adSlot="4608014562"
    :adStyle="{ display: 'inline-block', width: '235px', height: '235px' }"
    style="position: fixed; right: 10px; bottom: 20px; width: 230px; border-left: 1px solid rgb(220, 223, 230); height: auto; max-height: 300px"
  ></ad-sense>
</template>

<script lang="ts">
import { defineComponent, nextTick, onBeforeUnmount, onMounted, ref, computed } from 'vue'
import ResizeObserver from 'resize-observer-polyfill'
import AdSense from './ad-sense.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    AdSense
  },
  setup() {
    // ordered
    const map = new Map()
    let anchors = ref<any>([])
    let scrollContainer
    const active = ref('')
    const navScroll = ref(null)
    const $route = useRoute()

    const handleAnchorClick = anchor => {
      scrollContainer.scrollTop = map.get(anchor)
      active.value = anchor
    }

    let resizeObserver: any = null

    const adSlot = computed(() => {
      const cnHref = location.href.indexOf('vue-cesium.songluck.com') > -1
      return cnHref ? '7202599371' : '4608014562'
    })

    const otherAd = computed(() => {
      return $route.path.indexOf('/zh-CN/') !== -1 ? '高速稳定梯子推荐' : 'Stable VPN Recommendation'
    })

    //  const adSenseShow = ref(false)

    onMounted(async () => {
      // waiting for components render, e.g. table.
      await nextTick()
      scrollContainer = document.querySelector('.el-scrollbar.page-component__scroll>.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default')
      const content = document.querySelector('.content.vue-cesium-doc.content')
      if (!content) return
      const h3 = content.querySelectorAll('h2,h3')
      anchors.value = Array.from(h3).map((item: any) => {
        const text = item.childNodes[1] && item.childNodes[1].textContent.trim()
        map.set(text, item.offsetTop)
        return text
      })

      let mapValues = Array.from(map.values()).reverse()
      let mapKeys = Array.from(map.keys()).reverse()
      resizeObserver = new ResizeObserver(() => {
        Array.from(h3).forEach((item: any) => {
          const text = item.childNodes[1] && item.childNodes[1].textContent.trim()
          map.set(text, item.offsetTop)
        })
        mapValues = Array.from(map.values()).reverse()
        mapKeys = Array.from(map.keys()).reverse()
      })
      resizeObserver.observe(scrollContainer.childNodes[0])

      let cachedIndex = -1
      scrollContainer.addEventListener('scroll', () => {
        const index = mapValues.findIndex(item => scrollContainer.scrollTop > item - 75)
        if (cachedIndex !== index && index !== -1) {
          active.value = mapKeys[index]
          cachedIndex = index
          document.getElementById(active.value)?.focus()
        }
      })
    })

    onBeforeUnmount(() => {
      resizeObserver?.disconnect()
    })
    return {
      navScroll,
      anchors,
      active,
      otherAd,
      handleAnchorClick
    }
  }
})
</script>

<style lang="scss" scoped>
.link {
  ::v-deep(span) {
    font-size: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 200px;
  }
}

@media (max-width: 1000px) {
  .right-nav {
    display: none;
  }
}
</style>
