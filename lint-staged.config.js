// lint-staged.config.js
module.exports = {
  '*.{js,jsx}': ['eslint --cache'],
  '*.{ts,tsx}': [() => 'tsc --skipLibCheck --noEmit', 'eslint --cache'],
  '*.vue': [() => 'vue-tsc -p tsconfig.json --noEmit', 'eslint --cache']
}
