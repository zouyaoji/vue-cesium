<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-02-10 15:03:05
 * @LastEditTime: 2022-05-14 20:31:45
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\components\third-script.vue
-->
<template></template>
<script>
let mounted = false
export default {
  name: 'ThirdScript',
  mounted() {
    if (mounted) {
      return
    }

    mounted = true
    // window._mtac = {}
    // const href = location.href
    // const cnHref = href.indexOf('zouyaoji.gitee.io') > -1
    // const cnHref = href.indexOf('vue-cesium.songluck.com') > -1
    // let cnzzElement = document.createElement('script')
    // cnzzElement.src = cnHref
    //   ? 'https://s9.cnzz.com/z_stat.php?id=1280840125&web_id=1280840125'
    //   : 'https://s4.cnzz.com/z_stat.php?id=1280816264&web_id=1280816264'
    // cnzzElement.setAttribute('async', true)
    // let s = document.getElementsByTagName('script')[0]
    // s.parentNode.insertBefore(cnzzElement, s)
    // 百度统计
    if (process.env.NODE_ENV === 'production') {
      var hm = document.createElement('script')
      hm.src = 'https://hm.baidu.com/hm.js?a1aaf3ccee748ca69bf8b776942b9e5b'
      hm.setAttribute('async', true)
      let s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(hm, s)
    }

    // this.$router.beforeEach((to, from, next) => {
    //   try {
    //     window._czc.push(['_trackPageview', 'magic-api' + to.path])
    //   } catch (e) {}
    //   next()
    // })
  }
}
</script>
