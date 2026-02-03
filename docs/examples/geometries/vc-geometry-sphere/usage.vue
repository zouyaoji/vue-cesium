<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 13:29:26
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-01 12:54:51
 * @FilePath: \vue-cesium\docs\examples\geometries\vc-geometry-sphere\usage.vue
-->
<script setup lang="ts">
import type { VcGeometryInstanceProps, VcGeometrySphereOutlineRef, VcGeometrySphereRef } from 'vue-cesium'
import type { VcAppearance, VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types'
import { onMounted, ref, shallowRef } from 'vue'

const geometryRef = ref<VcGeometrySphereRef>(null)
const geometryOutlineRef = ref<VcGeometrySphereOutlineRef>(null)
const appearance = shallowRef<VcAppearance>()
const attributes = shallowRef<VcGeometryInstanceProps['attributes']>()
const attributesOutline = shallowRef<VcGeometryInstanceProps['attributes']>()
const outline = ref(true)
const modelMatrix = shallowRef<VcGeometryInstanceProps['modelMatrix']>()
const vertexFormat = shallowRef<Cesium.VertexFormat>()

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
  const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance, Matrix4, Cartesian3, Transforms } = Cesium
  appearance.value = new PerInstanceColorAppearance({
    flat: true
  })
  attributes.value = {
    color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
  }
  attributesOutline.value = {
    color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
  }
  vertexFormat.value = PerInstanceColorAppearance.VERTEX_FORMAT
  modelMatrix.value = Matrix4.multiplyByTranslation(
    Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(105.0, 35.0)),
    new Cartesian3(0, 0, 100000),
    new Matrix4()
  )
}

onMounted(() => {
  Promise.all([geometryRef.value.creatingPromise, geometryOutlineRef.value.creatingPromise]).then((geometries) => {
    const { BoundingSphere } = Cesium
    const boundingSphereUnion = geometries.reduce((prev: Cesium.BoundingSphere, cur) => {
      const geometry = (cur.cesiumObject.constructor as any).createGeometry(cur.cesiumObject)
      const boundingSphere = modelMatrix.value
        ? BoundingSphere.transform(geometry.boundingSphere, modelMatrix.value)
        : geometry.boundingSphere
      return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere)
    }, null)
    geometries[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)
    console.log('All geometries are loaded.')
  })
})
</script>

<template>
  <el-row class="demo-viewer demo-vc-geometry-sphere">
    <vc-viewer @ready="onViewerReady">
      <vc-primitive :appearance="appearance" @click="onClicked">
        <vc-geometry-instance :attributes="attributes" :model-matrix="modelMatrix">
          <vc-geometry-sphere ref="geometryRef" :radius="200000" :vertex-format="vertexFormat" />
        </vc-geometry-instance>
      </vc-primitive>
      <vc-primitive v-if="outline" :appearance="appearance" @click="onClicked">
        <vc-geometry-instance :attributes="attributesOutline" :model-matrix="modelMatrix">
          <vc-geometry-sphere-outline ref="geometryOutlineRef" :radius="200000" />
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
