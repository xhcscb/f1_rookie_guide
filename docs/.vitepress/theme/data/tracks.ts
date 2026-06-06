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

export type TrackCorner = {
  id: string
  x: number
  y: number
  note: string
  labelX?: number
  labelY?: number
}

export type TrackInfo = {
  id: TrackId
  name: string
  fullName: string
  type: string
  summary: string
  path: string
  corners: TrackCorner[]
  link: string
}

const trackPaths: Record<TrackId, string> = {
  bahrain:
    'M86 70 L145 48 L214 52 L277 80 L324 68 L340 108 L308 142 L326 181 L268 207 L190 192 L142 157 L80 169 L54 128 Z',
  jeddah:
    'M57 202 L75 141 L67 93 L94 53 L145 41 L190 61 L239 74 L290 84 L329 113 L339 151 L308 175 L255 188 L205 180 L158 197 L98 212 Z',
  melbourne:
    'M67 95 C93 52 151 42 207 52 C267 64 323 91 337 139 C349 181 302 208 248 199 C201 191 184 161 138 175 C89 190 43 151 67 95Z',
  shanghai:
    'M126 62 C83 47 50 72 58 108 C65 141 105 149 127 124 C149 100 126 83 94 91 C78 96 78 113 96 120 C124 131 158 111 181 91 C204 70 241 78 262 105 L314 147 L345 179 L318 207 L173 205 L93 190 L63 154 C46 127 58 78 126 62Z',
  suzuka:
    'M61 148 C65 91 112 54 168 62 C216 70 215 121 176 126 C123 133 104 190 168 203 C231 215 288 184 310 138 C337 82 286 47 236 67 C196 83 204 132 241 139 C289 150 286 203 222 210 C151 218 74 198 61 148Z',
  miami:
    'M55 98 L91 58 L167 46 L247 65 L322 64 L344 97 L301 124 L326 159 L293 205 L207 202 L151 168 L87 183 L48 145 Z',
  imola:
    'M74 77 C118 44 204 45 267 70 L329 107 L311 145 L251 159 L292 205 L226 214 L159 180 L91 193 L55 154 L92 123 Z',
  monaco:
    'M93 177 L67 122 L93 72 L147 50 L197 66 L175 101 L225 115 L319 111 L344 146 L309 180 L245 173 L199 206 L134 205 Z',
  barcelona:
    'M62 126 L84 69 L170 50 C226 39 292 58 323 95 L302 145 L338 175 L299 204 L206 201 L157 174 L94 183 L53 154 Z',
  montreal:
    'M60 103 L107 59 L185 55 L266 69 L330 100 L335 139 L279 167 L217 160 L174 204 L99 197 L57 151 Z',
  'red-bull-ring':
    'M71 174 L105 88 L178 55 L287 61 L333 100 L292 145 L316 180 L244 207 L143 196 Z',
  silverstone:
    'M62 152 L95 87 L149 78 L207 48 L276 58 L331 86 L309 122 L344 158 L299 202 L230 178 L178 205 L108 192 Z',
  spa:
    'M54 183 L69 89 L112 54 L178 60 L250 39 L329 55 L344 98 L282 123 L310 166 L246 207 L169 194 L104 213 Z',
  hungaroring:
    'M66 132 C84 62 151 44 201 67 C246 89 219 135 181 130 C147 126 150 166 190 181 C240 200 294 177 320 130 C344 86 302 52 255 54 C217 55 191 95 150 111 C107 129 73 166 66 132Z',
  zandvoort:
    'M80 92 C102 48 167 45 222 67 C281 91 325 126 323 170 C320 205 265 217 214 196 C174 180 152 151 113 166 C67 184 47 132 80 92Z',
  monza:
    'M58 69 L284 55 L334 87 L300 121 L330 165 L286 205 L118 199 L72 165 L104 125 L62 100 Z',
  baku:
    'M58 200 L60 96 L103 57 L165 50 L178 84 L142 101 L167 126 L247 120 L329 133 L342 171 L316 207 Z',
  singapore:
    'M68 66 L147 48 L222 65 L326 61 L342 105 L287 135 L315 176 L245 205 L176 183 L105 206 L55 163 L92 120 Z',
  cota:
    'M65 168 L83 78 L127 51 L184 68 L229 51 L310 69 L344 99 L304 132 L330 172 L277 207 L202 189 L139 205 L75 193 Z',
  'mexico-city':
    'M55 73 L284 55 L340 92 L303 125 L328 173 L291 208 L218 196 L199 160 L133 181 L71 156 L103 113 Z',
  interlagos:
    'M74 84 C98 49 166 45 214 67 C277 96 332 101 340 145 C348 190 289 214 230 195 C187 181 157 141 119 162 C82 183 50 126 74 84Z',
  'las-vegas':
    'M45 190 L60 83 L136 56 L230 56 L341 66 L346 105 L245 111 L279 173 L225 205 L110 203 Z',
  lusail:
    'M70 144 C54 83 103 48 173 51 C254 54 329 84 342 139 C354 190 300 218 225 204 C171 194 146 151 105 173 C82 184 72 166 70 144Z',
  'abu-dhabi':
    'M76 88 L156 54 L255 61 L329 94 L309 136 L341 168 L305 204 L217 204 L160 172 L85 187 L52 144 Z'
}

export const tracks: TrackInfo[] = [
  {
    id: 'bahrain',
    name: '巴林',
    fullName: '巴林国际赛道',
    type: 'stop-go / 牵引 / 刹车稳定',
    summary: '看 T1 和 T10。后胎牵引和刹车锁死很容易暴露。',
    path: trackPaths.bahrain,
    corners: [
      { id: 'T1', x: 268, y: 207, note: '长直道后重刹车，发车和 DRS 攻防点。', labelX: 278, labelY: 226 },
      { id: 'T10', x: 142, y: 157, note: '下坡刹车，容易锁死。' },
      { id: 'T11', x: 80, y: 169, note: '出弯牵引影响后段速度。' }
    ],
    link: '/tracks/bahrain'
  },
  {
    id: 'jeddah',
    name: '吉达',
    fullName: '吉达滨海赛道',
    type: '高速街道 / 贴墙 / DRS',
    summary: '高速街道很快，攻防看尾流，也看胆量。',
    path: trackPaths.jeddah,
    corners: [
      { id: 'T1', x: 98, y: 212, note: '长直道后重刹，第一圈混乱点。', labelY: 232 },
      { id: 'T22', x: 308, y: 175, note: '高速贴墙，失误代价大。', labelX: 263, labelY: 192 },
      { id: 'T27', x: 57, y: 202, note: '最后一弯出口决定主直道攻击。', labelX: 33, labelY: 224 }
    ],
    link: '/tracks/jeddah'
  },
  {
    id: 'melbourne',
    name: '墨尔本',
    fullName: '阿尔伯特公园',
    type: '公园赛道 / 中高速 / DRS',
    summary: '节奏很快，重启和 DRS 区容易带来位置变化。',
    path: trackPaths.melbourne,
    corners: [
      { id: 'T1', x: 93, y: 52, note: '发车后第一判断点。', labelX: 69, labelY: 42 },
      { id: 'T9-T10', x: 267, y: 64, note: '高速段，脏空气明显。', labelX: 275, labelY: 50 },
      { id: 'T11', x: 337, y: 139, note: '刹车区攻防窗口。', labelX: 298, labelY: 134 }
    ],
    link: '/tracks/melbourne'
  },
  {
    id: 'shanghai',
    name: '上海',
    fullName: '上海国际赛车场',
    type: '长直道 / 长弯 / T14 重刹',
    summary: '看 T13 出口。能贴住，T14 才有戏。',
    path: trackPaths.shanghai,
    corners: [
      { id: 'T1-T2', x: 94, y: 91, note: '长弯，前胎压力最大。', labelX: 65, labelY: 72 },
      { id: 'T13', x: 93, y: 190, note: '出弯速度决定直道攻击。', labelX: 71, labelY: 216 },
      { id: 'T14', x: 318, y: 207, note: '长直道后重刹车，主要超车点。', labelX: 275, labelY: 226 }
    ],
    link: '/tracks/shanghai'
  },
  {
    id: 'suzuka',
    name: '铃鹿',
    fullName: '铃鹿赛道',
    type: '高速连续弯 / 节奏',
    summary: '看 S 弯节奏。跟太近会被脏空气拖住。',
    path: trackPaths.suzuka,
    corners: [
      { id: 'S', x: 112, y: 54, note: '连续换向，一错连错。', labelX: 88, labelY: 43 },
      { id: 'Spoon', x: 222, y: 210, note: '出口接长加速。', labelX: 226, labelY: 232 },
      { id: '130R', x: 310, y: 138, note: '高速信心和脏空气测试。', labelX: 268, labelY: 135 }
    ],
    link: '/tracks/suzuka'
  },
  {
    id: 'miami',
    name: '迈阿密',
    fullName: '迈阿密国际赛道',
    type: '临时赛道 / 长直道 / 低速段',
    summary: '高速段能打，低速区容易损失节奏。',
    path: trackPaths.miami,
    corners: [
      { id: 'T1', x: 322, y: 64, note: '发车后重刹。', labelX: 300, labelY: 45 },
      { id: 'T11', x: 301, y: 124, note: '长直道后进攻。', labelX: 312, labelY: 120 },
      { id: 'T14-T16', x: 87, y: 183, note: '慢速组合，牵引关键。', labelX: 35, labelY: 207 }
    ],
    link: '/tracks/miami'
  },
  {
    id: 'imola',
    name: '伊莫拉',
    fullName: '伊莫拉',
    type: '老派赛道 / 窄 / 节奏',
    summary: '超车不轻松，看发车、进站和失误。',
    path: trackPaths.imola,
    corners: [
      { id: 'Tamburello', x: 92, y: 123, note: '第一段攻防和节奏点。', labelX: 37, labelY: 105 },
      { id: 'Tosa', x: 159, y: 180, note: '低速出口，牵引重要。', labelX: 113, labelY: 206 },
      { id: 'Rivazza', x: 292, y: 205, note: '下坡刹车，失误代价大。', labelX: 244, labelY: 229 }
    ],
    link: '/tracks/imola'
  },
  {
    id: 'monaco',
    name: '摩纳哥',
    fullName: '摩纳哥',
    type: '街道 / 窄 / 排位为王',
    summary: '别等大超车。看排位、发车、进站窗口。',
    path: trackPaths.monaco,
    corners: [
      { id: 'T1', x: 67, y: 122, note: '发车后最拥挤。', labelX: 43, labelY: 112 },
      { id: 'Hairpin', x: 147, y: 50, note: '极低速，看机械抓地。', labelX: 98, labelY: 37 },
      { id: 'Chicane', x: 319, y: 111, note: '隧道后少数机会。', labelX: 267, labelY: 104 }
    ],
    link: '/tracks/monaco'
  },
  {
    id: 'barcelona',
    name: '巴塞罗那',
    fullName: '加泰罗尼亚赛道',
    type: '综合测试 / 中高速 / 轮胎',
    summary: '赛车好不好，这里藏不住。',
    path: trackPaths.barcelona,
    corners: [
      { id: 'T1', x: 84, y: 69, note: '长直道后主要进攻点。', labelX: 59, labelY: 57 },
      { id: 'T3', x: 170, y: 50, note: '长右弯，考下压力。', labelX: 178, labelY: 37 },
      { id: 'T9', x: 302, y: 145, note: '高速出弯，影响后段。', labelX: 314, labelY: 142 }
    ],
    link: '/tracks/barcelona'
  },
  {
    id: 'montreal',
    name: '蒙特利尔',
    fullName: '吉尔·维伦纽夫赛道',
    type: 'stop-go / 墙 / 重刹',
    summary: '刹车和出弯是主线，墙很近。',
    path: trackPaths.montreal,
    corners: [
      { id: 'T1-T2', x: 107, y: 59, note: '发车后低速组合。', labelX: 70, labelY: 46 },
      { id: 'Hairpin', x: 174, y: 204, note: '最重要的低速出口。', labelX: 127, labelY: 228 },
      { id: 'Wall', x: 335, y: 139, note: '最后减速弯，冠军墙风险。', labelX: 302, labelY: 134 }
    ],
    link: '/tracks/montreal'
  },
  {
    id: 'red-bull-ring',
    name: '红牛环',
    fullName: '红牛环',
    type: '短圈 / 上坡刹车 / DRS',
    summary: '圈短但攻防多。看前三个重刹点。',
    path: trackPaths['red-bull-ring'],
    corners: [
      { id: 'T1', x: 287, y: 61, note: '上坡出弯，影响 DRS。', labelX: 297, labelY: 47 },
      { id: 'T3', x: 333, y: 100, note: '重刹，常见超车点。', labelX: 309, labelY: 92 },
      { id: 'T4', x: 292, y: 145, note: '第二次刹车攻防。', labelX: 304, labelY: 144 }
    ],
    link: '/tracks/red-bull-ring'
  },
  {
    id: 'silverstone',
    name: '银石',
    fullName: '银石',
    type: '高速下压力 / 脏空气',
    summary: '看 Chapel 出口。Stowe 的超车从那里开始。',
    path: trackPaths.silverstone,
    corners: [
      { id: 'M-B', x: 207, y: 48, note: '高速换向，最看下压力。', labelX: 169, labelY: 37 },
      { id: 'Chapel', x: 276, y: 58, note: '直道前出口。', labelX: 286, labelY: 48 },
      { id: 'Stowe', x: 344, y: 158, note: '尾流后的刹车区。', labelX: 292, labelY: 157 }
    ],
    link: '/tracks/silverstone'
  },
  {
    id: 'spa',
    name: '斯帕',
    fullName: '斯帕',
    type: '长圈 / 高速 / 天气',
    summary: '尾流、下压力、天气，三件事一起看。',
    path: trackPaths.spa,
    corners: [
      { id: 'La Source', x: 69, y: 89, note: '发车和重启。', labelX: 35, labelY: 76 },
      { id: 'Raidillon', x: 112, y: 54, note: '带出 Kemmel 尾流。', labelX: 80, labelY: 39 },
      { id: 'Les Combes', x: 329, y: 55, note: '主要超车点。', labelX: 246, labelY: 43 }
    ],
    link: '/tracks/spa'
  },
  {
    id: 'hungaroring',
    name: '匈牙利',
    fullName: '亨格罗宁',
    type: '低速连续弯 / 难超',
    summary: '像没有墙的摩纳哥。排位很值钱。',
    path: trackPaths.hungaroring,
    corners: [
      { id: 'T1', x: 84, y: 62, note: '主要超车点。', labelX: 59, labelY: 49 },
      { id: 'T4', x: 201, y: 67, note: '高速左弯，考胆量。', labelX: 211, labelY: 54 },
      { id: 'T14', x: 66, y: 132, note: '最后一弯出口决定直道。', labelX: 29, labelY: 127 }
    ],
    link: '/tracks/hungaroring'
  },
  {
    id: 'zandvoort',
    name: '赞德福特',
    fullName: '赞德福特',
    type: '坡度 / 高速弯 / 窄',
    summary: '看带坡度弯和排位。正赛超车不轻松。',
    path: trackPaths.zandvoort,
    corners: [
      { id: 'T1', x: 80, y: 92, note: '主直道后进攻点。', labelX: 55, labelY: 79 },
      { id: 'Hugenholtz', x: 167, y: 45, note: '带坡度低速弯。', labelX: 121, labelY: 33 },
      { id: 'Arie', x: 323, y: 170, note: '最后带坡度弯，影响 DRS。', labelX: 287, labelY: 169 }
    ],
    link: '/tracks/zandvoort'
  },
  {
    id: 'monza',
    name: '蒙扎',
    fullName: '蒙扎',
    type: '低阻 / 尾流 / 重刹',
    summary: '直道很长，但 DRS Train 会把攻击锁住。',
    path: trackPaths.monza,
    corners: [
      { id: 'T1', x: 284, y: 55, note: '大直道后硬刹。', labelX: 294, labelY: 44 },
      { id: 'Roggia', x: 300, y: 121, note: '第二次动手机会。', labelX: 311, labelY: 119 },
      { id: 'Parabolica', x: 118, y: 199, note: '出口决定下一圈。', labelX: 77, labelY: 226 }
    ],
    link: '/tracks/monza'
  },
  {
    id: 'baku',
    name: '巴库',
    fullName: '巴库街道赛道',
    type: '超长直道 / 街道 / 安全车',
    summary: '长直道会放大尾流，窄弯会放大失误。',
    path: trackPaths.baku,
    corners: [
      { id: 'T1', x: 342, y: 171, note: '长直道后重刹。', labelX: 315, labelY: 163 },
      { id: 'Castle', x: 142, y: 101, note: '城堡段最窄。', labelX: 92, labelY: 93 },
      { id: 'T16', x: 58, y: 200, note: '出弯决定超长直道。', labelX: 34, labelY: 224 }
    ],
    link: '/tracks/baku'
  },
  {
    id: 'singapore',
    name: '新加坡',
    fullName: '滨海湾街道赛道',
    type: '夜赛 / 街道 / 热',
    summary: '体能、刹车、墙。安全车概率高。',
    path: trackPaths.singapore,
    corners: [
      { id: 'T1', x: 147, y: 48, note: '发车后组合弯。', labelX: 126, labelY: 36 },
      { id: 'T7', x: 326, y: 61, note: '长直道后进攻。', labelX: 303, labelY: 48 },
      { id: 'T14', x: 245, y: 205, note: '低速刹车，易锁死。', labelX: 214, labelY: 229 }
    ],
    link: '/tracks/singapore'
  },
  {
    id: 'cota',
    name: '美洲赛道',
    fullName: 'COTA 美洲赛道',
    type: '综合 / 上坡 T1 / 高速 S',
    summary: 'T1 上坡很特别，高速 S 看赛车平衡。',
    path: trackPaths.cota,
    corners: [
      { id: 'T1', x: 83, y: 78, note: '上坡重刹，发车焦点。', labelX: 59, labelY: 64 },
      { id: 'S', x: 184, y: 68, note: '高速连续弯。', labelX: 194, labelY: 56 },
      { id: 'T12', x: 344, y: 99, note: '长直道后主要超车点。', labelX: 304, labelY: 91 }
    ],
    link: '/tracks/cota'
  },
  {
    id: 'mexico-city',
    name: '墨西哥城',
    fullName: '罗德里格斯兄弟赛道',
    type: '高海拔 / 长直道 / 低下压力',
    summary: '空气稀薄，刹车和冷却都难。',
    path: trackPaths['mexico-city'],
    corners: [
      { id: 'T1', x: 284, y: 55, note: '超长直道后重刹。', labelX: 294, labelY: 43 },
      { id: 'Stadium', x: 291, y: 208, note: '低速体育场段。', labelX: 236, labelY: 229 },
      { id: 'Peraltada', x: 71, y: 156, note: '最后弯出口。', labelX: 48, labelY: 181 }
    ],
    link: '/tracks/mexico-city'
  },
  {
    id: 'interlagos',
    name: '英特拉格斯',
    fullName: '英特拉格斯',
    type: '短圈 / 坡度 / 天气',
    summary: '节奏快，天气和安全车经常搅局。',
    path: trackPaths.interlagos,
    corners: [
      { id: 'S do Senna', x: 74, y: 84, note: '发车和进攻核心。', labelX: 32, labelY: 70 },
      { id: 'Ferradura', x: 277, y: 96, note: '中高速长弯。', labelX: 287, labelY: 84 },
      { id: 'Juncao', x: 230, y: 195, note: '上坡直道前出口。', labelX: 237, labelY: 222 }
    ],
    link: '/tracks/interlagos'
  },
  {
    id: 'las-vegas',
    name: '拉斯维加斯',
    fullName: '拉斯维加斯街道赛道',
    type: '长直道 / 低温 / 街道',
    summary: '低温让轮胎窗口更难，长直道让尾流更狠。',
    path: trackPaths['las-vegas'],
    corners: [
      { id: 'T1', x: 60, y: 83, note: '发车重刹。', labelX: 36, labelY: 71 },
      { id: 'Strip', x: 230, y: 56, note: '长直道尾流。', labelX: 241, labelY: 44 },
      { id: 'T14', x: 279, y: 173, note: '直道末端攻击点。', labelX: 291, labelY: 173 }
    ],
    link: '/tracks/las-vegas'
  },
  {
    id: 'lusail',
    name: '卢塞尔',
    fullName: '卢塞尔',
    type: '高速长弯 / 轮胎负荷',
    summary: '轮胎负荷很高，跟车会让温度更难控。',
    path: trackPaths.lusail,
    corners: [
      { id: 'T1', x: 103, y: 48, note: '主直道后进攻。', labelX: 78, labelY: 38 },
      { id: 'T6', x: 342, y: 139, note: '中速节奏点。', labelX: 318, labelY: 132 },
      { id: 'T12-T14', x: 225, y: 204, note: '高速连续弯，轮胎压力大。', labelX: 185, labelY: 229 }
    ],
    link: '/tracks/lusail'
  },
  {
    id: 'abu-dhabi',
    name: '阿布扎比',
    fullName: '亚斯码头赛道',
    type: '现代赛道 / 长直道 / 低速段',
    summary: '看两条长直道后的刹车区，以及低速段牵引。',
    path: trackPaths['abu-dhabi'],
    corners: [
      { id: 'T5', x: 156, y: 54, note: '长直道前出口。', labelX: 166, labelY: 42 },
      { id: 'T6', x: 329, y: 94, note: '直道后重刹。', labelX: 304, labelY: 85 },
      { id: 'T9', x: 341, y: 168, note: '长直道后主要攻防。', labelX: 317, labelY: 164 }
    ],
    link: '/tracks/abu-dhabi'
  }
]
