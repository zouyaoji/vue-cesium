<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:21:03
 * @LastEditTime: 2021-09-03 16:09:58
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\zh-CN\installation.md
-->
## 安装

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
npm install vue-cesium@next --save
```

或者

```shell
yarn add vue-cesium@next
```

### CDN

目前可以通过 [unpkg.com/vue-cesium](https://unpkg.com/vue-cesium/) 和 [cdnjs.com/libraries/vue-cesium](https://cdnjs.com/libraries/vue-cesium) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/vue-cesium@next/lib/theme-default/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/vue-cesium@next/lib/index.full.js"></script>

```

:::tip
我们建议使用 CDN 引入 VueCesium 的用户在链接地址上锁定版本，以免将来 VueCesium 升级时受到非兼容性更新的影响。锁定版本的方法请查看 [unpkg.com](https://unpkg.com)。
:::

### Hello world

通过 CDN 的方式我们可以很容易地使用 VueCesium 写出一个 Hello world 页面。[在线演示](https://codepen.io/zouyaoji/pen/bGBOyJM)

<iframe height="500" style="width: 100%;" scrolling="no" title="VueCesium Demo" src="https://codepen.io/zouyaoji/embed/bGBOyJM?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/zouyaoji/pen/bGBOyJM'>VueCesium Demo</a> by zouyaoji
  (<a href='https://codepen.io/zouyaoji'>@zouyaoji</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：[快速上手](./#/zh-CN/component/quickstart)。
