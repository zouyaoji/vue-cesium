<script>
import CesiumNavigation from '../../../libs/navigation/viewerCesiumNavigationMixin'
import cmp from '../../../mixins/virtualCmp'
export default {
  name: 'vc-navigation',
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
    async createCesiumObject () {
      const { viewer, options } = this
      return new CesiumNavigation(viewer, options)
    },
    async mount () {
      return true
    },
    async unmount () {
      Cesium.defined(this.cesiumNavigation) && this.viewer.cesiumWidget.cesiumNavigation.destroy()
      return true
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
