###
 # @Author: zouyaoji@https://github.com/zouyaoji
 # @Date: 2021-09-16 09:28:13
 # @LastEditTime: 2026-02-04 00:59:42
 # @LastEditors: zouyaoji 370681295@qq.com
 # @Description:
 # @FilePath: \vue-cesium\scripts\publish.sh
###

#!/bin/sh

set -e

pnpm i --frozen-lockfile
pnpm update:version

pnpm build

cd dist/vue-cesium
npm publish --tag beta --access public --registry ${REGISTRY}
cd -

echo "✅ Publish completed"
