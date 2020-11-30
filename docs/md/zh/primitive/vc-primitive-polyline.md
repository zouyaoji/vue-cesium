# Polyline

`vc-primitive-polyline` 组件用于加载折线图元，只能作为 `vc-collection-primitive-polyline` 的子组件使用。

## 示例

### 加载折线图元

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" scene3DOnly>
        <vc-collection-primitive-polyline @click="clicked">
          <vc-primitive-polyline :positions="positions1" :material="material1" :width="5"></vc-primitive-polyline>
          <vc-primitive-polyline :positions="positions2" :material="material2" :width="10"></vc-primitive-polyline>
          <vc-primitive-polyline @click="clicked" :positions="positions3" :material="material3" :width="10"></vc-primitive-polyline>
        </vc-collection-primitive-polyline>
      </vc-viewer>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
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
    <vc-viewer @ready="ready" scene3DOnly>
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

- 参考官方文档：**[Polyline](https://cesium.com/docs/cesiumjs-ref-doc/Polyline.html)**

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
