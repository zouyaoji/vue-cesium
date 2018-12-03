<template>
  <i :id="[$options.name, id].join('-')" :class="[$options.name]" style="display: none !important;">
    <slot></slot>
  </i>
</template>

<script>
import bindEvents from '../../util/bindEvent'
import { Events } from '../../util/events.js'
import commonMixin from '../../mixins/common.js'
export default {
  name: 'entity',
  render (h) {},
  mixins: [commonMixin('entities')],
  props: {
    id: {
      type: String
    },
    name: {
      type: String
    },
    availability: {
      type: Object
    },
    description: {
      type: String
    },
    position: {
      type: Object
    },
    orientation: {
      type: Object
    },
    viewFrom: {
      type: Object
    },
    parent: {
      type: Object
    },
    billboard: {
      type: Object
    },
    corridor: {
      type: Object
    },
    cylinder: {
      type: Object
    },
    ellipse: {
      type: Object
    },
    ellipsoid: {
      type: Object
    },
    box: {
      type: Object
    },
    label: {
      type: Object
    },
    model: {
      type: Object
    },
    path: {
      type: Object
    },
    plane: {
      type: Object
    },
    point: {
      type: Object
    },
    polygon: {
      type: Object
    },
    polyline: {
      type: Object
    },
    properties: {
      type: Object
    },
    polylineVolume: {
      type: Object
    },
    rectangle: {
      type: Object
    },
    wall: {
      type: Object
    }
  },
  watch: {
    id () {
      this.reload()
    },
    name (val) {
      this.originInstance.name = val
    },
    availability () {
      this.reload()
    },
    description (val) {
      this.originInstance.description = val
    },
    position (val) {
      this.originInstance.position = val
    },
    orientation (val) {
      this.originInstance.orientation = val
    },
    viewFrom (val) {
      this.originInstance.viewFrom = val
    },
    parent () {
      this.reload()
    }
  },
  methods: {
    load () {
      const { Cesium, viewer, id, name, availability, description, position, orientation, viewFrom, parent, positions, followSurface,
        clampToGround, width, show, material, depthFailMaterial, granularity, shadows, distanceDisplayCondition, zIndex } = this
      let polyline = {
        positions: positions,
        followSurface: followSurface,
        clampToGround: clampToGround,
        width: width,
        show: show,
        material: material,
        depthFailMaterial: depthFailMaterial,
        granularity: granularity,
        shadows: shadows,
        distanceDisplayCondition: distanceDisplayCondition,
        zIndex: zIndex
      }
      polyline.positions = new Cesium.CallbackProperty(() => this.positions, false)
      this.originInstance = viewer.entities.add({
        id: id,
        name: name,
        availability: availability,
        show: show,
        description: description,
        position: position,
        orientation: orientation,
        viewFrom: viewFrom,
        parent: parent,
        polyline: polyline
      })

      bindEvents.call(this, this.originInstance, Events['entity-events'])
    }
  }
}
</script>
