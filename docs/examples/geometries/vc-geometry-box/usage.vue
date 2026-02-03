<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 09:43:49
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-01 10:51:51
 * @FilePath: \vue-cesium\docs\examples\geometries\vc-geometry-box\usage.vue
-->
<script setup lang="ts">
import type { VcGeometryBoxOutlineRef, VcGeometryBoxRef, VcGeometryInstanceProps } from 'vue-cesium'
import type { VcAppearance, VcPickEvent, VcPosition, VcReadyObject } from 'vue-cesium/es/utils/types'
import { onMounted, ref, shallowRef } from 'vue'

const geometryRef = shallowRef<VcGeometryBoxRef>()
const geometryOutlineRef = shallowRef<VcGeometryBoxOutlineRef>()
const appearance = shallowRef<VcAppearance>()
const attributes = shallowRef<VcGeometryInstanceProps['attributes']>()
const modelMatrix = shallowRef<VcGeometryInstanceProps['modelMatrix']>()
const attributesOutline = shallowRef<VcGeometryInstanceProps['attributes']>()
const outline = ref(true)
const dimensions: VcPosition = { x: 400000.0, y: 300000.0, z: 500000.0 }

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
    color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.8)
  }
  appearance.value = new PerInstanceColorAppearance({
    flat: true
  })
  modelMatrix.value = Matrix4.multiplyByTranslation(
    Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(105.0, 40.0)),
    new Cartesian3(0.0, 0.0, 250000),
    new Matrix4()
  )
}

onMounted(() => {
  Promise.all([geometryRef.value?.creatingPromise, geometryOutlineRef.value?.creatingPromise]).then((geometries) => {
    const boundingSpheres: Cesium.BoundingSphere[] = geometries
      .map((cur: VcReadyObject | undefined) => {
        if (!cur?.cesiumObject)
          return null
        const geometry = (cur.cesiumObject.constructor as typeof Cesium.BoxGeometry).createGeometry(cur.cesiumObject)
        if (!geometry?.boundingSphere)
          return null
        return Cesium.BoundingSphere.transform(geometry.boundingSphere, modelMatrix.value!)
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
  <el-row class="demo-viewer demo-vc-geometry-box">
    <vc-viewer @ready="onViewerReady">
      <vc-primitive :appearance="appearance" @click="onClicked">
        <vc-geometry-instance :attributes="attributes" :model-matrix="modelMatrix">
          <vc-geometry-box ref="geometryRef" :dimensions="dimensions" />
        </vc-geometry-instance>
      </vc-primitive>
      <vc-primitive v-if="outline" :appearance="appearance" @click="onClicked">
        <vc-geometry-instance :attributes="attributesOutline" :model-matrix="modelMatrix">
          <vc-geometry-box-outline ref="geometryOutlineRef" :dimensions="dimensions" />
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
