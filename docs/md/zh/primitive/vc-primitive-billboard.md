# Billboard

`vc-primitive-billboard` 组件用于加载布告板图元，布告板是场景中与视口对齐的图像，只能作为 `vc-collection-primitive-billboard` 的子组件使用。

## 示例

### 加载布告板图元

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-collection-primitive-billboard>
          <vc-primitive-billboard
            :image="image"
            :scale="0.4"
            :show="show"
            :distanceDisplayCondition="distanceDisplayCondition"
            :horizontalOrigin="horizontalOrigin"
            :position="position"
            @click="clicked"
          ></vc-primitive-billboard>
        </vc-collection-primitive-billboard>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
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
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ------------------------ | ------- | ------------------ | ------------------------------------------- |
| alignedAxis | Cartesian3 | `{x: 0, y: 0, z: 0}` | `optional` 指定 billboard 按单位矢量轴旋转参数。**结构：{ x: number, y: number, z: number }** |
| color | Object\|String\|Array | `'white'` | `optional` 指定 billboard 图片的颜色。 |
| disableDepthTestDistance | Number | | `optional` 指定 billboard 的深度检测距离。 |
| distanceDisplayCondition | Object | | `optional` 指定 billboard 的显示条件。. **结构: { near: number, far: number }** |
| eyeOffset | Object | `{x: 0, y: 0, z: 0}` | `optional` 指定 billboard 视角偏移量。 **结构：{ x: number, y: number, z: number }** |
| height | Number | | `optional` 指定 billboard 的高度（像素）。 |
| heightReference | Number | `0` | `optional` 指定 billboard 高度模式。**NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| horizontalOrigin | Number | `0` | `optional` 指定 billboard 水平对齐方式。**CENTER: 0, LEFT: 1, RIGHT: -1** |
| id | \* | | `optional` 指定与 billboard 关联的信息。 |
| image | String\|Object | | `optional` 指定 billboard 加载的的 Image、 URI 或者 Canvas。 |
| pixelOffset | Object | `{x: 0, y: 0}` | `optional` 指定 billboard 像素偏移量。 **结构：{ x: number, y: number }** |
| pixelOffsetScaleByDistance | Object | | `optional` 指定 billboard 偏移量随相机距离改变的参数。**结构：{ near: number, nearValue: number, far: number, farValue: number }** |
| position | Object | | `optional` 指定 billboard 的位置。 **结构：{ lng: number, lat: number, height: number }** |
| rotation | Number | `0` | `optional` 指定 billboard 沿 x 轴方向旋转的角度。 |
| scale | Number | `1.0` | `optional` 指定 billboard 缩放比例。 |
| scaleByDistance | Object | | `optional` 指定 billboard 的缩放显示参数。 **结构： { near: number, nearValue: number, far: number, farValue: number }** |
| show | Boolean | `true` | `optional`指定 billboard 是否显示。 |
| sizeInMeters | Boolean | | `optional` 指定 billboard 的单位是否是米。 |
| translucencyByDistance | Object | | `optional` 指定 billboard 透明度改变参数。 **结构： { near: number, nearValue: number, far: number, farValue: number }** |
| verticalOrigin | Number | `0` | `optional` 指定 billboard 垂直对齐方式。**CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1** |

---

参考官方文档: **[Billboard](https://cesium.com/docs/cesiumjs-ref-doc/Billboard.html)**

## 事件

| 事件名    | 参数                                                | 描述                                                                             |
| --------- | --------------------------------------------------- | -------------------------------------------------------------------------------- |
| ready     | {Cesium, viewer, cesiumObject}                      | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
| mousedown | {button,surfacePosition,target,type,windowPosition} | 鼠标在该布告板上按下时触发。                                                     |
| mouseup   | {button,surfacePosition,target,type,windowPosition} | 鼠标在该布告板上弹起时触发。                                                     |
| click     | {button,surfacePosition,target,type,windowPosition} | 鼠标单击该布告板时触发。                                                         |
| dblclick  | {button,surfacePosition,target,type,windowPosition} | 鼠标左键双击该布告板时触发。                                                     |
| mousemove | {button,surfacePosition,target,type,windowPosition} | 鼠标移动到该布告板时触发。                                                       |

---
