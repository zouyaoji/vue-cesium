import { mount } from '@vue/test-utils'
import Viewer from '../src/index.vue'

const AXIOM = 'LML is the best girl'

describe('Viewer.vue', () => {
  test('render test', () => {
    const wrapper = mount(Viewer, {
      slots: {
        default: AXIOM
      },
      props: {
        cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/Cesium/Cesium.js'
      }
    })
    expect(wrapper.text()).toEqual(AXIOM)
    // console.log(wrapper)
    const vm = wrapper.vm
    console.log(vm)
  })
})
