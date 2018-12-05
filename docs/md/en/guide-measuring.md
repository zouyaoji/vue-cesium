# 量算

## 说明

由于 MVVM 数据驱动视图的特性，量算很方便。

## 示例

### 绘制实体线

#### 代码

```html
<template>
  <div class="viewer">
    <div class="demo-tool">
      <md-button class="md-raised md-accent" @click="toggle">{{ editing ? '停止量算' : '开始量算' }}</md-button>
      <md-button class="md-raised md-accent" @click="clear">清除</md-button>
    </div>
    <cesium-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK" @MOUSE_MOVE="MOUSE_MOVE" @RIGHT_CLICK="RIGHT_CLICK">
      <cesium-3dtileset :url="modelUrl"></cesium-3dtileset>
      <polyline-collection>
        <polyline-primitive :positions="polyline.positions" :key="index" v-for="(polyline, index) of polylines"></polyline-primitive>
      </polyline-collection>
      <label-collection>
        <cesium-label :position="label.position" :text="label.text" :key="index" v-for="(label, index) of labels"></cesium-label>
      </label-collection>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        modelUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
        material: undefined,
        editing: false,
        distance: 0,
        labels: [],
        polylines: [],
        options: []
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
        window.viewer = viewer
        window.ppp = this
        this.cesiumInstance = cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
        this.material = new Cesium.PolylineDashMaterialProperty({
          color: Cesium.Color.CYAN
        })
      },
      toggle (name) {
        this.editing = !this.editing
        const { polylines } = this
        if (this.editing){
          polylines.push({positions: []})
        } else {
          if (!polylines.length) {
            return
          }
          const polyline = polylines[polylines.length - 1]
          if (polyline.positions.length === 0) {
            polylines.pop()
          }
        }
      },
      clear () {
        this.polylines = []
        this.labels = []
      },
      LEFT_CLICK (movement) {
        if (!this.editing) {
          return
        }
        const {Cesium, viewer} = this.cesiumInstance
        const { polylines, labels } = this
        !polylines.length && polylines.push({positions: []})
        let cartesian = viewer.scene.pickPosition(movement.position)
        if (!Cesium.defined(cartesian)) {
          return
        }
        polylines[polylines.length - 1].positions.push(cartesian)
        labels.push({
          text: this.distance > 1000 ? (this.distance / 1000).toFixed(2) + 'km' : this.distance.toFixed(2) + 'm',
          position: cartesian
        })
      },
      MOUSE_MOVE (movement) {
        if (!this.editing) {
          return
        }
        const { polylines } = this
        if (!polylines.length) {
          return
        }
        const polyline = polylines[polylines.length - 1]
        if (!polyline.positions.length) {
          return
        }
        const {Cesium, viewer} = this.cesiumInstance
        let cartesian = viewer.scene.pickPosition(movement.endPosition)
        if (!Cesium.defined(cartesian)) {
          return
        }
        if (polyline.positions.length === 1) {
          polyline.positions.push(cartesian)
        }
        this.$set(polyline.positions, polyline.positions.length - 1, cartesian)
        this.distance = this.getDistance(polyline.positions)
      },
      RIGHT_CLICK (movement) {
        if (!this.editing) {
          return
        }
        const { polylines,labels } = this
        if(!polylines.length) {
          return
        }
        let cartesian = viewer.scene.pickPosition(movement.position)
        if (!Cesium.defined(cartesian)) {
          return
        }
        const polyline = polylines[polylines.length - 1]
        polyline.positions.pop()
        polyline.positions.push(cartesian)
        labels.push({
          text: this.distance > 1000 ? (this.distance / 1000).toFixed(2) + 'km' : this.distance.toFixed(2) + 'm',
          position: cartesian
        })
        if (polylines.length) {
          polylines.push({positions: []})
        }
      },
      getDistance (positions) {
        const { Cesium } = this.cesiumInstance
        let distance = 0
        for (let i = 0; i < positions.length - 1; i++) {
          let s = Cesium.Cartesian3.distance(positions[i], positions[i + 1])
          distance = distance + s
        }
        return distance
      }
    }
  }
</script>
```

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <div class="demo-tool">
        <md-button class="md-raised md-accent" @click="toggle">{{ editing ? '停止量算' : '开始量算' }}</md-button>
        <md-button class="md-raised md-accent" @click="clear">清除</md-button>
      </div>
      <cesium-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK" @MOUSE_MOVE="MOUSE_MOVE" @RIGHT_CLICK="RIGHT_CLICK">
        <cesium-3dtileset :url="modelUrl"></cesium-3dtileset>
        <polyline-collection>
          <polyline-primitive :positions="polyline.positions" :key="index" v-for="(polyline, index) of polylines"></polyline-primitive>
        </polyline-collection>
        <label-collection>
          <cesium-label :position="label.position" :text="label.text" :key="index" v-for="(label, index) of labels"></cesium-label>
        </label-collection>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          modelUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
          material: undefined,
          editing: false,
          distance: 0,
          labels: [],
          polylines: [],
          options: []
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          window.viewer = viewer
          window.ppp = this
          this.cesiumInstance = cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
          this.material = new Cesium.PolylineDashMaterialProperty({
            color: Cesium.Color.CYAN
          })
        },
        toggle (name) {
          this.editing = !this.editing
          const { polylines } = this
          if (this.editing){
            polylines.push({positions: []})
          } else {
            if (!polylines.length) {
              return
            }
            const polyline = polylines[polylines.length - 1]
            if (polyline.positions.length === 0) {
              polylines.pop()
            }
          }
        },
        clear () {
          this.polylines = []
          this.labels = []
        },
        LEFT_CLICK (movement) {
          if (!this.editing) {
            return
          }
          const {Cesium, viewer} = this.cesiumInstance
          const { polylines, labels } = this
          !polylines.length && polylines.push({positions: []})
          let cartesian = viewer.scene.pickPosition(movement.position)
          if (!Cesium.defined(cartesian)) {
            return
          }
          polylines[polylines.length - 1].positions.push(cartesian)
          labels.push({
            text: this.distance > 1000 ? (this.distance / 1000).toFixed(2) + 'km' : this.distance.toFixed(2) + 'm',
            position: cartesian
          })
        },
        MOUSE_MOVE (movement) {
          if (!this.editing) {
            return
          }
          const { polylines } = this
          if (!polylines.length) {
            return
          }
          const polyline = polylines[polylines.length - 1]
          if (!polyline.positions.length) {
            return
          }
          const {Cesium, viewer} = this.cesiumInstance
          let cartesian = viewer.scene.pickPosition(movement.endPosition)
          if (!Cesium.defined(cartesian)) {
            return
          }
          if (polyline.positions.length === 1) {
            polyline.positions.push(cartesian)
          }
          this.$set(polyline.positions, polyline.positions.length - 1, cartesian)
          this.distance = this.getDistance(polyline.positions)
        },
        RIGHT_CLICK (movement) {
          if (!this.editing) {
            return
          }
          const { polylines,labels } = this
          if(!polylines.length) {
            return
          }
          let cartesian = viewer.scene.pickPosition(movement.position)
          if (!Cesium.defined(cartesian)) {
            return
          }
          const polyline = polylines[polylines.length - 1]
          polyline.positions.pop()
          polyline.positions.push(cartesian)
          labels.push({
            text: this.distance > 1000 ? (this.distance / 1000).toFixed(2) + 'km' : this.distance.toFixed(2) + 'm',
            position: cartesian
          })
          if (polylines.length) {
            polylines.push({positions: []})
          }
        },
        getDistance (positions) {
          const { Cesium } = this.cesiumInstance
          let distance = 0
          for (let i = 0; i < positions.length - 1; i++) {
            let s = Cesium.Cartesian3.distance(positions[i], positions[i + 1])
            distance = distance + s
          }
          return distance
        }
      }
    }
  </script>
</doc-preview>