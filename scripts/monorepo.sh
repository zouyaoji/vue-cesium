#! /usr/bin/bash

set -e

yarn bootstrap
yarn clean:lib
yarn update:version
yarn gen:version

# build all packages in case of error

yarn build:comps
rsync -a dist/types/components/ dist/vue-cesium/es/components/
rsync -a dist/types/components/ dist/vue-cesium/lib/components/

yarn build:style

yarn build:theme
yarn build:locale
yarn build:shared
yarn build:utils
yarn build:composables
yarn build:directives
yarn build:full-bundle
yarn build:locale-umd

rsync -a dist/entry/types/ dist/vue-cesium/es/
rsync -a dist/entry/types/ dist/vue-cesium/lib/

yarn build:helper

echo "copy index.css"
cp dist/vue-cesium/theme-chalk/index.css dist/vue-cesium/dist/index.css
cp -R dist/vue-cesium/theme-chalk/fonts dist/vue-cesium/dist/fonts

echo "syncing style.js"
rsync -a dist/styles/es/ dist/vue-cesium/es/components/
rsync -a dist/styles/lib/ dist/vue-cesium/lib/components/

echo "copying source code"
cp -R packages dist/vue-cesium
cp packages/vue-cesium/package.json dist/vue-cesium/package.json

echo "copying README"
cp README.md dist/vue-cesium

# cd dist/vue-cesium
# npm publish --access public --tag next --registry ${REGISTRY}
cd -

echo "Publish completed"
