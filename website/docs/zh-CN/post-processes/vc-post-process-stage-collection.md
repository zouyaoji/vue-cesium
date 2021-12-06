## VcPostProcessStageCollection

加载后期处理特效集合，管理一组后期处理特效。

可用于挂载 `vc-post-process-stage` 和 `vc-post-process-stage-scan` 组件。

### 基础用法

后期处理特效集合组件的基础用法。

:::demo 使用 `vc-post-process-stage-collection` 标签在三维球上添加一组后处理效果。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="ready">
    <vc-post-process-stage-collection ref="stage" :postProcesses="postProcesses">
      <vc-post-process-stage-scan type="radar" :options="options1"></vc-post-process-stage-scan>
      <vc-post-process-stage-scan type="circle" :options="options2"></vc-post-process-stage-scan>
    </vc-post-process-stage-collection>
    <!-- 底图 -->
    <vc-layer-imagery :sortOrder="20">
      <vc-provider-imagery-tianditu mapStyle="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
    </vc-layer-imagery>
    <vc-layer-imagery :sortOrder="10">
      <vc-provider-imagery-tianditu mapStyle="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
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
        options1: {
          position: [117.217124, 31.809777],
          radius: 1500,
          interval: 1500,
          color: [255, 255, 0, 255]
        },
        options2: {
          position: [117.257124, 31.809777],
          radius: 1500,
          interval: 1500,
          color: [255, 0, 0, 255]
        },
        postProcesses: [
          {
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
        ]
      }
    },
    methods: {
      ready({ viewer }) {
        viewer.scene.globe.depthTestAgainstTerrain = true
        viewer.camera.flyTo({
          destination: Cesium.Cartesian3.fromDegrees(117.237124, 31.809777, 10000.0),
          orientation: {
            heading: Cesium.Math.toRadians(0), // east, default value is 0.0 (north) //东西南北朝向
            pitch: Cesium.Math.toRadians(-90), // default value (looking down)  //俯视仰视视觉
            roll: 0.0 // default value
          },
          duration: 3 //3秒到达战场
        })
      },
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

| 属性名        | 类型  | 默认值 | 描述                                                                  |
| ------------- | ----- | ------ | --------------------------------------------------------------------- |
| postProcesses | Array |        | `optional` 指定后处理集合。 属性与 `vc-post-process-stage` 保持一致。 |

### 事件

| 事件名     | 参数                               | 描述                 |
| ---------- | ---------------------------------- | -------------------- |
| beforeLoad | Vue Instance                       | 对象加载前触发。     |
| ready      | {Cesium, viewer, cesiumObject, vm} | 对象加载成功时触发。 |
| destroyed  | Vue Instance                       | 对象销毁时触发。     |

### 插槽

<!-- prettier-ignore -->
| 插槽名 | 描述 | 子组件 |
| ---- | ----------- | ------- |
| default | 用于挂载后处理组件。 | vc-post-process-stage/vc-post-process-stage-scan |

### 参考

- 官方文档： [PostProcessStageCollection](https://cesium.com/docs/cesiumjs-ref-doc/PostProcessStageCollection.html)
