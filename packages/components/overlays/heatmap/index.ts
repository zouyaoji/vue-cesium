import { defineComponent, getCurrentInstance, ref, h, createCommentVNode, watch, onUnmounted, computed, PropType, WatchStopHandle, VNode } from 'vue'
import {
  AppearanceOpts,
  ColorSegments,
  HeatmapConfiguration,
  MaterialOption,
  VcComponentInternalInstance,
  VcComponentPublicInstance
} from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables'
import { show, rectangle } from '@vue-cesium/utils/cesium-props'
import { makeColor, makeRectangle } from '@vue-cesium/utils/cesium-helpers'
import h337 from 'heatmap.js'
import VcEntity from '@vue-cesium/components/entity'
import VcLayerImagery from '@vue-cesium/components/imagery-layer'
import { VcPrimitiveGround } from '@vue-cesium/components/primitives'
import { getVcParentInstance } from '@vue-cesium/utils/private/vm'

export default defineComponent({
  name: 'VcOverlayHeatmap',
  props: {
    ...show,
    ...rectangle,
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    data: [Array, String] as PropType<Array<any> | string>,
    options: Object,
    type: {
      type: String,
      default: 'primitive'
    },
    segments: {
      type: Array as PropType<Array<ColorSegments>>,
      default: () => []
    },
    projection: {
      type: String,
      default: '3857' // 4326
    }
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcOverlayHeatmap'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      1
      return
    }
    const rootRef = ref<HTMLElement | null>(null)
    const project = ref<Cesium.WebMercatorProjection | Cesium.GeographicProjection>(null!)
    const defaultOptions: HeatmapConfiguration = {
      minCanvasSize: 700, // minimum size (in pixels) for the heatmap canvas
      maxCanvasSize: 2000, // maximum size (in pixels) for the heatmap canvas
      radiusFactor: 60, // data point size factor used if no radius is given (the greater of height and width divided by this number yields the used radius)
      spacingFactor: 1.5, // extra space around the borders (point radius multiplied by this number yields the spacing)
      maxOpacity: 0.8, // the maximum opacity used if not given in the heatmap options object
      minOpacity: 0.1, // the minimum opacity used if not given in the heatmap options object
      blur: 0.85, // the blur used if not given in the heatmap options object
      gradient: {
        // the gradient used if not given in the heatmap options object
        '.3': 'blue',
        '.65': 'yellow',
        '.8': 'orange',
        '.95': 'red'
      },
      xField: 'x',
      yField: 'y',
      valueField: 'value',
      container: undefined!
    }
    const coordinates = ref<any>(null)
    const material = ref<MaterialOption>(null!)
    const image = ref<any>(null)
    const childRef = ref<typeof VcLayerImagery | typeof VcEntity | typeof VcPrimitiveGround | null>(null)
    const appearance = ref<AppearanceOpts>(null!)
    const canRender = ref(false)
    const config = ref<any>(null)

    const vcParent = getVcParentInstance(instance)
    ;(vcParent.proxy as VcComponentPublicInstance).createPromise?.then(() => {
      canRender.value = true
    })

    // computed
    const options = computed<HeatmapConfiguration>(() => {
      return Object.assign({}, defaultOptions, props.options)
    })

    // watcch
    let unwatchFns: Array<WatchStopHandle> = []
    unwatchFns.push(
      watch(
        () => image,
        val => {
          material.value.fabric.uniforms.image = val.value
          ;(appearance.value.options.material as MaterialOption).fabric.uniforms.image = val.value
        },
        {
          deep: true
        }
      )
    )
    unwatchFns.push(
      watch(
        () => props.data,
        (newVal, oldVal) => {
          if (!instance.mounted) {
            return
          }

          const heatmapInstance = instance.cesiumObject as h337.Heatmap<string, string, string>

          if (Array.isArray(newVal) && Array.isArray(oldVal)) {
            setData(newVal, heatmapInstance)
            image.value = heatmapInstance.getDataURL()
          } else {
            commonState.reload()
          }
        },
        {
          deep: true
        }
      )
    )

    unwatchFns.push(
      watch(
        () => [props.max, props.min],
        vals => {
          const heatmapInstance = instance.cesiumObject as h337.Heatmap<string, string, string>
          heatmapInstance.setDataMax(vals[0] || 0)
          heatmapInstance.setDataMin(vals[1] || 0)
          image.value = heatmapInstance.getDataURL()
        }
      )
    )

    unwatchFns.push(
      watch(
        () => [props.type, props.projection, props.rectangle],
        vals => {
          commonState.reload()
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.options,
        val => {
          const heatmapInstance = instance.cesiumObject as h337.Heatmap<string, string, string>
          heatmapInstance.configure(val as any)
          image.value = heatmapInstance.getDataURL()
        },
        {
          deep: true
        }
      )
    )

    // methods
    instance.createCesiumObject = async () => {
      const { WebMercatorProjection, GeographicProjection } = Cesium
      project.value = props.projection === '3857' ? new WebMercatorProjection() : new GeographicProjection()
      const id = getID()
      config.value = getConfig(props.rectangle)
      const container = document.createElement('div')
      if (Cesium.defined(id)) {
        container.setAttribute('id', id)
      }
      container.setAttribute('style', 'width: ' + config.value.width + 'px; height: ' + config.value.height + 'px; margin: 0px; display: none;')
      document.body.appendChild(container)
      options.value.container = container

      if (props.segments.length) {
        options.value.gradient = {}
        const Δ = props.max - props.min

        for (let i = 0; i < props.segments.length; i++) {
          options.value.gradient[`${(props.segments[i][0] - props.min) / Δ}`] = (makeColor(props.segments[i][1]) as Cesium.Color).toCssColorString()
        }
      }

      const heatmapInstance = h337.create(options.value)
      container.children[0].setAttribute('id', id + '-hm')
      if (Array.isArray(props.data)) {
        setData(props.data, heatmapInstance)
        material.value = {
          fabric: {
            type: 'Image',
            uniforms: {
              image: image.value,
              transparent: true
            }
          }
        }
        appearance.value = {
          type: 'MaterialAppearance',
          options: {
            material: {
              fabric: {
                type: 'Image',
                uniforms: {
                  image: image.value
                }
              }
            }
          }
        }
      }

      return heatmapInstance
    }
    instance.unmount = async () => {
      document.body.removeChild((instance.cesiumObject as any)._config.container)
      return true
    }

    const getID = (len?: number) => {
      let id = ''
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (let i = 0; i < (len || 8); i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length))
      }

      return id
    }

    const getConfig = bounds => {
      const rectangle = makeRectangle(bounds) as Cesium.Rectangle
      const swmb = project.value.project(new Cesium.Cartographic(rectangle.west, rectangle.south))
      const nemb = project.value.project(new Cesium.Cartographic(rectangle.east, rectangle.north))
      const mbb = {
        north: nemb.y,
        east: nemb.x,
        south: swmb.y,
        west: swmb.x
      }

      let width = mbb.east > 0 && mbb.west < 0 ? mbb.east + Math.abs(mbb.west) : Math.abs(mbb.east - mbb.west)
      let height = mbb.north > 0 && mbb.south < 0 ? mbb.north + Math.abs(mbb.south) : Math.abs(mbb.north - mbb.south)
      let factor = 1
      if (width > height && width > options.value.maxCanvasSize) {
        factor = width / options.value.maxCanvasSize
        if (height / factor < options.value.minCanvasSize) {
          factor = height / options.value.minCanvasSize
        }
      } else if (height > width && height > options.value.maxCanvasSize) {
        factor = height / options.value.maxCanvasSize
        if (height / factor < options.value.minCanvasSize) {
          factor = width / options.value.minCanvasSize
        }
      } else if (width < height && width < options.value.minCanvasSize) {
        factor = width / options.value.minCanvasSize
        if (height / factor > options.value.maxCanvasSize) {
          factor = height / options.value.maxCanvasSize
        }
      } else if (height < width && height < options.value.minCanvasSize) {
        factor = height / options.value.minCanvasSize
        if (width / factor > options.value.maxCanvasSize) {
          factor = width / options.value.maxCanvasSize
        }
      }

      width = width / factor
      height = height / factor

      if (!Cesium.defined(options.value.radius)) {
        options.value.radius = width > height ? width / options.value.radiusFactor : height / options.value.radiusFactor
      }

      const spacing = (options.value.radius || 1) * options.value.spacingFactor
      const xoffset = mbb.west
      const yoffset = mbb.south
      width = Math.round(width + spacing * 2)
      height = Math.round(height + spacing * 2)
      mbb.west -= spacing * factor
      mbb.east += spacing * factor
      mbb.south -= spacing * factor
      mbb.north += spacing * factor
      const swmw = project.value.unproject(new Cesium.Cartesian3(mbb.west, mbb.south))
      const nemw = project.value.unproject(new Cesium.Cartesian3(mbb.east, mbb.north))

      const mwb = {
        north: Cesium.Math.toDegrees(nemw.latitude),
        east: Cesium.Math.toDegrees(nemw.longitude),
        south: Cesium.Math.toDegrees(swmw.latitude),
        west: Cesium.Math.toDegrees(swmw.longitude)
      }
      coordinates.value = mwb
      return {
        height,
        width,
        factor,
        xoffset,
        yoffset,
        spacing
      }
    }

    const setData = (data, heatmapInstance: h337.Heatmap<string, string, string>) => {
      if (data) {
        const { height, xoffset, yoffset, factor, spacing } = config.value
        const xField = options.value.xField || 'x'
        const yField = options.value.yField || 'y'
        const valueField = options.value.valueField || 'value'
        const datas: Array<{
          x: number
          y: number
        }> = []
        for (let i = 0; i < data.length; i++) {
          const gp = data[i]
          if (!Cesium.defined(gp.id)) {
            gp.id = i
          }
          const mp = project.value.project(Cesium.Cartographic.fromDegrees(gp[xField], gp[yField]))
          const hp = {
            x: Math.round((mp.x - xoffset) / factor + spacing),
            y: Math.round((mp.y - yoffset) / factor + spacing)
          }
          hp.y = height - hp.y
          if (gp[valueField] || gp[valueField] === 0) {
            hp[valueField] = gp[valueField]
          }
          if (hp[valueField] > props.max || hp[valueField] < props.min) {
            continue
          }
          datas.push(hp)
        }

        heatmapInstance.setData({
          min: props.min,
          max: props.max,
          data: datas
        })

        image.value = heatmapInstance.getDataURL()
      }
    }

    // life cycle
    onUnmounted(() => {
      unwatchFns.forEach(item => item())
      unwatchFns = []
    })

    // expose public methods
    Object.assign(instance.proxy, {
      rootRef: rootRef,
      childRef: childRef
    })

    return () => {
      if (canRender.value) {
        const child: Array<VNode> = []
        if (props.type === 'entity' && image.value) {
          child.push(
            h(VcEntity, {
              ref: childRef,
              show: props.show,
              rectangle: {
                coordinates: coordinates.value,
                material: material.value
              }
            })
          )
        } else if (props.type === 'primitive') {
          child.push(
            h(VcPrimitiveGround, {
              ref: childRef,
              show: props.show,
              appearance: appearance.value,
              releaseGeometryInstances: false,
              geometryInstances: new Cesium.GeometryInstance({
                geometry: new Cesium.RectangleGeometry({
                  rectangle: makeRectangle(coordinates.value) as Cesium.Rectangle
                })
              })
            })
          )
        } else if (props.type === 'imagery-layer' && image.value) {
          child.push(
            h(VcLayerImagery, {
              ref: childRef,
              show: props.show,
              imageryProvider: new Cesium.SingleTileImageryProvider({
                url: image.value,
                rectangle: makeRectangle(coordinates.value) as Cesium.Rectangle
              })
            })
          )
        }

        return h(
          'i',
          {
            ref: rootRef,
            class: 'vc-overlay-heatmap',
            style: 'display: none !important'
          },
          child
        )
      } else {
        return createCommentVNode('v-if')
      }
    }
  }
})
