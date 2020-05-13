# Entity

The `vc-entity` component is used to load Cesium entities. Used as a `vc-viewer` or `vc-datasource-xxx` subcomponent. With `vc-entity` you can load a variety of visualizations such as points, lines, polygons, labels, billboards, and more. You can specify the `graphic` attribute of `vc-entity` directly or the `vc-graphics-xxx` component provided by VueCesium as the `graphics` attribute of the `vc-entity` subcomponent.

## Example

### Load an entity with vc-entity component

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer
        ref="viewer"
        @ready="ready"
        @LEFT_CLICK="LEFT_CLICK"
        @selectedEntityChanged="selectedEntityChanged"
        @cameraClicked="cameraClicked"
        @closeClicked="closeClicked"
      >
        <vc-entity ref="entity" :position="position" :billboard="billboard" :description="description" :id="id"> </vc-entity>
      </vc-viewer>
      <div ref="bubbleContainer" id="bubbleContainer" hidden>
        <button id="test">Test</button>
      </div>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          id: 'This is a billboard',
          description: 'Hello Vue Cesium',
          image: 'https://zouyaoji.top/vue-cesium/favicon.png',
          position: { lng: 108, lat: 35, height: 100 },
          billboard: {}
        }
      },
      mounted() {
        this.$refs.entity.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
          console.log(cesiumObject)
          viewer.zoomTo(cesiumObject)
        })
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.viewer = viewer
          this.description = this.$refs.bubbleContainer.innerHTML
          this.billboard = new Cesium.BillboardGraphics({
            image: 'https://zouyaoji.top/vue-cesium/favicon.png', // default: undefined
            show: true, // default
            pixelOffset: new Cesium.Cartesian2(0, -50), // default: (0, 0)
            eyeOffset: new Cesium.Cartesian3(0.0, 0.0, 0.0), // default
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER, // default
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // default: CENTER
            scale: 0.5, // default: 1.0
            color: Cesium.Color.LIME, // default: WHITE
            // rotation: Cesium.Math.PI_OVER_FOUR, // default: 0.0
            alignedAxis: Cesium.Cartesian3.ZERO // default
          })
        },
        selectedEntityChanged(entity) {
          console.log(entity)
          if (entity) {
            this.frame = this.viewer.infoBox.frame
            this.frame.contentWindow.addEventListener('click', this.frameClick)
          } else {
            this.frame && this.frame.contentWindow.removeEventListener('click', this.frameClick)
          }
        },
        frameClick(event) {
          console.log('frame clicked')
          if (event.target.id === 'test') {
            console.log('test clicked')
          }
        },
        LEFT_CLICK(movement) {
          const feature = this.viewer.scene.pick(movement.position)
          console.log(feature)
        },
        cameraClicked(e) {
          console.log('cameraClicked', e)
        },
        closeClicked(e) {
          console.log('closeClicked', e)
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer">
    <vc-viewer
      ref="viewer"
      @ready="ready"
      @LEFT_CLICK="LEFT_CLICK"
      @selectedEntityChanged="selectedEntityChanged"
      @cameraClicked="cameraClicked"
      @closeClicked="closeClicked"
    >
      <vc-entity ref="entity" :position="position" :billboard="billboard" :description="description" :id="id"> </vc-entity>
    </vc-viewer>
    <div ref="bubbleContainer" id="bubbleContainer" hidden>
      <button id="test">Test</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: 'This is a billboard',
        description: 'Hello Vue Cesium',
        image: 'https://zouyaoji.top/vue-cesium/favicon.png',
        position: { lng: 108, lat: 35, height: 100 },
        billboard: {}
      }
    },
    mounted() {
      this.$refs.entity.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
        console.log(cesiumObject)
        viewer.zoomTo(cesiumObject)
      })
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.viewer = viewer
        this.description = this.$refs.bubbleContainer.innerHTML
        this.billboard = new Cesium.BillboardGraphics({
          image: 'https://zouyaoji.top/vue-cesium/favicon.png', // default: undefined
          show: true, // default
          pixelOffset: new Cesium.Cartesian2(0, -50), // default: (0, 0)
          eyeOffset: new Cesium.Cartesian3(0.0, 0.0, 0.0), // default
          horizontalOrigin: Cesium.HorizontalOrigin.CENTER, // default
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // default: CENTER
          scale: 0.5, // default: 1.0
          color: Cesium.Color.LIME, // default: WHITE
          // rotation: Cesium.Math.PI_OVER_FOUR, // default: 0.0
          alignedAxis: Cesium.Cartesian3.ZERO // default
        })
      },
      selectedEntityChanged(entity) {
        console.log(entity)
        if (entity) {
          this.frame = this.viewer.infoBox.frame
          this.frame.contentWindow.addEventListener('click', this.frameClick)
        } else {
          this.frame && this.frame.contentWindow.removeEventListener('click', this.frameClick)
        }
      },
      frameClick(event) {
        console.log('frame clicked')
        if (event.target.id === 'test') {
          console.log('test clicked')
        }
      },
      LEFT_CLICK(movement) {
        const feature = this.viewer.scene.pick(movement.position)
        console.log(feature)
      },
      cameraClicked(e) {
        console.log('cameraClicked', e)
      },
      closeClicked(e) {
        console.log('closeClicked', e)
      }
    }
  }
</script>
```

## Instance Properties

| name           | type    | default | description                                                                                                       |
| -------------- | ------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| id             | String  |         | `optional` A unique identifier for this object. If none is provided, a GUID is generated.                         |
| name           | String  |         | `optional` A human readable name to display to users. It does not have to be unique.                              |
| availability   |         |         | `optional` The availability, if any, associated with this object.                                                 |
| show           | Boolean | true    | `optional` A boolean value indicating if the entity and its children are displayed.                               |
| description    |         |         | `optional` A string Property specifying an HTML description for this entity.                                      |
| position       | Object  |         | `optional` A Property specifying the entity position. **structure: { lng: number, lat: number, height: number }** |
| orientation    |         |         | `optional` A Property specifying the entity orientation.                                                          |
| viewFrom       |         |         | `optional` A suggested initial offset for viewing this object.                                                    |
| parent         |         |         | `optional` A parent entity to associate with this entity.                                                         |
| billboard      |         |         | `optional` A billboard to associate with this entity.                                                             |
| box            |         |         | `optional` A box to associate with this entity.                                                                   |
| corridor       |         |         | `optional` A corridor to associate with this entity.                                                              |
| cylinder       |         |         | `optional` A cylinder to associate with this entity.                                                              |
| ellipse        |         |         | `optional` A ellipse to associate with this entity.                                                               |
| ellipsoid      |         |         | `optional` A ellipsoid to associate with this entity.                                                             |
| label          |         |         | `optional` A options.label to associate with this entity.                                                         |
| model          |         |         | `optional` A model to associate with this entity.                                                                 |
| path           |         |         | `optional` A path to associate with this entity.                                                                  |
| plane          |         |         | `optional` A plane to associate with this entity.                                                                 |
| point          |         |         | `optional` A point to associate with this entity.                                                                 |
| polygon        |         |         | `optional` A polygon to associate with this entity.                                                               |
| polyline       |         |         | `optional` A polyline to associate with this entity.                                                              |
| properties     |         |         | `optional` Arbitrary properties to associate with this entity.                                                    |
| polylineVolume |         |         | `optional` A polylineVolume to associate with this entity.                                                        |
| rectangle      |         |         | `optional` A rectangle to associate with this entity.                                                             |
| wall           |         |         | `optional` A wall to associate with this entity.                                                                  |

---

- Refer to the official document: **[Entity](https://cesium.com/docs/cesiumjs-ref-doc/Entity.html)**

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| definitionChanged | | Triggers whenever a property or sub-property is changed or modified. |

---
