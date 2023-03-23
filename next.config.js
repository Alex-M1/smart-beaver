// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      displayName: !isProd,
      ssr: true,
    },
  },
  rewrites: async () => ([
    {
      source: '/robots.txt',
      destination: '/_next/static/robots.txt',
    },
  ]),
};

// module.exports = withBundleAnalyzer(nextConfig);
module.exports = nextConfig;
