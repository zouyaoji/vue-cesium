# 标签图元

`label-primitive` 可渲染文本。 通过`label-collection`组件来加载它。

## 示例

### 添加标签图元到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <label-collection>
          <template v-for="(polyline, index) of polylines">
            <label-primitive :position="polyline.positions[polyline.positions.length-1]" :key="'label'+index"
              :text= "'面积'+(polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡')"
              showBackground :horizontalOrigin="1">
            </label-primitive>
          </template>
        </label-collection>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
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
      <label-collection>
        <template v-for="(polyline, index) of polylines">
          <label-primitive
            :position="polyline.positions[polyline.positions.length-1]"
            :key="'label'+index"
            :text="'面积'+(polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡')"
            showBackground
            :horizontalOrigin="1"
          >
          </label-primitive>
        </template>
      </label-collection>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
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
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ------------------------ | ------- | ------------------ | ------------------------------------------- |
| backgroundColor  | Object|Array|String | [0.165, 0.165, 0.165, 0.8] | `optional` 指定 label 背景颜色。 |
| backgroundPadding  | Object | | `optional` 指定 label 背景x、y方向偏移量。 **结构: { x: number, y: number }** |
| disableDepthTestDistance | Number | | `optional` 指定 label 的深度检测距离。 |
| distanceDisplayCondition | Object | | `optional` 指定 label 的显示条件。. **结构: { near: number, far: number }** |
| eyeOffset | Object | `{x: 0, y: 0, z: 0}` | `optional` 指定 label 视角偏移量。 **结构：{ x: number, y: number, z: number }** |
| fillColor | Object\|String\|Array | `white` | `optional` 指定 label 填充颜色。 |
| font | String | `'30px sans-serif'` | `optional` 指定 label CSS 字体。 |
| heightReference | Number | `0` | `optional` 指定 label 高度模式。**NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| horizontalOrigin | Number | `0` | `optional` 指定 label 水平对齐方式。**CENTER: 0, LEFT: 1, RIGHT: -1** |
| id | \* | | `optional` 指定与 label 关联的信息。 |
| outlineColor | Object|Array|String | `'BLACK'` | `optional` 指定 label 的轮廓颜色。 |
| outlineWidth | Number | `0` | `optional` 指定 label 的轮廓宽度。 |
| pixelOffset | Object | `{x: 0, y: 0}` | `optional` 指定 label 像素偏移量。 **结构：{ x: number, y: number }** |
| pixelOffsetScaleByDistance | Object | | `optional` 指定 label 偏移量随相机距离改变的参数。**结构：{ near: number, nearValue: number, far: number, farValue: number }** |
| position | Object | | `optional` 指定 label 的位置。 **结构：{ lng: number, lat: number, height: number }** |
| scale | Number | `1.0` | `optional` 指定 label 缩放比例。 |
| scaleByDistance | Object | | `optional` 指定 label 的缩放显示参数。 **结构： { near: number, nearValue: number, far: number, farValue: number }** |
| show | Boolean | `true` | `optional`指定 label 是否显示。 |
| showBackground | Boolean | `false` | `optional` 指定 label 是否显示背景。 |
| text | String | | `optional` 指定 label 文字，支持'\n'换行符。 |
| totalScale  | Number | `1.0` | `optional` 获取 label 的总比例，该比例是标签的比例乘以所计算的所需字体的相对大小与生成的字形大小的比例。 |
| translucencyByDistance | Object | | `optional` 指定 label 透明度改变参数。 **结构： { near: number, nearValue: number, far: number, farValue: number }** |
| verticalOrigin | Number | `0` | `optional` 指定 label 垂直对齐方式。**CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1** |

---

- 参考官方文档[Label](https://cesium.com/docs/cesiumjs-ref-doc/Label.html)。

## 事件

| 事件名 | 参数             | 描述                                                |
| ------ | ---------------- | --------------------------------------------------- |
| ready  | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
