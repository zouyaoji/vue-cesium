<script setup lang="ts">
import { isClient } from '@vueuse/core'
import { useFullScreen } from '../composables/fullscreen'
import { useSidebar } from '../composables/sidebar'
import { useToggleWidgets } from '../composables/toggle-widgets'
import { breakpoints } from '../constant'
import VpNavFull from './vp-nav-full.vue'
import VpNavbar from './vp-navbar.vue'

const { hasSidebar } = useSidebar()
const { toggleFullScreen, isFullScreen } = useFullScreen()
const close = () => toggleFullScreen(false)

useToggleWidgets(isFullScreen, () => {
  if (!isClient)
    return
  if (window.outerWidth >= breakpoints.md) {
    close()
  }
})
</script>

<template>
  <header class="navbar" :class="{ 'has-sidebar': hasSidebar }">
    <VpNavbar :full-screen="isFullScreen" @toggle="toggleFullScreen" />
    <VpNavFull :full-screen="isFullScreen" class="full-screen" @close="close" />
  </header>
</template>
