import { destroyVM, createVue, waitImmediate } from '../../util'

describe('entity', () => {
  describe('vc-entity', () => {
    it('create', done => {
      let vm = createVue({
        template: `
          <vc-viewer @ready="ready">
            <vc-entity ref="entity" :position="position" :billboard="billboard" :description="description" :id="id"></vc-entity>
          </vc-viewer>
        `,
        data () {
          return {
            id: 'This is a billboard',
            description: 'Hello Vue Cesium',
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            position: { lng: 108, lat: 35, height: 100 },
            billboard: {}
          }
        },
        methods: {
          ready (cesiumInstance) {
            const { Cesium, viewer } = cesiumInstance
            this.viewer = viewer
            this.billboard = new Cesium.BillboardGraphics({
              image: 'https://zouyaoji.top/vue-cesium/favicon.png', // default: undefined
              show: true, // default
              pixelOffset: new Cesium.Cartesian2(0, -50), // default: (0, 0)
              eyeOffset: new Cesium.Cartesian3(0.0, 0.0, 0.0), // default
              horizontalOrigin: Cesium.HorizontalOrigin.CENTER, // default
              verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // default: CENTER
              scale: 0.5, // default: 1.0
              color: Cesium.Color.LIME, // default: WHITE
              alignedAxis: Cesium.Cartesian3.ZERO // default
            })
          }
        }
      }, true)

      vm.$refs.entity.$on('ready', async ({ Cesium, viewer, cesiumObject }) => {
        // 这儿的cesiumObject 就是 entity
        expect(cesiumObject).to.be.instanceof(Cesium.Entity)
        // 给一点点渲染时间
        await waitImmediate()
        expect(vm.image).to.equal(viewer.entities.getById(vm.id).billboard.image.getValue())
        destroyVM(vm)
        done()
      })
    }).timeout(12000)
  })
  describe('vc-graphics-billboard', () => {
    it('create', done => {
      let vm = createVue({
        template: `
          <vc-viewer>
            <vc-entity :position="position" :description="description" :id="id" :billboard.sync="billboard">
              <vc-graphics-billboard
                ref="billboard"
                :image="image"
                :scale="0.1"
                :show="show"
                :distanceDisplayCondition="distanceDisplayCondition"
                :horizontalOrigin="horizontalOrigin"
              ></vc-graphics-billboard>
            </vc-entity>
          </vc-viewer>
        `,
        data () {
          return {
            id: 'Hello Vue Cesium',
            description: 'This is a billboard',
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            position: { lng: 90, lat: 40, height: 10000 },
            billboard: {},
            show: true,
            distanceDisplayCondition: { near: 0, far: 20000000 },
            horizontalOrigin: 0
          }
        }
      }, true)

      vm.$refs.billboard.$once('ready', async ({ Cesium, viewer, cesiumObject }) => {
        // 这儿的cesiumObject 就是 billboard
        expect(cesiumObject).to.be.instanceof(Cesium.BillboardGraphics)
        // 给一点点渲染时间
        await waitImmediate()
        expect(vm.billboard).to.equal(cesiumObject)
        expect(vm.$refs.billboard.mounted).to.be.true
        // 测试卸载方法
        await vm.$refs.billboard.unload()
        expect(vm.$refs.billboard.mounted).to.be.false
        // 测试加载方法
        await vm.$refs.billboard.load()
        expect(vm.$refs.billboard.mounted).to.be.true
        destroyVM(vm)
        done()
      })
    }).timeout(12000)
  })
})
