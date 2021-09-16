/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-09-16 17:58:22
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\build\gen-entry-dts.ts
 */
import path from 'path'
import fs from 'fs'
import chalk from 'chalk'
import glob from 'fast-glob'
import { Project } from 'ts-morph'
import { vcRoot, buildOutput } from './paths'
const TSCONFIG_PATH = path.resolve(__dirname, '../tsconfig.dts.json')

const gen = async () => {
  const files = await glob(vcRoot + '/*.ts')
  const project = new Project({
    compilerOptions: {
      allowJs: true,
      declaration: true,
      emitDeclarationOnly: true,
      noEmitOnError: false,
      outDir: path.resolve(buildOutput, 'entry/types'),
      skipLibCheck: true,
      esModuleInterop: true,
      target: 99, // ESNext
      downlevelIteration: true
    },
    skipFileDependencyResolution: true,
    tsConfigFilePath: TSCONFIG_PATH,
    skipAddingFilesFromTsConfig: true
  })
  project.addSourceFilesAtPaths(['typings/Cesium.d.ts', 'typings/cesium-shim.d.ts', 'typings/vue-shim.d.ts'])

  const sourceFiles = []
  files.map(f => {
    const sourceFile = project.addSourceFileAtPath(f)
    sourceFiles.push(sourceFile)
  })

  for (const sourceFile of sourceFiles) {
    console.log(chalk.yellow(`Emitting file: ${chalk.bold(sourceFile.getFilePath())}`))
    await sourceFile.emit()
    const emitOutput = sourceFile.getEmitOutput()
    for (const outputFile of emitOutput.getOutputFiles()) {
      const filepath = outputFile.getFilePath()

      await fs.promises.mkdir(path.dirname(filepath), {
        recursive: true
      })
      await fs.promises.writeFile(
        filepath,
        outputFile.getText().replace(new RegExp('@vue-cesium', 'g'), '.'),
        // .replaceAll('@vue-cesium/theme-default', 'vue-cesium/theme-default'),
        'utf8'
      )
      console.log(chalk.green('Definition for file: ' + chalk.bold(sourceFile.getBaseName()) + ' generated'))
    }
  }
}

export default gen
