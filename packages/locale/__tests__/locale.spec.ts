import { t, use } from '../index'
import zhCn from '../lang/zh-hans'
import en from '../lang/en-us'

describe('Locale', () => {
  test('t', () => {
    expect(t('vc.measure.distance')).toBe('距离')
  })

  test('use', () => {
    use(en)
    expect(t('vc.measure.distance')).toBe('Distance')
    use(zhCn)
  })
})
