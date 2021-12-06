<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-03 16:57:27
 * @LastEditTime: 2021-12-01 15:16:28
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\README.md
-->

# VUE CESIUM

<p align="center">
  <img width="300px" src="https://zouyaoji.top/vue-cesium/favicon.png">
</p>

<p align="center">
  <a href="https://github.com/zouyaoji/vue-cesium/actions/workflows/publish-npm.yml" target="_blank">
    <img src="https://img.shields.io/github/workflow/status/zouyaoji/vue-cesium/Publish%20to%20NPM%20registry?style=plastic">
  </a>
  <a href="https://www.npmjs.com/package/vue-cesium" target="_blank">
    <img src="https://img.shields.io/npm/v/vue-cesium/next?style=plastic">
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

<p align="center">VueCesium - A Vue 2.x & Vue 3.x based component library of CesiumJS for GISer.</p>

- 💪 Vue 3.0 Composition API
- 🔥 Written in TypeScript

## Status: Beta

This project is still under heavy development. Feel free to join us and make your first pull request.

## Documentation

You can find for more details, API, and other docs on [https://zouyaoji.top/vue-cesium/#/](https://zouyaoji.top/vue-cesium/#/)

国内码云[加速镜像站点](https://zouyaoji.gitee.io/vue-cesium/)

VueCesium supports the introduction of official CesiumJS, or other third-party platforms based on CesiumJS, Tested third-party libraries:

- [CesiumJS](https://cesium.com/platform/cesiumjs/)
- [SuperMap iClient3D for WebGL](http://support.supermap.com.cn:8090/webgl/web/index.html)
- [Earth SDK](http://www.earthsdk.com/)
- [Mars3D](http://mars3d.cn/)
- [DC-SDK](http://dc.dvgis.cn/#/index)

## Bootstrap project

With command

```bash
$ pnpm i
```

the project will install all dependencies and run `lerna bootstrap` to initialize the project

## Website preview

With command

```bash
$ pnpm website-dev
```

the project will launch website for you to preview all existing component

## Generate new component
With command
```bash
$ pnpm gen component-name
````

Note the `component-name` must be in `kebab-case`, combining words by replacing each space with a dash.

# Commit template

With command

```bash
pnpm cz
```

Example

```
[TYPE](SCOPE):DESCRIPTION#[ISSUE]
# example feat(viewer):add type 'viewer' for form usage #1234
```

## Licence

VueCesium is open source software licensed as
[MIT](https://github.com/zouyaoji/vue-cesium/blob/master/LICENSE).

## Sponsors

[See](https://zouyaoji.top/vue-cesium/#/en-US/donations)

## Contributors

This project wouldn't exist without our amazing contributors

<a href="https://github.com/zouyaoji/vue-cesium/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=zouyaoji/vue-cesium" />
</a>
