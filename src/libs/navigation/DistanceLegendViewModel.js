import loadView from './loadView'

class DistanceLegendViewModel {
  constructor (options) {
    if (!Cesium.defined(options) || !Cesium.defined(options.terria)) {
      throw new Cesium.DeveloperError('options.terria is required.')
    }

    this.terria = options.terria
    this._removeSubscription = undefined
    this._lastLegendUpdate = undefined
    this.eventHelper = new Cesium.EventHelper()

    this.distanceLabel = undefined
    this.barWidth = undefined

    this.enableDistanceLegend = Cesium.defined(options.enableDistanceLegend)
      ? options.enableDistanceLegend
      : true

    Cesium.knockout.track(this, ['distanceLabel', 'barWidth'])

    this.eventHelper.add(
      this.terria.afterWidgetChanged,
      function () {
        if (Cesium.defined(this._removeSubscription)) {
          this._removeSubscription()
          this._removeSubscription = undefined
        }
      },
      this
    )
    //        this.terria.beforeWidgetChanged.addEventListener(function () {
    //            if (defined(this._removeSubscription)) {
    //                this._removeSubscription();
    //                this._removeSubscription = undefined;
    //            }
    //        }, this);

    var that = this

    function addUpdateSubscription () {
      if (Cesium.defined(that.terria)) {
        var scene = that.terria.scene
        that._removeSubscription = scene.postRender.addEventListener(function () {
          updateDistanceLegendCesium(this, scene)
        }, that)
      }
    }

    addUpdateSubscription()
    this.eventHelper.add(
      this.terria.afterWidgetChanged,
      function () {
        addUpdateSubscription()
      },
      this
    )
    // this.terria.afterWidgetChanged.addEventListener(function() {
    //    addUpdateSubscription();
    // }, this);
  }

  destroy () {
    this.eventHelper.removeAll()
  }

  show (container) {
    var testing
    if (this.enableDistanceLegend) {
      testing =
        '<div class="distance-legend" data-bind="visible: distanceLabel && barWidth">' +
        '<div class="distance-legend-label" data-bind="text: distanceLabel"></div>' +
        '<div class="distance-legend-scale-bar" data-bind="style: { width: barWidth + \'px\', left: (5 + (125 - barWidth) / 2) + \'px\' }"></div>' +
        '</div>'
    } else {
      testing =
        '<div class="distance-legend"  style="display: none;" data-bind="visible: distanceLabel && barWidth">' +
        '<div class="distance-legend-label"  data-bind="text: distanceLabel"></div>' +
        '<div class="distance-legend-scale-bar"  data-bind="style: { width: barWidth + \'px\', left: (5 + (125 - barWidth) / 2) + \'px\' }"></div>' +
        '</div>'
    }
    loadView(testing, container, this)
    // loadView(distanceLegendTemplate, container, this);
    // loadView(require('fs').readFileSync(__dirname + '/../Views/DistanceLegend.html', 'utf8'), container, this);
  }

  static create (options) {
    var result = new DistanceLegendViewModel(options)
    result.show(options.container)
    return result
  }
}

var distances = [
  1,
  2,
  3,
  5,
  10,
  20,
  30,
  50,
  100,
  200,
  300,
  500,
  1000,
  2000,
  3000,
  5000,
  10000,
  20000,
  30000,
  50000,
  100000,
  200000,
  300000,
  500000,
  1000000,
  2000000,
  3000000,
  5000000,
  10000000,
  20000000,
  30000000,
  50000000
]

function updateDistanceLegendCesium (viewModel, scene) {
  if (!viewModel.enableDistanceLegend) {
    viewModel.barWidth = undefined
    viewModel.distanceLabel = undefined
    return
  }
  var now = Cesium.getTimestamp()
  if (now < viewModel._lastLegendUpdate + 250) {
    return
  }

  var geodesic = new Cesium.EllipsoidGeodesic()
  viewModel._lastLegendUpdate = now

  // Find the distance between two pixels at the bottom center of the screen.
  var width = scene.canvas.clientWidth
  var height = scene.canvas.clientHeight

  var left = scene.camera.getPickRay(new Cesium.Cartesian2((width / 2) | 0, height - 1))
  var right = scene.camera.getPickRay(new Cesium.Cartesian2((1 + width / 2) | 0, height - 1))

  var globe = scene.globe
  var leftPosition = globe.pick(left, scene)
  var rightPosition = globe.pick(right, scene)

  if (!Cesium.defined(leftPosition) || !Cesium.defined(rightPosition)) {
    viewModel.barWidth = undefined
    viewModel.distanceLabel = undefined
    return
  }

  var leftCartographic = globe.ellipsoid.cartesianToCartographic(leftPosition)
  var rightCartographic = globe.ellipsoid.cartesianToCartographic(rightPosition)

  geodesic.setEndPoints(leftCartographic, rightCartographic)
  var pixelDistance = geodesic.surfaceDistance

  // Find the first distance that makes the scale bar less than 100 pixels.
  var maxBarWidth = 100
  var distance
  for (var i = distances.length - 1; !Cesium.defined(distance) && i >= 0; --i) {
    if (distances[i] / pixelDistance < maxBarWidth) {
      distance = distances[i]
    }
  }

  if (Cesium.defined(distance)) {
    var label
    if (distance >= 1000) {
      label = (distance / 1000).toString() + ' km'
    } else {
      label = distance.toString() + ' m'
    }

    viewModel.barWidth = (distance / pixelDistance) | 0
    viewModel.distanceLabel = label
  } else {
    viewModel.barWidth = undefined
    viewModel.distanceLabel = undefined
  }
}

export default DistanceLegendViewModel
