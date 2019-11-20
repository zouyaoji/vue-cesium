class UserInterfaceControl {
  /**
   * The view-model for a control in the user interface
   *
   * @alias UserInterfaceControl
   * @constructor
   * @abstract
   *
   * @param {Terria} terria The Terria instance.
   */
  constructor (terria) {
    if (!Cesium.defined(terria)) {
      throw new Cesium.DeveloperError('terria is required')
    }

    this._terria = terria

    /**
     * Gets or sets the name of the control which is set as the controls title.
     * This property is observable.
     * @type {String}
     */
    this.name = 'Unnamed Control'

    /**
     * Gets or sets the text to be displayed in the UI control.
     * This property is observable.
     * @type {String}
     */
    this.text = undefined

    /**
     * Gets or sets the svg icon of the control.  This property is observable.
     * @type {Object}
     */
    this.svgIcon = undefined

    /**
     * Gets or sets the height of the svg icon.  This property is observable.
     * @type {Integer}
     */
    this.svgHeight = undefined

    /**
     * Gets or sets the width of the svg icon.  This property is observable.
     * @type {Integer}
     */
    this.svgWidth = undefined

    /**
     * Gets or sets the CSS class of the control. This property is observable.
     * @type {String}
     */
    this.cssClass = undefined

    /**
     * Gets or sets the property describing whether or not the control is in the active state.
     * This property is observable.
     * @type {Boolean}
     */
    this.isActive = false

    Cesium.knockout.track(this, [
      'name',
      'svgIcon',
      'svgHeight',
      'svgWidth',
      'cssClass',
      'isActive'
    ])
  }

  /**
   * When implemented in a derived class, performs an action when the user clicks
   * on this control.
   * @abstract
   * @protected
   */
  activate () {
    throw new Cesium.DeveloperError('activate must be implemented in the derived class.')
  }

  /**
   * Gets the Terria instance.
   * @memberOf UserInterfaceControl.prototype
   * @type {Terria}
   */
  get terria () {
    return this._terria
  }
  /**
   * Gets a value indicating whether this button has text associated with it.
   * @type {Object}
   */
  get hasText () {
    return Cesium.defined(this.text) && typeof this.text === 'string'
  }
}

export default UserInterfaceControl
