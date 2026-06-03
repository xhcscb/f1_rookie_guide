# 赛车战术板 / Racecraft 中文手册

面向中文 F1 新手的静态知识库，帮助读者系统理解比赛周末、规则、策略、车手操作、赛道弯角和高质量外部资源。

## 当前阶段目标

第一版专注信息架构和可扩展内容模板：不做实时数据、不做预测模型、不抓取官方内容、不使用 F1 官方 logo 或车队 logo。

## 技术栈

- VitePress
- Vue 3 组件
- Markdown 内容
- GitHub Pages + GitHub Actions

## 本地运行

```bash
npm install
npm run docs:dev
```

默认开发地址通常是 `http://localhost:5173/`，终端会显示实际端口。

## 构建与预览

```bash
npm run docs:build
npm run docs:preview
```

构建产物位于 `docs/.vitepress/dist`。

## 部署到 GitHub Pages

仓库推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动安装依赖、构建 VitePress，并把 `docs/.vitepress/dist` 部署到 GitHub Pages。

部署配置会在 GitHub Actions 中自动读取 `GITHUB_REPOSITORY`：

- 如果仓库是 `username.github.io` 或 `org.github.io`，VitePress `base` 自动为 `/`。
- 如果仓库是普通项目仓库，例如 `F1_rookie_guide`，VitePress `base` 自动为 `/F1_rookie_guide/`。

如需自定义域名或特殊路径，也可以通过环境变量手动覆盖：

```bash
VITEPRESS_BASE=/your-repo-name/ npm run docs:build
```

也可以在 GitHub Actions 的 build 步骤中加入对应环境变量。

## 内容贡献规范

- 用中文写作，面向新手，但避免幼稚化表达。
- 每个概念尽量说明“比赛中怎么看出来”。
- 规则、赛历、阵容和处罚尺度可能变化，涉及正式信息时链接到官方来源。
- 外部资源要检查链接有效性，并简短说明适合人群。
- 新增页面优先使用 Markdown 和已有组件：`ConceptCard`、`TermBadge`、`TrackCornerCard`、`ResourceCard`、`LearningPath`。

## 版权与 IP 注意事项

本站为非官方学习资料，不隶属于 Formula 1、FIA、任何车队或赛事主办方。不要提交官方 logo、车队 logo、官方转播截图、未经授权的赛道图或受版权保护的图片素材。

## 后续计划

- 自绘赛道示意图
- 分站观赛卡
- 车队与车手独立页面
- 术语搜索增强
- 赛后数据复盘文章
