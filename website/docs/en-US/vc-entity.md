## VcEntity

Load the solid graphics. It is equivalent to initializing a `Cesium.Entity` instance.

It needs to be a sub-component of `vc-viewer`, `vc-datasource-custom`, `vc-datasource-geojson`, `vc-datasource-kml`, `vc-datasource-czml` to load normally. When using, you can directly specify the various `graphic` attributes of `vc-entity`, and use the `vc-graphics-xxx` series components provided by VueCesium as the `vc-entity` sub-components to mount each `graphic`, but under one entity Only one of the same type `grahpic` can be mounted. If you need to load a large collection of entity instances, it is recommended to add them under the data source component.

### Basic usage

Basic usage of `vc-entity`.

:::demo Use the `vc-entity` tag to add points, billboards, labels, and rectangle instances on the viewer, and respond to some mouse events.

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer>
    <vc-entity
      ref="entity"
      :billboard="billboard"
      :position="{lng: 108, lat: 32}"
      :point="point"
      :label="label"
      @click="onEntityEvt"
      @mouseover="onEntityEvt"
      @mouseout="onEntityEvt"
    >
      <!-- :coordinates = "{ west: 130, south: 20, east: 80, north: 25 }" -->
      <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green"></vc-graphics-rectangle>
    </vc-entity>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">Unload</el-button>
    <el-button type="danger" round @click="load">Load</el-button>
    <el-button type="danger" round @click="reload">Reload</el-button>
  </el-row>
</el-row>

<script>
  export default {
    data() {
      return {
        point: {
          pixelSize: 28,
          color: 'red'
        },
        label: {
          text: 'Hello World',
          pixelOffset: [0, 80]
        },
        billboard: {
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          scale: 0.5
        }
      }
    },
    methods: {
      onEntityEvt(e) {
        console.log(e)
        if (e.type === 'onmouseover') {
          this.billboard = {
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            scale: 0.6
          }
        } else if (e.type === 'onmouseout') {
          this.billboard = {
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            scale: 0.5
          }
        }
      },
      unload() {
        this.$refs.entity.unload()
      },
      load() {
        this.$refs.entity.load()
      },
      reload() {
        this.$refs.entity.reload()
      }
    }
  }
</script>
```

:::

### Attributes

| Attribute      | Type                    | Default | Description                                                                               |
| -------------- | ----------------------- | ------- | ----------------------------------------------------------------------------------------- |
| id             | String                  |         | `optional` A unique identifier for this object. If none is provided, a GUID is generated. |
| name           | String                  |         | `optional` A human readable name to display to users. It does not have to be unique.      |
| availability   |                         |         | `optional` The availability, if any, associated with this object.                         |
| show           | Boolean                 | true    | `optional` A boolean value indicating if the entity and its children are displayed.       |
| description    |                         |         | `optional` A string Property specifying an HTML description for this entity.              |
| position       | Object\|Array\|Function |         | `optional` A Property specifying the entity position.                                     |
| orientation    |                         |         | `optional` A Property specifying the entity orientation.                                  |
| viewFrom       |                         |         | `optional` A suggested initial offset for viewing this object.                            |
| parent         |                         |         | `optional` A parent entity to associate with this entity.                                 |
| billboard      |                         |         | `optional` A billboard to associate with this entity.                                     |
| box            |                         |         | `optional` A box to associate with this entity.                                           |
| corridor       |                         |         | `optional` A corridor to associate with this entity.                                      |
| cylinder       |                         |         | `optional` A cylinder to associate with this entity.                                      |
| ellipse        |                         |         | `optional` A ellipse to associate with this entity.                                       |
| ellipsoid      |                         |         | `optional` A ellipsoid to associate with this entity.                                     |
| label          |                         |         | `optional` A options.label to associate with this entity.                                 |
| model          |                         |         | `optional` A model to associate with this entity.                                         |
| tileset        |                         |         | `optional` A tileset to associate with this entity.                                       |
| path           |                         |         | `optional` A path to associate with this entity.                                          |
| plane          |                         |         | `optional` A plane to associate with this entity.                                         |
| point          |                         |         | `optional` A point to associate with this entity.                                         |
| polygon        |                         |         | `optional` A polygon to associate with this entity.                                       |
| polyline       |                         |         | `optional` A polyline to associate with this entity.                                      |
| properties     |                         |         | `optional` Arbitrary properties to associate with this entity.                            |
| polylineVolume |                         |         | `optional` A polylineVolume to associate with this entity.                                |
| rectangle      |                         |         | `optional` A rectangle to associate with this entity.                                     |
| wall           |                         |         | `optional` A wall to associate with this entity.                                          |

:::tip

Tip: In addition to passing `Cesium.Cartesian3`, `position` property can also pass a `PlainObject(CartographicInDegreeOption|Cartesian3Option`) or `Array<number>` (degrees)

:::

:::tipflex

```js
// CartographicInDegreeOption
{
  lng: number,
  lat: number,
  height: number
}
```

```js
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

| name              | parameter                                                  | description                                                          |
| ----------------- | ---------------------------------------------------------- | -------------------------------------------------------------------- |
| beforeLoad        | Vue Instance                                               | Triggered before the cesiumObject is loaded.                         |
| ready             | {Cesium, viewer, cesiumObject, vm}                         | Triggered when the cesiumObject is successfully loaded.              |
| destroyed         | Vue Instance                                               | Triggered when the cesiumObject is destroyed.                        |
| definitionChanged |                                                            | Triggers whenever a property or sub-property is changed or modified. |
| mousedown         | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse is pressed on the entity.                   |
| mouseup           | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse bounces on the entity.                      |
| click             | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse clicks on the entity.                       |
| clickout          | {button,surfacePosition,pickedFeature,type,windowPosition} | Touch when the mouse clicks outside the entity.                      |
| dblclick          | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the left mouse button double-clicks the entity.       |
| mousemove         | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves on this entity.                       |
| mouseover         | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves to this entity.                       |
| mouseout          | {button,surfacePosition,pickedFeature,type,windowPosition} | Triggered when the mouse moves out of the entity.                    |

### Reference

- Refer to the official documentation: [Entity](https://cesium.com/docs/cesiumjs-ref-doc/Entity.html)
