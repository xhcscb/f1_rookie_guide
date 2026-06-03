# Codex 开发 Prompt：F1 新手观赛知识库 / Racecraft 中文手册

你是一个资深前端工程师、技术写作者和信息架构设计师。请为我开发一个面向中文 F1 新手的静态知识库网站，项目定位是：帮助第一次或刚开始看 F1 的中文用户系统理解比赛规则、策略、车手操作、赛道弯角、车队车手背景和高质量外部资源。

重要：本项目第一阶段不做复杂数据分析、不做预测模型、不做实时数据、不抓取官方转播视频、不使用 F1 官方 logo 或车队 logo。目标是先做一个内容结构清晰、可持续扩展、适合 GitHub Pages 发布的知识库网站。

---

## 1. 项目目标

开发一个静态网站，暂定名称为：

**赛车战术板 / Racecraft 中文手册**

也可以在代码中保留 `siteTitle = "赛车战术板"`，副标题为：

**面向中文新手的 F1 观赛入门手册**

网站应解决以下问题：

1. 新手第一次看 F1，不知道比赛周末、排位赛、正赛、冲刺赛怎么看。
2. 新手听到 undercut、overcut、DRS、脏空气、安全车、track limits 等术语时不知道含义。
3. 新手看不懂为什么某个车手能超车、为什么某个进站策略成功、为什么某条赛道难超车。
4. 新手不知道每条赛道应该看哪些关键弯、哪里适合超车、哪里考验赛车特性。
5. 新手不知道哪些 F1 官方资料、数据网站、英文/中文解说资源值得关注。

第一版重点不是内容绝对完整，而是建立一个高质量信息架构和可扩展页面模板。

---

## 2. 技术栈要求

请使用：

- VitePress
- Markdown / MDX-like Vue component embedding where appropriate
- Vue 3 components for reusable cards
- TypeScript config if needed
- GitHub Pages deployment via GitHub Actions
- No backend
- No database
- No external paid API
- No web scraping

要求：

1. 项目本地能通过 `npm install`、`npm run docs:dev` 启动。
2. 能通过 `npm run docs:build` 正常构建。
3. 配置 GitHub Actions，使 push 到 `main` 后自动部署到 GitHub Pages。
4. 网站默认中文。
5. 页面响应式，手机端阅读体验优先。
6. 使用 VitePress 默认主题扩展，不要一开始做复杂自定义主题。
7. 尽量保持依赖少、结构清晰、可维护。

---

## 3. 交付物

请完成以下交付：

1. 完整项目脚手架。
2. VitePress 配置文件。
3. 首页。
4. 主要栏目页面和第一批示例内容。
5. 统一内容模板。
6. 可复用 Vue 组件。
7. GitHub Actions 部署配置。
8. README.md，说明如何本地运行、构建和部署。
9. AGENTS.md，写明后续 Codex/AI agent 继续维护本项目时应遵守的规则。
10. 基础 SEO metadata。
11. 简单版权/免责声明页面。

---

## 4. 推荐目录结构

请按以下结构创建项目。可以根据 VitePress 规范微调，但不要大幅偏离。

```text
f1-rookie-guide/
├── docs/
│   ├── index.md
│   ├── guide/
│   │   ├── index.md
│   │   ├── watching-f1.md
│   │   ├── weekend-format.md
│   │   ├── qualifying.md
│   │   └── race.md
│   ├── rules/
│   │   ├── index.md
│   │   ├── tyres.md
│   │   ├── pit-stop.md
│   │   ├── safety-car-vsc.md
│   │   ├── penalties.md
│   │   ├── track-limits.md
│   │   └── drs-overtake-mode.md
│   ├── strategy/
│   │   ├── index.md
│   │   ├── undercut.md
│   │   ├── overcut.md
│   │   ├── pit-window.md
│   │   ├── tyre-degradation.md
│   │   ├── dirty-air.md
│   │   └── drs-train.md
│   ├── racecraft/
│   │   ├── index.md
│   │   ├── racing-line.md
│   │   ├── braking-point.md
│   │   ├── apex.md
│   │   ├── exit-speed.md
│   │   └── overtaking.md
│   ├── tracks/
│   │   ├── index.md
│   │   ├── shanghai.md
│   │   ├── monaco.md
│   │   ├── monza.md
│   │   ├── suzuka.md
│   │   ├── spa.md
│   │   └── silverstone.md
│   ├── teams/
│   │   └── index.md
│   ├── drivers/
│   │   └── index.md
│   ├── resources/
│   │   ├── index.md
│   │   ├── official.md
│   │   ├── data-sites.md
│   │   ├── creators.md
│   │   └── chinese.md
│   ├── glossary/
│   │   └── index.md
│   ├── about/
│   │   ├── index.md
│   │   └── disclaimer.md
│   └── .vitepress/
│       ├── config.ts
│       └── theme/
│           ├── index.ts
│           ├── custom.css
│           └── components/
│               ├── ConceptCard.vue
│               ├── TermBadge.vue
│               ├── TrackCornerCard.vue
│               ├── ResourceCard.vue
│               └── LearningPath.vue
├── public/
│   ├── images/
│   └── track-maps/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── README.md
├── AGENTS.md
└── LICENSE
```

---

## 5. 网站信息架构

顶部导航建议：

```text
首页
新手路线
规则
策略
车手操作
赛道图鉴
车队车手
资源导航
术语表
```

首页应包括：

1. Hero 区域：一句话介绍网站。
2. 新手学习路径：7 步。
3. 核心栏目入口：规则、策略、操作、赛道、资源。
4. 推荐先读页面：undercut、DRS、轮胎、安全车、怎么看懂一次超车。
5. 免责声明简短提示：本站为非官方中文学习资料，不隶属于 Formula 1、FIA 或任何车队。

---

## 6. 页面内容要求

请为第一版生成简洁但有实际信息量的中文内容。不要只放占位符。每页约 400–1200 中文字即可，重点是结构清楚。

### 6.1 新手路线栏目

必须包含以下页面：

#### `/guide/watching-f1.md`
标题：第一次看 F1，应该先看什么？

内容结构：

- 一句话结论
- 新手先别急着看什么
- 看比赛时最重要的 5 个维度
  - 发车与第一圈
  - 轮胎与进站
  - DRS / Overtake Mode
  - 安全车与虚拟安全车
  - 队友对比
- 一场正赛的观赛顺序
- 下一步阅读链接

#### `/guide/weekend-format.md`
标题：一个 F1 比赛周末如何进行？

内容结构：

- 练习赛
- 排位赛
- 冲刺赛周末与普通周末差异
- 正赛
- 新手最容易误解的地方

#### `/guide/qualifying.md`
标题：排位赛怎么看？

内容结构：

- Q1/Q2/Q3 是什么
- 为什么排位赛很重要
- tow、track evolution、traffic 简单解释
- 为什么队友对比很关键

#### `/guide/race.md`
标题：正赛怎么看？

内容结构：

- 发车
- 第一圈
- 第一段轮胎
- 第一次进站窗口
- 中后段策略
- 最后 10 圈
- 完赛后如何复盘

---

### 6.2 规则栏目

规则页面统一模板：

```markdown
# 标题

## 一句话解释

## 比赛中怎么看出来？

## 为什么它重要？

## 新手常见误解

## 相关页面
```

必须生成：

- tyres.md：轮胎规则与软/中/硬胎
- pit-stop.md：进站与 pit loss
- safety-car-vsc.md：安全车与虚拟安全车
- penalties.md：罚时与常见处罚
- track-limits.md：赛道限制
- drs-overtake-mode.md：DRS 与 Overtake Mode 入门

注意：不要声称所有细节永久有效。规则可能随赛季变化。页面底部加：

```text
规则会随赛季变化，请以 FIA 和 Formula 1 官方发布为准。本站只提供观赛理解层面的解释。
```

---

### 6.3 策略栏目

策略页面统一模板：

```markdown
# 标题

## 一句话解释

## 它解决什么问题？

## 比赛中怎么看出来？

## 成功条件

## 失败原因

## 一个简化例子

## 相关页面
```

必须生成：

- undercut.md
- overcut.md
- pit-window.md
- tyre-degradation.md
- dirty-air.md
- drs-train.md

写作要求：

1. 不要堆术语。
2. 每个策略都要用新手能理解的例子。
3. 强调“策略不是玄学，而是时间差、轮胎、交通和赛道位置的组合”。
4. 解释 undercut 时要说明：先停不是一定赚，关键是新胎收益能否覆盖进站和出站交通损失。
5. 解释 overcut 时要说明：旧胎还能保持速度、前方空气干净、对手出站遇到交通时，晚停可能反而赚。
6. 解释 dirty air 时要说明：后车跟近前车时下压力下降，尤其影响高速弯和轮胎温度。

---

### 6.4 车手操作栏目

该栏目不是教用户真的开赛车，而是从观赛角度理解车手操作。

必须生成：

- racing-line.md：赛车线
- braking-point.md：刹车点
- apex.md：弯心
- exit-speed.md：出弯速度
- overtaking.md：超车如何发生

每篇页面结构：

```markdown
# 标题

## 一句话解释

## 观赛时怎么看？

## 为什么它影响超车或圈速？

## 常见误解

## 和其他概念的关系
```

特别要求：

`exit-speed.md` 要强调：很多直道超车的基础其实发生在直道前一个弯的出弯阶段。

`overtaking.md` 要解释：一次超车通常不是单一因素，而是出弯速度、尾流、DRS/Overtake Mode、轮胎状态、防守线路和刹车区执行共同作用。

---

### 6.5 赛道图鉴栏目

先生成以下赛道页面：

- shanghai.md
- monaco.md
- monza.md
- suzuka.md
- spa.md
- silverstone.md

赛道页面统一结构：

```markdown
# 赛道名

## 一句话特点

## 新手先看什么？

## 为什么这条赛道容易/不容易超车？

## 关键弯角

<TrackCornerCard ... />

## 排位赛看点

## 正赛看点

## 相关术语
```

注意：第一版可以使用文字描述，不必提供真实精确赛道图。如果没有授权图片，不要使用官方赛道图。可以在 `public/track-maps/` 预留位置，后续再放自绘示意图。

请为每条赛道至少写 3–5 个关键弯角卡片。

TrackCornerCard 组件字段建议：

```ts
name: string
corner: string
type: string
watch: string
why: string
```

示例：

```vue
<TrackCornerCard
  name="T14"
  corner="上海国际赛车场 14 号弯"
  type="长直道后的重刹车弯"
  watch="看后车能否利用长直道尾流和 DRS/Overtake Mode 在刹车区发起进攻。"
  why="这是上海站最典型的超车点，关键在于前一个弯的出弯速度和刹车区执行。"
/>
```

---

### 6.6 车队车手栏目

第一版只做总览页，不需要每个车手独立页面。

`/teams/index.md` 内容：

- 车队不是普通俱乐部，而是赛车研发、策略执行和车手表现的综合体。
- 新手看车队时应关注：赛车特性、策略风格、升级节奏、队友对比。
- 预留 10 支车队卡片位置。不要写过多容易过时的阵容细节。

`/drivers/index.md` 内容：

- 新手看车手不应只看完赛名次。
- 应关注：排位速度、正赛轮胎管理、雨战能力、防守能力、队友对比、失误率。
- 给出车手页面模板，后续扩展。

---

### 6.7 资源导航栏目

必须生成：

- `/resources/official.md`
- `/resources/data-sites.md`
- `/resources/creators.md`
- `/resources/chinese.md`

资源页面应使用 `ResourceCard.vue` 组件。

ResourceCard 字段建议：

```ts
title: string
desc: string
url: string
tags?: string[]
level?: '新手' | '进阶' | '硬核' | '开发者'
```

资源分类建议：

官方资料：

- Formula 1 官方网站
- FIA Regulations
- Formula 1 Glossary

数据网站：

- FastF1
- OpenF1
- F1 Tempo
- Tracing Insights
- Formula-Timer

英文内容：

- Chain Bear
- The Race
- Autosport
- RaceFans

中文内容：

- 先做空白推荐清单或“待补充”状态。
- 加一段筛选标准：长期更新、引用来源、区分事实和观点、避免纯情绪化输出。

注意：外部链接使用 `target="_blank"` 和 `rel="noopener noreferrer"`。

---

### 6.8 术语表

`/glossary/index.md` 做成按字母或主题分类的术语表。

第一版至少包括：

- DRS
- Overtake Mode
- undercut
- overcut
- pit window
- pit loss
- dirty air
- slipstream
- apex
- racing line
- lock-up
- flat spot
- track limits
- safety car
- virtual safety car
- parc fermé
- stint
- compound
- degradation
- graining
- blistering
- DRS train

每个术语用 1–3 句话解释，并链接到相关页面。

---

## 7. 组件要求

请实现以下 Vue 组件。

### 7.1 ConceptCard.vue

用途：栏目入口或概念卡片。

Props：

```ts
title: string
desc: string
link?: string
label?: string
```

样式：卡片式，hover 有轻微阴影变化，移动端单列。

### 7.2 TermBadge.vue

用途：术语标签。

Props：

```ts
term: string
href?: string
```

样式：小圆角标签，不要过度花哨。

### 7.3 TrackCornerCard.vue

Props：

```ts
name: string
corner: string
type: string
watch: string
why: string
```

展示结构：

- 弯角编号/名称
- 弯角类型
- 观赛时看什么
- 为什么重要

### 7.4 ResourceCard.vue

Props：

```ts
title: string
desc: string
url: string
tags?: string[]
level?: string
```

要求：

- 外部链接新窗口打开。
- 显示 level badge。
- tags 作为小标签展示。

### 7.5 LearningPath.vue

用途：首页展示新手 7 步路径。

Props 可以简单，也可以组件内部写固定数组。

7 步路径：

1. 比赛周末怎么看
2. 排位赛怎么看
3. 正赛怎么看
4. 轮胎与进站
5. DRS、尾流与脏空气
6. 超车与防守
7. 赛道弯角与策略

---

## 8. 样式要求

整体风格：

- 干净、理性、信息清晰。
- 不要过度赛车游戏风。
- 不使用官方 F1 红作为唯一主色，避免官方感太强。
- 可以使用深蓝、灰黑、白色、少量红色强调。
- 优先阅读体验。

CSS 要求：

1. 在 `.vitepress/theme/custom.css` 中做轻量样式覆盖。
2. 保证代码块、表格、卡片在手机端不溢出。
3. 卡片网格响应式：桌面 2–3 列，手机 1 列。
4. 首页 hero 文字不要太大，避免移动端压迫。

---

## 9. VitePress 配置要求

`.vitepress/config.ts` 至少配置：

- title
- description
- lang: zh-CN
- head metadata
- cleanUrls: true
- nav
- sidebar
- search provider: local
- socialLinks: GitHub 仓库链接占位
- lastUpdated: true

请合理组织 sidebar，不要让所有页面都堆在一个列表里。

---

## 10. GitHub Pages 部署

请创建 `.github/workflows/deploy.yml`。

要求：

1. 使用 GitHub Actions。
2. Node 版本使用当前 LTS 或 20+。
3. 安装依赖。
4. 构建 VitePress。
5. 将 `docs/.vitepress/dist` 部署到 GitHub Pages。

如果仓库名不是根域名仓库，VitePress `base` 可能需要配置为 `/仓库名/`。请在 README 里说明如何修改。

---

## 11. README.md 要求

README 应包括：

1. 项目简介。
2. 当前阶段目标。
3. 技术栈。
4. 本地运行：

```bash
npm install
npm run docs:dev
```

5. 构建：

```bash
npm run docs:build
npm run docs:preview
```

6. 部署到 GitHub Pages 的说明。
7. 内容贡献规范。
8. 版权/IP 注意事项。
9. 后续计划。

---

## 12. AGENTS.md 要求

请创建 `AGENTS.md`，写给后续 AI coding agent。

内容应包括：

1. 本项目是中文 F1 新手知识库。
2. 不要使用官方 F1 logo、车队 logo、官方转播截图或未经授权的图片。
3. 不要抓取官方网站或大规模复制官方数据。
4. 新增内容时要保持中立、解释性、面向新手。
5. 规则类内容要注明可能随赛季变化。
6. 页面应优先使用 Markdown 和已有组件。
7. 修改后必须运行：

```bash
npm run docs:build
```

8. 不要引入不必要的大型依赖。
9. 不要添加后端、数据库或复杂状态管理。
10. 如果新增外部资源链接，要检查链接有效，并给出简短说明。

---

## 13. 免责声明页面

请创建 `/about/disclaimer.md`。

内容包括：

1. 本站为非官方中文学习资料。
2. 本站与 Formula 1、FIA、各车队、赛事主办方无隶属、授权或赞助关系。
3. 本站不使用官方 logo 和官方转播素材。
4. 如页面引用外部资料，应以原始来源为准。
5. 规则和赛历可能变化，请以 FIA 和 Formula 1 官方发布为准。

---

## 14. 内容风格要求

请用中文写作，风格要求：

1. 清楚、克制、准确。
2. 面向新手，但不要幼稚化。
3. 每个概念都要说明“比赛中怎么看出来”。
4. 避免饭圈化表达。
5. 避免绝对化判断，例如“某车手一定最强”“某车队必然失败”。
6. 对不确定或会变化的内容，明确写“可能”“通常”“取决于赛道/轮胎/规则”。
7. 解释策略时优先使用时间差、轮胎状态、交通、赛道位置，而不是泛泛说“策略好”。

---

## 15. 不要做的事

请不要实现：

1. 用户登录。
2. 评论系统。
3. 后端 API。
4. 实时比赛数据。
5. 预测模型。
6. 官方视频下载或展示。
7. 官方/车队 logo 展示。
8. 复杂动画框架。
9. 付费系统。
10. 大型 UI 框架。

---

## 16. 第一版验收标准

完成后请确保：

1. `npm install` 成功。
2. `npm run docs:dev` 可本地启动。
3. `npm run docs:build` 无报错。
4. 首页可访问。
5. 顶部导航可正常跳转。
6. Sidebar 分组清晰。
7. 至少 25 个 Markdown 页面存在，且不是空页面。
8. 至少 5 个 Vue 组件存在并被实际使用。
9. 资源导航页有外部链接卡片。
10. 至少 6 条赛道页面存在，每条有 3–5 个关键弯角卡片。
11. 有免责声明页面。
12. 有 README.md。
13. 有 AGENTS.md。
14. 有 GitHub Actions deploy workflow。
15. 移动端页面布局不明显崩坏。

---

## 17. 推荐实现顺序

请按以下顺序开发：

1. 初始化 VitePress 项目。
2. 配置 package.json scripts。
3. 配置 `.vitepress/config.ts`。
4. 创建主题入口和 custom.css。
5. 实现 5 个基础组件。
6. 创建首页。
7. 创建栏目 index 页面。
8. 创建新手路线、规则、策略、车手操作页面。
9. 创建赛道页面并使用 TrackCornerCard。
10. 创建资源导航页面并使用 ResourceCard。
11. 创建术语表。
12. 创建 README、AGENTS、免责声明。
13. 创建 GitHub Actions workflow。
14. 运行 build 并修复错误。
15. 最后输出项目结构和运行说明。

---

## 18. 后续扩展预留

请在代码结构中为后续扩展留出空间，但不要现在实现复杂功能。

后续可能扩展：

1. 赛道自绘 SVG 图。
2. 每站观赛卡。
3. 策略小模拟器。
4. 术语搜索增强。
5. 车手独立页面。
6. 车队独立页面。
7. 数据分析页面。
8. 视频分镜脚本生成工具。

第一版只需保证静态知识库稳定、清晰、可发布。

---

## 19. 运行与提交说明

开发完成后，请给出：

1. 你创建了哪些文件。
2. 如何本地运行。
3. 如何构建。
4. 如何部署 GitHub Pages。
5. 当前还缺什么。
6. 下一步建议。

请直接开始实现，不要只给计划。
