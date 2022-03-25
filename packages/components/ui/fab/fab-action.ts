/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-05 22:43:51
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\ui\fab\fab-action.ts
 */
import { h, defineComponent, computed, inject, getCurrentInstance, ComponentPublicInstance } from 'vue'
import type { VNode, ExtractPropTypes } from 'vue'
import { fabKey } from '@vue-cesium/utils/config'
import { hMergeSlot } from '@vue-cesium/utils/private/render'

import VcBtn from '../btn'
import VcIcon from '../icon'
import useFab from './use-fab'
import defaultPropsAction, { anchorMap } from './defaultPropsAction'
import { LooseDictionary } from '@vue-cesium/utils/types'

interface FabData {
  showing?: {
    value: boolean
  }
  onChildClick?(...args: any[]): any
}

export const fabActionProps = defaultPropsAction
export default defineComponent({
  name: 'VcFabAction',

  props: fabActionProps,

  emits: ['click'],

  setup(props, { slots, emit }) {
    const $fab = inject<FabData>(fabKey)

    const { formClass, labelProps } = useFab(props, $fab?.showing)

    const classes = computed(() => {
      let align = undefined
      if (props.anchor) {
        align = anchorMap[props.anchor]
      }
      return formClass.value + (align !== void 0 ? ` ${align}` : '')
    })

    const isDisabled = computed(() => props.disable === true || $fab?.showing?.value !== true)

    function click(e) {
      $fab?.onChildClick?.(e)
      emit('click', e)
    }

    function getContent() {
      const child: Array<VNode> = []

      props.icon !== '' && child.push(h(VcIcon, { name: props.icon }))

      props.label !== '' && child[labelProps.value.action](h('div', labelProps.value.data, [props.label]))

      return hMergeSlot(slots.default, child)
    }

    // expose public methods
    const vm = getCurrentInstance()
    Object.assign(vm?.proxy, { click })

    return () =>
      h(
        VcBtn,
        {
          class: classes.value,
          ...props,
          noWrap: true,
          stack: props.stacked,
          icon: void 0,
          label: void 0,
          noCaps: true,
          fabMini: true,
          disable: isDisabled.value,
          size: props.size,
          onClick: click
        },
        getContent
      )
  }
})

// export type VcFabActionProps = ExtractPropTypes<typeof fabActionProps>

export interface VcFabActionProps {
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
   * Remove shadow
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
   * Icon name following VueCesium convention; Make sure you have the icon library installed unless you are using 'img:' prefix.
   */
  icon?: string | undefined
  /**
   * How to align the Fab Action relative to Fab expand side; By default it uses the align specified in QFab.
   */
  anchor?: 'start' | 'center' | 'end' | undefined
  /**
   * Equivalent to Vue Router <router-link> 'to' property.
   */
  to?: string | any | undefined
  /**
   * Equivalent to Vue Router <router-link> 'replace' property.
   */
  replace?: boolean | undefined
  /**
   * Emitted when user clicks/taps on the component.
   * @param evt JS event object
   */
  onClick?: (evt: any) => void
}

export interface VcFabActionSlots {
  /**
   * Suggestion for this slot: VcTooltip
   */
  default: () => VNode[]
  /**
   * Slot for icon; Suggestion: VcIcon
   */
  icon: () => VNode[]
  /**
   * Slot for label
   */
  label: () => VNode[]
}

export interface VcFabActionRef extends ComponentPublicInstance<VcFabActionProps> {
  /**
   * Emulate click on VcFabAction
   * @param evt JS event object
   */
  click: (evt?: LooseDictionary) => void
}
