# AGENTS.md

本文件是 AI Agent 在本仓库中的协作入口。页面元数据规则以 `CONTENT_GUIDE.md` 为准。

## 项目定位

- 品牌名称：布吉岛上岸指南。面向准备公务员、国企和三大运营商招聘考试的人群，首期聚焦中国移动、中国电信、中国联通。
- 本地目录：`D:\develop\project\shangan`；GitHub 仓库：`https://github.com/itkdm/shangan`；正式域名预留：`https://exam.itkdm.com`。
- 使用 VitePress + Markdown，由 pnpm 管理。保留文档站架构。
- 页面先提供简短概览，后续按用户安排逐步补充；不得编造招聘时间、考试范围、录取数据或官方政策。

## 开发与运行

- Node.js 20+、pnpm 10+。
- `pnpm docs:dev`：本地开发服务 `http://localhost:5183/`。
- `pnpm docs:build`：构建到 `docs/.vitepress/dist/`。
- `pnpm docs:preview`：预览最近一次构建结果。
- 5183 属于本项目。不要占用或停止 5173、5181、5182。
- 修改 VitePress 配置、SEO 逻辑或页面结构后运行 `pnpm docs:build`。

## 页面与内容

- 栏目入口由目录下的 `index.md` 承载，侧栏只保留栏目名和“概览”。
- 路由：`/getting-started/`、`/cmcc/`、`/chinatelecom/`、`/chinaunicom/`、`/preparation/`、`/recruitment/`、`/cases/`、`/tools/`。
- 涉及招聘要求、考试安排、报名入口时，优先链接对应单位当期官方公告，注明信息适用年份与地区；不得用过期信息冒充当前政策。
- 页面改名时同步检查侧栏、站内链接和 frontmatter，避免无必要改变公开 URL。

## SEO 与资源

- 每页填写唯一 `title` 和 `description`；head 逻辑集中在 `docs/.vitepress/seo.ts`。
- 默认不逐页制作分享图；个别页面可按需设置 `ogImage`。
- 图片和图标放在 `docs/public/`，用以 `/` 开头的站点路径引用。
- 不提交 `.env`、本地密钥、`node_modules/` 或构建输出。
- 未经用户明确要求，不要提交、推送或发布项目。
