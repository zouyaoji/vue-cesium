# PolygonGeometry、PolygonOutlineGeometry

- `vc-geometry-polygon` 组件用于加载多边形几何体。
- `vc-geometry-outline-polygon` 组件用于加载多边形几何体轮廓。
- 需要作为 `vc-instance-geometry` 的子组件使用，可以挂载到 `vc-primitive` 或 `vc-primitive-ground`。

## 示例

### 加载多边形几何体

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry>
            <vc-geometry-polygon
              ref="polygon"
              :vertexFormat="vertexFormat"
              :polygonHierarchy="polygonHierarchy"
              :height="height"
              :extrudedHeight="30"
            ></vc-geometry-polygon>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearanceOutline">
          <vc-instance-geometry :attributes="attributes">
            <vc-geometry-outline-polygon ref="polygonOutline" :polygonHierarchy="polygonHierarchyOutline">
            </vc-geometry-outline-polygon>
          </vc-instance-geometry>
        </vc-primitive>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          appearance: null,
          geometry: null,
          vertexFormat: null,
          polygonHierarchy: [
            { lng: 102.1, lat: 29.5 },
            { lng: 106.2, lat: 29.5 },
            { lng: 106.2, lat: 33.5 },
            { lng: 108.2, lat: 35.5 },
            { lng: 102.1, lat: 33.5 }
          ],
          height: 100000,
          polygonHierarchyOutline: [
            { lng: 107.1, lat: 29.5 },
            { lng: 111.2, lat: 29.5 },
            { lng: 111.2, lat: 33.5 },
            { lng: 113.2, lat: 35.5 },
            { lng: 107.1, lat: 33.5 }
          ],
          appearanceOutline: null
        }
      },
      mounted() {
        Promise.all([this.$refs.polygon.createPromise, this.$refs.polygonOutline.createPromise]).then((instances) => {
          console.log('All geometries are loaded.')
          const boundingSphereUnion = instances.reduce((prev, cur) => {
            const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)
            const boundingSphere = cur.vm.$parent.modelMatrix
              ? Cesium.BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)
              : geometry.boundingSphere
            return prev === null ? boundingSphere : Cesium.BoundingSphere.union(prev, boundingSphere)
          }, null)
          instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)
        })
      },
      methods: {
        ready({ Cesium, viewer }) {
          this.viewer = viewer
          const { PerInstanceColorAppearance, ColorGeometryInstanceAttribute, EllipsoidSurfaceAppearance, Material } = Cesium
          this.appearanceOutline = new PerInstanceColorAppearance({
            flat: true
          })
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
          }
          this.vertexFormat = EllipsoidSurfaceAppearance.VERTEX_FORMAT
          this.appearance = new EllipsoidSurfaceAppearance({
            material: new Material({
              fabric: {
                type: 'Water',
                uniforms: {
                  normalMap: './statics/SampleData/images/waterNormals.jpg',
                  frequency: 1000.0,
                  animationSpeed: 0.05,
                  amplitude: 10.0
                }
              }
            })
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
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry>
          <vc-geometry-polygon
            ref="polygon"
            :vertexFormat="vertexFormat"
            :polygonHierarchy="polygonHierarchy"
            :height="height"
            :extrudedHeight="30"
          ></vc-geometry-polygon>
        </vc-instance-geometry>
      </vc-primitive>
      <vc-primitive :appearance="appearanceOutline">
        <vc-instance-geometry :attributes="attributes">
          <vc-geometry-outline-polygon ref="polygonOutline" :polygonHierarchy="polygonHierarchyOutline">
          </vc-geometry-outline-polygon>
        </vc-instance-geometry>
      </vc-primitive>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        appearance: null,
        geometry: null,
        vertexFormat: null,
        polygonHierarchy: [
          { lng: 102.1, lat: 29.5 },
          { lng: 106.2, lat: 29.5 },
          { lng: 106.2, lat: 33.5 },
          { lng: 108.2, lat: 35.5 },
          { lng: 102.1, lat: 33.5 }
        ],
        height: 100000,
        polygonHierarchyOutline: [
          { lng: 107.1, lat: 29.5 },
          { lng: 111.2, lat: 29.5 },
          { lng: 111.2, lat: 33.5 },
          { lng: 113.2, lat: 35.5 },
          { lng: 107.1, lat: 33.5 }
        ],
        appearanceOutline: null
      }
    },
    mounted() {
      Promise.all([this.$refs.polygon.createPromise, this.$refs.polygonOutline.createPromise]).then((instances) => {
        console.log('All geometries are loaded.')
        const boundingSphereUnion = instances.reduce((prev, cur) => {
          const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)
          const boundingSphere = cur.vm.$parent.modelMatrix
            ? Cesium.BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)
            : geometry.boundingSphere
          return prev === null ? boundingSphere : Cesium.BoundingSphere.union(prev, boundingSphere)
        }, null)
        instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)
      })
    },
    methods: {
      ready({ Cesium, viewer }) {
        this.viewer = viewer
        const { PerInstanceColorAppearance, ColorGeometryInstanceAttribute, EllipsoidSurfaceAppearance, Material } = Cesium
        this.appearanceOutline = new PerInstanceColorAppearance({
          flat: true
        })
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        this.vertexFormat = EllipsoidSurfaceAppearance.VERTEX_FORMAT
        this.appearance = new EllipsoidSurfaceAppearance({
          material: new Material({
            fabric: {
              type: 'Water',
              uniforms: {
                normalMap: './statics/SampleData/images/waterNormals.jpg',
                frequency: 1000.0,
                animationSpeed: 0.05,
                amplitude: 10.0
              }
            }
          })
        })
      }
    }
  }
</script>
```

## 属性

### `vc-geometry-polygon`

| 属性名            | 类型           | 默认值  | 描述                                                                 |
| ----------------- | -------------- | ------- | -------------------------------------------------------------------- |
| polygonHierarchy  | Object\|Array  |         | `optional` 指定 polygon 的 PolygonHierarchy 属性。                   |
| height            | Number         | `0`     | `optional` 指定 polygon 的高度。                                     |
| extrudedHeight    | Number         |         | `optional` 指定 polygon 拉伸高度。                                   |
| vertexFormat      | Object         |         | `optional` 指定 polygon 要缓存的顶点属性。                           |
| stRotation        | Number\|Object | `0.0`   | `optional` 指定 polygon 纹理按正北方向逆时针旋转角度。               |
| ellipsoid         | Object         |         | `optional` 指定 polygon 参考椭球体。                                 |
| granularity       | Number         |         | `optional` 指定每个经纬度之间的采样粒度。                            |
| perPositionHeight | Boolean        | `false` | `optional` 指定 polygon 是否使用每个位置的高度。                     |
| closeTop          | Boolean        | `true`  | `optional` 指定 polygon 拉伸出来的顶部是否闭合。                     |
| closeBottom       | Boolean        | `true`  | `optional` 指定 polygon 拉伸出来的底部是否闭合。                     |
| arcType           | Number         | `1`     | `optional` 指定 polygon 线条类型。**NONE: 0, GEODESIC: 1, RHUMB: 2** |

---

### `vc-geometry-outline-polygon`

| 属性名            | 类型          | 默认值  | 描述                                                                 |
| ----------------- | ------------- | ------- | -------------------------------------------------------------------- |
| polygonHierarchy  | Object\|Array |         | `optional` 指定 polygon 的 PolygonHierarchy 属性。                   |
| height            | Number        | `0`     | `optional` 指定 polygon 的高度。                                     |
| extrudedHeight    | Number        |         | `optional` 指定 polygon 拉伸高度。                                   |
| vertexFormat      | Object        |         | `optional` 指定 polygon 要缓存的顶点属性。                           |
| ellipsoid         | Object        |         | `optional` 指定 polygon 参考椭球体。                                 |
| granularity       | Number        |         | `optional` 指定每个经纬度之间的采样粒度。                            |
| perPositionHeight | Boolean       | `false` | `optional` 指定 polygon 是否使用每个位置的高度。                     |
| arcType           | Number        | `1`     | `optional` 指定 polygon 线条类型。**NONE: 0, GEODESIC: 1, RHUMB: 2** |

---

- polygonHierarchy 结构

```js
// Array
[{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}]
// Object
{
  positions: [{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}],
  holes: [
    {
      positions: [{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}],
      holes: [
        positions: [{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}]
        // ...
      ]
    }
  ]
}

```

参考官方文档：**[PolygonGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolygonGeometry.html)**、**[PolygonOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolygonOutlineGeometry.html)**

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
