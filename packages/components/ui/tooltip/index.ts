import type { LooseDictionary } from '@vue-cesium/utils/types'
import type { ComponentPublicInstance, PropType, VNode } from 'vue'

import useAnchor, { useAnchorProps } from '@vue-cesium/composables/private/use-anchor'
import useModelToggle, { useModelToggleEmits, useModelToggleProps } from '@vue-cesium/composables/private/use-model-toggle'
import usePortal from '@vue-cesium/composables/private/use-portal'
import useScrollTarget from '@vue-cesium/composables/private/use-scroll-target'
import useTick from '@vue-cesium/composables/private/use-tick'
import useTimeout from '@vue-cesium/composables/private/use-timeout'
import useTransition, { useTransitionProps } from '@vue-cesium/composables/private/use-transition'

import { platform } from '@vue-cesium/utils/platform'
import { addEvt, cleanEvt } from '@vue-cesium/utils/private/event'
import { parsePosition, setPosition, validateOffset, validatePosition } from '@vue-cesium/utils/private/position-engine'
import { hSlot } from '@vue-cesium/utils/private/render'
import { getScrollTarget } from '@vue-cesium/utils/private/scroll'
import { clearSelection } from '@vue-cesium/utils/private/selection'
import { getTouchTarget } from '@vue-cesium/utils/private/touch'
import { computed, defineComponent, getCurrentInstance, h, onBeforeUnmount, ref, Transition, watch } from 'vue'

export const tooltipProps = {
  ...useAnchorProps,
  ...useModelToggleProps,
  ...useTransitionProps,

  maxHeight: {
    type: String,
    default: null
  },
  maxWidth: {
    type: String,
    default: null
  },

  transitionShow: {
    type: String,
    default: 'jump-down'
  },
  transitionHide: {
    type: String,
    default: 'jump-up'
  },

  anchor: {
    type: String as PropType<
      | 'top left'
      | 'top middle'
      | 'top right'
      | 'top start'
      | 'top end'
      | 'center left'
      | 'center middle'
      | 'center right'
      | 'center start'
      | 'center end'
      | 'bottom left'
      | 'bottom middle'
      | 'bottom right'
      | 'bottom start'
      | 'bottom end'
    >,
    default: 'bottom middle',
    validator: validatePosition
  },
  self: {
    type: String as PropType<
      | 'top left'
      | 'top middle'
      | 'top right'
      | 'top start'
      | 'top end'
      | 'center left'
      | 'center middle'
      | 'center right'
      | 'center start'
      | 'center end'
      | 'bottom left'
      | 'bottom middle'
      | 'bottom right'
      | 'bottom start'
      | 'bottom end'
    >,
    default: 'top middle',
    validator: validatePosition
  },
  offset: {
    type: Array,
    default: () => [14, 14],
    validator: validateOffset
  },

  scrollTarget: String,

  delay: {
    type: Number,
    default: 0
  },

  hideDelay: {
    type: Number,
    default: 0
  },

  persistent: {
    type: Boolean
  }
}

export default defineComponent({
  name: 'VcTooltip',

  inheritAttrs: false,

  props: tooltipProps,

  emits: [...useModelToggleEmits],

  setup(props, { slots, emit, attrs }) {
    let unwatchPosition, observer
    const vm = getCurrentInstance()

    const innerRef = ref(null)
    const showing = ref(false)

    const anchorOrigin = computed(() => parsePosition(props.anchor, true))
    const selfOrigin = computed(() => parsePosition(props.self, true))
    const hideOnRouteChange = computed(() => props.persistent !== true)

    const { registerTick, removeTick, prepareTick } = useTick()
    const { registerTimeout, removeTimeout } = useTimeout()
    const { transition, transitionStyle } = useTransition(props, showing)
    const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = useScrollTarget(props, configureScrollTarget)

    const { anchorEl, canShow, anchorEvents } = useAnchor({ showing, configureAnchorEl, avoidEmit: undefined })

    const { show, hide } = useModelToggle({
      showing,
      canShow,
      handleShow,
      handleHide,
      hideOnRouteChange,
      processOnMount: true
    })

    Object.assign(anchorEvents, { delayShow, delayHide })

    const { showPortal, hidePortal, renderPortal } = usePortal(vm, innerRef, renderPortalContent)

    function handleShow(evt) {
      removeTick()
      removeTimeout()

      showPortal()

      registerTick(() => {
        observer = new MutationObserver(() => updatePosition())
        observer.observe(innerRef.value, { attributes: false, childList: true, characterData: true, subtree: true })
        updatePosition()
        configureScrollTarget()
      })
      prepareTick()

      if (unwatchPosition === void 0) {
        unwatchPosition = watch(() => `${props.self}|${props.anchor}`, updatePosition)
      }

      registerTimeout(() => {
        emit('show', evt)
      }, props.transitionDuration)
    }

    function handleHide(evt) {
      removeTick()
      removeTimeout()

      anchorCleanup()

      registerTimeout(() => {
        hidePortal()

        emit('hide', evt)
      }, props.transitionDuration)
    }

    function anchorCleanup() {
      if (observer !== void 0) {
        observer.disconnect()
        observer = void 0
      }

      if (unwatchPosition !== void 0) {
        unwatchPosition()
        unwatchPosition = void 0
      }

      unconfigureScrollTarget()
      cleanEvt(anchorEvents, 'tooltipTemp')
    }

    function updatePosition() {
      const el = innerRef.value

      if (anchorEl.value === void 0 || !el) {
        return
      }

      setPosition({
        el,
        offset: props.offset,
        anchorEl: anchorEl.value,
        anchorOrigin: anchorOrigin.value,
        selfOrigin: selfOrigin.value,
        maxHeight: props.maxHeight,
        maxWidth: props.maxWidth
      })
    }

    function delayShow(evt) {
      if (platform().isPhone === true) {
        clearSelection()
        document.body.classList.add('non-selectable')

        const target = getTouchTarget(anchorEl.value)
        const evts = ['touchmove', 'touchcancel', 'touchend', 'click'].map(e => [target, e, '__delayHide', 'passiveCapture'])

        addEvt(anchorEvents, 'tooltipTemp', evts)
      }

      registerTimeout(() => {
        show(evt)
      }, props.delay)
    }

    function delayHide(evt) {
      removeTimeout()

      if (platform().isPhone === true) {
        cleanEvt(anchorEvents, 'tooltipTemp')
        clearSelection()
        // delay needed otherwise selection still occurs
        setTimeout(() => {
          document.body.classList.remove('non-selectable')
        }, 10)
      }

      registerTimeout(() => {
        hide(evt)
      }, props.hideDelay)
    }

    function configureAnchorEl() {
      if (props.noParentEvent === true || anchorEl.value === void 0) {
        return
      }

      const evts
        = platform().isPhone === true
          ? [[anchorEl.value, 'touchstart', 'delayShow', 'passive']]
          : [
              [anchorEl.value, 'mouseenter', 'delayShow', 'passive'],
              [anchorEl.value, 'mouseleave', 'delayHide', 'passive']
            ]

      addEvt(anchorEvents, 'anchor', evts)
    }

    function configureScrollTarget() {
      if (anchorEl.value !== void 0 || props.scrollTarget !== void 0) {
        localScrollTarget.value = getScrollTarget(anchorEl.value, props.scrollTarget)
        const fn = props.noParentEvent === true ? updatePosition : hide

        changeScrollEvent(localScrollTarget.value, fn)
      }
    }

    function getTooltipContent() {
      return showing.value === true
        ? h(
            'div',
            {
              ...attrs,
              ref: innerRef,
              class: ['vc-tooltip vc-tooltip--style vc-position-engine no-pointer-events', attrs.class],
              style: transitionStyle.value,
              role: 'complementary'
            },
            hSlot(slots.default)
          )
        : null
    }

    function renderPortalContent() {
      return h(
        Transition,
        {
          name: transition.value,
          appear: true
        },
        getTooltipContent
      )
    }

    onBeforeUnmount(anchorCleanup)

    // expose public methods
    Object.assign(vm?.proxy, { updatePosition })

    return renderPortal
  }
})

// export type VcTooltipProps = ExtractPropTypes<typeof tooltipProps>

export interface VcTooltipProps {
  /**
   * One of VueCesium's embedded transitions.
   * Default value: jump-down
   */
  'transitionShow'?: string | undefined
  /**
   * One of VueCesium's embedded transitions.
   * Default value: jump-up
   */
  'transitionHide'?: string | undefined
  /**
   * Transition duration (in milliseconds, without unit).
   * Default value: 300
   */
  'transitionDuration'?: string | number | undefined
  /**
   * Model of the component defining shown/hidden state; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive.
   */
  'modelValue'?: boolean
  /**
   * The maximum height of the Tooltip; Size in CSS units, including unit name.
   */
  'maxHeight'?: string | undefined
  /**
   * The maximum width of the Tooltip; Size in CSS units, including unit name.
   */
  'maxWidth'?: string | undefined
  /**
   * Two values setting the starting position or anchor point of the Tooltip relative to its target.
   * Default value: bottom middle
   */
  'anchor'?:
    | 'top left'
    | 'top middle'
    | 'top right'
    | 'top start'
    | 'top end'
    | 'center left'
    | 'center middle'
    | 'center right'
    | 'center start'
    | 'center end'
    | 'bottom left'
    | 'bottom middle'
    | 'bottom right'
    | 'bottom start'
    | 'bottom end'
    | undefined
  /**
   * Two values setting the Tooltip's own position relative to its target.
   * Default value: top middle
   */
  'self'?:
    | 'top left'
    | 'top middle'
    | 'top right'
    | 'top start'
    | 'top end'
    | 'center left'
    | 'center middle'
    | 'center right'
    | 'center start'
    | 'center end'
    | 'bottom left'
    | 'bottom middle'
    | 'bottom right'
    | 'bottom start'
    | 'bottom end'
    | undefined
  /**
   * An array of two numbers to offset the Tooltip horizontally and vertically in pixels.
   * Default value: [14, 14]
   */
  'offset'?: any[] | undefined
  /**
   * CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one.
   */
  'scrollTarget'?: string | undefined
  /**
   * Configure a target element to trigger Tooltip toggle; 'true' means it enables the parent DOM element, 'false' means it disables attaching events to any DOM elements; By using a String (CSS selector) it attaches the events to the specified DOM element (if it exists).
   * Default value: true
   */
  'target'?: boolean | string | undefined
  /**
   * Skips attaching events to the target DOM element (that trigger the element to get shown).
   */
  'noParentEvent'?: boolean | undefined
  /**
   * Configure Tooltip to appear with delay.
   */
  'delay'?: number | undefined
  /**
   * Configure Tooltip to disappear with delay.
   */
  'hideDelay'?: number | undefined
  'tip'?: string | undefined
  'persistent'?: boolean
  'contextMenu'?: boolean
  /**
   * Emitted when showing/hidden state changes; Is also used by v-model.
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

export interface VcTooltipSlots {
  /**
   * Default slot in the devland unslotted content of the component
   */
  default: () => VNode[]
}

export interface VcTooltipRef extends ComponentPublicInstance<VcTooltipProps> {
  /**
   * Triggers component to show
   * @param evt JS event object
   */
  show: (evt?: LooseDictionary) => void
  /**
   * Triggers component to hide
   * @param evt JS event object
   */
  hide: (evt?: LooseDictionary) => void
  /**
   * Triggers component to toggle between show/hide
   * @param evt JS event object
   */
  toggle: (evt?: LooseDictionary) => void
  /**
   * There are some custom scenarios for which cannot automatically reposition the tooltip without significant performance drawbacks so the optimal solution is for you to call this method when you need it
   */
  updatePosition: () => void
}
