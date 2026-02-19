/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // generates static HTML/CSS/JS
  images: {
    unoptimized: true, // required for static export if using next/image
  },
};

module.exports = nextConfig;