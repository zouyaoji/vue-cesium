<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:21:03
 * @LastEditTime: 2021-09-03 16:10:00
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\en-US\installation.md
-->

# Installation VueCesium

### Environment

- Modern browser

| ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| Edge                                                                   | last 2 versions                                                                   | last 2 versions                                                                | last 2 versions                                                                |

> Since Vue3 and Cesium@1.85+ no longer supports IE11, VueCesium does not support IE11 and previous
> versions.

### Current latest version

VueCesium is currently in a rapid development iteration:

[![VueCesium version badge](https://img.shields.io/npm/v/vue-cesium/next?style=flat-square)](https://www.npmjs.org/package/vue-cesium)

### Install via npm or yarn

**We recommend using the package manager to install VueCesium**,
so that you can utilize bundlers like [vite](https://vitejs.dev) and
[webpack](https://webpack.js.org/).

```shell
$ npm install vue-cesium@next --save
```

```shell
$ yarn add vue-cesium@next
```

### Browser direct introducing

Directly import VueCesium through browser HTML tags, and use `VueCesium` globally

Introduce `VueCesium` in full through **CDN**. According to different **CDN**
providers, there are different introduction methods. Here we use
[unpkg](https://unpkg.com) and[jsdelivr](https://jsdelivr.com) For example,
You can also use other **CDN** providers.

## Use unpkg

```html
<head>
  <!-- Introduce style -->
  <link rel="stylesheet" href="//unpkg.com/vue-cesium@next/dist/index.css" />
  <!-- Introduce Vue -->
  <script src="//unpkg.com/vue@next"></script>
  <!-- Introduce component library -->
  <script src="//unpkg.com/vue-cesium@next"></script>
</head>
```

## Use jsDelivr

```html
<head>
  <!-- Introduce style -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/vue-cesium@next/dist/index.css" />
  <!-- Introduce Vue -->
  <script src="//cdn.jsdelivr.net/npm/vue@next"></script>
  <!-- Introduce component library -->
  <script src="//cdn.jsdelivr.net/npm/vue-cesium@next"></script>
</head>
```

:::tip
We recommend using **CDN** to introduce `VueCesium` users to lock the version
on the link address, so as not to be affected by incompatible updates when `VueCesium`
is upgraded in the future. Please check [unpkg.com](https://unpkg.com) for
the method to lock the version.
:::

### Hello world

With **CDN**, we can easily use `VueCesium` to
write a Hello world page. [Online Demo](https://codepen.io/zouyaoji/pen/bGBOyJM)

<iframe height="500" style="width: 100%;" scrolling="no" title="VueCesium Demo" src="https://codepen.io/zouyaoji/embed/bGBOyJM?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/zouyaoji/pen/bGBOyJM'>VueCesium Demo</a> by zouyaoji
  (<a href='https://codepen.io/zouyaoji'>@zouyaoji</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

If you are installing via npm / yarn and want to use it with
a packaging tool, please read the
next section: [Quick Start](./#/en-US/component/quickstart).
