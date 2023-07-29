## VcDrawings

加载绘制工具组件。支持绘制点、线、面、矩形、正多边形、圆形。

**注意：** 需要引入样式文件: `import 'vue-cesium/dist/index.css';`

:::tip

提示：3.0 版本已将绘制组件重构成一个组件，简约的同时支持自定义风格。

ctrl + 右键取消绘制。

:::

### 基础用法

绘制组件的基础用法。

:::demo 使用 `vc-drawings` 标签在三维球上添加绘制工具。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <!-- 修改定位 和 位置偏移 -->
    <vc-drawings
      ref="drawingsRef"
      position="bottom-left"
      :main-fab-opts="mainFabOpts"
      :offset="[10, 65]"
      :editable="editable"
      :clamp-to-ground="clampToGround"
      @draw-evt="drawEvt"
      @active-evt="activeEvt"
      @editor-evt="editorEvt"
      @mouse-evt="mouseEvt"
      @clear-evt="clearEvt"
      @ready="drawingsReadyDefault"
      :pin-drawing-opts="pinDrawingOpts"
      :point-drawing-opts="pointDrawingOpts"
      :polygon-drawing-opts="polygonDrawingOpts"
      :polyline-drawing-opts="polylineDrawingOpts"
      :regular-drawing-opts="regularDrawingOpts"
    ></vc-drawings>
    <!-- 结合 slot 改变默认 UI，自定义绘制方法 -->
    <vc-drawings
      ref="drawingsCustomRef"
      position="bottom-left"
      :main-fab-opts="mainFabOpts"
      :offset="[10, 30]"
      :editable="editable"
      :clamp-to-ground="clampToGround"
      :polyline-drawing-opts="polylineDrawingOpts"
      :pin-drawing-opts="pinDrawingOpts"
      :rectangle-drawing-opts="rectangleDrawingOpts"
    >
      <template #body="drawingActionInstances">
        <div class="custom-drawings">
          <el-row>
            <vc-btn
              v-for="(drawingActionInstance, index) in drawingActionInstances"
              :key="index"
              :color="drawingActionInstance.isActive ? 'positive' : 'primary'"
              rounded
              @click="toggle(drawingActionInstance)"
              >{{drawingActionInstance.tip.replace('绘制', '')}}</vc-btn
            >
            <vc-btn color="red" rounded @click="clear">清除</vc-btn>
          </el-row>
        </div>
      </template>
    </vc-drawings>
    <vc-primitive-tileset
      url="https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json"
      @ready="onTilesetReady"
    ></vc-primitive-tileset>
    <vc-layer-imagery>
      <vc-imagery-provider-tianditu map-style="img_c" :maximum-level="17" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-terrain-provider-cesium v-if="addTerrain"></vc-terrain-provider-cesium>
    <!-- <vc-selection-indicator ref="selectionIndicator" @pick-evt="pickEvt"></vc-selection-indicator> -->
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
    <el-checkbox v-model="editable">可编辑</el-checkbox>
    <el-checkbox v-model="addTerrain">地形</el-checkbox>
    <el-checkbox v-model="clampToGround">贴地</el-checkbox>
  </el-row>
</el-row>

<script>
  let viewer = undefined
  export default {
    data() {
      return {
        addTerrain: false,
        editable: false,
        clampToGround: false,
        mainFabOpts: {
          direction: 'right'
        },
        polylineDrawingOpts: {
          // loop: true,
          onClick(e) {
            console.log(e)
          }
        },
        rectangleDrawingOpts: {
          regular: false
        },
        pinDrawingOpts: {
          billboardOpts: {
            image: 'https://zouyaoji.top/vue-cesium/images/grepin.png',
            onClick(e) {
              console.log(e)
            }
          },
          labelOpts: {
            text: '图标点',
            pixelOffset: [0, -60],
            onClick(e) {
              console.log(e)
            }
          }
        },
        pointDrawingOpts: {
          preRenderDatas: [
            [108.96018, 34.21948, 50],
            [108.9602, 34.21895, 100]
          ],
          pointOpts: {
            color: 'red',
            onClick(e) {
              console.log(e)
            }
          }
        },
        polygonDrawingOpts: {
          preRenderDatas: [
            [
              [108.95808, 34.21955, 30],
              [108.95948, 34.22039, 20],
              [108.9595, 34.21914, 25]
            ],
            [
              [108.955, 34.21857],
              [108.95573, 34.21856],
              [108.95573, 34.21761],
              [108.95499, 34.21761]
            ]
          ]
        },
        regularDrawingOpts: {
          preRenderDatas: [
            [
              [108.95474, 34.22204],
              [108.95564, 34.22166]
            ]
          ],
          onClick(e) {
            console.log(e)
          }
        }
      }
    },
    methods: {
      drawingsReadyDefault({ Cesium, viewer, cesiumObject }) {
        console.log('绘制选项参数：', cesiumObject)
        window.vm = this
        window.viewer = viewer
      },
      clear() {
        this.$refs.drawingsCustomRef.clearAll()
      },
      toggle(drawingActionInstance) {
        this.$refs.drawingsCustomRef.toggleAction(drawingActionInstance.name)
      },
      onTilesetReady({ cesiumObject: tileset, viewer }) {
        const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)
        const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)
        const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 5)
        const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())
        tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)
        viewer.zoomTo(tileset)
        viewer.scene.globe.depthTestAgainstTerrain = true
        this.restoreCursorMove = 'auto'
        this.drawing = false
      },
      drawEvt(e, viewer) {
        const restoreCursor = getComputedStyle(viewer.canvas).cursor
        if (e.finished) {
          if (e.type === 'move') {
            viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove}`)
          }
          this.drawing = false
        } else {
          this.drawing = true
          if (e.type === 'move') {
            viewer.canvas.setAttribute('style', 'cursor: move')
          }
          if (e.type === 'new') {
            viewer.canvas.setAttribute('style', 'cursor: crosshair')
          }
        }
      },
      activeEvt(e, viewer) {
        console.log(e)
        viewer.canvas.setAttribute('style', `cursor: ${e.isActive ? 'crosshair' : 'auto'}`)
        if (!e.isActive) {
          this.drawing = false
          this.restoreCursorMove = 'auto'
        }
      },
      editorEvt(e, viewer) {
        if (e.type === 'move') {
          viewer.canvas.setAttribute('style', 'cursor: move')
          this.drawing = true
        } else {
          viewer.canvas.setAttribute('style', 'cursor: auto')
        }
      },
      mouseEvt(e, viewer) {
        const restoreCursor = getComputedStyle(viewer.canvas).cursor
        if (!this.drawing) {
          console.log(e)
          if (e.type === 'onmouseover') {
            this.restoreCursorMove = restoreCursor
            viewer.canvas.setAttribute('style', 'cursor: pointer')
          } else {
            viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove || 'auto'}`)
          }
        }
      },
      clearEvt(e, viewer) {
        console.log(e)
      },
      unload() {
        this.$refs.drawingsRef.unload()
      },
      load() {
        this.$refs.drawingsRef.load()
      },
      reload() {
        this.$refs.drawingsRef.reload()
      },
      pickEvt(e) {
        console.log(e)
      }
    }
  }
</script>
```

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ----- | --- | ------ | ---- | ----- |
| position | string | `'bottom-left'` | `optional` 指定绘制组件的位置。 |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | [number, number] | `[0, 0]` | `optional` 指定绘制组件基于位置的偏移量。 |
| show | boolean | `true` | `optional` 指定绘制的结果是否可见。 |
| mode | number | `1` | `optional` 指定绘制交互模式，0 代表连续绘制，1 代表绘制一次就结束。|
| drawings | Array\<'pin' \| 'point' \| 'polyline' \| 'polygon' \| 'rectangle' \| 'regular' \| 'circle'\> | `['pin', 'point', 'polyline', 'polygon', 'rectangle', 'circle', 'regular']` | `optional` 指定要加载的绘制实例。 |
| activeColor | string | `'positive'` | `optional` 指定绘制实例激活时的颜色。 |
| editable | boolean | `false` | `optional` 指定绘制结果对象是否可编辑。 |
| clampToGround | boolean | `false` | `optional` 指定绘制结果对象是否贴地或模型。仅线、面对象生效。 |
| mainFabOpts | VcActionTooltipProps & VcFabProps | | `optional` 指定绘制组件浮动按钮的样式选项。 |
| fabActionOpts | VcActionTooltipProps | | `optional` 指定其他绘制按钮的公共样式选项。 |
| pinActionOpts | VcActionTooltipProps | `` | `optional` 指定图标点绘制按钮的样式选项。|
| pinDrawingOpts | VcDrawingOpts | | `optional` 指定图标点绘制参数。|
| pointActionOpts | VcActionTooltipProps | `` | `optional` 指定点绘制按钮的样式选项。|
| pointDrawingOpts | VcDrawingOpts | | `optional` 指定点绘制参数。|
| polylineActionOpts | VcActionTooltipProps | | `optional` 指定先绘制按钮的样式选项。|
| polylineDrawingOpts | VcDrawingOpts | | `optional` 指定线绘制参数。|
| polygonActionOpts | VcActionTooltipProps | | `optional` 指定面绘制按钮的样式选项。|
| polygonDrawingOpts | VcDrawingOpts | | `optional` 指定面绘制参数。|
| rectangleActionOpts | VcActionTooltipProps | | `optional` 指定矩形绘制按钮的样式选项。|
| rectangleDrawingOpts | VcDrawingOpts | | `optional` 指定矩形绘制参数。|
| circleActionOpts | VcActionTooltipProps | | `optional` 指定圆绘制按钮的样式选项。|
| circleDrawingOpts | VcDrawingOpts | | `optional` 指定圆绘制参数。|
| regularActionOpts | VcActionTooltipProps | | `optional` 指定正多边形绘制按钮的样式选项。|
| regularDrawingOpts | VcDrawingOpts | | `optional` 指定正多边形绘制参数。|
| clearActionOpts | VcActionTooltipProps | | `optional` 指定清除按钮的样式选项。|

:::tip

提示：绘制组件主要由两部分构成：（1）支持展开和收缩的浮动按钮（Fab）；（2）具体绘制按钮（FabAction）。

:::

:::tipflex

```js
// 每个按钮均有以下属性
// ActionOpts general props
{
  externalLabel: false,
  label: '',
  labelPosition: 'right',
  hideLabel: false,
  disable: false,
  outline: false,
  push: false,
  flat: false,
  unelevated: false,
  color: 'primary',
  glossy: false,
  square: false,
  tooltip: {
    delay: 500,
    anchor: 'bottom middle',
    offset: [
      0,
      20
    ]
  },
  // The default icons are
  // vc-icons-drawing-point
  // vc-icons-drawing-polyline
  // vc-icons-drawing-polygon
  // vc-icons-drawing-rectangle
  // vc-icons-drawing-circle
  // vc-icons-drawing-regular
  // vc-icons-clear
  icon: 'vc-icons-drawing-point'
}
```

```js
// mainFabOpts 在上述的基础上多了这些属性
// The following properties are added to the common properties of mainFabOpts:
{
  direction: 'left',
  icon: 'vc-icons-drawing-button',
  activeIcon: 'vc-icons-drawing-button',
  verticalActionsAlign: 'center',
  hideIcon: false,
  persistent: false,
  modelValue: true,
  hideActionOnClick: false,
  color: 'info'
}
```

:::

:::tip

提示：每个绘制按钮（FabAction）对应有属性 xxxDrawingOpts，用于自定义绘制对象。

详见：[defaultProps](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/components/drawings/src/defaultProps.ts)

各绘制结果的参数配置由于篇幅太长这儿就不一一列举了，如有自定义需要，请在当前文档页面打开控制台输出可以查看 `绘制按钮的默认参数` 和 `绘制结果的默认参数`。分别是 `actionOpts` 和 `cmpOpts` 属性。例如 `pointDrawingOpts` 参数对象结构与控制台输出 `绘制选项参数：` 中 `name` 为 `point` 项的 `cmpOpts` 结构相同。`pointActionOpts` 参数对象与控制台输出 `绘制选项参数：` 中 `name` 为 `point` 项的 `actionOpts` 结构相同。当然也可以在自己代码中参考这样输出来查看。
:::

### 事件

| 事件名     | 参数                                             | 描述                         |
| ---------- | ------------------------------------------------ | ---------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance)          | 对象加载前触发。             |
| ready      | (readyObj: VcReadyObject)                        | 对象加载成功时触发。         |
| destroyed  | (instance: VcComponentInternalInstance)          | 对象销毁时触发。             |
| drawEvt    | (evt: VcDrawingDrawEvt, viewer: Cesium.Viewer)   | 绘制时触发。                 |
| activeEvt  | (evt: VcDrawingActiveEvt, viewer: Cesium.Viewer) | 切换绘制 Action 时触发。     |
| editorEvt  | (evt: VcDrawingEditorEvt, viewer: Cesium.Viewer) | 点击编辑按钮时触发。         |
| mouseEvt   | (evt: VcDrawingMouseEvt, viewer: Cesium.Viewer)  | 鼠标移进、移除绘制点时触发。 |
| fabUpdated | (value: boolean)                                 | 浮动按钮展开、收拢时触发。   |
| clearEvt   | (evt: object, viewer: Cesium.Viewer)             | 清除绘制时触发。             |

### 方法

<!-- prettier-ignore -->
| 方法名 | 参数 | 描述 |
| ----- | ---- | ---- |
| load | () => Promise\<false \| VcReadyObject\> | 手动加载组件。 |
| reload | () => Promise\<false \| VcReadyObject\> | 手动重新加载组件。 |
| unload | () => Promise\<boolean\> | 手动卸载组件。 |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject | () => VcCesiumObject | 获取通过该组件加载的 Cesium 对象。 |
| clearAll | () => void | 清除所有的绘制对象。 |
| activate | () => void | 激活绘制事件。 |
| deactivate | () => void | 取消激活绘制事件。 |
| toggleAction | (drawingOption: VcDrawingActionInstance \| string) => void | 切换绘制实例。 |
| getFabRef | () => VcFabRef | 获取浮动按钮模板引用。 |
| getDrawingActionInstance | (actionName: string) => VcDrawingActionInstance|根据action名称获取绘制实例。|
| getDrawingActionInstances | () => Array\<VcDrawingActionInstance\> | 获取所有绘制实例。 |
| getSelectedDrawingActionInstance | () => VcDrawingActionInstance | 获取选中的绘制实例。 |

### 插槽

| 插槽名 | 描述                    |
| ------ | ----------------------- |
| body   | 用于自定义绘制组件 UI。 |
