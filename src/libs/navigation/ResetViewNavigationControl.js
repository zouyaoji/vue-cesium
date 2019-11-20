import svgReset from './svgReset'
import NavigationControl from './NavigationControl'

class ResetViewNavigationControl extends NavigationControl {
  /**
   * The model for a zoom in control in the navigation control tool bar
   *
   * @alias ResetViewNavigationControl
   * @constructor
   * @abstract
   *
   * @param {Terria} terria The Terria instance.
   */
  constructor (terria) {
    super(terria)

    /**
     * Gets or sets the name of the control which is set as the control's title.
     * This property is observable.
     * @type {String}
     */
    this.name = '重置视图'
    this.navigationLocked = false

    /**
     * Gets or sets the svg icon of the control.  This property is observable.
     * @type {Object}
     */
    this.svgIcon = svgReset

    /**
     * Gets or sets the height of the svg icon.  This property is observable.
     * @type {Integer}
     */
    this.svgHeight = 15

    /**
     * Gets or sets the width of the svg icon.  This property is observable.
     * @type {Integer}
     */
    this.svgWidth = 15

    /**
     * Gets or sets the CSS class of the control. This property is observable.
     * @type {String}
     */
    this.cssClass = 'navigation-control-icon-reset'
  }

  setNavigationLocked (locked) {
    this.navigationLocked = locked
  }

  resetView () {
    // this.terria.analytics.logEvent('navigation', 'click', 'reset');
    if (this.navigationLocked) {
      return
    }
    var scene = this.terria.scene

    var sscc = scene.screenSpaceCameraController
    if (!sscc.enableInputs) {
      return
    }

    this.isActive = true

    var camera = scene.camera

    if (Cesium.defined(this.terria.trackedEntity)) {
      // when tracking do not reset to default view but to default view of tracked entity
      var trackedEntity = this.terria.trackedEntity
      this.terria.trackedEntity = undefined
      this.terria.trackedEntity = trackedEntity
    } else {
      // reset to a default position or view defined in the options
      const resetView = this.terria.options.defaultResetView
      if (resetView && resetView.length === 3) {
        camera.flyTo({
          destination: Cesium.Cartesian3.fromDegrees(resetView.lng, resetView.lat, resetView.height)
        })
      } else if (resetView && resetView.length === 4) {
        try {
          const rectangle = Cesium.Rectangle.fromDegrees(resetView.west, resetView.south, resetView.east, resetView.north)
          Cesium.Rectangle.validate(rectangle)
          camera.flyTo({
            destination: rectangle,
            orientation: {
              heading: Cesium.Math.toRadians(5.729578)
            }
          })
        } catch (e) {
          console.log(
            'Cesium-navigation/ResetViewNavigationControl:   options.defaultResetView Cesium rectangle is  invalid!'
          )
        }
      } else {
        camera.flyTo({
          destination: Cesium.Cartesian3.fromDegrees(105, 29.999999999999993, 19059568.497290563)
        })
      }
    }
    this.isActive = false
  }

  /**
   * When implemented in a derived class, performs an action when the user clicks
   * on this control
   * @abstract
   * @protected
   */
  activate () {
    this.resetView()
  }
}

export default ResetViewNavigationControl
