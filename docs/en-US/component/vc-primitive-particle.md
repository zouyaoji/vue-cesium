# VcPrimitiveParticle

Loads a `ParticleSystem` that updates and displays a collection of particles, equivalent to initializing a `Cesium.ParticleSystem` instance.

## Basic Usage

:::demo

primitives/vc-primitive-particle/usage

:::

## API

### Props

| Property            | Type                                          | Default | Description                                                                                                                          |
| ------------------- | --------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| show                | boolean                                       | `true`  | `optional` Whether to display the particle system.                                                                                   |
| updateCallback      | Function                                      |         | `optional` The callback function called each frame to update a particle.                                                             |
| emitter             | Cesium.ParticleEmitter                        |         | `optional` The particle emitter for this system.                                                                                     |
| modelMatrix         | Cesium.Matrix4                                |         | `optional` The 4x4 transformation matrix that transforms the particle system from model to world coordinates.                        |
| emitterModelMatrix  | Cesium.Matrix4                                |         | `optional` The 4x4 transformation matrix that transforms the particle system emitter within the particle system's local coordinates. |
| emissionRate        | number                                        | `5`     | `optional` The number of particles to emit per second.                                                                               |
| bursts              | Array                                         | `false` | `optional` An array of ParticleBurst instances emitting bursts at periodic times.                                                    |
| loop                | boolean                                       | `true`  | `optional` Whether the particle system should loop its bursts when complete.                                                         |
| scale               | number                                        | `1.0`   | `optional` The scale applied to the particle image for the duration of its particleLife.                                             |
| startScale          | number                                        |         | `optional` The final scale to apply to the particle image at the end of its life.                                                    |
| endScale            | number                                        |         | `optional` The scale of a particle for the duration of its particleLife.                                                             |
| color               | VcColor\|Array\|string                        |         | `optional` The color of a particle for the duration of its particleLife.                                                             |
| startColor          | VcColor\|Array\|string                        |         | `optional` The color of the particle at the beginning of its life.                                                                   |
| endColor            | VcColor\|Array\|string                        |         | `optional` The color of the particle at the end of its life.                                                                         |
| image               | HTMLImageElement \| HTMLCanvasElement\|string |         | `optional` The URI, HTMLImageElement, or HTMLCanvasElement to use for the billboard.                                                 |
| imageSize           | VcCartesian2                                  |         | `optional` Overrides the minimumImageSize and maximumImageSize inputs to scale the particle image dimensions.                        |
| minimumImageSize    | VcCartesian2                                  |         | `optional` Sets the minimum bound, width by height, above which to randomly scale the particle image dimensions in pixels.           |
| maximumImageSize    | VcCartesian2                                  |         | `optional` Sets the maximum bound, width by height, below which to randomly scale the particle image dimensions in pixels.           |
| speed               | number                                        | `1.0`   | `optional` Overrides the minimumSpeed and maximumSpeed inputs.                                                                       |
| minimumSpeed        | number                                        |         | `optional` Sets the minimum bound in meters per second above which a particle's actual speed will be randomly chosen.                |
| maximumSpeed        | number                                        |         | `optional` Sets the maximum bound in meters per second below which a particle's actual speed will be randomly chosen.                |
| lifetime            | number                                        |         | `optional` How long the particle system will emit particles, in seconds.                                                             |
| particleLife        | number                                        | `5.0`   | `optional` Overrides the minimumParticleLife and maximumParticleLife inputs.                                                         |
| minimumParticleLife | number                                        |         | `optional` Sets the minimum bound in seconds for the possible duration of a particle's life.                                         |
| maximumParticleLife | number                                        |         | `optional` Sets the maximum bound in seconds for the possible duration of a particle's life.                                         |
| mass                | number                                        | `1.0`   | `optional` Sets the minimum and maximum mass of particles in kilograms.                                                              |
| minimumMass         | number                                        |         | `optional` Sets the minimum bound for the mass of a particle in kilograms.                                                           |
| maximumMass         | number                                        |         | `optional` Sets the maximum mass of particles in kilograms.                                                                          |
| enableMouseEvent    | boolean                                       | `true`  | `optional` Specify whether the mouse event takes effect.                                                                             |

### Events

| Event        | Parameter                               | Description                                                     |
| ------------ | --------------------------------------- | --------------------------------------------------------------- |
| beforeLoad   | (instance: VcComponentInternalInstance) | Emitted before loading.                                         |
| ready        | (readyObj: VcReadyObject)               | Emitted when loading succeeds.                                  |
| destroyed    | (instance: VcComponentInternalInstance) | Emitted when destroyed.                                         |
| readyPromise |                                         | Emitted when the primitive is ready to render.                  |
| mousedown    | (evt: VcPickEvent)                      | Emitted when the mouse is pressed on this primitive.            |
| mouseup      | (evt: VcPickEvent)                      | Emitted when the mouse bounces up on this primitive.            |
| click        | (evt: VcPickEvent)                      | Emitted when the mouse clicks on the primitive.                 |
| clickout     | (evt: VcPickEvent)                      | Emitted when the mouse clicks outside the primitive.            |
| dblclick     | (evt: VcPickEvent)                      | Emitted when the left mouse button double-clicks the primitive. |
| mousemove    | (evt: VcPickEvent)                      | Emitted when the mouse moves on this primitive.                 |
| mouseover    | (evt: VcPickEvent)                      | Emitted when the mouse moves to this primitive.                 |
| mouseout     | (evt: VcPickEvent)                      | Emitted when the mouse moves out of this primitive.             |

## Reference

- Refer to the official documentation: **[ParticleSystem](https://cesium.com/docs/cesiumjs-ref-doc/ParticleSystem.html)**
