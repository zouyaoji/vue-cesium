<template lang="markdown">

# 绘制

## 说明

由于 MVVM 数据驱动视图的特性，绘制很方便。

## 示例

### 绘制实体线

#### 代码

```html
<template>
  <div class="viewer">
      <div class="demo-tool">
        <md-button class="md-raised md-accent" @click="toggle">{{ polyline.editing ? '停止绘制' : '开始绘制' }}</md-button>
        <md-button class="md-raised md-accent" @click="clear">清除</md-button>
      </div>
    <cesium-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK" @MOUSE_MOVE="MOUSE_MOVE" @RIGHT_CLICK="RIGHT_CLICK">
      <cesium-3dtileset :url="modelUrl"></cesium-3dtileset>
      <polyline-entity :positions="path" :key="index" :material="material" v-for="(path, index) of polyline.paths"
        :width="5"></polyline-entity>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        modelUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
        material: undefined,
        polyline: {
          editing: false,
          paths: []
        },
        options: [],
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
        this.polyline.editing = !this.polyline.editing
      },
      clear () {
        const { viewer} = this.cesiumInstance
        viewer.entities.removeAll()
      },
      LEFT_CLICK (movement) {
        if (!this.polyline.editing) {
          return
        }          
        const {Cesium, viewer} = this.cesiumInstance
        const {paths} = this.polyline
        !paths.length && paths.push([])
        let cartesian = viewer.scene.pickPosition(movement.position)
        if (!Cesium.defined(cartesian)) {
          return
        }
        paths[paths.length - 1].push(cartesian)
      },
      MOUSE_MOVE (movement) {
        if (!this.polyline.editing) {
          return
        }
        const {paths} = this.polyline
        if (!paths.length) {
          return
        }
        const path = paths[paths.length - 1]
        if (!path.length) {
          return
        }
        const {Cesium, viewer} = this.cesiumInstance
        let cartesian = viewer.scene.pickPosition(movement.endPosition)
        if (!Cesium.defined(cartesian)) {
          return
        }
        if (path.length === 1) {
          path.push(cartesian)
        }
        this.$set(path, path.length - 1, cartesian)
      },
      RIGHT_CLICK (movement) {
        if (!this.polyline.editing) {
          return
        }
        const {paths} = this.polyline
        if(!paths.length) {
          paths.push([])
        }
        const path = paths[paths.length - 1]
        path.pop()
        if (path.length) {
          paths.push([])
        }
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
          <md-button class="md-raised md-accent" @click="toggle">{{ polyline.editing ? '停止绘制' : '开始绘制' }}</md-button>
          <md-button class="md-raised md-accent" @click="clear">清除</md-button>
        </div>
      <cesium-viewer @ready="ready" @LEFT_CLICK="LEFT_CLICK" @MOUSE_MOVE="MOUSE_MOVE" @RIGHT_CLICK="RIGHT_CLICK">
        <cesium-3dtileset :url="modelUrl"></cesium-3dtileset>
        <polyline-entity :positions="path" :key="index" :material="material" v-for="(path, index) of polyline.paths"
          :width="5"></polyline-entity>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          modelUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
          material: undefined,
          polyline: {
            editing: false,
            paths: []
          },
          options: [],
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
          this.polyline.editing = !this.polyline.editing
        },
        clear () {
          const { viewer} = this.cesiumInstance
          viewer.entities.removeAll()
        },
        LEFT_CLICK (movement) {
          if (!this.polyline.editing) {
            return
          }          
          const {Cesium, viewer} = this.cesiumInstance
          const {paths} = this.polyline
          !paths.length && paths.push([])
          let cartesian = viewer.scene.pickPosition(movement.position)
          if (!Cesium.defined(cartesian)) {
            return
          }
          paths[paths.length - 1].push(cartesian)
        },
        MOUSE_MOVE (movement) {
          if (!this.polyline.editing) {
            return
          }
          const {paths} = this.polyline
          if (!paths.length) {
            return
          }
          const path = paths[paths.length - 1]
          if (!path.length) {
            return
          }
          const {Cesium, viewer} = this.cesiumInstance
          let cartesian = viewer.scene.pickPosition(movement.endPosition)
          if (!Cesium.defined(cartesian)) {
            return
          }
          if (path.length === 1) {
            path.push(cartesian)
          }
          this.$set(path, path.length - 1, cartesian)
        },
        RIGHT_CLICK (movement) {
          if (!this.polyline.editing) {
            return
          }
          const {paths} = this.polyline
          if(!paths.length) {
            paths.push([])
          }
          const path = paths[paths.length - 1]
          path.pop()
          if (path.length) {
            paths.push([])
          }
        }
      }
    }
  </script>
</doc-preview>