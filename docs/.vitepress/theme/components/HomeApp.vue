<script setup lang="ts">
import { withBase } from 'vitepress'
import { tracks } from '../data/tracks'
import TrackMap from './TrackMap.vue'

const pageHref = (href: string) => {
  if (!href.startsWith('/')) return href
  if (href.endsWith('/') || href.endsWith('.html')) return withBase(href)
  return withBase(`${href}.html`)
}

const modules = [
  ['新手路线', '第一次看、排位、正赛。', '/guide/'],
  ['规则', '轮胎、DRS、安全车、处罚。', '/rules/'],
  ['策略', 'undercut、overcut、进站窗。', '/strategy/'],
  ['车手操作', '赛车线、刹车点、出弯。', '/racecraft/'],
  ['赛道图鉴', '赛道图、关键弯、超车点。', '/tracks/'],
  ['术语表', '直播听不懂就查这里。', '/glossary/'],
  ['车队车手', '用队友对比看表现。', '/teams/'],
  ['资源导航', '官方资料和进阶网站。', '/resources/']
]

const starters = [
  ['第一次看 F1', '/guide/watching-f1'],
  ['正赛怎么看', '/guide/race'],
  ['轮胎与进站', '/rules/tyres'],
  ['怎么看超车', '/racecraft/overtaking']
]
</script>

<template>
  <main class="race-app">
    <section class="race-hero nav-hero">
      <div>
        <p class="race-kicker">RACECRAFT</p>
        <h1>赛车战术板</h1>
        <p>中文 F1 观赛导航。先看模块，再进细节。</p>
      </div>
      <div class="hero-fast-links">
        <a v-for="[title, href] in starters" :key="title" :href="pageHref(href)">
          {{ title }}
        </a>
      </div>
    </section>

    <section class="module-grid">
      <a v-for="[title, desc, href] in modules" :key="title" class="module-card" :href="pageHref(href)">
        <span>{{ title }}</span>
        <p>{{ desc }}</p>
      </a>
    </section>

    <section class="race-panel">
      <div class="panel-title">
        <span>TRACKS</span>
        <h2>赛道图鉴</h2>
      </div>
      <div class="home-track-grid">
        <a v-for="track in tracks" :key="track.id" class="home-track-card" :href="pageHref(track.link)">
          <TrackMap :track="track.id" />
          <strong>{{ track.name }}</strong>
          <p>{{ track.type }}</p>
        </a>
      </div>
    </section>
  </main>
</template>
