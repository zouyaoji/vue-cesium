# VcOverviewMap

The `vc-map-overview` component is used to load the eagle eye component. **Note:** To use this component, you need to import `import'vue-cesium/lib/vc-map-overview.css'`. This component is not introduced by default and needs to be introduced separately.

## Example

### Load a VcOverviewMap

#### Priview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer :timeline="timeline" @ready="ready">
        <vc-map-overview></vc-map-overview>
        <vc-layer-imagery>
          <vc-provider-imagery-openstreetmap></vc-provider-imagery-openstreetmap>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          timeline: true,
        }
      },
      methods: {
        ready (cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const {Cesium, viewer} = this.cesiumInstance
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer :timeline="timeline" @ready="ready">
      <vc-map-overview></vc-map-overview>
      <vc-layer-imagery>
        <vc-provider-imagery-openstreetmap></vc-provider-imagery-openstreetmap>
      </vc-layer-imagery>
    </vc-viewer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        timeline: true
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| url | String | `'https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}'` | `optional` Specify the url of the map loaded by the overview control.  |
| width | Number | `150` | `optional` Specify the width of the overview control. |
| height | Number | `150` | `optional` Specify the height of the eagle eye control. |
| anchor | String | `'bottomright'` | `optional` Specify the location of the overview control. `topleft`、`topright`、`bottomleft`、`bottomright` |
| aimingRectOptions | Object | `{ color: '#ff1100', weight: 3 }` | `optional` The designated eagle eye represents the current map range rectangle parameter.|
| shadowRectOptions | Object | `{ color: '#0000AA', weight: 1, opacity: 0, fillOpacity: 0 }` | `optional` Specify the mask parameters of the overview control. |
| toggleDisplay | Boolean | `true` | `optional` Specifies whether the shrink button of the overview control is visible. |

---

## Event

| name          | parameter        | description                                                                                    |
| ------------- | ---------------- | ---------------------------------------------------------------------------------------------- |
| ready         | {Cesium, viewer} | Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance. |

---
