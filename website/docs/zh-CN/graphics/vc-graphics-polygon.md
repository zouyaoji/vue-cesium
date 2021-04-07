## 面

`vc-graphics-polygon` 组件用于加载点实体，相当于初始化一个 `Cesium.PolygonGraphics` 实例。需要作为 `vc-entity` 的子组件才能正常加载。

### 基础用法

面实体组件的基础用法。

:::demo 使用 `vc-graphics-polygon` 标签在三维球上添加面实体对象。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity description="Hello Vue Cesium">
      <vc-graphics-polygon ref="polygon1" :hierarchy="[[-115,37],[-115,32],[-107,33],[-102,31],[-102,35]]" material="red"></vc-graphics-polygon>
    </vc-entity>
    <vc-entity description="Hello Vue Cesium">
      <vc-graphics-polygon
        :hierarchy="[{ lng: -108.0, lat: 42.0 }, { lng: -100.0, lat: 42.0 }, { lng: -104.0, lat: 40.0 }]"
        material="green"
        :extrudedHeight="500000.0"
        :closeTop="false"
        :closeBottom="false"
        ref="polygon2"
      ></vc-graphics-polygon>
    </vc-entity>
    <vc-entity description="Hello Vue Cesium">
      <vc-graphics-polygon
        :hierarchy="[[-108,25,100000],[-100,25,100000],[-100,30,100000],[-108,30,100000]]"
        :material="[255,165,0,125]"
        :extrudedHeight="0"
        :perPositionHeight="true"
        :outline="true"
        outlineColor="black"
        ref="polygon3"
      ></vc-graphics-polygon>
    </vc-entity>
    <vc-entity description="Hello Vue Cesium">
      <vc-graphics-polygon :hierarchy="hierarchy4" :material="[0,0,255,125]" :height="0" :outline="true" ref="polygon4"></vc-graphics-polygon>
    </vc-entity>
    <vc-entity description="Hello Vue Cesium">
      <vc-graphics-polygon
        :hierarchy="[-90.0, 41.0, 0.0, -85.0, 41.0, 500000.0, -80.0, 41.0, 0.0]"
        :material="[0,255,255,125]"
        :perPositionHeight="true"
        :outline="true"
        outlineColor="black"
        ref="polygon5"
      ></vc-graphics-polygon>
    </vc-entity>
    <vc-entity description="Hello Vue Cesium">
      <vc-graphics-polygon
        :hierarchy="[[-120,45],[-80,45],[-80,55],[-120,55]]"
        material="purple"
        :extrudedHeight="50000"
        :outline="true"
        outlineColor="magenta"
        ref="polygon6"
      ></vc-graphics-polygon>
    </vc-entity>
  </vc-viewer>
</el-row>

<script>
  import { ref, getCurrentInstance, onMounted } from 'vue'
  export default {
    setup() {
      // state
      const polygon1 = ref(null)
      const polygon2 = ref(null)
      const polygon3 = ref(null)
      const polygon4 = ref(null)
      const polygon5 = ref(null)
      const polygon6 = ref(null)
      const hierarchy4 = {
        positions: [
          { lng: -99.0, lat: 30.0 },
          { lng: -85.0, lat: 30.0 },
          { lng: -85.0, lat: 40.0 },
          { lng: -99.0, lat: 40.0 }
        ],
        holes: [
          {
            positions: [
              { lng: -97.0, lat: 31.0 },
              { lng: -97.0, lat: 39.0 },
              { lng: -87.0, lat: 39.0 },
              { lng: -87.0, lat: 31.0 }
            ],
            holes: [
              {
                positions: [
                  { lng: -95.0, lat: 33.0 },
                  { lng: -89.0, lat: 33.0 },
                  { lng: -89.0, lat: 37.0 },
                  { lng: -95.0, lat: 37.0 }
                ],
                holes: [
                  {
                    positions: [
                      { lng: -93.0, lat: 34.0 },
                      { lng: -91.0, lat: 34.0 },
                      { lng: -91.0, lat: 36.0 },
                      { lng: -93.0, lat: 36.0 }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
      // methods
      const onEntityEvt = e => {
        console.log(e)
      }
      const onViewerReady = cesiumInstance => {
        console.log('viewer ready')
      }
      // life cycle
      onMounted(() => {
        Promise.all([
          polygon1.value.createPromise,
          polygon1.value.createPromise,
          polygon1.value.createPromise,
          polygon4.value.createPromise,
          polygon5.value.createPromise,
          polygon6.value.createPromise
        ]).then(instances => {
          instances[0].viewer.zoomTo(instances[0].viewer.entities)
        })
      })

      return {
        onEntityEvt,
        polygon1,
        polygon2,
        polygon3,
        polygon4,
        polygon5,
        polygon6,
        onViewerReady,
        hierarchy4
      }
    }
  }
</script>
```

:::

### 属性

| 属性名                   | 类型                  | 默认值    | 描述                                                     |
| ------------------------ | --------------------- | --------- | -------------------------------------------------------- |
| show                     | Boolean               | `true`    | `optional` 指定 polygon 是否显示。                       |
| hierarchy                | Object\|Array         |           | `optional` 指定 polygon 的 PolygonHierarchy 属性。       |
| height                   | Number                | `0`       | `optional` 指定 polygon 的高度。                         |
| heightReference          | Number                |           | `optional` 指定 polygon 高度模式。                       |
| extrudedHeight           | Number                |           | `optional` 指定 polygon 拉伸高度。                       |
| extrudedHeightReference  | Number                |           | `optional` 指定 polygon 拉伸的高度模式。                 |
| stRotation               | Number\|Object        | `0.0`     | `optional` 指定 polygon 纹理按正北方向逆时针旋转角度。   |
| granularity              | Number                |           | `optional` 指定每个经纬度之间的采样粒度。                |
| fill                     | Boolean               | `true`    | `optional` 指定 polygon 是否填充材质。                   |
| material                 | Object\|String\|Array | `'white'` | `optional` 指定 polygon 材质。                           |
| outline                  | Boolean               | `false`   | `optional` 指定 polygon 是否绘制轮廓线。                 |
| outlineColor             | Object\|String\|Array | `'black'` | `optional` 指定 polygon 轮廓线颜色。                     |
| outlineWidth             | Number                | `1.0`     | `optional` 指定 polygon 轮廓线宽度。                     |
| perPositionHeight        | Boolean               | `false`   | `optional` 指定 polygon 是否使用每个位置的高度。         |
| closeTop                 | Boolean               | `true`    | `optional` 指定 polygon 拉伸出来的顶部是否闭合。         |
| closeBottom              | Boolean               | `true`    | `optional` 指定 polygon 拉伸出来的底部是否闭合。         |
| arcType                  | Number                | `1`       | `optional` 指定 polygon 线条类型。                       |
| shadows                  | Number                | `0`       | `optional` 指定 polygon 是否投射或接收阴影。             |
| distanceDisplayCondition | Object                |           | `optional` 指定 polygon 随相机距离改变是否显示参数。     |
| classificationType       | Number                | `2`       | `optional` 指定 polygon 贴对象模式。                     |
| zIndex                   | Number                | `0`       | `optional` 指定 polygon 顺序，没有高度和拉伸高度时有效。 |

### 事件

| 事件名            | 参数 | 描述                                     |
| ----------------- | ---- | ---------------------------------------- |
| definitionChanged |      | 每当更改或修改属性或子属性时触发该事件。 |

### 参考

- 官方文档： **[PolygonGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PolygonGraphics.html)**
