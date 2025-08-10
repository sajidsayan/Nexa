// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/ads.txt',
        destination: '/public/ads.txt',
        permanent: true,
      },
    ];
  },
};
