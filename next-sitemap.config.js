/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.codingelf.com',
    generateRobotsTxt: true, 
    generateIndexSitemap: false,
  }