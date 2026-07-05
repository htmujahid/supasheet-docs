import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/guide',
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);
