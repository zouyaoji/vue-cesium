import { inject } from 'vue'
import { vcKey } from '@vue-cesium/utils/config'

export default function useVueCesium() {
  return inject(vcKey)
}
