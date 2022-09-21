## VcCollectionCloud

加载积云图元集合，相当于初始化一个 `Cesium.CloudCollection` 实例。渲染多个积云图元时建议用 `clouds` 属性表达。

### 基础用法

积云图元集合组件的基础用法。

:::demo 使用 `vc-collection-cloud` 标签在三维球上添加积云图元集合对象。

```html
<el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer @ready="onViewerReady">
    <vc-collection-cloud ref="cloudCollectionRef" :clouds="clouds">
      <vc-cumulus-Cloud :position="[-122.6908, 45.496, 300]" :maximumSize="{x: 50, y: 15, z: 13}" :slice="0.3" :scale="[1500,250]"></vc-cumulus-Cloud>
    </vc-collection-cloud>
    <vc-layer-imagery>
      <vc-imagery-provider-bing
        ref="provider"
        bm-key="AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-"
        map-style="Aerial"
      ></vc-imagery-provider-bing>
    </vc-layer-imagery>
    <vc-selection-indicator ref="selectionIndicator" @pick-evt="pickEvt"></vc-selection-indicator>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
  </el-row>
</el-row>

<script>
  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'
  export default {
    setup() {
      // state
      const cloudCollectionRef = ref(null)
      const clouds = ref([])
      const instance = getCurrentInstance()
      // methods
      const unload = () => {
        cloudCollectionRef.value.unload()
      }
      const reload = () => {
        cloudCollectionRef.value.reload()
      }
      const load = () => {
        cloudCollectionRef.value.load()
      }
      const onViewerReady = ({ Cesium, viewer }) => {
        window.viewer = viewer
        const scene = viewer.scene
        scene.primitives.add(Cesium.createOsmBuildings())
        // clouds.value.push({
        //   position: [-122.6908, 45.496, 300],
        //   scale: [1500, 250],
        //   maximumSize: { x: 50, y: 15, z: 13 },
        //   slice: 0.3
        // })
        clouds.value.push({
          position: [-122.72, 45.5, 335],
          scale: [1500, 300],
          maximumSize: { x: 50, y: 12, z: 15 },
          slice: 0.36
        })
        clouds.value.push({
          position: [-122.72, 45.51, 260],
          scale: [2000, 300],
          maximumSize: { x: 50, y: 12, z: 15 },
          slice: 0.49
        })
        clouds.value.push({
          position: [-122.705, 45.52, 250],
          scale: [230, 110],
          maximumSize: { x: 13, y: 13, z: 13 },
          slice: 0.2
        })
        clouds.value.push({
          position: [-122.71, 45.522, 270],
          scale: [1700, 300],
          maximumSize: { x: 50, y: 12, z: 15 },
          slice: 0.6
        })
        clouds.value.push({
          position: [-122.705, 45.525, 250],
          scale: [230, 110],
          maximumSize: { x: 15, y: 13, z: 15 },
          slice: 0.35
        })
        clouds.value.push({
          position: [-122.721, 45.53, 220],
          scale: [1500, 500],
          maximumSize: { x: 30, y: 20, z: 17 },
          slice: 0.45
        })

        viewer.scene.camera.flyTo({
          destination: Cesium.Cartesian3.fromDegrees(-122.6515, 45.5252, 525),
          orientation: {
            heading: Cesium.Math.toRadians(-115),
            pitch: Cesium.Math.toRadians(-12),
            roll: 0.0
          }
        })
      }

      return {
        unload,
        reload,
        load,
        onViewerReady,
        cloudCollectionRef,
        clouds
      }
    }
  }
</script>
```

:::

### VcCollectionCloud 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ----- | ---- | ----- | --------- |
| show | boolean | `true` | `optional` 指定该积云图元集合是否显示。 |
| noiseDetail | number | `16.0` | `optional` 指定噪声纹理数值。 |
| noiseOffset | VcPosition: VcPosition | `{x: 0, y: 0, z: 0}`|`optional` 指定噪声纹理数值的平移参数。 |
| debugBillboards | boolean |`16.0`|`optional` 仅用于调试。确定广告牌是否以不透明颜色呈现。 |
| debugEllipsoids | boolean |`16.0`|`optional` 仅用于调试。确定云是否将作为不透明椭圆体呈现。 |
| clouds | Array\<VcCumulusCloudProps\> | `[]` | `optional` 指定积云集合数组。 数组对象结构与 `vc-cumulus-cloud` 组件属性相同。 |

### VcCollectionCloud 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### VcCollectionCloud 方法

| 方法名             | 参数                                    | 描述                                        |
| ------------------ | --------------------------------------- | ------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\> | 手动加载组件。                              |
| reload             | () => Promise\<false \| VcReadyObject\> | 手动重新加载组件。                          |
| unload             | () => Promise\<boolean\>                | 手动卸载组件。                              |
| getCreatingPromise | () => Promise<boolean \| VcReadyObject> | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject    | () => VcCesiumObject                    | 获取该组件加载的 Cesium 对象。              |

### VcCollectionCloud 插槽

| 插槽名  | 描述                             | 子组件           |
| ------- | -------------------------------- | ---------------- |
| default | 用于挂载 vc-cumulus-cloud 组件。 | vc-cumulus-cloud |

### VcCumulusCloud

加载积云图元，相当于初始化一个 `Cesium.CumulusCloud` 实例。

**注意：** 需要作为 `vc-collection-cloud` 的子组件才能正常加载。

### VcCumulusCloud 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |可选值|
| ------------------------ | ------- | ------------------ | ------------------------------------------- |---|
| brightness  | number | `1.0` | `optional` 指定积云的亮度。 |
| color | VcColor | `'white'` | `optional` 指定基于的颜色。 |
| maximumSize  | VcPosition | | `optional` 指定积云云的最大大小。 |
| position | VcPosition | | `optional` 指定积云的位置。|
| scale | VcCartesian2 | | `optional` 指定积云布告板的缩放。单位米。 |
| show | boolean | `true` | `optional` 指定积云是否可见。 |
| slice | number | `-1.0` | `optional` 指定基于广告牌上的“切片”。 |

### VcCumulusCloud 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |

### VcCumulusCloud 方法

| 方法名             | 参数                                    | 描述                                        |
| ------------------ | --------------------------------------- | ------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\> | 手动加载组件。                              |
| reload             | () => Promise\<false \| VcReadyObject\> | 手动重新加载组件。                          |
| unload             | () => Promise\<boolean\>                | 手动卸载组件。                              |
| getCreatingPromise | () => Promise<boolean \| VcReadyObject> | 获取标志该组件是否创建成功的 Promise 对象。 |
| getCesiumObject    | () => VcCesiumObject                    | 获取该组件加载的 Cesium 对象。              |

### 参考

- 官方文档： **[CloudCollection](https://cesium.com/docs/cesiumjs-ref-doc/CloudCollection.html)**、**[CumulusCloud](https://cesium.com/docs/cesiumjs-ref-doc/CumulusCloud.html)**
