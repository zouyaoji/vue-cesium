import { mount } from '@vue/test-utils'
import Entity from '../src/index.vue'

const AXIOM = 'LML is the best girl'

describe('Entity.vue', () => {
  test('render test', () => {
    const wrapper = mount(Entity, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
