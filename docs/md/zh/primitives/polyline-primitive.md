# 折线图元

`polyline-primitive` 可渲染折线。 通过`polyline-collection`组件来加载它。

## 示例

### 添加线图元到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready" scene3DOnly>
        <polyline-collection>
          <polyline-primitive :positions="positions1" :material="material1" :width="5"></polyline-primitive>
          <polyline-primitive :positions="positions2" :material="material2" :width="10"></polyline-primitive>
          <polyline-primitive :positions="positions3" :material="material3" :width="10"></polyline-primitive>
        </polyline-collection>
      </cesium-viewer>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          polyline1: {},
          positions1: [{lng: 90, lat: 20, height: 10000}, {lng: 120, lat: 20, height: 10000}],
          material1: undefined,
          polyline2: {},
          positions2: [{lng: 90, lat: 30, height: 10000}, {lng: 120, lat: 30, height: 10000}],
          material2: undefined,
          polyline3: {},
          positions3: [{lng: 90, lat: 40, height: 10000}, {lng: 120, lat: 40, height: 10000}],
          material3: undefined,
          polylines: []
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.material1 = new Cesium.Material({
            fabric: {
              type: 'Color',
              uniforms: {
                  color: Cesium.Color.RED
              }
            }
          })
          this.material2 = new Cesium.Material({
            fabric: {
              type: 'PolylineGlow',
              uniforms: {
                  color: Cesium.Color.BLUE
              }
            }
          })
          this.material3 = new Cesium.Material({
            fabric: {
              type: 'PolylineArrow',
              uniforms: {
                  color: Cesium.Color.PURPLE
              }
            }
          })
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <cesium-viewer @ready="ready" scene3DOnly>
      <polyline-collection>
        <polyline-primitive :positions="positions1" :material="material1" :width="5"></polyline-primitive>
        <polyline-primitive :positions="positions2" :material="material2" :width="10"></polyline-primitive>
        <polyline-primitive :positions="positions3" :material="material3" :width="10"></polyline-primitive>
      </polyline-collection>
    </cesium-viewer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        polyline1: {},
        positions1: [{ lng: 90, lat: 20, height: 10000 }, { lng: 120, lat: 20, height: 10000 }],
        material1: undefined,
        polyline2: {},
        positions2: [{ lng: 90, lat: 30, height: 10000 }, { lng: 120, lat: 30, height: 10000 }],
        material2: undefined,
        polyline3: {},
        positions3: [{ lng: 90, lat: 40, height: 10000 }, { lng: 120, lat: 40, height: 10000 }],
        material3: undefined,
        polylines: []
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.material1 = new Cesium.Material({
          fabric: {
            type: 'Color',
            uniforms: {
              color: Cesium.Color.RED
            }
          }
        })
        this.material2 = new Cesium.Material({
          fabric: {
            type: 'PolylineGlow',
            uniforms: {
              color: Cesium.Color.BLUE
            }
          }
        })
        this.material3 = new Cesium.Material({
          fabric: {
            type: 'PolylineArrow',
            uniforms: {
              color: Cesium.Color.PURPLE
            }
          }
        })
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
