# VUE CESIUM

<p align="center">
  <img width="300px" src="https://zouyaoji.top/vue-cesium/favicon.png">
</p>

<p align="center">
  <a href="https://travis-ci.org/zouyaoji/vue-cesium">
    <img src="https://img.shields.io/travis/zouyaoji/vue-cesium?style=plastic">
  </a>
  <a href="https://www.npmjs.com/package/vue-cesium">
    <img src="https://img.shields.io/npm/v/vue-cesium?style=plastic">
  </a>
  <a href="https://www.npmjs.com/package/vue-cesium">
    <img src="https://img.shields.io/npm/dm/vue-cesium?style=plastic">
  </a>
  <a href="https://github.com/zouyaoji/vue-cesium/blob/dev/LICENSE">
    <img src="https://img.shields.io/github/license/zouyaoji/vue-cesium?style=plastic">
  </a>
  <a href="https://coveralls.io/github/zouyaoji/vue-cesium?branch=dev">
    <img src="https://img.shields.io/coveralls/github/zouyaoji/vue-cesium?style=plastic">
  </a>
  <br>
</p>

<p align="center">VueCesium - A Vue 3.x based component library of CesiumJS for GISer.</p>

* 💪 Vue 3.0 Composition API
* 🔥 Written in TypeScript

## Status: Beta

This project is still under heavy development. Feel free to join us and make your first pull request.

## Languages

- [中文](https://github.com/zouyaoji/vue-cesium/blob/dev/README.zh.md)
- [English](https://github.com/zouyaoji/vue-cesium/blob/dev/README.md)

## Documentation
You can find for more details, API, and other docs on [https://zouyaoji.top/vue-cesium/#/](https://zouyaoji.top/vue-cesium/#/)


Join our [Gitter](https://gitter.im/vue-cesium/vue-cesium-en) to start communicating with everybody.

## Bootstrap project
With command
```bash
$ yarn bootstrap
```
the project will install all dependencies and run `lerna bootstrap` to initialize the project

## Website preview
With command
```bash
$ yarn website-dev
```
the project will launch website for you to preview all existing component

```

## Generate new component
With command
```bash
$ yarn gen component-name
```

Note the `component-name` must be in `kebab-case`, combining words by replacing each space with a dash.

## Commit template
With command
```bash
yarn cz
```

Example
```
[TYPE](SCOPE):DESCRIPTION#[ISSUE]
# example feat(viewer):add type 'viewer' for form usage #1234
```
