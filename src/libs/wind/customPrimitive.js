// let Cesium = {}
class CustomPrimitive {
  constructor (options) {
    // Cesium = CesiumJS
    this.commandType = Cesium.defaultValue(options.commandType, 'Draw')

    this.geometry = options.geometry
    this.attributeLocations = options.attributeLocations
    this.primitiveType = options.primitiveType

    this.uniformMap = options.uniformMap

    this.vertexShaderSource = options.vertexShaderSource
    this.fragmentShaderSource = options.fragmentShaderSource

    this.rawRenderState = options.rawRenderState
    this.framebuffer = options.framebuffer

    this.outputTextures = options.outputTextures
    if (Cesium.defined(options.outputTextures)) {
      this.outputTexture = options.outputTextures[0]
    }

    this.autoClear = Cesium.defaultValue(options.autoClear, false)

    this.show = true
    this.commandToExecute = undefined
    this.clearCommand = undefined
    if (this.autoClear) {
      this.clearCommand = new Cesium.ClearCommand({
        color: new Cesium.Color(0.0, 0.0, 0.0, 0.0),
        depth: 1.0,
        framebuffer: this.framebuffer,
        pass: Cesium.Pass.OPAQUE
      })
    }
  }

  createCommand (context) {
    switch (this.commandType) {
      case 'Draw': {
        var vertexArray = Cesium.VertexArray.fromGeometry({
          context: context,
          geometry: this.geometry,
          attributeLocations: this.attributeLocations,
          bufferUsage: Cesium.BufferUsage.STATIC_DRAW
        })

        var shaderProgram = Cesium.ShaderProgram.fromCache({
          context: context,
          attributeLocations: this.attributeLocations,
          vertexShaderSource: this.vertexShaderSource,
          fragmentShaderSource: this.fragmentShaderSource
        })

        var renderState = Cesium.RenderState.fromCache(this.rawRenderState)
        return new Cesium.DrawCommand({
          owner: this,
          vertexArray: vertexArray,
          primitiveType: this.primitiveType,
          uniformMap: this.uniformMap,
          modelMatrix: Cesium.Matrix4.IDENTITY,
          shaderProgram: shaderProgram,
          framebuffer: this.framebuffer,
          renderState: renderState,
          pass: Cesium.Pass.OPAQUE
        })
      }
      case 'Compute': {
        return new Cesium.ComputeCommand({
          owner: this,
          fragmentShaderSource: this.fragmentShaderSource,
          uniformMap: this.uniformMap,
          outputTextures: this.outputTextures,
          outputTexture: this.outputTextures[0],
          persists: true
        })
      }
    }
  }

  setGeometry (context, geometry) {
    this.geometry = geometry
    var vertexArray = Cesium.VertexArray.fromGeometry({
      context: context,
      geometry: this.geometry,
      attributeLocations: this.attributeLocations,
      bufferUsage: Cesium.BufferUsage.STATIC_DRAW
    })
    this.commandToExecute.vertexArray = vertexArray
  }

  preExecute () {
    // this function will be executed before the command
  }

  update (frameState) {
    if (!this.show) {
      return
    }
    if (!Cesium.defined(this.commandToExecute)) {
      this.commandToExecute = this.createCommand(frameState.context)
    }

    this.preExecute()

    if (Cesium.defined(this.clearCommand)) {
      frameState.commandList.push(this.clearCommand)
    }
    frameState.commandList.push(this.commandToExecute)
  }

  isDestroyed () {
    return false
  }

  destroy () {
    if (Cesium.defined(this.commandToExecute)) {
      this.commandToExecute.shaderProgram =
        this.commandToExecute.shaderProgram &&
        this.commandToExecute.shaderProgram.destroy()
    }
    return Cesium.destroyObject(this)
  }
}

export default CustomPrimitive
