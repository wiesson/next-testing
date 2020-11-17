// next.config.js
module.exports = {
  i18n: {
    locales: ["de", "en", "fr", "it"],
    defaultLocale: "de",
  },
  async rewrites() {
    return [
      {
        source: "/api/v1/hello",
        destination: "https://www.vercel.com",
      },
      {
        source: "/api/v2/hello",
        destination: "https://www.vercel.com",
        locale: false,
      },
    ];
  },
};
