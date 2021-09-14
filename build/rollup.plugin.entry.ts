import path from 'path'
import type { Plugin } from 'rollup'

export default function entryPlugin(): Plugin {
  return {
    name: 'vue-cesium-entry-plugin',
    transform(code, id) {
      if (id.includes('packages')) {
        return {
          code: code.replace(/@vue-cesium\//g, `${path.relative(path.dirname(id), path.resolve(__dirname, '../packages'))}/`),
          map: null
        }
      }
      return { code, map: null }
    }
  }
}
