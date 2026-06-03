import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'

const __dirname = dirname(fileURLToPath(import.meta.url))
const siteTitle = '赛车战术板'
const siteDescription = '面向中文新手的 F1 观赛入门手册'

export default defineConfig({
  title: siteTitle,
  description: siteDescription,
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  base: process.env.VITEPRESS_BASE || '/',
  head: [
    ['meta', { name: 'theme-color', content: '#14213d' }],
    ['meta', { name: 'keywords', content: 'F1, Formula 1, 赛车, 观赛指南, 新手, 策略, 规则, 赛道' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: `${siteTitle} / Racecraft 中文手册` }],
    ['meta', { property: 'og:description', content: siteDescription }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }]
  ],
  vite: {
    publicDir: resolve(__dirname, '../../public')
  },
  themeConfig: {
    logo: false,
    siteTitle,
    nav: [
      { text: '首页', link: '/' },
      { text: '新手路线', link: '/guide/' },
      { text: '规则', link: '/rules/' },
      { text: '策略', link: '/strategy/' },
      { text: '车手操作', link: '/racecraft/' },
      { text: '赛道图鉴', link: '/tracks/' },
      {
        text: '车队车手',
        items: [
          { text: '看懂车队', link: '/teams/' },
          { text: '看懂车手', link: '/drivers/' }
        ]
      },
      { text: '资源导航', link: '/resources/' },
      { text: '术语表', link: '/glossary/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '新手路线',
          items: [
            { text: '栏目首页', link: '/guide/' },
            { text: '第一次看 F1', link: '/guide/watching-f1' },
            { text: '比赛周末', link: '/guide/weekend-format' },
            { text: '排位赛', link: '/guide/qualifying' },
            { text: '正赛', link: '/guide/race' }
          ]
        }
      ],
      '/rules/': [
        {
          text: '规则入门',
          items: [
            { text: '栏目首页', link: '/rules/' },
            { text: '轮胎规则', link: '/rules/tyres' },
            { text: '进站与 pit loss', link: '/rules/pit-stop' },
            { text: '安全车与 VSC', link: '/rules/safety-car-vsc' },
            { text: '罚时与处罚', link: '/rules/penalties' },
            { text: '赛道限制', link: '/rules/track-limits' },
            { text: 'DRS 与 Overtake Mode', link: '/rules/drs-overtake-mode' }
          ]
        }
      ],
      '/strategy/': [
        {
          text: '比赛策略',
          items: [
            { text: '栏目首页', link: '/strategy/' },
            { text: 'Undercut', link: '/strategy/undercut' },
            { text: 'Overcut', link: '/strategy/overcut' },
            { text: '进站窗口', link: '/strategy/pit-window' },
            { text: '轮胎衰退', link: '/strategy/tyre-degradation' },
            { text: '脏空气', link: '/strategy/dirty-air' },
            { text: 'DRS Train', link: '/strategy/drs-train' }
          ]
        }
      ],
      '/racecraft/': [
        {
          text: '车手操作',
          items: [
            { text: '栏目首页', link: '/racecraft/' },
            { text: '赛车线', link: '/racecraft/racing-line' },
            { text: '刹车点', link: '/racecraft/braking-point' },
            { text: '弯心', link: '/racecraft/apex' },
            { text: '出弯速度', link: '/racecraft/exit-speed' },
            { text: '超车如何发生', link: '/racecraft/overtaking' }
          ]
        }
      ],
      '/tracks/': [
        {
          text: '赛道图鉴',
          items: [
            { text: '栏目首页', link: '/tracks/' },
            { text: '上海', link: '/tracks/shanghai' },
            { text: '摩纳哥', link: '/tracks/monaco' },
            { text: '蒙扎', link: '/tracks/monza' },
            { text: '铃鹿', link: '/tracks/suzuka' },
            { text: '斯帕', link: '/tracks/spa' },
            { text: '银石', link: '/tracks/silverstone' }
          ]
        }
      ],
      '/resources/': [
        {
          text: '资源导航',
          items: [
            { text: '栏目首页', link: '/resources/' },
            { text: '官方资料', link: '/resources/official' },
            { text: '数据网站', link: '/resources/data-sites' },
            { text: '英文内容', link: '/resources/creators' },
            { text: '中文内容', link: '/resources/chinese' }
          ]
        }
      ],
      '/teams/': [
        {
          text: '车队车手',
          items: [
            { text: '看懂车队', link: '/teams/' },
            { text: '看懂车手', link: '/drivers/' }
          ]
        }
      ],
      '/drivers/': [
        {
          text: '车队车手',
          items: [
            { text: '看懂车队', link: '/teams/' },
            { text: '看懂车手', link: '/drivers/' }
          ]
        }
      ],
      '/glossary/': [
        {
          text: '术语表',
          items: [
            { text: '术语表', link: '/glossary/' }
          ]
        }
      ],
      '/about/': [
        {
          text: '关于本站',
          items: [
            { text: '关于', link: '/about/' },
            { text: '免责声明', link: '/about/disclaimer' }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    outline: {
      label: '本页目录',
      level: [2, 3]
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-name/f1-rookie-guide' }
    ],
    footer: {
      message: '非官方中文学习资料，不隶属于 Formula 1、FIA 或任何车队。',
      copyright: 'Copyright © 2026 Racecraft 中文手册 contributors'
    }
  }
})
