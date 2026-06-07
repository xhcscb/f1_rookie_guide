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

export const tracks: TrackInfo[] = [
  {
    "id": "bahrain",
    "name": "巴林",
    "fullName": "巴林国际赛道",
    "type": "stop-go / 牵引 / 刹车稳定",
    "summary": "看 T1 和 T10。后胎牵引和刹车锁死很容易暴露。",
    "corners": [
      {
        "id": "T1",
        "note": "长直道后重刹车，发车和 DRS 攻防点。",
        "x": 164.2,
        "y": 27.6,
        "labelX": 174.2,
        "labelY": 28
      },
      {
        "id": "T10",
        "note": "下坡刹车，容易锁死。",
        "x": 194.8,
        "y": 98.7,
        "labelX": 204.8,
        "labelY": 90.7
      },
      {
        "id": "T11",
        "note": "出弯牵引影响后段速度。",
        "x": 161.3,
        "y": 177,
        "labelX": 171.3,
        "labelY": 169
      }
    ],
    "path": "M243.8 161.7 L243.4 162.5 L242.9 163.2 L242.2 164.0 L240.8 165.3 L239.3 166.5 L238.2 167.3 L236.9 168.0 L233.9 169.7 L210.4 182.9 L205.7 185.6 L189.4 194.7 L166.3 207.7 L135.0 225.2 L131.0 227.5 L130.3 227.8 L129.5 228.0 L128.7 228.0 L127.9 227.8 L127.2 227.6 L126.6 227.2 L126.1 226.7 L125.7 226.1 L122.5 219.0 L121.9 217.5 L121.4 216.0 L121.1 214.5 L120.9 212.9 L120.8 211.4 L120.8 209.8 L121.0 208.3 L121.2 202.8 L121.9 182.8 L121.9 182.2 L127.1 50.2 L127.6 37.9 L128.2 24.7 L128.2 24.1 L128.3 23.5 L128.5 23.0 L128.9 22.6 L129.4 22.2 L129.9 22.0 L130.5 22.0 L131.0 22.1 L131.6 22.3 L132.0 22.7 L132.8 23.4 L141.2 31.5 L141.7 31.9 L142.3 32.2 L142.9 32.5 L143.5 32.6 L144.3 32.6 L145.1 32.4 L145.8 32.2 L157.7 28.1 L159.2 27.8 L160.8 27.6 L162.4 27.5 L164.2 27.6 L165.9 27.8 L166.9 28.0 L172.6 29.1 L199.5 34.2 L227.6 39.5 L237.8 41.4 L256.7 45.1 L257.3 45.3 L257.8 45.5 L258.3 45.9 L258.7 46.4 L259.0 46.9 L259.2 47.5 L259.2 48.1 L259.1 49.9 L258.9 51.1 L258.6 52.3 L258.1 53.5 L257.4 54.8 L256.7 55.7 L255.4 56.9 M255.4 56.9 L252.5 58.6 L250.2 60.1 L248.0 61.8 L245.9 63.6 L243.8 65.3 L241.0 67.9 L238.2 70.5 L235.2 73.4 L232.4 76.5 L231.1 77.8 L230.0 79.3 M230.0 79.3 L228.9 80.8 L227.8 82.7 L226.9 84.7 L225.2 88.7 L224.6 90.1 L224.2 90.9 L223.4 91.9 L222.6 92.8 L221.6 93.6 L220.5 94.3 L219.3 94.8 L218.0 95.2 L216.7 95.4 L215.3 95.5 L214.1 95.3 L208.0 94.3 L206.8 94.1 L205.2 93.9 L203.4 93.9 L201.8 94.2 L200.7 94.5 L199.6 95.0 L198.5 95.6 L197.2 96.5 L196.0 97.6 L194.8 98.7 L193.8 100.0 L175.5 123.9 L175.0 124.4 L174.4 124.8 L173.7 125.1 L173.0 125.2 L172.3 125.2 L171.5 125.0 L170.9 124.7 L170.4 124.2 L169.9 123.7 L169.6 123.0 L169.4 122.3 L169.1 121.1 L169.0 119.9 L168.9 118.7 L169.0 117.3 L169.1 115.9 L173.3 90.3 L176.5 69.9 L176.6 68.6 L176.6 67.3 L176.5 66.0 L176.3 64.7 L175.9 63.6 L175.5 62.5 L175.0 61.5 L174.4 60.5 L173.0 58.8 L171.5 57.2 L170.3 56.2 L169.2 55.3 L167.9 54.4 L165.2 52.3 L164.8 52.1 L164.4 52.0 L164.0 52.0 L163.7 52.1 L163.3 52.4 L163.0 52.7 L162.8 53.2 L161.5 63.2 L160.3 71.6 L159.8 76.8 L159.4 82.0 L159.1 88.4 L158.2 113.6 L157.2 139.1 L156.1 164.6 L156.0 169.1 L156.0 170.2 L156.0 171.2 L156.2 172.3 L156.5 173.2 L157.0 174.1 L157.5 174.8 L158.1 175.5 L158.8 176.1 L159.9 176.7 L161.3 177.0 L162.6 177.2 L164.0 177.4 L165.4 177.5 L166.3 177.4 L168.1 177.3 L169.8 177.1 L171.5 176.6 L173.2 176.1 L175.0 175.4 L176.7 174.5 L178.3 173.4 L179.8 172.3 L181.3 171.0 L182.7 169.5 L184.0 168.0 L185.0 166.6 L186.0 165.2 L186.8 163.7 L187.6 162.1 L188.5 160.0 L189.2 157.9 L191.7 150.9 L192.5 149.3 L193.4 147.8 L194.5 146.4 L195.6 145.1 L196.8 144.0 L198.0 143.0 L199.3 142.0 L200.7 141.2 L202.1 140.5 L203.6 139.9 L205.1 139.4 L206.7 139.0 L208.2 138.7 L209.9 138.6 L211.6 138.5 L213.2 138.6 L214.9 138.9 L216.8 139.3 L218.6 139.9 L220.1 140.5 L221.6 141.2 L224.1 142.5 L234.3 147.5 L235.7 148.2 L237.0 148.9 L238.2 149.8 L239.4 150.8 L240.5 151.8 L241.4 152.9 L242.2 154.0 L242.9 155.2 L243.5 156.5 L243.9 157.3 L244.2 158.1 L244.3 159.0 L244.3 159.9 L244.1 160.8 L243.8 161.7",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 16,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27855/41961",
          "x": -77.48,
          "y": -74.61,
          "width": 93.92,
          "height": 93.92
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27855/41962",
          "x": 16.45,
          "y": -74.61,
          "width": 93.92,
          "height": 93.92
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27855/41963",
          "x": 110.37,
          "y": -74.61,
          "width": 93.92,
          "height": 93.92
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27855/41964",
          "x": 204.29,
          "y": -74.61,
          "width": 93.92,
          "height": 93.92
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27855/41965",
          "x": 298.22,
          "y": -74.61,
          "width": 93.92,
          "height": 93.92
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27856/41961",
          "x": -77.48,
          "y": 19.32,
          "width": 93.92,
          "height": 93.92
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27856/41962",
          "x": 16.45,
          "y": 19.32,
          "width": 93.92,
          "height": 93.92
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27856/41963",
          "x": 110.37,
          "y": 19.32,
          "width": 93.92,
          "height": 93.92
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27856/41964",
          "x": 204.29,
          "y": 19.32,
          "width": 93.92,
          "height": 93.92
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27856/41965",
          "x": 298.22,
          "y": 19.32,
          "width": 93.92,
          "height": 93.92
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27857/41961",
          "x": -77.48,
          "y": 113.24,
          "width": 93.92,
          "height": 93.92
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27857/41962",
          "x": 16.45,
          "y": 113.24,
          "width": 93.92,
          "height": 93.92
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27857/41963",
          "x": 110.37,
          "y": 113.24,
          "width": 93.92,
          "height": 93.92
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27857/41964",
          "x": 204.29,
          "y": 113.24,
          "width": 93.92,
          "height": 93.92
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27857/41965",
          "x": 298.22,
          "y": 113.24,
          "width": 93.92,
          "height": 93.92
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27858/41961",
          "x": -77.48,
          "y": 207.16,
          "width": 93.92,
          "height": 93.92
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27858/41962",
          "x": 16.45,
          "y": 207.16,
          "width": 93.92,
          "height": 93.92
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27858/41963",
          "x": 110.37,
          "y": 207.16,
          "width": 93.92,
          "height": 93.92
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27858/41964",
          "x": 204.29,
          "y": 207.16,
          "width": 93.92,
          "height": 93.92
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27858/41965",
          "x": 298.22,
          "y": 207.16,
          "width": 93.92,
          "height": 93.92
        }
      ]
    },
    "link": "/tracks/bahrain",
    "center": {
      "lat": 26.0325,
      "lon": 50.5106
    },
    "fia": {
      "name": "BAHRAIN",
      "country": "BRN",
      "grade": "1",
      "lengthKm": 5.412,
      "pole": "Left",
      "expiry": "2028-04-18",
      "widthM": 13
    },
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 17,
      "minM": 7,
      "maxM": 26,
      "rangeM": 19
    },
    "source": {
      "geometry": "OpenStreetMap relation 284538",
      "osmName": "حلبة البحرين الدولية",
      "wayCount": 3,
      "osmLengthKm": 5.42,
      "quality": "matched",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "jeddah",
    "name": "吉达",
    "fullName": "吉达滨海赛道",
    "type": "高速街道 / 贴墙 / DRS",
    "summary": "高速街道很快，攻防看尾流，也看胆量。",
    "corners": [
      {
        "id": "T1",
        "note": "长直道后重刹，第一圈混乱点。",
        "x": 175.4,
        "y": 30.1,
        "labelX": 185.4,
        "labelY": 28
      },
      {
        "id": "T22",
        "note": "高速贴墙，失误代价大。",
        "x": 185.1,
        "y": 204.2,
        "labelX": 195.1,
        "labelY": 196.2
      },
      {
        "id": "T27",
        "note": "最后一弯出口决定主直道攻击。",
        "x": 180.8,
        "y": 186.1,
        "labelX": 190.8,
        "labelY": 178.1
      }
    ],
    "path": "M180.3 114.6 L179.5 114.0 L178.8 113.3 L178.2 112.6 L177.6 111.7 L177.1 110.4 L176.9 109.4 L176.8 108.1 L176.8 107.0 L177.0 105.9 L177.2 105.2 L177.6 104.2 L178.2 103.3 L179.2 102.0 L179.6 101.2 L180.0 100.1 L180.2 98.9 L180.3 97.9 L180.2 97.1 L180.0 96.4 L179.1 93.1 L178.9 92.4 L178.5 91.7 L178.0 91.1 L177.3 90.5 L175.8 89.5 L175.0 88.8 L174.5 88.1 L174.1 87.3 L173.9 86.3 L173.9 85.3 L174.0 81.7 L174.0 79.9 L174.0 79.2 L174.1 78.5 L174.4 77.6 L175.0 76.7 L175.4 76.2 L176.0 75.7 L176.5 75.2 L177.1 75.0 L179.0 74.4 L179.5 74.1 L180.0 73.9 L180.4 73.6 L180.9 73.2 L181.2 72.9 L181.4 72.5 L181.7 72.0 L181.9 71.5 L182.2 70.8 L182.2 69.9 L182.4 68.5 L182.6 67.2 L182.9 65.8 L183.3 64.6 L183.7 63.5 L184.3 62.2 L184.7 61.1 L184.9 60.1 L185.3 58.5 L185.5 56.4 L185.6 53.3 L185.6 50.6 L185.5 48.1 L185.3 45.0 L185.1 40.4 L184.9 36.6 L184.6 32.0 L184.6 29.4 L184.4 26.6 L184.3 25.7 L184.2 25.0 L183.9 24.4 L183.5 23.7 L182.7 23.0 L182.2 22.6 L181.5 22.3 L180.5 22.0 L179.5 22.0 L178.6 22.2 L177.8 22.6 L177.3 22.9 L176.8 23.3 L176.3 23.8 L176.1 24.3 L175.8 24.9 L175.5 26.0 L175.4 26.7 L175.3 27.3 L175.2 27.9 L175.2 28.5 L175.3 29.3 L175.4 30.1 L175.5 30.7 L175.8 31.4 L176.0 32.0 L176.4 32.8 L177.7 35.0 L179.3 37.3 L179.7 38.2 L180.1 39.0 L180.5 40.1 L180.8 41.3 L181.0 42.8 L181.2 44.2 L181.2 45.8 L181.2 46.8 L181.1 47.9 L181.0 48.7 L180.8 49.8 L180.6 50.8 L180.3 51.9 L179.9 53.1 L179.1 54.5 L177.9 56.8 L177.6 57.6 L177.2 58.5 L177.0 59.1 L176.8 60.2 L176.6 60.9 L176.6 61.5 L176.5 62.3 L176.5 63.8 L176.5 64.8 L176.3 65.5 L176.0 66.1 L175.6 66.7 L175.2 67.0 L174.6 67.4 L174.0 67.8 L172.9 68.0 L171.7 68.4 L170.8 69.0 L169.9 69.7 L169.4 70.3 L169.1 70.8 L168.9 71.3 L168.6 72.0 L168.4 72.9 L168.1 75.2 L168.0 76.8 L168.0 78.0 L168.0 78.7 L168.1 79.7 L168.2 81.1 L168.4 82.4 L168.8 84.1 L169.2 85.6 L169.6 86.6 L170.0 87.5 L171.6 91.3 L172.2 92.8 L173.1 95.2 L173.6 96.9 L173.8 97.8 L174.2 100.1 L174.3 101.6 L174.3 103.5 L174.2 105.9 L174.2 107.2 L174.3 109.0 L174.4 110.5 L174.7 111.9 L175.1 113.5 L175.6 115.0 L176.0 116.0 L176.4 116.9 L176.8 117.8 L177.0 118.2 L177.8 119.3 L179.2 121.6 L180.0 122.9 L180.6 124.2 L181.3 125.6 L181.7 126.6 L182.0 127.5 L182.4 129.1 L182.9 131.5 L183.1 132.8 L183.3 134.1 L183.3 135.5 L183.4 136.8 M182.0 193.5 L182.6 196.6 L183.4 199.4 L184.3 202.0 L185.1 204.2 L185.6 205.4 L186.6 207.4 L187.6 209.1 L189.4 212.0 L191.8 215.2 L193.3 216.8 L195.7 219.1 L196.7 220.0 L198.1 221.0 L200.0 222.4 L202.6 224.2 L204.4 225.4 L206.8 227.1 L207.6 227.6 L208.1 227.8 L208.7 228.0 L209.1 228.0 L209.6 227.9 L210.1 227.8 L210.5 227.6 L211.3 226.9 L211.6 226.3 L211.9 225.7 L212.0 225.1 L212.0 224.5 L211.2 221.9 L210.6 219.3 L210.1 217.1 L209.6 214.7 L208.8 210.1 M186.7 135.2 L186.5 135.1 L186.4 134.9 L186.2 134.8 L186.0 134.7 L185.7 134.6 L185.3 134.6 L184.7 134.6 L184.5 134.8 L184.3 134.9 L184.0 135.2 L183.8 135.6 L183.7 135.9 L183.6 136.1 L183.5 136.4 L183.4 136.7 L183.4 136.8 M186.9 139.2 L187.0 137.6 L186.9 136.6 L186.7 135.2 M183.4 136.8 L183.4 137.5 L183.4 139.1 L183.3 140.1 L183.3 140.9 L183.1 142.5 L182.8 143.9 L182.5 145.5 L182.2 146.6 L181.9 147.6 L181.8 148.4 L181.8 149.1 L181.9 149.7 L182.3 150.6 L182.6 151.0 L183.0 151.6 L183.7 152.2 L184.9 153.1 L185.6 153.7 L186.0 154.0 L186.3 154.4 L186.7 155.0 L187.1 155.8 L187.5 156.7 L187.7 157.6 L188.1 159.2 L188.2 159.8 L188.6 161.7 L188.7 162.3 L188.8 162.9 L188.8 163.5 L188.7 164.2 L188.5 165.1 L188.2 166.0 L186.6 169.1 L183.3 175.4 L182.7 176.6 L182.2 177.9 L181.6 179.8 L181.2 181.6 L180.8 183.9 L180.8 185.1 L180.8 186.1 L180.8 187.6 L181.0 189.4 L181.3 191.1 L182.0 193.5 M202.5 185.8 L198.0 173.0 L193.8 160.6 L190.9 152.2 L190.3 150.4 L190.1 149.8 L189.8 149.5 L189.4 149.2 L189.0 149.2 L188.6 149.2 L188.3 149.4 L187.2 149.9 L186.7 150.0 L186.2 150.0 L185.6 149.8 L185.3 149.5 L184.9 149.0 L184.8 148.5 L184.7 148.0 L184.9 147.0 L185.2 145.5 L185.6 144.2 L186.3 142.5 L186.6 141.4 L186.7 140.8 L186.9 140.1 L186.9 139.2 M203.3 188.3 L202.5 185.8 M208.0 206.5 L208.0 206.4 L207.1 202.2 L206.5 199.7 L206.1 197.7 L205.5 195.2 L204.9 193.1 L203.9 190.3 L203.3 188.3 M208.8 210.1 L208.0 206.5 M186.7 135.2 L185.9 130.8 L184.7 123.8 L184.0 119.7 L183.9 117.4 L183.9 116.7 L183.8 116.3 L183.5 116.0 L181.2 115.0 L180.3 114.6 M180.3 114.6 L179.9 114.5 L179.0 114.4 L178.3 114.7 L177.8 115.0 L177.2 115.8 L176.9 116.7 L176.8 117.4 L176.8 117.8 M208.8 210.1 L208.8 210.1 L208.7 210.1 L208.6 210.0 L208.4 210.1 L208.2 210.1 L206.8 210.4 L206.7 210.4 L206.6 210.4 L206.6 210.4 L206.6 210.4 L206.5 210.4 L206.5 210.4 L206.5 210.4 L206.5 210.3 L208.0 206.8 L208.0 206.5 M203.3 188.3 L203.5 188.1 L203.7 188.0 L206.1 187.4 L206.2 187.3 L206.2 187.2 L206.1 187.1 L206.0 187.0 L206.0 187.0 L203.2 186.3 L203.0 186.2 L202.8 186.1 L202.5 185.8",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 15,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/14364/19941",
          "x": -6.1,
          "y": -39.08,
          "width": 85.05,
          "height": 85.05
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/14364/19942",
          "x": 78.95,
          "y": -39.08,
          "width": 85.05,
          "height": 85.05
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/14364/19943",
          "x": 164,
          "y": -39.08,
          "width": 85.05,
          "height": 85.05
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/14364/19944",
          "x": 249.05,
          "y": -39.08,
          "width": 85.05,
          "height": 85.05
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/14364/19945",
          "x": 334.1,
          "y": -39.08,
          "width": 85.05,
          "height": 85.05
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/14365/19941",
          "x": -6.1,
          "y": 45.98,
          "width": 85.05,
          "height": 85.05
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/14365/19942",
          "x": 78.95,
          "y": 45.98,
          "width": 85.05,
          "height": 85.05
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/14365/19943",
          "x": 164,
          "y": 45.98,
          "width": 85.05,
          "height": 85.05
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/14365/19944",
          "x": 249.05,
          "y": 45.98,
          "width": 85.05,
          "height": 85.05
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/14365/19945",
          "x": 334.1,
          "y": 45.98,
          "width": 85.05,
          "height": 85.05
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/14366/19941",
          "x": -6.1,
          "y": 131.03,
          "width": 85.05,
          "height": 85.05
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/14366/19942",
          "x": 78.95,
          "y": 131.03,
          "width": 85.05,
          "height": 85.05
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/14366/19943",
          "x": 164,
          "y": 131.03,
          "width": 85.05,
          "height": 85.05
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/14366/19944",
          "x": 249.05,
          "y": 131.03,
          "width": 85.05,
          "height": 85.05
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/14366/19945",
          "x": 334.1,
          "y": 131.03,
          "width": 85.05,
          "height": 85.05
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/14367/19941",
          "x": -6.1,
          "y": 216.08,
          "width": 85.05,
          "height": 85.05
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/14367/19942",
          "x": 78.95,
          "y": 216.08,
          "width": 85.05,
          "height": 85.05
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/14367/19943",
          "x": 164,
          "y": 216.08,
          "width": 85.05,
          "height": 85.05
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/14367/19944",
          "x": 249.05,
          "y": 216.08,
          "width": 85.05,
          "height": 85.05
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/14367/19945",
          "x": 334.1,
          "y": 216.08,
          "width": 85.05,
          "height": 85.05
        }
      ]
    },
    "link": "/tracks/jeddah",
    "center": {
      "lat": 21.6319,
      "lon": 39.1044
    },
    "fia": {
      "name": "JEDDAH CORNICHE CIRCUIT",
      "country": "KSA",
      "grade": "1",
      "lengthKm": 6.176,
      "pole": "Right",
      "expiry": "2028-03-29",
      "widthM": 12
    },
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 4,
      "minM": -1,
      "maxM": 7,
      "rangeM": 8
    },
    "source": {
      "geometry": "OpenStreetMap raceway ways",
      "osmName": "حلبة كورنيش جدة",
      "wayCount": 13,
      "osmLengthKm": 6.514,
      "quality": "close",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "melbourne",
    "name": "墨尔本",
    "fullName": "阿尔伯特公园",
    "type": "公园赛道 / 中高速 / DRS",
    "summary": "节奏很快，重启和 DRS 区容易带来位置变化。",
    "corners": [
      {
        "id": "T1",
        "note": "发车后第一判断点。",
        "x": 121.8,
        "y": 51.8,
        "labelX": 131.8,
        "labelY": 43.8
      },
      {
        "id": "T9-T10",
        "note": "高速段，脏空气明显。",
        "x": 199.2,
        "y": 42.7,
        "labelX": 209.2,
        "labelY": 34.7
      },
      {
        "id": "T11",
        "note": "刹车区攻防窗口。",
        "x": 258.5,
        "y": 173.2,
        "labelX": 268.5,
        "labelY": 165.2
      }
    ],
    "path": "M161.9 164.5 L158.1 160.7 L155.6 158.1 L151.9 154.6 L146.9 149.5 L146.4 149.0 L146.0 148.5 L145.7 148.1 M145.7 148.1 L145.5 147.9 L145.4 147.6 L145.3 147.4 L145.2 147.2 L145.1 147.0 L145.1 146.8 L145.2 146.6 L145.2 146.4 L145.3 146.1 L145.4 145.8 L145.7 145.3 L146.1 144.5 M146.1 144.5 L146.5 143.6 L146.9 142.6 L147.2 141.9 L147.5 140.8 L147.7 139.5 L147.8 137.9 L147.8 136.7 L147.6 135.3 L147.5 134.2 L147.4 133.6 L147.3 133.1 L147.0 132.4 L146.7 131.6 L146.3 130.8 L145.4 129.4 L144.8 128.6 L144.1 127.9 L143.3 127.1 L142.6 126.4 L140.7 124.5 L135.1 119.3 L134.6 118.8 L131.0 115.1 L126.1 109.7 L120.5 102.7 L119.0 100.9 L117.2 98.4 L115.6 96.0 L114.9 94.8 L113.2 92.0 L107.6 82.0 L106.0 78.7 L105.9 78.3 L105.9 77.9 L106.0 77.4 L106.1 77.0 L106.3 76.5 L106.7 76.1 L107.1 75.9 L107.8 75.7 L108.6 75.5 M108.6 75.5 L110.2 75.3 L111.5 75.0 L112.5 74.7 M112.5 74.7 L113.7 74.5 L115.7 74.1 M115.7 74.1 L118.5 73.6 L119.7 73.3 L120.5 73.1 L121.1 72.6 L121.6 72.1 M121.6 72.1 L121.9 71.4 L122.1 70.9 L122.4 70.3 L122.4 69.7 L122.5 69.1 L121.8 52.1 M121.8 52.1 L121.8 51.8 L121.8 51.3 L121.7 48.6 L121.6 47.8 L121.6 47.7 M121.6 47.7 L122.1 46.9 L122.4 46.5 L122.7 46.1 L123.0 45.8 L123.1 45.6 L123.5 45.3 L123.8 45.0 L124.1 44.7 L124.6 44.4 L126.0 43.3 L134.3 37.3 L136.3 35.9 L137.4 35.3 L138.6 34.6 L140.5 33.7 L142.4 32.8 L142.9 32.7 L143.3 32.7 L143.8 32.6 M143.8 32.6 L144.1 32.4 L144.3 32.2 L144.4 32.1 L145.0 31.9 L145.4 31.7 L150.9 29.4 L152.4 28.8 L154.2 28.1 L155.9 27.3 L157.9 26.3 L159.3 25.5 L161.4 24.2 M161.4 24.2 L162.6 23.5 L163.5 23.0 M163.5 23.0 L165.2 22.0 M165.2 22.0 L165.7 22.8 L166.3 23.7 L167.0 24.4 L167.7 25.2 M167.7 25.2 L168.1 25.6 M168.1 25.6 L168.4 26.0 L168.9 26.4 L169.4 26.8 L169.7 27.0 M169.7 27.0 L170.0 27.3 L170.4 27.5 L170.9 27.8 L171.3 28.1 L171.8 28.3 L172.3 28.6 L173.0 28.8 L173.5 29.0 L174.1 29.2 L174.8 29.4 L175.4 29.5 M175.4 29.5 L177.0 29.7 L178.9 29.9 L180.4 30.0 L181.5 30.0 L182.9 30.2 L184.4 30.5 L185.7 30.9 L186.7 31.3 L188.2 31.9 L189.5 32.5 L190.5 33.1 L192.2 34.3 L194.2 35.8 L195.5 37.2 L197.0 38.9 L197.7 40.1 L198.6 41.5 L199.2 42.7 L200.0 44.5 L200.5 45.7 L200.8 47.3 L201.6 51.4 L203.7 62.0 L204.0 64.8 L204.0 66.7 L204.0 67.9 L203.9 68.9 L203.8 70.0 L203.6 71.4 L203.4 72.4 L203.0 73.9 L202.6 75.4 L202.1 76.7 L201.5 78.6 L201.0 80.0 L200.6 81.0 L200.2 82.0 L199.8 83.0 L199.4 84.2 L199.0 84.9 L198.5 86.2 L197.7 88.0 L196.2 91.8 L194.7 95.9 L193.9 98.5 L192.8 102.5 L192.5 104.2 L192.4 105.3 L192.2 107.0 L192.1 109.6 L192.2 111.1 L192.4 114.3 L192.5 115.6 L192.9 118.0 L193.2 119.5 L193.5 120.6 L193.9 122.1 L194.8 124.7 L195.6 126.7 L196.5 128.8 L197.8 131.0 L199.2 133.3 L200.5 135.2 L202.0 137.3 L203.5 138.9 L205.2 140.6 L208.4 143.5 L211.8 146.4 L216.7 150.7 M238.4 155.4 L235.5 152.7 L235.3 152.6 L235.0 152.5 L234.8 152.4 L234.3 152.4 L233.8 152.4 L233.1 152.5 L228.1 153.2 L226.0 153.5 L222.4 153.9 L221.7 153.9 L221.2 153.8 L220.5 153.7 L220.1 153.5 L219.6 153.2 L219.1 152.9 L218.7 152.6 L216.7 150.7 M238.4 155.4 L240.8 157.5 L246.1 162.0 M246.1 162.0 L249.7 165.1 L252.3 167.2 L253.6 168.3 L255.2 169.6 L255.9 170.4 M255.9 170.4 L256.9 171.4 M256.9 171.4 L257.7 172.3 L258.5 173.2 L258.6 173.4 L259.1 174.0 L259.6 174.6 M259.6 174.6 L260.3 175.6 L261.0 176.7 L261.7 177.9 L262.4 179.3 M262.4 179.3 L263.2 181.2 L263.8 182.8 L264.5 184.8 L265.1 186.8 L265.9 189.4 L267.1 193.4 L269.4 201.6 M272.2 211.6 L271.0 207.1 L270.4 204.8 L269.8 203.1 L269.4 201.6 M274.1 221.2 L273.6 218.3 L273.1 215.2 L272.7 213.5 L272.2 211.6 M274.1 221.2 L264.1 223.5 L260.5 224.4 L257.4 225.2 L255.8 225.6 L254.5 226.0 L252.9 226.5 L251.7 226.9 L250.6 227.2 L248.6 227.8 L247.9 227.9 L247.5 228.0 L247.0 228.0 L246.2 228.0 M246.2 228.0 L245.8 227.9 L245.2 227.8 L244.5 227.6 L243.9 227.3 L243.1 226.9 L242.5 226.6 L241.9 226.1 L241.4 225.6 L240.9 225.0 L240.3 224.2 L233.5 211.8 L230.4 206.8 L229.6 205.6 M229.6 205.6 L229.2 205.0 L228.8 204.6 L228.4 204.4 L227.8 204.3 L227.4 204.4 L227.0 204.5 L226.7 204.8 L226.1 205.4 M226.1 205.4 L223.2 208.7 L220.9 211.3 L220.0 212.3 L219.2 213.1 L218.8 213.6 L218.0 214.0 L217.3 214.3 L216.4 214.7 L215.2 214.9 L214.2 214.9 L213.2 214.8 L212.1 214.4 L211.2 214.0 L210.5 213.6 L209.7 212.9 L209.1 212.3 L199.7 202.8 L175.6 178.5 L165.2 167.8 L161.9 164.5",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 15,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/20109/29577",
          "x": -92.7,
          "y": -60.99,
          "width": 111.85,
          "height": 111.85
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/20109/29578",
          "x": 19.15,
          "y": -60.99,
          "width": 111.85,
          "height": 111.85
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/20109/29579",
          "x": 131,
          "y": -60.99,
          "width": 111.85,
          "height": 111.85
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/20109/29580",
          "x": 242.85,
          "y": -60.99,
          "width": 111.85,
          "height": 111.85
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/20109/29581",
          "x": 354.71,
          "y": -60.99,
          "width": 111.85,
          "height": 111.85
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/20110/29577",
          "x": -92.7,
          "y": 50.86,
          "width": 111.85,
          "height": 111.85
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/20110/29578",
          "x": 19.15,
          "y": 50.86,
          "width": 111.85,
          "height": 111.85
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/20110/29579",
          "x": 131,
          "y": 50.86,
          "width": 111.85,
          "height": 111.85
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/20110/29580",
          "x": 242.85,
          "y": 50.86,
          "width": 111.85,
          "height": 111.85
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/20110/29581",
          "x": 354.71,
          "y": 50.86,
          "width": 111.85,
          "height": 111.85
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/20111/29577",
          "x": -92.7,
          "y": 162.71,
          "width": 111.85,
          "height": 111.85
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/20111/29578",
          "x": 19.15,
          "y": 162.71,
          "width": 111.85,
          "height": 111.85
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/20111/29579",
          "x": 131,
          "y": 162.71,
          "width": 111.85,
          "height": 111.85
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/20111/29580",
          "x": 242.85,
          "y": 162.71,
          "width": 111.85,
          "height": 111.85
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/20111/29581",
          "x": 354.71,
          "y": 162.71,
          "width": 111.85,
          "height": 111.85
        }
      ]
    },
    "link": "/tracks/melbourne",
    "center": {
      "lat": -37.8497,
      "lon": 144.968
    },
    "fia": {
      "name": "ALBERT PARK",
      "country": "AUS",
      "grade": "1",
      "lengthKm": 5.278,
      "pole": "Left",
      "expiry": "2028-03-24",
      "widthM": 11
    },
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 9,
      "minM": 1,
      "maxM": 15,
      "rangeM": 14
    },
    "source": {
      "geometry": "OpenStreetMap relation 280443",
      "osmName": "Albert Park Circuit",
      "wayCount": 30,
      "osmLengthKm": 5.308,
      "quality": "matched",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "shanghai",
    "name": "上海",
    "fullName": "上海国际赛车场",
    "type": "长直道 / 长弯 / T14 重刹",
    "summary": "看 T13 出口。能贴住，T14 才有戏。",
    "corners": [
      {
        "id": "T1-T2",
        "note": "长弯，前胎压力最大。",
        "x": 125.1,
        "y": 191,
        "labelX": 135.1,
        "labelY": 183
      },
      {
        "id": "T13",
        "note": "出弯速度决定直道攻击。",
        "x": 162,
        "y": 118.8,
        "labelX": 172,
        "labelY": 110.8
      },
      {
        "id": "T14",
        "note": "长直道后重刹车，主要超车点。",
        "x": 147.9,
        "y": 49.5,
        "labelX": 157.9,
        "labelY": 41.5
      }
    ],
    "path": "M206.4 189.0 L175.2 196.3 L145.4 203.3 L139.4 204.7 L117.0 209.9 L115.0 210.3 L112.8 210.5 L111.4 210.5 L109.8 210.2 L108.4 210.0 L106.9 209.6 L105.5 209.1 L104.0 208.3 L102.3 207.4 L100.6 206.2 L99.4 205.3 L98.1 203.9 L96.8 202.2 L95.7 200.2 L94.9 198.2 L94.4 196.1 L94.1 194.1 L94.1 192.0 L94.3 189.9 L94.6 188.0 L95.2 186.3 L96.1 184.8 L97.2 183.3 L98.3 182.3 L99.7 181.3 L101.2 180.6 L102.9 180.1 L104.4 179.9 L106.1 179.9 L108.0 180.3 L109.4 180.9 L110.5 181.6 L111.4 182.4 L112.1 183.4 L112.5 184.3 L112.7 185.3 L112.8 186.3 L112.6 187.3 L112.3 188.5 L111.3 191.0 L111.0 192.0 L110.7 192.9 L110.6 194.0 L110.7 195.4 L111.1 197.0 L111.9 198.2 L113.0 199.3 L114.2 199.9 L115.6 200.4 L116.5 200.6 L117.4 200.6 L118.2 200.5 L119.0 200.2 L119.8 199.8 L120.7 199.3 L122.0 197.7 L123.2 195.9 L124.0 194.3 L124.7 192.6 L125.1 191.0 L125.6 188.8 L125.7 186.3 L125.6 184.9 L125.2 183.0 L124.6 181.3 L124.1 180.2 L123.2 178.9 L120.5 175.6 L102.2 154.4 L89.9 140.7 L88.1 138.6 L87.3 137.4 L86.6 136.2 L85.7 134.0 L85.0 131.9 L72.8 96.6 L72.6 95.3 L72.6 93.8 L73.3 92.6 L74.2 91.8 L75.4 91.3 L76.8 91.4 L78.3 91.9 L80.0 92.9 L81.6 93.9 L84.8 96.5 L86.5 97.9 L88.2 99.5 L90.8 102.4 L92.9 105.1 L94.2 107.1 L95.3 109.1 L98.4 114.6 L111.1 136.5 L112.0 137.9 L113.0 139.4 L114.2 141.0 L115.6 142.5 L117.3 143.9 L118.9 145.1 L120.8 146.3 L122.5 147.2 L124.4 147.9 L125.9 148.4 L127.5 148.7 L129.1 149.0 L130.7 149.1 L132.7 149.2 L134.3 149.2 L135.9 149.0 L137.7 148.6 L139.3 148.2 L141.3 147.5 L142.9 146.7 L145.1 145.4 L147.3 143.8 L149.5 141.7 L151.6 139.3 L152.7 137.7 L153.9 135.6 L157.3 128.0 L160.0 122.2 L160.8 120.7 L162.0 118.8 L163.3 117.3 L164.9 115.8 L166.6 114.6 L168.5 113.6 L170.5 113.0 L172.4 112.6 L174.5 112.4 L176.6 112.6 L178.9 113.0 L180.8 113.7 L182.9 114.8 L185.1 116.4 L186.8 118.1 L188.3 120.1 L189.3 122.0 L194.6 133.1 L195.2 134.2 L195.9 135.3 L196.8 136.0 L197.7 136.5 L199.5 136.9 L200.8 136.8 L202.1 136.4 L202.9 136.0 L203.7 135.4 L204.5 134.7 L211.5 125.8 L211.9 125.1 L212.5 124.1 L212.9 123.1 L213.0 122.2 L213.0 121.4 L212.9 120.4 L212.6 119.4 L212.1 118.2 L210.0 114.7 L203.0 103.4 L195.3 90.7 L190.8 83.2 L190.5 82.7 L182.4 69.4 L177.4 61.2 L167.9 45.7 L167.1 44.7 L166.3 44.2 L165.3 44.1 L164.6 44.2 L163.9 44.4 L163.0 44.9 L161.7 46.0 L160.7 47.3 L160.0 48.2 L159.3 49.5 L158.5 50.5 L157.8 51.0 L157.6 51.2 L156.6 51.8 L155.6 52.3 L154.6 52.5 L153.5 52.6 L152.3 52.4 L151.1 52.0 L149.2 50.8 L147.9 49.5 L147.5 49.1 L146.9 48.3 L145.8 46.8 L145.1 45.4 L144.4 43.7 L143.7 40.8 L143.7 40.3 L143.4 37.9 L143.5 36.4 L143.7 35.0 L144.0 33.6 L144.4 32.2 L145.3 30.3 L146.6 28.2 L147.9 26.7 L149.9 25.0 L152.5 23.6 L155.6 22.6 L158.6 22.1 L159.9 22.0 L161.5 22.0 L164.6 22.2 L167.7 23.0 L170.7 24.0 L173.1 25.4 L175.7 27.3 L177.8 29.2 L179.3 31.1 L181.2 33.7 L206.6 72.3 L218.8 90.9 L228.8 106.0 L233.1 112.5 L247.2 133.9 L249.2 136.9 L260.4 153.9 L273.8 174.3 L305.4 222.1 L306.9 224.5 L307.2 225.4 L307.4 226.1 L307.4 226.8 L307.2 227.2 L306.8 227.6 L306.3 228.0 L305.6 228.0 L304.7 227.8 L303.4 227.4 L300.9 225.9 L294.4 222.0 L293.2 221.2 L292.0 219.9 L290.7 218.3 L265.5 183.3 L261.6 177.8 L260.7 177.0 L260.2 176.5 L259.7 176.3 L259.1 176.3 L258.4 176.3 L257.2 176.6 L227.4 184.0 L212.5 187.5 L206.4 189.0",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 16,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/26753/54833",
          "x": -78.18,
          "y": -51.02,
          "width": 99.8,
          "height": 99.8
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/26753/54834",
          "x": 21.61,
          "y": -51.02,
          "width": 99.8,
          "height": 99.8
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/26753/54835",
          "x": 121.41,
          "y": -51.02,
          "width": 99.8,
          "height": 99.8
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/26753/54836",
          "x": 221.21,
          "y": -51.02,
          "width": 99.8,
          "height": 99.8
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/26753/54837",
          "x": 321.01,
          "y": -51.02,
          "width": 99.8,
          "height": 99.8
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/26754/54833",
          "x": -78.18,
          "y": 48.78,
          "width": 99.8,
          "height": 99.8
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/26754/54834",
          "x": 21.61,
          "y": 48.78,
          "width": 99.8,
          "height": 99.8
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/26754/54835",
          "x": 121.41,
          "y": 48.78,
          "width": 99.8,
          "height": 99.8
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/26754/54836",
          "x": 221.21,
          "y": 48.78,
          "width": 99.8,
          "height": 99.8
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/26754/54837",
          "x": 321.01,
          "y": 48.78,
          "width": 99.8,
          "height": 99.8
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/26755/54833",
          "x": -78.18,
          "y": 148.58,
          "width": 99.8,
          "height": 99.8
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/26755/54834",
          "x": 21.61,
          "y": 148.58,
          "width": 99.8,
          "height": 99.8
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/26755/54835",
          "x": 121.41,
          "y": 148.58,
          "width": 99.8,
          "height": 99.8
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/26755/54836",
          "x": 221.21,
          "y": 148.58,
          "width": 99.8,
          "height": 99.8
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/26755/54837",
          "x": 321.01,
          "y": 148.58,
          "width": 99.8,
          "height": 99.8
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/26756/54833",
          "x": -78.18,
          "y": 248.38,
          "width": 99.8,
          "height": 99.8
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/26756/54834",
          "x": 21.61,
          "y": 248.38,
          "width": 99.8,
          "height": 99.8
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/26756/54835",
          "x": 121.41,
          "y": 248.38,
          "width": 99.8,
          "height": 99.8
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/26756/54836",
          "x": 221.21,
          "y": 248.38,
          "width": 99.8,
          "height": 99.8
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/26756/54837",
          "x": 321.01,
          "y": 248.38,
          "width": 99.8,
          "height": 99.8
        }
      ]
    },
    "link": "/tracks/shanghai",
    "center": {
      "lat": 31.3389,
      "lon": 121.2199
    },
    "fia": null,
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 4,
      "minM": 1,
      "maxM": 8,
      "rangeM": 7
    },
    "source": {
      "geometry": "OpenStreetMap relation 2094941",
      "osmName": "Shanghai International Circuit",
      "wayCount": 1,
      "osmLengthKm": 5.459,
      "quality": "open-data",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "suzuka",
    "name": "铃鹿",
    "fullName": "铃鹿赛道",
    "type": "高速连续弯 / 节奏",
    "summary": "看 S 弯节奏。跟太近会被脏空气拖住。",
    "corners": [
      {
        "id": "S",
        "note": "连续换向，一错连错。",
        "x": 283.9,
        "y": 100.6,
        "labelX": 293.9,
        "labelY": 92.6
      },
      {
        "id": "Spoon",
        "note": "出口接长加速。",
        "x": 262.5,
        "y": 146.7,
        "labelX": 272.5,
        "labelY": 138.7
      },
      {
        "id": "130R",
        "note": "高速信心和脏空气测试。",
        "x": 50.2,
        "y": 39.2,
        "labelX": 60.2,
        "labelY": 31.2
      }
    ],
    "path": "M350.6 181.8 L353.5 185.4 L355.1 187.4 L356.4 189.8 L357.2 191.6 L357.6 192.9 L357.8 193.9 L358.0 195.4 L358.0 196.4 L357.9 198.1 L357.6 199.8 L357.2 201.3 L356.4 204.1 M155.1 118.2 L161.0 120.3 M161.0 120.3 L162.7 120.8 L163.8 121.1 L166.0 121.3 L168.2 121.2 L170.5 120.7 L173.3 119.8 L175.8 119.0 L178.5 118.0 L180.7 117.0 L182.9 116.0 L184.7 115.0 L188.3 112.8 L190.4 111.3 L191.9 110.2 L195.1 107.5 M195.1 107.5 L201.7 101.3 L204.9 98.4 L215.9 88.2 L216.9 87.4 L219.8 85.1 L221.1 84.2 L222.4 83.3 M222.4 83.3 L223.3 82.8 L223.9 82.6 L224.6 82.4 L225.1 82.4 L225.7 82.6 L226.2 82.9 M226.2 82.9 L230.2 86.4 M230.2 86.4 L231.0 86.9 L231.9 87.2 L232.8 87.2 L233.7 87.1 L234.6 86.7 L235.3 86.1 M235.3 86.1 L238.8 82.9 M238.8 82.9 L241.2 81.3 L243.3 80.2 L245.6 79.4 L248.4 78.9 L250.7 78.9 L252.9 79.0 M252.9 79.0 L254.5 79.2 L255.3 79.3 L257.0 79.6 L258.0 79.8 L260.8 80.7 L262.7 81.4 M262.7 81.4 L267.0 83.8 L270.5 86.3 L273.0 88.5 L275.7 91.1 L279.2 95.0 L283.9 100.6 L321.8 146.6 L350.6 181.8 M356.4 204.1 L354.7 208.9 M354.7 208.9 L353.8 210.5 L352.9 211.8 L351.6 212.9 L350.1 213.8 L348.4 214.4 L346.7 214.7 L345.0 214.8 L343.2 214.5 L341.6 214.0 L340.0 213.1 L338.6 212.0 L337.2 210.5 M337.2 210.5 L334.7 206.4 L323.8 189.4 M323.8 189.4 L321.6 186.4 L320.4 185.0 L318.9 183.8 L317.3 182.8 L315.5 182.1 L313.7 181.7 L311.8 181.5 M190.4 130.9 L189.8 131.7 L188.7 132.7 L187.7 133.2 M215.8 104.0 L213.2 105.6 L211.1 107.2 L209.7 108.4 L208.8 109.3 L207.9 110.2 L205.6 112.6 L190.4 130.9 M254.9 104.3 L251.7 102.7 L249.2 101.5 L246.6 100.5 L244.8 99.9 L243.2 99.5 L241.6 99.1 L239.4 98.8 L237.6 98.6 L233.7 98.5 L231.6 98.7 L229.3 98.8 L226.7 99.3 L224.0 100.2 L218.4 102.6 L215.8 104.0 M262.5 122.5 L263.1 120.5 L263.4 118.4 L263.4 116.4 L263.1 114.3 L262.5 112.3 L261.7 110.5 L260.5 108.7 L259.2 107.2 L257.6 105.9 L254.9 104.3 M258.8 132.3 L259.4 130.6 L262.5 122.5 M272.7 150.9 L271.6 150.8 L270.3 150.7 L268.1 150.1 L266.1 149.2 L264.2 148.0 L262.5 146.7 L260.8 144.8 L259.5 143.0 L258.6 141.0 L258.1 138.8 L257.9 136.6 L258.1 134.4 L258.8 132.3 M279.3 151.1 L272.7 150.9 M292.6 161.8 L292.1 160.0 L291.3 158.4 L290.3 156.8 L289.2 155.4 L287.8 154.1 L286.3 153.1 L285.7 152.8 L284.7 152.2 L282.9 151.6 L281.1 151.2 L279.3 151.1 M295.1 171.0 L292.6 161.8 M307.2 181.4 L305.5 181.3 L303.9 180.9 L302.2 180.3 L300.7 179.4 L299.4 178.4 L298.1 177.2 L297.1 175.8 L296.3 174.3 L295.6 172.7 L295.1 171.0 M311.8 181.5 L307.2 181.4 M25.3 55.8 L26.0 56.5 L28.3 59.2 L31.0 61.6 L33.8 64.0 L39.1 68.1 L42.7 70.8 L45.8 72.9 L53.3 77.8 L60.0 81.8 L66.4 85.2 L71.4 87.6 L72.9 88.3 L77.1 90.2 L82.7 92.6 L91.3 95.6 L106.2 100.9 L125.2 107.6 L155.1 118.2 M30.1 36.8 L28.3 37.5 L26.7 38.3 L25.8 38.8 L24.9 39.6 L24.1 40.6 L23.2 42.0 L22.6 43.3 L22.1 45.2 L22.0 47.1 L22.1 48.8 L22.6 50.8 L23.3 52.5 L24.5 54.6 L25.3 55.8 M37.9 35.3 L35.7 35.6 L33.1 36.1 L30.1 36.8 M51.4 41.1 L50.8 40.0 L50.2 39.2 L49.4 38.4 L48.6 37.6 L47.5 36.9 L46.5 36.4 L45.3 35.9 L44.0 35.5 L41.3 35.2 L37.9 35.3 M56.1 51.8 L51.4 41.1 M108.9 92.7 L106.1 92.4 L101.8 91.8 L95.9 90.4 L90.6 88.6 L85.3 86.6 L81.6 84.9 L78.0 82.9 L74.9 80.8 L71.4 77.9 L69.4 75.8 L67.7 73.9 L66.3 72.2 L64.8 70.1 L62.9 66.9 L61.2 63.5 L56.1 51.8 M139.3 79.1 L137.4 81.4 L135.8 83.3 L133.4 85.7 L132.1 87.0 L130.7 88.0 L126.5 90.5 L122.4 91.7 L117.6 92.3 L114.5 92.6 L111.3 92.7 L108.9 92.7 M151.1 59.9 L146.5 67.7 L145.6 69.1 L142.6 73.9 L139.3 79.1 M158.3 62.7 L158.6 61.4 L158.5 60.1 L158.0 59.0 L157.2 58.1 L156.2 57.6 L155.0 57.4 L153.9 57.6 L152.8 58.1 L151.9 59.0 L151.1 59.9 M154.3 71.7 L158.3 62.7 M152.3 90.3 L151.4 85.8 L151.1 83.2 L151.1 81.0 L151.5 78.8 L152.6 75.5 L154.3 71.7 M160.3 131.3 L152.3 90.3 M165.4 135.1 L163.6 135.1 L162.8 134.8 L162.0 134.4 L161.3 133.8 L160.8 133.0 L160.5 132.2 L160.3 131.3 M187.7 133.2 L165.4 135.1",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 16,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25991/57620",
          "x": -68.76,
          "y": -79.08,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25991/57621",
          "x": 17.11,
          "y": -79.08,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25991/57622",
          "x": 102.97,
          "y": -79.08,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25991/57623",
          "x": 188.83,
          "y": -79.08,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25991/57624",
          "x": 274.69,
          "y": -79.08,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25991/57625",
          "x": 360.55,
          "y": -79.08,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25992/57620",
          "x": -68.76,
          "y": 6.78,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25992/57621",
          "x": 17.11,
          "y": 6.78,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25992/57622",
          "x": 102.97,
          "y": 6.78,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25992/57623",
          "x": 188.83,
          "y": 6.78,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25992/57624",
          "x": 274.69,
          "y": 6.78,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25992/57625",
          "x": 360.55,
          "y": 6.78,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25993/57620",
          "x": -68.76,
          "y": 92.64,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25993/57621",
          "x": 17.11,
          "y": 92.64,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25993/57622",
          "x": 102.97,
          "y": 92.64,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25993/57623",
          "x": 188.83,
          "y": 92.64,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25993/57624",
          "x": 274.69,
          "y": 92.64,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25993/57625",
          "x": 360.55,
          "y": 92.64,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25994/57620",
          "x": -68.76,
          "y": 178.5,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25994/57621",
          "x": 17.11,
          "y": 178.5,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25994/57622",
          "x": 102.97,
          "y": 178.5,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25994/57623",
          "x": 188.83,
          "y": 178.5,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25994/57624",
          "x": 274.69,
          "y": 178.5,
          "width": 85.86,
          "height": 85.86
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/25994/57625",
          "x": 360.55,
          "y": 178.5,
          "width": 85.86,
          "height": 85.86
        }
      ]
    },
    "link": "/tracks/suzuka",
    "center": {
      "lat": 34.8431,
      "lon": 136.541
    },
    "fia": null,
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 43,
      "minM": 17,
      "maxM": 60,
      "rangeM": 43
    },
    "source": {
      "geometry": "OpenStreetMap relation 284570",
      "osmName": "鈴鹿サーキット",
      "wayCount": 40,
      "osmLengthKm": 5.807,
      "quality": "open-data",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "miami",
    "name": "迈阿密",
    "fullName": "迈阿密国际赛道",
    "type": "临时赛道 / 长直道 / 低速段",
    "summary": "高速段能打，低速区容易损失节奏。",
    "corners": [
      {
        "id": "T1",
        "note": "发车后重刹。",
        "x": 142.6,
        "y": 174.4,
        "labelX": 152.6,
        "labelY": 166.4
      },
      {
        "id": "T11",
        "note": "长直道后进攻。",
        "x": 325.7,
        "y": 115,
        "labelX": 335.7,
        "labelY": 107
      },
      {
        "id": "T14-T16",
        "note": "慢速组合，牵引关键。",
        "x": 140.3,
        "y": 68.4,
        "labelX": 150.3,
        "labelY": 60.4
      }
    ],
    "path": "M193.1 177.8 L190.2 178.2 L186.8 178.4 L183.6 178.4 L181.7 178.2 L179.7 178.0 L176.7 177.5 L173.7 176.7 L171.0 175.9 L166.6 174.3 L164.2 173.0 L161.5 171.6 L152.0 165.8 L127.2 150.6 L119.0 145.6 L117.3 144.5 L115.2 143.4 L113.2 142.5 L110.6 142.0 L108.2 141.7 L106.0 141.7 L103.5 141.9 L101.1 142.3 L99.0 143.1 L96.6 144.3 L90.6 148.6 L88.7 149.9 L86.7 151.1 L84.6 151.9 L82.3 152.5 L80.0 152.8 L77.2 152.8 L74.5 152.3 L72.3 151.5 L69.7 150.3 L66.7 147.9 L59.2 140.7 L57.2 139.4 L53.9 138.1 L51.5 137.4 L49.6 137.2 L47.2 137.1 L45.1 137.2 L43.2 137.5 L40.1 138.3 L37.2 139.2 L33.4 140.9 L29.6 143.4 L26.2 147.0 L24.6 149.5 L23.3 152.2 L22.5 154.7 L22.1 157.3 L22.0 159.5 L22.1 161.6 L22.6 163.8 L23.3 165.5 L24.3 166.9 L25.5 168.0 L26.8 168.9 L28.2 169.5 L29.6 169.7 L31.0 169.7 L33.4 169.4 L38.6 168.8 L41.6 168.6 L44.3 168.6 L46.9 168.8 L49.3 169.1 L62.3 172.1 L74.9 174.8 L78.6 175.3 L81.4 175.4 L85.6 175.4 L100.5 175.0 L135.8 174.0 L137.9 174.0 L140.2 174.0 L142.6 174.4 L144.7 174.9 L149.4 176.1 L153.7 177.6 L161.8 180.6 L166.6 182.2 L171.0 183.7 L175.2 185.2 L182.0 187.4 L183.5 187.8 L190.2 189.6 L194.9 190.5 M240.9 186.2 L241.9 184.7 L242.3 182.6 L242.1 179.8 L241.9 177.5 L242.3 175.4 L242.9 174.5 L243.7 173.8 L246.2 172.6 L253.2 169.5 L254.8 168.2 L255.9 166.8 L256.6 165.1 L257.1 162.1 L256.8 148.0 L257.5 137.5 L257.5 129.5 L257.7 126.3 L258.2 124.1 L259.4 120.3 L260.4 117.7 L261.1 115.1 L261.5 111.1 L261.5 107.5 L261.1 84.1 L260.5 80.4 L260.0 78.3 L258.5 76.3 L255.6 75.1 L253.3 73.9 L250.3 72.7 L246.6 71.3 L237.6 68.2 L229.5 65.7 M240.9 186.2 L263.3 178.0 L264.5 177.5 L267.2 176.4 L270.4 175.2 L286.7 169.3 L293.9 166.4 L300.4 163.5 L304.9 161.5 L310.4 158.7 L313.7 157.0 L335.2 144.0 L336.4 143.1 L337.2 142.4 L337.7 141.9 L338.2 141.2 L338.6 140.3 L338.8 139.2 L338.7 138.2 L338.4 137.2 L337.7 136.3 L336.5 135.6 L335.2 134.9 L329.7 131.4 L327.8 129.8 L327.0 129.0 L326.3 128.1 L325.6 127.0 L324.8 125.0 L324.3 123.0 L324.2 121.5 L324.3 119.3 L324.8 117.0 L325.7 115.0 L326.9 113.4 L328.7 112.1 L330.1 111.6 L331.2 111.3 L332.0 111.2 L332.5 111.2 L333.8 111.2 L339.5 111.2 L344.5 111.3 L345.5 111.2 L346.7 110.9 L347.6 110.5 L348.4 110.1 L349.6 109.3 L350.5 108.5 L351.9 106.9 L353.7 103.9 L357.5 97.2 L357.8 96.4 L358.0 95.5 L357.9 94.8 L357.6 94.2 L357.1 93.8 L356.5 93.6 L354.4 93.0 L353.6 92.6 L353.2 92.2 L352.9 91.8 L352.8 91.3 L352.8 90.7 L353.0 89.8 L353.1 89.0 L353.5 87.5 L357.0 74.4 L357.1 73.6 L357.1 72.9 L356.9 72.1 L356.6 71.5 L355.9 70.8 L355.1 70.4 L354.2 70.1 L353.1 69.9 L351.9 69.8 L255.9 65.7 L229.5 65.7 M133.8 61.2 L123.9 60.8 L101.1 59.7 L67.1 58.4 L65.4 58.4 L63.9 58.7 L63.1 59.1 L62.4 59.7 L61.9 60.7 L61.7 61.8 L61.8 62.8 L62.1 64.0 L62.8 65.3 L63.5 66.1 L64.3 66.9 L66.3 68.3 L73.6 73.4 L78.1 76.5 L81.1 78.3 L84.3 79.3 L88.1 79.8 L91.8 79.5 L95.0 78.7 L102.7 74.8 L107.4 72.6 L111.8 70.6 L116.5 68.8 L120.5 67.7 L124.3 67.0 L128.7 66.9 L133.3 67.0 M133.3 67.0 L137.7 67.7 L140.3 68.4 L142.0 68.8 L143.8 69.5 L145.6 70.2 L147.6 71.4 L151.4 73.7 L155.7 76.3 L160.0 78.8 L163.9 81.2 L167.8 83.6 L172.4 86.4 L177.0 89.2 L181.3 91.8 L185.5 94.3 L189.9 96.9 L194.0 99.4 L198.3 102.0 L202.5 104.6 L210.3 109.3 L215.2 112.3 L226.6 119.3 L232.2 122.7 L233.5 123.8 L234.2 124.9 L234.5 126.2 L234.5 127.6 L234.2 128.7 L233.7 129.6 L231.7 131.6 L227.7 134.7 L224.2 137.4 L222.2 139.4 L220.4 141.6 L219.8 143.2 L219.3 145.0 L219.2 146.4 L219.2 147.7 L219.5 149.6 L219.9 151.5 L220.3 153.4 L220.4 154.2 L220.4 155.0 L220.2 157.6 L219.7 159.6 L218.3 163.3 L217.5 164.7 L216.5 166.2 L213.7 169.0 L209.8 171.8 L205.3 174.0 L200.9 175.9 L197.3 176.9 L193.1 177.8 M147.3 61.8 L133.8 61.2 M133.8 61.2 L132.6 62.2 L131.9 63.2 L131.8 64.7 L132.3 65.9 L133.3 67.0 M229.5 65.7 L147.3 61.8 M194.9 190.5 L199.8 191.1 L206.0 191.6 L212.7 191.5 L221.3 190.9 L228.6 189.8 L232.9 188.7 L237.1 187.4 L240.9 186.2 M193.1 177.8 L191.5 179.2 L190.4 181.3 L189.8 183.9 L190.4 186.9 L192.1 189.0 L194.9 190.5",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 17,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55742/36319",
          "x": -25.21,
          "y": -1.46,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55742/36320",
          "x": 36.28,
          "y": -1.46,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55742/36321",
          "x": 97.77,
          "y": -1.46,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55742/36322",
          "x": 159.26,
          "y": -1.46,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55742/36323",
          "x": 220.75,
          "y": -1.46,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55742/36324",
          "x": 282.23,
          "y": -1.46,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55742/36325",
          "x": 343.72,
          "y": -1.46,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55743/36319",
          "x": -25.21,
          "y": 60.03,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55743/36320",
          "x": 36.28,
          "y": 60.03,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55743/36321",
          "x": 97.77,
          "y": 60.03,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55743/36322",
          "x": 159.26,
          "y": 60.03,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55743/36323",
          "x": 220.75,
          "y": 60.03,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55743/36324",
          "x": 282.23,
          "y": 60.03,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55743/36325",
          "x": 343.72,
          "y": 60.03,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55744/36319",
          "x": -25.21,
          "y": 121.52,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55744/36320",
          "x": 36.28,
          "y": 121.52,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55744/36321",
          "x": 97.77,
          "y": 121.52,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55744/36322",
          "x": 159.26,
          "y": 121.52,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55744/36323",
          "x": 220.75,
          "y": 121.52,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55744/36324",
          "x": 282.23,
          "y": 121.52,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55744/36325",
          "x": 343.72,
          "y": 121.52,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55745/36319",
          "x": -25.21,
          "y": 183.01,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55745/36320",
          "x": 36.28,
          "y": 183.01,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55745/36321",
          "x": 97.77,
          "y": 183.01,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55745/36322",
          "x": 159.26,
          "y": 183.01,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55745/36323",
          "x": 220.75,
          "y": 183.01,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55745/36324",
          "x": 282.23,
          "y": 183.01,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55745/36325",
          "x": 343.72,
          "y": 183.01,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55746/36319",
          "x": -25.21,
          "y": 244.5,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55746/36320",
          "x": 36.28,
          "y": 244.5,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55746/36321",
          "x": 97.77,
          "y": 244.5,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55746/36322",
          "x": 159.26,
          "y": 244.5,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55746/36323",
          "x": 220.75,
          "y": 244.5,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55746/36324",
          "x": 282.23,
          "y": 244.5,
          "width": 61.49,
          "height": 61.49
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/55746/36325",
          "x": 343.72,
          "y": 244.5,
          "width": 61.49,
          "height": 61.49
        }
      ]
    },
    "link": "/tracks/miami",
    "center": {
      "lat": 25.958,
      "lon": -80.2389
    },
    "fia": {
      "name": "MIAMI",
      "country": "USA",
      "grade": "1",
      "lengthKm": 5.412,
      "pole": "Left",
      "expiry": "2028-05-04",
      "widthM": 12
    },
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 7,
      "minM": 0,
      "maxM": 11,
      "rangeM": 11
    },
    "source": {
      "geometry": "OpenStreetMap raceway ways",
      "osmName": "Miami International Autodrome",
      "wayCount": 10,
      "osmLengthKm": 6.184,
      "quality": "needs-check",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "imola",
    "name": "伊莫拉",
    "fullName": "伊莫拉",
    "type": "老派赛道 / 窄 / 节奏",
    "summary": "超车不轻松，看发车、进站和失误。",
    "corners": [
      {
        "id": "Tamburello",
        "note": "第一段攻防和节奏点。",
        "x": 242.7,
        "y": 129.5,
        "labelX": 252.7,
        "labelY": 121.5
      },
      {
        "id": "Tosa",
        "note": "低速出口，牵引重要。",
        "x": 138.3,
        "y": 202.2,
        "labelX": 148.3,
        "labelY": 194.2
      },
      {
        "id": "Rivazza",
        "note": "下坡刹车，失误代价大。",
        "x": 86.2,
        "y": 80.4,
        "labelX": 96.2,
        "labelY": 72.4
      }
    ],
    "path": "M300.8 55.1 L297.4 56.3 L294.5 57.1 L292.1 57.7 L290.9 58.0 L289.5 58.2 L287.9 58.4 L286.5 58.7 L285.1 58.8 L283.4 59.0 L276.8 58.8 M342.6 38.6 L330.6 43.0 L300.8 55.1 M354.5 48.1 L351.7 41.7 L351.1 40.8 L350.6 40.0 L349.8 39.3 L348.9 38.7 L348.1 38.3 L347.2 38.1 L346.3 37.9 L345.5 37.9 L344.6 38.0 L343.7 38.2 L342.6 38.6 M353.2 62.5 L354.9 61.8 L355.6 61.4 L356.4 60.9 L356.9 60.4 L357.4 59.7 L357.7 59.1 L357.9 58.6 L358.0 58.1 L358.0 57.4 L358.0 56.7 L357.9 56.2 L357.7 55.5 L357.3 54.6 L354.5 48.1 M335.1 70.3 L336.3 69.8 L344.7 66.1 L353.2 62.5 M322.7 78.5 L323.9 77.3 L326.3 75.3 L329.0 73.5 L330.4 72.6 L331.7 71.9 L335.1 70.3 M300.1 100.9 L302.3 98.8 L322.7 78.5 M274.8 118.7 L276.6 117.9 L278.6 116.9 L280.7 115.7 L282.7 114.5 L284.5 113.3 L292.3 107.5 L294.6 105.7 L297.0 103.7 L298.2 102.7 L300.1 100.9 M246.5 130.4 L274.8 118.7 M242.4 128.8 L242.7 129.5 L243.1 130.0 L243.4 130.3 L243.8 130.6 L244.4 130.7 L245.1 130.8 L245.7 130.7 L246.5 130.4 M238.5 125.2 L239.9 125.3 L240.6 125.4 L241.0 125.6 L241.5 126.0 L241.8 126.7 L242.4 128.8 M165.2 125.7 L238.5 125.2 M155.6 123.6 L158.3 124.8 L159.2 125.2 L160.3 125.5 L161.5 125.7 L162.7 125.8 L165.2 125.7 M138.4 142.2 L138.2 141.4 L138.2 140.3 L138.3 139.3 L138.6 138.5 L138.8 137.8 L139.3 137.0 L140.0 135.9 L144.0 129.7 M144.0 129.7 L148.0 123.4 L148.3 122.9 L148.9 122.5 L149.4 122.2 L150.0 122.0 L150.5 122.0 L151.2 122.0 L151.9 122.1 L152.9 122.5 L155.6 123.6 M144.1 168.5 L138.4 142.2 M141.3 195.8 L142.5 193.5 L143.3 191.5 L144.2 189.2 L144.7 187.1 L145.2 184.8 L145.6 182.3 L145.7 179.9 L145.7 177.9 L145.6 175.9 L145.2 173.3 L144.7 171.0 L144.1 168.5 M124.8 208.9 L127.6 209.3 L129.0 209.4 L130.2 209.3 L131.4 209.0 L132.5 208.4 L133.6 207.8 L134.9 206.8 L136.1 205.6 L136.9 204.5 L137.5 203.5 L138.3 202.2 L141.3 195.8 M103.0 205.0 L124.8 208.9 M69.6 206.5 L83.8 204.7 L85.8 204.4 L88.8 204.3 L92.0 204.2 L94.7 204.2 L97.3 204.3 L100.1 204.6 L103.0 205.0 M30.5 212.1 L59.6 208.0 L69.6 206.5 M26.7 198.2 L25.1 199.8 L23.8 201.1 L23.0 202.1 L22.4 203.2 L22.1 204.3 L22.0 205.4 L22.1 206.5 L22.4 207.4 L22.8 208.4 L23.4 209.4 L24.2 210.4 L25.0 211.0 L25.8 211.4 L26.8 211.8 L27.8 212.0 L28.8 212.1 L30.5 212.1 M55.0 174.2 L46.0 181.7 L38.5 188.1 L26.7 198.2 M57.5 161.9 L58.7 166.4 L58.8 166.9 L59.0 167.7 L58.9 168.5 L58.9 169.1 L58.8 169.8 L58.5 170.5 L58.1 171.2 L57.6 171.8 L56.9 172.5 L56.3 173.1 L55.7 173.6 L55.0 174.2 M56.5 151.6 L56.3 152.0 L56.1 152.7 L55.9 153.4 L55.9 154.0 L55.8 154.9 L55.9 155.7 L56.1 156.6 L56.3 157.4 L57.5 161.9 M83.4 84.9 L56.5 151.6 M97.4 74.5 L90.5 77.6 L89.5 78.1 L88.5 78.6 L87.8 79.0 L87.0 79.7 L86.2 80.4 L85.5 81.0 L85.0 81.7 L84.6 82.2 L84.3 82.8 L83.9 83.6 L83.4 84.9 M109.0 63.0 L108.6 65.0 L108.2 66.6 L107.8 67.7 L107.3 68.6 L106.7 69.3 L106.1 69.8 L105.4 70.4 L104.4 71.1 L97.4 74.5 M113.7 56.4 L112.8 56.7 L111.8 57.1 L111.1 57.5 L110.6 58.1 L110.2 58.7 L109.9 59.3 L109.6 59.9 L109.4 61.0 L109.0 63.0 M161.7 49.3 L151.0 50.2 L145.7 50.6 L133.2 51.8 L131.8 52.0 L130.4 52.4 L113.7 56.4 M195.7 51.0 L192.0 50.2 L189.5 49.8 L187.0 49.4 L184.8 49.2 L182.5 48.9 L179.5 48.7 L176.9 48.6 L174.8 48.5 L172.2 48.5 L169.3 48.6 L161.7 49.3 M276.8 58.8 L255.7 58.3 L234.4 58.2 L229.5 58.1 L227.3 57.7 L225.5 57.3 L195.7 51.0 M249.8 62.9 L234.4 59.3 L229.5 58.1 M254.1 61.2 L254.1 62.3 L253.9 63.0 L253.6 63.4 L253.1 63.5 L252.7 63.5 L251.9 63.3 L249.8 62.9 M255.7 58.3 L254.8 58.6 L254.5 58.8 L254.3 59.1 L254.1 59.5 L254.1 60.1 L254.1 61.2",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 16,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23742/34898",
          "x": -1.43,
          "y": -10.28,
          "width": 79.75,
          "height": 79.75
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23742/34899",
          "x": 78.32,
          "y": -10.28,
          "width": 79.75,
          "height": 79.75
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23742/34900",
          "x": 158.07,
          "y": -10.28,
          "width": 79.75,
          "height": 79.75
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23742/34901",
          "x": 237.81,
          "y": -10.28,
          "width": 79.75,
          "height": 79.75
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23742/34902",
          "x": 317.56,
          "y": -10.28,
          "width": 79.75,
          "height": 79.75
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23743/34898",
          "x": -1.43,
          "y": 69.47,
          "width": 79.75,
          "height": 79.75
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23743/34899",
          "x": 78.32,
          "y": 69.47,
          "width": 79.75,
          "height": 79.75
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23743/34900",
          "x": 158.07,
          "y": 69.47,
          "width": 79.75,
          "height": 79.75
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23743/34901",
          "x": 237.81,
          "y": 69.47,
          "width": 79.75,
          "height": 79.75
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23743/34902",
          "x": 317.56,
          "y": 69.47,
          "width": 79.75,
          "height": 79.75
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23744/34898",
          "x": -1.43,
          "y": 149.21,
          "width": 79.75,
          "height": 79.75
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23744/34899",
          "x": 78.32,
          "y": 149.21,
          "width": 79.75,
          "height": 79.75
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23744/34900",
          "x": 158.07,
          "y": 149.21,
          "width": 79.75,
          "height": 79.75
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23744/34901",
          "x": 237.81,
          "y": 149.21,
          "width": 79.75,
          "height": 79.75
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23744/34902",
          "x": 317.56,
          "y": 149.21,
          "width": 79.75,
          "height": 79.75
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23745/34898",
          "x": -1.43,
          "y": 228.96,
          "width": 79.75,
          "height": 79.75
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23745/34899",
          "x": 78.32,
          "y": 228.96,
          "width": 79.75,
          "height": 79.75
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23745/34900",
          "x": 158.07,
          "y": 228.96,
          "width": 79.75,
          "height": 79.75
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23745/34901",
          "x": 237.81,
          "y": 228.96,
          "width": 79.75,
          "height": 79.75
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23745/34902",
          "x": 317.56,
          "y": 228.96,
          "width": 79.75,
          "height": 79.75
        }
      ]
    },
    "link": "/tracks/imola",
    "center": {
      "lat": 44.3439,
      "lon": 11.7167
    },
    "fia": {
      "name": "IMOLA",
      "country": "ITA",
      "grade": "1",
      "lengthKm": 4.909,
      "pole": "Left",
      "expiry": "2027-03-15",
      "widthM": 10
    },
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 50,
      "minM": 37,
      "maxM": 72,
      "rangeM": 35
    },
    "source": {
      "geometry": "OpenStreetMap relation 9291096",
      "osmName": "Autodromo Internazionale Enzo e Dino Ferrari",
      "wayCount": 35,
      "osmLengthKm": 5.073,
      "quality": "matched",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "monaco",
    "name": "摩纳哥",
    "fullName": "摩纳哥",
    "type": "街道 / 窄 / 排位为王",
    "summary": "别等大超车。看排位、发车、进站窗口。",
    "corners": [
      {
        "id": "T1",
        "note": "发车后最拥挤。",
        "x": 202.4,
        "y": 110.4,
        "labelX": 212.4,
        "labelY": 102.4
      },
      {
        "id": "Hairpin",
        "note": "极低速，看机械抓地。",
        "x": 246.6,
        "y": 26.9,
        "labelX": 256.6,
        "labelY": 28
      },
      {
        "id": "Chicane",
        "note": "隧道后少数机会。",
        "x": 128.1,
        "y": 215.6,
        "labelX": 138.1,
        "labelY": 207.6
      }
    ],
    "path": "M142.2 227.5 L142.8 227.4 L143.5 227.2 L148.7 225.7 L149.4 225.5 L149.9 225.2 L150.3 224.9 L150.6 224.6 L150.8 224.2 L151.0 223.6 L151.1 223.1 L151.0 222.6 L150.9 221.9 L150.7 221.4 L150.5 220.9 L150.2 220.5 M132.6 182.1 L133.4 185.3 L133.6 186.4 L133.6 187.6 L133.1 188.4 L132.5 189.1 L131.7 189.7 L131.1 189.9 L130.2 190.4 L129.8 190.7 L129.5 190.9 L129.2 191.5 L129.1 192.2 L129.3 194.1 L130.1 196.7 L131.8 201.5 L133.4 204.9 L134.7 207.5 L135.9 209.4 L137.1 211.0 L138.9 213.2 L140.1 214.4 L141.6 215.7 L142.7 216.5 L143.9 217.1 L145.3 217.8 L148.3 219.2 L149.2 219.8 L150.2 220.5 M129.5 165.6 L130.9 173.0 L131.6 176.6 L132.6 182.1 M121.8 152.4 L122.5 154.4 L122.7 155.4 L123.3 156.5 L124.1 157.3 L127.4 159.7 L127.9 160.3 L128.4 160.8 L128.7 161.1 L128.9 161.5 L129.2 162.3 L129.5 165.6 M143.1 122.0 L130.6 123.6 L129.8 123.9 L129.4 124.1 L129.0 124.5 L128.5 124.9 L127.4 126.7 L126.7 128.1 L125.0 131.5 L124.5 132.8 L124.1 133.8 L123.1 137.1 L122.6 139.1 L122.3 140.6 L122.0 142.4 L121.7 145.1 L121.7 148.8 L121.8 152.4 M143.1 122.0 L146.9 121.4 L147.7 121.2 L148.2 121.1 L153.1 120.5 L157.0 119.9 L159.1 119.6 L160.3 119.5 L165.0 118.8 L167.7 118.5 L168.8 118.3 L171.3 118.0 M184.2 116.0 L184.3 117.0 L184.2 117.5 L184.1 117.9 L183.6 118.3 L183.3 118.5 L182.5 118.6 L180.1 118.9 L179.6 118.9 L179.1 118.7 L178.5 118.3 L177.2 117.6 L176.5 117.3 L176.0 117.3 L171.3 118.0 M184.2 116.0 L184.2 114.9 L184.2 114.5 L184.4 114.0 L184.8 113.4 M184.8 113.4 L190.6 112.5 M190.6 112.5 L196.6 111.4 L202.4 110.4 L208.0 108.9 L215.9 106.3 M209.0 97.3 L210.4 97.0 L212.1 96.7 L213.8 96.1 L214.7 95.8 L216.0 95.2 L216.8 94.8 L217.7 94.2 L218.5 93.6 L219.6 92.8 L220.2 92.3 L220.9 91.6 L222.1 90.5 L223.0 89.4 L223.8 88.3 L224.3 87.5 L224.9 86.4 L225.0 86.0 L225.2 85.4 L225.5 84.0 L225.6 82.6 L225.5 81.1 L225.3 79.9 L225.2 79.6 L225.0 78.0 L224.4 76.1 L224.2 75.6 L223.6 74.1 L222.7 72.2 M222.2 70.9 L222.4 71.6 L222.7 72.2 M217.8 67.3 L220.3 69.6 L220.9 70.1 L222.2 70.9 M213.6 60.2 L213.6 60.9 L213.7 61.2 L213.7 61.6 L213.8 62.0 L213.9 62.3 L214.1 62.8 L214.4 63.4 L214.8 64.2 L215.1 64.6 L215.3 64.9 L215.9 65.6 L216.5 66.2 L217.8 67.3 M213.6 60.2 L213.7 59.7 L213.8 59.1 L214.0 58.4 L214.2 57.8 L215.0 56.3 L215.7 55.0 M215.7 55.0 L217.5 52.5 L219.1 50.3 L219.4 49.9 M219.4 49.9 L221.6 46.8 L223.5 44.3 M223.5 44.3 L224.9 42.2 L225.8 41.0 L226.4 40.3 L228.7 37.2 L234.5 29.4 L238.4 24.2 L239.2 23.2 L239.6 22.7 L239.9 22.4 L240.3 22.2 L240.9 22.0 L241.5 22.0 M257.2 40.0 L257.3 40.4 L257.4 40.8 L257.4 41.1 L257.3 41.5 L257.2 41.9 L257.0 42.3 L256.7 42.5 L256.4 42.9 L256.0 43.1 L255.5 43.3 L255.2 43.3 L254.9 43.4 L254.6 43.3 L254.2 43.2 L253.8 43.0 L253.4 42.6 L253.1 42.1 L252.9 41.7 L252.7 41.1 L252.5 40.4 L252.0 39.5 L251.4 38.5 L251.0 38.0 L250.6 37.4 L250.0 36.5 L249.1 35.2 L248.4 34.3 L247.9 33.5 L247.6 32.8 L247.3 32.2 L247.1 31.6 L246.9 31.1 L246.8 30.5 L246.7 29.2 L246.7 27.9 L246.6 26.9 L246.5 26.0 L246.2 25.4 L246.0 24.9 L245.6 24.3 L245.1 23.7 L244.6 23.2 L243.9 22.7 L243.4 22.4 L242.7 22.2 L242.2 22.1 L241.5 22.0 M253.6 25.8 L251.5 26.7 L251.0 27.0 L250.6 27.3 L250.4 27.6 L250.1 28.0 L249.8 28.6 L249.7 29.2 L249.7 29.7 L249.7 30.1 L249.9 30.6 L250.1 31.1 L250.3 31.6 L250.7 32.1 L251.4 33.0 L253.5 35.8 L254.2 36.8 L255.0 37.6 L255.8 38.3 L256.5 39.1 L257.0 39.6 L257.2 40.0 M253.6 25.8 L255.6 25.4 L256.4 25.2 L257.8 24.6 M257.8 24.6 L260.1 23.6 L261.7 23.1 L262.2 22.9 M262.2 22.9 L263.2 22.7 L263.9 22.6 L264.6 22.5 L265.4 22.5 L266.0 22.6 M266.0 22.6 L266.5 22.7 L267.0 23.0 L267.5 23.5 L267.7 24.0 L267.9 24.7 L267.9 25.3 L267.8 27.3 M267.2 39.7 L267.8 27.3 M228.3 99.9 L230.6 98.7 L233.0 97.4 L235.2 96.0 L237.4 94.5 L239.6 93.0 L241.7 91.3 L243.7 89.6 L245.7 87.8 L248.0 85.4 L250.3 82.9 L252.5 80.3 L254.5 77.6 L256.4 74.8 L258.1 71.9 L259.7 68.9 L261.2 65.8 L262.5 62.7 L263.6 59.6 L264.6 56.3 L265.5 53.0 L266.1 49.7 L266.7 46.4 L267.0 43.0 L267.1 41.2 L267.2 39.7 M227.2 100.5 L228.3 99.9 M215.9 106.3 L223.0 102.6 L227.2 100.5 M142.2 227.5 L140.6 227.8 L139.6 227.9 L138.7 228.0 L137.6 228.0 L136.5 228.0 L135.8 227.9 L135.2 227.8 L134.7 227.6 L134.3 227.4 L133.7 226.9 L133.2 226.5 L132.9 226.0 L132.7 225.3 M132.7 225.3 L132.6 224.3 L132.5 223.4 L132.3 222.6 L132.1 221.7 L131.8 220.9 L131.4 220.1 L130.9 219.3 L130.4 218.6 M130.4 218.6 L128.5 216.2 M128.5 216.2 L128.1 215.6 L127.3 214.4 L126.7 213.4 L126.1 212.4 L124.4 209.8 L123.5 208.0 M123.5 208.0 L122.4 205.9 L121.9 204.2 L121.4 202.6 L120.8 200.1 L120.7 199.8 L120.6 199.5 L120.4 198.8 L119.4 195.8 L118.7 193.2 L118.3 191.8 L118.1 191.1 L117.7 189.8 L117.6 189.4 L116.8 186.5 L115.9 183.2 L115.6 181.6 L115.4 181.0 L115.3 180.4 L115.1 179.4 M115.1 179.4 L115.1 178.9 L115.0 178.4 L114.9 178.1 L114.7 176.6 L114.5 175.3 L114.3 174.0 L114.2 173.5 L114.0 172.3 L113.8 171.1 L113.6 169.7 L113.4 167.9 L113.2 166.3 L113.1 165.3 L112.8 160.7 L112.7 159.7 L112.5 157.7 L112.4 156.4 L112.3 155.6 L112.3 153.9 L112.2 152.2 L112.1 151.4 L112.2 150.0 L112.2 147.7 L112.3 146.5 L112.5 142.7 L112.6 142.4 L112.8 140.8 L113.0 138.9 L113.4 137.0 L113.8 135.5 L114.2 134.0 M114.2 134.0 L115.0 131.5 L115.7 129.2 M115.7 129.2 L116.0 128.2 L116.1 127.1 L116.4 125.4 L116.8 122.4 L117.0 121.7 L117.2 121.1 L117.6 120.4 L118.2 119.8 L118.8 119.5 L119.5 119.4 L127.6 118.3 M127.6 118.3 L135.0 117.3 L138.6 116.6 L139.0 116.5 L141.1 116.0 L144.9 115.0 L151.1 113.2 L153.0 112.6 L153.3 112.5 L155.2 111.9 L159.9 110.6 M159.9 110.6 L163.0 109.8 L165.7 109.4 L169.4 108.9 L171.3 108.7 L174.4 108.4 L175.6 108.2 L176.9 107.7 L177.7 107.4 L179.8 106.4 L186.2 103.4 L187.7 102.6 L189.2 101.9 L190.9 101.1 L192.3 100.6 L193.9 100.1 L197.4 99.2 L201.0 98.4 M201.0 98.4 L205.1 97.8 L209.0 97.3 M115.7 129.2 L118.7 124.2 L119.3 123.3 L119.9 122.5 L120.6 121.5 L121.0 121.1 L121.3 120.8 L121.8 120.2 L122.5 119.8 L123.2 119.5 L127.6 118.3",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 16,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23895/34117",
          "x": -73.76,
          "y": -29.99,
          "width": 93.43,
          "height": 93.43
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23895/34118",
          "x": 19.67,
          "y": -29.99,
          "width": 93.43,
          "height": 93.43
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23895/34119",
          "x": 113.1,
          "y": -29.99,
          "width": 93.43,
          "height": 93.43
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23895/34120",
          "x": 206.53,
          "y": -29.99,
          "width": 93.43,
          "height": 93.43
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23895/34121",
          "x": 299.96,
          "y": -29.99,
          "width": 93.43,
          "height": 93.43
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23896/34117",
          "x": -73.76,
          "y": 63.44,
          "width": 93.43,
          "height": 93.43
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23896/34118",
          "x": 19.67,
          "y": 63.44,
          "width": 93.43,
          "height": 93.43
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23896/34119",
          "x": 113.1,
          "y": 63.44,
          "width": 93.43,
          "height": 93.43
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23896/34120",
          "x": 206.53,
          "y": 63.44,
          "width": 93.43,
          "height": 93.43
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23896/34121",
          "x": 299.96,
          "y": 63.44,
          "width": 93.43,
          "height": 93.43
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23897/34117",
          "x": -73.76,
          "y": 156.87,
          "width": 93.43,
          "height": 93.43
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23897/34118",
          "x": 19.67,
          "y": 156.87,
          "width": 93.43,
          "height": 93.43
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23897/34119",
          "x": 113.1,
          "y": 156.87,
          "width": 93.43,
          "height": 93.43
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23897/34120",
          "x": 206.53,
          "y": 156.87,
          "width": 93.43,
          "height": 93.43
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/23897/34121",
          "x": 299.96,
          "y": 156.87,
          "width": 93.43,
          "height": 93.43
        }
      ]
    },
    "link": "/tracks/monaco",
    "center": {
      "lat": 43.7347,
      "lon": 7.4206
    },
    "fia": {
      "name": "MONACO",
      "country": "MON",
      "grade": "1",
      "lengthKm": 3.34,
      "pole": "Right",
      "expiry": "2026-05-20",
      "widthM": 10
    },
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 21,
      "minM": 1,
      "maxM": 54,
      "rangeM": 53
    },
    "source": {
      "geometry": "OpenStreetMap relation 148194",
      "osmName": "Circuit de Monaco",
      "wayCount": 40,
      "osmLengthKm": 3.4,
      "quality": "matched",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "barcelona",
    "name": "巴塞罗那",
    "fullName": "加泰罗尼亚赛道",
    "type": "综合测试 / 中高速 / 轮胎",
    "summary": "赛车好不好，这里藏不住。",
    "corners": [
      {
        "id": "T1",
        "note": "长直道后主要进攻点。",
        "x": 273.1,
        "y": 58.7,
        "labelX": 283.1,
        "labelY": 50.7
      },
      {
        "id": "T3",
        "note": "长右弯，考下压力。",
        "x": 142.9,
        "y": 145.3,
        "labelX": 152.9,
        "labelY": 137.3
      },
      {
        "id": "T9",
        "note": "高速出弯，影响后段。",
        "x": 162.1,
        "y": 112,
        "labelX": 172.1,
        "labelY": 104
      }
    ],
    "path": "M227.4 24.8 L229.0 23.7 L230.0 23.2 L230.9 22.8 L232.1 22.4 L233.3 22.2 L234.7 22.0 L236.1 22.0 L237.2 22.0 L238.7 22.2 L240.0 22.5 L241.2 22.9 L242.3 23.4 L243.3 23.9 L245.5 25.4 M245.5 25.4 L247.2 26.5 L248.0 27.0 L248.4 27.3 L251.7 29.5 L253.1 30.3 M253.1 30.3 L256.5 32.6 M232.5 24.7 L237.5 28.5 L237.8 28.7 L238.2 29.0 L240.8 31.0 L241.1 31.2 L246.7 35.5 L247.2 35.9 L247.7 36.3 L248.2 36.5 L248.6 36.6 L249.0 36.6 L249.4 36.6 L249.7 36.4 L250.1 36.2 L250.4 35.9 L253.3 32.8 L253.7 32.4 L254.2 32.1 L254.8 31.9 L255.3 31.9 L255.8 32.2 L256.5 32.6 L257.3 33.1 L261.2 35.6 L266.9 39.2 L269.0 40.7 L270.2 41.9 L271.1 43.1 L272.0 44.3 L272.7 45.7 L273.3 47.1 L273.7 48.8 L274.1 50.7 L274.2 52.3 L274.1 54.0 L273.9 55.7 L273.6 57.2 L273.1 58.7 L272.4 60.1 L271.5 61.6 L251.5 93.1 L238.3 114.1 L226.8 132.5 L221.4 140.9 L201.7 172.4 L192.2 187.6 L182.5 202.9 L180.0 206.9 L178.8 209.0 L174.5 215.8 L173.3 217.3 L172.0 218.5 L170.6 219.3 L169.1 219.5 L167.3 219.4 L165.4 219.0 L163.7 218.0 L160.9 216.2 L159.4 215.3 L158.0 214.7 L156.2 214.3 L154.4 214.2 L152.3 214.4 L150.5 215.0 L149.0 215.9 L139.5 222.8 L137.7 224.1 L136.2 225.3 L134.5 226.2 L132.4 227.0 L130.5 227.6 L127.9 228.0 L123.8 227.9 L121.5 227.5 L119.4 226.9 L116.2 225.3 L113.9 223.5 L112.0 221.7 L110.5 219.9 L109.0 217.7 L107.5 214.4 L106.4 210.8 L106.0 207.8 L105.8 205.6 L105.9 202.1 L106.4 198.7 L107.0 196.0 L107.7 193.2 L108.7 190.3 L109.9 187.3 L111.4 184.5 L117.4 175.0 L133.1 149.8 L134.4 148.1 L135.8 146.8 L137.3 146.0 L139.3 145.3 L141.0 145.1 L142.9 145.3 L144.8 145.8 L146.2 146.5 L147.7 147.5 L149.0 148.6 L150.4 150.3 L151.5 152.1 L152.4 154.1 L152.8 156.2 L153.1 158.7 L153.1 161.0 L152.9 163.3 L152.2 166.0 L151.3 168.5 L149.2 172.2 L145.4 178.1 L133.9 196.3 L133.2 197.7 L132.7 199.2 L132.7 200.7 L133.1 202.3 L133.8 203.6 L134.6 204.7 L136.0 205.6 L137.5 206.1 L139.0 206.3 L140.6 206.0 L142.0 205.4 L164.5 195.3 L167.4 193.5 L170.8 191.1 L173.1 189.2 L175.2 187.1 L177.5 184.2 L179.8 180.8 L186.9 169.6 L187.6 168.4 L187.9 167.5 L188.3 166.4 L188.4 165.6 L188.4 164.7 L188.2 164.0 L188.0 163.1 L187.5 161.9 L186.9 161.1 L186.2 160.3 L185.5 159.7 L184.8 159.2 L182.6 157.9 L180.5 156.6 L178.1 154.6 L176.7 153.0 L175.5 151.0 L174.5 148.8 L168.6 134.9 L163.1 122.1 L162.4 120.1 L162.0 118.6 L161.8 117.1 L161.7 115.7 L161.8 114.2 L162.1 112.0 L162.9 109.6 L164.0 107.4 L165.5 105.5 L166.3 104.5 L167.2 103.7 L169.6 101.9 L172.8 100.2 L187.8 92.6 L200.3 86.2 L206.4 83.0 L214.7 78.8 L223.8 74.2 L245.8 62.8 L247.5 61.8 L248.4 60.9 L249.0 60.0 L249.3 59.7 L249.7 58.6 L249.7 57.0 L249.3 55.2 L248.5 53.9 L247.3 52.5 L245.9 51.5 L244.5 50.7 L243.2 50.1 L242.1 49.6 L239.7 49.1 L237.4 48.8 L235.1 48.8 L233.4 49.0 L231.0 49.5 L228.8 50.4 L226.5 51.7 L225.5 52.4 L225.3 52.6 L221.0 56.2 L219.6 57.2 L218.2 58.0 L216.3 58.5 L215.4 58.7 L213.5 58.8 L212.0 58.7 L211.0 58.4 L209.6 57.8 L208.0 56.8 L206.7 55.6 L205.3 53.5 L204.5 51.5 L204.1 49.2 L204.1 47.7 L204.4 46.1 L204.9 44.5 L205.9 42.8 L207.3 41.3 L217.8 32.7 L227.4 24.8 L228.8 24.1 L230.0 23.8 L231.3 24.0 L232.5 24.7",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 16,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24431/33176",
          "x": -53.61,
          "y": -50.61,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24431/33177",
          "x": 26.55,
          "y": -50.61,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24431/33178",
          "x": 106.71,
          "y": -50.61,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24431/33179",
          "x": 186.87,
          "y": -50.61,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24431/33180",
          "x": 267.03,
          "y": -50.61,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24431/33181",
          "x": 347.19,
          "y": -50.61,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24432/33176",
          "x": -53.61,
          "y": 29.55,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24432/33177",
          "x": 26.55,
          "y": 29.55,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24432/33178",
          "x": 106.71,
          "y": 29.55,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24432/33179",
          "x": 186.87,
          "y": 29.55,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24432/33180",
          "x": 267.03,
          "y": 29.55,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24432/33181",
          "x": 347.19,
          "y": 29.55,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24433/33176",
          "x": -53.61,
          "y": 109.71,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24433/33177",
          "x": 26.55,
          "y": 109.71,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24433/33178",
          "x": 106.71,
          "y": 109.71,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24433/33179",
          "x": 186.87,
          "y": 109.71,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24433/33180",
          "x": 267.03,
          "y": 109.71,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24433/33181",
          "x": 347.19,
          "y": 109.71,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24434/33176",
          "x": -53.61,
          "y": 189.87,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24434/33177",
          "x": 26.55,
          "y": 189.87,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24434/33178",
          "x": 106.71,
          "y": 189.87,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24434/33179",
          "x": 186.87,
          "y": 189.87,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24434/33180",
          "x": 267.03,
          "y": 189.87,
          "width": 80.16,
          "height": 80.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24434/33181",
          "x": 347.19,
          "y": 189.87,
          "width": 80.16,
          "height": 80.16
        }
      ]
    },
    "link": "/tracks/barcelona",
    "center": {
      "lat": 41.57,
      "lon": 2.261
    },
    "fia": {
      "name": "CATALUNYA",
      "country": "ESP",
      "grade": "1",
      "lengthKm": 4.657,
      "pole": "Left",
      "expiry": "2028-02-18",
      "widthM": 11
    },
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 127,
      "minM": 114,
      "maxM": 139,
      "rangeM": 25
    },
    "source": {
      "geometry": "OpenStreetMap relation 2049529",
      "osmName": "Circuit de Catalunya GP FIA",
      "wayCount": 4,
      "osmLengthKm": 4.864,
      "quality": "close",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "montreal",
    "name": "蒙特利尔",
    "fullName": "吉尔·维伦纽夫赛道",
    "type": "stop-go / 墙 / 重刹",
    "summary": "刹车和出弯是主线，墙很近。",
    "corners": [
      {
        "id": "T1-T2",
        "note": "发车后低速组合。",
        "x": 203.9,
        "y": 222.8,
        "labelX": 213.9,
        "labelY": 214.8
      },
      {
        "id": "Hairpin",
        "note": "最重要的低速出口。",
        "x": 164,
        "y": 159.9,
        "labelX": 174,
        "labelY": 151.9
      },
      {
        "id": "Wall",
        "note": "最后减速弯，冠军墙风险。",
        "x": 177.8,
        "y": 58.2,
        "labelX": 187.8,
        "labelY": 50.2
      }
    ],
    "path": "M209.7 138.3 L210.8 143.9 L210.9 144.8 L210.9 145.2 L210.7 145.6 L210.5 145.9 L210.2 146.1 L209.7 146.3 L209.1 146.6 L208.7 147.0 L208.3 147.4 L208.1 147.9 L208.1 148.3 L208.1 148.8 L208.4 149.9 L217.2 191.7 L217.2 191.9 L217.9 195.5 L218.3 198.9 L218.4 201.8 L218.3 203.0 L218.3 205.0 L217.9 207.7 L217.8 209.0 L217.1 214.4 L217.0 215.3 L216.8 217.1 L216.7 217.9 L216.8 218.5 L217.0 219.1 L217.5 219.7 L218.1 220.2 L220.9 221.4 L221.8 221.8 L222.2 222.1 L222.6 222.4 L223.0 222.8 L223.2 223.3 L223.4 223.9 L223.4 224.7 L223.3 225.3 L223.0 226.0 L222.6 226.6 L222.1 227.0 L221.6 227.5 L221.0 227.7 L220.5 227.9 L219.9 228.0 L219.2 228.0 L218.7 228.0 L218.0 227.9 L216.9 227.7 L215.6 227.4 L213.6 226.8 L210.6 225.8 L208.6 225.2 L207.0 224.5 L205.4 223.7 L203.9 222.8 L202.2 221.6 L200.4 220.2 L197.4 217.7 L194.6 215.3 L190.6 211.6 L189.7 210.8 L189.4 210.3 L189.2 209.9 L189.1 209.3 L189.2 208.7 L189.4 208.0 L189.9 206.4 L190.1 205.8 L190.2 205.1 L190.3 204.4 L190.2 203.9 L190.1 203.5 L189.9 202.9 L189.6 202.4 L185.1 196.9 L181.9 192.7 L181.4 192.1 L180.8 191.5 L180.1 190.9 L179.3 190.3 L177.7 189.4 L176.9 188.8 L176.1 188.1 L175.3 187.3 L174.7 186.6 L174.1 185.6 L173.7 184.8 L173.1 183.6 L172.8 182.4 L172.4 181.2 L172.2 180.0 L172.1 178.7 L172.1 177.3 L172.1 175.6 L172.3 163.3 L172.3 162.4 L172.2 161.8 L172.0 161.3 L171.8 160.9 L171.4 160.4 L171.1 160.0 L170.8 159.8 L170.3 159.6 L169.8 159.5 L169.2 159.4 L168.7 159.4 L168.1 159.5 L167.4 159.7 L166.6 160.0 L166.0 160.1 L165.4 160.1 L164.8 160.1 L164.0 159.9 L163.3 159.6 L162.6 159.2 L162.0 158.7 L161.4 158.1 L160.6 157.2 L160.0 156.3 L159.6 155.6 L159.3 154.9 L158.9 153.6 L158.3 151.0 L157.8 148.4 L157.6 146.5 L157.3 143.5 L157.1 140.0 L156.7 131.8 L156.6 129.0 L156.6 126.9 L156.6 125.4 L156.7 124.8 L156.8 122.0 L157.0 118.0 L157.3 115.2 L157.7 112.7 L158.0 110.5 L158.3 108.7 L158.7 106.9 L159.0 105.3 L159.6 103.3 L162.2 93.7 L163.1 90.5 L163.4 89.6 L163.6 89.2 L163.9 88.9 L164.2 88.8 L164.6 88.7 L164.8 88.7 L165.9 88.7 L166.8 88.6 L167.4 88.5 L168.1 88.2 L168.8 87.9 L169.4 87.4 L169.6 87.2 L170.1 86.8 L170.5 86.2 L170.8 85.7 L171.2 85.1 L171.5 84.5 L171.9 83.3 L172.6 81.0 L173.2 79.3 L174.2 75.8 L174.7 73.8 L175.4 70.8 L176.1 67.7 L176.6 64.9 L177.2 61.4 L177.8 58.2 L178.1 56.7 L178.3 55.1 L178.4 54.0 L178.7 51.2 L178.9 46.7 L178.9 45.1 L178.8 42.0 L178.7 40.8 L178.6 39.9 L178.4 38.4 L178.1 37.3 L178.1 37.1 L175.5 24.8 L175.4 24.2 L175.4 23.5 L175.6 23.0 L175.9 22.5 L176.3 22.2 L176.8 22.1 L177.3 22.0 L177.9 22.1 L178.2 22.2 L178.6 22.5 L178.9 22.8 L179.1 23.2 L179.3 23.7 L179.7 25.3 L180.0 26.9 L180.1 28.5 L180.2 31.2 L180.3 31.8 L180.4 32.7 L180.5 33.3 L180.7 34.0 L181.0 35.0 L181.4 36.1 L181.5 36.2 L181.9 37.2 L182.9 39.2 L184.6 42.7 L185.3 44.2 L185.8 45.5 L188.3 51.8 L192.4 62.6 L195.1 69.9 L195.5 71.0 L195.8 72.1 L196.1 73.2 L196.3 74.4 L196.5 75.3 L197.1 78.3 L198.9 87.3 L201.8 100.8 L205.6 118.7 L207.0 125.6 L207.7 129.0 L209.7 138.3",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 15,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11720/9689",
          "x": -40.58,
          "y": -67.14,
          "width": 92.08,
          "height": 92.08
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11720/9690",
          "x": 51.5,
          "y": -67.14,
          "width": 92.08,
          "height": 92.08
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11720/9691",
          "x": 143.58,
          "y": -67.14,
          "width": 92.08,
          "height": 92.08
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11720/9692",
          "x": 235.65,
          "y": -67.14,
          "width": 92.08,
          "height": 92.08
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11720/9693",
          "x": 327.73,
          "y": -67.14,
          "width": 92.08,
          "height": 92.08
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11721/9689",
          "x": -40.58,
          "y": 24.93,
          "width": 92.08,
          "height": 92.08
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11721/9690",
          "x": 51.5,
          "y": 24.93,
          "width": 92.08,
          "height": 92.08
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11721/9691",
          "x": 143.58,
          "y": 24.93,
          "width": 92.08,
          "height": 92.08
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11721/9692",
          "x": 235.65,
          "y": 24.93,
          "width": 92.08,
          "height": 92.08
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11721/9693",
          "x": 327.73,
          "y": 24.93,
          "width": 92.08,
          "height": 92.08
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11722/9689",
          "x": -40.58,
          "y": 117.01,
          "width": 92.08,
          "height": 92.08
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11722/9690",
          "x": 51.5,
          "y": 117.01,
          "width": 92.08,
          "height": 92.08
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11722/9691",
          "x": 143.58,
          "y": 117.01,
          "width": 92.08,
          "height": 92.08
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11722/9692",
          "x": 235.65,
          "y": 117.01,
          "width": 92.08,
          "height": 92.08
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11722/9693",
          "x": 327.73,
          "y": 117.01,
          "width": 92.08,
          "height": 92.08
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11723/9689",
          "x": -40.58,
          "y": 209.09,
          "width": 92.08,
          "height": 92.08
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11723/9690",
          "x": 51.5,
          "y": 209.09,
          "width": 92.08,
          "height": 92.08
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11723/9691",
          "x": 143.58,
          "y": 209.09,
          "width": 92.08,
          "height": 92.08
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11723/9692",
          "x": 235.65,
          "y": 209.09,
          "width": 92.08,
          "height": 92.08
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11723/9693",
          "x": 327.73,
          "y": 209.09,
          "width": 92.08,
          "height": 92.08
        }
      ]
    },
    "link": "/tracks/montreal",
    "center": {
      "lat": 45.5017,
      "lon": -73.529
    },
    "fia": {
      "name": "MONTREAL GILLES VILLENEUVE",
      "country": "CAN",
      "grade": "1",
      "lengthKm": 4.361,
      "pole": "Left",
      "expiry": "2028-06-16",
      "widthM": 10
    },
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 11,
      "minM": 6,
      "maxM": 14,
      "rangeM": 8
    },
    "source": {
      "geometry": "OpenStreetMap relation 284595",
      "osmName": "Circuit Gilles Villeneuve",
      "wayCount": 1,
      "osmLengthKm": 4.362,
      "quality": "matched",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "red-bull-ring",
    "name": "红牛环",
    "fullName": "红牛环",
    "type": "短圈 / 上坡刹车 / DRS",
    "summary": "圈短但攻防多。看前三个重刹点。",
    "corners": [
      {
        "id": "T1",
        "note": "上坡出弯，影响 DRS。",
        "x": 208.9,
        "y": 76.6,
        "labelX": 218.9,
        "labelY": 68.6
      },
      {
        "id": "T3",
        "note": "重刹，常见超车点。",
        "x": 188.1,
        "y": 123.3,
        "labelX": 198.1,
        "labelY": 115.3
      },
      {
        "id": "T4",
        "note": "第二次刹车攻防。",
        "x": 322.4,
        "y": 184.4,
        "labelX": 332.4,
        "labelY": 176.4
      }
    ],
    "path": "M29.4 32.2 L28.2 31.0 L27.6 30.3 L27.2 29.5 L27.0 28.8 L27.0 28.0 L27.1 27.3 L27.4 26.7 L27.7 26.3 L28.3 25.8 L29.1 25.4 L29.9 25.2 L30.8 25.0 L33.9 24.6 M33.9 24.6 L41.6 23.5 L44.1 23.1 L51.8 22.5 L57.0 22.2 L63.5 22.0 L69.4 22.0 L75.3 22.1 L80.7 22.5 L81.3 22.5 L88.3 23.2 L94.3 23.9 L102.8 25.5 L110.5 26.9 L127.7 30.2 L130.7 30.8 L160.3 36.3 L161.8 36.5 L169.7 37.7 L175.7 38.4 L180.9 39.0 L208.8 40.3 L225.3 41.0 M225.3 41.0 L227.8 41.1 L229.6 41.2 L230.7 41.5 L231.8 41.9 L232.7 42.3 L233.5 42.9 L234.0 43.5 L234.5 44.4 L235.0 45.4 L235.3 46.3 L235.5 47.3 L235.5 48.9 L235.4 50.0 L235.1 51.2 L234.2 53.2 L233.5 54.8 L232.4 56.4 L231.6 57.5 L230.7 58.7 L228.9 61.1 M228.9 61.1 L226.8 63.7 L224.1 66.7 L222.3 68.3 L219.9 70.2 L216.5 72.5 L212.9 74.6 L208.9 76.6 L206.9 77.5 L205.1 78.1 L203.1 78.8 L199.7 79.6 L196.8 80.2 L193.7 80.6 L190.1 81.0 L186.8 81.1 L184.2 80.9 L181.0 80.5 L165.6 78.0 L162.6 77.5 L148.9 75.3 L144.0 74.6 M144.0 74.6 L142.1 74.3 L139.0 73.8 L137.4 73.8 L136.1 73.8 L134.1 73.9 L132.3 74.4 L129.6 75.3 L128.2 76.1 L125.8 77.5 L123.2 79.8 L121.1 81.9 L119.8 83.6 L118.7 85.6 L118.0 87.1 L117.3 89.2 L116.9 91.0 L116.7 93.1 L116.7 95.2 L117.0 97.4 L117.4 99.7 L118.0 101.7 L118.9 103.9 M118.9 103.9 L128.0 120.5 L137.3 136.0 M137.3 136.0 L139.1 138.9 L140.8 140.9 L143.3 143.1 L146.3 145.0 L149.5 146.3 L153.1 147.0 L156.3 147.2 L159.6 146.7 L163.1 145.6 L165.7 144.4 L167.4 143.5 M167.4 143.5 L169.2 141.9 L170.5 140.7 L171.5 139.6 L173.1 137.3 L174.4 135.5 L175.6 134.0 L177.1 132.2 L178.5 130.6 L180.1 128.9 L182.5 127.0 L185.4 124.9 L188.1 123.3 L190.3 122.1 L193.8 120.5 L196.7 119.4 L199.6 118.3 L203.1 117.2 L206.1 116.7 L209.7 116.3 L214.7 116.1 L223.5 116.0 L232.0 115.9 L246.7 115.7 L256.3 115.7 L259.4 115.6 L281.5 115.0 L321.3 114.0 L324.8 113.9 M324.8 113.9 L327.0 114.0 L327.5 114.0 L328.8 114.3 L329.1 114.4 L330.0 114.7 L330.9 115.0 L331.3 115.2 L332.6 115.9 L332.9 116.0 L334.2 116.8 L335.2 117.4 L335.6 117.7 L336.6 118.7 L337.8 119.8 L338.5 120.6 L339.9 122.5 L340.1 122.8 L340.4 123.2 L341.1 124.5 L341.3 124.9 L342.0 126.7 L342.2 127.4 L342.7 129.2 M342.7 129.2 L344.8 136.6 L347.3 145.1 L348.9 150.6 L351.4 159.0 M351.4 159.0 L352.4 162.7 L352.8 164.1 L353.0 165.1 L353.0 166.1 L352.9 167.3 L352.6 168.2 L351.8 169.0 L350.9 170.0 L349.8 170.8 L348.4 171.9 L346.0 173.6 L342.9 175.6 L338.9 177.7 L335.6 179.2 L331.9 180.8 L328.4 182.2 L325.5 183.3 L322.4 184.4 M322.4 184.4 L318.4 185.8 L303.3 190.5 L276.5 197.8 L246.4 206.0 L186.7 222.1 L168.1 227.1 M168.1 227.1 L165.7 227.8 L165.5 227.8 L165.3 227.9 L165.0 227.9 L164.6 228.0 L164.3 228.0 L164.0 228.0 L163.8 228.0 L163.6 228.0 L163.3 227.9 L163.1 227.8 L163.0 227.8 L162.8 227.7 L162.7 227.7 L162.5 227.6 L162.2 227.4 L162.1 227.3 L161.9 227.2 L161.7 227.0 L161.5 226.9 L161.4 226.7 L161.2 226.5 L161.1 226.4 L161.0 226.2 L160.9 226.1 L160.8 225.9 L160.7 225.8 L160.6 225.5 L159.6 223.7 L157.5 219.9 M157.5 219.9 L156.1 217.4 L154.7 215.3 L153.2 213.1 L152.0 211.3 L149.3 207.7 L141.7 196.9 L135.3 188.1 L127.1 176.7 L121.9 169.4 L117.3 162.5 L108.7 146.9 L103.2 135.8 L100.1 129.4 L90.6 109.1 L83.9 94.9 L82.8 92.8 L81.9 91.1 L80.2 88.5 L79.0 86.9 L73.6 78.9 L72.2 76.9 L71.0 75.2 L67.8 71.4 L62.3 65.7 L44.8 47.9 L32.7 35.7 L29.4 32.2",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 16,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22989/35453",
          "x": -69.38,
          "y": -105.25,
          "width": 108.04,
          "height": 108.04
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22989/35454",
          "x": 38.67,
          "y": -105.25,
          "width": 108.04,
          "height": 108.04
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22989/35455",
          "x": 146.71,
          "y": -105.25,
          "width": 108.04,
          "height": 108.04
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22989/35456",
          "x": 254.75,
          "y": -105.25,
          "width": 108.04,
          "height": 108.04
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22989/35457",
          "x": 362.8,
          "y": -105.25,
          "width": 108.04,
          "height": 108.04
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22990/35453",
          "x": -69.38,
          "y": 2.8,
          "width": 108.04,
          "height": 108.04
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22990/35454",
          "x": 38.67,
          "y": 2.8,
          "width": 108.04,
          "height": 108.04
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22990/35455",
          "x": 146.71,
          "y": 2.8,
          "width": 108.04,
          "height": 108.04
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22990/35456",
          "x": 254.75,
          "y": 2.8,
          "width": 108.04,
          "height": 108.04
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22990/35457",
          "x": 362.8,
          "y": 2.8,
          "width": 108.04,
          "height": 108.04
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22991/35453",
          "x": -69.38,
          "y": 110.84,
          "width": 108.04,
          "height": 108.04
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22991/35454",
          "x": 38.67,
          "y": 110.84,
          "width": 108.04,
          "height": 108.04
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22991/35455",
          "x": 146.71,
          "y": 110.84,
          "width": 108.04,
          "height": 108.04
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22991/35456",
          "x": 254.75,
          "y": 110.84,
          "width": 108.04,
          "height": 108.04
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22991/35457",
          "x": 362.8,
          "y": 110.84,
          "width": 108.04,
          "height": 108.04
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22992/35453",
          "x": -69.38,
          "y": 218.89,
          "width": 108.04,
          "height": 108.04
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22992/35454",
          "x": 38.67,
          "y": 218.89,
          "width": 108.04,
          "height": 108.04
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22992/35455",
          "x": 146.71,
          "y": 218.89,
          "width": 108.04,
          "height": 108.04
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22992/35456",
          "x": 254.75,
          "y": 218.89,
          "width": 108.04,
          "height": 108.04
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22992/35457",
          "x": 362.8,
          "y": 218.89,
          "width": 108.04,
          "height": 108.04
        }
      ]
    },
    "link": "/tracks/red-bull-ring",
    "center": {
      "lat": 47.2197,
      "lon": 14.7647
    },
    "fia": {
      "name": "RED BULL RING - SPIELBERG",
      "country": "AUT",
      "grade": "1",
      "lengthKm": 4.326,
      "pole": "Left",
      "expiry": "2026-07-02",
      "widthM": 12
    },
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 702,
      "minM": 677,
      "maxM": 737,
      "rangeM": 60
    },
    "source": {
      "geometry": "OpenStreetMap relation 5309181",
      "osmName": "Red Bull Ring",
      "wayCount": 14,
      "osmLengthKm": 4.3,
      "quality": "matched",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "silverstone",
    "name": "银石",
    "fullName": "银石",
    "type": "高速下压力 / 脏空气",
    "summary": "看 Chapel 出口。Stowe 的超车从那里开始。",
    "corners": [
      {
        "id": "M-B",
        "note": "高速换向，最看下压力。",
        "x": 156.7,
        "y": 64.1,
        "labelX": 166.7,
        "labelY": 56.1
      },
      {
        "id": "Chapel",
        "note": "直道前出口。",
        "x": 249.8,
        "y": 96.9,
        "labelX": 259.8,
        "labelY": 88.9
      },
      {
        "id": "Stowe",
        "note": "尾流后的刹车区。",
        "x": 178.2,
        "y": 227.2,
        "labelX": 188.2,
        "labelY": 219.2
      }
    ],
    "path": "M199.1 121.8 L215.9 108.3 M215.9 108.3 L216.5 108.0 L216.9 107.8 L217.3 107.7 L217.6 107.6 L218.0 107.6 L218.4 107.6 L218.7 107.6 L219.0 107.7 L219.4 107.9 L219.7 108.0 L220.0 108.2 L220.2 108.4 L220.5 108.7 L220.8 109.1 L221.0 109.6 L221.6 111.6 M221.6 111.6 L224.4 120.7 L224.5 120.9 L224.6 121.1 L224.7 121.3 L224.9 121.5 L225.1 121.8 L225.3 122.0 L225.5 122.2 L225.8 122.4 L226.1 122.6 L226.4 122.7 L226.8 122.8 L227.1 122.9 L227.4 122.9 L227.7 122.8 L228.0 122.7 L228.3 122.5 L228.7 122.3 L229.1 121.9 L229.4 121.6 L229.7 121.2 L230.1 120.5 L230.3 120.0 L230.6 119.5 L230.8 118.9 L231.1 118.1 L231.4 117.4 L231.8 116.4 L232.2 115.1 L232.6 114.0 L232.9 112.7 L233.2 111.4 L233.5 110.1 L233.7 108.8 M233.7 108.8 L233.9 107.4 L234.0 106.0 L234.1 105.0 L234.1 104.2 L234.1 103.3 L234.1 102.6 L234.0 101.9 L233.8 101.2 L233.6 100.6 L233.4 100.2 L233.1 99.8 L232.8 99.4 L231.6 98.2 M231.6 98.2 L229.5 96.4 L226.9 93.9 L224.6 91.7 L222.2 89.6 L205.7 74.5 L197.6 67.2 L193.1 63.1 L192.1 62.2 L184.0 54.9 L176.2 48.0 M176.2 48.0 L175.5 47.4 L174.9 47.1 L174.4 46.8 L173.9 46.6 L173.3 46.3 L172.7 46.2 L172.3 46.0 L171.9 46.0 L171.6 45.9 L171.0 45.8 L170.3 45.8 L169.7 45.8 L169.1 45.9 L168.5 46.0 L167.9 46.1 L167.3 46.3 L166.7 46.5 L166.2 46.8 M166.2 46.8 L165.9 46.9 L165.4 47.2 L165.3 47.3 L165.0 47.5 L164.8 47.7 L164.5 48.0 L164.4 48.2 L164.2 48.5 L164.0 48.7 L163.8 49.0 L163.7 49.3 L163.5 49.7 L163.4 50.2 L163.4 50.6 L162.6 58.3 M162.6 58.3 L162.5 59.3 L162.2 60.1 L162.0 60.5 L161.8 60.9 L161.5 61.3 L161.1 61.8 L160.8 62.2 L160.4 62.5 L159.9 62.9 L159.6 63.2 L159.3 63.4 L159.0 63.5 L158.7 63.6 L158.3 63.8 L157.9 64.0 L157.5 64.1 L157.1 64.1 L156.7 64.1 L156.2 64.2 L155.8 64.2 L155.3 64.1 L154.9 64.0 L154.5 63.9 L154.0 63.7 L153.5 63.5 L153.0 63.2 L152.5 62.9 L152.2 62.6 L151.9 62.4 L151.6 62.1 L151.3 61.7 L151.0 61.2 L150.8 61.0 L150.6 60.6 L150.4 60.3 L150.3 59.9 L150.2 59.6 L150.1 59.3 L150.0 59.0 L149.9 58.8 L149.9 58.4 L149.8 58.1 L149.8 57.8 L149.8 57.5 L149.8 57.2 L149.9 56.8 L149.9 56.4 L150.0 56.0 L150.1 55.5 L150.4 54.9 L150.6 54.4 L152.6 50.5 M152.6 50.5 L154.9 45.8 L156.6 42.3 L157.4 40.7 L157.6 40.3 L157.8 39.9 L158.1 39.5 L158.3 39.1 M158.3 39.1 L158.8 38.5 L159.2 37.9 L159.5 37.4 L160.2 36.7 L160.9 35.9 L161.6 35.1 L162.2 34.4 L162.8 33.8 L164.3 32.5 L166.0 31.2 L166.7 30.6 L167.4 30.1 L167.9 29.8 L169.2 29.0 L170.3 28.4 L171.1 28.0 L171.9 27.7 L173.0 27.4 L174.2 27.0 L175.3 26.7 L176.2 26.6 L177.3 26.4 L178.4 26.2 L179.7 26.1 L181.7 25.8 M223.6 22.1 L225.9 22.0 L226.5 22.0 L227.1 22.0 L227.6 22.1 L228.2 22.2 L229.1 22.4 L229.9 22.7 L230.6 23.0 L231.4 23.4 L232.4 24.0 L233.5 24.9 L234.2 25.6 L234.7 26.1 L235.1 26.7 L235.5 27.2 L235.8 27.8 L236.2 28.5 L236.8 30.1 L237.4 31.8 L237.9 33.2 L238.3 34.5 M238.3 34.5 L238.8 36.4 L240.1 41.0 L241.0 44.7 L241.4 46.7 L242.0 49.5 L242.4 52.4 L242.6 54.0 L242.8 55.6 L243.0 57.9 L243.1 60.2 L243.3 63.5 L243.6 67.1 L243.8 72.6 L244.0 78.1 M244.0 78.1 L244.0 79.5 L244.1 80.9 L244.2 81.7 L244.3 82.5 L244.4 83.3 L244.6 84.2 L244.9 85.2 L245.2 85.8 L245.5 86.5 L245.8 87.4 L246.2 88.2 L246.5 88.8 L246.8 89.3 L247.2 90.0 L247.6 90.6 L248.8 92.5 L249.1 93.0 L249.3 93.6 L249.5 94.3 L249.6 94.6 L249.7 95.0 L249.7 95.3 L249.8 95.8 L249.8 96.1 L249.8 96.4 L249.8 96.9 L249.7 97.2 L249.7 97.5 L249.6 97.9 L249.5 98.4 L249.3 98.9 M249.3 98.9 L249.2 99.3 L248.9 100.0 L248.1 102.1 L247.4 104.2 L246.8 105.7 M246.8 105.7 L246.5 106.7 L246.2 107.4 L245.8 108.5 L245.7 108.9 L245.6 109.4 L245.4 110.2 L245.3 110.9 L245.2 111.7 L245.1 112.4 L245.1 113.2 L245.1 113.8 L245.2 114.6 L245.3 115.3 L245.5 116.0 L245.7 116.7 L245.9 117.3 L246.2 117.9 L246.6 118.6 L246.9 119.0 L247.3 119.5 L249.4 122.2 L250.0 122.9 M250.0 122.9 L250.2 123.3 L250.6 123.7 L250.8 124.1 L251.1 124.7 L251.3 125.4 L251.4 125.8 L251.6 126.3 L251.7 127.2 L251.7 127.7 L251.7 128.2 L251.7 128.7 L251.7 129.2 L251.6 129.9 L251.5 130.5 L251.3 131.1 L251.0 131.7 L250.7 132.2 L250.3 133.0 L249.9 133.5 L249.5 134.0 L249.0 134.5 L248.0 135.3 L248.0 135.4 L247.5 135.7 L247.0 136.0 L246.4 136.5 M246.4 136.5 L245.8 136.8 L245.0 137.4 L244.2 137.9 L243.5 138.3 L242.7 138.8 L242.1 139.1 L241.7 139.3 L241.1 139.7 L240.2 140.1 L239.4 140.7 L239.1 141.0 L238.6 141.3 L238.0 141.7 L237.6 142.1 L237.2 142.5 L236.8 142.9 L236.5 143.3 L236.2 143.7 L235.9 144.2 L235.5 144.8 L235.1 145.5 L234.5 146.4 M234.5 146.4 L226.0 162.0 L219.3 174.9 L210.0 192.5 L206.7 198.6 L205.2 201.4 L203.6 204.3 L203.1 205.1 L202.1 206.8 L201.4 208.0 L200.9 208.8 L200.4 209.5 L199.5 211.0 L198.6 212.4 L197.2 214.5 L196.1 216.2 L195.5 217.1 L195.0 217.8 L193.9 219.4 L193.2 220.4 L192.4 221.5 L191.5 222.7 M191.5 222.7 L190.9 223.5 L190.5 224.0 L190.0 224.6 L189.6 224.9 L189.2 225.3 L188.8 225.6 L188.5 225.9 L188.2 226.1 L187.8 226.4 L187.4 226.7 L186.8 227.0 L186.2 227.2 L185.6 227.4 L185.1 227.6 L184.5 227.8 L183.7 227.9 L183.2 227.9 L182.7 228.0 L182.3 228.0 L181.7 228.0 L180.8 227.9 L180.1 227.8 L179.4 227.6 L178.8 227.4 L178.2 227.2 L177.6 226.9 L176.8 226.5 L176.2 226.2 L175.7 225.8 L175.3 225.5 L175.0 225.2 L174.6 224.8 L174.2 224.5 L173.9 224.0 L173.6 223.6 L173.2 223.2 L172.9 222.6 L172.6 222.1 L172.3 221.5 L171.9 220.6 L171.6 219.8 M171.6 219.8 L171.3 219.0 L171.0 218.3 L170.6 217.6 L170.3 217.0 L170.0 216.3 L169.6 215.6 L169.1 214.8 L168.6 213.9 L168.0 212.8 L166.3 210.3 L165.8 209.5 L165.2 208.6 L164.3 207.4 L163.7 206.7 L163.2 206.1 L162.6 205.3 L162.1 204.7 L160.7 203.2 L160.1 202.6 L156.2 198.5 L153.5 195.4 L149.3 190.4 L147.5 188.3 M147.5 188.3 L147.1 187.9 L146.7 187.6 L146.3 187.5 L145.8 187.4 L145.2 187.5 L144.8 187.6 L144.3 187.9 L143.8 188.3 L141.2 190.9 L140.9 191.1 M140.9 191.1 L140.5 191.4 L139.9 191.6 L139.0 191.8 L138.7 191.7 L138.3 191.7 L137.7 191.6 L137.2 191.4 L136.7 191.2 L136.2 190.7 L135.5 190.0 L134.4 188.9 L133.4 187.7 L132.5 186.6 L132.2 186.2 L131.5 185.2 L130.9 184.2 L130.3 182.9 L129.7 181.4 L129.2 180.0 L128.8 178.8 L128.6 177.6 L128.5 177.0 L128.4 176.4 L128.3 175.4 L128.3 174.6 L128.4 173.9 L128.6 173.3 L128.9 172.8 L129.4 172.2 L130.3 171.0 L130.5 170.8 L130.9 170.2 M130.9 170.2 L135.2 164.6 L146.1 150.3 L158.5 134.1 L162.9 128.4 M162.9 128.4 L163.8 127.2 L164.6 126.1 L165.1 125.6 L165.3 125.4 L165.5 125.2 L165.9 125.0 L166.3 124.8 L166.7 124.6 L167.1 124.4 L167.4 124.3 L167.9 124.2 L168.4 124.0 L168.9 124.0 L169.6 123.9 L170.3 123.8 L171.0 123.7 L171.6 123.7 L172.4 123.6 L173.5 123.7 L174.2 123.7 L174.8 123.8 L176.3 124.0 L177.8 124.2 L179.8 124.5 M179.8 124.5 L184.8 125.3 L186.3 125.5 L187.2 125.6 L188.0 125.6 M188.0 125.6 L188.9 125.6 L190.0 125.5 L190.9 125.4 L191.8 125.3 L192.7 125.0 L193.5 124.8 L194.2 124.6 L195.1 124.3 L195.9 123.9 L196.8 123.4 L197.7 122.9 L199.1 121.8",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 15,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/10811/16289",
          "x": -30.8,
          "y": -75.77,
          "width": 90.2,
          "height": 90.2
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/10811/16290",
          "x": 59.41,
          "y": -75.77,
          "width": 90.2,
          "height": 90.2
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/10811/16291",
          "x": 149.61,
          "y": -75.77,
          "width": 90.2,
          "height": 90.2
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/10811/16292",
          "x": 239.81,
          "y": -75.77,
          "width": 90.2,
          "height": 90.2
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/10811/16293",
          "x": 330.01,
          "y": -75.77,
          "width": 90.2,
          "height": 90.2
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/10812/16289",
          "x": -30.8,
          "y": 14.43,
          "width": 90.2,
          "height": 90.2
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/10812/16290",
          "x": 59.41,
          "y": 14.43,
          "width": 90.2,
          "height": 90.2
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/10812/16291",
          "x": 149.61,
          "y": 14.43,
          "width": 90.2,
          "height": 90.2
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/10812/16292",
          "x": 239.81,
          "y": 14.43,
          "width": 90.2,
          "height": 90.2
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/10812/16293",
          "x": 330.01,
          "y": 14.43,
          "width": 90.2,
          "height": 90.2
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/10813/16289",
          "x": -30.8,
          "y": 104.63,
          "width": 90.2,
          "height": 90.2
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/10813/16290",
          "x": 59.41,
          "y": 104.63,
          "width": 90.2,
          "height": 90.2
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/10813/16291",
          "x": 149.61,
          "y": 104.63,
          "width": 90.2,
          "height": 90.2
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/10813/16292",
          "x": 239.81,
          "y": 104.63,
          "width": 90.2,
          "height": 90.2
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/10813/16293",
          "x": 330.01,
          "y": 104.63,
          "width": 90.2,
          "height": 90.2
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/10814/16289",
          "x": -30.8,
          "y": 194.83,
          "width": 90.2,
          "height": 90.2
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/10814/16290",
          "x": 59.41,
          "y": 194.83,
          "width": 90.2,
          "height": 90.2
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/10814/16291",
          "x": 149.61,
          "y": 194.83,
          "width": 90.2,
          "height": 90.2
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/10814/16292",
          "x": 239.81,
          "y": 194.83,
          "width": 90.2,
          "height": 90.2
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/10814/16293",
          "x": 330.01,
          "y": 194.83,
          "width": 90.2,
          "height": 90.2
        }
      ]
    },
    "link": "/tracks/silverstone",
    "center": {
      "lat": 52.0786,
      "lon": -1.0169
    },
    "fia": {
      "name": "SILVERSTONE GRAND PRIX",
      "country": "GBR",
      "grade": "1",
      "lengthKm": 5.891,
      "pole": "Left",
      "expiry": "2028-07-05",
      "widthM": 12
    },
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 153,
      "minM": 144,
      "maxM": 158,
      "rangeM": 14
    },
    "source": {
      "geometry": "OpenStreetMap relation 51160",
      "osmName": "Silverstone Grand Prix",
      "wayCount": 26,
      "osmLengthKm": 5.531,
      "quality": "close",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "spa",
    "name": "斯帕",
    "fullName": "斯帕",
    "type": "长圈 / 高速 / 天气",
    "summary": "尾流、下压力、天气，三件事一起看。",
    "corners": [
      {
        "id": "La Source",
        "note": "发车和重启。",
        "x": 131.6,
        "y": 186.7,
        "labelX": 141.6,
        "labelY": 178.7
      },
      {
        "id": "Raidillon",
        "note": "带出 Kemmel 尾流。",
        "x": 201.7,
        "y": 155.9,
        "labelX": 211.7,
        "labelY": 147.9
      },
      {
        "id": "Les Combes",
        "note": "主要超车点。",
        "x": 248.1,
        "y": 192.2,
        "labelX": 258.1,
        "labelY": 184.2
      }
    ],
    "path": "M156.1 22.6 L160.4 24.6 L164.7 26.7 L167.7 28.4 M153.8 25.0 L153.1 23.7 L153.1 23.2 L153.2 22.7 L153.4 22.4 L153.7 22.2 L154.5 22.0 L155.3 22.3 L156.1 22.6 M156.4 29.5 L153.8 25.0 M174.8 75.9 L174.8 75.5 L174.8 75.1 L175.0 74.8 L175.1 74.6 L175.4 74.4 L175.7 74.2 L176.1 74.1 L176.6 74.1 L176.9 74.2 L177.5 74.2 M177.5 74.2 L179.3 74.3 L179.7 74.2 L180.2 74.1 L180.5 73.8 L180.7 73.5 L180.9 73.1 L180.9 72.7 L180.9 72.3 L180.7 71.9 L180.5 71.5 L179.5 70.0 L172.1 57.1 L166.0 46.4 L156.4 29.5 M175.8 88.2 L175.3 82.4 L174.8 77.1 L174.8 75.9 M157.5 164.3 L163.6 161.1 L166.8 159.4 L168.3 158.6 L169.7 157.6 L170.9 156.8 L172.2 155.7 L173.8 154.2 L175.5 152.4 L176.4 151.1 L177.2 150.0 L177.9 149.0 L178.5 147.8 L179.9 145.1 L183.4 137.3 L185.2 133.1 L185.6 132.1 L186.0 131.0 L186.3 129.9 L186.5 129.0 L186.5 127.9 L186.5 127.1 L186.5 126.1 L186.4 124.9 L186.0 123.5 L185.4 121.9 M132.4 185.5 L133.5 183.7 L135.0 181.9 L136.5 180.1 L138.7 177.9 L141.0 175.6 L143.4 173.3 L144.4 172.3 L145.5 171.4 L146.7 170.4 L147.9 169.6 L149.5 168.5 L150.5 168.0 L151.4 167.5 L157.5 164.3 M129.2 191.3 L130.0 189.4 L130.7 188.2 L131.6 186.7 L132.4 185.5 M130.9 208.6 L130.1 208.0 L129.6 207.6 L128.6 206.5 L128.0 205.6 L127.5 204.7 L127.2 204.0 L127.0 203.3 L126.8 202.6 L126.6 201.9 L126.5 200.4 L126.6 199.2 L126.8 198.0 L127.1 197.0 L129.2 191.3 M139.4 214.8 L131.9 209.4 L130.9 208.6 M147.5 212.8 L147.0 213.5 L146.6 214.0 L145.9 214.8 L145.3 215.1 L144.8 215.5 L144.3 215.7 L143.7 215.8 L142.9 216.0 L142.1 215.9 L141.1 215.7 L140.1 215.3 L139.4 214.8 M157.0 197.7 L153.0 204.0 L151.2 206.8 L149.2 210.0 L147.5 212.8 M181.1 191.2 L180.7 192.2 L180.6 192.5 L180.2 193.4 L179.7 194.2 L179.3 194.9 L178.8 195.4 L178.1 196.2 L177.2 196.8 L176.4 197.2 L175.3 197.6 L174.2 197.9 L173.4 197.9 L172.6 197.9 L171.9 197.8 L171.0 197.6 L170.1 197.2 L169.2 196.8 L168.3 196.2 L167.1 195.4 L165.9 194.8 L165.2 194.5 L164.4 194.4 L163.4 194.3 L162.2 194.4 L161.1 194.7 L160.1 195.0 L159.2 195.5 L158.4 196.2 L157.7 196.8 L157.0 197.7 M191.9 164.4 L188.7 172.4 L181.1 191.2 M220.6 164.9 L220.3 163.6 L220.0 162.3 L219.5 161.3 L219.0 160.3 L218.2 159.2 L217.4 158.4 L216.7 157.8 L216.0 157.3 L214.8 156.6 L213.9 156.2 L212.9 156.0 L212.2 155.9 L206.8 155.4 L206.1 155.4 L205.2 155.4 L204.4 155.4 L203.1 155.6 L201.7 155.9 L200.7 156.2 L199.8 156.5 L198.6 157.1 L197.6 157.7 L196.8 158.2 L196.0 158.8 L195.1 159.7 L194.3 160.5 L193.3 161.7 L192.7 162.9 L191.9 164.4 M225.2 190.2 L224.9 188.9 L224.3 185.4 L222.1 173.8 L220.6 164.9 M227.0 213.2 L228.0 212.6 L228.9 212.0 L229.4 211.5 L229.9 210.9 L230.3 210.2 L230.5 209.5 L230.6 208.7 L230.7 208.1 L230.7 207.5 L230.5 206.7 L230.0 205.2 L228.3 200.3 L226.6 194.9 L225.7 192.0 L225.2 190.2 M218.8 218.3 L219.5 217.9 L223.8 215.1 L226.5 213.5 L227.0 213.2 M224.1 226.7 L223.0 227.4 L222.3 227.7 L221.9 227.9 L221.1 228.0 L220.4 228.0 L219.7 227.9 L219.0 227.7 L218.2 227.4 L217.5 227.0 L217.0 226.5 L216.5 225.8 L216.1 225.2 L215.9 224.5 L215.8 223.9 L215.7 223.2 L215.7 222.5 L215.8 221.8 L216.0 221.1 L216.3 220.6 L216.7 220.0 L217.1 219.5 L217.5 219.2 L218.1 218.8 L218.8 218.3 M246.6 211.0 L245.0 212.1 L224.1 226.7 M249.4 203.8 L249.7 205.2 L249.8 206.0 L249.7 206.8 L249.6 207.2 L249.5 207.8 L249.3 208.1 L249.1 208.6 L248.8 209.1 L248.5 209.4 L248.2 209.8 L247.8 210.1 L246.6 211.0 M247.6 196.7 L249.4 203.8 M252.7 188.3 L252.2 188.9 L251.6 189.4 L251.2 189.7 L250.7 190.0 L249.8 190.5 L249.5 190.7 L249.2 191.0 L248.6 191.5 L248.1 192.2 L247.8 192.7 L247.6 193.3 L247.4 193.8 L247.4 194.3 L247.3 194.8 L247.4 195.3 L247.4 195.7 L247.6 196.7 M252.8 182.8 L253.3 184.2 L253.4 184.9 L253.5 185.4 L253.5 186.0 L253.4 186.4 L253.3 187.0 L253.0 187.7 L252.7 188.3 M216.7 85.2 L219.1 89.0 L226.4 100.4 L228.0 102.8 L228.8 103.9 L229.4 104.8 L230.0 105.8 L230.4 106.7 L230.9 107.5 L231.4 108.5 L231.8 109.6 L232.6 111.5 L233.2 114.2 L235.2 121.2 L242.5 146.6 L251.7 179.0 L252.3 181.0 L252.8 182.8 M207.3 66.0 L207.8 66.3 L208.6 66.8 L209.3 67.4 L209.9 67.9 L210.4 68.4 L210.9 69.1 L211.3 69.6 L211.7 70.3 L212.1 70.9 L212.5 71.7 L212.9 72.8 L213.4 74.1 L213.7 75.5 L213.9 76.6 L214.0 77.6 L214.2 78.9 L214.4 80.0 L214.5 80.6 L214.6 81.2 L214.9 81.9 L215.2 82.7 L215.5 83.2 L215.8 83.7 L216.7 85.2 M200.3 60.0 L202.1 62.1 L202.8 62.9 L203.1 63.2 L203.6 63.7 L205.1 64.7 L205.9 65.2 L207.3 66.0 M167.7 28.4 L169.7 29.4 L171.9 30.7 L173.9 32.0 L176.5 33.9 L177.9 35.0 L179.1 36.1 L180.3 37.1 L182.0 38.7 L184.2 41.0 L190.8 48.8 L199.2 58.7 L200.3 60.0 M185.4 121.9 L178.3 103.2 L177.6 100.5 L177.0 98.1 L176.7 96.6 L176.5 94.9 L176.1 92.0 L175.8 88.2",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 15,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11049/16924",
          "x": -63.79,
          "y": -25.1,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11049/16925",
          "x": 13.77,
          "y": -25.1,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11049/16926",
          "x": 91.34,
          "y": -25.1,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11049/16927",
          "x": 168.9,
          "y": -25.1,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11049/16928",
          "x": 246.46,
          "y": -25.1,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11049/16929",
          "x": 324.03,
          "y": -25.1,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11050/16924",
          "x": -63.79,
          "y": 52.46,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11050/16925",
          "x": 13.77,
          "y": 52.46,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11050/16926",
          "x": 91.34,
          "y": 52.46,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11050/16927",
          "x": 168.9,
          "y": 52.46,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11050/16928",
          "x": 246.46,
          "y": 52.46,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11050/16929",
          "x": 324.03,
          "y": 52.46,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11051/16924",
          "x": -63.79,
          "y": 130.03,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11051/16925",
          "x": 13.77,
          "y": 130.03,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11051/16926",
          "x": 91.34,
          "y": 130.03,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11051/16927",
          "x": 168.9,
          "y": 130.03,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11051/16928",
          "x": 246.46,
          "y": 130.03,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11051/16929",
          "x": 324.03,
          "y": 130.03,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11052/16924",
          "x": -63.79,
          "y": 207.59,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11052/16925",
          "x": 13.77,
          "y": 207.59,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11052/16926",
          "x": 91.34,
          "y": 207.59,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11052/16927",
          "x": 168.9,
          "y": 207.59,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11052/16928",
          "x": 246.46,
          "y": 207.59,
          "width": 77.56,
          "height": 77.56
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11052/16929",
          "x": 324.03,
          "y": 207.59,
          "width": 77.56,
          "height": 77.56
        }
      ]
    },
    "link": "/tracks/spa",
    "center": {
      "lat": 50.4372,
      "lon": 5.9714
    },
    "fia": {
      "name": "SPA-FRANCORCHAMPS",
      "country": "BEL",
      "grade": "1",
      "lengthKm": 7.004,
      "pole": "Right",
      "expiry": "2026-07-15",
      "widthM": 10
    },
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 409,
      "minM": 365,
      "maxM": 469,
      "rangeM": 104
    },
    "source": {
      "geometry": "OpenStreetMap relation 284560",
      "osmName": "Circuit de Spa Francorchamps",
      "wayCount": 30,
      "osmLengthKm": 6.995,
      "quality": "matched",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "hungaroring",
    "name": "匈牙利",
    "fullName": "亨格罗宁",
    "type": "低速连续弯 / 难超",
    "summary": "像没有墙的摩纳哥。排位很值钱。",
    "corners": [
      {
        "id": "T1",
        "note": "主要超车点。",
        "x": 192.9,
        "y": 80.5,
        "labelX": 202.9,
        "labelY": 72.5
      },
      {
        "id": "T4",
        "note": "高速左弯，考胆量。",
        "x": 247.9,
        "y": 86.9,
        "labelX": 257.9,
        "labelY": 78.9
      },
      {
        "id": "T14",
        "note": "最后一弯出口决定直道。",
        "x": 210.6,
        "y": 185,
        "labelX": 220.6,
        "labelY": 177
      }
    ],
    "path": "M205.0 225.2 L141.9 175.4 L127.2 163.8 L100.7 142.9 M100.7 142.9 L100.4 142.6 L99.9 142.1 L99.6 141.8 L99.4 141.5 L99.2 141.2 L99.0 140.7 L98.8 140.3 L98.7 139.9 L98.6 139.6 L98.6 139.2 L98.6 138.8 L98.6 138.4 L98.6 138.1 L98.7 137.8 L98.8 137.6 L98.9 137.3 L99.0 137.1 L99.1 136.8 L99.2 136.6 L99.3 136.4 L99.5 136.2 L99.6 136.0 L99.8 135.8 L100.0 135.7 L100.1 135.5 L100.3 135.4 L100.5 135.2 L100.8 135.1 L101.1 135.0 L101.4 134.8 L101.8 134.7 L102.1 134.7 L102.6 134.6 L103.3 134.5 L104.1 134.4 L105.0 134.4 L107.1 134.4 L109.1 134.5 L111.5 134.6 L113.6 134.7 L115.0 134.9 L116.8 135.1 L119.0 135.6 L121.4 136.1 L123.3 136.6 L124.8 137.1 L126.1 137.6 L127.4 138.1 L129.0 138.8 L131.0 139.8 L132.6 140.8 L134.6 142.1 L136.5 143.6 L141.4 147.4 L152.0 155.9 L162.9 164.5 L163.6 165.1 L164.3 165.5 L165.0 166.0 L165.7 166.3 L166.4 166.5 L167.1 166.7 L167.7 166.9 L168.5 166.9 L169.3 166.9 L169.9 166.8 L170.7 166.6 L171.6 166.3 L172.4 166.0 L173.0 165.7 L173.5 165.4 L174.1 165.0 L174.8 164.3 L175.5 163.5 L176.2 162.5 L176.5 161.6 L176.8 160.6 L177.0 159.6 L177.1 158.5 L177.1 157.6 L177.1 156.6 L176.8 155.6 L176.2 154.3 L168.5 140.5 L168.1 139.7 L167.8 139.1 L167.6 138.5 L167.4 137.8 L167.2 137.2 L167.0 136.7 L167.0 136.2 L166.9 135.8 L166.9 135.4 L166.9 134.9 L167.0 134.2 L167.1 133.5 L167.2 132.9 L167.5 132.2 L167.8 131.4 L176.2 114.2 L190.6 85.0 L191.8 82.7 L192.9 80.5 L194.1 78.5 L195.4 76.5 L196.9 74.3 L198.6 72.1 L200.6 69.5 L201.2 68.9 L203.6 66.5 L204.1 65.8 L204.4 65.3 L204.6 64.8 L204.7 64.4 L204.8 63.9 L204.9 63.4 L205.0 62.9 L205.0 62.5 L205.0 62.0 L204.9 61.6 L204.9 61.2 L204.8 60.7 L204.7 60.3 L204.6 59.9 L198.0 36.0 L197.7 34.0 L197.6 33.3 L197.5 32.8 L197.5 32.1 L197.5 31.6 L197.6 30.9 L197.7 30.4 L197.8 30.1 L197.9 29.6 L198.0 29.1 L198.2 28.7 L198.4 28.2 L198.6 27.7 L198.8 27.3 L199.0 26.9 L199.3 26.5 L199.6 26.0 L199.9 25.6 L200.3 25.2 L200.6 24.8 L201.0 24.5 L201.4 24.2 L201.9 23.8 L202.3 23.5 L202.8 23.3 L203.3 23.0 L203.9 22.7 L204.6 22.5 L205.2 22.3 L205.9 22.1 L206.6 22.0 L207.2 22.0 L207.9 22.0 L208.5 22.0 L209.3 22.1 L210.0 22.3 L210.7 22.4 L211.5 22.8 L212.2 23.1 L217.4 26.2 L219.7 27.8 L221.6 29.4 L223.5 31.2 L226.0 33.5 L241.9 50.6 L242.1 50.9 L242.3 51.1 L242.5 51.4 L242.6 51.7 L242.7 52.1 L242.8 52.4 L242.8 52.9 L242.8 53.3 L242.7 53.7 L242.7 54.0 L242.6 54.3 L242.6 54.5 L242.5 54.7 L242.4 54.9 L242.2 55.1 L242.0 55.3 L241.8 55.5 L240.7 56.7 L240.5 56.9 L240.3 57.2 L240.1 57.4 L240.0 57.7 L239.8 58.0 L239.7 58.4 L239.6 58.8 L239.6 59.2 L239.6 59.6 L239.6 60.2 L239.7 60.8 L239.9 61.5 L245.8 83.3 L245.9 83.7 L246.1 84.1 L246.2 84.5 L246.4 84.8 L246.6 85.1 L246.8 85.5 L247.0 85.9 L247.3 86.2 L247.6 86.6 L247.9 86.9 L248.2 87.2 L248.7 87.5 L249.1 87.8 L249.5 88.0 L250.0 88.2 L250.5 88.3 L250.9 88.4 L251.3 88.5 L263.0 89.9 L263.6 90.0 L264.2 90.1 L264.8 90.2 L265.3 90.4 L265.7 90.6 L266.1 90.8 L266.6 91.0 L267.1 91.4 L267.6 91.7 L268.1 92.2 L268.6 92.6 L269.0 93.0 L269.5 93.6 L269.7 93.9 L270.0 94.4 L270.2 94.9 L270.4 95.6 L270.7 96.4 L270.8 97.2 L270.8 97.9 L270.8 98.5 L270.7 99.1 L270.7 99.6 L267.7 121.4 L267.6 122.3 L267.5 123.2 L267.5 123.7 L267.5 124.2 L267.5 124.7 L267.6 125.3 L267.6 125.8 L267.7 126.3 L267.8 126.7 L267.9 127.3 L268.0 127.9 L268.2 128.6 L268.4 129.2 L268.6 129.9 L268.9 130.7 L269.3 131.5 L269.7 132.1 L269.9 132.7 L270.3 133.3 L270.7 133.8 L279.8 147.6 L280.3 148.4 L280.5 148.9 L280.6 149.2 L280.8 149.7 L281.0 150.2 L281.1 150.8 L281.3 151.4 L281.3 151.9 L281.4 152.5 L281.4 153.1 L281.4 153.7 L281.4 154.3 L281.3 155.0 L281.2 155.6 L281.1 156.2 L281.0 156.7 L280.7 157.4 L280.5 158.1 L280.1 159.0 L279.7 159.7 L279.2 160.5 L278.5 161.4 L277.8 162.4 L275.4 165.1 L255.4 187.4 L239.0 205.7 L238.7 206.0 L238.4 206.2 L238.1 206.5 L237.9 206.7 L237.6 207.0 L237.3 207.1 L236.9 207.3 L236.5 207.4 L236.0 207.5 L235.6 207.5 L235.2 207.5 L234.8 207.5 L234.5 207.4 L234.2 207.3 L233.8 207.2 L233.5 207.0 L233.2 206.9 L233.0 206.7 L232.9 206.6 L232.7 206.5 L232.5 206.3 L232.2 206.1 L231.9 205.8 L220.7 193.3 L219.9 192.6 L218.7 191.5 L210.6 185.0 L210.3 184.8 L210.1 184.6 L209.8 184.5 L209.5 184.3 L209.2 184.2 L208.8 184.0 L208.4 183.9 L208.1 183.8 L207.7 183.7 L207.4 183.7 L207.1 183.6 L206.6 183.6 L206.2 183.6 L205.6 183.6 L205.1 183.7 L204.7 183.8 L204.3 183.8 L204.0 183.9 L203.7 184.0 L203.4 184.2 L203.0 184.3 L202.7 184.5 L202.4 184.7 L202.1 184.9 L201.8 185.2 L201.5 185.4 L201.2 185.7 L201.0 185.9 L200.8 186.2 L200.5 186.5 L200.3 186.8 L200.1 187.3 L199.8 188.0 L199.6 188.9 L199.5 189.3 L199.5 189.8 L199.5 190.3 L199.5 190.8 L199.5 191.3 L199.6 191.8 L199.7 192.2 L199.8 192.6 L200.0 193.1 L200.2 193.6 L200.5 194.1 L200.8 194.5 L201.1 194.9 L201.4 195.2 L201.6 195.4 L201.7 195.5 L219.6 209.4 L220.7 210.5 L221.0 210.8 L221.3 211.1 L221.5 211.4 L221.8 211.8 L221.9 212.1 L222.1 212.5 L222.4 213.0 L222.6 213.6 L222.8 214.1 L222.9 214.6 L223.0 215.1 L223.1 215.7 L223.2 216.2 L223.2 216.7 L223.2 217.4 L223.2 218.0 L223.2 218.5 L223.1 219.0 L223.1 219.5 L222.9 220.1 L222.8 220.6 L222.6 221.2 L222.3 221.9 L222.1 222.4 L221.8 222.9 L221.5 223.3 L221.2 223.7 L221.0 224.1 L220.6 224.5 L220.2 224.8 L219.8 225.2 L219.4 225.6 L219.0 225.9 L218.6 226.2 L218.2 226.5 L217.8 226.7 L217.4 226.9 L216.9 227.1 L216.5 227.3 L216.0 227.5 L215.5 227.6 L215.0 227.7 L214.5 227.8 L213.9 227.9 L213.4 228.0 L212.8 228.0 L212.1 228.0 L211.3 227.9 L210.8 227.8 L210.2 227.7 L209.7 227.6 L208.3 227.1 L207.1 226.6 L205.8 225.8 L205.0 225.2",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 16,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22892/36269",
          "x": -38.37,
          "y": -33.35,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22892/36270",
          "x": 31.89,
          "y": -33.35,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22892/36271",
          "x": 102.15,
          "y": -33.35,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22892/36272",
          "x": 172.41,
          "y": -33.35,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22892/36273",
          "x": 242.67,
          "y": -33.35,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22892/36274",
          "x": 312.93,
          "y": -33.35,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22893/36269",
          "x": -38.37,
          "y": 36.91,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22893/36270",
          "x": 31.89,
          "y": 36.91,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22893/36271",
          "x": 102.15,
          "y": 36.91,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22893/36272",
          "x": 172.41,
          "y": 36.91,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22893/36273",
          "x": 242.67,
          "y": 36.91,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22893/36274",
          "x": 312.93,
          "y": 36.91,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22894/36269",
          "x": -38.37,
          "y": 107.17,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22894/36270",
          "x": 31.89,
          "y": 107.17,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22894/36271",
          "x": 102.15,
          "y": 107.17,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22894/36272",
          "x": 172.41,
          "y": 107.17,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22894/36273",
          "x": 242.67,
          "y": 107.17,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22894/36274",
          "x": 312.93,
          "y": 107.17,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22895/36269",
          "x": -38.37,
          "y": 177.43,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22895/36270",
          "x": 31.89,
          "y": 177.43,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22895/36271",
          "x": 102.15,
          "y": 177.43,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22895/36272",
          "x": 172.41,
          "y": 177.43,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22895/36273",
          "x": 242.67,
          "y": 177.43,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22895/36274",
          "x": 312.93,
          "y": 177.43,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22896/36269",
          "x": -38.37,
          "y": 247.69,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22896/36270",
          "x": 31.89,
          "y": 247.69,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22896/36271",
          "x": 102.15,
          "y": 247.69,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22896/36272",
          "x": 172.41,
          "y": 247.69,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22896/36273",
          "x": 242.67,
          "y": 247.69,
          "width": 70.26,
          "height": 70.26
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/22896/36274",
          "x": 312.93,
          "y": 247.69,
          "width": 70.26,
          "height": 70.26
        }
      ]
    },
    "link": "/tracks/hungaroring",
    "center": {
      "lat": 47.583,
      "lon": 19.25
    },
    "fia": {
      "name": "HUNGARORING",
      "country": "HUN",
      "grade": "1",
      "lengthKm": 4.381,
      "pole": "Left",
      "expiry": "2028-07-28",
      "widthM": 10
    },
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 225,
      "minM": 207,
      "maxM": 238,
      "rangeM": 31
    },
    "source": {
      "geometry": "OpenStreetMap relation 284557",
      "osmName": "Hungaroring",
      "wayCount": 2,
      "osmLengthKm": 4.367,
      "quality": "matched",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "zandvoort",
    "name": "赞德福特",
    "fullName": "赞德福特",
    "type": "坡度 / 高速弯 / 窄",
    "summary": "看带坡度弯和排位。正赛超车不轻松。",
    "corners": [
      {
        "id": "T1",
        "note": "主直道后进攻点。",
        "x": 294.5,
        "y": 104.4,
        "labelX": 304.5,
        "labelY": 96.4
      },
      {
        "id": "Hugenholtz",
        "note": "带坡度低速弯。",
        "x": 274.7,
        "y": 148.5,
        "labelX": 284.7,
        "labelY": 140.5
      },
      {
        "id": "Arie",
        "note": "最后带坡度弯，影响 DRS。",
        "x": 124.6,
        "y": 146.7,
        "labelX": 134.6,
        "labelY": 138.7
      }
    ],
    "path": "M135.3 27.8 L135.8 27.0 L136.3 26.1 L137.1 25.2 L138.2 24.2 L139.3 23.5 L140.5 22.8 L141.8 22.4 L143.1 22.1 L144.6 22.0 L146.0 22.1 L147.6 22.5 L149.0 23.1 L150.2 23.9 L151.2 24.8 L152.0 25.6 L153.0 26.9 L153.7 28.2 L154.2 29.5 L154.4 30.9 L154.6 32.3 L154.5 33.4 L154.4 34.4 L154.2 35.3 L153.9 36.2 M153.9 36.2 L148.1 50.6 L143.7 60.3 M143.7 60.3 L142.8 63.0 L141.9 65.9 L141.2 68.2 L140.6 70.5 L140.2 72.6 L139.9 74.1 L139.7 76.0 L139.5 78.1 L139.4 80.2 L139.4 82.1 M139.4 82.1 L139.4 92.4 M139.4 92.4 L139.4 93.0 L139.3 93.6 L139.1 94.3 L138.9 94.9 L138.7 95.4 L138.4 96.0 L138.0 96.7 L137.4 97.7 L136.6 98.6 L135.9 99.4 L135.1 100.1 L134.1 100.8 L133.2 101.4 L132.1 102.0 L130.8 102.5 M130.8 102.5 L118.6 107.2 M118.6 107.2 L117.5 107.6 L116.1 108.2 L115.3 108.6 L114.4 109.2 L113.7 109.8 L113.0 110.7 L112.4 111.6 L111.9 112.7 L111.6 113.7 L111.4 114.9 L111.4 116.0 L111.6 117.3 L111.9 118.7 L112.3 119.7 L113.0 120.8 L113.8 121.8 L114.8 122.6 L115.8 123.4 L117.2 124.0 L118.4 124.4 L119.4 124.5 L120.3 124.5 L121.3 124.4 L122.3 124.2 L123.6 123.9 L124.9 123.6 L127.1 122.8 M127.1 122.8 L140.0 118.6 L142.9 117.7 L145.9 116.9 L149.1 116.1 L152.2 115.4 L154.9 115.0 L157.5 114.7 L159.7 114.5 L162.1 114.4 L164.5 114.4 L166.9 114.5 L169.3 114.6 L171.2 114.8 L173.7 115.1 L175.8 115.4 L178.4 115.9 L181.0 116.5 L183.5 117.0 L193.1 119.3 M193.1 119.3 L195.1 119.7 L196.8 119.9 L198.3 120.1 L200.2 120.3 L202.1 120.4 L203.9 120.5 L205.6 120.4 L207.6 120.2 L209.4 119.9 L211.4 119.5 L213.5 119.0 L215.6 118.3 L220.0 116.4 L221.3 115.8 L223.2 114.8 L224.9 113.8 L226.4 112.8 L228.6 111.4 L229.4 110.9 L229.9 110.6 L231.3 109.7 L232.1 109.2 L234.1 108.0 L236.0 106.9 L237.6 106.0 L239.4 105.0 L241.3 104.1 L243.2 103.4 L245.3 102.7 L247.7 102.0 L250.3 101.6 L253.1 101.2 L254.7 101.1 L256.9 101.1 L259.3 101.1 L261.4 101.1 L264.0 101.3 L267.1 101.4 M267.1 101.4 L283.8 102.4 M283.8 102.4 L285.4 102.6 L287.0 102.7 L288.4 102.9 L289.9 103.1 L291.3 103.4 L292.9 103.8 L294.5 104.4 L296.0 105.0 L297.3 105.6 L298.4 106.3 L299.7 107.1 L301.2 108.1 L302.5 109.3 L303.7 110.4 L304.7 111.5 L305.8 112.9 L306.6 114.0 L307.4 115.2 L308.0 116.5 L308.5 117.5 L309.1 118.8 L309.5 120.1 L309.9 121.5 L310.2 122.8 L310.4 124.0 L310.6 125.3 L310.6 126.6 L310.7 127.9 L310.7 129.0 L310.6 130.4 L310.4 131.7 L310.1 133.0 L309.9 134.1 L309.5 135.3 L309.2 136.2 L308.7 137.4 L308.3 138.4 L307.6 139.6 L307.0 140.6 L306.5 141.5 L305.8 142.7 L305.0 143.8 M305.0 143.8 L294.8 158.4 M294.8 158.4 L293.8 159.9 L292.9 161.4 L292.0 162.7 L291.4 163.8 L290.7 165.0 L290.1 166.2 L289.2 167.9 L288.4 169.6 L287.6 171.3 L286.8 173.2 L286.1 174.6 M286.1 174.6 L280.5 185.9 M280.5 185.9 L280.0 186.9 L279.6 187.4 L279.3 188.0 L278.7 188.5 L278.2 188.9 L277.5 189.4 L276.7 189.8 L276.0 190.0 L275.1 190.3 L273.9 190.5 L272.6 190.6 L271.1 190.8 L269.3 190.8 L267.3 190.8 L265.2 190.7 L263.1 190.5 L261.1 190.3 L258.9 189.9 L256.9 189.5 L254.8 188.9 L252.9 188.4 L250.9 187.7 L249.9 187.4 M249.9 187.4 L248.6 186.8 L246.8 186.1 L244.9 185.1 L243.0 184.1 L240.9 182.9 L238.7 181.4 L236.9 180.1 L235.6 179.1 L234.3 177.9 L233.1 176.8 L232.1 176.0 L231.4 175.3 L230.8 174.6 L230.3 174.0 L229.9 173.3 L229.6 172.7 L229.3 171.9 L229.1 171.1 L229.0 170.5 L228.9 169.9 L228.9 169.3 L229.0 168.6 L229.2 167.8 L229.5 167.2 L229.8 166.5 L230.3 165.9 L230.7 165.2 L231.3 164.6 L231.8 164.1 L232.3 163.7 L232.8 163.2 L233.4 162.7 L234.0 162.2 L234.6 161.8 L235.4 161.3 L236.0 160.9 L236.5 160.6 L237.1 160.3 L237.7 160.0 L238.6 159.5 L239.3 159.2 L240.0 158.9 L240.6 158.6 L241.3 158.4 L241.9 158.2 L242.4 158.1 L243.0 157.9 L243.5 157.9 L244.2 157.7 L244.9 157.6 L246.0 157.4 M246.0 157.4 L250.3 156.9 L251.7 156.7 L253.0 156.5 L254.3 156.3 L255.5 156.0 L256.7 155.8 L257.6 155.6 L258.8 155.3 L260.0 155.0 L261.0 154.7 L262.1 154.4 L263.2 154.0 L264.4 153.6 L265.4 153.2 L266.4 152.9 L267.4 152.5 L268.4 152.0 L269.2 151.7 L270.1 151.3 L270.9 150.9 L271.8 150.4 L272.5 150.1 L273.1 149.8 L273.5 149.5 L273.9 149.2 L274.3 148.9 L274.7 148.5 L275.0 148.2 L275.4 147.8 L275.8 147.3 L276.1 146.9 L276.5 146.3 L276.8 145.8 L277.0 145.4 L277.2 144.9 L277.4 144.5 L277.6 144.0 L277.8 143.5 L278.0 143.0 L278.1 142.5 L278.1 142.1 L278.2 141.5 L278.3 141.0 L278.4 140.5 L278.4 140.1 L278.4 139.6 L278.4 139.1 L278.3 138.7 L278.3 138.2 L278.2 137.7 L278.1 137.3 L278.0 136.7 L277.8 136.2 L277.6 135.7 L277.4 135.3 L277.2 134.9 L277.1 134.6 L276.9 134.3 L276.7 134.0 L276.5 133.6 L276.3 133.3 L276.0 132.8 L275.6 132.4 L275.4 132.0 L275.0 131.7 L274.6 131.3 L274.2 130.9 L273.8 130.5 L273.3 130.2 L272.8 129.9 L272.3 129.5 L271.6 129.1 L271.1 128.9 L270.6 128.7 L270.0 128.5 L269.3 128.3 L268.5 128.2 L267.4 128.0 M267.4 128.0 L255.6 126.8 L254.1 126.6 L252.8 126.5 L251.3 126.4 L250.0 126.3 L248.6 126.3 L247.3 126.2 L245.8 126.2 L244.3 126.1 L242.6 126.1 L241.1 126.1 L239.4 126.2 L237.5 126.2 L235.0 126.3 L232.1 126.4 L229.7 126.6 L227.8 126.7 L225.4 127.0 L223.7 127.2 L221.5 127.4 L219.6 127.7 L217.7 127.9 L215.7 128.2 L213.9 128.4 L212.2 128.7 L210.1 129.1 L208.1 129.5 L206.1 129.8 L204.0 130.3 L201.5 130.8 L199.5 131.3 L197.4 131.8 L194.7 132.5 L192.4 133.1 L190.1 133.8 L187.7 134.5 L185.2 135.3 L183.3 136.0 L181.3 136.7 L179.0 137.5 L177.0 138.2 L175.0 139.0 L173.0 139.8 L170.9 140.6 L168.7 141.5 L166.6 142.4 L163.3 143.7 L161.0 144.8 L158.7 145.8 L156.6 146.8 L154.8 147.8 L153.2 148.6 L148.0 151.6 M148.0 151.6 L147.3 152.0 L146.8 152.2 L146.3 152.4 L145.8 152.5 L145.3 152.6 L144.7 152.5 L144.3 152.4 L143.9 152.3 L143.5 152.1 L143.2 151.9 L142.9 151.7 L142.7 151.5 L142.5 151.2 L142.2 150.8 L141.9 150.2 L140.5 147.7 L140.1 147.1 L139.7 146.5 L139.2 145.7 L138.9 145.3 L138.6 144.9 L138.1 144.5 L137.8 144.2 L137.3 143.9 L136.7 143.5 L136.2 143.2 L135.6 142.9 L135.0 142.7 L134.4 142.6 L133.8 142.4 L133.2 142.4 L132.6 142.3 L132.0 142.3 L131.3 142.4 L130.6 142.5 L130.1 142.6 L129.6 142.8 L128.9 143.0 L128.5 143.3 L128.0 143.5 L127.4 143.9 L126.9 144.3 L126.5 144.6 L126.1 144.9 L125.7 145.3 L125.4 145.6 L125.1 146.0 L124.8 146.4 L124.6 146.7 L124.4 147.2 L124.2 147.6 L124.0 148.0 L123.8 148.5 L123.7 149.1 L123.6 149.5 L123.5 149.9 L123.5 150.3 L123.5 150.6 L123.5 151.0 L123.5 151.5 L123.6 151.9 L123.7 152.4 L123.7 153.0 L124.0 154.6 M124.0 154.6 L132.5 204.3 L133.7 211.7 M133.7 211.7 L133.8 212.3 L133.9 212.9 L133.9 213.4 L134.0 214.0 L133.9 214.6 L133.9 215.2 L133.8 215.8 L133.7 216.3 L133.7 216.8 L133.5 217.3 L133.4 217.8 L133.3 218.3 L133.1 218.7 L132.9 219.2 L132.8 219.7 L132.6 220.1 L132.3 220.5 L132.1 221.0 L131.8 221.4 L131.5 221.9 L131.2 222.3 L130.9 222.7 L130.5 223.1 L130.1 223.5 L129.7 224.0 L129.3 224.3 L128.9 224.7 L128.4 225.0 L128.0 225.4 L127.5 225.6 L127.0 225.9 L126.4 226.2 L125.8 226.5 L125.1 226.8 L124.4 227.0 L123.8 227.2 L123.4 227.3 L122.9 227.4 L122.4 227.5 L121.9 227.5 L121.4 227.6 L120.8 227.6 L120.0 227.6 M120.0 227.6 L102.6 228.0 M102.6 228.0 L101.3 228.0 L100.2 227.9 L99.4 227.9 L98.5 227.8 L97.7 227.7 L96.9 227.6 L96.2 227.5 L95.6 227.3 L94.8 227.2 L94.3 227.1 L93.9 226.9 L93.4 226.8 L92.9 226.7 L92.4 226.5 L91.9 226.3 L91.3 226.1 L90.8 225.9 L90.2 225.7 L89.7 225.5 L89.2 225.3 L88.6 225.0 L88.1 224.8 L87.5 224.5 L87.0 224.2 L86.4 223.9 L85.7 223.5 L85.0 223.1 L84.3 222.7 L83.6 222.2 L82.8 221.7 L82.1 221.1 L81.4 220.6 L80.6 219.9 L79.8 219.2 L79.2 218.6 L78.5 218.0 L77.7 217.1 L77.1 216.4 L76.6 215.8 L76.0 215.1 L75.5 214.4 L75.0 213.7 L74.6 213.0 L74.0 212.1 L73.5 211.3 L73.1 210.5 L72.6 209.4 L72.2 208.4 L71.7 207.3 L71.3 206.4 L70.9 205.2 L70.6 204.2 L70.4 203.4 L70.2 202.7 L70.0 201.9 L69.9 201.2 L69.7 200.4 L69.6 199.7 L69.5 199.0 L69.5 198.4 L69.4 197.7 L69.3 197.0 L69.3 196.4 L69.3 195.7 L69.3 194.7 L69.3 193.8 L69.4 192.7 L69.5 191.9 L69.6 191.1 L69.7 190.4 L69.8 189.6 L69.9 188.7 L70.1 187.9 L70.2 187.3 L70.4 186.7 L70.6 185.8 L70.8 185.1 L71.1 184.2 L71.4 183.3 L71.8 182.4 L72.1 181.6 M72.1 181.6 L74.5 175.8 L77.0 169.8 L82.6 156.2 L91.6 134.4 L105.6 100.4 L110.7 87.7 L114.9 77.6 L135.3 27.8",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 16,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/21530/33593",
          "x": -46.3,
          "y": -85.11,
          "width": 92.52,
          "height": 92.52
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/21530/33594",
          "x": 46.22,
          "y": -85.11,
          "width": 92.52,
          "height": 92.52
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/21530/33595",
          "x": 138.74,
          "y": -85.11,
          "width": 92.52,
          "height": 92.52
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/21530/33596",
          "x": 231.26,
          "y": -85.11,
          "width": 92.52,
          "height": 92.52
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/21530/33597",
          "x": 323.78,
          "y": -85.11,
          "width": 92.52,
          "height": 92.52
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/21531/33593",
          "x": -46.3,
          "y": 7.41,
          "width": 92.52,
          "height": 92.52
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/21531/33594",
          "x": 46.22,
          "y": 7.41,
          "width": 92.52,
          "height": 92.52
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/21531/33595",
          "x": 138.74,
          "y": 7.41,
          "width": 92.52,
          "height": 92.52
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/21531/33596",
          "x": 231.26,
          "y": 7.41,
          "width": 92.52,
          "height": 92.52
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/21531/33597",
          "x": 323.78,
          "y": 7.41,
          "width": 92.52,
          "height": 92.52
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/21532/33593",
          "x": -46.3,
          "y": 99.93,
          "width": 92.52,
          "height": 92.52
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/21532/33594",
          "x": 46.22,
          "y": 99.93,
          "width": 92.52,
          "height": 92.52
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/21532/33595",
          "x": 138.74,
          "y": 99.93,
          "width": 92.52,
          "height": 92.52
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/21532/33596",
          "x": 231.26,
          "y": 99.93,
          "width": 92.52,
          "height": 92.52
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/21532/33597",
          "x": 323.78,
          "y": 99.93,
          "width": 92.52,
          "height": 92.52
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/21533/33593",
          "x": -46.3,
          "y": 192.45,
          "width": 92.52,
          "height": 92.52
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/21533/33594",
          "x": 46.22,
          "y": 192.45,
          "width": 92.52,
          "height": 92.52
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/21533/33595",
          "x": 138.74,
          "y": 192.45,
          "width": 92.52,
          "height": 92.52
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/21533/33596",
          "x": 231.26,
          "y": 192.45,
          "width": 92.52,
          "height": 92.52
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/21533/33597",
          "x": 323.78,
          "y": 192.45,
          "width": 92.52,
          "height": 92.52
        }
      ]
    },
    "link": "/tracks/zandvoort",
    "center": {
      "lat": 52.3888,
      "lon": 4.5409
    },
    "fia": {
      "name": "ZANDVOORT",
      "country": "NLD",
      "grade": "1",
      "lengthKm": 4.259,
      "pole": "Left",
      "expiry": "2026-08-31",
      "widthM": 10
    },
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 5,
      "minM": 3,
      "maxM": 9,
      "rangeM": 6
    },
    "source": {
      "geometry": "OpenStreetMap relation 13545573",
      "osmName": "Grand Prix Formule 1 van Nederland",
      "wayCount": 24,
      "osmLengthKm": 4.253,
      "quality": "matched",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "monza",
    "name": "蒙扎",
    "fullName": "蒙扎",
    "type": "低阻 / 尾流 / 重刹",
    "summary": "直道很长，但 DRS Train 会把攻击锁住。",
    "corners": [
      {
        "id": "T1",
        "note": "大直道后硬刹。",
        "x": 249.4,
        "y": 52.7,
        "labelX": 259.4,
        "labelY": 44.7
      },
      {
        "id": "Roggia",
        "note": "第二次动手机会。",
        "x": 211,
        "y": 30.8,
        "labelX": 221,
        "labelY": 28
      },
      {
        "id": "Parabolica",
        "note": "出口决定下一圈。",
        "x": 152.3,
        "y": 222.1,
        "labelX": 162.3,
        "labelY": 214.1
      }
    ],
    "path": "M162.1 132.0 L159.8 150.6 L156.2 184.6 L152.5 220.9 M168.9 118.7 L168.9 119.2 L168.9 120.2 L168.8 120.8 L168.7 121.5 L168.6 122.0 L168.5 122.4 L168.3 123.1 L168.1 123.6 L167.7 124.3 L167.4 124.8 L167.1 125.3 L166.8 125.7 L166.5 126.1 L166.3 126.3 L166.1 126.5 L165.8 126.8 L165.5 127.0 L165.0 127.5 L164.4 127.9 L164.0 128.2 L163.6 128.5 L163.3 128.7 L163.1 129.0 L162.9 129.2 L162.8 129.4 L162.6 129.8 L162.5 130.0 L162.3 130.4 L162.3 130.7 L162.1 132.0 M168.6 115.7 L168.9 118.2 L168.9 118.7 M169.8 112.4 L169.6 112.6 L169.3 112.9 L169.1 113.1 L168.9 113.4 L168.8 113.6 L168.7 113.7 L168.6 114.0 L168.5 114.4 L168.5 114.8 L168.5 115.2 L168.6 115.7 M192.5 92.5 L169.8 112.4 M194.3 91.0 L192.5 92.5 M209.5 77.6 L194.3 91.0 M219.8 69.8 L218.9 70.4 L217.4 71.3 L216.8 71.7 L216.2 72.2 L215.4 72.7 L214.6 73.3 L213.8 74.0 L213.2 74.5 L212.7 74.9 L212.2 75.2 L209.5 77.6 M247.8 54.1 L247.5 54.3 L220.7 69.3 L219.8 69.8 M249.7 50.5 L249.7 51.0 L249.7 51.3 L249.7 51.7 L249.6 52.0 L249.5 52.4 L249.4 52.7 L249.3 52.8 L249.2 53.0 L249.1 53.1 L248.9 53.3 L248.7 53.5 L248.4 53.7 L248.3 53.8 L248.2 53.9 L247.8 54.1 M247.7 29.2 L248.8 40.5 L249.7 50.5 M238.5 22.4 L239.0 22.2 L239.5 22.1 L240.0 22.0 L240.4 22.0 L240.9 22.0 L241.2 22.0 L241.5 22.0 L241.7 22.1 L242.0 22.1 L242.3 22.2 L242.6 22.3 L242.9 22.4 L243.2 22.5 L243.4 22.6 L243.9 22.8 L244.3 23.0 L244.7 23.3 L244.9 23.5 L245.2 23.7 L245.5 24.0 L245.9 24.3 L246.2 24.7 L246.4 25.0 L246.6 25.3 L246.8 25.6 L247.0 26.0 L247.1 26.2 L247.2 26.5 L247.3 26.7 L247.4 27.1 L247.5 27.4 L247.6 28.0 L247.7 28.6 L247.7 29.2 M212.4 30.3 L213.5 30.1 L214.3 29.9 L215.0 29.8 L215.5 29.7 L216.0 29.6 L216.8 29.4 L217.4 29.3 L218.1 29.1 L218.6 28.9 L229.3 25.4 L238.5 22.4 M208.4 34.7 L208.6 34.7 L208.9 34.6 L209.1 34.6 L209.3 34.5 L209.4 34.4 L209.6 34.3 L209.7 34.2 L209.7 34.1 L209.8 33.9 L209.9 33.8 L210.0 33.6 L210.1 33.4 L210.5 31.7 L210.6 31.5 L210.7 31.3 L210.8 31.1 L210.9 30.9 L211.0 30.8 L211.2 30.6 L211.3 30.6 L211.5 30.5 L211.7 30.4 L211.9 30.4 L212.4 30.3 M173.6 37.1 L188.6 35.9 L196.3 35.3 L199.8 35.1 L203.9 34.9 L208.1 34.7 L208.4 34.7 M141.5 64.1 L141.6 63.2 L142.1 60.5 L142.5 59.1 L143.1 57.2 L144.2 54.7 L145.4 52.5 L146.7 50.5 L147.9 49.1 L149.1 47.7 L150.4 46.5 L151.7 45.3 L153.2 44.2 L154.7 43.2 L156.1 42.3 L158.2 41.1 L161.1 39.8 L163.5 39.0 L165.7 38.4 L167.7 37.9 L170.1 37.5 L173.6 37.1 M143.2 91.3 L143.0 90.6 L141.4 84.4 L141.0 82.4 L140.7 80.8 L140.6 79.0 L140.5 76.6 L141.5 64.1 M139.2 95.0 L139.2 94.8 L139.2 94.6 L139.3 94.3 L139.5 94.1 L139.7 94.0 L139.9 93.9 L140.2 93.8 L140.5 93.8 L140.8 93.9 L141.5 94.2 L141.8 94.3 L142.1 94.3 L142.4 94.3 L142.6 94.2 L142.8 94.1 L143.0 94.0 L143.1 93.8 L143.3 93.6 L143.4 93.3 L143.4 93.0 L143.4 92.8 L143.4 92.5 L143.4 92.3 L143.2 91.3 M130.9 182.2 L133.9 153.0 L134.6 146.5 L135.6 135.6 L136.0 130.5 L136.2 129.4 L139.2 95.0 M152.5 220.9 L152.4 221.6 L152.3 222.1 L152.2 222.5 L152.2 222.8 L152.0 223.2 L151.9 223.5 L151.7 223.8 L151.5 224.2 L151.1 224.7 L150.9 225.1 L150.6 225.4 L150.2 225.8 L149.9 226.1 L149.5 226.4 L149.2 226.6 L148.8 226.8 L148.5 227.0 L148.3 227.1 L148.0 227.3 L147.7 227.4 L147.1 227.6 L146.5 227.8 L146.1 227.9 L145.8 227.9 L145.4 228.0 L145.0 228.0 L144.8 228.0 L144.5 228.0 L144.2 228.0 L143.9 227.9 L143.6 227.9 L143.3 227.8 L143.1 227.8 L142.6 227.7 L142.2 227.6 L141.9 227.4 L141.2 227.2 L140.5 226.9 L140.1 226.7 L139.6 226.5 L139.2 226.2 L138.8 226.0 L138.4 225.8 L138.0 225.4 L137.7 225.2 L137.4 224.9 L137.0 224.7 L136.6 224.2 L136.1 223.7 L135.6 223.3 L135.1 222.7 L134.7 222.1 L134.1 221.2 L133.9 220.9 L133.6 220.4 L133.4 220.1 L133.2 219.7 L133.0 219.4 L132.8 218.9 L132.6 218.5 L132.4 217.9 L132.2 217.5 L132.1 217.0 L131.9 216.5 L131.7 216.0 L131.6 215.5 L131.5 215.0 L131.2 213.9 L131.0 213.2 L130.9 212.5 L130.8 211.6 L130.7 210.6 L130.6 209.2 L130.5 207.5 L130.5 205.8 L130.3 196.5 L130.3 192.2 L130.4 188.1 L130.6 185.2 L130.9 182.2",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 15,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11705/17227",
          "x": -11.65,
          "y": -38.48,
          "width": 81.16,
          "height": 81.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11705/17228",
          "x": 69.51,
          "y": -38.48,
          "width": 81.16,
          "height": 81.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11705/17229",
          "x": 150.66,
          "y": -38.48,
          "width": 81.16,
          "height": 81.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11705/17230",
          "x": 231.82,
          "y": -38.48,
          "width": 81.16,
          "height": 81.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11705/17231",
          "x": 312.97,
          "y": -38.48,
          "width": 81.16,
          "height": 81.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11706/17227",
          "x": -11.65,
          "y": 42.67,
          "width": 81.16,
          "height": 81.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11706/17228",
          "x": 69.51,
          "y": 42.67,
          "width": 81.16,
          "height": 81.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11706/17229",
          "x": 150.66,
          "y": 42.67,
          "width": 81.16,
          "height": 81.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11706/17230",
          "x": 231.82,
          "y": 42.67,
          "width": 81.16,
          "height": 81.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11706/17231",
          "x": 312.97,
          "y": 42.67,
          "width": 81.16,
          "height": 81.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11707/17227",
          "x": -11.65,
          "y": 123.83,
          "width": 81.16,
          "height": 81.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11707/17228",
          "x": 69.51,
          "y": 123.83,
          "width": 81.16,
          "height": 81.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11707/17229",
          "x": 150.66,
          "y": 123.83,
          "width": 81.16,
          "height": 81.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11707/17230",
          "x": 231.82,
          "y": 123.83,
          "width": 81.16,
          "height": 81.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11707/17231",
          "x": 312.97,
          "y": 123.83,
          "width": 81.16,
          "height": 81.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11708/17227",
          "x": -11.65,
          "y": 204.98,
          "width": 81.16,
          "height": 81.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11708/17228",
          "x": 69.51,
          "y": 204.98,
          "width": 81.16,
          "height": 81.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11708/17229",
          "x": 150.66,
          "y": 204.98,
          "width": 81.16,
          "height": 81.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11708/17230",
          "x": 231.82,
          "y": 204.98,
          "width": 81.16,
          "height": 81.16
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/11708/17231",
          "x": 312.97,
          "y": 204.98,
          "width": 81.16,
          "height": 81.16
        }
      ]
    },
    "link": "/tracks/monza",
    "center": {
      "lat": 45.6156,
      "lon": 9.2811
    },
    "fia": {
      "name": "MONZA",
      "country": "ITA",
      "grade": "1",
      "lengthKm": 5.793,
      "pole": "Left",
      "expiry": "2027-09-29",
      "widthM": 10
    },
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 190,
      "minM": 181,
      "maxM": 198,
      "rangeM": 17
    },
    "source": {
      "geometry": "OpenStreetMap relation 284565",
      "osmName": "Autodromo Nazionale di Monza",
      "wayCount": 20,
      "osmLengthKm": 5.794,
      "quality": "matched",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "baku",
    "name": "巴库",
    "fullName": "巴库街道赛道",
    "type": "超长直道 / 街道 / 安全车",
    "summary": "长直道会放大尾流，窄弯会放大失误。",
    "corners": [
      {
        "id": "T1",
        "note": "长直道后重刹。",
        "x": 207.8,
        "y": 101.6,
        "labelX": 217.8,
        "labelY": 93.6
      },
      {
        "id": "Castle",
        "note": "城堡段最窄。",
        "x": 330,
        "y": 62.7,
        "labelX": 340,
        "labelY": 54.7
      },
      {
        "id": "T16",
        "note": "出弯决定超长直道。",
        "x": 61.5,
        "y": 213.1,
        "labelX": 71.5,
        "labelY": 205.1
      }
    ],
    "path": "M112.6 133.2 L113.3 133.2 L113.8 133.2 L115.9 133.0 L116.4 133.0 L116.9 133.0 L117.2 133.1 L117.6 133.2 L118.0 133.4 L120.8 135.0 L121.0 135.1 L121.4 135.0 L122.1 134.9 L122.6 134.7 L123.1 134.7 L123.5 134.7 L123.9 134.9 L124.2 135.2 L124.3 135.5 L132.5 159.2 L132.6 159.5 L132.7 159.7 L132.8 159.9 L133.0 160.2 M133.0 160.2 L133.3 160.6 L133.5 160.8 L133.8 161.1 L135.0 161.5 M168.0 135.0 L157.2 143.5 L143.0 154.3 L140.9 155.9 L138.0 158.1 L137.3 158.7 L136.5 159.4 L136.0 160.1 L135.5 160.6 L135.3 160.9 L135.1 161.3 L135.0 161.5 M175.1 129.7 L168.0 135.0 M179.2 116.2 L177.6 117.3 L176.4 118.3 L175.5 119.2 L174.9 120.0 L174.7 120.5 L174.5 121.1 L174.5 121.5 L174.6 122.2 L174.7 122.6 L176.0 127.1 L176.1 127.6 L176.0 128.3 L175.8 128.8 L175.5 129.3 L175.1 129.7 M192.3 108.2 L180.3 115.5 L179.2 116.2 M193.5 107.7 L192.3 108.2 M214.3 98.6 L207.8 101.6 L206.6 102.1 L201.1 104.5 L199.7 105.1 L193.5 107.7 M207.1 81.9 L207.8 83.4 L213.5 96.8 L214.3 98.6 M206.5 80.3 L206.7 80.8 L207.1 81.9 M202.8 70.1 L206.0 79.1 L206.3 79.9 L206.5 80.3 M202.5 69.1 L202.8 70.1 M202.5 69.1 L203.6 68.6 L204.0 68.4 M204.0 68.4 L232.5 55.4 L233.3 55.0 M233.3 55.0 L234.6 54.4 M234.6 54.4 L235.8 53.9 M235.8 53.9 L266.1 40.2 M266.1 40.2 L267.4 39.6 L268.3 39.2 M268.3 39.2 L272.6 37.5 L287.7 31.3 L288.4 31.0 L288.6 31.0 L289.2 30.7 L291.3 29.8 L303.9 25.1 L310.3 22.5 M310.3 22.5 L311.8 22.0 M311.8 22.0 L312.4 23.2 M312.4 23.2 L314.9 29.2 L315.8 31.5 L316.4 32.6 L317.1 34.1 M317.1 34.1 L317.2 34.4 L318.1 36.3 L324.1 48.7 M324.1 48.7 L324.2 49.0 L325.8 52.5 M325.8 52.5 L327.2 55.9 L327.5 56.5 L328.3 58.1 M329.9 65.4 L330.2 64.9 L330.3 64.3 L330.2 63.5 L330.0 62.7 L329.7 61.9 L328.3 58.1 M286.7 83.9 L290.2 82.4 L304.1 76.4 L329.9 65.4 M254.3 97.7 L255.1 97.3 L255.8 97.0 L266.3 92.5 L271.5 90.3 L276.3 88.4 L277.0 88.0 L278.0 87.6 L286.7 83.9 M220.1 112.4 L241.5 103.1 L254.3 97.7 M169.9 135.5 L172.8 133.4 L174.8 132.2 L176.7 131.2 L188.4 125.8 L216.7 113.8 L219.2 112.7 L220.1 112.4 M101.7 217.2 L107.6 205.6 L108.1 204.9 L108.7 204.2 L130.8 183.9 L132.1 182.5 L132.5 181.7 L132.9 180.4 L135.3 166.5 L135.7 164.9 L135.8 164.4 L136.0 163.6 L136.2 163.0 L136.4 162.4 L136.5 162.0 L136.8 161.6 L137.0 161.2 L137.5 160.6 L138.2 160.0 L138.7 159.5 L144.0 155.6 L147.3 153.0 L169.9 135.5 M75.7 220.4 L90.9 227.4 L91.9 227.8 L92.7 228.0 L93.7 228.0 L94.6 227.9 L95.3 227.7 L96.1 227.3 L96.3 227.2 L97.4 226.4 L98.4 225.1 L99.3 223.1 L101.7 217.2 M61.5 213.1 L75.7 220.4 M52.4 208.4 L61.5 213.1 M52.0 208.1 L52.4 208.4 M51.5 206.9 L51.5 207.3 L51.6 207.6 L51.6 207.8 L51.7 207.9 L51.8 208.0 L52.0 208.1 M49.9 174.5 L49.7 175.8 L49.7 177.0 L49.8 178.3 L49.9 180.1 L50.3 187.7 L51.1 200.0 L51.5 206.9 M49.9 174.5 L50.1 173.7 L50.3 172.9 L50.5 172.1 L51.8 168.1 M51.8 168.1 L54.6 158.7 M54.6 158.7 L55.4 156.0 L57.0 150.7 L57.2 150.0 L57.6 149.3 L58.0 148.4 L58.6 147.7 L58.8 147.4 L59.4 146.8 L60.2 146.1 L61.0 145.5 L66.7 142.1 L74.3 137.5 L77.1 136.1 L84.3 132.6 L92.4 129.0 L93.3 128.6 M93.3 128.6 L93.6 128.5 L93.8 128.5 L94.1 128.5 L94.5 128.5 L94.7 128.5 L94.9 128.5 L95.3 128.4 L95.6 128.2 L106.1 124.8 L106.5 124.7 M106.5 124.7 L106.9 124.8 L107.2 125.1 L107.4 125.4 L107.6 125.7 L109.6 132.1 L109.7 132.5 L109.9 132.8 L110.2 132.9 L110.7 133.1 L110.8 133.2 L111.1 133.2 L112.6 133.2",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 16,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24720/41838",
          "x": -41.95,
          "y": -36.61,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24720/41839",
          "x": 21.6,
          "y": -36.61,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24720/41840",
          "x": 85.14,
          "y": -36.61,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24720/41841",
          "x": 148.69,
          "y": -36.61,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24720/41842",
          "x": 212.24,
          "y": -36.61,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24720/41843",
          "x": 275.78,
          "y": -36.61,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24720/41844",
          "x": 339.33,
          "y": -36.61,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24721/41838",
          "x": -41.95,
          "y": 26.93,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24721/41839",
          "x": 21.6,
          "y": 26.93,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24721/41840",
          "x": 85.14,
          "y": 26.93,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24721/41841",
          "x": 148.69,
          "y": 26.93,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24721/41842",
          "x": 212.24,
          "y": 26.93,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24721/41843",
          "x": 275.78,
          "y": 26.93,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24721/41844",
          "x": 339.33,
          "y": 26.93,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24722/41838",
          "x": -41.95,
          "y": 90.48,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24722/41839",
          "x": 21.6,
          "y": 90.48,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24722/41840",
          "x": 85.14,
          "y": 90.48,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24722/41841",
          "x": 148.69,
          "y": 90.48,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24722/41842",
          "x": 212.24,
          "y": 90.48,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24722/41843",
          "x": 275.78,
          "y": 90.48,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24722/41844",
          "x": 339.33,
          "y": 90.48,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24723/41838",
          "x": -41.95,
          "y": 154.03,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24723/41839",
          "x": 21.6,
          "y": 154.03,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24723/41840",
          "x": 85.14,
          "y": 154.03,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24723/41841",
          "x": 148.69,
          "y": 154.03,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24723/41842",
          "x": 212.24,
          "y": 154.03,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24723/41843",
          "x": 275.78,
          "y": 154.03,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24723/41844",
          "x": 339.33,
          "y": 154.03,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24724/41838",
          "x": -41.95,
          "y": 217.57,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24724/41839",
          "x": 21.6,
          "y": 217.57,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24724/41840",
          "x": 85.14,
          "y": 217.57,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24724/41841",
          "x": 148.69,
          "y": 217.57,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24724/41842",
          "x": 212.24,
          "y": 217.57,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24724/41843",
          "x": 275.78,
          "y": 217.57,
          "width": 63.55,
          "height": 63.55
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/24724/41844",
          "x": 339.33,
          "y": 217.57,
          "width": 63.55,
          "height": 63.55
        }
      ]
    },
    "link": "/tracks/baku",
    "center": {
      "lat": 40.3725,
      "lon": 49.8533
    },
    "fia": {
      "name": "BAKU",
      "country": "AZE",
      "grade": "1",
      "lengthKm": 6.003,
      "pole": "Right",
      "expiry": "2026-04-27",
      "widthM": 9
    },
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": -12,
      "minM": -24,
      "maxM": 14,
      "rangeM": 38
    },
    "source": {
      "geometry": "OpenStreetMap relation 11266687",
      "osmName": "Baku City Circuit",
      "wayCount": 42,
      "osmLengthKm": 6.003,
      "quality": "matched",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "singapore",
    "name": "新加坡",
    "fullName": "滨海湾街道赛道",
    "type": "夜赛 / 街道 / 热",
    "summary": "体能、刹车、墙。安全车概率高。",
    "corners": [
      {
        "id": "T1",
        "note": "发车后组合弯。",
        "x": 86,
        "y": 224.8,
        "labelX": 96,
        "labelY": 216.8
      },
      {
        "id": "T7",
        "note": "长直道后进攻。",
        "x": 280.2,
        "y": 171.7,
        "labelX": 290.2,
        "labelY": 163.7
      },
      {
        "id": "T14",
        "note": "低速刹车，易锁死。",
        "x": 211.3,
        "y": 104.9,
        "labelX": 221.3,
        "labelY": 96.9
      }
    ],
    "path": "M311.7 174.9 L329.3 175.6 L337.4 176.0 L338.9 175.9 L339.8 175.5 L340.6 174.8 L341.8 173.3 L350.5 159.7 L351.5 157.6 L352.0 155.0 L351.7 151.2 L349.4 131.0 L345.8 100.4 L337.0 41.1 L336.8 39.0 L336.4 36.3 L335.4 34.9 L333.6 34.0 L331.2 34.0 L329.0 34.1 L325.9 33.9 L322.7 32.9 L316.8 29.9 M289.3 172.7 L310.0 174.8 L311.7 174.9 M33.0 154.7 L35.2 150.8 M31.1 158.2 L33.0 154.7 M28.0 165.2 L28.1 164.0 L28.6 162.8 L31.1 158.2 M32.7 168.7 L28.0 165.2 M32.7 168.7 L38.4 172.9 M38.4 172.9 L42.6 175.9 M42.6 175.9 L43.6 176.5 M50.2 182.4 L48.8 180.8 L47.6 179.9 L43.6 176.5 M51.9 183.9 L51.1 183.6 L50.5 183.0 L50.2 182.4 M55.2 199.3 L52.9 196.5 L51.1 190.0 L51.2 186.2 L51.4 185.6 L51.9 183.9 M55.2 199.3 L56.7 200.6 L56.9 200.8 L61.0 204.9 M61.0 204.9 L73.2 214.7 M73.2 214.7 L74.1 215.6 L75.1 217.3 L75.9 218.6 L77.5 220.4 M77.5 220.4 L79.3 223.0 L82.1 227.0 L82.8 228.0 M82.8 228.0 L83.5 227.9 L84.5 227.7 L85.6 227.1 M85.6 227.1 L85.7 226.1 L86.0 224.8 M98.1 161.0 L108.5 132.6 M86.0 224.8 L98.1 161.0 M114.4 115.6 L113.5 118.3 L110.7 126.2 L108.5 132.6 M116.6 109.6 L114.4 115.6 M121.8 114.0 L117.9 110.7 L116.6 109.6 M127.6 119.0 L122.3 114.4 L121.8 114.0 M136.2 126.4 L127.6 119.0 M145.7 134.5 L142.3 131.6 L141.2 130.7 L137.9 127.9 L136.2 126.4 M148.4 136.9 L145.7 134.5 M165.9 147.7 L163.2 146.9 L160.9 146.2 L159.7 145.6 L157.8 144.7 L155.6 143.3 L154.9 142.8 L152.5 140.6 L150.1 138.3 L148.4 136.9 M173.8 148.7 L172.6 148.7 L168.8 148.2 L165.9 147.7 M180.5 149.0 L178.2 148.9 L177.6 148.9 L174.4 148.7 L173.8 148.7 M185.0 149.3 L180.5 149.0 M193.1 149.7 L185.0 149.3 M198.4 150.0 L193.1 149.7 M206.2 150.4 L198.4 150.0 M212.5 150.7 L209.8 150.6 L206.2 150.4 M220.5 151.2 L212.5 150.7 M228.7 151.5 L220.5 151.2 M232.7 151.8 L228.7 151.5 M240.2 152.2 L232.7 151.8 M255.7 153.0 L248.8 152.7 L240.2 152.2 M262.8 153.4 L261.7 153.3 L255.7 153.0 M265.5 153.5 L262.8 153.4 M268.4 153.7 L265.5 153.5 M268.4 153.7 L271.0 155.2 L272.4 156.6 L272.7 158.1 L272.7 162.0 L272.8 164.0 L273.3 166.0 L274.1 168.1 L275.5 169.8 L277.7 171.1 L280.2 171.7 L286.5 172.4 L289.3 172.7 M316.8 29.9 L316.3 29.2 L315.2 27.3 L314.1 25.1 L312.6 23.4 L310.9 22.4 L309.0 22.0 L307.2 22.0 L305.5 22.5 L303.6 24.0 L302.6 25.4 L301.5 27.0 L300.4 29.4 M300.0 34.4 L300.2 30.8 L300.4 29.4 M299.9 48.0 L299.6 46.2 L299.4 42.5 L300.0 34.4 M300.2 49.9 L299.9 48.0 M303.9 58.8 L301.4 53.5 L300.2 49.9 M311.9 104.4 L312.9 102.3 L313.3 100.3 L313.4 97.6 L313.1 94.1 L312.9 91.4 L311.2 80.7 L310.5 77.7 L308.6 71.8 L303.9 58.8 M304.0 110.1 L307.5 108.6 L309.8 106.9 L310.8 105.9 L311.9 104.4 M299.4 111.3 L304.0 110.1 M292.0 109.9 L299.4 111.3 M281.2 109.2 L292.0 109.9 M278.7 109.2 L281.2 109.2 M271.0 109.1 L278.7 109.2 M264.2 109.4 L265.8 109.3 L271.0 109.1 M261.6 109.4 L264.2 109.4 M250.4 108.1 L259.7 109.3 L261.6 109.4 M242.3 107.6 L250.4 108.1 M241.5 107.6 L242.3 107.6 M239.0 107.4 L241.5 107.6 M233.5 107.1 L239.0 107.4 M225.4 106.6 L231.1 106.9 L233.5 107.1 M220.3 106.2 L222.8 106.5 L225.4 106.6 M216.4 105.8 L220.3 106.2 M204.3 102.4 L208.6 104.0 L210.4 104.6 L211.3 104.9 L216.4 105.8 M197.6 98.5 L198.9 99.3 L204.3 102.4 M197.1 98.2 L197.6 98.5 M188.4 93.2 L192.2 95.4 L192.9 95.8 L197.1 98.2 M188.1 93.0 L188.4 93.2 M172.0 83.9 L183.2 90.2 L184.3 90.8 M170.6 83.0 L172.0 83.9 M168.0 81.5 L170.6 83.0 M165.8 80.2 L168.0 81.5 M162.9 78.5 L165.8 80.2 M154.1 73.3 L162.9 78.5 M146.7 69.1 L154.1 73.3 M140.7 65.8 L146.7 69.1 M136.9 63.5 L140.7 65.8 M126.6 80.3 L132.1 71.5 L136.9 63.5 M123.7 85.5 L126.6 80.3 M113.0 106.4 L114.0 104.3 L114.5 103.0 L118.4 95.7 L123.7 85.5 M113.0 106.4 L110.3 103.6 M110.3 103.6 L107.8 101.1 M107.8 101.1 L103.1 96.5 M103.1 96.5 L99.4 92.5 M99.4 92.5 L93.9 87.0 M93.9 87.0 L93.7 86.7 L89.8 82.9 M89.8 82.9 L89.6 82.7 M89.6 82.7 L86.3 80.5 L82.0 77.7 M72.8 83.0 L76.4 79.8 L79.0 78.4 L82.0 77.7 M69.9 88.5 L72.8 83.0 M66.4 94.9 L68.6 90.7 L69.9 88.5 M57.5 110.6 L66.4 94.9 M54.8 115.6 L57.5 110.6 M52.4 119.9 L54.8 115.6 M35.2 150.8 L49.9 124.4 L51.9 120.7 L52.4 119.9 M184.3 90.8 L188.1 93.0",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 17,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65064/103346",
          "x": -51.33,
          "y": -13.8,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65064/103347",
          "x": 17.09,
          "y": -13.8,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65064/103348",
          "x": 85.5,
          "y": -13.8,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65064/103349",
          "x": 153.91,
          "y": -13.8,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65064/103350",
          "x": 222.32,
          "y": -13.8,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65064/103351",
          "x": 290.73,
          "y": -13.8,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65064/103352",
          "x": 359.14,
          "y": -13.8,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65065/103346",
          "x": -51.33,
          "y": 54.61,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65065/103347",
          "x": 17.09,
          "y": 54.61,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65065/103348",
          "x": 85.5,
          "y": 54.61,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65065/103349",
          "x": 153.91,
          "y": 54.61,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65065/103350",
          "x": 222.32,
          "y": 54.61,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65065/103351",
          "x": 290.73,
          "y": 54.61,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65065/103352",
          "x": 359.14,
          "y": 54.61,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65066/103346",
          "x": -51.33,
          "y": 123.02,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65066/103347",
          "x": 17.09,
          "y": 123.02,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65066/103348",
          "x": 85.5,
          "y": 123.02,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65066/103349",
          "x": 153.91,
          "y": 123.02,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65066/103350",
          "x": 222.32,
          "y": 123.02,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65066/103351",
          "x": 290.73,
          "y": 123.02,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65066/103352",
          "x": 359.14,
          "y": 123.02,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65067/103346",
          "x": -51.33,
          "y": 191.43,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65067/103347",
          "x": 17.09,
          "y": 191.43,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65067/103348",
          "x": 85.5,
          "y": 191.43,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65067/103349",
          "x": 153.91,
          "y": 191.43,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65067/103350",
          "x": 222.32,
          "y": 191.43,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65067/103351",
          "x": 290.73,
          "y": 191.43,
          "width": 68.41,
          "height": 68.41
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/17/65067/103352",
          "x": 359.14,
          "y": 191.43,
          "width": 68.41,
          "height": 68.41
        }
      ]
    },
    "link": "/tracks/singapore",
    "center": {
      "lat": 1.2914,
      "lon": 103.864
    },
    "fia": {
      "name": "SINGAPORE - MARINA BAY",
      "country": "SGP",
      "grade": "1",
      "lengthKm": 4.927,
      "pole": "Right",
      "expiry": "2028-10-01",
      "widthM": 9
    },
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 17,
      "minM": 0,
      "maxM": 32,
      "rangeM": 32
    },
    "source": {
      "geometry": "OpenStreetMap relation 421263",
      "osmName": "Marina Bay Street Circuit",
      "wayCount": 99,
      "osmLengthKm": 4.967,
      "quality": "matched",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "cota",
    "name": "美洲赛道",
    "fullName": "COTA 美洲赛道",
    "type": "综合 / 上坡 T1 / 高速 S",
    "summary": "T1 上坡很特别，高速 S 看赛车平衡。",
    "corners": [
      {
        "id": "T1",
        "note": "上坡重刹，发车焦点。",
        "x": 207.5,
        "y": 97.1,
        "labelX": 217.5,
        "labelY": 89.1
      },
      {
        "id": "S",
        "note": "高速连续弯。",
        "x": 346.9,
        "y": 31,
        "labelX": 340,
        "labelY": 28
      },
      {
        "id": "T12",
        "note": "长直道后主要超车点。",
        "x": 122.3,
        "y": 89.3,
        "labelX": 132.3,
        "labelY": 81.3
      }
    ],
    "path": "M25.6 135.9 L43.2 149.7 L86.1 183.3 L124.5 213.4 M124.5 213.4 L128.3 216.1 L131.8 218.4 L135.1 220.3 L136.0 220.7 L136.7 220.9 L137.4 221.0 L138.0 221.0 L138.5 220.8 L138.8 220.7 L139.3 220.4 L139.8 220.0 L140.1 219.5 L140.3 218.9 L140.2 218.2 L140.1 217.5 L139.9 216.4 L139.0 213.6 L137.7 210.0 M137.7 210.0 L131.9 192.9 M131.9 192.9 L130.9 189.9 L130.6 188.4 L130.3 187.0 L130.2 185.6 L130.2 184.3 L130.2 182.8 L130.4 181.3 L130.7 179.8 L131.2 178.2 L131.8 176.8 L132.4 175.3 L133.1 174.0 L134.0 172.6 L134.8 171.4 L135.9 170.2 L137.0 169.1 L138.4 168.1 L139.8 167.1 L141.6 165.9 L145.0 163.8 M145.0 163.8 L162.9 153.0 L165.4 151.3 L166.7 150.4 L168.0 149.4 L169.1 148.4 L170.1 147.1 L170.9 145.9 L171.6 144.7 L172.4 142.9 L173.0 141.1 L173.6 139.5 M173.6 139.5 L174.2 138.0 L174.8 136.5 L175.5 135.0 L176.4 133.8 L177.4 132.5 L178.6 131.3 L180.1 130.5 L181.8 129.6 L184.2 128.7 M184.2 128.7 L186.5 127.9 L187.9 127.3 L189.0 126.6 L190.1 125.7 L191.1 124.8 L192.1 123.8 L192.8 122.8 L193.3 121.6 L193.8 120.3 L194.1 119.0 L194.3 117.2 L194.7 114.5 M194.7 114.5 L195.0 111.8 L195.5 109.7 L195.9 108.2 L196.7 106.6 L197.6 105.0 L198.9 103.4 L200.3 102.0 L201.5 100.8 L203.1 99.7 L204.5 98.8 L205.9 97.9 L207.5 97.1 L209.5 96.3 L211.2 95.7 L212.7 95.4 L214.1 95.2 L215.2 95.1 L216.4 95.2 L217.4 95.3 L218.5 95.5 L219.5 95.8 L220.7 96.3 L225.0 98.2 L230.7 100.8 M230.7 100.8 L236.2 103.3 L237.4 103.9 L238.2 104.2 L238.8 104.3 L239.5 104.4 L240.1 104.4 L240.9 104.3 L241.7 103.9 L242.8 103.4 L245.5 101.7 L247.6 100.0 L249.4 98.5 L251.0 97.0 L253.0 94.7 M253.0 94.7 L254.0 93.5 L254.9 92.2 L255.6 91.0 L256.5 89.8 L257.3 89.0 L258.4 88.0 L259.4 87.4 L260.5 87.0 L261.8 86.6 L263.3 86.3 L264.6 86.2 L266.1 86.3 L267.3 86.6 L268.4 87.0 L269.2 87.3 L270.0 87.8 L270.8 88.3 L271.4 88.8 L272.0 89.5 L272.6 90.2 L273.2 91.0 L273.9 92.0 M273.9 92.0 L274.3 92.8 L274.7 93.5 L275.1 94.1 L275.5 94.5 L276.2 95.0 L276.8 95.3 L277.6 95.5 L278.2 95.7 L279.1 95.7 L279.9 95.6 L281.0 95.4 L283.3 94.9 M283.3 94.9 L307.7 89.6 M307.7 89.6 L310.0 89.1 L311.1 88.8 L312.0 88.5 L312.7 88.2 L313.4 87.8 L314.0 87.4 L314.6 86.8 L316.2 84.8 M316.2 84.8 L347.7 46.7 M347.7 46.7 L355.1 37.7 L357.0 35.2 L357.5 34.2 L357.9 33.3 L358.0 32.4 L357.9 31.6 L357.7 30.8 L357.3 30.1 L356.8 29.6 L356.2 29.2 L355.6 29.0 L354.9 29.0 L354.2 29.0 L353.4 29.1 L352.1 29.4 L346.9 31.0 M346.9 31.0 L334.0 35.2 L319.6 39.6 L296.9 46.0 L282.9 49.5 L263.1 54.1 L240.3 58.6 L218.0 62.2 L212.3 63.0 L206.0 63.9 L205.6 64.0 L204.9 64.0 L192.6 65.5 L186.7 66.2 L184.4 66.4 L177.7 67.2 L172.4 67.8 L160.3 69.1 M160.3 69.1 L149.0 70.4 L145.7 70.8 L144.8 71.0 L144.1 71.2 L143.8 71.4 L143.3 71.9 L143.1 72.3 L142.9 72.9 L142.9 73.3 L143.0 73.9 L143.2 74.4 L143.6 75.0 L145.6 77.6 M145.6 77.6 L149.8 82.9 L152.8 86.8 L157.6 93.6 L162.1 100.8 M162.1 100.8 L163.3 102.8 L163.7 103.2 L163.9 104.5 L164.0 105.2 L164.0 105.9 L163.8 106.5 L163.6 107.2 L163.3 107.7 L162.9 108.2 L162.4 108.6 L161.9 108.9 L161.4 109.1 L160.7 109.3 L160.0 109.3 L159.2 109.3 L155.3 109.0 M155.3 109.0 L152.5 108.9 L150.8 108.7 L149.7 108.6 L149.0 108.5 L148.3 108.3 L147.7 108.0 L147.1 107.5 L146.3 106.9 L145.8 106.3 L145.4 105.6 L145.0 104.7 L144.1 102.1 M144.1 102.1 L143.5 100.4 L142.9 98.9 L142.3 97.6 L141.6 96.5 L140.9 95.7 L139.3 94.0 L136.1 90.5 L135.4 89.8 L134.6 89.1 L133.9 88.6 L133.0 88.1 L132.1 87.8 L131.0 87.6 L129.9 87.4 L128.4 87.2 M128.4 87.2 L126.0 87.0 L125.3 86.9 L124.6 86.9 L124.0 87.0 L123.6 87.2 L123.2 87.5 L122.9 87.7 L122.6 88.1 L122.5 88.5 L122.4 88.9 L122.3 89.3 L122.3 89.8 L122.4 90.3 L122.5 90.8 L122.9 91.5 L125.4 96.0 M125.4 96.0 L136.2 114.7 M136.2 114.7 L138.0 118.0 L138.6 119.3 L139.0 120.2 L139.4 121.5 L139.7 122.8 L139.8 124.1 L139.8 125.5 L139.7 126.8 L139.5 128.2 L139.0 130.0 L138.3 132.1 L137.1 135.1 L136.4 136.5 L135.7 137.8 L135.0 138.9 L134.3 139.8 L133.7 140.4 L133.1 140.9 L132.2 141.4 L125.2 144.7 M125.2 144.7 L122.6 145.9 L121.0 146.6 L120.2 146.9 L119.3 147.2 L118.3 147.4 L117.1 147.5 L115.8 147.6 L114.5 147.5 L112.3 147.3 L110.1 146.9 L108.4 146.5 L106.0 145.8 L103.9 145.0 L102.1 144.2 L100.7 143.6 L99.5 142.9 L98.2 141.9 L97.0 140.9 L96.2 140.0 L95.5 139.0 L94.4 137.5 M94.4 137.5 L91.6 133.3 L89.5 130.6 L87.6 128.0 L85.9 125.4 L83.6 122.4 L81.1 119.2 L77.3 114.5 M77.3 114.5 L74.9 111.5 L74.0 110.7 L73.2 110.1 L72.6 109.7 L71.9 109.4 L71.3 109.2 L70.6 109.1 L69.7 109.0 L68.9 109.1 L67.9 109.3 L66.6 109.6 L65.2 110.0 L63.4 110.6 L61.7 111.3 L58.4 112.8 M58.4 112.8 L27.8 126.3 M27.8 126.3 L24.5 127.7 L23.9 128.1 L23.4 128.4 L23.0 128.8 L22.6 129.2 L22.4 129.6 L22.2 130.0 L22.1 130.4 L22.0 130.9 L22.0 131.3 L22.0 131.8 L22.2 132.3 L22.4 132.8 L22.7 133.3 L23.3 134.0 L25.6 135.9",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 16,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27008/14992",
          "x": -31.73,
          "y": -87.59,
          "width": 97.25,
          "height": 97.25
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27008/14993",
          "x": 65.52,
          "y": -87.59,
          "width": 97.25,
          "height": 97.25
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27008/14994",
          "x": 162.77,
          "y": -87.59,
          "width": 97.25,
          "height": 97.25
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27008/14995",
          "x": 260.02,
          "y": -87.59,
          "width": 97.25,
          "height": 97.25
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27008/14996",
          "x": 357.26,
          "y": -87.59,
          "width": 97.25,
          "height": 97.25
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27009/14992",
          "x": -31.73,
          "y": 9.66,
          "width": 97.25,
          "height": 97.25
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27009/14993",
          "x": 65.52,
          "y": 9.66,
          "width": 97.25,
          "height": 97.25
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27009/14994",
          "x": 162.77,
          "y": 9.66,
          "width": 97.25,
          "height": 97.25
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27009/14995",
          "x": 260.02,
          "y": 9.66,
          "width": 97.25,
          "height": 97.25
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27009/14996",
          "x": 357.26,
          "y": 9.66,
          "width": 97.25,
          "height": 97.25
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27010/14992",
          "x": -31.73,
          "y": 106.9,
          "width": 97.25,
          "height": 97.25
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27010/14993",
          "x": 65.52,
          "y": 106.9,
          "width": 97.25,
          "height": 97.25
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27010/14994",
          "x": 162.77,
          "y": 106.9,
          "width": 97.25,
          "height": 97.25
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27010/14995",
          "x": 260.02,
          "y": 106.9,
          "width": 97.25,
          "height": 97.25
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27010/14996",
          "x": 357.26,
          "y": 106.9,
          "width": 97.25,
          "height": 97.25
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27011/14992",
          "x": -31.73,
          "y": 204.15,
          "width": 97.25,
          "height": 97.25
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27011/14993",
          "x": 65.52,
          "y": 204.15,
          "width": 97.25,
          "height": 97.25
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27011/14994",
          "x": 162.77,
          "y": 204.15,
          "width": 97.25,
          "height": 97.25
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27011/14995",
          "x": 260.02,
          "y": 204.15,
          "width": 97.25,
          "height": 97.25
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27011/14996",
          "x": 357.26,
          "y": 204.15,
          "width": 97.25,
          "height": 97.25
        }
      ]
    },
    "link": "/tracks/cota",
    "center": {
      "lat": 30.1328,
      "lon": -97.6411
    },
    "fia": null,
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 167,
      "minM": 150,
      "maxM": 186,
      "rangeM": 36
    },
    "source": {
      "geometry": "OpenStreetMap relation 6537729",
      "osmName": "Circuit of the Americas",
      "wayCount": 29,
      "osmLengthKm": 5.502,
      "quality": "open-data",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "mexico-city",
    "name": "墨西哥城",
    "fullName": "罗德里格斯兄弟赛道",
    "type": "高海拔 / 长直道 / 低下压力",
    "summary": "空气稀薄，刹车和冷却都难。",
    "corners": [
      {
        "id": "T1",
        "note": "超长直道后重刹。",
        "x": 332.3,
        "y": 80,
        "labelX": 340,
        "labelY": 72
      },
      {
        "id": "Stadium",
        "note": "低速体育场段。",
        "x": 259.3,
        "y": 183.4,
        "labelX": 269.3,
        "labelY": 175.4
      },
      {
        "id": "Peraltada",
        "note": "最后弯出口。",
        "x": 184.4,
        "y": 103.7,
        "labelX": 194.4,
        "labelY": 95.7
      }
    ],
    "path": "M46.7 44.1 L47.0 42.2 L47.4 40.3 L47.9 39.0 L48.5 37.5 L49.3 35.9 L50.5 33.7 L51.6 32.0 L53.1 30.0 L53.2 29.9 L55.7 27.2 L57.1 25.9 L58.1 25.1 L58.9 24.7 L60.6 23.8 L62.7 22.9 L63.3 22.7 L65.1 22.2 L66.8 22.1 L68.5 22.0 L70.7 22.1 L74.3 22.5 L87.2 24.4 L110.0 27.6 L113.5 28.1 L137.1 31.5 L152.0 33.3 M152.0 33.3 L155.5 33.7 M155.5 33.7 L161.8 34.6 L181.9 37.2 L198.6 39.1 L223.4 41.7 L293.8 51.5 L316.0 55.3 L319.6 56.0 L322.5 56.7 L323.6 56.9 L324.6 57.5 L325.4 58.4 L325.7 59.0 L326.0 60.0 L325.9 61.3 L324.7 68.9 L324.0 73.2 L324.0 74.2 L324.1 74.9 L324.4 75.6 L325.0 76.1 L328.0 77.7 L329.8 78.6 L331.5 79.5 L332.3 80.0 L332.9 80.5 L333.2 81.1 L333.3 81.7 L333.3 82.4 L333.2 83.9 L332.8 86.2 L332.3 88.9 L331.6 92.2 L331.1 94.2 L330.0 98.2 L327.6 104.5 L325.8 108.5 L324.5 111.0 L322.9 113.9 L310.3 134.8 L298.2 154.9 L288.8 170.8 L278.4 187.3 L276.1 190.6 L272.1 196.4 L269.5 200.2 L269.1 201.0 L268.9 201.9 L268.9 202.7 L269.2 203.7 L269.7 204.4 L270.9 205.4 L275.8 208.1 L278.6 209.8 L279.2 210.6 L279.6 211.6 L279.7 212.4 L279.6 213.1 L279.2 213.8 L278.7 214.5 L276.4 216.1 L272.2 219.3 L261.5 227.1 L260.7 227.6 L260.1 227.9 L259.1 228.0 L258.5 227.9 L257.9 227.7 L255.6 226.2 L254.7 225.5 L254.4 224.8 L254.2 224.1 L254.2 223.3 L254.3 222.2 L254.5 220.2 L255.0 216.4 L255.7 210.1 L259.3 183.4 L260.7 172.8 L261.6 165.9 L261.7 164.6 L261.7 163.4 L261.4 162.2 L261.0 161.4 L260.2 160.2 L258.9 159.2 L256.7 157.8 L249.6 153.6 L248.5 152.8 L247.1 151.7 L245.9 150.6 L244.9 149.3 L244.0 148.0 L243.2 146.6 L242.3 144.5 L241.5 141.9 L241.0 140.6 L240.3 139.2 L239.5 137.9 L238.6 136.9 L237.8 135.9 L236.7 134.9 L235.4 133.8 L233.9 132.8 L232.4 132.1 L230.3 131.4 L228.1 130.9 L223.2 130.2 L218.7 129.6 L206.1 128.0 L204.5 127.7 L203.0 127.4 L201.7 127.0 L200.5 126.4 L199.5 125.6 L198.5 124.5 L197.7 123.2 L197.1 121.7 L196.6 119.6 L196.4 118.7 L196.0 117.0 L195.2 114.0 L194.7 112.5 L194.1 111.3 L193.3 109.9 L192.3 108.7 L191.2 107.6 L189.7 106.5 L187.5 105.3 L184.4 103.7 M184.4 103.7 L179.1 100.9 L172.5 97.3 L169.1 95.3 L166.2 93.8 L163.7 92.8 L161.0 91.8 L157.3 90.8 L153.4 90.1 L142.9 88.7 L134.9 87.5 M134.9 87.5 L118.4 85.1 M118.4 85.1 L113.4 84.4 L94.9 81.7 L87.2 80.6 L86.3 79.9 L86.0 79.6 L85.6 79.0 L85.1 77.9 M85.1 77.9 L84.0 58.3 L83.7 55.4 L83.4 53.4 L81.9 46.6 M81.9 46.6 L81.4 45.8 L80.7 45.1 L79.9 44.8 L78.8 44.7 M78.8 44.7 L77.7 44.9 L76.9 45.6 L75.9 46.5 L73.6 50.0 L72.4 51.2 L71.4 51.6 L70.3 51.8 L69.1 51.8 L68.2 51.5 L66.6 50.7 L66.2 50.5 L64.9 49.8 L63.8 49.3 L62.5 49.0 L59.7 48.7 L51.0 47.8 L49.7 47.5 L48.6 47.1 L47.9 46.7 L47.3 45.9 L47.0 45.2 L46.7 44.1",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 16,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/29165/14727",
          "x": -63.38,
          "y": -48.76,
          "width": 114.07,
          "height": 114.07
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/29165/14728",
          "x": 50.69,
          "y": -48.76,
          "width": 114.07,
          "height": 114.07
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/29165/14729",
          "x": 164.77,
          "y": -48.76,
          "width": 114.07,
          "height": 114.07
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/29165/14730",
          "x": 278.84,
          "y": -48.76,
          "width": 114.07,
          "height": 114.07
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/29166/14727",
          "x": -63.38,
          "y": 65.32,
          "width": 114.07,
          "height": 114.07
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/29166/14728",
          "x": 50.69,
          "y": 65.32,
          "width": 114.07,
          "height": 114.07
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/29166/14729",
          "x": 164.77,
          "y": 65.32,
          "width": 114.07,
          "height": 114.07
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/29166/14730",
          "x": 278.84,
          "y": 65.32,
          "width": 114.07,
          "height": 114.07
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/29167/14727",
          "x": -63.38,
          "y": 179.39,
          "width": 114.07,
          "height": 114.07
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/29167/14728",
          "x": 50.69,
          "y": 179.39,
          "width": 114.07,
          "height": 114.07
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/29167/14729",
          "x": 164.77,
          "y": 179.39,
          "width": 114.07,
          "height": 114.07
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/29167/14730",
          "x": 278.84,
          "y": 179.39,
          "width": 114.07,
          "height": 114.07
        }
      ]
    },
    "link": "/tracks/mexico-city",
    "center": {
      "lat": 19.4042,
      "lon": -99.0907
    },
    "fia": {
      "name": "AUTODROMO HERMANOS RODRIGUEZ",
      "country": "MEX",
      "grade": "1",
      "lengthKm": 4.304,
      "pole": "Left",
      "expiry": "2028-12-15",
      "widthM": 14
    },
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 2236,
      "minM": 2223,
      "maxM": 2247,
      "rangeM": 24
    },
    "source": {
      "geometry": "OpenStreetMap relation 16251935",
      "osmName": "Mexican Grand Prix",
      "wayCount": 9,
      "osmLengthKm": 4.312,
      "quality": "matched",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "interlagos",
    "name": "英特拉格斯",
    "fullName": "英特拉格斯",
    "type": "短圈 / 坡度 / 天气",
    "summary": "节奏快，天气和安全车经常搅局。",
    "corners": [
      {
        "id": "S do Senna",
        "note": "发车和进攻核心。",
        "x": 230.7,
        "y": 73.4,
        "labelX": 240.7,
        "labelY": 65.4
      },
      {
        "id": "Ferradura",
        "note": "中高速长弯。",
        "x": 160.4,
        "y": 104.1,
        "labelX": 170.4,
        "labelY": 96.1
      },
      {
        "id": "Juncao",
        "note": "上坡直道前出口。",
        "x": 196.1,
        "y": 64.4,
        "labelX": 206.1,
        "labelY": 56.4
      }
    ],
    "path": "M128.4 135.3 L134.2 157.9 L137.1 169.3 L137.9 172.1 L149.3 216.3 L150.2 218.7 M150.2 218.7 L150.8 220.1 L151.5 221.6 L152.6 223.3 L153.7 224.8 M153.7 224.8 L154.6 225.7 L155.8 226.6 L157.0 227.4 L158.5 228.0 L160.0 228.0 L161.4 227.7 L162.8 227.1 L163.8 226.3 L164.9 225.2 L169.2 220.6 L170.3 219.5 L171.1 218.9 L172.0 218.4 L172.8 218.1 L173.8 217.9 M173.8 217.9 L174.9 218.0 L176.0 218.3 L177.1 218.7 L178.3 219.5 L182.2 221.9 L183.8 222.9 L186.6 224.1 L190.1 225.0 L192.4 225.3 L195.2 225.4 L197.5 225.4 L199.9 225.1 M199.9 225.1 L203.0 224.5 L205.7 223.7 L208.7 222.3 L211.5 220.5 L213.8 218.9 L215.9 216.9 L218.1 214.4 L219.8 212.1 L221.3 209.3 L222.5 206.5 L224.5 200.5 M224.5 200.5 L229.1 184.9 L231.7 175.8 L233.6 168.9 L234.7 164.8 L235.5 161.8 L237.0 155.3 L238.3 149.6 L245.1 124.2 L249.7 107.0 L254.6 89.8 M254.6 89.8 L255.2 87.3 L255.4 85.7 L255.4 84.4 L255.2 83.1 L254.8 81.9 L254.4 80.8 L253.7 79.7 L253.0 78.9 L252.3 78.3 L251.1 77.5 L250.2 77.0 L248.8 76.6 L245.5 75.9 L236.5 74.3 M236.5 74.3 L233.0 73.7 L230.7 73.4 L228.9 73.3 L227.0 73.3 L225.1 73.5 L223.1 73.9 L220.8 74.6 L218.7 75.4 M218.7 75.4 L217.5 76.0 L216.1 76.9 L214.6 77.9 L212.4 79.8 L210.4 81.8 L207.9 84.8 L204.4 89.5 L199.7 95.9 L192.1 106.6 L188.9 111.1 L184.1 117.6 L173.6 132.1 M173.6 132.1 L172.0 134.2 L171.0 135.4 L169.9 136.5 L168.8 137.5 L167.4 138.4 L165.7 139.2 L164.0 139.7 L162.7 140.0 L160.6 140.1 L158.9 140.1 L156.9 140.0 L154.8 139.8 M154.8 139.8 L153.1 139.3 L151.0 138.7 L149.4 138.0 L147.5 137.2 L145.9 136.2 L144.3 135.0 L142.9 133.8 L142.4 133.1 L141.9 132.3 L141.2 131.1 L140.6 129.3 L140.0 127.3 L139.0 122.6 M139.0 122.6 L137.1 110.4 M137.1 110.4 L136.9 108.8 L136.8 107.6 L136.8 106.3 L136.8 104.9 L136.9 103.5 L137.0 102.7 L137.3 101.9 L137.6 101.3 L138.2 100.6 L139.0 100.0 L139.8 99.5 L140.6 99.1 L141.4 99.0 L142.4 98.9 L143.2 98.9 L144.0 99.1 L144.9 99.5 L145.9 100.0 L147.2 100.8 L148.1 101.4 L150.7 103.4 M150.7 103.4 L152.4 104.3 L153.1 104.7 L153.8 104.9 L154.8 105.1 L155.8 105.2 L156.6 105.2 L157.5 105.1 L159.0 104.7 L160.4 104.1 L161.5 103.3 L162.4 102.4 L163.1 101.5 L163.7 100.7 L164.1 99.8 L164.4 99.1 L164.6 98.4 L164.7 97.4 L164.7 96.6 L164.7 95.9 L164.5 94.6 L164.1 93.3 L163.6 92.3 L162.7 91.2 L161.5 89.8 L157.5 85.9 M157.5 85.9 L154.0 82.3 L151.1 79.3 L150.4 78.4 L149.7 77.5 L149.1 76.7 L148.5 75.7 L147.9 74.6 L147.3 73.4 L146.9 72.4 L146.3 70.6 L145.0 65.5 L144.1 61.6 L143.9 60.5 L143.8 59.6 L143.8 58.7 L143.9 57.8 L144.0 57.0 L144.2 56.5 L144.5 56.0 L144.9 55.5 L145.3 55.0 L146.1 54.5 L146.7 54.1 L147.4 53.8 L148.0 53.6 L148.5 53.5 L149.1 53.5 L149.7 53.6 L150.3 53.8 L150.8 54.0 L151.2 54.3 L152.1 55.0 L153.3 56.1 L155.0 57.8 L158.3 61.6 L163.0 66.7 M163.0 66.7 L165.0 68.8 L166.0 69.6 L167.0 70.4 L168.4 71.4 L169.8 72.1 L171.4 72.9 L173.1 73.5 L175.0 73.9 L176.8 74.2 L178.7 74.3 L179.8 74.3 L181.2 74.2 L182.6 74.1 L183.6 73.9 L184.5 73.7 L185.5 73.3 L186.6 72.9 L187.9 72.3 L188.7 71.9 L189.5 71.4 L191.0 70.3 L192.2 69.3 L193.1 68.4 L193.9 67.6 L194.6 66.7 L196.1 64.4 L198.6 60.7 M198.6 60.7 L202.7 54.2 M202.7 54.2 L210.3 41.9 L213.0 37.3 M213.0 37.3 L213.3 36.7 L213.5 36.2 L213.6 35.7 L213.7 35.2 L213.8 34.7 L213.8 34.2 L213.7 33.4 L213.6 33.0 L213.5 32.5 L213.3 32.1 L213.0 31.7 L212.5 31.1 L211.9 30.4 L211.2 29.9 L210.4 29.4 L208.7 28.5 M208.7 28.5 L206.4 27.6 L204.2 26.7 L200.5 25.3 L197.2 24.1 M197.2 24.1 L194.2 23.1 L192.6 22.5 L191.4 22.2 L190.5 22.0 L189.5 22.0 L188.3 22.1 L187.0 22.2 L183.0 22.8 M183.0 22.8 L178.3 23.7 L173.8 24.5 L172.5 24.8 L171.4 25.1 L169.4 25.8 L167.5 26.5 L165.5 27.3 L163.1 28.4 L160.9 29.4 L158.5 30.6 L156.2 31.7 L153.8 32.9 M153.8 32.9 L152.6 33.6 L151.2 34.5 L149.9 35.4 L148.2 36.6 L146.4 38.1 L144.5 39.9 L142.5 42.1 L141.1 44.1 L139.9 46.3 L138.6 48.7 L137.8 51.0 L137.0 53.4 L134.6 62.9 M134.6 62.9 L131.2 77.2 L129.3 85.1 M129.3 85.1 L125.9 99.5 L125.3 102.7 L125.0 105.1 L124.8 107.8 L124.7 110.3 L124.6 113.0 L124.8 116.4 L125.1 119.3 L125.6 122.4 L126.1 125.2 L126.9 129.2 L128.4 135.3",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 16,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/37210/24265",
          "x": -30.48,
          "y": -25.1,
          "width": 109.69,
          "height": 109.69
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/37210/24266",
          "x": 79.21,
          "y": -25.1,
          "width": 109.69,
          "height": 109.69
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/37210/24267",
          "x": 188.9,
          "y": -25.1,
          "width": 109.69,
          "height": 109.69
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/37210/24268",
          "x": 298.6,
          "y": -25.1,
          "width": 109.69,
          "height": 109.69
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/37211/24265",
          "x": -30.48,
          "y": 84.6,
          "width": 109.69,
          "height": 109.69
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/37211/24266",
          "x": 79.21,
          "y": 84.6,
          "width": 109.69,
          "height": 109.69
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/37211/24267",
          "x": 188.9,
          "y": 84.6,
          "width": 109.69,
          "height": 109.69
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/37211/24268",
          "x": 298.6,
          "y": 84.6,
          "width": 109.69,
          "height": 109.69
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/37212/24265",
          "x": -30.48,
          "y": 194.29,
          "width": 109.69,
          "height": 109.69
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/37212/24266",
          "x": 79.21,
          "y": 194.29,
          "width": 109.69,
          "height": 109.69
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/37212/24267",
          "x": 188.9,
          "y": 194.29,
          "width": 109.69,
          "height": 109.69
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/37212/24268",
          "x": 298.6,
          "y": 194.29,
          "width": 109.69,
          "height": 109.69
        }
      ]
    },
    "link": "/tracks/interlagos",
    "center": {
      "lat": -23.7036,
      "lon": -46.6997
    },
    "fia": {
      "name": "INTERLAGOS",
      "country": "BRA",
      "grade": "1",
      "lengthKm": 4.309,
      "pole": "Right",
      "expiry": "2028-10-30",
      "widthM": 10
    },
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 766,
      "minM": 745,
      "maxM": 789,
      "rangeM": 44
    },
    "source": {
      "geometry": "OpenStreetMap relation 6781071",
      "osmName": "Autódromo José Carlos Pace",
      "wayCount": 25,
      "osmLengthKm": 4.308,
      "quality": "matched",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "las-vegas",
    "name": "拉斯维加斯",
    "fullName": "拉斯维加斯街道赛道",
    "type": "长直道 / 低温 / 街道",
    "summary": "低温让轮胎窗口更难，长直道让尾流更狠。",
    "corners": [
      {
        "id": "T1",
        "note": "发车重刹。",
        "x": 241.5,
        "y": 96.7,
        "labelX": 251.5,
        "labelY": 88.7
      },
      {
        "id": "Strip",
        "note": "长直道尾流。",
        "x": 173.8,
        "y": 23.7,
        "labelX": 183.8,
        "labelY": 28
      },
      {
        "id": "T14",
        "note": "直道末端攻击点。",
        "x": 128.9,
        "y": 183.4,
        "labelX": 138.9,
        "labelY": 175.4
      }
    ],
    "path": "M234.9 212.4 L248.4 197.2 L249.2 195.8 M249.2 195.8 L249.5 194.7 L249.4 193.8 L248.7 192.5 L247.7 191.5 M247.7 191.5 L246.6 190.9 L245.2 190.5 L243.2 190.2 L241.3 190.3 L239.5 190.8 L237.8 191.7 L235.3 193.4 L231.4 197.2 L230.1 198.0 L228.6 198.6 L226.7 198.8 L225.1 198.8 M225.1 198.8 L223.3 198.3 L221.8 197.7 L220.2 196.8 L218.5 195.3 L217.2 193.6 L215.5 190.5 M215.5 190.5 L215.5 186.1 M215.5 186.1 L215.4 183.3 M215.4 183.3 L215.4 173.0 L215.4 171.7 M215.4 171.7 L215.3 164.5 L215.3 162.0 L215.3 160.9 L215.2 158.9 L215.2 157.8 L215.2 154.9 L215.2 153.6 L215.2 153.3 L215.2 152.1 M215.2 152.1 L215.2 150.3 M215.2 150.3 L215.1 149.2 L215.2 141.2 M215.2 141.2 L215.2 138.6 M215.2 138.6 L215.2 137.0 M215.2 137.0 L215.2 135.0 M215.2 135.0 L215.2 130.8 M215.2 130.8 L215.1 124.4 M215.1 124.4 L215.1 123.7 L215.1 120.1 L215.1 119.7 L215.0 118.6 M215.0 118.6 L215.0 109.4 L215.0 107.7 L214.9 98.3 L214.9 96.3 M241.5 96.7 L234.3 96.6 L224.5 96.3 L223.7 96.3 L215.5 96.3 L214.9 96.3 M241.5 96.7 L242.6 95.9 L243.7 95.2 L244.0 95.0 L247.4 91.7 L248.9 89.6 L249.8 87.5 L250.0 87.1 L250.8 85.3 L251.3 82.7 L251.6 79.8 L251.6 78.4 M251.6 78.4 L250.3 78.1 L249.0 77.8 L248.2 77.5 L247.8 77.3 L247.3 77.0 L246.9 76.6 L246.3 76.0 M246.3 76.0 L246.0 75.5 L245.8 75.0 L245.7 74.4 L245.6 73.9 L245.6 73.0 L245.7 72.3 L245.9 71.5 L246.1 70.9 L246.8 69.4 L248.5 66.2 L248.6 65.7 L248.7 65.2 L248.8 62.0 L248.8 61.6 L248.8 60.9 M217.8 60.2 L218.0 60.2 L224.0 60.2 L226.3 60.3 L232.0 60.5 L237.3 60.6 L245.4 60.8 L248.8 60.9 M214.5 60.2 L215.3 60.2 L217.8 60.2 M214.5 60.2 L213.3 58.1 M213.3 58.1 L212.3 58.1 L207.4 57.8 L203.2 56.9 L200.8 55.7 L198.1 53.3 L196.0 51.1 M196.0 51.1 L195.0 49.6 L193.5 46.4 L190.5 38.4 L190.5 38.4 M190.5 38.4 L189.7 36.3 M189.7 36.3 L189.2 34.8 L188.4 33.3 L188.3 33.0 L187.6 31.8 M187.6 31.8 L186.6 30.8 M186.6 30.8 L184.7 29.1 L182.7 27.3 L180.8 25.9 L178.2 25.0 L177.3 24.6 M177.3 24.6 L173.8 23.7 L170.2 23.1 M170.2 23.1 L167.6 22.6 L166.2 22.3 M166.2 22.3 L165.1 22.2 M165.1 22.2 L164.0 22.0 M164.0 22.0 L163.1 23.7 M163.1 23.7 L161.8 26.5 L161.3 27.5 M161.3 27.5 L156.5 36.8 L154.1 41.3 M154.1 41.3 L152.2 45.0 L151.0 47.1 M151.0 47.1 L150.4 48.4 M150.4 48.4 L149.2 50.5 L146.2 55.7 L145.7 56.5 M145.7 56.5 L144.1 59.3 M144.1 59.3 L143.3 60.6 L143.1 61.1 L142.7 61.8 M142.7 61.8 L139.1 70.0 L136.5 78.4 L136.2 79.6 M136.2 79.6 L134.7 84.7 L134.4 85.8 M134.4 85.8 L133.7 88.5 L133.6 88.8 L133.3 90.0 L132.9 91.5 M132.9 91.5 L132.7 92.9 L132.1 95.7 M132.1 95.7 L131.4 99.6 L130.7 106.2 M130.7 106.2 L130.4 108.6 L130.4 109.7 L130.0 116.1 L130.0 116.6 L130.0 117.3 M130.0 117.3 L129.9 118.4 M129.9 118.4 L129.9 119.0 L129.9 122.5 M129.9 122.5 L129.9 134.5 M129.9 134.5 L130.0 146.5 L130.0 148.2 M130.0 148.2 L129.9 150.2 M129.9 150.2 L129.5 156.9 M129.5 156.9 L129.4 168.7 M129.4 168.7 L129.2 173.6 L129.0 178.5 M129.0 178.5 L128.9 181.4 L128.9 183.4 L128.8 186.3 M128.8 186.3 L128.7 188.8 L128.7 189.8 M128.7 189.8 L128.6 191.6 M128.6 191.6 L128.6 192.8 L128.5 194.6 M128.5 194.6 L128.5 198.8 L128.5 199.8 M128.5 199.8 L128.5 200.2 L128.5 205.4 L128.5 210.6 M128.5 210.6 L128.5 214.0 L128.5 215.7 M128.5 215.7 L128.4 217.9 M128.4 217.9 L130.0 219.5 M130.0 219.5 L131.7 221.2 M131.7 221.2 L134.0 223.5 L136.0 225.4 L136.7 226.0 L137.5 226.6 L138.3 227.1 L139.0 227.4 L140.1 227.6 L141.2 227.6 M141.2 227.6 L146.1 227.8 L149.6 227.7 M149.6 227.7 L156.3 227.8 L157.2 227.8 L158.5 227.8 M158.5 227.8 L159.5 227.8 M159.5 227.8 L170.4 228.0 M170.4 228.0 L171.4 228.0 L172.7 227.9 L178.5 227.9 M178.5 227.9 L179.3 227.9 L179.7 227.9 L180.9 227.9 M180.9 227.9 L193.7 227.9 L198.2 227.9 L203.2 228.0 M203.2 228.0 L208.0 228.0 M208.0 228.0 L213.5 227.9 L213.8 227.9 L214.6 227.9 M214.6 227.9 L215.8 227.7 M215.8 227.7 L218.2 226.8 L219.5 226.3 L221.1 225.6 L222.9 224.8 L224.5 223.8 L225.9 222.6 L227.2 221.0 L228.5 219.6 M228.5 219.6 L234.9 212.4",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 15,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/12853/5899",
          "x": -46.4,
          "y": -18.28,
          "width": 103.81,
          "height": 103.81
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/12853/5900",
          "x": 57.41,
          "y": -18.28,
          "width": 103.81,
          "height": 103.81
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/12853/5901",
          "x": 161.22,
          "y": -18.28,
          "width": 103.81,
          "height": 103.81
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/12853/5902",
          "x": 265.03,
          "y": -18.28,
          "width": 103.81,
          "height": 103.81
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/12853/5903",
          "x": 368.84,
          "y": -18.28,
          "width": 103.81,
          "height": 103.81
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/12854/5899",
          "x": -46.4,
          "y": 85.53,
          "width": 103.81,
          "height": 103.81
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/12854/5900",
          "x": 57.41,
          "y": 85.53,
          "width": 103.81,
          "height": 103.81
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/12854/5901",
          "x": 161.22,
          "y": 85.53,
          "width": 103.81,
          "height": 103.81
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/12854/5902",
          "x": 265.03,
          "y": 85.53,
          "width": 103.81,
          "height": 103.81
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/12854/5903",
          "x": 368.84,
          "y": 85.53,
          "width": 103.81,
          "height": 103.81
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/12855/5899",
          "x": -46.4,
          "y": 189.34,
          "width": 103.81,
          "height": 103.81
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/12855/5900",
          "x": 57.41,
          "y": 189.34,
          "width": 103.81,
          "height": 103.81
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/12855/5901",
          "x": 161.22,
          "y": 189.34,
          "width": 103.81,
          "height": 103.81
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/12855/5902",
          "x": 265.03,
          "y": 189.34,
          "width": 103.81,
          "height": 103.81
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/15/12855/5903",
          "x": 368.84,
          "y": 189.34,
          "width": 103.81,
          "height": 103.81
        }
      ]
    },
    "link": "/tracks/las-vegas",
    "center": {
      "lat": 36.1147,
      "lon": -115.1728
    },
    "fia": {
      "name": "LAS VEGAS GRAND PRIX",
      "country": "USA",
      "grade": "1",
      "lengthKm": 6.2,
      "pole": "Right",
      "expiry": "2026-11-16",
      "widthM": 13
    },
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 642,
      "minM": 629,
      "maxM": 655,
      "rangeM": 26
    },
    "source": {
      "geometry": "OpenStreetMap relation 16696508",
      "osmName": "Las Vegas Strip Circuit",
      "wayCount": 79,
      "osmLengthKm": 6.21,
      "quality": "matched",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "lusail",
    "name": "卢塞尔",
    "fullName": "卢塞尔",
    "type": "高速长弯 / 轮胎负荷",
    "summary": "轮胎负荷很高，跟车会让温度更难控。",
    "corners": [
      {
        "id": "T1",
        "note": "主直道后进攻。",
        "x": 183.2,
        "y": 23.3,
        "labelX": 193.2,
        "labelY": 28
      },
      {
        "id": "T6",
        "note": "中速节奏点。",
        "x": 233.7,
        "y": 69.6,
        "labelX": 243.7,
        "labelY": 61.6
      },
      {
        "id": "T12-T14",
        "note": "高速连续弯，轮胎压力大。",
        "x": 259.3,
        "y": 132.2,
        "labelX": 269.3,
        "labelY": 124.2
      }
    ],
    "path": "M128.0 136.9 L119.3 121.0 L118.4 119.6 L117.6 118.3 L116.7 117.0 L116.2 116.3 L115.7 115.6 L115.2 114.6 L114.5 113.3 L108.8 102.3 L103.9 93.2 L103.4 92.2 L103.0 91.1 L102.8 90.0 L102.7 88.9 L102.7 87.8 L102.9 86.7 L103.2 85.6 L103.6 84.7 L104.1 83.8 L104.7 83.0 L105.4 82.3 L106.2 81.6 L107.0 81.1 L107.9 80.6 L108.8 80.3 L109.7 80.1 L110.6 80.0 L111.5 80.0 L112.4 80.0 L113.5 80.3 L114.6 80.6 L115.6 81.1 L116.5 81.7 L124.9 86.9 L134.2 92.7 L135.2 93.3 L136.2 93.8 L137.2 94.1 L138.3 94.3 L139.4 94.4 L140.5 94.3 L141.5 94.0 L142.6 93.7 L143.5 93.2 L144.5 92.6 L145.3 91.9 L146.0 91.1 L146.6 90.2 L147.1 89.1 L147.4 87.9 L147.6 86.7 L147.8 85.4 L147.8 84.1 L147.6 68.8 L147.5 67.6 L147.6 66.5 L147.7 65.3 L148.0 64.1 L148.3 63.0 L148.8 61.9 L149.3 60.7 L150.0 59.7 L150.8 58.7 L151.6 57.7 L156.1 52.7 L175.9 31.0 L181.6 24.7 L182.4 24.0 L183.2 23.3 L184.1 22.8 L185.1 22.4 L186.1 22.2 L187.1 22.0 L188.2 22.0 L189.2 22.1 L190.1 22.3 L191.0 22.7 L191.9 23.1 L192.7 23.7 L193.5 24.3 L199.1 29.4 L200.8 30.9 L201.5 31.6 L202.2 32.4 L202.7 33.2 L203.1 34.1 L203.5 35.0 L203.7 35.9 L203.8 36.9 L203.8 37.9 L203.7 38.8 L203.5 39.8 L203.2 40.7 L202.8 41.6 L202.3 42.4 L201.7 43.2 L182.4 64.4 L182.0 64.9 L181.5 65.5 L181.2 66.1 L180.9 66.8 L180.8 67.6 L180.8 68.3 L180.9 69.0 L181.2 69.7 L181.5 70.4 L182.0 71.0 L182.5 71.5 L183.2 71.9 L183.9 72.2 L184.7 72.3 L185.4 72.4 L186.2 72.3 L186.9 72.0 L187.6 71.8 L222.4 57.8 L223.4 57.4 L224.3 57.1 L225.3 57.0 L226.3 56.9 L227.4 57.0 L228.3 57.2 L229.3 57.5 L230.2 57.9 L231.1 58.4 L231.9 59.1 L232.6 59.8 L233.3 60.6 L233.8 61.5 L234.2 62.5 L234.5 63.4 L234.7 64.5 L234.8 65.3 L234.8 66.2 L234.6 67.0 L234.4 67.9 L234.1 68.7 L233.7 69.6 L233.2 70.3 L232.6 71.1 L230.8 72.7 L227.8 75.4 L226.3 77.1 L224.8 78.8 L223.5 80.7 L222.3 82.7 L221.3 84.4 L220.5 86.2 L219.7 88.0 L219.1 89.8 L218.6 91.7 L218.0 94.2 L217.6 96.4 L217.5 97.3 L217.2 98.2 L216.9 99.1 L216.5 99.9 L215.9 100.7 L215.3 101.5 L214.7 102.1 L213.9 102.7 L213.1 103.2 L212.3 103.7 L210.6 104.2 L197.7 107.3 L192.8 108.4 L191.9 108.6 L191.0 109.0 L190.2 109.4 L189.5 109.9 L188.8 110.5 L188.3 111.2 L187.8 112.0 L187.4 112.8 L187.1 113.6 L187.0 114.5 L187.0 115.4 L187.1 116.3 L187.3 117.1 L187.7 118.0 L188.1 118.8 L188.7 119.6 L189.3 120.2 L191.0 122.0 L192.7 123.7 L194.2 125.1 L195.7 126.3 L197.3 127.6 L199.2 128.8 L201.1 130.0 L203.1 131.0 L205.1 132.0 L207.0 132.8 L209.0 133.5 L211.0 134.1 L211.9 134.4 L213.0 134.7 L215.4 135.2 L217.9 135.5 L220.4 135.8 L222.6 135.9 L224.8 135.9 L227.0 135.8 L229.1 135.7 L256.9 132.3 L258.1 132.2 L259.3 132.2 L260.5 132.4 L261.7 132.7 L262.9 133.0 L264.0 133.5 L265.0 134.1 L266.1 134.9 L267.1 135.8 L268.1 136.7 L268.9 137.8 L269.6 139.0 L276.1 150.8 L276.6 151.8 L277.0 152.9 L277.2 154.0 L277.3 155.1 L277.3 156.3 L277.2 157.2 L276.9 158.2 L276.6 159.1 L276.2 160.0 L275.6 160.8 L265.6 176.7 L265.0 177.5 L264.3 178.3 L263.5 178.9 L262.7 179.5 L261.8 180.0 L260.8 180.4 L259.9 180.6 L259.0 180.7 L258.0 180.7 L257.1 180.6 L256.1 180.5 L222.7 173.8 L221.8 173.7 L220.8 173.7 L219.8 173.9 L218.9 174.1 L217.9 174.5 L217.1 174.9 L216.1 175.6 L215.3 176.4 L214.5 177.2 L213.9 178.2 L213.4 179.2 L203.5 198.5 L199.2 207.0 L191.7 221.6 L190.4 223.9 L189.9 224.7 L189.3 225.3 L188.7 226.0 L187.9 226.5 L187.2 227.0 L186.2 227.4 L185.2 227.8 L184.1 227.9 L183.1 228.0 L182.0 227.9 L180.9 227.7 L179.8 227.4 L178.8 226.9 L177.9 226.3 L177.1 225.6 L176.4 224.8 L175.8 223.9 L175.3 223.0 L170.2 213.6 L128.0 136.9",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 16,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27964/42132",
          "x": -30.78,
          "y": -65.66,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27964/42133",
          "x": 46.08,
          "y": -65.66,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27964/42134",
          "x": 122.95,
          "y": -65.66,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27964/42135",
          "x": 199.82,
          "y": -65.66,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27964/42136",
          "x": 276.68,
          "y": -65.66,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27964/42137",
          "x": 353.55,
          "y": -65.66,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27965/42132",
          "x": -30.78,
          "y": 11.21,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27965/42133",
          "x": 46.08,
          "y": 11.21,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27965/42134",
          "x": 122.95,
          "y": 11.21,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27965/42135",
          "x": 199.82,
          "y": 11.21,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27965/42136",
          "x": 276.68,
          "y": 11.21,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27965/42137",
          "x": 353.55,
          "y": 11.21,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27966/42132",
          "x": -30.78,
          "y": 88.08,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27966/42133",
          "x": 46.08,
          "y": 88.08,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27966/42134",
          "x": 122.95,
          "y": 88.08,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27966/42135",
          "x": 199.82,
          "y": 88.08,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27966/42136",
          "x": 276.68,
          "y": 88.08,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27966/42137",
          "x": 353.55,
          "y": 88.08,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27967/42132",
          "x": -30.78,
          "y": 164.94,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27967/42133",
          "x": 46.08,
          "y": 164.94,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27967/42134",
          "x": 122.95,
          "y": 164.94,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27967/42135",
          "x": 199.82,
          "y": 164.94,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27967/42136",
          "x": 276.68,
          "y": 164.94,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27967/42137",
          "x": 353.55,
          "y": 164.94,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27968/42132",
          "x": -30.78,
          "y": 241.81,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27968/42133",
          "x": 46.08,
          "y": 241.81,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27968/42134",
          "x": 122.95,
          "y": 241.81,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27968/42135",
          "x": 199.82,
          "y": 241.81,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27968/42136",
          "x": 276.68,
          "y": 241.81,
          "width": 76.87,
          "height": 76.87
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/27968/42137",
          "x": 353.55,
          "y": 241.81,
          "width": 76.87,
          "height": 76.87
        }
      ]
    },
    "link": "/tracks/lusail",
    "center": {
      "lat": 25.49,
      "lon": 51.454
    },
    "fia": {
      "name": "QATAR - LUSAIL",
      "country": "QAT",
      "grade": "1",
      "lengthKm": 5.418,
      "pole": "Left",
      "expiry": "2026-10-04",
      "widthM": 12
    },
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 13,
      "minM": 9,
      "maxM": 18,
      "rangeM": 9
    },
    "source": {
      "geometry": "OpenStreetMap raceway ways",
      "osmName": null,
      "wayCount": 1,
      "osmLengthKm": 5.426,
      "quality": "matched",
      "generatedOn": "2026-06-06"
    }
  },
  {
    "id": "abu-dhabi",
    "name": "阿布扎比",
    "fullName": "亚斯码头赛道",
    "type": "现代赛道 / 长直道 / 低速段",
    "summary": "看两条长直道后的刹车区，以及低速段牵引。",
    "corners": [
      {
        "id": "T5",
        "note": "长直道前出口。",
        "x": 237.7,
        "y": 215.1,
        "labelX": 247.7,
        "labelY": 207.1
      },
      {
        "id": "T6",
        "note": "直道后重刹。",
        "x": 192.7,
        "y": 164.5,
        "labelX": 202.7,
        "labelY": 156.5
      },
      {
        "id": "T9",
        "note": "长直道后主要攻防。",
        "x": 196.9,
        "y": 95,
        "labelX": 206.9,
        "labelY": 87
      }
    ],
    "path": "M156.0 110.8 L154.5 115.4 L153.6 118.4 L152.6 122.6 L151.4 126.7 L141.6 156.1 L141.5 156.4 L141.5 156.7 L141.6 157.1 L141.8 157.4 L142.0 157.6 L142.3 157.8 L142.7 157.9 L143.0 157.9 L148.4 157.0 L148.7 157.0 L149.0 157.0 L149.4 157.1 L149.7 157.3 L149.9 157.5 L150.0 157.8 L150.1 158.1 L150.2 158.5 L151.7 163.8 L152.1 165.7 L153.3 169.8 L154.5 174.1 L155.2 175.5 L156.0 176.9 L157.7 179.6 L159.7 182.2 L162.4 185.1 L164.5 187.0 L167.8 189.8 L176.2 196.3 L187.4 205.1 L191.9 208.5 L195.2 211.0 L197.2 212.3 L202.0 215.5 L204.8 217.1 L208.9 219.0 L227.8 227.4 L228.5 227.6 L229.2 227.8 L230.1 228.0 L230.7 228.0 L231.3 228.0 L232.2 227.9 L233.1 227.6 L234.0 227.2 L235.0 226.7 L235.5 226.2 L236.2 225.6 L236.7 225.0 L237.3 224.0 L237.7 223.2 L238.0 222.2 L238.2 221.3 L238.5 219.7 L238.5 218.6 L238.4 217.4 L238.1 216.1 L237.7 215.1 L237.1 213.9 L236.5 213.1 L235.8 212.3 L235.5 211.9 L234.9 211.4 L234.0 210.7 L233.2 210.2 L232.3 209.8 L231.0 209.4 L229.7 209.2 L228.5 209.1 L225.1 208.8 L209.0 207.7 L207.4 207.5 L206.4 207.4 L205.7 207.3 L204.7 207.1 L204.2 206.9 L203.6 206.6 L192.4 199.5 L191.9 199.0 L191.4 198.6 L190.9 197.8 L190.4 197.0 L189.9 195.7 L187.2 183.4 L187.1 183.1 L187.2 182.8 L187.3 182.5 L187.5 182.3 L187.7 182.2 L188.3 182.0 L198.1 180.7 L198.6 180.5 L199.2 180.3 L199.8 180.0 L200.2 179.6 L200.6 179.1 L201.1 178.3 L201.3 177.9 L201.4 177.5 L201.5 176.8 L201.5 172.5 M201.5 172.5 L201.3 169.1 M201.3 169.1 L201.3 168.2 L201.2 167.8 L201.0 167.3 L200.9 166.8 L200.5 166.3 L200.3 165.9 L200.2 165.7 L199.9 165.5 L199.4 165.3 L199.2 165.2 L198.8 165.1 L198.4 164.9 L197.9 164.8 L197.0 164.7 L196.0 164.5 L194.8 164.5 L193.6 164.5 L192.7 164.5 L190.7 164.6 L172.3 167.3 L171.2 167.4 L169.7 167.4 L168.8 167.3 L167.4 167.0 L166.4 166.7 L165.2 166.2 L164.6 165.9 L163.9 165.2 L158.5 155.8 L155.4 150.7 L155.2 150.2 L154.9 149.4 L154.7 148.5 L154.5 147.1 L154.4 146.1 L154.4 145.6 L154.4 145.2 L154.4 144.8 L154.5 144.5 L154.6 144.0 L154.7 143.6 L154.9 143.3 L155.1 142.9 L155.4 142.6 L155.8 142.4 L156.2 142.2 L157.3 142.0 L169.9 140.2 L173.1 139.7 L186.2 137.8 L217.7 133.3 L218.2 133.2 L218.7 133.0 L219.2 132.7 L219.7 132.2 L220.2 131.6 L220.6 130.8 L220.9 130.1 L221.0 129.6 L221.1 129.0 L221.0 128.4 L220.8 127.5 L217.1 112.1 L216.1 107.5 L215.9 106.6 L215.6 105.7 L215.4 105.1 L215.1 104.5 L214.8 104.1 L214.5 103.6 L213.7 102.9 L212.8 102.3 L211.8 101.8 L210.8 101.4 L203.4 99.1 L202.2 98.6 L201.1 98.1 L200.3 97.6 L199.4 97.1 L198.6 96.5 L197.8 95.8 L196.9 95.0 L196.3 94.4 L195.7 93.7 L195.0 92.8 L194.3 91.9 L193.2 90.4 L192.8 89.3 L192.6 88.2 L192.3 86.6 L192.3 85.9 L192.2 85.3 L192.2 83.8 L192.4 82.2 L192.7 80.9 L193.5 77.9 M193.5 77.9 L194.6 74.3 L194.9 72.9 L195.4 70.8 L195.8 68.6 L196.1 66.4 L196.2 66.0 L196.3 64.2 L196.4 62.0 L196.3 59.8 L196.2 57.6 L195.9 55.4 L195.0 48.2 L194.0 39.0 L193.6 36.2 L192.5 27.3 L192.2 25.8 L191.9 24.8 L191.6 24.4 L191.3 23.9 L191.0 23.5 L190.5 23.1 L190.0 22.6 L189.5 22.4 L188.6 22.1 L188.2 22.0 L187.6 22.0 L187.1 22.0 L186.7 22.2 L186.2 22.4 L185.7 22.6 L185.4 22.9 L185.0 23.3 L184.6 23.9 L184.3 24.4 L183.8 25.3 L182.2 30.3 L181.9 31.2 L180.0 38.8 L178.4 44.0 L173.9 57.5 L166.8 78.6 M166.8 78.6 L166.2 80.5 L165.2 83.4 L160.2 98.1 L157.2 106.9 M157.2 106.9 L156.0 110.8",
    "satellite": {
      "provider": "Esri World Imagery",
      "attribution": "Source: Esri, Vantor, Earthstar Geographics, and the GIS User Community",
      "zoom": 16,
      "tiles": [
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28169/42705",
          "x": -51.78,
          "y": -24.6,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28169/42706",
          "x": 14.72,
          "y": -24.6,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28169/42707",
          "x": 81.22,
          "y": -24.6,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28169/42708",
          "x": 147.72,
          "y": -24.6,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28169/42709",
          "x": 214.22,
          "y": -24.6,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28169/42710",
          "x": 280.72,
          "y": -24.6,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28169/42711",
          "x": 347.22,
          "y": -24.6,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28170/42705",
          "x": -51.78,
          "y": 41.9,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28170/42706",
          "x": 14.72,
          "y": 41.9,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28170/42707",
          "x": 81.22,
          "y": 41.9,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28170/42708",
          "x": 147.72,
          "y": 41.9,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28170/42709",
          "x": 214.22,
          "y": 41.9,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28170/42710",
          "x": 280.72,
          "y": 41.9,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28170/42711",
          "x": 347.22,
          "y": 41.9,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28171/42705",
          "x": -51.78,
          "y": 108.4,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28171/42706",
          "x": 14.72,
          "y": 108.4,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28171/42707",
          "x": 81.22,
          "y": 108.4,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28171/42708",
          "x": 147.72,
          "y": 108.4,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28171/42709",
          "x": 214.22,
          "y": 108.4,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28171/42710",
          "x": 280.72,
          "y": 108.4,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28171/42711",
          "x": 347.22,
          "y": 108.4,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28172/42705",
          "x": -51.78,
          "y": 174.9,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28172/42706",
          "x": 14.72,
          "y": 174.9,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28172/42707",
          "x": 81.22,
          "y": 174.9,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28172/42708",
          "x": 147.72,
          "y": 174.9,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28172/42709",
          "x": 214.22,
          "y": 174.9,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28172/42710",
          "x": 280.72,
          "y": 174.9,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28172/42711",
          "x": 347.22,
          "y": 174.9,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28173/42705",
          "x": -51.78,
          "y": 241.4,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28173/42706",
          "x": 14.72,
          "y": 241.4,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28173/42707",
          "x": 81.22,
          "y": 241.4,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28173/42708",
          "x": 147.72,
          "y": 241.4,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28173/42709",
          "x": 214.22,
          "y": 241.4,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28173/42710",
          "x": 280.72,
          "y": 241.4,
          "width": 66.5,
          "height": 66.5
        },
        {
          "url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/16/28173/42711",
          "x": 347.22,
          "y": 241.4,
          "width": 66.5,
          "height": 66.5
        }
      ]
    },
    "link": "/tracks/abu-dhabi",
    "center": {
      "lat": 24.4672,
      "lon": 54.6031
    },
    "fia": {
      "name": "ABU DHABI - YAS MARINA",
      "country": "UAE",
      "grade": "1",
      "lengthKm": 5.281,
      "pole": "Right",
      "expiry": "2027-12-03",
      "widthM": 12
    },
    "elevation": {
      "dataset": "SRTM30m",
      "meanM": 0,
      "minM": -4,
      "maxM": 4,
      "rangeM": 8
    },
    "source": {
      "geometry": "OpenStreetMap relation 11378665",
      "osmName": "Yas Marina Circuit",
      "wayCount": 6,
      "osmLengthKm": 5.297,
      "quality": "matched",
      "generatedOn": "2026-06-06"
    }
  }
]
