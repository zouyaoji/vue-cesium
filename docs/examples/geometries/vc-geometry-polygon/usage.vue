<script setup lang="ts">
import type { VcGeometryInstanceProps, VcGeometryPolygonOutlineRef, VcGeometryPolygonRef } from 'vue-cesium'
import type { VcAppearance, VcPickEvent, VcPolygonHierarchy, VcReadyObject } from 'vue-cesium/es/utils/types'
import { onMounted, ref, shallowRef } from 'vue'

const geometryRef = shallowRef<VcGeometryPolygonRef>()
const geometryOutlineRef = shallowRef<VcGeometryPolygonOutlineRef>()
const appearance = shallowRef<VcAppearance>()
const appearanceOutline = shallowRef<VcAppearance>()
const attributesOutline = shallowRef<VcGeometryInstanceProps['attributes']>()
const outline = ref(true)
const vertexFormat = shallowRef<Cesium.VertexFormat>()
const polygonHierarchy: VcPolygonHierarchy = [
  [102.1, 29.5],
  [106.2, 29.5],
  [106.2, 33.5],
  [102.1, 33.5]
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
  console.log('onViewerReady')
  const { PerInstanceColorAppearance, EllipsoidSurfaceAppearance, Material, ColorGeometryInstanceAttribute } = Cesium
  appearanceOutline.value = new PerInstanceColorAppearance({
    flat: true
  })
  vertexFormat.value = EllipsoidSurfaceAppearance.VERTEX_FORMAT

  appearance.value = new EllipsoidSurfaceAppearance({
    material: new Material({
      fabric: {
        type: 'Water',
        uniforms: {
          normalMap: Cesium.buildModuleUrl('Assets/Textures/waterNormals.jpg'),
          frequency: 1000.0,
          animationSpeed: 0.05,
          amplitude: 10.0
        }
      }
    })
  })

  attributesOutline.value = {
    color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
  }
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
  <el-row class="demo-viewer demo-vc-geometry-polygon">
    <vc-viewer @ready="onViewerReady">
      <vc-primitive :appearance="appearance" @click="onClicked">
        <vc-geometry-instance>
          <vc-geometry-polygon
            ref="geometryRef" :height="100000"
            :extruded-height="30" :polygon-hierarchy="polygonHierarchy" :vertex-format="vertexFormat"
          />
        </vc-geometry-instance>
      </vc-primitive>
      <vc-primitive v-if="outline" :appearance="appearanceOutline" @click="onClicked">
        <vc-geometry-instance :attributes="attributesOutline">
          <vc-geometry-polygon-outline
            ref="geometryOutlineRef" :polygon-hierarchy="polygonHierarchy" :height="100000"
            :extruded-height="30"
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
