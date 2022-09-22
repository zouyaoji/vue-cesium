<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-01-28 00:24:46
 * @LastEditTime: 2022-09-22 13:03:21
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\components\ad-sense.vue
-->
<template>
  <div class="adsense-content">
    <div class="adsense-title">{{ sponsor }}</div>
    <div style="padding: 0 0">
      <ins
        class="adsbygoogle"
        :style="adStyle"
        data-ad-client="ca-pub-3445228872340333"
        :data-ad-slot="adSlot"
        :data-ad-format="dataAdFormat"
        :data-ad-layout="dataAdLayout"
      ></ins>
    </div>
    <app-link href="https://new.502502.xyz/#/register?code=jlz6Frzz">
      <span style="padding-left: 20px">{{ otherAd }}</span>
    </app-link>
  </div>
</template>

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
    sponsor() {
      return this.$route.path.indexOf('/zh-CN/') !== -1 ? '赞助商' : 'Sponsor'
    },
    otherAd() {
      return this.$route.path.indexOf('/zh-CN/') !== -1 ? '高速稳定梯子推荐' : 'Stable VPN Recommendation'
    }
  },
  mounted() {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }
}
</script>

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
