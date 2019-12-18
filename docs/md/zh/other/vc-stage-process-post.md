# 后期处理

`vc-stage-process-post` 组件用于加载一组后期处理，如加载自定义着色器。

## 示例

### 加载后期处理的着色器

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" >
        <vc-stage-process-post :fragmentShader="fragmentShader"></vc-stage-process-post>
      </vc-viewer>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          fragmentShader: `
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
            }  `
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

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-stage-process-post :fragmentShader="fragmentShader"></vc-stage-process-post>
    </vc-viewer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fragmentShader: `
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
          }  `
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

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ---------------------- | ------- | ------ | -------------------------------------------------------------------------- |
| fragmentShader | String | | `required` 指定着色器代码。|
| uniforms | Object | | `optional` 指定着色器 uniforms 参数。uniform变量一般用来表示：变换矩阵，材质，光照参数和颜色等信息。 |
| textureScale | Number | `1.0` | `optional` 指定纹理尺寸缩放比例，取值范围 (0.0, 1.0] 。|
| forcePowerOfTwo | Boolean | `false` | `optional` 是否强制将纹理尺寸都等于2的幂。 2的幂将是最小维度中2的下一个幂。 |
| sampleMode | Number | `0` | `optional` 指定输入颜色纹理的采样方式。 **{NEAREST: 0, LINEAR: 1}**|
| pixelFormat | Number | | `optional` 指定输出纹理的像素格式。 |
| pixelDatatype | Number | | `optional` 指定输出纹理的数据类型。 |
| clearColor | Object\|Array\|String | `BLACK` | `optional` 指定清除输出纹理的颜色。 |
| scissorRectangle | Object | | `optional` 指定用于测试的矩形。 |
| name | String | | `optional` 指定唯一名称，未提供默认生成GUID。 |

---

## 事件

| 事件名 | 参数             | 描述                                                |
| ------ | ---------------- | --------------------------------------------------- |
| ready  | {Cesium, viewer} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。 |
