<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-02-04 00:38:32
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-04 00:42:59
 * @FilePath: \vue-cesium\docs\.vitepress\vitepress\components\sponsors\google-adsense.vue
-->
<script>
const href = location.href
export default {
  props: {
    adSlot: String,
    adStyle: Object,
    dataAdFormat: String,
    dataAdLayout: String
  },
  computed: {
    // adSlot() {
    //   const cnHref = href.indexOf('vue-cesium.songluck.com') > -1
    //   return cnHref ? '7202599371' : '4608014562'
    // },
    // sponsor() {
    //   return this.$route.path.includes('/zh-CN/') ? '赞助商' : 'Sponsor'
    // },
    // otherAd() {
    //   return this.$route.path.includes('/zh-CN/') ? '超便宜稳定梯子' : 'Stable VPN Recommendation'
    // }
  },
  mounted() {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }
}
</script>

<template>
  <div class="adsense-content">
    <div class="adsense-title">
      <!-- {{ sponsor }} -->
    </div>
    <div style="padding: 0 0">
      <ins
        class="adsbygoogle"
        :style="adStyle"
        data-ad-client="ca-pub-3445228872340333"
        :data-ad-slot="adSlot"
        :data-ad-format="dataAdFormat"
        :data-ad-layout="dataAdLayout"
      />
    </div>
    <!-- <app-link href="https://xn--4gq62f52gdss.com/#/register?code=hbv1fTgZ">
      <span style="padding-left: 20px">{{ otherAd }}</span>
    </app-link> -->
  </div>
</template>

<style>
.adsense-content {
  max-width: 1180px;
  margin: 0 auto;
}
.adsense-title {
  color: #999;
  transition: color 0.15s ease;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  padding: 0 1.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
}
</style>
