import { writeFile } from 'node:fs/promises'

const overpassEndpoint = 'https://overpass.openstreetmap.fr/api/interpreter'
const elevationEndpoint = 'https://api.opentopodata.org/v1/srtm30m'
const userAgent = 'f1-rookie-guide/0.1 local static-data build'

const oldSummaries = {
  bahrain: {
    name: '巴林',
    fullName: '巴林国际赛道',
    type: 'stop-go / 牵引 / 刹车稳定',
    summary: '看 T1 和 T10。后胎牵引和刹车锁死很容易暴露。',
    corners: [
      { id: 'T1', note: '长直道后重刹车，发车和 DRS 攻防点。' },
      { id: 'T10', note: '下坡刹车，容易锁死。' },
      { id: 'T11', note: '出弯牵引影响后段速度。' }
    ]
  },
  jeddah: {
    name: '吉达',
    fullName: '吉达滨海赛道',
    type: '高速街道 / 贴墙 / DRS',
    summary: '高速街道很快，攻防看尾流，也看胆量。',
    corners: [
      { id: 'T1', note: '长直道后重刹，第一圈混乱点。' },
      { id: 'T22', note: '高速贴墙，失误代价大。' },
      { id: 'T27', note: '最后一弯出口决定主直道攻击。' }
    ]
  },
  melbourne: {
    name: '墨尔本',
    fullName: '阿尔伯特公园',
    type: '公园赛道 / 中高速 / DRS',
    summary: '节奏很快，重启和 DRS 区容易带来位置变化。',
    corners: [
      { id: 'T1', note: '发车后第一判断点。' },
      { id: 'T9-T10', note: '高速段，脏空气明显。' },
      { id: 'T11', note: '刹车区攻防窗口。' }
    ]
  },
  shanghai: {
    name: '上海',
    fullName: '上海国际赛车场',
    type: '长直道 / 长弯 / T14 重刹',
    summary: '看 T13 出口。能贴住，T14 才有戏。',
    corners: [
      { id: 'T1-T2', note: '长弯，前胎压力最大。' },
      { id: 'T13', note: '出弯速度决定直道攻击。' },
      { id: 'T14', note: '长直道后重刹车，主要超车点。' }
    ]
  },
  suzuka: {
    name: '铃鹿',
    fullName: '铃鹿赛道',
    type: '高速连续弯 / 节奏',
    summary: '看 S 弯节奏。跟太近会被脏空气拖住。',
    corners: [
      { id: 'S', note: '连续换向，一错连错。' },
      { id: 'Spoon', note: '出口接长加速。' },
      { id: '130R', note: '高速信心和脏空气测试。' }
    ]
  },
  miami: {
    name: '迈阿密',
    fullName: '迈阿密国际赛道',
    type: '临时赛道 / 长直道 / 低速段',
    summary: '高速段能打，低速区容易损失节奏。',
    corners: [
      { id: 'T1', note: '发车后重刹。' },
      { id: 'T11', note: '长直道后进攻。' },
      { id: 'T14-T16', note: '慢速组合，牵引关键。' }
    ]
  },
  imola: {
    name: '伊莫拉',
    fullName: '伊莫拉',
    type: '老派赛道 / 窄 / 节奏',
    summary: '超车不轻松，看发车、进站和失误。',
    corners: [
      { id: 'Tamburello', note: '第一段攻防和节奏点。' },
      { id: 'Tosa', note: '低速出口，牵引重要。' },
      { id: 'Rivazza', note: '下坡刹车，失误代价大。' }
    ]
  },
  monaco: {
    name: '摩纳哥',
    fullName: '摩纳哥',
    type: '街道 / 窄 / 排位为王',
    summary: '别等大超车。看排位、发车、进站窗口。',
    corners: [
      { id: 'T1', note: '发车后最拥挤。' },
      { id: 'Hairpin', note: '极低速，看机械抓地。' },
      { id: 'Chicane', note: '隧道后少数机会。' }
    ]
  },
  barcelona: {
    name: '巴塞罗那',
    fullName: '加泰罗尼亚赛道',
    type: '综合测试 / 中高速 / 轮胎',
    summary: '赛车好不好，这里藏不住。',
    corners: [
      { id: 'T1', note: '长直道后主要进攻点。' },
      { id: 'T3', note: '长右弯，考下压力。' },
      { id: 'T9', note: '高速出弯，影响后段。' }
    ]
  },
  montreal: {
    name: '蒙特利尔',
    fullName: '吉尔·维伦纽夫赛道',
    type: 'stop-go / 墙 / 重刹',
    summary: '刹车和出弯是主线，墙很近。',
    corners: [
      { id: 'T1-T2', note: '发车后低速组合。' },
      { id: 'Hairpin', note: '最重要的低速出口。' },
      { id: 'Wall', note: '最后减速弯，冠军墙风险。' }
    ]
  },
  'red-bull-ring': {
    name: '红牛环',
    fullName: '红牛环',
    type: '短圈 / 上坡刹车 / DRS',
    summary: '圈短但攻防多。看前三个重刹点。',
    corners: [
      { id: 'T1', note: '上坡出弯，影响 DRS。' },
      { id: 'T3', note: '重刹，常见超车点。' },
      { id: 'T4', note: '第二次刹车攻防。' }
    ]
  },
  silverstone: {
    name: '银石',
    fullName: '银石',
    type: '高速下压力 / 脏空气',
    summary: '看 Chapel 出口。Stowe 的超车从那里开始。',
    corners: [
      { id: 'M-B', note: '高速换向，最看下压力。' },
      { id: 'Chapel', note: '直道前出口。' },
      { id: 'Stowe', note: '尾流后的刹车区。' }
    ]
  },
  spa: {
    name: '斯帕',
    fullName: '斯帕',
    type: '长圈 / 高速 / 天气',
    summary: '尾流、下压力、天气，三件事一起看。',
    corners: [
      { id: 'La Source', note: '发车和重启。' },
      { id: 'Raidillon', note: '带出 Kemmel 尾流。' },
      { id: 'Les Combes', note: '主要超车点。' }
    ]
  },
  hungaroring: {
    name: '匈牙利',
    fullName: '亨格罗宁',
    type: '低速连续弯 / 难超',
    summary: '像没有墙的摩纳哥。排位很值钱。',
    corners: [
      { id: 'T1', note: '主要超车点。' },
      { id: 'T4', note: '高速左弯，考胆量。' },
      { id: 'T14', note: '最后一弯出口决定直道。' }
    ]
  },
  zandvoort: {
    name: '赞德福特',
    fullName: '赞德福特',
    type: '坡度 / 高速弯 / 窄',
    summary: '看带坡度弯和排位。正赛超车不轻松。',
    corners: [
      { id: 'T1', note: '主直道后进攻点。' },
      { id: 'Hugenholtz', note: '带坡度低速弯。' },
      { id: 'Arie', note: '最后带坡度弯，影响 DRS。' }
    ]
  },
  monza: {
    name: '蒙扎',
    fullName: '蒙扎',
    type: '低阻 / 尾流 / 重刹',
    summary: '直道很长，但 DRS Train 会把攻击锁住。',
    corners: [
      { id: 'T1', note: '大直道后硬刹。' },
      { id: 'Roggia', note: '第二次动手机会。' },
      { id: 'Parabolica', note: '出口决定下一圈。' }
    ]
  },
  baku: {
    name: '巴库',
    fullName: '巴库街道赛道',
    type: '超长直道 / 街道 / 安全车',
    summary: '长直道会放大尾流，窄弯会放大失误。',
    corners: [
      { id: 'T1', note: '长直道后重刹。' },
      { id: 'Castle', note: '城堡段最窄。' },
      { id: 'T16', note: '出弯决定超长直道。' }
    ]
  },
  singapore: {
    name: '新加坡',
    fullName: '滨海湾街道赛道',
    type: '夜赛 / 街道 / 热',
    summary: '体能、刹车、墙。安全车概率高。',
    corners: [
      { id: 'T1', note: '发车后组合弯。' },
      { id: 'T7', note: '长直道后进攻。' },
      { id: 'T14', note: '低速刹车，易锁死。' }
    ]
  },
  cota: {
    name: '美洲赛道',
    fullName: 'COTA 美洲赛道',
    type: '综合 / 上坡 T1 / 高速 S',
    summary: 'T1 上坡很特别，高速 S 看赛车平衡。',
    corners: [
      { id: 'T1', note: '上坡重刹，发车焦点。' },
      { id: 'S', note: '高速连续弯。' },
      { id: 'T12', note: '长直道后主要超车点。' }
    ]
  },
  'mexico-city': {
    name: '墨西哥城',
    fullName: '罗德里格斯兄弟赛道',
    type: '高海拔 / 长直道 / 低下压力',
    summary: '空气稀薄，刹车和冷却都难。',
    corners: [
      { id: 'T1', note: '超长直道后重刹。' },
      { id: 'Stadium', note: '低速体育场段。' },
      { id: 'Peraltada', note: '最后弯出口。' }
    ]
  },
  interlagos: {
    name: '英特拉格斯',
    fullName: '英特拉格斯',
    type: '短圈 / 坡度 / 天气',
    summary: '节奏快，天气和安全车经常搅局。',
    corners: [
      { id: 'S do Senna', note: '发车和进攻核心。' },
      { id: 'Ferradura', note: '中高速长弯。' },
      { id: 'Juncao', note: '上坡直道前出口。' }
    ]
  },
  'las-vegas': {
    name: '拉斯维加斯',
    fullName: '拉斯维加斯街道赛道',
    type: '长直道 / 低温 / 街道',
    summary: '低温让轮胎窗口更难，长直道让尾流更狠。',
    corners: [
      { id: 'T1', note: '发车重刹。' },
      { id: 'Strip', note: '长直道尾流。' },
      { id: 'T14', note: '直道末端攻击点。' }
    ]
  },
  lusail: {
    name: '卢塞尔',
    fullName: '卢塞尔',
    type: '高速长弯 / 轮胎负荷',
    summary: '轮胎负荷很高，跟车会让温度更难控。',
    corners: [
      { id: 'T1', note: '主直道后进攻。' },
      { id: 'T6', note: '中速节奏点。' },
      { id: 'T12-T14', note: '高速连续弯，轮胎压力大。' }
    ]
  },
  'abu-dhabi': {
    name: '阿布扎比',
    fullName: '亚斯码头赛道',
    type: '现代赛道 / 长直道 / 低速段',
    summary: '看两条长直道后的刹车区，以及低速段牵引。',
    corners: [
      { id: 'T5', note: '长直道前出口。' },
      { id: 'T6', note: '直道后重刹。' },
      { id: 'T9', note: '长直道后主要攻防。' }
    ]
  }
}

const trackConfigs = [
  { id: 'bahrain', center: [26.0325, 50.5106], osm: { relation: 284538 }, fia: { name: 'BAHRAIN', country: 'BRN', grade: '1', lengthKm: 5.412, pole: 'Left', expiry: '2028-04-18', widthM: 13 } },
  { id: 'jeddah', center: [21.6319, 39.1044], osm: { bbox: 0.06, wayName: /حلبة|Jeddah|Corniche/i }, fia: { name: 'JEDDAH CORNICHE CIRCUIT', country: 'KSA', grade: '1', lengthKm: 6.176, pole: 'Right', expiry: '2028-03-29', widthM: 12 } },
  { id: 'melbourne', center: [-37.8497, 144.968], osm: { relation: 280443 }, fia: { name: 'ALBERT PARK', country: 'AUS', grade: '1', lengthKm: 5.278, pole: 'Left', expiry: '2028-03-24', widthM: 11 } },
  { id: 'shanghai', center: [31.3389, 121.2199], osm: { relation: 2094941 }, fia: null },
  { id: 'suzuka', center: [34.8431, 136.541], osm: { relation: 284570 }, fia: null },
  { id: 'miami', center: [25.958, -80.2389], osm: { bbox: 0.06, wayName: /Miami International Autodrome/i }, fia: { name: 'MIAMI', country: 'USA', grade: '1', lengthKm: 5.412, pole: 'Left', expiry: '2028-05-04', widthM: 12 } },
  { id: 'imola', center: [44.3439, 11.7167], osm: { relation: 9291096 }, fia: { name: 'IMOLA', country: 'ITA', grade: '1', lengthKm: 4.909, pole: 'Left', expiry: '2027-03-15', widthM: 10 } },
  { id: 'monaco', center: [43.7347, 7.4206], osm: { relation: 148194 }, fia: { name: 'MONACO', country: 'MON', grade: '1', lengthKm: 3.34, pole: 'Right', expiry: '2026-05-20', widthM: 10 } },
  { id: 'barcelona', center: [41.57, 2.261], osm: { relation: 2049529 }, fia: { name: 'CATALUNYA', country: 'ESP', grade: '1', lengthKm: 4.657, pole: 'Left', expiry: '2028-02-18', widthM: 11 } },
  { id: 'montreal', center: [45.5017, -73.529], osm: { relation: 284595 }, fia: { name: 'MONTREAL GILLES VILLENEUVE', country: 'CAN', grade: '1', lengthKm: 4.361, pole: 'Left', expiry: '2028-06-16', widthM: 10 } },
  { id: 'red-bull-ring', center: [47.2197, 14.7647], osm: { relation: 5309181 }, fia: { name: 'RED BULL RING - SPIELBERG', country: 'AUT', grade: '1', lengthKm: 4.326, pole: 'Left', expiry: '2026-07-02', widthM: 12 } },
  { id: 'silverstone', center: [52.0786, -1.0169], osm: { relation: 51160 }, fia: { name: 'SILVERSTONE GRAND PRIX', country: 'GBR', grade: '1', lengthKm: 5.891, pole: 'Left', expiry: '2028-07-05', widthM: 12 } },
  { id: 'spa', center: [50.4372, 5.9714], osm: { relation: 284560 }, fia: { name: 'SPA-FRANCORCHAMPS', country: 'BEL', grade: '1', lengthKm: 7.004, pole: 'Right', expiry: '2026-07-15', widthM: 10 } },
  { id: 'hungaroring', center: [47.583, 19.25], osm: { relation: 284557 }, fia: { name: 'HUNGARORING', country: 'HUN', grade: '1', lengthKm: 4.381, pole: 'Left', expiry: '2028-07-28', widthM: 10 } },
  { id: 'zandvoort', center: [52.3888, 4.5409], osm: { relation: 13545573 }, fia: { name: 'ZANDVOORT', country: 'NLD', grade: '1', lengthKm: 4.259, pole: 'Left', expiry: '2026-08-31', widthM: 10 } },
  { id: 'monza', center: [45.6156, 9.2811], osm: { relation: 284565 }, fia: { name: 'MONZA', country: 'ITA', grade: '1', lengthKm: 5.793, pole: 'Left', expiry: '2027-09-29', widthM: 10 } },
  { id: 'baku', center: [40.3725, 49.8533], osm: { relation: 11266687 }, fia: { name: 'BAKU', country: 'AZE', grade: '1', lengthKm: 6.003, pole: 'Right', expiry: '2026-04-27', widthM: 9 } },
  { id: 'singapore', center: [1.2914, 103.864], osm: { relation: 421263 }, fia: { name: 'SINGAPORE - MARINA BAY', country: 'SGP', grade: '1', lengthKm: 4.927, pole: 'Right', expiry: '2028-10-01', widthM: 9 } },
  { id: 'cota', center: [30.1328, -97.6411], osm: { relation: 6537729 }, fia: null },
  { id: 'mexico-city', center: [19.4042, -99.0907], osm: { relation: 16251935 }, fia: { name: 'AUTODROMO HERMANOS RODRIGUEZ', country: 'MEX', grade: '1', lengthKm: 4.304, pole: 'Left', expiry: '2028-12-15', widthM: 14 } },
  { id: 'interlagos', center: [-23.7036, -46.6997], osm: { relation: 6781071 }, fia: { name: 'INTERLAGOS', country: 'BRA', grade: '1', lengthKm: 4.309, pole: 'Right', expiry: '2028-10-30', widthM: 10 } },
  { id: 'las-vegas', center: [36.1147, -115.1728], osm: { relation: 16696508 }, fia: { name: 'LAS VEGAS GRAND PRIX', country: 'USA', grade: '1', lengthKm: 6.2, pole: 'Right', expiry: '2026-11-16', widthM: 13 } },
  { id: 'lusail', center: [25.49, 51.454], osm: { bbox: 0.05, largestWay: true }, fia: { name: 'QATAR - LUSAIL', country: 'QAT', grade: '1', lengthKm: 5.418, pole: 'Left', expiry: '2026-10-04', widthM: 12 } },
  { id: 'abu-dhabi', center: [24.4672, 54.6031], osm: { relation: 11378665 }, fia: { name: 'ABU DHABI - YAS MARINA', country: 'UAE', grade: '1', lengthKm: 5.281, pole: 'Right', expiry: '2027-12-03', widthM: 12 } }
]

const excludeName = /pit|boxen|pitstraat|voie des stands|moto\s*gp|motogp|long lap|kart|drag/i
const excludeRole = /pit|alternative/i
const svgViewWidth = 380
const svgViewHeight = 250
const svgPadding = 22
const satelliteTileTemplate = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile'
const satelliteProvider = 'Esri World Imagery'
const satelliteAttribution = 'Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function fetchWithTimeout(url, options = {}, timeoutMs = 25000) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)
  try {
    return await fetch(url, { ...options, signal: controller.signal })
  } finally {
    clearTimeout(timeout)
  }
}

function distanceMeters(a, b) {
  const earthRadius = 6371000
  const toRad = (value) => (value * Math.PI) / 180
  const dLat = toRad(b.lat - a.lat)
  const dLon = toRad(b.lon - a.lon)
  const lat1 = toRad(a.lat)
  const lat2 = toRad(b.lat)
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2
  return 2 * earthRadius * Math.asin(Math.sqrt(h))
}

function lineLength(points) {
  let length = 0
  for (let index = 1; index < points.length; index += 1) {
    length += distanceMeters(points[index - 1], points[index])
  }
  return length
}

function shouldUseWay(way, memberRole = '') {
  const tags = way.tags ?? {}
  const name = [tags.name, tags['name:en'], tags.old_name, tags.raceway].filter(Boolean).join(' ')
  return !excludeRole.test(memberRole) && !excludeName.test(name)
}

async function overpass(query) {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetchWithTimeout(`${overpassEndpoint}?${new URLSearchParams({ data: query })}`, {
        headers: { 'User-Agent': userAgent }
      }, 35000)
      const text = await response.text()
      if (!response.ok) {
        throw new Error(`Overpass ${response.status}: ${text.slice(0, 160)}`)
      }
      return JSON.parse(text)
    } catch (error) {
      if (attempt === 3) throw error
      await sleep(1200 * attempt)
    }
  }
}

async function fetchRelationGeometry(config) {
  const query = `[out:json][timeout:25];rel(${config.osm.relation});out body;>;out geom tags;`
  const data = await overpass(query)
  const relation = data.elements.find((item) => item.type === 'relation')
  const ways = new Map(data.elements.filter((item) => item.type === 'way').map((way) => [way.id, way]))
  const used = new Set()
  const lines = []

  for (const member of relation.members ?? []) {
    if (member.type !== 'way' || used.has(member.ref)) continue
    const way = ways.get(member.ref)
    if (!way?.geometry?.length || !shouldUseWay(way, member.role)) continue
    used.add(member.ref)
    lines.push({
      osmWayId: way.id,
      points: way.geometry.map((point) => ({ lat: point.lat, lon: point.lon }))
    })
  }

  return {
    osmName: relation.tags?.name,
    osmType: 'relation',
    osmId: config.osm.relation,
    lines
  }
}

async function fetchWayGeometry(config) {
  const [lat, lon] = config.center
  const radius = config.osm.bbox ?? 0.05
  const [south, west, north, east] = [lat - radius, lon - radius, lat + radius, lon + radius]
  const query = `[out:json][timeout:25];way(${south},${west},${north},${east})["highway"="raceway"];out geom tags;`
  const data = await overpass(query)
  let ways = data.elements.filter((item) => item.type === 'way' && item.geometry?.length && shouldUseWay(item))

  if (config.osm.wayName) {
    ways = ways.filter((way) => config.osm.wayName.test([way.tags?.name, way.tags?.['name:en']].filter(Boolean).join(' ')))
  }
  if (config.osm.largestWay) {
    ways = ways.sort((a, b) => lineLength(b.geometry) - lineLength(a.geometry)).slice(0, 1)
  }

  return {
    osmName: ways[0]?.tags?.name,
    osmType: 'ways',
    osmId: null,
    lines: ways.map((way) => ({
      osmWayId: way.id,
      points: way.geometry.map((point) => ({ lat: point.lat, lon: point.lon }))
    }))
  }
}

function webMercator(point) {
  const lat = Math.max(-85.05112878, Math.min(85.05112878, point.lat))
  const sinLat = Math.sin((lat * Math.PI) / 180)
  return {
    x: (point.lon + 180) / 360,
    y: 0.5 - Math.log((1 + sinLat) / (1 - sinLat)) / (4 * Math.PI)
  }
}

function roundSvg(value) {
  return Number(value.toFixed(2))
}

function projectLines(lines) {
  const projected = lines.map((line) => line.points.map(webMercator))

  const flat = projected.flat()
  const minX = Math.min(...flat.map((point) => point.x))
  const maxX = Math.max(...flat.map((point) => point.x))
  const minY = Math.min(...flat.map((point) => point.y))
  const maxY = Math.max(...flat.map((point) => point.y))
  const scale = Math.min((svgViewWidth - svgPadding * 2) / (maxX - minX), (svgViewHeight - svgPadding * 2) / (maxY - minY))
  const width = (maxX - minX) * scale
  const height = (maxY - minY) * scale
  const offsetX = (svgViewWidth - width) / 2
  const offsetY = (svgViewHeight - height) / 2

  const toSvgPoint = (point) => ({
    x: offsetX + (point.x - minX) * scale,
    y: offsetY + (point.y - minY) * scale
  })

  const paths = projected
    .filter((line) => line.length > 1)
    .map((line) => {
      const [first, ...rest] = line.map(toSvgPoint)
      return `M${first.x.toFixed(1)} ${first.y.toFixed(1)} ${rest.map((point) => `L${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(' ')}`
    })

  const path = paths.join(' ')
  const viewBounds = {
    minX: minX - offsetX / scale,
    maxX: minX + (svgViewWidth - offsetX) / scale,
    minY: minY - offsetY / scale,
    maxY: minY + (svgViewHeight - offsetY) / scale
  }

  return {
    path,
    viewBounds,
    toSvgPoint
  }
}

function tileRange(bounds, zoom) {
  const tilesPerAxis = 2 ** zoom
  const minTileX = Math.max(0, Math.floor(bounds.minX * tilesPerAxis))
  const maxTileX = Math.min(tilesPerAxis - 1, Math.floor(bounds.maxX * tilesPerAxis))
  const minTileY = Math.max(0, Math.floor(bounds.minY * tilesPerAxis))
  const maxTileY = Math.min(tilesPerAxis - 1, Math.floor(bounds.maxY * tilesPerAxis))

  return {
    minTileX,
    maxTileX,
    minTileY,
    maxTileY,
    count: (maxTileX - minTileX + 1) * (maxTileY - minTileY + 1)
  }
}

function pickSatelliteZoom(bounds) {
  for (const zoom of [17, 16, 15, 14, 13]) {
    if (tileRange(bounds, zoom).count <= 36) return zoom
  }
  return 13
}

function createSatelliteLayer(projection) {
  const zoom = pickSatelliteZoom(projection.viewBounds)
  const range = tileRange(projection.viewBounds, zoom)
  const tilesPerAxis = 2 ** zoom
  const tiles = []

  for (let tileY = range.minTileY; tileY <= range.maxTileY; tileY += 1) {
    for (let tileX = range.minTileX; tileX <= range.maxTileX; tileX += 1) {
      const topLeft = projection.toSvgPoint({ x: tileX / tilesPerAxis, y: tileY / tilesPerAxis })
      const bottomRight = projection.toSvgPoint({ x: (tileX + 1) / tilesPerAxis, y: (tileY + 1) / tilesPerAxis })
      tiles.push({
        url: `${satelliteTileTemplate}/${zoom}/${tileY}/${tileX}`,
        x: roundSvg(topLeft.x),
        y: roundSvg(topLeft.y),
        width: roundSvg(bottomRight.x - topLeft.x),
        height: roundSvg(bottomRight.y - topLeft.y)
      })
    }
  }

  return {
    provider: satelliteProvider,
    attribution: satelliteAttribution,
    zoom,
    tiles
  }
}

function pickCornerPositions(path, cornerTemplates) {
  const matchPoints = [...path.matchAll(/[ML](-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g)].map((match) => ({
    x: Number(match[1]),
    y: Number(match[2])
  }))
  if (!matchPoints.length) return cornerTemplates.map((corner) => ({ ...corner, x: 190, y: 125 }))

  return cornerTemplates.map((corner, index) => {
    const point = matchPoints[Math.floor(((index + 1) * matchPoints.length) / (cornerTemplates.length + 1))]
    return {
      ...corner,
      x: Number(point.x.toFixed(1)),
      y: Number(point.y.toFixed(1)),
      labelX: Number(Math.min(340, point.x + 10).toFixed(1)),
      labelY: Number(Math.max(28, point.y - 8).toFixed(1))
    }
  })
}

function samplePoints(lines, maxSamples = 35) {
  const points = lines.flatMap((line) => line.points)
  if (points.length <= maxSamples) return points
  const step = Math.max(1, Math.floor(points.length / maxSamples))
  return points.filter((_, index) => index % step === 0).slice(0, maxSamples)
}

async function fetchElevations(points) {
  const locations = points.map((point) => `${point.lat.toFixed(6)},${point.lon.toFixed(6)}`).join('|')
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetchWithTimeout(`${elevationEndpoint}?${new URLSearchParams({ locations })}`, {
        headers: { 'User-Agent': userAgent }
      }, 12000)
      const data = await response.json()
      if (data.status !== 'OK') return []
      return data.results.map((item) => item.elevation).filter((value) => typeof value === 'number')
    } catch (error) {
      if (attempt === 3) {
        console.warn(`elevation skipped: ${error.message}`)
        return []
      }
      await sleep(1000 * attempt)
    }
  }
  return []
}

function qualityFor(osmLengthKm, fiaLengthKm) {
  if (!fiaLengthKm) return 'open-data'
  const delta = Math.abs(osmLengthKm - fiaLengthKm) / fiaLengthKm
  if (delta <= 0.035) return 'matched'
  if (delta <= 0.1) return 'close'
  return 'needs-check'
}

function formatDate(date) {
  return date.toISOString().slice(0, 10)
}

async function buildTrack(config) {
  const meta = oldSummaries[config.id]
  const geometry = config.osm.relation ? await fetchRelationGeometry(config) : await fetchWayGeometry(config)
  const osmLengthKm = Number((geometry.lines.reduce((sum, line) => sum + lineLength(line.points), 0) / 1000).toFixed(3))
  const projection = projectLines(geometry.lines)
  const path = projection.path
  const satellite = createSatelliteLayer(projection)
  const elevations = await fetchElevations(samplePoints(geometry.lines))
  const elevation =
    elevations.length > 0
      ? {
          dataset: 'SRTM30m',
          meanM: Math.round(elevations.reduce((sum, value) => sum + value, 0) / elevations.length),
          minM: Math.round(Math.min(...elevations)),
          maxM: Math.round(Math.max(...elevations)),
          rangeM: Math.round(Math.max(...elevations) - Math.min(...elevations))
        }
      : null

  const source = {
    geometry: geometry.osmType === 'relation' ? `OpenStreetMap relation ${geometry.osmId}` : 'OpenStreetMap raceway ways',
    osmName: geometry.osmName ?? null,
    wayCount: geometry.lines.length,
    osmLengthKm,
    quality: qualityFor(osmLengthKm, config.fia?.lengthKm),
    generatedOn: formatDate(new Date())
  }

  return {
    id: config.id,
    ...meta,
    path,
    satellite,
    corners: pickCornerPositions(path, meta.corners),
    link: `/tracks/${config.id}`,
    center: { lat: config.center[0], lon: config.center[1] },
    fia: config.fia,
    elevation,
    source
  }
}

const tracks = []
for (const config of trackConfigs) {
  process.stdout.write(`Fetching ${config.id}... `)
  const track = await buildTrack(config)
  tracks.push(track)
  console.log(`${track.source.osmLengthKm} km, ${track.source.quality}`)
  await sleep(300)
}

const typeText = `export type TrackId =
${trackConfigs.map((track) => `  | '${track.id}'`).join('\n')}

export type TrackCorner = {
  id: string
  x: number
  y: number
  note: string
  labelX?: number
  labelY?: number
}

export type FiaCircuitSpec = {
  name: string
  country: string
  grade: string
  lengthKm: number
  pole: 'Left' | 'Right'
  expiry: string
  widthM: number
}

export type TrackSatelliteTile = {
  url: string
  x: number
  y: number
  width: number
  height: number
}

export type TrackSatelliteLayer = {
  provider: string
  attribution: string
  zoom: number
  tiles: TrackSatelliteTile[]
}

export type TrackInfo = {
  id: TrackId
  name: string
  fullName: string
  type: string
  summary: string
  path: string
  satellite: TrackSatelliteLayer
  corners: TrackCorner[]
  link: string
  center: { lat: number; lon: number }
  fia: FiaCircuitSpec | null
  elevation: {
    dataset: string
    meanM: number
    minM: number
    maxM: number
    rangeM: number
  } | null
  source: {
    geometry: string
    osmName: string | null
    wayCount: number
    osmLengthKm: number
    quality: 'matched' | 'close' | 'needs-check' | 'open-data'
    generatedOn: string
  }
}

export const trackDataSources = {
  fiaLicensedCircuits: {
    label: 'FIA Licensed Circuits',
    updatedOn: '2026-03-31',
    url: 'https://www.fia.com/sites/default/files/circuits_fia20260331_0.pdf'
  },
  osm: {
    label: 'OpenStreetMap contributors',
    license: 'ODbL',
    url: 'https://www.openstreetmap.org/copyright'
  },
  elevation: {
    label: 'OpenTopoData SRTM30m',
    url: 'https://www.opentopodata.org/datasets/srtm/'
  },
  satellite: {
    label: 'Esri World Imagery',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
    attribution: 'Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community'
  }
} as const

export const tracks: TrackInfo[] = ${JSON.stringify(tracks, null, 2)}
`

await writeFile('docs/.vitepress/theme/data/tracks.ts', typeText)
