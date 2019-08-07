
<script>
import CesiumNavigation from 'es6-cesium-navigation'
import cmp from '@/mixins/virtualCmp'
export default {
  name: 'cesium-navigation',
  mixins: [cmp],
  props: {
    options: Object
  },
  watch: {
    options: {
      handler () {
        this.reload()
      },
      deep: true
    }
  },
  methods: {
    createCesiumObject () {
      const { viewer, options } = this
      return new CesiumNavigation(viewer, options)
    },
    mount () {
    },
    unload () {
      Cesium.defined(this.cesiumNavigation) && this.viewer.cesiumWidget.cesiumNavigation.destroy()
    }
  },
  stubVNode: {
    empty () {
      return this.$options.name
    }
  },
  created () {
    Object.defineProperties(this, {
      cesiumNavigation: {
        enumerable: true,
        get: () => this.$services && this.cesiumObject
      }
    })
  }
}
</script>
