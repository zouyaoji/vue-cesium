import { useData } from 'vitepress'
import { computed } from 'vue'
import editLinkLocale from '../../i18n/component/edit-link.json'
import { useLang } from '../composables/lang'
import { useLocale } from '../composables/locale'
import { defaultLang } from '../constant'
import { createGitHubUrl } from '../utils' // createCrowdinUrl

export function useEditLink() {
  const { page, theme, frontmatter } = useData()
  const lang = useLang()
  const editLink = useLocale(editLinkLocale)

  const canEditSource = computed(() => {
    return lang.value === defaultLang
  })

  const url = computed(() => {
    // if (canEditSource.value) {
    const {
      repo,
      docsDir = '',
      docsBranch = 'dev',
      docsRepo = repo,
      editLinks
    } = theme.value
    const showEditLink
      = frontmatter.value.editLink != null
        ? frontmatter.value.editLink
        : editLinks
    const { relativePath } = page.value
    if (!showEditLink || !relativePath || !repo) {
      return null
    }
    return createGitHubUrl(
      docsRepo,
      docsDir,
      docsBranch,
      relativePath,
      '',
      ''
    )
    // }

    // return createCrowdinUrl(lang.value)
  })
  const text = computed(() => {
    return editLink.value['edit-on-github']

    // return canEditSource.value
    //   ? editLink.value['edit-on-github']
    //   : editLink.value['edit-on-crowdin']
  })

  return {
    url,
    text
  }
}
