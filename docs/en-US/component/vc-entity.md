# VcEntity

Load the solid graphics. It is equivalent to initializing a `Cesium.Entity` instance.

It needs to be a sub-component of `vc-viewer`, `vc-datasource-custom`, `vc-datasource-geojson`, `vc-datasource-kml`, `vc-datasource-czml` to load normally. When using, you can directly specify the various `graphic` attributes of `vc-entity`, and use the `vc-graphics-xxx` series components provided by VueCesium as the `vc-entity` sub-components to mount each `graphic`, but under one entity Only one of the same type `grahpic` can be mounted. If you need to load a large collection of entity instances, it is recommended to add them under the data source component.

## Basic usage

:::demo Use the `vc-entity` tag to add points, billboards, labels, and rectangle instances on the viewer, and respond to some mouse events.

entity/usage

:::

## API

### Props

| Name           | Type                                                                               | Default | Description                                                                               |
| -------------- | ---------------------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| id             | string                                                                             |         | `optional` A unique identifier for this object. If none is provided, a GUID is generated. |
| name           | string                                                                             |         | `optional` A human readable name to display to users. It does not have to be unique.      |
| availability   | Cesium.TimeIntervalCollection                                                      |         | `optional` The availability, if any, associated with this object.                         |
| show           | boolean                                                                            | `true`  | `optional` A boolean value indicating if the entity and its children are displayed.       |
| description    | string \| Cesium.CallbackProperty \| VcCallbackPropertyFunction\<string\>          |         | `optional` A string Property specifying an HTML description for this entity.              |
| position       | VcPosition\|Array\|Function                                                        |         | `optional` A Property specifying the entity position.                                     |
| orientation    | Cesium.Quaternion \| Cesium.VelocityOrientationProperty \| Cesium.CallbackProperty |         | `optional` A Property specifying the entity orientation.                                  |
| viewFrom       | VcPosition \| Cesium.CallbackProperty                                              |         | `optional` A suggested initial offset for viewing this object.                            |
| parent         | Cesium.Entity                                                                      |         | `optional` A parent entity to associate with this entity.                                 |
| billboard      | Cesium.BillboardGraphics \| VcGraphicsBillboardProps                               |         | `optional` A billboard to associate with this entity.                                     |
| box            | Cesium.BoxGraphics \| VcGraphicsBoxProps                                           |         | `optional` A box to associate with this entity.                                           |
| corridor       | Cesium.CorridorGraphics \| VcGraphicsCorridorProps                                 |         | `optional` A corridor to associate with this entity.                                      |
| cylinder       | Cesium.CylinderGraphics \| VcGraphicsCylinderProps                                 |         | `optional` A cylinder to associate with this entity.                                      |
| ellipse        | Cesium.EllipseGraphics \| VcGraphicsEllipseProps                                   |         | `optional` A ellipse to associate with this entity.                                       |
| ellipsoid      | Cesium.EllipsoidGraphics \| VcGraphicsEllipsoidProps                               |         | `optional` A ellipsoid to associate with this entity.                                     |
| label          | Cesium.LabelGraphics \| VcGraphicsLabelProps                                       |         | `optional` A options.label to associate with this entity.                                 |
| model          | Cesium.ModelGraphics \| VcGraphicsModelProps                                       |         | `optional` A model to associate with this entity.                                         |
| tileset        | Cesium.Cesium3DTilesetGraphics \| VcGraphicsTilesetProps                           |         | `optional` A tileset to associate with this entity.                                       |
| path           | Cesium.PathGraphics \| VcGraphicsPathProps                                         |         | `optional` A path to associate with this entity.                                          |
| plane          | Cesium.PlaneGraphics \| VcGraphicsPlaneProps                                       |         | `optional` A plane to associate with this entity.                                         |
| point          | Cesium.PointGraphics \| VcGraphicsPointProps                                       |         | `optional` A point to associate with this entity.                                         |
| polygon        | Cesium.PolygonGraphics \| VcGraphicsPolygonProps                                   |         | `optional` A polygon to associate with this entity.                                       |
| polyline       | Cesium.PolylineGraphics \| VcGraphicsPolylineProps                                 |         | `optional` A polyline to associate with this entity.                                      |
| properties     | AnyObject                                                                          |         | `optional` Arbitrary properties to associate with this entity.                            |
| polylineVolume | Cesium.PolylineVolumeGraphics \| VcGraphicsPolylineVolumeProps                     |         | `optional` A polylineVolume to associate with this entity.                                |
| rectangle      | Cesium.RectangleGraphics \| VcGraphicsRectangleProps                               |         | `optional` A rectangle to associate with this entity.                                     |
| wall           | Cesium.WallGraphics \| VcGraphicsWallProps                                         |         | `optional` A wall to associate with this entity.                                          |

:::tip

Tip: In addition to passing `Cesium.Cartesian3`, `position` property can also pass a `PlainObject(CartographicInDegreeOption|Cartesian3Option`) or `Array<number>` (degrees)

:::

:::tipflex

```text
// CartographicInDegreeOption
{
  lng: number,
  lat: number,
  height: number
}
```

```text
// Cartesian3Option
{
  x: number,
  y: number,
  z: number
}
```

```js
// Array<number> in degrees
;[number, number, number]
```

:::

### Events

| Name              | Parameters                              | Description                                                          |
| ----------------- | --------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad        | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.                          |
| ready             | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded.               |
| destroyed         | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.                         |
| definitionChanged | (property: Cesium.Property)             | Triggers whenever a property or sub-property is changed or modified. |
| mousedown         | (evt: VcPickEvent)                      | Triggers when the mouse is pressed on the entity.                    |
| mouseup           | (evt: VcPickEvent)                      | Triggers when the mouse bounces on the entity.                       |
| click             | (evt: VcPickEvent)                      | Triggers when the mouse clicks on the entity.                        |
| clickout          | (evt: VcPickEvent)                      | Triggers when the mouse clicks outside the entity.                   |
| dblclick          | (evt: VcPickEvent)                      | Triggers when the left mouse button double-clicks the entity.        |
| mousemove         | (evt: VcPickEvent)                      | Triggers when the mouse moves on this entity.                        |
| mouseover         | (evt: VcPickEvent)                      | Triggers when the mouse moves to this entity.                        |
| mouseout          | (evt: VcPickEvent)                      | Triggers when the mouse moves out of the entity.                     |

### Slots

<!-- prettier-ignore -->
| Name | Description | Subtags |
| ---- | ----------- | ------- |
| default | This is where vc-graphic-xxx content goes. | vc-graphic-billboard/vc-graphic-box/vc-graphic-corridor/vc-graphic-cylinder/vc-graphic-ellipse/vc-graphic-ellipsoid/vc-graphic-label/vc-graphic-model/vc-graphic-tileset/vc-graphic-path/vc-graphic-plane/vc-graphic-point/vc-graphic-polygon/vc-graphic-polyline/vc-graphic-polylineVolume/vc-graphic-rectangle/vc-graphic-wall |

## Reference

- Refer to the official documentation: **[Entity](https://cesium.com/docs/cesiumjs-ref-doc/Entity.html)**
