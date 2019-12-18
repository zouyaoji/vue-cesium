import PostProcessStageCollection from './PostProcessStageCollection.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PostProcessStageCollection.name, PostProcessStageCollection)
}

export default plugin

export {
  PostProcessStageCollection,
  plugin as install
}
