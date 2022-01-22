/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-13 22:43:29
 * @LastEditTime: 2022-01-11 15:54:44
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\typings\vue-shim.d.ts
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
