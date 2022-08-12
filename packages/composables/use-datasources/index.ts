import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import useCommon from '../use-common'
import { mergeDescriptors } from '@vue-cesium/utils/merge-descriptors'
import { onUnmounted, provide, watch, WatchStopHandle } from 'vue'
import { vcKey } from '@vue-cesium/utils/config'
import { cloneDeep, differenceBy } from 'lodash-unified'
import { addCustomProperty } from '@vue-cesium/utils/util'

export default function (props, ctx, vcInstance: VcComponentInternalInstance) {
  // state
  vcInstance.cesiumEvents = ['changedEvent', 'errorEvent', 'loadingEvent']
  if (vcInstance.cesiumClass === 'KmlDataSource') {
    vcInstance.cesiumEvents.push('refreshEvent')
    vcInstance.cesiumEvents.push('unsupportedNodeEvent')
  }
  vcInstance.cesiumMembersEvents = [
    {
      name: 'clock',
      events: ['definitionChanged']
    },
    {
      name: 'clustering',
      events: ['clusterEvent']
    },
    {
      name: 'entities',
      events: ['collectionChanged']
    }
  ]
  const commonState = useCommon(props, ctx, vcInstance)

  if (commonState === void 0) {
    return
  }
  // watcher
  vcInstance.alreadyListening.push('entities')
  let unwatchFns: Array<WatchStopHandle> = []
  unwatchFns.push(
    watch(
      () => cloneDeep(props.entities),
      (newVal, oldVal) => {
        if (!vcInstance.mounted) {
          return
        }
        const datasource = vcInstance.cesiumObject as Cesium.DataSource

        if (newVal.length === oldVal.length) {
          // 视为修改操作
          // Treated as modified
          const modifies: Array<any> = []
          for (let i = 0; i < newVal.length; i++) {
            const options = newVal[i]
            const oldOptions = oldVal[i]

            if (JSON.stringify(options) !== JSON.stringify(oldOptions)) {
              modifies.push({
                newOptions: options,
                oldOptions: oldOptions
              })
            }
          }

          modifies.forEach(v => {
            const modifyEntity = datasource.entities.getById(v.oldOptions.id)
            if (v.oldOptions.id === v.newOptions.id) {
              modifyEntity &&
                Object.keys(v.newOptions).forEach(prop => {
                  if (v.oldOptions[prop] !== v.newOptions[prop]) {
                    modifyEntity[prop] = commonState.transformProp(prop, v.newOptions[prop])
                  }
                })
            } else {
              // 改了 id
              datasource.entities.remove(modifyEntity!)
              const entityOptions = v.newOptions
              addEntities(datasource, [entityOptions])
            }
          })
        } else {
          const addeds: any = differenceBy(newVal, oldVal, 'id')
          const deletes: any = differenceBy(oldVal, newVal, 'id')
          const deletedEntities: Array<Cesium.Entity> = []
          for (let i = 0; i < deletes.length; i++) {
            const deleteEntity = datasource.entities.getById(deletes[i].id)
            deletedEntities.push(deleteEntity!)
          }

          deletedEntities.forEach(v => {
            datasource.entities.remove(v)
          })
          addEntities(datasource, addeds)
        }
      },
      {
        deep: true
      }
    )
  )
  // methods
  const addEntities = (datasource, entities) => {
    for (let i = 0; i < entities.length; i++) {
      const entityOptions = entities[i]
      const entityOptionsTransform = commonState.transformProps(entityOptions)
      const entity = datasource.entities.add(entityOptionsTransform)
      entityOptions.id !== entity.id && (entityOptions.id = entity.id)
      addCustomProperty(entity, entityOptionsTransform)
    }
  }

  vcInstance.mount = async () => {
    const dataSources = commonState.$services.dataSources
    const datasource = vcInstance.cesiumObject as Cesium.DataSource
    datasource.show = props.show
    addEntities(datasource, props.entities)
    return dataSources.add(datasource).then(() => {
      return true
    })
  }
  vcInstance.unmount = async () => {
    const dataSources = commonState.$services.dataSources
    const datasource = vcInstance.cesiumObject as Cesium.DataSource
    return dataSources && dataSources.remove(datasource, props.destroy)
  }

  const getServices = () => {
    return mergeDescriptors(commonState.getServices(), {
      get datasource() {
        return vcInstance.cesiumObject as Cesium.DataSource
      },
      get entities() {
        return (vcInstance.cesiumObject as Cesium.DataSource)?.entities
      }
    })
  }

  // life cycle
  onUnmounted(() => {
    unwatchFns.forEach(item => item())
    unwatchFns = []
  })

  // provide
  provide(vcKey, getServices())

  return {
    transformProps: commonState.transformProps,
    unwatchFns: commonState.unwatchFns,
    setPropsWatcher: commonState.setPropsWatcher
  }
}
