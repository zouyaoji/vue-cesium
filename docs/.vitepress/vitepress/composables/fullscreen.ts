import { useToggle } from '@vueuse/core'

export function useFullScreen() {
  const [isFullScreen, toggleFullScreen] = useToggle()
  return {
    isFullScreen,
    toggleFullScreen
  }
}
