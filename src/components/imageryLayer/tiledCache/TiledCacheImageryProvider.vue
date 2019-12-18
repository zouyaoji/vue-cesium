<script>
import {
  url,
  format,
  credit,
  minimumLevel,
  maximumLevel,
  rectangle,
  tilingScheme,
  ellipsoid,
  tileWidth,
  tileHeight
} from '../../../mixins/mixinProps'
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
export default {
  name: 'vc-provider-imagery-tiledcache',
  mixins: [
    url,
    format,
    credit,
    minimumLevel,
    maximumLevel,
    rectangle,
    tilingScheme,
    ellipsoid,
    tileWidth,
    tileHeight,
    mixinImageryProvider
  ],
  props: {
    dir: {
      type: String,
      reqiured: true
    }
  },
  data () {
    return {
      scales: [
        1 / 295829355,
        1 / 147914678,
        1 / 73957339,
        1 / 36978669,
        1 / 18489335,
        1 / 9244667,
        1 / 4622334,
        1 / 2311167,
        1 / 1155583,
        1 / 577792,
        1 / 288896,
        1 / 144448,
        1 / 72224,
        1 / 36112,
        1 / 18056,
        1 / 9026,
        1 / 4514
      ]
    }
  },
  methods: {
    async createCesiumObject () {
      const { $props, transformProps, padWithZerosIfNecessary, scales } = this
      const options = transformProps($props)
      const {
        Credit,
        defined,
        defaultValue,
        DeveloperError,
        Ellipsoid,
        GeographicTilingScheme,
        Rectangle,
        Resource,
        UrlTemplateImageryProvider
      } = Cesium

      const { url, dir, format } = options
      if (!defined(url)) {
        throw new DeveloperError('options.url is required.')
      }
      if (!defined(dir)) {
        throw new DeveloperError('options.dir is required.')
      }
      const resource = Resource.createIfNeeded(url)
      resource.url += `?dir=${dir}&scale={scale}&col={x}&row={y}&format=${format}`

      const tilingScheme = defaultValue(
        options.tilingScheme,
        new GeographicTilingScheme({
          ellipsoid: defaultValue(options.ellipsoid, Ellipsoid.WGS84),
          numberOfLevelZeroTilesX: 2,
          numberOfLevelZeroTilesY: 1
        })
      )
      const tileWidth = defaultValue(options.tileWidth, 256)
      const tileHeight = defaultValue(options.tileHeight, 256)
      const maximumLevel = options.maximumLevel
      const minimumLevel = defaultValue(options.minimumLevel, 0)
      const rectangle = defaultValue(options.rectangle, tilingScheme.rectangle)
      // Check the number of tiles at the minimum level.  If it's more than four,
      // throw an exception, because starting at the higher minimum
      // level will cause too many tiles to be downloaded and rendered.
      const swTile = tilingScheme.positionToTileXY(Rectangle.southwest(rectangle), minimumLevel)
      const neTile = tilingScheme.positionToTileXY(Rectangle.northeast(rectangle), minimumLevel)
      const tileCount = (Math.abs(neTile.x - swTile.x) + 1) * (Math.abs(neTile.y - swTile.y) + 1)

      if (tileCount > 4) {
        throw new DeveloperError(
          'The rectangle and minimumLevel indicate that there are ' +
          tileCount +
          ' tiles at the minimum level. Imagery providers with more than four tiles at the minimum level are not supported.'
        )
      }

      let credit = defaultValue(options.credit, '')
      if (typeof credit === 'string') {
        credit = new Credit(credit)
      }

      return new UrlTemplateImageryProvider({
        url: resource,
        credit: credit,
        tilingScheme: tilingScheme,
        tileWidth: tileWidth,
        tileHeight: tileHeight,
        minimumLevel: minimumLevel,
        maximumLevel: maximumLevel,
        rectangle: rectangle,
        customTags: {
          scale: (imageryProvider, x, y, level) => {
            var s = 1 / scales[level]
            return padWithZerosIfNecessary(imageryProvider, '{scale}', s)
          }
        }
      })
    },
    padWithZerosIfNecessary (imageryProvider, key, value) {
      if (imageryProvider && imageryProvider.urlSchemeZeroPadding && imageryProvider.urlSchemeZeroPadding.hasOwnProperty(key)) {
        const paddingTemplate = imageryProvider.urlSchemeZeroPadding[key]
        if (typeof paddingTemplate === 'string') {
          const paddingTemplateWidth = paddingTemplate.length
          if (paddingTemplateWidth > 1) {
            value =
              value.length >= paddingTemplateWidth
                ? value
                : new Array(paddingTemplateWidth - value.toString().length + 1).join('0') + value
          }
        }
      }
      return value
    }
  }
}
</script>
