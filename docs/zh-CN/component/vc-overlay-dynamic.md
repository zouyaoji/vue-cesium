## VcOverlayDynamic

加载动态对象。

### 基础用法

动态对象组件的基础用法。

:::demo

overlays/vc-overlay-dynamic/usage

:::

### 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ----- |---- | ---------------| ----------------- |
| show | boolean | `true` | `optional` 指定加载的动态对象数据源对象是否显示。 |
| name | string | `'__vc__overlay__dynamic__'` | `optional` 指定加载的动态对象数据源名字。 |
| startTime | string\|Date\|JulianDate | | `optional` 指定 `viewer.clock` 时钟的开始时间。 |
| stopTime | string\| Date\|JulianDate | | `optional` 指定 `viewer.clock` 时钟的结束时间。 |
| currentTime | string\| Date\|JulianDate | | `optional` 指定 `viewer.clock` 时钟当前时间。 |
| clockRange | number\| Cesium.ClockRange | `0` | `optional` 指定 `viewer.clock` 时钟走到结束时间时采取的决策。 |
| clockStep | number\| Cesium.ClockStep | `1` | `optional` 指定 `viewer.clock` 时钟的运行是按帧还是按系统时间。 |
| shouldAnimate | boolean | `true` | `optional` 指定 `viewer.clock#tick` 是否改变 `viewer.clock` 时钟当前时间。 |
| canAnimate | boolean | `true` | `optional` 指定 Clock#tick 是否可以驱动时间。 |
| multiplier | number | `1.0` | `optional` 指定 `viewer.clock#tick` 改变 `viewer.clock` 当前时间的倍数。 |
| dynamicOverlays | Array\<DynamicOverlayOpts\> | `[]` | `optional` 指定动态对象采样位置数组。 |
| defaultInterval | number | `3.0` | `optional` 指定默认位置信息默认刷新间隔，实时改变动态模型位置可用。 |
| stopArrivedFlag | string | `'time'` | `optional` 指定到达站点的判定标志。 |
| positionPrecision | number | `0.0000001` | `optional` 指定位置判定精度。 |
| timePrecision | number | `0.01` | `optional` 指定时间判定精度。 |

### 事件

| 事件名                | 参数                                                 | 描述                       |
| --------------------- | ---------------------------------------------------- | -------------------------- |
| beforeLoad            | (instance: VcComponentInternalInstance)              | 对象加载前触发。           |
| ready                 | (readyObj: VcReadyObject)                            | 对象加载成功时触发。       |
| destroyed             | (instance: VcComponentInternalInstance)              | 对象销毁时触发。           |
| onStop                | (clock: Cesium.Clock)                                | 时钟到达结束时间时触发。   |
| stopArrived           | (overlay: DynamicOverlay, position: SampledPosition) | 到达站点时触发。           |
| @update:currentTime   | (currentTime: Cesium.JulianDate)                     | currentTime 改变时触发。   |
| @update:shouldAnimate | (shouldAnimate: boolean)                             | shouldAnimate 改变时触发。 |
| @update:canAnimate    | (canAnimate: boolean)                                | canAnimate 改变时触发。    |
| @update:clockRange    | (clockRange: number )                                | clockRange 改变时触发。    |
| @update:clockStep     | (clockStep: number )                                 | clockStep 改变时触发。     |
| @update:multiplier    | (multiplier: number)                                 | multiplier 改变时触发。    |
| @update:startTime     | (startTime: Cesium.JulianDate)                       | startTime 改变时触发。     |
| @update:stopTime      | (stopTime: Cesium.JulianDate)                        | stopTime 改变时触发。      |

### 方法

<!-- prettier-ignore -->
| 方法名 | 参数 | 描述 |
| ------------------ | --------------------------------------- | ------------------------------------------- |
| load | () => Promise\<false \| VcReadyObject\> | 手动加载组件。 |
| reload | () => Promise\<false \| VcReadyObject\> | 手动重新加载组件。 |
| unload | () => Promise\<boolean\> | 手动卸载组件。 |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject> | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject | () => VcCesiumObject | 获取该组件加载的 Cesium 对象。 |
| getOverlay | (e: number \| string \| DynamicOverlay)  => DynamicOverlay | 根据 id 或者索引获取动态对象。 e: 对象 id 或者索引。 |
| getOverlays | () => Array\<DynamicOverlay\> | 获取所有的动态对象。 |
| flyToOverlay | (overlays?: DynamicOverlay \| number \| string \| Array\<DynamicOverlay \| number \| string\>, options?: { duration?: number;      maximumHeight?: number; offset?: VcHeadingPitchRange }) => Promise\<boolean\> | 飞行到动态对象（集合）。 overlays: 动态对象（索引、id）或者动态对象（索引、id）集合。不传或者传入空数组（空对象）则缩放到所有对象。offset: 缩放到对象的相机偏移。|
| zoomToOverlay | (overlays?: DynamicOverlay \| number \| string \| Array\<DynamicOverlay \| number \| string\>, offset?: VcHeadingPitchRange) => Promise\<boolean\> | 缩放到动态对象（集合）。 overlays: 动态对象（索引、id）或者动态对象（索引、id）集合。不传或者传入空数组（空对象）则缩放到所有对象。offset: 缩放到对象的相机偏移。|
| trackOverlay | (trackOverlay?: DynamicOverlay \| string \| number, trackViewOpts?: TrackViewOpts) => void | 跟踪动态对象。trackOverlay: 跟踪对象或者跟踪对象的 id 或者 索引。不传则默认跟踪第一个对象。trackViewOpts: 视角参数。|

### 参考

- [DC-SDK](http://dc.dvgis.cn/#/editor?type=layer&example=dynamic)
