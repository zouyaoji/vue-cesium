<script setup lang="ts">
import { useBackTop } from '../composables/back-top'
import { useSidebar } from '../composables/sidebar'
import ToggleSidebarBtn from './subnav/toggle-sidebar-btn.vue'

defineProps<{
  isSidebarOpen: boolean
}>()
defineEmits(['open-menu'])

const { hasSidebar } = useSidebar()
const { shouldShow, scrollToTop } = useBackTop()
</script>

<template>
  <!-- eslint-disable vue/custom-event-name-casing -->
  <div class="sub-nav py-3 flex items-center">
    <ToggleSidebarBtn
      v-if="hasSidebar"
      :aria-expanded="isSidebarOpen"

      @click="$emit('open-menu')"
    />
    <Transition name="shifting">
      <ElButton
        :class="{ show: shouldShow }"
        link
        class="height-5 go-back-top"
        @click.prevent.stop="scrollToTop"
      >
        Back to top
      </ElButton>
    </Transition>
  </div>
</template>
