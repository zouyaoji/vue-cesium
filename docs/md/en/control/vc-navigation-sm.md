# VcNavigationSM

The `vc-navigation-sm` component is used to load the navigation compass widget of SuperMap style. **Note:** This component requires `import 'vue-cesium/lib/vc-navigation-sm.css'`, Requires `css-loader`.

## Example

### Load a VcNavigation

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-navigation-sm ref="navigation" :options="options"></vc-navigation-sm>
      </vc-viewer>
      <div class="demo-tool">
        <span>EnableCompass</span>
        <md-switch v-model="options.enableCompass"></md-switch>
        <span>EnableZoomControl</span>
        <md-switch v-model="options.enableZoomControl"></md-switch>
        <span>EnableCompassOuterRing</span>
        <md-switch v-model="options.enableCompassOuterRing"></md-switch>
      </div>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          options: {
            enableCompass: true,
            enableZoomControl: true,
            enableCompassOuterRing: true
          }
        }
      },
      methods: {
        ready (cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const {Cesium, viewer} = this.cesiumInstance
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-navigation ref="navigation" :options="options"></vc-navigation>
    </vc-viewer>
    <div class="demo-tool">
      <span>EnableCompass</span>
      <md-switch v-model="options.enableCompass"></md-switch>
      <span>EnableZoomControl</span>
      <md-switch v-model="options.enableZoomControl"></md-switch>
      <span>EnableCompassOuterRing</span>
      <md-switch v-model="options.enableCompassOuterRing"></md-switch>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: {
          enableCompass: true,
          enableZoomControl: true,
          enableCompassOuterRing: true
        }
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| enableCompass | Boolean | `true` | `optional` option used to enable or disable the compass. |
| enableZoomControl | Boolean | `true` | `optional` option used to enable or disable the zoom control. |
| enableCompassOuterRing | Boolean | `true` | `optional` option used to enable or disable the Compass Outer Ring. |

---

## Event

| name  | parameter        | description                                                                                    |
| ----- | ---------------- | ---------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer} | Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance. |
