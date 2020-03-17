# PolylineCollection

`vc-collection-primitive-polyline` 用于加载线图元集合。

## 示例

### 添加线集合图元到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-collection-primitive-polyline :polylines="polylines"></vc-collection-primitive-polyline>
        <vc-collection-primitive-polyline>
          <vc-primitive-polyline :positions="positions1" :material="material1" :width="width"></vc-primitive-polyline>
          <vc-primitive-polyline :positions="positions2" :material="material2" :width="10"></vc-primitive-polyline>
          <vc-primitive-polyline :positions="positions3" :material="material3" :width="10"></vc-primitive-polyline>
        </vc-collection-primitive-polyline>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          width: 5,
          polylines: [],
          polyline1: {},
          positions1: [
            { lng: 90, lat: 20, height: 10000 },
            { lng: 120, lat: 20, height: 10000 }
          ],
          material1: undefined,
          polyline2: {},
          positions2: [
            { lng: 90, lat: 30, height: 10000 },
            { lng: 120, lat: 30, height: 10000 }
          ],
          material2: undefined,
          polyline3: {},
          positions3: [
            { lng: 90, lat: 40, height: 10000 },
            { lng: 120, lat: 40, height: 10000 }
          ],
          material3: undefined,
          polylines: []
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          const polylines = []
          for (var i = 0; i < 1000; i++) {
            let polyline = {}
            let positions = []
            positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })
            positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })
            polyline.positions = positions
            polylines.push(polyline)
          }
          this.polylines = polylines
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
    <vc-viewer @ready="ready">
      <vc-collection-primitive-polyline :polylines="polylines"> </vc-collection-primitive-polyline>
      <vc-collection-primitive-polyline>
        <vc-primitive-polyline :positions="positions1" :material="material1" :width="5"></vc-primitive-polyline>
        <vc-primitive-polyline :positions="positions2" :material="material2" :width="10"></vc-primitive-polyline>
        <vc-primitive-polyline :positions="positions3" :material="material3" :width="10"></vc-primitive-polyline>
      </vc-collection-primitive-polyline>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        polylines: [],
        polyline1: {},
        positions1: [
          { lng: 90, lat: 20, height: 10000 },
          { lng: 120, lat: 20, height: 10000 }
        ],
        material1: undefined,
        polyline2: {},
        positions2: [
          { lng: 90, lat: 30, height: 10000 },
          { lng: 120, lat: 30, height: 10000 }
        ],
        material2: undefined,
        polyline3: {},
        positions3: [
          { lng: 90, lat: 40, height: 10000 },
          { lng: 120, lat: 40, height: 10000 }
        ],
        material3: undefined,
        polylines: []
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        const polylines = []
        for (var i = 0; i < 1000; i++) {
          let polyline = {}
          let positions = []
          positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })
          positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })
          polyline.positions = positions
          polylines.push(polyline)
        }
        this.polylines = polylines
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

<!-- prettier-ignore -->
| 属性名                  | 类型    | 默认值  | 描述                                                          |
| ----------------------- | ------- | ------- | ------------------------------------------------------------- |
| modelMatrix             | Object  |         | `optional` 指定 4x4 变换矩阵，将每个点从模型转换为世界坐标。  |
| debugShowBoundingVolume | Boolean | `false` | `optional` 指定是否显示此图元的 BoundingVolume， 仅调试使用。 |
| polylines               | Array   | `[]`    | `optional` 指定线集合数组。 数组对象结构为[`vc-primitive-polyline`](./#/zh/primitive/vc-primitive-polyline)组件属性。 |

---

- 参考官方文档：**[PolylineCollection](https://cesium.com/docs/cesiumjs-ref-doc/PolylineCollection.html)**

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
