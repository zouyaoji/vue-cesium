import Vue from 'vue'
// import { instanceOf } from '../util/assert'
const methods = {
  /**
   * @return {IndexedCollectionAdapter}
   * @protected
   */
  getImageryLayers () {
    throw new Error('Not implemented method')
  },
  /**
   * @param {Feature|Vue|Object} feature
   * @return {void}
   */
  add (layer) {
    console.log('add')
    layer = layer instanceof Vue ? layer.$layer : layer
    this.getImageryLayers().add(layer)
  },
  remove (layer) {
    if (layer instanceof Vue) {
      layer = layer.$feature
    } else {
      // feature = this.getFeatureById(feature.id)
    }
    // if (!layer) return

    // if (this.getFeaturesTarget().has(layer)) {
    //   this.getFeaturesTarget().remove(layer)
    // }
  },

  getServices () {
    const vm = this

    return {
      get imageryLayersContainer () { return vm }
    }
  }
}

export default {
  methods
}
