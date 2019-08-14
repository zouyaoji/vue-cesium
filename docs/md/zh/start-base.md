# 基础

## 全局组件事件

| 事件名 | 参数             | 描述                                                                                                                                                                                                                   |
| ------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer} | viewer 组件渲染完毕时触发，返回一个 Cesium 的核心类和 viewer 实例。该项目组件是异步加载，请**不要**尝试在组件的生命周期中访问 Cesium 核心类和 viewer 实例，如有需要，请在所需组件的 `ready` 事件回调函数的参数中获取。 |

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

描述二维点、或者二维结构分量。如组件`box-graphics`的`dimensions`属性。

```JavaScript
{
  x: number,
  y: number
}
```

### Cartesian3

描述三维点。如组件`entity`的`position`属性。

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

描述三维点集。如组件`polyline-graphics`的`positions`属性。

```JavaScript
[{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]
```

### Rectangle

描述矩形。如组件`rectangle-graphics`的`coordinates`属性。

```JavaScript
{ west: number, south: number, east: number, north: number }
```

### DistanceDisplayCondition

```JavaScript
{
  near: number,
  far: number
}
```

### NearFarScalar

```JavaScript
{
  near: number,
  nearValue: number,
  far: number,
  farValue: number
}
```

## 参考

> [Cesium 官方文档](https://cesiumjs.org/Cesium/Build/Documentation/index.html)

> [超图 WebGL3D 官方文档](http://support.supermap.com.cn:8090/webgl/Build/Documentation/index.html)
