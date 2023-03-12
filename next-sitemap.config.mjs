/** @type {import('next-sitemap').IConfig} */
export default {
    siteUrl: "https://juicerobotics.org",
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ['/outreach', '/redemption'],
    priority: 1,
}