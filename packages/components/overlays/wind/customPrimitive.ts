class CustomPrimitive {
  commandType: string
  geometry: any
  attributeLocations: any
  primitiveType: any
  uniformMap: any
  vertexShaderSource: any
  fragmentShaderSource: any
  rawRenderState: any
  framebuffer: any
  outputTexture: any
  autoClear: any
  preExecute: any
  show: boolean
  commandToExecute: any
  clearCommand: any
  constructor(options) {
    this.commandType = options.commandType

    this.geometry = options.geometry
    this.attributeLocations = options.attributeLocations
    this.primitiveType = options.primitiveType

    this.uniformMap = options.uniformMap

    this.vertexShaderSource = options.vertexShaderSource
    this.fragmentShaderSource = options.fragmentShaderSource

    this.rawRenderState = options.rawRenderState
    this.framebuffer = options.framebuffer

    this.outputTexture = options.outputTexture

    this.autoClear = options.autoClear ?? false
    this.preExecute = options.preExecute

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

  createCommand(context) {
    switch (this.commandType) {
      case 'Draw': {
        const vertexArray = Cesium.VertexArray.fromGeometry({
          context,
          geometry: this.geometry,
          attributeLocations: this.attributeLocations,
          bufferUsage: Cesium.BufferUsage.STATIC_DRAW
        })

        const shaderProgram = Cesium.ShaderProgram.fromCache({
          context,
          attributeLocations: this.attributeLocations,
          vertexShaderSource: this.vertexShaderSource,
          fragmentShaderSource: this.fragmentShaderSource
        })

        const renderState = Cesium.RenderState.fromCache(this.rawRenderState)
        return new Cesium.DrawCommand({
          owner: this,
          vertexArray,
          primitiveType: this.primitiveType,
          uniformMap: this.uniformMap,
          modelMatrix: Cesium.Matrix4.IDENTITY,
          shaderProgram,
          framebuffer: this.framebuffer,
          renderState,
          pass: Cesium.Pass.OPAQUE
        })
      }
      case 'Compute': {
        return new Cesium.ComputeCommand({
          owner: this,
          fragmentShaderSource: this.fragmentShaderSource,
          uniformMap: this.uniformMap,
          outputTexture: this.outputTexture,
          persists: true
        })
      }
    }
  }

  setGeometry(context, geometry) {
    this.geometry = geometry
    const vertexArray = Cesium.VertexArray.fromGeometry({
      context,
      geometry: this.geometry,
      attributeLocations: this.attributeLocations,
      bufferUsage: Cesium.BufferUsage.STATIC_DRAW
    })
    this.commandToExecute.vertexArray = vertexArray
  }

  update(frameState) {
    if (!this.show) {
      return
    }

    if (!Cesium.defined(this.commandToExecute)) {
      this.commandToExecute = this.createCommand(frameState.context)
    }

    if (Cesium.defined(this.preExecute)) {
      this.preExecute()
    }

    if (Cesium.defined(this.clearCommand)) {
      frameState.commandList.push(this.clearCommand)
    }
    frameState.commandList.push(this.commandToExecute)
  }

  isDestroyed() {
    return false
  }

  destroy() {
    if (Cesium.defined(this.commandToExecute)) {
      this.commandToExecute.shaderProgram = this.commandToExecute.shaderProgram && this.commandToExecute.shaderProgram.destroy()
    }
    return Cesium.destroyObject(this)
  }
}

export default CustomPrimitive
