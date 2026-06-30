const { spawnSync } = require('node:child_process')
const path = require('node:path')
// Cross-platform serve script: sets NODE_ENV=production and runs vitepress serve
const process = require('node:process')

process.env.NODE_ENV = 'production'

const docsDir = path.resolve(__dirname, '..')

const result = spawnSync('npx', ['vitepress', 'serve', '.', '--port', '5001'], {
  stdio: 'inherit',
  shell: true,
  cwd: docsDir
})

process.exit(result.status)
