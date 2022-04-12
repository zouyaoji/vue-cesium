import { createDirective } from '@vue-cesium/utils/private/create'
import { css } from '@vue-cesium/utils/private/dom'
import { position, stop, addEvt, cleanEvt } from '@vue-cesium/utils/private/event'
import { isKeyCode } from '@vue-cesium/utils/private/key-composition'
import throttle from '@vue-cesium/utils/private/throttle'

function showRipple(evt, el, ctx, forceCenter) {
  ctx.modifiers.stop === true && stop(evt)

  const color = ctx.modifiers.color
  let center = ctx.modifiers.center
  center = center === true || forceCenter === true

  const node = document.createElement('span'),
    innerNode = document.createElement('span'),
    pos = position(evt),
    { left, top, width, height } = el.getBoundingClientRect(),
    diameter = Math.sqrt(width * width + height * height),
    radius = diameter / 2,
    centerX = `${(width - diameter) / 2}px`,
    x = center ? centerX : `${pos.left - left - radius}px`,
    centerY = `${(height - diameter) / 2}px`,
    y = center ? centerY : `${pos.top - top - radius}px`

  innerNode.className = 'vc-ripple__inner'
  css(innerNode, {
    height: `${diameter}px`,
    width: `${diameter}px`,
    transform: `translate3d(${x},${y},0) scale3d(.2,.2,1)`,
    opacity: 0
  })

  node.className = `vc-ripple${color ? ' text-' + color : ''}`
  node.setAttribute('dir', 'ltr')
  node.appendChild(innerNode)
  el.appendChild(node)

  const abort = () => {
    node.remove()
    clearTimeout(timer)
  }
  ctx.abort.push(abort)

  let timer = setTimeout(() => {
    innerNode.classList.add('vc-ripple__inner--enter')
    innerNode.style.transform = `translate3d(${centerX},${centerY},0) scale3d(1,1,1)`
    innerNode.style.opacity = '0.2'

    timer = setTimeout(() => {
      innerNode.classList.remove('vc-ripple__inner--enter')
      innerNode.classList.add('vc-ripple__inner--leave')
      innerNode.style.opacity = '0'

      timer = setTimeout(() => {
        node.remove()
        ctx.abort.splice(ctx.abort.indexOf(abort), 1)
      }, 275)
    }, 250)
  }, 50)
}

function updateModifiers(ctx, { modifiers, value, arg, instance }) {
  // const cfg = Object.assign({}, instance.$q.config.ripple, modifiers, value)
  const cfg = Object.assign({}, modifiers, value)
  ctx.modifiers = {
    early: cfg.early === true,
    stop: cfg.stop === true,
    center: cfg.center === true,
    color: cfg.color || arg,
    keyCodes: [].concat(cfg.keyCodes || 13)
  }
}

export default createDirective({
  name: 'ripple',

  beforeMount(el, binding) {
    const ctx = {
      enabled: binding.value !== false,
      modifiers: {} as any,
      abort: [],

      start(evt) {
        if (
          ctx.enabled === true &&
          evt.qSkipRipple !== true &&
          (ctx.modifiers.early === true ? ['mousedown', 'touchstart'].includes(evt.type) === true : evt.type === 'click')
        ) {
          showRipple(evt, el, ctx, evt.qKeyEvent === true)
        }
      },

      keystart: throttle(evt => {
        if (
          ctx.enabled === true &&
          evt.qSkipRipple !== true &&
          isKeyCode(evt, ctx.modifiers.keyCodes) === true &&
          evt.type === `key${ctx.modifiers.early === true ? 'down' : 'up'}`
        ) {
          showRipple(evt, el, ctx, true)
        }
      }, 300)
    }

    updateModifiers(ctx, binding)

    el.__vcripple = ctx

    addEvt(ctx, 'main', [
      [el, 'mousedown', 'start', 'passive'],
      [el, 'touchstart', 'start', 'passive'],
      [el, 'click', 'start', 'passive'],
      [el, 'keydown', 'keystart', 'passive'],
      [el, 'keyup', 'keystart', 'passive']
    ])
  },

  updated(el, binding) {
    if (binding.oldValue !== binding.value) {
      const ctx = el.__vcripple
      ctx.enabled = binding.value !== false

      if (ctx.enabled === true && Object(binding.value) === binding.value) {
        updateModifiers(ctx, binding)
      }
    }
  },

  beforeUnmount(el) {
    const ctx = el.__vcripple
    ctx.abort.forEach(fn => {
      fn()
    })
    cleanEvt(ctx, 'main')
    delete el._vcripple
  }
})
