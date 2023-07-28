/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-05-26 13:30:22
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2023-07-28 14:58:36
 * @FilePath: \vue-cesium@next\packages\shared\src\PrimitiveCluster.ts
 */
import { defaultValue } from '@vue-cesium/utils/util'
import KDBush from 'kdbush'
import { VcPrimitiveClusterOptions } from '@vue-cesium/utils/types'

/**
 * 图元聚合
 * https://github.com/tingyuxuan2302/cesium-vue3-vite/blob/github/src/utils/cesiumCtrl/primitiveCluster.js
 */
export default class PrimitiveCluster {
  _enabled: boolean
  _pixelRange: number
  _minimumClusterSize: number
  _clusterBillboards: boolean
  _clusterLabels: boolean
  _clusterPoints: boolean
  _labelCollection: any
  _billboardCollection: any
  _pointCollection: any
  _clusterBillboardCollection: any
  _clusterLabelCollection: any
  _clusterPointCollection: any
  _collectionIndicesByEntity: any
  _unusedLabelIndices: any[]
  _unusedBillboardIndices: any[]
  _unusedPointIndices: any[]
  _previousClusters: any[]
  _previousHeight: number
  _enabledDirty: boolean
  _clusterDirty: boolean
  _cluster: any
  _removeEventListener: Cesium.Event.RemoveCallback
  _clusterEvent: Cesium.Event
  show: boolean
  _scene: Cesium.Scene
  _pixelRangeDirty: boolean
  _minimumClusterSizeDirty: boolean
  constructor(options?: VcPrimitiveClusterOptions) {
    options = defaultValue(options, {})

    this._enabled = defaultValue(options.enabled, false)
    this._pixelRange = defaultValue(options.pixelRange, 80)
    this._minimumClusterSize = defaultValue(options.minimumClusterSize, 2)
    this._clusterBillboards = defaultValue(options.clusterBillboards, true)
    this._clusterLabels = defaultValue(options.clusterLabels, true)
    this._clusterPoints = defaultValue(options.clusterPoints, true)

    this._labelCollection = undefined
    this._billboardCollection = undefined
    this._pointCollection = undefined

    this._clusterBillboardCollection = undefined
    this._clusterLabelCollection = undefined
    this._clusterPointCollection = undefined

    this._collectionIndicesByEntity = {}

    this._unusedLabelIndices = []
    this._unusedBillboardIndices = []
    this._unusedPointIndices = []

    this._previousClusters = []
    this._previousHeight = undefined

    this._enabledDirty = false
    this._clusterDirty = false

    this._cluster = undefined
    this._removeEventListener = undefined

    this._clusterEvent = new Cesium.Event()

    /**
     * Determines if entities in this collection will be shown.
     *
     * @type {Boolean}
     * @default true
     */
    this.show = defaultValue(options.show, true)
  }

  _initialize(scene: Cesium.Scene) {
    this._scene = scene

    const cluster = createDeclutterCallback(this)
    this._cluster = cluster
    this._removeEventListener = scene.camera.changed.addEventListener(cluster)
  }

  get enabled() {
    return this._enabled
  }

  set enabled(value) {
    this._enabledDirty = value !== this._enabled
    this._enabled = value
  }

  get pixelRange() {
    return this._pixelRange
  }
  set pixelRange(value) {
    this._clusterDirty = this._clusterDirty || value !== this._pixelRange
    this._pixelRange = value
  }

  get minimumClusterSize() {
    return this._minimumClusterSize
  }
  set minimumClusterSize(value) {
    this._clusterDirty = this._clusterDirty || value !== this._minimumClusterSize
    this._minimumClusterSize = value
  }

  get clusterEvent() {
    return this._clusterEvent
  }

  get clusterBillboards() {
    return this._clusterBillboards
  }
  set clusterBillboards(value) {
    this._clusterDirty = this._clusterDirty || value !== this._clusterBillboards
    this._clusterBillboards = value
  }

  get clusterLabels() {
    return this._clusterLabels
  }
  set clusterLabels(value) {
    this._clusterDirty = this._clusterDirty || value !== this._clusterLabels
    this._clusterLabels = value
  }

  get clusterPoints() {
    return this._clusterPoints
  }
  set clusterPoints(value) {
    this._clusterDirty = this._clusterDirty || value !== this._clusterPoints
    this._clusterPoints = value
  }

  getLabel(entity) {
    return createGetEntity.call(this, entity, '_labelCollection', Cesium.LabelCollection, '_unusedLabelIndices', 'labelIndex')
  }

  removeLabel(entity) {
    const { defined } = Cesium
    const entityIndices = this._collectionIndicesByEntity && this._collectionIndicesByEntity[entity.id]
    if (!defined(this._labelCollection) || !defined(entityIndices) || !defined(entityIndices.labelIndex)) {
      return
    }

    const index = entityIndices.labelIndex
    entityIndices.labelIndex = undefined
    removeEntityIndicesIfUnused(this, entity.id)

    const label = this._labelCollection.get(index)
    label.show = false
    label.text = ''
    label.id = undefined

    this._unusedLabelIndices.push(index)

    this._clusterDirty = true
  }

  getBillboard(entity) {
    return createGetEntity.call(this, entity, '_billboardCollection', Cesium.BillboardCollection, '_unusedBillboardIndices', 'billboardIndex')
  }

  removeBillboard(entity) {
    const { defined } = Cesium
    const entityIndices = this._collectionIndicesByEntity && this._collectionIndicesByEntity[entity.id]
    if (!defined(this._billboardCollection) || !defined(entityIndices) || !defined(entityIndices.billboardIndex)) {
      return
    }

    const index = entityIndices.billboardIndex
    entityIndices.billboardIndex = undefined
    removeEntityIndicesIfUnused(this, entity.id)

    const billboard = this._billboardCollection.get(index)
    billboard.id = undefined
    billboard.show = false
    billboard.image = undefined

    this._unusedBillboardIndices.push(index)

    this._clusterDirty = true
  }

  getPoint(entity) {
    return createGetEntity.call(this, entity, '_pointCollection', Cesium.PointPrimitiveCollection, '_unusedPointIndices', 'pointIndex')
  }

  removePoint(entity) {
    const { defined } = Cesium
    const entityIndices = this._collectionIndicesByEntity && this._collectionIndicesByEntity[entity.id]
    if (!defined(this._pointCollection) || !defined(entityIndices) || !defined(entityIndices.pointIndex)) {
      return
    }

    const index = entityIndices.pointIndex
    entityIndices.pointIndex = undefined
    removeEntityIndicesIfUnused(this, entity.id)

    const point = this._pointCollection.get(index)
    point.show = false
    point.id = undefined

    this._unusedPointIndices.push(index)

    this._clusterDirty = true
  }

  update(frameState) {
    if (!this.show) {
      return
    }

    const { defined } = Cesium

    // If clustering is enabled before the label collection is updated,
    // the glyphs haven't been created so the screen space bounding boxes
    // are incorrect.
    let commandList
    if (defined(this._labelCollection) && this._labelCollection.length > 0 && this._labelCollection.get(0)._glyphs.length === 0) {
      commandList = frameState.commandList
      frameState.commandList = []
      this._labelCollection.update(frameState)
      frameState.commandList = commandList
    }

    // If clustering is enabled before the billboard collection is updated,
    // the images haven't been added to the image atlas so the screen space bounding boxes
    // are incorrect.
    if (defined(this._billboardCollection) && this._billboardCollection.length > 0 && !defined(this._billboardCollection.get(0).width)) {
      commandList = frameState.commandList
      frameState.commandList = []
      this._billboardCollection.update(frameState)
      frameState.commandList = commandList
    }

    if (this._enabledDirty) {
      this._enabledDirty = false
      updateEnable(this)
      this._clusterDirty = true
    }

    if (this._clusterDirty) {
      this._clusterDirty = false
      this._cluster()
    }

    if (defined(this._clusterLabelCollection)) {
      this._clusterLabelCollection.update(frameState)
    }
    if (defined(this._clusterBillboardCollection)) {
      this._clusterBillboardCollection.update(frameState)
    }
    if (defined(this._clusterPointCollection)) {
      this._clusterPointCollection.update(frameState)
    }

    if (defined(this._labelCollection)) {
      this._labelCollection.update(frameState)
    }
    if (defined(this._billboardCollection)) {
      this._billboardCollection.update(frameState)
    }
    if (defined(this._pointCollection)) {
      this._pointCollection.update(frameState)
    }
  }

  destroy() {
    const { defined } = Cesium
    this._labelCollection = this._labelCollection && this._labelCollection.destroy()
    this._billboardCollection = this._billboardCollection && this._billboardCollection.destroy()
    this._pointCollection = this._pointCollection && this._pointCollection.destroy()

    this._clusterLabelCollection = this._clusterLabelCollection && this._clusterLabelCollection.destroy()
    this._clusterBillboardCollection = this._clusterBillboardCollection && this._clusterBillboardCollection.destroy()
    this._clusterPointCollection = this._clusterPointCollection && this._clusterPointCollection.destroy()

    if (defined(this._removeEventListener)) {
      this._removeEventListener()
      this._removeEventListener = undefined
    }

    this._labelCollection = undefined
    this._billboardCollection = undefined
    this._pointCollection = undefined

    this._clusterBillboardCollection = undefined
    this._clusterLabelCollection = undefined
    this._clusterPointCollection = undefined

    this._collectionIndicesByEntity = undefined

    this._unusedLabelIndices = []
    this._unusedBillboardIndices = []
    this._unusedPointIndices = []

    this._previousClusters = []
    this._previousHeight = undefined

    this._enabledDirty = false
    this._pixelRangeDirty = false
    this._minimumClusterSizeDirty = false

    return undefined
  }
}

function updateEnable(entityCluster) {
  if (entityCluster.enabled) {
    return
  }

  const { defined } = Cesium

  if (defined(entityCluster._clusterLabelCollection)) {
    entityCluster._clusterLabelCollection.destroy()
  }
  if (defined(entityCluster._clusterBillboardCollection)) {
    entityCluster._clusterBillboardCollection.destroy()
  }
  if (defined(entityCluster._clusterPointCollection)) {
    entityCluster._clusterPointCollection.destroy()
  }

  entityCluster._clusterLabelCollection = undefined
  entityCluster._clusterBillboardCollection = undefined
  entityCluster._clusterPointCollection = undefined

  disableCollectionClustering(entityCluster._labelCollection)
  disableCollectionClustering(entityCluster._billboardCollection)
  disableCollectionClustering(entityCluster._pointCollection)
}

function disableCollectionClustering(collection) {
  const { defined } = Cesium

  if (!defined(collection)) {
    return
  }

  const length = collection.length
  for (let i = 0; i < length; ++i) {
    collection.get(i).clusterShow = true
  }
}

function createGetEntity(this, entity, collectionProperty, CollectionConstructor, unusedIndicesProperty, entityIndexProperty) {
  const { defined } = Cesium
  let collection = this[collectionProperty]

  if (!defined(this._collectionIndicesByEntity)) {
    this._collectionIndicesByEntity = {}
  }

  let entityIndices = this._collectionIndicesByEntity[entity.id]

  if (!defined(entityIndices)) {
    entityIndices = this._collectionIndicesByEntity[entity.id] = {
      billboardIndex: undefined,
      labelIndex: undefined,
      pointIndex: undefined
    }
  }

  if (defined(collection) && defined(entityIndices[entityIndexProperty])) {
    return collection.get(entityIndices[entityIndexProperty])
  }

  if (!defined(collection)) {
    collection = this[collectionProperty] = new CollectionConstructor({
      scene: this._scene
    })
  }

  let index
  let entityItem

  const unusedIndices = this[unusedIndicesProperty]
  if (unusedIndices.length > 0) {
    index = unusedIndices.pop()
    entityItem = collection.get(index)
  } else {
    entityItem = collection.add()
    index = collection.length - 1
  }

  entityIndices[entityIndexProperty] = index

  const that = this
  Promise.resolve().then(function () {
    that._clusterDirty = true
  })

  return entityItem
}

function removeEntityIndicesIfUnused(entityCluster, entityId) {
  const { defined } = Cesium
  const indices = entityCluster._collectionIndicesByEntity[entityId]

  if (!defined(indices.billboardIndex) && !defined(indices.labelIndex) && !defined(indices.pointIndex)) {
    delete entityCluster._collectionIndicesByEntity[entityId]
  }
}

function getX(point) {
  return point.coord.x
}

function getY(point) {
  return point.coord.y
}

function expandBoundingBox(bbox, pixelRange) {
  bbox.x -= pixelRange
  bbox.y -= pixelRange
  bbox.width += pixelRange * 2.0
  bbox.height += pixelRange * 2.0
}

function getBoundingBox(item, coord, pixelRange, entityCluster, result) {
  const { defined, Label, Billboard, PointPrimitive, BoundingRectangle } = Cesium
  const labelBoundingBoxScratch = new BoundingRectangle()
  if (defined(item._labelCollection) && entityCluster._clusterLabels) {
    result = Label['getScreenSpaceBoundingBox'](item, coord, result)
  } else if (defined(item._billboardCollection) && entityCluster._clusterBillboards) {
    result = Billboard['getScreenSpaceBoundingBox'](item, coord, result)
  } else if (defined(item._pointPrimitiveCollection) && entityCluster._clusterPoints) {
    result = PointPrimitive['getScreenSpaceBoundingBox'](item, coord, result)
  }

  expandBoundingBox(result, pixelRange)

  if (
    entityCluster._clusterLabels &&
    !defined(item._labelCollection) &&
    defined(item.id) &&
    hasLabelIndex(entityCluster, item.id.id) &&
    defined(item.id._label)
  ) {
    const labelIndex = entityCluster._collectionIndicesByEntity[item.id.id].labelIndex
    const label = entityCluster._labelCollection.get(labelIndex)
    const labelBBox = Label['getScreenSpaceBoundingBox'](label, coord, labelBoundingBoxScratch)
    expandBoundingBox(labelBBox, pixelRange)
    result = BoundingRectangle.union(result, labelBBox, result)
  }

  return result
}

function addNonClusteredItem(item, entityCluster) {
  const { defined } = Cesium
  item.clusterShow = true

  if (!defined(item._labelCollection) && defined(item.id) && hasLabelIndex(entityCluster, item.id.id) && defined(item.id._label)) {
    const labelIndex = entityCluster._collectionIndicesByEntity[item.id.id].labelIndex
    const label = entityCluster._labelCollection.get(labelIndex)
    label.clusterShow = true
  }
}

function addCluster(position, numPoints, ids, entityCluster) {
  const cluster = {
    billboard: entityCluster._clusterBillboardCollection.add(),
    label: entityCluster._clusterLabelCollection.add(),
    point: entityCluster._clusterPointCollection.add()
  }

  cluster.billboard.show = false
  cluster.point.show = false
  cluster.label.show = true
  cluster.label.text = numPoints.toLocaleString()
  cluster.label.id = ids
  cluster.billboard.position = cluster.label.position = cluster.point.position = position
  cluster.billboard.owner = entityCluster
  cluster.label.owner = entityCluster
  cluster.point.owner = entityCluster

  entityCluster._clusterEvent.raiseEvent(ids, cluster)
}

function hasLabelIndex(entityCluster, entityId) {
  const { defined } = Cesium
  return (
    defined(entityCluster) &&
    defined(entityCluster._collectionIndicesByEntity[entityId]) &&
    defined(entityCluster._collectionIndicesByEntity[entityId].labelIndex)
  )
}

function getScreenSpacePositions(collection, points, scene, occluder, entityCluster) {
  const { defined, SceneMode } = Cesium
  if (!defined(collection)) {
    return
  }

  const length = collection.length
  for (let i = 0; i < length; ++i) {
    const item = collection.get(i)
    item.clusterShow = false

    if (!item.show || (entityCluster._scene.mode === SceneMode.SCENE3D && !occluder.isPointVisible(item.position))) {
      continue
    }

    // const canClusterLabels =
    //   entityCluster._clusterLabels && defined(item._labelCollection);
    // const canClusterBillboards =
    //   entityCluster._clusterBillboards && defined(item.id._billboard);
    // const canClusterPoints =
    //   entityCluster._clusterPoints && defined(item.id._point);
    // if (canClusterLabels && (canClusterPoints || canClusterBillboards)) {
    //   continue;
    // }

    const coord = item.computeScreenSpacePosition(scene)
    if (!defined(coord)) {
      continue
    }

    points.push({
      index: i,
      collection: collection,
      clustered: false,
      coord: coord
    })
  }
}

function createDeclutterCallback(entityCluster) {
  const { defined, LabelCollection, BillboardCollection, PointPrimitiveCollection, Billboard, Matrix4, Cartesian3, Cartesian2, BoundingRectangle } =
    Cesium

  const pointBoundinRectangleScratch = new BoundingRectangle()
  const totalBoundingRectangleScratch = new BoundingRectangle()
  const neighborBoundingRectangleScratch = new BoundingRectangle()

  return function (amount) {
    if ((defined(amount) && amount < 0.05) || !entityCluster.enabled) {
      return
    }

    const scene = entityCluster._scene

    const labelCollection = entityCluster._labelCollection
    const billboardCollection = entityCluster._billboardCollection
    const pointCollection = entityCluster._pointCollection

    if (
      (!defined(labelCollection) && !defined(billboardCollection) && !defined(pointCollection)) ||
      (!entityCluster._clusterBillboards && !entityCluster._clusterLabels && !entityCluster._clusterPoints)
    ) {
      return
    }

    let clusteredLabelCollection = entityCluster._clusterLabelCollection
    let clusteredBillboardCollection = entityCluster._clusterBillboardCollection
    let clusteredPointCollection = entityCluster._clusterPointCollection

    if (defined(clusteredLabelCollection)) {
      clusteredLabelCollection.removeAll()
    } else {
      clusteredLabelCollection = entityCluster._clusterLabelCollection = new LabelCollection({
        scene: scene
      })
    }

    if (defined(clusteredBillboardCollection)) {
      clusteredBillboardCollection.removeAll()
    } else {
      clusteredBillboardCollection = entityCluster._clusterBillboardCollection = new BillboardCollection({
        scene: scene
      })
    }

    if (defined(clusteredPointCollection)) {
      clusteredPointCollection.removeAll()
    } else {
      clusteredPointCollection = entityCluster._clusterPointCollection = new PointPrimitiveCollection()
    }

    const pixelRange = entityCluster._pixelRange
    const minimumClusterSize = entityCluster._minimumClusterSize

    const clusters = entityCluster._previousClusters
    const newClusters = []

    const previousHeight = entityCluster._previousHeight
    const currentHeight = scene.camera.positionCartographic.height

    const ellipsoid = scene.mapProjection.ellipsoid
    const cameraPosition = scene.camera.positionWC
    const occluder = new Cesium['EllipsoidalOccluder'](ellipsoid, cameraPosition)

    const points = []
    if (entityCluster._clusterLabels) {
      getScreenSpacePositions(labelCollection, points, scene, occluder, entityCluster)
    }
    if (entityCluster._clusterBillboards) {
      getScreenSpacePositions(billboardCollection, points, scene, occluder, entityCluster)
    }
    if (entityCluster._clusterPoints) {
      getScreenSpacePositions(pointCollection, points, scene, occluder, entityCluster)
    }

    let i
    let j
    let length
    let bbox
    let neighbors
    let neighborLength
    let neighborIndex
    let neighborPoint
    let ids
    let numPoints

    let collection
    let collectionIndex

    const index = new KDBush(points, getX, getY, 64, Int32Array)

    if (currentHeight < previousHeight) {
      length = clusters.length
      for (i = 0; i < length; ++i) {
        const cluster = clusters[i]

        if (!occluder.isPointVisible(cluster.position)) {
          continue
        }

        const coord = Billboard['_computeScreenSpacePosition'](Matrix4.IDENTITY, cluster.position, Cartesian3.ZERO, Cartesian2.ZERO, scene)
        if (!defined(coord)) {
          continue
        }

        const factor = 1.0 - currentHeight / previousHeight
        let width = (cluster.width = cluster.width * factor)
        let height = (cluster.height = cluster.height * factor)

        width = Math.max(width, cluster.minimumWidth)
        height = Math.max(height, cluster.minimumHeight)

        const minX = coord.x - width * 0.5
        const minY = coord.y - height * 0.5
        const maxX = coord.x + width
        const maxY = coord.y + height

        neighbors = index.range(minX, minY, maxX, maxY)
        neighborLength = neighbors.length
        numPoints = 0
        ids = []

        for (j = 0; j < neighborLength; ++j) {
          neighborIndex = neighbors[j]
          neighborPoint = points[neighborIndex]
          if (!neighborPoint.clustered) {
            ++numPoints

            collection = neighborPoint.collection
            collectionIndex = neighborPoint.index
            ids.push(collection.get(collectionIndex).id)
          }
        }

        if (numPoints >= minimumClusterSize) {
          addCluster(cluster.position, numPoints, ids, entityCluster)
          newClusters.push(cluster)

          for (j = 0; j < neighborLength; ++j) {
            points[neighbors[j]].clustered = true
          }
        }
      }
    }

    length = points.length
    for (i = 0; i < length; ++i) {
      const point = points[i]
      if (point.clustered) {
        continue
      }

      point.clustered = true

      collection = point.collection
      collectionIndex = point.index

      const item = collection.get(collectionIndex)
      bbox = getBoundingBox(item, point.coord, pixelRange, entityCluster, pointBoundinRectangleScratch)
      const totalBBox = BoundingRectangle.clone(bbox, totalBoundingRectangleScratch)

      neighbors = index.range(bbox.x, bbox.y, bbox.x + bbox.width, bbox.y + bbox.height)
      neighborLength = neighbors.length

      const clusterPosition = Cartesian3.clone(item.position)
      numPoints = 1
      ids = [item.id]

      for (j = 0; j < neighborLength; ++j) {
        neighborIndex = neighbors[j]
        neighborPoint = points[neighborIndex]
        if (!neighborPoint.clustered) {
          const neighborItem = neighborPoint.collection.get(neighborPoint.index)
          const neighborBBox = getBoundingBox(neighborItem, neighborPoint.coord, pixelRange, entityCluster, neighborBoundingRectangleScratch)

          Cartesian3.add(neighborItem.position, clusterPosition, clusterPosition)

          BoundingRectangle.union(totalBBox, neighborBBox, totalBBox)
          ++numPoints

          ids.push(neighborItem.id)
        }
      }

      if (numPoints >= minimumClusterSize) {
        const position = Cartesian3.multiplyByScalar(clusterPosition, 1.0 / numPoints, clusterPosition)
        addCluster(position, numPoints, ids, entityCluster)
        newClusters.push({
          position: position,
          width: totalBBox.width,
          height: totalBBox.height,
          minimumWidth: bbox.width,
          minimumHeight: bbox.height
        })

        for (j = 0; j < neighborLength; ++j) {
          points[neighbors[j]].clustered = true
        }
      } else {
        addNonClusteredItem(item, entityCluster)
      }
    }

    if (clusteredLabelCollection.length === 0) {
      clusteredLabelCollection.destroy()
      entityCluster._clusterLabelCollection = undefined
    }

    if (clusteredBillboardCollection.length === 0) {
      clusteredBillboardCollection.destroy()
      entityCluster._clusterBillboardCollection = undefined
    }

    if (clusteredPointCollection.length === 0) {
      clusteredPointCollection.destroy()
      entityCluster._clusterPointCollection = undefined
    }

    entityCluster._previousClusters = newClusters
    entityCluster._previousHeight = currentHeight
  }
}
