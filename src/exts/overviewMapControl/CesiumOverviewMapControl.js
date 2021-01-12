/**
 * @license
 *
 * OverviewMapForCesium
 *
 * See: https://github.com/leation/OverviewMapForCesium
 *
 * @author leation
 *
 *   Copyright 2019 leation
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
 */

// import * as L from 'leaflet'
import { Util, DomEvent, CRS, Map, rectangle, DomUtil, LatLngBounds, Browser, LatLng } from 'leaflet/dist/leaflet-src.esm'

const CesiumOverviewMapControl = function () {
  this.init.apply(this, arguments)
}

CesiumOverviewMapControl.prototype = {
  _container: null,
  _miniMap: null,
  _viewerMoving: false,
  _miniMapMoving: false,
  _userToggledDisplay: false,
  _minimized: false,
  vm: null,
  viewer: null,
  tileLayer: null,
  options: {
    position: 'bottomleft',
    toggleDisplay: true,
    zoomLevelOffset: -5,
    zoomLevelFixed: false,
    centerFixed: false,
    zoomControl: false,
    zoomAnimation: false,
    autoToggleDisplay: false,
    minimized: false,
    width: 150,
    height: 150,
    collapsedWidth: 19,
    collapsedHeight: 19,
    aimingRectOptions: { color: '#ff7800', weight: 1, interactive: false },
    shadowRectOptions: { color: '#000000', weight: 1, interactive: false, opacity: 0, fillOpacity: 0 },
    // strings: { hideText: '隐藏鹰眼', showText: '显示鹰眼' },
    mapOptions: {
      toggleDisplay: true,
      aimingRectOptions: {
        color: '#ff1100',
        weight: 3
      },
      shadowRectOptions: {
        color: '#0000AA',
        weight: 1,
        opacity: 0,
        fillOpacity: 0
      }
    }
  },
  init: function (viewer, layer, options, vm) {
    this.viewer = viewer
    this.tileLayer = layer
    this._container = options.container
    this.vm = vm
    Util.setOptions(this, options)

    this.options.aimingRectOptions.interactive = false
    this.options.shadowRectOptions.interactive = false

    this._initMap()
    this._showInitView()
  },
  updateAimingRect: function () {
    const _this = this
    const rect = _this._getViewRange()
    _this._aimingRect.setBounds(rect)
  },
  _initMap: function () {
    const _this = this

    this._container.style.width = this.options.width + 'px'
    this._container.style.height = this.options.height + 'px'

    DomEvent.disableClickPropagation(_this._container)
    DomEvent.on(_this._container, 'mousewheel', DomEvent.stopPropagation)

    let mapOptions = {
      attributionControl: false,
      dragging: !_this.options.centerFixed,
      zoomControl: _this.options.zoomControl,
      zoomAnimation: _this.options.zoomAnimation,
      autoToggleDisplay: _this.options.autoToggleDisplay,
      touchZoom: _this.options.centerFixed ? 'center' : !_this._isZoomLevelFixed(),
      scrollWheelZoom: _this.options.centerFixed ? 'center' : !_this._isZoomLevelFixed(),
      doubleClickZoom: _this.options.centerFixed ? 'center' : !_this._isZoomLevelFixed(),
      boxZoom: !_this._isZoomLevelFixed(),
      crs: CRS.EPSG3857,
      center: [30, 120],
      zoom: 1
    }
    mapOptions = Util.extend(_this.options.mapOptions, mapOptions) // merge
    // with
    // priority
    // of
    // the
    // local
    // mapOptions
    // object.

    _this._miniMap = new Map(_this._container, mapOptions)

    const layer = this.tileLayer
    _this._miniMap.addLayer(layer)

    // These bools are used to prevent infinite loops of the two maps
    // notifying each other that they've moved.
    _this._viewerMoving = true
    _this._miniMapMoving = false

    // Keep a record of _this to prevent auto toggling when the user
    // explicitly doesn't want it.
    _this._userToggledDisplay = false
    _this._minimized = false

    if (this.options.toggleDisplay) {
      this._addToggleButton()
    }

    _this._miniMap.whenReady(
      Util.bind(function () {
        const bounds = _this._getViewRange()
        _this._aimingRect = rectangle(bounds, _this.options.aimingRectOptions).addTo(_this._miniMap)
        _this._shadowRect = rectangle(bounds, _this.options.shadowRectOptions).addTo(_this._miniMap)

        const camera = _this.viewer.scene.camera
        camera.moveEnd.addEventListener(function (e) {
          const rect = _this._getViewRange()
          if (!_this._miniMapMoving) {
            _this._viewerMoving = true
            const zrect = _this._getZoomOutRange(rect)
            _this._miniMap.fitBounds(zrect)
            _this._setDisplay(_this._decideMinimized())
          } else {
            _this._miniMapMoving = false
          }
          _this._aimingRect.setBounds(rect)
        })
        camera.moveStart.addEventListener(function (e) {
          const rect = _this._getViewRange()
          _this._aimingRect.setBounds(rect)
        })

        _this._miniMap.on('movestart', _this._onMiniMapMoveStarted, _this)
        _this._miniMap.on('move', _this._onMiniMapMoving, _this)
        _this._miniMap.on('moveend', _this._onMiniMapMoved, _this)
      }, _this)
    )

    return _this._container
  },
  _addToggleButton: function () {
    this._toggleDisplayButton = this.options.toggleDisplay
      ? this._createButton(
          '',
          this._toggleButtonInitialTitleText(),
          'vc-leaflet-control-minimap-toggle-display vc-leaflet-control-minimap-toggle-display-' + this.options.position,
          this._container,
          this._toggleDisplayButtonClicked,
          this
        )
      : undefined
    // this._toggleDisplayButton.style.zIndex = 99999;
    this._toggleDisplayButton.style.width = this.options.collapsedWidth + 'px'
    this._toggleDisplayButton.style.height = this.options.collapsedHeight + 'px'
  },

  _toggleButtonInitialTitleText: function () {
    if (!this.options.minimized) {
      return this.vm.$vc.lang.overviewmap.hidden
    }
  },

  _createButton: function (html, title, className, container, fn, context) {
    const link = DomUtil.create('a', className, container)
    link.innerHTML = html
    link.href = '#'
    link.title = title

    const stop = DomEvent.stopPropagation

    DomEvent.on(link, 'click', stop)
      .on(link, 'mousedown', stop)
      .on(link, 'dblclick', stop)
      .on(link, 'click', DomEvent.preventDefault)
      .on(link, 'click', fn, context)

    return link
  },

  _toggleDisplayButtonClicked: function () {
    this._userToggledDisplay = true
    if (!this._minimized) {
      this._minimize()
    } else {
      this._restore()
    }
  },
  _showInitView: function () {
    const rect = this._getViewRange()
    const zrect = this._getZoomOutRange(rect)
    this._miniMap.fitBounds(zrect)
  },
  _setDisplay: function (minimize) {
    if (minimize !== this._minimized) {
      if (!this._minimized) {
        this._minimize()
      } else {
        this._restore()
      }
    }
  },
  _minimize: function () {
    // hide the minimap
    if (this.options.toggleDisplay) {
      this._container.style.width = this.options.collapsedWidth + 'px'
      this._container.style.height = this.options.collapsedHeight + 'px'
      this._toggleDisplayButton.className += ' minimized-' + this.options.position
      this._toggleDisplayButton.title = this.vm.$vc.lang.overviewmap.show
    } else {
      this._container.style.display = 'none'
    }
    this._minimized = true
    this._onToggle()
  },
  _restore: function () {
    if (this.options.toggleDisplay) {
      this._container.style.width = this.options.width + 'px'
      this._container.style.height = this.options.height + 'px'
      this._toggleDisplayButton.className = this._toggleDisplayButton.className.replace('minimized-' + this.options.position, '')
      this._toggleDisplayButton.title = this.vm.$vc.lang.overviewmap.hidden
    } else {
      this._container.style.display = 'block'
    }
    this._minimized = false
    this._onToggle()
  },
  _onMiniMapMoveStarted: function (e) {
    if (!this.options.centerFixed) {
      const lastAimingRect = this._aimingRect.getBounds()
      const sw = this._miniMap.latLngToContainerPoint(lastAimingRect.getSouthWest())
      const ne = this._miniMap.latLngToContainerPoint(lastAimingRect.getNorthEast())
      this._lastAimingRectPosition = { sw: sw, ne: ne }
    }
  },
  _onMiniMapMoving: function (e) {
    if (!this.options.centerFixed) {
      if (!this._viewerMoving && this._lastAimingRectPosition) {
        this._shadowRect.setBounds(
          new LatLngBounds(
            this._miniMap.containerPointToLatLng(this._lastAimingRectPosition.sw),
            this._miniMap.containerPointToLatLng(this._lastAimingRectPosition.ne)
          )
        )
        this._shadowRect.setStyle({ opacity: 1, fillOpacity: 0.3 })
      }
    }
  },
  _onMiniMapMoved: function (e) {
    if (!this._viewerMoving) {
      this._miniMapMoving = true

      const rect = this._shadowRect.getBounds()
      const west = rect.getWest()
      const east = rect.getEast()
      const north = rect.getNorth()
      const south = rect.getSouth()
      const destination = Cesium.Rectangle.fromDegrees(west, south, east, north)
      const orientation = {
        heading: Cesium.Math.toRadians(0),
        pitch: Cesium.Math.toRadians(-90),
        roll: 0.0
      }
      this.viewer.scene.camera.setView({
        destination: destination,
        orientation: orientation
      })
      this._shadowRect.setStyle({ opacity: 0, fillOpacity: 0 })
    } else {
      this._viewerMoving = false
    }
  },
  _isZoomLevelFixed: function () {
    const zoomLevelFixed = this.options.zoomLevelFixed
    return this._isDefined(zoomLevelFixed) && this._isInteger(zoomLevelFixed)
  },
  _decideMinimized: function () {
    if (this._userToggledDisplay) {
      return this._minimized
    }

    if (this.options.autoToggleDisplay) {
      const bounds = this._getViewRange()
      if (bounds.contains(this._miniMap.getBounds())) {
        return true
      }
      return false
    }

    return this._minimized
  },
  _isInteger: function (value) {
    return typeof value === 'number'
  },
  _isDefined: function (value) {
    return typeof value !== 'undefined'
  },
  _onToggle: function () {
    Util.requestAnimFrame(function () {
      DomEvent.on(this._container, 'transitionend', this._fireToggleEvents, this)
      if (!Browser.any3d) {
        Util.requestAnimFrame(this._fireToggleEvents, this)
      }
    }, this)
  },
  _fireToggleEvents: function () {
    DomEvent.off(this._container, 'transitionend', this._fireToggleEvents, this)
  },
  _getViewRange: function () {
    const viewer = this.viewer
    const camera = viewer.scene.camera
    const range = camera.computeViewRectangle()
    const west = (range.west / Math.PI) * 180
    const east = (range.east / Math.PI) * 180
    const north = (range.north / Math.PI) * 180
    const south = (range.south / Math.PI) * 180
    const bounds = new LatLngBounds(new LatLng(north, west), new LatLng(south, east))
    return bounds
  },
  _getZoomOutRange: function (rect) {
    let west = rect.getWest()
    let east = rect.getEast()
    let north = rect.getNorth()
    let south = rect.getSouth()
    const factor = 3.0
    const xdis = Math.abs(east - west)
    const ydis = Math.abs(north - south)
    const xoff = (xdis * (factor - 1)) / 2.0
    const yoff = (ydis * (factor - 1)) / 2.0
    west -= xoff
    east += xoff
    north += yoff
    south -= yoff
    if (west < -180) {
      west = -180
    }
    if (east > 180) {
      east = 180
    }
    if (north > 90) {
      north = 90
    }
    if (south < -90) {
      south = -90
    }
    const bounds = new LatLngBounds(new LatLng(north, west), new LatLng(south, east))
    return bounds
  },
  CLASS_NAME: 'CesiumOverviewMapControl'
}

export default CesiumOverviewMapControl
