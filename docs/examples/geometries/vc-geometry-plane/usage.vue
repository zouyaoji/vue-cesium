<script setup lang="ts">
import type { VcGeometryInstanceProps, VcGeometryPlaneOutlineRef, VcGeometryPlaneRef } from 'vue-cesium'
import type { VcAppearance, VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types'
import { onMounted, ref, shallowRef } from 'vue'

const geometryRef = shallowRef<VcGeometryPlaneRef>()
const geometryOutlineRef = shallowRef<VcGeometryPlaneOutlineRef>()
const appearance = shallowRef<VcAppearance>()
const appearanceOutline = shallowRef<VcAppearance>()
const attributes = shallowRef<VcGeometryInstanceProps['attributes']>()
const modelMatrix = shallowRef<VcGeometryInstanceProps['modelMatrix']>()
const attributesOutline = shallowRef<VcGeometryInstanceProps['attributes']>()
const outline = ref(true)
const vertexFormat = shallowRef<Cesium.VertexFormat>()

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
  console.log('onViewerReady')
  const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance, Matrix4, Cartesian3, Transforms } = Cesium
  appearance.value = new PerInstanceColorAppearance({
    closed: true
  })
  appearanceOutline.value = new PerInstanceColorAppearance({
    flat: true,
    renderState: {
      lineWidth: Math.min(2.0, viewer.scene.maximumAliasedLineWidth)
    }
  })
  attributes.value = {
    color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
  }
  attributesOutline.value = {
    color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
  }
  vertexFormat.value = PerInstanceColorAppearance.VERTEX_FORMAT
  const dimensions = new Cartesian3(400000.0, 300000.0, 1.0)
  const translateMatrix = Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(108, 38))
  const scaleMatrix = Matrix4.fromScale(dimensions)
  const planeModelMatrix = new Matrix4()
  modelMatrix.value = Matrix4.multiply(translateMatrix, scaleMatrix, planeModelMatrix)
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
        const transformMatrix = modelMatrix.value
        return transformMatrix
          ? Cesium.BoundingSphere.transform(geometry.boundingSphere, transformMatrix)
          : geometry.boundingSphere
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
  <el-row class="demo-viewer demo-vc-geometry-plane">
    <vc-viewer @ready="onViewerReady">
      <vc-primitive :appearance="appearance" @click="onClicked">
        <vc-geometry-instance :attributes="attributes" :model-matrix="modelMatrix">
          <vc-geometry-plane ref="geometryRef" :vertex-format="vertexFormat" />
        </vc-geometry-instance>
      </vc-primitive>
      <vc-primitive v-if="outline" :appearance="appearanceOutline" @click="onClicked">
        <vc-geometry-instance :attributes="attributesOutline" :model-matrix="modelMatrix">
          <vc-geometry-plane-outline ref="geometryOutlineRef" />
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
