<template>
  <div class="vc-html-container" v-show="show">
    <slot></slot>
  </div>
</template>

<script>
import cmp from '../../../mixins/virtualCmp'
import { pixelOffset, position, show } from '../../../mixins/mixinProps'
import { makeCartesian2, makeCartesian3 } from '../../../utils/cesiumHelpers'
export default {
  name: 'vc-overlay-html',
  mixins: [cmp, pixelOffset, position, show],
  props: {
    hiddenOnBack: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      nowaiting: true
    }
  },
  methods: {
    async createCesiumObject () {
      const { viewer, onPreRender } = this
      viewer.scene.preRender.addEventListener(onPreRender)
      return this.$el
    },
    async mount () {
      return true
    },
    async unmount () {
      const { viewer, onPreRender } = this
      viewer.scene.preRender.removeEventListener(onPreRender)
      this.$el.style.display = 'none'
      return true
    },
    onPreRender () {
      const { viewer, position, pixelOffset, hiddenOnBack } = this
      const cartesian2 = makeCartesian2(pixelOffset)
      const cartesian3 = makeCartesian3(position)
      const scratch = {}
      const canvasPosition = viewer.scene.cartesianToCanvasCoordinates(cartesian3, scratch)
      if (Cesium.defined(canvasPosition)) {
        this.$el.style.left = canvasPosition.x + cartesian2.x + 'px'
        this.$el.style.top = canvasPosition.y + cartesian2.y + 'px'

        if (hiddenOnBack) {
          const cameraPosition = viewer.camera.position
          let cameraHeight = viewer.scene.globe.ellipsoid.cartesianToCartographic(cameraPosition).height
          cameraHeight += 1 * viewer.scene.globe.ellipsoid.maximumRadius
          if (Cesium.Cartesian3.distance(cameraPosition, cartesian3) > cameraHeight) {
            this.$el.style.display = 'none'
          } else {
            this.$el.style.display = 'block'
          }
        }
      }
    }
  },
  created () {
    Object.defineProperties(this, {
      element: {
        enumerable: true,
        get: () => this.cesiumObject
      }
    })
  }
}
</script>
