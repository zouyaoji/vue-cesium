## VcDrawings

加载绘制工具组件，目前包含点、线、面绘制工具，其他的后续再增加。

**注意：** 需要引入样式文件: `import 'vue-cesium/default/index.css';`

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
      :mainFabOpts="mainFabOpts"
      :offset="[20, 80]"
      :editable="editable"
      :clampToGround="clampToGround"
      @drawEvt="drawEvt"
      @activeEvt="activeEvt"
      @editorEvt="editorEvt"
      @mouseEvt="mouseEvt"
      @ready="drawingsReadyDefault"
    ></vc-drawings>
    <!-- 结合 slot 改变默认 UI，自定义绘制方法 -->
    <vc-drawings
      ref="drawingsCustomRef"
      position="bottom-left"
      :mainFabOpts="mainFabOpts"
      :offset="[0, 20]"
      :editable="editable"
      :clampToGround="clampToGround"
      @ready="drawingsReady"
      :polylineDrawingOpts="polylineDrawingOpts"
      :rectangleDrawingOpts="rectangleDrawingOpts"
      :pinDrawingOpts="pinDrawingOpts"
    >
      <template #body>
        <div class="custom-drawings">
          <el-row>
            <el-button
              v-for="(drawingActionInstance, index) in drawingActionInstances"
              :key="index"
              :type="drawingActionInstance.isActive ? 'success' : 'primary'"
              round
              @click="toggle(drawingActionInstance)"
              >{{drawingActionInstance.tip.replace('绘制', '')}}</el-button
            >
            <el-button type="danger" round @click="clear">清除</el-button>
          </el-row>
        </div>
      </template>
    </vc-drawings>
    <vc-primitive-tileset
      url="https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json"
      @readyPromise="onTilesetReady"
    ></vc-primitive-tileset>
    <vc-layer-imagery>
      <vc-provider-imagery-tianditu mapStyle="img_c" :maximumLevel="17" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
    </vc-layer-imagery>
    <vc-provider-terrain-cesium v-if="addTerrain"></vc-provider-terrain-cesium>
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
        drawingActionInstances: [],
        editable: false,
        clampToGround: false,
        mainFabOpts: {
          direction: 'right'
        },
        polylineDrawingOpts: {
          loop: true
        },
        rectangleDrawingOpts: {
          regular: false
        },
        pinDrawingOpts: {
          billboardOpts: {
            image: 'https://zouyaoji.top/vue-cesium/images/grepin.png'
          },
          labelOpts: {
            text: '图标点',
            pixelOffset: [0, -60]
          }
        }
      }
    },
    methods: {
      drawingsReadyDefault({ Cesium, viewer, cesiumObject }) {
        console.log('绘制选项参数：', cesiumObject)
      },
      clear() {
        this.$refs.drawingsCustomRef.clearAll()
      },
      drawingsReady({ Cesium, viewer, cesiumObject }) {
        this.drawingActionInstances = cesiumObject
      },
      toggle(drawingActionInstance) {
        this.$refs.drawingsCustomRef.toggleAction(drawingActionInstance.name)
      },
      onTilesetReady(tileset, viewer) {
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
      unload() {
        this.$refs.drawingsRef.unload()
      },
      load() {
        this.$refs.drawingsRef.load()
      },
      reload() {
        this.$refs.drawingsRef.reload()
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
| position | String | `'top-right'` | `optional` 指定绘制组件的位置。 |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | Array | `[0, 0]` | `optional` 指定绘制组件基于位置的偏移量。 |
| show | Boolean | `true` | `optional` 指定绘制的结果是否可见。 |
| mode | Number | `1` | `optional` 指定绘制交互模式，0 代表连续绘制，1 代表绘制一次就结束。|
| drawings | Array | `['pin', 'point', 'polyline', 'polygon', 'rectangle', 'circle', 'regular']` | `optional` 指定要加载的绘制实例。 |
| activeColor | String | `'positive'` | `optional` 指定绘制实例激活时的颜色。 |
| editable | Boolean | `false` | `optional` 指定绘制结果对象是否可编辑。 |
| clampToGround | Boolean | `false` | `optional` 指定绘制结果对象是否贴地或模型。仅线、面对象生效。 |
| mainFabOpts | Object | | `optional` 指定绘制组件浮动按钮的样式选项。 |
| pinActionOpts | Object | `` | `optional` 指定图标点绘制按钮的样式选项。|
| pinDrawingOpts | Object | | `optional` 指定图标点绘制参数。|
| pointActionOpts | Object | `` | `optional` 指定点绘制按钮的样式选项。|
| pointDrawingOpts | Object | | `optional` 指定点绘制参数。|
| polylineActionOpts | Object | | `optional` 指定先绘制按钮的样式选项。|
| polylineDrawingOpts | Object | | `optional` 指定线绘制参数。|
| polygonActionOpts | Object | | `optional` 指定面绘制按钮的样式选项。|
| polygonDrawingOpts | Object | | `optional` 指定面绘制参数。|
| rectangleActionOpts | Object | | `optional` 指定矩形绘制按钮的样式选项。|
| rectangleDrawingOpts | Object | | `optional` 指定矩形绘制参数。|
| circleActionOpts | Object | | `optional` 指定圆绘制按钮的样式选项。|
| circleDrawingOpts | Object | | `optional` 指定圆绘制参数。|
| regularActionOpts | Object | | `optional` 指定正多边形绘制按钮的样式选项。|
| regularDrawingOpts | Object | | `optional` 指定正多边形绘制参数。|
| clearActionOpts | Object | | `optional` 指定清除按钮的样式选项。|

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
  autoExpand: true,
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

| 事件名     | 参数                               | 描述                         |
| ---------- | ---------------------------------- | ---------------------------- |
| beforeLoad | Vue Instance                       | 对象加载前触发。             |
| ready      | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。         |
| destroyed  | Vue Instance                       | 对象销毁时触发。             |
| drawEvt    | (drawParam, viewer)                | 绘制时触发。                 |
| activeEvt  | (activeParam, viewer)              | 切换绘制 Action 时触发。     |
| editorEvt  | (editParam, viewer)                | 点击编辑按钮时触发。         |
| mouseEvt   | (mouseParam, viewer)               | 鼠标移进、移除绘制点时触发。 |

### 插槽

| 插槽名 | 描述                    |
| ------ | ----------------------- |
| body   | 用于自定义绘制组件 UI。 |
