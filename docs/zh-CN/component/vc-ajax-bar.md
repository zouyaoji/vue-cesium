## VcAjaxBar

加载请求进度条控件。

### 基础用法

`vc-ajax-bar` 组件的基础用法。

:::demo

controls/vc-ajax-bar/usage

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
