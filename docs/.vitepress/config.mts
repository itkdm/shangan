import { defineConfig } from 'vitepress'
import { createSeoHead } from './seo'

const siteUrl = process.env.SITE_URL

export default defineConfig({
  lang: 'zh-CN',
  title: '布吉岛上岸指南',
  description: '从三大运营商招聘开始，了解岗位选择、笔试准备和面试复盘，为公考与国企求职做好规划。',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#f5f7fb' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],
  transformHead({ pageData, siteData, title, description }) {
    return createSeoHead({ pageData, siteData, title, description, siteUrl })
  },
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: '布吉岛上岸指南',
    nav: [
      { text: '入门', link: '/getting-started/' },
      { text: '移动', link: '/cmcc/' },
      { text: '联通', link: '/chinaunicom/' },
      { text: '电信', link: '/chinatelecom/' },
      { text: '工具资源', link: '/tools/' }
    ],
    sidebar: {
      '/getting-started/': [{ text: '入门', items: [{ text: '概览', link: '/getting-started/' }] }],
      '/cmcc/': [{ text: '移动', items: [{ text: '概览', link: '/cmcc/' }] }],
      '/chinatelecom/': [{ text: '电信', items: [{ text: '概览', link: '/chinatelecom/' }] }],
      '/chinaunicom/': [{ text: '联通', items: [{ text: '概览', link: '/chinaunicom/' }] }],
      '/preparation/': [{ text: '备考方法', items: [{ text: '概览', link: '/preparation/' }] }],
      '/recruitment/': [{ text: '招聘信息', items: [{ text: '概览', link: '/recruitment/' }] }],
      '/cases/': [{ text: '经验复盘', items: [{ text: '概览', link: '/cases/' }] }],
      '/tools/': [{ text: '工具资源', items: [{ text: '概览', link: '/tools/' }] }]
    },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新于' },
    footer: {
      message: '每一次备考，都离上岸更近一步。本站为独立备考指南，与相关招聘单位无隶属关系。',
      copyright: 'Copyright © 2026 布吉岛'
    }
  }
})
