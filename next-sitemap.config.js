/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://samyutyoga.com",
  generateRobotsTxt: true,
  exclude: ["/dashboard/*", "/login", "/api/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/dashboard/", "/api/", "/login"] },
    ],
  },
};
