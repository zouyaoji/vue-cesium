/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-08-23 17:19:18
 * @LastEditTime: 2021-12-04 17:07:09
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\jest.config.js
 */
module.exports = {
  globals: {
    // work around: https://github.com/kulshekhar/ts-jest/issues/748#issuecomment-423528659
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [151001]
      }
    }
  },
  runner: 'jest-electron/runner',
  testEnvironment: 'jest-electron/environment',
  transform: {
    // Doesn't support jsx/tsx since sucrase doesn't support Vue JSX
    '\\.(j|t)s$': '@sucrase/jest-plugin',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  // u can change this option to a more specific folder for test single component or util when dev
  // for example, ['<rootDir>/packages/input']
  roots: ['<rootDir>'],
  modulePathIgnorePatterns: ['<rootDir>/packages/vue-cesium'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  collectCoverageFrom: [
    'packages/*/src/**/*.ts'
  ]
}
