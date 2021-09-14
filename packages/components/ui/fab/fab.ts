import { h, defineComponent, ref, computed, provide, getCurrentInstance, ExtractPropTypes } from 'vue'
import useModelToggle, { useModelToggleEmits } from '@vue-cesium/composables/private/use-model-toggle'
import { hSlot, hMergeSlot } from '@vue-cesium/utils/private/render'
import { fabKey } from '@vue-cesium/utils/config'
import useFab from './use-fab'
import VcBtn from '../btn'
import VcIcon from '../icon'
import defaultProps from './defaultProps'

export default defineComponent({
  name: 'VcFab',

  props: defaultProps,

  emits: useModelToggleEmits,

  setup(props: ExtractPropTypes<typeof defaultProps>, { slots }) {
    const triggerRef = ref(null)

    const showing = ref(props.modelValue === true)
    const { formClass, labelProps } = useFab(props, showing)

    const hideOnRouteChange = computed(() => props.persistent !== true)

    const { hide, toggle } = useModelToggle({
      showing,
      hideOnRouteChange
    })

    const classes = computed(
      () =>
        'vc-fab z-fab row inline justify-center' +
        ` vc-fab--align-${props.verticalActionsAlign} ${formClass.value}` +
        (showing.value === true ? ' vc-fab--opened' : '')
    )

    const actionClass = computed(() => 'vc-fab__actions flex no-wrap inline' + ` vc-fab__actions--${props.direction}`)

    function getTriggerContent() {
      const child = []

      props.hideIcon !== true &&
        child.push(
          h('div', { class: 'vc-fab__icon-holder' }, [
            h(VcIcon, {
              class: 'vc-fab__icon absolute-full',
              name: props.icon
            }),

            h(VcIcon, {
              class: 'vc-fab__active-icon absolute-full',
              name: props.activeIcon
            })
          ])
        )

      props.label !== '' && child[labelProps.value.action](h('div', labelProps.value.data, [props.label]))

      return hMergeSlot(slots.tooltip, child)
    }

    provide(fabKey, {
      showing,

      onChildClick(evt) {
        props.hideActionOnClick && hide(evt)

        if (triggerRef.value !== null) {
          triggerRef.value.$el.focus()
        }
      }
    })

    return () =>
      h(
        'div',
        {
          class: classes.value
        },
        [
          h(
            VcBtn,
            {
              ref: triggerRef,
              class: formClass.value,
              ...props,
              noWrap: true,
              stack: props.stacked,
              align: void 0,
              icon: void 0,
              label: void 0,
              noCaps: true,
              fab: true,
              flat: props.flat,
              size: props.size,
              'aria-expanded': showing.value === true ? 'true' : 'false',
              'aria-haspopup': 'true',
              onClick: toggle
            },
            getTriggerContent
          ),

          h('div', { class: actionClass.value }, hSlot(slots.default))
        ]
      )
  }
})
