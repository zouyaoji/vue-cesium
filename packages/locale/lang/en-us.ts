export default {
  name: 'en-us',
  nativeName: 'English (US)',
  vc: {
    loadError: 'needs to be child of VcViewer',
    measure: {
      distance: 'Distance',
      area: 'Area',
      horizontalDistance: 'HD',
      spaceDistance: 'SD',
      verticalHeight: 'VH'
    },
    draw: {
      drawingTip1: 'Click the left button to draw the starting point.',
      drawingTip2: 'Click the left button to draw the next point, and click the right button to end the drawing.',
      drawingTip3: 'Click to end editing.',
      editingMove: 'Move',
      editingInsert: 'Insert',
      editingDelete: 'Delete'
    },
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
      locationbar: {
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
      },
    },
    navigationSm: {
      compass: {
        outerTip: 'Drag outer ring: rotate view. Double-click: reset view.',
      },
      zoomCotrol: {
        zoomInTip: 'Zoom in',
        zoomBarTip: 'Drag the bar up to zoom in, and down to zoom out.',
        zoomOutTip: 'Zoom out'
      }
    },
    overviewmap: {
      show: 'Show',
      hidden: 'Hidden'
    }
  }
}
