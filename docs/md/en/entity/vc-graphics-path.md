# PathGraphics

The `vc-graphics-path` component is used to load a path that moves over time. Need to be used as a subcomponent of `vc-entity`.

## Example

### Load PathGraphics with `vc-graphics-path`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer :shouldAnimate="true" :animation="true" :timeline="true" @ready="ready" :terrainProvider="terrainProvider">
        <vc-entity
          ref="entity"
          :availability="availability"
          :position="position1"
          :orientation="orientation"
          :description="description"
          :model.sync="model1"
          :path.sync="path1"
        >
          <vc-graphics-path ref="path" :resolution="1" :material="material1" :width="10"></vc-graphics-path>
          <vc-graphics-model ref="model" :uri="uri1" :minimumPixelSize="64"></vc-graphics-model>
        </vc-entity>
        <vc-entity :key="'entity' + index" :position="position" v-for="(position, index) of positions">
          <vc-graphics-point :pixelSize="8" color="TRANSPARENT" outlineColor="YELLOW" :outlineWidth="3"></vc-graphics-point>
        </vc-entity>
        <vc-layer-imagery>
          <vc-provider-imagery-mapbox mapId="mapbox.streets"></vc-provider-imagery-mapbox>
        </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
        <md-button class="md-raised md-accent" @click="viewTopDown">View Top Down</md-button>
        <md-button class="md-raised md-accent" @click="viewSide">View Side</md-button>
        <md-button class="md-raised md-accent" @click="viewAircraft">View Aircraft</md-button>
      </div>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          cesiumInstance: {},
          description: 'Hello Vue Cesium',
          model1: {},
          path1: {},
          material1: {},
          availability: {},
          position1: {},
          terrainProvider: {},
          orientation: {},
          uri1: './statics/SampleData/models/CesiumAir/Cesium_Air.gltf',
          start: {},
          stop: {},
          positions: []
        }
      },
      mounted() {
        Promise.all([this.$refs.path.createPromise, this.$refs.model.createPromise]).then(
          (instances) => {
            instances[0].viewer.zoomTo(instances[0].viewer.entities)
          }
        )
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.cesiumInstance = cesiumInstance
          this.terrainProvider = Cesium.createWorldTerrain()
          this.position1 = Cesium.Cartesian3.fromDegrees(114.0, 40.0, 1.0)
          //Enable lighting based on sun/moon positions
          viewer.scene.globe.enableLighting = true
          //Enable depth testing so things behind the terrain disappear.
          viewer.scene.globe.depthTestAgainstTerrain = true
          //Set the random number seed for consistent results.
          Cesium.Math.setRandomNumberSeed(3)
          //Set bounds of our simulation time
          this.start = Cesium.JulianDate.fromDate(new Date(2015, 2, 25, 16))
          this.stop = Cesium.JulianDate.addSeconds(this.start, 360, new Cesium.JulianDate())
          viewer.clock.startTime = this.start.clone()
          viewer.clock.stopTime = this.stop.clone()
          viewer.clock.currentTime = this.start.clone()
          viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP //Loop at the end
          viewer.clock.multiplier = 10
          viewer.timeline.zoomTo(this.start, this.stop)
          this.position1 = this.computeCirclularFlight(-112.110693, 36.0994841, 0.03)
          this.availability = new Cesium.TimeIntervalCollection([
            new Cesium.TimeInterval({
              start: this.start,
              stop: this.stop
            })
          ])
          this.orientation = new Cesium.VelocityOrientationProperty(this.position1)
          this.material1 = new Cesium.PolylineGlowMaterialProperty({
            glowPower: 0.1,
            color: Cesium.Color.YELLOW
          })
        },
        computeCirclularFlight(lon, lat, radius) {
          const { Cesium, viewer } = this.cesiumInstance
          let property = new Cesium.SampledPositionProperty()
          for (let i = 0; i <= 360; i += 45) {
            let radians = Cesium.Math.toRadians(i)
            let time = Cesium.JulianDate.addSeconds(this.start, i, new Cesium.JulianDate())
            let position = Cesium.Cartesian3.fromDegrees(
              lon + radius * 1.5 * Math.cos(radians),
              lat + radius * Math.sin(radians),
              Cesium.Math.nextRandomNumber() * 500 + 1750
            )
            property.addSample(time, position)
            this.positions.push(position)
          }
          return property
        },
        viewTopDown() {
          const { Cesium, viewer } = this.cesiumInstance
          viewer.trackedEntity = undefined
          viewer.zoomTo(viewer.entities, new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90)))
        },
        viewSide() {
          const { Cesium, viewer } = this.cesiumInstance
          viewer.trackedEntity = undefined
          viewer.zoomTo(viewer.entities, new Cesium.HeadingPitchRange(Cesium.Math.toRadians(-90), Cesium.Math.toRadians(-15), 7500))
        },
        viewAircraft() {
          const { Cesium, viewer } = this.cesiumInstance
          viewer.trackedEntity = this.$refs.entity.cesiumObject
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer :shouldAnimate="true" :animation="true" :timeline="true" @ready="ready" :terrainProvider="terrainProvider">
      <vc-entity
        ref="entity"
        :availability="availability"
        :position="position1"
        :orientation="orientation"
        :description="description"
        :model.sync="model1"
        :path.sync="path1"
      >
        <vc-graphics-path ref="path" :resolution="1" :material="material1" :width="10"></vc-graphics-path>
        <vc-graphics-model ref="model" :uri="uri1" :minimumPixelSize="64"></vc-graphics-model>
      </vc-entity>
      <vc-entity :key="'entity' + index" :position="position" v-for="(position, index) of positions">
        <vc-graphics-point :pixelSize="8" color="TRANSPARENT" outlineColor="YELLOW" :outlineWidth="3"></vc-graphics-point>
      </vc-entity>
      <vc-layer-imagery>
        <vc-provider-imagery-mapbox mapId="mapbox.streets"></vc-provider-imagery-mapbox>
      </vc-layer-imagery>
    </vc-viewer>
    <div class="demo-tool">
      <md-button class="md-raised md-accent" @click="viewTopDown">View Top Down</md-button>
      <md-button class="md-raised md-accent" @click="viewSide">View Side</md-button>
      <md-button class="md-raised md-accent" @click="viewAircraft">View Aircraft</md-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cesiumInstance: {},
        description: 'Hello Vue Cesium',
        model1: {},
        path1: {},
        material1: {},
        availability: {},
        position1: {},
        terrainProvider: {},
        orientation: {},
        uri1: './statics/SampleData/models/CesiumAir/Cesium_Air.gltf',
        start: {},
        stop: {},
        positions: []
      }
    },
    mounted() {
      Promise.all([this.$refs.path.createPromise, this.$refs.model.createPromise]).then((instances) => {
        instances[0].viewer.zoomTo(instances[0].viewer.entities)
      })
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.cesiumInstance = cesiumInstance
        this.terrainProvider = Cesium.createWorldTerrain()
        this.position1 = Cesium.Cartesian3.fromDegrees(114.0, 40.0, 1.0)
        //Enable lighting based on sun/moon positions
        viewer.scene.globe.enableLighting = true
        //Enable depth testing so things behind the terrain disappear.
        viewer.scene.globe.depthTestAgainstTerrain = true
        //Set the random number seed for consistent results.
        Cesium.Math.setRandomNumberSeed(3)
        //Set bounds of our simulation time
        this.start = Cesium.JulianDate.fromDate(new Date(2015, 2, 25, 16))
        this.stop = Cesium.JulianDate.addSeconds(this.start, 360, new Cesium.JulianDate())
        viewer.clock.startTime = this.start.clone()
        viewer.clock.stopTime = this.stop.clone()
        viewer.clock.currentTime = this.start.clone()
        viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP //Loop at the end
        viewer.clock.multiplier = 10
        viewer.timeline.zoomTo(this.start, this.stop)
        this.position1 = this.computeCirclularFlight(-112.110693, 36.0994841, 0.03)
        this.availability = new Cesium.TimeIntervalCollection([
          new Cesium.TimeInterval({
            start: this.start,
            stop: this.stop
          })
        ])
        this.orientation = new Cesium.VelocityOrientationProperty(this.position1)
        this.material1 = new Cesium.PolylineGlowMaterialProperty({
          glowPower: 0.1,
          color: Cesium.Color.YELLOW
        })
      },
      computeCirclularFlight(lon, lat, radius) {
        const { Cesium, viewer } = this.cesiumInstance
        let property = new Cesium.SampledPositionProperty()
        for (let i = 0; i <= 360; i += 45) {
          let radians = Cesium.Math.toRadians(i)
          let time = Cesium.JulianDate.addSeconds(this.start, i, new Cesium.JulianDate())
          let position = Cesium.Cartesian3.fromDegrees(
            lon + radius * 1.5 * Math.cos(radians),
            lat + radius * Math.sin(radians),
            Cesium.Math.nextRandomNumber() * 500 + 1750
          )
          property.addSample(time, position)
          this.positions.push(position)
        }
        return property
      },
      viewTopDown() {
        const { Cesium, viewer } = this.cesiumInstance
        viewer.trackedEntity = undefined
        viewer.zoomTo(viewer.entities, new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90)))
      },
      viewSide() {
        const { Cesium, viewer } = this.cesiumInstance
        viewer.trackedEntity = undefined
        viewer.zoomTo(viewer.entities, new Cesium.HeadingPitchRange(Cesium.Math.toRadians(-90), Cesium.Math.toRadians(-15), 7500))
      },
      viewAircraft() {
        const { Cesium, viewer } = this.cesiumInstance
        viewer.trackedEntity = this.$refs.entity.cesiumObject
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| show | Boolean | `true` | `optional` A boolean Property specifying the visibility of the path. |
| leadTime | Object | | `optional` A Property specifying the number of seconds behind the object to show. |
| trailTime | Object | | `optional` A Property specifying the number of seconds in front of the object to show. |
| width | Number | `1.0` | `optional` A numeric Property specifying the width in pixels. |
| resolution | Number | `60` | `optional` A numeric Property specifying the maximum number of seconds to step when sampling the position. |
| material | Object\|String\|Array | `'WHITE'` | `optional` A Property specifying the material used to draw the path. |
| distanceDisplayCondition | Object | | `optional` A Property specifying at what distance from the camera that this path will be displayed. **structure: { near: number, far: number }** |

---

- Refer to the official document: **[PathGraphics](https://cesium.com/docs/cesiumjs-ref-doc/PathGraphics.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| definitionChanged | | Triggers whenever a property or sub-property is changed or modified. |

---
