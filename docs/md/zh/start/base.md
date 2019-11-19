# 基础

## 全局组件事件

<!-- prettier-ignore -->
| 事件名 | 参数 | 描述 |
| ----- | ---- | ----- |
| ready | {Cesium, viewer} | viewer 组件渲染完毕时触发，返回一个 Cesium 的核心类和 viewer 实例。该项目组件是异步加载，请**不要**尝试在组件的生命周期中访问 Cesium 核心类和 viewer 实例，如有需要，请在所需组件的 `ready` 事件回调函数的参数中获取。 |

## 全局组件实例方法

| 方法名 | 参数 | 描述                                |
| ------ | ---- | ----------------------------------- |
| load   |      | 组件加载时执行的抽象方法。          |
| unload |      | 组件卸载时执行的抽象方法。          |
| reload |      | 完成一次组件卸载 / 重新加载的方法。 |

## 常量

- 待完善

## 类型

### Cartesian2

- 描述表达二维结构分量的 point、padding 等。如组件`vc-graphics-box`的`dimensions`属性。

```JavaScript
{
  x: number,
  y: number
}
```

### Cartesian2 Array

- 描述二维点集合。如组件`vc-graphics-polyline-volume`的`shape`属性。

```JavaScript
[{ x: number, y: number },...,{ x: number, y: number }]
```

### Cartesian3

- 描述三维点。如组件`vc-entity`的`position`属性。

```JavaScript
{
  lng: number,
  lat: number,
  height: number
}
// 或者
{
  x: number,
  y: number,
  z: number
}
```

### Cartesian3 Array

- 描述三维点集。如组件`vc-graphics-polyline`的`positions`属性。

```JavaScript
[{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]
```

### Rectangle

- 描述矩形。如组件`vc-graphics-rectangle`的`coordinates`属性。

```JavaScript
{ west: number, south: number, east: number, north: number }
```

### DistanceDisplayCondition

- 描述随相机距离改变对象是否显示的参数。

```JavaScript
{
  near: number,
  far: number
}
```

### NearFarScalar

- 描述随相机距离改变对象在近距离和远距离的缩放、偏移等的上下限。

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

// String：可以是 #rgb, #rrggbb, rgb(), rgba(), hsl(), or hsla()格式。
color: 'WHITE'
color: 'rgb(255,255,255)'
color: '#67ADDF'
// Array 取值范围0-1
color: [1.0, 1.0, 1.0, 1.0]
// Object 直接传Cesium.Color对象 需要在组件ready之后传。
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

## 参考

> [Cesium 官方文档](https://cesium.com/docs/cesiumjs-ref-doc/index.html)

> [超图 WebGL3D 官方文档](http://support.supermap.com.cn:8090/webgl/Build/Documentation/index.html)
