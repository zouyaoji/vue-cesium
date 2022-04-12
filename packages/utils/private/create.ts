/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-11 22:55:34
 * @LastEditTime: 2022-04-11 22:55:34
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\utils\private\create.js
 */
import { defineComponent, markRaw } from 'vue'

export const createComponent = raw => markRaw(defineComponent(raw))
export const createDirective = raw => markRaw(raw)
