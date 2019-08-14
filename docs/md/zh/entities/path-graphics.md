# 路径

`path-graphics` 路径组件，作为`entity`的子组件添加包含路径的实体到场景。描述折线，该折线定义为实体随时间移动而产生的路径。如示例所示。

## 示例

### 添加路径到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer :shouldAnimate="true" :animation="true" :timeline="true" @ready="ready" :terrainProvider="terrainProvider">
        <entity ref="entity" :availability="availability" :position="position1" :orientation="orientation" :description="description" :model.sync="model1" :path.sync="path1">
          <path-graphics :resolution="1" :material="material1" :width="10"></path-graphics>
          <model-graphics :uri="uri1" :minimumPixelSize="64" @ready="subReady"></model-graphics>
        </entity>
      </cesium-viewer>
      <div class="demo-tool">
        <md-button class="md-raised md-accent" @click="viewTopDown">View Top Down</md-button>
        <md-button class="md-raised md-accent" @click="viewSide">View Side</md-button>
        <md-button class="md-raised md-accent" @click="viewAircraft">View Aircraft</md-button>
      </div>
    </div>
  </template>

  <script>
    export default {
      data () {
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
          uri1: 'https://zouyaoji.top/vue-cesium/statics/SampleData/models/CesiumAir/Cesium_Air.gltf',
          start: {},
          stop: {}
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
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
          this.availability =  new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
            start : this.start,
            stop : this.stop
          })])
          this.orientation = new Cesium.VelocityOrientationProperty(this.position1)
          this.material1 =  new Cesium.PolylineGlowMaterialProperty({
            glowPower : 0.1,
            color : Cesium.Color.YELLOW
          })
        },
        subReady (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          viewer.zoomTo(viewer.entities)
        },
        computeCirclularFlight (lon, lat, radius) {
          const {Cesium, viewer} = this.cesiumInstance
          let property = new Cesium.SampledPositionProperty()
          for (let i = 0; i <= 360; i += 45) {
            let radians = Cesium.Math.toRadians(i)
            let time = Cesium.JulianDate.addSeconds(this.start, i, new Cesium.JulianDate());
            let position = Cesium.Cartesian3.fromDegrees(lon + (radius * 1.5 * Math.cos(radians)), lat + (radius * Math.sin(radians)), Cesium.Math.nextRandomNumber() * 500 + 1750)
            property.addSample(time, position)

            //Also create a point for each sample we generate.
            viewer.entities.add({
              position : position,
              point : {
                pixelSize : 8,
                color : Cesium.Color.TRANSPARENT,
                outlineColor : Cesium.Color.YELLOW,
                outlineWidth : 3
              }
            })
          }
          return property
        },
        viewTopDown () {
          const {Cesium, viewer} = this.cesiumInstance
          viewer.trackedEntity = undefined
          viewer.zoomTo(viewer.entities, new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90)))
        },
        viewSide () {
          const {Cesium, viewer} = this.cesiumInstance
          viewer.trackedEntity = undefined
          viewer.zoomTo(viewer.entities, new Cesium.HeadingPitchRange(Cesium.Math.toRadians(-90), Cesium.Math.toRadians(-15), 7500))
        },
        viewAircraft () {
          const {Cesium, viewer} = this.cesiumInstance
          viewer.trackedEntity = this.$refs.entity.cesiumObject
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <cesium-viewer
      :shouldAnimate="true"
      :animation="true"
      :timeline="true"
      @ready="ready"
      :terrainProvider="terrainProvider"
    >
      <entity
        ref="entity"
        :availability="availability"
        :position="position1"
        :orientation="orientation"
        :description="description"
        :model.sync="model1"
        :path.sync="path1"
      >
        <path-graphics :resolution="1" :material="material1" :width="10"></path-graphics>
        <model-graphics :uri="uri1" :minimumPixelSize="64" @ready="subReady"></model-graphics>
      </entity>
    </cesium-viewer>
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
        uri1: 'https://zouyaoji.top/vue-cesium/statics/SampleData/models/CesiumAir/Cesium_Air.gltf',
        start: {},
        stop: {}
      }
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
      subReady(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        viewer.zoomTo(viewer.entities)
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

          //Also create a point for each sample we generate.
          viewer.entities.add({
            position: position,
            point: {
              pixelSize: 8,
              color: Cesium.Color.TRANSPARENT,
              outlineColor: Cesium.Color.YELLOW,
              outlineWidth: 3
            }
          })
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
        viewer.zoomTo(
          viewer.entities,
          new Cesium.HeadingPitchRange(Cesium.Math.toRadians(-90), Cesium.Math.toRadians(-15), 7500)
        )
      },
      viewAircraft() {
        const { Cesium, viewer } = this.cesiumInstance
        viewer.trackedEntity = this.$refs.entity.cesiumObject
      }
    }
  }
</script>
```

## 属性

| 属性名                   | 类型                  | 默认值    | 描述                                                                                      |
| ------------------------ | --------------------- | --------- | ----------------------------------------------------------------------------------------- |
| show                     | Boolean               | `true`    | `optional` 指定 path 是否显示。                                                           |
| leadTime                 | Number                |           | `optional` 指定 path 前面要显示的秒数。                                                   |
| trailTime                | Number                |           | `optional` 指定 path 后面要显示的秒数。                                                   |
| width                    | Number                | `1.0`     | `optional` 指定 path 像素宽度。                                                           |
| resolution               | Number                | `60`      | `optional` 指定 path 步进最大秒数。                                                       |
| material                 | Object\|String\|Array | `'WHITE'` | `optional` 指定 path 材质。                                                               |
| distanceDisplayCondition | Object                |           | `optional` 指定 path 随相机距离改变是否显示参数。 **结构：{ near: number, far: number }** |

---

- 官方文档 [PathGraphics](https://cesiumjs.org/Cesium/Build/Documentation/PathGraphics.html)

## 事件

| 事件名            | 参数             | 描述                                                |
| ----------------- | ---------------- | --------------------------------------------------- |
| ready             | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
| definitionChanged |                  | 每当更改或修改属性或子属性时触发该事件。            |
