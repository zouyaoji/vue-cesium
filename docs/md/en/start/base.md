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

Describe two-dimensional points. Such as the `dimensions` attribute of the component `box-graphics`.

```JavaScript
// new Cesium.Cartesian2(dimensions[0], dimensions[1])
[width, height]
```

### Cartesian3

Describe the 3D points. Such as the `position` property of the component `entity`.

```JavaScript
// Cesium.Cartesian3.fromDegrees(position[0], position[1], position[2])
[longitude, latitude, height]
```

### Cartesian3 Array

Describe a collection of 3D points. Such as the `positions` attribute of the component `polyline-graphics`.

```JavaScript
// Cesium.Cartesian3.fromDegreesArray(positions)
[longitude, latitude...,longitude, latitude]
// Cesium.Cartesian3.fromDegreesArrayHeights(positions)
[longitude, latitude, height...,longitude, latitude, height]
```

### Rectangle

Describe the rectangle. Such as the `coordinates` attribute of the component `rectangle-graphics`.

```JavaScript
Cesium.Rectangle.fromDegrees(coordinates[0], coordinates[1], coordinates[2], coordinates[3]
[west, sounth, east, north]
```

## Reference

> [Cesium Official](https://cesium.com/docs/cesiumjs-ref-doc/index.html)

> [SuperMap Cesium Official Documentation](http://support.supermap.com.cn:8090/webgl/Build/Documentation/index.html)
