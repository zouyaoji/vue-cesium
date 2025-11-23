import type { ComponentPublicInstance, CSSProperties } from 'vue'
import { between } from '@vue-cesium/utils/private/format'

import { computed, defineComponent, getCurrentInstance, h, onBeforeUnmount, onMounted, ref } from 'vue'

const xhr = XMLHttpRequest
const send = xhr.prototype.send
const open = xhr.prototype.open
const positionValues = ['top', 'right', 'bottom', 'left']

let stack = []
let highjackCount = 0

function translate({ p, pos, active, horiz, reverse, dir }) {
  let x = 1
  let y = 1

  if (horiz === true) {
    if (reverse === true) {
      x = -1
    }
    if (pos === 'bottom') {
      y = -1
    }
    return { transform: `translate3d(${x * (p - 100)}%,${active ? 0 : y * -200}%,0)` }
  }

  if (reverse === true) {
    y = -1
  }
  if (pos === 'right') {
    x = -1
  }
  return { transform: `translate3d(${active ? 0 : dir * x * -200}%,${y * (p - 100)}%,0)` }
}

function inc(p, amount) {
  if (typeof amount !== 'number') {
    if (p < 25) {
      amount = Math.random() * 3 + 3
    }
    else if (p < 65) {
      amount = Math.random() * 3
    }
    else if (p < 85) {
      amount = Math.random() * 2
    }
    else if (p < 99) {
      amount = 0.6
    }
    else {
      amount = 0
    }
  }
  return between(p + amount, 0, 100)
}

function highjackAjax(stackEntry) {
  highjackCount++

  stack.push(stackEntry)

  if (highjackCount > 1) {
    return
  }

  xhr.prototype.open = function (_, url) {
    const stopStack = []

    const loadStart = () => {
      stack.forEach((entry) => {
        if (entry.hijackFilter.value === null || entry.hijackFilter.value(url) === true) {
          entry.start()
          stopStack.push(entry.stop)
        }
      })
    }

    const loadEnd = () => {
      stopStack.forEach((stop) => {
        stop()
      })
    }

    this.addEventListener('loadstart', loadStart, { once: true })
    this.addEventListener('loadend', loadEnd, { once: true })

    // eslint-disable-next-line prefer-rest-params
    open.apply(this, arguments as any)
  }
}

function restoreAjax(start) {
  stack = stack.filter(entry => entry.start !== start)

  highjackCount = Math.max(0, highjackCount - 1)
  if (highjackCount === 0) {
    xhr.prototype.open = open
  }
}

export const ajaxBarProps = {
  position: {
    type: String,
    default: 'top',
    validator: val => positionValues.includes(val)
  },
  size: {
    type: String,
    default: '2px'
  },
  color: String,
  skipHijack: Boolean,
  reverse: Boolean,
  positioning: {
    type: String,
    default: 'absolute',
    validator: (val: string) => ['absolute', 'fixed'].includes(val)
  },
  hijackFilter: Function
}

export default defineComponent({
  name: 'VcAjaxBar',

  props: ajaxBarProps,

  emits: ['start', 'stop'],

  setup(props, { emit }) {
    const { proxy } = getCurrentInstance()!

    const progress = ref(0)
    const onScreen = ref(false)
    const animate = ref(true)

    let sessions = 0
    let timer
    let speed

    const classes = computed(
      () =>
        `vc-loading-bar vc-loading-bar--${props.position}${
          props.color !== void 0 ? ` bg-${props.color}` : ''
        }${animate.value === true ? '' : ' no-transition'}`
    )

    const horizontal = computed(() => props.position === 'top' || props.position === 'bottom')
    const sizeProp = computed(() => (horizontal.value === true ? 'height' : 'width'))

    const style = computed(() => {
      const active = onScreen.value

      const obj: CSSProperties = translate({
        p: progress.value,
        pos: props.position,
        active,
        horiz: horizontal.value,
        reverse: props.reverse,
        dir: 1
      })

      obj[sizeProp.value] = props.size
      obj.opacity = active ? 1 : 0
      obj.position = props.positioning === 'absolute' ? 'absolute' : 'fixed'
      obj.backgroundColor = props.color

      return obj
    })

    const attributes = computed(() =>
      onScreen.value === true
        ? {
            'role': 'progressbar',
            'aria-valuemin': 0,
            'aria-valuemax': 100,
            'aria-valuenow': progress.value
          }
        : { 'aria-hidden': 'true' }
    )

    function start(newSpeed = 300) {
      const oldSpeed = speed
      speed = Math.max(0, newSpeed) || 0

      sessions++

      if (sessions > 1) {
        if (oldSpeed === 0 && newSpeed > 0) {
          planNextStep()
        }
        else if (oldSpeed > 0 && newSpeed <= 0) {
          clearTimeout(timer)
        }
        return sessions
      }

      clearTimeout(timer)
      emit('start')

      progress.value = 0

      timer = setTimeout(
        () => {
          animate.value = true
          newSpeed > 0 && planNextStep()
        },
        onScreen.value === true ? 500 : 1
      )

      if (onScreen.value !== true) {
        onScreen.value = true
        animate.value = false
      }

      return sessions
    }

    function increment(amount?) {
      if (sessions > 0) {
        progress.value = inc(progress.value, amount)
      }

      return sessions
    }

    function stop() {
      sessions = Math.max(0, sessions - 1)
      if (sessions > 0) {
        return sessions
      }

      clearTimeout(timer)
      emit('stop')

      const end = () => {
        animate.value = true
        progress.value = 100
        timer = setTimeout(() => {
          onScreen.value = false
        }, 1000)
      }

      if (progress.value === 0) {
        timer = setTimeout(end, 1)
      }
      else {
        end()
      }
    }

    function planNextStep() {
      if (progress.value < 100) {
        timer = setTimeout(() => {
          increment()
          planNextStep()
        }, speed)
      }
    }

    let hijacked

    onMounted(() => {
      if (props.skipHijack !== true) {
        hijacked = true
        highjackAjax({
          start,
          stop,
          hijackFilter: computed(() => props.hijackFilter || null)
        })
      }
    })

    onBeforeUnmount(() => {
      clearTimeout(timer)
      hijacked === true && restoreAjax(start)
    })

    // expose public methods
    Object.assign(proxy, { start, stop, increment })

    return () =>
      h('div', {
        class: classes.value,
        style: style.value,
        ...attributes.value
      })
  }
})

// export type VcAjaxBarProps = ExtractPropTypes<typeof ajaxBarProps>
export interface VcAjaxBarProps {
  /**
   * Position within window of where QAjaxBar should be displayed.
   * Default value: top
   */
  position?: 'top' | 'right' | 'bottom' | 'left'
  /**
   * Size in CSS units, including unit name.
   * Default value: 2px
   */
  size?: string
  /**
   * Color name for component from the css color.
   */
  color?: string
  /**
   * Reverse direction of progress.
   */
  reverse?: boolean
  /**
   * Skip Ajax hijacking (not a reactive prop).
   */
  skipHijack?: boolean
  /**
   * Specify the positioning of the progress bar.
   */
  positioning?: 'absolute' | 'fixed'
  /**
   * Filter which URL should trigger start() + stop().
   * @param url The URL being triggered
   * @returns Should the URL received as param trigger start() + stop()?
   */
  hijackFilter?: ((url: string) => boolean) | undefined
  /**
   * Emitted when bar is triggered to appear.
   */
  onStart?: () => void
  /**
   * Emitted when bar has finished its job.
   */
  onStop?: () => void
}

export interface VcAjaxBarRef extends ComponentPublicInstance<VcAjaxBarProps> {
  /**
   * Notify bar you are waiting for a new process to finish
   * @param speed Delay (in milliseconds) between progress auto-increments; If delay is 0 then it disables auto-incrementing
   */
  start: (speed?: number) => void
  /**
   * Manually trigger a bar progress increment
   * @param amount Amount (0 < x <= 100) to increment with
   */
  increment: (amount?: number) => void
  /**
   * Notify bar that one process you were waiting has finished
   */
  stop: () => void
}
