## VcPostProcessStageCollection

Load a collection of PostProcessStage effects and manage a group of PostProcessStage effects.

Can be used to mount the `vc-post-process-stage` and `vc-post-process-stage-scan` components.

### Basic usage

Basic usage of VcPostProcessStageCollection component.

:::demo Use the `vc-post-process-stage-collection` tag to add a set of post-processing effects on the viewer.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="ready">
    <vc-post-process-stage-collection ref="stage" :postProcesses="postProcesses">
      <vc-post-process-stage-scan type="radar" :options="options1"></vc-post-process-stage-scan>
      <vc-post-process-stage-scan type="circle" :options="options2"></vc-post-process-stage-scan>
    </vc-post-process-stage-collection>
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
            heading: Cesium.Math.toRadians(0), // east, default value is 0.0 (north)
            pitch: Cesium.Math.toRadians(-90), // default value (looking down)
            roll: 0.0 // default value
          },
          duration: 3
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

### Props

| Name          | Type  | Default | Description                                                                                               |
| ------------- | ----- | ------- | --------------------------------------------------------------------------------------------------------- |
| postProcesses | Array |         | `optional` Specify the post-processing collection. The props are consistent with `vc-post-process-stage`. |

### Events

| Name       | Parameters                         | Description                                            |
| ---------- | ---------------------------------- | ------------------------------------------------------ |
| beforeLoad | Vue Instance                       | Triggers before the cesiumObject is loaded.            |
| ready      | {Cesium, viewer, cesiumObject, vm} | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | Vue Instance                       | Triggers when the cesiumObject is destroyed.           |

### Slots

<!-- prettier-ignore -->
| Name | Description | Subtags |
| ---- | ----------- | ------- |
| default | This is where post-process tags content goes. | vc-post-process-stage/vc-post-process-stage-scan |

### Reference

- Refer to the official documentation: [PostProcessStageCollection](https://cesium.com/docs/cesiumjs-ref-doc/PostProcessStageCollection.html)
