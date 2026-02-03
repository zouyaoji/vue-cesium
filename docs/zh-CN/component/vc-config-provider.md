---
title: 全局配置
lang: zh-CN
---

# Config Provider 全局配置

Config Provider 被用来提供全局的配置选项，让你的配置能够在全局都能够被访问到。

## i18n 配置

通过 Config Provider 来配置多语言，让你的应用可以随时切换语言。

:::demo 使用两个属性来提供 i18n 相关配置

config-provider/usage

:::

## API

### Props

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ----------- | ------------------ | --------------------------------------------------------------------------------- | ----------------------------- |
| locale | <Language\> | [Chinese](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/locale/lang/zh-cn.ts) | `optional` 翻译文本对象。 |
| cesiumPath | string | `'https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js'` | `optional` CesiumJS 地址。 |
| accessToken | string | `'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2OGE2MjZlOC1mMzhiLTRkZjQtOWEwZi1jZTE0MWY0YzhlMTAiLCJpZCI6MjU5LCJpYXQiOjE2NDM3MjU1NzZ9.ptZ5tVXvMmuWRC0WhjtYTg-17nQh14fgxBsx0HJiVXQ'` | `optional` 指定 accessToken。 |

### Slots

| 名称    | 说明                              |
| ------- | --------------------------------- |
| default | vc-config-provider 组件默认插槽。 |
