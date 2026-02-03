<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-14 17:24:02
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-02-03 09:42:12
 * @FilePath: \vue-cesium\docs\examples\config-provider\usage.vue
-->
<script lang="ts" setup>
import { ref } from 'vue'

const locale1 = {
  name: 'en-us',
  nativeName: 'English (US)',
  vc: {
    loadError: 'needs to be child of VcViewer',
    navigation: {
      compass: {
        outerTip: 'Drag outer ring: rotate view. Double-click: reset view.',
        innerTip: 'Drag inner gyroscope: free orbit. TIP: You can also free orbit by holding the CTRL key and dragging the map.',
        title: 'Click and drag to rotate the camera.'
      },
      zoomCotrol: {
        zoomInTip: 'Zoom in',
        zoomResetTip: 'Reset zoom',
        zoomOutTip: 'Zoom out'
      },
      print: {
        printTip: 'Viewer screenshot/print',
        printViewTitle: 'VueCesium Print View',
        credit: 'Map Credits',
        screenshot: 'Screenshot'
      },
      myLocation: {
        myLocationTip: 'Centre map at your current location',
        positioning: 'Positioning...',
        fail: 'Positioning failed',
        centreMap: 'My Location',
        lat: 'Lat',
        lng: 'Lng',
        address: 'Address'
      },
      statusBar: {
        lat: 'Lat',
        lng: 'Lng',
        zone: 'ZONE',
        e: 'E',
        n: 'N',
        elev: 'Elev',
        level: 'Level',
        heading: 'H',
        pitch: 'P',
        roll: 'R',
        cameraHeight: 'CameraH',
        tip: 'Click to switch the mouse display coordinates to UTM projection coordinates'
      }
    }
  }
}
const locale2 = {
  name: 'zh-cn',
  nativeName: '中文(简体)',
  vc: {
    loadError: '加载失败，必须作为 VcViewer 的子组件加载。',
    navigation: {
      compass: {
        outerTip: '旋转视图：顺/逆时针方向拖拽罗盘外环。\n重置视图：双击罗盘外环。',
        innerTip: '翻转视图：由内环向外环拖拽罗盘。\n 或者按住 Ctrl 键的同时拖拽地图。',
        title: '按住鼠标拖拽旋转相机。'
      },
      zoomCotrol: {
        zoomInTip: '放大',
        zoomResetTip: '重置视图',
        zoomOutTip: '缩小'
      },
      print: {
        printTip: '场景截图/打印',
        printViewTitle: '打印预览',
        credit: '地图版权',
        screenshot: '场景截图'
      },
      myLocation: {
        myLocationTip: '定位您的位置',
        positioning: '定位中...',
        fail: '定位失败',
        centreMap: '我的位置',
        lat: '纬度',
        lng: '经度',
        address: '地址'
      },
      statusBar: {
        lat: '纬度',
        lng: '经度',
        zone: '带号',
        e: 'X',
        n: 'Y',
        elev: '高程',
        level: '层级',
        heading: '方位',
        pitch: '俯仰',
        roll: '侧翻',
        cameraHeight: '视高',
        tip: '点击切换鼠标显示坐标为 UTM 投影坐标'
      }
    }
  }
}

const locale = ref(locale1)
const viewerContainerRef = ref()
const navigationRef = ref()
const providerRef = ref()

function toggleLanguage() {
  if (locale.value.name === 'zh-cn') {
    locale.value = locale1
  }
  else {
    locale.value = locale2
  }
}
</script>

<template>
  <el-row ref="viewerContainerRef" class="demo-viewer demo-vc-config-provider">
    <vc-config-provider :locale="locale">
      <vc-viewer>
        <vc-navigation ref="navigationRef" :offset="[35, 35]" />
        <vc-layer-imagery :sort-order="20">
          <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0" />
        </vc-layer-imagery>
        <vc-layer-imagery :sort-order="10">
          <vc-imagery-provider-tianditu ref="providerRef" map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0" />
        </vc-layer-imagery>
      </vc-viewer>
    </vc-config-provider>
    <el-row class="demo-toolbar">
      <el-button type="danger" round @click="toggleLanguage">
        Switch Language
      </el-button>
    </el-row>
  </el-row>
</template>
