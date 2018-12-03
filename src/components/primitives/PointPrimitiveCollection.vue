<template>
  <i>
    <slot></slot>
  </i>
</template>
<script>
import commonMixin from '../../mixins/common.js'
export default {
  name: 'point-collection',
  mixins: [commonMixin('Primitives')],
  props: {
    modelMatrix: {
      type: Object
    },
    debugShowBoundingVolume: {
      type: Boolean,
      default: false
    },
    blendOption: {
      type: Number
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
      const { Cesium, viewer, modelMatrix, debugShowBoundingVolume, blendOption } = this
      let pointCollection = new Cesium.PointPrimitiveCollection({
        modelMatrix: modelMatrix,
        debugShowBoundingVolume: debugShowBoundingVolume,
        blendOption: blendOption
      })
      this.originInstance = viewer.scene.primitives.add(pointCollection)
    }
  }
}
</script>
