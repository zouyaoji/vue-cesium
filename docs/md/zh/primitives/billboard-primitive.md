# 布告板图元

`billboard-primitive` 用于添加布告板， 通过`billboard-collection`组件来加载它。

## 示例

### 添加布告板图元到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <billboard-collection>
          <billboard-primitive
            :image="image"
            :scale="0.4"
            :show="show"
            :distanceDisplayCondition="distanceDisplayCondition"
            :horizontalOrigin="horizontalOrigin"
            :position="position"
            ></billboard-primitive>
          </billboard-collection>
      </cesium-viewer>
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
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <cesium-viewer @ready="ready">
      <billboard-collection>
        <billboard-primitive
          :image="image"
          :scale="0.4"
          :show="show"
          :distanceDisplayCondition="distanceDisplayCondition"
          :horizontalOrigin="horizontalOrigin"
          :position="position"
        ></billboard-primitive>
      </billboard-collection>
    </cesium-viewer>
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

参考官方文档 [Billboard](https://cesium.com/docs/cesiumjs-ref-doc/Billboard.html)。

## 事件

| 事件名 | 参数             | 描述                                                |
| ------ | ---------------- | --------------------------------------------------- |
| ready  | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
