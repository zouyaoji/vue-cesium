# 绘制

## 示例

### 绘制实体线

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK" @MOUSE_MOVE="MOUSE_MOVE" @RIGHT_CLICK="RIGHT_CLICK">
        <cesium-3dtileset ref="tileset" :url="tilesetUrl" @readyPromise="readyPromise"></cesium-3dtileset>
        <entity :key="index" v-for="(polyline, index) of polylines">
          <polyline-graphics :ref="'line'+index" :positions="polyline.positions"  :material="material" :width="5"></polyline-graphics>
        </entity>
      </cesium-viewer>
      <div class="demo-tool">
        <md-button class="md-raised md-accent" @click="toggle">{{ editing ? '停止绘制' : '开始绘制' }}</md-button>
        <md-button class="md-raised md-accent" @click="clear">清除</md-button>
      </div>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          tilesetUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
          material: undefined,
          editing: false,
          polylines: [],
          options: []
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
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
        },
        LEFT_CLICK (movement) {
          if (!this.editing) {
            return
          }
          const {Cesium, viewer} = this.cesiumInstance
          const { polylines } = this
          !polylines.length && polylines.push({positions: []})
          let cartesian = viewer.scene.pickPosition(movement.position)
          if (!Cesium.defined(cartesian)) {
            return
          }
          polylines[polylines.length - 1].positions.push(cartesian)
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
        },
        RIGHT_CLICK (movement) {
          if (!this.editing) {
            return
          }
          const { polylines } = this
          if(!polylines.length) {
            return
          }
          const {viewer} = this.cesiumInstance
          let cartesian = viewer.scene.pickPosition(movement.position)
          if (!Cesium.defined(cartesian)) {
            return
          }
          const polyline = polylines[polylines.length - 1]
          polyline.positions.pop()
          polyline.positions.push(cartesian)
          if (polylines.length) {
            polylines.push({positions: []})
          }
        },
        readyPromise (tileset) {
          this.cesiumInstance.viewer.zoomTo(tileset)
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <cesium-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK" @MOUSE_MOVE="MOUSE_MOVE" @RIGHT_CLICK="RIGHT_CLICK">
      <cesium-3dtileset ref="tileset" :url="tilesetUrl" @readyPromise="readyPromise"></cesium-3dtileset>
      <entity :key="index" v-for="(polyline, index) of polylines">
        <polyline-graphics :ref="'line'+index" :positions="polyline.positions"  :material="material" :width="5"></polyline-graphics>
      </entity>
    </cesium-viewer>
    <div class="demo-tool">
      <md-button class="md-raised md-accent" @click="toggle">{{ editing ? '停止绘制' : '开始绘制' }}</md-button>
      <md-button class="md-raised md-accent" @click="clear">清除</md-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tilesetUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
        material: undefined,
        editing: false,
        polylines: [],
        options: []
      }
    },
    methods: {
      ready (cesiumInstance) {
        const {Cesium, viewer} = cesiumInstance
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
      },
      LEFT_CLICK (movement) {
        if (!this.editing) {
          return
        }
        const {Cesium, viewer} = this.cesiumInstance
        const { polylines } = this
        !polylines.length && polylines.push({positions: []})
        let cartesian = viewer.scene.pickPosition(movement.position)
        if (!Cesium.defined(cartesian)) {
          return
        }
        polylines[polylines.length - 1].positions.push(cartesian)
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
      },
      RIGHT_CLICK (movement) {
        if (!this.editing) {
          return
        }
        const { polylines } = this
        if(!polylines.length) {
          return
        }
        const {viewer} = this.cesiumInstance
        let cartesian = viewer.scene.pickPosition(movement.position)
        if (!Cesium.defined(cartesian)) {
          return
        }
        const polyline = polylines[polylines.length - 1]
        polyline.positions.pop()
        polyline.positions.push(cartesian)
        if (polylines.length) {
          polylines.push({positions: []})
        }
      },
      readyPromise (tileset) {
        this.cesiumInstance.viewer.zoomTo(tileset)
      }
    }
  }
</script>
```
