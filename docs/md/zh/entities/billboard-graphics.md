# 布告板

`billboard-graphics` 布告板组件，作为`entity`的子组件添加包含布告板对象的实体到场景。布告板对象描述位于包含实体位置的二维图标，如示例所示。

## 示例

### 添加布告板到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <entity :position="position" :description="description" :id="id" :billboard.sync="billboard">
           <billboard-graphics
            :image="image"
            :scale="0.1"
            :show="show"
            :distanceDisplayCondition="distanceDisplayCondition"
            :horizontalOrigin="horizontalOrigin"
          ></billboard-graphics>
        </entity>
      </cesium-viewer>
      <div class="demo-tool">
        <span>{{ show ? '隐藏' : '显示' }}</span>
        <md-switch v-model="show"></md-switch>
      </div>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          id: 'Hello Vue Cesium',
          description: 'This is a billboard',
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          position: { lng: 90, lat: 40, height: 10000 },
          billboard: {},
          show: true,
          distanceDisplayCondition: { near: 0, far: 20000000 },
          horizontalOrigin: 0
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
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
      <entity :position="position" :description="description" :id="id" :billboard.sync="billboard">
        <billboard-graphics
          :image="image"
          :scale="0.1"
          :show="show"
          :distanceDisplayCondition="distanceDisplayCondition"
        ></billboard-graphics>
      </entity>
    </cesium-viewer>
    <div class="demo-tool">
      <span>{{ show ? '隐藏' : '显示' }}</span>
      <md-switch v-model="show"></md-switch>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: 'This is a billboard',
        description: 'Hello Vue Cesium',
        image: 'https://zouyaoji.top/vue-cesium/favicon.png',
        position: { lng: 90, lat: 40, height: 10000 },
        billboard: {},
        distanceDisplayCondition: { near: 0, far: 20000000 }
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
| -------------------------- | -------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| show | Boolean | `true` | `optional` 指定 billboard 是否显示。 |
| image | String\|Object | | `optional` 指定 billboard 加载的的 Image、 URI 或者 Canvas。 |
| scale | Number | `1.0` | `optional` 指定 billboard 图片的缩放比例。 |
| pixelOffset | Object | `{x: 0, y: 0}` | `optional` 指定 billboard 像素偏移。**结构：{ x: number, y: number }** |
| eyeOffset | Object | `{x: 0, y: 0, z: 0}` | `optional` 指定 billboard 视角偏移。**结构：{ x: number, y: number, z: number }** |
| horizontalOrigin | Number | `0` | `optional` 指定 billboard 水平对齐方式。**CENTER: 0, LEFT: 1, RIGHT: -1** |
| verticalOrigin | Number | `0` | `optional` 指定 billboard 垂直对齐方式。 **CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1** |
| heightReference | Number | `0` | `optional` 指定 billboard 高度模式。 **NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2** |
| color | Object\|String\|Array | `'white'` | `optional` 指定 billboard 图片的颜色。 |
| rotation | Number | `0` | `optional` 指定 billboard 沿 x 轴方向旋转的角度。 |
| alignedAxis | Cartesian3 | `{x: 0, y: 0, z: 0}` | `optional` 指定 billboard 按单位矢量轴旋转参数。**结构：{ x: number, y: number, z: number }** |
| sizeInMeters | Boolean | | `optional` 指定 billboard 的单位是否是米。 |
| width | Number | | `optional` 指定 billboard 的宽度（像素）。 |
| height | Number | | `optional` 指定 billboard 的高度（像素）。 |
| scaleByDistance | Object | | `optional` 指定 billboard 随相机距离缩放的参数。**结构：{ near: number, nearValue: number, far: number, farValue: number }** |
| translucencyByDistance | Object | | `optional` 指定 billboard 随相机距离透明度改变的参数。**结构：{ near: number, nearValue: number, far: number, farValue: number }** |
| pixelOffsetScaleByDistance | Object | | `optional` 指定 billboard 随相机距离像素偏移改变的参数。**结构：{ near: number, nearValue: number, far: number, farValue: number }** |
| imageSubRegion | Object | | `optional` 指定 billboard 的子区域，相对于左下角。 |
| distanceDisplayCondition | Object | | `optional` 指定 billboard 随相机距离改变是否显示参数。**结构：{ near: number, far: number }** |
| disableDepthTestDistance | Number | | `optional` 指定 billboard 深度检测距离。 |

---

- 官方文档 [BillboardGraphics](https://cesiumjs.org/Cesium/Build/Documentation/BillboardGraphics.html)

## 事件

| 事件名            | 参数             | 描述                                                |
| ----------------- | ---------------- | --------------------------------------------------- |
| ready             | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
| definitionChanged |                  | 每当更改或修改属性或子属性时触发该事件。            |
