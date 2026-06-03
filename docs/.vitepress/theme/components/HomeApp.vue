<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import TrackMap from './TrackMap.vue'

type TrackId = 'shanghai' | 'monaco' | 'monza' | 'suzuka' | 'spa' | 'silverstone'

const tracks = [
  {
    id: 'shanghai',
    name: '上海',
    fullName: '上海国际赛车场',
    tag: '长直道 / T14 重刹',
    summary: '看 T13 出口。能贴住，T14 才有戏。',
    corners: ['T1-T2：长弯，前胎容易苦。', 'T13：出口速度决定直道攻击。', 'T14：重刹点，最像超车窗口。'],
    link: '/tracks/shanghai'
  },
  {
    id: 'monaco',
    name: '摩纳哥',
    fullName: '摩纳哥',
    tag: '窄街道 / 排位为王',
    summary: '别等大超车。看排位、发车、进站窗口。',
    corners: ['T1：发车后最乱。', 'Hairpin：慢到极致，看机械抓地。', '隧道后：少数能动手的位置。'],
    link: '/tracks/monaco'
  },
  {
    id: 'monza',
    name: '蒙扎',
    fullName: '蒙扎',
    tag: '低阻 / 尾流 / 重刹',
    summary: '直道很长，但 DRS Train 会把攻击锁住。',
    corners: ['T1：大直道后硬刹。', 'Roggia：第二次动手机会。', 'Parabolica：出口决定下一圈。'],
    link: '/tracks/monza'
  },
  {
    id: 'suzuka',
    name: '铃鹿',
    fullName: '铃鹿',
    tag: '节奏 / 高速连续弯',
    summary: '看 S 弯节奏。跟太近会被脏空气拖住。',
    corners: ['S 弯：一错连错。', 'Spoon：出口接长加速。', '130R：高速信心测试。'],
    link: '/tracks/suzuka'
  },
  {
    id: 'spa',
    name: '斯帕',
    fullName: '斯帕',
    tag: '长圈 / 高速 / 天气',
    summary: '尾流、下压力、天气，三件事一起看。',
    corners: ['La Source：发车和重启。', 'Raidillon：带出 Kemmel 尾流。', 'Les Combes：主要超车点。'],
    link: '/tracks/spa'
  },
  {
    id: 'silverstone',
    name: '银石',
    fullName: '银石',
    tag: '高速下压力 / 脏空气',
    summary: '看 Chapel 出口。Stowe 的超车从那里开始。',
    corners: ['Maggotts-Becketts：高速换向。', 'Chapel：直道前出口。', 'Stowe：尾流后刹车区。'],
    link: '/tracks/silverstone'
  }
] satisfies Array<{ id: TrackId; name: string; fullName: string; tag: string; summary: string; corners: string[]; link: string }>

const phases = [
  { name: '发车', focus: ['看内线', '看中游', '看安全车'] },
  { name: '第一段胎', focus: ['看圈速掉没掉', '看谁卡在脏空气', '看无线电抱怨'] },
  { name: '进站窗', focus: ['看 pit loss', '看出站交通', '看 VSC/SC'] },
  { name: '最后十圈', focus: ['看 1 秒差距', '看防守线', '看罚时'] }
]

const terms = [
  ['DRS', '尾翼打开，直道更快。不是超车按钮。', '/rules/drs-overtake-mode'],
  ['undercut', '先停换新胎，靠新胎圈速跳过对手。', '/strategy/undercut'],
  ['overcut', '晚停，赌旧胎还能快或对手出站遇交通。', '/strategy/overcut'],
  ['pit window', '停完会出在哪里。策略先看这个。', '/strategy/pit-window'],
  ['dirty air', '跟车下压力变差，高速弯最明显。', '/strategy/dirty-air'],
  ['DRS train', '一串车都有 DRS，后车反而超不动。', '/strategy/drs-train'],
  ['track limits', '出白线太多，排位删圈，正赛可能罚。', '/rules/track-limits']
]

const selectedTrackId = ref<TrackId>('shanghai')
const selectedPhase = ref('进站窗')
const query = ref('')
const gap = ref(1.8)
const tyreGain = ref(1.1)
const trafficLoss = ref(0.6)

const selectedTrack = computed(() => tracks.find((track) => track.id === selectedTrackId.value) ?? tracks[0])
const phase = computed(() => phases.find((item) => item.name === selectedPhase.value) ?? phases[0])
const filteredTerms = computed(() => {
  const keyword = query.value.trim().toLowerCase()
  return terms.filter(([term, desc]) => !keyword || `${term} ${desc}`.toLowerCase().includes(keyword))
})
const undercutGain = computed(() => tyreGain.value * 2 - trafficLoss.value)
const undercutVerdict = computed(() => {
  const left = gap.value - undercutGain.value
  if (left <= 0) return '能打'
  if (left <= 0.7) return '看出站'
  return '别急'
})

const cards = [
  ['第一次看 F1', '只看五件事。', '/guide/watching-f1'],
  ['正赛怎么看', '按阶段看。', '/guide/race'],
  ['轮胎与进站', '策略核心。', '/rules/tyres'],
  ['超车', '从出弯开始。', '/racecraft/overtaking'],
  ['赛道图鉴', '先认关键弯。', '/tracks/'],
  ['资源', '继续深挖。', '/resources/']
]
</script>

<template>
  <main class="race-app">
    <section class="race-hero">
      <div>
        <p class="race-kicker">RACECRAFT BOARD</p>
        <h1>看懂一场 F1</h1>
        <p>少背术语。盯位置、轮胎、DRS、进站窗。</p>
        <div class="hero-actions">
          <a href="#track">看赛道</a>
          <a href="#strategy">算策略</a>
          <a href="#terms">查术语</a>
        </div>
      </div>
      <TrackMap :track="selectedTrackId" />
    </section>

    <section id="watch" class="race-panel race-desk">
      <div class="panel-title">
        <span>LIVE DESK</span>
        <h2>现在看什么</h2>
      </div>
      <div class="desk-controls">
        <label>阶段<select v-model="selectedPhase"><option v-for="item in phases" :key="item.name">{{ item.name }}</option></select></label>
        <label>赛道<select v-model="selectedTrackId"><option v-for="track in tracks" :key="track.id" :value="track.id">{{ track.fullName }}</option></select></label>
      </div>
      <div class="focus-grid">
        <strong v-for="item in phase.focus" :key="item">{{ item }}</strong>
      </div>
    </section>

    <section id="track" class="race-panel track-desk">
      <div class="panel-title">
        <span>TRACK MAP</span>
        <h2>{{ selectedTrack.fullName }}</h2>
      </div>
      <div class="track-tabs">
        <button v-for="track in tracks" :key="track.id" :class="{ active: selectedTrackId === track.id }" type="button" @click="selectedTrackId = track.id">{{ track.name }}</button>
      </div>
      <div class="track-grid">
        <TrackMap :track="selectedTrackId" />
        <div class="track-copy">
          <b>{{ selectedTrack.tag }}</b>
          <p>{{ selectedTrack.summary }}</p>
          <ul><li v-for="corner in selectedTrack.corners" :key="corner">{{ corner }}</li></ul>
          <a class="read-more" :href="withBase(selectedTrack.link)">完整赛道页</a>
        </div>
      </div>
    </section>

    <section class="race-split">
      <section id="strategy" class="race-panel">
        <div class="panel-title">
          <span>STRATEGY</span>
          <h2>Undercut 快算</h2>
        </div>
        <div class="slider-list">
          <label>落后 {{ gap.toFixed(1) }} 秒<input v-model.number="gap" type="range" min="0.2" max="5" step="0.1"></label>
          <label>新胎收益 {{ tyreGain.toFixed(1) }} 秒/圈<input v-model.number="tyreGain" type="range" min="0.1" max="2.5" step="0.1"></label>
          <label>交通损失 {{ trafficLoss.toFixed(1) }} 秒<input v-model.number="trafficLoss" type="range" min="0" max="4" step="0.1"></label>
        </div>
        <div class="verdict">
          <span>{{ undercutVerdict }}</span>
          <p>两圈预计追回 {{ undercutGain.toFixed(1) }} 秒。</p>
        </div>
      </section>

      <section id="terms" class="race-panel">
        <div class="panel-title">
          <span>RADIO</span>
          <h2>术语速查</h2>
        </div>
        <input v-model="query" class="term-input" type="search" placeholder="DRS / undercut / 脏空气">
        <div class="term-list">
          <a v-for="[term, desc, link] in filteredTerms" :key="term" :href="withBase(link)">
            <strong>{{ term }}</strong>
            <span>{{ desc }}</span>
          </a>
        </div>
      </section>
    </section>

    <section class="app-card-grid">
      <a v-for="[title, desc, link] in cards" :key="title" class="app-link-card" :href="withBase(link)">
        <strong>{{ title }}</strong>
        <p>{{ desc }}</p>
      </a>
    </section>
  </main>
</template>
