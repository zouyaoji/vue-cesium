<script setup lang="ts">
import { inBrowser, useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { useLang } from '~/composables/lang'
import VPNavbarHamburger from './navbar/vp-hamburger.vue'
import VPNavbarMenu from './navbar/vp-menu.vue'
import VPNavbarSearch from './navbar/vp-search.vue'
import VPNavbarSocialLinks from './navbar/vp-social-links.vue'
import VPNavbarThemeToggler from './navbar/vp-theme-toggler.vue'
import VPNavbarTranslation from './navbar/vp-translation.vue'

defineProps<{
  fullScreen: boolean
}>()

defineEmits(['toggle'])

const { theme, page, site } = useData()

const lang = useLang()

const currentLink = computed(() => {
  if (!inBrowser) {
    return `/${page.value?.frontmatter?.lang || ''}/`
  }
  const existLangIndex = theme.value.langs.findIndex(lang =>
    window?.location?.pathname.startsWith(`${site.value.base}${lang}`)
  )

  return existLangIndex === -1 ? '/' : `/${theme.value.langs[existLangIndex]}/`
})
</script>

<template>
  <div class="navbar-wrapper">
    <div class="header-container">
      <div class="logo-container">
        <a :href="withBase(currentLink)">
          <img class="logo" src="/images/vue-cesium-logo-normal.svg" alt="Vue Cesium Logo">
        </a>
        <!-- <el-tag round size="small" title="latest version">
          {{
            vcVersion.replace('0.0.0-staging.', '')
          }}
        </el-tag> -->

        <div class="badges">
          <h1>
            <a href="https://www.npmjs.com/package/vue-cesium" target="_blank">
              <img src="https://img.shields.io/npm/v/vue-cesium?style=plastic">
            </a>
          </h1>
          <h1>
            <a href="https://npmcharts.com/compare/vue-cesium?minimal=true" target="_blank">
              <img src="https://img.shields.io/npm/dm/vue-cesium?style=plastic">
            </a>
          </h1>
          <h1>
            <a href="https://github.com/zouyaoji/vue-cesium/stargazers" target="_blank">
              <img src="https://img.shields.io/github/stars/zouyaoji/vue-cesium?style=plastic">
            </a>
          </h1>
          <h1>
            <a href="https://github.com/zouyaoji/vue-cesium/issues" target="_blank">
              <img src="https://img.shields.io/github/issues/zouyaoji/vue-cesium?style=plastic">
            </a>
          </h1>
          <h1>
            <a href="https://github.com/zouyaoji/vue-cesium/issues" target="_blank">
              <img src="https://img.shields.io/github/license/zouyaoji/vue-cesium?style=plastic">
            </a>
          </h1>
        </div>
      </div>
      <div class="content">
        <VPNavbarSearch :key="lang" class="search" :options="theme.agolia" multilang />
        <VPNavbarMenu class="menu" />
        <VPNavbarThemeToggler class="theme-toggler" />
        <VPNavbarTranslation class="translation" />
        <VPNavbarSocialLinks class="social-links" />
        <VPNavbarHamburger :active="fullScreen" class="hamburger" @click="$emit('toggle')" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo-container {
  display: flex;
  align-items: center;
  height: var(--header-height);

  .badges {
    display: flex;
    align-items: center;
    margin-left: 16px;

    h1 {
      margin: 0;
      float: left;
      font-size: 32px;
      font-weight: normal;
      margin-right: 10px;

      a {
        color: #333;
        text-decoration: none;
        display: block;
      }

      span {
        font-size: 12px;
        display: inline-block;
        width: 34px;
        height: 18px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        text-align: center;
        line-height: 18px;
        vertical-align: middle;
        margin-left: 10px;
        border-radius: 3px;
      }
    }
  }

  > a {
    // height: 28px;
    width: 128px;
  }

  .logo {
    position: relative;
    height: 100%;
  }
}

.dark {
  .logo {
    filter: drop-shadow(2px 2px 6px #409eff);
  }
}
</style>
