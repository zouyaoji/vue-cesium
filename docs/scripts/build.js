const { spawnSync } = require('node:child_process')
const path = require('node:path')
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2026-06-30 22:00:25
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-06-30 22:03:49
 * @FilePath: \vue-cesium\docs\scripts\build.js
 */
// Cross-platform build script: sets NODE_ENV=production and runs vitepress build
const process = require('node:process')

process.env.NODE_ENV = 'production'
const docsDir = path.resolve(__dirname, '..')

// First run gen-llms
const genResult = spawnSync('pnpm', ['gen-llms'], {
  stdio: 'inherit',
  shell: true,
  cwd: docsDir
})

if (genResult.status !== 0) {
  process.exit(genResult.status)
}

// Then run vitepress build
const buildResult = spawnSync('npx', ['vitepress', 'build', '.'], {
  stdio: 'inherit',
  shell: true,
  cwd: docsDir
})

if (buildResult.status !== 0) {
  process.exit(buildResult.status)
}
process.exit(0)
