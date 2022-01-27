## Base

### Global component events

:::tip
Tip: All components of vue-cesium include these events, and subsequent documents may not list them again.
:::

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |

### Global component instance method

:::tip
Tip: All components of vue-cesium include these 4 methods, which may not be listed in subsequent documents.
:::

| Name            | Parameters | Description                                                    |
| --------------- | ---------- | -------------------------------------------------------------- |
| load            |            | Load the component.                                            |
| unload          |            | Uninstall the component.                                       |
| reload          |            | Complete a component unloading/reloading method.               |
| getCesiumObject | Object     | Get the Cesium object or HTMLElement loaded by this component. |

### Types

### VcCartesian2

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

There are 2 ways to express `Array<Cartesian2>`:

- `Array<Cartesian2Option>`

```js
[{ x: number,  y: number }, ..., { x: number,  y: number }]
```

- `Array<Array<number>>`

```js
[[x: number, y: number],..., [x: number, y: number]]
```

### Cartesian3

There are 3 ways to express `Cesium.Cartesian3`:

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
// in degrees
interface CartographicInDegreeOption {
  lng: number
  lat: number
  height?: number
}
```

- `Array<number>`

```js
// in degrees
;[(lng: number), (lat: number), (height: number)]
```

### Array\<Cartesian3\>

There are 4 ways to express `Array<Cartesian3>`:

- `Array<Cartesian3Option>`

```js

[{ x: number, y: number, z: number },...,{ x: number, y: number, z: number }]
```

- `Array<CartographicInDegreeOption>`

```js
// in degrees
[{ lng: number, lat: number, height?: number },..., { lng: number, lat: number, height?: number }]
```

- `Array<number>`

```js
// in degrees
[lng: number, lat: number, height: number, ..., lng: number, lat: number, height: number]
```

- `Array<Array<number>>`

```js
// in degrees
[[lng: number, lat: number, height: number], ..., [lng: number, lat: number, height: number]]
```

### Cartesian4

There are 2 ways to express `Cesium.Cartesian4`:

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

### Rectange(coordinates)

There are 3 ways to express `Cesium.Rectange`:

- `RectangleInDegreeOption`

```js
// in degrees
interface RectangleInDegreeOption {
  west: number
  south: number
  east: number
  north: number
}
```

- `Cartesian4Option`

```js
// in radian
interface Cartesian4Option {
  x?: number
  y?: number
  z?: number
  w?: number
}
```

- `Array<number>`

```js
// // in degrees
;[(west: number), (south: number), (east: number), (north: number)]
```

### Camera

There are 1 ways to express `Cesium.Camera`:

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

There are 2 ways to express `Cesium.PolygonHierarchy`:

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

There are 2 ways to express `Cesium.NearFarScalar`:

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

There are 2 ways to express `Cesium.DistanceDisplayCondition`:

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

There are 4 ways to express `Cesium.Color`:

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
// The range is from 0 (no intensity) to 1.0 (full intensity).
interface Cartesian4Option {
  x?: number
  y?: number
  z?: number
  w?: number
}
```

### Material

There are 3 ways to express `Cesium.Material`, `Cesium.MaterialProperty`:

- `string`

```js
// color or image url
'red'
'https://zouyaoji.top/vue-cesium/favicon.png'
```

- `Array<number>`

```js
// color
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

There are 2 ways to express `Cesium.BoundingRectangle`:

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

There are 2 ways to express `Cesium.Plane`:

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

### TranslationRotationScale

There are 2 ways to express `Cesium.TranslationRotationScale`:

- `TranslationRotationScaleOption`

```js
interface TranslationRotationScaleOption {
  translation: Cesium.Cartesian3 | Cartesian3Option | CartographicInDegreeOption | Array<number>
  rotation: Cesium.Quaternion | Cartesian4Option | Array<number>
  scale: Cesium.Cartesian3 | Cartesian3Option | CartographicInDegreeOption | Array<number>
}
```

- `Array<any>`

```js
;[
  (translation: Cesium.Cartesian3 | Cartesian3Option | CartographicInDegreeOption | Array<number>),
  (rotation: Cesium.Quaternion | Cartesian4Option | Array<number>),
  (scale: Cesium.Cartesian3 | Cartesian3Option | CartographicInDegreeOption | Array<number>)
]
```

### Constants

Since Cesium cannot be obtained before the initialization of the `vc-viewer` component is completed, some constants of Cesium cannot be obtained directly through Cesium when the component is bound, but it is still possible to pass their values directly.

:::tipflex

```html
<!-- Wrong way -->
<template>
  <vc-viewer :sceneMode="Cesium.SceneMode.SCENE3D"></vc-viewer>
</template>
```

```html
<!-- Right way -->
<template>
  <vc-viewer :sceneMode="3"></vc-viewer>
</template>
```

:::

#### HorizontalOrigin

The horizontal location of an origin relative to an object, e.g., a Billboard or Label. For example, setting the horizontal origin to LEFT or RIGHT will display a billboard to the left or right (in screen space) of the anchor position.

| Name   | Value | Description                                           |
| ------ | ----- | ----------------------------------------------------- |
| CENTER | 0     | The origin is at the horizontal center of the object. |
| LEFT   | 1     | The origin is on the left side of the object.         |
| RIGHT  | -1    | The origin is on the right side of the object.        |

#### VerticalOrigin

The vertical location of an origin relative to an object, e.g., a Billboard or Label. For example, setting the vertical origin to TOP or BOTTOM will display a billboard above or below (in screen space) the anchor position.

| Name     | Value | Description                                                                                                             |
| -------- | ----- | ----------------------------------------------------------------------------------------------------------------------- |
| CENTER   | 0     | The origin is at the vertical center between BASELINE and TOP.                                                          |
| BOTTOM   | 1     | The origin is at the bottom of the object.                                                                              |
| BASELINE | 2     | If the object contains text, the origin is at the baseline of the text, else the origin is at the bottom of the object. |
| TOP      | -1    | The origin is at the top of the object.                                                                                 |

#### HeightReference

Represents the position relative to the terrain.

| Name               | Value | Description                                          |
| ------------------ | ----- | ---------------------------------------------------- |
| NONE               | 0     | The position is absolute.                            |
| CLAMP_TO_GROUND    | 1     | The position is clamped to the terrain.              |
| RELATIVE_TO_GROUND | 2     | The position height is the height above the terrain. |

#### ShadowMode

Specifies whether the object casts or receives shadows from light sources when shadows are enabled.

| Name         | Value | Description                                  |
| ------------ | ----- | -------------------------------------------- |
| DISABLED     | 0     | The object does not cast or receive shadows. |
| ENABLED      | 1     | The object casts and receives shadows.       |
| CAST_ONLY    | 2     | The object casts shadows only.               |
| RECEIVE_ONLY | 3     | The object receives shadows only.            |

#### CornerType

Style options for corners.

| Name    | Value | Description                                         |
| ------- | ----- | --------------------------------------------------- |
| ROUNDED | 0     | Corner has a smooth edge.                           |
| MITERED | 1     | Corner point is the intersection of adjacent edges. |
| BEVELED | 2     | Corner is clipped.                                  |

#### ClassificationType

Whether a classification affects terrain, 3D Tiles or both.

| Name           | Value | Description                                   |
| -------------- | ----- | --------------------------------------------- |
| TERRAIN        | 0     | Only terrain will be classified.              |
| CESIUM_3D_TILE | 1     | Only 3D Tiles will be classified.             |
| BOTH           | 2     | Both terrain and 3D Tiles will be classified. |

#### BingMapsStyle

The types of imagery provided by Bing Maps.

| Name                         | Value                      | Description                                                                    |
| ---------------------------- | -------------------------- | ------------------------------------------------------------------------------ |
| AERIAL                       | 'Aerial'                   | Aerial imagery.                                                                |
| AERIAL_WITH_LABELS           | 'AerialWithLabels'         | Aerial imagery with a road overlay.                                            |
| AERIAL_WITH_LABELS_ON_DEMAND | 'AerialWithLabelsOnDemand' | Aerial imagery with a road overlay.                                            |
| ROAD                         | 'Road'                     | Roads without additional imagery.                                              |
| ROAD_ON_DEMAND               | 'RoadOnDemand'             | Roads without additional imagery.                                              |
| CANVAS_DARK                  | 'CanvasDark'               | A dark version of the road maps.                                               |
| CANVAS_LIGHT                 | 'CanvasGray'               | A lighter version of the road maps.                                            |
| CANVAS_GRAY                  | 'CanvasLight'              | A grayscale version of the road maps.                                          |
| ORDNANCE_SURVEY              | 'OrdnanceSurvey'           | Ordnance Survey imagery. This imagery is visible only for the London, UK area. |
| COLLINS_BART                 | 'CollinsBart'              | Collins Bart imagery.                                                          |

#### LabelStyle

Describes how to draw a label.

| Name             | Value | Description                                     |
| ---------------- | ----- | ----------------------------------------------- |
| FILL             | 0     | Fill the text of the label, but do not outline. |
| OUTLINE          | 1     | Outline the text of the label, but do not fill. |
| FILL_AND_OUTLINE | 2     | Fill and outline the text of the label.         |

#### ArcType

ArcType defines the path that should be taken connecting vertices.

| Name     | Value | Description                                                          |
| -------- | ----- | -------------------------------------------------------------------- |
| NONE     | 0     | Straight line that does not conform to the surface of the ellipsoid. |
| GEODESIC | 1     | Follow geodesic path.                                                |
| RHUMB    | 2     | Follow rhumb or loxodrome path.                                      |

#### SceneMode

Indicates if the scene is viewed in 3D, 2D, or 2.5D Columbus view.

| Name          | Value | Description                                                                                                                     |
| ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------- |
| MORPHING      | 0     | Morphing between mode, e.g., 3D to 2D.                                                                                          |
| COLUMBUS_VIEW | 1     | Columbus View mode. A 2.5D perspective view where the map is laid out flat and objects with non-zero height are drawn above it. |
| SCENE2D       | 2     | 2D mode. The map is viewed top-down with an orthographic projection.                                                            |
| SCENE3D       | 3     | 3D mode. A traditional 3D perspective view of the globe.                                                                        |

#### MapMode2D

Describes how the map will operate in 2D.

| Name            | Value | Description                                                        |
| --------------- | ----- | ------------------------------------------------------------------ |
| ROTATE          | 0     | The 2D map can be rotated about the z axis.                        |
| INFINITE_SCROLL | 1     | The 2D map can be scrolled infinitely in the horizontal direction. |

#### Reference

> **[Official document](https://cesium.com/docs/cesiumjs-ref-doc/global.html)**
