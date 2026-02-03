## VcOverlayWindmap

Loads wind field visualization overlay on the 3D map. It displays wind patterns as animated particles based on NetCDF meteorological data.

### Basic usage

Basic usage of VcOverlayWindmap component.

:::demo

overlays/vc-overlay-windmap/usage

:::

### VcOverlayWindmap Props

| Name      | Type             | Default | Description                                          |
| --------- | ---------------- | ------- | ---------------------------------------------------- |
| data      | Uint8Array       |         | `optional` Specify the NetCDF data file content.     |
| options   | VcWindmapOptions |         | `optional` Specify wind field visualization options. |
| headerLen | number           | `4`     | `optional` Specify the header length of NetCDF file. |

### VcWindmapOptions

```typescript
interface VcWindmapOptions {
  maxParticles?: number // Maximum number of particles (default: 4096)
  particleHeight?: number // Height of particles above ground (default: 100000)
  fadeOpacity?: number // Particle fade opacity (default: 0.996)
  dropRate?: number // Particle drop rate (default: 0.003)
  dropRateBump?: number // Drop rate increase on bump (default: 0.01)
  speedFactor?: number // Speed multiplier (default: 1.0)
  lineWidth?: number // Particle trail line width (default: 1.0)
  color?: Cesium.Color // Particle color
}
```

### VcOverlayWindmap Events

| Event name | Parameters                              | Description                             |
| ---------- | --------------------------------------- | --------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggered before the object is loaded.  |
| ready      | (readyObj: VcReadyObject)               | Triggered when the object is loaded.    |
| destroyed  | (instance: VcComponentInternalInstance) | Triggered when the object is destroyed. |

### VcOverlayWindmap Methods

| Method             | Parameters                                                      | Description                                                                     |
| ------------------ | --------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>                         | Manually load the component.                                                    |
| reload             | () => Promise\<false \| VcReadyObject\>                         | Manually reload the component.                                                  |
| unload             | () => Promise\<boolean\>                                        | Manually unload the component.                                                  |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject>                        | Get a Promise object indicating whether the component was created successfully. |
| getCesiumObject    | () => VcCesiumObject                                            | Get the Cesium object loaded by this component.                                 |
| getNearestUV       | (longitude: number, latitude: number) => [number, number]\|null | Get wind U/V components at a specific location.                                 |

### VcOverlayWindmap Dependencies

- netcdfjs: Used for parsing NetCDF meteorological data files.

### Installation

```bash
npm install netcdfjs
```

### References

- **[3D-Wind-Field GitHub](https://github.com/RaymanNg/3D-Wind-Field)**
- **[netcdfjs GitHub](https://github.com/cheminfo-js/netcdfjs)**
