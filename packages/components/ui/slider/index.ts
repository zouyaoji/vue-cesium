import type { VueClassProp, VueStyleObjectProp } from '@vue-cesium/utils/types'
import type { ComponentPublicInstance, VNode } from 'vue'

import { useFormAttrs } from '@vue-cesium/composables/private/use-form'

import { platform } from '@vue-cesium/utils/platform'
import { stopAndPrevent } from '@vue-cesium/utils/private/event'
import { between } from '@vue-cesium/utils/private/format'
import { computed, defineComponent, h, ref, watch } from 'vue'
import useSlider, { keyCodes, useSliderEmits, useSliderProps } from './use-slider'

const getNodeData = () => ({})

export const sliderProps = {
  ...useSliderProps,

  modelValue: {
    required: true,
    default: null,
    validator: v => typeof v === 'number' || v === null
  },

  labelValue: [String, Number]
}
export default defineComponent({
  name: 'VcSlider',

  props: sliderProps,

  emits: useSliderEmits,

  setup(props: any, { emit }) {
    const { state, methods } = useSlider({
      updateValue,
      updatePosition,
      getDragging,
      formAttrs: useFormAttrs(props)
    })

    const rootRef = ref(null)
    const curRatio = ref(0)
    const model = ref(0)

    function normalizeModel() {
      model.value = props.modelValue === null ? state.innerMin.value : between(props.modelValue, state.innerMin.value, state.innerMax.value)
    }

    watch(() => `${props.modelValue}|${state.innerMin.value}|${state.innerMax.value}`, normalizeModel)

    normalizeModel()

    const modelRatio = computed(() => methods.convertModelToRatio(model.value))
    const ratio = computed(() => (state.active.value === true ? curRatio.value : modelRatio.value))

    const selectionBarStyle = computed(() => {
      const acc: any = {
        [state.positionProp.value]: `${100 * state.innerMinRatio.value}%`,
        [state.sizeProp.value]: `${100 * (ratio.value - state.innerMinRatio.value)}%`
      }
      if (props.selectionImg !== void 0) {
        acc.backgroundImage = `url(${props.selectionImg}) !important`
      }
      return acc
    })

    const getThumb = methods.getThumbRenderFn({
      focusValue: true,
      getNodeData,
      ratio,
      label: computed(() => (props.labelValue !== void 0 ? props.labelValue : model.value)),
      thumbColor: computed(() => props.thumbColor || props.color),
      labelColor: computed(() => props.labelColor),
      labelTextColor: computed(() => props.labelTextColor)
    })

    const trackContainerEvents = computed(() => {
      if (state.editable.value !== true) {
        return {}
      }

      return platform().isPhone === true
        ? { onClick: methods.onMobileClick }
        : {
            onMousedown: methods.onActivate,
            onFocus,
            onBlur: methods.onBlur,
            onKeydown,
            onKeyup: methods.onKeyup
          }
    })

    function updateValue(change?: boolean) {
      if (model.value !== props.modelValue) {
        emit('update:modelValue', model.value)
      }
      change === true && emit('change', model.value)
    }

    function getDragging() {
      return rootRef.value.getBoundingClientRect()
    }

    function updatePosition(event, dragging = state.dragging.value) {
      const ratio = methods.getDraggingRatio(event, dragging)

      model.value = methods.convertRatioToModel(ratio)

      curRatio.value = props.snap !== true || props.step === 0 ? ratio : methods.convertModelToRatio(model.value)
    }

    function onFocus() {
      state.focus.value = true
    }

    function onKeydown(evt) {
      if (!keyCodes.includes(evt.keyCode)) {
        return
      }

      stopAndPrevent(evt)

      const stepVal = ([34, 33].includes(evt.keyCode) ? 10 : 1) * state.step.value
      const offset
        = ([34, 37, 40].includes(evt.keyCode) ? -1 : 1) * (state.isReversed.value === true ? -1 : 1) * (props.vertical === true ? -1 : 1) * stepVal

      model.value = between(Number.parseFloat((model.value + offset).toFixed(state.decimals.value)), state.innerMin.value, state.innerMax.value)

      updateValue()
    }

    return () => {
      const content = methods.getContent(selectionBarStyle, state.tabindex, trackContainerEvents, (node) => {
        node.push(getThumb())
      })

      return h(
        'div',
        {
          'ref': rootRef,
          'class': state.classes.value + (props.modelValue === null ? ' vc-slider--no-value' : ''),
          ...state.attributes.value,
          'aria-valuenow': props.modelValue
        },
        content
      )
    }
  }
})

interface SliderMarkerLabelPartialDefinition {
  label?: number | string
  classes?: VueClassProp
  style?: VueStyleObjectProp
}

interface SliderMarkerLabelDefinition extends SliderMarkerLabelPartialDefinition {
  value?: number
}

interface SliderMarkerLabelDefinitionRequiredValue extends SliderMarkerLabelPartialDefinition {
  value: number
}

interface SliderMarkerLabelObjectDefinition {
  [value: number]: string | SliderMarkerLabelDefinition
}

export type SliderMarkerLabels
  = | boolean
    | Array<SliderMarkerLabelDefinitionRequiredValue>
    | SliderMarkerLabelObjectDefinition
    | ((value: number) => string | SliderMarkerLabelDefinition)

export interface VcSliderProps {
  /**
   * Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL
   */
  'name'?: string | undefined
  /**
   * Minimum value of the model; Set track's minimum value
   */
  'min'?: number | undefined
  /**
   * Maximum value of the model; Set track's maximum value
   * Default value: 100
   */
  'max'?: number | undefined
  /**
   * Inner minimum value of the model; Use in case you need the model value to be inside of the track's min-max values; Needs to be higher or equal to 'min' prop; Defaults to 'min' prop
   */
  'innerMin'?: number | undefined
  /**
   * Inner maximum value of the model; Use in case you need the model value to be inside of the track's min-max values; Needs to be lower or equal to 'max' prop; Defaults to 'max' prop
   */
  'innerMax'?: number | undefined
  /**
   * Specify step amount between valid values (> 0.0); When step equals to 0 it defines infinite granularity
   * Default value: 1
   */
  'step'?: number | undefined
  /**
   * Snap on valid values, rather than sliding freely; Suggestion: use with 'step' prop
   */
  'snap'?: boolean | undefined
  /**
   * Work in reverse (changes direction)
   */
  'reverse'?: boolean | undefined
  /**
   * Display in vertical direction
   */
  'vertical'?: boolean | undefined
  /**
   * Color name for component from the Quasar Color Palette
   */
  'color'?: string | undefined
  /**
   * Color name for the track (can be 'transparent' too) from the Quasar Color Palette
   */
  'trackColor'?: string | undefined
  /**
   * Apply a pattern image on the track
   */
  'trackImg'?: string | undefined
  /**
   * Color name for the inner track (can be 'transparent' too) from the Quasar Color Palette
   */
  'innerTrackColor'?: string | undefined
  /**
   * Apply a pattern image on the inner track
   */
  'innerTrackImg'?: string | undefined
  /**
   * Color name for the selection bar (can be 'transparent' too) from the Quasar Color Palette
   */
  'selectionColor'?: string | undefined
  /**
   * Apply a pattern image on the selection bar
   */
  'selectionImg'?: string | undefined
  /**
   * Popup a label when user clicks/taps on the slider thumb and moves it
   */
  'label'?: boolean | undefined
  /**
   * Color name for component from the Quasar Color Palette
   */
  'labelColor'?: string | undefined
  /**
   * Color name for component from the Quasar Color Palette
   */
  'labelTextColor'?: string | undefined
  /**
   * Switch the position of the label (top <-> bottom or left <-> right)
   */
  'switchLabelSide'?: boolean | undefined
  /**
   * Always display the label
   */
  'labelAlways'?: boolean | undefined
  /**
   * Display markers on the track, one for each possible value for the model or using a custom step (when specifying a Number)
   */
  'markers'?: boolean | number | undefined
  /**
   * Configure the marker labels (or show the default ones if 'true'); Array of definition Objects or Object with key-value where key is the model and the value is the marker label definition
   * @param value The marker value to transform
   * @returns Marker definition Object or directly a String for the label of the marker
   */
  'markerLabels'?: SliderMarkerLabels | undefined
  /**
   * CSS class(es) to apply to the marker labels container
   */
  'markerLabelsClass'?: string | undefined
  /**
   * Switch the position of the marker labels (top <-> bottom or left <-> right)
   */
  'switchMarkerLabelsSide'?: boolean | undefined
  /**
   * Track size (including CSS unit)
   * Default value: 4px
   */
  'trackSize'?: string | undefined
  /**
   * Thumb size (including CSS unit)
   * Default value: 20px
   */
  'thumbSize'?: string | undefined
  /**
   * Color name for component from the Quasar Color Palette
   */
  'thumbColor'?: string | undefined
  /**
   * Set custom thumb svg path
   * Default value: M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0
   */
  'thumbPath'?: string | undefined
  /**
   * Notify the component that the background is a dark color
   */
  'dark'?: boolean | undefined
  /**
   * Dense mode; occupies less space
   */
  'dense'?: boolean | undefined
  /**
   * Put component in disabled mode
   */
  'disable'?: boolean | undefined
  /**
   * Put component in readonly mode
   */
  'readonly'?: boolean | undefined
  /**
   * Tabindex HTML attribute value
   */
  'tabindex'?: number | string | undefined
  /**
   * Model of the component (must be between min/max); Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
   */
  'modelValue': number | null | undefined
  /**
   * Override default label value
   */
  'labelValue'?: string | number | undefined
  /**
   * Emitted on lazy model value change (after user slides then releases the thumb)
   * @param value New model value
   */
  'onChange'?: (value: any) => void
  /**
   * Triggered when user starts panning on the component
   * @param phase Phase of panning
   */
  'onPan'?: (phase: 'start' | 'end') => void
  /**
   * Emitted when the component needs to change the model; Is also used by v-model
   * @param value New model value
   */
  'onUpdate:modelValue'?: (value: number | null) => void
}

export interface SliderMarkerLabelConfig {
  index: number
  value: number
  label: number | string
  classes: string
  style: VueStyleObjectProp
}

export type SliderMarkerLabelArrayConfig = SliderMarkerLabelConfig[]

export interface SliderMarkerLabelObjectConfig {
  [value: number]: SliderMarkerLabelConfig
}

export interface QSliderSlots {
  /**
   * What should the menu display after filtering options and none are left to be displayed; Suggestion: <div>
   * @param scope
   */
  'marker-label': (scope: {
    /**
     * Config for current marker label
     */
    marker: SliderMarkerLabelConfig
    /**
     * Array of marker label configs
     */
    markerList: SliderMarkerLabelArrayConfig[]
    /**
     * Object with key-value where key is the model and the value is the marker label config
     */
    markerMap: SliderMarkerLabelObjectConfig
    /**
     * Required CSS classes to be applied to the marker element
     */
    classes: string
    /**
     * Get CSS style Object to apply to a marker element at respective model value; For perf reasons, use only if requested model value is not already part of markerMap
     * @param value The marker label equivalent model value
     * @returns CSS style Object to apply to a marker element at respective model value
     */
    getStyle: (value: number) => any
  }) => VNode[]
  /**
   * What should the menu display after filtering options and none are left to be displayed; Suggestion: <div>
   * @param scope
   */
  'marker-label-group': (scope: {
    /**
     * Array of marker label configs
     */
    markerList: SliderMarkerLabelArrayConfig[]
    /**
     * Object with key-value where key is the model and the value is the marker label config
     */
    markerMap: SliderMarkerLabelObjectConfig
    /**
     * Required CSS classes to be applied to the marker element
     */
    classes: string
    /**
     * Get CSS style Object to apply to a marker element at respective model value; For perf reasons, use only if requested model value is not already part of markerMap
     * @param value The marker label equivalent model value
     * @returns CSS style Object to apply to a marker element at respective model value
     */
    getStyle: (value: number) => any
  }) => VNode[]
}

export type VcSliderRef = ComponentPublicInstance<VcSliderProps>
