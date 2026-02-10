import ReactGA from 'react-ga4'

// Only track analytics on the production domain
const isProdDomain = () =>
  typeof window !== 'undefined' &&
  (window.location.hostname === 'kindcycle.uk' || window.location.hostname === 'www.kindcycle.uk')

// Initialize GA4 with your measurement ID
export const initGA = (measurementId: string) => {
  if (!isProdDomain()) return
  ReactGA.initialize(measurementId)
}

// Track page views - GA4 syntax
export const trackPageView = (path: string) => {
  if (!isProdDomain()) return
  ReactGA.send({
    hitType: 'pageview',
    page_location: window.location.origin + path,
    page_path: path
  })
}

// Track custom events
export const trackEvent = (
  eventName: string,
  params?: { [key: string]: any }
) => {
  if (!isProdDomain()) return
  ReactGA.event(eventName, params)
}
