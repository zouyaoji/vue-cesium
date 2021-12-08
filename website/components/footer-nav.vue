<template>
  <div class="footer-nav">
    <div class="page-footer">
      {{ caughtMistake }}
      <app-link :href="href">
        {{ editOnGithub }}
      </app-link>
    </div>
    <div class="next-and-prev-link" style="padding-top: 1rem">
      <span v-if="leftNav" class="footer-nav-link footer-nav-left" @click="handleNavClick('prev')">
        <i class="el-icon-arrow-left"></i>
        {{ leftNav.title || leftNav.name }}
      </span>
      <span v-if="rightNav" class="footer-nav-link footer-nav-right" @click="handleNavClick('next')">
        {{ rightNav.title || rightNav.name }}
        <i class="el-icon-arrow-right"></i>
      </span>
    </div>
  </div>
</template>

<script>
import navConfig from '../nav.config.json'

export default {
  data() {
    return {
      currentComponent: null,
      nav: [],
      currentIndex: -1,
      leftNav: null,
      rightNav: null
    }
  },

  computed: {
    lang() {
      return this.$route.meta.lang
    },
    href: function () {
      return 'https://github.com/zouyaoji/vue-cesium/tree/dev/website/docs' + this.$route.path.replace('/component', '/') + '.md'
    },
    caughtMistake: function () {
      return this.lang === 'zh-CN' ? '发现错误？' : 'Caught a mistake?'
    },
    editOnGithub: function () {
      return this.lang === 'zh-CN' ? '在 GitHub 上编辑此页！' : 'Edit this page on GitHub!'
    }
  },

  watch: {
    '$route.path'() {
      this.setNav()
      this.updateNav()
    }
  },

  created() {
    console.log(this)
    this.setNav()
    this.updateNav()
  },

  methods: {
    setNav() {
      let nav = navConfig[this.lang]
      this.nav = [nav[0]].concat(nav[2].children)
      nav[3].groups
        .map(group => group.list)
        .forEach(list => {
          this.nav = this.nav.concat(list)
        })
    },

    updateNav() {
      this.currentComponent = '/' + this.$route.path.split('/')[3]
      for (let i = 0, len = this.nav.length; i < len; i++) {
        if (this.nav[i].path === this.currentComponent) {
          this.currentIndex = i
          break
        }
      }
      this.leftNav = this.nav[this.currentIndex - 1]
      this.rightNav = this.nav[this.currentIndex + 1]
    },

    handleNavClick(direction) {
      this.$router.push(`/${this.lang}/component${direction === 'prev' ? this.leftNav.path : this.rightNav.path}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.footer-nav {
  padding: 40px 0;
  color: #333;
  font-size: 14px;

  &::after {
    content: '';
    display: block;
    clear: both;
  }

  & i {
    transition: 0.3s;
    color: #999;
    vertical-align: baseline;
  }
}

.footer-nav-link {
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #409eff;

    & i {
      color: #409eff;
    }
  }
}

.footer-nav-left {
  float: left;
  margin-left: -4px;
}

.footer-nav-right {
  float: right;
  margin-right: -4px;
}
</style>
