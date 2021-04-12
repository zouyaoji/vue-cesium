import { VcComponentPublicInstance, ReadyObj } from '@vue-cesium/utils/types'
import { mount, config } from '@vue/test-utils'
import VcEntity from '../src'
import VcViewer from '@vue-cesium/viewer'
// import { createPointerEvent } from '@vue-cesium/utils/private/test-util'

const option = {
  cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
}

config.global.config.globalProperties = {}
config.global.config.globalProperties.$VueCesium = option

const App = {
  components: {
    VcViewer,
    VcEntity
  },
  template: `
    <div class="test-viewer">
      <vc-viewer>
        <vc-entity
        ref="entity"
        :billboard="billboard"
        :position="[108, 32]"
        :point="point"
        :label="label"
        :show="show"
        @click="click"
        >
        </vc-entity>
      </vc-viewer>
    </div>
  `,
  data () {
    return {
      show: true,
      name: 'vc-test-entity',
      point: {
        pixelSize: 28,
        color: 'red'
      },
      label: {
        text: 'Hello VueCesium',
        pixelOffset: [0, 80]
      },
      billboard: {
        image: 'https://zouyaoji.top/vue-cesium/favicon.png',
        scale: 0.5
      }
    }
  },
  methods: {
    click (e) {
      console.log(e)
    }
  }
}

describe('VcEntity', () => {
  test('render test', async () => {
    const wrapper = mount(App)
    expect(wrapper.vm.$refs.entity).toBeDefined()
    const testVm = wrapper.vm.$refs.entity as VcComponentPublicInstance
    const readyObj: ReadyObj = await testVm.createPromise
    let entity = readyObj.cesiumObject as Cesium.Entity
    expect(entity instanceof Cesium.Entity).toBe(true)
    expect(entity.position.getValue(void 0).equalsEpsilon(Cesium.Cartesian3.fromDegrees(108, 32), Cesium.Math.EPSILON6)).toBe(true)
    expect(entity.point).toBeDefined()
    expect(entity.label).toBeDefined()
    expect(entity.billboard).toBeDefined()
    expect(entity.point.pixelSize.getValue(void 0)).toEqual(28)
    expect(entity.point.color.getValue(void 0)).toEqual(Cesium.Color.fromCssColorString('red'))
    expect(entity.label.text.getValue(void 0)).toEqual('Hello VueCesium')
    expect(entity.billboard.image.getValue(void 0)).toEqual('https://zouyaoji.top/vue-cesium/favicon.png')
    // const positionDom = readyObj.viewer.scene.cartesianToCanvasCoordinates(entity.position.getValue(void 0), new Cesium.Cartesian2())
    // const pointerdownEvent = createPointerEvent('pointerdown', {
    //   clientX: positionDom.x,
    //   clientY: positionDom.y
    // })
    // const pointerupEvent = createPointerEvent('pointerup', {
    //   clientX: positionDom.x,
    //   clientY: positionDom.y
    // })
    // wrapper.find('canvas').element.dispatchEvent(pointerdownEvent)
    // wrapper.find('canvas').element.dispatchEvent(pointerupEvent)
    await testVm.unload()
    entity = testVm.getCesiumObject() as Cesium.Entity
    expect(entity).toBeUndefined()
    await testVm.load()
    entity = testVm.getCesiumObject() as Cesium.Entity
    expect(entity).toBeDefined()
  }, 10000)
})
