const config = {
  reactStrictMode: true,
  trailingSlash: true,
}

if (process.env.NODE_ENV === 'production') {
  config.images = {
    loader: 'akamai',
    path: 'https://www.dakka.dev/_next/static/media',
  }
}

module.exports = config
