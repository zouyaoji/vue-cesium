import ParticleSystem from './ParticleSystem.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(ParticleSystem.name, ParticleSystem)
}

export default plugin

export {
  ParticleSystem,
  plugin as install
}
