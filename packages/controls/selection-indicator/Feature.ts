import { inherit } from '@vue-cesium/utils/util'
let inherited = false
// const customProperties = ['entityCollection', 'properties', 'data']

class Feature {
  currentProperties: any
  currentDescription: any
  updateCounters: any
  cesiumEntity: Cesium.Entity
  name: any
  description: any
  properties: any
  data: any
  imageryLayer: any
  position: any
  coords: any
  constructor(options) {
    const { Entity, knockout } = Cesium
    Entity.call(this, options)
    // addCustomFeatureProperties(this)
    this.currentProperties = undefined

    /**
   * Gets or sets the current description. This property is observable.
   * @type {String}
   */
    this.currentDescription = undefined

    /**
   * Gets or sets counter objects used to trigger an update of the Feature Info Section,
   * to allow custom components to self-update. The object keys are timeoutIds, and values are
   * {reactComponent: ReactComponent, counter: Integer}.
   * This property is observable.
   * @type {Object}
   */
    this.updateCounters = undefined

    knockout.track(this, [
      'currentProperties',
      'currentDescription',
      'updateCounters'
    ])
  }

  static init () {
    if (inherited) {
      return
    }
    inherit(Cesium.Entity, Feature)
    inherited = true
  }

  static fromEntity (entity: Cesium.Entity) {
    const feature = new Feature({ id: entity.id })
    ;(feature as any).merge(entity)

    // for (let i = 0; i < customProperties.length; i++) {
    //   if (entity.propertyNames.indexOf(customProperties[i]) === -1) {
    //     feature[customProperties[i]] = entity[customProperties[i]] // Assume no merging or cloning needed.
    //   }
    // }

    feature.cesiumEntity = entity

    return feature
  }

  static fromEntityCollectionOrEntity (entity) {
    // If this entity is part of a collection, get the feature with this id from that collection.
    let feature
    if (entity.entityCollection) {
      feature = entity.entityCollection.getById(entity.id)
    }
    if (!feature || !(feature instanceof Feature)) {
      feature = Feature.fromEntity(entity)
    }
    return feature
  }

  static fromImageryLayerFeature (imageryFeature) {
    const { Ellipsoid } = Cesium
    const feature = new Feature({
      id: imageryFeature.name
    })
    feature.name = imageryFeature.name
    feature.description = imageryFeature.description // already defined by the new Entity
    feature.properties = imageryFeature.properties
    feature.data = imageryFeature.data

    feature.imageryLayer = imageryFeature.imageryLayer
    feature.position = Ellipsoid.WGS84.cartographicToCartesian(
      imageryFeature.position
    )
    feature.coords = imageryFeature.coords

    return feature
  }
}

// function addCustomFeatureProperties (entity) {
//   for (let i = 0; i < customProperties.length; i++) {
//     if (entity.propertyNames.indexOf(customProperties[i]) === -1) {
//       entity.addProperty(customProperties[i])
//     }
//   }
// }

export default Feature
