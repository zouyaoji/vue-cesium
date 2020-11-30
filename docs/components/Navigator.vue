<template lang="pug">
md-list
  template(v-for="(route, index) in routeMap", v-if="route.name")
    md-list-item(:key="index" md-expand-multiple)
      span(v-text="route.name")
      md-list-expand
        md-list
          template(v-for="(subRoute, subIndex) in route.children")
            md-list-item.md-inset(:key="subIndex" md-expand-multiple)
              router-link(:to="`${route.path}/${subRoute.path}`", v-text="subRoute.name")
  md-list-item
    <a href="https://zouyaoji.top/vue-cesium-v1">{{this.lang === 'en'? 'v1 document' : 'v1 文档'}}</a>
</template>

<script>
import routeMap from '../routes.js'
export default {
  props: ['lang'],
  computed: {
    routeMap () {
      const ret = []
      for (const route of routeMap) {
        if (!route.meta || (route.meta && !route.meta.hidden && route.meta.lang === this.lang)) {
          ret.push(route)
        }
      }
      return ret
    }
  }
}
</script>
