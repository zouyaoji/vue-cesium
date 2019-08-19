# 点集合图元

`point-collection` 用于添加点图元。挂载[`point-primitive`](./#/zh/primitives/point-primitive)组件添加点。

## 示例

### 添加海量点到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <point-collection :points="points">
        </point-collection>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          points: []
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          const points = [];
          for (var i = 0; i < 50000; i++) {
            let point = {}
            point.position = {lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21}
            point.color = 'rgb(255,229,0)'
            point.pixelSize = 8
            points.push(point)
          }
          this.points = points
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
      <point-collection :points="points"> </point-collection>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        points: []
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        const points = []
        for (var i = 0; i < 50000; i++) {
          let point = {}
          point.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          point.color = 'rgb(255,229,0)'
          point.pixelSize = 8
          points.push(point)
        }
        this.points = points
      }
    }
  }
</script>
```

## 属性

| 属性名                  | 类型    | 默认值  | 描述                                                          |
| ----------------------- | ------- | ------- | ------------------------------------------------------------- |
| modelMatrix             | Object  |         | `optional` 指定 4x4 变换矩阵，将每个点从模型转换为世界坐标。  |
| debugShowBoundingVolume | Boolean | `false` | `optional` 指定是否显示此图元的 BoundingVolume， 仅调试使用。 |
| blendOption             | Number  |         | `optional` 指定颜色混合选项。                                 |
| points                  | Array   | `[]`    | `optional` 指定点集合数组。                                   |

---

## 事件

| 事件名 | 参数             | 描述                                                |
| ------ | ---------------- | --------------------------------------------------- |
| ready  | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
