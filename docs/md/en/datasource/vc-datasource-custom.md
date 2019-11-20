# CustomDataSource

The `vc-datasource-custom` component is used to load a dataSource which can be used to manually manage a group of entities.

## Example

### Load a CustomDataSource with `vc-datasource-custom`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-datasource-custom name="custom">
          <vc-entity ref="entity1" :position="position" :billboard="billboard" :description="description" :id="id"> </vc-entity>
          <vc-entity ref="enttiy2" :position="position1" :description="description" :cylinder.sync="cylinder1">
            <vc-graphics-cylinder
              ref="cylinder"
              :length="400000.0"
              :topRadius="200000.0"
              :bottomRadius="200000.0"
              :material="material1"
              :outline="true"
              :outlineColor="outlineColor1"
            ></vc-graphics-cylinder>
          </vc-entity>
          <vc-entity :position="position2" :description="description" :cylinder.sync="cylinder2">
            <vc-graphics-cylinder
              :length="400000.0"
              :topRadius="0.0"
              :bottomRadius="200000.0"
              :material="material2"
              @ready="subReady"
            ></vc-graphics-cylinder>
          </vc-entity>
        </vc-datasource-custom>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          show: true,
          id: 'This is a billboard',
          description: 'Hello Vue Cesium',
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          position: { lng: 108, lat: 35, height: 100 },
          billboard: {},
          description: 'Hello Vue Cesium',
          cylinder1: {},
          position1: { lng: 105.0, lat: 40.0, height: 200000.0 },
          outlineColor1: 'DARK_GREEN',
          material1: {},

          cylinder2: {},
          position2: { lng: 110.0, lat: 40.0, height: 200000.0 },
          material2: 'RED'
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.material1 = Cesium.Color.GREEN.withAlpha(0.5)
          this.billboard = new Cesium.BillboardGraphics({
            image: 'https://zouyaoji.top/vue-cesium/favicon.png', // default: undefined
            show: true, // default
            pixelOffset: new Cesium.Cartesian2(0, -50), // default: (0, 0)
            eyeOffset: new Cesium.Cartesian3(0.0, 0.0, 0.0), // default
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER, // default
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // default: CENTER
            scale: 0.5, // default: 1.0
            color: Cesium.Color.LIME, // default: WHITE
            // rotation: Cesium.Math.PI_OVER_FOUR, // default: 0.0
            alignedAxis: Cesium.Cartesian3.ZERO // default
          })
        },
        subReady(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          viewer.zoomTo(viewer.dataSources.get(0))
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
      <vc-datasource-custom name="custom">
        <vc-entity ref="entity1" :position="position" :billboard="billboard" :description="description" :id="id"> </vc-entity>
        <vc-entity ref="enttiy2" :position="position1" :description="description" :cylinder.sync="cylinder1">
          <vc-graphics-cylinder
            ref="cylinder"
            :length="400000.0"
            :topRadius="200000.0"
            :bottomRadius="200000.0"
            :material="material1"
            :outline="true"
            :outlineColor="outlineColor1"
          ></vc-graphics-cylinder>
        </vc-entity>
        <vc-entity :position="position2" :description="description" :cylinder.sync="cylinder2">
          <vc-graphics-cylinder
            :length="400000.0"
            :topRadius="0.0"
            :bottomRadius="200000.0"
            :material="material2"
            @ready="subReady"
          ></vc-graphics-cylinder>
        </vc-entity>
      </vc-datasource-custom>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        id: 'This is a billboard',
        description: 'Hello Vue Cesium',
        image: 'https://zouyaoji.top/vue-cesium/favicon.png',
        position: { lng: 108, lat: 35, height: 100 },
        billboard: {},
        description: 'Hello Vue Cesium',
        cylinder1: {},
        position1: { lng: 105.0, lat: 40.0, height: 200000.0 },
        outlineColor1: 'DARK_GREEN',
        material1: {},

        cylinder2: {},
        position2: { lng: 110.0, lat: 40.0, height: 200000.0 },
        material2: 'RED'
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.material1 = Cesium.Color.GREEN.withAlpha(0.5)
        this.billboard = new Cesium.BillboardGraphics({
          image: 'https://zouyaoji.top/vue-cesium/favicon.png', // default: undefined
          show: true, // default
          pixelOffset: new Cesium.Cartesian2(0, -50), // default: (0, 0)
          eyeOffset: new Cesium.Cartesian3(0.0, 0.0, 0.0), // default
          horizontalOrigin: Cesium.HorizontalOrigin.CENTER, // default
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // default: CENTER
          scale: 0.5, // default: 1.0
          color: Cesium.Color.LIME, // default: WHITE
          // rotation: Cesium.Math.PI_OVER_FOUR, // default: 0.0
          alignedAxis: Cesium.Cartesian3.ZERO // default
        })
      },
      subReady(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        viewer.zoomTo(viewer.dataSources.get(0))
      }
    }
  }
</script>
```

## Instance Properties

| name | type    | default | description                                                          |
| ---- | ------- | ------- | -------------------------------------------------------------------- |
| data | String  |         | `optional` Gets or sets a human-readable name for this instance.     |
| show | Boolean | `true`  | `optional` Gets whether or not this data source should be displayed. |

---

- Refer to the official document: [CustomDataSource](https://cesium.com/docs/cesiumjs-ref-doc/CustomDataSource.html)

## Events

| name         | parameter                      | description                                                                                                       |
| ------------ | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ready        | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| changedEvent |                                | Triggers when the underlying data changes.                                                                        |
| errorEvent   |                                | Triggers if an error is encountered during processing.                                                            |
| loadingEvent |                                | Triggers the data source either starts or stops loading.                                                          |

---
