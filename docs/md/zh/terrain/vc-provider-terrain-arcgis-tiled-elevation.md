# ArcGISTiledElevationTerrainProvider

`vc-provider-terrain-arcgis-tiled-elevation` 组件用于加载 ArcGISTiledElevation 格式的地形。

## 示例

### 加载 ArcGISTiledElevation 格式地形

#### 预览

<doc-preview>
   <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-layer-imagery>
          <vc-provider-imagery-bingmaps url="https://dev.virtualearth.net" bmKey="AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-" mapStyle="Aerial"></vc-provider-imagery-bingmaps>
        </vc-layer-imagery>
        <vc-provider-terrain-arcgis-tiled-elevation :url="terrainUrl"></vc-provider-terrain-arcgis-tiled-elevation>
      </vc-viewer>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          terrainUrl: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'
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

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-layer-imagery>
        <vc-provider-imagery-bingmaps
          url="https://dev.virtualearth.net"
          bmKey="AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-"
          mapStyle="Aerial"
        ></vc-provider-imagery-bingmaps>
      </vc-layer-imagery>
      <vc-provider-terrain-arcgis-tiled-elevation :url="terrainUrl"></vc-provider-terrain-arcgis-tiled-elevation>
    </vc-viewer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        terrainUrl: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        var target = new Cesium.Cartesian3(300770.50872389384, 5634912.131394585, 2978152.2865545116)
        var offset = new Cesium.Cartesian3(6344.974098678562, -793.3419798081741, 2499.9508860763162)
        viewer.camera.lookAt(target, offset)
        viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
      }
    }
  }
</script>
```

## 属性

| 属性名    | 类型           | 默认值 | 描述                          |
| --------- | -------------- | ------ | ----------------------------- |
| url       | String\|Object |        | `required` 指定服务地址。     |
| token     | String         |        | `optional` 指定服务授权令牌。 |
| ellipsoid | Object         |        | `optional` 指定参考椭球体。   |

---

参考官方文档： [ArcGISTiledElevationTerrainProvider](https://cesium.com/docs/cesiumjs-ref-doc/ArcGISTiledElevationTerrainProvider.html)

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |
