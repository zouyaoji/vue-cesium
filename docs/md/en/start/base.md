# Base

## Global Component Events

| name  | parameter        | description                                                                                                                                                                                             |
| ----- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ready | {Cesium, viewer} | Triggers when viewer is ready. It returns a core class of Cesium and a instance which is binding on the component `CesiumViewer`. Please **DON'T** access the core class and the instance in lifecycle. |

## Global Component Instance Methods

| name   | parameter | description                                                          |
| ------ | --------- | -------------------------------------------------------------------- |
| load   |           | An abstract method that is executed when a component will be load.   |
| unload |           | An abstract method that is executed when a component will be unload. |
| reload |           | Excute the unload method, and then excute load method.               |

## Constants

- To be added

## Datatype Array

### Cartesian2

Describe two-dimensional points. Such as the `dimensions` attribute of the component `vc-graphics-box`.

```JavaScript
{
  x: number,
  y: number
}
```

### Cartesian2 Array

- Describe a two-dimensional point collection. Such as the `shape` attribute of the component `vc-graphics-polyline-volume`.

```JavaScript
[{ x: number, y: number },...,{ x: number, y: number }]
```

### Cartesian3

Describe the 3D points. Such as the `position` property of the component `vc-entity`.

```JavaScript
{
  lng: number,
  lat: number,
  height: number
}
// or
{
  x: number,
  y: number,
  z: number
}
```

### Cartesian3 Array

Describe a collection of 3D points. Such as the `positions` attribute of the component `vc-graphics-polyline`.

```JavaScript
[{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]
```

### Rectangle

Describe the rectangle. Such as the `coordinates` attribute of the component `vc-graphics-rectangle`.

```JavaScript
{ west: number, south: number, east: number, north: number }
```

### DistanceDisplayCondition

- Describes whether the object is displayed with the camera distance changing.

```JavaScript
{
  near: number,
  far: number
}
```

### NearFarScalar

- Describes the upper and lower limits of scaling, offset, etc. of the object at close and long distances as a function of camera distance.

```JavaScript
{
  near: number,
  nearValue: number,
  far: number,
  farValue: number
}
```

### Color

```JavaScript

// String can be #rgb, #rrggbb, rgb(), rgba(), hsl(), or hsla() etc.
color: 'WHITE'
color: 'rgb(255,255,255)'
color: '#67ADDF'
// Array range 0-1
color: [1.0, 1.0, 1.0, 1.0]
```

### PolygonHierarchy

```JavaScript
// Array
[{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}]
// Object
{
  positions: [{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}],
  holes: [
    {
      positions: [{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}],
      holes: [
        positions: [{lng: number, lat: number, height: number},...,{lng: number, lat: number, height: number}]
        // ...
      ]
    }
  ]
}

```

## Reference

> [Cesium Official](https://cesium.com/docs/cesiumjs-ref-doc/index.html)

> [SuperMap Cesium Official Documentation](http://support.supermap.com.cn:8090/webgl/Build/Documentation/index.html)
