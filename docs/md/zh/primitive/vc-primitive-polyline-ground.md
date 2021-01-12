# GroundPolylinePrimitive

`vc-primitive-polyline-ground` 组件用于加载贴地或 3DTiles 图元，只能通过几何体实例 `vc-instance-geometry` 加载 `vc-geometry-polyline-ground`。

## 示例

### 加载折线图元

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive-polyline-ground
          :appearance="appearance"
          :geometryInstances="geometryInstances"
        ></vc-primitive-polyline-ground>
        <vc-primitive-polyline-ground :appearance="appearance">
          <vc-instance-geometry>
            <vc-geometry-polyline-ground :positions="positions" :width="2"></vc-geometry-polyline-ground>
          </vc-instance-geometry>
        </vc-primitive-polyline-ground>
        <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
        <vc-layer-imagery>
          <vc-provider-imagery-arcgis-mapserver url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"></vc-provider-imagery-arcgis-mapserver>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          appearance: {},
          geometryInstances: {},
          positions: [
            { lng: 100.1340164450331, lat: 31.05494287836128 },
            { lng: 108.08821010582645, lat: 31.05494287836128 }
          ]
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.geometryInstances = new Cesium.GeometryInstance({
            geometry: new Cesium.GroundPolylineGeometry({
              positions: Cesium.Cartesian3.fromDegreesArray([
                100.1340164450331,
                32.05494287836128,
                108.08821010582645,
                32.097804071380715
              ]),
              width: 4.0
            }),
            id: 'object returned when this instance is picked and to get/set per-instance attributes'
          })
          this.appearance = new Cesium.PolylineMaterialAppearance()
          viewer.camera.setView({
            destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
            orientation: {
              heading: 6.20312220367255,
              pitch: -0.9937536846355606,
              roll: 0.002443376981836387
            }
          })
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-primitive-polyline-ground
        :appearance="appearance"
        :geometryInstances="geometryInstances"
      ></vc-primitive-polyline-ground>
      <vc-primitive-polyline-ground :appearance="appearance">
        <vc-instance-geometry>
          <vc-geometry-polyline-ground :positions="positions" :width="2"></vc-geometry-polyline-ground>
        </vc-instance-geometry>
      </vc-primitive-polyline-ground>
      <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
      <vc-layer-imagery>
        <vc-provider-imagery-arcgis-mapserver url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"></vc-provider-imagery-arcgis-mapserver>
      </vc-layer-imagery>
    </vc-viewer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        appearance: {},
        geometryInstances: {},
        positions: [{ lng: 100.1340164450331, lat: 31.05494287836128 }, { lng: 108.08821010582645, lat: 31.05494287836128 }]
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.geometryInstances = new Cesium.GeometryInstance({
          geometry: new Cesium.GroundPolylineGeometry({
            positions: Cesium.Cartesian3.fromDegreesArray([
              100.1340164450331,
              32.05494287836128,
              108.08821010582645,
              32.097804071380715
            ]),
            width: 4.0
          }),
          id: 'object returned when this instance is picked and to get/set per-instance attributes'
        })
        this.appearance = new Cesium.PolylineMaterialAppearance()
        viewer.camera.setView({
          destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
          orientation: {
            heading: 6.20312220367255,
            pitch: -0.9937536846355606,
            roll: 0.002443376981836387
          }
        })
      }
    }
  }
</script>
```

## 属性

| 属性名                   | 类型          | 默认值  | 描述                                                                                             |
| ------------------------ | ------------- | ------- | ------------------------------------------------------------------------------------------------ |
| geometryInstances        | Object\|Array |         | `optional` 指定用于渲染的几何体实例或者几何体实例集合。                                          |
| appearance               | Object        |         | `optional` 指定图元的外观参数。                                                                  |
| show                     | Boolean       | `true`  | `optional` 指定图元是否显示。                                                                    |
| interleave               | Boolean       | `false` | `optional` 指定是否交错几何体顶点属性，true 时可以稍微改善渲染性能，但会增加加载时间。           |
| releaseGeometryInstances | Boolean       | `true`  | `optional` 指定是否保留图元对几何体实例的输入，不保留可以节省内存。                              |
| allowPicking             | Boolean       | `true`  | `optional` 指定图元是否可以被 Scene.pick 拾取，关闭拾取可以节省内存。                            |
| asynchronous             | Boolean       | `true`  | `optional` 指定图元时异步加载还是同步加载。                                                      |
| classificationType       | Number        | `2`     | `optional` 指定是贴地形还是贴 3DTiles，还是两者都贴。 **TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2** |
| debugShowBoundingVolume  | Boolean       | `false` | `optional` 指定是否显示图元的边界球，用于调试使用。                                              |
| debugShowShadowVolume    | Boolean       | `false` | `optional` 指定是否绘制图元中每个几何图形的阴影体积，用于调试使用。                              |

---

参考官方文档： **[GroundPolylinePrimitive](https://cesium.com/docs/cesiumjs-ref-doc/GroundPolylinePrimitive.html)**

## 事件

| 事件名    | 参数                                                       | 描述                                                                             |
| --------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------- |
| ready     | {Cesium, viewer, cesiumObject}                             | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| mousedown | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该图元上按下时触发。                                                       |
| mouseup   | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该图元上弹起时触发。                                                       |
| click     | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该图元时触发。                                                           |
| clickout  | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该图元外部时触。                                                         |
| dblclick  | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标左键双击该图元时触发。                                                       |
| mousemove | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该图元上移动时触发。                                                       |
| mouseover | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移动到该图元时触发。                                                         |
| mouseout  | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移出该图元时触发。                                                           |

---
