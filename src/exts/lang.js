import Vue from 'vue'

import langZh from '../../lang/zh-hans'

export default {
  install ($vc, lang) {
    this.set = (lang = langZh) => {
      lang.set = this.set
      lang.getLocale = this.getLocale
      lang.rtl = lang.rtl === true || false

      const el = document.documentElement
      el.setAttribute('dir', lang.rtl ? 'rtl' : 'ltr')
      el.setAttribute('lang', lang.isoName)

      if ($vc.lang !== void 0) {
        $vc.lang = lang
      } else {
        Vue.util.defineReactive($vc, 'lang', lang)
      }

      this.isoName = lang.isoName
      this.nativeName = lang.nativeName
      this.props = lang
    }

    this.set(lang)
  },

  getLocale () {
    let val =
      navigator.language ||
      navigator.languages[0] ||
      navigator.browserLanguage ||
      navigator.userLanguage ||
      navigator.systemLanguage

    if (val) {
      return val.toLowerCase()
    }
  }
}
