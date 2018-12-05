# VUE CESIUM

<p align="center">
  <img src="https://zouyaoji.top/vue-cesium/favicon.png" width="200px">
</p>
<p align="center">基于 Vue 2.x 的Cesium三维地图组件。</p>

[![npm](https://img.shields.io/npm/v/vue-cesium.svg)]()
[![Travis](https://img.shields.io/travis/zouyaoji/vue-cesium.svg)]()
[![Package Quality](http://npm.packagequality.com/shield/vue-cesium.png)](http://packagequality.com/#?package=vue-cesium)
[![npm](https://img.shields.io/npm/dm/vue-cesium.svg)]()
[![license](https://img.shields.io/github/license/zouyaoji/vue-cesium.svg)]()

## 语言

- [中文](https://github.com/zouyaoji/vue-cesium/blob/master/README.zh.md)
- [English](https://github.com/zouyaoji/vue-cesium/blob/master/README.md)

## 文档

- [在线文档](https://zouyaoji.top/vue-cesium)
- [更多例子](https://github.com/zouyaoji/vue-cesium-demo)

## 开始

打包后的Cesium没办法再通过import方式直接导入到项目中，详见[ISSUE](https://github.com/AnalyticalGraphicsInc/cesium/issues/5278)。故造此轮子可以把打包后的Cesium以动态形式引入你的Vue项目。

持续开发中，有问题可直接联系我交流。<370681295@qq.com>

### 安装

```bash
npm i --save vue-cesium
```

### 初始化

- 不指定Cesium库地址：

```javascript
import Vue from 'vue'
import VueCesium from 'vue-cesium'
// Vue-Cesium默认加载`https://unpkg.com/cesium/Build/Cesium/Cesium.js`
Vue.use(VueCesium)
```

- 指定Cesium库地址：

```javascript
import Vue from 'vue'
import VueCesium from 'vue-cesium'

Vue.use(VueCesium, {
  // cesiumPath 是指引用的Cesium.js路径，如
  // 项目本地的Cesium Build包，vue项目需要将Cesium Build包放static目录：
  // ./static/Cesium/Cesium.js
  // 个人在线Cesium Build包：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/Cesium/Cesium.js'
  // 个人在线SuperMap Cesium Build包（在官方基础上二次开发出来的）：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/SuperMapCesium/Cesium.js'
  // 官方在线Cesium Build包，有CDN加速，推荐用这个：
  cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
})
```

```html
<template>
<div class="viewer">
  <cesium-viewer>
  </cesium-viewer>
</div>
</template>

<style scoped>
.viewer {
  width: 100%;
  height: 400px;
}
</style>
```

### 使用

```vue
<template>
  <div class="viewer">
    <cesium-viewer>
    </cesium-viewer>
  </div>
</template>

<style scoped>
.viewer {
  width: 100%;
  height: 400px;
}
</style>
```

## 贡献

[贡献指南](https://github.com/zouyaoji/vue-cesium/blob/master/CONTRIBUTING.md)

## 协议

[MIT 许可证](https://opensource.org/licenses/MIT)

版权所有 (c) 2018至今, zouyaoji <370681295@qq.com>

## 感谢

该项目学习、借鉴了[vue-baidu-map](https://github.com/Dafrok/vue-baidu-map)，特此鸣谢！
