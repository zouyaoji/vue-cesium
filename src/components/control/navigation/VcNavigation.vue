<template>
  <div class="vc-navigationContainer" v-if="canRender">
    <div class="vc-navigation">
      <div class="vc-navigation-navs">
        <div class="vc-navigation-control" v-if="defaultOptions.enableCompass">
          <vc-compass :enableCompassOuterRing="defaultOptions.enableCompassOuterRing"></vc-compass>
        </div>
        <div class="vc-navigation-control" v-if="defaultOptions.enableZoomControl">
          <vc-zoom-control
            :defaultResetView="defaultOptions.enableZoomControl.defaultResetView"
            :zoomAmount="defaultOptions.enableZoomControl.zoomAmount || 2"
            :overrideCamera="defaultOptions.enableZoomControl.overrideCamera || false"
          ></vc-zoom-control>
        </div>
      </div>
      <div class="vc-navigation-controls">
        <div class="vc-navigation-control" v-if="defaultOptions.enablePrintView">
          <vc-print-view-btn
            :printAutomatically="defaultOptions.enablePrintView.printAutomatically"
            :showCredit="defaultOptions.enablePrintView.showCredit"
          ></vc-print-view-btn>
        </div>
        <div class="vc-navigation-control" v-if="defaultOptions.enableMyLocation">
          <vc-my-location></vc-my-location>
        </div>
      </div>
    </div>
    <div :style="ldStyle" class="vc-location-distance">
      <vc-location-bar :mouseCoords="mouseCoords" v-if="mouseCoords !== undefined && defaultOptions.enableLocationBar"></vc-location-bar>
      <vc-distance-legend v-if="defaultOptions.enableDistanceLegend"></vc-distance-legend>
    </div>
  </div>
</template>

<script>
import '../../../assets/styles/components/navigation.scss'
import cmp from '../../../mixins/virtualCmp'
import MouseCoords from '../../../exts/MouseCoords'
import VcCompass from './VcCompass.vue'
import VcZoomControl from './VcZoomControl.vue'
import VcDistanceLegend from './VcDistanceLegend.vue'
import VcLocationBar from './VcLocationBar.vue'
import VcPrintViewBtn from './VcPrintViewBtn.vue'
import VcMyLocation from './VcMyLocation.vue'

export default {
  name: 'vc-navigation',
  components: {
    VcCompass,
    VcZoomControl,
    VcDistanceLegend,
    VcLocationBar,
    VcPrintViewBtn,
    VcMyLocation
  },
  mixins: [cmp],
  props: {
    options: Object
  },
  data () {
    return {
      defaultOptions: {
        enableCompass: true,
        enableCompassOuterRing: true,
        enableZoomControl: {
          zoomAmount: 2,
          defaultResetView: {
            lng: 105, lat: 29.999999999999993, height: 19059568.497290563
          },
          overrideCamera: false
        },
        enableDistanceLegend: true,
        enableLocationBar: {
          gridFileUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/WW15MGH.DAC'
        },
        enablePrintView: {
          showCredit: true,
          printAutomatically: false
        },
        enableMyLocation: true
      },
      ldBottom: 2,
      ldRight: 3,
      mouseCoords: undefined,
      canRender: false
    }
  },
  computed: {
    ldStyle: function () {
      return {
        bottom: this.ldBottom + 'px',
        right: this.ldRight + 'px'
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
      this.viewer.afterViewerChanged = new Cesium.Event()
      this.viewer.beforeViewerChanged = new Cesium.Event()
      this.viewer.widgetResized.addEventListener(this.widgetResized)
      Object.assign(this.defaultOptions, this.options)
      this.widgetResized()
      this.mouseCoords = new MouseCoords({ gridFileUrl: this.defaultOptions.enableLocationBar.gridFileUrl })
      // 避免控件先按默认的参数创建 然后又隐藏 导致视觉上的体验不优雅
      this.canRender = true
    },
    widgetResized () {
      this.ldBottom = this.viewer.timeline ? this.viewer.timeline.container.getBoundingClientRect().height + 2 : 2
      if (this.ldBottom === 2) {
        let ldRight = 3
        this.viewer.fullscreenButton && (ldRight += this.viewer.fullscreenButton.container.getBoundingClientRect().width)
        this.viewer.vrButton && (ldRight += this.viewer.vrButton.container.getBoundingClientRect().width)
        this.ldRight = ldRight
      }
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
