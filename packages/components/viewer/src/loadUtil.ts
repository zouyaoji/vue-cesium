/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-04 15:55:24
 * @LastEditTime: 2026-02-03 15:34:27
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium\packages\components\viewer\src\loadUtil.ts
 */
/**
 * 加载Mars3D平台CDN资源文件，
 * 这些文件可以从  http://mars3d.cn/download/lib.rar  下载后放在本地项目目录引入。
 * 20220803 改为 cdn 资源
 * @returns {Record<string,string[]>} A mapping of library keys to CDN resource URLs.
 */
export function getMars3dConfig() {
  const libsConfig = {
    'font-awesome': [
      // libpath + 'fonts/font-awesome/css/font-awesome.min.css'
      'https://unpkg.com/font-awesome@latest/css/font-awesome.min.css'
    ],
    'haoutil': [
      // libpath + 'hao/haoutil.js'
      'https://unpkg.com/haoutil@latest/dist/haoutil-src.js'
    ],
    'turf': [
      // libpath + 'turf/turf.min.js'
      'https://unpkg.com/@turf/turf@latest/turf.min.js'
    ],
    'mars3d-space': [
      // 卫星插件
      // libpath + 'mars3d/plugins/space/mars3d-space.js'
      'https://unpkg.com/mars3d-space@latest/mars3d-space.js'
    ],
    'mars3d-echarts': [
      // echarts支持插件
      // libpath + 'echarts/echarts.min.js',
      'https://unpkg.com/echarts@latest/dist/echarts.min.js',
      // libpath + 'echarts/echarts-gl.min.js',
      'https://unpkg.com/echarts-gl@latest/dist/echarts-gl.min.js',
      // libpath + 'mars3d/plugins/echarts/mars3d-echarts.js'
      'https://unpkg.com/mars3d-echarts@latest/mars3d-echarts.js'
    ],
    'mars3d-mapv': [
      // mapv支持插件
      // libpath + 'mapV/mapv.min.js',
      'https://unpkg.com/mapv@latest/build/mapv.min.js',
      // libpath + 'mars3d/plugins/mapv/mars3d-mapv.js'
      'https://unpkg.com/mars3d-mapv@latest/mars3d-mapv.js'
    ],
    'mars3d-heatmap': [
      // heatmap热力图支持插件
      // libpath + 'mars3d/plugins/heatmap/heatmap.min.js',
      'https://unpkg.com/heatmapjs@latest/heatmap.min.js',
      // libpath + 'mars3d/plugins/heatmap/mars3d-heatmap.js'
      'https://unpkg.com/mars3d-heatmap@latest/mars3d-heatmap.js'
    ],
    'mars3d-wind': [
      // 风场图层插件
      // libpath + 'mars3d/plugins/wind/netcdfjs.js', //m10_windLayer解析nc
      'https://unpkg.com/netcdfjs@latest/lib/index.js',
      // libpath + 'mars3d/plugins/wind/mars3d-wind.js'
      'https://unpkg.com/mars3d-wind@latest/mars3d-wind.js'
    ],
    'mars3d-tdt': ['https://unpkg.com/mars3d-tdt@latest/mars3d-tdt.js'],
    'mars3d-widget': ['https://unpkg.com/mars3d-widget@latest/mars3d-widget.js'],
    'mars3d': [
      // 三维地球“主库”
      // libpath + 'Cesium/Widgets/widgets.css', //cesium
      'https://unpkg.com/mars3d-cesium@latest/Build/Cesium/Widgets/widgets.css',
      // libpath + 'Cesium/Cesium.js',
      'https://unpkg.com/mars3d-cesium@latest/Build/Cesium/Cesium.js',
      // libpath + 'mars3d/mars3d.css', //mars3d
      'https://unpkg.com/mars3d@latest/mars3d.css',
      // libpath + 'mars3d/mars3d.js'
      'https://unpkg.com/mars3d@latest/mars3d.js'
    ]
  }
  return libsConfig
}
