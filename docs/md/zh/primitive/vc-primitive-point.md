# PointPrimitive

`vc-primitive-point` 组件用于加载点图元，只能作为 `vc-collection-primitive-point` 的子组件使用。

## 示例

### 添加点图元到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-collection-primitive-point>
          <template v-for="(polyline, index) of polylines">
            <template v-for="(position, subIndex) of polyline.positions">
              <vc-primitive-point
                :position="position"
                :key="'point' + index + 'position' + subIndex"
                :color="colorPoint"
                :pixelSize="8"
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
          this.colorPoint = Cesium.Color.fromCssColorString('rgb(255,229,0)')
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
      <vc-collection-primitive-point>
        <template v-for="(polyline, index) of polylines">
          <template v-for="(position, subIndex) of polyline.positions">
            <vc-primitive-point
              :position="position"
              :key="'point' + index + 'position' + subIndex"
              :color="colorPoint"
              :pixelSize="8"
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
        this.colorPoint = Cesium.Color.fromCssColorString('rgb(255,229,0)')
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ------------------------ | ------- | ------------------ | ------------------------------------------- |
| color | Object|Array|String | `'WHITE'` | `optional` 指定点的颜色。 |
| disableDepthTestDistance | Number | | `optional` 指定点深度检测距离。 |
| distanceDisplayCondition | Object | | `optional` 指定点显示条件。. **结构: { near: number, far: number }** |
| id | \* | | `optional` 指定与点关联的信息。 |
| outlineColor | Object|Array|String | `'BLACK'` | `optional` 指定点的轮廓颜色。 |
| outlineWidth | Number | `0` | `optional` 指定点的轮廓宽度。 |
| pixelSize | Number | `1` | `optional` 指定点的像素大小。 |
| position | Object | | `optional` 指定点的位置。 **结构：{ lng: number, lat: number, height: number }** |
| scaleByDistance | Object | | `optional` 指定点的缩放参数。 **结构： { near: number, nearValue: number, far: number, farValue: number }** |
| show | Boolean | `true` | `optional`指定点是否显示。 |
| translucencyByDistance | Object | | `optional` 指定点透明度改变参数。 **结构： { near: number, nearValue: number, far: number, farValue: number }** |

---

- 参考官方文档：**[PointPrimitive](https://cesium.com/docs/cesiumjs-ref-doc/PointPrimitive.html)**

## 事件

| 事件名    | 参数                                                | 描述                                                                             |
| --------- | --------------------------------------------------- | -------------------------------------------------------------------------------- |
| ready     | {Cesium, viewer, cesiumObject}                      | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| mousedown | {button,surfacePosition,target,type,windowPosition} | 鼠标在该图元上按下时触发。                                                       |
| mouseup   | {button,surfacePosition,target,type,windowPosition} | 鼠标在该图元上弹起时触发。                                                       |
| click     | {button,surfacePosition,target,type,windowPosition} | 鼠标单击该图元时触发。                                                           |
| dblclick  | {button,surfacePosition,target,type,windowPosition} | 鼠标左键双击该图元时触发。                                                       |
| mousemove | {button,surfacePosition,target,type,windowPosition} | 鼠标移动到该图元时触发。                                                         |

---
