# 数据网站

数据网站适合赛中辅助观赛和赛后复盘：看实时计时、圈速、stint、进站、轮胎衰退和位置变化。本站不接入实时数据，也不把这些站点作为后端数据源；读者使用时应注意各站的数据许可、缓存规则、登录要求和更新频率。

## 实时数据呈现

<div class="card-grid two">
  <ResourceCard
    title="F1 COSMOS（f1cosmo）"
    desc="实时计时和比赛数据呈现网站，适合边看比赛边观察车手间隔、位置变化和轮胎信息。非官方工具，使用时应留意数据延迟和来源说明。"
    url="https://f1cosmos.com/"
    :tags="['Live Timing', '实时数据', '观赛辅助']"
    level="新手"
  />
  <ResourceCard
    title="F1 Live Timing"
    desc="Formula 1 官方实时计时入口，适合核对赛中计时、分段和车手状态。部分功能可能受账号、地区或订阅限制影响。"
    url="https://www.formula1.com/en/timing/f1-live"
    :tags="['官方', 'Live Timing', '实时数据']"
    level="新手"
  />
  <ResourceCard
    title="Pitwall"
    desc="面向 F1 观赛的数据仪表盘，适合查看实时或近实时的计时、位置和比赛状态。适合已经理解基础计时术语的读者。"
    url="https://pitwall.tv/"
    :tags="['仪表盘', '实时数据', '观赛辅助']"
    level="进阶"
  />
  <ResourceCard
    title="F1 LivePulse"
    desc="实时比赛状态和数据展示入口，适合快速查看车手位置、间隔和赛事状态。适合作为官方计时之外的辅助视图。"
    url="https://www.f1livepulse.com/en"
    :tags="['Live Timing', '实时数据', '图表']"
    level="进阶"
  />
  <ResourceCard
    title="OpenF1 OW"
    desc="基于 OpenF1 数据的网页展示工具，适合观察实时数据字段如何转化成观赛仪表盘，也适合开发者参考交互设计。"
    url="https://www.openf1ow.com/"
    :tags="['OpenF1', '实时数据', '开源生态']"
    level="开发者"
  />
  <ResourceCard
    title="MultiViewer"
    desc="多视角观赛和计时辅助工具，适合已经使用合法转播或 F1 TV 的读者理解间隔、车载视角和位置变化。"
    url="https://multiviewer.app/"
    :tags="['计时', '工具', '观赛辅助']"
    level="进阶"
  />
</div>

## 赛后复盘与数据源

<div class="card-grid two">
  <ResourceCard
    title="FastF1"
    desc="Python 数据工具和文档，可读取圈速、计时、遥测、天气、赛程和会话结果。适合希望用代码复盘练习赛、排位和正赛的读者。"
    url="https://docs.fastf1.dev/"
    :tags="['Python', 'Telemetry', '开源']"
    level="开发者"
  />
  <ResourceCard
    title="OpenF1"
    desc="开源 F1 数据 API，适合学习数据字段、做小型分析或实验型项目。使用前应阅读接口说明和速率限制。"
    url="https://openf1.org/"
    :tags="['API', '开源', '数据']"
    level="开发者"
  />
  <ResourceCard
    title="F1 Tempo"
    desc="交互式圈速和比赛节奏分析网站，适合直观看不同车手的 lap time、stint 和轮胎变化。"
    url="https://www.f1-tempo.com/"
    :tags="['圈速', '图表', '赛后复盘']"
    level="进阶"
  />
  <ResourceCard
    title="Tracing Insights"
    desc="提供多种 F1 图表、telemetry 和赛事分析视图，适合进阶理解 race pace、轮胎策略和车手节奏。"
    url="https://tracinginsights.com/"
    :tags="['Telemetry', '策略', '图表']"
    level="进阶"
  />
  <ResourceCard
    title="F1DB"
    desc="开源历史数据库，提供 CSV、JSON、SQL 和 SQLite 等格式。适合做历史数据查询、SQL 练习和长期统计项目。"
    url="https://github.com/f1db/f1db"
    :tags="['历史数据', 'SQL', '开源']"
    level="开发者"
  />
</div>

## 使用建议

实时数据有延迟、丢包和字段解释差异，适合辅助观赛，不适合替代官方赛会文件。看圈速时要同时考虑轮胎、油量、交通、安全车、车手任务和天气；不要把单圈最快直接等同于赛车长期速度。使用 API、数据集或非官方仪表盘时，请先阅读许可、速率限制和账号要求，避免高频请求或违反服务条款。
