<!--
 * @Author: zouyaoji 370681295@qq.com
 * @Date: 2023-02-18 13:40:50
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2023-03-03 17:30:48
 * @FilePath: \vue-cesium@next\website\docs\en-US\post-processes\vc-post-process-stage.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

## VcPostProcessStage

Loading post-processing effects. It is equivalent to initializing a `Cesium.PostProcessStage` instance.

### Basic usage

Basic usage of VcPostProcessStage component.

:::demo Use the `vc-post-process-stage` tag to add a raining effect on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-post-process-stage ref="stage" :fragmentShader="fragmentShader"></vc-post-process-stage>
    <vc-layer-imagery>
      <vc-imagery-provider-osm></vc-imagery-provider-osm>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="load">Reload</el-button>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        fragmentShader: `
          uniform sampler2D colorTexture;
          in vec2 v_textureCoordinates;
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
            out_FragColor = mix(texture(colorTexture, v_textureCoordinates), vec4(c,1), 0.5);
          }
         `
      }
    },
    methods: {
      unload() {
        this.$refs.stage.unload()
      },
      load() {
        this.$refs.stage.load()
      },
      reload() {
        this.$refs.stage.reload()
      }
    }
  }
</script>
```

:::

### Props

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---------------- | --------------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| fragmentShader | string | | `required` The fragment shader to use. The default sampler2D uniforms are colorTexture and depthTexture. The color texture is the output of rendering the scene or the previous stage. The depth texture is the output from rendering the scene. The shader should contain one or both uniforms. There is also a vec2 varying named v_textureCoordinates that can be used to sample the textures. |
| uniforms | any | | `optional` An object whose properties will be used to set the shaders uniforms. The properties can be constant values or a function. A constant value can also be a URI, data URI, or HTML element to use as a texture. |
| textureScale | number | `1.0` | `optional` A number in the range (0.0, 1.0] used to scale the texture dimensions. A scale of 1.0 will render this post-process stage to a texture the size of the viewport. |
| forcePowerOfTwo | boolean | `false` | `optional` Whether or not to force the texture dimensions to be both equal powers of two. The power of two will be the next power of two of the minimum of the dimensions. |
| sampleMode | number | `0` | `optional` How to sample the input color texture. **{NEAREST: 0, LINEAR: 1}** |
| pixelFormat | number | | `optional` The color pixel format of the output texture. |
| pixelDatatype | number | | `optional` The pixel data type of the output texture. |
| clearColor | VcColor\|Array\|string | `BLACK` | `optional` The color to clear the output texture to. |
| scissorRectangle | VcBoundingRectangle | | `optional` The rectangle to use for the scissor test. |
| name | string | | `optional` The unique name of this post-process stage for reference by other stages in a composite. If a name is not supplied, a GUID will be generated. |

### Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### Reference

- Refer to the official documentation: [PostProcessStage](https://cesium.com/docs/cesiumjs-ref-doc/PostProcessStage.html)
