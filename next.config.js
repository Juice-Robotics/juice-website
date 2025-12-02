const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
  reactStrictMode: true,
  output: 'export',
  // assetPrefix: '/',
  images: {
    disableStaticImages: true,
    unoptimized: true
  }
})
