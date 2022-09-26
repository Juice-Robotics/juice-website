const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
  reactStrictMode: true,
  // assetPrefix: '/',
  images: {
    disableStaticImages: true
}
})
