<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-01-19 09:36:16
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 14:56:55
 * @FilePath: \vue-cesium\docs\examples\post-processes\vc-post-process-stage-collection\usage.vue
-->
<script setup lang="ts">
import { ref } from 'vue'

const viewerContainer = ref()
const stage = ref()

const options1 = ref({
  position: [117.217124, 31.809777],
  radius: 1500,
  interval: 1500,
  color: [255, 255, 0, 255]
})

const options2 = ref({
  position: [117.257124, 31.809777],
  radius: 1500,
  interval: 1500,
  color: [255, 0, 0, 255]
})

const postProcesses = ref([
  {
    fragmentShader: `
      uniform sampler2D colorTexture;
      in vec2 v_textureCoordinates;
      float hash(float x){
        return fract(sin(x*23.3)*13.13);
      }
      void main(void){
        float time = czm_frameNumber / 60.0;
        vec2 resolution = czm_viewport.zw;
        vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);
        vec3 c=vec3(.6,.7,.8);
        float a=-.4;
        float si=sin(a),co=cos(a);
        uv*=mat2(co,-si,si,co);
        uv*=length(uv+vec2(0,4.9))*.3+1.;
        float v=1.-sin(hash(floor(uv.x*100.))*2.);
        float b=clamp(abs(sin(20.*time*v+uv.y*(5./(2.+v))))-.95,0.,1.)*20.;
        c*=v*b;
        out_FragColor = mix(texture(colorTexture, v_textureCoordinates), vec4(c,1), 0.5);
      }
    `
  }
])

function ready({ viewer }) {
  viewer.scene.globe.depthTestAgainstTerrain = true
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(117.237124, 31.809777, 10000.0),
    orientation: {
      heading: Cesium.Math.toRadians(0),
      pitch: Cesium.Math.toRadians(-90),
      roll: 0.0
    },
    duration: 3
  })
}

function unload() {
  stage.value?.unload()
}

function load() {
  stage.value?.load()
}

function reload() {
  stage.value?.reload()
}
</script>

<template>
  <div ref="viewerContainer" class="demo-viewer demo-vc-post-process-stage-collection">
    <vc-viewer @ready="ready">
      <vc-post-process-stage-collection ref="stage" :post-processes="postProcesses">
        <vc-post-process-stage-scan type="radar" :options="options1" />
        <vc-post-process-stage-scan type="circle" :options="options2" />
      </vc-post-process-stage-collection>
      <vc-layer-imagery :sort-order="20">
        <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
      <vc-layer-imagery :sort-order="10">
        <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
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
    </el-row>
  </div>
</template>
