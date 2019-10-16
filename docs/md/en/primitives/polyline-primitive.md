# polyline-primitive

`polyline-primitive` A renderable polyline, create it with `polyline-collection`.

## Examples

### Add some polylines to viewer by PolylinePrimitive

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready" scene3DOnly>
        <polyline-collection>
          <polyline-primitive :positions="positions1" :material="material1" :width="5"></polyline-primitive>
        </polyline-collection>
        <polyline-collection>
          <polyline-primitive :positions="positions2" :material="material2" :width="10"></polyline-primitive>
        </polyline-collection>
        <polyline-collection>
          <polyline-primitive :positions="positions3" :material="material3" :width="10"></polyline-primitive>
        </polyline-collection>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          polyline1: {},
          positions1: [],
          material1: undefined,
          polyline2: {},
          positions2: [],
          material2: undefined,
          polyline3: {},
          positions3: [],
          material3: undefined,
          polylines: []
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          this.positions1.push(Cesium.Cartesian3.fromDegrees(90, 20, 10000))
          this.positions1.push(Cesium.Cartesian3.fromDegrees(120, 20, 10000))
          this.material1 = new Cesium.Material({
            fabric: {
              type: 'Color',
              uniforms: {
                  color: Cesium.Color.RED
              }
            }
          })
          this.positions2.push(Cesium.Cartesian3.fromDegrees(90, 30, 10000))
          this.positions2.push(Cesium.Cartesian3.fromDegrees(120, 30, 10000))
          this.material2 = new Cesium.Material({
            fabric: {
              type: 'PolylineGlow',
              uniforms: {
                  color: Cesium.Color.BLUE
              }
            }
          })
          this.positions3.push(Cesium.Cartesian3.fromDegrees(90, 40, 10000))
          this.positions3.push(Cesium.Cartesian3.fromDegrees(120, 40, 10000))
          this.material3 = new Cesium.Material({
            fabric: {
              type: 'PolylineArrow',
              uniforms: {
                  color: Cesium.Color.PURPLE
              }
            }
          })
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <cesium-viewer @ready="ready" scene3DOnly>
      <polyline-collection>
        <polyline-primitive :positions="positions1" :material="material1" :width="5"></polyline-primitive>
      </polyline-collection>
      <polyline-collection>
        <polyline-primitive :positions="positions2" :material="material2" :width="10"></polyline-primitive>
      </polyline-collection>
      <polyline-collection>
        <polyline-primitive :positions="positions3" :material="material3" :width="10"></polyline-primitive>
      </polyline-collection>
    </cesium-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        polyline1: {},
        positions1: [],
        material1: undefined,
        polyline2: {},
        positions2: [],
        material2: undefined,
        polyline3: {},
        positions3: [],
        material3: undefined,
        polylines: []
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.positions1.push(Cesium.Cartesian3.fromDegrees(90, 20, 10000))
        this.positions1.push(Cesium.Cartesian3.fromDegrees(120, 20, 10000))
        this.material1 = new Cesium.Material({
          fabric: {
            type: 'Color',
            uniforms: {
              color: Cesium.Color.RED
            }
          }
        })
        this.positions2.push(Cesium.Cartesian3.fromDegrees(90, 30, 10000))
        this.positions2.push(Cesium.Cartesian3.fromDegrees(120, 30, 10000))
        this.material2 = new Cesium.Material({
          fabric: {
            type: 'PolylineGlow',
            uniforms: {
              color: Cesium.Color.BLUE
            }
          }
        })
        this.positions3.push(Cesium.Cartesian3.fromDegrees(90, 40, 10000))
        this.positions3.push(Cesium.Cartesian3.fromDegrees(120, 40, 10000))
        this.material3 = new Cesium.Material({
          fabric: {
            type: 'PolylineArrow',
            uniforms: {
              color: Cesium.Color.PURPLE
            }
          }
        })
      }
    }
  }
</script>
```

## Instance Properties

- Reference official document [Polyline](https://cesium.com/docs/cesiumjs-ref-doc/Polyline.html).

<!-- |属性名|类型|默认值|描述|
|------|-----|-----|----|

--- -->

## Events

| name  | parameter        | description                                                                                 |
| ----- | ---------------- | ------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance. |
