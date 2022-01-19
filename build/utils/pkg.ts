/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 14:11:08
 * @LastEditTime: 2022-01-18 13:25:46
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\build\utils\pkg.ts
 */
import findWorkspacePackages from '@pnpm/find-workspace-packages'
import { buildConfig } from '../build-info'
import { VC_PREFIX } from './constants'
import { projRoot } from './paths'
import type { Module } from '../build-info'
import type { ProjectManifest } from '@pnpm/types'

export const getWorkspacePackages = () => findWorkspacePackages(projRoot)
export const getWorkspaceNames = async (dir = projRoot) => {
  const pkgs = await findWorkspacePackages(projRoot)
  const result = pkgs
    .filter(pkg => pkg.dir.startsWith(dir))
    .map(pkg => pkg.manifest.name)
    .filter((name): name is string => !!name)
  return result
}

export const getPackageManifest = (pkgPath: string) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return require(pkgPath) as ProjectManifest
}

export const getPackageDependencies = (pkgPath: string): string[] => {
  const manifest = getPackageManifest(pkgPath)
  const { dependencies } = manifest
  return Object.keys(dependencies ?? {})
}

/** used for type generator */
export const pathRewriter = (module: Module) => {
  const config = buildConfig[module]

  return (id: string) => {
    id = id.replaceAll(`${VC_PREFIX}/theme-default`, 'vue-cesium/theme-default')
    id = id.replaceAll(`${VC_PREFIX}/`, `${config.bundle.path}/`)
    return id
  }
}

export const excludeFiles = (files: string[]) => {
  const excludes = ['node_modules', 'test', 'mock', 'gulpfile', 'dist']
  return files.filter(path => !excludes.some(exclude => path.includes(exclude)))
}
