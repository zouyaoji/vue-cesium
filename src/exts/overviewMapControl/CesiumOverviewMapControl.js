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

import * as L from 'leaflet'

var CesiumOverviewMapControl = function () {
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
    L.Util.setOptions(this, options)

    this.options.aimingRectOptions.interactive = false
    this.options.shadowRectOptions.interactive = false

    this._initMap()
    this._showInitView()
  },
  updateAimingRect: function () {
    var _this = this
    var rect = _this._getViewRange()
    _this._aimingRect.setBounds(rect)
  },
  _initMap: function () {
    var _this = this

    this._container.style.width = this.options.width + 'px'
    this._container.style.height = this.options.height + 'px'

    L.DomEvent.disableClickPropagation(_this._container)
    L.DomEvent.on(_this._container, 'mousewheel', L.DomEvent.stopPropagation)

    var mapOptions = {
      attributionControl: false,
      dragging: !_this.options.centerFixed,
      zoomControl: _this.options.zoomControl,
      zoomAnimation: _this.options.zoomAnimation,
      autoToggleDisplay: _this.options.autoToggleDisplay,
      touchZoom: _this.options.centerFixed ? 'center' : !_this._isZoomLevelFixed(),
      scrollWheelZoom: _this.options.centerFixed ? 'center' : !_this._isZoomLevelFixed(),
      doubleClickZoom: _this.options.centerFixed ? 'center' : !_this._isZoomLevelFixed(),
      boxZoom: !_this._isZoomLevelFixed(),
      crs: L.CRS.EPSG3857,
      center: [30, 120],
      zoom: 1
    }
    mapOptions = L.Util.extend(_this.options.mapOptions, mapOptions) // merge
    // with
    // priority
    // of
    // the
    // local
    // mapOptions
    // object.

    _this._miniMap = new L.Map(_this._container, mapOptions)

    var layer = this.tileLayer
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

    _this._miniMap.whenReady(L.Util.bind(function () {
      var bounds = _this._getViewRange()
      _this._aimingRect = L.rectangle(bounds, _this.options.aimingRectOptions).addTo(_this._miniMap)
      _this._shadowRect = L.rectangle(bounds, _this.options.shadowRectOptions).addTo(_this._miniMap)

      var camera = _this.viewer.scene.camera
      camera.moveEnd.addEventListener(function (e) {
        var rect = _this._getViewRange()
        if (!_this._miniMapMoving) {
          _this._viewerMoving = true
          var zrect = _this._getZoomOutRange(rect)
          _this._miniMap.fitBounds(zrect)
          _this._setDisplay(_this._decideMinimized())
        } else {
          _this._miniMapMoving = false
        }
        _this._aimingRect.setBounds(rect)
      })
      camera.moveStart.addEventListener(function (e) {
        var rect = _this._getViewRange()
        _this._aimingRect.setBounds(rect)
      })

      _this._miniMap.on('movestart', _this._onMiniMapMoveStarted, _this)
      _this._miniMap.on('move', _this._onMiniMapMoving, _this)
      _this._miniMap.on('moveend', _this._onMiniMapMoved, _this)
    }, _this))

    return _this._container
  },
  _addToggleButton: function () {
    this._toggleDisplayButton = this.options.toggleDisplay ? this._createButton(
      '', this._toggleButtonInitialTitleText(), ('leaflet-control-minimap-toggle-display leaflet-control-minimap-toggle-display-' +
                this.options.position), this._container, this._toggleDisplayButtonClicked, this) : undefined
    // this._toggleDisplayButton.style.zIndex = 99999;
    this._toggleDisplayButton.style.width = this.options.collapsedWidth + 'px'
    this._toggleDisplayButton.style.height = this.options.collapsedHeight + 'px'
  },

  _toggleButtonInitialTitleText: function () {
    if (this.options.minimized) {
      return this.vm.$vc.lang.overviewmap.show
    } else {
      return this.vm.$vc.lang.overviewmap.hidden
    }
  },

  _createButton: function (html, title, className, container, fn, context) {
    var link = L.DomUtil.create('a', className, container)
    link.innerHTML = html
    link.href = '#'
    link.title = title

    var stop = L.DomEvent.stopPropagation

    L.DomEvent
      .on(link, 'click', stop)
      .on(link, 'mousedown', stop)
      .on(link, 'dblclick', stop)
      .on(link, 'click', L.DomEvent.preventDefault)
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
    var rect = this._getViewRange()
    var zrect = this._getZoomOutRange(rect)
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
      this._toggleDisplayButton.className += (' minimized-' + this.options.position)
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
      this._toggleDisplayButton.className = this._toggleDisplayButton.className
        .replace('minimized-' + this.options.position, '')
      this._toggleDisplayButton.title = this.vm.$vc.lang.overviewmap.hidden
    } else {
      this._container.style.display = 'block'
    }
    this._minimized = false
    this._onToggle()
  },
  _onMiniMapMoveStarted: function (e) {
    if (!this.options.centerFixed) {
      var lastAimingRect = this._aimingRect.getBounds()
      var sw = this._miniMap.latLngToContainerPoint(lastAimingRect.getSouthWest())
      var ne = this._miniMap.latLngToContainerPoint(lastAimingRect.getNorthEast())
      this._lastAimingRectPosition = { sw: sw, ne: ne }
    }
  },
  _onMiniMapMoving: function (e) {
    if (!this.options.centerFixed) {
      if (!this._viewerMoving && this._lastAimingRectPosition) {
        this._shadowRect.setBounds(new L.LatLngBounds(this._miniMap.containerPointToLatLng(this._lastAimingRectPosition.sw), this._miniMap.containerPointToLatLng(this._lastAimingRectPosition.ne)))
        this._shadowRect.setStyle({ opacity: 1, fillOpacity: 0.3 })
      }
    }
  },
  _onMiniMapMoved: function (e) {
    if (!this._viewerMoving) {
      this._miniMapMoving = true

      var rect = this._shadowRect.getBounds()
      var west = rect.getWest()
      var east = rect.getEast()
      var north = rect.getNorth()
      var south = rect.getSouth()
      var destination = Cesium.Rectangle.fromDegrees(west, south, east, north)
      var orientation = {
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
    var zoomLevelFixed = this.options.zoomLevelFixed
    return this._isDefined(zoomLevelFixed) && this._isInteger(zoomLevelFixed)
  },
  _decideMinimized: function () {
    if (this._userToggledDisplay) {
      return this._minimized
    }

    if (this.options.autoToggleDisplay) {
      var bounds = this._getViewRange()
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
    L.Util.requestAnimFrame(function () {
      L.DomEvent.on(this._container, 'transitionend', this._fireToggleEvents, this)
      if (!L.Browser.any3d) {
        L.Util.requestAnimFrame(this._fireToggleEvents, this)
      }
    }, this)
  },
  _fireToggleEvents: function () {
    L.DomEvent.off(this._container, 'transitionend', this._fireToggleEvents, this)
  },
  _getViewRange: function () {
    var viewer = this.viewer
    var camera = viewer.scene.camera
    var range = camera.computeViewRectangle()
    var west = range.west / Math.PI * 180
    var east = range.east / Math.PI * 180
    var north = range.north / Math.PI * 180
    var south = range.south / Math.PI * 180
    var bounds = new L.LatLngBounds(
      new L.LatLng(north, west),
      new L.LatLng(south, east)
    )
    return bounds
  },
  _getZoomOutRange: function (rect) {
    var west = rect.getWest()
    var east = rect.getEast()
    var north = rect.getNorth()
    var south = rect.getSouth()
    var factor = 3.0
    var xdis = Math.abs(east - west)
    var ydis = Math.abs(north - south)
    var xoff = xdis * (factor - 1) / 2.0
    var yoff = ydis * (factor - 1) / 2.0
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
    var bounds = new L.LatLngBounds(
      new L.LatLng(north, west),
      new L.LatLng(south, east)
    )
    return bounds
  },
  CLASS_NAME: 'CesiumOverviewMapControl'
}

export default CesiumOverviewMapControl
