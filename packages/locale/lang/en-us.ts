export default {
  name: 'en-us',
  nativeName: 'English (US)',
  vc: {
    loadError: 'needs to be child of VcViewer',
    navigation: {
      compass: {
        outerTip: 'Drag outer ring: rotate view. Double-click: reset view.',
        innerTip: 'Drag inner gyroscope: free orbit. TIP: You can also free orbit by holding the CTRL key and dragging the map.',
        title: 'Click and drag to rotate the camera.'
      },
      zoomCotrol: {
        zoomInTip: 'Zoom in',
        zoomResetTip: 'Reset zoom',
        zoomOutTip: 'Zoom out'
      },
      print: {
        printTip: 'Viewer screenshot/print',
        printViewTitle: 'VueCesium Print View',
        credit: 'Map Credits',
        screenshot: 'Screenshot'
      },
      myLocation: {
        myLocationTip: 'Centre map at your current location',
        positioning: 'Positioning...',
        fail: 'Positioning failed',
        centreMap: 'My Location',
        lat: 'Lat',
        lng: 'Lng',
        address: 'Address'
      },
      statusBar: {
        lat: 'Lat',
        lng: 'Lng',
        zone: 'ZONE',
        e: 'E',
        n: 'N',
        elev: 'Elev',
        level: 'Level',
        heading: 'H',
        pitch: 'P',
        roll: 'R',
        cameraHeight: 'CameraH',
        tip: 'Click to switch the mouse display coordinates to UTM projection coordinates'
      }
    },
    measurement: {
      expand: 'Expand',
      collapse: 'Collapse',
      editor: {
        move: 'Move the point',
        insert: 'Insert a point',
        remove: 'Remove the point',
        removeAll: 'Remove all the points'
      },
      distance: {
        tip: 'Distance',
        drawTip1: 'Click the left button to draw the starting point of the distance measurement.',
        drawTip2: 'Click the left mouse button to draw the end point of the distance measurement.',
        drawTip3:
          'Move the mouse to modify the node, click the left button to confirm the modification,\nand click the right button to discard the modification.'
      },
      componentDistance: {
        tip: 'Component Distance',
        drawTip1: 'Click the left mouse button to draw the starting point of component distance measurement.',
        drawTip2: 'Click the left mouse button to draw the end point of the component distance measurement.',
        drawTip3:
          'Move the mouse to modify the node, click the left button to confirm the modification,\nand click the right button to discard the modification.'
      },
      polyline: {
        tip: 'Polyline Distance',
        drawTip1: 'Click the left button to draw the first point.',
        drawTip2: 'Click the left button to draw the next point, and double-click the left button to end the measurement.',
        drawTip3:
          'Move the mouse to modify the node, click the left button to confirm the modification,\nand click the right button to discard the modification.'
      },
      horizontal: {
        tip: 'Horizontal Distance',
        drawTip1: 'Click the left button to draw the first point.',
        drawTip2: 'Click the left button to draw the next point, and double-click the left button to end the measurement.',
        drawTip3:
          'Move the mouse to modify the node, click the left button to confirm the modification,\nand click the right button to discard the modification.'
      },
      vertical: {
        tip: 'Vertical Distance',
        drawTip1: 'Click the left button to draw the starting point of the vertical distance measurement.',
        drawTip2: 'Click the left button to draw the end point of the vertical distance measurement.',
        drawTip3:
          'Move the mouse to modify the node, click the left button to confirm the modification,\nand click the right button to discard the modification.'
      },
      height: {
        tip: 'Height ',
        drawTip1: 'Click the left button to draw the height measurement point.',
        drawTip2: 'Click the left button to draw the height measurement point.',
        drawTip3:
          'Move the mouse to modify the node, click the left button to confirm the modification,\nand click the right button to discard the modification.'
      },
      area: {
        tip: 'Area',
        drawTip1: 'Click the left button to draw the first point.',
        drawTip2: 'Click the left button to draw the next point, and double-click the left button to end the measurement.',
        drawTip3:
          'Move the mouse to modify the node, click the left button to confirm the modification,\nand click the right button to discard the modification.'
      },
      point: {
        tip: 'Point Coordinate',
        drawTip1: 'Click the left button to draw the point coordinate measurement.',
        drawTip2: 'Click the left button to draw the point coordinate measurement.',
        drawTip3:
          'Move the mouse to modify the node, click the left button to confirm the modification,\nand click the right button to discard the modification.',
        lng: 'lng:',
        lat: 'lat:',
        height: 'height:',
        slope: 'slope:'
      },
      clear: {
        tip: 'Clear measurement results'
      }
    },
    drawing: {
      expand: 'Expand',
      collapse: 'Collapse',
      editor: {
        move: 'Move the point',
        insert: 'Insert a point',
        remove: 'Remove the point',
        removeAll: 'Remove all the points'
      },
      point: {
        tip: 'Drawing point',
        drawTip1: 'Click the left button to draw a point.',
        drawTip2: 'Click the left button to draw a point.',
        drawTip3:
          'Move the mouse to modify the node, click the left button to confirm the modification,\nand click the right button to discard the modification.'
      },
      polyline: {
        tip: 'Drawing polyline',
        drawTip1: 'Click the left button to draw the first point.',
        drawTip2: 'Click the left button to draw the next point, and double-click the left button to end the drawing.',
        drawTip3:
          'Move the mouse to modify the node, click the left button to confirm the modification,\nand click the right button to discard the modification.'
      },
      polygon: {
        tip: 'Drawing polygon',
        drawTip1: 'Click the left button to draw the first point.',
        drawTip2: 'Click the left button to draw the next point, and double-click the left button to end the drawing.',
        drawTip3:
          'Move the mouse to modify the node, click the left button to confirm the modification,\nand click the right button to discard the modification.'
      },
      rectangle: {
        tip: 'Drawing rectangle',
        drawTip1: 'Click the left button to draw the starting point of the rectangle.',
        drawTip2: 'Click the left button to draw the end of the rectangle.',
        drawTip3:
          'Move the mouse to modify the node, click the left button to confirm the modification,\nand click the right button to discard the modification.'
      },
      circle: {
        tip: 'Drawing circle',
        drawTip1: 'Click the left button to draw the starting point of the circle.',
        drawTip2: 'Click the left button to draw the end of the circle.',
        drawTip3:
          'Move the mouse to modify the node, click the left button to confirm the modification,\nand click the right button to discard the modification.'
      }
    },
    overview: {
      show: 'Show',
      hidden: 'Hidden'
    }
  }
}
