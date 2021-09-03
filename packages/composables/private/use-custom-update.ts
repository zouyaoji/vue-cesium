/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-03 14:25:32
 * @LastEditTime: 2021-09-03 15:57:53
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\private\use-custom-update.ts
 */

export default function () {
  const onVcCollectionPointReady = function (e) {
    const { cesiumObject: pointPrimitiveCollection } = e
    const originalUpdate = pointPrimitiveCollection.update

    pointPrimitiveCollection.update = function (frameState) {
      const originalLength = frameState.commandList.length
      originalUpdate.call(this, frameState)
      const endLength = frameState.commandList.length
      for (let i = originalLength; i < endLength; ++i) {
        frameState.commandList[i].pass = Cesium['Pass'].TRANSLUCENT
        frameState.commandList[i].renderState = Cesium['RenderState'].fromCache({
          depthTest: {
            enabled: false
          },
          depthMask: false
        })
      }
    }
  }

  const onVcCollectionLabelReady = e => {
    const { cesiumObject: labelCollection } = e
    const originalUpdate = labelCollection.update

    labelCollection.update = function (frameState) {
      const originalLength = frameState.commandList.length
      originalUpdate.call(this, frameState)
      const endLength = frameState.commandList.length
      for (let i = originalLength; i < endLength; ++i) {
        frameState.commandList[i].pass = Cesium['Pass'].OVERLAY
        frameState.commandList[i].renderState = Cesium['RenderState'].fromCache({
          depthTest: {
            enabled: false
          },
          depthMask: false,
          blending: Cesium.BlendingState.ALPHA_BLEND
        })
      }
    }
  }

  const onVcPrimitiveReady = e => {
    const { cesiumObject: primitive } = e
    const originalPrimitiveUpdate = primitive.update

    primitive.update = function (frameState) {
      const originalLength = frameState.commandList.length
      originalPrimitiveUpdate.call(this, frameState)
      const endLength = frameState.commandList.length
      for (let i = originalLength; i < endLength; ++i) {
        if (frameState.commandList[i].pass !== Cesium['Pass'].TRANSLUCENT) {
          continue
        }
        frameState.commandList[i].pass = Cesium['Pass'].OPAQUE
        frameState.commandList[i].renderState = Cesium['RenderState'].fromCache({
          depthTest: {
            enabled: false
          },
          depthMask: false,
          blending: Cesium.BlendingState.ALPHA_BLEND
        })
      }
    }
  }
  return {
    onVcCollectionPointReady,
    onVcPrimitiveReady,
    onVcCollectionLabelReady
  }
}
