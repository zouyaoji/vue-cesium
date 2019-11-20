# PolygonGeometry

`vc-geometry-polygon` 组件用于加载多边形几何体。需要作为 `vc-instance-geometry` 的子组件使用，可以挂载到 `vc-primitive` 或 `vc-primitive-ground`。

## 示例

### 加载多边形几何体

#### 预览

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

#### 代码

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

## 属性

| 属性名            | 类型           | 默认值  | 描述                                                                 |
| ----------------- | -------------- | ------- | -------------------------------------------------------------------- |
| polygonHierarchy  | Object\|Array  |         | `optional` 指定 polygon 的 PolygonHierarchy 属性。                   |
| height            | Number         | `0`     | `optional` 指定 polygon 的高度。                                     |
| extrudedHeight    | Number         |         | `optional` 指定 polygon 拉伸高度。                                   |
| vertexFormat      | Object         |         | `optional` 指定 polygon 要缓存的顶点属性。                           |
| stRotation        | Number\|Object | `0.0`   | `optional` 指定 polygon 纹理按正北方向逆时针旋转角度。               |
| ellipsoid         | Object         |         | `optional` 指定 polygon 参考椭球体。                                 |
| granularity       | Number         |         | `optional` 指定每个经纬度之间的采样粒度。                            |
| perPositionHeight | Boolean        | `false` | `optional` 指定 polygon 是否使用每个位置的高度。                     |
| closeTop          | Boolean        | `true`  | `optional` 指定 polygon 拉伸出来的顶部是否闭合。                     |
| closeBottom       | Boolean        | `true`  | `optional` 指定 polygon 拉伸出来的底部是否闭合。                     |
| arcType           | Number         | `1`     | `optional` 指定 polygon 线条类型。**NONE: 0, GEODESIC: 1, RHUMB: 2** |

---

- polygonHierarchy 结构

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

参考官方文档：**[PolygonGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolygonGeometry.html)**

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
