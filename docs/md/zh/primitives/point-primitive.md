# 点图元

`point-primitive` 可渲染折线。 通过`point-collection`组件来加载它。

## 示例

### 添加点图元到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <point-collection>
          <template v-for="(polyline, index) of polylines">
            <template v-for="(position, subIndex) of polyline.positions">
              <point-primitive
                :position="position"
                :key="'point' + index + 'position' + subIndex"
                :color="colorPoint"
                :pixelSize="8"
              ></point-primitive>
            </template>
          </template>
        </point-collection>
      </cesium-viewer>
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
    <cesium-viewer @ready="ready">
      <point-collection>
        <template v-for="(polyline, index) of polylines">
          <template v-for="(position, subIndex) of polyline.positions">
            <point-primitive
              :position="position"
              :key="'point' + index + 'position' + subIndex"
              :color="colorPoint"
              :pixelSize="8"
            ></point-primitive>
          </template>
        </template>
      </point-collection>
    </cesium-viewer>
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

| 属性名                   | 类型    | 默认值             | 描述                                        |
| ------------------------ | ------- | ------------------ | ------------------------------------------- |
| show                     | Boolean | true               | `optional` 指定是否显示折线。               |
| width                    | Number  | 1.0                | `optional` 指定折线宽度。                   |
| loop                     | Boolean | false              | `optional` 指定折线是否首尾相连。           |
| material                 | Object  | Material.ColorType | `optional` 指定折线材质。                   |
| positions                | Array   |                    | `optional` 指定线是否可显示。               |
| id                       | Object  |                    | `optional` 指定折线被选中时的返回值。       |
| distanceDisplayCondition | Object  |                    | `optional` 根据相机的距离确定折线是否可见。 |

---

## 事件

| 事件名 | 参数             | 描述                                                |
| ------ | ---------------- | --------------------------------------------------- |
| ready  | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
