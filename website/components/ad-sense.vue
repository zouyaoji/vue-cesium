<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-01-28 00:24:46
 * @LastEditTime: 2022-02-05 23:37:31
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\components\ad-sense.vue
-->
<template>
  <div class="adsense-content">
    <div class="adsense-title">赞助商</div>
    <div style="padding: 0 1.5rem">
      <ins
        class="adsbygoogle"
        style="display: block"
        data-ad-client="ca-pub-3445228872340333"
        data-ad-slot="6763307871"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // (window.adsbygoogle = window.adsbygoogle || []).push({})
  }
}
</script>

<style scoped>
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
