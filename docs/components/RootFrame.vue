<template lang="pug">
  div
    md-whiteframe(md-tag="md-toolbar").top
      .md-toolbar-container
        md-button.menu-button.md-icon-button(@click="$refs.sidenav.toggle()")
          md-icon menu
        span.md-title(v-text="title") VUE CESIUM
        md-button.md-icon-button
          router-link.link(:id="otherUrl.indexOf('/zh/' !== -1) ? 'toZh' : 'toEn'" :to="otherUrl")
          md-icon(md-iconset="iconfont icon-zhongyingwenqiehuan-xianshizhongyingwen")
        md-button.md-icon-button(href="https://github.com/zouyaoji/vue-cesium")
          md-icon(md-iconset="iconfont icon-github")
    md-sidenav.md-left.md-fixed.main-nav(ref="sidenav")
      md-toolbar(md-theme="white").logo
        router-link.link(:to="`/`")
          img(src="//zouyaoji.top/vue-cesium/favicon.png")
          div Vue Cesium
      slot(name="side-nav")
    .page-content
      slot(name="page-content")
</template>

<style lang="stylus" scoped>
.top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.logo {
  font-size: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  height: 12rem;
  justify-content: center;
  text-align: center;

  a.link:hover {
    text-decoration: none;
  }

  img {
    width: 90px;
    margin-bottom: 1rem;
  }
}

.md-icon-button {
  a.link {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: block;
    opacity: 0;
  }
}

.md-title {
  flex: 1;
}

.page-content {
  padding-top: 64px;
}

@media (min-width: 1281px) {
  .md-title {
    margin-left: 8px !important;
  }

  .top {
    left: 304px;
  }
}
</style>

<script>
export default {
  props: ['lang'],
  data () {
    return {
      title: this.$route.name
    }
  },
  computed: {
    otherLang () {
      return this.lang === 'zh' ? 'en' : 'zh'
    },
    otherUrl () {
      return this.$route.path.indexOf('/zh/') !== -1
        ? this.$route.path.replace('/zh/', '/en/')
        : this.$route.path.replace('/en/', '/zh/')
    }
  },
  mounted () {
    this.$router.afterEach((route) => {
      document.body.scrollTop = 0
      this.title = route.name
    })
  }
}
</script>
