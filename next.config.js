module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://82.11.225.179:11000/:path*',
      },
    ]
  },
}
