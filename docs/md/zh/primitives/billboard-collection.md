# 布告板集合图元

`billboard-collection` 用于添加布告板图元，也可通过挂载[`billboard-primitive`](./#/zh/primitives/billboard-primitive)组件添加布告板。

## 示例

### 添加布告板集合图元到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <billboard-collection :billboards="billboards">
          </billboard-collection>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          billboards: []
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          const billboards = [];
          for (var i = 0; i < 1000; i++) {
            let billboard = {}
            billboard.position = {lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21}
            billboard.image = 'https://zouyaoji.top/vue-cesium/favicon.png'
            billboard.scale = 0.1
            billboards.push(billboard)
          }
          this.billboards = billboards
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
      <billboard-collection :billboards="billboards"> </billboard-collection>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        billboards: []
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        const billboards = []
        for (var i = 0; i < 1000; i++) {
          let billboard = {}
          billboard.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          billboard.image = 'https://zouyaoji.top/vue-cesium/favicon.png'
          billboard.scale = 0.1
          billboards.push(billboard)
        }
        this.billboards = billboards
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
| billboards              | Array   | `[]`    | `optional` 指定布告板集合数组。 数组对象结构为[`billboard-primitive`](./#/zh/primitives/billboard-primitive)组件属性。 |

---

- 参考官方文档[BillboardCollection](https://cesium.com/docs/cesiumjs-ref-doc/BillboardCollection.html)。

## 事件

| 事件名 | 参数             | 描述                                                |
| ------ | ---------------- | --------------------------------------------------- |
| ready  | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
