import CesiumNavigation from './CesiumNavigation'
import './styles/cesium-navigation.less'

/**
 * @param {Viewer|CesiumWidget} viewerCesiumWidget The Viewer or CesiumWidget instance
 * @param {{}} options the options
 */

class viewerCesiumNavigationMixin {
  /**
   * A mixin which adds the Compass/Navigation widget to the Viewer widget.
   * Rather than being called directly, this function is normally passed as
   * a parameter to {@link Viewer#extend}, as shown in the example below.
   * @exports viewerCesiumNavigationMixin
   *
   * @param {Viewer} viewer The viewer instance.
   * @param {{}} options The options.
   *
   * @exception {DeveloperError} viewer is required.
   *
   * @demo {@link http://localhost:8080/index.html|run local server with examples}
   *
   * @example
   * var viewer = new Cesium.Viewer('cesiumContainer');
   * viewer.extend(viewerCesiumNavigationMixin);
   */
  constructor (viewer, options) {
    if (!Cesium.defined(viewer)) {
      throw new Cesium.DeveloperError('viewer is required.')
    }
    this.viewer = viewer
    this.options = options
    this.init()
  }

  /**
   *
   * @param {CesiumWidget} cesiumWidget The cesium widget instance.
   * @param {{}} options The options.
   */
  mixinWidget (cesiumWidget, options) {
    return this.init.apply(undefined, arguments)
  }

  init () {
    const { viewer, options } = this
    var cesiumNavigation = new CesiumNavigation(viewer, options)

    var cesiumWidget = Cesium.defined(viewer.cesiumWidget) ? viewer.cesiumWidget : viewer

    Cesium.defineProperties(cesiumWidget, {
      cesiumNavigation: {
        configurable: true,
        get: function () {
          return cesiumNavigation
        }
      }
    })

    cesiumNavigation.addOnDestroyListener(
      (function (cesiumWidget) {
        return function () {
          delete cesiumWidget.cesiumNavigation
        }
      })(cesiumWidget)
    )

    cesiumNavigation.addOnDestroyListener(
      (function (viewer) {
        return function () {
          delete viewer.cesiumNavigation
        }
      })(viewer)
    )
    return cesiumNavigation
  }
}

export default viewerCesiumNavigationMixin
