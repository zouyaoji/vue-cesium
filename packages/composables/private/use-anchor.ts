import { platform } from '@vue-cesium/utils/platform'

import { addEvt, cleanEvt, prevent } from '@vue-cesium/utils/private/event'
import { isKeyCode } from '@vue-cesium/utils/private/key-composition'
import { clearSelection } from '@vue-cesium/utils/private/selection'
import { getTouchTarget } from '@vue-cesium/utils/private/touch'
import { getCurrentInstance, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

export const useAnchorProps = {
  target: {
    type: [Boolean, String],
    default: true
  },
  noParentEvent: Boolean,
  contextMenu: Boolean
}

export default function ({
  showing,
  avoidEmit, // required for VcPopupProxy (true)
  configureAnchorEl // optional
}) {
  const { props, proxy, emit } = getCurrentInstance()!

  const anchorEl = ref<HTMLElement>(null!)

  let touchTimer

  function canShow(evt) {
    // abort with no parent configured or on multi-touch
    return anchorEl.value === null ? false : evt === void 0 || evt.touches === void 0 || evt.touches.length <= 1
  }

  const anchorEvents: any = {}

  if (configureAnchorEl === void 0) {
    // default configureAnchorEl is designed for

    Object.assign(anchorEvents, {
      hide(evt) {
        ;(proxy as any).hide(evt)
      },

      toggle(evt) {
        ;(proxy as any).toggle(evt)
      },

      toggleKey(evt) {
        isKeyCode(evt, 13) === true && (proxy as any).toggle(evt)
      },

      contextClick(evt) {
        ;(proxy as any).hide(evt)
        nextTick(() => {
          ;(proxy as any).show(evt)
        })
        prevent(evt)
      },

      mobilePrevent: prevent,

      mobileTouch(evt) {
        anchorEvents.mobileCleanup(evt)

        if (canShow(evt) !== true) {
          return
        }

        ;(proxy as any).hide(evt)
        anchorEl.value?.classList.add('non-selectable')

        const target = getTouchTarget(evt.target)
        addEvt(anchorEvents, 'anchor', [
          [target, 'touchmove', 'mobileCleanup', 'passive'],
          [target, 'touchend', 'mobileCleanup', 'passive'],
          [target, 'touchcancel', 'mobileCleanup', 'passive'],
          [anchorEl.value, 'contextmenu', 'mobilePrevent', 'notPassive']
        ])

        touchTimer = setTimeout(() => {
          ;(proxy as any).show(evt)
        }, 300)
      },

      mobileCleanup(evt) {
        anchorEl.value.classList.remove('non-selectable')
        clearTimeout(touchTimer)

        if (showing.value === true && evt !== void 0) {
          clearSelection()
        }
      }
    })

    configureAnchorEl = function (context = props.contextMenu) {
      if (props.noParentEvent === true || anchorEl.value === null) {
        return
      }

      let evts

      if (context === true) {
        if (platform().isPhone === true) {
          evts = [[anchorEl.value, 'touchstart', 'mobileTouch', 'passive']]
        }
        else {
          evts = [
            [anchorEl.value, 'click', 'hide', 'passive'],
            [anchorEl.value, 'contextmenu', 'contextClick', 'notPassive']
          ]
        }
      }
      else {
        evts = [
          [anchorEl.value, 'click', 'toggle', 'passive'],
          [anchorEl.value, 'keyup', 'toggleKey', 'passive']
        ]
      }

      addEvt(anchorEvents, 'anchor', evts)
    }
  }

  function unconfigureAnchorEl() {
    cleanEvt(anchorEvents, 'anchor')
  }

  function setAnchorEl(el) {
    anchorEl.value = el
    while (anchorEl.value.classList.contains('vc-anchor--skip')) {
      ;(anchorEl.value as any) = anchorEl.value.parentNode
    }
    configureAnchorEl()
  }

  function pickAnchorEl() {
    if (props.target === false || props.target === '') {
      anchorEl.value = null!
    }
    else if (props.target === true) {
      setAnchorEl(proxy?.$el.parentNode)
    }
    else {
      let el = props.target as any

      if (typeof props.target === 'string') {
        try {
          el = document.querySelector(props.target)
        }
        catch (err) {
          el = void 0
        }
      }

      if (el !== void 0 && el !== null) {
        anchorEl.value = el.$el || el
        configureAnchorEl()
      }
      else {
        anchorEl.value = null!
        console.error(`Anchor: target "${props.target}" not found`)
      }
    }
  }

  watch(
    () => props.contextMenu,
    (val) => {
      if (anchorEl.value !== null) {
        unconfigureAnchorEl()
        configureAnchorEl(val)
      }
    }
  )

  watch(
    () => props.target,
    () => {
      if (anchorEl.value !== null) {
        unconfigureAnchorEl()
      }

      pickAnchorEl()
    }
  )

  watch(
    () => props.noParentEvent,
    (val) => {
      if (anchorEl.value !== null) {
        if (val === true) {
          unconfigureAnchorEl()
        }
        else {
          configureAnchorEl()
        }
      }
    }
  )

  onMounted(() => {
    pickAnchorEl()

    if (avoidEmit !== true && props.modelValue === true && anchorEl.value === null) {
      emit('update:modelValue', false)
    }
  })

  onBeforeUnmount(() => {
    clearTimeout(touchTimer)
    unconfigureAnchorEl()
  })

  return {
    anchorEl,
    canShow,
    anchorEvents
  }
}
