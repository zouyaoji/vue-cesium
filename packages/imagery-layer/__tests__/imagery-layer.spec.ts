import { VcComponentPublicInstance, ReadyObj } from '@vue-cesium/utils/types'
import { mount, config } from '@vue/test-utils'
import VcLayerImagery from '../src'
import VcViewer from '@vue-cesium/viewer'

const option = {
  cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
}

config.global.config.globalProperties = {}
config.global.config.globalProperties.$VueCesium = option

const App = {
  components: {
    VcViewer,
    VcLayerImagery
  },
  template: `
    <div class="test-viewer">
      <vc-viewer @ready="onViewerReady">
        <vc-layer-imagery ref="layer" :imageryProvider="imageryProvider" :alpha="alpha" :brightness="brightness" :contrast="contrast"></vc-layer-imagery>
      </vc-viewer>
    </div>
  `,
  data () {
    return {
      imageryProvider: void 0,
      alpha: 0.8,
      brightness: 0.7,
      contrast: 0.6
    }
  },
  methods: {
    onViewerReady ({ Cesium, viewer }) {
      this.imageryProvider = new Cesium.OpenStreetMapImageryProvider({
        url: 'https://a.tile.openstreetmap.org/',
        maximumLevel: 17
      })
    }
  }
}

describe('VcLayerImagery', () => {
  test('render test', async () => {
    const wrapper = mount(App)
    expect(wrapper.vm.$refs.layer).toBeDefined()
    const testVm = wrapper.vm.$refs.layer as VcComponentPublicInstance
    const readyObj: ReadyObj = await testVm.createPromise
    let layer = readyObj.cesiumObject as Cesium.ImageryLayer
    expect(layer instanceof Cesium.ImageryLayer).toBe(true)
    expect(layer.imageryProvider instanceof Cesium.OpenStreetMapImageryProvider).toBe(true)
    expect(layer.imageryProvider.maximumLevel).toEqual(17)
    expect(layer.alpha).toEqual(0.8)
    expect(layer.brightness).toEqual(0.7)
    expect(layer.contrast).toEqual(0.6)
    await testVm.unload()
    layer = testVm.getCesiumObject() as Cesium.ImageryLayer
    expect(layer).toBeUndefined()
    await testVm.load()
    layer = testVm.getCesiumObject() as Cesium.ImageryLayer
    expect(layer).toBeDefined()
  }, 10000)
})
