# Base

## Global component events

:::tip
Tip: All components of vue-cesium include these 3 events, and subsequent documents may not list them again.

| Event name | Parameters           | Description                            |
| ---------- | -------------------- | -------------------------------------- |
| beforeLoad | Vue Instance         | Triggered before loading.              |
| ready      | {Cesium, viewer, vm} | Triggered when the load is successful. |
| destroyed  | Vue Instance         | Triggered when destroyed.              |

:::

## Global component instance method

:::tip
Tip: All components of vue-cesium include these 4 methods, which may not be listed in subsequent documents.

| Method name     | Parameters | Description                                                    |
| --------------- | ---------- | -------------------------------------------------------------- |
| load            |            | Load the component.                                            |
| unload          |            | Uninstall the component.                                       |
| reload          |            | Complete a component unloading/reloading method.               |
| getCesiumObject | Object     | Get the Cesium object or HTMLElement loaded by this component. |

:::

## Constant

- To be added

## Types

- To be added

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
