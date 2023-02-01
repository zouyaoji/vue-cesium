###
 # @Author: zouyaoji@https://github.com/zouyaoji
 # @Date: 2021-09-16 09:28:13
 # @LastEditTime: 2023-02-01 15:48:00
 # @LastEditors: zouyaoji
 # @Description:
 # @FilePath: \vue-cesium@next\scripts\publish.sh
###

#!/bin/sh

set -e

pnpm i --frozen-lockfile
pnpm update:version

pnpm build

cd dist/vue-cesium
npm publish --tag latest --access public --registry ${REGISTRY}
cd -

echo "✅ Publish completed"
