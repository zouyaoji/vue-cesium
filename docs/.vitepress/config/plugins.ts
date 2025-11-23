import type { MarkdownRenderer } from 'vitepress'
import mdContainer from 'markdown-it-container'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import { ApiTableContainer } from '../plugins/api-table'
import createDemoContainer from '../plugins/demo'
import externalLinkIcon from '../plugins/external-link-icon'
import headers from '../plugins/headers'
import tableWrapper from '../plugins/table-wrapper'
import tag from '../plugins/tag'

import tooltip from '../plugins/tooltip'

export function mdPlugin(md: MarkdownRenderer) {
  md.use(headers)
  md.use(externalLinkIcon)
  md.use(tableWrapper)
  md.use(tooltip)
  md.use(tag)
  md.use(mdContainer, 'demo', createDemoContainer(md))
  md.use(ApiTableContainer)
  md.use(groupIconMdPlugin as unknown as (md: MarkdownRenderer) => void)
}
