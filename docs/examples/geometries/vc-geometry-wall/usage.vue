<script setup lang="ts">
import type { VcGeometryInstanceProps, VcGeometryWallOutlineRef, VcGeometryWallRef } from 'vue-cesium'
import type { VcAppearance, VcPickEvent, VcReadyObject } from 'vue-cesium/es/utils/types'
import { onMounted, ref, shallowRef } from 'vue'

const geometryRef = shallowRef<VcGeometryWallRef>()
const geometryOutlineRef = shallowRef<VcGeometryWallOutlineRef>()
const appearance = shallowRef<VcAppearance>()
const attributes = shallowRef<VcGeometryInstanceProps['attributes']>()
const attributesOutline = shallowRef<VcGeometryInstanceProps['attributes']>()
const outline = ref(true)
const positions = [
  [102, 40, 100000],
  [106, 40, 100000],
  [106, 36, 200000],
  [102, 36, 0]
]
const vertexFormat = ref(null)

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
  const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance, Cartesian3, MaterialAppearance } = Cesium

  appearance.value = new PerInstanceColorAppearance({
    flat: true
  })
  attributes.value = {
    color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
  }
  attributesOutline.value = {
    color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
  }
  vertexFormat.value = PerInstanceColorAppearance.FLAT_VERTEX_FORMAT
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
  <el-row class="demo-viewer demo-vc-geometry-wall">
    <vc-viewer @ready="onViewerReady">
      <vc-primitive
        :appearance="{
          type: 'MaterialAppearance',
          options: {
            material: {
              fabric: {
                type: 'VcLineFlow',
                uniforms: { image: 'https://zouyaoji.top/vue-cesium/images/textures/fence.png', axisY: true, color: '#bdf700', repeat: { x: 5, y: 1 }, speed: 5 },
              },
            },
          },
        }" @click="onClicked"
      >
        <vc-geometry-instance :attributes="attributes">
          <vc-geometry-wall ref="geometryRef" :positions="positions" />
        </vc-geometry-instance>
      </vc-primitive>
      <vc-primitive v-if="outline" :appearance="appearance" @click="onClicked">
        <vc-geometry-instance :attributes="attributesOutline">
          <vc-geometry-wall-outline ref="geometryOutlineRef" :positions="positions" />
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
