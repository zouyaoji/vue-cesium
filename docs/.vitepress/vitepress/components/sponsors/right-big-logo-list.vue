<script setup lang="ts">
import type { Sponsor } from '../../../config/sponsors'
import { withBase } from 'vitepress'
import { sendEvent } from '../../../config/analytics'
import { rightBigLogoSponsors } from '../../../config/sponsors'

import { isDark } from '../../composables/dark'

function onItemClick(item: Sponsor) {
  sendEvent('sp_click', item.name, 'right_richtext_list')
}
</script>

<template>
  <div class="right-big">
    <a
      v-for="item in rightBigLogoSponsors"
      :key="item.name"
      :href="withBase(item.url)"
      :title="`${item.name_cn || item.name} - ${item.slogan_cn || item.slogan}`"
      target="_blank"
      @click="onItemClick(item)"
    >
      <div
        class="flex bg-#F9F9F9 h-64px rd-4px justify-center items-center" :class="[
          isDark && '!bg-#262729',
        ]"
      >
        <div class="h-36px">
          <img
            class="rd-4px h-full"
            :src="withBase(item.imgL ?? '')"
            :alt="item.name"
          >
        </div>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.right-big {
  margin-top: 16px;
}
</style>
