<script lang="ts" setup>
import MarkdownIt from 'markdown-it'
import { computed } from 'vue'

const props = defineProps({
  content: { type: String, required: true }
})

const md = new MarkdownIt()

const attr = 'rel="noreferrer noopenner" target="_blank"'

const parsed = computed(() => {
  // Note this is relatively arbitrary so that this could be buggy.
  return md
    .render(props.content)
    .replace(
      /#(\d+) by/g,
      `<a href="https://github.com/zouyaoji/vue-cesium/pull/$1" ${attr}>#$1</a> by`
    )
    .replace(
      /@([\w-]+)/g,
      `<a href="https://github.com/$1" ${attr}>@$1</a>`
    )
})
</script>

<template>
  <div class="markdown-wrapper" v-html="parsed" />
</template>

<style>
.markdown-wrapper h3 {
  margin-top: 1rem;
}
</style>
