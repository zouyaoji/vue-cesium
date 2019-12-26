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
export default {
  components: {
    VcIconSvg
  },
  data () {
    return {
      datasource: {}
    }
  },
  mounted () {
    this.$parent.createPromise.then(({ Cesium, viewer }) => {
      this.viewer = viewer
      this.viewer.dataSources.add(new Cesium.CustomDataSource('VcMyLocation')).then((ds) => {
        this.datasource = ds
      })
    })
  },
  methods: {
    handleCick () {
      this.getLocation()
    },
    getLocation () {
      if (navigator.geolocation) {
        const options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
        navigator.geolocation.getCurrentPosition(this.zoomToMyLocation, this.handleLocationError, options)
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
      const longitude = position.coords.longitude
      const latitude = position.coords.latitude
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

<style></style>
