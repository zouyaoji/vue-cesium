# 基础

### 全局组件事件

:::tip
提示： vue-cesium 所有组件都包含下列 3 个事件，后续文档可能不再列出。
:::

| 事件名     | 参数                 | 描述             |
| ---------- | -------------------- | ---------------- |
| beforeLoad | Vue Instance         | 初始化前触发。   |
| ready      | {Cesium, viewer, vm} | 初始化完成触发。 |
| destroyed  | Vue Instance         | 销毁完成时触发。 |

### 全局组件实例方法

:::tip
提示： vue-cesium 所有组件都包含下列 4 个方法，后续文档可能不再列出。
:::

| 方法名          | 参数   | 描述                                           |
| --------------- | ------ | ---------------------------------------------- |
| load            |        | 加载组件。                                     |
| unload          |        | 卸载组件。                                     |
| reload          |        | 完成一次组件卸载 / 重新加载的方法。            |
| getCesiumObject | Object | 获取该组件加载的 Cesium 对象或者 HTMLElement。 |

## 类型

`vue-cesium` 各组件传参支持直接传 Cesium 实例化的参数，但需要在 `vc-viewer` 组件 `ready` 事件之后来初始化这些参数。为了简化开发，特将一些常用的参数抽象成`简单对象(PlainObject)`，可以提前对这些对象进行赋值。以下分别描述：

### Cartesian2

表达 `Cesium.Cartesian2` 有 2 种方式：

- `Cartesian2Option`

```js
interface Cartesian2Option {
  x: number
  y: number
}
```

- `Array<number>`

```js
;[number, number]
```

### Array\<Cartesian2\>

表达 `Array<Cartesian2>` 有 2 种方式：

- `Array<Cartesian2Option>`

```js
[{ x: number,  y: number }, ..., { x: number,  y: number }]
```

- `Array<Array<number>>`

```js
[[x: number, y: number],..., [x: number, y: number]]
```

### Cartesian3

表达 `Cesium.Cartesian3` 有 3 种方式:

- `Cartesian3Option`

```js
interface Cartesian3Option {
  x: number
  y: number
  z: number
}
```

- `CartographicInDegreeOption`

```js
// 单位度
interface CartographicInDegreeOption {
  lng: number
  lat: number
  height?: number
}
```

- `Array<number>`

```js
// 单位度
;[(lng: number), (lat: number), (height: number)]
```

### Array\<Cartesian3\>

表达 `Array<Cartesian3>` 有 4 种方式:

- `Array<Cartesian3Option>`

```js

[{ x: number, y: number, z: number },...,{ x: number, y: number, z: number }]
```

- `Array<CartographicInDegreeOption>`

```js
// 单位度
[{ lng: number, lat: number, height?: number },..., { lng: number, lat: number, height?: number }]
```

- `Array<number>`

```js
// 经度、纬度、高度（单位度）
[lng: number, lat: number, height: number, ..., lng: number, lat: number, height: number]
```

- `Array<Array<number>>`

```js
// 经度、纬度、高度（单位度）
[[lng: number, lat: number, height: number], ..., [lng: number, lat: number, height: number]]
```

### Cartesian4

表达 `Cesium.Cartesian4` 有 2 种方式:

- `Cartesian4Option`

```js
interface Cartesian4Option {
  x?: number
  y?: number
  z?: number
  w?: number
}
```

- `Array<number>`

```js
;[(x: number), (y: number), (z: number), (w: number)]
```

### Rectange

表达 `Cesium.Rectange` 有 3 种方式:

- `RectangleInDegreeOption`

```js
// 单位度
interface RectangleInDegreeOption {
  west: number
  south: number
  east: number
  north: number
}
```

- `Cartesian4Option`

```js
// 单位弧度
interface Cartesian4Option {
  x?: number
  y?: number
  z?: number
  w?: number
}
```

- `Array<number>`

```js
// 单位度
;[(west: number), (south: number), (east: number), (north: number)]
```

### Camera

表达 `Cesium.Camera` 有 1 种方式:

- `CameraOption`

```js
interface CameraOption {
  position?: Cartesian3Option | CartographicInDegreeOption | Array<number>
  retangle?: RectangleInDegreeOption | Array<number>
  heading?: number
  pitch?: number
  roll?: number
}
```

### PolygonHierarchy

表达 `Cesium.PolygonHierarchy` 的方式有 2 种:

- `PolygonHierarchyOption`

```js
interface PolygonHierarchyOption {
  positions: Array<Cesium.Cartesian3> | Array<Cartesian3Option> | Array<Array<number>>
  holes?: Array<PolygonHierarchyOption>
}
```

- `Array<Cartesian3Option>`

```js
[{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}]
```

### NearFarScalar

表达 `Cesium.NearFarScalar` 的方式有 2 种：

- `NearFarScalarOption`

```js
interface NearFarScalarOption {
  near: number
  nearValue: number
  far: number
  farValue: number
}
```

- `Array<number>`

```js
[near: number, nearValue: number, far: number, farValue: number, ..., near: number, nearValue: number, far: number, farValue: number]
```

### DistanceDisplayCondition

表达 `Cesium.DistanceDisplayCondition` 的方式有 2 种：

- `DistanceDisplayConditionOption`

```js
interface DistanceDisplayConditionOption {
  near: number
  far: number
}
```

- `Array<number>`

```js
[near: number, far: number, ..., near: number, far: number]
```

### Color

表达 `Cesium.Color` 的方式有 4 种：

- `string`

```js
// css color
'white'
'#fff'
'rgba(255,255,255,0)'
```

- `Array<number>`

```js
// in byte
;[(r: number), (g: number), (b: number), (a: number)]
```

- `ColorInByteOption`

```js
interface ColorInByteOption {
  red: number
  green: number
  blue: number
  alpha?: number
}
```

- `Cartesian4Option`

```js
// 范围从0（无强度）到1.0（全强度）。
interface Cartesian4Option {
  x?: number
  y?: number
  z?: number
  w?: number
}
```

### Material

表达 `Cesium.Material`, `Cesium.MaterialProperty` 的方式有 3 种：

- `string`

```js
// 颜色或者图片url
'red'
'https://zouyaoji.top/vue-cesium/favicon.png'
```

- `Array<number>`

```js
// 颜色
;[255, 0, 0, 255]
```

- `MaterialOption`

```js
interface MaterialOption {
    fabric: {
    type: string
    uniforms: {
      color?: Cesium.Color | string | Array<number> | ColorInByteOption | Cartesian4Option
      image?: string | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement
      repeat?: Cesium.Cartesian2 | Cartesian2Option | Array<number> | number
      transparent?: boolean
      evenColor?: Cesium.Color | string | Array<number> | ColorInByteOption | Cartesian4Option
      oddColor?: Cesium.Color | string | Array<number> | ColorInByteOption | Cartesian4Option
      gapColor?: Cesium.Color | string | Array<number> | ColorInByteOption | Cartesian4Option
      dashLength?: number
      dashPattern?: number
      glowPower?: number
      taperPower?: number
      outlineColor?: Cesium.Color | string | Array<number> | ColorInByteOption | Cartesian4Option
      outlineWidth?: number
      cellAlpha?: number
      lineCount?: Cesium.Cartesian2 | Cartesian2Option | Array<number> | number
      lineThickness?: Cesium.Cartesian2 | Cartesian2Option | Array<number> | number
      lineOffset?: Cesium.Cartesian2 | Cartesian2Option | Array<number> | number
      orientation?: number | Cesium.StripeOrientation
      offset?: number
    }
  }
  strict?: boolean
  translucent?: boolean | AnyFunction
  minificationFilter?: Cesium.TextureMinificationFilter
  magnificationFilter?: Cesium.TextureMagnificationFilter
}
```

### BoundingRectangle

表达 `Cesium.BoundingRectangle` 的方式有 2 种：

- `BoundingRectangleOption`

```js
interface BoundingRectangleOption {
  x: number
  y: number
  width: number
  height: number
}
```

- `Array<number>`

```js
;[(x: number), (y: number), (width: number), (height: number)]
```

### Plane

表达 `Cesium.Plane` 的方式有 2 种：

- `PlaneOption`

```js
interface PlaneOption {
  normal: Cesium.Cartesian3 | Cartesian3Option | CartographicInDegreeOption | Array<number>
  distance: number
}
```

- `Array<any>`

```js
;[(plane: Array<number> | Array<Cartesian3Option>), (distance: number)]
```

## 常量

### HorizontalOrigin

用于描述文本、布告板等对象水平对齐方式。

| 常量   | 值  | 描述     |
| ------ | --- | -------- |
| CENTER | 0   | 居中对齐 |
| LEFT   | 1   | 左对齐   |
| RIGHT  | -1  | 右对齐   |

### VerticalOrigin

用于描述文本、布告板等对象垂直对齐方式。

| 常量     | 值  | 描述     |
| -------- | --- | -------- |
| CENTER   | 0   | 居中对齐 |
| BOTTOM   | 1   | 底部对齐 |
| BASELINE | 2   | 基线对齐 |
| TOP      | -1  | 顶部对齐 |

### HeightReference

用于描述文本、布告板等对象高度模式。

| 常量               | 值  | 描述       |
| ------------------ | --- | ---------- |
| NONE               | 0   | 无         |
| CLAMP_TO_GROUND    | 1   | 贴地       |
| RELATIVE_TO_GROUND | 2   | 相对于地面 |

### ShadowMode

用于描述阴影接收方式。

| 常量         | 值  | 描述   |
| ------------ | --- | ------ |
| DISABLED     | 0   | 不生效 |
| ENABLED      | 1   | 生效   |
| CAST_ONLY    | 2   | 仅发射 |
| RECEIVE_ONLY | 3   | 仅接收 |

### CornerType

用于描述 corridor 转角样式

| 常量    | 值  | 描述 |
| ------- | --- | ---- |
| ROUNDED | 0   | 圆角 |
| MITERED | 1   | 直角 |
| BEVELED | 2   | 斜角 |

### ClassificationType

描述贴对象方式

| 常量           | 值  | 描述        |
| -------------- | --- | ----------- |
| TERRAIN        | 0   | 只贴地      |
| CESIUM_3D_TILE | 1   | 只贴 3DTile |
| BOTH           | 2   | 都贴        |

## 参考

> [Cesium 官方文档](https://cesium.com/docs/cesiumjs-ref-doc/index.html)
