// Cross-platform dev script: sets DEV=1 and runs build
const process = require('node:process')
process.env.DEV = '1'
const { spawnSync } = require('node:child_process')
const path = require('node:path')

spawnSync('pnpm', ['run', 'build'], {
  stdio: 'inherit',
  shell: true,
  cwd: path.resolve(__dirname, '..')
})
