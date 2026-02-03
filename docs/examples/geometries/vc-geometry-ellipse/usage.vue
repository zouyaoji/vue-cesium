<script setup lang="ts">
import type { VcGeometryEllipseOutlineRef, VcGeometryEllipseRef, VcGeometryInstanceProps } from 'vue-cesium'
import type { VcAppearance, VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types'
import { onMounted, ref, shallowRef } from 'vue'

const geometryRef = shallowRef<VcGeometryEllipseRef>()
const geometryOutlineRef = shallowRef<VcGeometryEllipseOutlineRef>()
const appearance = shallowRef<VcAppearance>()
const attributes = shallowRef<VcGeometryInstanceProps['attributes']>()
const attributesOutline = shallowRef<VcGeometryInstanceProps['attributes']>()
const outline = ref(true)

function onClicked(e: VcPickEvent) {
  console.log(e)
}

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
  appearance.value = new PerInstanceColorAppearance({
    flat: true
  })
}

onMounted(() => {
  Promise.all([geometryRef.value?.creatingPromise, geometryOutlineRef.value?.creatingPromise]).then((geometries) => {
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
  })
})
</script>

<template>
  <el-row class="demo-viewer demo-vc-geometry-ellipse">
    <vc-viewer @ready="onViewerReady">
      <vc-primitive :appearance="appearance" @click="onClicked">
        <vc-geometry-instance :attributes="attributes">
          <vc-geometry-ellipse
            ref="geometryRef"
            :center="[102, 38]"
            :semi-minor-axis="200000.0"
            :semi-major-axis="300000.0"
            :height="50000"
          />
        </vc-geometry-instance>
      </vc-primitive>
      <vc-primitive v-if="outline" :appearance="appearance" @click="onClicked">
        <vc-geometry-instance :attributes="attributesOutline">
          <vc-geometry-ellipse-outline
            ref="geometryOutlineRef"
            :center="[102, 38]"
            :semi-minor-axis="200000.0"
            :semi-major-axis="300000.0"
            :height="50000"
          />
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
