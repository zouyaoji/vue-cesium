import type { LooseDictionary } from '@vue-cesium/utils/types'
import type { ComponentPublicInstance, VNode } from 'vue'
import useModelToggle, { useModelToggleEmits } from '@vue-cesium/composables/private/use-model-toggle'
import { fabKey } from '@vue-cesium/utils/config'
import { hMergeSlot, hSlot } from '@vue-cesium/utils/private/render'
import { computed, defineComponent, h, provide, ref } from 'vue'
import VcBtn from '../btn'
import VcIcon from '../icon'
import defaultProps from './defaultProps'
import useFab from './use-fab'

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

    const slotScope = computed(() => ({ opened: showing.value }))

    const classes = computed(
      () =>
        `vc-fab z-fab vc-row inline justify-center`
        + ` vc-fab--align-${props.verticalActionsAlign} ${formClass.value}${
          showing.value === true ? ' vc-fab--opened' : ' vc-fab--closed'}`
    )

    const actionClass = computed(
      () =>
        'vc-fab__actions vc-flex no-wrap inline'
        + ` vc-fab__actions--${props.direction}`
        + ` vc-fab__actions--${showing.value === true ? 'opened' : 'closed'}`
    )

    const iconHolderClass = computed(() => 'vc-fab__icon-holder ' + ` vc-fab__icon-holder--${showing.value === true ? 'opened' : 'closed'}`)

    function getIcon(kebab, camel) {
      const slotFn = slots[kebab]
      const classes = `vc-fab__${kebab} absolute-full`

      return slotFn === void 0 ? h(VcIcon, { class: classes, name: props[camel] } as any) : h('div', { class: classes }, slotFn(slotScope.value))
    }

    function getTriggerContent() {
      const child: Array<VNode> = []

      props.hideIcon !== true
      && child.push(h('div', { class: iconHolderClass.value }, [getIcon('icon', 'icon'), getIcon('active-icon', 'activeIcon')]))

      if (props.label !== '' || slots.label !== void 0) {
        child[labelProps.value.action](h('div', labelProps.value.data, slots.label !== void 0 ? slots.label(slotScope.value) : [props.label]))
      }

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
              'ref': triggerRef,
              'class': formClass.value,
              ...props,
              'noWrap': true,
              'stack': props.stacked,
              'align': void 0,
              'icon': void 0,
              'label': void 0,
              'noCaps': true,
              'fab': true,
              'flat': props.flat,
              'size': props.size,
              'aria-expanded': showing.value === true ? 'true' : 'false',
              'aria-haspopup': 'true',
              'onClick': toggle
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
  'type'?: 'a' | 'submit' | 'button' | 'reset' | undefined
  /**
   * Use 'outline' design for Fab button.
   */
  'outline'?: boolean | undefined
  /**
   * Use 'push' design for Fab button.
   */
  'push'?: boolean | undefined
  /**
   * Use 'flat' design for Fab button.
   */
  'flat'?: boolean | undefined
  /**
   * Remove shadow.
   */
  'unelevated'?: boolean | undefined
  /**
   * Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set.
   */
  'padding'?: string | undefined
  /**
   * Color name for component from the css color palette.
   */
  'color'?: string | undefined
  /**
   * Overrides text color (if needed); Color name from the css color palette.
   */
  'textColor'?: string | undefined
  /**
   * Apply the glossy effect over the button.
   */
  'glossy'?: boolean | undefined
  /**
   * Display label besides the FABs, as external content.
   */
  'externalLabel'?: boolean | undefined
  /**
   * The label that will be shown when Fab is extended.
   */
  'label'?: string | number | undefined
  /**
   * Position of the label around the icon.
   */
  'labelPosition'?: 'top' | 'right' | 'bottom' | 'left' | undefined
  /**
   * Hide the label; Useful for animation purposes where you toggle the visibility of the label.
   */
  'hideLabel'?: boolean | undefined
  /**
   * Class definitions to be attributed to the label container.
   */
  'labelClass'?: any[] | string | any | undefined
  /**
   * Style definitions to be attributed to the label container.
   */
  'labelStyle'?: any[] | string | any | undefined
  /**
   * Apply a rectangle aspect to the FAB.
   */
  'square'?: boolean | undefined
  /**
   * Put component in disabled mode.
   */
  'disable'?: boolean | undefined
  /**
   * Tabindex HTML attribute value.
   */
  'tabindex'?: number | string | undefined
  /**
   * Controls state of fab actions (showing/hidden); Works best with v-model directive, otherwise use along listening to 'update:modelValue' event.
   */
  'modelValue'?: boolean
  /**
   * Icon name following VueCesium convention; Make sure you have the icon library installed unless you are using 'img:' prefix.
   */
  'icon'?: string | undefined
  /**
   * Icon name following VueCesium convention; Make sure you have the icon library installed unless you are using 'img:' prefix.
   */
  'activeIcon'?: string | undefined
  /**
   * Hide the icon (don't use any).
   */
  'hideIcon'?: boolean | undefined
  /**
   * Direction to expand Fab Actions to.
   * Default value: right
   */
  'direction'?: 'up' | 'right' | 'down' | 'left' | undefined
  /**
   * The side of the Fab where Fab Actions will expand (only when direction is 'up' or 'down').
   * Default value: center
   */
  'verticalActionsAlign'?: 'left' | 'center' | 'right' | undefined
  /**
   * By default, Fab Actions are hidden when user navigates to another route and this prop disables this behavior.
   */
  'persistent'?: boolean | undefined
  /**
   * Emitted when fab actions are shown/hidden; Captured by v-model directive.
   * @param value New state (showing/hidden)
   */
  'onUpdate:modelValue'?: (value: boolean) => void
  /**
   * Emitted after component has triggered show()
   * @param evt JS event object
   */
  'onShow'?: (evt: LooseDictionary) => void
  /**
   * Emitted when component triggers show() but before it finishes doing it
   * @param evt JS event object
   */
  'onBeforeShow'?: (evt: LooseDictionary) => void
  /**
   * Emitted after component has triggered hide()
   * @param evt JS event object
   */
  'onHide'?: (evt: LooseDictionary) => void
  /**
   * Emitted when component triggers hide() but before it finishes doing it
   * @param evt JS event object
   */
  'onBeforeHide'?: (evt: LooseDictionary) => void
}

export interface VcFabSlots {
  /**
   * This is where VcFabActions may go into
   */
  'default': () => VNode[]
  /**
   * Slot specifically designed for a VcTooltip
   */
  'tooltip': () => VNode[]
  /**
   * Slot for icon shown when FAB is closed; Suggestion: VcIcon
   * @param scope
   */
  'icon': (scope: {
    /**
     * FAB is opened
     */
    opened: boolean
  }) => VNode[]
  /**
   * Slot for icon shown when FAB is opened; Suggestion: VcIcon
   * @param scope
   */
  'active-icon': (scope: {
    /**
     * FAB is opened
     */
    opened: boolean
  }) => VNode[]
  /**
   * Slot for label
   * @param scope
   */
  'label': (scope: {
    /**
     * FAB is opened
     */
    opened: boolean
  }) => VNode[]
}

export interface VcFabRef extends ComponentPublicInstance<VcFabProps> {
  /**
   * Expands fab actions list
   * @param evt JS event object
   */
  show: (evt?: LooseDictionary) => void
  /**
   * Collapses fab actions list
   * @param evt JS event object
   */
  hide: (evt?: LooseDictionary) => void
  /**
   * Triggers component to toggle between show/hide
   * @param evt JS event object
   */
  toggle: (evt?: LooseDictionary) => void
}
