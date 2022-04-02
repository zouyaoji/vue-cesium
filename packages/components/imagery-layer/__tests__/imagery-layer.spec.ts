/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-02-10 11:03:19
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\imagery-layer\__tests__\imagery-layer.spec.ts
 */
import { VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { mount, config } from '@vue/test-utils'
import VcLayerImagery from '../src'
import VcViewer from '@vue-cesium/components/viewer'
import { VcConfigProvider } from '../../config-provider'

const App = {
  components: {
    VcViewer,
    VcLayerImagery,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer @ready="onViewerReady">
          <vc-layer-imagery ref="layer" :imageryProvider="imageryProvider" :alpha="alpha" :brightness="brightness" :contrast="contrast"></vc-layer-imagery>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `,
  data() {
    return {
      imageryProvider: void 0,
      alpha: 0.8,
      brightness: 0.7,
      contrast: 0.6
    }
  },
  methods: {
    onViewerReady({ Cesium, viewer }) {
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
    const readyObj: VcReadyObject | undefined = await testVm.creatingPromise
    let layer = readyObj?.cesiumObject as Cesium.ImageryLayer
    expect(layer instanceof Cesium.ImageryLayer).toBe(true)
    expect(layer.imageryProvider instanceof Cesium.OpenStreetMapImageryProvider).toBe(true)
    expect(layer.imageryProvider.maximumLevel).toEqual(17)
    expect(layer.alpha).toEqual(0.8)
    expect(layer.brightness).toEqual(0.7)
    expect(layer.contrast).toEqual(0.6)
    await testVm.unload?.()
    layer = testVm.getCesiumObject?.() as Cesium.ImageryLayer
    expect(layer).toBeUndefined()
    await testVm.load?.()
    layer = testVm.getCesiumObject?.() as Cesium.ImageryLayer
    expect(layer).toBeDefined()
  }, 10000)
})
