<script setup lang="ts">
// eslint-disable-next-line vue/prefer-import-from-vue
import { isString } from '@vue/shared'
import { computed } from 'vue'
import ApiTyping from './vp-api-typing.vue'

const props = defineProps({
  values: {
    type: Array,
    required: true
  }
})

const processString = (s: unknown) => (isString(s) ? `'${s}'` : s)

const details = computed(() => props.values.map(processString).join(' | '))
</script>

<template>
  <ApiTyping type="enum" :details="details" />
</template>
