import type { PropType, VNode } from 'vue'
import { defineComponent, getCurrentInstance, ref, h, reactive } from 'vue'
import type {
  VcAppearance,
  VcCartesian3Array,
  VcColor,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcPickEvent,
  VcPosition,
  VcReadyObject,
  VcTyphoonDatasource,
  VcTyphoonPoint,
  VcTyphoonRoute
} from '@vue-cesium/utils/types'
import { useLocale } from '@vue-cesium/composables'
import { makeCartesian3Array } from '@vue-cesium/utils/cesium-helpers'
import { commonEmits } from '@vue-cesium/utils/emits'
import {
  VcCollectionLabel,
  VcCollectionPoint,
  VcCollectionPrimitive,
  VcCollectionPrimitiveRef,
  VcLabelProps,
  VcPointProps,
  VcPolygon
} from '@vue-cesium/components/primitive-collections'
import { cloneDeep, uniqWith } from 'lodash-es'
import useLog from '@vue-cesium/composables/private/use-log'
import { VcPrimitive, VcPrimitiveProps } from '@vue-cesium/components/primitives'
import { VcGeometryInstance } from '@vue-cesium/components/geometry-instance'
import { VcGeometryPolyline, VcGeometryPolylineProps } from '@vue-cesium/components/geometries'
import VcOverlayHtml from '@vue-cesium/components/overlays/html'
import circle from '@turf/circle'
import { deepMerge } from '@vue-cesium/utils/util'
import { useCommon } from '@vue-cesium/composables'

const defaultPointProps = {
  color: '#409eff',
  pixelSize: 8,
  outlineColor: 'rgba(0,0,0,0.6)',
  outlineWidth: 1,
  disableDepthTestDistance: Number.POSITIVE_INFINITY
}

const defaultLinePrimitiveProps = {
  enableMouseEvent: false,
  asynchronous: false,
  allowPicking: true
}

const defaultLineGeometryProps = {
  width: 2.0,
  show: true
}

const defaultLabelProps = {
  pixelOffset: [20, 0],
  showBackground: true,
  backgroundColor: 'rgba(0,0,0,1)',
  enableMouseEvent: false
}

export const typhoonOverlayProps = {
  typhoonRoutes: {
    type: Array as PropType<VcTyphoonRoute[]>
  },
  clampToGround: {
    type: Boolean,
    default: false
  },
  radius7Color: {
    type: String,
    default: 'rgba(68, 255, 230, 0.3)'
  },
  radius10Color: {
    type: String,
    default: 'rgba(32, 237, 39, 0.3)'
  },
  radius12Color: {
    type: String,
    default: 'rgba(255, 247, 16, 0.3)'
  },
  pointProps: {
    type: [Object, Function] as PropType<VcPointProps | ((e: VcTyphoonPoint) => VcPointProps)>,
    default: () => defaultPointProps
  },
  linePrimitiveProps: {
    type: [Object, Function] as PropType<VcPrimitiveProps | ((e: VcTyphoonDatasource) => VcPrimitiveProps)>,
    default: () => defaultLinePrimitiveProps
  },
  lineGeometryProps: {
    type: [Object, Function] as PropType<VcGeometryPolylineProps | ((e: VcTyphoonDatasource) => VcGeometryPolylineProps)>,
    default: () => defaultLineGeometryProps
  },
  labelProps: {
    type: [Object, Function] as PropType<VcLabelProps | ((e: VcTyphoonDatasource) => VcLabelProps)>,
    default: () => defaultLabelProps
  },
  circleOverlayPosition: {
    type: [String, Function] as PropType<string | ((e: VcTyphoonPoint) => string)>,
    default: '-175px'
  },
  setsArray: {
    type: Array as PropType<string[]>,
    default: () => ['中央台', '日本', '美国', '韩国', '中国香港']
  }
}
const emits = {
  ...commonEmits,
  mouseover: (e: VcPickEvent) => true,
  mouseout: (e: VcPickEvent) => true,
  click: (e: VcPickEvent) => true,
  clickout: (e: VcPickEvent) => true,
  forecastRouteAdded: (e: { livePoint: VcTyphoonPoint; datasource: VcTyphoonDatasource; addedByClick: boolean }) => true
}

export default defineComponent({
  name: 'VcOverlayTyphoon',
  props: typhoonOverlayProps,
  emits: emits,
  setup(props: VcOverlayTyphoonProps, ctx) {
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcOverlayTyphoon'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }

    const { $services } = commonState
    const logger = useLog(instance as VcComponentInternalInstance)
    const { t } = useLocale()
    const primitiveCollectionRef = ref<VcCollectionPrimitiveRef>(null)
    const typhoonDatasources: VcTyphoonDatasource[] = reactive([])

    instance.createCesiumObject = async () => {
      return primitiveCollectionRef
    }

    const addTyphoonPath = (index: number, datasource: VcTyphoonDatasource) => {
      datasource.playIndex = index
      const point = datasource.typhoonRoute.points[index]
      point.type = 'live'
      point.index = index
      point.tfbh = datasource.name

      const position = [point.lng, point.lat]
      datasource.positions.push(position)

      const pointProps = typeof props.pointProps === 'function' ? deepMerge(cloneDeep(defaultPointProps), props.pointProps(point)) : props.pointProps
      datasource.points.push({
        id: point.id || Cesium.createGuid(),
        position,
        onMouseover(evt: VcPickEvent) {
          ctx.emit('mouseover', evt)
        },
        onMouseout(evt) {
          ctx.emit('mouseout', evt)
        },
        onClick(evt) {
          showForecast(point, datasource, index, true)
          datasource.playIndex = point.index
          ctx.emit('click', evt)
        },
        onClickout(evt) {
          ctx.emit('clickout', evt)
        },
        ...pointProps,
        ...point
      })
      const lastPoint = datasource.points[index]
      lastPoint && datasource.colors.push(lastPoint.color)
      // 最后一个实况点，展示预报路径   如最后一个点没有预报路径则显示最新一个点的预报路径
      if (index === datasource.typhoonRoute.points.length - 1) {
        showForecast(point, datasource, index)
      }
    }
    const playTyphoonRoute = (tfbh: string) => {
      const typhoonDatasourceIndex = typhoonDatasources.findIndex(datasource => datasource.name === tfbh)
      if (typhoonDatasourceIndex >= 0) {
        let index = 0
        const datasource = typhoonDatasources[typhoonDatasourceIndex] as VcTyphoonDatasource
        datasource.points.length = 0
        datasource.positions.length = 0
        const typhoonData = datasource.typhoonRoute
        addTyphoonPath(index, datasource)

        cancelAnimationFrame(datasource.playInterval)
        const animation = () => {
          index++
          if (index >= typhoonData.points.length) {
            cancelAnimationFrame(datasource.playInterval)
          } else {
            addTyphoonPath(index, datasource)
          }

          datasource.playInterval = requestAnimationFrame(animation)
        }
        datasource.playInterval = requestAnimationFrame(animation)
      } else {
        // logger.warn('播放台风失败，原因：未找到对应编号的台风数据。')
        logger.warn(t(`vc.typhoon.warn`) || '播放台风失败，原因：未找到对应编号的台风数据。')
      }
    }

    const showForecast = (livePoint: VcTyphoonPoint, datasource: VcTyphoonDatasource, index?: number, fromClick = false) => {
      // 1. 删除预报数据
      datasource.children.length = 0
      // 2. 添加预报
      let forecast = fromClick ? livePoint.forecast || [] : []
      if (!fromClick) {
        for (let i = 0; i < props.setsArray.length; i++) {
          const f = (livePoint, index) => {
            const forecastRaw: Array<any> = livePoint?.forecast || []
            forecast.push(...forecastRaw)

            if (fromClick) {
              return
            }

            forecast = uniqWith(forecast, (a: any, b) => a.sets === b.sets)

            const sets = props.setsArray[i]
            const setsIndex = forecast.findIndex(v => v.sets === sets)

            if (setsIndex > -1) {
              if (!forecast[setsIndex].unshifted) {
                forecast[setsIndex].points.unshift({
                  lat: livePoint.lat,
                  lng: livePoint.lng
                } as any)
                forecast[setsIndex].unshifted = true
              }

              // continue
            } else if (index > 0) {
              const preLivePoint = datasource.typhoonRoute.points[index - 1]
              f(preLivePoint, index - 1)
            }
          }

          f(livePoint, index)
        }
      }

      if (!forecast || forecast.length <= 0) {
        return
      }
      // let newForecast = []
      // newForecast = forecast.filter(point => {
      //   return point.sets !== '英国'
      // })
      for (let i = 0; i < forecast.length; i++) {
        // 预报机构数据
        const typhoonRouteBySet = forecast[i]

        const points: VcTyphoonPoint[] = []
        const positions: VcPosition[] = []
        const datasourceBySet: VcTyphoonDatasource = {
          name: datasource.name + '_' + typhoonRouteBySet.sets,
          typhoonRoute: typhoonRouteBySet,
          show: true,
          positions,
          points,
          type: 'forc'
        }
        datasource.children.push(datasourceBySet)
        typhoonRouteBySet.points.forEach((point, index) => {
          const position = [point.lng, point.lat]
          datasourceBySet.positions.push(position)

          if (index === 0 && fromClick) {
            datasourceBySet.positions.unshift([livePoint.lng, livePoint.lat])
          }

          point.sets = typhoonRouteBySet.sets
          point.type = 'forc'
          point.index = index
          const pointProps = typeof props.pointProps === 'function' ? props.pointProps(point) : props.pointProps
          index !== 0 &&
            datasourceBySet.points.push({
              id: point.id || Cesium.createGuid(),
              position,
              onMouseover(evt: VcPickEvent) {
                ctx.emit('mouseover', evt)
              },
              onMouseout(evt) {
                ctx.emit('mouseout', evt)
              },
              onClick(evt) {
                ctx.emit('click', evt)
              },
              ...pointProps,
              ...point
            })
        })
      }

      ctx.emit('forecastRouteAdded', {
        livePoint,
        datasource,
        addedByClick: fromClick
      })
    }

    const addTyphoonRoute = (typhoonRoute: VcTyphoonRoute) => {
      const points: VcTyphoonPoint[] = []
      const positions: VcPosition[] = []
      const typhoonDatasource: VcTyphoonDatasource = {
        name: typhoonRoute.tfbh,
        typhoonRoute,
        show: true,
        positions,
        points,
        children: [],
        colors: [],
        type: 'live'
      }

      typhoonDatasources.push(typhoonDatasource)

      playTyphoonRoute(typhoonRoute.tfbh)

      return typhoonDatasource
    }

    const flyToTyphoonRoute = (
      typhoon: string | Array<string>,
      options?: {
        duration?: number
        offset?: Cesium.HeadingPitchRange
        complete?: Cesium.Camera.FlightCompleteCallback
        cancel?: Cesium.Camera.FlightCancelledCallback
        endTransform?: Cesium.Matrix4
        maximumHeight?: number
        pitchAdjustHeight?: number
        flyOverLongitude?: number
        flyOverLongitudeWeight?: number
        easingFunction?: Cesium.EasingFunction.Callback
      }
    ) => {
      const names = []
      if (typeof typhoon === 'string') {
        names.push(typhoon)
      } else {
        names.push(...typhoon)
      }
      let boundingSphereUnion = null
      names.forEach(name => {
        const positions = []
        const typhoonDatasource = typhoonDatasources.find(v => v.name === name)
        if (typhoonDatasource && typhoonDatasource.typhoonRoute.points) {
          typhoonDatasource.typhoonRoute.points.forEach(point => {
            positions.push([point.lng, point.lat])
          })
        }

        // 预报路径点
        if (typhoonDatasource?.children?.length) {
          typhoonDatasource.children.forEach(v => {
            v.typhoonRoute.points.forEach(point => {
              positions.push([point.lng, point.lat])
            })
          })
        }

        const cartesian3Array = makeCartesian3Array(positions)
        const boundingSphere = Cesium.BoundingSphere.fromPoints(cartesian3Array as Cesium.Cartesian3[])
        if (null === boundingSphereUnion) {
          boundingSphereUnion = boundingSphere
        } else {
          boundingSphereUnion = Cesium.BoundingSphere.union(boundingSphereUnion, boundingSphere)
        }
      })

      $services.viewer.camera.flyToBoundingSphere(new Cesium.BoundingSphere(boundingSphereUnion.center, boundingSphereUnion.radius), {
        ...options
      })
    }

    const removeTyphoonData = (datasource: VcTyphoonDatasource) => {
      const index = typhoonDatasources.indexOf(datasource)
      if (index >= 0) {
        clearInterval(datasource.playInterval)
        typhoonDatasources.splice(index, 1)
      }
    }

    const removeAllTyphoonData = () => {
      typhoonDatasources.forEach(datasource => {
        clearInterval(datasource.playInterval)
      })
      typhoonDatasources.length = 0
    }

    const getTyphoonCirclePostions = (center: VcPosition, radiusData) => {
      let positions: VcPosition[] = []
      if (typeof radiusData === 'number') {
        positions = circle(center as number[], radiusData * 1000, {
          units: 'meters'
        }).geometry.coordinates as unknown as VcPosition[]
      } else if (radiusData['ne']) {
        const _angInterval = 6
        const _pointNums = 360 / (_angInterval * 4)
        const quadrant = {
          // 逆时针算角度
          '0': 'ne',
          '1': 'nw',
          '2': 'sw',
          '3': 'se'
        }
        for (let i = 0; i < 4; i++) {
          let _r = parseFloat(radiusData[quadrant[i]]) * 1000 // 单位是km
          if (!_r) _r = 0
          for (let j = i * _pointNums; j <= (i + 1) * _pointNums; j++) {
            const _ang = _angInterval * j
            const x: number = center[0] + (_r * Math.cos((_ang * Math.PI) / 180)) / 111000
            const y: number = center[1] + (_r * Math.sin((_ang * Math.PI) / 180)) / 111000
            positions.push([x, y])
          }
        }
      }
      return positions as VcCartesian3Array
    }

    const getChildren = (datasources: VcTyphoonDatasource[], centerPointCircle: VNode[]) => {
      const children: Array<VNode> = []
      datasources.forEach(typhoonDatasource => {
        // polyline 台风路径-线
        if (typhoonDatasource.positions.length > 1) {
          const linePrimitiveProps: any =
            typeof props.linePrimitiveProps === 'function'
              ? deepMerge(cloneDeep(defaultLinePrimitiveProps), props.linePrimitiveProps(typhoonDatasource))
              : props.linePrimitiveProps

          const lineGeometryProps =
            typeof props.lineGeometryProps === 'function'
              ? deepMerge(cloneDeep(defaultLineGeometryProps), props.lineGeometryProps(typhoonDatasource))
              : props.lineGeometryProps

          children.push(
            h(
              VcPrimitive,
              {
                show: typhoonDatasource.show,
                appearance: {
                  type: typhoonDatasource.type === 'live' ? 'PolylineColorAppearance' : 'PolylineMaterialAppearance',
                  options: {
                    material:
                      typhoonDatasource.type === 'live'
                        ? undefined
                        : {
                            fabric: {
                              type: 'PolylineDash',
                              uniforms: {
                                color: '#000000'
                              }
                            }
                          },
                    translucent: true
                  }
                } as VcAppearance,
                onMouseover: evt => {
                  ctx.emit('mouseover', evt)
                },
                onMouseout: evt => {
                  ctx.emit('mouseout', evt)
                },
                onClick: evt => {
                  ctx.emit('click', evt)
                },
                onClickout: evt => {
                  ctx.emit('clickout', evt)
                },
                ...linePrimitiveProps
              },
              () =>
                h(
                  VcGeometryInstance,
                  {
                    id: typhoonDatasource.name || Cesium.createGuid()
                  },
                  () =>
                    h(VcGeometryPolyline, {
                      positions: makeCartesian3Array(typhoonDatasource.positions as VcCartesian3Array),
                      colors: typhoonDatasource.colors,
                      ...lineGeometryProps
                    })
                )
            )
          )
        }
        // points 台风路径-点
        typhoonDatasource.points.length &&
          children.push(
            h(VcCollectionPoint, {
              show: typhoonDatasource.show,
              points: typhoonDatasource.points,
              onReady: (e: VcReadyObject) => {
                const { cesiumObject: pointPrimitiveCollection } = e as any
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
            })
          )

        // polygon 台风风圈
        if (typhoonDatasource.type === 'live') {
          const labelProps =
            typeof props.labelProps === 'function' ? deepMerge(cloneDeep(defaultLabelProps), props.labelProps(typhoonDatasource)) : props.labelProps

          //text   台风名字
          children.push(
            h(VcCollectionLabel, {
              show: typhoonDatasource.show,
              enableMouseEvent: false,
              labels: [
                {
                  text: typhoonDatasource.typhoonRoute.name,
                  position: typhoonDatasource.positions[0],
                  ...labelProps
                } as VcLabelProps
              ]
            })
          )

          const point = typhoonDatasource.points[typhoonDatasource.playIndex]
          centerPointCircle.length =
            // 旋转图形
            centerPointCircle.push(
              h(VcOverlayHtml, { show: typhoonDatasource.show, position: point.position, autoHidden: true }, () =>
                h('div', {
                  class: 'vc-typhoon-circle',
                  style: {
                    backgroundPosition:
                      typeof props.circleOverlayPosition == 'function' ? props.circleOverlayPosition(point) : props.circleOverlayPosition
                  }
                })
              )
            )
          // 7 级风圈
          if (point?.radius7 > 0) {
            children.push(
              h(VcPolygon, {
                show: typhoonDatasource.show,
                positions: getTyphoonCirclePostions(point.position, point.radius7_quad),
                clampToGround: props.clampToGround,
                asynchronous: false,
                allowPicking: false,
                enableMouseEvent: false,
                classificationType: 2,
                appearance: {
                  type: 'MaterialAppearance',
                  options: {
                    material: {
                      fabric: {
                        type: 'Color',
                        uniforms: {
                          color: props.radius7Color
                        }
                      }
                    }
                  }
                } as VcAppearance,
                onReady: onVcPolygonReady
              })
            )
          }
          // 10 级风圈
          if (point?.radius10 > 0) {
            children.push(
              h(VcPolygon, {
                show: typhoonDatasource.show,
                positions: getTyphoonCirclePostions(point.position, point.radius10_quad),
                clampToGround: props.clampToGround,
                asynchronous: false,
                allowPicking: false,
                enableMouseEvent: false,
                classificationType: 2,
                appearance: {
                  type: 'MaterialAppearance',
                  options: {
                    material: {
                      fabric: {
                        type: 'Color',
                        uniforms: {
                          color: props.radius10Color
                        }
                      }
                    }
                  }
                } as VcAppearance,
                onReady: onVcPolygonReady
              })
            )
          }
          // 12 级风圈
          if (point?.radius12 > 0) {
            children.push(
              h(VcPolygon, {
                show: typhoonDatasource.show,
                positions: getTyphoonCirclePostions(point.position, point.radius12_quad),
                clampToGround: props.clampToGround,
                asynchronous: false,
                allowPicking: false,
                enableMouseEvent: false,
                classificationType: 2,
                appearance: {
                  type: 'MaterialAppearance',
                  options: {
                    material: {
                      fabric: {
                        type: 'Color',
                        uniforms: {
                          color: props.radius12Color
                        }
                      }
                    }
                  }
                } as VcAppearance,
                onReady: onVcPolygonReady
              })
            )
          }
        }

        if (typhoonDatasource.children) {
          children.push(...getChildren(typhoonDatasource.children, centerPointCircle))
        }
      })

      return children
    }

    const onVcPolygonReady = e => {
      const primitive = e.cesiumObject as any
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

    Object.assign(instance.proxy, {
      addTyphoonRoute,
      playTyphoonRoute,
      flyToTyphoonRoute,
      showForecast,
      removeTyphoonData,
      removeAllTyphoonData,
      getTyphoonDatasources: () => typhoonDatasources
    })

    props.typhoonRoutes.forEach(typhoonData => {
      addTyphoonRoute(typhoonData)
    })

    return () => {
      const centerPointCircle: VNode[] = []
      const children = getChildren(typhoonDatasources, centerPointCircle)
      return [
        h(
          VcCollectionPrimitive,
          {
            ref: primitiveCollectionRef,
            show: true
            // onReady: e => {
            //   ctx.emit('ready', e)
            // }
          },
          () => children
        ),
        ...centerPointCircle
      ]
    }
  }
})

export type VcOverlayTyphoonEmits = typeof emits
export interface VcOverlayTyphoonProps {
  /**
   * Specify the routes of typhoon.
   */
  typhoonRoutes?: VcTyphoonRoute[]
  /**
   * Specify whether the route object is attached to the ground or 3dtiles.
   */
  clampToGround?: boolean
  /**
   * Specify the color of radius7.
   * Default value: rgba(68, 255, 230, 0.3)
   */
  radius7Color?: VcColor
  /**
   * Specify the color of radius10.
   * Default value: rgba(32, 237, 39, 0.3)
   */
  radius10Color?: VcColor
  /**
   * Specify the color of radius12.
   * Default value: rgba(255, 247, 16, 0.3)
   */
  radius12Color?: VcColor
  /**
   * Specify the props of point.
   */
  pointProps?: VcPointProps | ((e: VcTyphoonPoint) => VcPointProps)
  /**
   * Specify the props of line primitive.
   */
  linePrimitiveProps?: VcPrimitiveProps | ((e: VcTyphoonDatasource) => VcPrimitiveProps)
  /**
   * Specify the props of line geometry.
   */
  lineGeometryProps?: VcGeometryPolylineProps | ((e: VcTyphoonDatasource) => VcGeometryPolylineProps)
  /**
   * Specify the props of typhoon name label.
   */
  labelProps?: VcLabelProps | ((e: VcTyphoonDatasource) => VcLabelProps)
  /**
   * Specify the position of the background map of the typhoon wind circle.
   * Default value: '-175px'
   */
  circleOverlayPosition?: string | ((e: VcTyphoonPoint) => string)
  /**
   * Specify the forecasting agency.
   */
  setsArray?: string[]
  /**
   * Triggers before the VcOverlayHtml is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcOverlayHtml is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (evt: any) => void
  /**
   * Triggers when the VcOverlayHtml is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the mouse moves over to the typhoon object.
   */
  onMouseover?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse moves out to the typhoon object.
   */
  onMouseout?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse clicks on the typhoon object.
   */
  onClick?: (evt: VcPickEvent) => void
  /**
   * Triggers when the mouse clicks outside the typhoon object.
   */
  onClickout?: (evt: VcPickEvent) => void
  /**
   * Triggers when the forecast route is added.
   */
  onForecastRouteAdded?: (e: { livePoint: VcTyphoonPoint; datasource: VcTyphoonDatasource; addedByClick: boolean }) => void
}

export interface VcOverlayTyphoonRef extends VcComponentPublicInstance<VcOverlayTyphoonProps> {
  /**
   * Add typhoon track data.
   * @param typhoonRoute
   * @returns
   */
  addTyphoonRoute: (typhoonRoute: VcTyphoonRoute) => VcTyphoonDatasource
  /**
   * Play typhoon route data.
   * @param tfbh
   * @returns
   */
  playTyphoonRoute: (tfbh: string) => void
  /**
   * Fly to typhoon route data.
   * @param tfbhs
   * @returns
   */
  flyToTyphoonRoute: (tfbhs: string | string[]) => void
  /**
   * Shows the forecast typhoon track of the live point.
   * @param livePoint
   * @param datasource
   * @param index
   * @param fromClick
   * @returns
   */
  showForecast: (livePoint: VcTyphoonPoint, datasource: VcTyphoonDatasource, index?: number, fromClick?: boolean) => void
  /**
   * Remove typhoon track data.
   * @param datasource
   * @returns
   */
  removeTyphoonData: (datasource: VcTyphoonDatasource) => void
  /**
   * Remove all typhoon track data.
   * @returns
   */
  removeAllTyphoonData: () => void
  /**
   * Get all typhoon track data.
   * @returns
   */
  getTyphoonDatasources: () => VcTyphoonDatasource[]
}
