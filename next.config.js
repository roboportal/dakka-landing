const config = {
  reactStrictMode: true,
  trailingSlash: true,
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
