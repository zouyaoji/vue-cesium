import PostProcessStage from './PostProcessStage.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PostProcessStage.name, PostProcessStage)
}

export default plugin

export {
  PostProcessStage,
  plugin as install
}
