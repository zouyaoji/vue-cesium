# 标签集合图元

`label-collection` 用于添加标签图元，也可通过挂载[`label-primitive`](./#/zh/primitives/label-primitive)组件添加标签。

## 示例

### 添加标签集合图元到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <label-collection :labels="labels">
        </label-collection>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          labels: []
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          const labels = [];
          for (var i = 0; i < 1000; i++) {
            let label = {}
            label.position = {lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21}
            label.text = i.toString()
            labels.push(label)
          }
          this.labels = labels
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
      <label-collection :labels="labels"> </label-collection>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        labels: []
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        const labels = []
        for (var i = 0; i < 1000; i++) {
          let label = {}
          label.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          label.text = i.toString()
          labels.push(label)
        }
        this.labels = labels
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
| blendOption             | Number  |         | `optional` 指定颜色混合选项。                                 |
| scene                   | Object  |         | `optional` 必须传递使用高度参考属性的标签，否则将针对地球进行深度测试。 |
| labels                  | Array   | `[]`    | `optional` 指定标签集合数组。 数组对象结构为[`label-primitive`](./#/zh/primitives/label-primitive)组件属性。 |

---

- 参考官方文档[LabelCollection](https://cesium.com/docs/cesiumjs-ref-doc/LabelCollection.html)。

## 事件

| 事件名 | 参数             | 描述                                                |
| ------ | ---------------- | --------------------------------------------------- |
| ready  | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
