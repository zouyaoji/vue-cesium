<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-01-06 11:30:01
 * @LastEditTime: 2022-02-17 17:59:15
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\zh-CN\analyses\vc-analyses.md
-->

## VcAnalyses

加载分析工具组件。包含通视分析、可视域分析（3DTiles)。

**注意：** 此组件需要额外引入样式文件: `import 'vue-cesium/theme-default/index.css';`

### 基础用法

分析工具组件的基础用法。

:::demo 使用 `vc-analyses` 标签在三维球上添加分析工具。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <!-- 修改定位 和 位置偏移 -->
    <vc-analyses
      ref="analyses"
      position="bottom-left"
      :main-fab-opts="mainFabOpts"
      :offset="[20, 50]"
      :editable="editable"
      @draw-evt="drawEvt"
      @active-evt="activeEvt"
      @editor-evt="editorEvt"
      @mouse-evt="mouseEvt"
      @ready="analysesReadyDefault"
      :show="false"
    ></vc-analyses>
    <vc-primitive-tileset
      url="https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json"
      @ready-promise="onTilesetReady"
    ></vc-primitive-tileset>
    <vc-layer-imagery>
      <vc-imagery-provider-tianditu map-style="img_c" :maximum-level="17" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-terrain-provider-cesium v-if="addTerrain"></vc-terrain-provider-cesium>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
    <el-checkbox v-model="editable">可编辑</el-checkbox>
    <el-checkbox v-model="addTerrain">地形</el-checkbox>
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
        mainFabOpts: {
          direction: 'right'
        }
      }
    },
    methods: {
      analysesReadyDefault({ Cesium, viewer, cesiumObject }) {
        console.log('分析选项参数：', cesiumObject)
        window.viewer = viewer
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
        viewer.zoomTo(tileset)
        viewer.scene.globe.depthTestAgainstTerrain = true
        this.restoreCursorMove = 'auto'
        this.drawing = false
        window.viewer = viewer
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
        this.$refs.analyses.unload()
      },
      load() {
        this.$refs.analyses.load()
      },
      reload() {
        this.$refs.analyses.reload()
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
| position | string | `'top-right'` | `optional` 指定分析组件的位置。 |top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | [number, number] | `[0, 0]` | `optional` 指定分析组件基于位置的偏移量。 |
| show | boolean | `true` | `optional` 指定分析的结果是否可见。 |
| mode | number | `1` | `optional` 指定绘制交互模式，0 代表连续绘制，1 代表绘制一次就结束。|
| analyses | Array\<'sightline' \| 'viewshed'\> | `['sightline', 'viewshed']` | `optional` 指定要加载的分析实例。 |
| activeColor | string | `'positive'` | `optional` 指定绘制实例激活时的颜色。 |
| editable | boolean | `false` | `optional` 指定绘制结果对象是否可编辑。 |
| mainFabOpts | VcActionTooltipProps & VcFabProps | | `optional` 指定分析组件浮动按钮的样式选项。 |
| sightlineActionOpts | VcActionTooltipProps |  | `optional` 指定通视分析绘制按钮的样式选项。|
| sightlineAnalysisOpts | VcDrawingOpts | | `optional` 指定通视分析绘制参数。|
| viewshedActionOpts | VcActionTooltipProps |  | `optional` 指定可视域分析按钮的样式选项。|
| viewshedAnalysisOpts | VcViewshedAnalysisOpts | | `optional` 指定可视域分析参数。|
| clearActionOpts | VcActionTooltipProps | | `optional` 指定清除按钮的样式选项。|

:::tip

提示：绘制组件主要由两部分构成：（1）支持展开和收缩的浮动按钮（Fab）；（2）具体绘制按钮（FabAction）。

:::

:::tip

提示：每个绘制按钮（FabAction）对应有属性 xxxOpts，用于自定义分析参数。

详见：[defaultProps](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/components/analyses/src/defaultProps.ts)

各绘制结果的参数配置由于篇幅太长这儿就不一一列举了，如有自定义需要，请在当前文档页面打开控制台输出可以查看 `绘制按钮的默认参数` 和 `绘制结果的默认参数`。分别是 `actionOpts` 和 `cmpOpts` 属性。例如 `sightlineAnalysisOpts` 参数对象结构与控制台输出 `绘制选项参数：` 中 `name` 为 `sightline` 项的 `cmpOpts` 结构相同。`sightlineActionOpts` 参数对象与控制台输出 `绘制选项参数：` 中 `name` 为 `sightline` 项的 `actionOpts` 结构相同。当然也可以在自己代码中参考这样输出来查看。
:::

### 事件

| 事件名     | 参数                                             | 描述                         |
| ---------- | ------------------------------------------------ | ---------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance)          | 对象加载前触发。             |
| ready      | (readyObj: VcReadyObject)                        | 对象加载成功时触发。         |
| destroyed  | (instance: VcComponentInternalInstance)          | 对象销毁时触发。             |
| drawEvt    | (evt: VcDrawingActiveEvt, viewer: Cesium.Viewer) | 绘制时触发。                 |
| activeEvt  | (evt: VcDrawingDrawEvt, viewer: Cesium.Viewer)   | 切换分析 Action 时触发。     |
| editorEvt  | (evt: VcDrawingEditorEvt, viewer: Cesium.Viewer) | 点击编辑按钮时触发。         |
| mouseEvt   | (evt: VcDrawingMouseEvt, viewer: Cesium.Viewer)  | 鼠标移进、移出绘制点时触发。 |
| fabUpdated | (value: boolean)                                 | 浮动按钮展开、收拢时触发。   |

### 插槽

| 插槽名 | 描述                    |
| ------ | ----------------------- |
| body   | 用于自定义绘制组件 UI。 |

### 参考

- 可视域分析： **[Helsing 博文](https://blog.csdn.net/fywindmoon/article/details/108415116)**
