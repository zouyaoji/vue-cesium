const methods = {
  /**
   * @return {{
   *     setSource: function(Source): void,
   *     getSource: function(): Source
   *   }|undefined}
   * @protected
   */
  getSourceTarget () {
    throw new Error('Not implemented method')
  },
  /**
   * @return {Source|undefined}
   */
  getProvider () {
    return this._provider
  },
  /**
   * @returns {Object}
   * @protected
   */
  getServices () {
    const vm = this

    return {
      get providerContainer () { return vm }
    }
  }
}

export default {
  methods,
  created () {
    /**
     * @type {Source|undefined}
     * @private
     */
    this._provider = undefined
  }
}
