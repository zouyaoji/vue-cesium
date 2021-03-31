# 基础

## 全局组件事件

:::tip
提示： vue-cesium 所有组件都包含下列 3 个事件，后续文档可能不会再列出。
:::

| 事件名     | 参数                 | 描述             |
| ---------- | -------------------- | ---------------- |
| beforeLoad | Vue Instance         | 初始化前触发。   |
| ready      | {Cesium, viewer, vm} | 初始化完成触发。 |
| destroyed  | Vue Instance         | 销毁完成时触发。 |

## 全局组件实例方法

:::tip
提示： vue-cesium 所有组件都包含下列 4 个方法，后续文档可能不会再列出。
:::

| 方法名          | 参数   | 描述                                            |
| --------------- | ------ | ----------------------------------------------- |
| load            |        | 加载组件。                                      |
| unload          |        | 卸载组件。                                      |
| reload          |        | 完成一次组件卸载 / 重新加载的方法。             |
| getCesiumObject | Object | 获取该组件加载的 Cesium 对象或者 HTMLElement。 |

## 常量

- 待完善

## 类型

- 待完善

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
