# PostProcessStageCollection

The `vc-collection-stage-process-post` component is used to load a collection of PostProcessStages. Note that this component will replace `scene.postProcessStages` directly.

## Example

### Load PostProcessStageCollection

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" >
        <vc-collection-stage-process-post>
          <vc-stage-process-post :fragmentShader="fsRain"></vc-stage-process-post>
          <vc-stage-process-post :fragmentShader="fsScanSegment" :uniforms="uniforms"></vc-stage-process-post>
        </vc-collection-stage-process-post>
      </vc-viewer>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          uniforms: {},
          fsRain: `
            uniform sampler2D colorTexture;
            varying vec2 v_textureCoordinates;
            float hash(float x){
              return fract(sin(x*23.3)*13.13);
            }
            void main(void){
              float time = czm_frameNumber / 60.0;
              vec2 resolution = czm_viewport.zw;
              vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);
              vec3 c=vec3(.6,.7,.8);
              float a=-.4;
              float si=sin(a),co=cos(a);
              uv*=mat2(co,-si,si,co);
              uv*=length(uv+vec2(0,4.9))*.3+1.;
              float v=1.-sin(hash(floor(uv.x*100.))*2.);
              float b=clamp(abs(sin(20.*time*v+uv.y*(5./(2.+v))))-.95,0.,1.)*20.;
              c*=v*b;
              gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), vec4(c,1), 0.5);
            }`,
          fsScanSegment: `
            uniform sampler2D colorTexture;
            uniform sampler2D depthTexture;
            varying vec2 v_textureCoordinates;
            uniform vec4 u_scanCenterEC;
            uniform vec3 u_scanPlaneNormalEC;
            uniform float u_radius;
            uniform vec4 u_scanColor;
            vec4 toEye(in vec2 uv, in float depth)
            {
              vec2 xy = vec2((uv.x * 2.0 - 1.0),(uv.y * 2.0 - 1.0));
              vec4 posInCamera =czm_inverseProjection * vec4(xy, depth, 1.0);
              posInCamera =posInCamera / posInCamera.w;
              return posInCamera;
            }
            vec3 pointProjectOnPlane(in vec3 planeNormal, in vec3 planeOrigin, in vec3 point)
            {
              vec3 v01 = point -planeOrigin;
              float d = dot(planeNormal, v01) ;
              return (point - planeNormal * d);
            }
            float getDepth(in vec4 depth)
            {
              float z_window = czm_unpackDepth(depth);
              z_window = czm_reverseLogDepth(z_window);
              float n_range = czm_depthRange.near;
              float f_range = czm_depthRange.far;
              return (2.0 * z_window - n_range - f_range) / (f_range - n_range);
            }
            void main()
            {
              gl_FragColor = texture2D(colorTexture, v_textureCoordinates);
              float depth = getDepth( texture2D(depthTexture, v_textureCoordinates));
              vec4 viewPos = toEye(v_textureCoordinates, depth);
              vec3 prjOnPlane = pointProjectOnPlane(u_scanPlaneNormalEC.xyz, u_scanCenterEC.xyz, viewPos.xyz);
              float dis = length(prjOnPlane.xyz - u_scanCenterEC.xyz);
              if(dis < u_radius)
              {
                float f = 1.0 -abs(u_radius - dis) / u_radius;
                f = pow(f, 4.0);
                gl_FragColor = mix(gl_FragColor, u_scanColor, f);
              }
            }`
        }
      },
      methods: {
        ready (cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          const {Cesium, viewer} = this.cesiumInstance
          let scanColor = new Cesium.Color(1.0, 0.0, 0.0, 1)
          let maxRadius = 50000
          let duration = 1000
          let cartographicCenter = new Cesium.Cartographic(Cesium.Math.toRadians(103.65), Cesium.Math.toRadians(32.07), 2290 + 250)
          var _Cartesian3Center = Cesium.Cartographic.toCartesian(cartographicCenter)
          var _Cartesian4Center = new Cesium.Cartesian4(_Cartesian3Center.x, _Cartesian3Center.y, _Cartesian3Center.z, 1)
          var _CartographicCenter1 = new Cesium.Cartographic(cartographicCenter.longitude, cartographicCenter.latitude, cartographicCenter.height + 500)
          var _Cartesian3Center1 = Cesium.Cartographic.toCartesian(_CartographicCenter1)
          var _Cartesian4Center1 = new Cesium.Cartesian4(_Cartesian3Center1.x, _Cartesian3Center1.y, _Cartesian3Center1.z, 1)
          var _time = (new Date()).getTime()
          var _scratchCartesian4Center = new Cesium.Cartesian4()
          var _scratchCartesian4Center1 = new Cesium.Cartesian4()
          var _scratchCartesian3Normal = new Cesium.Cartesian3()
          this.uniforms = {
            u_scanCenterEC: function () {
              return Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center)
            },
            u_scanPlaneNormalEC: function () {
              var temp = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center)
              var temp1 = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center1, _scratchCartesian4Center1)
              _scratchCartesian3Normal.x = temp1.x - temp.x
              _scratchCartesian3Normal.y = temp1.y - temp.y
              _scratchCartesian3Normal.z = temp1.z - temp.z
              Cesium.Cartesian3.normalize(_scratchCartesian3Normal, _scratchCartesian3Normal)
              return _scratchCartesian3Normal
            },
            u_radius: function () {
              return maxRadius * (((new Date()).getTime() - _time) % duration) / duration
            },
            u_scanColor: scanColor
          }
          viewer.camera.setView({
            destination: new Cesium.Cartesian3(-1393343.0290741834, 5456331.793439052, 3386100.742517333),
            orientation: {
              heading: 5.876909627704607,
              pitch: -1.2896948627752063,
              roll: 6.281977273529364
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
    <vc-viewer @ready="ready">
      <vc-collection-stage-process-post>
        <vc-stage-process-post :fragmentShader="fsRain"></vc-stage-process-post>
        <vc-stage-process-post :fragmentShader="fsScanSegment" :uniforms="uniforms"></vc-stage-process-post>
      </vc-collection-stage-process-post>
    </vc-viewer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        uniforms: {},
        fsRain: `
            uniform sampler2D colorTexture;
            varying vec2 v_textureCoordinates;
            float hash(float x){
              return fract(sin(x*23.3)*13.13);
            }
            void main(void){
              float time = czm_frameNumber / 60.0;
              vec2 resolution = czm_viewport.zw;
              vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);
              vec3 c=vec3(.6,.7,.8);
              float a=-.4;
              float si=sin(a),co=cos(a);
              uv*=mat2(co,-si,si,co);
              uv*=length(uv+vec2(0,4.9))*.3+1.;
              float v=1.-sin(hash(floor(uv.x*100.))*2.);
              float b=clamp(abs(sin(20.*time*v+uv.y*(5./(2.+v))))-.95,0.,1.)*20.;
              c*=v*b;
              gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), vec4(c,1), 0.5);
            }`,
        fsScanSegment: `
            uniform sampler2D colorTexture;
            uniform sampler2D depthTexture;
            varying vec2 v_textureCoordinates;
            uniform vec4 u_scanCenterEC;
            uniform vec3 u_scanPlaneNormalEC;
            uniform float u_radius;
            uniform vec4 u_scanColor;
            vec4 toEye(in vec2 uv, in float depth)
            {
              vec2 xy = vec2((uv.x * 2.0 - 1.0),(uv.y * 2.0 - 1.0));
              vec4 posInCamera =czm_inverseProjection * vec4(xy, depth, 1.0);
              posInCamera =posInCamera / posInCamera.w;
              return posInCamera;
            }
            vec3 pointProjectOnPlane(in vec3 planeNormal, in vec3 planeOrigin, in vec3 point)
            {
              vec3 v01 = point -planeOrigin;
              float d = dot(planeNormal, v01) ;
              return (point - planeNormal * d);
            }
            float getDepth(in vec4 depth)
            {
              float z_window = czm_unpackDepth(depth);
              z_window = czm_reverseLogDepth(z_window);
              float n_range = czm_depthRange.near;
              float f_range = czm_depthRange.far;
              return (2.0 * z_window - n_range - f_range) / (f_range - n_range);
            }
            void main()
            {
              gl_FragColor = texture2D(colorTexture, v_textureCoordinates);
              float depth = getDepth( texture2D(depthTexture, v_textureCoordinates));
              vec4 viewPos = toEye(v_textureCoordinates, depth);
              vec3 prjOnPlane = pointProjectOnPlane(u_scanPlaneNormalEC.xyz, u_scanCenterEC.xyz, viewPos.xyz);
              float dis = length(prjOnPlane.xyz - u_scanCenterEC.xyz);
              if(dis < u_radius)
              {
                float f = 1.0 -abs(u_radius - dis) / u_radius;
                f = pow(f, 4.0);
                gl_FragColor = mix(gl_FragColor, u_scanColor, f);
              }
            }`
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        const { Cesium, viewer } = this.cesiumInstance
        let scanColor = new Cesium.Color(1.0, 0.0, 0.0, 1)
        let maxRadius = 50000
        let duration = 1000
        let cartographicCenter = new Cesium.Cartographic(Cesium.Math.toRadians(103.65), Cesium.Math.toRadians(32.07), 2290 + 250)
        var _Cartesian3Center = Cesium.Cartographic.toCartesian(cartographicCenter)
        var _Cartesian4Center = new Cesium.Cartesian4(_Cartesian3Center.x, _Cartesian3Center.y, _Cartesian3Center.z, 1)
        var _CartographicCenter1 = new Cesium.Cartographic(
          cartographicCenter.longitude,
          cartographicCenter.latitude,
          cartographicCenter.height + 500
        )
        var _Cartesian3Center1 = Cesium.Cartographic.toCartesian(_CartographicCenter1)
        var _Cartesian4Center1 = new Cesium.Cartesian4(_Cartesian3Center1.x, _Cartesian3Center1.y, _Cartesian3Center1.z, 1)
        var _time = new Date().getTime()
        var _scratchCartesian4Center = new Cesium.Cartesian4()
        var _scratchCartesian4Center1 = new Cesium.Cartesian4()
        var _scratchCartesian3Normal = new Cesium.Cartesian3()
        this.uniforms = {
          u_scanCenterEC: function() {
            return Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center)
          },
          u_scanPlaneNormalEC: function() {
            var temp = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center)
            var temp1 = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center1, _scratchCartesian4Center1)
            _scratchCartesian3Normal.x = temp1.x - temp.x
            _scratchCartesian3Normal.y = temp1.y - temp.y
            _scratchCartesian3Normal.z = temp1.z - temp.z
            Cesium.Cartesian3.normalize(_scratchCartesian3Normal, _scratchCartesian3Normal)
            return _scratchCartesian3Normal
          },
          u_radius: function() {
            return (maxRadius * ((new Date().getTime() - _time) % duration)) / duration
          },
          u_scanColor: scanColor
        }
        viewer.camera.setView({
          destination: new Cesium.Cartesian3(-1393343.0290741834, 5456331.793439052, 3386100.742517333),
          orientation: {
            heading: 5.876909627704607,
            pitch: -1.2896948627752063,
            roll: 6.281977273529364
          }
        })
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ---------------------- | ------- | ------ | -------------------------------------------------------------------------- |
| stages | Array | | `optional` Specify the PostProcessStage array.|

---

## Event

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
