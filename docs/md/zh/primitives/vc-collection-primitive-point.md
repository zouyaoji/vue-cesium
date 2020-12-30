# PointCollection

`vc-collection-primitive-point` 组件用于加载点图元集合。

## 示例

### 添加海量点到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-collection-primitive-point :points="points" @click="clicked"></vc-collection-primitive-point>
        <vc-collection-primitive-point @click="clicked">
          <template v-for="(polyline, index) of polylines">
            <template v-for="(position, subIndex) of polyline.positions">
              <vc-primitive-point
                :position="position"
                :key="'point' + index + 'position' + subIndex"
                :color="colorPoint"
                :pixelSize="32"
              ></vc-primitive-point>
            </template>
          </template>
        </vc-collection-primitive-point>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          points: [],
          colorPoint: {},
          polylines: [
            {
              positions: [
                { lng: 119.24884033203125, lat: 30.313117980957031, height: 1183.3186645507812 },
                { lng: 119.24906555725647, lat: 30.312892755731806, height: 1183.3186645507812 }
              ]
            },
            {
              positions: [
                { lng: 119.24884033203125, lat: 30.313392639160156, height: 1183.804443359375 },
                { lng: 119.24906555725632, lat: 30.31316741393502, height: 1183.6849884241819 }
              ]
            },
            {
              positions: [
                { lng: 119.24884033203125, lat: 30.313655853271484, height: 1184.2783203125 },
                { lng: 119.24906555725632, lat: 30.313430628046348, height: 1184.1093236654997 }
              ]
            }
          ]
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
          this.colorPoint = Cesium.Color.fromCssColorString('rgb(255,229,0)')
          window.vm = this
          window.viewer = viewer
        },
        clicked (a) {
          console.log(a)
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
      <vc-collection-primitive-point :points="points"></vc-collection-primitive-point>
      <vc-collection-primitive-point>
        <template v-for="(polyline, index) of polylines">
          <template v-for="(position, subIndex) of polyline.positions">
            <vc-primitive-point
              :position="position"
              :key="'point' + index + 'position' + subIndex"
              :color="colorPoint"
              :pixelSize="32"
            ></vc-primitive-point>
          </template>
        </template>
      </vc-collection-primitive-point>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        points: [],
        colorPoint: {},
        polylines: [
          {
            positions: [
              { lng: 119.24884033203125, lat: 30.313117980957031, height: 1183.3186645507812 },
              { lng: 119.24906555725647, lat: 30.312892755731806, height: 1183.3186645507812 }
            ]
          },
          {
            positions: [
              { lng: 119.24884033203125, lat: 30.313392639160156, height: 1183.804443359375 },
              { lng: 119.24906555725632, lat: 30.31316741393502, height: 1183.6849884241819 }
            ]
          },
          {
            positions: [
              { lng: 119.24884033203125, lat: 30.313655853271484, height: 1184.2783203125 },
              { lng: 119.24906555725632, lat: 30.313430628046348, height: 1184.1093236654997 }
            ]
          }
        ]
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
        this.colorPoint = Cesium.Color.fromCssColorString('rgb(255,229,0)')
      }
    }
  }
</script>
```

## 属性

| 属性名                  | 类型    | 默认值  | 描述                                                                                                            |
| ----------------------- | ------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| modelMatrix             | Object  |         | `optional` 指定 4x4 变换矩阵，将每个点从模型转换为世界坐标。                                                    |
| debugShowBoundingVolume | Boolean | `false` | `optional` 指定是否显示此图元的 BoundingVolume， 仅调试使用。                                                   |
| blendOption             | Number  |         | `optional` 指定颜色混合选项。                                                                                   |
| points                  | Array   | `[]`    | `optional` 指定点集合数组。 数组对象结构为[`vc-primitive-point`](./#/zh/primitive/vc-primitive-point)组件属性。 |

---

- 参考官方文档：**[PointPrimitiveCollection](https://cesium.com/docs/cesiumjs-ref-doc/PointPrimitiveCollection.html)**

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
