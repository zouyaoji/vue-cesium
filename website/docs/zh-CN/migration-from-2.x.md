## 从 VueCesium 2.x 升级

本文档将帮助你从 VueCesium 2.x 升级至 VueCesium.

### 不兼容更新

根据 vue 官方推荐风格和从简原则，简化了一些组件命名，由此带来的不便敬请谅解。以下是不兼容更新的列表：

### vc-viewer

#### Attributes

- `logo` -> `showCredit`

### vc-provider-imagery-arcgis-mapserver

- Renamed to `vc-provider-imagery-arcgis`

### vc-provider-terrain-arcgis-tiled-elevation

- Renamed to `vc-provider-terrain-arcgis`

### vc-provider-imagery-style-mapbox

- Renamed to `vc-provider-imagery-mapbox`

### vc-provider-imagery-tile-mapservice

- Renamed to `vc-provider-imagery-tileamp`

### vc-provider-imagery-openstreetmap

- Renamed to `vc-provider-imagery-osm`

### vc-provider-imagery-googleearth-enterprise

- Renamed to `vc-provider-imagery-google`

### vc-provider-imagery-tile-single

- Renamed to `vc-provider-imagery-singletile`

### vc-primitive-polyline-ground

- Renamed to `vc-primitive-ground-polyline`
