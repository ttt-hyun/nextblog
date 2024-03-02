import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: ''
      }
    ]
  },
};


export default withContentlayer(nextConfig);
