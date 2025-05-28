const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.gulahmedshop.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',  // Add this line
        pathname: '/**',  // Allow all paths within this domain
      },
      {
        protocol: 'https',
        hostname: 'perfumeonline.pk',   // Ye naya domain add karein
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;


