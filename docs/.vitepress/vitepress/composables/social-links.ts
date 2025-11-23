import type { Component } from 'vue'

import GitHubIcon from '~icons/ri/github-fill'

export function useSocialLinks() {
  return [
    {
      link: 'https://github.com/zouyaoji/vue-cesium',
      icon: GitHubIcon as Component,
      text: 'GitHub'
    }
  ]
}
