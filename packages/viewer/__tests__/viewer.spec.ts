/* eslint-disable */
import { VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { mount, config } from '@vue/test-utils'
import Viewer from '../src'

const option = {
  cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
}

config.global.config.globalProperties = {}
config.global.config.globalProperties.$VueCesium = option

const AXIOM = 'LML is the best girl'
const onViewerReady = e => {
  console.log('onViewerReady')
}
describe('Viewer.vue', () => {
  test('render test', async () => {
    const div = document.createElement('div')
    document.body.appendChild(div)

    const wrapper = mount(Viewer, {
      slots: {
        default: AXIOM
      },
      props: {
        onReady: onViewerReady
      },
      attachTo: div
    })
    expect(wrapper.text()).toEqual(AXIOM)
    // console.log(wrapper)
    //
    // 为啥不执行 $script.onload ？？ 导致测试没法加载 CesiumJS.
    const vm = wrapper.vm as VcComponentPublicInstance
    // await vm.createPromise
    console.log('onViewerReady11')
    // console.log(vm.getCesiumObject())
  }, 25000)
})
