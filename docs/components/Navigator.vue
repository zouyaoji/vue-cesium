<template lang="pug">
md-list
  template(v-for="(route, index) in routeMap", v-if="route.name")
    md-list-item(:key="index")
      span(v-text="route.name")
      md-list-expand
        md-list
          template(v-for="(subRoute, subIndex) in route.children")
            md-list-item.md-inset(:key="subIndex")
              router-link(:to="`${route.path}/${subRoute.path}`", v-text="subRoute.name")
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
