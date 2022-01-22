import { computed, CSSProperties, PropType, ref } from 'vue'
import { hasOwn, isArray, isPlainObject } from '@vue-cesium/utils/util'
import { VcViewerProvider, AnyObject } from '@vue-cesium/utils/types'

export const positionProps = {
  position: {
    type: String as PropType<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left'>,
    default: 'top-right',
    validator: (v: string) => ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top', 'right', 'bottom', 'left'].includes(v)
  },
  offset: {
    type: Array as PropType<number[]>,
    validator: v => v.length === 2
  }
}

export default function (props, $services: VcViewerProvider) {
  const attach = computed(() => {
    const pos = props.position

    return {
      top: pos.indexOf('top') > -1,
      right: pos.indexOf('right') > -1,
      bottom: pos.indexOf('bottom') > -1,
      left: pos.indexOf('left') > -1,
      vertical: pos === 'top' || pos === 'bottom',
      horizontal: pos === 'left' || pos === 'right'
    }
  })

  // Todo 自动调整位置
  // const { layout } = $services
  // const top = computed(() => {
  //   let value = 0
  //   if (layout.toolbarContainerRC) {
  //     value += layout.toolbarContainerRC.height
  //   }
  //   return value
  // })

  // const bottom = computed(() => {
  //   let value = 0
  //   if (layout.bottomContainerRC) {
  //     value += layout.bottomContainerRC.height
  //   }
  //   if (layout.timelineContainerRC) {
  //     value += layout.timelineContainerRC.height
  //   }
  //   return value
  // })

  const top = ref(0)
  const right = ref(0)
  const left = ref(0)
  const bottom = ref(0)

  const style = computed(() => {
    let posX: number | string = 0
    let posY: number | string = 0

    const side = attach.value
    const dir = 1

    if (side.top === true && top.value !== 0) {
      posY = `${top.value}px`
    } else if (side.bottom === true && bottom.value !== 0) {
      posY = `${-bottom.value}px`
    }

    if (side.left === true && left.value !== 0) {
      posX = `${dir * left.value}px`
    } else if (side.right === true && right.value !== 0) {
      posX = `${-dir * right.value}px`
    }

    const css: CSSProperties = {
      transform: `translate(${posX}, ${posY})`
    }

    if (props.offset) {
      css.margin = `${props.offset[1]}px ${props.offset[0]}px`
    }

    if (side.vertical === true) {
      if (left.value !== 0) {
        css['right'] = `${left.value}px`
      }
      if (right.value !== 0) {
        css['left'] = `${right.value}px`
      }
    } else if (side.horizontal === true) {
      if (top.value !== 0) {
        css.top = `${top.value}px`
      }
      if (bottom.value !== 0) {
        css.bottom = `${bottom.value}px`
      }
    }

    return css
  })

  const classes = computed(() => `absolute absolute-${props.position}`)

  return {
    attach,
    style,
    classes
  }
}
