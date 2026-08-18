export default ({ app }, inject) => {
  const getAssetUrl = (url) => {
    if (!url || typeof url !== 'string') return url
    if (
      url.startsWith('http://') ||
      url.startsWith('https://') ||
      url.startsWith('data:') ||
      url.startsWith('blob:')
    ) {
      return url
    }

    const base =
      (app && app.router && app.router.options && app.router.options.base) ||
      (typeof window !== 'undefined' && window.__NUXT__ && window.__NUXT__.config && window.__NUXT__.config._app && window.__NUXT__.config._app.basePath) ||
      '/'

    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base
    const cleanUrl = url.startsWith('/') ? url : `/${url}`

    if (cleanBase && cleanUrl.startsWith(cleanBase)) {
      return cleanUrl
    }

    return `${cleanBase}${cleanUrl}`
  }

  inject('asset', getAssetUrl)
}
