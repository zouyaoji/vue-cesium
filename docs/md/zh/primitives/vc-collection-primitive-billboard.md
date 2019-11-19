# BillboardCollection

`vc-collection-primitive-billboard` 组件用于添加布告板图元集合，布告板是场景中与视口对齐的图像。

## 示例

### 加载布告板图元集合

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-collection-primitive-billboard :billboards="billboards"></vc-collection-primitive-billboard>
        <vc-collection-primitive-billboard>
          <vc-primitive-billboard
            :image="image"
            :scale="0.4"
            :show="show"
            :distanceDisplayCondition="distanceDisplayCondition"
            :horizontalOrigin="horizontalOrigin"
            :position="position"
          ></vc-primitive-billboard>
        </vc-collection-primitive-billboard>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          billboards: [],
          id: 'Hello Vue Cesium',
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          position: { lng: 108, lat: 35, height: 10000 },
          billboard: {},
          show: true,
          distanceDisplayCondition: { near: 0, far: 20000000 },
          horizontalOrigin: 0
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          window.viewer = viewer
          window.vm = this
          const billboards = []
          for (var i = 0; i < 500; i++) {
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
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-collection-primitive-billboard :billboards="billboards"></vc-collection-primitive-billboard>
      <vc-collection-primitive-billboard>
        <vc-primitive-billboard
          :image="image"
          :scale="0.4"
          :show="show"
          :distanceDisplayCondition="distanceDisplayCondition"
          :horizontalOrigin="horizontalOrigin"
          :position="position"
        ></vc-primitive-billboard>
      </vc-collection-primitive-billboard>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        billboards: [],
        id: 'Hello Vue Cesium',
        image: 'https://zouyaoji.top/vue-cesium/favicon.png',
        position: { lng: 108, lat: 35, height: 10000 },
        billboard: {},
        show: true,
        distanceDisplayCondition: { near: 0, far: 20000000 },
        horizontalOrigin: 0
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        window.viewer = viewer
        window.vm = this
        const billboards = []
        for (var i = 0; i < 500; i++) {
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
| billboards              | Array   | `[]`    | `optional` 指定布告板集合数组。 数组对象结构为[`vc-primitive-billboard`](./#/zh/primitive/vc-primitive-billboard)组件属性。 |

---

- 参考官方文档：[BillboardCollection](https://cesium.com/docs/cesiumjs-ref-doc/BillboardCollection.html)

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
