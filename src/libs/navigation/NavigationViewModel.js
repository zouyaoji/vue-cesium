import loadView from './loadView'
import ResetViewNavigationControl from './ResetViewNavigationControl'
import ZoomNavigationControl from './ZoomNavigationControl'
import svgCompassOuterRing from './svgCompassOuterRing'
import svgCompassGyro from './svgCompassGyro'
import svgCompassRotationMarker from './svgCompassRotationMarker'
import Utils from './Utils'

let vectorScratch = {}

let oldTransformScratch = {}

let newTransformScratch = {}

let centerScratch = {}

class NavigationViewModel {
  constructor (options) {
    this.terria = options.terria
    this.eventHelper = new Cesium.EventHelper()
    this.enableZoomControls = Cesium.defined(options.enableZoomControls)
      ? options.enableZoomControls
      : true
    this.enableCompass = Cesium.defined(options.enableCompass) ? options.enableCompass : true
    this.navigationLocked = false
    vectorScratch = new Cesium.Cartesian2()
    oldTransformScratch = new Cesium.Matrix4()
    newTransformScratch = new Cesium.Matrix4()
    centerScratch = new Cesium.Cartesian3()
    // if (this.showZoomControls)
    //   {
    this.controls = options.controls
    if (!Cesium.defined(this.controls)) {
      this.controls = [
        new ZoomNavigationControl(this.terria, true),
        new ResetViewNavigationControl(this.terria),
        new ZoomNavigationControl(this.terria, false)
      ]
    }
    // }

    this.svgCompassOuterRing = svgCompassOuterRing
    this.svgCompassGyro = svgCompassGyro
    this.svgCompassRotationMarker = svgCompassRotationMarker
    this.showCompass = Cesium.defined(this.terria) && this.enableCompass
    this.heading = this.showCompass ? this.terria.scene.camera.heading : 0.0
    this.isOrbiting = false
    this.orbitCursorAngle = 0
    this.orbitCursorOpacity = 0.0
    this.orbitLastTimestamp = 0
    this.orbitFrame = undefined
    this.orbitIsLook = false
    this.orbitMouseMoveFunction = undefined
    this.orbitMouseUpFunction = undefined
    this.isRotating = false
    this.rotateInitialCursorAngle = undefined
    this.rotateFrame = undefined
    this.rotateIsLook = false
    this.rotateMouseMoveFunction = undefined
    this.rotateMouseUpFunction = undefined
    this._unsubcribeFromPostRender = undefined
    Cesium.knockout.track(this, [
      'controls',
      'showCompass',
      'heading',
      'isOrbiting',
      'orbitCursorAngle',
      'isRotating'
    ])

    var that = this

    NavigationViewModel.prototype.setNavigationLocked = function (locked) {
      this.navigationLocked = locked
      if (this.controls && this.controls.length > 1) {
        this.controls[1].setNavigationLocked(this.navigationLocked)
      }
    }

    function widgetChange () {
      if (Cesium.defined(that.terria)) {
        if (that._unsubcribeFromPostRender) {
          that._unsubcribeFromPostRender()
          that._unsubcribeFromPostRender = undefined
        }

        that.showCompass = true && that.enableCompass

        that._unsubcribeFromPostRender = that.terria.scene.postRender.addEventListener(function () {
          that.heading = that.terria.scene.camera.heading
        })
      } else {
        if (that._unsubcribeFromPostRender) {
          that._unsubcribeFromPostRender()
          that._unsubcribeFromPostRender = undefined
        }
        that.showCompass = false
      }
    }

    this.eventHelper.add(this.terria.afterWidgetChanged, widgetChange, this)
    // this.terria.afterWidgetChanged.addEventListener(widgetChange);
    widgetChange()
  }

  destroy () {
    this.eventHelper.removeAll()
    // loadView(require('fs').readFileSync(baseURLEmpCesium + 'js-lib/terrajs/lib/Views/Navigation.html', 'utf8'), container, this);
  }

  show (container) {
    var testing
    if (this.enableZoomControls && this.enableCompass) {
      testing =
        '<div class="compass" title="" data-bind="visible: showCompass, event: { mousedown: handleMouseDown, dblclick: handleDoubleClick }">' +
        '<div class="compass-outer-ring-background"></div>' +
        " <div class=\"compass-rotation-marker\" data-bind=\"visible: isOrbiting, style: { transform: 'rotate(-' + orbitCursorAngle + 'rad)', '-webkit-transform': 'rotate(-' + orbitCursorAngle + 'rad)', opacity: orbitCursorOpacity }, cesiumSvgPath: { path: svgCompassRotationMarker, width: 145, height: 145 }\"></div>" +
        " <div class=\"compass-outer-ring\" title=\"\" data-bind=\"style: { transform: 'rotate(-' + heading + 'rad)', '-webkit-transform': 'rotate(-' + heading + 'rad)' }, cesiumSvgPath: { path: svgCompassOuterRing, width: 145, height: 145 }\"></div>" +
        ' <div class="compass-gyro-background"></div>' +
        ' <div class="compass-gyro" data-bind="cesiumSvgPath: { path: svgCompassGyro, width: 145, height: 145 }, css: { \'compass-gyro-active\': isOrbiting }"></div>' +
        '</div>' +
        '<div class="navigation-controls">' +
        '<!-- ko foreach: controls -->' +
        "<div data-bind=\"click: activate, attr: { title: $data.name }, css: $root.isLastControl($data) ? 'navigation-control-last' : 'navigation-control' \">" +
        '   <!-- ko if: $data.hasText -->' +
        '   <div data-bind="text: $data.text, css: $data.isActive ?  \'navigation-control-icon-active \' + $data.cssClass : $data.cssClass"></div>' +
        '   <!-- /ko -->' +
        '  <!-- ko ifnot: $data.hasText -->' +
        '  <div data-bind="cesiumSvgPath: { path: $data.svgIcon, width: $data.svgWidth, height: $data.svgHeight }, css: $data.isActive ?  \'navigation-control-icon-active \' + $data.cssClass : $data.cssClass"></div>' +
        '  <!-- /ko -->' +
        ' </div>' +
        ' <!-- /ko -->' +
        '</div>'
    } else if (!this.enableZoomControls && this.enableCompass) {
      testing =
        '<div class="compass" title="" data-bind="visible: showCompass, event: { mousedown: handleMouseDown, dblclick: handleDoubleClick }">' +
        '<div class="compass-outer-ring-background"></div>' +
        " <div class=\"compass-rotation-marker\" data-bind=\"visible: isOrbiting, style: { transform: 'rotate(-' + orbitCursorAngle + 'rad)', '-webkit-transform': 'rotate(-' + orbitCursorAngle + 'rad)', opacity: orbitCursorOpacity }, cesiumSvgPath: { path: svgCompassRotationMarker, width: 145, height: 145 }\"></div>" +
        " <div class=\"compass-outer-ring\" title=\"\" data-bind=\"style: { transform: 'rotate(-' + heading + 'rad)', '-webkit-transform': 'rotate(-' + heading + 'rad)' }, cesiumSvgPath: { path: svgCompassOuterRing, width: 145, height: 145 }\"></div>" +
        ' <div class="compass-gyro-background"></div>' +
        ' <div class="compass-gyro" data-bind="cesiumSvgPath: { path: svgCompassGyro, width: 145, height: 145 }, css: { \'compass-gyro-active\': isOrbiting }"></div>' +
        '</div>' +
        '<div class="navigation-controls"  style="display: none;" >' +
        '<!-- ko foreach: controls -->' +
        "<div data-bind=\"click: activate, attr: { title: $data.name }, css: $root.isLastControl($data) ? 'navigation-control-last' : 'navigation-control' \">" +
        '   <!-- ko if: $data.hasText -->' +
        '   <div data-bind="text: $data.text, css: $data.isActive ?  \'navigation-control-icon-active \' + $data.cssClass : $data.cssClass"></div>' +
        '   <!-- /ko -->' +
        '  <!-- ko ifnot: $data.hasText -->' +
        '  <div data-bind="cesiumSvgPath: { path: $data.svgIcon, width: $data.svgWidth, height: $data.svgHeight }, css: $data.isActive ?  \'navigation-control-icon-active \' + $data.cssClass : $data.cssClass"></div>' +
        '  <!-- /ko -->' +
        ' </div>' +
        ' <!-- /ko -->' +
        '</div>'
    } else if (this.enableZoomControls && !this.enableCompass) {
      testing =
        '<div class="compass"  style="display: none;" title="" data-bind="visible: showCompass, event: { mousedown: handleMouseDown, dblclick: handleDoubleClick }">' +
        '<div class="compass-outer-ring-background"></div>' +
        " <div class=\"compass-rotation-marker\" data-bind=\"visible: isOrbiting, style: { transform: 'rotate(-' + orbitCursorAngle + 'rad)', '-webkit-transform': 'rotate(-' + orbitCursorAngle + 'rad)', opacity: orbitCursorOpacity }, cesiumSvgPath: { path: svgCompassRotationMarker, width: 145, height: 145 }\"></div>" +
        " <div class=\"compass-outer-ring\" title=\"\" data-bind=\"style: { transform: 'rotate(-' + heading + 'rad)', '-webkit-transform': 'rotate(-' + heading + 'rad)' }, cesiumSvgPath: { path: svgCompassOuterRing, width: 145, height: 145 }\"></div>" +
        ' <div class="compass-gyro-background"></div>' +
        ' <div class="compass-gyro" data-bind="cesiumSvgPath: { path: svgCompassGyro, width: 145, height: 145 }, css: { \'compass-gyro-active\': isOrbiting }"></div>' +
        '</div>' +
        '<div class="navigation-controls"    >' +
        '<!-- ko foreach: controls -->' +
        "<div data-bind=\"click: activate, attr: { title: $data.name }, css: $root.isLastControl($data) ? 'navigation-control-last' : 'navigation-control' \">" +
        '   <!-- ko if: $data.hasText -->' +
        '   <div data-bind="text: $data.text, css: $data.isActive ?  \'navigation-control-icon-active \' + $data.cssClass : $data.cssClass"></div>' +
        '   <!-- /ko -->' +
        '  <!-- ko ifnot: $data.hasText -->' +
        '  <div data-bind="cesiumSvgPath: { path: $data.svgIcon, width: $data.svgWidth, height: $data.svgHeight }, css: $data.isActive ?  \'navigation-control-icon-active \' + $data.cssClass : $data.cssClass"></div>' +
        '  <!-- /ko -->' +
        ' </div>' +
        ' <!-- /ko -->' +
        '</div>'
    } else if (!this.enableZoomControls && !this.enableCompass) {
      testing =
        '<div class="compass"  style="display: none;" title="" data-bind="visible: showCompass, event: { mousedown: handleMouseDown, dblclick: handleDoubleClick }">' +
        '<div class="compass-outer-ring-background"></div>' +
        " <div class=\"compass-rotation-marker\" data-bind=\"visible: isOrbiting, style: { transform: 'rotate(-' + orbitCursorAngle + 'rad)', '-webkit-transform': 'rotate(-' + orbitCursorAngle + 'rad)', opacity: orbitCursorOpacity }, cesiumSvgPath: { path: svgCompassRotationMarker, width: 145, height: 145 }\"></div>" +
        " <div class=\"compass-outer-ring\" title=\"\" data-bind=\"style: { transform: 'rotate(-' + heading + 'rad)', '-webkit-transform': 'rotate(-' + heading + 'rad)' }, cesiumSvgPath: { path: svgCompassOuterRing, width: 145, height: 145 }\"></div>" +
        ' <div class="compass-gyro-background"></div>' +
        ' <div class="compass-gyro" data-bind="cesiumSvgPath: { path: svgCompassGyro, width: 145, height: 145 }, css: { \'compass-gyro-active\': isOrbiting }"></div>' +
        '</div>' +
        '<div class="navigation-controls"   style="display: none;" >' +
        '<!-- ko foreach: controls -->' +
        "<div data-bind=\"click: activate, attr: { title: $data.name }, css: $root.isLastControl($data) ? 'navigation-control-last' : 'navigation-control' \">" +
        '   <!-- ko if: $data.hasText -->' +
        '   <div data-bind="text: $data.text, css: $data.isActive ?  \'navigation-control-icon-active \' + $data.cssClass : $data.cssClass"></div>' +
        '   <!-- /ko -->' +
        '  <!-- ko ifnot: $data.hasText -->' +
        '  <div data-bind="cesiumSvgPath: { path: $data.svgIcon, width: $data.svgWidth, height: $data.svgHeight }, css: $data.isActive ?  \'navigation-control-icon-active \' + $data.cssClass : $data.cssClass"></div>' +
        '  <!-- /ko -->' +
        ' </div>' +
        ' <!-- /ko -->' +
        '</div>'
    }
    loadView(testing, container, this)
    // loadView(navigatorTemplate, container, this);
    // loadView(require('fs').readFileSync(baseURLEmpCesium + 'js-lib/terrajs/lib/Views/Navigation.html', 'utf8'), container, this);
  }
  /**
   * Adds a control to this toolbar.
   * @param {NavControl} control The control to add.
   */
  add (control) {
    this.controls.push(control)
  }
  /**
   * Removes a control from this toolbar.
   * @param {NavControl} control The control to remove.
   */
  remove (control) {
    this.controls.remove(control)
  }
  /**
   * Checks if the control given is the last control in the control array.
   * @param {NavControl} control The control to remove.
   */
  isLastControl (control) {
    return control === this.controls[this.controls.length - 1]
  }

  handleMouseDown (viewModel, e) {
    var scene = this.terria.scene
    if (scene.mode === Cesium.SceneMode.MORPHING) {
      return true
    }
    if (viewModel.navigationLocked) {
      return true
    }

    var compassElement = e.currentTarget
    var compassRectangle = e.currentTarget.getBoundingClientRect()
    var maxDistance = compassRectangle.width / 2.0
    var center = new Cesium.Cartesian2(
      (compassRectangle.right - compassRectangle.left) / 2.0,
      (compassRectangle.bottom - compassRectangle.top) / 2.0
    )
    var clickLocation = new Cesium.Cartesian2(
      e.clientX - compassRectangle.left,
      e.clientY - compassRectangle.top
    )
    var vector = Cesium.Cartesian2.subtract(clickLocation, center, vectorScratch)
    var distanceFromCenter = Cesium.Cartesian2.magnitude(vector)

    var distanceFraction = distanceFromCenter / maxDistance

    var nominalTotalRadius = 145
    var norminalGyroRadius = 50

    if (distanceFraction < norminalGyroRadius / nominalTotalRadius) {
      orbit(this, compassElement, vector)
      //            return false;
    } else if (distanceFraction < 1.0) {
      rotate(this, compassElement, vector)
      //            return false;
    } else {
      return true
    }
  }
  handleDoubleClick (viewModel, e) {
    var scene = viewModel.terria.scene
    var camera = scene.camera

    var sscc = scene.screenSpaceCameraController

    if (scene.mode === Cesium.SceneMode.MORPHING || !sscc.enableInputs) {
      return true
    }
    if (viewModel.navigationLocked) {
      return true
    }
    if (scene.mode === Cesium.SceneMode.COLUMBUS_VIEW && !sscc.enableTranslate) {
      return
    }
    if (scene.mode === Cesium.SceneMode.SCENE3D || scene.mode === Cesium.SceneMode.COLUMBUS_VIEW) {
      if (!sscc.enableLook) {
        return
      }

      if (scene.mode === Cesium.SceneMode.SCENE3D) {
        if (!sscc.enableRotate) {
          return
        }
      }
    }

    var center = Utils.getCameraFocus(viewModel.terria, true, centerScratch)

    if (!Cesium.defined(center)) {
      // Globe is barely visible, so reset to home view.

      this.controls[1].resetView()
      return
    }

    var cameraPosition = scene.globe.ellipsoid.cartographicToCartesian(
      camera.positionCartographic,
      new Cesium.Cartesian3()
    )

    var surfaceNormal = scene.globe.ellipsoid.geodeticSurfaceNormal(center)

    var focusBoundingSphere = new Cesium.BoundingSphere(center, 0)

    camera.flyToBoundingSphere(focusBoundingSphere, {
      offset: new Cesium.HeadingPitchRange(
        0,
        // do not use camera.pitch since the pitch at the center/target is required
        Cesium.Math.PI_OVER_TWO - Cesium.Cartesian3.angleBetween(surfaceNormal, camera.directionWC),
        // distanceToBoundingSphere returns wrong values when in 2D or Columbus view so do not use
        // camera.distanceToBoundingSphere(focusBoundingSphere)
        // instead calculate distance manually
        Cesium.Cartesian3.distance(cameraPosition, center)
      ),
      duration: 1.5
    })
  }

  static create (options) {
    // options.enableZoomControls = this.enableZoomControls;
    // options.enableCompass = this.enableCompass;
    var result = new NavigationViewModel(options)
    result.show(options.container)
    return result
  }
}

function orbit (viewModel, compassElement, cursorVector) {
  var scene = viewModel.terria.scene

  var sscc = scene.screenSpaceCameraController

  // do not orbit if it is disabled
  if (scene.mode === Cesium.SceneMode.MORPHING || !sscc.enableInputs) {
    return
  }
  if (viewModel.navigationLocked) {
    return true
  }

  switch (scene.mode) {
    case Cesium.SceneMode.COLUMBUS_VIEW:
      if (sscc.enableLook) {
        break
      }

      if (!sscc.enableTranslate || !sscc.enableTilt) {
        return
      }
      break
    case Cesium.SceneMode.SCENE3D:
      if (sscc.enableLook) {
        break
      }

      if (!sscc.enableTilt || !sscc.enableRotate) {
        return
      }
      break
    case Cesium.SceneMode.SCENE2D:
      if (!sscc.enableTranslate) {
        return
      }
      break
  }

  // Remove existing event handlers, if any.
  document.removeEventListener('mousemove', viewModel.orbitMouseMoveFunction, false)
  document.removeEventListener('mouseup', viewModel.orbitMouseUpFunction, false)

  if (Cesium.defined(viewModel.orbitTickFunction)) {
    viewModel.terria.clock.onTick.removeEventListener(viewModel.orbitTickFunction)
  }

  viewModel.orbitMouseMoveFunction = undefined
  viewModel.orbitMouseUpFunction = undefined
  viewModel.orbitTickFunction = undefined

  viewModel.isOrbiting = true
  viewModel.orbitLastTimestamp = Cesium.getTimestamp()

  var camera = scene.camera

  if (Cesium.defined(viewModel.terria.trackedEntity)) {
    // when tracking an entity simply use that reference frame
    viewModel.orbitFrame = undefined
    viewModel.orbitIsLook = false
  } else {
    var center = Utils.getCameraFocus(viewModel.terria, true, centerScratch)

    if (!Cesium.defined(center)) {
      viewModel.orbitFrame = Cesium.Transforms.eastNorthUpToFixedFrame(
        camera.positionWC,
        scene.globe.ellipsoid,
        newTransformScratch
      )
      viewModel.orbitIsLook = true
    } else {
      viewModel.orbitFrame = Cesium.Transforms.eastNorthUpToFixedFrame(
        center,
        scene.globe.ellipsoid,
        newTransformScratch
      )
      viewModel.orbitIsLook = false
    }
  }

  viewModel.orbitTickFunction = function (e) {
    var timestamp = Cesium.getTimestamp()
    var deltaT = timestamp - viewModel.orbitLastTimestamp
    var rate = ((viewModel.orbitCursorOpacity - 0.5) * 2.5) / 1000
    var distance = deltaT * rate

    var angle = viewModel.orbitCursorAngle + Cesium.Math.PI_OVER_TWO
    var x = Math.cos(angle) * distance
    var y = Math.sin(angle) * distance

    var oldTransform

    if (viewModel.navigationLocked) {
      return true
    }

    if (Cesium.defined(viewModel.orbitFrame)) {
      oldTransform = Cesium.Matrix4.clone(camera.transform, oldTransformScratch)

      camera.lookAtTransform(viewModel.orbitFrame)
    }

    // do not look up/down or rotate in 2D mode
    if (scene.mode === Cesium.SceneMode.SCENE2D) {
      camera.move(
        new Cesium.Cartesian3(x, y, 0),
        (Math.max(scene.canvas.clientWidth, scene.canvas.clientHeight) / 100) *
        camera.positionCartographic.height *
        distance
      )
    } else {
      if (viewModel.orbitIsLook) {
        camera.look(Cesium.Cartesian3.UNIT_Z, -x)
        camera.look(camera.right, -y)
      } else {
        camera.rotateLeft(x)
        camera.rotateUp(y)
      }
    }

    if (Cesium.defined(viewModel.orbitFrame)) {
      camera.lookAtTransform(oldTransform)
    }

    // viewModel.terria.cesium.notifyRepaintRequired();

    viewModel.orbitLastTimestamp = timestamp
  }

  function updateAngleAndOpacity (vector, compassWidth) {
    var angle = Math.atan2(-vector.y, vector.x)
    viewModel.orbitCursorAngle = Cesium.Math.zeroToTwoPi(angle - Cesium.Math.PI_OVER_TWO)

    var distance = Cesium.Cartesian2.magnitude(vector)
    var maxDistance = compassWidth / 2.0
    var distanceFraction = Math.min(distance / maxDistance, 1.0)
    var easedOpacity = 0.5 * distanceFraction * distanceFraction + 0.5
    viewModel.orbitCursorOpacity = easedOpacity

    // viewModel.terria.cesium.notifyRepaintRequired();
  }

  viewModel.orbitMouseMoveFunction = function (e) {
    var compassRectangle = compassElement.getBoundingClientRect()
    var center = new Cesium.Cartesian2(
      (compassRectangle.right - compassRectangle.left) / 2.0,
      (compassRectangle.bottom - compassRectangle.top) / 2.0
    )
    var clickLocation = new Cesium.Cartesian2(
      e.clientX - compassRectangle.left,
      e.clientY - compassRectangle.top
    )
    var vector = Cesium.Cartesian2.subtract(clickLocation, center, vectorScratch)
    updateAngleAndOpacity(vector, compassRectangle.width)
  }

  viewModel.orbitMouseUpFunction = function (e) {
    // TODO: if mouse didn't move, reset view to looking down, north is up?

    viewModel.isOrbiting = false
    document.removeEventListener('mousemove', viewModel.orbitMouseMoveFunction, false)
    document.removeEventListener('mouseup', viewModel.orbitMouseUpFunction, false)

    if (Cesium.defined(viewModel.orbitTickFunction)) {
      viewModel.terria.clock.onTick.removeEventListener(viewModel.orbitTickFunction)
    }

    viewModel.orbitMouseMoveFunction = undefined
    viewModel.orbitMouseUpFunction = undefined
    viewModel.orbitTickFunction = undefined
  }

  document.addEventListener('mousemove', viewModel.orbitMouseMoveFunction, false)
  document.addEventListener('mouseup', viewModel.orbitMouseUpFunction, false)
  viewModel.terria.clock.onTick.addEventListener(viewModel.orbitTickFunction)

  updateAngleAndOpacity(cursorVector, compassElement.getBoundingClientRect().width)
}

function rotate (viewModel, compassElement, cursorVector) {
  viewModel.terria.options.enableCompassOuterRing = Cesium.defined(
    viewModel.terria.options.enableCompassOuterRing
  )
    ? viewModel.terria.options.enableCompassOuterRing
    : true
  if (viewModel.terria.options.enableCompassOuterRing) {
    var scene = viewModel.terria.scene
    var camera = scene.camera

    var sscc = scene.screenSpaceCameraController
    // do not rotate in 2D mode or if rotating is disabled
    if (
      scene.mode === Cesium.SceneMode.MORPHING ||
      scene.mode === Cesium.SceneMode.SCENE2D ||
      !sscc.enableInputs
    ) {
      return
    }
    if (viewModel.navigationLocked) {
      return true
    }

    if (
      !sscc.enableLook &&
      (scene.mode === Cesium.SceneMode.COLUMBUS_VIEW ||
        (scene.mode === Cesium.SceneMode.SCENE3D && !sscc.enableRotate))
    ) {
      return
    }

    // Remove existing event handlers, if any.
    document.removeEventListener('mousemove', viewModel.rotateMouseMoveFunction, false)
    document.removeEventListener('mouseup', viewModel.rotateMouseUpFunction, false)

    viewModel.rotateMouseMoveFunction = undefined
    viewModel.rotateMouseUpFunction = undefined

    viewModel.isRotating = true
    viewModel.rotateInitialCursorAngle = Math.atan2(-cursorVector.y, cursorVector.x)

    if (Cesium.defined(viewModel.terria.trackedEntity)) {
      // when tracking an entity simply use that reference frame
      viewModel.rotateFrame = undefined
      viewModel.rotateIsLook = false
    } else {
      var viewCenter = Utils.getCameraFocus(viewModel.terria, true, centerScratch)

      if (
        !Cesium.defined(viewCenter) ||
        (scene.mode === Cesium.SceneMode.COLUMBUS_VIEW && !sscc.enableLook && !sscc.enableTranslate)
      ) {
        viewModel.rotateFrame = Cesium.Transforms.eastNorthUpToFixedFrame(
          camera.positionWC,
          scene.globe.ellipsoid,
          newTransformScratch
        )
        viewModel.rotateIsLook = true
      } else {
        viewModel.rotateFrame = Cesium.Transforms.eastNorthUpToFixedFrame(
          viewCenter,
          scene.globe.ellipsoid,
          newTransformScratch
        )
        viewModel.rotateIsLook = false
      }
    }

    var oldTransform
    if (Cesium.defined(viewModel.rotateFrame)) {
      oldTransform = Cesium.Matrix4.clone(camera.transform, oldTransformScratch)
      camera.lookAtTransform(viewModel.rotateFrame)
    }

    viewModel.rotateInitialCameraAngle = -camera.heading

    if (Cesium.defined(viewModel.rotateFrame)) {
      camera.lookAtTransform(oldTransform)
    }

    viewModel.rotateMouseMoveFunction = function (e) {
      var compassRectangle = compassElement.getBoundingClientRect()
      var center = new Cesium.Cartesian2(
        (compassRectangle.right - compassRectangle.left) / 2.0,
        (compassRectangle.bottom - compassRectangle.top) / 2.0
      )
      var clickLocation = new Cesium.Cartesian2(
        e.clientX - compassRectangle.left,
        e.clientY - compassRectangle.top
      )
      var vector = Cesium.Cartesian2.subtract(clickLocation, center, vectorScratch)
      var angle = Math.atan2(-vector.y, vector.x)

      var angleDifference = angle - viewModel.rotateInitialCursorAngle
      var newCameraAngle = Cesium.Math.zeroToTwoPi(
        viewModel.rotateInitialCameraAngle - angleDifference
      )

      var camera = viewModel.terria.scene.camera

      var oldTransform
      if (Cesium.defined(viewModel.rotateFrame)) {
        oldTransform = Cesium.Matrix4.clone(camera.transform, oldTransformScratch)
        camera.lookAtTransform(viewModel.rotateFrame)
      }

      var currentCameraAngle = -camera.heading
      camera.rotateRight(newCameraAngle - currentCameraAngle)

      if (Cesium.defined(viewModel.rotateFrame)) {
        camera.lookAtTransform(oldTransform)
      }

      // viewModel.terria.cesium.notifyRepaintRequired();
    }

    viewModel.rotateMouseUpFunction = function (e) {
      viewModel.isRotating = false
      document.removeEventListener('mousemove', viewModel.rotateMouseMoveFunction, false)
      document.removeEventListener('mouseup', viewModel.rotateMouseUpFunction, false)

      viewModel.rotateMouseMoveFunction = undefined
      viewModel.rotateMouseUpFunction = undefined
    }

    document.addEventListener('mousemove', viewModel.rotateMouseMoveFunction, false)
    document.addEventListener('mouseup', viewModel.rotateMouseUpFunction, false)
  }
}

export default NavigationViewModel
