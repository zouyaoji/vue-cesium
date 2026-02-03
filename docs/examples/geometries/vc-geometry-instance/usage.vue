<script setup lang="ts">
import type { VcGeometryInstanceProps, VcGeometryInstanceRef, VcGeometryPolygonRef, VcGeometryRectangleRef } from 'vue-cesium'
import type { VcAppearance, VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types'
import { onMounted, shallowRef } from 'vue'

const geometry = shallowRef<Cesium.BoxGeometry>()
const appearance = shallowRef<VcAppearance>()
const appearance2 = shallowRef<VcAppearance>()
const attributes = shallowRef<VcGeometryInstanceProps['attributes']>()
const modelMatrixTop = shallowRef<VcGeometryInstanceProps['modelMatrix']>()
const modelMatrixBottom = shallowRef<VcGeometryInstanceProps['modelMatrix']>()
const instanceBoxTop = shallowRef<VcGeometryInstanceRef>()
const instanceBoxBottom = shallowRef<VcGeometryInstanceRef>()
const instanceRectangle = shallowRef<VcGeometryRectangleRef>()
const instancePolygon = shallowRef<VcGeometryPolygonRef>()

function onClicked(e: VcPickEvent) {
  console.log(e)
}

function unload() {
  instanceBoxBottom.value?.unload()
  instanceBoxTop.value?.unload()
  instanceRectangle.value?.unload()
}

function reload() {
  instanceBoxBottom.value?.reload()
  instanceBoxTop.value?.reload()
  instanceRectangle.value?.reload()
}

function load() {
  instanceBoxBottom.value?.load()
  instanceBoxTop.value?.load()
  instanceRectangle.value?.load()
}

function onViewerReady({ Cesium, viewer }: VcReadyObject) {
  geometry.value = Cesium.BoxGeometry.fromDimensions({
    vertexFormat: Cesium.VertexFormat.POSITION_AND_NORMAL,
    dimensions: new Cesium.Cartesian3(1000000.0, 1000000.0, 250000.0)
  })
  appearance.value = new Cesium.PerInstanceColorAppearance()
  attributes.value = {
    color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.AQUA)
  }
  modelMatrixBottom.value = Cesium.Matrix4.multiplyByTranslation(
    Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)),
    new Cesium.Cartesian3(0.0, 0.0, 100000.0),
    new Cesium.Matrix4()
  )
  modelMatrixTop.value = Cesium.Matrix4.multiplyByTranslation(
    Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)),
    new Cesium.Cartesian3(0.0, 0.0, 800000.0),
    new Cesium.Matrix4()
  )
  appearance2.value = new Cesium.MaterialAppearance({
    material: Cesium.Material.fromType('Checkerboard')
  })
}

onMounted(() => {
  Promise.all([
    instanceBoxTop.value.creatingPromise,
    instanceBoxBottom.value.creatingPromise,
    instanceRectangle.value.creatingPromise,
    instancePolygon.value.creatingPromise
  ]).then((instances) => {
    const { BoundingSphere } = Cesium
    const boundingSphereUnion = instances.reduce((prev: Cesium.BoundingSphere, cur) => {
      // Type guard for geometry property
      const hasGeometry = (obj: any): obj is { geometry: any } => obj && 'geometry' in obj
      const geometry = hasGeometry(cur.cesiumObject) ? cur.cesiumObject.geometry : cur.cesiumObject
      const computGeometry = geometry.constructor.createGeometry(geometry)
      const hasModelMatrix = (obj: any): obj is { modelMatrix: any } => obj && 'modelMatrix' in obj
      const boundingSphere = hasGeometry(cur.cesiumObject) && hasModelMatrix(cur.cesiumObject)
        ? BoundingSphere.transform(computGeometry.boundingSphere, cur.cesiumObject.modelMatrix)
        : computGeometry.boundingSphere
      return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere)
    }, null)
    instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)
    console.log('All instances are loaded.')
  })
})
</script>

<template>
  <el-row class="demo-viewer demo-vc-geometry-instance">
    <vc-viewer @ready="onViewerReady">
      <vc-primitive :appearance="appearance" @click="onClicked">
        <vc-geometry-instance
          id="top" ref="instanceBoxTop" :geometry="geometry" :attributes="attributes"
          :model-matrix="modelMatrixTop"
        />
        <vc-geometry-instance
          id="bottom" ref="instanceBoxBottom" :geometry="geometry" :attributes="attributes"
          :model-matrix="modelMatrixBottom"
        />
      </vc-primitive>
      <vc-primitive :appearance="appearance2" @click="onClicked">
        <vc-geometry-instance>
          <vc-geometry-rectangle ref="instanceRectangle" :rectangle="[110.5, 29.5, 115.5, 34.5]" />
        </vc-geometry-instance>
        <vc-geometry-instance>
          <vc-geometry-polygon
            ref="instancePolygon" :polygon-hierarchy="[
              [102.1, 29.5],
              [106.2, 29.5],
              [106.2, 33.5],
              [108.2, 35.5],
              [102.1, 33.5],
            ]" :height="20000"
          />
        </vc-geometry-instance>
      </vc-primitive>
    </vc-viewer>
    <el-row class="demo-toolbar">
      <el-button type="danger" round @click="unload">
        Unload
      </el-button>
      <el-button type="danger" round @click="load()">
        Load
      </el-button>
      <el-button type="danger" round @click="reload()">
        Reload
      </el-button>
    </el-row>
  </el-row>
</template>
