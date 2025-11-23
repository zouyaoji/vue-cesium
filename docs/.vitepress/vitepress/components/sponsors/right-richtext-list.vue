<script setup lang="ts">
import type { Sponsor } from '../../../config/sponsors'
import { withBase } from 'vitepress'
import { computed } from 'vue'
import { sendEvent } from '../../../config/analytics'
import { rightRichTextSponsors } from '../../../config/sponsors'
import { isDark } from '../../composables/dark'

import { useLang } from '../../composables/lang'

const lang = useLang()
const langZhCN = 'zh-CN'
const isZhCn = computed(() => lang.value === langZhCN)
function onItemClick(item: Sponsor) {
  sendEvent('sp_click', item.name, 'right_richtext_list')
}
</script>

<template>
  <div class="right-rich">
    <a
      v-for="item in rightRichTextSponsors"
      :key="item.name"
      :href="withBase(item.url)"
      :title="`${item.name_cn || item.name} - ${item.slogan_cn || item.slogan}`"
      target="_blank"
      @click="onItemClick(item)"
    >
      <div
        class="flex bg-#F9F9F9 pl-12px pr-12px pt-16px pb-16px rd-4px" :class="[
          isDark && '!bg-#262729',
        ]"
      >
        <div class="w-32px m-r-8px h-56px">
          <img
            class="mt-2px rd-4px w-32px h-32px"
            :src="withBase(item.img)"
            :alt="item.name"
          >
        </div>
        <div class="flex-1 h-56px">
          <div
            class="color-#303133 font-400 text-13px" :class="[
              isDark && '!color-#E5E9F3',
            ]"
          >
            {{ isZhCn ? item.name_cn || item.name : item.name }}
          </div>
          <div
            class="m-t-2px font-400 text-12px color-#909399 break-all" :class="[
              isDark && '!color-#A3A6AD',
            ]"
          >
            {{ isZhCn ? item.slogan_cn || item.slogan : item.slogan }}
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.right-rich {
  margin-top: 16px;
}
</style>
