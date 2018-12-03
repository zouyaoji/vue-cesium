<template>
  <i>
    <slot></slot>
  </i>
</template>
<script>
import commonMixin from '../../mixins/common.js'
export default {
  name: 'polyline-collection',
  mixins: [commonMixin('Primitives')],
  props: {
    modelMatrix: {
      type: Object
    },
    debugShowBoundingVolume: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    modelMatrix () {
      this.reload()
    },
    debugShowBoundingVolume (val) {
      this.originInstance.debugShowBoundingVolume = val
    }
  },
  methods: {
    load () {
      const { Cesium, viewer, modelMatrix, debugShowBoundingVolume } = this
      let polylineCollection = new Cesium.PolylineCollection({
        modelMatrix: modelMatrix,
        debugShowBoundingVolume: debugShowBoundingVolume
      })
      this.originInstance = viewer.scene.primitives.add(polylineCollection)
    }
  }
}
</script>
