function defaultValue(a, b) {
  if (a !== undefined && a !== null) {
    return a
  }
  return b
}

export function createPointerEvent(type, options?) {
  options = defaultValue(options, {})
  const event = new window.PointerEvent(type, {
    // canBubble: defaultValue(options.canBubble, true),
    cancelable: defaultValue(options.cancelable, true),
    view: defaultValue(options.view, window),
    detail: defaultValue(options.detail, 0),
    screenX: defaultValue(options.screenX, 0),
    screenY: defaultValue(options.screenY, 0),
    clientX: defaultValue(options.clientX, 0),
    clientY: defaultValue(options.clientY, 0),
    ctrlKey: defaultValue(options.ctrlKey, false),
    altKey: defaultValue(options.altKey, false),
    shiftKey: defaultValue(options.shiftKey, false),
    metaKey: defaultValue(options.metaKey, false),
    button: defaultValue(options.button, 0),
    relatedTarget: defaultValue(options.relatedTarget, null),
    // offsetX: defaultValue(options.offsetX, 0),
    // offsetY: defaultValue(options.offsetY, 0),
    width: defaultValue(options.width, 0),
    height: defaultValue(options.height, 0),
    pressure: defaultValue(options.pressure, 0),
    // rotation: defaultValue(options.rotation, 0),
    tiltX: defaultValue(options.tiltX, 0),
    tiltY: defaultValue(options.tiltY, 0),
    pointerId: defaultValue(options.pointerId, 1),
    pointerType: defaultValue(options.pointerType, 'mouse'),
    // hwTimestamp: defaultValue(options.hwTimestamp, 0),
    isPrimary: defaultValue(options.isPrimary, 0)
  })
  return event
}

export function createMouseEvent(type, options) {
  options = defaultValue(options, {})
  const canBubble = defaultValue(options.canBubble, true)
  const cancelable = defaultValue(options.cancelable, true)
  const view = defaultValue(options.view, window)
  const detail = defaultValue(options.detail, 0)
  const screenX = defaultValue(options.screenX, 0)
  const screenY = defaultValue(options.screenY, 0)
  const clientX = defaultValue(options.clientX, 0)
  const clientY = defaultValue(options.clientY, 0)
  const ctrlKey = defaultValue(options.ctrlKey, false)
  const altKey = defaultValue(options.altKey, false)
  const shiftKey = defaultValue(options.shiftKey, false)
  const metaKey = defaultValue(options.metaKey, false)
  const button = defaultValue(options.button, 0)
  const relatedTarget = defaultValue(options.relatedTarget, null)

  const event = document.createEvent('MouseEvent')
  event.initMouseEvent(
    type,
    canBubble,
    cancelable,
    view,
    detail,
    screenX,
    screenY,
    clientX,
    clientY,
    ctrlKey,
    altKey,
    shiftKey,
    metaKey,
    button,
    relatedTarget
  )
  return event
}

/**
 * 等待 ms 毫秒，返回 Promise
 * @param {Number} ms
 */
export const wait = function (ms = 50) {
  return new Promise(resolve => setTimeout(() => resolve(true), ms))
}
