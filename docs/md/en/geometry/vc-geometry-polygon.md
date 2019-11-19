# PolygonGeometry

The `vc-geometry-polygon` component is used to load a rectangle geometry. Need to be used as a subcomponent of `vc-instance-geometry`. Can be mounted to `vc-primitive` or `vc-primitive-ground`.

## Example

### Load PolygonGeometry with `vc-geometry-polygon`

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-primitive-ground :appearance="appearance">
          <vc-instance-geometry>
            <vc-geometry-polygon :polygonHierarchy="polygonHierarchy" :height="height" :extrudedHeight="30"></vc-geometry-polygon>
          </vc-instance-geometry>
          <vc-instance-geometry>
            <vc-geometry-rectangle :rectangle="rectangle" :height="height"></vc-geometry-rectangle>
          </vc-instance-geometry>
        </vc-primitive-ground>
      </vc-viewer>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          appearance: null,
          geometry: null,
          polygonHierarchy: [
            { lng: 102.1, lat: 29.5 },
            { lng: 106.2, lat: 29.5 },
            { lng: 106.2, lat: 33.5 },
            { lng: 108.2, lat: 35.5 },
            { lng: 102.1, lat: 33.5 }
          ],
          height: 100000,
          rectangle: { west: 110.5, south: 29.5, east: 115.5, north: 34.5 }
        }
      },
      methods: {
        ready(cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const { Cesium, viewer } = this.cesiumInstance
          this.appearance = new Cesium.EllipsoidSurfaceAppearance({
            material: new Cesium.Material({
              fabric: {
                type: 'Water',
                uniforms: {
                  normalMap: './statics/SampleData/images/waterNormals.jpg',
                  frequency: 1000.0,
                  animationSpeed: 0.05,
                  amplitude: 10.0
                }
              }
            }),
            fragmentShaderSource: `
              varying vec3 v_positionMC;
              varying vec3 v_positionEC;
              varying vec2 v_st;

              void main()
              {
                  czm_materialInput materialInput;
                  vec3 normalEC = normalize(czm_normal3D * czm_geodeticSurfaceNormal(v_positionMC, vec3(0.0), vec3(1.0)));
              #ifdef FACE_FORWARD
                  normalEC = faceforward(normalEC, vec3(0.0, 0.0, 1.0), -normalEC);
              #endif
                  materialInput.s = v_st.s;
                  materialInput.st = v_st;
                  materialInput.str = vec3(v_st, 0.0);
                  materialInput.normalEC = normalEC;
                  materialInput.tangentToEyeMatrix = czm_eastNorthUpToEyeCoordinates(v_positionMC, materialInput.normalEC);
                  vec3 positionToEyeEC = -v_positionEC;
                  materialInput.positionToEyeEC = positionToEyeEC;
                  czm_material material = czm_getMaterial(materialInput);
              #ifdef FLAT
                  gl_FragColor = vec4(material.diffuse + material.emission, material.alpha);
              #else
                  gl_FragColor = czm_phong(normalize(positionToEyeEC), material);
                  gl_FragColor.a = 0.5;
              #endif
              }`
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
    <vc-viewer @ready="ready">
      <vc-primitive-ground :appearance="appearance">
        <vc-instance-geometry>
          <vc-geometry-polygon :polygonHierarchy="polygonHierarchy" :height="height" :extrudedHeight="30"></vc-geometry-polygon>
        </vc-instance-geometry>
        <vc-instance-geometry>
          <vc-geometry-rectangle :rectangle="rectangle" :height="height"></vc-geometry-rectangle>
        </vc-instance-geometry>
      </vc-primitive-ground>
    </vc-viewer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        appearance: null,
        geometry: null,
        polygonHierarchy: [
          { lng: 102.1, lat: 29.5 },
          { lng: 106.2, lat: 29.5 },
          { lng: 106.2, lat: 33.5 },
          { lng: 108.2, lat: 35.5 },
          { lng: 102.1, lat: 33.5 }
        ],
        height: 100000,
        rectangle: { west: 110.5, south: 29.5, east: 115.5, north: 34.5 }
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
        this.appearance = new Cesium.EllipsoidSurfaceAppearance({
          material: new Cesium.Material({
            fabric: {
              type: 'Water',
              uniforms: {
                normalMap: './statics/SampleData/images/waterNormals.jpg',
                frequency: 1000.0,
                animationSpeed: 0.05,
                amplitude: 10.0
              }
            }
          }),
          fragmentShaderSource: `
            varying vec3 v_positionMC;
            varying vec3 v_positionEC;
            varying vec2 v_st;

            void main()
            {
                czm_materialInput materialInput;
                vec3 normalEC = normalize(czm_normal3D * czm_geodeticSurfaceNormal(v_positionMC, vec3(0.0), vec3(1.0)));
            #ifdef FACE_FORWARD
                normalEC = faceforward(normalEC, vec3(0.0, 0.0, 1.0), -normalEC);
            #endif
                materialInput.s = v_st.s;
                materialInput.st = v_st;
                materialInput.str = vec3(v_st, 0.0);
                materialInput.normalEC = normalEC;
                materialInput.tangentToEyeMatrix = czm_eastNorthUpToEyeCoordinates(v_positionMC, materialInput.normalEC);
                vec3 positionToEyeEC = -v_positionEC;
                materialInput.positionToEyeEC = positionToEyeEC;
                czm_material material = czm_getMaterial(materialInput);
            #ifdef FLAT
                gl_FragColor = vec4(material.diffuse + material.emission, material.alpha);
            #else
                gl_FragColor = czm_phong(normalize(positionToEyeEC), material);
                gl_FragColor.a = 0.5;
            #endif
            }`
        })
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ----------------- | -------------- | ------- | --------------------------------------------------------------------------------------------------------- |
| polygonHierarchy | Object\|Array | | `required` A polygon hierarchy that can include holes. |
| height | Number | `0` | `optional` The distance in meters between the polygon and the ellipsoid surface. |
| extrudedHeight | Number | | `optional` The distance in meters between the polygon's extruded face and the ellipsoid surface. |
| vertexFormat | Object | | `optional` The vertex attributes to be computed. |
| stRotation | Number\|Object | `0.0` | `optional` The rotation of the texture coordinates, in radians. A positive rotation is counter-clockwise. |
| ellipsoid | Object | | `optional` The ellipsoid to be used as a reference. |
| granularity | Number | | `optional` The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer. |
| perPositionHeight | Boolean | `false` | `optional` Use the height of options.positions for each position instead of using options.height to determine the height. |
| closeTop | Boolean | `true` | `optional` When false, leaves off the top of an extruded polygon open. |
| closeBottom | Boolean | `true` | `optional` When false, leaves off the bottom of an extruded polygon open. |
| arcType | Number | `1` | `optional` The type of line the polygon edges must follow. Valid options are ArcType.GEODESIC and ArcType.RHUMB. **NONE: 0, GEODESIC: 1, RHUMB: 2** |

---

- structure of hierarchy

```js
// Array
[{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}]
// Object
{
  positions: [{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}],
  holes: [
    {
      positions: [{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}],
      holes: [
        positions: [{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}]
        // ...
      ]
    }
  ]
}

```

Refer to the official document: **[PolygonGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolygonGeometry.html)**

## Events

| name  | parameter                      | description                                                                                                       |
| ----- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
