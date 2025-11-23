// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  // Type of the project. 'lib' for libraries, the default is 'app'
  type: 'lib',
  formatters: {
    prettierOptions: {
      printWidth: 120,
      tabWidth: 2,
      endOfLine: 'auto',
      useTabs: false,
      singleQuote: true,
      semi: false,
      arrowParens: 'avoid',
      jsxSingleQuote: true,
      trailingComma: 'none',
      bracketSpacing: true,
      jsxBracketSameLine: true
    },
    /**
     * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
     * By default uses Prettier
     */
    css: true,
    /**
     * Format HTML files
     * By default uses Prettier
     */
    html: true,
    /**
     * Format Markdown files
     * Supports Prettier and dprint
     * By default uses Prettier
     */
    markdown: 'prettier'
  },
  // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
  // The `ignores` option in the option (first argument) is specifically treated to always be global ignores
  // And will **extend** the config's default ignores, not override them
  // You can also pass a function to modify the default ignores
  ignores: [
    '**/node_modules/**',
    '**/dist/**',
    '**/public/**',
    '**/tests/**',
    'packages/*/es',
    'packages/*/lib',
    'internal/',
    'demo/src/assets/',
    '.github',
    'packages/theme-default/src/fonts',
    'publish',
    // 'docs',
    'demo/public/**/*',
    'typings/'
  ],

  // Parse the `.gitignore` file to get the ignores, on by default
  gitignore: true,

  // Enable stylistic formatting rules
  stylistic: true,

  // TypeScript and Vue are autodetected, you can also explicitly enable them:
  typescript: true,
  vue: true,

  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false
},
// From the second arguments they are ESLint Flat Configs
// you can have multiple configs
// ts
{
  files: ['**/*.{js,ts,mjs,mts,jsx,tsx}'],
  rules: {
    'unused-imports/no-unused-vars': 'off',
    'no-console': 'off',
    'dot-notation': 'off',
    'ts/explicit-function-return-type': 'off'
  }
},
// vue
{
  // Remember to specify the file glob here, otherwise it might cause the vue plugin to handle non-vue files
  files: ['**/*.vue'],
  rules: {
    'vue/operator-linebreak': ['error', 'before'],
    'unused-imports/no-unused-vars': 'off',
    'no-console': 'off'
  }
},
// Without `files`, they are general rules for all files
{
  languageOptions: {
    globals: {
      Cesium: 'readonly'
    }
  },
  rules: {
    'style/semi': ['error', 'never'],
    'style/comma-dangle': ['error', 'never'],
    'ts/no-this-alias': 'off',
    'ts/no-use-before-define': 'off'
  }
})
