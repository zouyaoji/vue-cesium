<script lang="ts" setup>
import { computed } from 'vue'
import homeLocale from '../../../i18n/pages/home.json'
import { useLang } from '../../composables/lang'

defineProps<{ round?: boolean }>()
const lang = useLang()
const homeLang = computed(() => homeLocale[lang.value])
</script>

<template>
  <div class="join">
    <el-tooltip placement="top" :hide-after="1000" :offset="20">
      <template #content>
        {{ homeLang['21'] }}
        <a href="mailto:370681295@qq.com" target="_blank">
          &nbsp;370681295@qq.com
        </a>
      </template>
      <a href="mailto:370681295@qq.com" target="_blank">
        <el-button style="overflow: hidden" :round="round">{{
          homeLang['20']
        }}</el-button>
      </a>
    </el-tooltip>
  </div>
</template>
