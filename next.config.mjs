/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dj493l0jy/image/upload/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
