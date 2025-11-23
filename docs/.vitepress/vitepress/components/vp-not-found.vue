<script setup lang="ts">
import { isClient } from '@vueuse/core'
import { computed } from 'vue'
import localeData from '../../i18n/pages/not-found.json'
import { useLang } from '../composables/lang'

const lang = useLang()

const locale = computed(() => localeData[lang.value])

function goHome() {
  if (!isClient)
    return
  window.location.href = `/${lang.value}/`
}
</script>

<template>
  <el-result icon="error" :title="locale.title" :sub-title="locale.desc">
    <template #extra>
      <el-button @click="goHome">
        {{ locale['button-title'] }}
      </el-button>
    </template>
  </el-result>
</template>

<style scoped>
.el-result {
  height: 100vh;
  width: 100vw;
}
</style>
