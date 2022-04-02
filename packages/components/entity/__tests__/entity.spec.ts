/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-02-10 11:01:48
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\entity\__tests__\entity.spec.ts
 */
import { VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { mount, config } from '@vue/test-utils'
import VcEntity from '../src'
import VcViewer from '@vue-cesium/components/viewer'
import { VcConfigProvider } from '../../config-provider'
// import { createPointerEvent } from '@vue-cesium/utils/private/test-util'

const App = {
  components: {
    VcViewer,
    VcEntity,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
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
      </vc-config-provider>
    </div>
  `,
  data() {
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
    click(e) {
      console.log(e)
    }
  }
}

describe('VcEntity', () => {
  test('render test', async () => {
    const wrapper = mount(App)
    expect(wrapper.vm.$refs.entity).toBeDefined()
    const testVm = wrapper.vm.$refs.entity as VcComponentPublicInstance
    const readyObj: VcReadyObject | undefined = await testVm.creatingPromise
    let entity = readyObj?.cesiumObject as Cesium.Entity
    expect(entity instanceof Cesium.Entity).toBe(true)
    expect(entity.position?.getValue(Cesium.JulianDate.now()).equalsEpsilon(Cesium.Cartesian3.fromDegrees(108, 32), Cesium.Math.EPSILON6)).toBe(true)
    expect(entity.point).toBeDefined()
    expect(entity.label).toBeDefined()
    expect(entity.billboard).toBeDefined()
    expect(entity.point?.pixelSize?.getValue(Cesium.JulianDate.now())).toEqual(28)
    expect(entity.point?.color?.getValue(Cesium.JulianDate.now())).toEqual(Cesium.Color.fromCssColorString('red'))
    expect(entity.label?.text?.getValue(Cesium.JulianDate.now())).toEqual('Hello VueCesium')
    expect(entity.billboard?.image?.getValue(Cesium.JulianDate.now())).toEqual('https://zouyaoji.top/vue-cesium/favicon.png')
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
    await testVm.unload?.()
    entity = testVm.getCesiumObject?.() as Cesium.Entity
    expect(entity).toBeUndefined()
    await testVm.load?.()
    entity = testVm.getCesiumObject?.() as Cesium.Entity
    expect(entity).toBeDefined()
  }, 10000)
})
