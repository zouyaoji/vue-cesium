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
