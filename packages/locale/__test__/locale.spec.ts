/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-13 22:43:29
 * @LastEditTime: 2023-04-14 00:49:29
 * @LastEditors: tbayri yo@tayebbayri.com
 * @Description:
 * @FilePath: \vue-cesium\packages\locale\__test__\locale.spec.ts
 */
import { t, use } from '../index'
import zhCn from '../lang/zh-hans'
import en from '../lang/en-us'
import fr from '../lang/fr-fr'
import { describe, expect, test } from 'vitest'

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

    use(fr)
    expect(t('vc.navigation.compass.title')).toBe('Cliquer et faire glisser pour pivoter la caméra.')
    use(zhCn)
  })
})
