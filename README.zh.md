# VUE CESIUM

<p align="center">
  <img src="https://zouyaoji.top/vue-cesium/favicon.png" width="200px">
</p>
<p align="center">基于 Vue 2.x 的 Cesium 三维地图组件。</p>

[![Travis](https://img.shields.io/travis/zouyaoji/vue-cesium?style=plastic)](https://travis-ci.org/zouyaoji/vue-cesium)
[![npm](https://img.shields.io/npm/v/vue-cesium?style=plastic)](https://www.npmjs.com/package/vue-cesium)
[![npm](https://img.shields.io/npm/dm/vue-cesium?style=plastic)](https://www.npmjs.com/package/vue-cesium)
[![license](https://img.shields.io/github/license/zouyaoji/vue-cesium?style=plastic)](https://github.com/zouyaoji/vue-cesium/blob/master/LICENSE)
[![Coverage Status](https://img.shields.io/coveralls/github/zouyaoji/vue-cesium?style=plastic)](https://coveralls.io/github/zouyaoji/vue-cesium?branch=master)
[![Package Quality](https://npm.packagequality.com/shield/vue-cesium.svg)](https://packagequality.com/#?package=vue-cesium)

## 语言

- [中文](https://github.com/zouyaoji/vue-cesium/blob/master/README.zh.md)
- [English](https://github.com/zouyaoji/vue-cesium/blob/master/README.md)

## 链接

- [在线文档](https://zouyaoji.top/vue-cesium)
- [官方例子](https://sandcastle.cesium.com/)
- [更多例子](https://github.com/zouyaoji/vue-cesium-demo)

## 开始

`VueCesium` 引入的是构建后的 `CesiumJS` 库，也就是下载 `Cesium` 源码后打包生成的 `Build`目录的 `CesiumJS`。引入 `Build` 后的库有个很大的好处：可以根据项目需求使用在线、本地、官方原生库或基于 Cesium 构建的第三方库。

[查看目前已开发的组件](https://github.com/zouyaoji/vue-cesium/blob/master/src/utils/nameClassMap.js).

逐步完善中，有问题请提 Issue。

### 安装

```bash
npm i --save vue-cesium
```

### 初始化

- 不指定 Cesium 库地址：

```javascript
import Vue from 'vue'
import VueCesium from 'vue-cesium'
// Vue-Cesium默认加载`https://unpkg.com/cesium/Build/Cesium/Cesium.js`
Vue.use(VueCesium)
```

- 指定 Cesium 库地址：

```javascript
import Vue from 'vue'
import VueCesium from 'vue-cesium'

Vue.use(VueCesium, {
  // cesiumPath 是指引用的Cesium.js路径，如
  // 项目本地的Cesium Build包，vue项目需要将Cesium Build包放static目录：
  // cesiumPath: /static/Cesium/Cesium.js
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
    <vc-viewer></vc-viewer>
  </div>
</template>

<style>
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
    <vc-viewer> </vc-viewer>
  </div>
</template>

<style>
.viewer {
  width: 100%;
  height: 400px;
}
</style>
```

## TODOS

- 完善文档
- 继续增加常用组件
- ...

## 贡献

[贡献指南](https://github.com/zouyaoji/vue-cesium/blob/master/CONTRIBUTING.md)

## 协议

[MIT 许可证](https://opensource.org/licenses/MIT)

版权所有 (c) 2018 至今, zouyaoji <370681295@qq.com>

## 参考

学习借鉴了 2 个 vue 组件项目[vue-baidu-map](https://github.com/Dafrok/vue-baidu-map)和[vuelayers](https://github.com/ghettovoice/vuelayers/)。
