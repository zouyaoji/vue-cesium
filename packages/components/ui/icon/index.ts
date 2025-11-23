import type { ComponentPublicInstance, CSSProperties, VNode } from 'vue'
import useSize, { useSizeProps } from '@vue-cesium/composables/private/use-size'
import { hMergeSlot, hSlot } from '@vue-cesium/utils/private/render'
import { computed, defineComponent, h } from 'vue'

export const iconProps = {
  ...useSizeProps,

  tag: {
    type: String,
    default: 'i'
  },

  name: String,
  color: String,
  hoverColor: String,
  left: Boolean,
  right: Boolean
}
export default defineComponent({
  name: 'VcIcon',
  props: iconProps,
  setup(props: VcIconProps, { slots }) {
    const sizeStyle = useSize(props)
    const style = computed(() => {
      const css: CSSProperties | null = sizeStyle.value
      if (!css) {
        return undefined
      }
      props.color && (css.color = props.color)
      props.hoverColor && (css['--hover-color'] = props.hoverColor)
      return css
    })

    const classes = computed(
      () =>
        `vc-icon${
          props.left === true ? ' on-left' : ''
        }${props.right === true ? ' on-right' : ''
        }${props.color !== void 0 ? ` text-${props.color}` : ''}`
    )

    const type = computed(() => {
      let cls
      let icon = props.name

      if (!icon) {
        return {
          none: true,
          cls: classes.value
        }
      }

      if (icon.startsWith('M') === true) {
        const [def, viewBox] = icon.split('|')

        return {
          svg: true,
          cls: classes.value,
          nodes: def.split('&&').map((path) => {
            const [d, style, transform] = path.split('@@')
            return h('path', {
              style,
              d,
              transform
            })
          }),
          viewBox: viewBox !== void 0 ? viewBox : '0 0 24 24'
        }
      }

      if (icon.startsWith('img:') === true) {
        return {
          img: true,
          cls: classes.value,
          src: icon.substring(4)
        }
      }

      if (icon.startsWith('svguse:') === true) {
        const [def, viewBox] = icon.split('|')

        return {
          svguse: true,
          cls: classes.value,
          src: def.substring(7),
          viewBox: viewBox !== void 0 ? viewBox : '0 0 24 24'
        }
      }

      let content = ' '

      if (/^[l|f]a[s|rlbd]? /.test(icon) || icon.startsWith('icon-') === true) {
        cls = icon
      }
      else if (icon.startsWith('bt-') === true) {
        cls = `bt ${icon}`
      }
      else if (icon.startsWith('eva-') === true) {
        cls = `eva ${icon}`
      }
      else if (/^ion-(?:md|ios|logo)/.test(icon) === true) {
        cls = `ionicons ${icon}`
      }
      else if (icon.startsWith('ion-') === true) {
        cls = `ionicons ion-md${icon.substr(3)}`
      }
      else if (icon.startsWith('mdi-') === true) {
        cls = `mdi ${icon}`
      }
      else if (icon.startsWith('iconfont ') === true) {
        cls = `${icon}`
      }
      else if (icon.startsWith('ti-') === true) {
        cls = `themify-icon ${icon}`
      }
      else if (icon.startsWith('vc-') === true) {
        cls = `vc-icons ${icon}`
      }
      else {
        // "notranslate" class is for Google Translate
        // to avoid tampering with Material Icons ligature font
        //
        // Caution: To be able to add suffix to the class name,
        // keep the 'material-icons' at the end of the string.
        cls = 'notranslate material-icons'

        if (icon.startsWith('o_') === true) {
          icon = icon.substring(2)
          cls += '-outlined'
        }
        else if (icon.startsWith('r_') === true) {
          icon = icon.substring(2)
          cls += '-round'
        }
        else if (icon.startsWith('s_') === true) {
          icon = icon.substring(2)
          cls += '-sharp'
        }

        content = icon
      }

      return {
        cls: `${cls} ${classes.value}`,
        content
      }
    })

    return () => {
      const data = {
        'class': type.value.cls,
        'style': style.value,
        'aria-hidden': 'true',
        'role': 'presentation',
        'viewBox': '',
        'src': ''
      }

      if (type.value.none === true) {
        return h(props.tag, data, hSlot(slots.default))
      }

      if (type.value.img === true) {
        data.src = type.value.src
        if (data.style) {
          data.style.width = data.style.fontSize
          data.style.height = data.style.fontSize
        }
        return h('img', data)
      }

      if (type.value.svg === true) {
        data.viewBox = type.value.viewBox
        data['aria-hidden'] = 'true'

        if (data.style) {
          data.style.width = data.style.fontSize
          data.style.height = data.style.fontSize
        }

        return h('svg', data, hMergeSlot(slots.default, type.value.nodes))
      }

      if (type.value.svguse === true) {
        data.viewBox = type.value.viewBox
        data['aria-hidden'] = 'true'

        if (data.style) {
          data.style.width = data.style.fontSize
          data.style.height = data.style.fontSize
        }
        return h('svg', data, hMergeSlot(slots.default, [h('use', { 'xlink:href': type.value.src })]))
      }

      return h(props.tag, data, hMergeSlot(slots.default, [type.value.content]))
    }
  }
})

export interface VcIconProps {
  /**
   * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl).
   */
  size?: string
  /**
   * HTML tag to render, unless no icon is supplied or it's an svg icon.
   * Default value: i
   */
  tag?: string
  /**
   * Name of the icon, following VueCesium convention.
   */
  name?: string
  /**
   * Color name for component from the css color palette.
   */
  color?: string
  hoverColor?: string
  /**
   * Useful if icon is on the left side of something: applies a standard margin on the right side of Icon.
   */
  left?: boolean
  /**
   * Useful if icon is on the right side of something: applies a standard margin on the left side of Icon.
   */
  right?: boolean
}

export interface VcIconSlots {
  /**
   * Suggestions: VcTooltip
   */
  default: () => VNode[]
}

export type VcIconRef = ComponentPublicInstance<VcIconProps>
