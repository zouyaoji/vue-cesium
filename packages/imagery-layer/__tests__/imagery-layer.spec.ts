import { mount } from '@vue/test-utils'
import ImageryLayer from '../src'

const AXIOM = 'LML is the best girl'

describe('ImageryLayer.vue', () => {
  test('render test', () => {
    const wrapper = mount(ImageryLayer, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
