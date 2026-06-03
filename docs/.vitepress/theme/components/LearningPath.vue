<script setup lang="ts">
import { withBase } from 'vitepress'

const steps = [
  { title: '比赛周末怎么看', href: '/guide/weekend-format' },
  { title: '排位赛怎么看', href: '/guide/qualifying' },
  { title: '正赛怎么看', href: '/guide/race' },
  { title: '轮胎与进站', href: '/rules/tyres' },
  { title: 'DRS、尾流与脏空气', href: '/rules/drs-overtake-mode' },
  { title: '超车与防守', href: '/racecraft/overtaking' },
  { title: '赛道弯角与策略', href: '/tracks/' }
]
</script>

<template>
  <section class="learning-path" aria-label="新手学习路径">
    <ol>
      <li v-for="step in steps" :key="step.href">
        <a :href="withBase(step.href)">{{ step.title }}</a>
      </li>
    </ol>
  </section>
</template>
