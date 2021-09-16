#!/bin/sh
###
 # @Author: zouyaoji@https://github.com/zouyaoji
 # @Date: 2021-09-16 09:28:13
 # @LastEditTime: 2021-09-16 16:38:51
 # @LastEditors: zouyaoji
 # @Description:
 # @FilePath: \vue-cesium@next\scripts\publish.sh
###

set -e

yarn bootstrap
yarn update:version

sh scripts/build.sh

cd dist/vue-cesium
npm publish --tag next --access public --registry ${REGISTRY}
cd -

echo "Publish completed"
