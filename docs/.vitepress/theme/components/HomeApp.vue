<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'

const tracks = [
  {
    id: 'shanghai',
    name: '上海',
    fullName: '上海国际赛车场',
    type: '长直道 + 长弯 + 重刹车',
    overtake: '中等',
    tyre: '中',
    drs: '强',
    summary: '重点看 T13 出弯到 T14 重刹车：后车能否贴住、DRS 是否足够、刹车区能否完成动作。',
    corners: ['T1-T2 长半径减速弯：看前胎是否推头', 'T13 长直道前出口：看出弯速度', 'T14 重刹车点：看内线攻防和锁死风险'],
    link: '/tracks/shanghai'
  },
  {
    id: 'monaco',
    name: '摩纳哥',
    fullName: '摩纳哥',
    type: '窄街道 + 低速弯 + 护墙',
    overtake: '困难',
    tyre: '低',
    drs: '弱',
    summary: '排位价值极高，正赛更多看发车、进站窗口和安全车，而不是期待大量赛道超车。',
    corners: ['T1 Sainte Devote：看发车拥挤', 'Loews 发夹弯：看低速牵引', '隧道后减速弯：少数攻击窗口'],
    link: '/tracks/monaco'
  },
  {
    id: 'monza',
    name: '蒙扎',
    fullName: '蒙扎',
    type: '高速 + 低下压力 + 重刹车',
    overtake: '容易',
    tyre: '中',
    drs: '强',
    summary: '适合学习尾流和 DRS，但形成 DRS Train 后，大家都有尾翼优势，超车反而会卡住。',
    corners: ['T1 Rettifilo：长直道后重刹车', 'Roggia：第二次刹车进攻', 'Parabolica：为下一圈 T1 准备尾流'],
    link: '/tracks/monza'
  },
  {
    id: 'suzuka',
    name: '铃鹿',
    fullName: '铃鹿',
    type: '高速连续弯 + 节奏赛道',
    overtake: '中等',
    tyre: '高',
    drs: '中',
    summary: '核心是节奏。后车在高速弯跟车会吃脏空气，想进攻必须先在 Spoon 出弯前做好准备。',
    corners: ['S 弯：看连续换向', 'Spoon：看出口准备', '130R：看高速稳定和脏空气'],
    link: '/tracks/suzuka'
  },
  {
    id: 'spa',
    name: '斯帕',
    fullName: '斯帕',
    type: '长圈 + 海拔变化 + 高速',
    overtake: '容易',
    tyre: '中',
    drs: '强',
    summary: '适合观察下压力取舍：直道快不等于全圈舒服，高速弯稳定和天气变量同样会改写比赛。',
    corners: ['La Source：发车和重启', 'Eau Rouge/Raidillon：高速上坡', 'Les Combes：Kemmel 直道后的主要超车点'],
    link: '/tracks/spa'
  },
  {
    id: 'silverstone',
    name: '银石',
    fullName: '银石',
    type: '高速弯群 + 长直道',
    overtake: '中等',
    tyre: '高',
    drs: '中',
    summary: '高速下压力和脏空气样本。很多 Stowe 攻击，从 Chapel 出弯就已经开始。',
    corners: ['Maggotts-Becketts：高速换向', 'Chapel：直道前出口', 'Stowe：尾流后的刹车区攻防'],
    link: '/tracks/silverstone'
  }
]

const phases = [
  { name: '发车与第一圈', focus: ['看前排是否守住内线', '看中游是否大幅升降', '看是否触发安全车'] },
  { name: '第一段轮胎', focus: ['看不同轮胎配方的圈速差', '看谁被困在脏空气里', '看车手是否报告过热或推头'] },
  { name: '进站窗口', focus: ['看进站前车距是否接近 pit loss', '看出站是否会遇到慢车', '看安全车/VSC 是否降低进站损失'] },
  { name: '最后 10 圈', focus: ['看后车是否在 1 秒内', '看前车是否守内线牺牲出口', '看罚时是否改变实际名次'] }
]

const terms = [
  ['DRS', '可变尾翼减阻系统，后车通常需要在检测点进入前车 1 秒内才能使用。', '/rules/drs-overtake-mode'],
  ['undercut', '先于对手进站换新胎，用新胎速度在对手停站前追回时间。', '/strategy/undercut'],
  ['overcut', '比对手晚停，利用旧胎仍有速度、清洁空气或对手交通损失来反超。', '/strategy/overcut'],
  ['pit window', '进站后能落在理想赛道位置的时间范围。', '/strategy/pit-window'],
  ['dirty air', '前车扰乱后的气流会让后车下压力下降，尤其影响高速弯和轮胎温度。', '/strategy/dirty-air'],
  ['DRS train', '一串车都在前车 1 秒内，大家都有 DRS，后车优势被抵消。', '/strategy/drs-train'],
  ['track limits', '赛车是否越过赛道边界，违反后可能删圈、警告或罚时。', '/rules/track-limits']
]

const selectedTrackId = ref('shanghai')
const selectedPhase = ref('进站窗口')
const query = ref('')
const gap = ref(1.8)
const tyreGain = ref(1.1)
const responseLaps = ref(2)
const trafficLoss = ref(0.6)

const selectedTrack = computed(() => tracks.find((track) => track.id === selectedTrackId.value) ?? tracks[0])
const phase = computed(() => phases.find((item) => item.name === selectedPhase.value) ?? phases[0])
const filteredTerms = computed(() => {
  const keyword = query.value.trim().toLowerCase()
  if (!keyword) return terms
  return terms.filter(([term, desc]) => `${term} ${desc}`.toLowerCase().includes(keyword))
})
const undercutGain = computed(() => tyreGain.value * responseLaps.value - trafficLoss.value)
const undercutVerdict = computed(() => {
  const remaining = gap.value - undercutGain.value
  if (remaining <= 0) return '可以尝试：新胎收益覆盖了当前差距'
  if (remaining <= 0.7) return '边缘机会：需要出站干净或对手旧胎掉速'
  return '风险较高：当前差距或交通损失太大'
})

const cards = [
  ['第一次看 F1', '先抓发车、轮胎、DRS、安全车和队友对比。', '/guide/watching-f1'],
  ['正赛怎么看', '按发车、轮胎段、进站窗口和最后十圈拆解比赛。', '/guide/race'],
  ['轮胎与进站', '理解软中硬、pit loss 和安全车为什么改变策略。', '/rules/tyres'],
  ['超车如何发生', '看出弯速度、尾流、DRS、轮胎和刹车区执行。', '/racecraft/overtaking'],
  ['赛道图鉴', '每条赛道先看关键弯、超车点和正赛变量。', '/tracks/'],
  ['资源导航', '官方资料、数据网站和内容创作者入口。', '/resources/']
]
</script>

<template>
  <main class="race-app">
    <section class="app-hero">
      <div>
        <p class="eyebrow">Racecraft 中文手册</p>
        <h1>F1 新手观赛控制台</h1>
        <p>把一场比赛拆成可操作的问题：现在看什么、术语是什么意思、进站是否合理、这条赛道哪里会发生攻防。</p>
        <div class="hero-actions">
          <a href="#watch">开始观赛</a>
          <a href="#strategy">判断策略</a>
          <a href="#terms">查术语</a>
        </div>
      </div>
      <div class="timing-board">
        <span>LIVE GUIDE</span>
        <strong>RACE MODE</strong>
        <dl>
          <div><dt>第一关注</dt><dd>赛道位置</dd></div>
          <div><dt>第二关注</dt><dd>轮胎窗口</dd></div>
          <div><dt>第三关注</dt><dd>DRS 距离</dd></div>
        </dl>
      </div>
    </section>

    <section id="watch" class="app-panel">
      <div class="panel-head">
        <p class="eyebrow">Live Race Desk</p>
        <h2>正赛观赛工作台</h2>
      </div>
      <div class="desk-controls">
        <label>比赛阶段<select v-model="selectedPhase"><option v-for="item in phases" :key="item.name">{{ item.name }}</option></select></label>
        <label>当前赛道<select v-model="selectedTrackId"><option v-for="track in tracks" :key="track.id" :value="track.id">{{ track.fullName }}</option></select></label>
      </div>
      <div class="desk-grid">
        <article class="desk-primary">
          <h3>现在先看这 3 件事</h3>
          <ol><li v-for="item in phase.focus" :key="item">{{ item }}</li></ol>
        </article>
        <article class="desk-card">
          <h3>{{ selectedTrack.fullName }}</h3>
          <p>{{ selectedTrack.summary }}</p>
          <div class="metric-grid">
            <span>超车 {{ selectedTrack.overtake }}</span>
            <span>轮胎 {{ selectedTrack.tyre }}</span>
            <span>DRS {{ selectedTrack.drs }}</span>
          </div>
        </article>
      </div>
    </section>

    <section class="app-split">
      <section id="strategy" class="app-panel">
        <div class="panel-head">
          <p class="eyebrow">Strategy Lab</p>
          <h2>Undercut 判断器</h2>
        </div>
        <div class="slider-list">
          <label>落后车距 {{ gap.toFixed(1) }} 秒<input v-model.number="gap" type="range" min="0.2" max="5" step="0.1"></label>
          <label>新胎收益 {{ tyreGain.toFixed(1) }} 秒/圈<input v-model.number="tyreGain" type="range" min="0.1" max="2.5" step="0.1"></label>
          <label>对手 {{ responseLaps }} 圈后回应<input v-model.number="responseLaps" type="range" min="1" max="5" step="1"></label>
          <label>出站交通损失 {{ trafficLoss.toFixed(1) }} 秒<input v-model.number="trafficLoss" type="range" min="0" max="4" step="0.1"></label>
        </div>
        <div class="verdict">
          <strong>{{ undercutVerdict }}</strong>
          <p>预计追回 {{ undercutGain.toFixed(1) }} 秒。策略不是玄学，而是时间差、轮胎、交通和赛道位置的组合。</p>
        </div>
      </section>

      <section id="terms" class="app-panel">
        <div class="panel-head">
          <p class="eyebrow">Radio Decoder</p>
          <h2>直播术语速查</h2>
        </div>
        <input v-model="query" class="term-input" type="search" placeholder="输入 DRS、undercut、脏空气...">
        <div class="term-list">
          <a v-for="[term, desc, link] in filteredTerms" :key="term" :href="withBase(link)">
            <strong>{{ term }}</strong>
            <span>{{ desc }}</span>
          </a>
        </div>
      </section>
    </section>

    <section class="app-panel">
      <div class="panel-head">
        <p class="eyebrow">Track Desk</p>
        <h2>赛道观察器</h2>
      </div>
      <div class="track-tabs">
        <button v-for="track in tracks" :key="track.id" :class="{ active: selectedTrackId === track.id }" type="button" @click="selectedTrackId = track.id">{{ track.name }}</button>
      </div>
      <div class="track-console">
        <div class="track-visual"><span>{{ selectedTrack.name }}</span></div>
        <div>
          <h3>{{ selectedTrack.fullName }} · {{ selectedTrack.type }}</h3>
          <p>{{ selectedTrack.summary }}</p>
          <ul><li v-for="corner in selectedTrack.corners" :key="corner">{{ corner }}</li></ul>
          <a class="read-more" :href="withBase(selectedTrack.link)">打开赛道图鉴</a>
        </div>
      </div>
    </section>

    <section class="app-card-grid">
      <a v-for="[title, desc, link] in cards" :key="title" class="app-link-card" :href="withBase(link)">
        <strong>{{ title }}</strong>
        <p>{{ desc }}</p>
      </a>
    </section>
  </main>
</template>
