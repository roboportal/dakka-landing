const config = {
  reactStrictMode: true,
  trailingSlash: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
}

if (process.env.NODE_ENV === 'production') {
  config.images = {
    loader: 'akamai',
    path: 'https://www.dakka.dev',
    domains: ['images.ctfassets.net'],
  }
}

module.exports = config
