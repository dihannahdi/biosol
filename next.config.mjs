/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cbi-backend.my.id",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      // Legacy product name redirects to benefit-based slugs
      {
        source: '/products/floraone',
        destination: '/products/formula-nutrisi-tanaman-lengkap',
        permanent: true,
      },
      {
        source: '/products/biokiller',
        destination: '/products/formula-pengendalian-ulat-grayak',
        permanent: true,
      },
      {
        source: '/products/biojagat',
        destination: '/products/formula-kesuburan-tanah-optimal',
        permanent: true,
      },
      {
        source: '/products/simbios',
        destination: '/products/formula-probiotik-unggas-premium',
        permanent: true,
      },
      {
        source: '/products/rajabio',
        destination: '/products/formula-produktivitas-ternak-optimal',
        permanent: true,
      },
      {
        source: '/products/megabio',
        destination: '/products/formula-penggemukan-sapi',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
