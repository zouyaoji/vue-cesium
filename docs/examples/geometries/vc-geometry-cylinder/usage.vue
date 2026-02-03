<script setup lang="ts">
import type { VcGeometryCylinderOutlineRef, VcGeometryCylinderRef, VcGeometryInstanceProps } from 'vue-cesium'
import type { VcAppearance, VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types'
import { onMounted, ref, shallowRef } from 'vue'

const geometryRef = shallowRef<VcGeometryCylinderRef>()
const geometryOutlineRef = shallowRef<VcGeometryCylinderOutlineRef>()
const appearance = shallowRef<VcAppearance>()
const attributes = shallowRef<VcGeometryInstanceProps['attributes']>()
const modelMatrix = shallowRef<VcGeometryInstanceProps['modelMatrix']>()
const attributesOutline = shallowRef<VcGeometryInstanceProps['attributes']>()
const outline = ref(true)
const vertexFormat = shallowRef<Cesium.VertexFormat>()

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
  const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance, Matrix4, Cartesian3, Transforms } = Cesium
  attributes.value = {
    color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
  }
  attributesOutline.value = {
    color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
  }
  appearance.value = new PerInstanceColorAppearance({
    flat: true
  })
  modelMatrix.value = Matrix4.multiplyByTranslation(
    Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(105.0, 35.0)),
    new Cartesian3(0, 0, 0),
    new Matrix4()
  )
  vertexFormat.value = PerInstanceColorAppearance.VERTEX_FORMAT
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
  <el-row class="demo-viewer demo-vc-geometry-cylinder">
    <vc-viewer @ready="onViewerReady">
      <vc-primitive :appearance="appearance" @click="onClicked">
        <vc-geometry-instance :attributes="attributes" :model-matrix="modelMatrix">
          <vc-geometry-cylinder
            ref="geometryRef"
            :length="400000.0"
            :top-radius="200000.0"
            :bottom-radius="200000.0"
            :slices="128"
            :vertex-format="vertexFormat"
          />
        </vc-geometry-instance>
      </vc-primitive>
      <vc-primitive v-if="outline" :appearance="appearance" @click="onClicked">
        <vc-geometry-instance :attributes="attributesOutline" :model-matrix="modelMatrix">
          <vc-geometry-cylinder-outline
            ref="geometryOutlineRef"
            :length="400000.0"
            :top-radius="200000.0"
            :bottom-radius="200000.0"
            :slices="128"
            :number-of-vertical-lines="16"
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
