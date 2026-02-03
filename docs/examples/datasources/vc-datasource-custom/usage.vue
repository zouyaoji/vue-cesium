<script setup lang="ts">
import type { VcEntityProps } from 'vue-cesium'
import type { VcReadyObject } from 'vue-cesium/es/utils/types'
import { reactive, ref, watch } from 'vue'

// state
const show = ref(true)
const entity1 = ref(null)
const entity2 = ref(null)
const entity3 = ref(null)
const cylinder1 = ref(null)
const datasourceRefs = ref([])
const datasources = reactive([])
const entities = reactive<VcEntityProps[]>([
  {
    position: [105, 34, 200],
    point: {
      pixelSize: 5,
      color: 'red'
    },
    onMouseover: (e) => {
      console.log(e)
    },
    onClick: (e) => {
      console.log(e)
    }
  },
  {
    position: [105, 36, 300],
    point: {
      pixelSize: 8,
      color: 'yellow'
    }
  },
  {
    position: [105, 37, 400],
    billboard: {
      image: 'https://zouyaoji.top/vue-cesium/favicon.png',
      scale: 0.25
    }
  },
  {
    position: [113, 28.5, 400],
    ellipse: {
      semiMinorAxis: 20000.0,
      semiMajorAxis: 20000.0,
      material: { fabric: { type: 'VcCircleWave', uniforms: { count: 2, color: 'yellow' } } }
    }
  },
  {
    position: [113, 28.5, 400],
    wall: {
      positions: [112.5, 28, 1000, 113, 28, 1000, 113, 29, 1000, 112.5, 29, 1000, 112.5, 29, 1000],
      material: {
        fabric: {
          type: 'VcLineFlow',
          uniforms: { image: 'https://zouyaoji.top/vue-cesium/images/textures/arrow.png', color: 'yellow', repeat: { x: 30, y: 1 }, speed: 10 }
        }
      }
    }
  }
])
const clusterSch = ref(true)
let _viewer
const indicatorRef = ref(null)

// watch
watch(clusterSch, () => {
  _viewer.scene.camera.changed.raiseEvent()
})

// methods
function addPoints(options, flag) {
  if (flag) {
    Cesium.Resource.fetchJson(options.datauri).then((res) => {
      const img = new Image()
      img.src = options.iconOn
      img.onload = () => {
        const datasource = {
          name: options.code,
          clustering: true,
          entities: []
        }
        datasource.entities = res.reduce((pre, cur) => {
          return pre.concat({
            position: [Number(cur.Longitude), Number(cur.Latitude), 1000],
            id: cur.id,
            description: cur.name,
            billboard: {
              width: img.width,
              height: img.height,
              image: options.iconOn,
              scale: 0.5
            },
            onClick: (e) => {
              console.log('asd', e)
            }
          })
        }, [])

        datasources.push(datasource)
      }
    })
  }
  else {
    datasources.length = 0
  }
}
function onClicked(e) {
  console.log(e)
}
function unload() {
  datasourceRefs.value.forEach((datasourceRef) => {
    datasourceRef.unload()
  })
}
function reload() {
  datasourceRefs.value.forEach((datasourceRef) => {
    datasourceRef.reload()
  })
}
function load() {
  datasourceRefs.value.forEach((datasourceRef) => {
    datasourceRef.load()
  })
}
function onViewerReady({ Cesium, viewer }) {
  _viewer = viewer
  // window.viewer = viewer
  const options = {
    id: '1001',
    code: '1001',
    name: 'test',
    iconOn: 'https://zouyaoji.top/vue-cesium/SampleData/points/pic.png',
    giscolor: '#fb7228',
    datauri: 'https://zouyaoji.top/vue-cesium/SampleData/points/custom-data.json'
  }
  addPoints(options, true)
}
function onDatasourceReady({ Cesium, viewer, cesiumObject }: VcReadyObject) {
  // window.cesiumObject = cesiumObject
  const datasource = cesiumObject as Cesium.DataSource
  viewer.zoomTo(datasource)
  // 开启聚合功能
  datasource.clustering.enabled = true
  datasource.clustering.pixelRange = 30
  datasource.clustering.minimumClusterSize = 3
}
function onDatasourceClusterEvent(clusteredEntities, cluster) {
  if (clusterSch.value) {
    cluster.billboard.show = !0
    cluster.label.show = !1
    cluster.billboard.id = cluster.label.id
    cluster.billboard.verticalOrigin = Cesium.VerticalOrigin.CENTER
    clusteredEntities.length >= 300
      ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/300+.png')
      : clusteredEntities.length >= 150
        ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/150+.png')
        : clusteredEntities.length >= 90
          ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/90+.png')
          : clusteredEntities.length >= 30
            ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/30+.png')
            : clusteredEntities.length > 10
              ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/10+.png')
              : (cluster.billboard.image = `https://zouyaoji.top/vue-cesium/SampleData/images/cluser/${clusteredEntities.length}.png`)
  }
  else {
    cluster.label.show = true
    cluster.label.scale = 0.5
    cluster.label.fillColor = Cesium.Color.fromCssColorString('#FFFFFF')
    cluster.label.style = Cesium.LabelStyle.FILL
    cluster.label.font = '30px caption'
    cluster.label.VerticalOrigin = Cesium.VerticalOrigin.BOTTOM
    cluster.label.pixelOffset = new Cesium.Cartesian2(-7, 5)
    cluster.label.disableDepthTestDistance = Number.POSITIVE_INFINITY
    cluster.point.show = true
    // 聚合体属性
    cluster.point.id = cluster.label.id
    cluster.point.color = Cesium.Color.LIGHTSLATEGRAY
    if (clusteredEntities.length >= 100) {
      cluster.point.pixelSize = 38
      cluster.label.pixelOffset = new Cesium.Cartesian2(-12, 5)
    }
    else if (clusteredEntities.length >= 50) {
      cluster.point.pixelSize = 36
    }
    else if (clusteredEntities.length >= 40) {
      cluster.point.pixelSize = 33
    }
    else if (clusteredEntities.length >= 30) {
      cluster.point.pixelSize = 28
    }
    else if (clusteredEntities.length >= 20) {
      cluster.point.pixelSize = 25
    }
    else if (clusteredEntities.length >= 10) {
      cluster.label.pixelOffset = new Cesium.Cartesian2(-6, 4)
      cluster.label.scale = 0.4
      cluster.point.pixelSize = 20
    }
    else if (clusteredEntities.length >= 5) {
      cluster.label.pixelOffset = new Cesium.Cartesian2(-3, 4)
      cluster.label.scale = 0.4
      cluster.point.pixelSize = 15
    }
    else {
      cluster.label.pixelOffset = new Cesium.Cartesian2(-3, 4)
      cluster.label.scale = 0.4
      cluster.point.pixelSize = 13
    }
  }
}
function morphComplete(a, b, c, d) {
  console.log(a, b, c, d)
}
function pickEvt(e) {
  // window.picked = e
  console.log(e)
}
function onMouseover(e) {
  console.log('onMouseover', e)
}
function onMouseout(e) {
  console.log('onMouseout', e)
}
</script>

<template>
  <div class="demo-viewer demo-vc-datasource-custom">
    <vc-viewer scene-mode-picker @ready="onViewerReady">
      <!-- <vc-terrain-provider-cesium></vc-terrain-provider-cesium> -->
      <vc-datasource-custom name="custom" :entities="entities" :loading-event="morphComplete" :show="show" @click="onClicked">
        <vc-entity
          id="This is a billboard"
          ref="entity1"
          :position="[108, 35, 100]"
          :billboard="{
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            show: true,
            pixelOffset: [0, -20],
            eyeOffset: { x: 0, y: 0, z: 0 },
            horizontalOrigin: 0,
            verticalOrigin: 1,
            scale: 0.25,
            color: 'lime',
          }"
          description="Hello VueCesium"
          @click="onClicked"
        />
        <vc-entity ref="entity2" :position="[105, 40, 200000]" description="Hello VueCesium">
          <vc-graphics-cylinder
            ref="cylinder1"
            :length="400000.0"
            :top-radius="200000.0"
            :bottom-radius="200000.0"
            :material="[0, 255, 0, 125]"
            :outline="true"
            outline-rolor="#006400"
          />
        </vc-entity>
        <vc-entity ref="entity3" :position="[105, 30, 200000]" description="Hello VueCesium">
          <vc-graphics-ellipse ref="cylinder1" :semi-minor-axis="200000.0" :semi-major-axis="200000.0" :material="{ fabric: { type: 'VcCircleWave', uniforms: { count: 3 } } }" />
        </vc-entity>
      </vc-datasource-custom>
      <vc-datasource-custom
        v-for="(datasource, index) of datasources"
        :key="index"
        ref="datasourceRefs"
        :show="show"
        :name="datasource.name"
        :entities="datasource.entities"
        @click="onClicked"
        @cluster-event="onDatasourceClusterEvent"
        @ready="onDatasourceReady"
        @mouseover="onMouseover"
        @mouseout="onMouseout"
      />
      <vc-selection-indicator ref="indicatorRef" @pick-evt="pickEvt" />
      <!-- Annotation layer -->
      <vc-layer-imagery :sort-order="20">
        <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
      <vc-layer-imagery :sort-order="10">
        <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
    </vc-viewer>
    <div class="demo-toolbar">
      <el-row>
        <el-button type="danger" round @click="unload">
          Unload
        </el-button>
        <el-button type="danger" round @click="load">
          Load
        </el-button>
        <el-button type="danger" round @click="reload">
          Reload
        </el-button>
        <el-switch v-model="show" active-color="#13ce66" inactive-text="Show/Hide" />
        <el-switch v-model="clusterSch" active-color="#13ce66" inactive-text="Cluster scheme 1" active-text="Cluster scheme 2" />
      </el-row>
    </div>
  </div>
</template>
