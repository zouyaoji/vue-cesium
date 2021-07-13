## VcNavigation

导航组件，包括罗盘、缩放、其他悬浮按钮，位置和距离比例尺工具栏控件。由 `vc-compass`、`vc-zoom-control`、`vc-print`、`vc-mylocation`、`vc-status-bar`、`vc-distance-legend` 组合而成。

**注意：** 需要引入样式文件: `import 'vue-cesium/lib/theme-default/index.css';`

:::tip

提示：3.0 版本对导航组件进行了重构，现在是一个集合组件，现在支持自定义风格，包括图标、大小、颜色位置等。如需高度定制，可分别参考各子组件的例子。自带的图标用的是 Unicode 方式，不支持多色，需要支持多色请参考阿里云 iconfont 介绍的使用 Symbol 的方法：[传送门](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&helptype=code)。

:::

### 基础用法

导航组件的基础用法。

:::demo 将 `vc-navigation` 标签作为 `vc-viewer` 的子组件挂载即可。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer sceneModePicker>
    <vc-navigation ref="navigation" :offset="[35, 35]"></vc-navigation>
    <!-- 自定义风格 -->
    <vc-navigation
      :position="position"
      :offset="offset"
      :compassOpts="compassOpts"
      :zoomOpts="zoomOpts"
      :locationOpts="locationOpts"
      :otherOpts="otherOpts"
      @compassEvt="onNavigationEvt"
      @zoomEvt="onNavigationEvt"
      @printEvt="onNavigationEvt"
      @locationEvt="onNavigationEvt"
      @statusBarEvt="onNavigationEvt"
      @distanceLegendEvt="onNavigationEvt"
    >
    </vc-navigation>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
  </el-row>
</el-row>
<script>
  export default {
    data() {
      return {
        position: 'top-left',
        offset: [10, 80],
        compassOpts: {
          enableCompassOuterRing: true,
          outerOptions: {
            icon: 'svguse:#vc-icons-compass-outer', // svg 加载方式
            size: '120px'
          },
          innerOptions: {
            icon: 'fa fa-compass',
            size: '24px',
            color: '#3f4854',
            background: '#fff',
            tooltip: {
              tip: 'asd'
            }
          },
          markerOptions: {
            size: '120px',
            color: 'yellow'
          }
        },
        zoomOpts: {
          background: '#1976D2',
          direction: 'horizontal'
        },
        locationOpts: {
          color: 'red',
          // 使用高德api定位
          amap: {
            key: '42d22e6ed83f077bc28b7864718726de',
            version: '2.0',
            options: {
              timeout: 5000,
              noGeoLocation: 3,
              needAddress: true,
              extensions: 'all'
            },
            transformToWGS84: true
          }
        },
        otherOpts: false
        // otherOpts: {
        //   position: 'bottom-right',
        //   offset: [2, 3],
        //   statusBarOpts:  // 与 vc-status-bar 保持一致
        //   distancelegendOpts: // 与 vc-distance-legend 保持一致
        // }
      }
    },
    mounted() {
      // 仅调试使用 打开浏览器控制台 用 vm 获取data中的属性修改。
      // 如 vm.offset = [0, 0]  或 vm.offset[0] = 100
      // 甚至加一个初始化未给的属性都可以
      // vm.zoomOpts.zoomOutOptions = {size: '40px'}
      window.vm = this
    },
    methods: {
      load() {
        this.$refs.navigation.load()
      },
      reload() {
        this.$refs.navigation.reload()
      },
      unload() {
        this.$refs.navigation.unload()
      },
      onNavigationEvt(e) {
        console.log(e)
      }
    }
  }
</script>
```

:::

### 扩展用法

按需定制导航组件。

:::demo 按需自定义各导航组件

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-compass
      position="left"
      :outerOptions="{icon: 'svguse:#vc-icons-compass-outer', size: '250px'}"
      :innerOptions="{icon: 'fa fa-compass', size: '60px', background: 'transparent', color: '#009688'}"
    ></vc-compass>
    <vc-compass position="top" :outerOptions="{icon: 'svguse:#vc-icons-qq'}"></vc-compass>
    <vc-compass
      position="top-right"
      :outerOptions="{icon: 'fa fa-circle-o-notch'}"
      :innerOptions="{icon: 'fa fa-circle', background: 'transparent'}"
    ></vc-compass>
    <vc-compass position="right" :enableCompassOuterRing="false"></vc-compass>
    <vc-zoom-control
      position="bottom"
      direction="horizontal"
      :offset="[0, 30]"
      :zoomResetOptions="{size: '48px', color: '#21BA45'}"
    ></vc-zoom-control>
    <vc-zoom-control position="bottom" :enableResetButton="false" borderRadius="0" :offset="[0, 120]"></vc-zoom-control>
    <vc-print position="bottom-right" downloadAutomatically :color="color" :background="background"></vc-print>
    <vc-print
      position="bottom-right"
      :offset="[40, 20]"
      :showPrintView="false"
      printAutomatically
      size="28px"
      :round="false"
      label="打印分享"
      background="#31CCEC"
      icon="fa fa-print"
    ></vc-print>
    <!-- 浏览器定位 -->
    <vc-my-location position="top-left" color="#C10015"></vc-my-location>
    <!-- 高德 API 定位 -->
    <vc-my-location
      color="#9C27B0"
      :amap="{key: '42d22e6ed83f077bc28b7864718726de',version: '2.0',options: {timeout: 5000,noGeoLocation: 3,needAddress: true,extensions: 'all'},transformToWGS84: true}"
      position="top-left"
      :offset="[0, 60]"
      label="定位"
      stack
      :round="false"
      background="#F2C037"
    ></vc-my-location>
    <!-- 自定义 API 定位 -->
    <vc-my-location position="top-left" :offset="[60, 0]" :customAPI="() => ({lng: 108, lat: 32})"></vc-my-location>
    <vc-status-bar position="bottom"></vc-status-bar>
    <vc-status-bar position="bottom" :offset="[300, 35]" :showCameraInfo="false" :showPerformanceInfo="false"></vc-status-bar>
    <vc-status-bar position="bottom" :offset="[-300, 35]" :showCameraInfo="false" :showMouseInfo="false"></vc-status-bar>
    <vc-status-bar position="top-left" :offset="[120, 3]" :showMouseInfo="false" :showPerformanceInfo="false"></vc-status-bar>
    <vc-distance-legend position="bottom-left" :offset="[5, 70]" background="#26A69A" barBackground="#F2C037" :width="80"></vc-distance-legend>
    <vc-distance-legend position="bottom-left" :offset="[5, 35]"></vc-distance-legend>
  </vc-viewer>
</el-row>
<script>
  export default {
    data () {
      return {
        color: 'red',
        background: 'yellow'
      }
    },
    mounted () {
      window.vm = this
    }
  }
</script>
```

:::

### VcNavigation 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ----- | --- | ------ | ---- | ----- |
| position | String | `'top-right'` | `optional` 指定导航组件位置。 | top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | Array | `[0, 0]` | `optional` 指定导航组件基于位置的偏移量。 | |
| compassOpts | Object\|false | 与 `VcCompass` 保持一致 | `optional` 指定罗盘控件参数，false 即不显示。 | |
| zoomOpts | Object\|false | 与 `VcZoomControl` 保持一致 | `optional` 指定缩放控件参数，false 即不显示。 | |
| printOpts | Object\|false | 与 `VcPrint` 保持一致 | `optional` 指定打印控件参数，false 即不显示。 | |
| locationOpts | Object\|false | 与 `VcMyLocation` 保持一致 | `optional` 指定定位控件参数，false 即不显示。 | |
| otherOpts | Object\|false | | `optional` 指定其他控件（位置栏和距离比例尺栏，视为一个整体）参数，false 即不显示。 | |

:::tip

提示：其他控件（位置栏和距离比例尺栏，视为一个整体），位置没受 VcNavigation 控制。默认参数：

```
otherOpts: {
  position: 'botttom-right',
  offset:[2, 3],
  statusBarOpts: {}, // 与 VcStatusBar 保持一致
  distancelegendOpts: {} // 与 VcDistanceLegend 保持一致
}
```

:::

### VcNavigation 事件

| 事件名            | 参数                                                         | 描述                         |
| ----------------- | ------------------------------------------------------------ | ---------------------------- |
| compassEvt        | {camera, status, target, type}                               | 操作罗盘控件时触发。         |
| zoomEvt           | {camera, status, target, type}                               | 操作缩放控件时触发。         |
| locationEvt       | {detail,entity, position, type}                              | 操作定位控件时触发。         |
| printEvt          | {image, status, type}                                        | 操作打印控件时触发。         |
| statusBarEvt      | {cameraInfo, mouseCoordsInfo, performanceInfo, status, type} | 状态控件相关参数改变时触发。 |
| distanceLegendEvt | {distance,status,type}                                       | 距离比例尺改变时触发。       |
| beforeLoad        | Vue Instance                                                 | 对象加载前触发。             |
| ready             | {Cesium, viewer, cesiumObject, vm}                           | 对象加载成功时触发。         |
| destroyed         | Vue Instance                                                 | 对象销毁时触发。             |

## VcCompass

罗盘组件。

### VcCompass 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ----- | --- | ------ | ---- | ----- |
| position | String | `'top-right'` | `optional` 指定罗盘组件位置。 | top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | Array | `[0, 0]` | `optional` 指定罗盘基于位置的偏移量。 ||
| enableCompassOuterRing | String | `true` | `optional` 指定罗盘外环是否可以操作。 ||
| duration | Number | `1.5` | `optional` 指定双击罗盘恢复俯仰角飞行时间，单位秒。 ||
| outerOptions | Object | | `optional` 指定罗盘外环参数。 ||
| innerOptions | Object | | `optional` 指定罗盘内环参数。 ||
| markerOptions | Object | | `optional` 指定罗盘旋转时圆块参数。 ||

:::tip
提示 `outerOptions`、`innerOptions`、`markerOptions` 默认参数：
:::
:::tipflex

```js
// outerOptions
{
  icon: 'vc-icons-compass-outer', // 图标名称
  size: '96px',                   // 外环尺寸
  color: '#3f4854',               // 外环颜色
  background: 'transparent',      // 外环背景
  tooltip: {                      // false 即为不显示
    delay: 1000,                  // 鼠标悬浮多久显示提示信息
    anchor: 'bottom middle',      // 提示信息锚点
    offset: [0, 20]               // 提示信息位置偏移
  }
}
```

```js
// innerOptions
{
  icon: 'vc-icons-compass-outer',
  size: '96px',
  color: '#3f4854',
  background: 'transparent',
  tooltip: {
    delay: 1000,
    anchor: 'bottom middle',
    offset: [0, 20]
  }
}
```

```js
// markerOptions
{
  icon: 'vc-icons-compass-rotation-marker',
  size: '96px',
  color: '#1976D2'
}
```

:::

### VcCompass 事件

| 事件名     | 参数                               | 描述                 |
| ---------- | ---------------------------------- | -------------------- |
| compassEvt | {camera, status, target, type}     | 操作罗盘控件时触发。 |
| beforeLoad | Vue Instance                       | 对象加载前触发。     |
| ready      | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。 |
| destroyed  | Vue Instance                       | 对象销毁时触发。     |

### VcZoomControl

缩放组件。

### VcZoomControl 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ----- | --- | ------ | ---- | ----- |
| position | String | `'top-right'` | `optional` 指定缩放组件位置。 | top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | Array | `[0, 0]` | `optional` 指定缩放控件基于位置的偏移量。 | |
| enableResetButton | Boolean | `true` | `optional` 指定是否启用重置按钮。 | |
| zoomAmount | Number | `2` | `optional` 指定放大缩小的数量级。 | |
| duration | String | `0.5` | `optional` 指定放大缩小过程时间，单位秒。 | |
| durationReset | Number | `1.5` | `optional` 指定重置到默认相机位置的时间，单位秒。 | |
| defaultResetView | Object | | `optional` 指定重置相机的位置。 | |
| overrideViewerCamera | Boolean | `false` | `optional` 指定初始化时是否覆盖`vc-viewer`上的`camera`属性。 | |
| background | String | `'#3f4854'` | `optional` 指定缩放控件背景。 | |
| border | String | `'solid 1px rgba(255, 255, 255, 0.2)'` | `optional` 指定缩放控件边框。 | |
| borderRadius | String | `'100px'` | `optional` 指定缩放控件边框圆角。 | |
| direction | String | `'vertical'` | `optional` 指定缩放控件方向。 | vertical /horizontal |
| zoomInOptions | Object | | `optional` 指定放大按钮参数。 | |
| zoomOutOptions | Object | | `optional` 指定缩小按钮参数。 | |
| zoomResetOptions | Object | | `optional` 指定重置按钮参数。 | |

:::tip
提示：`durationReset`, `zoomInOptions`, `zoomOutOptions`, `zoomResetOptions` 默认参数：
:::
:::tipflex

```js
// defaultResetView
{
  position: {
    lng: 105,
    lat: 30,
    height: 19059568.5
  }
}
// 结构
{
  position?: {
    lng: number,
    lat: number,
    height: number
  } | [lng, lat, height]
  rectange?: [west,south,east,north] | {west,south,east,north}
  heading: number
  pitch: number
  roll: number
}
```

```js
// zoomInOptions
{
  icon: 'vc-icons-zoom-in',
  size: '24px',
  color: '#fff',
  background: 'transparent',
  round: true,
  flat: true,
  label: undefined,
  stack: false,
  tooltip: {
    delay: 500,
    anchor: 'bottom middle',
    offset: [0, 20]
  }
}
```

```js
// zoomResetOptions
{
  icon: 'vc-icons-reset',
  size: '24px',
  color: '#fff',
  background: 'transparent',
  round: true,
  flat: true,
  label: undefined,
  stack: false,
  tooltip: {
    delay: 500,
    anchor: 'bottom middle',
    offset: [0, 20]
  }
}
```

```js
// zoomOutOptions
{
  icon: 'vc-icons-zoom-out',
  size: '24px',
  color: '#fff',
  background: 'transparent',
  round: true,
  flat: true,
  label: undefined,
  stack: false,
  tooltip: {
    delay: 500,
    anchor: 'bottom middle',
    offset: [0, 20]
  }
}
```

:::

### VcZoomControl 事件

| 事件名     | 参数                               | 描述                 |
| ---------- | ---------------------------------- | -------------------- |
| zoomEvt    | {camera, status, target, type}     | 操作缩放控件时触发。 |
| beforeLoad | Vue Instance                       | 对象加载前触发。     |
| ready      | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。 |
| destroyed  | Vue Instance                       | 对象销毁时触发。     |

### VcMyLocation

定位组件。

### VcMyLocation 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ----- | --- | ------ | ---- | ----- |
| position | String | `'top-right'` | `optional` 指定定位组件位置。 | top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | Array | `[0, 0]` | `optional` 指定定位按钮基于位置的偏移量。 ||
| geolocation | Object | | `optional` 指定浏览器定位参数。 ||
| amap | Object | | `optional` 指定高德定位参数。如果设置则优先使用高德定位。 ||
| id | String | | `optional` 指定定位成功后加载点的 id。 ||
| pointColor | Array\|Object\|String | | `optional` 指定定位成功后加载点的颜色。 ||
| pixelSize | Number | `12.5` | `optional` 指定定位成功后加载点的大小。 ||
| outlineWidth | Number | `3` | `optional` 指定定位成功后加载点的外边框宽度。 |
| outlineColor | Array\|Object\|String | `'#ffffff'` | `optional` 指定定位成功后加载点的外边框颜色。 ||
| level | Number | `6` | `optional` 指定定位成功后基于地形自动识别高度时的采样层级。 ||
| duration | Number | `3` | `optional` 指定定位成功后飞行时间，单位秒。 ||
| customAPI | Function | | `optional` 指定自定义定位 API。 ||
| description | Function | `0.01` | `optional` 指定自定义定位成功后该点的描述文字。 ||
| icon | String | `vc-icons-geolocation` | `optional` 指定定位按钮图标。 ||
| size | String | `'24px'` | `optional` 指定定位按钮尺寸。 ||
| color | String | `'#3f4854'` | `optional` 指定定位按钮颜色。 ||
| background | String | `'#fff'` | `optional` 指定定位按钮背景。 ||
| round | Boolean | `true` | `optional` 指定定位按钮是否圆形展示。 ||
| flat | Boolean | `false` | `optional` 指定定位按钮是否是普通风格，不带背景、点击效果。 ||
| label | String | | `optional` 指定定位按钮文字。 ||
| stack | Boolean | | `optional` 指定定位按钮是否堆叠显示。 ||
| tooltip | Object | | `optional` 指定定位按钮提示信息参数。 ||

### VcMyLocation 事件

| 事件名      | 参数                               | 描述                 |
| ----------- | ---------------------------------- | -------------------- |
| beforeLoad  | Vue Instance                       | 对象加载前触发。     |
| ready       | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。 |
| destroyed   | Vue Instance                       | 对象销毁时触发。     |
| locationEvt | {detail,entity,position, type}     | 操作定位按钮时触发。 |

### VcPrint

打印组件。

### VcPrint 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ----- | --- | ------ | ---- | ----- |
| position | String | `'top-right'` | `optional` 指定打印组件位置。 | top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | Array | `[0, 0]` | `optional` 指定打印控件基于位置的偏移量。 ||
| showCredit | Boolean | `true` | `optional` 指定打印图片时是否显示加载数据版权信息。 ||
| showPrintView | Boolean | `true` | `optional` 指定是否显示打印预览。 ||
| printAutomatically | Boolean | `false` | `optional` 指定是否自动打印。需要 showPrintView 设置为 false。 ||
| downloadAutomatically | Boolean | `false` | `optional` 指定是否下载打印的图片。 ||
| icon | String | `'vc-icons-capture'` | `optional` 指定打印按钮图标。 ||
| size | String | `'24px'` | `optional` 指定打印按钮尺寸。 ||
| color | String | `'#3f4854'` | `optional` 指定打印按钮颜色。 ||
| background | String | `'#fff'` | `optional` 指定打印按钮背景。 ||
| round | Boolean | `true` | `optional` 指定打印按钮是否圆形展示。 ||
| flat | Boolean | `false` | `optional` 指定打印按钮是否是普通风格，不带背景、点击效果。 ||
| label | String | | `optional` 指定打印按钮文字。 ||
| stack | Boolean | `false` | `optional` 指定打印按钮是否堆叠显示。 ||
| tooltip | Object | | `optional` 指定打印按钮提示信息参数。 ||

### VcPrint 事件

| 事件名     | 参数                               | 描述                 |
| ---------- | ---------------------------------- | -------------------- |
| beforeLoad | Vue Instance                       | 对象加载前触发。     |
| ready      | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。 |
| destroyed  | Vue Instance                       | 对象销毁时触发。     |
| printEvt   | {image, status,type}               | 操作打印控件时触发。 |

### VcStatusBar

状态组件。

### VcStatusBar 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ----- | --- | ------ | ---- | ----- |
| position | String | `'top-right'` | `optional` 指定状态组件位置。 | top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | Array | `[0, 0]` | `optional` 指定信息栏控件基于位置的偏移量。 （单独使用时有效） |
| gridFileUrl | String | `https://zouyaoji.top/vue-cesium/SampleData/WW15MGH.DAC`| `optional` 指定鼠标拾取高度模型，用这个能提高获取的高度精度。 |
| color | String | `'#fff'` | `optional` 指定信息栏颜色。 |
| background | String | `'#3f4854'` | `optional` 指定信息栏背景。 |
| showCameraInfo | Boolean | `true` | `optional` 指定信息栏是否显示相机信息。 |
| showMouseInfo | Boolean | `true` | `optional` 指定信息栏是否显示鼠标所指位置信息。 |
| showPerformanceInfo | Boolean | `true` | `optional` 指定信息栏是否显示帧率信息。 |
| tooltip | Object | | `optional` 指定信息栏提示信息参数。 |

### VcStatusBar 事件

| 事件名       | 参数                                                         | 描述                   |
| ------------ | ------------------------------------------------------------ | ---------------------- |
| beforeLoad   | Vue Instance                                                 | 对象加载前触发。       |
| ready        | {Cesium, viewer, cesiumObject, vm}                           | 对象加载成功时触发。   |
| destroyed    | Vue Instance                                                 | 对象销毁时触发。       |
| statusBarEvt | {cameraInfo, mouseCoordsInfo, performanceInfo, status, type} | 状态栏参数改变时触发。 |

### VcDistanceLegend

距离比例尺组件。

### VcDistanceLegend 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| ----- | --- | ------ | ---- | ----- |
| position | String | `'top-right'` | `optional` 指定距离比例尺组件位置。 | top-right/top-left/bottom-right/bottom-left/top/right/bottom/left |
| offset | Array | `[0, 0]` | `optional` 指定距离比例尺控件基于位置的偏移量。 |
| color | String | `'#fff'` | `optional` 指定距离比例尺控件颜色。 |
| background | String | `'#3f4854'` | `optional` 指定距离比例尺背景。 |
| width | Number | `100` | `optional` 指定距离比例尺宽度。 |
| barBackground | String | `'#ffffff'` | `optional` 指定距离比例尺上横线颜色。 |

### VcDistanceLegend 事件

| 事件名            | 参数                               | 描述                   |
| ----------------- | ---------------------------------- | ---------------------- |
| beforeLoad        | Vue Instance                       | 对象加载前触发。       |
| ready             | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。   |
| destroyed         | Vue Instance                       | 对象销毁时触发。       |
| distanceLegendEvt | {distance,status,type}             | 距离比例尺改变时触发。 |
