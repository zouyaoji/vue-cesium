import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import useCommon from '../use-common'
import { mergeDescriptors } from '@vue-cesium/utils/merge-descriptors'
import { onUnmounted, provide, watch } from 'vue'
import { vcKey } from '@vue-cesium/utils/config'
import cloneDeep from 'lodash/cloneDeep'
import differenceWith from 'lodash/differenceWith'
import isEqual from 'lodash/isEqual'

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
  // watcher
  vcInstance.alreadyListening.push('entities')
  let unwatchFns = []
  unwatchFns.push(watch(
    () => cloneDeep(props.entities),
    (newVal, oldVal) => {
      if (!vcInstance.mounted) {
        return
      }
      const datasource = vcInstance.cesiumObject as Cesium.DataSource
      const adds = differenceWith(newVal, oldVal, isEqual)
      const deletes = differenceWith(oldVal, newVal, isEqual)
      if (newVal.length === oldVal.length && adds.length === deletes.length) {
        // 视为修改操作
        // Treated as modified
        for (let i = 0; i < adds.length; i++) {
          const options = newVal[i]
          const modifyEntity = datasource.entities.getById(deletes[i].id)
          modifyEntity && Object.keys(options).forEach(prop => {
            modifyEntity[prop] = commonState.transformProp(prop, options[prop])
          })
        }
      } else {
        const deletedEntities = []
        for (let i = 0; i < deletes.length; i++) {
          const deleteEntity = datasource.entities.getById(deletes[i].id)
          deletedEntities.push(deleteEntity)
        }

        deletedEntities.forEach(v => {
          datasource.entities.remove(v)
        })

        for (let i = 0; i < adds.length; i++) {
          const entityOptions = adds[i]
          const entityOptionsTransform = commonState.transformProps(entityOptions)
          const entityAdded = datasource.entities.add(entityOptionsTransform)
          entityAdded.id !== entityOptions.id && (entityOptions.id = entityAdded.id)
        }
      }
    },
    {
      deep: true
    }
  ))
  // methods
  vcInstance.mount = async () => {
    const dataSources = commonState.$services.dataSources
    const datasource = vcInstance.cesiumObject as Cesium.DataSource
    datasource.show = props.show
    for (let i = 0; i < props.entities.length; i++) {
      const entityOptions = props.entities[i]
      const entityOptionsTransform = commonState.transformProps(entityOptions)
      const entity = datasource.entities.add(entityOptionsTransform)
      entityOptions.id !== entity.id && (entityOptions.id = entity.id)
    }
    return dataSources.add(datasource).then(() => {
      return true
    })
  }
  vcInstance.unmount = async () => {
    const dataSources = commonState.$services.dataSources
    const datasource = vcInstance.cesiumObject as Cesium.DataSource
    return dataSources && dataSources.remove(datasource)
  }

  const getServices = () => {
    return mergeDescriptors(commonState.getServices(), {
      get datasource () {
        return vcInstance.cesiumObject as Cesium.DataSource
      },
      get entities () {
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

  // expose public methods
  Object.assign(vcInstance.proxy, {
    createPromise: commonState.createPromise,
    load: commonState.load,
    unload: commonState.unload,
    reload: commonState.reload,
    getCesiumObject: () => vcInstance.cesiumObject
  })

  return {
    transformProps: commonState.transformProps,
    unwatchFns: commonState.unwatchFns,
    setPropsWatcher: commonState.setPropsWatcher
  }
}
