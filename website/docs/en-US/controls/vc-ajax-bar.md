<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-01-27 16:43:45
 * @LastEditTime: 2022-03-08 23:08:46
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\en-US\controls\vc-ajax-bar.md
-->

## VcAjaxBar

Loading request progress bar control.

### Basic usage

Basic usage of the `vc-ajax-bar` component.

:::demo Use the `vc-ajax-bar` tag to add a request progress bar control.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <!-- default -->
    <vc-ajax-bar></vc-ajax-bar>
    <!-- custom -->
    <vc-ajax-bar position="bottom" color="#21BA45" size="5px" positioning="fixed"></vc-ajax-bar>
    <vc-layer-imagery>
      <vc-imagery-provider-arcgis ref="provider"></vc-imagery-provider-arcgis>
    </vc-layer-imagery>
  </vc-viewer>
</el-row>

<script>
  import { ref, getCurrentInstance } from 'vue'
  export default {
    setup() {
      // state
      const instance = getCurrentInstance()
      const provider = ref(null)
      const alpha = ref(1)
      const brightness = ref(1)
      const contrast = ref(1)
      // methods
      const unload = () => {
        provider.value.unload()
      }
      const reload = () => {
        provider.value.reload()
      }
      const load = () => {
        provider.value.load()
      }
      return {
        provider,
        unload,
        reload,
        load,
        alpha,
        brightness,
        contrast
      }
    }
  }
</script>
```

:::

### Props

| Name         | Type                       | Default      | Description                                                   | Accepted Values       |
| ------------ | -------------------------- | ------------ | ------------------------------------------------------------- | --------------------- |
| position     | string                     | `'top'`      | `optional` Specify the position of the progress bar.          | top/right/bottom/left |
| size         | string                     | `'2px'`      | `optional` Specify the size of the progress bar.              |
| color        | string                     |              | `optional` Specify the color of the progress bar.             |
| skipHijack   | boolean                    |              | `optional` Specify whether to ignore ajax hijacking.          |
| reverse      | boolean                    |              | `optional` Specify whether the progress bar is reversed.      |
| positioning  | string                     | `'absolute'` | `optional` Specify the positioning of the progress bar.       | absolute/fixed        |
| hijackFilter | ((url: string) => boolean) |              | `optional` Specify which URL should trigger start() + stop(). |                       |

### Events

| Name  | Parameters | Description                                  |
| ----- | ---------- | -------------------------------------------- |
| start |            | Triggered when the progress bar appears.     |
| end   |            | Triggered when the progress bar is complete. |

### Methods

| Name      | Parameters                | Description                                                |
| --------- | ------------------------- | ---------------------------------------------------------- |
| start     | (speed?: number) => void  | Notify bar you are waiting for a new process to finish.    |
| increment | (amount?: number) => void | Manually trigger a bar progress increment.                 |
| stop      | () => void                | Notify bar that one process you were waiting has finished. |
