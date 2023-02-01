<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-03 16:57:27
 * @LastEditTime: 2022-12-22 10:30:18
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\README.md
-->
<p align="center">
  <img width="256px" src="https://zouyaoji.top/vue-cesium/images/vue-cesium-logo.svg">
</p>

<p align="center">
  <a href="https://github.com/zouyaoji/vue-cesium/actions/workflows/publish-npm.yml" target="_blank">
    <img src="https://img.shields.io/github/actions/workflow/status/zouyaoji/vue-cesium/publish-npm.yml?style=plastic">
  </a>
  <a href="https://www.npmjs.com/package/vue-cesium" target="_blank">
    <img src="https://img.shields.io/npm/v/vue-cesium?style=plastic">
  </a>
  <a href="https://npmcharts.com/compare/vue-cesium?minimal=true" target="_blank">
    <img src="https://img.shields.io/npm/dm/vue-cesium?style=plastic">
  </a>
  <a href="https://github.com/zouyaoji/vue-cesium/blob/dev/LICENSE" target="_blank">
    <img src="https://img.shields.io/github/license/zouyaoji/vue-cesium?style=plastic">
  </a>
  <!-- <a href="https://coveralls.io/github/zouyaoji/vue-cesium?branch=dev" target="_blank">
    <img src="https://img.shields.io/coveralls/github/zouyaoji/vue-cesium?style=plastic">
  </a> -->
  <br>
</p>

<p align="center">Vue for Cesium - A Vue 3.x based component library of CesiumJS for developers.</p>

- 💪 Vue 3.0 Composition API
- 🔥 Written in TypeScript
- 🎉 Joined the [Cesium Certified Developer Program](https://cesium.com/learn/certified-developer-directory/)

<p align="center">
  <img width="600px" src="https://zouyaoji.top/vue-cesium/images/certified-dev-banner-light-sm_01.png">
</p>

## Getting Started | [简体中文](./README.zh.md)

You can find for more details, API, and other docs on [https://zouyaoji.top/vue-cesium/#/](https://zouyaoji.top/vue-cesium/#/)

- 中国大陆[加速镜像站点](https://vue-cesium.songluck.com)

Vue for Cesium supports loading the official CesiumJS, or other third-party platforms based on CesiumJS. The tested third-party libraries:

- [CesiumJS](https://cesium.com/platform/cesiumjs/)
- [SuperMap iClient3D for WebGL](http://support.supermap.com.cn:8090/webgl/web/index.html)
- [Earth SDK](http://www.earthsdk.com/)
- [Mars3D](http://mars3d.cn/)
- [DC-SDK](http://dc.dvgis.cn/#/index)

For other untested platforms, Vue for Cesium can also be used, and a callback method can be passed in through the viewerCreator of the vc-viewer component. The initialization process of the viewer is handled by the user, and the viewer can be returned after initialization. [See details](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/components/viewer/src/useViewer.ts#L725)

## Bootstrap project

With command

```bash
$ pnpm i
```

the project will install all dependencies.

## Document preview

With command

```bash
$ pnpm website-dev
```

the project will launch website for you to preview all existing component

## License

Vue for Cesium is open source software licensed as
[MIT](https://github.com/zouyaoji/vue-cesium/blob/master/LICENSE).

Copyright (c) 2018-present, zouyaoji 370681295@qq.com

## Sponsors

[See](https://zouyaoji.top/vue-cesium/#/en-US/donations)

## Contributors

This project wouldn't exist without our amazing contributors

<a href="https://github.com/zouyaoji/vue-cesium/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=zouyaoji/vue-cesium" />
</a>

## References

VueJS UI libraries: [quasar](https://github.com/quasarframework/quasar) and [element-plus](https://github.com/element-plus/element-plus).
