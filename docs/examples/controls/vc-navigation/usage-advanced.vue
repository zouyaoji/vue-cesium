<script setup lang="ts">
import { ref } from 'vue'

const viewerContainer = ref()
const color = ref('red')
const background = ref('yellow')
</script>

<template>
  <el-row ref="viewerContainer" class="demo-viewer demo-vc-navigation">
    <vc-viewer>
      <vc-compass
        position="left"
        :outer-options="{ icon: 'svguse:#vc-icons-compass-outer', size: '250px' }"
        :inner-options="{ icon: 'fa fa-compass', size: '60px', background: 'transparent', color: '#009688' }"
      />
      <vc-compass position="top" :outer-options="{ icon: 'svguse:#vc-icons-qq' }" />
      <vc-compass
        position="top-right"
        :outer-options="{ icon: 'fa fa-circle-o-notch' }"
        :inner-options="{ icon: 'fa fa-circle', background: 'transparent' }"
      />
      <vc-compass position="right" :enable-compass-outer-ring="false" />
      <vc-zoom-control
        position="bottom"
        direction="horizontal"
        :offset="[0, 30]"
        :zoom-reset-options="{ size: '48px', color: '#21BA45' }"
      />
      <vc-zoom-control position="bottom" :enable-reset-button="false" border-radius="0" :offset="[0, 120]" />
      <vc-print position="bottom-right" download-automatically :color="color" :background="background" />
      <vc-print
        position="bottom-right"
        :offset="[40, 20]"
        :show-print-view="false"
        print-automatically
        size="28px"
        :round="false"
        label="Print/Share"
        background="#31CCEC"
        icon="fa fa-print"
      />
      <!-- Browser geolocation -->
      <vc-my-location position="top-left" color="#C10015" />
      <!-- AMap API geolocation -->
      <vc-my-location
        color="#9C27B0"
        :amap="{ key: '39c28158066d532d372391c5a0c7d9ba', version: '2.0', options: { timeout: 5000, noGeoLocation: 0, needAddress: true, extensions: 'all' }, transformToWGS84: true }"
        position="top-left"
        :offset="[0, 60]"
        label="Locate"
        stack
        :round="false"
        background="#F2C037"
      />
      <!-- Custom API geolocation -->
      <vc-my-location position="top-left" :offset="[60, 0]" :custom-api="() => ({ lng: 108, lat: 32 })" />
      <vc-status-bar position="bottom" />
      <vc-status-bar position="top-left" :offset="[120, 3]" :show-mouse-info="false" :show-performance-info="false" />
      <vc-distance-legend position="bottom-left" :offset="[5, 70]" background="#26A69A" bar-background="#F2C037" :width="80" />
      <vc-distance-legend position="bottom-left" :offset="[5, 35]" />
    </vc-viewer>
  </el-row>
</template>

<style scoped>
.demo-viewer {
  width: 100%;
  position: relative;
}
</style>
