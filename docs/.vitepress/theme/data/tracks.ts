export type TrackId =
  | 'bahrain'
  | 'jeddah'
  | 'melbourne'
  | 'shanghai'
  | 'suzuka'
  | 'miami'
  | 'imola'
  | 'monaco'
  | 'barcelona'
  | 'montreal'
  | 'red-bull-ring'
  | 'silverstone'
  | 'spa'
  | 'hungaroring'
  | 'zandvoort'
  | 'monza'
  | 'baku'
  | 'singapore'
  | 'cota'
  | 'mexico-city'
  | 'interlagos'
  | 'las-vegas'
  | 'lusail'
  | 'abu-dhabi'

export type TrackInfo = {
  id: TrackId
  name: string
  fullName: string
  type: string
  summary: string
  path: string
  corners: Array<{ id: string; x: number; y: number; note: string }>
  link: string
}

const shapes = {
  flowing: 'M62 142 C42 78 89 42 151 55 C202 66 190 112 236 108 C295 102 302 54 336 83 C366 110 335 166 280 174 C219 183 206 140 163 173 C119 207 76 190 62 142Z',
  street: 'M72 178 L96 70 L164 48 L242 76 L318 112 L292 178 L208 205 L124 199 Z',
  speed: 'M48 74 L310 61 L335 92 L270 124 L326 168 L286 205 L80 185 L55 150 L120 116 Z',
  technical: 'M54 112 C104 45 178 48 201 94 C221 134 157 137 169 172 C182 211 259 201 302 157 C343 115 304 58 249 65 C199 72 162 113 105 146 C77 161 47 146 54 112Z',
  long: 'M45 170 L69 82 L122 49 L197 62 L315 41 L333 88 L247 129 L295 182 L211 207 L121 183 Z',
  stopgo: 'M48 121 L95 65 L177 64 L242 91 L315 76 L331 125 L284 181 L184 190 L98 163 Z'
}

export const tracks: TrackInfo[] = [
  {
    id: 'bahrain',
    name: '巴林',
    fullName: '巴林国际赛道',
    type: 'stop-go / 牵引 / 刹车稳定',
    summary: '看 T1 和 T10。后胎牵引和刹车锁死很容易暴露。',
    path: shapes.stopgo,
    corners: [
      { id: 'T1', x: 95, y: 65, note: '长直道后重刹车，发车和 DRS 攻防点。' },
      { id: 'T10', x: 242, y: 91, note: '下坡刹车，容易锁死。' },
      { id: 'T11', x: 315, y: 76, note: '出弯牵引影响后段速度。' }
    ],
    link: '/tracks/bahrain'
  },
  {
    id: 'jeddah',
    name: '吉达',
    fullName: '吉达滨海赛道',
    type: '高速街道 / 贴墙 / DRS',
    summary: '高速街道很快，攻防看尾流，也看胆量。',
    path: shapes.street,
    corners: [
      { id: 'T1', x: 96, y: 70, note: '长直道后重刹，第一圈混乱点。' },
      { id: 'T22', x: 292, y: 178, note: '高速贴墙，失误代价大。' },
      { id: 'T27', x: 124, y: 199, note: '最后一弯出口决定主直道攻击。' }
    ],
    link: '/tracks/jeddah'
  },
  {
    id: 'melbourne',
    name: '墨尔本',
    fullName: '阿尔伯特公园',
    type: '公园赛道 / 中高速 / DRS',
    summary: '节奏很快，重启和 DRS 区容易带来位置变化。',
    path: shapes.flowing,
    corners: [
      { id: 'T1', x: 89, y: 42, note: '发车后第一判断点。' },
      { id: 'T9-T10', x: 236, y: 108, note: '高速段，脏空气明显。' },
      { id: 'T11', x: 280, y: 174, note: '刹车区攻防窗口。' }
    ],
    link: '/tracks/melbourne'
  },
  {
    id: 'shanghai',
    name: '上海',
    fullName: '上海国际赛车场',
    type: '长直道 / 长弯 / T14 重刹',
    summary: '看 T13 出口。能贴住，T14 才有戏。',
    path: shapes.flowing,
    corners: [
      { id: 'T1-T2', x: 89, y: 42, note: '长弯，前胎压力最大。' },
      { id: 'T13', x: 280, y: 174, note: '出弯速度决定直道攻击。' },
      { id: 'T14', x: 336, y: 83, note: '长直道后重刹车，主要超车点。' }
    ],
    link: '/tracks/shanghai'
  },
  {
    id: 'suzuka',
    name: '铃鹿',
    fullName: '铃鹿赛道',
    type: '高速连续弯 / 节奏',
    summary: '看 S 弯节奏。跟太近会被脏空气拖住。',
    path: shapes.technical,
    corners: [
      { id: 'S', x: 104, y: 45, note: '连续换向，一错连错。' },
      { id: 'Spoon', x: 169, y: 172, note: '出口接长加速。' },
      { id: '130R', x: 302, y: 157, note: '高速信心和脏空气测试。' }
    ],
    link: '/tracks/suzuka'
  },
  {
    id: 'miami',
    name: '迈阿密',
    fullName: '迈阿密国际赛道',
    type: '临时赛道 / 长直道 / 低速段',
    summary: '高速段能打，低速区容易损失节奏。',
    path: shapes.speed,
    corners: [
      { id: 'T1', x: 310, y: 61, note: '发车后重刹。' },
      { id: 'T11', x: 270, y: 124, note: '长直道后进攻。' },
      { id: 'T14-T16', x: 80, y: 185, note: '慢速组合，牵引关键。' }
    ],
    link: '/tracks/miami'
  },
  {
    id: 'imola',
    name: '伊莫拉',
    fullName: '伊莫拉',
    type: '老派赛道 / 窄 / 节奏',
    summary: '超车不轻松，看发车、进站和失误。',
    path: shapes.technical,
    corners: [
      { id: 'Tamburello', x: 105, y: 146, note: '第一段攻防和节奏点。' },
      { id: 'Tosa', x: 169, y: 172, note: '低速出口，牵引重要。' },
      { id: 'Rivazza', x: 302, y: 157, note: '下坡刹车，失误代价大。' }
    ],
    link: '/tracks/imola'
  },
  {
    id: 'monaco',
    name: '摩纳哥',
    fullName: '摩纳哥',
    type: '街道 / 窄 / 排位为王',
    summary: '别等大超车。看排位、发车、进站窗口。',
    path: shapes.street,
    corners: [
      { id: 'T1', x: 96, y: 70, note: '发车后最拥挤。' },
      { id: 'Hairpin', x: 164, y: 48, note: '极低速，看机械抓地。' },
      { id: 'Chicane', x: 318, y: 112, note: '隧道后少数机会。' }
    ],
    link: '/tracks/monaco'
  },
  {
    id: 'barcelona',
    name: '巴塞罗那',
    fullName: '加泰罗尼亚赛道',
    type: '综合测试 / 中高速 / 轮胎',
    summary: '赛车好不好，这里藏不住。',
    path: shapes.flowing,
    corners: [
      { id: 'T1', x: 89, y: 42, note: '长直道后主要进攻点。' },
      { id: 'T3', x: 151, y: 55, note: '长右弯，考下压力。' },
      { id: 'T9', x: 236, y: 108, note: '高速出弯，影响后段。' }
    ],
    link: '/tracks/barcelona'
  },
  {
    id: 'montreal',
    name: '蒙特利尔',
    fullName: '吉尔·维伦纽夫赛道',
    type: 'stop-go / 墙 / 重刹',
    summary: '刹车和出弯是主线，墙很近。',
    path: shapes.stopgo,
    corners: [
      { id: 'T1-T2', x: 95, y: 65, note: '发车后低速组合。' },
      { id: 'Hairpin', x: 184, y: 190, note: '最重要的低速出口。' },
      { id: 'Wall', x: 331, y: 125, note: '最后减速弯，冠军墙风险。' }
    ],
    link: '/tracks/montreal'
  },
  {
    id: 'red-bull-ring',
    name: '红牛环',
    fullName: '红牛环',
    type: '短圈 / 上坡刹车 / DRS',
    summary: '圈短但攻防多。看前三个重刹点。',
    path: shapes.speed,
    corners: [
      { id: 'T1', x: 310, y: 61, note: '上坡出弯，影响 DRS。' },
      { id: 'T3', x: 270, y: 124, note: '重刹，常见超车点。' },
      { id: 'T4', x: 326, y: 168, note: '第二次刹车攻防。' }
    ],
    link: '/tracks/red-bull-ring'
  },
  {
    id: 'silverstone',
    name: '银石',
    fullName: '银石',
    type: '高速下压力 / 脏空气',
    summary: '看 Chapel 出口。Stowe 的超车从那里开始。',
    path: shapes.stopgo,
    corners: [
      { id: 'M-B', x: 242, y: 91, note: '高速换向，最看下压力。' },
      { id: 'Chapel', x: 315, y: 76, note: '直道前出口。' },
      { id: 'Stowe', x: 331, y: 125, note: '尾流后的刹车区。' }
    ],
    link: '/tracks/silverstone'
  },
  {
    id: 'spa',
    name: '斯帕',
    fullName: '斯帕',
    type: '长圈 / 高速 / 天气',
    summary: '尾流、下压力、天气，三件事一起看。',
    path: shapes.long,
    corners: [
      { id: 'La Source', x: 69, y: 82, note: '发车和重启。' },
      { id: 'Raidillon', x: 122, y: 49, note: '带出 Kemmel 尾流。' },
      { id: 'Les Combes', x: 315, y: 41, note: '主要超车点。' }
    ],
    link: '/tracks/spa'
  },
  {
    id: 'hungaroring',
    name: '匈牙利',
    fullName: '亨格罗宁',
    type: '低速连续弯 / 难超',
    summary: '像没有墙的摩纳哥。排位很值钱。',
    path: shapes.technical,
    corners: [
      { id: 'T1', x: 104, y: 45, note: '主要超车点。' },
      { id: 'T4', x: 201, y: 94, note: '高速左弯，考胆量。' },
      { id: 'T14', x: 105, y: 146, note: '最后一弯出口决定直道。' }
    ],
    link: '/tracks/hungaroring'
  },
  {
    id: 'zandvoort',
    name: '赞德福特',
    fullName: '赞德福特',
    type: '坡度 / 高速弯 / 窄',
    summary: '看带坡度弯和排位。正赛超车不轻松。',
    path: shapes.flowing,
    corners: [
      { id: 'T1', x: 89, y: 42, note: '主直道后进攻点。' },
      { id: 'Hugenholtz', x: 151, y: 55, note: '带坡度低速弯。' },
      { id: 'Arie', x: 280, y: 174, note: '最后带坡度弯，影响 DRS。' }
    ],
    link: '/tracks/zandvoort'
  },
  {
    id: 'monza',
    name: '蒙扎',
    fullName: '蒙扎',
    type: '低阻 / 尾流 / 重刹',
    summary: '直道很长，但 DRS Train 会把攻击锁住。',
    path: shapes.speed,
    corners: [
      { id: 'T1', x: 310, y: 61, note: '大直道后硬刹。' },
      { id: 'Roggia', x: 270, y: 124, note: '第二次动手机会。' },
      { id: 'Parabolica', x: 80, y: 185, note: '出口决定下一圈。' }
    ],
    link: '/tracks/monza'
  },
  {
    id: 'baku',
    name: '巴库',
    fullName: '巴库街道赛道',
    type: '超长直道 / 街道 / 安全车',
    summary: '长直道会放大尾流，窄弯会放大失误。',
    path: shapes.street,
    corners: [
      { id: 'T1', x: 96, y: 70, note: '长直道后重刹。' },
      { id: 'Castle', x: 164, y: 48, note: '城堡段最窄。' },
      { id: 'T16', x: 292, y: 178, note: '出弯决定超长直道。' }
    ],
    link: '/tracks/baku'
  },
  {
    id: 'singapore',
    name: '新加坡',
    fullName: '滨海湾街道赛道',
    type: '夜赛 / 街道 / 热',
    summary: '体能、刹车、墙。安全车概率高。',
    path: shapes.street,
    corners: [
      { id: 'T1', x: 96, y: 70, note: '发车后组合弯。' },
      { id: 'T7', x: 318, y: 112, note: '长直道后进攻。' },
      { id: 'T14', x: 208, y: 205, note: '低速刹车，易锁死。' }
    ],
    link: '/tracks/singapore'
  },
  {
    id: 'cota',
    name: '美洲赛道',
    fullName: 'COTA 美洲赛道',
    type: '综合 / 上坡 T1 / 高速 S',
    summary: 'T1 上坡很特别，高速 S 看赛车平衡。',
    path: shapes.long,
    corners: [
      { id: 'T1', x: 69, y: 82, note: '上坡重刹，发车焦点。' },
      { id: 'S', x: 197, y: 62, note: '高速连续弯。' },
      { id: 'T12', x: 333, y: 88, note: '长直道后主要超车点。' }
    ],
    link: '/tracks/cota'
  },
  {
    id: 'mexico-city',
    name: '墨西哥城',
    fullName: '罗德里格斯兄弟赛道',
    type: '高海拔 / 长直道 / 低下压力',
    summary: '空气稀薄，刹车和冷却都难。',
    path: shapes.speed,
    corners: [
      { id: 'T1', x: 310, y: 61, note: '超长直道后重刹。' },
      { id: 'Stadium', x: 286, y: 205, note: '低速体育场段。' },
      { id: 'Peraltada', x: 80, y: 185, note: '最后弯出口。' }
    ],
    link: '/tracks/mexico-city'
  },
  {
    id: 'interlagos',
    name: '英特拉格斯',
    fullName: '英特拉格斯',
    type: '短圈 / 坡度 / 天气',
    summary: '节奏快，天气和安全车经常搅局。',
    path: shapes.flowing,
    corners: [
      { id: 'S do Senna', x: 89, y: 42, note: '发车和进攻核心。' },
      { id: 'Ferradura', x: 236, y: 108, note: '中高速长弯。' },
      { id: 'Juncao', x: 280, y: 174, note: '上坡直道前出口。' }
    ],
    link: '/tracks/interlagos'
  },
  {
    id: 'las-vegas',
    name: '拉斯维加斯',
    fullName: '拉斯维加斯街道赛道',
    type: '长直道 / 低温 / 街道',
    summary: '低温让轮胎窗口更难，长直道让尾流更狠。',
    path: shapes.speed,
    corners: [
      { id: 'T1', x: 310, y: 61, note: '发车重刹。' },
      { id: 'Strip', x: 270, y: 124, note: '长直道尾流。' },
      { id: 'T14', x: 326, y: 168, note: '直道末端攻击点。' }
    ],
    link: '/tracks/las-vegas'
  },
  {
    id: 'lusail',
    name: '卢塞尔',
    fullName: '卢塞尔',
    type: '高速长弯 / 轮胎负荷',
    summary: '轮胎负荷很高，跟车会让温度更难控。',
    path: shapes.flowing,
    corners: [
      { id: 'T1', x: 89, y: 42, note: '主直道后进攻。' },
      { id: 'T6', x: 236, y: 108, note: '中速节奏点。' },
      { id: 'T12-T14', x: 280, y: 174, note: '高速连续弯，轮胎压力大。' }
    ],
    link: '/tracks/lusail'
  },
  {
    id: 'abu-dhabi',
    name: '阿布扎比',
    fullName: '亚斯码头赛道',
    type: '现代赛道 / 长直道 / 低速段',
    summary: '看两条长直道后的刹车区，以及低速段牵引。',
    path: shapes.stopgo,
    corners: [
      { id: 'T5', x: 95, y: 65, note: '长直道前出口。' },
      { id: 'T6', x: 177, y: 64, note: '直道后重刹。' },
      { id: 'T9', x: 331, y: 125, note: '长直道后主要攻防。' }
    ],
    link: '/tracks/abu-dhabi'
  }
]
