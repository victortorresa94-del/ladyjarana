/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ladyjarana.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: '/api/' },
    ],
  },
  exclude: ['/api/*'],
};
