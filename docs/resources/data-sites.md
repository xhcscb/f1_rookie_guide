# 数据网站

数据网站适合赛后复盘：看圈速、stint、进站、轮胎衰退和位置变化。本站不接入实时数据，也不把这些站点作为后端数据源；读者使用时应注意各站的数据许可、缓存规则和更新频率。

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
    title="MultiViewer"
    desc="多视角观赛和计时辅助工具，适合已经使用合法转播或 F1 TV 的读者理解间隔、车载视角和位置变化。"
    url="https://multiviewer.app/"
    :tags="['计时', '工具', '观赛辅助']"
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

数据图表很容易让人过度解读。看圈速时要同时考虑轮胎、油量、交通、安全车、车手任务和天气；不要把单圈最快直接等同于赛车长期速度。使用 API 或数据集时，请先阅读许可和速率限制，避免高频请求。
