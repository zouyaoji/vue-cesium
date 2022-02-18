/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:21:02
 * @LastEditTime: 2022-02-17 11:19:24
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\commitlint.config.js
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
    'scope-enum': ctx => getPackages(ctx).then(packages => [2, 'always', [...packages, ...scopes, ...components]]),
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [1, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'improvement']]
  }
}
