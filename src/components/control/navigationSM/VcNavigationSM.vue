<template>
  <div :style="navigationContainerStyle" class="cesium-viewer-navigationContainer" ref="navigationContainer">
    <vc-compass-sm :enableCompassOuterRing="defaultOptions.enableCompassOuterRing" v-if="defaultOptions.enableCompass"></vc-compass-sm>
    <vc-zoom-control-sm v-if="defaultOptions.enableZoomControl"></vc-zoom-control-sm>
  </div>
</template>
<script>
import cmp from '../../../mixins/virtualCmp'
import VcCompassSM from './VcCompassSM.vue'
import VcZoomControlSM from './VcZoomControlSM.vue'
import '../../../assets/styles/components/navigation-sm.css'
export default {
  name: 'vc-navigation-sm',
  components: {
    'vc-compass-sm': VcCompassSM,
    'vc-zoom-control-sm': VcZoomControlSM
  },
  data () {
    return {
      defaultOptions: {
        enableCompass: true,
        enableCompassOuterRing: true,
        enableZoomControl: true
      },
      ncTop: 0
    }
  },
  mixins: [cmp],
  props: {
    options: Object
  },
  computed: {
    navigationContainerStyle: function () {
      return {
        top: this.ncTop + 'px'
      }
    }
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
      Object.assign(this.defaultOptions, this.options)
      this.viewer.widgetResized.addEventListener(this.widgetResized)
      this.widgetResized()
    },
    async mount () {
      return true
    },
    async unmount () {
      return true
    },
    widgetResized () {
      const { viewer } = this
      let ncTop = 0
      viewer._toolbar && (ncTop += viewer._toolbar.getBoundingClientRect().height)
      this.ncTop = ncTop
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
