// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "cdn.pixabay.com",
      "pixabay.com",
      "p16-amd-va.tiktokcdn.com",
      "image.shutterstock.com",
    ],
  },
};

module.exports = nextConfig;
