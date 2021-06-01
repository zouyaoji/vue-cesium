import {  VcViewerProvider } from '@vue-cesium/utils/types'
import { ref } from 'vue'

export default function($services: VcViewerProvider, {
  handleMouseClick = undefined,
  handleMouseDown = undefined,
  handleMouseUp = undefined,
  handleMouseMove = undefined,
  handleDoubleClick = undefined,
  handleMouseWheel = undefined,
  handlePinch = undefined
}) {
  // state
  const handler = ref<Cesium.ScreenSpaceEventHandler>(null)
  const isActive = ref(false)

  //methods
  const activate = () => {
    if (isActive.value) {
      return
    }

    const { ScreenSpaceEventType, KeyboardEventModifier, ScreenSpaceEventHandler } = Cesium
    if (!handler.value) {
      const { viewer } = $services
      handler.value = new ScreenSpaceEventHandler(viewer.canvas)
    }

    const sseh = handler.value
    sseh.setInputAction(onLeftClick, ScreenSpaceEventType.LEFT_CLICK)
    sseh.setInputAction(onLeftClickShift, ScreenSpaceEventType.LEFT_CLICK, KeyboardEventModifier.SHIFT)
    sseh.setInputAction(onLeftClickCtrl, ScreenSpaceEventType.LEFT_CLICK, KeyboardEventModifier.CTRL)

    sseh.setInputAction(onLeftDown, ScreenSpaceEventType.LEFT_DOWN)
    sseh.setInputAction(onLeftDownShift, ScreenSpaceEventType.LEFT_DOWN, KeyboardEventModifier.SHIFT)
    sseh.setInputAction(onLeftDownCtrl, ScreenSpaceEventType.LEFT_DOWN, KeyboardEventModifier.CTRL)

    sseh.setInputAction(onLeftUp, ScreenSpaceEventType.LEFT_UP)
    sseh.setInputAction(onLeftUpShift, ScreenSpaceEventType.LEFT_UP, KeyboardEventModifier.SHIFT)
    sseh.setInputAction(onLeftUpCtrl, ScreenSpaceEventType.LEFT_UP, KeyboardEventModifier.CTRL)

    sseh.setInputAction(onRightClick, ScreenSpaceEventType.RIGHT_CLICK)
    sseh.setInputAction(onRightClickShift, ScreenSpaceEventType.RIGHT_CLICK, KeyboardEventModifier.SHIFT)
    sseh.setInputAction(onRightClickCtrl, ScreenSpaceEventType.RIGHT_CLICK, KeyboardEventModifier.CTRL)

    sseh.setInputAction(onRightDown, ScreenSpaceEventType.RIGHT_DOWN)
    sseh.setInputAction(onRightDownShift, ScreenSpaceEventType.RIGHT_DOWN, KeyboardEventModifier.SHIFT)
    sseh.setInputAction(onRightDownCtrl, ScreenSpaceEventType.RIGHT_DOWN, KeyboardEventModifier.CTRL)

    sseh.setInputAction(onRightUp, ScreenSpaceEventType.RIGHT_UP)
    sseh.setInputAction(onRightUpShift, ScreenSpaceEventType.RIGHT_UP, KeyboardEventModifier.SHIFT)
    sseh.setInputAction(onRightUpCtrl, ScreenSpaceEventType.RIGHT_UP, KeyboardEventModifier.CTRL)

    sseh.setInputAction(onMiddleClick, ScreenSpaceEventType.MIDDLE_CLICK)
    sseh.setInputAction(onMiddleClickShift, ScreenSpaceEventType.MIDDLE_CLICK, KeyboardEventModifier.SHIFT)
    sseh.setInputAction(onMiddleClickCtrl, ScreenSpaceEventType.MIDDLE_CLICK, KeyboardEventModifier.CTRL)

    sseh.setInputAction(onMiddleDown, ScreenSpaceEventType.MIDDLE_DOWN)
    sseh.setInputAction(onMiddleDownShift, ScreenSpaceEventType.MIDDLE_DOWN, KeyboardEventModifier.SHIFT)
    sseh.setInputAction(onMiddleDownCtrl, ScreenSpaceEventType.MIDDLE_DOWN, KeyboardEventModifier.CTRL)

    sseh.setInputAction(onMiddleUp, ScreenSpaceEventType.MIDDLE_UP)
    sseh.setInputAction(onMiddleUpShift, ScreenSpaceEventType.MIDDLE_UP, KeyboardEventModifier.SHIFT)
    sseh.setInputAction(onMiddleUpCtrl, ScreenSpaceEventType.MIDDLE_UP, KeyboardEventModifier.CTRL)

    sseh.setInputAction(onDoubleClick, ScreenSpaceEventType.LEFT_DOUBLE_CLICK)
    sseh.setInputAction(onDoubleClickShift, ScreenSpaceEventType.LEFT_DOUBLE_CLICK, KeyboardEventModifier.SHIFT)
    sseh.setInputAction(onDoubleClickCtrl, ScreenSpaceEventType.LEFT_DOUBLE_CLICK, KeyboardEventModifier.CTRL)

    sseh.setInputAction(onMouseMove, ScreenSpaceEventType.MOUSE_MOVE)
    sseh.setInputAction(onMouseMoveShift, ScreenSpaceEventType.MOUSE_MOVE, KeyboardEventModifier.SHIFT)
    sseh.setInputAction(onMouseMoveCtrl, ScreenSpaceEventType.MOUSE_MOVE, KeyboardEventModifier.CTRL)

    sseh.setInputAction(onMouseWheel, ScreenSpaceEventType.WHEEL)
    sseh.setInputAction(onMouseWheelShift, ScreenSpaceEventType.WHEEL, KeyboardEventModifier.SHIFT)
    sseh.setInputAction(onMouseWheelCtrl, ScreenSpaceEventType.WHEEL, KeyboardEventModifier.CTRL)

    sseh.setInputAction(onPinchStart, ScreenSpaceEventType.PINCH_START)
    sseh.setInputAction(onPinchStartShift, ScreenSpaceEventType.PINCH_START, KeyboardEventModifier.SHIFT)
    sseh.setInputAction(onPinchStartCtrl, ScreenSpaceEventType.PINCH_START, KeyboardEventModifier.CTRL)

    sseh.setInputAction(onPinchEnd, ScreenSpaceEventType.PINCH_END)
    sseh.setInputAction(onPinchEndShift, ScreenSpaceEventType.PINCH_END, KeyboardEventModifier.SHIFT)
    sseh.setInputAction(onPinchEndCtrl, ScreenSpaceEventType.PINCH_END, KeyboardEventModifier.CTRL)

    sseh.setInputAction(onPinchMove, ScreenSpaceEventType.PINCH_MOVE)
    sseh.setInputAction(onPinchMoveShift, ScreenSpaceEventType.PINCH_MOVE, KeyboardEventModifier.SHIFT)
    sseh.setInputAction(onPinchMoveCtrl, ScreenSpaceEventType.PINCH_MOVE, KeyboardEventModifier.CTRL)
    isActive.value = true
  }


  const deactivate = () => {
    if (!isActive.value) {
      return
    }
    const { ScreenSpaceEventType, KeyboardEventModifier } = Cesium

    const sseh = handler.value
    if (!sseh) {
      return
    }
    sseh.removeInputAction(ScreenSpaceEventType.LEFT_CLICK)
    sseh.removeInputAction(ScreenSpaceEventType.LEFT_CLICK, KeyboardEventModifier.SHIFT)
    sseh.removeInputAction(ScreenSpaceEventType.LEFT_CLICK, KeyboardEventModifier.CTRL)

    sseh.removeInputAction(ScreenSpaceEventType.LEFT_DOWN)
    sseh.removeInputAction(ScreenSpaceEventType.LEFT_DOWN, KeyboardEventModifier.SHIFT)
    sseh.removeInputAction(ScreenSpaceEventType.LEFT_DOWN, KeyboardEventModifier.CTRL)

    sseh.removeInputAction(ScreenSpaceEventType.LEFT_UP)
    sseh.removeInputAction(ScreenSpaceEventType.LEFT_UP, KeyboardEventModifier.SHIFT)
    sseh.removeInputAction(ScreenSpaceEventType.LEFT_UP, KeyboardEventModifier.CTRL)

    sseh.removeInputAction(ScreenSpaceEventType.RIGHT_CLICK)
    sseh.removeInputAction(ScreenSpaceEventType.RIGHT_CLICK, KeyboardEventModifier.SHIFT)
    sseh.removeInputAction(ScreenSpaceEventType.RIGHT_CLICK, KeyboardEventModifier.CTRL)

    sseh.removeInputAction(ScreenSpaceEventType.RIGHT_DOWN)
    sseh.removeInputAction(ScreenSpaceEventType.RIGHT_DOWN, KeyboardEventModifier.SHIFT)
    sseh.removeInputAction(ScreenSpaceEventType.RIGHT_DOWN, KeyboardEventModifier.CTRL)

    sseh.removeInputAction(ScreenSpaceEventType.RIGHT_UP)
    sseh.removeInputAction(ScreenSpaceEventType.RIGHT_UP, KeyboardEventModifier.SHIFT)
    sseh.removeInputAction(ScreenSpaceEventType.RIGHT_UP, KeyboardEventModifier.CTRL)

    sseh.removeInputAction(ScreenSpaceEventType.MIDDLE_CLICK)
    sseh.removeInputAction(ScreenSpaceEventType.MIDDLE_CLICK, KeyboardEventModifier.SHIFT)
    sseh.removeInputAction(ScreenSpaceEventType.MIDDLE_CLICK, KeyboardEventModifier.CTRL)

    sseh.removeInputAction(ScreenSpaceEventType.MIDDLE_DOWN)
    sseh.removeInputAction(ScreenSpaceEventType.MIDDLE_DOWN, KeyboardEventModifier.SHIFT)
    sseh.removeInputAction(ScreenSpaceEventType.MIDDLE_DOWN, KeyboardEventModifier.CTRL)

    sseh.removeInputAction(ScreenSpaceEventType.MIDDLE_UP)
    sseh.removeInputAction(ScreenSpaceEventType.MIDDLE_UP, KeyboardEventModifier.SHIFT)
    sseh.removeInputAction(ScreenSpaceEventType.MIDDLE_UP, KeyboardEventModifier.CTRL)

    sseh.removeInputAction(ScreenSpaceEventType.LEFT_DOUBLE_CLICK)
    sseh.removeInputAction(ScreenSpaceEventType.LEFT_DOUBLE_CLICK, KeyboardEventModifier.SHIFT)
    sseh.removeInputAction(ScreenSpaceEventType.LEFT_DOUBLE_CLICK, KeyboardEventModifier.CTRL)

    sseh.removeInputAction(ScreenSpaceEventType.MOUSE_MOVE)
    sseh.removeInputAction(ScreenSpaceEventType.MOUSE_MOVE, KeyboardEventModifier.SHIFT)
    sseh.removeInputAction(ScreenSpaceEventType.MOUSE_MOVE, KeyboardEventModifier.CTRL)

    sseh.removeInputAction(ScreenSpaceEventType.WHEEL)
    sseh.removeInputAction(ScreenSpaceEventType.WHEEL, KeyboardEventModifier.SHIFT)
    sseh.removeInputAction(ScreenSpaceEventType.WHEEL, KeyboardEventModifier.CTRL)

    sseh.removeInputAction(ScreenSpaceEventType.PINCH_START)
    sseh.removeInputAction(ScreenSpaceEventType.PINCH_START, KeyboardEventModifier.SHIFT)
    sseh.removeInputAction(ScreenSpaceEventType.PINCH_START, KeyboardEventModifier.CTRL)

    sseh.removeInputAction(ScreenSpaceEventType.PINCH_END)
    sseh.removeInputAction(ScreenSpaceEventType.PINCH_END, KeyboardEventModifier.SHIFT)
    sseh.removeInputAction(ScreenSpaceEventType.PINCH_END, KeyboardEventModifier.CTRL)

    sseh.removeInputAction(ScreenSpaceEventType.PINCH_MOVE)
    sseh.removeInputAction(ScreenSpaceEventType.PINCH_MOVE, KeyboardEventModifier.SHIFT)
    sseh.removeInputAction(ScreenSpaceEventType.PINCH_MOVE, KeyboardEventModifier.CTRL)
    isActive.value = false
  }

  const destroy = () => {
    handler.value?.destroy()
    handler.value = undefined
  }

  const onLeftClick = movement => {
    handleMouseClick?.(movement, {
      button: 0
    })
  }

  const onLeftClickShift = movement => {
    handleMouseClick?.(movement, {
      button: 0,
      shift: true
    })
  }

  const onLeftClickCtrl = movement => {
    handleMouseClick?.(movement, {
      button: 0,
      ctrl: true
    })
  }

  const onMiddleClick = movement => {
    handleMouseClick?.(movement, {
      button: 1
    })
  }

  const onMiddleClickShift = movement => {
    handleMouseClick?.(movement, {
      button: 1,
      shift: true
    })
  }

  const onMiddleClickCtrl = movement => {
    handleMouseClick?.(movement, {
      button: 1,
      ctrl: true
    })
  }

  const onRightClick = movement => {
    handleMouseClick(movement, {
      button: 2
    })
  }

  const onRightClickShift = movement => {
    handleMouseClick(movement, {
      button: 2,
      shift: true
    })
  }

  const onRightClickCtrl = movement => {
    handleMouseClick(movement, {
      button: 2,
      ctrl: true
    })
  }

  const onLeftDown = movement => {
    handleMouseDown?.(movement, {
      button: 0
    })
  }

  const onLeftDownShift = movement => {
    handleMouseDown?.(movement, {
      button: 0,
      shift: true
    })
  }

  const onLeftDownCtrl = movement => {
    handleMouseDown?.(movement, {
      button: 0,
      ctrl: true
    })
  }

  const onMiddleDown = movement => {
    handleMouseDown?.(movement, {
      button: 1
    })
  }

  const onMiddleDownShift = movement => {
    handleMouseDown?.(movement, {
      button: 1,
      shift: true
    })
  }

  const onMiddleDownCtrl = movement => {
    handleMouseDown?.(movement, {
      button: 1,
      ctrl: true
    })
  }

  const onRightDown = movement => {
    handleMouseDown?.(movement, {
      button: 2
    })
  }

  const onRightDownShift = movement => {
    handleMouseDown?.(movement, {
      button: 2,
      shift: true
    })
  }

  const onRightDownCtrl = movement => {
    handleMouseDown?.(movement, {
      button: 2,
      ctrl: true
    })
  }

  const onLeftUp = movement => {
    handleMouseUp?.(movement, {
      button: 0
    })
  }

  const onLeftUpShift = movement => {
    handleMouseUp?.(movement, {
      button: 0,
      shift: true
    })
  }

  const onLeftUpCtrl = movement => {
    handleMouseUp?.(movement, {
      button: 0,
      ctrl: true
    })
  }

  const onMiddleUp = movement => {
    handleMouseUp?.(movement, {
      button: 1,
      ctrl: true
    })
  }

  const onMiddleUpShift = movement => {
    handleMouseUp?.(movement, {
      button: 1,
      shift: true
    })
  }

  const onMiddleUpCtrl = movement => {
    handleMouseUp?.(movement, {
      button: 1,
      ctrl: true
    })
  }

  const onRightUp = movement => {
    handleMouseUp?.(movement, {
      button: 2
    })
  }

  const onRightUpShift = movement => {
    handleMouseUp?.(movement, {
      button: 2,
      shift: true
    })
  }

  const onRightUpCtrl = movement => {
    handleMouseUp?.(movement, {
      button: 2,
      ctrl: true
    })
  }

  const onDoubleClick = movement => {
    handleDoubleClick?.(movement, {
      button: 0
    })
  }

  const onDoubleClickShift = movement => {
    handleDoubleClick?.(movement, {
      button: 0,
      shift: true
    })
  }

  const onDoubleClickCtrl = movement => {
    handleDoubleClick?.(movement, {
      button: 0,
      ctrl: true
    })
  }

  const onMouseMove = movement => {
    handleMouseMove?.(movement)
  }

  const onMouseMoveShift = movement => {
    handleMouseMove?.(movement, {
      shift: true
    })
  }

  const onMouseMoveCtrl = movement => {
    handleMouseMove?.(movement, {
      ctrl: true
    })
  }

  const onMouseWheel = e => {
    handleMouseWheel?.(e)
  }

  const onMouseWheelShift = e => {
    handleMouseWheel?.(e, {
      shift: true
    })
  }

  const onMouseWheelCtrl = e => {
    handleMouseWheel?.(e, {
      ctrl: true
    })
  }

  const onPinchStart = e => {
    handlePinch?.(e, {
      start: true
    })
  }

  const onPinchStartShift = e => {
    handlePinch?.(e, {
      start: true,
      shift: true
    })
  }

  const onPinchStartCtrl = e => {
    handlePinch?.(e, {
      start: true,
      ctrl: true
    })
  }

  const onPinchEnd = e => {
    handlePinch?.(e, {
      end: true
    })
  }

  const onPinchEndShift = e => {
    handlePinch?.(e, {
      end: true,
      shift: true
    })
  }

  const onPinchEndCtrl = e => {
    handlePinch?.(e, {
      end: true,
      ctrl: true
    })
  }

  const onPinchMove = e => {
    handlePinch?.(e, {
      move: true
    })
  }

  const onPinchMoveShift = e => {
    handlePinch?.(e, {
      move: true,
      shift: true
    })
  }

  const onPinchMoveCtrl = e => {
    handlePinch?.(e, {
      move: true,
      ctrl: true
    })
  }

  return {
    activate,
    deactivate,
    destroy,
    isActive
  }
}
