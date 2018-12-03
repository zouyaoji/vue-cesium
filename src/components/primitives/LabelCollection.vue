<template>
  <i :id="[$options.name]" :class="[$options.name]" style="display: none !important;">
    <slot id="labelcollection"></slot>
  </i>
</template>

<script>
import commonMixin from '../../mixins/common.js'
export default {
  name: 'label-collection',
  mixins: [commonMixin('Primitives')],
  props: {
    modelMatrix: {
      type: Object
    },
    debugShowBoundingVolume: {
      type: Boolean,
      default: false
    },
    scene: {
      type: Object
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
      const { Cesium, viewer, modelMatrix, debugShowBoundingVolume, scene, blendOption } = this
      let labelCollection = new Cesium.LabelCollection({
        modelMatrix: modelMatrix,
        debugShowBoundingVolume: debugShowBoundingVolume,
        scene: scene,
        blendOption: blendOption
      })
      this.originInstance = viewer.scene.primitives.add(labelCollection)
    }
  }
}
</script>
