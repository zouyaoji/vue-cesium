import type { MarkdownRenderer } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'
import buildPkg from '@vue-cesium/build'
import { camelize } from '@vue/shared'

const { docRoot } = buildPkg

interface ContainerOpts {
  marker?: string | undefined
  validate?: (params: string) => boolean
  render?: MarkdownRenderer['renderer']['rules']['container']
}
function createDemoContainer(md: MarkdownRenderer): ContainerOpts {
  return {
    validate(params) {
      // eslint-disable-next-line regexp/no-super-linear-backtracking
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens, idx) {
      // eslint-disable-next-line regexp/no-super-linear-backtracking
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''

        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(
            path.resolve(docRoot, 'examples', `${sourceFile}.vue`),
            'utf-8'
          )
        }
        if (!source)
          throw new Error(`Incorrect source file: ${sourceFile}`)

        // 生成组件名：examples/controls/vc-navigation/usage -> EpControlsVcNavigationUsage
        // 保持与 markdown-transform.ts 中的逻辑一致
        const componentPath = sourceFile.replaceAll('/', '-')
        const componentName = camelize(`Ep-${componentPath}`)

        return `<Demo source="${encodeURIComponent(
          md.render(`\`\`\` vue\n${source}\`\`\``)
        )}" path="${sourceFile}" raw-source="${encodeURIComponent(
          source
        )}" description="${encodeURIComponent(md.render(description))}">
  <template #source><${componentName} /></template>`
      }
      else {
        return '</Demo>\n'
      }
    }
  }
}

export default createDemoContainer
