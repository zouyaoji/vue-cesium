<template>
  <div class="page-donations">
    <div class="heading">
      {{ langConfig[1] }}
    </div>
    <ul ref="timeline" class="timeline"></ul>
    <donations-cn v-if="lang === 'zh-CN'" ref="donations" />
    <donations-en v-if="lang === 'en-US'" ref="donations" />
  </div>
</template>
<script>
import DonationsCn from '../docs/zh-CN/donations.md'
import DonationsEn from '../docs/en-US/donations.md'
import pageLang from '../i18n/page.json'
export default {
  components: {
    DonationsCn,
    DonationsEn
  },
  data() {
    return {
      lang: this.$route.meta.lang
    }
  },
  computed: {
    langConfig() {
      return pageLang.filter(config => config.lang === this.lang)[0].pages.donations
    }
  },
  mounted() {
    const donations = this.$refs.donations
    const donationsNodes = donations.$el.children
    let a = donationsNodes[1].querySelector('a')
    a && a.remove()
    let release = donationsNodes[1].textContent.trim()
    // let fragments = `<li><h3><a href="https://github.com/zouyaoji/vue-cesium/releases/tag/v${release}" target="_blank">${release}</a></h3>`
    let fragments = `<li><h3>${release}</h3>`

    for (let len = donationsNodes.length, i = 2; i < len; i++) {
      let node = donationsNodes[i]
      a = donationsNodes[i].querySelector('a')
      a && a.getAttribute('class') === 'header-anchor' && a.remove()
      if (node.tagName !== 'H3') {
        fragments += donationsNodes[i].outerHTML
      } else {
        release = donationsNodes[i].textContent.trim()
        fragments += `</li><li><h3>${release}</h3>`
      }
    }
    this.$refs.timeline.innerHTML = `${fragments}</li>`

    donations.$el.remove()
  }
}
</script>
<style lang="scss">
.page-donations {
  padding-left: 5%;
  padding-bottom: 100px;
  .fr {
    float: right;
    padding: 0;
    &.el-button {
      transform: translateY(-3px);
    }
    a {
      display: block;
      padding: 10px 15px;
      color: #333;
    }
    &:hover a {
      color: #409eff;
    }
  }
  .heading {
    font-size: 24px;
    margin-bottom: 60px;
    color: #333;
  }
  .timeline {
    padding: 0;
    padding-bottom: 10px;
    position: relative;
    color: #5e6d82;
    > li {
      position: relative;
      padding-bottom: 15px;
      list-style: none;
      line-height: 1.8;
      border: 1px solid #ddd;
      border-radius: 4px;
      &:not(:last-child) {
        margin-bottom: 50px;
      }
    }
    ul {
      padding: 30px 30px 15px;
      ul {
        padding: 0;
        padding-top: 5px;
        padding-left: 27px;
        li {
          padding-left: 0;
          color: #555;
          word-break: normal;
        }
        li::before {
          content: '';
          circle: 4px #fff;
          border: solid 1px #333;
          margin-right: -12px;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
    li li {
      font-size: 16px;
      list-style: none;
      padding-left: 20px;
      padding-bottom: 5px;
      color: #333;
      word-break: break-all;
      &:before {
        content: '';
        circle: 6px #333;
        transform: translateX(-20px);
        display: inline-block;
        vertical-align: middle;
      }
    }

    i {
      padding: 0 20px;
      display: inline-block;
    }
    h3 {
      margin: 0;
      padding: 15px 30px;
      border-bottom: 1px solid #ddd;
      font-size: 20px;
      color: #333;
      font-weight: bold;
      a {
        opacity: 1;
        font-size: 20px;
        float: none;
        margin-left: 0;
        color: #333;
      }
    }
    h4 {
      margin: 0;
      margin-bottom: -10px;
      font-size: 18px;
      padding-left: 54px;
      padding-top: 30px;
      font-weight: bold;
    }
    p {
      margin: 0;
    }
    em {
      position: absolute;
      right: 30px;
      font-style: normal;
      top: 23px;
      font-size: 16px;
      color: #666;
    }
  }
}
</style>
