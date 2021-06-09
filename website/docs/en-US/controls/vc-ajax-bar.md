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
      <vc-provider-imagery-arcgis ref="provider"></vc-provider-imagery-arcgis>
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

| Name        | Type    | Default      | Description                                                | Accepted Values       |
| ----------- | ------- | ------------ | ---------------------------------------------------------- | --------------------- |
| position    | String  | `'top'`      | `optional` Specify the position of the progress bar.       | top/right/bottom/left |
| size        | String  | `'2px'`      | `optional` Specify the size of the progress bar.           |
| color       | String  |              | `optional` Specify the color of the progress bar.          |
| skipHijack  | Boolean |              | `optional` Specify whether to ignore ajax hijacking.       |
| reverse     | Boolean |              | `optional` Specifies whether the progress bar is reversed. |
| positioning | String  | `'absolute'` | `optional` Specify the positioning of the progress bar.    | absolute/fixed        |

### Events

| Name  | Parameters | Description                                  |
| ----- | ---------- | -------------------------------------------- |
| start |            | Triggered when the progress bar appears.     |
| end   |            | Triggered when the progress bar is complete. |
