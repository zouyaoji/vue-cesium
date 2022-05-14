/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-17 22:17:16
 * @LastEditTime: 2022-05-14 15:22:31
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\shared\src\DebugCameraPrimitive.ts
 */

const attributeLocations = {
  position: 0,
  normal: 1
}

class DebugCameraPrimitive {
  modelMatrix: Cesium.Matrix4
  fovH: number
  fovV: number
  segmentH: number
  segmentV: number
  subSegmentH: number
  subSegmentV: number
  _faceColor: Cesium.Color
  _lineColor: Cesium.Color
  show: boolean
  _modelMatrix: Cesium.Matrix4
  _fovH: number
  _fovV: number
  _segmentH: number
  _segmentV: number
  _subSegmentH: number
  _subSegmentV: number
  _boundingSphere: Cesium.BoundingSphere
  _initBoundingSphere: any
  _command: any
  _lineCommand: any
  _shaderprogram: any
  constructor(options) {
    const { defaultValue, Matrix4, Math: CesiumMath, Color, BoundingSphere } = Cesium
    this.modelMatrix = defaultValue(options.modelMatrix, new Matrix4())
    this.fovH = defaultValue(options.fovH, CesiumMath.toRadians(60))
    this.fovV = defaultValue(options.fovV, CesiumMath.toRadians(30))
    this.segmentH = defaultValue(options.segmentH, 16)
    this.segmentV = defaultValue(options.segmentV, 8)
    this.subSegmentH = defaultValue(options.subSegmentH, 3)
    this.subSegmentV = defaultValue(options.subSegmentV, 3)
    this._faceColor = defaultValue(options.faceColor, new Color(1, 1, 1, 0.1))
    this._lineColor = defaultValue(options.lineColor, new Color(1, 1, 1, 0.4))
    this.show = defaultValue(options.show, true)
    this._modelMatrix = Matrix4.clone(Matrix4.IDENTITY)
    this._fovH = 0
    this._fovV = 0
    this._segmentH = 1
    this._segmentV = 1
    this._subSegmentH = 1
    this._subSegmentV = 1
    this._boundingSphere = new BoundingSphere()
    this._initBoundingSphere = undefined
    this._command = undefined
  }

  get faceColor() {
    return this._faceColor
  }
  set faceColor(e) {
    this._faceColor = e
  }

  get lineColor() {
    return this._lineColor
  }
  set lineColor(e) {
    this._lineColor = e
  }

  update(frameState) {
    if (this.show && frameState.passes.render) {
      const { clone, Matrix4, defined, BoundingSphere } = Cesium

      ;(this.fovH === this._fovH &&
        this.fovV === this._fovV &&
        this.segmentH === this._segmentH &&
        this.segmentV === this._segmentV &&
        this.subSegmentH === this._subSegmentH &&
        this.subSegmentV === this._subSegmentV) ||
        ((this._fovH = this.fovH),
        (this._fovV = this.fovV),
        (this._segmentH = this.segmentH),
        (this._segmentV = this.segmentV),
        (this._subSegmentH = this.subSegmentH),
        (this._subSegmentV = this.subSegmentV),
        (this._modelMatrix = clone(Matrix4.IDENTITY)),
        this._destroyVideoMemory())

      if (
        this.fovH !== this._fovH &&
        this.fovV !== this._fovV &&
        this.segmentH !== this._segmentH &&
        this.segmentV !== this._segmentV &&
        this.subSegmentH !== this._subSegmentH &&
        this.subSegmentV !== this._subSegmentV
      ) {
        this._fovH = this.fovH
        this._fovV = this.fovV
        this._segmentH = this.segmentH
        this._segmentV = this.segmentV
        this._subSegmentH = this.subSegmentH
        this._subSegmentV = this.subSegmentV
        this._modelMatrix = clone(Matrix4.IDENTITY)
        this._destroyVideoMemory()
      }

      if (!defined(this._command)) {
        this._createCommand(frameState.context)
      }
      if (!Matrix4.equals(this.modelMatrix, this._modelMatrix)) {
        Matrix4.clone(this.modelMatrix, this._modelMatrix)
        this._command.modelMatrix = Matrix4.IDENTITY
        this._command.modelMatrix = this._modelMatrix
        this._command.boundingVolume = BoundingSphere.transform(this._initBoundingSphere, this._modelMatrix, this._boundingSphere)
        this._lineCommand.modelMatrix = Matrix4.IDENTITY
        this._lineCommand.modelMatrix = this._modelMatrix
        this._lineCommand.boundingVolume = BoundingSphere.transform(this._initBoundingSphere, this._modelMatrix, this._boundingSphere)
      }

      this._command && frameState.commandList.push(this._command)
      this._lineCommand && frameState.commandList.push(this._lineCommand)
    }
  }

  isDestroyed() {
    return false
  }

  destroy() {
    this._destroyVideoMemory()
    Cesium.destroyObject(this)
  }

  _createCommand(context) {
    const {
      Appearance,
      RenderState,
      ShaderSource,
      ShaderProgram,
      BufferUsage,
      IndexDatatype,
      VertexArray,
      ComponentDatatype,
      BoundingSphere,
      DrawCommand,
      PrimitiveType,
      Pass,
      Matrix4
    } = Cesium
    const that = this
    const segmentHLength = this._subSegmentH * this._segmentH
    const segmentVLength = this._subSegmentV * this._segmentV
    const positionTypedArray1 = createTypedArray(this._fovH, this._fovV, segmentHLength, segmentVLength)
    const positionTypedArray2 = createTypedArray(this._fovH, this._fovV, segmentHLength, segmentVLength)
    const indexTypedArray1 = generateIndices1(segmentHLength, segmentVLength)
    const indexTypedArray2 = generateIndices2(this._segmentH, this._segmentV, this._subSegmentH, this._subSegmentV)
    const appearance = Appearance['getDefaultRenderState'](true, false, undefined)
    const renderState = RenderState.fromCache(appearance)
    const vs = new ShaderSource({
      sources: [
        `
        // 使用double类型的position进行计算
        // attribute vec3 position3DHigh;
        // attribute vec3 position3DLow;
        attribute vec3 position;
        attribute vec3 normal;
        // attribute vec2 st;
        // attribute float batchId;
        varying vec3 v_positionEC;
        varying vec3 v_normalEC;
        // varying vec2 v_st;
        void main()
          {
            // 使用double类型的position进行计算
            // vec4 p = czm_translateRelativeToEye(position3DHigh, position3DLow);
            // v_positionEC = (czm_modelViewRelativeToEye * p).xyz;
            // position in eye coordinates
            // v_normalEC = czm_normal * normal;
            // normal in eye coordinates
            // v_st = st;
            // gl_Position = czm_modelViewProjectionRelativeToEye * p;
            v_positionEC = (czm_modelView * vec4(position, 1.0)).xyz;
            // position in eye coordinates
            v_normalEC = czm_normal * normal;
            // normal in eye coordinates
            // v_st = st;
            gl_Position = czm_modelViewProjection * vec4(position, 1.0);
          }
        `
      ]
    })
    const fs = new ShaderSource({
      sources: [
        `
        varying vec3 v_positionEC;
        varying vec3 v_normalEC;
        // varying vec2 v_st;
        // uniform sampler2D myImage;
        uniform vec4 vcColor;
        void main()
        {
          vec3 positionToEyeEC = -v_positionEC;
          vec3 normalEC = normalize(v_normalEC);
          #ifdef FACE_FORWARD
          normalEC = faceforward(normalEC, vec3(0.0, 0.0, 1.0), -normalEC);
          #endif
          czm_materialInput materialInput;
          materialInput.normalEC = normalEC;
          materialInput.positionToEyeEC = positionToEyeEC;
          // materialInput.st = v_st;
          //czm_material material = czm_getMaterial(materialInput);
          czm_material material = czm_getDefaultMaterial(materialInput);
          // material.diffuse = texture2D(myImage, materialInput.st).rgb;
          material.diffuse = vcColor.rgb;
          material.alpha = vcColor.a;
          #ifdef FLAT
          gl_FragColor = vec4(material.diffuse + material.emission, material.alpha);
          #else
          gl_FragColor = czm_phong(normalize(positionToEyeEC), material, czm_lightDirectionEC);
          #endif
        }
        `
      ]
    })

    const uniformsFace = {
      vcColor: function () {
        return that._faceColor
      }
    }

    const uniformsLine = {
      vcColor: function () {
        return that._lineColor
      }
    }

    const shaderProgram = ShaderProgram.fromCache({
      context: context,
      vertexShaderSource: vs,
      fragmentShaderSource: fs,
      attributeLocations: attributeLocations
    })

    this._shaderprogram = shaderProgram
    const positionBuffer1 = Cesium['Buffer'].createVertexBuffer({
      context: context,
      typedArray: positionTypedArray1,
      usage: BufferUsage.STATIC_DRAW
    })
    const positionBuffer2 = Cesium['Buffer'].createVertexBuffer({
      context: context,
      typedArray: positionTypedArray2,
      usage: BufferUsage.STATIC_DRAW
    })

    const indexBuffer1 = Cesium['Buffer'].createIndexBuffer({
      context: context,
      typedArray: indexTypedArray1,
      usage: BufferUsage.STATIC_DRAW,
      indexDatatype: IndexDatatype.UNSIGNED_SHORT
    })

    const indexBuffer2 = Cesium['Buffer'].createIndexBuffer({
      context: context,
      typedArray: indexTypedArray2,
      usage: BufferUsage.STATIC_DRAW,
      indexDatatype: IndexDatatype.UNSIGNED_SHORT
    })

    const textureVA1 = new VertexArray({
      context: context,
      attributes: [
        {
          index: 0,
          vertexBuffer: positionBuffer1,
          componentsPerAttribute: 3,
          componentDatatype: ComponentDatatype.FLOAT
        },
        {
          index: 1,
          vertexBuffer: positionBuffer2,
          componentsPerAttribute: 3,
          componentDatatype: ComponentDatatype.FLOAT
        }
      ],
      indexBuffer: indexBuffer1
    })

    const textureVA2 = new VertexArray({
      context: context,
      attributes: [
        {
          index: 0,
          vertexBuffer: positionBuffer1,
          componentsPerAttribute: 3,
          componentDatatype: ComponentDatatype.FLOAT
        },
        {
          index: 1,
          vertexBuffer: positionBuffer2,
          componentsPerAttribute: 3,
          componentDatatype: ComponentDatatype.FLOAT
        }
      ],
      indexBuffer: indexBuffer2
    })

    this._initBoundingSphere = BoundingSphere.fromVertices(positionTypedArray1 as any)
    this._command = new DrawCommand({
      vertexArray: textureVA1,
      primitiveType: PrimitiveType.TRIANGLES,
      renderState: renderState,
      shaderProgram: shaderProgram,
      uniformMap: uniformsFace,
      owner: this,
      pass: Pass.TRANSLUCENT,
      modelMatrix: new Matrix4(),
      boundingVolume: new BoundingSphere(),
      cull: true
    })

    this._lineCommand = new DrawCommand({
      vertexArray: textureVA2,
      primitiveType: PrimitiveType.LINES,
      renderState: renderState,
      shaderProgram: shaderProgram,
      uniformMap: uniformsLine,
      owner: this,
      pass: Pass.TRANSLUCENT,
      modelMatrix: new Matrix4(),
      boundingVolume: new BoundingSphere(),
      cull: true
    })
  }

  _destroyVideoMemory() {
    const { defined } = Cesium
    this._shaderprogram = this._shaderprogram && this._shaderprogram.destroy()
    if (defined(this._command)) {
      this._command.vertexArray.destroy()
      this._command = undefined
    }
    if (defined(this._lineCommand)) {
      this._lineCommand.vertexArray.destroy()
      this._lineCommand = undefined
    }
  }
}

function createTypedArray(fovH: number, fovV: number, segmentHLength: number, segmentVLength: number) {
  const buffer = new Float32Array((segmentHLength + 1) * (segmentVLength + 1) * 3 + 3)
  for (let i = 0; i < segmentHLength + 1; i++) {
    for (let j = 0; j < segmentVLength + 1; j++) {
      const width = fovH * (i / segmentHLength - 0.5)
      const height = fovV * (j / segmentVLength - 0.5)
      const positions = [Math.cos(-width) * Math.cos(-height), Math.sin(-width) * Math.cos(-height), Math.sin(height)]
      buffer[3 * (j * (segmentHLength + 1) + i) + 0] = positions[0]
      buffer[3 * (j * (segmentHLength + 1) + i) + 1] = positions[1]
      buffer[3 * (j * (segmentHLength + 1) + i) + 2] = positions[2]
    }
  }

  buffer[(segmentHLength + 1) * (segmentVLength + 1) * 3 + 0] = 0
  buffer[(segmentHLength + 1) * (segmentVLength + 1) * 3 + 1] = 0
  buffer[(segmentHLength + 1) * (segmentVLength + 1) * 3 + 2] = 0
  return buffer
}

function generateIndices1(segmentHLength, segmentVLength) {
  const vertexCount = segmentHLength * segmentVLength * 6
  const indices = new Uint16Array(vertexCount)
  for (let i = 0; i < segmentHLength; i++) {
    for (let j = 0; j < segmentVLength; j++) {
      const a = j * (1 + segmentHLength) + i
      const b = j * (1 + segmentHLength) + i + 1
      const c = (j + 1) * (1 + segmentHLength) + i
      const d = (j + 1) * (1 + segmentHLength) + i + 1
      const quadIndex = 6 * (j * segmentHLength + i)
      indices[0 + quadIndex] = a
      indices[1 + quadIndex] = b
      indices[2 + quadIndex] = d
      indices[3 + quadIndex] = a
      indices[4 + quadIndex] = d
      indices[5 + quadIndex] = c
    }
  }

  return indices
}

function generateIndices2(segmentH, segmentV, subSegmentH, subSegmentV) {
  const segmentHLength = segmentH * subSegmentH
  const segmentVLength = segmentV * subSegmentV
  const indices = new Uint16Array((segmentH + 1) * (2 * segmentVLength) + (segmentV + 1) * (2 * segmentHLength) + 8)
  for (let i = 0; i < segmentH + 1; i++) {
    for (let j = 0; j < segmentVLength; j++) {
      const index = i * subSegmentH
      indices[2 * (i * segmentVLength + j) + 0] = j * (1 + segmentHLength) + index
      indices[2 * (i * segmentVLength + j) + 1] = (j + 1) * (1 + segmentHLength) + index
    }
  }

  const size = (segmentH + 1) * (2 * segmentVLength)
  for (let i = 0; i < segmentV; i++) {
    for (let j = 0; j < segmentHLength; j++) {
      const index = i * subSegmentV
      indices[size + 2 * (j + i * segmentHLength)] = index * (1 + segmentHLength) + j
      indices[size + 2 * (j + i * segmentHLength) + 1] = index * (1 + segmentHLength) + j + 1
    }
  }

  const index = (segmentH + 1) * (2 * segmentVLength) + (segmentV + 1) * (2 * segmentHLength)
  indices[index] = 0
  indices[index + 1] = (1 + segmentHLength) * (1 + segmentVLength)
  indices[index + 2] = segmentHLength
  indices[index + 3] = (1 + segmentHLength) * (1 + segmentVLength)
  indices[index + 4] = (1 + segmentHLength) * segmentVLength
  indices[index + 5] = (1 + segmentHLength) * (1 + segmentVLength)
  indices[index + 6] = (1 + segmentHLength) * (1 + segmentVLength) - 1
  indices[index + 7] = (1 + segmentHLength) * (1 + segmentVLength)

  return indices
}

export default DebugCameraPrimitive
