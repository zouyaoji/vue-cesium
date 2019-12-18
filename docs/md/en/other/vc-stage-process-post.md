# PostProcessStage

The `vc-stage-process-post` component is used to run a post-process stage on either the texture rendered by the scene or the output of a previous post-process stage.

## Example

### Load a PostProcessStage

#### Preview

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

#### Code

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

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ---------------------- | ------- | ------ | -------------------------------------------------------------------------- |
| fragmentShader | String | | `required` The fragment shader to use. The default sampler2D uniforms are colorTexture and depthTexture.|
| uniforms | Object | | `optional` An object whose properties will be used to set the shaders uniforms.  |
| textureScale | Number | `1.0` | `optional` A number in the range (0.0, 1.0] used to scale the texture dimensions. A scale of 1.0 will render this post-process stage to a texture the size of the viewport.|
| forcePowerOfTwo | Boolean | `false` | `optional` Whether or not to force the texture dimensions to be both equal powers of two. The power of two will be the next power of two of the minimum of the dimensions.|
| sampleMode | Number | `0` | `optional` How to sample the input color texture. **{NEAREST: 0, LINEAR: 1}**|
| pixelFormat | Number | | `optional` The color pixel format of the output texture. |
| pixelDatatype | Number | | `optional` The pixel data type of the output texture. |
| clearColor | Object\|Array\|String | `BLACK` | `optional` The color to clear the output texture to. |
| scissorRectangle | Object | | `optional` The rectangle to use for the scissor test. |
| name | String | | `optional` The unique name of this post-process stage for reference by other stages in a composite. If a name is not supplied, a GUID will be generated. |

---

## Event

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |

---
