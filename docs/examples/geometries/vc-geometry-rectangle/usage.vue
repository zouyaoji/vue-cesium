<script setup lang="ts">
import type { VcGeometryInstanceProps, VcGeometryRectangleOutlineRef, VcGeometryRectangleRef } from 'vue-cesium'
import type { VcAppearance, VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types'
import { onMounted, ref, shallowRef } from 'vue'

const geometryRef = ref<VcGeometryRectangleRef>(null)
const geometryOutlineRef = ref<VcGeometryRectangleOutlineRef>(null)
const appearance = shallowRef<VcAppearance>()
const appearanceOutline = shallowRef<VcAppearance>()
const attributesOutline = shallowRef<VcGeometryInstanceProps['attributes']>()
const outline = ref(true)
const vertexFormat = shallowRef<Cesium.VertexFormat>()

const rectangle = { west: -100, south: 10, east: -90, north: 40 }
// methods
function onClicked(e: VcPickEvent) {
  console.log(e)
}
function unload() {
  geometryRef.value.unload()
  geometryOutlineRef.value.unload()
}
function reload() {
  geometryRef.value.reload()
  geometryOutlineRef.value.reload()
}
function load() {
  geometryRef.value.load()
  geometryOutlineRef.value.load()
}

function onViewerReady({ Cesium, viewer }: VcReadyObject) {
  console.log('onViewerReady')
  const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance, Cartesian3, MaterialAppearance } = Cesium
  attributesOutline.value = {
    color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.8)
  }
  appearance.value = new MaterialAppearance()
  appearanceOutline.value = new PerInstanceColorAppearance({
    flat: true
  })
  // vertexFormat.value = MaterialAppearance.vertexFormat
}

onMounted(() => {
  Promise.all([geometryRef.value.creatingPromise, geometryOutlineRef.value.creatingPromise]).then((geometries) => {
    const boundingSpheres: Cesium.BoundingSphere[] = geometries
      .map((cur: VcReadyObject | undefined) => {
        if (!cur?.cesiumObject)
          return null
        const geometry = ((cur.cesiumObject.constructor as unknown) as {
          createGeometry: (geom: unknown) => { boundingSphere?: Cesium.BoundingSphere } | undefined
        }).createGeometry(cur.cesiumObject)
        if (!geometry?.boundingSphere)
          return null
        return geometry.boundingSphere
      })
      .filter((bs): bs is Cesium.BoundingSphere => bs !== null)

    if (boundingSpheres.length > 0) {
      const boundingSphereUnion = boundingSpheres.reduce((prev, cur) => Cesium.BoundingSphere.union(prev, cur))
      geometries[0]?.viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)
    }
    console.log('All geometries are loaded.')
  })
})
</script>

<template>
  <el-row class="demo-viewer demo-vc-geometry-rectangle">
    <vc-viewer @ready="onViewerReady">
      <vc-primitive :appearance="appearance" @click="onClicked">
        <vc-geometry-instance>
          <vc-geometry-rectangle ref="geometryRef" :rectangle="rectangle" :vertex-format="vertexFormat" />
        </vc-geometry-instance>
      </vc-primitive>
      <vc-primitive v-if="outline" :appearance="appearanceOutline" @click="onClicked">
        <vc-geometry-instance :attributes="attributesOutline">
          <vc-geometry-rectangle-outline ref="geometryOutlineRef" :rectangle="rectangle" />
        </vc-geometry-instance>
      </vc-primitive>
    </vc-viewer>
    <el-row class="demo-toolbar">
      <el-button type="danger" round @click="unload">
        Unload
      </el-button>
      <el-button type="danger" round @click="load">
        Load
      </el-button>
      <el-button type="danger" round @click="reload">
        Reload
      </el-button>
      <el-switch v-model="outline" active-color="#13ce66" inactive-text="Outline" />
    </el-row>
  </el-row>
</template>
