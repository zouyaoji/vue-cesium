const path = require('path')

module.exports = function (options = {}) {
  options = Object.assign({
    modules: []
  }, options)

  return {
    name: 'resolver',
    resolveId (importee, importer) {
      if (/\0/.test(importee)) return // ignore IDs with null character, these belong to other plugins

      // disregard entry module
      if (!importer) return

      const parts = importee.split(/[/\\]/)
      let id = parts.shift()

      if (id[0] === '.') {
        // an import relative to the parent dir of the importer
        id = path.resolve(importer, '..', importee)
      }

      const module = (options.modules || []).find(m => {
        return m.entry === id || m.entry === path.join(id, 'index.js')
      })
      if (!module) return

      return id
    }
  }
}
