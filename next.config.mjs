/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**', // Allow any hostname
            port: '', // Leave empty to allow all ports
            pathname: '**', // Allow any path
          },
        ],
      },
};

export default nextConfig;
