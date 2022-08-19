import AMapLoader from '@amap/amap-jsapi-loader'
import type { CSSProperties, VNode } from 'vue'
import { computed, createCommentVNode, defineComponent, getCurrentInstance, h, nextTick, reactive, ref, watch } from 'vue'
import {
  VcBtn,
  VcTooltip,
  VcIcon,
  VcSpinnerPuff,
  VcSpinnerOval,
  VcSpinnerTail,
  VcSpinnerIos,
  VcSpinnerOrbit,
  VcSpinnerBars,
  VcTooltipProps
} from '@vue-cesium/components/ui'
import type { VcTooltipRef, VcBtnRef } from '@vue-cesium/components/ui'
import type { VcLocationEvt, VcColor, VcComponentInternalInstance, VcReadyObject, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { $, getVcParentInstance, getInstanceListener } from '@vue-cesium/utils/private/vm'
import usePosition from '@vue-cesium/composables/private/use-position'
import { gcj02towgs84 } from '@vue-cesium/utils/coordtransform'
import { makeColor, makeCartesian3 } from '@vue-cesium/utils/cesium-helpers'
import { isArray, isFunction, isPlainObject } from '@vue-cesium/utils/util'
import { useCommon, useLocale } from '@vue-cesium/composables'
import defaultProps from './defaultProps'
import { commonEmits } from '@vue-cesium/utils/emits'

const emits = {
  ...commonEmits,
  locationEvt: (evt: VcLocationEvt) => true
}
export const myLocationProps = defaultProps
export default defineComponent({
  name: 'VcMyLocation',
  props: myLocationProps,
  emits: emits,
  setup(props: VcMyLocationProps, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcMyLocation'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const { t } = useLocale()
    const rootRef = ref<HTMLElement>(null)
    const tooltipRef = ref<VcTooltipRef>(null)
    const btnRef = ref<VcBtnRef>(null)
    const positioning = ref(false)
    const positionState = usePosition(props, $services)
    const parentInstance = getVcParentInstance(instance)
    const hasVcNavigation = parentInstance.proxy?.$options.name === 'VcNavigation'
    const canRender = ref(hasVcNavigation)
    const rootStyle = reactive<CSSProperties>({})
    let datasource: Cesium.CustomDataSource
    let amapGeolocation: any = undefined
    // watch
    watch(
      () => props,
      val => {
        nextTick(() => {
          if (!instance.mounted) {
            return
          }
          updateRootStyle()
        })
      },
      {
        deep: true
      }
    )
    // computed
    const myLocationTip = computed(() => {
      return positioning.value
        ? t('vc.navigation.myLocation.positioning')
        : (isPlainObject(props.tooltip) && props.tooltip.tip) || t('vc.navigation.myLocation.myLocationTip')
    })
    // methods
    instance.createCesiumObject = async () => {
      canRender.value = true
      const { viewer } = $services
      const { CustomDataSource } = Cesium
      const locationDsArray = viewer.dataSources.getByName('__vc-myLocation__')
      if (locationDsArray.length) {
        datasource = locationDsArray[0]
      } else {
        viewer.dataSources.add(new CustomDataSource('__vc-myLocation__')).then(ds => {
          datasource = ds
        })
      }

      let promiseLoadAmap: Promise<unknown> | undefined = undefined
      if (props.amap && props.amap.key) {
        const options = props.amap.options
        promiseLoadAmap = new Promise((resolve, reject) => {
          AMapLoader.load({
            key: props.amap?.key,
            version: props.amap?.version,
            plugins: ['AMap.Geolocation']
          })
            .then(Amap => {
              amapGeolocation = new Amap.Geolocation(options)
              resolve(amapGeolocation)
            })
            .catch(e => {
              commonState.logger.error(e)
              reject(e)
            })
        })
      }

      const promiseAppend = new Promise((resolve, reject) => {
        nextTick(() => {
          if (!hasVcNavigation && props.teleportToViewer) {
            const viewerElement = ($services.viewer as any)._element
            viewerElement.appendChild($(rootRef))
            resolve($(rootRef))
          } else {
            resolve($(rootRef))
          }
        })
      })
      return Promise.all([promiseAppend, promiseLoadAmap]).then(e => {
        return e[0]
      })
    }

    instance.mount = async () => {
      updateRootStyle()
      const { viewer } = $services
      viewer.viewerWidgetResized?.raiseEvent({
        type: instance.cesiumClass,
        status: 'mounted',
        target: $(rootRef)
      })
      return true
    }

    instance.unmount = async () => {
      const { viewer } = $services
      if (amapGeolocation) {
        const scripts = document.getElementsByTagName('script')
        const removeScripts: HTMLScriptElement[] = []
        for (const script of scripts) {
          if (script.src.indexOf('/webapi.amap.com/maps') > -1) {
            removeScripts.push(script)
          }
        }
        removeScripts.forEach(script => {
          document.getElementsByTagName('body')[0].removeChild(script)
        })
      }

      const viewerElement = ($services.viewer as any)._element
      if (!hasVcNavigation) {
        viewerElement.contains($(rootRef)) && viewerElement.removeChild($(rootRef))
      }

      viewer.viewerWidgetResized?.raiseEvent({
        type: instance.cesiumClass,
        status: 'unmounted',
        target: $(rootRef)
      })
      return viewer.dataSources.remove(datasource, true)
    }

    const updateRootStyle = () => {
      const css: CSSProperties = positionState.style.value
      rootStyle.left = css.left
      rootStyle.top = css.top
      rootStyle.transform = css.transform

      if (!hasVcNavigation) {
        const side = positionState.attach.value
        const btnTarget = $(btnRef)?.$el
        if (btnTarget !== void 0) {
          // const clientRect = btnTarget.getBoundingClientRect()
          // css.width = `${clientRect.width}px`
          // css.height = `${clientRect.height}px`

          if (typeof props.teleportToViewer === 'undefined' || props.teleportToViewer) {
            if ((side.bottom || side.top) && !side.left && !side.right) {
              css.left = '50%'
              css.transform = 'translate(-50%, 0)'
            }

            if ((side.left || side.right) && !side.top && !side.bottom) {
              css.top = '50%'
              css.transform = 'translate(0, -50%)'
            }
          }
        }
      }

      Object.assign(rootStyle, css)
    }

    const onHandleClick = () => {
      $(tooltipRef)?.hide()
      positioning.value = true
      if (isFunction(props.customAPI)) {
        const position = props.customAPI(handleLocationError)
        zoomToMyLocation(position)
      } else if (amapGeolocation && props.amap && props.amap.key) {
        amapGeolocation.getCurrentPosition((status, result) => {
          if (status === 'complete') {
            let position: number[] = [result.position.lng, result.position.lat]
            if (props.amap?.transformToWGS84) {
              position = gcj02towgs84(position[0], position[1])
            }
            zoomToMyLocation(
              {
                lng: position[0],
                lat: position[1],
                address: result.formattedAddress
              },
              result
            )
          } else {
            handleLocationError(t('vc.navigation.myLocation.fail'), result.message)
          }
        })
      } else if (props.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            zoomToMyLocation(
              {
                lng: position.coords.longitude,
                lat: position.coords.latitude
              },
              position
            )
          },
          handleLocationError,
          {
            enableHighAccuracy: props.geolocation.enableHighAccuracy,
            timeout: props.geolocation.timeout,
            maximumAge: props.geolocation.maximumAge
          }
        )
      } else {
        handleLocationError(t('vc.navigation.myLocation.fail'))
      }
    }

    const zoomToMyLocation = (position, detail?) => {
      const longitude = position.lng
      const latitude = position.lat
      const address = position.address
      const { Rectangle, sampleTerrain, defined, SceneMode } = Cesium
      const { viewer } = $services
      datasource.entities.removeAll()
      const myPositionEntity = datasource.entities.add({
        id: props.id,
        position: makeCartesian3([longitude, latitude], viewer.scene.globe.ellipsoid) as Cesium.Cartesian3,
        point: {
          color: makeColor(props.pointColor),
          pixelSize: props.pixelSize,
          outlineWidth: props.outlineWidth,
          outlineColor: makeColor(props.outlineColor)
        },
        properties: {
          ...detail
        },
        description:
          props.description?.call(this, position, detail) ||
          describeWithoutUnderscores({
            [t('vc.navigation.myLocation.lng')]: longitude,
            [t('vc.navigation.myLocation.lat')]: latitude,
            [t('vc.navigation.myLocation.address')]: address
          })
      })

      const listener = getInstanceListener(instance, 'locationEvt')
      listener &&
        ctx.emit('locationEvt', {
          type: 'location',
          position,
          detail,
          entity: myPositionEntity
        })

      const options: any = {
        duration: props.duration
      }

      defined(props.maximumHeight) && (options.maximumHeight = props.maximumHeight)
      defined(props.hpr) && isArray(props.hpr) && (options.offset = new Cesium.HeadingPitchRange(props.hpr[0], props.hpr[1], props.hpr[2]))

      if (viewer.scene.mode === SceneMode.SCENE2D || viewer.scene.mode === SceneMode.COLUMBUS_VIEW) {
        return viewer.flyTo(myPositionEntity, options).then(() => {
          positioning.value = false
          listener &&
            ctx.emit('locationEvt', {
              type: 'zoomIn',
              camera: viewer.camera,
              status: 'end'
            })
        })
      }

      // west, south, east, north, result
      const factor = props.factor
      const rectangle = Rectangle.fromDegrees(longitude - factor, latitude - factor, longitude + factor, latitude + factor)
      const camera = viewer.scene.camera
      // Work out the destination that the camera would naturally fly to
      const destinationCartesian = camera.getRectangleCameraCoordinates(rectangle)
      const destination = viewer.scene.globe.ellipsoid.cartesianToCartographic(destinationCartesian)
      const terrainProvider = viewer.scene.globe.terrainProvider
      const level = props.level // A sufficiently coarse tile level that still has approximately accurate height
      const positions = [Rectangle.center(rectangle)]

      // Perform an elevation query at the centre of the rectangle
      return sampleTerrain(terrainProvider, level, positions).then(function (results) {
        // Add terrain elevation to camera altitude
        const finalDestinationCartographic: any = {
          longitude: destination.longitude,
          latitude: destination.latitude,
          height: destination.height + results[0].height
        }
        const finalDestination = viewer.scene.globe.ellipsoid.cartographicToCartesian(finalDestinationCartographic)
        listener &&
          ctx.emit('locationEvt', {
            type: 'zoomIn',
            camera: viewer.camera,
            status: 'start'
          })

        camera.flyTo({
          duration: props.duration,
          destination: finalDestination,
          complete: () => {
            positioning.value = false
            listener &&
              ctx.emit('locationEvt', {
                type: 'zoomIn',
                camera: viewer.camera,
                status: 'end'
              })
          },
          cancel: () => {
            positioning.value = false
            listener &&
              ctx.emit('locationEvt', {
                type: 'zoomIn',
                camera: viewer.camera,
                status: 'cancel'
              })
          }
        })
      })
    }

    const describeWithoutUnderscores = (properties, nameProperty?) => {
      let html = ''
      if (properties instanceof Cesium.PropertyBag) {
        // unwrap the properties from the PropertyBag
        properties = properties.getValue(Cesium.JulianDate.now())
      }
      for (let key in properties) {
        if (Object.prototype.hasOwnProperty.call(properties, key)) {
          if (key === nameProperty) {
            continue
          }
          let value = properties[key]
          if (typeof value === 'object') {
            value = describeWithoutUnderscores(value)
          } else {
            // value = formatPropertyValue(value)
          }
          key = key.replace(/_/g, ' ')
          if (Cesium.defined(value)) {
            html += '<tr><th>' + key + '</th><td>' + value + '</td></tr>'
          }
        }
      }
      if (html.length > 0) {
        html = '<table class="cesium-infoBox-defaultTable"><tbody>' + html + '</tbody></table>'
      }
      return html
    }

    const handleLocationError = (...args) => {
      positioning.value = false
      commonState.logger.error(...args)
    }

    const getLoadingCmp = () => {
      switch (props.loadingType) {
        case 'bars':
          return VcSpinnerBars
        case 'ios':
          return VcSpinnerIos
        case 'orbit':
          return VcSpinnerOrbit
        case 'oval':
          return VcSpinnerOval
        case 'puff':
          return VcSpinnerPuff
        case 'tail':
          return VcSpinnerTail
        default:
          return VcSpinnerBars
      }
    }

    const onTooltipBeforeShow = e => {
      if (positioning.value) {
        e.cancel = true
      }
    }

    return () => {
      if (canRender.value) {
        const inner: VNode[] = []
        inner.push(
          h(VcIcon, {
            name: props.icon,
            size: props.size
          })
        )

        inner.push(h('div', null, props.label))

        if (isPlainObject(props.tooltip)) {
          inner.push(
            h(
              VcTooltip,
              {
                ref: tooltipRef,
                onBeforeShow: onTooltipBeforeShow,
                ...props.tooltip
              },
              () => h('strong', null, myLocationTip.value)
            )
          )
        } else {
          inner.push(createCommentVNode('v-if'))
        }

        return h(
          'div',
          {
            ref: rootRef,
            class: `vc-my-location ${positionState.classes.value} ${props.customClass}`,
            style: rootStyle
          },
          [
            h(
              VcBtn,
              {
                ref: btnRef,
                size: props.size,
                flat: props.flat,
                stack: props.stack,
                round: props.round,
                loading: positioning.value,
                dense: true,
                style: { color: props.color, background: props.background },
                onClick: onHandleClick
              },
              {
                default: () => inner,
                loading: () => h(getLoadingCmp())
              }
            )
          ]
        )
      } else {
        return createCommentVNode('v-if')
      }
    }
  }
})

export type VcMyLocationEmits = typeof emits
export type VcMyLocationProps = {
  /**
   * Specify the position of the VcDistanceLegend.
   * Default value: top-right
   */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left'
  /**
   * An array of two numbers to offset the VcDistanceLegend horizontally and vertically in pixels.
   * Default value: [0, 0]
   */
  offset?: [number, number]
  /**
   * Specify the browser geolocation positioning parameters.
   * Default value:
   * {
   *    enableHighAccuracy: true,
   *    timeout: 5000,
   *    maximumAge: 0
   * }
   */
  geolocation?: PositionOptions
  /**
   * Specify the AMap positioning parameters. If set, use AMap api positioning first.
   */
  amap?: {
    key: string
    version: string
    options: {
      timeout?: number
      convert?: false
      noGeoLocation?: 0 | 1 | 2 | 3
      needAddress?: boolean
      extensions?: 'all' | 'base'
    }
    transformToWGS84?: boolean
  }
  /**
   * Specify the id of the location point after the positioning is successful.
   */
  id?: string
  /**
   * Specify the color of the location point after the positioning is successful.
   * Default value: #08ABD5
   */
  pointColor?: VcColor
  /**
   * Specify the pixel size of the location point after the positioning is successful.
   * Default value: 12
   */
  pixelSize?: number
  /**
   * Specify the outline width of the location point after the positioning is successful.
   * Default value: 3
   */
  outlineWidth?: number
  /**
   * Specify the outline color of the location point after the positioning is successful.
   * Default value: #fff
   */
  outlineColor?: VcColor
  /**
   * Specify the sampling level when the altitude is automatically recognized based on the terrain after the positioning is successful.
   * Default value: 6
   */
  level?: number
  /**
   * Specify the time to fly to the location point.
   * Default value: 3
   */
  duration?: number
  /**
   * Specify the factor by which the anchor point is converted to a rectangle.
   * Default: 0.01
   */
  factor?: number
  /**
   * The maximum height at the peak of the flight.
   */
  maximumHeight?: number
  /**
   * The offset from the target in the local east-north-up reference frame centered at the target. 2D or Columbus view works.
   */
  hpr?: [number, number, number]
  /**
   * Specify a custom API for positioning.
   */
  customAPI?: (errorCallback) => { lng: number; lat: number }
  /**
   * Specify the description of the location point
   */
  description?: (position, detail) => string
  /**
   * Specify the icon of the VcMyLocation.
   * Default value: vc-icons-geolocation
   */
  icon?: string
  /**
   * Specify the size of the VcMyLocation.
   * Default value: 24px
   */
  size?: string
  /**
   * Specify the css color of the VcMyLocation.
   * Default value: #3f4854
   */
  color?: string
  /**
   * Specify the css background of the VcMyLocation.
   * Default value: #fff
   */
  background?: string
  /**
   * Makes a circle shaped VcMyLocation.
   */
  round?: boolean
  /**
   * Use 'flat' design.
   */
  flat?: boolean
  /**
   * The text that will be shown on the VcMyLocation.
   */
  label?: string
  /**
   * Stack icon and label vertically instead of on same line.
   */
  stack?: boolean
  /**
   * The tooltip parameter.
   */
  tooltip?: false | VcTooltipProps
  /**
   * Specify the spinner style of the positioning transition
   */
  loadingType?: 'bars' | 'ios' | 'orbit' | 'oval' | 'puff' | 'tail'
  /**
   * Specify the customClass of the vc-my-location.
   */
  customClass?: string
  /**
   * Specify whether to add to the cesium-viewer node.
   * Default value: true
   */
  teleportToViewer?: boolean
  /**
   * Triggers before the VcCompass is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcCompass is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcCompass is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the positioning button is clicked.
   */
  onLocationEvt?: (evt: VcLocationEvt) => void
}

export type VcMyLocationRef = VcComponentPublicInstance<VcMyLocationProps>
