# 线集合图元

`polyline-collection` 用于添加线图元，也可通过挂载[`polyline-primitive`](./#/zh/primitives/polyline-primitive)组件添加线图元。

## 示例

### 添加线集合图元到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <polyline-collection :polylines="polylines"> </polyline-collection>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          polylines: []
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          const polylines = [];
          for (var i = 0; i < 1000; i++) {
            let polyline = {}
            let positions = []
            positions.push({lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21})
            positions.push({lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21})
            polyline.positions = positions
            polylines.push(polyline)
          }
          this.polylines = polylines
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <cesium-viewer @ready="ready">
      <polyline-collection :polylines="polylines"> </polyline-collection>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        polylines: []
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        const polylines = []
        for (var i = 0; i < 1000; i++) {
          let polyline = {}
          let positions = []
          positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })
          positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })
          polyline.positions = positions
          polylines.push(polyline)
        }
        this.polylines = polylines
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名                  | 类型    | 默认值  | 描述                                                          |
| ----------------------- | ------- | ------- | ------------------------------------------------------------- |
| modelMatrix             | Object  |         | `optional` 指定 4x4 变换矩阵，将每个点从模型转换为世界坐标。  |
| debugShowBoundingVolume | Boolean | `false` | `optional` 指定是否显示此图元的 BoundingVolume， 仅调试使用。 |
| polylines               | Array   | `[]`    | `optional` 指定线集合数组。 数组对象结构为[`polyline-primitive`](./#/zh/primitives/polyline-primitive)组件属性。 |

---

- 参考官方文档[PolylineCollection](https://cesium.com/docs/cesiumjs-ref-doc/PolylineCollection.html)。

## 事件

| 事件名 | 参数             | 描述                                                |
| ------ | ---------------- | --------------------------------------------------- |
| ready  | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
