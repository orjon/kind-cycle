import ReactGA from 'react-ga4'

// Initialize GA4 with your measurement ID
export const initGA = (measurementId: string) => {
  ReactGA.initialize(measurementId)
}

// Track page views - GA4 syntax
export const trackPageView = (path: string) => {
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
  ReactGA.event(eventName, params)
}
