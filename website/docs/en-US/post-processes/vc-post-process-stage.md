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
      <vc-provider-imagery-osm></vc-provider-imagery-osm>
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

| Name             | Type                  | Default | Description                                                                                           |
| ---------------- | --------------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| fragmentShader   | String                |         | `required` 指定着色器代码。                                                                           |
| uniforms         | Object                |         | `optional` 指定着色器 uniforms 参数。uniform 变量一般用来表示：变换矩阵，材质，光照参数和颜色等信息。 |
| textureScale     | Number                | `1.0`   | `optional` 指定纹理尺寸缩放比例，取值范围 (0.0, 1.0] 。                                               |
| forcePowerOfTwo  | Boolean               | `false` | `optional` 是否强制将纹理尺寸都等于 2 的幂。 2 的幂将是最小维度中 2 的下一个幂。                      |
| sampleMode       | Number                | `0`     | `optional` 指定输入颜色纹理的采样方式。 **{NEAREST: 0, LINEAR: 1}**                                   |
| pixelFormat      | Number                |         | `optional` 指定输出纹理的像素格式。                                                                   |
| pixelDatatype    | Number                |         | `optional` 指定输出纹理的数据类型。                                                                   |
| clearColor       | Object\|Array\|String | `BLACK` | `optional` 指定清除输出纹理的颜色。                                                                   |
| scissorRectangle | Object                |         | `optional` 指定用于测试的矩形。                                                                       |
| name             | String                |         | `optional` 指定唯一名称，未提供默认生成 GUID。                                                        |

### Events

| Name       | Parameters                         | Description                                            |
| ---------- | ---------------------------------- | ------------------------------------------------------ |
| beforeLoad | Vue Instance                       | Triggers before the cesiumObject is loaded.            |
| ready      | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | Vue Instance                       | Triggers when the cesiumObject is destroyed.           |

### Reference

- Refer to the official documentation: [PostProcessStage](https://cesium.com/docs/cesiumjs-ref-doc/PostProcessStage.html)
