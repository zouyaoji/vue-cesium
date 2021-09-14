import { useCommon } from '@vue-cesium/composables'
import { $ } from '@vue-cesium/utils/private/vm'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, h } from 'vue'
import useSelectionIndicatior from './use-selection-indicatior'
import Feature from './Feature'

export default defineComponent({
  name: 'VcSelectionIndicator',
  props: {
    show: {
      type: Boolean,
      default: true
    },
    width: {
      type: Number,
      default: 50
    },
    height: {
      type: Number,
      default: 50
    },
    allowFeatureInfoRequests: {
      type: Boolean,
      default: true
    }
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'pickEvt'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcSelectionIndicator'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState

    let pickScreenSpaceEventHandler: Cesium.ScreenSpaceEventHandler
    const useSelectionIndicatiorState = useSelectionIndicatior(instance, props, $services)

    // methods
    instance.createCesiumObject = async () => {
      const { viewer } = $services
      const viewerElement = (viewer as any)._element
      viewerElement.appendChild($(useSelectionIndicatiorState.rootRef))
      Feature.init()
      return $(useSelectionIndicatiorState.rootRef)
    }

    instance.mount = async () => {
      const { viewer } = $services
      const { ScreenSpaceEventHandler, ScreenSpaceEventType } = Cesium

      pickScreenSpaceEventHandler = new ScreenSpaceEventHandler(viewer.canvas)
      pickScreenSpaceEventHandler.setInputAction(movement => {
        useSelectionIndicatiorState.pickFromScreenPosition(movement.position)
      }, ScreenSpaceEventType.LEFT_CLICK)

      viewer.scene.postRender.addEventListener(useSelectionIndicatiorState.onPostRender)

      return true
    }

    instance.unmount = async () => {
      const { viewer } = $services
      const viewerElement = (viewer as any)._element
      viewerElement.contains($(useSelectionIndicatiorState.rootRef)) && viewerElement.removeChild($(useSelectionIndicatiorState.rootRef))

      viewer.scene.postRender.removeEventListener(useSelectionIndicatiorState.onPostRender)

      pickScreenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK)
      pickScreenSpaceEventHandler.destroy()
      pickScreenSpaceEventHandler = undefined

      return true
    }

    return () => {
      return h(
        'div',
        {
          ref: useSelectionIndicatiorState.rootRef,
          class: 'vc-selection-indicator',
          style: useSelectionIndicatiorState.rootStyle
        },
        h('img', {
          src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIxNzZweCIgaGVpZ2h0PSIxNzZweCIgdmlld0JveD0iMCAwIDE3NiAxNzYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy4xLjEgKDg3NjEpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPg0KICAgIDx0aXRsZT5Mb2NhdGlvblRhcmdldCArIFBhdGg8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxkZWZzPg0KICAgICAgICA8ZmlsdGVyIHg9Ii01MCUiIHk9Ii01MCUiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImZpbHRlci0xIj4NCiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjAiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVPZmZzZXQ+DQogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVHYXVzc2lhbkJsdXI+DQogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgIDAgMCAwIDAgMCAgMCAwIDAgMC41MjY0NDY0NDUgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiIHR5cGU9Im1hdHJpeCIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiPjwvZmVDb2xvck1hdHJpeD4NCiAgICAgICAgICAgIDxmZU1lcmdlPg0KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0ic2hhZG93TWF0cml4T3V0ZXIxIj48L2ZlTWVyZ2VOb2RlPg0KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyI+PC9mZU1lcmdlTm9kZT4NCiAgICAgICAgICAgIDwvZmVNZXJnZT4NCiAgICAgICAgPC9maWx0ZXI+DQogICAgICAgIDxmaWx0ZXIgeD0iLTUwJSIgeT0iLTUwJSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iZmlsdGVyLTIiPg0KICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iMCIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSI+PC9mZU9mZnNldD4NCiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUdhdXNzaWFuQmx1cj4NCiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjUyNjQ0NjQ0NSAwIiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgdHlwZT0ibWF0cml4IiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSI+PC9mZUNvbG9yTWF0cml4Pg0KICAgICAgICAgICAgPGZlTWVyZ2U+DQogICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJzaGFkb3dNYXRyaXhPdXRlcjEiPjwvZmVNZXJnZU5vZGU+DQogICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIj48L2ZlTWVyZ2VOb2RlPg0KICAgICAgICAgICAgPC9mZU1lcmdlPg0KICAgICAgICA8L2ZpbHRlcj4NCiAgICA8L2RlZnM+DQogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJBcnRib2FyZC0xIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjkxLjAwMDAwMCwgLTQ5OC4wMDAwMDApIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iI0ZGRkZGRiI+DQogICAgICAgICAgICA8ZyBpZD0iTG9jYXRpb25UYXJnZXQtKy1QYXRoIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2OTkuMDAwMDAwLCA1MDYuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTTgwLDE0NCBDMTE1LjM0NjIyNCwxNDQgMTQ0LDExNS4zNDYyMjQgMTQ0LDgwIEMxNDQsNDQuNjUzNzc2IDExNS4zNDYyMjQsMTYgODAsMTYgQzQ0LjY1Mzc3NiwxNiAxNiw0NC42NTM3NzYgMTYsODAgQzE2LDExNS4zNDYyMjQgNDQuNjUzNzc2LDE0NCA4MCwxNDQgWiBNMTYwLDgwIEwxNDQsODAgTTE2LDgwIEwwLDgwIE03OS42LC0wLjQgTDc5LjYsMTUuNiBNNzguOCwxNDQgTDc4LjgsMTYwIiBpZD0iTG9jYXRpb25UYXJnZXQiIHN0cm9rZS13aWR0aD0iNyIgZmlsdGVyPSJ1cmwoI2ZpbHRlci0xKSI+PC9wYXRoPg0KICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9IlBhdGgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC4yNTIyMTU0ODUiIGZpbHRlcj0idXJsKCNmaWx0ZXItMikiIGN4PSI4MCIgY3k9IjgwIiByPSI2Ij48L2NpcmNsZT4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==',
          width: props.width,
          height: props.height
        })
      )
    }
  }
})
