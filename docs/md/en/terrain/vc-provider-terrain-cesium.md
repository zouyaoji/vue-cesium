# CesiumTerrainProvider

The `vc-provider-terrain-cesium` component is used to load terrain data in Cesium terrain format. If `url` is empty, the CesiumIon online global terrain is loaded by `Cesium.createWorldTerrain` by default.

## Example

### Load terrain data in Cesium terrain format

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-layer-imagery>
          <vc-provider-imagery-bingmaps url="https://dev.virtualearth.net" bmKey="AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-" mapStyle="Aerial"></vc-provider-imagery-bingmaps>
        </vc-layer-imagery>
        <vc-provider-terrain-cesium ref="terrain" :requestWaterMask="requestWaterMask"></vc-provider-terrain-cesium>
      </vc-viewer>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          requestWaterMask: true
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
    <vc-viewer @ready="ready">
      <vc-layer-imagery>
        <vc-provider-imagery-bingmaps
          url="https://dev.virtualearth.net"
          bmKey="AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-"
          mapStyle="Aerial"
        ></vc-provider-imagery-bingmaps>
      </vc-layer-imagery>
      <vc-provider-terrain-cesium ref="terrain" :requestWaterMask="requestWaterMask"></vc-provider-terrain-cesium>
    </vc-viewer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        requestWaterMask: true
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

## Instance Properties

<!-- prettier-ignore -->
| name                 | type    | default | description                                      |
| -------------------- | ------- | ------- | ------------------------------------------------ |
| url                  | String  |         | `required` The URL of the Cesium terrain server. |
| requestVertexNormals | Boolean | `false` | `optional` Flag that indicates if the client should request additional lighting information from the server, in the form of per vertex normals if available.|
| requestWaterMask     | Boolean | `false` | `optional` Flag that indicates if the client should request per tile water masks from the server, if available.|
| requestMetadata      | Boolean | `true`  | `optional` Flag that indicates if the client should request per tile metadata from the server, if available.|
| ellipsoid            | Object  |         | `optional` The ellipsoid. If not specified, the WGS84 ellipsoid is used.|
| credit               | String  |         | `optional` A credit for the data source, which is displayed on the canvas.|

---

Refer to the official document: [CesiumTerrainProvider](https://cesium.com/docs/cesiumjs-ref-doc/CesiumTerrainProvider.html)

## Events

| name       | parameter                      | description                                                                                                       |
| ---------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ready      | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| errorEvent | TileProviderError              | Triggers when the terrain provider encounters an asynchronous error.                                              |

---
