<template>
  <svg :class="clazz" :style="style" :viewBox="box" @click="onClick" v-html="path" version="1.1" />
</template>

<script>
let icons = {}
let notLoadedIcons = []
let defaultWidth = ''
// eslint-disable-next-line no-unused-vars
let defaultHeight = ''
let classPrefix = 'vc-svg'
let isStroke = false
let isOriginalDefault = false

export default {
  name: 'svgicon',
  data () {
    return {
      loaded: false
    }
  },
  props: {
    icon: String,
    name: String,
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    scale: String,
    dir: String,
    fill: {
      type: Boolean,
      default: function () {
        return !isStroke
      }
    },
    color: String,
    original: {
      type: Boolean,
      default: function () {
        return isOriginalDefault
      }
    },
    title: String
  },

  computed: {
    clazz () {
      let clazz = `${classPrefix}-icon`

      if (this.fill) {
        clazz += ` ${classPrefix}-fill`
      }

      if (this.dir) {
        clazz += ` ${classPrefix}-${this.dir}`
      }

      return clazz
    },

    iconName () {
      return this.name || this.icon
    },

    iconData () {
      let iconData = icons[this.iconName]
      if (iconData || this.loaded) {
        return iconData
      }

      return null
    },

    colors () {
      if (this.color) {
        return this.color.split(' ')
      }
      return []
    },

    path () {
      let pathData = ''
      if (this.iconData) {
        pathData = this.iconData.data

        pathData = this.setTitle(pathData)

        // use original color
        if (this.original) {
          pathData = this.addOriginalColor(pathData)
        }

        if (this.colors.length > 0) {
          pathData = this.addColor(pathData)
        }
      } else {
        // if no iconData, push to notLoadedIcons
        notLoadedIcons.push({
          name: this.iconName,
          component: this
        })
      }

      return this.getValidPathData(pathData)
    },

    box () {
      let width = this.width || 16
      let height = this.width || 16

      if (this.iconData) {
        if (this.iconData.viewBox) {
          return this.iconData.viewBox
        }
        return `0 0 ${this.iconData.width} ${this.iconData.height}`
      }

      return `0 0 ${parseFloat(width)} ${parseFloat(height)}`
    },

    style () {
      let digitReg = /^\d+$/
      let scale = Number(this.scale)
      let width
      let height

      // apply scale
      if (!isNaN(scale) && this.iconData) {
        width = Number(this.iconData.width) * scale + 'px'
        height = Number(this.iconData.height) * scale + 'px'
      } else {
        width = digitReg.test(this.width)
          ? this.width + 'px'
          : this.width || defaultWidth
        height = digitReg.test(this.height)
          ? this.height + 'px'
          : this.height || defaultWidth
      }

      let style = {}

      if (width) {
        style.width = width
      }

      if (height) {
        style.height = height
      }
      return style
    }
  },

  created () {
    if (icons[this.iconName]) {
      this.loaded = true
    }
  },

  methods: {
    addColor (data) {
      let reg = /<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi
      let i = 0
      return data.replace(reg, match => {
        let color =
          this.colors[i++] || this.colors[this.colors.length - 1]
        let fill = this.fill

        // if color is '_', ignore it
        if (color && color === '_') {
          return match
        }

        // if color start with 'r-', reverse the fill value
        if (color && color.indexOf('r-') === 0) {
          fill = !fill
          color = color.split('r-')[1]
        }

        let style = fill ? 'fill' : 'stroke'
        let reverseStyle = fill ? 'stroke' : 'fill'
        return match + `${style}="${color}" ${reverseStyle}="none" `
      })
    },

    addOriginalColor (data) {
      let styleReg = /_fill="|_stroke="/gi
      return data.replace(styleReg, styleName => {
        return styleName && styleName.slice(1)
      })
    },

    getValidPathData (pathData) {
      // If use original and colors, clear double fill or stroke
      if (this.original && this.colors.length > 0) {
        // eslint-disable-next-line no-useless-escape
        let reg = /<(path|rect|circle|polygon|line|polyline|ellipse)(\sfill|\sstroke)([="\w\s\.\-\+#\$\&>]+)(fill|stroke)/gi
        pathData = pathData.replace(reg, (match, p1, p2, p3, p4) => {
          return `<${p1}${p2}${p3}_${p4}`
        })
      }

      return pathData
    },

    setTitle (pathData) {
      if (this.title) {
        let title = this.title
          // eslint-disable-next-line no-useless-escape
          .replace(/\</gi, '&lt;')
          .replace(/>/gi, '&gt;')
          .replace(/&/g, '&amp;')
        return `<title>${title}</title>` + pathData
      }
      return pathData
    },

    onClick (e) {
      this.$emit('click', e)
    }
  },

  install (Vue, options = {}) {
    let tagName = options.tagName || 'svgicon'

    if (options.classPrefix) {
      classPrefix = options.classPrefix
    }

    isStroke = !!options.isStroke
    isOriginalDefault = !!options.isOriginalDefault

    // default size
    options.defaultWidth && (defaultWidth = options.defaultWidth)
    options.defaultHeight && (defaultHeight = options.defaultHeight)

    Vue.component(tagName, this)
  },

  // register icons
  register (data) {
    for (let name in data) {
      if (!icons[name]) {
        icons[name] = data[name]
      }

      // check new register icon is not loaded, and set loaded to true
      notLoadedIcons = notLoadedIcons.filter((v, ix) => {
        if (v.name === name) {
          v.component.$set(v.component, 'loaded', true)
        }

        return v.name !== name
      })
    }
  },

  icons
}
</script>

<style lang="scss" scoped>
.vc-svg-icon {
  display: block;
}
</style>
