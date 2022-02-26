<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-01-28 00:24:46
 * @LastEditTime: 2022-02-21 13:58:55
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\components\ad-sense.vue
-->
<template>
  <div class="adsense-content">
    <div class="adsense-title">{{ sponsor }}</div>
    <div style="padding: 0 1.5rem">
      <ins
        class="adsbygoogle"
        style="display: block; text-align: center"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-3445228872340333"
        :data-ad-slot="adSlot"
      ></ins>
    </div>
  </div>
</template>

<script>
const href = location.href
export default {
  computed: {
    adSlot() {
      const cnHref = href.indexOf('vue-cesium.songluck.com') > -1
      return cnHref ? '7202599371' : '8270352624'
    },
    sponsor() {
      return this.$route.path.indexOf('/zh-CN/') !== -1 ? '赞助商' : 'Sponsor'
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
