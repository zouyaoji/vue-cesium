/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:13
 * @LastEditTime: 2021-10-29 16:46:50
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\controls\selection-indicator\Feature.ts
 */

class Feature {
  id: string
  cesiumObject: any
  pickedFeature: any
  name: any
  description: any
  properties: any
  data: any
  imageryLayer: any
  position: any
  coords: any
  constructor(options) {
    this.id = options.id || Cesium.createGuid()
  }

  static getBoundingSphere(cesiumObject, viewer: Cesium.Viewer) {
    if (cesiumObject._boundingSphereWC) {
      return cesiumObject._boundingSphereWC || cesiumObject._boundingSphereWC[0]
    } else if (cesiumObject._boundingVolumeWC) {
      return cesiumObject._boundingVolumeWC
    } else if (cesiumObject instanceof Cesium.Entity) {
      const boundingSphere = new Cesium.BoundingSphere()
      ;(viewer.dataSourceDisplay as any).getBoundingSphere(cesiumObject, true, boundingSphere)
      return boundingSphere
    }
    return undefined
  }
  static fromPickedFeature(cesiumObject, pickedFeature, viewer) {
    const feature = new Feature({ id: cesiumObject.id })

    if (cesiumObject.position) {
      feature.position = cesiumObject.position
    } else if (cesiumObject instanceof Cesium.Model) {
      feature.position = Cesium.Matrix4.getTranslation(cesiumObject.modelMatrix, new Cesium.Cartesian3())
    } else if (cesiumObject instanceof Cesium.Cesium3DTileset) {
      feature.position = Cesium.Matrix4.getTranslation(pickedFeature.content._contentModelMatrix, new Cesium.Cartesian3())
    } else {
      feature.position = Feature.getBoundingSphere(cesiumObject, viewer)?.center
    }

    feature.cesiumObject = cesiumObject
    feature.pickedFeature = pickedFeature
    return feature
  }

  static fromImageryLayerFeature(imageryFeature, viewer: Cesium.Viewer) {
    const feature = new Feature({
      id: imageryFeature.name
    })
    feature.name = imageryFeature.name
    feature.description = imageryFeature.description // already defined by the new Entity
    feature.properties = imageryFeature.properties
    feature.data = imageryFeature.data

    feature.imageryLayer = imageryFeature.imageryLayer
    feature.position = viewer.scene.globe.ellipsoid.cartographicToCartesian(imageryFeature.position)
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
