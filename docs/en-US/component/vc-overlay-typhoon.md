## VcOverlayTyphoon

Loads typhoon/hurricane path visualization overlay on the 3D map. Displays typhoon tracks with intensity-based coloring and forecast routes from various weather agencies.

### Basic usage

Basic usage of VcOverlayTyphoon component.

:::demo

overlays/vc-overlay-typhoon/usage

:::

### VcOverlayTyphoon Props

| Name               | Type                     | Default | Description                                                          |
| ------------------ | ------------------------ | ------- | -------------------------------------------------------------------- |
| typhoonRoutes      | Array\<VcTyphoonRoute\>  |         | `optional` Specify the typhoon route objects array.                  |
| pointProps         | (feature: any) => object |         | `optional` Callback function to customize point properties.          |
| linePrimitiveProps | (feature: any) => object |         | `optional` Callback function to customize line primitive properties. |
| lineGeometryProps  | (feature: any) => object |         | `optional` Callback function to customize line geometry properties.  |
| labelProps         | (feature: any) => object |         | `optional` Callback function to customize label properties.          |

### VcTyphoonRoute Interface

```typescript
interface VcTyphoonRoute {
  id?: string | number
  name: string // Typhoon name
  path: Array<[number, number]> // Path coordinates [lng, lat]
  intensity: Array<string> // Intensity levels (TD, TS, STS, TY, STY, SuperTY)
  colors?: { // Custom colors for intensities
    [key: string]: string
  }
  forecast?: { // Forecast routes
    agency: string // Forecast agency
    path: Array<[number, number]>
    color?: string
  }[]
}
```

### VcOverlayTyphoon Events

| Event name | Parameters                              | Description                             |
| ---------- | --------------------------------------- | --------------------------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggered before the object is loaded.  |
| ready      | (readyObj: VcReadyObject)               | Triggered when the object is loaded.    |
| destroyed  | (instance: VcComponentInternalInstance) | Triggered when the object is destroyed. |

### VcOverlayTyphoon Methods

| Method             | Parameters                                        | Description                                                                     |
| ------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------- |
| load               | () => Promise\<false \| VcReadyObject\>           | Manually load the component.                                                    |
| reload             | () => Promise\<false \| VcReadyObject\>           | Manually reload the component.                                                  |
| unload             | () => Promise\<boolean\>                          | Manually unload the component.                                                  |
| getCreatingPromise | () => Promise\<boolean \| VcReadyObject>          | Get a Promise object indicating whether the component was created successfully. |
| getCesiumObject    | () => VcCesiumObject                              | Get the Cesium object loaded by this component.                                 |
| addTyphoonRoute    | (route: VcTyphoonRoute) => void                   | Add a new typhoon route.                                                        |
| playTyphoonRoute   | (id: string \| number) => void                    | Play animation for a typhoon route.                                             |
| flyToTyphoonRoute  | (id: string \| number, duration?: number) => void | Fly the camera to a typhoon route.                                              |
| showForecast       | (id: string \| number, agency: string) => void    | Show forecast route for a specific agency.                                      |

### Intensity Color Mapping

Default intensity colors:

- **TD** (Tropical Depression): Green
- **TS** (Tropical Storm): Blue
- **STS** (Strong Tropical Storm): Yellow
- **TY** (Typhoon): Orange
- **STY** (Strong Typhoon): Purple
- **SuperTY** (Super Typhoon): Red

### Forecast Agencies

Common forecast agencies:

- China Hong Kong (香港)
- Japan Meteorological Agency (日本)
- Central Meteorological Administration (中央)
- USA National Hurricane Center (美国)
- Korea Meteorological Administration (韩国)

### References

- **[Typhoon Data Sources](https://www.jma.go.jp/jma/indexe.html)**
- **[Weather Services](https://weather.gov/)**
