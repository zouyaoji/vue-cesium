/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-13 22:43:29
 * @LastEditTime: 2022-02-10 10:52:32
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\locale\__test__\locale.spec.ts
 */
import { t, use } from '../index'
import zhCn from '../lang/zh-hans'
import en from '../lang/en-us'

describe('Locale', () => {
  test('t', () => {
    expect(t('vc.navigation.compass.title')).toBe('按住鼠标拖拽旋转相机。')
  })

  test('return key name if not defined', () => {
    expect(t('vc.navigation.compass.someThing')).toBeUndefined()
  })

  test('use', () => {
    use(en)
    expect(t('vc.navigation.compass.title')).toBe('Click and drag to rotate the camera.')
    use(zhCn)
  })
})
