
/**
 * 加载Mars3D平台CDN资源文件，
 * 这些文件可以从  http://mars3d.cn/download/lib.rar  下载后放在本地项目目录引入。
 * @param {string} libpath 根目录，如：http://mars3d.cn/lib/
 * @return {*}
 */
export function getMars3dConfig(libpath: string) {
  const libsConfig = {
    'font-awesome': [
      libpath + 'fonts/font-awesome/css/font-awesome.min.css',
    ],
    'haoutil': [
      libpath + 'hao/haoutil.js'
    ],
    'turf': [
      libpath + 'turf/turf.min.js'
    ],
    'mars3d-space': [
      //卫星插件
      libpath + 'mars3d/plugins/space/mars3d-space.js',
    ],
    'mars3d-echarts': [
      //echarts支持插件
      libpath + 'echarts/echarts.min.js',
      libpath + 'echarts/echarts-gl.min.js',
      libpath + 'mars3d/plugins/echarts/mars3d-echarts.js',
    ],
    'mars3d-mapv': [
      //mapv支持插件
      libpath + 'mapV/mapv.min.js',
      libpath + 'mars3d/plugins/mapv/mars3d-mapv.js',
    ],
    'mars3d-heatmap': [
      //heatmap热力图支持插件
      libpath + 'mars3d/plugins/heatmap/heatmap.min.js',
      libpath + 'mars3d/plugins/heatmap/mars3d-heatmap.js',
    ],
    'mars3d-wind': [//风场图层插件
      libpath + 'mars3d/plugins/wind/netcdfjs.js', //m10_windLayer解析nc
      libpath + 'mars3d/plugins/wind/mars3d-wind.js'
    ],
    'mars3d': [
      //三维地球“主库”
      libpath + 'Cesium/Widgets/widgets.css', //cesium
      libpath + 'Cesium/Cesium.js',
      libpath + 'mars3d/mars3d.css', //mars3d
      libpath + 'mars3d/mars3d.js',
    ]
  }
  return libsConfig
}
