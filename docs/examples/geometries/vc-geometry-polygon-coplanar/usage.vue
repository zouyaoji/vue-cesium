<script setup lang="ts">
import type { VcGeometryInstanceProps, VcGeometryPolygonCoplanarOutlineRef, VcGeometryPolygonCoplanarRef } from 'vue-cesium'
import type { VcAppearance, VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types'
import { onMounted, ref, shallowRef } from 'vue'

const geometryRef = shallowRef<VcGeometryPolygonCoplanarRef>()
const geometryOutlineRef = shallowRef<VcGeometryPolygonCoplanarOutlineRef>()
const appearance = shallowRef<VcAppearance>()
const attributes = shallowRef<VcGeometryInstanceProps['attributes']>()
const attributesOutline = shallowRef<VcGeometryInstanceProps['attributes']>()
const outline = ref(true)
const polygonHierarchy = [
  { lng: 110, lat: 33.5, height: 0 },
  { lng: 110, lat: 33.5, height: 200000 },
  { lng: 115, lat: 33.5, height: 200000 },
  { lng: 115, lat: 33.5, height: 0 }
]

const onClicked = (e: VcPickEvent) => console.log(e)

function unload() {
  geometryRef.value?.unload()
  geometryOutlineRef.value?.unload()
}

function reload() {
  geometryRef.value?.reload()
  geometryOutlineRef.value?.reload()
}

function load() {
  geometryRef.value?.load()
  geometryOutlineRef.value?.load()
}

function onViewerReady({ Cesium, viewer }: VcReadyObject) {
  const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance } = Cesium
  attributes.value = {
    color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
  }
  attributesOutline.value = {
    color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
  }
  appearance.value = new PerInstanceColorAppearance({ flat: true })
}

onMounted(() => {
  Promise.all([geometryRef.value?.creatingPromise, geometryOutlineRef.value?.creatingPromise]).then((geometries) => {
    const boundingSpheres: Cesium.BoundingSphere[] = geometries
      .map((cur: VcReadyObject | undefined) => {
        if (!cur?.cesiumObject)
          return null
        const geometry = (cur.cesiumObject.constructor as unknown as {
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
  })
})
</script>

<template>
  <el-row class="demo-viewer demo-vc-geometry-polygon-coplanar">
    <vc-viewer @ready="onViewerReady">
      <vc-primitive :appearance="appearance" @click="onClicked">
        <vc-geometry-instance :attributes="attributes">
          <vc-geometry-polygon-coplanar ref="geometryRef" :polygon-hierarchy="polygonHierarchy" />
        </vc-geometry-instance>
      </vc-primitive>
      <vc-primitive v-if="outline" :appearance="appearance" @click="onClicked">
        <vc-geometry-instance :attributes="attributesOutline">
          <vc-geometry-polygon-coplanar-outline ref="geometryOutlineRef" :polygon-hierarchy="polygonHierarchy" />
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
