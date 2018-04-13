const types = {}

const getParent = $component =>
  $component.abstract || $component.$el === $component.$children[0].$el
    ? getParent($component.$parent)
    : $component

class Mixin {
  constructor (prop) {
    this.methods = {
      ready () {
        const $parent = getParent(this.$parent)
        const Cesium = (this.BMap = $parent.Cesium)
        const viewer = (this.viewer = $parent.viewer)
        this.load()
        this.$emit('ready', {
          Cesium,
          viewer
        })
      },
      transmitEvent (e) {
        this.$emit(e.type.replace(/^on/, ''), e)
      },
      reload () {
        this &&
          this.Cesium &&
          this.$nextTick(() => {
            this.unload()
            this.$nextTick(this.load)
          })
      },
      unload () {
        const { viewer, originInstance } = this
        try {
          switch (prop.type) {
            case 'search':
              return originInstance.clearResults()
            case 'autoComplete':
            case 'lushu':
              return originInstance.dispose()
            case 'markerClusterer':
              return originInstance.clearMarkers()
            default:
              viewer[types[prop.type].unload](originInstance)
          }
        } catch (e) {}
      }
    }
    this.computed = {
      renderByParent () {
        return this.$parent.preventChildrenRender
      }
    }
    this.mounted = function () {
      const $parent = getParent(this.$parent)
      const viewer = $parent.viewer
      const { ready } = this
      viewer ? ready() : $parent.$on('ready', ready)
    }
    this.beforeDestroy = function () {
      const { unload, renderByParent, $parent } = this
      if (renderByParent) {
        $parent.reload()
      }
      unload()
    }
  }
}

export default type => new Mixin({ type })
