import { inject } from 'vue'
import { vcKey } from '@vue-cesium/utils/config'
import { VcViewerProvider } from '@vue-cesium/utils/types'

export default function useVueCesium() {
  return inject<VcViewerProvider>(vcKey)
}
