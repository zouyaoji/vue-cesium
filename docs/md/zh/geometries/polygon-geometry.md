# Polygon 几何对象

`polygon-geometry`可以加载矩形，属于 Primitive API，作为`primitive`或`ground-primitive`的子组件将矩形添加到场景，用`ground-primitive`的添加出来是贴地形的。

## 示例

### 添加 PolygonGeometry 到场景

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <cesium-viewer @ready="ready">
        <ground-primitive :appearance="appearance">
          <geometry-instance>
            <rectangle-geometry :rectangle="rectangle" :height="height"></rectangle-geometry>
          </geometry-instance>
          <geometry-instance>
            <polygon-geometry :polygonHierarchy="polygonHierarchy" :height="height" :extrudedHeight="30" :perPositionHeight="true"></polygon-geometry>
          </geometry-instance>
        </ground-primitive>
      </cesium-viewer>
    </div>
  </template>

  <script>
    export default {
      data () {
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
          rectangle: {west: 110.5, south: 29.5, east: 115.5,  north: 34.5}
        }
      },
      methods: {
        ready (cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const {Cesium, viewer} = this.cesiumInstance
          // this.appearance = new Cesium.MaterialAppearance({
          //   material: Cesium.Material.fromType('Checkerboard', {
          //     repeat : new Cesium.Cartesian2(20.0, 6.0)
          //   }),
          //   materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED
          // })
          this.appearance = new Cesium.EllipsoidSurfaceAppearance({
            material: new Cesium.Material({
              fabric: {
                type: 'Water',
                uniforms: {
                  normalMap: './statics/SampleData/images/waterNormals.png',
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
    <cesium-viewer @ready="ready">
      <primitive :appearance="appearance">
        <geometry-instance>
          <rectangle-geometry :rectangle="rectangle" :height="height"></rectangle-geometry>
        </geometry-instance>
        <geometry-instance>
          <polygon-geometry
            :polygonHierarchy="polygonHierarchy"
            :height="height"
            :extrudedHeight="30"
            :perPositionHeight="true"
          ></polygon-geometry>
        </geometry-instance>
      </primitive>
    </cesium-viewer>
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
        // this.appearance = new Cesium.MaterialAppearance({
        //   material: Cesium.Material.fromType('Checkerboard', {
        //     repeat : new Cesium.Cartesian2(20.0, 6.0)
        //   }),
        //   materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED
        // })
        this.appearance = new Cesium.EllipsoidSurfaceAppearance({
          material: new Cesium.Material({
            fabric: {
              type: 'Water',
              uniforms: {
                normalMap: './statics/SampleData/images/waterNormals.png',
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

参考官方文档 [PolygonGeometry](https://cesium.com/docs/cesiumjs-ref-doc/PolygonGeometry.html)

<!-- |属性名|类型|默认值|描述|
|------|-----|-----|----|

--- -->

## 事件

| 事件名 | 参数             | 描述                                                |
| ------ | ---------------- | --------------------------------------------------- |
| ready  | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
