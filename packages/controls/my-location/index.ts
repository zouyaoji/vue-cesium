
import AMapLoader from '@amap/amap-jsapi-loader'
import { computed, createCommentVNode, CSSProperties, defineComponent, getCurrentInstance, h, nextTick, reactive, ref, watch } from 'vue'
import {
  VcBtn,
  VcTooltip,
  VcIcon,
  VcSpinnerPuff,
  VcSpinnerOval,
  VcSpinnerTail,
  VcSpinnerIos,
  VcSpinnerOrbit,
  VcSpinnerBars
} from '@vue-cesium/ui'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { $, getVcParentInstance, getInstanceListener } from '@vue-cesium/utils/private/vm'
import usePosition from '@vue-cesium/composables/private/use-position'
import { gcj02towgs84 } from '@vue-cesium/utils/coordtransform'
import { makeColor } from '@vue-cesium/utils/cesium-helpers'
import { isFunction } from '@vue-cesium/utils/util'
import { useCommon } from '@vue-cesium/composables'
import defaultProps from './defaultProps'
import { t } from '@vue-cesium/locale'

export default defineComponent({
  name: 'VcMyLocation',
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'locationEvt'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcMyLocation'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const rootRef = ref<HTMLElement>(null)
    const tooltipRef = ref<typeof VcTooltip>(null)
    const btnRef = ref<typeof VcBtn>(null)
    const positioning = ref(false)
    const positionState = usePosition(props, $services)
    const parentInstance = getVcParentInstance(instance)
    const hasVcNavigation = parentInstance.proxy.$options.name === 'VcNavigation'
    const canRender = ref(hasVcNavigation)
    const rootStyle = reactive<CSSProperties>({})
    let datasource: Cesium.CustomDataSource = undefined
    let amapGeolocation = undefined
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
      return positioning.value ? t('vc.navigation.myLocation.positioning') : props.tooltip.tip || t('vc.navigation.myLocation.myLocationTip')
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

      let promiseLoadAmap = undefined
      if (props.amap && props.amap.key) {
        const options = props.amap.options
        promiseLoadAmap = new Promise((resolve, reject) => {
          AMapLoader.load({
            key: props.amap.key,
            version: props.amap.version,
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
          if (!hasVcNavigation) {
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
      viewer.viewerWidgetResized.raiseEvent({
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
        const removeScripts = []
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

      viewer.viewerWidgetResized.raiseEvent({
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
          const clientRect = btnTarget.getBoundingClientRect()
          // css.width = `${clientRect.width}px`
          // css.height = `${clientRect.height}px`

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
            if (props.amap.transformToWGS84) {
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
            handleLocationError(t('vc.navigation.myLocation.fail'))
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
      const { Cartesian3, Rectangle, Ellipsoid, sampleTerrain } = Cesium
      const { viewer } = $services
      datasource.entities.removeAll()
      const myPositionEntity = datasource.entities.add({
        id: props.id,
        position: Cartesian3.fromDegrees(longitude, latitude),
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
          props.description?.call(position, detail) ||
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

      // west, south, east, north, result
      const factor = props.factor
      const rectangle = Rectangle.fromDegrees(longitude - factor, latitude - factor, longitude + factor, latitude + factor)
      const camera = viewer.scene.camera
      // Work out the destination that the camera would naturally fly to
      const destinationCartesian = camera.getRectangleCameraCoordinates(rectangle)
      const destination = Ellipsoid.WGS84.cartesianToCartographic(destinationCartesian)
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
        const finalDestination = Ellipsoid.WGS84.cartographicToCartesian(finalDestinationCartographic)
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
                status: 'complete'
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

    const handleLocationError = err => {
      positioning.value = false
      commonState.logger.error(err.message)
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
      }
    }

    const onTooltipBeforeShow = e => {
      if (positioning.value) {
        e.cancel = true
      }
    }

    return () => {
      if (canRender.value) {
        const inner = []
        inner.push(
          h(VcIcon, {
            name: props.icon,
            size: props.size
          })
        )

        inner.push(
          h('div', null, props.label)
        )

        if (props.tooltip) {
          inner.push(
            h(VcTooltip, {
              ref: tooltipRef,
              // onBeforeShow: onTooltipBeforeShow,
              ...props.tooltip
            },
            () => h('strong', null, myLocationTip.value))
          )
        } else {
          inner.push(createCommentVNode('v-if'))
        }

        return h('div', {
          ref: rootRef,
          class: 'vc-my-location ' + positionState.classes.value,
          style: rootStyle
        }, [
          h(VcBtn, {
            ref: btnRef,
            size: props.size,
            flat: props.flat,
            stack: props.stack,
            round: props.round,
            loading: positioning.value,
            dense: true,
            style: { color: props.color, background: props.background },
            onClick: onHandleClick
          }, {
            default: () => inner,
            loading: () => h(getLoadingCmp())
          })
        ])
      } else {
        return createCommentVNode('v-if')
      }
    }
  }
})
