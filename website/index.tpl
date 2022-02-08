<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-01-29 22:55:37
 * @LastEditTime: 2022-02-08 14:03:11
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\index.tpl
-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel='mask-icon' href="https://raw.githubusercontent.com/zouyaoji/vue-cesium/dev/website/assets/images/vue-cesium-logo-small.svg" color="#409EFF">
    <title>VueCesium - Vue 2.x & Vue 3.x components for CesiumJS.</title>
    <meta name="description" content="VueCesium, a Vue 2.x & Vue 3.x based component library of CesiumJS for GISer" />
    <!-- 引入 fontawesome 图标资源-->
    <link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <!-- 引入 阿里云 图标资源-->
    <script src="//at.alicdn.com/t/font_2419801_f2x68rg10b.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/netcdfjs@0.7.0/dist/netcdfjs.min.js"></script>
    <!-- 谷歌广告 -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3445228872340333"
     crossorigin="anonymous"></script>
    <!-- 万维广告 -->
    <meta name="wwads-cn-verify" content="a4a042cf4fd6bfb47701cbc8a1653ada" />
    <!-- 友盟统计 -->
    <script src="https://s4.cnzz.com/z_stat.php?id=1280816264&web_id=1280816264" async></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
  <% if (process.env.NODE_ENV === 'production') { %><script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    // 谷歌统计
    ga('create', 'UA-113302031-1', 'auto');
    ga('send', 'pageview');

    window.addEventListener('hashchange', function () {
      ga('set', 'page', window.location.href);
      ga('send', 'pageview');
    });
  </script><% } %>
  <% if (process.env.NODE_ENV !== 'production') { %><script>
    var ga = function() {
      console.log(arguments)
    };
  </script><% } %>
</html>
