<template>
  <div class="vc-tool-btn">
    <button :title="$vc.lang.navigation.centreMap" @click="handleCick" class="vc-btn" type="button">
      <vc-icon-svg name="geolocation"></vc-icon-svg>
    </button>
  </div>
</template>

<script>
import './icon/geolocation'
import '../../../assets/styles/components/toolButton.scss'
import VcIconSvg from './icon/VcIconSvg.vue'
import AMapLoader from '@amap/amap-jsapi-loader'
export default {
  components: {
    VcIconSvg
  },
  props: {
    enableMyLocation: Object | Boolean
  },
  mounted () {
    this.$parent.createPromise.then(({ Cesium, viewer }) => {
      this.viewer = viewer
      this.viewer.dataSources.add(new Cesium.CustomDataSource('vc-myLocation')).then((ds) => {
        this.datasource = ds
      })
      const { enableMyLocation } = this
      if (enableMyLocation.amap && enableMyLocation.amap.key) {
        AMapLoader.load({
          'key': enableMyLocation.amap.key,
          'version': '2.0',
          'plugins': ['AMap.Geolocation']
        }).then((AMap) => {
          this.AMap = AMap
          this.amapGeolocation = new AMap.Geolocation({
            // 是否使用高精度定位，默认：true
            enableHighAccuracy: true,
            convert: false,
            // 设置定位超时时间，默认：无穷大
            timeout: 20000
          })
        }).catch(e => {
          console.error(`[C_PKG_FULLNAME] ERROR: ` + e)
        })
      }
    })
  },
  destroyed () {
    this.viewer.dataSources.remove(this.datasource, true)
    if (this.amapGeolocation) {
      let scripts = document.getElementsByTagName('script')
      let removeScripts = []
      for (let script of scripts) {
        if (script.src.indexOf('/webapi.amap.com/maps') > -1) {
          removeScripts.push(script)
        }
      }
      removeScripts.forEach((script) => {
        document.getElementsByTagName('body')[0].removeChild(script)
      })
    }
  },
  methods: {
    handleCick () {
      const { enableMyLocation, getLocation } = this
      if (enableMyLocation.amap && enableMyLocation.amap.key) {
        this.amapGeolocation.getCurrentPosition((status, result) => {
          if (status === 'complete') {
            this.$emit('geolocation', result)
            this.zoomToMyLocation({
              lng: result.position.lng,
              lat: result.position.lat
            })
          } else {
            console.error(`[C_PKG_FULLNAME] ERROR: ` + result.message)
          }
        })
      } else {
        getLocation()
      }
    },
    getLocation () {
      if (navigator.geolocation) {
        const options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
        navigator.geolocation.getCurrentPosition((position) => {
          this.$emit('geolocation', position)
          this.zoomToMyLocation({
            lng: position.coords.longitude,
            lat: position.coords.latitude
          })
        }, this.handleLocationError, options)
      } else {
        console.error(`[C_PKG_FULLNAME] ERROR: ` + 'Your browser cannot provide your location.')
      }
    },
    // This next function modelled on Cesium.geoJsonDataSource's defaultDescribe.
    describeWithoutUnderscores (properties, nameProperty) {
      var html = ''
      if (properties instanceof Cesium.PropertyBag) {
        // unwrap the properties from the PropertyBag
        properties = properties.getValue(Cesium.JulianDate.now())
      }
      for (var key in properties) {
        if (properties.hasOwnProperty(key)) {
          if (key === nameProperty) {
            continue
          }
          var value = properties[key]
          if (typeof value === 'object') {
            value = this.describeWithoutUnderscores(value)
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
    },
    zoomToMyLocation (position) {
      const longitude = position.lng
      const latitude = position.lat
      const { Cartesian3, Rectangle, Ellipsoid, sampleTerrain } = Cesium
      const { datasource, describeWithoutUnderscores } = this

      datasource.entities.removeAll()
      datasource.entities.add({
        id: 'My Location',
        position: Cartesian3.fromDegrees(longitude, latitude),
        point: {
          color: Cesium.Color.fromCssColorString('#08ABD5'),
          pixelSize: 25 / 2,
          outlineWidth: 3,
          outlineColor: Cesium.Color.fromCssColorString('#ffffff')
        },
        description: describeWithoutUnderscores({
          longitude: longitude,
          latitude: latitude
        })
      })

      // west, south, east, north, result
      const rectangle = Rectangle.fromDegrees(longitude - 0.01, latitude - 0.01, longitude + 0.01, latitude + 0.01)
      const camera = this.viewer.scene.camera
      // Work out the destination that the camera would naturally fly to
      const destinationCartesian = camera.getRectangleCameraCoordinates(rectangle)
      const destination = Ellipsoid.WGS84.cartesianToCartographic(destinationCartesian)
      const terrainProvider = this.viewer.scene.globe.terrainProvider
      const level = 6 // A sufficiently coarse tile level that still has approximately accurate height
      const positions = [Rectangle.center(rectangle)]

      // Perform an elevation query at the centre of the rectangle
      return sampleTerrain(terrainProvider, level, positions).then(function (results) {
        // Add terrain elevation to camera altitude
        const finalDestinationCartographic = {
          longitude: destination.longitude,
          latitude: destination.latitude,
          height: destination.height + results[0].height
        }
        const finalDestination = Ellipsoid.WGS84.cartographicToCartesian(finalDestinationCartographic)

        camera.flyTo({
          duration: 3,
          destination: finalDestination
        })
      })
    },
    handleLocationError (err) {
      console.error(`[C_PKG_FULLNAME] ERROR: ` + err.message)
    }
  }
}
</script>
