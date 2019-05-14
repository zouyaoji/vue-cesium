# CesiumTerrainProvider

`cesium-terrain-provider`Use this component to add terrain of type CesiumTerrainProvider. If `url` is empty, the online global terrain is loaded by `Cesium.createWorldTerrain` by default.

## Example

### add a terrain to viewer by CesiumTerrainProvider

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <imagery-layer>
          <bingmaps-imagery-provider url="https://dev.virtualearth.net" bmKey="AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-" mapStyle="Aerial"/>
        </imagery-layer>
        <cesium-terrain-provider/>
      </cesium-viewer>
  </template>
  <script>
    export default {
      data () {
        return {
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          var target = new Cesium.Cartesian3(300770.50872389384, 5634912.131394585, 2978152.2865545116)
          var offset = new Cesium.Cartesian3(6344.974098678562, -793.3419798081741, 2499.9508860763162)
          viewer.camera.lookAt(target, offset)
          viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <cesium-viewer @ready="ready">
      <imagery-layer>
        <bingmaps-imagery-provider url="https://dev.virtualearth.net" bmKey="AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-" mapStyle="Aerial"/>
      </imagery-layer>
      <cesium-terrain-provider/>
    </cesium-viewer>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        var target = new Cesium.Cartesian3(300770.50872389384, 5634912.131394585, 2978152.2865545116)
        var offset = new Cesium.Cartesian3(6344.974098678562, -793.3419798081741, 2499.9508860763162)
        viewer.camera.lookAt(target, offset)
        viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
      }
    }
  }
</script>
```

## Instance Properties

Reference official document [CesiumTerrainProvider](https://cesiumjs.org/Cesium/Build/Documentation/CesiumTerrainProvider.html)
<!-- |属性名|类型|默认值|描述|
|------|-----|-----|----|
|url|String||`required`指定服务地址。|
|rectangle|Object||`optional`图层的矩形范围,此矩形限制了影像可见范围。|
|credit|String||`optional`指定服务的描述信息|
|ellipsoid|Object||`optional`参考椭球体。| -->

## Events

|name|parameter|description|
|------|----|----|
|ready|{Cesium, viewer}|Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance.|
