// import { withContentlayer } from 'next-contentlayer';
const { createContentlayerPlugin } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

// export default withContentlayer(nextConfig);
module.exports = withContentlayer(nextConfig);