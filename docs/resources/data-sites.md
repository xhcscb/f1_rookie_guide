# 数据网站

数据网站适合赛后复盘：看圈速、stint、进站、轮胎衰退和位置变化。第一版本站不接入实时数据，也不把这些站点作为后端数据源。

<div class="card-grid two">
  <ResourceCard
    title="FastF1"
    desc="Python 数据工具和文档，适合希望用代码复盘练习赛、排位和正赛数据的读者。"
    url="https://docs.fastf1.dev/"
    :tags="['Python', 'Telemetry', '开源']"
    level="开发者"
  />
  <ResourceCard
    title="OpenF1"
    desc="开源 F1 数据 API，适合学习数据字段、做小型分析或实验型项目。"
    url="https://openf1.org/"
    :tags="['API', '开源', '数据']"
    level="开发者"
  />
  <ResourceCard
    title="F1 Tempo"
    desc="交互式圈速和比赛节奏分析网站，适合直观看不同车手的 lap time 和 stint 变化。"
    url="https://www.f1-tempo.com/"
    :tags="['圈速', '图表', '赛后复盘']"
    level="进阶"
  />
  <ResourceCard
    title="Tracing Insights"
    desc="提供多种 F1 图表、telemetry 和赛事分析视图，适合进阶理解 race pace 和轮胎策略。"
    url="https://tracinginsights.com/"
    :tags="['Telemetry', '策略', '图表']"
    level="进阶"
  />
  <ResourceCard
    title="Formula-Timer"
    desc="以实时计时体验为核心的工具站。使用时注意官方授权和数据来源说明。"
    url="https://formula-timer.com/"
    :tags="['计时', '工具']"
    level="进阶"
  />
</div>

## 使用建议

数据图表很容易让人过度解读。看圈速时要同时考虑轮胎、油量、交通、安全车、车手任务和天气；不要把单圈最快直接等同于赛车长期速度。

