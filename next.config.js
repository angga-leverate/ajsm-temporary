/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains:['img.youtube.com']
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_CMS_API_HOST}` + '/api/:path*'
      },
      {
        source: '/en/corporate-api/:path*',
        destination: 'https://corporate-api.sinarmasmsiglife.co.id/:path*',
      },
      {
        source: '/corporate-api/:path*',
        destination: 'https://corporate-api.sinarmasmsiglife.co.id/:path*',
      },
      {
        source: '/hcd-api/:path*',
        destination: 'https://corporate-api-hcd.sinarmasmsiglife.co.id/:path*',
      },
    ]
  },
}

const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.js'
  );

module.exports = withNextIntl(nextConfig);


