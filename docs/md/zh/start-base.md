# 基础

## 全局组件事件

|事件名|参数|描述|
|-----|---|---|
|ready |{Cesium, viewer}|viewer组件渲染完毕时触发，返回一个Cesium的核心类和viewer实例。该项目组件是异步加载，请**不要**尝试在组件的生命周期中访问 Cesium 核心类和 viewer 实例，如有需要，请在所需组件的 `ready` 事件回调函数的参数中获取。|

## 全局组件实例方法

|方法名|参数|描述|
|-----|---|---|
|load||组件加载时执行的抽象方法。|
|unload||组件卸载时执行的抽象方法。|
|reload||完成一次组件卸载 / 重新加载的方法。|

## 常量

- 待完善

## 私有类型

### Position

用于描述场景中点的经纬度。

#### 结构

```javascript
{
  longitude: Number,
  latitude: Number,
  height: Number
}
```

## 参考

> [超图WebGL官方文档](http://support.supermap.com.cn:8090/webgl/Build/Documentation/index.html)
