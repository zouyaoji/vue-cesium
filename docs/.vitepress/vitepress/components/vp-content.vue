<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2025-11-28 14:55:53
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-04 00:47:50
 * @FilePath: \vue-cesium\docs\.vitepress\vitepress\components\vp-content.vue
-->
<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { computed } from 'vue'
import { useSidebar } from '../composables/sidebar'
import VPFooter from './globals/vp-footer.vue'
import GoogleAdsense from './sponsors/google-adsense.vue'
import VPDocContent from './vp-doc-content.vue'
import VPHeroContent from './vp-hero-content.vue'
import VPNotFound from './vp-not-found.vue'

const { frontmatter } = useData()
const route = useRoute()
const isNotFound = computed(() => route.component === VPNotFound)
const isHeroPost = computed(() => frontmatter.value.page === true)
const { hasSidebar } = useSidebar()
</script>

<template>
  <main
    id="page-content"
    class="page-content" :class="{ 'has-sidebar': hasSidebar }"
  >
    <VPNotFound v-if="isNotFound" />
    <VPHeroContent v-else-if="isHeroPost" />
    <VPDocContent v-else>
      <template #content-top>
        <slot name="content-top" />
      </template>
      <template #content-bottom>
        <slot name="content-bottom" />
      </template>
    </VPDocContent>
    <GoogleAdsense
      ad-slot="8270352624"
      :ad-style="{ 'display': 'block', 'text-align': 'center' }"
      data-ad-layout="in-article"
      data-ad-format="fluid"
    />
    <VPFooter v-if="!isHeroPost" />
  </main>
</template>
