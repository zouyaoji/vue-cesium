import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import useCommon from '../use-common'
import { mergeDescriptors } from '@vue-cesium/utils/merge-descriptors'
import { provide, watch } from 'vue'
import { vcKey } from '@vue-cesium/utils/config'
import differenceBy from 'lodash/differenceBy'

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
  watch(
    () => [...props.entities],
    (newVal, oldVal) => {
      if (!vcInstance.mounted) {
        return
      }
      const datasource = vcInstance.cesiumObject as Cesium.DataSource
      if (newVal.length === oldVal.length) {
        for (let i = 0; i < newVal.length; i++) {
          const options = newVal[i]
          const entity = datasource.entities.getById(options.id)
          entity && Object.keys(options).forEach(prop => {
            if (prop !== 'id') {
              entity[prop] = commonState.transformProp(prop, options[prop])
            }
          })
        }
      } else {
        const deletedEntities = differenceBy(oldVal, newVal, 'id')
        for (let i = 0; i < deletedEntities.length; i++) {
          const entity = deletedEntities[i]
          datasource.entities.remove(entity)
        }

        const addedEntities = differenceBy(newVal, datasource.entities.values, 'id')
        for (let i = 0; i < addedEntities.length; i++) {
          const entityOptions = addedEntities[i]
          const entityOptionsTransform = commonState.transformProps(entityOptions)
          const entityAdded = datasource.entities.add(entityOptionsTransform)
          entityAdded.id !== entityOptions.id && (entityOptions.id = entityAdded.id)
        }
      }
    },
    {
      deep: true
    }
  )
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
    return mergeDescriptors(commonState.$services, {
      get datasource () {
        return vcInstance.cesiumObject as Cesium.DataSource
      },
      get entities () {
        return (vcInstance.cesiumObject as Cesium.DataSource)?.entities
      }
    })
  }

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
