## VcPostProcessStage

加载后期处理特效，相当于初始化一个 `Cesium.PostProcessStage` 实例。

### 基础用法

后期处理特效组件的基础用法。

:::demo 使用 `vc-post-process-stage` 标签在三维球上添加一个下雨后处理效果。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-post-process-stage ref="stage" :fragmentShader="fragmentShader"></vc-post-process-stage>
    <!-- 底图 -->
    <vc-layer-imagery :sort-order="20">
      <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-layer-imagery :sort-order="10">
      <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
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

### 属性

| 属性名           | 类型                  | 默认值  | 描述                                                                                                  |
| ---------------- | --------------------- | ------- | ----------------------------------------------------------------------------------------------------- |
| fragmentShader   | string                |         | `required` 指定着色器代码。                                                                           |
| uniforms | any                |         | `optional` 指定着色器 uniforms 参数。uniform 变量一般用来表示：变换矩阵，材质，光照参数和颜色等信息。 |
| textureScale     | number                | `1.0`   | `optional` 指定纹理尺寸缩放比例，取值范围 (0.0, 1.0] 。                                               |
| forcePowerOfTwo  | boolean               | `false` | `optional` 是否强制将纹理尺寸都等于 2 的幂。 2 的幂将是最小维度中 2 的下一个幂。                      |
| sampleMode       | number                | `0`     | `optional` 指定输入颜色纹理的采样方式。 **{NEAREST: 0, LINEAR: 1}**                                   |
| pixelFormat      | number                |         | `optional` 指定输出纹理的像素格式。                                                                   |
| pixelDatatype    | number                |         | `optional` 指定输出纹理的数据类型。                                                                   |
| clearColor | VcColor\|Array\|string | `BLACK` | `optional` 指定清除输出纹理的颜色。                                                                   |
| scissorRectangle | VcBoundingRectangle                |         | `optional` 指定用于测试的矩形。                                                                       |
| name             | string                |         | `optional` 指定唯一名称，未提供默认生成 GUID。                                                        |

### 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### 参考

- 官方文档： [PostProcessStage](https://cesium.com/docs/cesiumjs-ref-doc/PostProcessStage.html)
