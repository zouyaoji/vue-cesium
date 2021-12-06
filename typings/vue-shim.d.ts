/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-13 22:43:29
 * @LastEditTime: 2021-12-06 10:42:57
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\typings\vue-shim.d.ts
 */
declare module '*.vue' {
  import { App, defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void
  }
  export default component
}
