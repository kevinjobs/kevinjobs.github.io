const path = require('path');

module.exports = {
  basePath: "/blog",
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles')
    ]
  },
  images: {
    domains: ["mintforge-1252473272.cos.ap-nanjing.myqcloud.com"],
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}