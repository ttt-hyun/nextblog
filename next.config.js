// import { withContentlayer } from 'next-contentlayer';
const { createContentlayerPlugin } = require("next-contentlayer");

/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? 'https://ttt-hyun.github.io/dev' : undefined,
  basePath : '/dev',
  reactStrictMode: false,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    loader: 'imgix',
    path: isProd ? 'https://ttt-hyun.github.io/dev' : undefined,

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