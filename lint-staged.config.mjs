// lint-staged.config.js
export default {
  'packages/**/*.{ts,vue,js,tsx,jsx}': ['eslint --fix'],
  'packages/**/*.{json,md,css,scss,less,html}': ['eslint --fix']
}
