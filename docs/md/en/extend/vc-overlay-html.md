# VcHTMLOverlay

The `vc-overlay-html` component is used to add HTML tags to the scene. **Note** To use this component, you need to import the `import'vue-cesium/lib/style.css'` style file.Refer to [ysCesium|跃焱邵隼](https://www.wellyyss.cn/ysCesium/main/app.html) 。

## Example

### Load a VcHTMLOverlay

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" style="overflow: hidden; position: absolute">
        <vc-overlay-html ref="html" :position="position1">
          <div class="vc-box">aa</div>
        </vc-overlay-html>
        <vc-entity :position="position1">
          <vc-graphics-point color="red" :pixelSize="8"></vc-graphics-point>
        </vc-entity>
        <vc-overlay-html :position="position2">
          <div class="vc-box">bb</div>
        </vc-overlay-html>
        <vc-entity :position="position2">
          <vc-graphics-point color="red" :pixelSize="8"></vc-graphics-point>
        </vc-entity>
        <vc-overlay-html :position="position3">
          <div class="vc-box">cc</div>
        </vc-overlay-html>
        <vc-entity :position="position3">
          <vc-graphics-point color="red" :pixelSize="8"></vc-graphics-point>
        </vc-entity>
        <!-- 弹窗效果 -->
        <vc-circle-roatating-double
          :radius1="15000"
          :radius2="30000"
          material1="./statics/SampleData/images/circle1.png"
          material2="./statics/SampleData/images/circle2.png"
          :position="positionModal"
          ref="circle"
        ></vc-circle-roatating-double>
        <vc-entity :position="positionBox" ref="box">
          <vc-graphics-box :dimensions="dimensionsBox" :material="materialBox"></vc-graphics-box>
        </vc-entity>
        <vc-entity :position="positionModal">
          <vc-graphics-point color="red" :pixelSize="8"></vc-graphics-point>
        </vc-entity>
        <vc-overlay-html :position="positionModal" v-if="showModal" :pixelOffset="{ x: 0, y: -250 }">
          <div class="vc-dialog">
            <div class="line"></div>
            <div class="main">
              <div class="">风吹过已静下</div>
              <div class="">将心意再还谁</div>
            </div>
          </div>
        </vc-overlay-html>
        <vc-layer-imagery>
          <vc-provider-imagery-tianditu mapStyle="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          position1: { lng: 117.186419, lat: 31.66446, height: 20 },
          position2: { lng: 117.286419, lat: 31.76446, height: 20 },
          position3: { lng: 117.386419, lat: 31.86446, height: 20 },
          positionModal: { lng: 118.486419, lat: 32.86446, height: 40000 },
          positionBox: {},
          dimensionsBox: {},
          materialBox: {},
          showModal: false
        }
      },
      mounted() {
        Promise.all([this.$refs.circle.createPromise, this.$refs.box.createPromise]).then(() => {
          const { viewer } = this
          viewer.zoomTo(viewer.entities)
        })
      },
      methods: {
        ready({ Cesium, viewer, cesiumObject }) {
          this.viewer = viewer
          viewer.scene.globe.depthTestAgainstTerrain = true
          const { positionModal } = this
          let height = 2000
          const deviationHeight = 400
          const heightMax = 40000
          this.positionBox = () => {
            height += deviationHeight
            if (height >= heightMax) {
              height = heightMax
            }
            return Cesium.Cartesian3.fromDegrees(positionModal.lng, positionModal.lat, height / 2)
          }
          this.dimensionsBox = () => {
            height += deviationHeight
            if (height >= heightMax) {
              height = heightMax
              this.showModal = true
            }
            return new Cesium.Cartesian3(10000, 10000, height)
          }
          this.materialBox = Cesium.Color.DEEPSKYBLUE.withAlpha(0.5)
          window.vm = this
        }
      }
    }
  </script>
  <style scoped>
    .vc-box {
      width: 200px;
      line-height: 30px;
      background-color: rgba(0, 0, 0, 0.8);
      color: #fff;
      padding: 8px 16px;
    }
    .vc-dialog {
      /*重要*/
      user-select: none; /*禁止选中*/
      pointer-events: none; /*鼠标穿透*/
      top: 0;
      left: 0;
      width: 320px;
      height: 250px;
      z-index: 99999;
    }
    .vc-dialog .line {
      position: absolute;
      left: 0;
      width: 0;
      height: 100px;
      bottom: 0;
      background: url('/statics/SampleData/images/line.png');
      animation: goLine 0.5s forwards;
    }
    @keyframes goLine {
      from {
        width: 0;
      }
      to {
        width: 50px;
      }
    }
    .vc-dialog .main {
      position: absolute;
      top: 0;
      left: 50px;
      right: 0;
      bottom: 100px;
      background: url('/statics/SampleData/images/layer_border.png') no-repeat;
      background-size: 100% 100%;
      color: white;
      padding: 20px 5px 5px 20px;
      font-size: 14px;
      user-select: text;
      pointer-events: auto;
      opacity: 0;
      animation: goDynamicLayer 0.5s forwards;
      animation-delay: 0.5s;
    }
    @keyframes goDynamicLayer {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .vc-dialog .light {
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
    }
  </style>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready" style="overflow: hidden; position: absolute">
      <vc-overlay-html ref="html" :position="position1">
        <div class="vc-box">aa</div>
      </vc-overlay-html>
      <vc-entity :position="position1">
        <vc-graphics-point color="red" :pixelSize="8"></vc-graphics-point>
      </vc-entity>
      <vc-overlay-html :position="position2">
        <div class="vc-box">bb</div>
      </vc-overlay-html>
      <vc-entity :position="position2">
        <vc-graphics-point color="red" :pixelSize="8"></vc-graphics-point>
      </vc-entity>
      <vc-overlay-html :position="position3">
        <div class="vc-box">cc</div>
      </vc-overlay-html>
      <vc-entity :position="position3">
        <vc-graphics-point color="red" :pixelSize="8"></vc-graphics-point>
      </vc-entity>
      <!-- 弹窗效果 -->
      <vc-circle-roatating-double
        :radius1="15000"
        :radius2="30000"
        material1="./statics/SampleData/images/circle1.png"
        material2="./statics/SampleData/images/circle2.png"
        :position="positionModal"
        ref="circle"
      ></vc-circle-roatating-double>
      <vc-entity :position="positionBox" ref="box">
        <vc-graphics-box :dimensions="dimensionsBox" :material="materialBox"></vc-graphics-box>
      </vc-entity>
      <vc-entity :position="positionModal">
        <vc-graphics-point color="red" :pixelSize="8"></vc-graphics-point>
      </vc-entity>
      <vc-overlay-html :position="positionModal" v-if="showModal" :pixelOffset="{ x: 0, y: -250 }">
        <div class="vc-dialog">
          <div class="line"></div>
          <div class="main">
            <div class="">风吹过已静下</div>
            <div class="">将心意再还谁</div>
          </div>
        </div>
      </vc-overlay-html>
      <vc-layer-imagery>
        <vc-provider-imagery-tianditu mapStyle="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
    </vc-viewer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        position1: { lng: 117.186419, lat: 31.66446, height: 20 },
        position2: { lng: 117.286419, lat: 31.76446, height: 20 },
        position3: { lng: 117.386419, lat: 31.86446, height: 20 },
        positionModal: { lng: 118.486419, lat: 32.86446, height: 40000 },
        positionBox: {},
        dimensionsBox: {},
        materialBox: {},
        showModal: false
      }
    },
    mounted() {
      Promise.all([this.$refs.circle.createPromise, this.$refs.box.createPromise]).then(() => {
        const { viewer } = this
        viewer.zoomTo(viewer.entities)
      })
    },
    methods: {
      ready({ Cesium, viewer, cesiumObject }) {
        this.viewer = viewer
        viewer.scene.globe.depthTestAgainstTerrain = true
        const { positionModal } = this
        let height = 2000
        const deviationHeight = 400
        const heightMax = 40000
        this.positionBox = () => {
          height += deviationHeight
          if (height >= heightMax) {
            height = heightMax
          }
          return Cesium.Cartesian3.fromDegrees(positionModal.lng, positionModal.lat, height / 2)
        }
        this.dimensionsBox = () => {
          height += deviationHeight
          if (height >= heightMax) {
            height = heightMax
            this.showModal = true
          }
          return new Cesium.Cartesian3(10000, 10000, height)
        }
        this.materialBox = Cesium.Color.DEEPSKYBLUE.withAlpha(0.5)
        // 仅用于调试
        window.vm = this
      }
    }
  }
</script>
<style scoped>
  .vc-box {
    width: 200px;
    line-height: 30px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 8px 16px;
  }
  .vc-dialog {
    /*重要*/
    user-select: none; /*禁止选中*/
    pointer-events: none; /*鼠标穿透*/
    top: 0;
    left: 0;
    width: 320px;
    height: 250px;
    z-index: 99999;
  }
  .vc-dialog .line {
    position: absolute;
    left: 0;
    width: 0;
    height: 100px;
    bottom: 0;
    background: url('~docs/assets/images/line.png');
    animation: goLine 0.5s forwards;
  }
  @keyframes goLine {
    from {
      width: 0;
    }
    to {
      width: 50px;
    }
  }
  .vc-dialog .main {
    position: absolute;
    top: 0;
    left: 50px;
    right: 0;
    bottom: 100px;
    background: url('~docs/assets/images/layer_border.png') no-repeat;
    background-size: 100% 100%;
    color: white;
    padding: 20px 5px 5px 20px;
    font-size: 14px;
    user-select: text;
    pointer-events: auto;
    opacity: 0;
    animation: goDynamicLayer 0.5s forwards;
    animation-delay: 0.5s;
  }
  @keyframes goDynamicLayer {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .vc-dialog .light {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
</style>
```

## Instance Properties

<!-- prettier-ignore -->
| name | type | default | description |
| ---------------------- | ------- | ------ | -------------------------------------------------------------------------- |
| position | Object | | `required` Specify where the HTML element is added. structure: { lng: number, lat: number, height: number } or Cesium.Cartesian3 |
| pixelOffset | Number | `10` | `optional` Specify the pixel offset value of the HTML element. |
| hiddenOnBack | Number | `0.05` | `optional` Specifies whether the HTML element is hidden when it is on the back of the earth. |

---

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and a HTML Element. |
| click  | event                         | Triggered when the mouse clicks on the component element, event mouse parameters. |
