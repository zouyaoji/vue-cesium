import { destroyVM, createVue, waitImmediate } from '../../util'

describe('imageryLayer', () => {
  describe('vc-provider-imagery-openstreetmap', () => {
    it('create', done => {
      let vm = createVue({
        template: `
          <vc-viewer @ready="ready">
            <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
              <vc-provider-imagery-openstreetmap ref="openstreetmap" :url="url"></vc-provider-imagery-openstreetmap>
            </vc-layer-imagery>
          </vc-viewer>
        `,
        data () {
          return {
            url: 'https://a.tile.openstreetmap.org',
            alpha: 1,
            brightness: 1,
            contrast: 1
          }
        },
        methods: {
          ready (cesiumInstance) {
            const { Cesium, viewer } = cesiumInstance
            // ..
          }
        }
      }, true)

      vm.$refs.openstreetmap.$on('ready', async ({ Cesium, viewer, cesiumObject }) => {
        // 这儿的cesiumObject 就是 OpenStreetMapImageryProvider
        expect(cesiumObject).to.be.instanceof(Cesium.OpenStreetMapImageryProvider)
        // 给一点点渲染时间
        // await waitImmediate()
        // expect(vm.billboard).to.equal(cesiumObject.billboard)
        // expect(vm.image).to.equal(viewer.entities.getById(vm.id).billboard.image.getValue())
        destroyVM(vm)
        done()
      })
    }).timeout(6000)
  })
})
