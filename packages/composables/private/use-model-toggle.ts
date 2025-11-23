import type { AnyFunction } from '@vue-cesium/utils/types'
import type { ComputedRef, Ref } from 'vue'

import { vmHasListener, vmHasRouter } from '@vue-cesium/utils/private/vm'
import { getCurrentInstance, nextTick, onMounted, watch } from 'vue'

export const useModelToggleProps = {
  modelValue: {
    type: Boolean,
    default: null
  }
}

export const useModelToggleEmits = ['update:modelValue', 'before-show', 'show', 'before-hide', 'hide']

// handleShow/handleHide -> removeTick(), self (& emit show), prepareTick()

export default function ({
  showing,
  canShow = undefined, // optional
  hideOnRouteChange = undefined, // optional
  handleShow = undefined, // optional
  handleHide = undefined, // optional
  processOnMount = undefined // optional
}: {
  showing?: Ref<boolean>
  canShow?: AnyFunction<boolean>
  hideOnRouteChange?: ComputedRef<boolean>
  handleShow?: AnyFunction<void>
  handleHide?: AnyFunction<void>
  processOnMount?: boolean
}) {
  const vm = getCurrentInstance()!
  const { props, emit, proxy } = vm

  let payload

  function toggle(evt) {
    if (showing?.value === true) {
      hide(evt)
    }
    else {
      show(evt)
    }
  }

  function show(evt) {
    if (props.disable === true || (canShow !== void 0 && canShow(evt) !== true)) {
      return
    }

    const listener = vmHasListener(vm, 'onUpdate:modelValue') === true

    if (listener === true) {
      emit('update:modelValue', true)
      payload = evt
      nextTick(() => {
        if (payload === evt) {
          payload = void 0
        }
      })
    }

    if (props.modelValue === null || listener === false) {
      processShow(evt)
    }
  }

  function processShow(evt) {
    if (showing?.value === true) {
      return
    }

    showing && (showing.value = true)

    emit('before-show', evt)

    if (evt && evt.cancel === true) {
      return
    }

    if (handleShow !== void 0) {
      handleShow(evt)
    }
    else {
      emit('show', evt)
    }
  }

  function hide(evt?) {
    if (props.disable === true) {
      return
    }

    const listener = vmHasListener(vm, 'onUpdate:modelValue') === true

    if (listener === true) {
      emit('update:modelValue', false)
      payload = evt
      nextTick(() => {
        if (payload === evt) {
          payload = void 0
        }
      })
    }

    if (props.modelValue === null || listener === false) {
      processHide(evt)
    }
  }

  function processHide(evt) {
    if (showing?.value === false) {
      return
    }

    showing && (showing.value = false)

    emit('before-hide', evt)

    if (handleHide !== void 0) {
      handleHide(evt)
    }
    else {
      emit('hide', evt)
    }
  }

  function processModelChange(val) {
    if (props.disable === true && val === true) {
      if (vmHasListener(vm, 'onUpdate:modelValue') === true) {
        emit('update:modelValue', false)
      }
    }
    else if ((val === true) !== showing?.value) {
      const fn = val === true ? processShow : processHide
      fn(payload)
    }
  }

  watch(() => props.modelValue, processModelChange)

  if (hideOnRouteChange !== void 0 && vmHasRouter(vm) === true) {
    watch(
      () => (proxy as any).$route,
      () => {
        if (hideOnRouteChange.value === true && showing?.value === true) {
          hide()
        }
      }
    )
  }

  processOnMount === true
  && onMounted(() => {
    processModelChange(props.modelValue)
  })

  // expose public methods
  const publicMethods = { show, hide, toggle }
  Object.assign(proxy, publicMethods)

  return publicMethods
}
