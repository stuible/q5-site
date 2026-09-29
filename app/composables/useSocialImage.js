// Absolute URL to a 1200x630 crop of an image, sized for Open Graph / Twitter cards.
// Social crawlers don't follow <meta> tags during prerendering, so the crop is
// registered with prerenderRoutes() to make sure it ends up in the static build.
export function useSocialImage(src) {
  const img = useImage()
  const site = useSiteConfig()

  const path = img(src, { width: 1200, height: 630, fit: 'cover', format: 'jpeg' })
  prerenderRoutes([path])

  return new URL(path, site.url).href
}
