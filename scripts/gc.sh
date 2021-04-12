#! /bin/bash

NAME=$1

FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages" && pwd)

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: yarn gc \${name} with no space"
  exit 1
fi

DIRNAME="$FILE_PATH/$NAME"
INPUT_NAME=$NAME

if [ -d "$DIRNAME" ]; then
  echo "$NAME component already exists, please change it"
  exit 1
fi
NORMALIZED_NAME=""
for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
  C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
  NORMALIZED_NAME="$NORMALIZED_NAME${C}${i:1}"
done
NAME=$NORMALIZED_NAME

mkdir -p "$DIRNAME"
mkdir -p "$DIRNAME/src"
mkdir -p "$DIRNAME/__tests__"

# cat > $DIRNAME/src/index.vue <<EOF
cat > $DIRNAME/src/index.ts <<EOF
import { Cesium as CesiumNative, VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useCommon } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
export default defineComponent({
  name: 'Vc${NAME}',
  props: { },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'Vc${NAME}'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { \$services } = commonState
    const { emit } = ctx
    // methods
    instance.createCesiumObject = async () => {
      return true
    }
    instance.mount = async () => {
      return true
    }
    instance.unmount = async () => {
      return true
    }

    // expose public methods
    Object.assign(instance.proxy, {
      createPromise: commonState.createPromise,
      load: commonState.load,
      unload: commonState.unload,
      reload: commonState.reload,
      getCesiumObject: () => instance.cesiumObject
    })

    return () => createCommentVNode(kebabCase(instance.proxy.\$options.name))
  }
})
EOF

cat <<EOF >"$DIRNAME/index.ts"
import { App } from 'vue'
import ${NAME} from './src'

${NAME}.install = (app: App): void => {
  app.component(${NAME}.name, ${NAME})
}

export default ${NAME}
EOF

cat > $DIRNAME/package.json <<EOF
{
  "name": "@vue-cesium/$INPUT_NAME",
  "version": "3.0.0-beta",
  "main": "dist/index.js",
  "license": "MIT",
  "peerDependencies": {
    "vue": "^3.0.11"
  },
  "devDependencies": {
    "@vue/test-utils": "^2.0.0-rc.4"
  }
}
EOF

cat > $DIRNAME/__tests__/$INPUT_NAME.spec.ts <<EOF
import { VcComponentPublicInstance, Cesium as CesiumNative, ReadyObj } from '@vue-cesium/utils/types'
import { mount, config } from '@vue/test-utils'
import VcViewer from '@vue-cesium/viewer'
import Vc$NAME from '../src'

const option = {
  cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
}

config.global.config.globalProperties = {}
config.global.config.globalProperties.\$VueCesium = option

const App = {
  components: {
    VcViewer,
    Vc$NAME
  },
  template: \`
    <div class="test-viewer">
      <vc-viewer>
        <vc-$NAME ref="$INPUT_NAME"></vc-$NAME>
      </vc-viewer>
    </div>
 \`,
  data () {
    return {

    }
  }
}

describe('Vc$NAME', () => {
  test('render test', async () => {
    const wrapper = mount(App)
    expect(wrapper.vm.\$refs.$INPUT_NAME).toBeDefined()
    const testVm = wrapper.vm.\$refs.$INPUT_NAME as VcComponentPublicInstance
    const readyObj: ReadyObj = await testVm.createPromise
  }, 10000)
})
EOF
