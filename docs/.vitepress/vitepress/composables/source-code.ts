import type { Ref } from 'vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

import { createGitHubUrl } from '../utils'

export function useSourceCode(path: Ref<string>) {
  const { theme } = useData()

  const demoUrl = computed(() => {
    const {
      repo,
      docsDir = '',
      docsBranch = 'dev',
      docsRepo = repo
    } = theme.value

    return createGitHubUrl(docsRepo, docsDir, docsBranch, path.value)
  })

  return demoUrl
}
