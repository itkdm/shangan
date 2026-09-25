# 页面元数据规范

每个公开页面都填写唯一的 `title` 和准确的 `description`。canonical、Open Graph、Twitter Card 和结构化数据由 VitePress SEO 配置统一生成。

发布日期明确且页面同步展示时才填写 `date`；`author`、`ogImage` 和 `noindex` 按需填写。更新时间默认由 VitePress 的 Git 时间提供。

不输出 `<meta name="keywords">`。备考搜索词应体现在页面主题和正文中。

正式站点域名预留为 `https://exam.itkdm.com`。本地构建不设置 `SITE_URL`；正式发布流程配置后再生成 canonical 和绝对分享图地址。
