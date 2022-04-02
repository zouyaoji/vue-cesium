<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-02-19 00:16:21
 * @LastEditTime: 2022-03-08 23:08:19
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\docs\zh-CN\controls\vc-ajax-bar.md
-->

## VcAjaxBar

加载请求进度条控件。

### 基础用法

`vc-ajax-bar` 组件的基础用法。

:::demo 使用 `vc-ajax-bar` 标签添加请求进度条控件。

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

### 属性

| 属性名       | 类型                       | 默认值       | 描述                                                 | 可选值                |
| ------------ | -------------------------- | ------------ | ---------------------------------------------------- | --------------------- |
| position     | string                     | `'top'`      | `optional` 指定进度条位置。                          | top/right/bottom/left |
| size         | string                     | `'2px'`      | `optional` 指定进度条尺寸。                          |
| color        | string                     |              | `optional` 指定进度条颜色。                          |
| skipHijack   | boolean                    |              | `optional` 指定是否忽略 ajax hijacking。             |
| reverse      | boolean                    |              | `optional` 指定进度条是否反向。                      |
| positioning  | string                     | `'absolute'` | `optional` 指定进度条定位。                          | absolute/fixed        |
| hijackFilter | ((url: string) => boolean) |              | `optional` 指定哪些 url 可以触发 start 和 end 方法。 |                       |

### 事件

| 事件名 | 参数 | 描述                 |
| ------ | ---- | -------------------- |
| start  |      | 当进度条出现时触发。 |
| end    |      | 当进度条完成时触发。 |

### 方法

| 方法名    | 参数                      | 描述                       |
| --------- | ------------------------- | -------------------------- |
| start     | (speed?: number) => void  | 开始等待新的请求进程完成。 |
| increment | (amount?: number) => void | 手动触发进度条增量。       |
| stop      | () => void                | 完成等待。                 |
