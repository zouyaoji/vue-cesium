# VUE CESIUM

<p align="center">
  <img src="https://zouyaoji.top/vue-cesium/favicon.png" width="200px">
</p>
<p align="center">Vue 2.x components for CesiumJS. Load Cesium built package or other third-party packages which are built on Cesium.</p>

[![Travis](https://img.shields.io/travis/zouyaoji/vue-cesium?style=plastic)](https://travis-ci.org/zouyaoji/vue-cesium)
[![npm](https://img.shields.io/npm/v/vue-cesium?style=plastic)](https://www.npmjs.com/package/vue-cesium)
[![npm](https://img.shields.io/npm/dm/vue-cesium?style=plastic)](https://www.npmjs.com/package/vue-cesium)
[![license](https://img.shields.io/github/license/zouyaoji/vue-cesium?style=plastic)](https://github.com/zouyaoji/vue-cesium/blob/master/LICENSE)
[![Coverage Status](https://img.shields.io/coveralls/github/zouyaoji/vue-cesium?style=plastic)](https://coveralls.io/github/zouyaoji/vue-cesium?branch=master)
[![Package Quality](https://npm.packagequality.com/shield/vue-cesium.svg)](https://packagequality.com/#?package=vue-cesium)

## Languages

- [中文](https://github.com/zouyaoji/vue-cesium/blob/master/README.zh.md)
- [English](https://github.com/zouyaoji/vue-cesium/blob/master/README.md)

## Links

- [Documentation](https://zouyaoji.top/vue-cesium)
- [Official Demo](https://sandcastle.cesium.com/)
- [More examples](https://github.com/zouyaoji/vue-cesium-demo)

## Get Start

`VueCesium` using the built CesiumJS library. You can use online, local, official native libraries or third-party libraries built on Cesium depending on your project needs. The `SuperMap iClient 3D for WebGL` and the `EarthSDK` of CesiumLab have been tested.

[Developed components](https://github.com/zouyaoji/vue-cesium/blob/master/src/utils/nameClassMap.js).

In the gradual improvement...

### Installation

```bash
npm i --save vue-cesium
```

### Usage

```js
import Vue from 'vue'
import VueCesium from 'vue-cesium'
import lang from 'vue-cesium/lang/zh-hans'
// import lang from 'vue-cesium/lang/en-us'
Vue.use(VueCesium)
// or
// Vue.use(VueCesium, {
//   // cesiumPath is path of Cesium.js', for example:
//   // local Cesium Build package:
//   // cesiumPath: '/static/Cesium/Cesium.js'
//   // Online Cesium Build package：
//   // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/Cesium/Cesium.js'
//   // cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js',
//   // cesiumPath: 'https://unpkg.com/cesium/Build/CesiumUnminified/Cesium.js',
//   // cesiumPath: 'https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js',
//   cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js',  // default
//   accessToken: `Your accessToken`,
//   lang: lang // 2.0.3+ //  zh-hans
// })
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

## Contributing

[Contributing Guide](https://github.com/zouyaoji/vue-cesium/blob/master/CONTRIBUTING.md)

## License

[MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2018-present, zouyaoji <370681295@qq.com>

## Donate

> Your support is the driving force for me to move forward and better support the open source cause! ~

- PayPal

  <a href="https://www.paypal.me/zouyaoji" target="_blank"><img src="https://zouyaoji.top/vue-cesium/statics/assets/images/paypal.png" height="40" /></a>

- WeChat | AliPay

  ![WeChat](https://zouyaoji.top/vue-cesium/statics/assets/images/wechat.png) ![AliPay](https://zouyaoji.top/vue-cesium/statics/assets/images/alipay.png)

## QQGroup

[16533444](https://jq.qq.com/?_wv=1027&k=5BCrKOi)

![开心农场](https://zouyaoji.top/vue-cesium/statics/assets/images/开心农场.png) ![数字视觉](https://zouyaoji.top/vue-cesium/statics/assets/images/数字视觉.png)

## Reference

Two good vue components projects: [vue-baidu-map](https://github.com/Dafrok/vue-baidu-map) and [vuelayers](https://github.com/ghettovoice/vuelayers/).
