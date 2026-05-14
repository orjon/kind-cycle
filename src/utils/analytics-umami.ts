import { isProdDomain } from '.'

declare global {
  interface Window {
    umami?: {
      track: (props: Record<string, unknown>) => void
    }
  }
}

export const trackPageViewUmami = (path: string) => {
  if (!isProdDomain()) return
  window.umami?.track({ url: path })
}
