import { Language } from '..'

export default {
  name: 'zh-hans',
  nativeName: '中文(简体)',
  vc: {
    loadError: '加载失败，必须作为 VcViewer 的子组件加载。',
    navigation: {
      compass: {
        outerTip: '旋转视图：顺/逆时针方向拖拽罗盘外环。\n重置视图：双击罗盘外环。',
        innerTip: '翻转视图：由内环向外环拖拽罗盘。\n 或者按住 Ctrl 键的同时拖拽地图。',
        title: '按住鼠标拖拽旋转相机。'
      },
      zoomCotrol: {
        zoomInTip: '放大',
        zoomResetTip: '重置视图',
        zoomOutTip: '缩小'
      },
      print: {
        printTip: '场景截图/打印',
        printViewTitle: '打印预览',
        credit: '地图版权',
        screenshot: '场景截图'
      },
      myLocation: {
        myLocationTip: '定位您的位置',
        positioning: '定位中...',
        fail: '定位失败',
        centreMap: '我的位置',
        lat: '纬度',
        lng: '经度',
        address: '地址'
      },
      statusBar: {
        lat: '纬度',
        lng: '经度',
        zone: '带号',
        e: 'X',
        n: 'Y',
        elev: '高程',
        level: '层级',
        heading: '方位',
        pitch: '俯仰',
        roll: '侧翻',
        cameraHeight: '视高',
        tip: '点击切换鼠标显示坐标为 UTM 投影坐标'
      }
    },
    measurement: {
      expand: '展开',
      collapse: '收拢',
      editor: {
        move: '移动节点',
        insert: '插入节点',
        remove: '移除节点',
        removeAll: '移除所有节点'
      },
      distance: {
        tip: '距离量算',
        drawingTipStart: '单击左键绘制距离量算起点。',
        drawingTipEnd: '单击左键绘制距离量算终点。',
        drawingTipEditing: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。'
      },
      'component-distance': {
        tip: '三角量算',
        drawingTipStart: '单击左键绘制三角量算起点。',
        drawingTipEnd: '单击左键绘制三角量算终点。',
        drawingTipEditing: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。'
      },
      polyline: {
        tip: '折线距离量算',
        drawingTipStart: '单击左键绘制第一个点。',
        drawingTipEnd: '单击左键绘制下一个点，双击左键结束量算。',
        drawingTipEditing: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。'
      },
      horizontal: {
        tip: '水平距离量算',
        drawingTipStart: '单击左键绘制第一个点。',
        drawingTipEnd: '单击左键绘制下一个点，双击左键结束量算。',
        drawingTipEditing: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。'
      },
      vertical: {
        tip: '垂直距离量算',
        drawingTipStart: '单击左键绘制垂直距离量算起点。',
        drawingTipEnd: '单击左键绘制垂直距离量算终点。',
        drawingTipEditing: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。'
      },
      height: {
        tip: '地表高度量算',
        drawingTipStart: '单击左键绘制高度量算点。',
        drawingTipEnd: '单击左键绘制高度量算点。',
        drawingTipEditing: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。'
      },
      area: {
        tip: '面积量算',
        drawingTipStart: '单击左键绘制第一个点。',
        drawingTipEnd: '点击左键绘制下一个点，双击左键结束量算。',
        drawingTipEditing: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。'
      },
      point: {
        tip: '坐标量算',
        drawingTipStart: '点击左键绘制坐标量算点。',
        drawingTipEnd: '点击左键绘制坐标量算点。',
        drawingTipEditing: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。',
        lng: '经度：',
        lat: '纬度：',
        height: '高度：',
        slope: '坡度：'
      },
      rectangle: {
        tip: '矩形量算',
        drawingTipStart: '单击左键绘制矩形量算起点。',
        drawingTipEnd: '单击左键绘制矩形量算终点。',
        drawingTipEditing: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。'
      },
      regular: {
        tip: '正多边形量算',
        drawingTipStart: '单击左键绘制正多边形量算起点。',
        drawingTipEnd: '单击左键绘制正多边形量算终点。',
        drawingTipEditing: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。'
      },
      circle: {
        tip: '圆形量算',
        drawingTipStart: '单击左键绘制圆形量算起点。',
        drawingTipEnd: '单击左键绘制圆形量算终点。',
        drawingTipEditing: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。'
      },
      clear: {
        tip: '清除量算结果'
      }
    },
    drawing: {
      expand: '展开',
      collapse: '收拢',
      editor: {
        move: '移动节点',
        insert: '插入节点',
        remove: '移除节点',
        removeAll: '移除所有节点'
      },
      pin: {
        tip: '绘制图标点',
        drawingTipStart: '点击左键绘制图标点。',
        drawingTipEnd: '点击左键绘制图标点。',
        drawingTipEditing: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。'
      },
      point: {
        tip: '绘制点',
        drawingTipStart: '点击左键绘制点。',
        drawingTipEnd: '点击左键绘制点。',
        drawingTipEditing: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。'
      },
      polyline: {
        tip: '绘制线',
        drawingTipStart: '单击左键绘制第一个点。',
        drawingTipEnd: '单击左键绘制下一个点，双击左键结束绘制。',
        drawingTipEditing: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。'
      },
      polygon: {
        tip: '绘制面',
        drawingTipStart: '单击左键绘制第一个点。',
        drawingTipEnd: '单击左键绘制下一个点，双击左键结束绘制。',
        drawingTipEditing: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。'
      },
      rectangle: {
        tip: '绘制矩形',
        drawingTipStart: '单击左键绘制矩形起点。',
        drawingTipEnd: '单击左键绘制矩形终点。',
        drawingTipEditing: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。'
      },
      circle: {
        tip: '绘制圆',
        drawingTipStart: '单击左键绘制圆形起点。',
        drawingTipEnd: '单击左键绘制圆形终点。',
        drawingTipEditing: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。'
      },
      regular: {
        tip: '绘制正多边形',
        drawingTipStart: '单击左键绘制正多边形起点。',
        drawingTipEnd: '单击左键绘制正多边形终点。',
        drawingTipEditing: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。'
      },
      clear: {
        tip: '清除绘制结果'
      }
    },
    analysis: {
      expand: '展开',
      collapse: '收拢',
      editor: {
        move: '移动节点',
        insert: '插入节点',
        remove: '移除节点',
        removeAll: '移除所有节点'
      },
      sightline: {
        tip: '通视分析',
        drawingTipStart: '单击左键绘制观测点。',
        drawingTipEnd: '单击左键绘制目标点，双击左键结束绘制。',
        drawingTipEditing: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。'
      },
      viewshed: {
        tip: '可视域分析',
        drawingTipStart: '单击左键绘制可视域分析起点。',
        drawingTipEnd: '单击左键绘制可视域分析终点。',
        drawingTipEditing: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。'
      },
      clear: {
        tip: '清除分析结果'
      }
    },
    overview: {
      show: '显示鹰眼',
      hidden: '隐藏鹰眼'
    }
  }
} as Language
