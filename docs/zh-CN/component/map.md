---
title: 地图
lang: zh-CN
---

# 地图

## 基础用法

:::demo 使用 `map-style`, `center` 和 `zoom` 来定义一个地图.

map/basic

:::

## API

### Props

<!-- prettier-ignore -->
| 属性名 | 说明 | 类型 | 默认值 |
| ---- | ----------- | ---- | ------- |
| hash | If `true`, the map's position (zoom, center latitude, center longitude, bearing, and pitch) will be synced with the hash fragment of the page's URL. | ^[string]/^[boolean] | false |
| interactive | If `false`, no mouse, touch, or keyboard listeners will be attached to the map, so it will not respond to interaction. | ^[boolean] | true |
| bearingSnap | The threshold, measured in degrees, that determines when the map's bearing will snap to north. For example, with a `bearingSnap` of 7, if the user rotates the map within 7 degrees of north, the map will automatically snap to exact north.| ^[number] | 7 |
| attributionControl | If set, an [AttributionControl](https://maplibre.org/maplibre-gl-js/docs/API/classes/AttributionControl/) will be added to the map with the provided options. | ^[boolean] | true |
| maplibreLogo | If `true`, the MapLibre logo will be shown. | ^[boolean] | false |
| logoPosition | A string representing the position of the MapLibre wordmark on the map. | ^[enum]`'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | bottom-left |
| failIfMajorPerformanceCaveat | If `true`, map creation will fail if the performance of MapLibre GL JS would be dramatically worse than expected. | ^[boolean] | false |
| preserveDrawingBuffer | If `true`, the map's canvas can be exported to a PNG using `map.getCanvas().toDataURL()`. This is `false` by default as a performance optimization. | ^[boolean] | false |
| antialias | If `true`, the gl context will be created with MSAA antialiasing, which can be useful for antialiasing custom layers. This is `false` by default as a performance optimization. | ^[boolean] | false |
| refreshExpiredTiles | If `false`, the map won't attempt to re-request tiles once they expire per their HTTP `cacheControl`/`expires` headers. | ^[boolean] | true |
| maxBounds | If set, the map will be constrained to the given bounds. | ^[object]`LngLatBoundsLike` / ^[array]`[number, number]` | - |
| scrollZoom | If `true`, the "scroll to zoom" interaction is enabled. [AroundCenterOptions](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/AroundCenterOptions/) are passed as options to [ScrollZoomHandler](https://maplibre.org/maplibre-gl-js/docs/API/classes/ScrollZoomHandler/)#enable. | ^[boolean] / ^[object]`AroundCenterOptions`| true |
| minZoom | The minimum zoom level of the map (0-24). | ^[number] | 0 |
| maxZoom | The maximum zoom level of the map (0-24). | ^[number] | 22 |
| minPitch | The minimum pitch of the map (0-85). Values greater than 60 degrees are experimental and may result in rendering issues. If you encounter any, please raise an issue with details in the MapLibre project. | ^[number] | 0 |
| maxPitch | The maximum pitch of the map (0-85). Values greater than 60 degrees are experimental and may result in rendering issues. If you encounter any, please raise an issue with details in the MapLibre project. | ^[number] | 60 |
| boxZoom | If `true`, the "box zoom" interaction is enabled (see [BoxZoomHandler](https://maplibre.org/maplibre-gl-js/docs/API/classes/BoxZoomHandler/)). | ^[boolean] | true |
| dragRotate | If `true`, the "drag to rotate" interaction is enabled (see [DragRotateHandler](https://maplibre.org/maplibre-gl-js/docs/API/classes/DragRotateHandler/)). | ^[boolean] | true |
| dragPan | If `true`, the "drag to pan" interaction is enabled. An `Object` value is passed as options to [DragPanHandler](https://maplibre.org/maplibre-gl-js/docs/API/classes/DragPanHandler/)#enable. | ^[boolean] / ^[object]`DragPanOptions` | true |
| keyboard | If `true`, keyboard shortcuts are enabled (see [KeyboardHandler](https://maplibre.org/maplibre-gl-js/docs/API/classes/KeyboardHandler/)). | ^[boolean] | true |
| doubleClickZoom | If `true`, the "double click to zoom" interaction is enabled (see [DoubleClickZoomHandler](https://maplibre.org/maplibre-gl-js/docs/API/classes/DoubleClickZoomHandler/)). | ^[boolean] | true |
| touchZoomRotate | If `true`, the "pinch to rotate and zoom" interaction is enabled. An `Object` value is passed as options to [TwoFingersTouchZoomRotateHandler](https://maplibre.org/maplibre-gl-js/docs/API/classes/TwoFingersTouchZoomRotateHandler/)#enable. | ^[boolean] / ^[Object]`AroundCenterOptions` | true |
| touchPitch | If `true`, the "drag to pitch" interaction is enabled. An `Object` value is passed as options to [TwoFingersTouchPitchHandler](https://maplibre.org/maplibre-gl-js/docs/API/classes/TwoFingersTouchPitchHandler/)#enable. | ^[boolean] / ^[Object]`AroundCenterOptions` | true |
| cooperativeGestures | If `true` or set to an options object, the map is only accessible on desktop while holding Command/Ctrl and only accessible on mobile with two fingers. Interacting with the map using normal gestures will trigger an informational screen. With this option enabled, "drag to pitch" requires a three-finger gesture. Cooperative gestures are disabled when a map enters fullscreen using [FullscreenControl](https://maplibre.org/maplibre-gl-js/docs/API/classes/FullscreenControl/). | ^[boolean] / ^[Object]`GestureOptions` | - |
| trackResize | If `true`, the map will automatically resize when the browser window resizes. | ^[boolean] | true |
| center | The initial geographical centerpoint of the map. If `center` is not specified in the constructor options, MapLibre GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to `[0, 0]` Note: MapLibre GL JS uses longitude, latitude coordinate order (as opposed to latitude, longitude) to match GeoJSON. | ^[object]`LngLatLike` / ^[array]`[number, number]` | [0, 0] |
| zoom | The initial zoom level of the map. If `zoom` is not specified in the constructor options, MapLibre GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to `0`. | ^[number] | 0 |
| bearing | The initial bearing (rotation) of the map, measured in degrees counter-clockwise from north. If `bearing` is not specified in the constructor options, MapLibre GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to `0`. | ^[number] | 0 |
| pitch | The initial pitch (tilt) of the map, measured in degrees away from the plane of the screen (0-85). If `pitch` is not specified in the constructor options, MapLibre GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to `0`. Values greater than 60 degrees are experimental and may result in rendering issues. If you encounter any, please raise an issue with details in the MapLibre project. | ^[number] | 0 |
| renderWorldCopies | If `true`, multiple copies of the world will be rendered side by side beyond -180 and 180 degrees longitude. | ^[boolean] | true |
| maxTileCacheSize | The maximum number of tiles stored in the tile cache for a given source. If omitted, the cache will be dynamically sized based on the current viewport which can be set using `maxTileCacheZoomLevels` constructor options. | ^[number] | - |
| maxTileCacheZoomLevels | The maximum number of zoom levels for which to store tiles for a given source. Tile cache dynamic size is calculated by multiplying `maxTileCacheZoomLevels` with the approximate number of tiles in the viewport for a given source. | ^[number] | 5 |
| transformRequest | A callback run before the Map makes a request for an external URL. The callback can be used to modify the url, set headers, or set the credentials property for cross-origin requests. Expected to return an object with a `url` property and optionally `headers` and `credentials` properties. | ^[Function]`RequestTransformFunction` | - |
| transformCameraUpdate | A callback run before the map's camera is moved due to user input or animation. The callback can be used to modify the new center, zoom, pitch and bearing. Expected to return an object containing center, zoom, pitch or bearing values to overwrite. | ^[Function]`CameraUpdateTransformFunction` | - |
| locale | A patch to apply to the default localization table for UI strings, e.g. control tooltips. The `locale` object maps namespaced UI string IDs to translated strings in the target language; see [`src/ui/default_locale.js`](https://github.com/maplibre/maplibre-gl-js/blob/main/src/ui/default_locale.ts) for an example with all supported string IDs. The object may specify all UI strings (thereby adding support for a new translation) or only a subset of strings (thereby patching the default translation table). | ^[object]`any` | - |
| fadeDuration | Controls the duration of the fade-in/fade-out animation for label collisions after initial map load, in milliseconds. This setting affects all symbol layers. This setting does not affect the duration of runtime styling transitions or raster tile cross-fading. | ^[number] | 300 |
| crossSourceCollisions | If `true`, symbols from multiple sources can collide with each other during collision detection. If `false`, collision detection is run separately for the symbols in each source. | ^[boolean] | true |
| collectResourceTiming | If `true`, Resource Timing API information will be collected for requests made by GeoJSON and Vector Tile web workers (this information is normally inaccessible from the main Javascript thread). Information will be returned in a `resourceTiming` property of relevant `data` events. | ^[boolean] | false |
| clickTolerance | The max number of pixels a user can shift the mouse pointer during a click for it to be considered a valid click (as opposed to a mouse drag). | ^[number] | - |
| bounds | The initial bounds of the map. If `bounds` is specified, it overrides `center` and `zoom` constructor options. | ^[object]`LngLatBoundsLike` / ^[array]`[number, number]` | - |
| fitBoundsOptions | A [FitBoundsOptions](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/FitBoundsOptions/) options object to use _only_ when fitting the initial `bounds` provided above. | ^[object]`FitBoundsOptions`| - |
| localIdeographFontFamily | Defines a CSS font-family for locally overriding generation of glyphs in the 'CJK Unified Ideographs', 'Hiragana', 'Katakana' and 'Hangul Syllables' ranges. In these ranges, font settings from the map's style will be ignored, except for font-weight keywords (light/regular/medium/bold). Set to `false`, to enable font settings from the map's style for these glyph ranges. The purpose of this option is to avoid bandwidth-intensive glyph server requests. (See [Use locally generated ideographs](https://maplibre.org/maplibre-gl-js/docs/examples/local-ideographs).) | ^[string] / ^[boolean] | 'sans-serif' |
| mapStyle | The map's MapLibre style. This must be a JSON object conforming to the schema described in the [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/), or a URL to such JSON. | ^[object]`StyleSpecification` / ^[string] | - |
| pitchWithRotate | If `false`, the map's pitch (tilt) control with "drag to rotate" interaction will be disabled. | ^[boolean] | true |
| pixelRatio | The pixel ratio. The canvas' `width` attribute will be `container.clientWidth * pixelRatio` and its `height` attribute will be `container.clientHeight * pixelRatio`. Defaults to `devicePixelRatio` if not specified. | ^[number] | window.devicePixelRatio |
| validateStyle | If false, style validation will be skipped. Useful in production environment. | ^[boolean] | true |
| maxCanvasSize | The canvas' `width` and `height` max size. The values are passed as an array where the first element is max width and the second element is max height. You shouldn't set this above WebGl `MAX_TEXTURE_SIZE`. Defaults to [4096, 4096].| ^[array]`[number, number]` | [4096, 4096] |
| containerId | The HTML element's string `id`, which MapLibre GL JS will render the map. | ^[string] | 'mapContainer' |
| eventLayerId | The ID of a style layer. if provided this, Event will only be triggered if its location is within a visible feature in this layer. Compatible with `eventLayerId`: `mousedown`, `mouseup`, `mouseover`, `mouseout`, `mousemove`, `mouseenter`(required), `mouseleave`(required), `click`, `dblclick`, `contextmenu`, `touchstart`, `touchend`, `touchcancel` | ^[string] | - |

### Events

| 事件名         | 说明                                                     | 类型                                                         |
| -------------- | -------------------------------------------------------- | ------------------------------------------------------------ |
| beforeLoad     | Triggers before the maplibreObject is loaded.            | ^[Function]`(instance: VmComponentInternalInstance) => void` |
| ready          | Triggers when the maplibreObject is successfully loaded. | ^[Function]`(readyObj: VmReadyObject) => void`               |
| unready        | Triggers when the maplibreObject loading failed.         | ^[Function]`((e: any) => void`                               |
| destroyed      | Triggers when the maplibreObject is destroyed.           | ^[Function]`(instance: VmComponentInternalInstance) => void` |
| update:zoom    | Triggers when the zoom changed.                          | ^[Function]`(zoom: number) => void`                          |
| update:center  | Triggers when the center changed.                        | ^[Function]`(center: number) => void`                        |
| update:bearing | Triggers when the bearing changed.                       | ^[Function]`(bearing: number) => void`                       |
| update:pitch   | Triggers when the pitch changed.                         | ^[Function]`(pitch: number) => void`                         |
| touchEnd       | Triggers when touch end.                                 | ^[Function]`(evt: TouchEvent) => void`                       |

### Slots

| 插槽名  | 说明                                          |
| ------- | --------------------------------------------- |
| default | Default slot content of the vm-map component. |

### Exposes

| 名称              | 说明                                                | 类型                                                 |
| ----------------- | --------------------------------------------------- | ---------------------------------------------------- |
| load              | Load the component manually.                        | ^[Function]`() => Promise<VmReadyObject \| boolean>` |
| unload            | Destroy the loaded component manually.              | ^[Function]`() => Promise<boolean>`                  |
| reload            | Load the component manually.                        | ^[Function]`() => Promise<boolean>`                  |
| creatingPromise   | Determine whether the component is created by this. | ^[object]`Promise<VmReadyObject>`                    |
| maplibreObject    | The maplibreObject created by component.            | ^[object]`unknown`                                   |
| getMaplibreObject | Get the maplibreObject created by component.        | ^[Function]`() => unknown`                           |
