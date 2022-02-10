/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-08-23 17:19:18
 * @LastEditTime: 2022-02-09 17:00:11
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
    '^.+\\.vue$': 'vue-jest'
  },
  // moduleNameMapper: {
  //   '^lodash-es$': 'lodash'
  // },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  // u can change this option to a more specific folder for test single component or util when dev
  // for example, ['<rootDir>/packages/input']
  roots: ['<rootDir>'],
  testPathIgnorePatterns: ['/node_modules/', 'dist'],
  modulePathIgnorePatterns: ['/node_modules/', 'dist'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  collectCoverageFrom: ['packages/*/src/**/*.ts']
}
