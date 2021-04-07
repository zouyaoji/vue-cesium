## 线柱体

`vc-graphics-polyline-volume` 组件用于加载线柱体，相当于初始化一个 `Cesium.PolylineVolumeGraphics` 实例。需要作为 `vc-entity` 的子组件才能正常加载。

### 基础用法

线柱体组件的基础用法。

:::demo 使用 `vc-graphics-polyline-volume` 标签在三维球上添加线柱体对象。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-entity>
      <vc-graphics-polyline-volume
        ref="polylineVolume1"
        :positions="[[-85,32],[-85,36],[-89,36]]"
        :shape="shape1"
        material="red"
      ></vc-graphics-polyline-volume>
    </vc-entity>
    <vc-entity>
      <vc-graphics-polyline-volume
        :positions="[-90,32,0,-90,36,100000,-94,36,0]"
        :shape="[{ x: -50000, y: -50000 }, { x: 50000, y: -50000 }, { x: -50000, y: 50000 }, { x: -50000, y: 50000 }]"
        :material="[0,255,0,125]"
        :outline="true"
        outlineColor="black"
        :cornerType="2"
        ref="polylineVolume2"
      ></vc-graphics-polyline-volume>
    </vc-entity>
    <vc-entity>
      <vc-graphics-polyline-volume
        :positions="[{ lng: -95.0, lat: 32.0, height: 0.0 }, { lng: -95.0, lat: 36.0, height: 100000.0 }, { lng: -99.0, lat: 36.0, height: 200000.0 }]"
        :shape="shape3"
        material="blue"
        :cornerType="0"
        ref="polylineVolume3"
      ></vc-graphics-polyline-volume>
    </vc-entity>
  </vc-viewer>
</el-row>

<script>
  import { ref, getCurrentInstance, onMounted } from 'vue'
  export default {
    setup() {
      // state
      const polylineVolume1 = ref(null)
      const polylineVolume2 = ref(null)
      const polylineVolume3 = ref(null)
      const shape1 = ref(null)
      const shape3 = ref(null)
      // methods
      const onEntityEvt = e => {
        console.log(e)
      }
      const onViewerReady = cesiumInstance => {
        console.log('viewer ready')
        shape1.value = computeCircle(60000)
        shape3.value = computeStar(7, 70000, 50000)
      }
      const computeCircle = radius => {
        let positions = []
        for (let i = 0; i < 360; i++) {
          let radians = Cesium.Math.toRadians(i)
          positions.push({ x: radius * Math.cos(radians), y: radius * Math.sin(radians) })
        }
        return positions
      }
      const computeStar = (arms, rOuter, rInner) => {
        let angle = Math.PI / arms
        let length = 2 * arms
        let positions = new Array(length)
        for (let i = 0; i < length; i++) {
          let r = i % 2 === 0 ? rOuter : rInner
          positions[i] = { x: Math.cos(i * angle) * r, y: Math.sin(i * angle) * r }
        }
        return positions
      }
      // life cycle
      onMounted(() => {
        Promise.all([polylineVolume1.value.createPromise, polylineVolume2.value.createPromise, polylineVolume3.value.createPromise]).then(
          instances => {
            instances[0].viewer.zoomTo(instances[0].viewer.entities)
          }
        )
      })

      return {
        onEntityEvt,
        polylineVolume1,
        polylineVolume2,
        polylineVolume3,
        onViewerReady,
        shape1,
        shape3
      }
    }
  }
</script>
```

:::

### 属性

| 属性名                   | 类型                  | 默认值  | 描述                                                  |
| ------------------------ | --------------------- | ------- | ----------------------------------------------------- |
| show                     | Boolean               | `true`  | `optional` 指定 volume 是否显示。                     |
| positions                | Array                 |         | `optional` 指定 volume 位置信息数组。                 |
| shape                    | Array                 |         | `optional` 指定表达 volume 拉伸的形状参数。           |
| cornerType               | Number                | `0`     | `optional` 指定 volume 转角类型。                     |
| granularity              | Number                |         | `optional` 指定每个经度和纬度之间的角距离。           |
| fill                     | Boolean               | `true`  | `optional` 指定 volume 是否填充材质。                 |
| material                 | Object\|String\|Array |         | `optional` 指定 volume 材质。                         |
| outline                  | Boolean               | `false` | `optional` 指定 volume 是否绘制轮廓线。               |
| outlineColor             | Object\|String\|Array |         | `optional` 指定 volume 轮廓线颜色。                   |
| outlineWidth             | Number                | `1.0`   | `optional` 指定 volume 轮廓线宽度。                   |
| shadows                  | Number                | `0`     | `optional` 指定 volume 是否投射或接受每个光源的阴影。 |
| distanceDisplayCondition | Object                |         | `optional` 指定 volume 随相机距离改变是否显示参数。   |

### 事件

| 事件名            | 参数 | 描述                                     |
| ----------------- | ---- | ---------------------------------------- |
| definitionChanged |      | 每当更改或修改属性或子属性时触发该事件。 |

### 参考

- 官方文档： **[PolylineVolumeGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PolylineVolumeGraphics.html)**
