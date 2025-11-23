/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-08 17:54:15
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-08 17:54:27
 * @FilePath: \vue-cesium\build\build.config.ts
 */
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['index'],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
})
