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
    navigationSm: {
      compass: {
        outerTip: '旋转视图：顺/逆时针方向拖拽罗盘外环；重置视图：双击罗盘外环。',
      },
      zoomCotrol: {
        zoomInTip: '放大',
        zoomBarTip: '按住滑块向上放大，向下缩小。',
        zoomOutTip: '缩小'
      }
    },
    measurement: {
      expand: '展开',
      collapse: '收起',
      editor: {
        move: '移动节点',
        insert: '插入节点',
        remove: '移除节点',
        removeAll: '移除所有节点'
      },
      distance: {
        tip: '距离量算',
        drawTip1: '单击左键绘制距离量算起点。',
        drawTip2: '单击左键绘制距离量算终点。',
        drawTip3: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。',
      },
      componentDistance: {
        tip: '三角量算',
        drawTip1: '单击左键绘制三角量算起点。',
        drawTip2: '单击左键绘制三角量算终点。',
        drawTip3: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。',
      },
      polyline: {
        tip: '折线距离量算',
        drawTip1: '单击左键绘制第一个点。',
        drawTip2: '单击左键绘制下一个点，双击左键结束量算。',
        drawTip3: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。',
      },
      horizontal: {
        tip: '水平距离量算',
        drawTip1: '单击左键绘制第一个点。',
        drawTip2: '单击左键绘制下一个点，双击左键结束量算。',
        drawTip3: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。',
      },
      vertical: {
        tip: '垂直距离量算',
        drawTip1: '单击左键绘制垂直距离量算起点。',
        drawTip2: '单击左键绘制垂直距离量算终点。',
        drawTip3: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。',
      },
      height: {
        tip: '地表高度量算',
        drawTip1: '单击左键绘制高度量算点。',
        drawTip2: '单击左键绘制高度量算点。',
        drawTip3: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。',
      },
      area: {
        tip: '面积量算',
        drawTip1: '单击左键绘制第一个点。',
        drawTip2: '点击左键绘制下一个点，双击左键结束量算。',
        drawTip3: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。',
      },
      point: {
        tip: '坐标量算',
        drawTip1: '点击左键绘制坐标量算点。',
        drawTip2: '点击左键绘制坐标量算点。',
        drawTip3: '移动鼠标修改节点，单击左键确定修改，单击右键放弃修改。',
        lng: '经度：',
        lat: '纬度：',
        height: '高度：',
        slope: '坡度：'
      },
      clear:{
        tip: '清除量算结果'
      },
    },
    draw: {
      drawingTip1: '单击左键绘制起点。',
      drawingTip2: '单击左键绘制下一个点，单击右键结束绘制。',
      drawingTip3: '单击结束编辑。',
      editingMove: '移动节点',
      editingInsert: '插入节点',
      editingDelete: '删除节点'
    },
    overviewmap: {
      show: '显示鹰眼',
      hidden: '隐藏鹰眼'
    }
  }
}
