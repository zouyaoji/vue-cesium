<script setup lang="ts">
import _contributors from '@vue-cesium/metadata/dist/contributors.json'
import { computed } from 'vue'
import VpLink from '../common/vp-link.vue'

const props = defineProps<{ id: string }>()

const contributors = computed(() =>
  _contributors[props.id]?.filter(c => c.login !== 'renovate[bot]')
)

function withSize(rawURL: string) {
  return `${rawURL}${rawURL.includes('?') ? '&' : '?'}size=64`
}
</script>

<template>
  <div class="flex flex-wrap gap-2 pb-2">
    <el-tooltip
      v-for="{ login, avatar, name, hash } of contributors"
      :key="hash"
      :content="name"
      placement="top"
    >
      <VpLink
        :href="`https://github.com/${login}`"
        class="flex gap-2 items-center link"
        no-icon
      >
        <img
          :src="withSize(avatar)"
          class="w-8 h-8 rounded-full"
          loading="lazy"
        >
      </VpLink>
    </el-tooltip>
  </div>
</template>

<style lang="scss" scoped>
.link {
  color: var(--text-color-light);

  &:hover {
    color: var(--brand-color);
  }
}
</style>
