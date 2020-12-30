# BillboardCollection

`vc-collection-primitive-billboard` 组件用于添加布告板图元集合，布告板是场景中与视口对齐的图像。

## 示例

### 加载布告板图元集合

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-collection-primitive-billboard
          ref="billboardCollection"
          :billboards="billboards"
          @click="clicked"
          @mouseout="mouseout"
          @mouseover="mouseover"
        ></vc-collection-primitive-billboard>
        <vc-collection-primitive-billboard>
          <vc-primitive-billboard
            @click="clicked"
            @mouseout="mouseout"
            @mouseover="mouseover"
            :image="image"
            :scale="scale"
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
          show: true,
          distanceDisplayCondition: { near: 0, far: 20000000 },
          horizontalOrigin: 0,
          scale: 0.25
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          const billboards = []
          for (var i = 0; i < 50; i++) {
            let billboard = {}
            billboard.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
            billboard.image = Cesium.writeTextToCanvas(i + 1, {
              font: '100px sans-serif',
              strokeWidth: 2
            }).toDataURL()
            billboard.scale = 0.25
            billboard.id = i
            billboards.push(billboard)
          }
          this.billboards = billboards
          window.vm = this
          window.viewer = viewer
        },
        clicked(e) {
          console.log(a)
        },
        mouseout(e) {
          console.log(e)
          if (e.cesiumObject instanceof Cesium.Billboard) {
            this.scale = 0.25 // or e.cesiumObject.scale = 0.25
          } else if (e.cesiumObject instanceof Cesium.BillboardCollection) {
            console.log(e.pickedFeature.primitive.vcIndex, this.billboards[e.pickedFeature.primitive.vcIndex])
            this.billboards[e.pickedFeature.primitive.vcIndex].scale = 0.25 // or e.pickedFeature.primitive.scale = 0.25
          }
        },
        mouseover(e) {
          console.log(e)
          if (e.cesiumObject instanceof Cesium.Billboard) {
            this.scale = 0.5 // or e.cesiumObject.scale = 0.5
            e.pickedFeature.primitive.scale = 0.5
          } else if (e.cesiumObject instanceof Cesium.BillboardCollection) {
            console.log(e.pickedFeature.primitive.vcIndex, this.billboards[e.pickedFeature.primitive.vcIndex])
            this.billboards[e.pickedFeature.primitive.vcIndex].scale = 0.5 // or e.pickedFeature.primitive.scale = 0.5
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
      <vc-collection-primitive-billboard
        ref="billboardCollection"
        :billboards="billboards"
        @click="clicked"
        @mouseout="mouseout"
        @mouseover="mouseover"
      ></vc-collection-primitive-billboard>
      <vc-collection-primitive-billboard>
        <vc-primitive-billboard
          @click="clicked"
          @mouseout="mouseout"
          @mouseover="mouseover"
          :image="image"
          :scale="scale"
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
        show: true,
        distanceDisplayCondition: { near: 0, far: 20000000 },
        horizontalOrigin: 0,
        scale: 0.25
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        const billboards = []
        for (var i = 0; i < 50; i++) {
          let billboard = {}
          billboard.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          billboard.image = Cesium.writeTextToCanvas(i + 1, {
            font: '100px sans-serif',
            strokeWidth: 2
          }).toDataURL()
          billboard.scale = 0.25
          billboard.id = i
          billboards.push(billboard)
        }
        this.billboards = billboards
        window.vm = this
        window.viewer = viewer
      },
      clicked(e) {
        console.log(a)
      },
      mouseout(e) {
        console.log(e)
        if (e.cesiumObject instanceof Cesium.Billboard) {
          this.scale = 0.25 // or e.cesiumObject.scale = 0.25
        } else if (e.cesiumObject instanceof Cesium.BillboardCollection) {
          console.log(e.pickedFeature.primitive.vcIndex, this.billboards[e.pickedFeature.primitive.vcIndex])
          this.billboards[e.pickedFeature.primitive.vcIndex].scale = 0.25 // or e.pickedFeature.primitive.scale = 0.25
        }
      },
      mouseover(e) {
        console.log(e)
        if (e.cesiumObject instanceof Cesium.Billboard) {
          this.scale = 0.5 // or e.cesiumObject.scale = 0.5
          e.pickedFeature.primitive.scale = 0.5
        } else if (e.cesiumObject instanceof Cesium.BillboardCollection) {
          console.log(e.pickedFeature.primitive.vcIndex, this.billboards[e.pickedFeature.primitive.vcIndex])
          this.billboards[e.pickedFeature.primitive.vcIndex].scale = 0.5 // or e.pickedFeature.primitive.scale = 0.5
        }
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

- 参考官方文档：**[BillboardCollection](https://cesium.com/docs/cesiumjs-ref-doc/BillboardCollection.html)**

## 事件

| 事件名    | 参数                                                       | 描述                                                                             |
| --------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------- |
| ready     | {Cesium, viewer, cesiumObject}                             | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| mousedown | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该图元集合上按下时触发。                                                   |
| mouseup   | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该图元集合上弹起时触发。                                                   |
| click     | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该图元集合时触发。                                                       |
| clickout  | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标单击该图元集合外部时触。                                                     |
| dblclick  | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标左键双击该图元集合时触发。                                                   |
| mousemove | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标在该图元集合上移动时触发。                                                   |
| mouseover | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移动到该图元集合时触发。                                                     |
| mouseout  | {button,surfacePosition,pickedFeature,type,windowPosition} | 鼠标移出该图元集合时触发。                                                       |

---
