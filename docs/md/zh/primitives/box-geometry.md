# Box几何对象

`box-geometry` 矩形几何对象组件。

## 示例

### 添加BoxGeometry到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <cesium-terrain-provider></cesium-terrain-provider>
        <primitive :appearance="appearance">
          <geometry-instance :geometry.sync="geometry" :attributes="attributes" :modelMatrix="modelMatrix">
            <box-geometry :dimensions="dimensions"></box-geometry>
          </geometry-instance>
        </primitive>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          appearance: null,
          attributes: null,
          geometry: null,
          modelMatrix: null,
          dimensions: {x: 400000.0, y: 300000.0, z: 500000.0}
        }
      },
      methods: {
        ready (cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const {Cesium, viewer} = this.cesiumInstance
          this.attributes = {
            color : Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED.withAlpha(0.5))
          }
          this.appearance = new Cesium.PerInstanceColorAppearance({
            closed: true,
            translucent : true
          })
          this.modelMatrix = Cesium.Matrix4.multiplyByTranslation(
            Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105.0, 40.0)),
            new Cesium.Cartesian3(0.0, 0.0, 250000), new Cesium.Matrix4())
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
      <cesium-terrain-provider></cesium-terrain-provider>
      <primitive :appearance="appearance">
        <geometry-instance :geometry.sync="geometry" :attributes="attributes" :modelMatrix="modelMatrix">
          <box-geometry :dimensions="dimensions"></box-geometry>
        </geometry-instance>
      </primitive>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        appearance: null,
        attributes: null,
        geometry: null,
        modelMatrix: null,
        dimensions: {x: 400000.0, y: 300000.0, z: 500000.0}
      }
    },
    methods: {
      ready (cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const {Cesium, viewer} = this.cesiumInstance
        this.attributes = {
          color : Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED.withAlpha(0.5))
        }
        this.appearance = new Cesium.PerInstanceColorAppearance({
          closed: true,
          translucent : true
        })
        this.modelMatrix = Cesium.Matrix4.multiplyByTranslation(
          Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105.0, 40.0)),
          new Cesium.Cartesian3(0.0, 0.0, 250000), new Cesium.Matrix4())
      }
    }
  }
</script>
```

## 属性

参考官方文档 [BoxGeometry](https://cesiumjs.org/Cesium/Build/Documentation/BoxGeometry.html)
<!-- |属性名|类型|默认值|描述|
|------|-----|-----|----|

--- -->

## 事件

|事件名|参数|描述|
|------|----|----|
|ready|{Cesium, viewer}|该组件渲染完毕时触发，返回Cesium类, viewer实例。|
