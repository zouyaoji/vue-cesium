/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:21:02
 * @LastEditTime: 2023-04-14 00:21:33
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium\commitlint.config.js
 */

/* eslint-disable @typescript-eslint/no-var-requires */

const { default: getWorkspacePackages } = require('@pnpm/find-workspace-packages')
const fs = require('fs')

async function getPackages(context) {
  const ctx = context || {}
  const cwd = ctx.cwd || process.cwd()
  const packages = await getWorkspacePackages(cwd)
  return packages
    .map(pkg => pkg.manifest.name)
    .filter(name => !!name)
    .map(name => (name.charAt(0) === '@' ? name.split('/')[1] : name))
}

const scopes = ['project', 'core', 'style', 'docs', 'ci', 'dev', 'build', 'deploy', 'other']
const components = []
const files = fs.readdirSync('./packages/components')
files.forEach(function (item, index) {
  let stat = fs.lstatSync('./packages/components/' + item)
  if (stat.isDirectory() === true) {
    components.push(item)
  }
})

module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    alias: { fd: 'docs: fix typos' },
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: '选择关联issue前缀（可选）:',
      customFooterPrefix: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      confirmCommit: '是否提交或修改commit ?'
    },
    types: [
      { value: 'feat', name: 'feat:     新增功能 | ✨ A new feature', emoji: ':sparkles:' },
      { value: 'fix', name: 'fix:      修复缺陷 | 🐛 A bug fix', emoji: ':bug:' },
      { value: 'docs', name: 'docs:     文档更新 | 📝 Documentation only changes', emoji: ':memo:' },
      {
        value: 'style',
        name: 'style:    代码格式 | 💄 hanges that do not affect the meaning of the code',
        emoji: ':lipstick:'
      },
      {
        value: 'refactor',
        name: 'refactor: 代码重构 | ♻️  A code change that neither fixes a bug nor adds a feature',
        emoji: ':recycle:'
      },
      { value: 'perf', name: 'perf:     性能提升 | ⚡️ A code change that improves performance', emoji: ':zap:' },
      {
        value: 'test',
        name: 'test:     测试相关 | ✅ Adding missing tests or correcting existing tests',
        emoji: ':white_check_mark:'
      },
      {
        value: 'build',
        name: 'build:    构建相关 | 📦️ Changes that affect the build system or external dependencies',
        emoji: ':package:'
      },
      {
        value: 'ci',
        name: 'ci:       持续集成 | 🎡 Changes to our CI configuration files and scripts',
        emoji: ':ferris_wheel:'
      },
      { value: 'revert', name: 'revert:   回退代码 | ⏪️ Revert to a commit', emoji: ':rewind:' },
      {
        value: 'chore',
        name: 'chore:    其他修改 | 🔨 Other changes that do not modify src or test files',
        emoji: ':hammer:'
      }
    ],
    useEmoji: true,
    emojiAlign: 'center',
    useAI: false,
    aiNumber: 1,
    themeColorCode: '',
    scopes: ctx => getPackages(ctx).then(packages => [...packages, ...scopes, ...components]),
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixes: [
      // 如果使用 gitee 作为开发管理
      { value: 'link', name: 'link:     链接 ISSUES 进行中' },
      { value: 'closed', name: 'closed:   标记 ISSUES 已完成' }
    ],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: 'skip',
    customIssuePrefixAlias: 'custom',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: ''
  }
}
