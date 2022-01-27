## VcMeasurements

加载量算工具组件，包含距离量算、三角量算、折线距离量算、水平距离量算、垂直距离量算、高度量算、面积量算、坐标量算。

**注意：** 需要引入样式文件: `import 'vue-cesium/default/index.css';`

:::tip

提示：3.0 版本已将量算组件重构成一个组件，简约的同时支持自定义风格，并优化了交互。

通常是左键绘制，右键取消最后绘制的点，双击结束当前绘制。 其中，水平测量还可以按住 shift 在固定方向绘制。

ctrl + 右键取消绘制。

:::

### 基础用法

量算组件的基础用法。

:::demo 使用 `vc-measurements` 标签在三维球上添加量算工具。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <!-- 修改定位 和 位置偏移 -->
    <vc-measurements
      @drawEvt="drawEvt"
      @activeEvt="activeEvt"
      @editorEvt="editorEvt"
      @mouseEvt="mouseEvt"
      ref="measurementsRef"
      position="bottom-left"
      :clampToGround="clampToGround"
      :mainFabOpts="measurementFabOptions1"
      :offset="[20, 80]"
      :editable="editable"
      @ready="drawingsReadyDefault"
      :pointMeasurementOpts="pointMeasurementOpts"
      :areaMeasurementOpts="areaMeasurementOpts"
    >
    </vc-measurements>
    <!-- 修改加载的量算实例 -->
    <vc-measurements
      ref="measurementsRef2"
      position="top-right"
      :mainFabOpts="measurementFabOptions2"
      :editable="editable"
      :measurements="measurements"
      activeColor="yellow"
    >
    </vc-measurements>
    <!-- 修改量算风格和精度 -->
    <vc-measurements
      ref="measurementsRef3"
      position="top-left"
      :mainFabOpts="measurementFabOptions3"
      :distanceMeasurementOpts="distanceMeasurementOpts3"
      :componentDistanceMeasurementOpts="componentDistanceMeasurementOpts3"
      :pointMeasurementOpts="pointMeasurementOpts3"
      :editable="editable"
      :offset="[20, 80]"
    >
    </vc-measurements>
    <!-- 结合 slot 改变默认 UI -->
    <vc-measurements
      ref="measurementsRef4"
      position="bottom-left"
      :mainFabOpts="measurementFabOptions4"
      :offset="[0, 20]"
      :editable="editable"
      @ready="measurementsReady"
    >
      <template #body>
        <div class="custom-measurements">
          <el-row>
            <el-button
              v-for="(drawingActionInstance, index) in drawingActionInstances"
              :key="index"
              :type="drawingActionInstance.isActive ? 'success' : 'primary'"
              round
              @click="toggle(drawingActionInstance)"
              >{{drawingActionInstance.tip.replace('量算', '')}}</el-button
            >
            <el-button type="danger" round @click="clear">清除</el-button>
          </el-row>
        </div>
      </template>
    </vc-measurements>
    <vc-primitive-tileset
      url="https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json"
      @readyPromise="onTilesetReady"
    ></vc-primitive-tileset>
    <vc-layer-imagery>
      <vc-imagery-provider-tianditu mapStyle="img_c" :maximumLevel="17" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-terrain-provider-cesium v-if="addTerrain"></vc-terrain-provider-cesium>
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
  import { DistanceUnits, AngleUnits } from 'vue-cesium'
  export default {
    data() {
      return {
        addTerrain: false,
        editable: false,
        clampToGround: false,
        measurementFabOptions1: {
          direction: 'right'
        },
        measurementFabOptions2: {
          direction: 'left',
          color: 'accent'
        },
        measurementFabOptions3: {
          direction: 'right',
          autoExpand: false,
          color: 'primary'
        },
        distanceMeasurementOpts3: {
          measureUnits: {
            distanceUnits: DistanceUnits.KILOMETERS,
            angleUnits: AngleUnits.RADIANS
          },
          decimals: {
            distance: 4,
            angle: 3
          }
        },
        componentDistanceMeasurementOpts3: {
          measureUnits: {
            distanceUnits: DistanceUnits.KILOMETERS,
            angleUnits: AngleUnits.RADIANS
          },
          decimals: {
            distance: 4,
            angle: 3
          }
        },
        pointMeasurementOpts: {
          preRenderDatas: [[108.9602, 34.21895, 500]]
        },
        areaMeasurementOpts: {
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
        pointMeasurementOpts3: {
          measureUnits: {
            distanceUnits: DistanceUnits.METERS,
            angleUnits: AngleUnits.DEGREES_MINUTES_SECONDS,
            slopeUnits: AngleUnits.DEGREES
          },
          decimals: {
            lng: 3,
            lat: 3,
            height: 2,
            slope: 3
          }
        },
        measurements: ['component-distance', 'polyline', 'vertical', 'area', 'point'],
        measurementFabOptions4: {
          direction: 'right'
        },
        drawingActionInstances: []
      }
    },
    methods: {
      drawingsReadyDefault({ Cesium, viewer, cesiumObject }) {
        console.log('绘制选项参数：', cesiumObject)
      },
      clear() {
        this.$refs.measurementsRef4.clearAll()
      },
      measurementsReady({ Cesium, viewer, cesiumObject }) {
        this.drawingActionInstances = cesiumObject
      },
      toggle(drawingActionInstance) {
        this.$refs.measurementsRef4.toggleAction(drawingActionInstance.name)
      },
      onTilesetReady(tileset, viewer) {
        // const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)
        // const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)
        // const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 5)
        // const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())
        // tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)
        viewer.zoomTo(tileset)
        viewer.scene.globe.depthTestAgainstTerrain = true
        this.restoreCursorMove = 'auto'
        this.drawing = false
      },
      drawEvt(e, viewer) {
        console.log(e)
        const restoreCursor = getComputedStyle(viewer.canvas).cursor
        if (e.finished) {
          this.drawing = false
          if (e.type === 'move') {
            viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove}`)
          }
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
        console.log(e)
        if (e.type === 'move') {
          const restoreCursor = getComputedStyle(viewer.canvas).cursor
          viewer.canvas.setAttribute('style', 'cursor: move')
          this.drawing = true
        }
      },
      mouseEvt(e, viewer) {
        console.log(e)
        const restoreCursor = getComputedStyle(viewer.canvas).cursor
        if (!this.drawing) {
          if (e.type === 'onmouseover') {
            this.restoreCursorMove = restoreCursor
            viewer.canvas.setAttribute('style', 'cursor: pointer')
          } else {
            viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove || 'auto'}`)
          }
        }
      },
      unload() {
        this.$refs.measurementsRef.unload()
      },
      load() {
        this.$refs.measurementsRef.load()
      },
      reload() {
        this.$refs.measurementsRef.reload()
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
| position | String | `'top-right'` | `optional` 指定量算组件的位置。 |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | Array | `[0, 0]` | `optional` 指定量算组件基于位置的偏移量。 |
| show | Boolean | `true` | `optional` 指定绘制的量算结果是否可见。 |
| mode | Number | `1` | `optional` 指定绘制交互模式，0 代表连续绘制，1 代表绘制一次就结束。|
| measurements | Array | `['distance', 'component-distance', 'polyline', 'horizontal', 'vertical', 'height', 'area', 'point', 'rectangle', 'circle', 'regular']` | `optional` 指定要加载的量算实例。 |
| activeColor | String | `'positive'` | `optional` 指定量算实例激活时的颜色。 |
| editable | Boolean | `false` | `optional` 指定量算结果对象是否可编辑。 |
| mainFabOpts | Object | | `optional` 指定量算组件浮动按钮的样式风格选项。 |
| distanceActionOpts | Object | `` | `optional` 指定距离量算按钮的样式风格选项。|
| distanceMeasurementOpts | Object | | `optional` 指定距离量算参数。|
| componentDistanceActionOpts | Object | | `optional` 指定三角量算按钮的样式风格选项。|
| componentDistanceMeasurementOpts | Object | | `optional` 指定三角量算参数。|
| polylineActionOpts | Object | | `optional` 指定折线距离量算按钮的样式风格选项。|
| polylineMeasurementOpts | Object | | `optional` 指定折线距离量算参数。|
| horizontalActionOpts | Object | | `optional` 指定水平距离量算按钮的样式风格选项。|
| horizontalMeasurementOpts | Object | | `optional` 指定水平距离量算参数。|
| verticalActionOpts | Object | | `optional` 指定垂直距离量算按钮的样式风格选项。|
| verticalMeasurementOpts | Object | | `optional` 指定垂直距离量算参数。|
| heightActionOpts | Object | | `optional` 指定高度量算按钮的样式风格选项。|
| heightMeasurementOpts | Object | | `optional` 指定高度量算参数。|
| areaActionOpts | Object | | `optional` 指定面积量算按钮的样式风格选项。|
| areaMeasurementOpts | Object | | `optional` 指定面积量算参数。|
| pointActionOpts | Object | | `optional` 指定坐标量算按钮的样式风格选项。|
| pointMeasurementOpts | Object | | `optional` 指定坐标量算参数。|
| rectangleActionOpts | Object | | `optional` 指定矩形量算按钮的样式风格选项。|
| rectangleMeasurementOpts | Object | | `optional` 指定矩形量算参数。|
| circleActionOpts | Object | | `optional` 指定圆形量算按钮的样式风格选项。|
| circleMeasurementOpts | Object | | `optional` 指定圆形量算参数。|
| regularActionOpts | Object | | `optional` 指定正多边形量算按钮的样式风格选项。|
| regularMeasurementOpts | Object | | `optional` 指定正多边形量算参数。|
| clearActionOpts | Object | | `optional` 指定清除按钮的样式风格选项。|

:::tip

提示：量算组件主要由两部分构成：（1）支持展开和收缩的浮动按钮（Fab）；（2）具体量算按钮（FabAction）。

:::

:::tipflex

```js
// ActionOpts 通用属性
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
  // 默认图标分别是
  // vc-icons-measure-distance, vc-icons-measure-component-distance,
  // vc-icons-measure-polyline-distance, vc-icons-measure-horizontal-distance,
  // vc-icons-measure-vertical-distance, vc-icons-measure-height-from-terrain,
  // vc-icons-measure-area, vc-icons-measure-point-coordinates,
  // vc-icons-clear
  icon: 'vc-icons-measure-distance'
}
```

```js
// mainFabOpts 在 ActionOpts 通用属性基础上多了下列属性：
{
  direction: 'left',
  icon: 'vc-icons-measure-button',
  activeIcon: 'vc-icons-measure-button',
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

提示：每个量算按钮（FabAction）对应有量算属性 xxxMeasurementOpts，用于自定义绘制对象风格。

详见：[defaultProps](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/components/measurements/src/defaultProps.ts)

各绘制结果的参数配置由于篇幅太长这儿就不一一列举了，如有自定义需要，请在当前文档页面打开控制台输出可以查看 `绘制按钮的默认参数` 和 `绘制结果的默认参数`。分别是 `actionOpts` 和 `cmpOpts` 属性。例如 `pointMeasurementOpts` 参数对象结构与控制台输出 `绘制选项参数：` 中 `name` 为 `point` 项的 `cmpOpts` 结构相同。`pointActionOpts` 参数对象与控制台输出 `绘制选项参数：` 中 `name` 为 `point` 项的 `actionOpts` 结构相同。当然也可以在自己代码中参考这样输出来查看。

:::

### 事件

| 事件名     | 参数                                    | 描述                         |
| ---------- | --------------------------------------- | ---------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。             |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。         |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。             |
| drawEvt    | (measureParam, viewer)                  | 量算绘制时触发。             |
| activeEvt  | (activeParam, viewer)                   | 切换量算 Action 时触发。     |
| editorEvt  | (editParam, viewer)                     | 点击编辑按钮时触发。         |
| mouseEvt   | (mouseParam, viewer)                    | 鼠标移进、移除绘制点时触发。 |

### 插槽

| 插槽名 | 描述                    |
| ------ | ----------------------- |
| body   | 用于自定义测量组件 UI。 |
