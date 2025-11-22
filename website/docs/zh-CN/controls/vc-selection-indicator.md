<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-11-04 10:37:42
 * @LastEditTime: 2025-03-20 22:17:53
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium\website\docs\zh-CN\controls\vc-selection-indicator.md
-->

## VcSelectionIndicator

加载自定义选择器组件，替换 Cesium 自带的 selectionIndicator。

**注意：** 如果是拾取到的对象是 `Cesium3DTileFeature` 指示器的位置是该对象的包围盒的中心点。如果是手工模型并且想要更精准的位置请在建筑属性字段用 `position` 属性描述该要素的位置信息，如 `'[108, 32]'` 。

### 基础用法

选择器组件的基础用法。

:::demo 使用 `vc-selection-indicator` 标签在三维球上添加选择器组件。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer :selection-indicator="true" :info-box="true">
    <vc-selection-indicator ref="selectionIndicator" @pick-evt="pickEvt"></vc-selection-indicator>
    <vc-terrain-provider-cesium></vc-terrain-provider-cesium>
    <vc-entity ref="entity" :billboard="billboard" :position="{lng: 98, lat: 28.4}" :point="point" :label="label">
      <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green"></vc-graphics-rectangle>
    </vc-entity>
    <vc-layer-imagery :sort-order="10">
      <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-layer-imagery vcId="testId">
      <vc-imagery-provider-wms
        ref="provider"
        url="https://nationalmap.gov.au/proxy/http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows"
        layers="Hydrography:bores"
        :parameters="{transparent: true, format: 'image/png'}"
      ></vc-imagery-provider-wms>
    </vc-layer-imagery>
    <vc-layer-imagery vcId="testId2">
      <vc-imagery-provider-wms
        ref="provider"
        url="https://nationalmap.gov.au/proxy/http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows"
        layers="Hydrography:bores"
        :parameters="{transparent: true, format: 'image/png'}"
      ></vc-imagery-provider-wms>
    </vc-layer-imagery>
    <vc-primitive-tileset url="https://resource.dvgis.cn/data/3dtiles/ljz/tileset.json"> </vc-primitive-tileset>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
    <el-button type="danger" round @click="clear">清除</el-button>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        point: {
          pixelSize: 28,
          color: 'red',
          heightReference: 1
        },
        label: {
          text: 'Hello World',
          pixelOffset: [0, 80]
        },
        billboard: {
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          scale: 0.2,
          heightReference: 1
        }
      }
    },
    methods: {
      clear() {
        this.$refs.selectionIndicator.selectedFeature.value = undefined
      },
      pickEvt(e) {
        console.log(e)
      },
      unload() {
        this.$refs.selectionIndicator.unload()
      },
      load() {
        this.$refs.selectionIndicator.load()
      },
      reload() {
        this.$refs.selectionIndicator.reload()
      }
    }
  }
</script>
```

:::

### 属性

| 属性名                   | 类型     | 默认值 | 描述                                                  |
| ------------------------ | -------- | ------ | ----------------------------------------------------- |
| show                     | boolean  | `true` | `optional` 指定选择指示器是否可见。                   |
| width                    | number   | `50`   | `optional` 指定选择指示器宽度。                       |
| height                   | number   | `50`   | `optional` 指定选择指示器高度。                       |
| allowFeatureInfoRequests | boolean  | `true` | `optional` 指定是否异步请求该点射线相交影像图层属性。 |
| limit                    | number   | `25`   | `optional` 指定最大拾取对象数量。                     |
| includeImageryIds        | string[] |        | `optional` 指定拾取影像要素时包含的 vcId 数组。       |
| excludeImageryIds        | string[] | `[]`   | `optional` 指定拾取影像要素时排除的 vcId 数组。       |

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 组件加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 组件加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 组件销毁时触发。     |
| pickEvt    | selectedFeature                         | 拾取时触发。         |

### 方法

| 方法名                     | 参数                                     | 描述                                        |
| -------------------------- | ---------------------------------------- | ------------------------------------------- |
| load                       | () => Promise\<false \| VcReadyObject\>  | 手动加载组件。                              |
| reload                     | () => Promise\<false \| VcReadyObject\>  | 手动重新加载组件。                          |
| unload                     | () => Promise\<boolean\>                 | 手动卸载组件。                              |
| getCreatingPromise         | () => Promise\<boolean \| VcReadyObject> | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject            | () => VcCesiumObject                     | 获取该组件加载的 Cesium 对象。              |
| computeScreenSpacePosition | () => Cesium.Cartesian2                  | 计算屏幕位置。                              |
| update                     | () => void                               | 更新指示器位置。                            |
| animateAppear              | () => void                               | 显示指示器。                                |
| animateDepart              | () => void                               | 隐藏指示器。                                |
| getPickedFeatures          | () => PickedFeatures                     | 获取拾取对象集合。                          |

### 成员

| 名称                                     | 描述                           |
| ---------------------------------------- | ------------------------------ |
| position: Cesium.Cartesian3              | 获取或者设置选择指示器的位置。 |
| selectedFeature:Feature \| Cesium.Entity | 获取或者设置选中对象。         |
