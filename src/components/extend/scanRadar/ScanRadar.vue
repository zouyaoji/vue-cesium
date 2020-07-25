<template>
  <i :class="$options.name" style="display: none !important">
    <vc-stage-process-post ref="stage" :fragmentShader="fsScanSegment" :uniforms="uniforms"></vc-stage-process-post>
  </i>
</template>

<script>
import cmp from '../../../mixins/virtualCmp'
import { position, color } from '../../../mixins/mixinProps'
export default {
  name: 'vc-scan-radar',
  mixins: [cmp, position, color],
  props: {
    radius: {
      type: Number,
      default: 1500
    },
    interval: {
      type: Number,
      default: 3000
    }
  },
  mounted () {
    this.$parent.createPromise.then(({ Cesium, viewer }) => {
      const { $props, transformProps } = this
      const options = transformProps($props)
      const cartographicCenter = Cesium.Cartographic.fromCartesian(options.position)
      const _Cartesian3Center = Cesium.Cartographic.toCartesian(cartographicCenter)
      const _Cartesian4Center = new Cesium.Cartesian4(_Cartesian3Center.x, _Cartesian3Center.y, _Cartesian3Center.z, 1)
      const _CartographicCenter1 = new Cesium.Cartographic(cartographicCenter.longitude, cartographicCenter.latitude, cartographicCenter.height + 500)
      const _Cartesian3Center1 = Cesium.Cartographic.toCartesian(_CartographicCenter1)
      const _Cartesian4Center1 = new Cesium.Cartesian4(_Cartesian3Center1.x, _Cartesian3Center1.y, _Cartesian3Center1.z, 1)
      const _CartographicCenter2 = new Cesium.Cartographic(cartographicCenter.longitude + Cesium.Math.toRadians(0.001), cartographicCenter.latitude, cartographicCenter.height)
      const _Cartesian3Center2 = Cesium.Cartographic.toCartesian(_CartographicCenter2)
      const _Cartesian4Center2 = new Cesium.Cartesian4(_Cartesian3Center2.x, _Cartesian3Center2.y, _Cartesian3Center2.z, 1)
      const _RotateQ = new Cesium.Quaternion()
      const _RotateM = new Cesium.Matrix3()
      const _time = (new Date()).getTime()
      const _scratchCartesian4Center = new Cesium.Cartesian4()
      const _scratchCartesian4Center1 = new Cesium.Cartesian4()
      const _scratchCartesian4Center2 = new Cesium.Cartesian4()
      const _scratchCartesian3Normal = new Cesium.Cartesian3()
      const _scratchCartesian3Normal1 = new Cesium.Cartesian3()
      this.uniforms = {
        u_scanCenterEC: function () {
          return Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center)
        },
        u_scanPlaneNormalEC: function () {
          const temp = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center)
          const temp1 = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center1, _scratchCartesian4Center1)
          _scratchCartesian3Normal.x = temp1.x - temp.x
          _scratchCartesian3Normal.y = temp1.y - temp.y
          _scratchCartesian3Normal.z = temp1.z - temp.z
          Cesium.Cartesian3.normalize(_scratchCartesian3Normal, _scratchCartesian3Normal)
          return _scratchCartesian3Normal
        },
        u_radius: options.radius,
        u_scanLineNormalEC: function () {
          const temp = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center)
          const temp1 = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center1, _scratchCartesian4Center1)
          const temp2 = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center2, _scratchCartesian4Center2)
          _scratchCartesian3Normal.x = temp1.x - temp.x
          _scratchCartesian3Normal.y = temp1.y - temp.y
          _scratchCartesian3Normal.z = temp1.z - temp.z
          Cesium.Cartesian3.normalize(_scratchCartesian3Normal, _scratchCartesian3Normal)
          _scratchCartesian3Normal1.x = temp2.x - temp.x
          _scratchCartesian3Normal1.y = temp2.y - temp.y
          _scratchCartesian3Normal1.z = temp2.z - temp.z
          const tempTime = (((new Date()).getTime() - _time) % options.interval) / options.interval
          Cesium.Quaternion.fromAxisAngle(_scratchCartesian3Normal, tempTime * Cesium.Math.PI * 2, _RotateQ)
          Cesium.Matrix3.fromQuaternion(_RotateQ, _RotateM)
          Cesium.Matrix3.multiplyByVector(_RotateM, _scratchCartesian3Normal1, _scratchCartesian3Normal1)
          Cesium.Cartesian3.normalize(_scratchCartesian3Normal1, _scratchCartesian3Normal1)
          return _scratchCartesian3Normal1
        },
        u_scanColor: options.color
      }
    })
  },
  methods: {
    async createCesiumObject () {
      return this.$refs.stage.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
        return cesiumObject
      })
    },
    async mount () {
      return true
    },
    async unmount () {
      return true
    }
  },
  created () {
    Object.defineProperties(this, {
      postProcessStage: {
        enumerable: true,
        get: () => this.cesiumObject
      },
      postProcessStages: {
        enumerable: true,
        get: () => this.$services && this.$services.postProcessStages
      }
    })
  },
  data () {
    return {
      nowaiting: true,
      fsScanSegment: `
        uniform sampler2D colorTexture;
        uniform sampler2D depthTexture;
        varying vec2 v_textureCoordinates;
        uniform vec4 u_scanCenterEC;
        uniform vec3 u_scanPlaneNormalEC;
        uniform vec3 u_scanLineNormalEC;
        uniform float u_radius;
        uniform vec4 u_scanColor;
        vec4 toEye(in vec2 uv, in float depth)
        {
          vec2 xy = vec2((uv.x * 2.0 - 1.0),(uv.y * 2.0 - 1.0));
          vec4 posInCamera =czm_inverseProjection * vec4(xy, depth, 1.0);
          posInCamera =posInCamera / posInCamera.w;
          return posInCamera;
        }
        bool isPointOnLineRight(in vec3 ptOnLine, in vec3 lineNormal, in vec3 testPt)
        {
          vec3 v01 = testPt - ptOnLine;
          normalize(v01);
          vec3 temp = cross(v01, lineNormal);
          float d = dot(temp, u_scanPlaneNormalEC);
          return d > 0.5;
        }
        vec3 pointProjectOnPlane(in vec3 planeNormal, in vec3 planeOrigin, in vec3 point)
        {
          vec3 v01 = point -planeOrigin;
          float d = dot(planeNormal, v01) ;
          return (point - planeNormal * d);
        }
        float distancePointToLine(in vec3 ptOnLine, in vec3 lineNormal, in vec3 testPt)
        {
          vec3 tempPt = pointProjectOnPlane(lineNormal, ptOnLine, testPt);
          return length(tempPt - ptOnLine);
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
          float twou_radius = u_radius * 2.0;
          if(dis < u_radius)
          {
            float f0 = 1.0 -abs(u_radius - dis) / u_radius;
            f0 = pow(f0, 64.0);
            vec3 lineEndPt = vec3(u_scanCenterEC.xyz) + u_scanLineNormalEC * u_radius;
            float f = 0.0;
            if(isPointOnLineRight(u_scanCenterEC.xyz, u_scanLineNormalEC.xyz, prjOnPlane.xyz))
            {
              float dis1= length(prjOnPlane.xyz - lineEndPt);
              f = abs(twou_radius -dis1) / twou_radius;
              f = pow(f, 3.0);
            }
            gl_FragColor = mix(gl_FragColor, u_scanColor, f + f0);
          }
        }`,
      uniforms: {}
    }
  }
}
</script>
