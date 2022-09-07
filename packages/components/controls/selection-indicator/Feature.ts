/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:13
 * @LastEditTime: 2022-09-07 21:20:56
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\controls\selection-indicator\Feature.ts
 */

import { makeCartesian3 } from '@vue-cesium/utils/cesium-helpers'
import type { VcCesiumObject } from '@vue-cesium/utils/types'

class Feature {
  id: string
  cesiumObject: VcCesiumObject
  pickedFeature: any
  name: any
  description: any
  properties: any
  data: any
  imageryLayer: Cesium.ImageryLayer
  position: Cesium.Cartesian3
  coords: any
  windowPosition: Cesium.Cartesian2
  constructor(options) {
    this.id = options.id || Cesium.createGuid()
  }

  static getBoundingSphere(cesiumObject, viewer: Cesium.Viewer) {
    const { Primitive, ClassificationPrimitive, GroundPolylinePrimitive, GroundPrimitive, Polyline } = Cesium
    let boundingSphere
    if (cesiumObject instanceof ClassificationPrimitive || cesiumObject instanceof GroundPolylinePrimitive) {
      boundingSphere = (cesiumObject as any)._primitive?._boundingSphereWC?.[0]
    } else if (cesiumObject instanceof Primitive) {
      boundingSphere = (cesiumObject as any)._boundingSphereWC?.[0]
    } else if (cesiumObject instanceof GroundPrimitive) {
      boundingSphere = (cesiumObject as any)._boundingVolumes?.[0]
    } else if (cesiumObject instanceof Polyline) {
      boundingSphere = (cesiumObject as any)._boundingVolumeWC
    } else if (cesiumObject instanceof Cesium.Entity) {
      boundingSphere = new Cesium.BoundingSphere()
      ;(viewer.dataSourceDisplay as any).getBoundingSphere(cesiumObject, true, boundingSphere)
    }

    return boundingSphere
  }
  static fromPickedFeature(cesiumObject, pickedFeature, viewer, screenPosition) {
    const feature = new Feature({ id: cesiumObject.id })

    if (cesiumObject.position) {
      feature.position = cesiumObject.position
    } else if (cesiumObject instanceof Cesium.Model) {
      feature.position = Cesium.Matrix4.getTranslation(cesiumObject.modelMatrix, new Cesium.Cartesian3())
    } else if (cesiumObject instanceof Cesium.Cesium3DTileset) {
      let position = pickedFeature.content.tile.boundingSphere.center
      let positionProperty = pickedFeature?.getProperty?.('position')
      if (Cesium.defined(positionProperty)) {
        if (typeof positionProperty === 'string') {
          positionProperty = JSON.parse(positionProperty)
        }

        position = makeCartesian3(positionProperty) as Cesium.Cartesian3
      }
      feature.position = position
    } else {
      feature.position = Feature.getBoundingSphere(cesiumObject, viewer)?.center
    }

    feature.cesiumObject = cesiumObject
    feature.pickedFeature = pickedFeature
    feature.windowPosition = screenPosition
    feature.description = cesiumObject?.description || cesiumObject?.description?.getValue()
    feature.properties = cesiumObject?.properties || cesiumObject?.properties?.getValue()
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
