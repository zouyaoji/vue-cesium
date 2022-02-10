import { VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { mount, config } from '@vue/test-utils'
import VcViewer from '@vue-cesium/components/viewer'
import VcEntity from '@vue-cesium/components/entity'
import {
  VcGraphicsBillboard,
  VcGraphicsBox,
  VcGraphicsCorridor,
  VcGraphicsCylinder,
  VcGraphicsEllipse,
  VcGraphicsEllipsoid,
  VcGraphicsLabel,
  VcGraphicsModel,
  VcGraphicsPath,
  VcGraphicsPlane,
  VcGraphicsPoint,
  VcGraphicsPolygon,
  VcGraphicsPolyline,
  VcGraphicsPolylineVolume,
  VcGraphicsRectangle,
  VcGraphicsTileset,
  VcGraphicsWall
} from '../index'

import { VcConfigProvider } from '../../config-provider'

const billboardApp = {
  components: {
    VcViewer,
    VcEntity,
    VcGraphicsBillboard,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-entity ref="entity" :position="[90, 40, 10000]">
            <vc-graphics-billboard
              ref="graphics"
              image="https://zouyaoji.top/vue-cesium/favicon.png"
              :scale="0.25"
              :show="true"
              :distanceDisplayCondition="{ near: 0, far: 20000000 }"
              :horizontalOrigin="0"
            ></vc-graphics-billboard>
          </vc-entity>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcGraphicsBillboard', () => {
  test('render test', async () => {
    const wrapper = mount(billboardApp)
    const testVm = wrapper.vm.$refs.graphics as VcComponentPublicInstance
    const readyObj: VcReadyObject | undefined = await testVm.createPromise
    let graphics = readyObj?.cesiumObject as Cesium.BillboardGraphics
    expect(graphics instanceof Cesium.BillboardGraphics).toBe(true)
    expect(graphics.scale?.getValue(Cesium.JulianDate.now())).toEqual(0.25)
    expect(graphics.image?.getValue(Cesium.JulianDate.now())).toEqual('https://zouyaoji.top/vue-cesium/favicon.png')
    await testVm.unload?.()
    graphics = testVm.getCesiumObject?.() as Cesium.BillboardGraphics
    expect(graphics).toBeUndefined()
    await testVm.load?.()
    graphics = testVm.getCesiumObject?.() as Cesium.BillboardGraphics
    expect(graphics).toBeDefined()
  }, 10000)
})

const boxApp = {
  components: {
    VcViewer,
    VcEntity,
    VcGraphicsBox,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-entity ref="entity" :position="[90, 40, 10000]">
            <vc-graphics-box
              ref="graphics"
              :dimensions="{ x: 400000.0, y: 300000.0, z: 500000.0 }"
              material="blue"
            ></vc-graphics-box>
          </vc-entity>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcGraphicsBox', () => {
  test('render test', async () => {
    const wrapper = mount(boxApp)
    const testVm = wrapper.vm.$refs.graphics as VcComponentPublicInstance
    const readyObj: VcReadyObject | undefined = await testVm.createPromise
    let graphics = readyObj?.cesiumObject as Cesium.BoxGraphics
    expect(graphics instanceof Cesium.BoxGraphics).toBe(true)
    expect(
      (graphics.dimensions?.getValue(Cesium.JulianDate.now()) as Cesium.Cartesian3).equalsEpsilon(
        new Cesium.Cartesian3(400000, 300000, 500000),
        Cesium.Math.EPSILON6
      )
    ).toBe(true)
    await testVm.unload?.()
    graphics = testVm.getCesiumObject?.() as Cesium.BoxGraphics
    expect(graphics).toBeUndefined()
    await testVm.load?.()
    graphics = testVm.getCesiumObject?.() as Cesium.BoxGraphics
    expect(graphics).toBeDefined()
  }, 10000)
})

const corridorApp = {
  components: {
    VcViewer,
    VcEntity,
    VcGraphicsCorridor,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-entity ref="entity">
            <vc-graphics-corridor
              ref="graphics"
              :positions="[[100,40],[105,40],[105,35]]"
              :outline="true"
              material="red"
              :width="200000.0"
              outlineColor="white"
            ></vc-graphics-corridor>
          </vc-entity>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcGraphicsCorridor', () => {
  test('render test', async () => {
    const wrapper = mount(corridorApp)
    const testVm = wrapper.vm.$refs.graphics as VcComponentPublicInstance
    const readyObj: VcReadyObject | undefined = await testVm.createPromise
    let graphics = readyObj?.cesiumObject as Cesium.CorridorGraphics
    expect(graphics instanceof Cesium.CorridorGraphics).toBe(true)
    expect(graphics.positions?.getValue(Cesium.JulianDate.now()) instanceof Array).toBe(true)
    expect(graphics.outline?.getValue(Cesium.JulianDate.now())).toEqual(true)
    await testVm.unload?.()
    graphics = testVm.getCesiumObject?.() as Cesium.CorridorGraphics
    expect(graphics).toBeUndefined()
    await testVm.load?.()
    graphics = testVm.getCesiumObject?.() as Cesium.CorridorGraphics
    expect(graphics).toBeDefined()
  }, 10000)
})

const cylinderApp = {
  components: {
    VcViewer,
    VcEntity,
    VcGraphicsCylinder,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-entity ref="entity" :position="[105, 40, 200000]">
            <vc-graphics-cylinder
              ref="graphics"
              :length="400000.0"
              :topRadius="200000.0"
              :bottomRadius="200000.0"
              :material="[0,128,0,125]"
              :outline="true"
              outlineColor="#006400"
            ></vc-graphics-cylinder>
          </vc-entity>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcGraphicsCylinder', () => {
  test('render test', async () => {
    const wrapper = mount(cylinderApp)
    const testVm = wrapper.vm.$refs.graphics as VcComponentPublicInstance
    const readyObj: VcReadyObject | undefined = await testVm.createPromise
    let graphics = readyObj?.cesiumObject as Cesium.CylinderGraphics
    expect(graphics instanceof Cesium.CylinderGraphics).toBe(true)
    await testVm.unload?.()
    graphics = testVm.getCesiumObject?.() as Cesium.CylinderGraphics
    expect(graphics).toBeUndefined()
    await testVm.load?.()
    graphics = testVm.getCesiumObject?.() as Cesium.CylinderGraphics
    expect(graphics).toBeDefined()
  }, 10000)
})

const ellipseApp = {
  components: {
    VcViewer,
    VcEntity,
    VcGraphicsEllipse,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-entity ref="entity">
            <vc-graphics-ellipse
              ref="graphics"
              :semiMinorAxis="300000.0"
              :semiMajorAxis="300000.0"
              :height="200000.0"
              material="green"
              :outline="true"
            ></vc-graphics-ellipse>
          </vc-entity>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcGraphicsEllipse', () => {
  test('render test', async () => {
    const wrapper = mount(ellipseApp)
    const testVm = wrapper.vm.$refs.graphics as VcComponentPublicInstance
    const readyObj: VcReadyObject | undefined = await testVm.createPromise
    let graphics = readyObj?.cesiumObject as Cesium.EllipseGraphics
    expect(graphics instanceof Cesium.EllipseGraphics).toBe(true)
    await testVm.unload?.()
    graphics = testVm.getCesiumObject?.() as Cesium.EllipseGraphics
    expect(graphics).toBeUndefined()
    await testVm.load?.()
    graphics = testVm.getCesiumObject?.() as Cesium.EllipseGraphics
    expect(graphics).toBeDefined()
  }, 10000)
})

const ellipsoidApp = {
  components: {
    VcViewer,
    VcEntity,
    VcGraphicsEllipsoid,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-entity ref="entity">
            <vc-graphics-ellipsoid
              ref="graphics"
              :radii="{ x: 200000.0, y: 200000.0, z: 300000.0 }"
              material="blue"
              :outline="true"
            ></vc-graphics-ellipsoid>
          </vc-entity>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcGraphicsEllipsoid', () => {
  test('render test', async () => {
    const wrapper = mount(ellipsoidApp)
    const testVm = wrapper.vm.$refs.graphics as VcComponentPublicInstance
    const readyObj: VcReadyObject | undefined = await testVm.createPromise
    let graphics = readyObj?.cesiumObject as Cesium.EllipsoidGraphics
    expect(graphics instanceof Cesium.EllipsoidGraphics).toBe(true)
    await testVm.unload?.()
    graphics = testVm.getCesiumObject?.() as Cesium.EllipsoidGraphics
    expect(graphics).toBeUndefined()
    await testVm.load?.()
    graphics = testVm.getCesiumObject?.() as Cesium.EllipsoidGraphics
    expect(graphics).toBeDefined()
  }, 10000)
})

const labelApp = {
  components: {
    VcViewer,
    VcEntity,
    VcGraphicsLabel,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-entity :position="[114, 40, 300000]" ref="entity">
            <vc-graphics-label
              ref="graphics"
              text="Hello Vue Cesium"
              font="20px sans-serif"
              :pixelOffset="[0, 20]"
            ></vc-graphics-label>
          </vc-entity>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcGraphicsLabel', () => {
  test('render test', async () => {
    const wrapper = mount(labelApp)
    const testVm = wrapper.vm.$refs.graphics as VcComponentPublicInstance
    const readyObj: VcReadyObject | undefined = await testVm.createPromise
    let graphics = readyObj?.cesiumObject as Cesium.LabelGraphics
    expect(graphics instanceof Cesium.LabelGraphics).toBe(true)
    expect(graphics.text?.getValue(Cesium.JulianDate.now())).toEqual('Hello Vue Cesium')
    expect(graphics.pixelOffset?.getValue(Cesium.JulianDate.now())).toBeDefined()
    await testVm.unload?.()
    graphics = testVm.getCesiumObject?.() as Cesium.LabelGraphics
    expect(graphics).toBeUndefined()
    await testVm.load?.()
    graphics = testVm.getCesiumObject?.() as Cesium.LabelGraphics
    expect(graphics).toBeDefined()
  }, 10000)
})

const modelApp = {
  components: {
    VcViewer,
    VcEntity,
    VcGraphicsModel,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-entity :position="[114, 40, 1.0]" ref="entity">
            <vc-graphics-model
              ref="graphics"
              uri="https://zouyaoji.top/vue-cesium/SampleData/models/GroundVehicle/GroundVehicle.glb"
            ></vc-graphics-model>
          </vc-entity>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcGraphicsModel', () => {
  test('render test', async () => {
    const wrapper = mount(modelApp)
    const testVm = wrapper.vm.$refs.graphics as VcComponentPublicInstance
    const readyObj: VcReadyObject | undefined = await testVm.createPromise
    let graphics = readyObj?.cesiumObject as Cesium.ModelGraphics
    expect(graphics instanceof Cesium.ModelGraphics).toBe(true)
    expect(graphics.uri?.getValue(Cesium.JulianDate.now())).toEqual(
      'https://zouyaoji.top/vue-cesium/SampleData/models/GroundVehicle/GroundVehicle.glb'
    )
    await testVm.unload?.()
    graphics = testVm.getCesiumObject?.() as Cesium.ModelGraphics
    expect(graphics).toBeUndefined()
    await testVm.load?.()
    graphics = testVm.getCesiumObject?.() as Cesium.ModelGraphics
    expect(graphics).toBeDefined()
  }, 10000)
})

const pathApp = {
  components: {
    VcViewer,
    VcEntity,
    VcGraphicsPath,
    VcGraphicsPoint,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer shouldAnimate @ready="onViewerReady">
          <vc-entity :availability="availability" :position="position" :orientation="orientation" ref="entity">
            <vc-graphics-path
              ref="graphics"
              :resolution="1"
              :material="{fabric: {type: 'PolylineGlow', uniforms: {glowPower: 0.1, color: 'yellow'}}}"
              :width="10"
            ></vc-graphics-path>
          </vc-entity>
          <vc-entity :key="'entity' + index" :position="position" v-for="(position, index) of positions">
            <vc-graphics-point :pixelSize="8" color="TRANSPARENT" outlineColor="YELLOW" :outlineWidth="3"></vc-graphics-point>
          </vc-entity>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `,
  data() {
    return {
      position: void 0,
      orientation: void 0,
      availability: void 0,
      positions: []
    }
  },
  methods: {
    onViewerReady({ Cesium, viewer }) {
      //Enable lighting based on sun/moon positions
      viewer.scene.globe.enableLighting = true
      //Enable depth testing so things behind the terrain disappear.
      viewer.scene.globe.depthTestAgainstTerrain = true
      //Set the random number seed for consistent results.
      Cesium.Math.setRandomNumberSeed(3)
      const start = Cesium.JulianDate.fromDate(new Date(2015, 2, 25, 16))
      const stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate())
      viewer.clock.startTime = start.clone()
      viewer.clock.stopTime = stop.clone()
      viewer.clock.currentTime = start.clone()
      viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP //Loop at the end
      viewer.clock.multiplier = 10
      // viewer.timeline.zoomTo(start, stop)
      this.position = this.computeCirclularFlight(-112.110693, 36.0994841, 0.03, start)
      this.availability = new Cesium.TimeIntervalCollection([
        new Cesium.TimeInterval({
          start: start,
          stop: stop
        })
      ])
      this.orientation = new Cesium.VelocityOrientationProperty(this.position)
    },
    computeCirclularFlight(lon, lat, radius, start) {
      const property = new Cesium.SampledPositionProperty()
      for (let i = 0; i <= 360; i += 45) {
        const radians = Cesium.Math.toRadians(i)
        const time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate())
        const position = Cesium.Cartesian3.fromDegrees(
          lon + radius * 1.5 * Math.cos(radians),
          lat + radius * Math.sin(radians),
          Cesium.Math.nextRandomNumber() * 500 + 1750
        )
        property.addSample(time, position)
        this.positions.push(position)
      }
      return property
    }
  }
}

describe('VcGraphicsPath', () => {
  test('render test', async () => {
    const wrapper = mount(pathApp)
    const testVm = wrapper.vm.$refs.graphics as VcComponentPublicInstance
    const readyObj: VcReadyObject | undefined = await testVm.createPromise
    let graphics = readyObj?.cesiumObject as Cesium.PathGraphics
    expect(graphics instanceof Cesium.PathGraphics).toBe(true)
    await testVm.unload?.()
    graphics = testVm.getCesiumObject?.() as Cesium.PathGraphics
    expect(graphics).toBeUndefined()
    await testVm.load?.()
    graphics = testVm.getCesiumObject?.() as Cesium.PathGraphics
    expect(graphics).toBeDefined()
  }, 10000)
})

const planeApp = {
  components: {
    VcViewer,
    VcEntity,
    VcGraphicsPlane,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-entity :position="[114, 40, 300000.0]" ref="entity">
            <vc-graphics-plane
              ref="graphics"
              :plane="[{ x: 0, y: 1, z: 0 }, 0]"
              :dimensions="[400000, 300000]"
              :material="[255, 0, 0, 125]"
              :outline="true"
              outlineColor="black"
            ></vc-graphics-plane>
          </vc-entity>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcGraphicsPlane', () => {
  test('render test', async () => {
    const wrapper = mount(planeApp)
    const testVm = wrapper.vm.$refs.graphics as VcComponentPublicInstance
    const readyObj: VcReadyObject | undefined = await testVm.createPromise
    let graphics = readyObj?.cesiumObject as Cesium.PlaneGraphics
    expect(graphics instanceof Cesium.PlaneGraphics).toBe(true)
    await testVm.unload?.()
    graphics = testVm.getCesiumObject?.() as Cesium.PlaneGraphics
    expect(graphics).toBeUndefined()
    await testVm.load?.()
    graphics = testVm.getCesiumObject?.() as Cesium.PlaneGraphics
    expect(graphics).toBeDefined()
  }, 10000)
})

const pointApp = {
  components: {
    VcViewer,
    VcEntity,
    VcGraphicsPoint,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-entity :position="[-80.12, 25.46]" description="Hello Vue Cesium">
            <vc-graphics-point ref="graphics" color="lime" :pixelSize="32"></vc-graphics-point>
          </vc-entity>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcGraphicsPoint', () => {
  test('render test', async () => {
    const wrapper = mount(pointApp)
    const testVm = wrapper.vm.$refs.graphics as VcComponentPublicInstance
    const readyObj: VcReadyObject | undefined = await testVm.createPromise
    let graphics = readyObj?.cesiumObject as Cesium.PointGraphics
    expect(graphics instanceof Cesium.PointGraphics).toBe(true)
    await testVm.unload?.()
    graphics = testVm.getCesiumObject?.() as Cesium.PointGraphics
    expect(graphics).toBeUndefined()
    await testVm.load?.()
    graphics = testVm.getCesiumObject?.() as Cesium.PointGraphics
    expect(graphics).toBeDefined()
  }, 10000)
})

const polylineApp = {
  components: {
    VcViewer,
    VcEntity,
    VcGraphicsPolyline,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-entity>
            <vc-graphics-polyline
              ref="graphics"
              :positions="[[90, 40, 1000], [120, 40, 1000]]"
              :material="{fabric: { type: 'PolylineArrow', uniforms: { color: 'purple' }}}"
              :width="10"
            ></vc-graphics-polyline>
          </vc-entity>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcGraphicsPolyline', () => {
  test('render test', async () => {
    const wrapper = mount(polylineApp)
    const testVm = wrapper.vm.$refs.graphics as VcComponentPublicInstance
    const readyObj: VcReadyObject | undefined = await testVm.createPromise
    let graphics = readyObj?.cesiumObject as Cesium.PolylineGraphics
    expect(graphics instanceof Cesium.PolylineGraphics).toBe(true)
    await testVm.unload?.()
    graphics = testVm.getCesiumObject?.() as Cesium.PolylineGraphics
    expect(graphics).toBeUndefined()
    await testVm.load?.()
    graphics = testVm.getCesiumObject?.() as Cesium.PolylineGraphics
    expect(graphics).toBeDefined()
  }, 10000)
})

const polygonApp = {
  components: {
    VcViewer,
    VcEntity,
    VcGraphicsPolygon,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-entity>
            <vc-graphics-polygon
              :hierarchy="[[-108,25,100000],[-100,25,100000],[-100,30,100000],[-108,30,100000]]"
              :material="[255,165,0,125]"
              :extrudedHeight="0"
              :perPositionHeight="true"
              :outline="true"
              outlineColor="black"
              ref="graphics"
            ></vc-graphics-polygon>
          </vc-entity>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcGraphicsPolygon', () => {
  test('render test', async () => {
    const wrapper = mount(polygonApp)
    const testVm = wrapper.vm.$refs.graphics as VcComponentPublicInstance
    const readyObj: VcReadyObject | undefined = await testVm.createPromise
    let graphics = readyObj?.cesiumObject as Cesium.PolygonGraphics
    expect(graphics instanceof Cesium.PolygonGraphics).toBe(true)
    await testVm.unload?.()
    graphics = testVm.getCesiumObject?.() as Cesium.PolygonGraphics
    expect(graphics).toBeUndefined()
    await testVm.load?.()
    graphics = testVm.getCesiumObject?.() as Cesium.PolygonGraphics
    expect(graphics).toBeDefined()
  }, 10000)
})

const polylineVolumeApp = {
  components: {
    VcViewer,
    VcEntity,
    VcGraphicsPolylineVolume,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-entity>
            <vc-graphics-polyline-volume
              :positions="[-90,32,0,-90,36,100000,-94,36,0]"
              :shape="[{ x: -50000, y: -50000 }, { x: 50000, y: -50000 }, { x: -50000, y: 50000 }, { x: -50000, y: 50000 }]"
              :material="[0,255,0,125]"
              :outline="true"
              outlineColor="black"
              :cornerType="2"
              ref="graphics"
            ></vc-graphics-polyline-volume>
          </vc-entity>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcGraphicsPolylineVolume', () => {
  test('render test', async () => {
    const wrapper = mount(polylineVolumeApp)
    const testVm = wrapper.vm.$refs.graphics as VcComponentPublicInstance
    const readyObj: VcReadyObject | undefined = await testVm.createPromise
    let graphics = readyObj?.cesiumObject as Cesium.PolylineVolumeGraphics
    expect(graphics instanceof Cesium.PolylineVolumeGraphics).toBe(true)
    await testVm.unload?.()
    graphics = testVm.getCesiumObject?.() as Cesium.PolylineVolumeGraphics
    expect(graphics).toBeUndefined()
    await testVm.load?.()
    graphics = testVm.getCesiumObject?.() as Cesium.PolylineVolumeGraphics
    expect(graphics).toBeDefined()
  }, 10000)
})

const rectangleApp = {
  components: {
    VcViewer,
    VcEntity,
    VcGraphicsRectangle,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-entity>
            <vc-graphics-rectangle
              :coordinates="[-110, 30, -100, 40]"
              :material="[0, 255, 0, 125]"
              :rotation="45/180"
              :extrudedHeight="300000.0"
              :height="100000.0"
              :outline="true"
              outlineColor="black"
              ref="graphics"
            ></vc-graphics-rectangle>
          </vc-entity>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcGraphicsRectangle', () => {
  test('render test', async () => {
    const wrapper = mount(rectangleApp)
    const testVm = wrapper.vm.$refs.graphics as VcComponentPublicInstance
    const readyObj: VcReadyObject | undefined = await testVm.createPromise
    let graphics = readyObj?.cesiumObject as Cesium.RectangleGraphics
    expect(graphics instanceof Cesium.RectangleGraphics).toBe(true)
    await testVm.unload?.()
    graphics = testVm.getCesiumObject?.() as Cesium.RectangleGraphics
    expect(graphics).toBeUndefined()
    await testVm.load?.()
    graphics = testVm.getCesiumObject?.() as Cesium.RectangleGraphics
    expect(graphics).toBeDefined()
  }, 10000)
})

const wallApp = {
  components: {
    VcViewer,
    VcEntity,
    VcGraphicsWall,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-entity>
            <vc-graphics-wall
              :positions="[[-115,50],[-112,50],[-107.5,50],[-105,50],[-102.5,50],[-100,50],[-97.5,50],[-95,50],[-92.5,50],[-90,50]]"
              :material="[0,0,125,125]"
              :outline="true"
              outlineColor="black"
              :maximumHeights="[100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000]"
              :minimumHeights="[0, 100000,  0, 100000, 0, 100000, 0, 100000, 0, 100000]"
              ref="graphics"
            ></vc-graphics-wall>
          </vc-entity>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcGraphicsWall', () => {
  test('render test', async () => {
    const wrapper = mount(wallApp)
    const testVm = wrapper.vm.$refs.graphics as VcComponentPublicInstance
    const readyObj: VcReadyObject | undefined = await testVm.createPromise
    let graphics = readyObj?.cesiumObject as Cesium.WallGraphics
    expect(graphics instanceof Cesium.WallGraphics).toBe(true)
    await testVm.unload?.()
    graphics = testVm.getCesiumObject?.() as Cesium.WallGraphics
    expect(graphics).toBeUndefined()
    await testVm.load?.()
    graphics = testVm.getCesiumObject?.() as Cesium.WallGraphics
    expect(graphics).toBeDefined()
  }, 10000)
})

const tilesetApp = {
  components: {
    VcViewer,
    VcEntity,
    VcGraphicsTileset,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-entity>
            <vc-graphics-tileset
              uri="https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json"
              ref="graphics"
            ></vc-graphics-tileset>
          </vc-entity>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcGraphicsTileset', () => {
  test('render test', async () => {
    const wrapper = mount(tilesetApp)
    const testVm = wrapper.vm.$refs.graphics as VcComponentPublicInstance
    const readyObj: VcReadyObject | undefined = await testVm.createPromise
    let graphics = readyObj?.cesiumObject as Cesium.Cesium3DTilesetGraphics
    expect(graphics instanceof Cesium.Cesium3DTilesetGraphics).toBe(true)
    await testVm.unload?.()
    graphics = testVm.getCesiumObject?.() as Cesium.Cesium3DTilesetGraphics
    expect(graphics).toBeUndefined()
    await testVm.load?.()
    graphics = testVm.getCesiumObject?.() as Cesium.Cesium3DTilesetGraphics
    expect(graphics).toBeDefined()
  }, 10000)
})
