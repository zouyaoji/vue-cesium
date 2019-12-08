# CoplanarPolygonGeometry、CoplanarPolygonOutlineGeometry

- `vc-geometry-polygon-coplanar` 组件用于加载共面多边形。
- `vc-geometry-outline-polygon-coplanar` 组件用于加载共面多边形轮廓。
- 需要作为 `vc-instance-geometry` 的子组件使用，可以挂载到 `vc-primitive`。

## 示例

### 加载共面多边形几何体

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributes">
            <vc-geometry-polygon-coplanar
              ref="polygonCoplanar"
              :positions="positions"
              :vertexFormat="vertexFormat"
            ></vc-geometry-polygon-coplanar>
          </vc-instance-geometry>
        </vc-primitive>
        <vc-primitive :appearance="appearance">
          <vc-instance-geometry :attributes="attributesOutline">
            <vc-geometry-outline-polygon-coplanar
              ref="polygonCoplanarOutline"
              :positions="positions"
            ></vc-geometry-outline-polygon-coplanar>
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
          positions: [
            { lng: 110, lat: 33.5, height: 0 },
            { lng: 110, lat: 33.5, height: 200000 },
            { lng: 105, lat: 33.5, height: 200000 },
            { lng: 105, lat: 33.5, height: 0 }
          ],
          vertexFormat: null,
          attributes: null,
          attributesOutline: null
        }
      },
      mounted() {
        Promise.all([this.$refs.polygonCoplanar.createPromise, this.$refs.polygonCoplanarOutline.createPromise]).then(
          (instances) => {
            console.log('All geometries are loaded.')
            const boundingSphereUnion = instances.reduce((prev, cur) => {
              const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)
              const boundingSphere = cur.vm.$parent.modelMatrix
                ? Cesium.BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)
                : geometry.boundingSphere
              return prev === null ? boundingSphere : Cesium.BoundingSphere.union(prev, boundingSphere)
            }, null)
            instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)
          }
        )
      },
      methods: {
        ready({ Cesium, viewer }) {
          this.viewer = viewer
          const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance } = Cesium
          this.appearance = new PerInstanceColorAppearance({
            flat: true
          })
          this.vertexFormat = PerInstanceColorAppearance.FLAT_VERTEX_FORMAT
          this.attributes = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
          }
          this.attributesOutline = {
            color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
          }
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
        <vc-instance-geometry :attributes="attributes">
          <vc-geometry-polygon-coplanar
            ref="polygonCoplanar"
            :positions="positions"
            :vertexFormat="vertexFormat"
          ></vc-geometry-polygon-coplanar>
        </vc-instance-geometry>
      </vc-primitive>
      <vc-primitive :appearance="appearance">
        <vc-instance-geometry :attributes="attributesOutline">
          <vc-geometry-outline-polygon-coplanar
            ref="polygonCoplanarOutline"
            :positions="positions"
          ></vc-geometry-outline-polygon-coplanar>
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
        positions: [
          { lng: 110, lat: 33.5, height: 0 },
          { lng: 110, lat: 33.5, height: 200000 },
          { lng: 105, lat: 33.5, height: 200000 },
          { lng: 105, lat: 33.5, height: 0 }
        ],
        vertexFormat: null,
        attributes: null,
        attributesOutline: null
      }
    },
    mounted() {
      Promise.all([this.$refs.polygonCoplanar.createPromise, this.$refs.polygonCoplanarOutline.createPromise]).then(
        (instances) => {
          console.log('All geometries are loaded.')
          const boundingSphereUnion = instances.reduce((prev, cur) => {
            const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)
            const boundingSphere = cur.vm.$parent.modelMatrix
              ? Cesium.BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)
              : geometry.boundingSphere
            return prev === null ? boundingSphere : Cesium.BoundingSphere.union(prev, boundingSphere)
          }, null)
          instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)
        }
      )
    },
    methods: {
      ready({ Cesium, viewer }) {
        this.viewer = viewer
        const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance } = Cesium
        this.appearance = new PerInstanceColorAppearance({
          flat: true
        })
        this.vertexFormat = PerInstanceColorAppearance.FLAT_VERTEX_FORMAT
        this.attributes = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
        }
        this.attributesOutline = {
          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
        }
      }
    }
  }
</script>
```

## 属性

### `vc-geometry-polygon-coplanar`

| 属性名       | 类型           | 默认值 | 描述                                                   |
| ------------ | -------------- | ------ | ------------------------------------------------------ |
| positions    | Object\|Array  |        | `optional` 指定 polygon 的 positions 属性。            |
| vertexFormat | Object         |        | `optional` 指定 polygon 要缓存的顶点属性。             |
| stRotation   | Number\|Object | `0.0`  | `optional` 指定 polygon 纹理按正北方向逆时针旋转角度。 |
| ellipsoid    | Object         |        | `optional` 指定 polygon 参考椭球体。                   |

---

### `vc-geometry--outline-polygon-coplanar`

| 属性名    | 类型          | 默认值 | 描述                                        |
| --------- | ------------- | ------ | ------------------------------------------- |
| positions | Object\|Array |        | `optional` 指定 polygon 的 positions 属性。 |

---

- positions 结构

```js
// Array
[{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}]
```

参考官方文档：**[CoplanarPolygonGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolygonGeometry.html)**、**[CoplanarPolygonOutlineGeometry](https://cesium.com/docs/cesiumjs-ref-doc/CoplanarPolygonOutlineGeometry.html)**

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
