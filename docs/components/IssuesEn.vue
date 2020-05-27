<template lang="pug">
md-layout.issues
  md-layout.issues-card
    md-dialog-alert(
      md-content="The form information is incomplete!"
      md-ok-text="Ok"
      ref="dialog")
    md-whiteframe
      md-tabs(@change="changeType")
        md-tab(:md-label="type.label" :key="index" v-for="(type,index) in formTypes")
          form
            md-input-container(:key="'input' + index" v-for="item,index in type.items")
              label(v-text="item.label")
              md-input(v-if="item.type === 'input'" v-model="formData[type.name][item.name]", :required="true")
              md-textarea(v-if="item.type === 'textarea'" v-model="formData[type.name][item.name]")
            md-button.md-raised.md-primary(@click="openIssue") Submit
  md-layout.issues-card
    md-whiteframe
      md-toolbar
        span.md-title Preview
      article.md-preview.markdown-body(v-html="preview")
</template>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt({
  html: true
})

const formTypes = {
  bug: {
    label: 'BUG Feedback',
    items: {
      browserVer: 'Browser',
      depVer: 'Vue Version',
      packageVer: 'VueCesium Version',
      description: {
        label: 'Problem Description',
        type: 'textarea'
      },
      errMsg: {
        label: 'Complete exception information',
        type: 'textarea'
      },
      demo: 'Online example / github URL',
      code: {
        label: 'Code to reproduce the issue',
        type: 'textarea'
      },
      expect: {
        label: 'Expected results',
        type: 'textarea'
      },
      output: {
        label: 'Actual results',
        type: 'textarea'
      }
    }
  },
  featrue: {
    label: 'Feature request',
    items: {
      demo: 'Online sample URL',
      description: {
        label: 'Description',
        type: 'textarea'
      },
      usage: {
        label: 'Example usage',
        type: 'textarea'
      }
    }
  },
  documentation: {
    label: 'Documentation issues',
    items: {
      url: 'Related document URL',
      description: {
        label: 'Description',
        type: 'textarea'
      },
      suggestion: {
        label: 'Suggestions for Improvement',
        type: 'textarea'
      }
    }
  }
}

const typesOrder = [
  {
    name: 'bug',
    items: [
      'browserVer',
      'depVer',
      'packageVer',
      'description',
      'errMsg',
      'demo',
      'code',
      'expect',
      'output'
    ]
  },
  {
    name: 'featrue',
    items: [
      'demo',
      'description',
      'usage'
    ]
  },
  {
    name: 'documentation',
    items: [
      'url',
      'description',
      'suggestion'
    ]
  }
]

export default {
  data () {
    const types = []
    const formData = {
      common: {},
      bug: {},
      featrue: {},
      documentation: {}
    }
    typesOrder.forEach(type => {
      const typeDetail = {
        name: type.name,
        label: formTypes[type.name].label,
        items: []
      }
      typeDetail.items.push({
        name: 'title',
        label: 'ISSUE Title',
        type: 'input'
      })
      type.items.forEach(name => {
        typeDetail.items.push({
          name,
          label: formTypes[type.name].items[name].label || formTypes[type.name].items[name],
          type: formTypes[type.name].items[name].type || 'input'
        })
        formData[type.name][name] = ''
      })
      types.push(typeDetail)
    })
    return {
      issueType: 0,
      formTypes: types,
      formData
    }
  },
  methods: {
    changeType (i) {
      this.issueType = i
    },
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    openIssue () {
      let isValid = true
      const { issueType, content, formTypes, formData, openDialog } = this
      const data = formData[formTypes[issueType].name]
      for (const key in data) {
        if (!data[key]) {
          isValid = false
        }
      }
      const url = 'https://github.com/zouyaoji/vue-cesium/issues/new?title=' + encodeURIComponent(data.title) + '&body=' + encodeURIComponent(content)
      isValid ? global.open(url) : openDialog('dialog')
    }
  },
  computed: {
    content () {
      let lines = []
      const { formTypes, issueType, formData } = this
      const formType = formTypes[issueType]
      formType.items.forEach(item => {
        if (item.name === 'title') {
          lines.push(`## [${formType.label}] ${formData[formType.name][item.name] || ''}`)
          lines.push('')
        } else {
          lines.push(`### ${item.label}`)
          lines.push('')
          if (item.type === 'textarea') {
            lines.push('```')
            lines.push(`${formData[formType.name][item.name]}`)
            lines.push('```')
          } else {
            lines.push(`${formData[formType.name][item.name]}`)
          }
          lines.push('')
        }
      })
      lines.push(`<!-- Created by issues bot. DO NOT REMOVE. -->`)
      return lines.join('\n')
    },
    preview () {
      return md.render(this.content)
    }
  }
}
</script>

<style lang="stylus">
.issues {
  .issues-card {
    padding: 20px 10px;
    flex: 1;

    .md-whiteframe {
      flex: 1;
    }
  }

  .md-preview {
    display: block;
    flex: 1;
    padding: 10px;

    pre {
      background: #eee;
    }
  }

  .doc {
    padding: 0;
  }
}
</style>
