/* eslint-disable prefer-promise-reject-errors */
/**
 * 操作状态。
 */
const Status = {
  NONE: 0,
  STORING: 1,
  STORED: 2,
  FAILED: 3
}
/**
 * 操作浏览器数据库 IndexedDB 类
 */
class IndexedDBScheduler {
  dbname: string
  db: any
  version: any
  cachestatus: any
  layer: any
  storageType: string
  creatingTable: boolean
  /**
   *
   * @param {object} options
   */
  constructor(options) {
    if (!Cesium.defined(options.name)) {
      throw new Cesium.DeveloperError('options.name is required.')
    }

    const dbRequest = window.indexedDB.open(this.dbname)
    this.layer = options.layer || null
    this.storageType = options.storageType || 'arrayBuffer'
    this.creatingTable = !1
    this.cachestatus = {}
    this.dbname = options.name
    const that = this as IndexedDBScheduler

    return new Promise((resolve, reject) => {
      dbRequest.onsuccess = (event) => {
        that.db = (event.target as IDBOpenDBRequest).result
        that.version = that.db.version
        that.cachestatus = that.cachestatus || {}
        resolve(that)
      }
      dbRequest.onupgradeneeded = (event) => {
        that.db = (event.target as any).result
        that.version = that.db.version
        resolve(that)
      }
      dbRequest.onerror = (event) => {
        that.db = null
        reject(`create database fail, error code : ${(event.target as any).errorcode}`)
      }
    }) as any
  }

  /**
   * 检查对象仓库是否存在。
   * @param {string} storeName 对象仓库（表）名称
   */
  checkObjectStoreExist(storeName) {
    return Cesium.defined(this.db) ? this.db.objectStoreNames.contains(storeName) : false
  }

  /**
   *  创建 IndexedDB 浏对象仓库，IndexedDB 是浏览器提供的本地数据库
   * @param {string} storeName 对象仓库（表）名称
   * @returns {Promise}
   */
  createObjectStore(storeName) {
    return new Promise((resolve, reject) => {
      if (this.creatingTable) {
        reject(false)
      }
      else {
        if (this.db.objectStoreNames.contains(storeName)) {
          reject(false)
          return
        }
        this.creatingTable = true
        const version = Number.parseInt(this.db.version)
        this.db.close()
        const that = this
        // 打开或新建 IndexedDB 数据库
        const dbRequest = window.indexedDB.open(this.dbname, version + 1)
        dbRequest.onupgradeneeded = (event) => {
          const db = (event.target as any).result
          that.db = db
          // 创建对象仓库（表）
          const objectStore = db.createObjectStore(storeName, {
            keyPath: 'id'
          })
          if (Cesium.defined(objectStore)) {
            // 创建索引
            objectStore.createIndex('value', 'value', {
              unique: false
            })
            that.creatingTable = false
            that.cachestatus = that.cachestatus || {}
            that.cachestatus[storeName] = {}
            that.db.close()
            const dbRequest = window.indexedDB.open(that.dbname)
            dbRequest.onsuccess = (event) => {
              that.db = (event.target as any).result
              resolve(true)
            }
          }
          else {
            that.creatingTable = false
            resolve(false)
          }
        }
        dbRequest.onsuccess = (event) => {
          ;(event.target as any).result.close()
          resolve(true)
        }
        dbRequest.onerror = (event) => {
          that.creatingTable = false
          reject(false)
        }
      }
    })
  }

  /**
   * 向对象仓库写入数据记录。
   * @param {string} storeName 对象仓库（表）名称
   * @param {number} id 主键
   * @param {*} value 值
   * @returns {Promise}
   */
  putElementInDB(storeName, id, value) {
    return new Promise((resolve, reject) => {
      if (!Cesium.defined(this.db)) {
        reject(false)
        return
      }
      const { cachestatus, db } = this
      if (
        Cesium.defined(cachestatus[storeName])
        && Cesium.defined(cachestatus[storeName][id] && (cachestatus[storeName][id] === Status.STORING || cachestatus[storeName][id] === Status.STORED))
      ) {
        resolve(false)
        return
      }
      if (db.objectStoreNames.contains(storeName)) {
        cachestatus[storeName] = cachestatus[storeName] || {}
        try {
          const request = db.transaction([storeName], 'readwrite').objectStore(storeName).add({
            id,
            value
          })
          cachestatus[storeName][id] = Status.STORING
          request.onsuccess = (event) => {
            cachestatus[storeName][id] = Status.STORED
            resolve(true)
          }
          request.onerror = (event) => {
            cachestatus[storeName][id] = Status.FAILED
            resolve(false)
          }
        }
        catch (error) {
          reject(null)
        }
      }
      else {
        this.createObjectStore(storeName).then(
          () => {
            const request = db.transaction([storeName], 'readwrite').objectStore(storeName).add({
              id,
              value
            })
            request.onsuccess = function (e) {
              resolve(true)
            }
            request.onerror = function (e) {
              reject(false)
            }
          },
          () => {
            reject(false)
          }
        )
      }
    })
  }

  /**
   * 向对象仓库读取数据。
   * @param {string} storeName 对象仓库（表）名称
   * @param {number} id 主键
   * @returns {Promise}
   */
  getElementFromDB(storeName, id) {
    return new Promise((resolve, reject) => {
      const { db } = this
      if (!Cesium.defined(db)) {
        return null
      }
      if (!db.objectStoreNames.contains(storeName)) {
        return null
      }
      try {
        const transaction = db.transaction([storeName])
        const objectStore = transaction.objectStore(storeName)
        const request = objectStore.get(id)
        request.onsuccess = (e) => {
          return Cesium.defined(e.target.result) ? resolve(e.target.result.value) : reject(null)
        }
        request.onerror = (e) => {
          reject(null)
        }
      }
      catch (error) {
        reject(null)
      }
    })
  }

  /**
   * 更新数据。
   * @param {string} storeName
   * @param {number} id
   * @param {*} value
   * @returns {Promise}
   */
  updateElementInDB(storeName, id, value) {
    return new Promise((resolve, reject) => {
      const { db } = this
      if (!Cesium.defined(db)) {
        resolve(false)
        return
      }
      if (!db.objectStoreNames.contains(storeName)) {
        resolve(false)
        return
      }
      try {
        const request = db.transaction([storeName], 'readwrite').objectStore(storeName).put({ id, value })
        request.onsuccess = () => {
          resolve(true)
        }
        request.onerror = () => {
          resolve(false)
        }
      }
      catch (e) {
        resolve(false)
      }
    })
  }

  /**
   * 移除数据。
   * @param {string} storeName
   * @param {number} id
   * @returns {Promise}
   */
  removeElementFromDB(storeName, id) {
    return new Promise((resolve, reject) => {
      const { db } = this
      if (!Cesium.defined(db)) {
        resolve(false)
        return
      }

      if (!db.objectStoreNames.contains(storeName)) {
        resolve(false)
        return
      }
      try {
        const request = db.transaction([storeName], 'readwrite').objectStore(storeName).delete(id)
        request.onsuccess = () => {
          resolve(true)
        }
        request.onerror = () => {
          resolve(false)
        }
      }
      catch (e) {
        resolve(false)
      }
    })
  }

  /**
   *  清空对象仓库
   * @param {string} storeName
   */
  clear(storeName) {
    return new Promise((resolve, reject) => {
      const { db } = this
      if (!Cesium.defined(db)) {
        resolve(false)
        return
      }

      if (!db.objectStoreNames.contains(storeName)) {
        resolve(false)
        return
      }

      try {
        const request = db.transaction([storeName], 'readwrite').objectStore(storeName).clear()
        request.onsuccess = () => {
          resolve(true)
        }
        request.onerror = () => {
          resolve(false)
        }
      }
      catch (e) {
        resolve(false)
      }
    })
  }
}

export default IndexedDBScheduler
