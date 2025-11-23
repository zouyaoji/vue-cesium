---
title: Config Provider
lang: en-US
---

# Config Provider

Config Provider is used for providing global configurations, which enables your entire application to access these configurations everywhere.

## i18n Configurations

Configure i18n related properties via Config Provider, to get language switching feature.

:::demo Use two attributes to provide i18n related config

config-provider/usage

:::

## API

### Props

<!-- prettier-ignore -->
| Name   | Type               | Default                                                                           | Description   |
| ------ | ------------------ | --------------------------------------------------------------------------------- | ------------- |
| locale | <Language\> | [Chinese](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/locale/lang/zh-hans.ts) | `optional` Locale Object. |
| cesiumPath | string | `'https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js'` | `optional` CesiumJS url. |
| accessToken | string | `'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2OGE2MjZlOC1mMzhiLTRkZjQtOWEwZi1jZTE0MWY0YzhlMTAiLCJpZCI6MjU5LCJpYXQiOjE2NDM3MjU1NzZ9.ptZ5tVXvMmuWRC0WhjtYTg-17nQh14fgxBsx0HJiVXQ'` | `optional` accessToken. |

### Slots

| Name    | Description                                               |
| ------- | --------------------------------------------------------- |
| default | Default slot content of the vc-config-provider component. |
