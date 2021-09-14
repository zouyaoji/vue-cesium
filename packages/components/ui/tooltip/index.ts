import { h, defineComponent, ref, computed, watch, onBeforeUnmount, Transition, getCurrentInstance } from 'vue'

import useAnchor, { useAnchorProps } from '@vue-cesium/composables/private/use-anchor'
import useScrollTarget from '@vue-cesium/composables/private/use-scroll-target'
import useModelToggle, { useModelToggleProps, useModelToggleEmits } from '@vue-cesium/composables/private/use-model-toggle'
import usePortal from '@vue-cesium/composables/private/use-portal'
import useTransition, { useTransitionProps } from '@vue-cesium/composables/private/use-transition'
import useTick from '@vue-cesium/composables/private/use-tick'
import useTimeout from '@vue-cesium/composables/private/use-timeout'

import { getScrollTarget } from '@vue-cesium/utils/private/scroll'
import { getTouchTarget } from '@vue-cesium/utils/private/touch'
import { addEvt, cleanEvt } from '@vue-cesium/utils/private/event'
import { clearSelection } from '@vue-cesium/utils/private/selection'
import { hSlot } from '@vue-cesium/utils/private/render'
import { validatePosition, validateOffset, setPosition, parsePosition } from '@vue-cesium/utils/private/position-engine'
import { platform } from '@vue-cesium/utils/platform'

export default defineComponent({
  name: 'VcTooltip',

  inheritAttrs: false,

  props: {
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
      type: String,
      default: 'bottom middle',
      validator: validatePosition
    },
    self: {
      type: String,
      default: 'top middle',
      validator: validatePosition
    },
    offset: {
      type: Array,
      default: () => [14, 14],
      validator: validateOffset
    },

    scrollTarget: Object,

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
  },

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
        unwatchPosition = watch(() => props.self + '|' + props.anchor, updatePosition)
      }

      registerTimeout(() => {
        // eslint-disable-next-line vue/require-explicit-emits
        emit('show', evt)
      }, props.transitionDuration)
    }

    function handleHide(evt) {
      removeTick()
      removeTimeout()

      anchorCleanup()

      registerTimeout(() => {
        hidePortal()
        // eslint-disable-next-line vue/require-explicit-emits
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

      const evts =
        platform().isPhone === true
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
    Object.assign(vm.proxy, { updatePosition })

    return renderPortal
  }
})
