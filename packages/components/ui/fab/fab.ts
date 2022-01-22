import { h, defineComponent, ref, computed, provide } from 'vue'
import type { VNode, ExtractPropTypes } from 'vue'
import useModelToggle, { useModelToggleEmits } from '@vue-cesium/composables/private/use-model-toggle'
import { hSlot, hMergeSlot } from '@vue-cesium/utils/private/render'
import { fabKey } from '@vue-cesium/utils/config'
import useFab from './use-fab'
import VcBtn from '../btn'
import VcIcon from '../icon'
import defaultProps from './defaultProps'

export const fabProps = defaultProps
export default defineComponent({
  name: 'VcFab',

  props: fabProps,

  emits: useModelToggleEmits,

  setup(props, { slots }) {
    const triggerRef = ref<typeof VcBtn>(null!)

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
      const child: Array<VNode> = []

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

// export type VcFabProps = ExtractPropTypes<typeof fabProps>

export interface VcFabProps {
  /**
   * Define the button HTML DOM type.
   * Default value: a
   */
  type?: 'a' | 'submit' | 'button' | 'reset' | undefined
  /**
   * Use 'outline' design for Fab button.
   */
  outline?: boolean | undefined
  /**
   * Use 'push' design for Fab button.
   */
  push?: boolean | undefined
  /**
   * Use 'flat' design for Fab button.
   */
  flat?: boolean | undefined
  /**
   * Remove shadow.
   */
  unelevated?: boolean | undefined
  /**
   * Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set.
   */
  padding?: string | undefined
  /**
   * Color name for component from the css color palette.
   */
  color?: string | undefined
  /**
   * Overrides text color (if needed); Color name from the css color palette.
   */
  textColor?: string | undefined
  /**
   * Apply the glossy effect over the button.
   */
  glossy?: boolean | undefined
  /**
   * Display label besides the FABs, as external content.
   */
  externalLabel?: boolean | undefined
  /**
   * The label that will be shown when Fab is extended.
   */
  label?: string | number | undefined
  /**
   * Position of the label around the icon.
   */
  labelPosition?: 'top' | 'right' | 'bottom' | 'left' | undefined
  /**
   * Hide the label; Useful for animation purposes where you toggle the visibility of the label.
   */
  hideLabel?: boolean | undefined
  /**
   * Class definitions to be attributed to the label container.
   */
  labelClass?: any[] | string | any | undefined
  /**
   * Style definitions to be attributed to the label container.
   */
  labelStyle?: any[] | string | any | undefined
  /**
   * Apply a rectangle aspect to the FAB.
   */
  square?: boolean | undefined
  /**
   * Put component in disabled mode.
   */
  disable?: boolean | undefined
  /**
   * Tabindex HTML attribute value.
   */
  tabindex?: number | string | undefined
  /**
   * Controls state of fab actions (showing/hidden); Works best with v-model directive, otherwise use along listening to 'update:modelValue' event.
   */
  modelValue?: boolean
  /**
   * Icon name following VueCesium convention; Make sure you have the icon library installed unless you are using 'img:' prefix.
   */
  icon?: string | undefined
  /**
   * Icon name following VueCesium convention; Make sure you have the icon library installed unless you are using 'img:' prefix.
   */
  activeIcon?: string | undefined
  /**
   * Hide the icon (don't use any).
   */
  hideIcon?: boolean | undefined
  /**
   * Direction to expand Fab Actions to.
   * Default value: right
   */
  direction?: 'up' | 'right' | 'down' | 'left' | undefined
  /**
   * The side of the Fab where Fab Actions will expand (only when direction is 'up' or 'down').
   * Default value: center
   */
  verticalActionsAlign?: 'left' | 'center' | 'right' | undefined
  /**
   * By default, Fab Actions are hidden when user navigates to another route and this prop disables this behavior.
   */
  persistent?: boolean | undefined
  /**
   * Emitted when fab actions are shown/hidden; Captured by v-model directive.
   * @param value New state (showing/hidden)
   */
  'onUpdate:modelValue'?: (value: boolean) => void
  /**
   * Emitted after component has triggered show().
   * @param evt JS event object
   */
  onShow?: (evt: any) => void
  /**
   * Emitted when component triggers show() but before it finishes doing it.
   * @param evt JS event object
   */
  onBeforeShow?: (evt: any) => void
  /**
   * Emitted after component has triggered hide().
   * @param evt JS event object
   */
  onHide?: (evt: any) => void
  /**
   * Emitted when component triggers hide() but before it finishes doing it.
   * @param evt JS event object
   */
  onBeforeHide?: (evt: any) => void
}
