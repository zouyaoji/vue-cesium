## VcAjaxBar

Loading request progress bar control.

### Basic usage

Basic usage of the `vc-ajax-bar` component.

:::demo

controls/vc-ajax-bar/usage

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
