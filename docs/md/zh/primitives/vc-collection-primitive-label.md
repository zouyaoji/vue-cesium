# LabelCollection

`vc-collection-primitive-label` 组件用于加载标签图元集合，标签是场景中与视口对齐的文本。

## 示例

### 加载标签图元集合

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-collection-primitive-label :labels="labels" @click="clicked"></vc-collection-primitive-label>
        <vc-collection-primitive-label>
          <template v-for="(polyline, index) of polylines">
            <vc-primitive-label @click="clicked"
              :position="polyline.positions[polyline.positions.length-1]"
              :key="'label'+index"
              :text="'面积'+(polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡')"
              showBackground
              :horizontalOrigin="1"
            >
            </vc-primitive-label>
          </template>
        </vc-collection-primitive-label>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          labels: [],
          polylines: [
            {
              positions: [
                { lng: 105.24884033203125, lat: 25.313117980957031, height: 1183.3186645507812 },
                { lng: 108.24906555725647, lat: 30.312892755731806, height: 1183.3186645507812 }
              ],
              area: 100000.3
            },
            {
              positions: [
                { lng: 109.24884033203125, lat: 30.313392639160156, height: 1183.804443359375 },
                { lng: 112.24906555725632, lat: 35.31316741393502, height: 1183.6849884241819 }
              ],
              area: 8000.658
            },
            {
              positions: [
                { lng: 113.24884033203125, lat: 35.313655853271484, height: 1184.2783203125 },
                { lng: 116.24906555725632, lat: 40.313430628046348, height: 1184.1093236654997 }
              ],
              area: 200000.55
            }
          ]
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          const labels = []
          for (var i = 0; i < 100; i++) {
            let label = {}
            label.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
            label.text = i.toString()
            labels.push(label)
          }
          this.labels = labels
          window.vm = this
          window.viewer = viewer
        },
        clicked (e) {
          console.log(e)
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
      <vc-collection-primitive-label @click="clicked" :labels="labels"></vc-collection-primitive-label>
      <vc-collection-primitive-label>
        <template v-for="(polyline, index) of polylines">
          <vc-primitive-label
            :position="polyline.positions[polyline.positions.length-1]"
            :key="'label'+index"
            :text="'面积'+(polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡')"
            showBackground
            :horizontalOrigin="1"
          >
          </vc-primitive-label>
        </template>
      </vc-collection-primitive-label>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        labels: [],
        polylines: [
          {
            positions: [
              { lng: 105.24884033203125, lat: 25.313117980957031, height: 1183.3186645507812 },
              { lng: 108.24906555725647, lat: 30.312892755731806, height: 1183.3186645507812 }
            ],
            area: 100000.3
          },
          {
            positions: [
              { lng: 109.24884033203125, lat: 30.313392639160156, height: 1183.804443359375 },
              { lng: 112.24906555725632, lat: 35.31316741393502, height: 1183.6849884241819 }
            ],
            area: 8000.658
          },
          {
            positions: [
              { lng: 113.24884033203125, lat: 35.313655853271484, height: 1184.2783203125 },
              { lng: 116.24906555725632, lat: 40.313430628046348, height: 1184.1093236654997 }
            ],
            area: 200000.55
          }
        ]
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        const labels = []
        for (var i = 0; i < 100; i++) {
          let label = {}
          label.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
          label.text = i.toString()
          labels.push(label)
        }
        this.labels = labels
      },
      clicked(e) {
        console.log(e)
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
| labels                  | Array   | `[]`    | `optional` 指定标签集合数组。 数组对象结构为[`vc-primitive-label`](./#/zh/primitive/vc-primitive-label)组件属性。 |

---

- 参考官方文档：**[LabelCollection](https://cesium.com/docs/cesiumjs-ref-doc/LabelCollection.html)**

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
