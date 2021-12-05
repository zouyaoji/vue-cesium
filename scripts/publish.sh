###
 # @Author: zouyaoji@https://github.com/zouyaoji
 # @Date: 2021-09-16 09:28:13
 # @LastEditTime: 2021-12-03 17:06:11
 # @LastEditors: zouyaoji
 # @Description:
 # @FilePath: \vue-cesium@next\scripts\publish.sh
###

#!/bin/sh

set -e

pnpm i --frozen-lockfile
pnpm update:version

pnpm build

find dist/vue-cesium/packages -type d -name node_modules -print0 | xargs -0 -I {} rm -rf {}

cd dist/vue-cesium
npm publish --tag next --access public --registry ${REGISTRY}
cd -

echo "Publish completed"
