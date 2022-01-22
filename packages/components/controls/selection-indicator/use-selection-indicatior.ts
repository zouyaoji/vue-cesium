import { VcComponentInternalInstance, VcViewerProvider } from '@vue-cesium/utils/types'
import { CSSProperties, nextTick, onUnmounted, reactive, ref, watch, WatchStopHandle } from 'vue'
import Feature from './Feature'
import PickedFeatures from './PickedFeatures'
import { isArray } from '@vue-cesium/utils/util'

export default function (instance: VcComponentInternalInstance, props, $services: VcViewerProvider) {
  // state
  const offScreen = '-1000px'
  const screenPositionX = ref(offScreen)
  const screenPositionY = ref(offScreen)
  const transform = ''
  const opacity = 1.0
  const position = ref<Cesium.Cartesian3>()
  const rootRef = ref<HTMLElement | null>()
  let selectionIndicatorTween
  let selectionIndicatorIsAppearing
  const pickedFeatures = ref<any>(null)
  const selectedFeature = ref<any>(null)
  let unwatchFns: Array<WatchStopHandle> = []
  // computed
  const rootStyle = reactive<CSSProperties>({
    top: screenPositionY.value,
    left: screenPositionX.value,
    transform,
    opacity: opacity
  })
  // watch
  unwatchFns.push(
    watch(selectedFeature, val => {
      const selectedFeature: any = val
      const { defined } = Cesium
      if (defined(selectedFeature) && defined(selectedFeature?.position)) {
        const { viewer } = $services
        // Todo 高亮逻辑
        position.value =
          selectedFeature?.position instanceof Cesium.Cartesian3
            ? selectedFeature?.position
            : selectedFeature?.position?.getValue(viewer.clock.currentTime)
        animateAppear()
        instance.proxy?.$emit('pickEvt', selectedFeature)
      } else {
        animateDepart()
        instance.proxy?.$emit('pickEvt', selectedFeature)
      }

      update()
    })
  )

  unwatchFns.push(
    watch(pickedFeatures, val => {
      const { defined, Entity } = Cesium
      const pickedFeatures = val
      if (!defined(pickedFeatures)) {
        selectedFeature.value = undefined
      } else {
        const fakeFeature = new Entity({
          id: '__Vc__Pick__Location__'
        })
        fakeFeature.position = pickedFeatures.pickPosition
        selectedFeature.value = fakeFeature
      }

      nextTick(() => {
        if (defined(pickedFeatures.allFeaturesAvailablePromise)) {
          pickedFeatures.allFeaturesAvailablePromise.then(() => {
            // We only show features that are associated with a catalog item, so make sure the one we select to be
            // open initially is one we're actually going to show.
            const featuresShownAtAll = pickedFeatures.features.filter(x => defined(x))
            selectedFeature.value = featuresShownAtAll.filter(featureHasInfo)[0]
            if (!defined(selectedFeature.value) && featuresShownAtAll.length > 0) {
              // Handles the case when no features have info - still want something to be open.
              selectedFeature.value = featuresShownAtAll[0]
            }
          })
        }
      })
    })
  )
  // methods
  const featureHasInfo = feature => {
    const { defined } = Cesium
    return defined(feature.properties) || defined(feature.description)
  }

  const pickFromScreenPosition = (screenPosition: Cesium.Cartesian2) => {
    const { defined } = Cesium
    const { viewer } = $services
    const scene = viewer.scene
    const pickRay = scene.camera.getPickRay(screenPosition)
    const pickPosition = scene.globe.pick(pickRay, scene)
    if (!defined(pickPosition)) {
      return
    }
    const pickPositionCartographic = scene.globe.ellipsoid.cartesianToCartographic(pickPosition || new Cesium.Cartesian3())

    const vectorFeatures = pickVectorFeatures(screenPosition)

    const providerCoords = attachProviderCoordHooks()

    const pickRasterPromise = props.allowFeatureInfoRequests ? scene.imageryLayers.pickImageryLayerFeatures(pickRay, scene) : Promise.resolve()

    const result = buildPickedFeatures(
      providerCoords,
      pickPosition,
      vectorFeatures,
      [pickRasterPromise],
      undefined,
      pickPositionCartographic.height,
      false,
      viewer
    )
    pickedFeatures.value = result
  }

  const buildPickedFeatures = (
    providerCoords,
    pickPosition,
    existingFeatures,
    featurePromises,
    imageryLayers,
    defaultHeight,
    ignoreSplitter,
    viewer
  ) => {
    const { defined, defaultValue, when } = Cesium
    ignoreSplitter = defaultValue(ignoreSplitter, false)
    const result = new PickedFeatures()

    result.providerCoords = providerCoords
    result.pickPosition = pickPosition

    result.allFeaturesAvailablePromise = when
      .all(featurePromises)
      .then(function (this, allFeatures) {
        result.isLoading = false

        result.features = allFeatures.reduce(
          function (this, resultFeaturesSoFar, imageryLayerFeatures, i) {
            if (!defined(imageryLayerFeatures)) {
              return resultFeaturesSoFar
            }

            const features = imageryLayerFeatures.map(
              function (feature) {
                if (defined(imageryLayers)) {
                  feature.imageryLayer = imageryLayers[i]
                }

                if (!defined(feature.position)) {
                  feature.position = viewer.scene.globe.ellipsoid.cartesianToCartographic(pickPosition)
                }

                // If the picked feature does not have a height, use the height of the picked location.
                // This at least avoids major parallax effects on the selection indicator.
                if (!defined(feature.position.height) || feature.position.height === 0.0) {
                  feature.position.height = defaultHeight
                }
                return Feature.fromImageryLayerFeature(feature, viewer)
              }.bind(this)
            )

            return resultFeaturesSoFar.concat(features)
          }.bind(this),
          defaultValue(existingFeatures, [])
        )
      })
      .otherwise(function () {
        result.isLoading = false
        result.error = 'An unknown error occurred while picking features.'
      })

    return result
  }

  const pickVectorFeatures = (screenPosition: Cesium.Cartesian2) => {
    // Pick vector features
    const vectorFeatures: Array<any> = []
    const { defined } = Cesium
    const { viewer } = $services
    const scene = viewer.scene
    const pickedList = scene.drillPick(screenPosition)
    for (let i = 0; i < pickedList.length; ++i) {
      const picked = pickedList[i]
      let id = picked.id

      // if (
      //   id &&
      // id.entityCollection &&
      // id.entityCollection.owner &&
      // id.entityCollection.owner.name === featureHighlightName
      // ) {
      //   continue
      // }
      if (!defined(id) && defined(picked.primitive)) {
        id = picked.primitive
      }

      const catalogItem = picked?.primitive?._catalogItem ?? id?._catalogItem

      if (typeof catalogItem?.getFeaturesFromPickResult === 'function') {
        const result = catalogItem.getFeaturesFromPickResult.bind(catalogItem)(screenPosition, picked)
        if (result) {
          if (Array.isArray(result)) {
            vectorFeatures.push(...result)
          } else {
            vectorFeatures.push(result)
          }
        }
      } else {
        const pickedFeature = picked
        if (pickedFeature.id) {
          if (isArray(pickedFeature.id) && pickedFeature.id[0] instanceof Cesium.Entity) {
            // 数据源集合（集群）
            pickedFeature.id.forEach(entity => {
              const feature = Feature.fromPickedFeature(entity, pickedFeature, viewer, screenPosition)
              vectorFeatures.push(feature)
            })
            continue
          } else if (pickedFeature.id instanceof Cesium.Entity) {
            // 实体 or 数据源
            const feature = Feature.fromPickedFeature(pickedFeature.id, pickedFeature, viewer, screenPosition)
            vectorFeatures.push(feature)
            continue
          }
        }
        // 图元
        if (pickedFeature.primitive) {
          const feature = Feature.fromPickedFeature(pickedFeature.primitive, pickedFeature, viewer, screenPosition)
          vectorFeatures.push(feature)
        } else if (pickedFeature.collection) {
          // 图元集合
          const feature = Feature.fromPickedFeature(pickedFeature.collection, pickedFeature, viewer, screenPosition)
          vectorFeatures.push(feature)
        }
      }
    }

    return vectorFeatures
  }

  const attachProviderCoordHooks = () => {
    const providerCoords = {}
    const { viewer } = $services
    const scene = viewer.scene

    const pickFeaturesHook = function (imageryProvider, oldPick, x, y, level, longitude, latitude) {
      if (oldPick) {
        const featuresPromise = oldPick.call(imageryProvider, x, y, level, longitude, latitude)

        // Use url to uniquely identify providers because what else can we do?
        if (imageryProvider.url) {
          providerCoords[imageryProvider.url] = {
            x: x,
            y: y,
            level: level
          }
        }

        imageryProvider.pickFeatures = oldPick
        return featuresPromise
      }

      return Promise.reject(false)
    }

    for (let j = 0; j < scene.imageryLayers.length; j++) {
      const imageryProvider = scene.imageryLayers.get(j).imageryProvider
      imageryProvider.pickFeatures = pickFeaturesHook.bind(undefined, imageryProvider, imageryProvider.pickFeatures)
    }

    return providerCoords
  }

  const computeScreenSpacePosition = (position, result) => {
    const { viewer } = $services
    return Cesium.SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, position, result)
  }

  const update = () => {
    const { defined, Cartesian2 } = Cesium
    if (props.show && defined(position.value)) {
      const screenPosition = computeScreenSpacePosition(position.value, new Cartesian2())
      if (!defined(screenPosition)) {
        rootStyle.left = offScreen
        rootStyle.right = offScreen
      } else {
        const { viewer } = $services
        const container = viewer.container
        const containerWidth = container.clientWidth
        const containerHeight = container.clientHeight
        // const selectionIndicatorElement = $(rootRef)
        // const indicatorSize = selectionIndicatorElement?.clientWidth || 0
        const indicatorSize = props.width
        const halfSize = indicatorSize * 0.5

        screenPosition.x = Math.min(Math.max(screenPosition.x, -indicatorSize), containerWidth + indicatorSize) - halfSize
        screenPosition.y = Math.min(Math.max(screenPosition.y, -indicatorSize), containerHeight + indicatorSize) - halfSize

        rootStyle.left = Math.floor(screenPosition.x + 0.25) + 'px'
        rootStyle.top = Math.floor(screenPosition.y + 0.25) + 'px'
      }
    }
  }

  const animateAppear = () => {
    const { viewer } = $services
    const { defined, EasingFunction } = Cesium
    if (defined(selectionIndicatorTween)) {
      if (selectionIndicatorIsAppearing) {
        // Already appearing; don't restart the animation.
        return
      }
      selectionIndicatorTween.cancelTween()
      selectionIndicatorTween = undefined
    }

    selectionIndicatorIsAppearing = true

    selectionIndicatorTween = viewer.scene.tweens.add({
      startObject: {
        scale: 2.0,
        opacity: 0.0,
        rotate: -180
      },
      stopObject: {
        scale: 1.0,
        opacity: 1.0,
        rotate: 0
      },
      duration: 0.8,
      easingFunction: EasingFunction.EXPONENTIAL_OUT,
      update: function (value) {
        rootStyle.opacity = value.opacity
        rootStyle.transform = 'scale(' + value.scale + ') rotate(' + value.rotate + 'deg)'
      },
      complete: function () {
        selectionIndicatorTween = undefined
      },
      cancel: function () {
        selectionIndicatorTween = undefined
      }
    })
  }

  const animateDepart = () => {
    const { viewer } = $services
    const { defined, EasingFunction } = Cesium
    if (defined(selectionIndicatorTween)) {
      if (!selectionIndicatorIsAppearing) {
        // Already disappearing, don't restart the animation.
        return
      }
      selectionIndicatorTween.cancelTween()
      selectionIndicatorTween = undefined
    }

    selectionIndicatorIsAppearing = false
    selectionIndicatorTween = viewer.scene.tweens.add({
      startObject: {
        scale: 1.0,
        opacity: 1.0
      },
      stopObject: {
        scale: 1.5,
        opacity: 0.0
      },
      duration: 0.8,
      easingFunction: EasingFunction.EXPONENTIAL_OUT,
      update: function (value) {
        rootStyle.opacity = value.opacity
        rootStyle.transform = 'scale(' + value.scale + ') rotate(0deg)'
      },
      complete: function () {
        selectionIndicatorTween = undefined
      },
      cancel: function () {
        selectionIndicatorTween = undefined
      }
    })
  }

  const onPostRender = () => {
    update()
  }

  // life cycle
  onUnmounted(() => {
    unwatchFns.forEach(item => item())
    unwatchFns = []
  })

  // expose public methods
  Object.assign(instance.proxy, {
    selectedFeature,
    pickedFeatures,
    position,
    computeScreenSpacePosition,
    update,
    animateAppear,
    animateDepart
  })

  return {
    pickFromScreenPosition,
    rootRef,
    rootStyle,
    onPostRender
  }
}
