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

export type TrackProfileSample = {
  distanceKm: number
  lat: number
  lon: number
  x: number
  y: number
  elevationM: number | null
}

export type TrackElevationProfile = {
  dataset: string
  samples: TrackProfileSample[]
}

export type TrackInfo = {
  id: TrackId
  name: string
  fullName: string
  type: string
  summary: string
  path: string
  satellite: TrackSatelliteLayer
  profile: TrackElevationProfile
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": 26.02956,
          "lon": 50.51745,
          "x": 243.84,
          "y": 161.68,
          "elevationM": 24
        },
        {
          "distanceKm": 0.081,
          "lat": 26.029114,
          "lon": 50.516825,
          "x": 233.16,
          "y": 170.17,
          "elevationM": 24
        },
        {
          "distanceKm": 0.162,
          "lat": 26.028758,
          "lon": 50.516119,
          "x": 221.09,
          "y": 176.95,
          "elevationM": 22
        },
        {
          "distanceKm": 0.243,
          "lat": 26.028402,
          "lon": 50.515413,
          "x": 209.02,
          "y": 183.72,
          "elevationM": 22
        },
        {
          "distanceKm": 0.324,
          "lat": 26.028046,
          "lon": 50.514707,
          "x": 196.95,
          "y": 190.5,
          "elevationM": 23
        },
        {
          "distanceKm": 0.404,
          "lat": 26.02769,
          "lon": 50.514001,
          "x": 184.88,
          "y": 197.28,
          "elevationM": 20
        },
        {
          "distanceKm": 0.485,
          "lat": 26.027333,
          "lon": 50.513296,
          "x": 172.81,
          "y": 204.06,
          "elevationM": 18
        },
        {
          "distanceKm": 0.566,
          "lat": 26.026977,
          "lon": 50.51259,
          "x": 160.74,
          "y": 210.84,
          "elevationM": 14
        },
        {
          "distanceKm": 0.647,
          "lat": 26.026621,
          "lon": 50.511883,
          "x": 148.67,
          "y": 217.6,
          "elevationM": 13
        },
        {
          "distanceKm": 0.728,
          "lat": 26.026266,
          "lon": 50.511177,
          "x": 136.59,
          "y": 224.37,
          "elevationM": 14
        },
        {
          "distanceKm": 0.809,
          "lat": 26.02624,
          "lon": 50.510507,
          "x": 125.13,
          "y": 224.87,
          "elevationM": 13
        },
        {
          "distanceKm": 0.89,
          "lat": 26.026925,
          "lon": 50.510255,
          "x": 120.83,
          "y": 211.82,
          "elevationM": 12
        },
        {
          "distanceKm": 0.971,
          "lat": 26.027652,
          "lon": 50.510285,
          "x": 121.34,
          "y": 198,
          "elevationM": 11
        },
        {
          "distanceKm": 1.052,
          "lat": 26.028379,
          "lon": 50.510313,
          "x": 121.82,
          "y": 184.16,
          "elevationM": 10
        },
        {
          "distanceKm": 1.132,
          "lat": 26.029106,
          "lon": 50.510346,
          "x": 122.37,
          "y": 170.33,
          "elevationM": 8
        },
        {
          "distanceKm": 1.213,
          "lat": 26.029833,
          "lon": 50.510378,
          "x": 122.92,
          "y": 156.5,
          "elevationM": 10
        },
        {
          "distanceKm": 1.294,
          "lat": 26.03056,
          "lon": 50.510409,
          "x": 123.46,
          "y": 142.67,
          "elevationM": 6
        },
        {
          "distanceKm": 1.375,
          "lat": 26.031286,
          "lon": 50.510441,
          "x": 124.01,
          "y": 128.84,
          "elevationM": 7
        },
        {
          "distanceKm": 1.456,
          "lat": 26.032013,
          "lon": 50.510473,
          "x": 124.55,
          "y": 115,
          "elevationM": 6
        },
        {
          "distanceKm": 1.537,
          "lat": 26.03274,
          "lon": 50.510505,
          "x": 125.1,
          "y": 101.17,
          "elevationM": 9
        },
        {
          "distanceKm": 1.618,
          "lat": 26.033467,
          "lon": 50.510537,
          "x": 125.64,
          "y": 87.34,
          "elevationM": 8
        },
        {
          "distanceKm": 1.699,
          "lat": 26.034194,
          "lon": 50.510568,
          "x": 126.18,
          "y": 73.51,
          "elevationM": 8
        },
        {
          "distanceKm": 1.78,
          "lat": 26.034921,
          "lon": 50.5106,
          "x": 126.73,
          "y": 59.68,
          "elevationM": 9
        },
        {
          "distanceKm": 1.86,
          "lat": 26.035648,
          "lon": 50.510633,
          "x": 127.28,
          "y": 45.84,
          "elevationM": 8
        },
        {
          "distanceKm": 1.941,
          "lat": 26.036375,
          "lon": 50.510666,
          "x": 127.86,
          "y": 32.01,
          "elevationM": 7
        },
        {
          "distanceKm": 2.022,
          "lat": 26.036838,
          "lon": 50.510942,
          "x": 132.58,
          "y": 23.2,
          "elevationM": 8
        },
        {
          "distanceKm": 2.103,
          "lat": 26.036352,
          "lon": 50.511541,
          "x": 142.81,
          "y": 32.44,
          "elevationM": 11
        },
        {
          "distanceKm": 2.184,
          "lat": 26.036548,
          "lon": 50.512312,
          "x": 156,
          "y": 28.72,
          "elevationM": 12
        },
        {
          "distanceKm": 2.265,
          "lat": 26.036558,
          "lon": 50.513108,
          "x": 169.6,
          "y": 28.53,
          "elevationM": 14
        },
        {
          "distanceKm": 2.346,
          "lat": 26.036421,
          "lon": 50.513903,
          "x": 183.2,
          "y": 31.13,
          "elevationM": 16
        },
        {
          "distanceKm": 2.427,
          "lat": 26.036285,
          "lon": 50.514698,
          "x": 196.8,
          "y": 33.72,
          "elevationM": 19
        },
        {
          "distanceKm": 2.508,
          "lat": 26.036151,
          "lon": 50.515494,
          "x": 210.4,
          "y": 36.27,
          "elevationM": 21
        },
        {
          "distanceKm": 2.588,
          "lat": 26.036018,
          "lon": 50.51629,
          "x": 224.01,
          "y": 38.81,
          "elevationM": 23
        },
        {
          "distanceKm": 2.669,
          "lat": 26.035881,
          "lon": 50.517085,
          "x": 237.61,
          "y": 41.4,
          "elevationM": 24
        },
        {
          "distanceKm": 2.75,
          "lat": 26.035743,
          "lon": 50.51788,
          "x": 251.2,
          "y": 44.03,
          "elevationM": 25
        },
        {
          "distanceKm": 2.831,
          "lat": 26.035323,
          "lon": 50.518316,
          "x": 258.66,
          "y": 52.02,
          "elevationM": 23
        },
        {
          "distanceKm": 2.912,
          "lat": 26.034842,
          "lon": 50.517739,
          "x": 248.79,
          "y": 61.17,
          "elevationM": 27
        },
        {
          "distanceKm": 2.993,
          "lat": 26.034363,
          "lon": 50.517131,
          "x": 238.39,
          "y": 70.3,
          "elevationM": 27
        },
        {
          "distanceKm": 3.074,
          "lat": 26.033824,
          "lon": 50.516588,
          "x": 229.11,
          "y": 80.54,
          "elevationM": 25
        },
        {
          "distanceKm": 3.155,
          "lat": 26.033185,
          "lon": 50.516212,
          "x": 222.68,
          "y": 92.7,
          "elevationM": 24
        },
        {
          "distanceKm": 3.236,
          "lat": 26.033087,
          "lon": 50.515448,
          "x": 209.62,
          "y": 94.57,
          "elevationM": 23
        },
        {
          "distanceKm": 3.316,
          "lat": 26.032958,
          "lon": 50.51469,
          "x": 196.65,
          "y": 97.02,
          "elevationM": 20
        },
        {
          "distanceKm": 3.397,
          "lat": 26.032397,
          "lon": 50.514177,
          "x": 187.89,
          "y": 107.71,
          "elevationM": 17
        },
        {
          "distanceKm": 3.478,
          "lat": 26.03182,
          "lon": 50.513684,
          "x": 179.46,
          "y": 118.69,
          "elevationM": 17
        },
        {
          "distanceKm": 3.559,
          "lat": 26.031596,
          "lon": 50.513105,
          "x": 169.55,
          "y": 122.94,
          "elevationM": 15
        },
        {
          "distanceKm": 3.64,
          "lat": 26.032315,
          "lon": 50.513143,
          "x": 170.21,
          "y": 109.26,
          "elevationM": 15
        },
        {
          "distanceKm": 3.721,
          "lat": 26.033034,
          "lon": 50.513272,
          "x": 172.41,
          "y": 95.59,
          "elevationM": 14
        },
        {
          "distanceKm": 3.802,
          "lat": 26.033752,
          "lon": 50.513399,
          "x": 174.58,
          "y": 81.92,
          "elevationM": 15
        },
        {
          "distanceKm": 3.883,
          "lat": 26.034471,
          "lon": 50.513519,
          "x": 176.63,
          "y": 68.23,
          "elevationM": 14
        },
        {
          "distanceKm": 3.964,
          "lat": 26.035092,
          "lon": 50.513161,
          "x": 170.52,
          "y": 56.41,
          "elevationM": 14
        },
        {
          "distanceKm": 4.044,
          "lat": 26.035049,
          "lon": 50.512679,
          "x": 162.27,
          "y": 57.23,
          "elevationM": 13
        },
        {
          "distanceKm": 4.125,
          "lat": 26.034328,
          "lon": 50.512571,
          "x": 160.43,
          "y": 70.95,
          "elevationM": 13
        },
        {
          "distanceKm": 4.206,
          "lat": 26.033604,
          "lon": 50.512505,
          "x": 159.29,
          "y": 84.74,
          "elevationM": 13
        },
        {
          "distanceKm": 4.287,
          "lat": 26.032877,
          "lon": 50.512474,
          "x": 158.77,
          "y": 98.58,
          "elevationM": 13
        },
        {
          "distanceKm": 4.368,
          "lat": 26.03215,
          "lon": 50.512446,
          "x": 158.28,
          "y": 112.41,
          "elevationM": 14
        },
        {
          "distanceKm": 4.449,
          "lat": 26.031423,
          "lon": 50.512413,
          "x": 157.72,
          "y": 126.24,
          "elevationM": 13
        },
        {
          "distanceKm": 4.53,
          "lat": 26.030696,
          "lon": 50.512379,
          "x": 157.14,
          "y": 140.07,
          "elevationM": 12
        },
        {
          "distanceKm": 4.611,
          "lat": 26.029969,
          "lon": 50.512346,
          "x": 156.58,
          "y": 153.9,
          "elevationM": 11
        },
        {
          "distanceKm": 4.692,
          "lat": 26.029242,
          "lon": 50.512314,
          "x": 156.03,
          "y": 167.74,
          "elevationM": 13
        },
        {
          "distanceKm": 4.773,
          "lat": 26.028739,
          "lon": 50.512731,
          "x": 163.17,
          "y": 177.3,
          "elevationM": 14
        },
        {
          "distanceKm": 4.853,
          "lat": 26.028883,
          "lon": 50.513511,
          "x": 176.5,
          "y": 174.57,
          "elevationM": 17
        },
        {
          "distanceKm": 4.934,
          "lat": 26.029393,
          "lon": 50.514076,
          "x": 186.15,
          "y": 164.86,
          "elevationM": 17
        },
        {
          "distanceKm": 5.015,
          "lat": 26.030067,
          "lon": 50.514378,
          "x": 191.32,
          "y": 152.05,
          "elevationM": 19
        },
        {
          "distanceKm": 5.096,
          "lat": 26.030615,
          "lon": 50.514885,
          "x": 199.99,
          "y": 141.61,
          "elevationM": 22
        },
        {
          "distanceKm": 5.177,
          "lat": 26.030772,
          "lon": 50.515661,
          "x": 213.27,
          "y": 138.63,
          "elevationM": 25
        },
        {
          "distanceKm": 5.258,
          "lat": 26.030514,
          "lon": 50.516413,
          "x": 226.11,
          "y": 143.53,
          "elevationM": 28
        },
        {
          "distanceKm": 5.339,
          "lat": 26.03018,
          "lon": 50.51713,
          "x": 238.37,
          "y": 149.89,
          "elevationM": 28
        },
        {
          "distanceKm": 5.42,
          "lat": 26.02956,
          "lon": 50.51745,
          "x": 243.84,
          "y": 161.68,
          "elevationM": 24
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
      "meanM": 16,
      "minM": 6,
      "maxM": 28,
      "rangeM": 22
    },
    "source": {
      "geometry": "OpenStreetMap relation 284538",
      "osmName": "حلبة البحرين الدولية",
      "wayCount": 3,
      "osmLengthKm": 5.42,
      "quality": "matched",
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": 21.638979,
          "lon": 39.102442,
          "x": 180.26,
          "y": 114.59,
          "elevationM": 3
        },
        {
          "distanceKm": 0.092,
          "lat": 21.639663,
          "lon": 39.102,
          "x": 176.84,
          "y": 108.89,
          "elevationM": 6
        },
        {
          "distanceKm": 0.183,
          "lat": 21.640429,
          "lon": 39.102249,
          "x": 178.77,
          "y": 102.51,
          "elevationM": 3
        },
        {
          "distanceKm": 0.275,
          "lat": 21.64121,
          "lon": 39.102402,
          "x": 179.95,
          "y": 96.01,
          "elevationM": 1
        },
        {
          "distanceKm": 0.367,
          "lat": 21.641913,
          "lon": 39.101997,
          "x": 176.82,
          "y": 90.15,
          "elevationM": 5
        },
        {
          "distanceKm": 0.459,
          "lat": 21.642595,
          "lon": 39.101624,
          "x": 173.92,
          "y": 84.47,
          "elevationM": 1
        },
        {
          "distanceKm": 0.55,
          "lat": 21.643413,
          "lon": 39.101687,
          "x": 174.42,
          "y": 77.66,
          "elevationM": 1
        },
        {
          "distanceKm": 0.642,
          "lat": 21.643862,
          "lon": 39.102394,
          "x": 179.89,
          "y": 73.92,
          "elevationM": 3
        },
        {
          "distanceKm": 0.734,
          "lat": 21.64458,
          "lon": 39.102731,
          "x": 182.5,
          "y": 67.94,
          "elevationM": -8
        },
        {
          "distanceKm": 0.826,
          "lat": 21.645364,
          "lon": 39.102998,
          "x": 184.56,
          "y": 61.41,
          "elevationM": 3
        },
        {
          "distanceKm": 0.917,
          "lat": 21.646177,
          "lon": 39.103123,
          "x": 185.53,
          "y": 54.64,
          "elevationM": 5
        },
        {
          "distanceKm": 1.009,
          "lat": 21.647002,
          "lon": 39.103118,
          "x": 185.49,
          "y": 47.77,
          "elevationM": 5
        },
        {
          "distanceKm": 1.101,
          "lat": 21.647825,
          "lon": 39.103071,
          "x": 185.13,
          "y": 40.91,
          "elevationM": 6
        },
        {
          "distanceKm": 1.193,
          "lat": 21.648649,
          "lon": 39.103025,
          "x": 184.78,
          "y": 34.05,
          "elevationM": 7
        },
        {
          "distanceKm": 1.284,
          "lat": 21.649473,
          "lon": 39.102979,
          "x": 184.42,
          "y": 27.18,
          "elevationM": 6
        },
        {
          "distanceKm": 1.376,
          "lat": 21.650085,
          "lon": 39.102512,
          "x": 180.8,
          "y": 22.09,
          "elevationM": 8
        },
        {
          "distanceKm": 1.468,
          "lat": 21.649676,
          "lon": 39.101845,
          "x": 175.63,
          "y": 25.49,
          "elevationM": 5
        },
        {
          "distanceKm": 1.56,
          "lat": 21.648873,
          "lon": 39.101907,
          "x": 176.11,
          "y": 32.18,
          "elevationM": 6
        },
        {
          "distanceKm": 1.651,
          "lat": 21.648168,
          "lon": 39.102366,
          "x": 179.67,
          "y": 38.06,
          "elevationM": 4
        },
        {
          "distanceKm": 1.743,
          "lat": 21.647369,
          "lon": 39.102558,
          "x": 181.16,
          "y": 44.71,
          "elevationM": 5
        },
        {
          "distanceKm": 1.835,
          "lat": 21.646554,
          "lon": 39.102456,
          "x": 180.36,
          "y": 51.5,
          "elevationM": 8
        },
        {
          "distanceKm": 1.927,
          "lat": 21.645805,
          "lon": 39.102088,
          "x": 177.52,
          "y": 57.74,
          "elevationM": 4
        },
        {
          "distanceKm": 2.018,
          "lat": 21.644996,
          "lon": 39.101954,
          "x": 176.48,
          "y": 64.48,
          "elevationM": 0
        },
        {
          "distanceKm": 2.11,
          "lat": 21.644516,
          "lon": 39.101324,
          "x": 171.6,
          "y": 68.48,
          "elevationM": 3
        },
        {
          "distanceKm": 2.202,
          "lat": 21.643843,
          "lon": 39.100891,
          "x": 168.25,
          "y": 74.08,
          "elevationM": 4
        },
        {
          "distanceKm": 2.294,
          "lat": 21.643021,
          "lon": 39.100884,
          "x": 168.2,
          "y": 80.92,
          "elevationM": 0
        },
        {
          "distanceKm": 2.385,
          "lat": 21.642228,
          "lon": 39.101117,
          "x": 170,
          "y": 87.53,
          "elevationM": 6
        },
        {
          "distanceKm": 2.477,
          "lat": 21.641465,
          "lon": 39.101454,
          "x": 172.61,
          "y": 93.88,
          "elevationM": 7
        },
        {
          "distanceKm": 2.569,
          "lat": 21.640666,
          "lon": 39.101662,
          "x": 174.22,
          "y": 100.54,
          "elevationM": 8
        },
        {
          "distanceKm": 2.66,
          "lat": 21.639842,
          "lon": 39.101657,
          "x": 174.18,
          "y": 107.4,
          "elevationM": 4
        },
        {
          "distanceKm": 2.752,
          "lat": 21.639031,
          "lon": 39.1018,
          "x": 175.29,
          "y": 114.16,
          "elevationM": 3
        },
        {
          "distanceKm": 2.844,
          "lat": 21.638296,
          "lon": 39.102198,
          "x": 178.37,
          "y": 120.27,
          "elevationM": 4
        },
        {
          "distanceKm": 2.936,
          "lat": 21.637568,
          "lon": 39.102612,
          "x": 181.58,
          "y": 126.34,
          "elevationM": 3
        },
        {
          "distanceKm": 3.027,
          "lat": 21.636766,
          "lon": 39.102814,
          "x": 183.14,
          "y": 133.02,
          "elevationM": 3
        },
        {
          "distanceKm": 3.119,
          "lat": 21.629136,
          "lon": 39.102745,
          "x": 182.61,
          "y": 196.57,
          "elevationM": 6
        },
        {
          "distanceKm": 3.211,
          "lat": 21.62835,
          "lon": 39.103015,
          "x": 184.7,
          "y": 203.11,
          "elevationM": 3
        },
        {
          "distanceKm": 3.303,
          "lat": 21.627609,
          "lon": 39.103402,
          "x": 187.69,
          "y": 209.28,
          "elevationM": 5
        },
        {
          "distanceKm": 3.394,
          "lat": 21.626932,
          "lon": 39.103908,
          "x": 191.61,
          "y": 214.92,
          "elevationM": 6
        },
        {
          "distanceKm": 3.486,
          "lat": 21.626352,
          "lon": 39.104537,
          "x": 196.48,
          "y": 219.75,
          "elevationM": 6
        },
        {
          "distanceKm": 3.578,
          "lat": 21.625868,
          "lon": 39.105255,
          "x": 202.03,
          "y": 223.79,
          "elevationM": 5
        },
        {
          "distanceKm": 3.67,
          "lat": 21.625401,
          "lon": 39.105986,
          "x": 207.7,
          "y": 227.67,
          "elevationM": 6
        },
        {
          "distanceKm": 3.761,
          "lat": 21.625821,
          "lon": 39.106524,
          "x": 211.86,
          "y": 224.17,
          "elevationM": 7
        },
        {
          "distanceKm": 3.853,
          "lat": 21.62662,
          "lon": 39.106304,
          "x": 210.16,
          "y": 217.52,
          "elevationM": 5
        },
        {
          "distanceKm": 3.945,
          "lat": 21.627431,
          "lon": 39.106143,
          "x": 208.91,
          "y": 210.76,
          "elevationM": 8
        },
        {
          "distanceKm": 4.037,
          "lat": 21.636198,
          "lon": 39.103307,
          "x": 186.96,
          "y": 137.75,
          "elevationM": 6
        },
        {
          "distanceKm": 4.128,
          "lat": 21.635796,
          "lon": 39.102828,
          "x": 183.24,
          "y": 141.1,
          "elevationM": 5
        },
        {
          "distanceKm": 4.22,
          "lat": 21.634989,
          "lon": 39.102651,
          "x": 181.88,
          "y": 147.82,
          "elevationM": 0
        },
        {
          "distanceKm": 4.312,
          "lat": 21.634329,
          "lon": 39.103078,
          "x": 185.18,
          "y": 153.31,
          "elevationM": 2
        },
        {
          "distanceKm": 4.404,
          "lat": 21.633606,
          "lon": 39.103454,
          "x": 188.09,
          "y": 159.34,
          "elevationM": 4
        },
        {
          "distanceKm": 4.495,
          "lat": 21.632799,
          "lon": 39.103464,
          "x": 188.17,
          "y": 166.06,
          "elevationM": 5
        },
        {
          "distanceKm": 4.587,
          "lat": 21.632066,
          "lon": 39.103057,
          "x": 185.02,
          "y": 172.16,
          "elevationM": 7
        },
        {
          "distanceKm": 4.679,
          "lat": 21.631322,
          "lon": 39.102677,
          "x": 182.07,
          "y": 178.36,
          "elevationM": 5
        },
        {
          "distanceKm": 4.771,
          "lat": 21.630515,
          "lon": 39.102508,
          "x": 180.77,
          "y": 185.08,
          "elevationM": 6
        },
        {
          "distanceKm": 4.862,
          "lat": 21.629699,
          "lon": 39.102609,
          "x": 181.55,
          "y": 191.88,
          "elevationM": 5
        },
        {
          "distanceKm": 4.954,
          "lat": 21.631012,
          "lon": 39.105091,
          "x": 200.76,
          "y": 180.94,
          "elevationM": 5
        },
        {
          "distanceKm": 5.046,
          "lat": 21.631791,
          "lon": 39.104798,
          "x": 198.5,
          "y": 174.46,
          "elevationM": 7
        },
        {
          "distanceKm": 5.137,
          "lat": 21.632572,
          "lon": 39.104511,
          "x": 196.28,
          "y": 167.95,
          "elevationM": 2
        },
        {
          "distanceKm": 5.229,
          "lat": 21.633353,
          "lon": 39.104226,
          "x": 194.07,
          "y": 161.45,
          "elevationM": 4
        },
        {
          "distanceKm": 5.321,
          "lat": 21.634134,
          "lon": 39.103939,
          "x": 191.85,
          "y": 154.94,
          "elevationM": 3
        },
        {
          "distanceKm": 5.413,
          "lat": 21.634824,
          "lon": 39.103556,
          "x": 188.88,
          "y": 149.19,
          "elevationM": 4
        },
        {
          "distanceKm": 5.504,
          "lat": 21.635123,
          "lon": 39.103043,
          "x": 184.91,
          "y": 146.71,
          "elevationM": 2
        },
        {
          "distanceKm": 5.596,
          "lat": 21.635913,
          "lon": 39.103292,
          "x": 186.84,
          "y": 140.13,
          "elevationM": 5
        },
        {
          "distanceKm": 5.688,
          "lat": 21.628326,
          "lon": 39.105942,
          "x": 207.35,
          "y": 203.31,
          "elevationM": 4
        },
        {
          "distanceKm": 5.78,
          "lat": 21.62913,
          "lon": 39.105746,
          "x": 205.84,
          "y": 196.61,
          "elevationM": 5
        },
        {
          "distanceKm": 5.871,
          "lat": 21.62992,
          "lon": 39.105491,
          "x": 203.87,
          "y": 190.03,
          "elevationM": 4
        },
        {
          "distanceKm": 5.963,
          "lat": 21.636665,
          "lon": 39.10324,
          "x": 186.44,
          "y": 133.87,
          "elevationM": 6
        },
        {
          "distanceKm": 6.055,
          "lat": 21.637478,
          "lon": 39.10309,
          "x": 185.27,
          "y": 127.09,
          "elevationM": 4
        },
        {
          "distanceKm": 6.147,
          "lat": 21.638291,
          "lon": 39.102943,
          "x": 184.14,
          "y": 120.32,
          "elevationM": 5
        },
        {
          "distanceKm": 6.238,
          "lat": 21.638921,
          "lon": 39.102572,
          "x": 181.26,
          "y": 115.07,
          "elevationM": 3
        },
        {
          "distanceKm": 6.33,
          "lat": 21.627516,
          "lon": 39.106118,
          "x": 208.72,
          "y": 210.06,
          "elevationM": 8
        },
        {
          "distanceKm": 6.422,
          "lat": 21.630163,
          "lon": 39.105453,
          "x": 203.57,
          "y": 188.01,
          "elevationM": 5
        },
        {
          "distanceKm": 6.514,
          "lat": 21.630425,
          "lon": 39.105311,
          "x": 202.47,
          "y": 185.83,
          "elevationM": 5
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
      "minM": -8,
      "maxM": 8,
      "rangeM": 16
    },
    "source": {
      "geometry": "OpenStreetMap raceway ways",
      "osmName": "حلبة كورنيش جدة",
      "wayCount": 13,
      "osmLengthKm": 6.514,
      "quality": "close",
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": -37.848971,
          "lon": 144.967631,
          "x": 161.86,
          "y": 164.5,
          "elevationM": 7
        },
        {
          "distanceKm": 0.082,
          "lat": -37.848446,
          "lon": 144.96698,
          "x": 155.23,
          "y": 157.74,
          "elevationM": 8
        },
        {
          "distanceKm": 0.163,
          "lat": -37.847933,
          "lon": 144.966315,
          "x": 148.46,
          "y": 151.12,
          "elevationM": 5
        },
        {
          "distanceKm": 0.245,
          "lat": -37.847319,
          "lon": 144.96614,
          "x": 146.68,
          "y": 143.2,
          "elevationM": 5
        },
        {
          "distanceKm": 0.327,
          "lat": -37.846599,
          "lon": 144.966214,
          "x": 147.43,
          "y": 133.91,
          "elevationM": 9
        },
        {
          "distanceKm": 0.408,
          "lat": -37.845995,
          "lon": 144.965714,
          "x": 142.35,
          "y": 126.12,
          "elevationM": 5
        },
        {
          "distanceKm": 0.49,
          "lat": -37.845493,
          "lon": 144.965034,
          "x": 135.43,
          "y": 119.66,
          "elevationM": 8
        },
        {
          "distanceKm": 0.572,
          "lat": -37.844962,
          "lon": 144.964392,
          "x": 128.89,
          "y": 112.82,
          "elevationM": 8
        },
        {
          "distanceKm": 0.653,
          "lat": -37.844403,
          "lon": 144.963791,
          "x": 122.76,
          "y": 105.6,
          "elevationM": 10
        },
        {
          "distanceKm": 0.735,
          "lat": -37.84382,
          "lon": 144.963225,
          "x": 117.01,
          "y": 98.08,
          "elevationM": 11
        },
        {
          "distanceKm": 0.817,
          "lat": -37.843193,
          "lon": 144.96274,
          "x": 112.07,
          "y": 90.01,
          "elevationM": 10
        },
        {
          "distanceKm": 0.898,
          "lat": -37.842551,
          "lon": 144.962288,
          "x": 107.47,
          "y": 81.73,
          "elevationM": 11
        },
        {
          "distanceKm": 0.98,
          "lat": -37.842055,
          "lon": 144.962523,
          "x": 109.86,
          "y": 75.33,
          "elevationM": 9
        },
        {
          "distanceKm": 1.062,
          "lat": -37.841911,
          "lon": 144.963434,
          "x": 119.13,
          "y": 73.47,
          "elevationM": 3
        },
        {
          "distanceKm": 1.143,
          "lat": -37.841307,
          "lon": 144.963747,
          "x": 122.32,
          "y": 65.69,
          "elevationM": 6
        },
        {
          "distanceKm": 1.225,
          "lat": -37.840573,
          "lon": 144.96371,
          "x": 121.95,
          "y": 56.23,
          "elevationM": 13
        },
        {
          "distanceKm": 1.307,
          "lat": -37.839852,
          "lon": 144.963728,
          "x": 122.13,
          "y": 46.93,
          "elevationM": 9
        },
        {
          "distanceKm": 1.388,
          "lat": -37.839385,
          "lon": 144.964439,
          "x": 129.37,
          "y": 40.91,
          "elevationM": 12
        },
        {
          "distanceKm": 1.47,
          "lat": -37.838961,
          "lon": 144.965198,
          "x": 137.1,
          "y": 35.45,
          "elevationM": 17
        },
        {
          "distanceKm": 1.552,
          "lat": -37.838664,
          "lon": 144.966037,
          "x": 145.63,
          "y": 31.62,
          "elevationM": 11
        },
        {
          "distanceKm": 1.633,
          "lat": -37.838385,
          "lon": 144.966897,
          "x": 154.39,
          "y": 28.02,
          "elevationM": 11
        },
        {
          "distanceKm": 1.715,
          "lat": -37.838032,
          "lon": 144.967711,
          "x": 162.68,
          "y": 23.47,
          "elevationM": 11
        },
        {
          "distanceKm": 1.797,
          "lat": -37.838298,
          "lon": 144.968381,
          "x": 169.5,
          "y": 26.89,
          "elevationM": 9
        },
        {
          "distanceKm": 1.878,
          "lat": -37.838525,
          "lon": 144.969248,
          "x": 178.33,
          "y": 29.83,
          "elevationM": 11
        },
        {
          "distanceKm": 1.96,
          "lat": -37.838665,
          "lon": 144.970155,
          "x": 187.56,
          "y": 31.63,
          "elevationM": 6
        },
        {
          "distanceKm": 2.042,
          "lat": -37.839077,
          "lon": 144.970915,
          "x": 195.3,
          "y": 36.94,
          "elevationM": 4
        },
        {
          "distanceKm": 2.123,
          "lat": -37.8397,
          "lon": 144.971395,
          "x": 200.18,
          "y": 44.97,
          "elevationM": 11
        },
        {
          "distanceKm": 2.205,
          "lat": -37.840417,
          "lon": 144.971592,
          "x": 202.19,
          "y": 54.22,
          "elevationM": 2
        },
        {
          "distanceKm": 2.287,
          "lat": -37.841139,
          "lon": 144.971756,
          "x": 203.87,
          "y": 63.53,
          "elevationM": 11
        },
        {
          "distanceKm": 2.368,
          "lat": -37.841869,
          "lon": 144.971697,
          "x": 203.27,
          "y": 72.93,
          "elevationM": 14
        },
        {
          "distanceKm": 2.45,
          "lat": -37.842564,
          "lon": 144.9714,
          "x": 200.24,
          "y": 81.89,
          "elevationM": 0
        },
        {
          "distanceKm": 2.532,
          "lat": -37.843245,
          "lon": 144.971052,
          "x": 196.7,
          "y": 90.67,
          "elevationM": 9
        },
        {
          "distanceKm": 2.613,
          "lat": -37.843938,
          "lon": 144.970745,
          "x": 193.57,
          "y": 99.6,
          "elevationM": 10
        },
        {
          "distanceKm": 2.695,
          "lat": -37.844661,
          "lon": 144.970607,
          "x": 192.17,
          "y": 108.94,
          "elevationM": 9
        },
        {
          "distanceKm": 2.777,
          "lat": -37.845392,
          "lon": 144.970688,
          "x": 192.99,
          "y": 118.35,
          "elevationM": 6
        },
        {
          "distanceKm": 2.858,
          "lat": -37.84609,
          "lon": 144.97097,
          "x": 195.86,
          "y": 127.35,
          "elevationM": 14
        },
        {
          "distanceKm": 2.94,
          "lat": -37.846721,
          "lon": 144.971443,
          "x": 200.67,
          "y": 135.49,
          "elevationM": 5
        },
        {
          "distanceKm": 3.022,
          "lat": -37.847254,
          "lon": 144.972078,
          "x": 207.14,
          "y": 142.36,
          "elevationM": 7
        },
        {
          "distanceKm": 3.103,
          "lat": -37.847737,
          "lon": 144.972779,
          "x": 214.28,
          "y": 148.59,
          "elevationM": 12
        },
        {
          "distanceKm": 3.185,
          "lat": -37.848035,
          "lon": 144.974651,
          "x": 233.34,
          "y": 152.44,
          "elevationM": 12
        },
        {
          "distanceKm": 3.267,
          "lat": -37.848137,
          "lon": 144.97373,
          "x": 223.96,
          "y": 153.74,
          "elevationM": 9
        },
        {
          "distanceKm": 3.348,
          "lat": -37.848326,
          "lon": 144.975237,
          "x": 239.3,
          "y": 156.18,
          "elevationM": 12
        },
        {
          "distanceKm": 3.43,
          "lat": -37.848804,
          "lon": 144.975943,
          "x": 246.49,
          "y": 162.35,
          "elevationM": 14
        },
        {
          "distanceKm": 3.512,
          "lat": -37.849275,
          "lon": 144.976656,
          "x": 253.75,
          "y": 168.42,
          "elevationM": 10
        },
        {
          "distanceKm": 3.593,
          "lat": -37.849812,
          "lon": 144.977287,
          "x": 260.17,
          "y": 175.35,
          "elevationM": 11
        },
        {
          "distanceKm": 3.675,
          "lat": -37.850474,
          "lon": 144.977682,
          "x": 264.2,
          "y": 183.88,
          "elevationM": 11
        },
        {
          "distanceKm": 3.757,
          "lat": -37.851178,
          "lon": 144.97795,
          "x": 266.92,
          "y": 192.95,
          "elevationM": 8
        },
        {
          "distanceKm": 3.838,
          "lat": -37.852583,
          "lon": 144.978456,
          "x": 272.07,
          "y": 211.08,
          "elevationM": 7
        },
        {
          "distanceKm": 3.92,
          "lat": -37.851877,
          "lon": 144.978203,
          "x": 269.5,
          "y": 201.97,
          "elevationM": 9
        },
        {
          "distanceKm": 4.002,
          "lat": -37.852678,
          "lon": 144.978486,
          "x": 272.38,
          "y": 212.3,
          "elevationM": 7
        },
        {
          "distanceKm": 4.083,
          "lat": -37.853523,
          "lon": 144.977823,
          "x": 265.63,
          "y": 223.19,
          "elevationM": 13
        },
        {
          "distanceKm": 4.165,
          "lat": -37.853696,
          "lon": 144.97692,
          "x": 256.43,
          "y": 225.42,
          "elevationM": 11
        },
        {
          "distanceKm": 4.247,
          "lat": -37.853895,
          "lon": 144.976026,
          "x": 247.33,
          "y": 227.99,
          "elevationM": 6
        },
        {
          "distanceKm": 4.328,
          "lat": -37.853525,
          "lon": 144.975283,
          "x": 239.77,
          "y": 223.22,
          "elevationM": 14
        },
        {
          "distanceKm": 4.41,
          "lat": -37.852882,
          "lon": 144.974835,
          "x": 235.2,
          "y": 214.93,
          "elevationM": 6
        },
        {
          "distanceKm": 4.492,
          "lat": -37.85225,
          "lon": 144.974362,
          "x": 230.39,
          "y": 206.78,
          "elevationM": 8
        },
        {
          "distanceKm": 4.573,
          "lat": -37.852354,
          "lon": 144.973701,
          "x": 223.67,
          "y": 208.12,
          "elevationM": 7
        },
        {
          "distanceKm": 4.655,
          "lat": -37.852848,
          "lon": 144.97303,
          "x": 216.83,
          "y": 214.49,
          "elevationM": 7
        },
        {
          "distanceKm": 4.737,
          "lat": -37.852629,
          "lon": 144.972206,
          "x": 208.45,
          "y": 211.66,
          "elevationM": 6
        },
        {
          "distanceKm": 4.818,
          "lat": -37.852105,
          "lon": 144.971554,
          "x": 201.8,
          "y": 204.91,
          "elevationM": 6
        },
        {
          "distanceKm": 4.9,
          "lat": -37.851583,
          "lon": 144.9709,
          "x": 195.15,
          "y": 198.18,
          "elevationM": 9
        },
        {
          "distanceKm": 4.982,
          "lat": -37.851061,
          "lon": 144.970245,
          "x": 188.48,
          "y": 191.45,
          "elevationM": 10
        },
        {
          "distanceKm": 5.063,
          "lat": -37.850539,
          "lon": 144.969591,
          "x": 181.82,
          "y": 184.72,
          "elevationM": 9
        },
        {
          "distanceKm": 5.145,
          "lat": -37.850018,
          "lon": 144.968936,
          "x": 175.15,
          "y": 177.99,
          "elevationM": 11
        },
        {
          "distanceKm": 5.227,
          "lat": -37.849494,
          "lon": 144.968284,
          "x": 168.52,
          "y": 171.24,
          "elevationM": 8
        },
        {
          "distanceKm": 5.308,
          "lat": -37.848971,
          "lon": 144.967631,
          "x": 161.86,
          "y": 164.5,
          "elevationM": 7
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
      "minM": 0,
      "maxM": 17,
      "rangeM": 17
    },
    "source": {
      "geometry": "OpenStreetMap relation 280443",
      "osmName": "Albert Park Circuit",
      "wayCount": 30,
      "osmLengthKm": 5.308,
      "quality": "matched",
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": 31.337665,
          "lon": 121.222328,
          "x": 206.37,
          "y": 188.95,
          "elevationM": 7
        },
        {
          "distanceKm": 0.081,
          "lat": 31.337497,
          "lon": 121.221493,
          "x": 191.2,
          "y": 192.52,
          "elevationM": 5
        },
        {
          "distanceKm": 0.163,
          "lat": 31.337329,
          "lon": 121.220658,
          "x": 176.03,
          "y": 196.09,
          "elevationM": 4
        },
        {
          "distanceKm": 0.244,
          "lat": 31.337161,
          "lon": 121.219822,
          "x": 160.86,
          "y": 199.67,
          "elevationM": 4
        },
        {
          "distanceKm": 0.326,
          "lat": 31.336993,
          "lon": 121.218987,
          "x": 145.68,
          "y": 203.24,
          "elevationM": 5
        },
        {
          "distanceKm": 0.407,
          "lat": 31.336827,
          "lon": 121.218152,
          "x": 130.5,
          "y": 206.78,
          "elevationM": 2
        },
        {
          "distanceKm": 0.489,
          "lat": 31.336662,
          "lon": 121.217316,
          "x": 115.32,
          "y": 210.28,
          "elevationM": 3
        },
        {
          "distanceKm": 0.57,
          "lat": 31.33685,
          "lon": 121.216512,
          "x": 100.72,
          "y": 206.27,
          "elevationM": 3
        },
        {
          "distanceKm": 0.652,
          "lat": 31.337483,
          "lon": 121.216147,
          "x": 94.07,
          "y": 192.82,
          "elevationM": 4
        },
        {
          "distanceKm": 0.733,
          "lat": 31.338062,
          "lon": 121.216564,
          "x": 101.66,
          "y": 180.5,
          "elevationM": 3
        },
        {
          "distanceKm": 0.815,
          "lat": 31.337749,
          "lon": 121.21717,
          "x": 112.66,
          "y": 187.17,
          "elevationM": 1
        },
        {
          "distanceKm": 0.896,
          "lat": 31.337132,
          "lon": 121.217307,
          "x": 115.15,
          "y": 200.28,
          "elevationM": 3
        },
        {
          "distanceKm": 0.978,
          "lat": 31.337578,
          "lon": 121.217857,
          "x": 125.15,
          "y": 190.8,
          "elevationM": 3
        },
        {
          "distanceKm": 1.059,
          "lat": 31.338249,
          "lon": 121.217641,
          "x": 121.23,
          "y": 176.53,
          "elevationM": 2
        },
        {
          "distanceKm": 1.141,
          "lat": 31.338804,
          "lon": 121.217082,
          "x": 111.06,
          "y": 164.72,
          "elevationM": 5
        },
        {
          "distanceKm": 1.222,
          "lat": 31.339358,
          "lon": 121.21652,
          "x": 100.86,
          "y": 152.94,
          "elevationM": 4
        },
        {
          "distanceKm": 1.304,
          "lat": 31.339905,
          "lon": 121.215949,
          "x": 90.48,
          "y": 141.3,
          "elevationM": 4
        },
        {
          "distanceKm": 1.385,
          "lat": 31.340551,
          "lon": 121.215566,
          "x": 83.52,
          "y": 127.57,
          "elevationM": 5
        },
        {
          "distanceKm": 1.467,
          "lat": 31.341243,
          "lon": 121.215286,
          "x": 78.44,
          "y": 112.83,
          "elevationM": 4
        },
        {
          "distanceKm": 1.548,
          "lat": 31.341936,
          "lon": 121.215007,
          "x": 73.36,
          "y": 98.1,
          "elevationM": 5
        },
        {
          "distanceKm": 1.63,
          "lat": 31.342119,
          "lon": 121.215478,
          "x": 81.93,
          "y": 94.2,
          "elevationM": 5
        },
        {
          "distanceKm": 1.711,
          "lat": 31.341604,
          "lon": 121.216082,
          "x": 92.9,
          "y": 105.17,
          "elevationM": 4
        },
        {
          "distanceKm": 1.793,
          "lat": 31.340971,
          "lon": 121.216514,
          "x": 100.76,
          "y": 118.62,
          "elevationM": 3
        },
        {
          "distanceKm": 1.874,
          "lat": 31.340337,
          "lon": 121.216945,
          "x": 108.58,
          "y": 132.11,
          "elevationM": 3
        },
        {
          "distanceKm": 1.956,
          "lat": 31.33976,
          "lon": 121.21746,
          "x": 117.93,
          "y": 144.39,
          "elevationM": 3
        },
        {
          "distanceKm": 2.037,
          "lat": 31.339534,
          "lon": 121.218258,
          "x": 132.44,
          "y": 149.19,
          "elevationM": 4
        },
        {
          "distanceKm": 2.118,
          "lat": 31.339771,
          "lon": 121.219052,
          "x": 146.86,
          "y": 144.14,
          "elevationM": 2
        },
        {
          "distanceKm": 2.2,
          "lat": 31.340364,
          "lon": 121.219538,
          "x": 155.68,
          "y": 131.54,
          "elevationM": 5
        },
        {
          "distanceKm": 2.281,
          "lat": 31.341012,
          "lon": 121.219933,
          "x": 162.86,
          "y": 117.76,
          "elevationM": 6
        },
        {
          "distanceKm": 2.363,
          "lat": 31.341254,
          "lon": 121.220704,
          "x": 176.87,
          "y": 112.61,
          "elevationM": 4
        },
        {
          "distanceKm": 2.444,
          "lat": 31.340841,
          "lon": 121.221372,
          "x": 189.01,
          "y": 121.39,
          "elevationM": 4
        },
        {
          "distanceKm": 2.526,
          "lat": 31.340187,
          "lon": 121.221756,
          "x": 195.98,
          "y": 135.3,
          "elevationM": 4
        },
        {
          "distanceKm": 2.607,
          "lat": 31.340439,
          "lon": 121.222428,
          "x": 208.2,
          "y": 129.95,
          "elevationM": 4
        },
        {
          "distanceKm": 2.689,
          "lat": 31.341079,
          "lon": 121.222581,
          "x": 210.97,
          "y": 116.33,
          "elevationM": 4
        },
        {
          "distanceKm": 2.77,
          "lat": 31.341701,
          "lon": 121.222129,
          "x": 202.76,
          "y": 103.09,
          "elevationM": 4
        },
        {
          "distanceKm": 2.852,
          "lat": 31.342329,
          "lon": 121.221686,
          "x": 194.71,
          "y": 89.74,
          "elevationM": 3
        },
        {
          "distanceKm": 2.933,
          "lat": 31.342956,
          "lon": 121.221242,
          "x": 186.64,
          "y": 76.4,
          "elevationM": 5
        },
        {
          "distanceKm": 3.015,
          "lat": 31.343582,
          "lon": 121.220796,
          "x": 178.54,
          "y": 63.09,
          "elevationM": 4
        },
        {
          "distanceKm": 3.096,
          "lat": 31.344208,
          "lon": 121.22035,
          "x": 170.44,
          "y": 49.77,
          "elevationM": 1
        },
        {
          "distanceKm": 3.178,
          "lat": 31.344257,
          "lon": 121.21976,
          "x": 159.71,
          "y": 48.74,
          "elevationM": 5
        },
        {
          "distanceKm": 3.259,
          "lat": 31.344269,
          "lon": 121.219062,
          "x": 147.05,
          "y": 48.46,
          "elevationM": 2
        },
        {
          "distanceKm": 3.341,
          "lat": 31.344962,
          "lon": 121.218891,
          "x": 143.94,
          "y": 33.73,
          "elevationM": 5
        },
        {
          "distanceKm": 3.422,
          "lat": 31.345465,
          "lon": 121.21946,
          "x": 154.28,
          "y": 23.03,
          "elevationM": 4
        },
        {
          "distanceKm": 3.504,
          "lat": 31.345438,
          "lon": 121.220301,
          "x": 169.55,
          "y": 23.6,
          "elevationM": 4
        },
        {
          "distanceKm": 3.585,
          "lat": 31.344968,
          "lon": 121.22094,
          "x": 181.15,
          "y": 33.61,
          "elevationM": 3
        },
        {
          "distanceKm": 3.667,
          "lat": 31.344356,
          "lon": 121.221412,
          "x": 189.72,
          "y": 46.63,
          "elevationM": 7
        },
        {
          "distanceKm": 3.748,
          "lat": 31.343744,
          "lon": 121.221883,
          "x": 198.29,
          "y": 59.65,
          "elevationM": 4
        },
        {
          "distanceKm": 3.83,
          "lat": 31.343131,
          "lon": 121.222355,
          "x": 206.86,
          "y": 72.67,
          "elevationM": 4
        },
        {
          "distanceKm": 3.911,
          "lat": 31.342519,
          "lon": 121.222826,
          "x": 215.42,
          "y": 85.69,
          "elevationM": 5
        },
        {
          "distanceKm": 3.992,
          "lat": 31.341907,
          "lon": 121.223298,
          "x": 223.99,
          "y": 98.72,
          "elevationM": 3
        },
        {
          "distanceKm": 4.074,
          "lat": 31.341295,
          "lon": 121.22377,
          "x": 232.57,
          "y": 111.73,
          "elevationM": 5
        },
        {
          "distanceKm": 4.155,
          "lat": 31.340684,
          "lon": 121.224243,
          "x": 241.16,
          "y": 124.73,
          "elevationM": 5
        },
        {
          "distanceKm": 4.237,
          "lat": 31.340073,
          "lon": 121.224716,
          "x": 249.76,
          "y": 137.74,
          "elevationM": 7
        },
        {
          "distanceKm": 4.318,
          "lat": 31.33946,
          "lon": 121.225187,
          "x": 258.32,
          "y": 150.76,
          "elevationM": 4
        },
        {
          "distanceKm": 4.4,
          "lat": 31.338848,
          "lon": 121.225658,
          "x": 266.88,
          "y": 163.79,
          "elevationM": 4
        },
        {
          "distanceKm": 4.481,
          "lat": 31.338236,
          "lon": 121.22613,
          "x": 275.45,
          "y": 176.81,
          "elevationM": 4
        },
        {
          "distanceKm": 4.563,
          "lat": 31.337625,
          "lon": 121.226603,
          "x": 284.05,
          "y": 189.81,
          "elevationM": 4
        },
        {
          "distanceKm": 4.644,
          "lat": 31.337013,
          "lon": 121.227077,
          "x": 292.64,
          "y": 202.81,
          "elevationM": 6
        },
        {
          "distanceKm": 4.726,
          "lat": 31.336402,
          "lon": 121.22755,
          "x": 301.24,
          "y": 215.81,
          "elevationM": 3
        },
        {
          "distanceKm": 4.807,
          "lat": 31.335833,
          "lon": 121.227763,
          "x": 305.11,
          "y": 227.91,
          "elevationM": 4
        },
        {
          "distanceKm": 4.889,
          "lat": 31.336214,
          "lon": 121.227038,
          "x": 291.94,
          "y": 219.81,
          "elevationM": 3
        },
        {
          "distanceKm": 4.97,
          "lat": 31.336805,
          "lon": 121.226531,
          "x": 282.74,
          "y": 207.23,
          "elevationM": 5
        },
        {
          "distanceKm": 5.052,
          "lat": 31.337401,
          "lon": 121.226031,
          "x": 273.65,
          "y": 194.57,
          "elevationM": 6
        },
        {
          "distanceKm": 5.133,
          "lat": 31.337996,
          "lon": 121.22553,
          "x": 264.55,
          "y": 181.92,
          "elevationM": 4
        },
        {
          "distanceKm": 5.215,
          "lat": 31.338185,
          "lon": 121.224828,
          "x": 251.8,
          "y": 177.9,
          "elevationM": 4
        },
        {
          "distanceKm": 5.296,
          "lat": 31.338006,
          "lon": 121.223996,
          "x": 236.68,
          "y": 181.69,
          "elevationM": 5
        },
        {
          "distanceKm": 5.378,
          "lat": 31.337832,
          "lon": 121.223163,
          "x": 221.54,
          "y": 185.39,
          "elevationM": 6
        },
        {
          "distanceKm": 5.459,
          "lat": 31.337665,
          "lon": 121.222328,
          "x": 206.37,
          "y": 188.95,
          "elevationM": 7
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
      "maxM": 7,
      "rangeM": 6
    },
    "source": {
      "geometry": "OpenStreetMap relation 2094941",
      "osmName": "Shanghai International Circuit",
      "wayCount": 1,
      "osmLengthKm": 5.459,
      "quality": "open-data",
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": 34.840687,
          "lon": 136.542941,
          "x": 350.58,
          "y": 181.76,
          "elevationM": 18
        },
        {
          "distanceKm": 0.082,
          "lat": 34.840065,
          "lon": 136.543398,
          "x": 357.72,
          "y": 193.61,
          "elevationM": 18
        },
        {
          "distanceKm": 0.164,
          "lat": 34.843967,
          "lon": 136.530634,
          "x": 158.22,
          "y": 119.31,
          "elevationM": 46
        },
        {
          "distanceKm": 0.245,
          "lat": 34.843917,
          "lon": 136.531504,
          "x": 171.81,
          "y": 120.25,
          "elevationM": 48
        },
        {
          "distanceKm": 0.327,
          "lat": 34.844193,
          "lon": 136.532332,
          "x": 184.75,
          "y": 114.99,
          "elevationM": 49
        },
        {
          "distanceKm": 0.409,
          "lat": 34.84463,
          "lon": 136.533051,
          "x": 195.98,
          "y": 106.67,
          "elevationM": 49
        },
        {
          "distanceKm": 0.491,
          "lat": 34.845131,
          "lon": 136.533707,
          "x": 206.24,
          "y": 97.13,
          "elevationM": 51
        },
        {
          "distanceKm": 0.572,
          "lat": 34.845629,
          "lon": 136.534367,
          "x": 216.55,
          "y": 87.65,
          "elevationM": 52
        },
        {
          "distanceKm": 0.654,
          "lat": 34.845791,
          "lon": 136.535111,
          "x": 228.19,
          "y": 84.57,
          "elevationM": 52
        },
        {
          "distanceKm": 0.736,
          "lat": 34.845906,
          "lon": 136.535844,
          "x": 239.64,
          "y": 82.37,
          "elevationM": 51
        },
        {
          "distanceKm": 0.818,
          "lat": 34.846085,
          "lon": 136.53669,
          "x": 252.87,
          "y": 78.97,
          "elevationM": 53
        },
        {
          "distanceKm": 0.9,
          "lat": 34.845859,
          "lon": 136.537533,
          "x": 266.05,
          "y": 83.27,
          "elevationM": 43
        },
        {
          "distanceKm": 0.981,
          "lat": 34.845389,
          "lon": 136.538218,
          "x": 276.75,
          "y": 92.23,
          "elevationM": 38
        },
        {
          "distanceKm": 1.063,
          "lat": 34.844829,
          "lon": 136.538799,
          "x": 285.83,
          "y": 102.89,
          "elevationM": 34
        },
        {
          "distanceKm": 1.145,
          "lat": 34.844262,
          "lon": 136.539369,
          "x": 294.74,
          "y": 113.7,
          "elevationM": 34
        },
        {
          "distanceKm": 1.227,
          "lat": 34.843694,
          "lon": 136.539939,
          "x": 303.65,
          "y": 124.5,
          "elevationM": 32
        },
        {
          "distanceKm": 1.309,
          "lat": 34.843127,
          "lon": 136.540509,
          "x": 312.56,
          "y": 135.31,
          "elevationM": 30
        },
        {
          "distanceKm": 1.39,
          "lat": 34.842559,
          "lon": 136.541079,
          "x": 321.47,
          "y": 146.12,
          "elevationM": 27
        },
        {
          "distanceKm": 1.472,
          "lat": 34.841989,
          "lon": 136.541646,
          "x": 330.33,
          "y": 156.97,
          "elevationM": 24
        },
        {
          "distanceKm": 1.554,
          "lat": 34.84142,
          "lon": 136.542213,
          "x": 339.19,
          "y": 167.82,
          "elevationM": 23
        },
        {
          "distanceKm": 1.636,
          "lat": 34.84085,
          "lon": 136.542779,
          "x": 348.05,
          "y": 178.67,
          "elevationM": 19
        },
        {
          "distanceKm": 1.717,
          "lat": 34.83906,
          "lon": 136.543017,
          "x": 351.76,
          "y": 212.76,
          "elevationM": 20
        },
        {
          "distanceKm": 1.799,
          "lat": 34.839089,
          "lon": 136.54219,
          "x": 338.84,
          "y": 212.2,
          "elevationM": 16
        },
        {
          "distanceKm": 1.881,
          "lat": 34.839697,
          "lon": 136.54169,
          "x": 331.02,
          "y": 200.63,
          "elevationM": 19
        },
        {
          "distanceKm": 1.963,
          "lat": 34.840315,
          "lon": 136.541204,
          "x": 323.43,
          "y": 188.86,
          "elevationM": 21
        },
        {
          "distanceKm": 2.045,
          "lat": 34.840699,
          "lon": 136.540487,
          "x": 312.21,
          "y": 181.54,
          "elevationM": 21
        },
        {
          "distanceKm": 2.126,
          "lat": 34.84445,
          "lon": 136.533818,
          "x": 207.98,
          "y": 110.11,
          "elevationM": 44
        },
        {
          "distanceKm": 2.208,
          "lat": 34.843892,
          "lon": 136.533234,
          "x": 198.85,
          "y": 120.73,
          "elevationM": 43
        },
        {
          "distanceKm": 2.29,
          "lat": 34.844775,
          "lon": 136.536773,
          "x": 254.17,
          "y": 103.91,
          "elevationM": 49
        },
        {
          "distanceKm": 2.372,
          "lat": 34.845031,
          "lon": 136.535937,
          "x": 241.1,
          "y": 99.04,
          "elevationM": 48
        },
        {
          "distanceKm": 2.453,
          "lat": 34.845024,
          "lon": 136.535045,
          "x": 227.16,
          "y": 99.18,
          "elevationM": 43
        },
        {
          "distanceKm": 2.535,
          "lat": 34.843886,
          "lon": 136.537336,
          "x": 262.97,
          "y": 120.84,
          "elevationM": 39
        },
        {
          "distanceKm": 2.617,
          "lat": 34.84457,
          "lon": 136.537128,
          "x": 259.72,
          "y": 107.82,
          "elevationM": 43
        },
        {
          "distanceKm": 2.699,
          "lat": 34.843677,
          "lon": 136.537248,
          "x": 261.59,
          "y": 124.82,
          "elevationM": 40
        },
        {
          "distanceKm": 2.781,
          "lat": 34.842536,
          "lon": 136.537298,
          "x": 262.37,
          "y": 146.56,
          "elevationM": 42
        },
        {
          "distanceKm": 2.862,
          "lat": 34.843203,
          "lon": 136.537037,
          "x": 258.3,
          "y": 133.85,
          "elevationM": 38
        },
        {
          "distanceKm": 2.944,
          "lat": 34.842008,
          "lon": 136.539077,
          "x": 290.18,
          "y": 156.61,
          "elevationM": 31
        },
        {
          "distanceKm": 3.026,
          "lat": 34.84132,
          "lon": 136.539367,
          "x": 294.72,
          "y": 169.72,
          "elevationM": 26
        },
        {
          "distanceKm": 3.108,
          "lat": 34.840783,
          "lon": 136.539813,
          "x": 301.68,
          "y": 179.95,
          "elevationM": 29
        },
        {
          "distanceKm": 3.189,
          "lat": 34.840703,
          "lon": 136.540297,
          "x": 309.24,
          "y": 181.46,
          "elevationM": 23
        },
        {
          "distanceKm": 3.271,
          "lat": 34.846866,
          "lon": 136.522688,
          "x": 34.01,
          "y": 64.09,
          "elevationM": 47
        },
        {
          "distanceKm": 3.353,
          "lat": 34.846425,
          "lon": 136.523405,
          "x": 45.21,
          "y": 72.49,
          "elevationM": 46
        },
        {
          "distanceKm": 3.435,
          "lat": 34.846031,
          "lon": 136.524161,
          "x": 57.04,
          "y": 80,
          "elevationM": 49
        },
        {
          "distanceKm": 3.517,
          "lat": 34.845683,
          "lon": 136.52495,
          "x": 69.37,
          "y": 86.63,
          "elevationM": 46
        },
        {
          "distanceKm": 3.598,
          "lat": 34.845383,
          "lon": 136.525768,
          "x": 82.15,
          "y": 92.35,
          "elevationM": 47
        },
        {
          "distanceKm": 3.68,
          "lat": 34.845135,
          "lon": 136.526612,
          "x": 95.34,
          "y": 97.06,
          "elevationM": 47
        },
        {
          "distanceKm": 3.762,
          "lat": 34.844889,
          "lon": 136.527457,
          "x": 108.55,
          "y": 101.74,
          "elevationM": 52
        },
        {
          "distanceKm": 3.844,
          "lat": 34.844644,
          "lon": 136.528301,
          "x": 121.75,
          "y": 106.42,
          "elevationM": 52
        },
        {
          "distanceKm": 3.926,
          "lat": 34.844399,
          "lon": 136.529146,
          "x": 134.96,
          "y": 111.08,
          "elevationM": 45
        },
        {
          "distanceKm": 4.007,
          "lat": 34.844154,
          "lon": 136.529991,
          "x": 148.16,
          "y": 115.75,
          "elevationM": 44
        },
        {
          "distanceKm": 4.089,
          "lat": 34.848123,
          "lon": 136.522076,
          "x": 24.44,
          "y": 40.16,
          "elevationM": 61
        },
        {
          "distanceKm": 4.171,
          "lat": 34.847433,
          "lon": 136.52203,
          "x": 23.72,
          "y": 53.3,
          "elevationM": 57
        },
        {
          "distanceKm": 4.253,
          "lat": 34.848206,
          "lon": 136.523685,
          "x": 49.59,
          "y": 38.58,
          "elevationM": 60
        },
        {
          "distanceKm": 4.334,
          "lat": 34.84758,
          "lon": 136.524067,
          "x": 55.56,
          "y": 50.49,
          "elevationM": 56
        },
        {
          "distanceKm": 4.416,
          "lat": 34.845386,
          "lon": 136.527246,
          "x": 105.26,
          "y": 92.29,
          "elevationM": 54
        },
        {
          "distanceKm": 4.498,
          "lat": 34.845561,
          "lon": 136.526378,
          "x": 91.69,
          "y": 88.95,
          "elevationM": 52
        },
        {
          "distanceKm": 4.58,
          "lat": 34.845854,
          "lon": 136.525559,
          "x": 78.88,
          "y": 83.36,
          "elevationM": 52
        },
        {
          "distanceKm": 4.662,
          "lat": 34.846323,
          "lon": 136.524875,
          "x": 68.19,
          "y": 74.43,
          "elevationM": 55
        },
        {
          "distanceKm": 4.743,
          "lat": 34.846944,
          "lon": 136.524401,
          "x": 60.78,
          "y": 62.61,
          "elevationM": 62
        },
        {
          "distanceKm": 4.825,
          "lat": 34.845989,
          "lon": 136.529337,
          "x": 137.94,
          "y": 80.79,
          "elevationM": 53
        },
        {
          "distanceKm": 4.907,
          "lat": 34.845512,
          "lon": 136.528665,
          "x": 127.44,
          "y": 89.88,
          "elevationM": 59
        },
        {
          "distanceKm": 4.989,
          "lat": 34.845369,
          "lon": 136.527794,
          "x": 113.83,
          "y": 92.6,
          "elevationM": 55
        },
        {
          "distanceKm": 5.07,
          "lat": 34.846673,
          "lon": 136.529881,
          "x": 146.45,
          "y": 67.77,
          "elevationM": 56
        },
        {
          "distanceKm": 5.152,
          "lat": 34.84697,
          "lon": 136.530649,
          "x": 158.44,
          "y": 62.11,
          "elevationM": 56
        },
        {
          "distanceKm": 5.234,
          "lat": 34.846583,
          "lon": 136.530448,
          "x": 155.31,
          "y": 69.48,
          "elevationM": 57
        },
        {
          "distanceKm": 5.316,
          "lat": 34.845831,
          "lon": 136.530184,
          "x": 151.17,
          "y": 83.8,
          "elevationM": 46
        },
        {
          "distanceKm": 5.398,
          "lat": 34.843406,
          "lon": 136.530754,
          "x": 160.09,
          "y": 129.99,
          "elevationM": 41
        },
        {
          "distanceKm": 5.479,
          "lat": 34.844127,
          "lon": 136.530581,
          "x": 157.39,
          "y": 116.25,
          "elevationM": 46
        },
        {
          "distanceKm": 5.561,
          "lat": 34.844849,
          "lon": 136.530408,
          "x": 154.68,
          "y": 102.51,
          "elevationM": 43
        },
        {
          "distanceKm": 5.643,
          "lat": 34.843136,
          "lon": 136.530992,
          "x": 163.8,
          "y": 135.13,
          "elevationM": 41
        },
        {
          "distanceKm": 5.725,
          "lat": 34.843201,
          "lon": 136.531987,
          "x": 179.36,
          "y": 133.89,
          "elevationM": 44
        },
        {
          "distanceKm": 5.807,
          "lat": 34.843137,
          "lon": 136.531094,
          "x": 165.41,
          "y": 135.11,
          "elevationM": 41
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
      "meanM": 42,
      "minM": 16,
      "maxM": 62,
      "rangeM": 46
    },
    "source": {
      "geometry": "OpenStreetMap relation 284570",
      "osmName": "鈴鹿サーキット",
      "wayCount": 40,
      "osmLengthKm": 5.807,
      "quality": "open-data",
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": 25.955784,
          "lon": -80.237134,
          "x": 193.13,
          "y": 177.8,
          "elevationM": 9
        },
        {
          "distanceKm": 0.087,
          "lat": 25.955826,
          "lon": -80.237997,
          "x": 173.81,
          "y": 176.76,
          "elevationM": 6
        },
        {
          "distanceKm": 0.174,
          "lat": 25.956162,
          "lon": -80.23878,
          "x": 156.3,
          "y": 168.4,
          "elevationM": 9
        },
        {
          "distanceKm": 0.261,
          "lat": 25.95657,
          "lon": -80.239523,
          "x": 139.65,
          "y": 158.24,
          "elevationM": 9
        },
        {
          "distanceKm": 0.348,
          "lat": 25.95698,
          "lon": -80.240266,
          "x": 123.02,
          "y": 148.04,
          "elevationM": 10
        },
        {
          "distanceKm": 0.436,
          "lat": 25.957231,
          "lon": -80.241068,
          "x": 105.07,
          "y": 141.79,
          "elevationM": 10
        },
        {
          "distanceKm": 0.523,
          "lat": 25.956886,
          "lon": -80.241833,
          "x": 87.94,
          "y": 150.36,
          "elevationM": 6
        },
        {
          "distanceKm": 0.61,
          "lat": 25.956898,
          "lon": -80.24266,
          "x": 69.42,
          "y": 150.08,
          "elevationM": 11
        },
        {
          "distanceKm": 0.697,
          "lat": 25.957375,
          "lon": -80.24334,
          "x": 54.2,
          "y": 138.19,
          "elevationM": 8
        },
        {
          "distanceKm": 0.784,
          "lat": 25.957299,
          "lon": -80.244186,
          "x": 35.26,
          "y": 140.08,
          "elevationM": 3
        },
        {
          "distanceKm": 0.871,
          "lat": 25.956736,
          "lon": -80.244749,
          "x": 22.67,
          "y": 154.11,
          "elevationM": 6
        },
        {
          "distanceKm": 0.958,
          "lat": 25.956108,
          "lon": -80.244441,
          "x": 29.56,
          "y": 169.75,
          "elevationM": 6
        },
        {
          "distanceKm": 1.045,
          "lat": 25.956134,
          "lon": -80.243573,
          "x": 48.98,
          "y": 169.1,
          "elevationM": 9
        },
        {
          "distanceKm": 1.132,
          "lat": 25.955963,
          "lon": -80.242723,
          "x": 68.01,
          "y": 173.34,
          "elevationM": 10
        },
        {
          "distanceKm": 1.219,
          "lat": 25.955881,
          "lon": -80.241861,
          "x": 87.32,
          "y": 175.39,
          "elevationM": 5
        },
        {
          "distanceKm": 1.307,
          "lat": 25.955903,
          "lon": -80.24099,
          "x": 106.82,
          "y": 174.83,
          "elevationM": 6
        },
        {
          "distanceKm": 1.394,
          "lat": 25.955926,
          "lon": -80.240119,
          "x": 126.32,
          "y": 174.28,
          "elevationM": 5
        },
        {
          "distanceKm": 1.481,
          "lat": 25.955892,
          "lon": -80.239253,
          "x": 145.7,
          "y": 175.13,
          "elevationM": 10
        },
        {
          "distanceKm": 1.568,
          "lat": 25.955641,
          "lon": -80.238428,
          "x": 164.18,
          "y": 181.36,
          "elevationM": 7
        },
        {
          "distanceKm": 1.655,
          "lat": 25.955392,
          "lon": -80.237602,
          "x": 182.65,
          "y": 187.58,
          "elevationM": 9
        },
        {
          "distanceKm": 1.742,
          "lat": 25.955711,
          "lon": -80.234948,
          "x": 242.08,
          "y": 179.62,
          "elevationM": 8
        },
        {
          "distanceKm": 1.829,
          "lat": 25.956189,
          "lon": -80.234365,
          "x": 255.14,
          "y": 167.72,
          "elevationM": 0
        },
        {
          "distanceKm": 1.916,
          "lat": 25.956955,
          "lon": -80.234288,
          "x": 256.85,
          "y": 148.66,
          "elevationM": 6
        },
        {
          "distanceKm": 2.003,
          "lat": 25.957737,
          "lon": -80.234256,
          "x": 257.56,
          "y": 129.18,
          "elevationM": 8
        },
        {
          "distanceKm": 2.09,
          "lat": 25.958498,
          "lon": -80.234079,
          "x": 261.54,
          "y": 110.22,
          "elevationM": 8
        },
        {
          "distanceKm": 2.178,
          "lat": 25.959282,
          "lon": -80.234094,
          "x": 261.19,
          "y": 90.72,
          "elevationM": 9
        },
        {
          "distanceKm": 2.265,
          "lat": 25.959934,
          "lon": -80.234398,
          "x": 254.39,
          "y": 74.47,
          "elevationM": 7
        },
        {
          "distanceKm": 2.352,
          "lat": 25.960203,
          "lon": -80.235216,
          "x": 236.08,
          "y": 67.77,
          "elevationM": 6
        },
        {
          "distanceKm": 2.439,
          "lat": 25.955622,
          "lon": -80.234473,
          "x": 252.72,
          "y": 181.84,
          "elevationM": 5
        },
        {
          "distanceKm": 2.526,
          "lat": 25.955895,
          "lon": -80.233656,
          "x": 270.99,
          "y": 175.03,
          "elevationM": 6
        },
        {
          "distanceKm": 2.613,
          "lat": 25.956168,
          "lon": -80.23284,
          "x": 289.28,
          "y": 168.24,
          "elevationM": 4
        },
        {
          "distanceKm": 2.7,
          "lat": 25.956485,
          "lon": -80.232043,
          "x": 307.11,
          "y": 160.36,
          "elevationM": 7
        },
        {
          "distanceKm": 2.787,
          "lat": 25.956872,
          "lon": -80.231287,
          "x": 324.05,
          "y": 150.71,
          "elevationM": 6
        },
        {
          "distanceKm": 2.874,
          "lat": 25.957345,
          "lon": -80.23063,
          "x": 338.76,
          "y": 138.95,
          "elevationM": 5
        },
        {
          "distanceKm": 2.961,
          "lat": 25.957866,
          "lon": -80.231236,
          "x": 325.17,
          "y": 125.97,
          "elevationM": 6
        },
        {
          "distanceKm": 3.049,
          "lat": 25.958461,
          "lon": -80.230909,
          "x": 332.5,
          "y": 111.16,
          "elevationM": 9
        },
        {
          "distanceKm": 3.136,
          "lat": 25.958589,
          "lon": -80.230083,
          "x": 350.99,
          "y": 107.97,
          "elevationM": 10
        },
        {
          "distanceKm": 3.223,
          "lat": 25.959196,
          "lon": -80.229944,
          "x": 354.11,
          "y": 92.86,
          "elevationM": 6
        },
        {
          "distanceKm": 3.31,
          "lat": 25.959934,
          "lon": -80.229818,
          "x": 356.93,
          "y": 74.46,
          "elevationM": 1
        },
        {
          "distanceKm": 3.397,
          "lat": 25.960141,
          "lon": -80.230545,
          "x": 340.65,
          "y": 69.33,
          "elevationM": 9
        },
        {
          "distanceKm": 3.484,
          "lat": 25.960174,
          "lon": -80.231415,
          "x": 321.17,
          "y": 68.49,
          "elevationM": 11
        },
        {
          "distanceKm": 3.571,
          "lat": 25.960208,
          "lon": -80.232286,
          "x": 301.68,
          "y": 67.65,
          "elevationM": 9
        },
        {
          "distanceKm": 3.658,
          "lat": 25.960242,
          "lon": -80.233156,
          "x": 282.19,
          "y": 66.81,
          "elevationM": 6
        },
        {
          "distanceKm": 3.745,
          "lat": 25.960276,
          "lon": -80.234027,
          "x": 262.71,
          "y": 65.97,
          "elevationM": 8
        },
        {
          "distanceKm": 3.832,
          "lat": 25.960286,
          "lon": -80.234897,
          "x": 243.21,
          "y": 65.7,
          "elevationM": 5
        },
        {
          "distanceKm": 3.92,
          "lat": 25.960475,
          "lon": -80.240042,
          "x": 128.03,
          "y": 60.99,
          "elevationM": 6
        },
        {
          "distanceKm": 4.007,
          "lat": 25.960513,
          "lon": -80.240913,
          "x": 108.54,
          "y": 60.06,
          "elevationM": 9
        },
        {
          "distanceKm": 4.094,
          "lat": 25.960546,
          "lon": -80.241783,
          "x": 89.06,
          "y": 59.24,
          "elevationM": 6
        },
        {
          "distanceKm": 4.181,
          "lat": 25.960576,
          "lon": -80.242654,
          "x": 69.57,
          "y": 58.5,
          "elevationM": 9
        },
        {
          "distanceKm": 4.268,
          "lat": 25.96015,
          "lon": -80.242748,
          "x": 67.46,
          "y": 69.1,
          "elevationM": 9
        },
        {
          "distanceKm": 4.355,
          "lat": 25.959743,
          "lon": -80.242009,
          "x": 84.01,
          "y": 79.23,
          "elevationM": 7
        },
        {
          "distanceKm": 4.442,
          "lat": 25.959915,
          "lon": -80.241184,
          "x": 102.48,
          "y": 74.94,
          "elevationM": 3
        },
        {
          "distanceKm": 4.529,
          "lat": 25.960208,
          "lon": -80.240377,
          "x": 120.53,
          "y": 67.64,
          "elevationM": 7
        },
        {
          "distanceKm": 4.616,
          "lat": 25.960184,
          "lon": -80.239515,
          "x": 139.84,
          "y": 68.25,
          "elevationM": 5
        },
        {
          "distanceKm": 4.704,
          "lat": 25.959828,
          "lon": -80.238744,
          "x": 157.09,
          "y": 77.12,
          "elevationM": 8
        },
        {
          "distanceKm": 4.791,
          "lat": 25.959422,
          "lon": -80.237999,
          "x": 173.78,
          "y": 87.22,
          "elevationM": 15
        },
        {
          "distanceKm": 4.878,
          "lat": 25.959018,
          "lon": -80.237253,
          "x": 190.48,
          "y": 97.29,
          "elevationM": 8
        },
        {
          "distanceKm": 4.965,
          "lat": 25.958612,
          "lon": -80.236508,
          "x": 207.16,
          "y": 107.4,
          "elevationM": 11
        },
        {
          "distanceKm": 5.052,
          "lat": 25.958204,
          "lon": -80.235764,
          "x": 223.82,
          "y": 117.55,
          "elevationM": 9
        },
        {
          "distanceKm": 5.139,
          "lat": 25.957671,
          "lon": -80.235378,
          "x": 232.44,
          "y": 130.82,
          "elevationM": 3
        },
        {
          "distanceKm": 5.226,
          "lat": 25.957113,
          "lon": -80.235961,
          "x": 219.4,
          "y": 144.72,
          "elevationM": 6
        },
        {
          "distanceKm": 5.313,
          "lat": 25.956349,
          "lon": -80.23602,
          "x": 218.09,
          "y": 163.74,
          "elevationM": 1
        },
        {
          "distanceKm": 5.4,
          "lat": 25.955892,
          "lon": -80.236705,
          "x": 202.73,
          "y": 175.12,
          "elevationM": 9
        },
        {
          "distanceKm": 5.487,
          "lat": 25.960459,
          "lon": -80.239606,
          "x": 137.79,
          "y": 61.41,
          "elevationM": 6
        },
        {
          "distanceKm": 5.575,
          "lat": 25.960301,
          "lon": -80.235892,
          "x": 220.94,
          "y": 65.33,
          "elevationM": 16
        },
        {
          "distanceKm": 5.662,
          "lat": 25.960339,
          "lon": -80.236762,
          "x": 201.46,
          "y": 64.4,
          "elevationM": 7
        },
        {
          "distanceKm": 5.749,
          "lat": 25.960376,
          "lon": -80.237633,
          "x": 181.98,
          "y": 63.47,
          "elevationM": 9
        },
        {
          "distanceKm": 5.836,
          "lat": 25.960413,
          "lon": -80.238503,
          "x": 162.49,
          "y": 62.54,
          "elevationM": 9
        },
        {
          "distanceKm": 5.923,
          "lat": 25.955254,
          "lon": -80.236866,
          "x": 199.14,
          "y": 191.01,
          "elevationM": 7
        },
        {
          "distanceKm": 6.01,
          "lat": 25.95525,
          "lon": -80.235997,
          "x": 218.6,
          "y": 191.11,
          "elevationM": 6
        },
        {
          "distanceKm": 6.097,
          "lat": 25.955405,
          "lon": -80.235145,
          "x": 237.66,
          "y": 187.23,
          "elevationM": 9
        },
        {
          "distanceKm": 6.184,
          "lat": 25.955273,
          "lon": -80.237056,
          "x": 194.88,
          "y": 190.52,
          "elevationM": 9
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
      "maxM": 16,
      "rangeM": 16
    },
    "source": {
      "geometry": "OpenStreetMap raceway ways",
      "osmName": "Miami International Autodrome",
      "wayCount": 10,
      "osmLengthKm": 6.184,
      "quality": "needs-check",
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": 44.344203,
          "lon": 11.721255,
          "x": 300.77,
          "y": 55.07,
          "elevationM": 39
        },
        {
          "distanceKm": 0.082,
          "lat": 44.344025,
          "lon": 11.72026,
          "x": 286.32,
          "y": 58.68,
          "elevationM": 39
        },
        {
          "distanceKm": 0.164,
          "lat": 44.344923,
          "lon": 11.723785,
          "x": 337.49,
          "y": 40.46,
          "elevationM": 39
        },
        {
          "distanceKm": 0.245,
          "lat": 44.344657,
          "lon": 11.722826,
          "x": 323.56,
          "y": 45.86,
          "elevationM": 38
        },
        {
          "distanceKm": 0.327,
          "lat": 44.344381,
          "lon": 11.721872,
          "x": 309.71,
          "y": 51.45,
          "elevationM": 39
        },
        {
          "distanceKm": 0.409,
          "lat": 44.344785,
          "lon": 11.724814,
          "x": 352.42,
          "y": 43.26,
          "elevationM": 39
        },
        {
          "distanceKm": 0.491,
          "lat": 44.34389,
          "lon": 11.725026,
          "x": 355.5,
          "y": 61.43,
          "elevationM": 42
        },
        {
          "distanceKm": 0.573,
          "lat": 44.344544,
          "lon": 11.724961,
          "x": 354.55,
          "y": 48.16,
          "elevationM": 39
        },
        {
          "distanceKm": 0.655,
          "lat": 44.343743,
          "lon": 11.72456,
          "x": 348.74,
          "y": 64.42,
          "elevationM": 44
        },
        {
          "distanceKm": 0.736,
          "lat": 44.343347,
          "lon": 11.723317,
          "x": 330.7,
          "y": 72.46,
          "elevationM": 55
        },
        {
          "distanceKm": 0.818,
          "lat": 44.342293,
          "lon": 11.721704,
          "x": 307.27,
          "y": 93.85,
          "elevationM": 64
        },
        {
          "distanceKm": 0.9,
          "lat": 44.342812,
          "lon": 11.722433,
          "x": 317.86,
          "y": 83.31,
          "elevationM": 61
        },
        {
          "distanceKm": 0.982,
          "lat": 44.341255,
          "lon": 11.719961,
          "x": 281.98,
          "y": 114.91,
          "elevationM": 67
        },
        {
          "distanceKm": 1.064,
          "lat": 44.341686,
          "lon": 11.720795,
          "x": 294.08,
          "y": 106.16,
          "elevationM": 64
        },
        {
          "distanceKm": 1.146,
          "lat": 44.340624,
          "lon": 11.717958,
          "x": 252.89,
          "y": 127.73,
          "elevationM": 68
        },
        {
          "distanceKm": 1.227,
          "lat": 44.340903,
          "lon": 11.71891,
          "x": 266.71,
          "y": 122.06,
          "elevationM": 68
        },
        {
          "distanceKm": 1.309,
          "lat": 44.340745,
          "lon": 11.717038,
          "x": 239.54,
          "y": 125.26,
          "elevationM": 70
        },
        {
          "distanceKm": 1.391,
          "lat": 44.340726,
          "lon": 11.712598,
          "x": 175.08,
          "y": 125.66,
          "elevationM": 61
        },
        {
          "distanceKm": 1.473,
          "lat": 44.340731,
          "lon": 11.713627,
          "x": 190.02,
          "y": 125.55,
          "elevationM": 64
        },
        {
          "distanceKm": 1.555,
          "lat": 44.340737,
          "lon": 11.714656,
          "x": 204.96,
          "y": 125.43,
          "elevationM": 67
        },
        {
          "distanceKm": 1.637,
          "lat": 44.340742,
          "lon": 11.715685,
          "x": 219.89,
          "y": 125.32,
          "elevationM": 69
        },
        {
          "distanceKm": 1.718,
          "lat": 44.340748,
          "lon": 11.716714,
          "x": 234.83,
          "y": 125.21,
          "elevationM": 70
        },
        {
          "distanceKm": 1.8,
          "lat": 44.33997,
          "lon": 11.710058,
          "x": 138.2,
          "y": 141,
          "elevationM": 55
        },
        {
          "distanceKm": 1.882,
          "lat": 44.340612,
          "lon": 11.71053,
          "x": 145.07,
          "y": 127.97,
          "elevationM": 48
        },
        {
          "distanceKm": 1.964,
          "lat": 44.338669,
          "lon": 11.710448,
          "x": 143.86,
          "y": 167.4,
          "elevationM": 61
        },
        {
          "distanceKm": 2.046,
          "lat": 44.339388,
          "lon": 11.710228,
          "x": 140.67,
          "y": 152.81,
          "elevationM": 58
        },
        {
          "distanceKm": 2.128,
          "lat": 44.337453,
          "lon": 11.710393,
          "x": 143.07,
          "y": 192.09,
          "elevationM": 71
        },
        {
          "distanceKm": 2.209,
          "lat": 44.338171,
          "lon": 11.710572,
          "x": 145.67,
          "y": 177.51,
          "elevationM": 65
        },
        {
          "distanceKm": 2.291,
          "lat": 44.33661,
          "lon": 11.709529,
          "x": 130.53,
          "y": 209.19,
          "elevationM": 70
        },
        {
          "distanceKm": 2.373,
          "lat": 44.33714,
          "lon": 11.710187,
          "x": 140.08,
          "y": 198.43,
          "elevationM": 71
        },
        {
          "distanceKm": 2.455,
          "lat": 44.336711,
          "lon": 11.708447,
          "x": 114.83,
          "y": 207.14,
          "elevationM": 73
        },
        {
          "distanceKm": 2.537,
          "lat": 44.336773,
          "lon": 11.705662,
          "x": 74.39,
          "y": 205.89,
          "elevationM": 62
        },
        {
          "distanceKm": 2.619,
          "lat": 44.336854,
          "lon": 11.706684,
          "x": 89.23,
          "y": 204.25,
          "elevationM": 72
        },
        {
          "distanceKm": 2.7,
          "lat": 44.336476,
          "lon": 11.702713,
          "x": 31.58,
          "y": 211.92,
          "elevationM": 54
        },
        {
          "distanceKm": 2.782,
          "lat": 44.336578,
          "lon": 11.703732,
          "x": 46.37,
          "y": 209.85,
          "elevationM": 56
        },
        {
          "distanceKm": 2.864,
          "lat": 44.336681,
          "lon": 11.70475,
          "x": 61.16,
          "y": 207.76,
          "elevationM": 60
        },
        {
          "distanceKm": 2.946,
          "lat": 44.336917,
          "lon": 11.702091,
          "x": 22.54,
          "y": 202.97,
          "elevationM": 51
        },
        {
          "distanceKm": 3.028,
          "lat": 44.33833,
          "lon": 11.704318,
          "x": 54.88,
          "y": 174.29,
          "elevationM": 45
        },
        {
          "distanceKm": 3.109,
          "lat": 44.337858,
          "lon": 11.703529,
          "x": 43.43,
          "y": 183.87,
          "elevationM": 44
        },
        {
          "distanceKm": 3.191,
          "lat": 44.33738,
          "lon": 11.702747,
          "x": 32.07,
          "y": 193.57,
          "elevationM": 49
        },
        {
          "distanceKm": 3.273,
          "lat": 44.338562,
          "lon": 11.704587,
          "x": 58.79,
          "y": 169.57,
          "elevationM": 43
        },
        {
          "distanceKm": 3.355,
          "lat": 44.339022,
          "lon": 11.704468,
          "x": 57.06,
          "y": 160.23,
          "elevationM": 43
        },
        {
          "distanceKm": 3.437,
          "lat": 44.342131,
          "lon": 11.705942,
          "x": 78.46,
          "y": 97.14,
          "elevationM": 43
        },
        {
          "distanceKm": 3.519,
          "lat": 44.341448,
          "lon": 11.705557,
          "x": 72.86,
          "y": 110.99,
          "elevationM": 43
        },
        {
          "distanceKm": 3.6,
          "lat": 44.340766,
          "lon": 11.705171,
          "x": 67.27,
          "y": 124.84,
          "elevationM": 43
        },
        {
          "distanceKm": 3.682,
          "lat": 44.340084,
          "lon": 11.704786,
          "x": 61.67,
          "y": 138.69,
          "elevationM": 44
        },
        {
          "distanceKm": 3.764,
          "lat": 44.343227,
          "lon": 11.707183,
          "x": 96.48,
          "y": 74.88,
          "elevationM": 43
        },
        {
          "distanceKm": 3.846,
          "lat": 44.342832,
          "lon": 11.706341,
          "x": 84.25,
          "y": 82.91,
          "elevationM": 41
        },
        {
          "distanceKm": 3.928,
          "lat": 44.343348,
          "lon": 11.70754,
          "x": 101.66,
          "y": 72.44,
          "elevationM": 42
        },
        {
          "distanceKm": 4.01,
          "lat": 44.344482,
          "lon": 11.711578,
          "x": 160.28,
          "y": 49.4,
          "elevationM": 47
        },
        {
          "distanceKm": 4.091,
          "lat": 44.34442,
          "lon": 11.710553,
          "x": 145.39,
          "y": 50.66,
          "elevationM": 45
        },
        {
          "distanceKm": 4.173,
          "lat": 44.344338,
          "lon": 11.709531,
          "x": 130.56,
          "y": 52.33,
          "elevationM": 43
        },
        {
          "distanceKm": 4.255,
          "lat": 44.344165,
          "lon": 11.708531,
          "x": 116.04,
          "y": 55.84,
          "elevationM": 42
        },
        {
          "distanceKm": 4.337,
          "lat": 44.344501,
          "lon": 11.713168,
          "x": 183.36,
          "y": 49.03,
          "elevationM": 42
        },
        {
          "distanceKm": 4.419,
          "lat": 44.344517,
          "lon": 11.712141,
          "x": 168.44,
          "y": 48.71,
          "elevationM": 44
        },
        {
          "distanceKm": 4.501,
          "lat": 44.344027,
          "lon": 11.719045,
          "x": 268.67,
          "y": 58.64,
          "elevationM": 37
        },
        {
          "distanceKm": 4.582,
          "lat": 44.344043,
          "lon": 11.718016,
          "x": 253.74,
          "y": 58.33,
          "elevationM": 37
        },
        {
          "distanceKm": 4.664,
          "lat": 44.344047,
          "lon": 11.716987,
          "x": 238.8,
          "y": 58.25,
          "elevationM": 39
        },
        {
          "distanceKm": 4.746,
          "lat": 44.344107,
          "lon": 11.715966,
          "x": 223.97,
          "y": 57.01,
          "elevationM": 40
        },
        {
          "distanceKm": 4.828,
          "lat": 44.344261,
          "lon": 11.714959,
          "x": 209.36,
          "y": 53.89,
          "elevationM": 42
        },
        {
          "distanceKm": 4.91,
          "lat": 44.343831,
          "lon": 11.717681,
          "x": 248.87,
          "y": 62.63,
          "elevationM": 38
        },
        {
          "distanceKm": 4.992,
          "lat": 44.343997,
          "lon": 11.716679,
          "x": 234.32,
          "y": 59.25,
          "elevationM": 39
        },
        {
          "distanceKm": 5.073,
          "lat": 44.343902,
          "lon": 11.718041,
          "x": 254.11,
          "y": 61.18,
          "elevationM": 38
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
      "meanM": 51,
      "minM": 37,
      "maxM": 73,
      "rangeM": 36
    },
    "source": {
      "geometry": "OpenStreetMap relation 9291096",
      "osmName": "Autodromo Internazionale Enzo e Dino Ferrari",
      "wayCount": 35,
      "osmLengthKm": 5.073,
      "quality": "matched",
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": 43.732383,
          "lon": 7.422976,
          "x": 142.2,
          "y": 227.49,
          "elevationM": 14
        },
        {
          "distanceKm": 0.083,
          "lat": 43.734136,
          "lon": 7.422468,
          "x": 133.57,
          "y": 186.22,
          "elevationM": 0
        },
        {
          "distanceKm": 0.166,
          "lat": 43.733501,
          "lon": 7.422358,
          "x": 131.7,
          "y": 201.17,
          "elevationM": 4
        },
        {
          "distanceKm": 0.249,
          "lat": 43.732891,
          "lon": 7.422931,
          "x": 141.44,
          "y": 215.53,
          "elevationM": 2
        },
        {
          "distanceKm": 0.332,
          "lat": 43.734703,
          "lon": 7.422311,
          "x": 130.89,
          "y": 172.88,
          "elevationM": 0
        },
        {
          "distanceKm": 0.415,
          "lat": 43.735297,
          "lon": 7.422037,
          "x": 126.24,
          "y": 158.89,
          "elevationM": 0
        },
        {
          "distanceKm": 0.498,
          "lat": 43.73681,
          "lon": 7.422465,
          "x": 133.51,
          "y": 123.27,
          "elevationM": 6
        },
        {
          "distanceKm": 0.58,
          "lat": 43.736274,
          "lon": 7.421874,
          "x": 123.47,
          "y": 135.9,
          "elevationM": 6
        },
        {
          "distanceKm": 0.663,
          "lat": 43.736869,
          "lon": 7.423078,
          "x": 143.94,
          "y": 121.89,
          "elevationM": 12
        },
        {
          "distanceKm": 0.746,
          "lat": 43.736977,
          "lon": 7.424099,
          "x": 161.3,
          "y": 119.34,
          "elevationM": 12
        },
        {
          "distanceKm": 0.829,
          "lat": 43.737012,
          "lon": 7.425128,
          "x": 178.81,
          "y": 118.52,
          "elevationM": 6
        },
        {
          "distanceKm": 0.912,
          "lat": 43.737278,
          "lon": 7.425881,
          "x": 191.62,
          "y": 112.27,
          "elevationM": 12
        },
        {
          "distanceKm": 0.995,
          "lat": 43.73743,
          "lon": 7.42689,
          "x": 208.78,
          "y": 108.68,
          "elevationM": 24
        },
        {
          "distanceKm": 1.078,
          "lat": 43.738064,
          "lon": 7.427448,
          "x": 218.28,
          "y": 93.77,
          "elevationM": 38
        },
        {
          "distanceKm": 1.161,
          "lat": 43.738693,
          "lon": 7.427852,
          "x": 225.14,
          "y": 78.95,
          "elevationM": 51
        },
        {
          "distanceKm": 1.244,
          "lat": 43.739356,
          "lon": 7.427215,
          "x": 214.31,
          "y": 63.34,
          "elevationM": 55
        },
        {
          "distanceKm": 1.327,
          "lat": 43.739937,
          "lon": 7.427523,
          "x": 219.56,
          "y": 49.66,
          "elevationM": 45
        },
        {
          "distanceKm": 1.41,
          "lat": 43.740537,
          "lon": 7.428136,
          "x": 229.98,
          "y": 35.54,
          "elevationM": 45
        },
        {
          "distanceKm": 1.493,
          "lat": 43.741111,
          "lon": 7.42878,
          "x": 240.93,
          "y": 22.04,
          "elevationM": 40
        },
        {
          "distanceKm": 1.575,
          "lat": 43.740617,
          "lon": 7.429199,
          "x": 248.06,
          "y": 33.67,
          "elevationM": 37
        },
        {
          "distanceKm": 1.658,
          "lat": 43.740903,
          "lon": 7.429377,
          "x": 251.09,
          "y": 26.93,
          "elevationM": 31
        },
        {
          "distanceKm": 1.741,
          "lat": 43.740965,
          "lon": 7.429611,
          "x": 255.06,
          "y": 25.47,
          "elevationM": 27
        },
        {
          "distanceKm": 1.824,
          "lat": 43.740383,
          "lon": 7.430328,
          "x": 267.25,
          "y": 39.17,
          "elevationM": 9
        },
        {
          "distanceKm": 1.907,
          "lat": 43.737917,
          "lon": 7.428328,
          "x": 233.25,
          "y": 97.23,
          "elevationM": 19
        },
        {
          "distanceKm": 1.99,
          "lat": 43.738376,
          "lon": 7.429138,
          "x": 247.02,
          "y": 86.43,
          "elevationM": 20
        },
        {
          "distanceKm": 2.073,
          "lat": 43.738965,
          "lon": 7.429766,
          "x": 257.69,
          "y": 72.55,
          "elevationM": 20
        },
        {
          "distanceKm": 2.156,
          "lat": 43.739649,
          "lon": 7.430171,
          "x": 264.58,
          "y": 56.45,
          "elevationM": 20
        },
        {
          "distanceKm": 2.239,
          "lat": 43.737788,
          "lon": 7.428,
          "x": 227.66,
          "y": 100.25,
          "elevationM": 17
        },
        {
          "distanceKm": 2.322,
          "lat": 43.732362,
          "lon": 7.422734,
          "x": 138.1,
          "y": 227.99,
          "elevationM": 14
        },
        {
          "distanceKm": 2.405,
          "lat": 43.732886,
          "lon": 7.422147,
          "x": 128.11,
          "y": 215.66,
          "elevationM": 11
        },
        {
          "distanceKm": 2.488,
          "lat": 43.733555,
          "lon": 7.421711,
          "x": 120.7,
          "y": 199.9,
          "elevationM": 8
        },
        {
          "distanceKm": 2.571,
          "lat": 43.734272,
          "lon": 7.421428,
          "x": 115.89,
          "y": 183.02,
          "elevationM": 11
        },
        {
          "distanceKm": 2.653,
          "lat": 43.735009,
          "lon": 7.421268,
          "x": 113.16,
          "y": 165.69,
          "elevationM": 9
        },
        {
          "distanceKm": 2.736,
          "lat": 43.735753,
          "lon": 7.421211,
          "x": 112.19,
          "y": 148.18,
          "elevationM": 12
        },
        {
          "distanceKm": 2.819,
          "lat": 43.736484,
          "lon": 7.421385,
          "x": 115.14,
          "y": 130.95,
          "elevationM": 20
        },
        {
          "distanceKm": 2.902,
          "lat": 43.737001,
          "lon": 7.4219,
          "x": 123.9,
          "y": 118.79,
          "elevationM": 13
        },
        {
          "distanceKm": 2.985,
          "lat": 43.737119,
          "lon": 7.422918,
          "x": 141.23,
          "y": 116,
          "elevationM": 17
        },
        {
          "distanceKm": 3.068,
          "lat": 43.737326,
          "lon": 7.42391,
          "x": 158.09,
          "y": 111.12,
          "elevationM": 25
        },
        {
          "distanceKm": 3.151,
          "lat": 43.737449,
          "lon": 7.424925,
          "x": 175.36,
          "y": 108.23,
          "elevationM": 28
        },
        {
          "distanceKm": 3.234,
          "lat": 43.737758,
          "lon": 7.425863,
          "x": 191.31,
          "y": 100.96,
          "elevationM": 39
        },
        {
          "distanceKm": 3.317,
          "lat": 43.737912,
          "lon": 7.426871,
          "x": 208.45,
          "y": 97.33,
          "elevationM": 38
        },
        {
          "distanceKm": 3.4,
          "lat": 43.737022,
          "lon": 7.422117,
          "x": 127.61,
          "y": 118.3,
          "elevationM": 11
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
      "meanM": 20,
      "minM": 0,
      "maxM": 55,
      "rangeM": 55
    },
    "source": {
      "geometry": "OpenStreetMap relation 148194",
      "osmName": "Circuit de Monaco",
      "wayCount": 40,
      "osmLengthKm": 3.4,
      "quality": "matched",
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": 41.574607,
          "lon": 2.260464,
          "x": 227.35,
          "y": 24.76,
          "elevationM": 139
        },
        {
          "distanceKm": 0.081,
          "lat": 41.574708,
          "lon": 2.261392,
          "x": 240.89,
          "y": 22.78,
          "elevationM": 136
        },
        {
          "distanceKm": 0.162,
          "lat": 41.574325,
          "lon": 2.262219,
          "x": 252.95,
          "y": 30.26,
          "elevationM": 133
        },
        {
          "distanceKm": 0.243,
          "lat": 41.574302,
          "lon": 2.261364,
          "x": 240.48,
          "y": 30.71,
          "elevationM": 133
        },
        {
          "distanceKm": 0.324,
          "lat": 41.574115,
          "lon": 2.262143,
          "x": 251.85,
          "y": 34.35,
          "elevationM": 132
        },
        {
          "distanceKm": 0.405,
          "lat": 41.573973,
          "lon": 2.26295,
          "x": 263.62,
          "y": 37.13,
          "elevationM": 127
        },
        {
          "distanceKm": 0.486,
          "lat": 41.573463,
          "lon": 2.26361,
          "x": 273.26,
          "y": 47.08,
          "elevationM": 127
        },
        {
          "distanceKm": 0.567,
          "lat": 41.57276,
          "lon": 2.263523,
          "x": 271.98,
          "y": 60.8,
          "elevationM": 124
        },
        {
          "distanceKm": 0.648,
          "lat": 41.572143,
          "lon": 2.263004,
          "x": 264.41,
          "y": 72.83,
          "elevationM": 122
        },
        {
          "distanceKm": 0.73,
          "lat": 41.571527,
          "lon": 2.262483,
          "x": 256.8,
          "y": 84.84,
          "elevationM": 122
        },
        {
          "distanceKm": 0.811,
          "lat": 41.570911,
          "lon": 2.261962,
          "x": 249.2,
          "y": 96.86,
          "elevationM": 124
        },
        {
          "distanceKm": 0.892,
          "lat": 41.570294,
          "lon": 2.261442,
          "x": 241.62,
          "y": 108.89,
          "elevationM": 121
        },
        {
          "distanceKm": 0.973,
          "lat": 41.569677,
          "lon": 2.260924,
          "x": 234.05,
          "y": 120.93,
          "elevationM": 121
        },
        {
          "distanceKm": 1.054,
          "lat": 41.569059,
          "lon": 2.260406,
          "x": 226.5,
          "y": 132.98,
          "elevationM": 118
        },
        {
          "distanceKm": 1.135,
          "lat": 41.568444,
          "lon": 2.259883,
          "x": 218.87,
          "y": 144.97,
          "elevationM": 115
        },
        {
          "distanceKm": 1.216,
          "lat": 41.567825,
          "lon": 2.259368,
          "x": 211.35,
          "y": 157.04,
          "elevationM": 118
        },
        {
          "distanceKm": 1.297,
          "lat": 41.567207,
          "lon": 2.258852,
          "x": 203.83,
          "y": 169.1,
          "elevationM": 117
        },
        {
          "distanceKm": 1.378,
          "lat": 41.56659,
          "lon": 2.258333,
          "x": 196.25,
          "y": 181.14,
          "elevationM": 111
        },
        {
          "distanceKm": 1.459,
          "lat": 41.565974,
          "lon": 2.257812,
          "x": 188.65,
          "y": 193.15,
          "elevationM": 112
        },
        {
          "distanceKm": 1.54,
          "lat": 41.565356,
          "lon": 2.257295,
          "x": 181.1,
          "y": 205.2,
          "elevationM": 115
        },
        {
          "distanceKm": 1.621,
          "lat": 41.564743,
          "lon": 2.256769,
          "x": 173.43,
          "y": 217.16,
          "elevationM": 114
        },
        {
          "distanceKm": 1.702,
          "lat": 41.564796,
          "lon": 2.255905,
          "x": 160.82,
          "y": 216.13,
          "elevationM": 115
        },
        {
          "distanceKm": 1.783,
          "lat": 41.564758,
          "lon": 2.255004,
          "x": 147.67,
          "y": 216.87,
          "elevationM": 117
        },
        {
          "distanceKm": 1.864,
          "lat": 41.564327,
          "lon": 2.254218,
          "x": 136.2,
          "y": 225.28,
          "elevationM": 125
        },
        {
          "distanceKm": 1.945,
          "lat": 41.564205,
          "lon": 2.253279,
          "x": 122.5,
          "y": 227.65,
          "elevationM": 122
        },
        {
          "distanceKm": 2.026,
          "lat": 41.564586,
          "lon": 2.252477,
          "x": 110.79,
          "y": 220.22,
          "elevationM": 125
        },
        {
          "distanceKm": 2.108,
          "lat": 41.565259,
          "lon": 2.252144,
          "x": 105.93,
          "y": 207.1,
          "elevationM": 126
        },
        {
          "distanceKm": 2.189,
          "lat": 41.565977,
          "lon": 2.25227,
          "x": 107.77,
          "y": 193.09,
          "elevationM": 127
        },
        {
          "distanceKm": 2.27,
          "lat": 41.566629,
          "lon": 2.252696,
          "x": 113.99,
          "y": 180.38,
          "elevationM": 125
        },
        {
          "distanceKm": 2.351,
          "lat": 41.567245,
          "lon": 2.253215,
          "x": 121.57,
          "y": 168.35,
          "elevationM": 131
        },
        {
          "distanceKm": 2.432,
          "lat": 41.567864,
          "lon": 2.253731,
          "x": 129.1,
          "y": 156.29,
          "elevationM": 131
        },
        {
          "distanceKm": 2.513,
          "lat": 41.568406,
          "lon": 2.254348,
          "x": 138.09,
          "y": 145.72,
          "elevationM": 133
        },
        {
          "distanceKm": 2.594,
          "lat": 41.568166,
          "lon": 2.255192,
          "x": 150.41,
          "y": 150.39,
          "elevationM": 136
        },
        {
          "distanceKm": 2.675,
          "lat": 41.567468,
          "lon": 2.255349,
          "x": 152.71,
          "y": 164.02,
          "elevationM": 136
        },
        {
          "distanceKm": 2.756,
          "lat": 41.566822,
          "lon": 2.254914,
          "x": 146.36,
          "y": 176.62,
          "elevationM": 133
        },
        {
          "distanceKm": 2.837,
          "lat": 41.566206,
          "lon": 2.254393,
          "x": 138.75,
          "y": 188.63,
          "elevationM": 131
        },
        {
          "distanceKm": 2.918,
          "lat": 41.565562,
          "lon": 2.253986,
          "x": 132.81,
          "y": 201.19,
          "elevationM": 128
        },
        {
          "distanceKm": 2.999,
          "lat": 41.565396,
          "lon": 2.254762,
          "x": 144.13,
          "y": 204.43,
          "elevationM": 124
        },
        {
          "distanceKm": 3.08,
          "lat": 41.565695,
          "lon": 2.25565,
          "x": 157.1,
          "y": 198.59,
          "elevationM": 119
        },
        {
          "distanceKm": 3.161,
          "lat": 41.566034,
          "lon": 2.256509,
          "x": 169.64,
          "y": 191.98,
          "elevationM": 116
        },
        {
          "distanceKm": 3.242,
          "lat": 41.566563,
          "lon": 2.257169,
          "x": 179.27,
          "y": 181.66,
          "elevationM": 115
        },
        {
          "distanceKm": 3.323,
          "lat": 41.567179,
          "lon": 2.257691,
          "x": 186.88,
          "y": 169.65,
          "elevationM": 113
        },
        {
          "distanceKm": 3.405,
          "lat": 41.567771,
          "lon": 2.257421,
          "x": 182.93,
          "y": 158.1,
          "elevationM": 118
        },
        {
          "distanceKm": 3.486,
          "lat": 41.568312,
          "lon": 2.256804,
          "x": 173.94,
          "y": 147.55,
          "elevationM": 123
        },
        {
          "distanceKm": 3.567,
          "lat": 41.568984,
          "lon": 2.256427,
          "x": 168.43,
          "y": 134.44,
          "elevationM": 129
        },
        {
          "distanceKm": 3.648,
          "lat": 41.569655,
          "lon": 2.256045,
          "x": 162.86,
          "y": 121.36,
          "elevationM": 133
        },
        {
          "distanceKm": 3.729,
          "lat": 41.570356,
          "lon": 2.256114,
          "x": 163.87,
          "y": 107.69,
          "elevationM": 134
        },
        {
          "distanceKm": 3.81,
          "lat": 41.570796,
          "lon": 2.256869,
          "x": 174.89,
          "y": 99.09,
          "elevationM": 134
        },
        {
          "distanceKm": 3.891,
          "lat": 41.571125,
          "lon": 2.257739,
          "x": 187.58,
          "y": 92.68,
          "elevationM": 132
        },
        {
          "distanceKm": 3.972,
          "lat": 41.571458,
          "lon": 2.258606,
          "x": 200.24,
          "y": 86.19,
          "elevationM": 130
        },
        {
          "distanceKm": 4.053,
          "lat": 41.571788,
          "lon": 2.259475,
          "x": 212.91,
          "y": 79.74,
          "elevationM": 135
        },
        {
          "distanceKm": 4.134,
          "lat": 41.572118,
          "lon": 2.260344,
          "x": 225.59,
          "y": 73.31,
          "elevationM": 128
        },
        {
          "distanceKm": 4.215,
          "lat": 41.572455,
          "lon": 2.261208,
          "x": 238.2,
          "y": 66.73,
          "elevationM": 127
        },
        {
          "distanceKm": 4.296,
          "lat": 41.572862,
          "lon": 2.261987,
          "x": 249.57,
          "y": 58.8,
          "elevationM": 126
        },
        {
          "distanceKm": 4.377,
          "lat": 41.573345,
          "lon": 2.261393,
          "x": 240.9,
          "y": 49.38,
          "elevationM": 130
        },
        {
          "distanceKm": 4.458,
          "lat": 41.573244,
          "lon": 2.260456,
          "x": 227.22,
          "y": 51.34,
          "elevationM": 134
        },
        {
          "distanceKm": 4.539,
          "lat": 41.572866,
          "lon": 2.25964,
          "x": 215.32,
          "y": 58.73,
          "elevationM": 137
        },
        {
          "distanceKm": 4.62,
          "lat": 41.573236,
          "lon": 2.258898,
          "x": 204.49,
          "y": 51.49,
          "elevationM": 142
        },
        {
          "distanceKm": 4.701,
          "lat": 41.573858,
          "lon": 2.259255,
          "x": 209.71,
          "y": 39.37,
          "elevationM": 145
        },
        {
          "distanceKm": 4.783,
          "lat": 41.574321,
          "lon": 2.260009,
          "x": 220.7,
          "y": 30.34,
          "elevationM": 141
        },
        {
          "distanceKm": 4.864,
          "lat": 41.574612,
          "lon": 2.26082,
          "x": 232.54,
          "y": 24.67,
          "elevationM": 135
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
      "minM": 111,
      "maxM": 145,
      "rangeM": 34
    },
    "source": {
      "geometry": "OpenStreetMap relation 2049529",
      "osmName": "Circuit de Catalunya GP FIA",
      "wayCount": 4,
      "osmLengthKm": 4.864,
      "quality": "close",
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": 45.504562,
          "lon": -73.523603,
          "x": 209.71,
          "y": 138.35,
          "elevationM": 6
        },
        {
          "distanceKm": 0.081,
          "lat": 45.503893,
          "lon": -73.523603,
          "x": 209.71,
          "y": 146.35,
          "elevationM": 8
        },
        {
          "distanceKm": 0.162,
          "lat": 45.503238,
          "lon": -73.523658,
          "x": 209.25,
          "y": 154.18,
          "elevationM": 15
        },
        {
          "distanceKm": 0.242,
          "lat": 45.502528,
          "lon": -73.523445,
          "x": 211.04,
          "y": 162.68,
          "elevationM": 8
        },
        {
          "distanceKm": 0.323,
          "lat": 45.501817,
          "lon": -73.523231,
          "x": 212.83,
          "y": 171.18,
          "elevationM": 8
        },
        {
          "distanceKm": 0.404,
          "lat": 45.501106,
          "lon": -73.523017,
          "x": 214.63,
          "y": 179.68,
          "elevationM": 9
        },
        {
          "distanceKm": 0.485,
          "lat": 45.500395,
          "lon": -73.522803,
          "x": 216.42,
          "y": 188.18,
          "elevationM": 10
        },
        {
          "distanceKm": 0.565,
          "lat": 45.499682,
          "lon": -73.522609,
          "x": 218.04,
          "y": 196.71,
          "elevationM": 12
        },
        {
          "distanceKm": 0.646,
          "lat": 45.498957,
          "lon": -73.522588,
          "x": 218.22,
          "y": 205.38,
          "elevationM": 9
        },
        {
          "distanceKm": 0.727,
          "lat": 45.498236,
          "lon": -73.522715,
          "x": 217.16,
          "y": 214,
          "elevationM": 11
        },
        {
          "distanceKm": 0.808,
          "lat": 45.497653,
          "lon": -73.522386,
          "x": 219.91,
          "y": 220.97,
          "elevationM": 8
        },
        {
          "distanceKm": 0.889,
          "lat": 45.497127,
          "lon": -73.522157,
          "x": 221.83,
          "y": 227.26,
          "elevationM": 7
        },
        {
          "distanceKm": 0.969,
          "lat": 45.497171,
          "lon": -73.523156,
          "x": 213.46,
          "y": 226.73,
          "elevationM": 12
        },
        {
          "distanceKm": 1.05,
          "lat": 45.497427,
          "lon": -73.524123,
          "x": 205.35,
          "y": 223.68,
          "elevationM": 12
        },
        {
          "distanceKm": 1.131,
          "lat": 45.497858,
          "lon": -73.524955,
          "x": 198.38,
          "y": 218.52,
          "elevationM": 11
        },
        {
          "distanceKm": 1.212,
          "lat": 45.498338,
          "lon": -73.525732,
          "x": 191.86,
          "y": 212.78,
          "elevationM": 11
        },
        {
          "distanceKm": 1.292,
          "lat": 45.498962,
          "lon": -73.525933,
          "x": 190.18,
          "y": 205.32,
          "elevationM": 11
        },
        {
          "distanceKm": 1.373,
          "lat": 45.499569,
          "lon": -73.526428,
          "x": 186.04,
          "y": 198.05,
          "elevationM": 12
        },
        {
          "distanceKm": 1.454,
          "lat": 45.500133,
          "lon": -73.527079,
          "x": 180.57,
          "y": 191.31,
          "elevationM": 10
        },
        {
          "distanceKm": 1.535,
          "lat": 45.500608,
          "lon": -73.527848,
          "x": 174.14,
          "y": 185.64,
          "elevationM": 11
        },
        {
          "distanceKm": 1.616,
          "lat": 45.501304,
          "lon": -73.528095,
          "x": 172.06,
          "y": 177.31,
          "elevationM": 11
        },
        {
          "distanceKm": 1.696,
          "lat": 45.502031,
          "lon": -73.52808,
          "x": 172.19,
          "y": 168.62,
          "elevationM": 11
        },
        {
          "distanceKm": 1.777,
          "lat": 45.502734,
          "lon": -73.52819,
          "x": 171.27,
          "y": 160.21,
          "elevationM": 12
        },
        {
          "distanceKm": 1.858,
          "lat": 45.502801,
          "lon": -73.529174,
          "x": 163.02,
          "y": 159.42,
          "elevationM": 14
        },
        {
          "distanceKm": 1.939,
          "lat": 45.503398,
          "lon": -73.529708,
          "x": 158.55,
          "y": 152.27,
          "elevationM": 13
        },
        {
          "distanceKm": 2.02,
          "lat": 45.504117,
          "lon": -73.529849,
          "x": 157.36,
          "y": 143.68,
          "elevationM": 11
        },
        {
          "distanceKm": 2.1,
          "lat": 45.504842,
          "lon": -73.52991,
          "x": 156.86,
          "y": 135.01,
          "elevationM": 11
        },
        {
          "distanceKm": 2.181,
          "lat": 45.505568,
          "lon": -73.52994,
          "x": 156.6,
          "y": 126.33,
          "elevationM": 11
        },
        {
          "distanceKm": 2.262,
          "lat": 45.506293,
          "lon": -73.529882,
          "x": 157.08,
          "y": 117.65,
          "elevationM": 10
        },
        {
          "distanceKm": 2.343,
          "lat": 45.507013,
          "lon": -73.529745,
          "x": 158.23,
          "y": 109.04,
          "elevationM": 10
        },
        {
          "distanceKm": 2.423,
          "lat": 45.507718,
          "lon": -73.529498,
          "x": 160.31,
          "y": 100.61,
          "elevationM": 12
        },
        {
          "distanceKm": 2.504,
          "lat": 45.508418,
          "lon": -73.52922,
          "x": 162.64,
          "y": 92.24,
          "elevationM": 7
        },
        {
          "distanceKm": 2.585,
          "lat": 45.508782,
          "lon": -73.528488,
          "x": 168.77,
          "y": 87.89,
          "elevationM": 11
        },
        {
          "distanceKm": 2.666,
          "lat": 45.509406,
          "lon": -73.528005,
          "x": 172.82,
          "y": 80.43,
          "elevationM": 12
        },
        {
          "distanceKm": 2.747,
          "lat": 45.510106,
          "lon": -73.527731,
          "x": 175.11,
          "y": 72.05,
          "elevationM": 9
        },
        {
          "distanceKm": 2.827,
          "lat": 45.510818,
          "lon": -73.527521,
          "x": 176.87,
          "y": 63.54,
          "elevationM": 11
        },
        {
          "distanceKm": 2.908,
          "lat": 45.511534,
          "lon": -73.527354,
          "x": 178.27,
          "y": 54.97,
          "elevationM": 13
        },
        {
          "distanceKm": 2.989,
          "lat": 45.512259,
          "lon": -73.527282,
          "x": 178.88,
          "y": 46.31,
          "elevationM": 11
        },
        {
          "distanceKm": 3.07,
          "lat": 45.512981,
          "lon": -73.527362,
          "x": 178.21,
          "y": 37.67,
          "elevationM": 11
        },
        {
          "distanceKm": 3.15,
          "lat": 45.513692,
          "lon": -73.527577,
          "x": 176.4,
          "y": 29.17,
          "elevationM": 13
        },
        {
          "distanceKm": 3.231,
          "lat": 45.514287,
          "lon": -73.527433,
          "x": 177.61,
          "y": 22.04,
          "elevationM": 12
        },
        {
          "distanceKm": 3.312,
          "lat": 45.513637,
          "lon": -73.527127,
          "x": 180.18,
          "y": 29.82,
          "elevationM": 14
        },
        {
          "distanceKm": 3.393,
          "lat": 45.512943,
          "lon": -73.526865,
          "x": 182.37,
          "y": 38.13,
          "elevationM": 12
        },
        {
          "distanceKm": 3.474,
          "lat": 45.512285,
          "lon": -73.526428,
          "x": 186.04,
          "y": 46,
          "elevationM": 11
        },
        {
          "distanceKm": 3.554,
          "lat": 45.511607,
          "lon": -73.526055,
          "x": 189.16,
          "y": 54.11,
          "elevationM": 10
        },
        {
          "distanceKm": 3.635,
          "lat": 45.510929,
          "lon": -73.525683,
          "x": 192.28,
          "y": 62.22,
          "elevationM": 10
        },
        {
          "distanceKm": 3.716,
          "lat": 45.510247,
          "lon": -73.525325,
          "x": 195.28,
          "y": 70.37,
          "elevationM": 7
        },
        {
          "distanceKm": 3.797,
          "lat": 45.50954,
          "lon": -73.525093,
          "x": 197.22,
          "y": 78.83,
          "elevationM": 7
        },
        {
          "distanceKm": 3.877,
          "lat": 45.508827,
          "lon": -73.524891,
          "x": 198.92,
          "y": 87.35,
          "elevationM": 8
        },
        {
          "distanceKm": 3.958,
          "lat": 45.508116,
          "lon": -73.524675,
          "x": 200.73,
          "y": 95.85,
          "elevationM": 9
        },
        {
          "distanceKm": 4.039,
          "lat": 45.507406,
          "lon": -73.524459,
          "x": 202.53,
          "y": 104.34,
          "elevationM": 10
        },
        {
          "distanceKm": 4.12,
          "lat": 45.506695,
          "lon": -73.524244,
          "x": 204.34,
          "y": 112.84,
          "elevationM": 6
        },
        {
          "distanceKm": 4.201,
          "lat": 45.505985,
          "lon": -73.524029,
          "x": 206.14,
          "y": 121.34,
          "elevationM": 5
        },
        {
          "distanceKm": 4.281,
          "lat": 45.505274,
          "lon": -73.523816,
          "x": 207.93,
          "y": 129.84,
          "elevationM": 7
        },
        {
          "distanceKm": 4.362,
          "lat": 45.504562,
          "lon": -73.523603,
          "x": 209.71,
          "y": 138.35,
          "elevationM": 6
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
      "meanM": 10,
      "minM": 5,
      "maxM": 15,
      "rangeM": 10
    },
    "source": {
      "geometry": "OpenStreetMap relation 284595",
      "osmName": "Circuit Gilles Villeneuve",
      "wayCount": 1,
      "osmLengthKm": 4.362,
      "quality": "matched",
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": 47.226014,
          "lon": 14.754165,
          "x": 29.35,
          "y": 32.22,
          "elevationM": 735
        },
        {
          "distanceKm": 0.081,
          "lat": 47.226315,
          "lon": 14.754783,
          "x": 41.51,
          "y": 23.48,
          "elevationM": 737
        },
        {
          "distanceKm": 0.162,
          "lat": 47.226365,
          "lon": 14.755855,
          "x": 62.58,
          "y": 22.03,
          "elevationM": 737
        },
        {
          "distanceKm": 0.243,
          "lat": 47.226341,
          "lon": 14.756928,
          "x": 83.69,
          "y": 22.75,
          "elevationM": 734
        },
        {
          "distanceKm": 0.325,
          "lat": 47.226234,
          "lon": 14.75799,
          "x": 104.58,
          "y": 25.83,
          "elevationM": 730
        },
        {
          "distanceKm": 0.406,
          "lat": 47.226098,
          "lon": 14.759045,
          "x": 125.34,
          "y": 29.78,
          "elevationM": 729
        },
        {
          "distanceKm": 0.487,
          "lat": 47.225964,
          "lon": 14.760102,
          "x": 146.12,
          "y": 33.65,
          "elevationM": 724
        },
        {
          "distanceKm": 0.568,
          "lat": 47.225839,
          "lon": 14.76116,
          "x": 166.93,
          "y": 37.28,
          "elevationM": 722
        },
        {
          "distanceKm": 0.649,
          "lat": 47.225769,
          "lon": 14.762229,
          "x": 187.95,
          "y": 39.31,
          "elevationM": 723
        },
        {
          "distanceKm": 0.73,
          "lat": 47.225734,
          "lon": 14.763302,
          "x": 209.06,
          "y": 40.32,
          "elevationM": 717
        },
        {
          "distanceKm": 0.811,
          "lat": 47.225698,
          "lon": 14.764375,
          "x": 230.16,
          "y": 41.36,
          "elevationM": 713
        },
        {
          "distanceKm": 0.892,
          "lat": 47.225103,
          "lon": 14.764406,
          "x": 230.78,
          "y": 58.58,
          "elevationM": 709
        },
        {
          "distanceKm": 0.974,
          "lat": 47.224604,
          "lon": 14.763636,
          "x": 215.63,
          "y": 73.06,
          "elevationM": 704
        },
        {
          "distanceKm": 1.055,
          "lat": 47.224353,
          "lon": 14.762635,
          "x": 195.95,
          "y": 80.31,
          "elevationM": 703
        },
        {
          "distanceKm": 1.136,
          "lat": 47.22438,
          "lon": 14.761569,
          "x": 174.97,
          "y": 79.52,
          "elevationM": 707
        },
        {
          "distanceKm": 1.217,
          "lat": 47.224497,
          "lon": 14.760508,
          "x": 154.11,
          "y": 76.15,
          "elevationM": 712
        },
        {
          "distanceKm": 1.298,
          "lat": 47.224565,
          "lon": 14.759445,
          "x": 133.2,
          "y": 74.17,
          "elevationM": 707
        },
        {
          "distanceKm": 1.379,
          "lat": 47.224104,
          "lon": 14.758665,
          "x": 117.86,
          "y": 87.53,
          "elevationM": 705
        },
        {
          "distanceKm": 1.46,
          "lat": 47.223409,
          "lon": 14.758824,
          "x": 120.98,
          "y": 107.65,
          "elevationM": 699
        },
        {
          "distanceKm": 1.542,
          "lat": 47.222773,
          "lon": 14.759351,
          "x": 131.36,
          "y": 126.06,
          "elevationM": 695
        },
        {
          "distanceKm": 1.623,
          "lat": 47.222181,
          "lon": 14.759965,
          "x": 143.43,
          "y": 143.21,
          "elevationM": 689
        },
        {
          "distanceKm": 1.704,
          "lat": 47.222104,
          "lon": 14.760984,
          "x": 163.48,
          "y": 145.45,
          "elevationM": 689
        },
        {
          "distanceKm": 1.785,
          "lat": 47.222608,
          "lon": 14.761738,
          "x": 178.31,
          "y": 130.86,
          "elevationM": 690
        },
        {
          "distanceKm": 1.866,
          "lat": 47.222994,
          "lon": 14.762638,
          "x": 196,
          "y": 119.68,
          "elevationM": 692
        },
        {
          "distanceKm": 1.947,
          "lat": 47.223117,
          "lon": 14.763688,
          "x": 216.65,
          "y": 116.12,
          "elevationM": 692
        },
        {
          "distanceKm": 2.028,
          "lat": 47.223127,
          "lon": 14.764762,
          "x": 237.78,
          "y": 115.81,
          "elevationM": 693
        },
        {
          "distanceKm": 2.109,
          "lat": 47.223135,
          "lon": 14.765836,
          "x": 258.91,
          "y": 115.6,
          "elevationM": 706
        },
        {
          "distanceKm": 2.191,
          "lat": 47.223156,
          "lon": 14.76691,
          "x": 280.03,
          "y": 114.99,
          "elevationM": 706
        },
        {
          "distanceKm": 2.272,
          "lat": 47.223173,
          "lon": 14.767984,
          "x": 301.16,
          "y": 114.48,
          "elevationM": 708
        },
        {
          "distanceKm": 2.353,
          "lat": 47.223191,
          "lon": 14.769058,
          "x": 322.28,
          "y": 113.97,
          "elevationM": 699
        },
        {
          "distanceKm": 2.434,
          "lat": 47.222883,
          "lon": 14.769969,
          "x": 340.2,
          "y": 122.88,
          "elevationM": 696
        },
        {
          "distanceKm": 2.515,
          "lat": 47.222191,
          "lon": 14.770299,
          "x": 346.69,
          "y": 142.94,
          "elevationM": 688
        },
        {
          "distanceKm": 2.596,
          "lat": 47.22149,
          "lon": 14.770598,
          "x": 352.56,
          "y": 163.23,
          "elevationM": 683
        },
        {
          "distanceKm": 2.677,
          "lat": 47.221002,
          "lon": 14.769932,
          "x": 339.47,
          "y": 177.38,
          "elevationM": 680
        },
        {
          "distanceKm": 2.759,
          "lat": 47.220729,
          "lon": 14.768937,
          "x": 319.9,
          "y": 185.28,
          "elevationM": 678
        },
        {
          "distanceKm": 2.84,
          "lat": 47.220514,
          "lon": 14.767911,
          "x": 299.71,
          "y": 191.5,
          "elevationM": 675
        },
        {
          "distanceKm": 2.921,
          "lat": 47.220323,
          "lon": 14.766874,
          "x": 279.31,
          "y": 197.03,
          "elevationM": 679
        },
        {
          "distanceKm": 3.002,
          "lat": 47.220132,
          "lon": 14.765837,
          "x": 258.92,
          "y": 202.55,
          "elevationM": 678
        },
        {
          "distanceKm": 3.083,
          "lat": 47.219942,
          "lon": 14.7648,
          "x": 238.52,
          "y": 208.07,
          "elevationM": 677
        },
        {
          "distanceKm": 3.164,
          "lat": 47.219751,
          "lon": 14.763763,
          "x": 218.12,
          "y": 213.59,
          "elevationM": 677
        },
        {
          "distanceKm": 3.245,
          "lat": 47.21956,
          "lon": 14.762726,
          "x": 197.73,
          "y": 219.12,
          "elevationM": 682
        },
        {
          "distanceKm": 3.327,
          "lat": 47.219369,
          "lon": 14.761689,
          "x": 177.33,
          "y": 224.64,
          "elevationM": 684
        },
        {
          "distanceKm": 3.408,
          "lat": 47.219427,
          "lon": 14.760764,
          "x": 159.15,
          "y": 222.96,
          "elevationM": 692
        },
        {
          "distanceKm": 3.489,
          "lat": 47.220038,
          "lon": 14.760179,
          "x": 147.63,
          "y": 205.29,
          "elevationM": 693
        },
        {
          "distanceKm": 3.57,
          "lat": 47.220631,
          "lon": 14.759552,
          "x": 135.31,
          "y": 188.12,
          "elevationM": 696
        },
        {
          "distanceKm": 3.651,
          "lat": 47.221224,
          "lon": 14.758927,
          "x": 123,
          "y": 170.94,
          "elevationM": 697
        },
        {
          "distanceKm": 3.732,
          "lat": 47.221846,
          "lon": 14.758368,
          "x": 112.01,
          "y": 152.92,
          "elevationM": 697
        },
        {
          "distanceKm": 3.813,
          "lat": 47.222495,
          "lon": 14.757877,
          "x": 102.36,
          "y": 134.13,
          "elevationM": 698
        },
        {
          "distanceKm": 3.894,
          "lat": 47.223155,
          "lon": 14.75742,
          "x": 93.36,
          "y": 115.01,
          "elevationM": 700
        },
        {
          "distanceKm": 3.976,
          "lat": 47.223815,
          "lon": 14.756963,
          "x": 84.38,
          "y": 95.88,
          "elevationM": 703
        },
        {
          "distanceKm": 4.057,
          "lat": 47.22443,
          "lon": 14.756386,
          "x": 73.03,
          "y": 78.09,
          "elevationM": 707
        },
        {
          "distanceKm": 4.138,
          "lat": 47.224973,
          "lon": 14.755672,
          "x": 58.98,
          "y": 62.35,
          "elevationM": 714
        },
        {
          "distanceKm": 4.219,
          "lat": 47.225495,
          "lon": 14.754921,
          "x": 44.22,
          "y": 47.23,
          "elevationM": 724
        },
        {
          "distanceKm": 4.3,
          "lat": 47.226014,
          "lon": 14.754165,
          "x": 29.35,
          "y": 32.22,
          "elevationM": 735
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
      "meanM": 703,
      "minM": 675,
      "maxM": 737,
      "rangeM": 62
    },
    "source": {
      "geometry": "OpenStreetMap relation 5309181",
      "osmName": "Red Bull Ring",
      "wayCount": 14,
      "osmLengthKm": 4.3,
      "quality": "matched",
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": 52.071467,
          "lon": -1.015706,
          "x": 199.06,
          "y": 121.81,
          "elevationM": 155
        },
        {
          "distanceKm": 0.081,
          "lat": 52.071925,
          "lon": -1.014777,
          "x": 206.68,
          "y": 115.7,
          "elevationM": 154
        },
        {
          "distanceKm": 0.163,
          "lat": 52.072382,
          "lon": -1.013849,
          "x": 214.3,
          "y": 109.59,
          "elevationM": 155
        },
        {
          "distanceKm": 0.244,
          "lat": 52.072266,
          "lon": -1.012976,
          "x": 221.47,
          "y": 111.15,
          "elevationM": 156
        },
        {
          "distanceKm": 0.325,
          "lat": 52.071567,
          "lon": -1.012625,
          "x": 224.35,
          "y": 120.49,
          "elevationM": 157
        },
        {
          "distanceKm": 0.407,
          "lat": 52.071695,
          "lon": -1.011833,
          "x": 230.86,
          "y": 118.77,
          "elevationM": 158
        },
        {
          "distanceKm": 0.488,
          "lat": 52.072395,
          "lon": -1.011496,
          "x": 233.62,
          "y": 109.42,
          "elevationM": 155
        },
        {
          "distanceKm": 0.569,
          "lat": 52.073111,
          "lon": -1.011553,
          "x": 233.15,
          "y": 99.86,
          "elevationM": 157
        },
        {
          "distanceKm": 0.651,
          "lat": 52.073615,
          "lon": -1.012415,
          "x": 226.08,
          "y": 93.13,
          "elevationM": 157
        },
        {
          "distanceKm": 0.732,
          "lat": 52.074108,
          "lon": -1.013294,
          "x": 218.86,
          "y": 86.54,
          "elevationM": 156
        },
        {
          "distanceKm": 0.813,
          "lat": 52.074601,
          "lon": -1.014172,
          "x": 211.65,
          "y": 79.95,
          "elevationM": 158
        },
        {
          "distanceKm": 0.895,
          "lat": 52.075094,
          "lon": -1.015051,
          "x": 204.43,
          "y": 73.37,
          "elevationM": 158
        },
        {
          "distanceKm": 0.976,
          "lat": 52.075585,
          "lon": -1.015933,
          "x": 197.19,
          "y": 66.81,
          "elevationM": 158
        },
        {
          "distanceKm": 1.057,
          "lat": 52.076077,
          "lon": -1.016814,
          "x": 189.96,
          "y": 60.23,
          "elevationM": 156
        },
        {
          "distanceKm": 1.139,
          "lat": 52.076565,
          "lon": -1.0177,
          "x": 182.68,
          "y": 53.71,
          "elevationM": 157
        },
        {
          "distanceKm": 1.22,
          "lat": 52.077044,
          "lon": -1.018599,
          "x": 175.3,
          "y": 47.31,
          "elevationM": 155
        },
        {
          "distanceKm": 1.301,
          "lat": 52.077079,
          "lon": -1.019733,
          "x": 165.99,
          "y": 46.85,
          "elevationM": 154
        },
        {
          "distanceKm": 1.383,
          "lat": 52.076426,
          "lon": -1.020112,
          "x": 162.88,
          "y": 55.57,
          "elevationM": 153
        },
        {
          "distanceKm": 1.464,
          "lat": 52.07582,
          "lon": -1.020632,
          "x": 158.61,
          "y": 63.67,
          "elevationM": 152
        },
        {
          "distanceKm": 1.545,
          "lat": 52.076071,
          "lon": -1.021626,
          "x": 150.45,
          "y": 60.32,
          "elevationM": 152
        },
        {
          "distanceKm": 1.627,
          "lat": 52.076755,
          "lon": -1.021404,
          "x": 152.27,
          "y": 51.18,
          "elevationM": 153
        },
        {
          "distanceKm": 1.708,
          "lat": 52.077412,
          "lon": -1.020879,
          "x": 156.58,
          "y": 42.41,
          "elevationM": 153
        },
        {
          "distanceKm": 1.789,
          "lat": 52.078006,
          "lon": -1.020197,
          "x": 162.18,
          "y": 34.47,
          "elevationM": 151
        },
        {
          "distanceKm": 1.871,
          "lat": 52.078446,
          "lon": -1.019252,
          "x": 169.94,
          "y": 28.59,
          "elevationM": 153
        },
        {
          "distanceKm": 1.952,
          "lat": 52.078632,
          "lon": -1.018108,
          "x": 179.33,
          "y": 26.1,
          "elevationM": 154
        },
        {
          "distanceKm": 2.033,
          "lat": 52.078857,
          "lon": -1.011843,
          "x": 230.77,
          "y": 23.1,
          "elevationM": 156
        },
        {
          "distanceKm": 2.115,
          "lat": 52.078315,
          "lon": -1.011097,
          "x": 236.89,
          "y": 30.34,
          "elevationM": 156
        },
        {
          "distanceKm": 2.196,
          "lat": 52.077616,
          "lon": -1.010748,
          "x": 239.76,
          "y": 39.68,
          "elevationM": 158
        },
        {
          "distanceKm": 2.277,
          "lat": 52.076903,
          "lon": -1.010487,
          "x": 241.9,
          "y": 49.21,
          "elevationM": 157
        },
        {
          "distanceKm": 2.359,
          "lat": 52.076177,
          "lon": -1.01035,
          "x": 243.03,
          "y": 58.91,
          "elevationM": 158
        },
        {
          "distanceKm": 2.44,
          "lat": 52.075447,
          "lon": -1.010277,
          "x": 243.63,
          "y": 68.66,
          "elevationM": 158
        },
        {
          "distanceKm": 2.521,
          "lat": 52.074716,
          "lon": -1.010233,
          "x": 243.99,
          "y": 78.42,
          "elevationM": 158
        },
        {
          "distanceKm": 2.603,
          "lat": 52.074008,
          "lon": -1.009983,
          "x": 246.04,
          "y": 87.88,
          "elevationM": 158
        },
        {
          "distanceKm": 2.684,
          "lat": 52.073347,
          "lon": -1.009529,
          "x": 249.77,
          "y": 96.71,
          "elevationM": 156
        },
        {
          "distanceKm": 2.765,
          "lat": 52.072654,
          "lon": -1.0099,
          "x": 246.72,
          "y": 105.96,
          "elevationM": 154
        },
        {
          "distanceKm": 2.847,
          "lat": 52.071941,
          "lon": -1.010066,
          "x": 245.36,
          "y": 115.49,
          "elevationM": 154
        },
        {
          "distanceKm": 2.928,
          "lat": 52.071329,
          "lon": -1.009437,
          "x": 250.53,
          "y": 123.66,
          "elevationM": 155
        },
        {
          "distanceKm": 3.009,
          "lat": 52.070635,
          "lon": -1.009459,
          "x": 250.34,
          "y": 132.93,
          "elevationM": 155
        },
        {
          "distanceKm": 3.091,
          "lat": 52.070196,
          "lon": -1.010398,
          "x": 242.64,
          "y": 138.8,
          "elevationM": 152
        },
        {
          "distanceKm": 3.172,
          "lat": 52.069728,
          "lon": -1.011289,
          "x": 235.32,
          "y": 145.04,
          "elevationM": 151
        },
        {
          "distanceKm": 3.253,
          "lat": 52.069087,
          "lon": -1.011861,
          "x": 230.62,
          "y": 153.61,
          "elevationM": 152
        },
        {
          "distanceKm": 3.335,
          "lat": 52.068445,
          "lon": -1.012432,
          "x": 225.94,
          "y": 162.18,
          "elevationM": 154
        },
        {
          "distanceKm": 3.416,
          "lat": 52.067797,
          "lon": -1.012983,
          "x": 221.41,
          "y": 170.84,
          "elevationM": 153
        },
        {
          "distanceKm": 3.497,
          "lat": 52.06715,
          "lon": -1.013537,
          "x": 216.86,
          "y": 179.48,
          "elevationM": 151
        },
        {
          "distanceKm": 3.579,
          "lat": 52.066503,
          "lon": -1.014093,
          "x": 212.3,
          "y": 188.12,
          "elevationM": 154
        },
        {
          "distanceKm": 3.66,
          "lat": 52.065858,
          "lon": -1.014654,
          "x": 207.69,
          "y": 196.73,
          "elevationM": 152
        },
        {
          "distanceKm": 3.741,
          "lat": 52.065217,
          "lon": -1.015227,
          "x": 202.99,
          "y": 205.3,
          "elevationM": 148
        },
        {
          "distanceKm": 3.823,
          "lat": 52.064595,
          "lon": -1.015854,
          "x": 197.84,
          "y": 213.6,
          "elevationM": 149
        },
        {
          "distanceKm": 3.904,
          "lat": 52.063994,
          "lon": -1.016531,
          "x": 192.28,
          "y": 221.63,
          "elevationM": 149
        },
        {
          "distanceKm": 3.985,
          "lat": 52.063542,
          "lon": -1.01743,
          "x": 184.9,
          "y": 227.66,
          "elevationM": 151
        },
        {
          "distanceKm": 4.067,
          "lat": 52.063685,
          "lon": -1.018556,
          "x": 175.65,
          "y": 225.76,
          "elevationM": 151
        },
        {
          "distanceKm": 4.148,
          "lat": 52.064299,
          "lon": -1.019171,
          "x": 170.61,
          "y": 217.56,
          "elevationM": 151
        },
        {
          "distanceKm": 4.229,
          "lat": 52.064925,
          "lon": -1.019785,
          "x": 165.57,
          "y": 209.2,
          "elevationM": 150
        },
        {
          "distanceKm": 4.311,
          "lat": 52.065484,
          "lon": -1.020549,
          "x": 159.3,
          "y": 201.73,
          "elevationM": 148
        },
        {
          "distanceKm": 4.392,
          "lat": 52.066026,
          "lon": -1.021347,
          "x": 152.74,
          "y": 194.49,
          "elevationM": 147
        },
        {
          "distanceKm": 4.473,
          "lat": 52.066553,
          "lon": -1.022153,
          "x": 146.12,
          "y": 187.45,
          "elevationM": 146
        },
        {
          "distanceKm": 4.555,
          "lat": 52.066238,
          "lon": -1.023155,
          "x": 137.9,
          "y": 191.66,
          "elevationM": 146
        },
        {
          "distanceKm": 4.636,
          "lat": 52.066757,
          "lon": -1.023964,
          "x": 131.25,
          "y": 184.72,
          "elevationM": 145
        },
        {
          "distanceKm": 4.717,
          "lat": 52.067448,
          "lon": -1.024328,
          "x": 128.26,
          "y": 175.5,
          "elevationM": 144
        },
        {
          "distanceKm": 4.799,
          "lat": 52.068062,
          "lon": -1.023733,
          "x": 133.15,
          "y": 167.29,
          "elevationM": 145
        },
        {
          "distanceKm": 4.88,
          "lat": 52.068644,
          "lon": -1.023011,
          "x": 139.07,
          "y": 159.52,
          "elevationM": 147
        },
        {
          "distanceKm": 4.961,
          "lat": 52.069226,
          "lon": -1.02229,
          "x": 145,
          "y": 151.76,
          "elevationM": 147
        },
        {
          "distanceKm": 5.043,
          "lat": 52.069807,
          "lon": -1.021568,
          "x": 150.92,
          "y": 143.99,
          "elevationM": 148
        },
        {
          "distanceKm": 5.124,
          "lat": 52.070389,
          "lon": -1.020847,
          "x": 156.85,
          "y": 136.22,
          "elevationM": 152
        },
        {
          "distanceKm": 5.205,
          "lat": 52.070969,
          "lon": -1.020122,
          "x": 162.8,
          "y": 128.47,
          "elevationM": 151
        },
        {
          "distanceKm": 5.287,
          "lat": 52.071325,
          "lon": -1.01915,
          "x": 170.78,
          "y": 123.71,
          "elevationM": 152
        },
        {
          "distanceKm": 5.368,
          "lat": 52.071258,
          "lon": -1.017968,
          "x": 180.48,
          "y": 124.61,
          "elevationM": 153
        },
        {
          "distanceKm": 5.449,
          "lat": 52.07119,
          "lon": -1.016788,
          "x": 190.17,
          "y": 125.52,
          "elevationM": 155
        },
        {
          "distanceKm": 5.531,
          "lat": 52.071467,
          "lon": -1.015706,
          "x": 199.06,
          "y": 121.81,
          "elevationM": 155
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
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": 50.446204,
          "lon": 5.963761,
          "x": 156.09,
          "y": 22.63,
          "elevationM": 422
        },
        {
          "distanceKm": 0.099,
          "lat": 50.445825,
          "lon": 5.965018,
          "x": 164.96,
          "y": 26.83,
          "elevationM": 416
        },
        {
          "distanceKm": 0.197,
          "lat": 50.445657,
          "lon": 5.963741,
          "x": 155.95,
          "y": 28.69,
          "elevationM": 423
        },
        {
          "distanceKm": 0.296,
          "lat": 50.441543,
          "lon": 5.967031,
          "x": 179.17,
          "y": 74.3,
          "elevationM": 404
        },
        {
          "distanceKm": 0.394,
          "lat": 50.442247,
          "lon": 5.966791,
          "x": 177.48,
          "y": 66.49,
          "elevationM": 405
        },
        {
          "distanceKm": 0.493,
          "lat": 50.443017,
          "lon": 5.966101,
          "x": 172.6,
          "y": 57.97,
          "elevationM": 411
        },
        {
          "distanceKm": 0.591,
          "lat": 50.443786,
          "lon": 5.965412,
          "x": 167.74,
          "y": 49.43,
          "elevationM": 416
        },
        {
          "distanceKm": 0.69,
          "lat": 50.444556,
          "lon": 5.964724,
          "x": 162.88,
          "y": 40.9,
          "elevationM": 417
        },
        {
          "distanceKm": 0.788,
          "lat": 50.445327,
          "lon": 5.964037,
          "x": 158.03,
          "y": 32.36,
          "elevationM": 420
        },
        {
          "distanceKm": 0.887,
          "lat": 50.440879,
          "lon": 5.966475,
          "x": 175.24,
          "y": 81.66,
          "elevationM": 412
        },
        {
          "distanceKm": 0.985,
          "lat": 50.433591,
          "lon": 5.964463,
          "x": 161.04,
          "y": 162.45,
          "elevationM": 384
        },
        {
          "distanceKm": 1.084,
          "lat": 50.434021,
          "lon": 5.965678,
          "x": 169.61,
          "y": 157.68,
          "elevationM": 384
        },
        {
          "distanceKm": 1.182,
          "lat": 50.434636,
          "lon": 5.966669,
          "x": 176.61,
          "y": 150.86,
          "elevationM": 391
        },
        {
          "distanceKm": 1.281,
          "lat": 50.435419,
          "lon": 5.967315,
          "x": 181.18,
          "y": 142.19,
          "elevationM": 392
        },
        {
          "distanceKm": 1.379,
          "lat": 50.436229,
          "lon": 5.967879,
          "x": 185.16,
          "y": 133.21,
          "elevationM": 394
        },
        {
          "distanceKm": 1.478,
          "lat": 50.437091,
          "lon": 5.968005,
          "x": 186.04,
          "y": 123.66,
          "elevationM": 396
        },
        {
          "distanceKm": 1.576,
          "lat": 50.432069,
          "lon": 5.961098,
          "x": 137.28,
          "y": 179.32,
          "elevationM": 370
        },
        {
          "distanceKm": 1.675,
          "lat": 50.432691,
          "lon": 5.962088,
          "x": 144.27,
          "y": 172.42,
          "elevationM": 376
        },
        {
          "distanceKm": 1.773,
          "lat": 50.433184,
          "lon": 5.963238,
          "x": 152.39,
          "y": 166.96,
          "elevationM": 383
        },
        {
          "distanceKm": 1.872,
          "lat": 50.431315,
          "lon": 5.960209,
          "x": 131.01,
          "y": 187.67,
          "elevationM": 372
        },
        {
          "distanceKm": 1.97,
          "lat": 50.429958,
          "lon": 5.959612,
          "x": 126.79,
          "y": 202.72,
          "elevationM": 364
        },
        {
          "distanceKm": 2.069,
          "lat": 50.430813,
          "lon": 5.959856,
          "x": 128.51,
          "y": 193.24,
          "elevationM": 367
        },
        {
          "distanceKm": 2.167,
          "lat": 50.429283,
          "lon": 5.960503,
          "x": 133.08,
          "y": 210.19,
          "elevationM": 365
        },
        {
          "distanceKm": 2.266,
          "lat": 50.428774,
          "lon": 5.961715,
          "x": 141.64,
          "y": 215.84,
          "elevationM": 369
        },
        {
          "distanceKm": 2.364,
          "lat": 50.429854,
          "lon": 5.963339,
          "x": 153.11,
          "y": 203.87,
          "elevationM": 373
        },
        {
          "distanceKm": 2.463,
          "lat": 50.429106,
          "lon": 5.962594,
          "x": 147.85,
          "y": 212.16,
          "elevationM": 373
        },
        {
          "distanceKm": 2.561,
          "lat": 50.430414,
          "lon": 5.966473,
          "x": 175.23,
          "y": 197.66,
          "elevationM": 377
        },
        {
          "distanceKm": 2.66,
          "lat": 50.430663,
          "lon": 5.96519,
          "x": 166.17,
          "y": 194.9,
          "elevationM": 374
        },
        {
          "distanceKm": 2.758,
          "lat": 50.430449,
          "lon": 5.963944,
          "x": 157.38,
          "y": 197.27,
          "elevationM": 374
        },
        {
          "distanceKm": 2.857,
          "lat": 50.432642,
          "lon": 5.968348,
          "x": 188.47,
          "y": 172.96,
          "elevationM": 375
        },
        {
          "distanceKm": 2.955,
          "lat": 50.431821,
          "lon": 5.967825,
          "x": 184.77,
          "y": 182.06,
          "elevationM": 374
        },
        {
          "distanceKm": 3.054,
          "lat": 50.431,
          "lon": 5.967302,
          "x": 181.08,
          "y": 191.16,
          "elevationM": 377
        },
        {
          "distanceKm": 3.153,
          "lat": 50.434081,
          "lon": 5.972185,
          "x": 215.56,
          "y": 157.02,
          "elevationM": 396
        },
        {
          "distanceKm": 3.251,
          "lat": 50.434229,
          "lon": 5.970829,
          "x": 205.98,
          "y": 155.37,
          "elevationM": 387
        },
        {
          "distanceKm": 3.35,
          "lat": 50.433971,
          "lon": 5.969523,
          "x": 196.76,
          "y": 158.23,
          "elevationM": 381
        },
        {
          "distanceKm": 3.448,
          "lat": 50.431253,
          "lon": 5.973492,
          "x": 224.78,
          "y": 188.36,
          "elevationM": 418
        },
        {
          "distanceKm": 3.547,
          "lat": 50.432124,
          "lon": 5.973241,
          "x": 223.01,
          "y": 178.7,
          "elevationM": 414
        },
        {
          "distanceKm": 3.645,
          "lat": 50.432997,
          "lon": 5.972997,
          "x": 221.29,
          "y": 169.03,
          "elevationM": 407
        },
        {
          "distanceKm": 3.744,
          "lat": 50.429386,
          "lon": 5.974314,
          "x": 230.59,
          "y": 209.05,
          "elevationM": 435
        },
        {
          "distanceKm": 3.842,
          "lat": 50.430235,
          "lon": 5.973963,
          "x": 228.11,
          "y": 199.64,
          "elevationM": 427
        },
        {
          "distanceKm": 3.941,
          "lat": 50.431081,
          "lon": 5.973553,
          "x": 225.22,
          "y": 190.26,
          "elevationM": 420
        },
        {
          "distanceKm": 4.039,
          "lat": 50.427791,
          "lon": 5.973381,
          "x": 224,
          "y": 226.73,
          "elevationM": 457
        },
        {
          "distanceKm": 4.138,
          "lat": 50.427976,
          "lon": 5.972242,
          "x": 215.96,
          "y": 224.67,
          "elevationM": 448
        },
        {
          "distanceKm": 4.236,
          "lat": 50.429097,
          "lon": 5.97633,
          "x": 244.82,
          "y": 212.26,
          "elevationM": 467
        },
        {
          "distanceKm": 4.335,
          "lat": 50.428591,
          "lon": 5.975188,
          "x": 236.76,
          "y": 217.86,
          "elevationM": 463
        },
        {
          "distanceKm": 4.433,
          "lat": 50.428085,
          "lon": 5.974047,
          "x": 228.7,
          "y": 223.47,
          "elevationM": 459
        },
        {
          "distanceKm": 4.532,
          "lat": 50.429489,
          "lon": 5.976981,
          "x": 249.42,
          "y": 207.92,
          "elevationM": 469
        },
        {
          "distanceKm": 4.63,
          "lat": 50.430012,
          "lon": 5.97692,
          "x": 248.98,
          "y": 202.12,
          "elevationM": 468
        },
        {
          "distanceKm": 4.729,
          "lat": 50.430746,
          "lon": 5.976695,
          "x": 247.4,
          "y": 193.98,
          "elevationM": 462
        },
        {
          "distanceKm": 4.827,
          "lat": 50.440462,
          "lon": 5.972443,
          "x": 217.38,
          "y": 86.28,
          "elevationM": 419
        },
        {
          "distanceKm": 4.926,
          "lat": 50.439716,
          "lon": 5.973192,
          "x": 222.67,
          "y": 94.56,
          "elevationM": 427
        },
        {
          "distanceKm": 5.024,
          "lat": 50.438973,
          "lon": 5.973949,
          "x": 228.01,
          "y": 102.79,
          "elevationM": 433
        },
        {
          "distanceKm": 5.123,
          "lat": 50.438191,
          "lon": 5.974593,
          "x": 232.56,
          "y": 111.46,
          "elevationM": 438
        },
        {
          "distanceKm": 5.221,
          "lat": 50.437337,
          "lon": 5.974962,
          "x": 235.16,
          "y": 120.93,
          "elevationM": 437
        },
        {
          "distanceKm": 5.32,
          "lat": 50.436485,
          "lon": 5.975344,
          "x": 237.86,
          "y": 130.37,
          "elevationM": 444
        },
        {
          "distanceKm": 5.418,
          "lat": 50.435633,
          "lon": 5.975726,
          "x": 240.55,
          "y": 139.81,
          "elevationM": 446
        },
        {
          "distanceKm": 5.517,
          "lat": 50.434781,
          "lon": 5.976107,
          "x": 243.25,
          "y": 149.26,
          "elevationM": 448
        },
        {
          "distanceKm": 5.615,
          "lat": 50.433929,
          "lon": 5.976487,
          "x": 245.93,
          "y": 158.7,
          "elevationM": 453
        },
        {
          "distanceKm": 5.714,
          "lat": 50.433076,
          "lon": 5.976867,
          "x": 248.61,
          "y": 168.15,
          "elevationM": 453
        },
        {
          "distanceKm": 5.812,
          "lat": 50.432224,
          "lon": 5.977247,
          "x": 251.3,
          "y": 177.6,
          "elevationM": 460
        },
        {
          "distanceKm": 5.911,
          "lat": 50.442043,
          "lon": 5.971493,
          "x": 210.67,
          "y": 68.76,
          "elevationM": 393
        },
        {
          "distanceKm": 6.009,
          "lat": 50.441224,
          "lon": 5.971971,
          "x": 214.05,
          "y": 77.83,
          "elevationM": 407
        },
        {
          "distanceKm": 6.108,
          "lat": 50.442702,
          "lon": 5.970198,
          "x": 201.53,
          "y": 61.45,
          "elevationM": 390
        },
        {
          "distanceKm": 6.207,
          "lat": 50.44558,
          "lon": 5.965718,
          "x": 169.9,
          "y": 29.55,
          "elevationM": 415
        },
        {
          "distanceKm": 6.305,
          "lat": 50.445077,
          "lon": 5.966861,
          "x": 177.97,
          "y": 35.13,
          "elevationM": 411
        },
        {
          "distanceKm": 6.404,
          "lat": 50.444459,
          "lon": 5.967855,
          "x": 184.99,
          "y": 41.98,
          "elevationM": 401
        },
        {
          "distanceKm": 6.502,
          "lat": 50.443786,
          "lon": 5.968761,
          "x": 191.38,
          "y": 49.43,
          "elevationM": 399
        },
        {
          "distanceKm": 6.601,
          "lat": 50.44311,
          "lon": 5.969659,
          "x": 197.72,
          "y": 56.93,
          "elevationM": 393
        },
        {
          "distanceKm": 6.699,
          "lat": 50.43774,
          "lon": 5.967625,
          "x": 183.36,
          "y": 116.46,
          "elevationM": 403
        },
        {
          "distanceKm": 6.798,
          "lat": 50.438568,
          "lon": 5.967131,
          "x": 179.88,
          "y": 107.28,
          "elevationM": 404
        },
        {
          "distanceKm": 6.896,
          "lat": 50.439412,
          "lon": 5.966716,
          "x": 176.95,
          "y": 97.92,
          "elevationM": 405
        },
        {
          "distanceKm": 6.995,
          "lat": 50.440291,
          "lon": 5.966547,
          "x": 175.76,
          "y": 88.18,
          "elevationM": 413
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
      "meanM": 410,
      "minM": 364,
      "maxM": 469,
      "rangeM": 105
    },
    "source": {
      "geometry": "OpenStreetMap relation 284560",
      "osmName": "Circuit de Spa Francorchamps",
      "wayCount": 30,
      "osmLengthKm": 6.995,
      "quality": "matched",
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": 47.577711,
          "lon": 19.250593,
          "x": 204.97,
          "y": 225.22,
          "elevationM": 238
        },
        {
          "distanceKm": 0.081,
          "lat": 47.578161,
          "lon": 19.249747,
          "x": 194.15,
          "y": 216.68,
          "elevationM": 237
        },
        {
          "distanceKm": 0.162,
          "lat": 47.578612,
          "lon": 19.2489,
          "x": 183.32,
          "y": 208.14,
          "elevationM": 237
        },
        {
          "distanceKm": 0.243,
          "lat": 47.579062,
          "lon": 19.248054,
          "x": 172.5,
          "y": 199.6,
          "elevationM": 237
        },
        {
          "distanceKm": 0.323,
          "lat": 47.579512,
          "lon": 19.247208,
          "x": 161.67,
          "y": 191.06,
          "elevationM": 237
        },
        {
          "distanceKm": 0.404,
          "lat": 47.579963,
          "lon": 19.246361,
          "x": 150.85,
          "y": 182.52,
          "elevationM": 235
        },
        {
          "distanceKm": 0.485,
          "lat": 47.580414,
          "lon": 19.245515,
          "x": 140.03,
          "y": 173.97,
          "elevationM": 233
        },
        {
          "distanceKm": 0.566,
          "lat": 47.580865,
          "lon": 19.24467,
          "x": 129.22,
          "y": 165.41,
          "elevationM": 232
        },
        {
          "distanceKm": 0.647,
          "lat": 47.581316,
          "lon": 19.243824,
          "x": 118.4,
          "y": 156.86,
          "elevationM": 231
        },
        {
          "distanceKm": 0.728,
          "lat": 47.581767,
          "lon": 19.242978,
          "x": 107.57,
          "y": 148.32,
          "elevationM": 232
        },
        {
          "distanceKm": 0.809,
          "lat": 47.582282,
          "lon": 19.242275,
          "x": 98.58,
          "y": 138.54,
          "elevationM": 229
        },
        {
          "distanceKm": 0.89,
          "lat": 47.582493,
          "lon": 19.243184,
          "x": 110.21,
          "y": 134.54,
          "elevationM": 227
        },
        {
          "distanceKm": 0.97,
          "lat": 47.582377,
          "lon": 19.244245,
          "x": 123.78,
          "y": 136.75,
          "elevationM": 224
        },
        {
          "distanceKm": 1.051,
          "lat": 47.58204,
          "lon": 19.245194,
          "x": 135.92,
          "y": 143.13,
          "elevationM": 224
        },
        {
          "distanceKm": 1.132,
          "lat": 47.58159,
          "lon": 19.24604,
          "x": 146.74,
          "y": 151.67,
          "elevationM": 224
        },
        {
          "distanceKm": 1.213,
          "lat": 47.581138,
          "lon": 19.246885,
          "x": 157.55,
          "y": 160.24,
          "elevationM": 223
        },
        {
          "distanceKm": 1.294,
          "lat": 47.580788,
          "lon": 19.247799,
          "x": 169.23,
          "y": 166.88,
          "elevationM": 218
        },
        {
          "distanceKm": 1.375,
          "lat": 47.581288,
          "lon": 19.248414,
          "x": 177.11,
          "y": 157.39,
          "elevationM": 215
        },
        {
          "distanceKm": 1.456,
          "lat": 47.581936,
          "lon": 19.247942,
          "x": 171.07,
          "y": 145.11,
          "elevationM": 212
        },
        {
          "distanceKm": 1.536,
          "lat": 47.58261,
          "lon": 19.247657,
          "x": 167.42,
          "y": 132.33,
          "elevationM": 206
        },
        {
          "distanceKm": 1.617,
          "lat": 47.583264,
          "lon": 19.248127,
          "x": 173.43,
          "y": 119.92,
          "elevationM": 203
        },
        {
          "distanceKm": 1.698,
          "lat": 47.583917,
          "lon": 19.248602,
          "x": 179.51,
          "y": 107.55,
          "elevationM": 201
        },
        {
          "distanceKm": 1.779,
          "lat": 47.584569,
          "lon": 19.249077,
          "x": 185.59,
          "y": 95.17,
          "elevationM": 203
        },
        {
          "distanceKm": 1.86,
          "lat": 47.585221,
          "lon": 19.249556,
          "x": 191.71,
          "y": 82.81,
          "elevationM": 207
        },
        {
          "distanceKm": 1.941,
          "lat": 47.585829,
          "lon": 19.250143,
          "x": 199.22,
          "y": 71.28,
          "elevationM": 213
        },
        {
          "distanceKm": 2.022,
          "lat": 47.586447,
          "lon": 19.250556,
          "x": 204.5,
          "y": 59.56,
          "elevationM": 211
        },
        {
          "distanceKm": 2.102,
          "lat": 47.587148,
          "lon": 19.250271,
          "x": 200.86,
          "y": 46.26,
          "elevationM": 211
        },
        {
          "distanceKm": 2.183,
          "lat": 47.587854,
          "lon": 19.250012,
          "x": 197.55,
          "y": 32.89,
          "elevationM": 214
        },
        {
          "distanceKm": 2.264,
          "lat": 47.588408,
          "lon": 19.250581,
          "x": 204.82,
          "y": 22.38,
          "elevationM": 215
        },
        {
          "distanceKm": 2.345,
          "lat": 47.588201,
          "lon": 19.251572,
          "x": 217.5,
          "y": 26.3,
          "elevationM": 221
        },
        {
          "distanceKm": 2.426,
          "lat": 47.587719,
          "lon": 19.252376,
          "x": 227.78,
          "y": 35.44,
          "elevationM": 224
        },
        {
          "distanceKm": 2.507,
          "lat": 47.587187,
          "lon": 19.253111,
          "x": 237.18,
          "y": 45.53,
          "elevationM": 225
        },
        {
          "distanceKm": 2.588,
          "lat": 47.586604,
          "lon": 19.253397,
          "x": 240.84,
          "y": 56.59,
          "elevationM": 224
        },
        {
          "distanceKm": 2.669,
          "lat": 47.585913,
          "lon": 19.253495,
          "x": 242.1,
          "y": 69.69,
          "elevationM": 223
        },
        {
          "distanceKm": 2.749,
          "lat": 47.585211,
          "lon": 19.253776,
          "x": 245.68,
          "y": 83.01,
          "elevationM": 225
        },
        {
          "distanceKm": 2.83,
          "lat": 47.584888,
          "lon": 19.254638,
          "x": 256.71,
          "y": 89.13,
          "elevationM": 226
        },
        {
          "distanceKm": 2.911,
          "lat": 47.584662,
          "lon": 19.255625,
          "x": 269.34,
          "y": 93.41,
          "elevationM": 228
        },
        {
          "distanceKm": 2.992,
          "lat": 47.583956,
          "lon": 19.255653,
          "x": 269.69,
          "y": 106.81,
          "elevationM": 228
        },
        {
          "distanceKm": 3.073,
          "lat": 47.583235,
          "lon": 19.255508,
          "x": 267.83,
          "y": 120.47,
          "elevationM": 231
        },
        {
          "distanceKm": 3.154,
          "lat": 47.582541,
          "lon": 19.255721,
          "x": 270.56,
          "y": 133.63,
          "elevationM": 231
        },
        {
          "distanceKm": 3.235,
          "lat": 47.581934,
          "lon": 19.256314,
          "x": 278.15,
          "y": 145.14,
          "elevationM": 233
        },
        {
          "distanceKm": 3.315,
          "lat": 47.581255,
          "lon": 19.256499,
          "x": 280.52,
          "y": 158.02,
          "elevationM": 233
        },
        {
          "distanceKm": 3.396,
          "lat": 47.580685,
          "lon": 19.255838,
          "x": 272.06,
          "y": 168.83,
          "elevationM": 235
        },
        {
          "distanceKm": 3.477,
          "lat": 47.580143,
          "lon": 19.255118,
          "x": 262.86,
          "y": 179.1,
          "elevationM": 234
        },
        {
          "distanceKm": 3.558,
          "lat": 47.579602,
          "lon": 19.254399,
          "x": 253.65,
          "y": 189.37,
          "elevationM": 231
        },
        {
          "distanceKm": 3.639,
          "lat": 47.57906,
          "lon": 19.253679,
          "x": 244.45,
          "y": 199.64,
          "elevationM": 232
        },
        {
          "distanceKm": 3.72,
          "lat": 47.57866,
          "lon": 19.252862,
          "x": 233.99,
          "y": 207.22,
          "elevationM": 232
        },
        {
          "distanceKm": 3.801,
          "lat": 47.579176,
          "lon": 19.25211,
          "x": 224.38,
          "y": 197.44,
          "elevationM": 227
        },
        {
          "distanceKm": 3.881,
          "lat": 47.579672,
          "lon": 19.251326,
          "x": 214.36,
          "y": 188.03,
          "elevationM": 225
        },
        {
          "distanceKm": 3.962,
          "lat": 47.57984,
          "lon": 19.250377,
          "x": 202.21,
          "y": 184.86,
          "elevationM": 224
        },
        {
          "distanceKm": 4.043,
          "lat": 47.579226,
          "lon": 19.250435,
          "x": 202.95,
          "y": 196.49,
          "elevationM": 229
        },
        {
          "distanceKm": 4.124,
          "lat": 47.57878,
          "lon": 19.251286,
          "x": 213.83,
          "y": 204.96,
          "elevationM": 231
        },
        {
          "distanceKm": 4.205,
          "lat": 47.578259,
          "lon": 19.251999,
          "x": 222.95,
          "y": 214.83,
          "elevationM": 232
        },
        {
          "distanceKm": 4.286,
          "lat": 47.577636,
          "lon": 19.251604,
          "x": 217.9,
          "y": 226.63,
          "elevationM": 237
        },
        {
          "distanceKm": 4.367,
          "lat": 47.577711,
          "lon": 19.250593,
          "x": 204.97,
          "y": 225.22,
          "elevationM": 238
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
      "minM": 201,
      "maxM": 238,
      "rangeM": 37
    },
    "source": {
      "geometry": "OpenStreetMap relation 284557",
      "osmName": "Hungaroring",
      "wayCount": 2,
      "osmLengthKm": 4.367,
      "quality": "matched",
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": 52.391624,
          "lon": 4.542645,
          "x": 135.35,
          "y": 27.81,
          "elevationM": 8
        },
        {
          "distanceKm": 0.082,
          "lat": 52.391696,
          "lon": 4.543644,
          "x": 152.16,
          "y": 25.83,
          "elevationM": 8
        },
        {
          "distanceKm": 0.164,
          "lat": 52.391008,
          "lon": 4.543541,
          "x": 150.43,
          "y": 44.82,
          "elevationM": 5
        },
        {
          "distanceKm": 0.245,
          "lat": 52.390329,
          "lon": 4.543078,
          "x": 142.64,
          "y": 63.55,
          "elevationM": 6
        },
        {
          "distanceKm": 0.327,
          "lat": 52.389608,
          "lon": 4.542885,
          "x": 139.39,
          "y": 83.47,
          "elevationM": 6
        },
        {
          "distanceKm": 0.409,
          "lat": 52.388958,
          "lon": 4.542517,
          "x": 133.19,
          "y": 101.39,
          "elevationM": 6
        },
        {
          "distanceKm": 0.491,
          "lat": 52.388677,
          "lon": 4.541406,
          "x": 114.48,
          "y": 109.16,
          "elevationM": 6
        },
        {
          "distanceKm": 0.573,
          "lat": 52.388122,
          "lon": 4.541684,
          "x": 119.16,
          "y": 124.46,
          "elevationM": 5
        },
        {
          "distanceKm": 0.654,
          "lat": 52.388319,
          "lon": 4.542839,
          "x": 138.62,
          "y": 119.03,
          "elevationM": 4
        },
        {
          "distanceKm": 0.736,
          "lat": 52.388479,
          "lon": 4.544013,
          "x": 158.38,
          "y": 114.61,
          "elevationM": 8
        },
        {
          "distanceKm": 0.818,
          "lat": 52.388431,
          "lon": 4.545211,
          "x": 178.56,
          "y": 115.94,
          "elevationM": 6
        },
        {
          "distanceKm": 0.9,
          "lat": 52.388279,
          "lon": 4.54639,
          "x": 198.42,
          "y": 120.12,
          "elevationM": 4
        },
        {
          "distanceKm": 0.982,
          "lat": 52.388387,
          "lon": 4.547565,
          "x": 218.21,
          "y": 117.14,
          "elevationM": 3
        },
        {
          "distanceKm": 1.063,
          "lat": 52.388755,
          "lon": 4.548607,
          "x": 235.77,
          "y": 107.01,
          "elevationM": 4
        },
        {
          "distanceKm": 1.145,
          "lat": 52.388969,
          "lon": 4.549747,
          "x": 254.95,
          "y": 101.1,
          "elevationM": 6
        },
        {
          "distanceKm": 1.227,
          "lat": 52.388939,
          "lon": 4.550951,
          "x": 275.23,
          "y": 101.91,
          "elevationM": 9
        },
        {
          "distanceKm": 1.309,
          "lat": 52.388838,
          "lon": 4.552138,
          "x": 295.23,
          "y": 104.7,
          "elevationM": 8
        },
        {
          "distanceKm": 1.39,
          "lat": 52.388328,
          "lon": 4.55296,
          "x": 309.07,
          "y": 118.78,
          "elevationM": 6
        },
        {
          "distanceKm": 1.472,
          "lat": 52.387614,
          "lon": 4.552908,
          "x": 308.2,
          "y": 138.5,
          "elevationM": 6
        },
        {
          "distanceKm": 1.554,
          "lat": 52.387002,
          "lon": 4.552241,
          "x": 296.96,
          "y": 155.38,
          "elevationM": 8
        },
        {
          "distanceKm": 1.636,
          "lat": 52.386365,
          "lon": 4.551643,
          "x": 286.9,
          "y": 172.95,
          "elevationM": 7
        },
        {
          "distanceKm": 1.718,
          "lat": 52.385752,
          "lon": 4.551022,
          "x": 276.43,
          "y": 189.88,
          "elevationM": 5
        },
        {
          "distanceKm": 1.799,
          "lat": 52.385771,
          "lon": 4.54983,
          "x": 256.35,
          "y": 189.34,
          "elevationM": 4
        },
        {
          "distanceKm": 1.881,
          "lat": 52.386076,
          "lon": 4.548742,
          "x": 238.03,
          "y": 180.91,
          "elevationM": 4
        },
        {
          "distanceKm": 1.963,
          "lat": 52.386655,
          "lon": 4.548324,
          "x": 231,
          "y": 164.94,
          "elevationM": 4
        },
        {
          "distanceKm": 2.045,
          "lat": 52.386942,
          "lon": 4.549402,
          "x": 249.15,
          "y": 157.03,
          "elevationM": 4
        },
        {
          "distanceKm": 2.127,
          "lat": 52.387128,
          "lon": 4.550564,
          "x": 268.71,
          "y": 151.89,
          "elevationM": 4
        },
        {
          "distanceKm": 2.208,
          "lat": 52.387697,
          "lon": 4.551102,
          "x": 277.78,
          "y": 136.19,
          "elevationM": 5
        },
        {
          "distanceKm": 2.29,
          "lat": 52.388017,
          "lon": 4.550113,
          "x": 261.12,
          "y": 127.35,
          "elevationM": 5
        },
        {
          "distanceKm": 2.372,
          "lat": 52.388062,
          "lon": 4.548911,
          "x": 240.87,
          "y": 126.13,
          "elevationM": 5
        },
        {
          "distanceKm": 2.454,
          "lat": 52.388011,
          "lon": 4.547709,
          "x": 220.63,
          "y": 127.53,
          "elevationM": 4
        },
        {
          "distanceKm": 2.536,
          "lat": 52.387884,
          "lon": 4.546522,
          "x": 200.65,
          "y": 131.02,
          "elevationM": 4
        },
        {
          "distanceKm": 2.617,
          "lat": 52.387679,
          "lon": 4.545366,
          "x": 181.17,
          "y": 136.7,
          "elevationM": 5
        },
        {
          "distanceKm": 2.699,
          "lat": 52.387408,
          "lon": 4.544246,
          "x": 162.3,
          "y": 144.18,
          "elevationM": 6
        },
        {
          "distanceKm": 2.781,
          "lat": 52.387111,
          "lon": 4.543162,
          "x": 144.05,
          "y": 152.37,
          "elevationM": 4
        },
        {
          "distanceKm": 2.863,
          "lat": 52.387442,
          "lon": 4.54224,
          "x": 128.52,
          "y": 143.23,
          "elevationM": 4
        },
        {
          "distanceKm": 2.945,
          "lat": 52.386785,
          "lon": 4.542041,
          "x": 125.18,
          "y": 161.37,
          "elevationM": 2
        },
        {
          "distanceKm": 3.026,
          "lat": 52.38606,
          "lon": 4.542243,
          "x": 128.58,
          "y": 181.38,
          "elevationM": 2
        },
        {
          "distanceKm": 3.108,
          "lat": 52.385334,
          "lon": 4.542445,
          "x": 131.98,
          "y": 201.39,
          "elevationM": 3
        },
        {
          "distanceKm": 3.19,
          "lat": 52.384618,
          "lon": 4.542445,
          "x": 131.97,
          "y": 221.17,
          "elevationM": 5
        },
        {
          "distanceKm": 3.272,
          "lat": 52.384379,
          "lon": 4.541375,
          "x": 113.95,
          "y": 227.76,
          "elevationM": 6
        },
        {
          "distanceKm": 3.353,
          "lat": 52.38441,
          "lon": 4.540176,
          "x": 93.75,
          "y": 226.9,
          "elevationM": 6
        },
        {
          "distanceKm": 3.435,
          "lat": 52.384799,
          "lon": 4.539174,
          "x": 76.88,
          "y": 216.16,
          "elevationM": 6
        },
        {
          "distanceKm": 3.517,
          "lat": 52.385471,
          "lon": 4.53873,
          "x": 69.4,
          "y": 197.63,
          "elevationM": 8
        },
        {
          "distanceKm": 3.599,
          "lat": 52.386181,
          "lon": 4.53898,
          "x": 73.61,
          "y": 178.02,
          "elevationM": 8
        },
        {
          "distanceKm": 3.681,
          "lat": 52.386861,
          "lon": 4.539441,
          "x": 81.37,
          "y": 159.26,
          "elevationM": 5
        },
        {
          "distanceKm": 3.762,
          "lat": 52.387542,
          "lon": 4.539899,
          "x": 89.09,
          "y": 140.48,
          "elevationM": 5
        },
        {
          "distanceKm": 3.844,
          "lat": 52.388222,
          "lon": 4.540356,
          "x": 96.79,
          "y": 121.71,
          "elevationM": 6
        },
        {
          "distanceKm": 3.926,
          "lat": 52.388902,
          "lon": 4.540814,
          "x": 104.51,
          "y": 102.93,
          "elevationM": 6
        },
        {
          "distanceKm": 4.008,
          "lat": 52.389583,
          "lon": 4.541272,
          "x": 112.22,
          "y": 84.15,
          "elevationM": 7
        },
        {
          "distanceKm": 4.09,
          "lat": 52.390263,
          "lon": 4.54173,
          "x": 119.93,
          "y": 65.37,
          "elevationM": 8
        },
        {
          "distanceKm": 4.171,
          "lat": 52.390944,
          "lon": 4.542188,
          "x": 127.64,
          "y": 46.59,
          "elevationM": 6
        },
        {
          "distanceKm": 4.253,
          "lat": 52.391624,
          "lon": 4.542645,
          "x": 135.35,
          "y": 27.81,
          "elevationM": 8
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
      "meanM": 6,
      "minM": 2,
      "maxM": 9,
      "rangeM": 7
    },
    "source": {
      "geometry": "OpenStreetMap relation 13545573",
      "osmName": "Grand Prix Formule 1 van Nederland",
      "wayCount": 24,
      "osmLengthKm": 4.253,
      "quality": "matched",
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": 45.620951,
          "lon": 9.284992,
          "x": 162.07,
          "y": 131.97,
          "elevationM": 190
        },
        {
          "distanceKm": 0.082,
          "lat": 45.620223,
          "lon": 9.284864,
          "x": 161.12,
          "y": 139.66,
          "elevationM": 187
        },
        {
          "distanceKm": 0.163,
          "lat": 45.619494,
          "lon": 9.284736,
          "x": 160.18,
          "y": 147.35,
          "elevationM": 183
        },
        {
          "distanceKm": 0.245,
          "lat": 45.618765,
          "lon": 9.284619,
          "x": 159.31,
          "y": 155.06,
          "elevationM": 185
        },
        {
          "distanceKm": 0.326,
          "lat": 45.618035,
          "lon": 9.28451,
          "x": 158.51,
          "y": 162.76,
          "elevationM": 182
        },
        {
          "distanceKm": 0.408,
          "lat": 45.617305,
          "lon": 9.284401,
          "x": 157.71,
          "y": 170.47,
          "elevationM": 180
        },
        {
          "distanceKm": 0.49,
          "lat": 45.616575,
          "lon": 9.284292,
          "x": 156.9,
          "y": 178.18,
          "elevationM": 182
        },
        {
          "distanceKm": 0.571,
          "lat": 45.615845,
          "lon": 9.284183,
          "x": 156.1,
          "y": 185.89,
          "elevationM": 186
        },
        {
          "distanceKm": 0.653,
          "lat": 45.615115,
          "lon": 9.284076,
          "x": 155.3,
          "y": 193.6,
          "elevationM": 186
        },
        {
          "distanceKm": 0.734,
          "lat": 45.614385,
          "lon": 9.283968,
          "x": 154.51,
          "y": 201.31,
          "elevationM": 182
        },
        {
          "distanceKm": 0.816,
          "lat": 45.613655,
          "lon": 9.28386,
          "x": 153.71,
          "y": 209.02,
          "elevationM": 180
        },
        {
          "distanceKm": 0.898,
          "lat": 45.612925,
          "lon": 9.283752,
          "x": 152.91,
          "y": 216.73,
          "elevationM": 181
        },
        {
          "distanceKm": 0.979,
          "lat": 45.621874,
          "lon": 9.285871,
          "x": 168.57,
          "y": 122.22,
          "elevationM": 193
        },
        {
          "distanceKm": 1.061,
          "lat": 45.621304,
          "lon": 9.285249,
          "x": 163.97,
          "y": 128.24,
          "elevationM": 190
        },
        {
          "distanceKm": 1.142,
          "lat": 45.622776,
          "lon": 9.285995,
          "x": 169.48,
          "y": 112.69,
          "elevationM": 189
        },
        {
          "distanceKm": 1.224,
          "lat": 45.62441,
          "lon": 9.288662,
          "x": 189.18,
          "y": 95.44,
          "elevationM": 197
        },
        {
          "distanceKm": 1.306,
          "lat": 45.623927,
          "lon": 9.287872,
          "x": 183.35,
          "y": 100.54,
          "elevationM": 194
        },
        {
          "distanceKm": 1.387,
          "lat": 45.623443,
          "lon": 9.287082,
          "x": 177.51,
          "y": 105.65,
          "elevationM": 194
        },
        {
          "distanceKm": 1.469,
          "lat": 45.62296,
          "lon": 9.286292,
          "x": 171.68,
          "y": 110.75,
          "elevationM": 191
        },
        {
          "distanceKm": 1.551,
          "lat": 45.625916,
          "lon": 9.291123,
          "x": 207.36,
          "y": 79.53,
          "elevationM": 195
        },
        {
          "distanceKm": 1.632,
          "lat": 45.625432,
          "lon": 9.290333,
          "x": 201.53,
          "y": 84.64,
          "elevationM": 197
        },
        {
          "distanceKm": 1.714,
          "lat": 45.624949,
          "lon": 9.289544,
          "x": 195.69,
          "y": 89.74,
          "elevationM": 191
        },
        {
          "distanceKm": 1.795,
          "lat": 45.626525,
          "lon": 9.292148,
          "x": 214.93,
          "y": 73.09,
          "elevationM": 193
        },
        {
          "distanceKm": 1.877,
          "lat": 45.628289,
          "lon": 9.296522,
          "x": 247.24,
          "y": 54.46,
          "elevationM": 192
        },
        {
          "distanceKm": 1.959,
          "lat": 45.627932,
          "lon": 9.295605,
          "x": 240.47,
          "y": 58.24,
          "elevationM": 194
        },
        {
          "distanceKm": 2.04,
          "lat": 45.627574,
          "lon": 9.294688,
          "x": 233.7,
          "y": 62.01,
          "elevationM": 194
        },
        {
          "distanceKm": 2.122,
          "lat": 45.627217,
          "lon": 9.293772,
          "x": 226.93,
          "y": 65.79,
          "elevationM": 196
        },
        {
          "distanceKm": 2.203,
          "lat": 45.626858,
          "lon": 9.292856,
          "x": 220.16,
          "y": 69.57,
          "elevationM": 195
        },
        {
          "distanceKm": 2.285,
          "lat": 45.630404,
          "lon": 9.296624,
          "x": 248,
          "y": 32.12,
          "elevationM": 194
        },
        {
          "distanceKm": 2.367,
          "lat": 45.629673,
          "lon": 9.29672,
          "x": 248.71,
          "y": 39.84,
          "elevationM": 198
        },
        {
          "distanceKm": 2.448,
          "lat": 45.628942,
          "lon": 9.296817,
          "x": 249.42,
          "y": 47.56,
          "elevationM": 193
        },
        {
          "distanceKm": 2.53,
          "lat": 45.631312,
          "lon": 9.295987,
          "x": 243.29,
          "y": 22.53,
          "elevationM": 196
        },
        {
          "distanceKm": 2.611,
          "lat": 45.630749,
          "lon": 9.296577,
          "x": 247.65,
          "y": 28.47,
          "elevationM": 192
        },
        {
          "distanceKm": 2.693,
          "lat": 45.630726,
          "lon": 9.292728,
          "x": 219.22,
          "y": 28.72,
          "elevationM": 192
        },
        {
          "distanceKm": 2.775,
          "lat": 45.630957,
          "lon": 9.293724,
          "x": 226.57,
          "y": 26.28,
          "elevationM": 197
        },
        {
          "distanceKm": 2.856,
          "lat": 45.631186,
          "lon": 9.294721,
          "x": 233.94,
          "y": 23.86,
          "elevationM": 192
        },
        {
          "distanceKm": 2.938,
          "lat": 45.630335,
          "lon": 9.291509,
          "x": 210.21,
          "y": 32.85,
          "elevationM": 196
        },
        {
          "distanceKm": 3.019,
          "lat": 45.629965,
          "lon": 9.287095,
          "x": 177.61,
          "y": 36.76,
          "elevationM": 193
        },
        {
          "distanceKm": 3.101,
          "lat": 45.630024,
          "lon": 9.288142,
          "x": 185.34,
          "y": 36.14,
          "elevationM": 196
        },
        {
          "distanceKm": 3.183,
          "lat": 45.63008,
          "lon": 9.289188,
          "x": 193.07,
          "y": 35.55,
          "elevationM": 193
        },
        {
          "distanceKm": 3.264,
          "lat": 45.630123,
          "lon": 9.290236,
          "x": 200.81,
          "y": 35.09,
          "elevationM": 195
        },
        {
          "distanceKm": 3.346,
          "lat": 45.627393,
          "lon": 9.282211,
          "x": 141.53,
          "y": 63.93,
          "elevationM": 194
        },
        {
          "distanceKm": 3.427,
          "lat": 45.628101,
          "lon": 9.282471,
          "x": 143.45,
          "y": 56.45,
          "elevationM": 194
        },
        {
          "distanceKm": 3.509,
          "lat": 45.628734,
          "lon": 9.282994,
          "x": 147.31,
          "y": 49.76,
          "elevationM": 192
        },
        {
          "distanceKm": 3.591,
          "lat": 45.629241,
          "lon": 9.283749,
          "x": 152.89,
          "y": 44.41,
          "elevationM": 189
        },
        {
          "distanceKm": 3.672,
          "lat": 45.62961,
          "lon": 9.284653,
          "x": 159.57,
          "y": 40.51,
          "elevationM": 195
        },
        {
          "distanceKm": 3.754,
          "lat": 45.629837,
          "lon": 9.285649,
          "x": 166.92,
          "y": 38.11,
          "elevationM": 196
        },
        {
          "distanceKm": 3.836,
          "lat": 45.624896,
          "lon": 9.282399,
          "x": 142.92,
          "y": 90.3,
          "elevationM": 190
        },
        {
          "distanceKm": 3.917,
          "lat": 45.625608,
          "lon": 9.282144,
          "x": 141.03,
          "y": 82.79,
          "elevationM": 192
        },
        {
          "distanceKm": 3.999,
          "lat": 45.626338,
          "lon": 9.282091,
          "x": 140.64,
          "y": 75.07,
          "elevationM": 194
        },
        {
          "distanceKm": 4.08,
          "lat": 45.62707,
          "lon": 9.282174,
          "x": 141.25,
          "y": 67.34,
          "elevationM": 193
        },
        {
          "distanceKm": 4.162,
          "lat": 45.624536,
          "lon": 9.282388,
          "x": 142.83,
          "y": 94.11,
          "elevationM": 189
        },
        {
          "distanceKm": 4.244,
          "lat": 45.616634,
          "lon": 9.280834,
          "x": 131.35,
          "y": 177.56,
          "elevationM": 182
        },
        {
          "distanceKm": 4.325,
          "lat": 45.617364,
          "lon": 9.28094,
          "x": 132.14,
          "y": 169.85,
          "elevationM": 184
        },
        {
          "distanceKm": 4.407,
          "lat": 45.618094,
          "lon": 9.281046,
          "x": 132.93,
          "y": 162.14,
          "elevationM": 184
        },
        {
          "distanceKm": 4.488,
          "lat": 45.618825,
          "lon": 9.281153,
          "x": 133.71,
          "y": 154.43,
          "elevationM": 189
        },
        {
          "distanceKm": 4.57,
          "lat": 45.619553,
          "lon": 9.281275,
          "x": 134.62,
          "y": 146.73,
          "elevationM": 188
        },
        {
          "distanceKm": 4.652,
          "lat": 45.620284,
          "lon": 9.281368,
          "x": 135.3,
          "y": 139.01,
          "elevationM": 184
        },
        {
          "distanceKm": 4.733,
          "lat": 45.621016,
          "lon": 9.28146,
          "x": 135.98,
          "y": 131.29,
          "elevationM": 188
        },
        {
          "distanceKm": 4.815,
          "lat": 45.621747,
          "lon": 9.281552,
          "x": 136.66,
          "y": 123.57,
          "elevationM": 186
        },
        {
          "distanceKm": 4.896,
          "lat": 45.622478,
          "lon": 9.281645,
          "x": 137.35,
          "y": 115.85,
          "elevationM": 188
        },
        {
          "distanceKm": 4.978,
          "lat": 45.623209,
          "lon": 9.281737,
          "x": 138.03,
          "y": 108.12,
          "elevationM": 185
        },
        {
          "distanceKm": 5.06,
          "lat": 45.62394,
          "lon": 9.28183,
          "x": 138.71,
          "y": 100.4,
          "elevationM": 186
        },
        {
          "distanceKm": 5.141,
          "lat": 45.612316,
          "lon": 9.283631,
          "x": 152.02,
          "y": 223.16,
          "elevationM": 181
        },
        {
          "distanceKm": 5.223,
          "lat": 45.611873,
          "lon": 9.282847,
          "x": 146.22,
          "y": 227.84,
          "elevationM": 182
        },
        {
          "distanceKm": 5.304,
          "lat": 45.612044,
          "lon": 9.281852,
          "x": 138.87,
          "y": 226.03,
          "elevationM": 181
        },
        {
          "distanceKm": 5.386,
          "lat": 45.612575,
          "lon": 9.281141,
          "x": 133.63,
          "y": 220.43,
          "elevationM": 179
        },
        {
          "distanceKm": 5.468,
          "lat": 45.613263,
          "lon": 9.28079,
          "x": 131.03,
          "y": 213.17,
          "elevationM": 180
        },
        {
          "distanceKm": 5.549,
          "lat": 45.613994,
          "lon": 9.280717,
          "x": 130.49,
          "y": 205.45,
          "elevationM": 181
        },
        {
          "distanceKm": 5.631,
          "lat": 45.614727,
          "lon": 9.280696,
          "x": 130.34,
          "y": 197.7,
          "elevationM": 182
        },
        {
          "distanceKm": 5.712,
          "lat": 45.615461,
          "lon": 9.280697,
          "x": 130.35,
          "y": 189.95,
          "elevationM": 182
        },
        {
          "distanceKm": 5.794,
          "lat": 45.616193,
          "lon": 9.280769,
          "x": 130.88,
          "y": 182.22,
          "elevationM": 182
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
      "meanM": 189,
      "minM": 179,
      "maxM": 198,
      "rangeM": 19
    },
    "source": {
      "geometry": "OpenStreetMap relation 284565",
      "osmName": "Autodromo Nazionale di Monza",
      "wayCount": 20,
      "osmLengthKm": 5.794,
      "quality": "matched",
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": 40.368845,
          "lon": 49.836359,
          "x": 112.62,
          "y": 133.2,
          "elevationM": -8
        },
        {
          "distanceKm": 0.085,
          "lat": 40.368744,
          "lon": 49.837306,
          "x": 123.57,
          "y": 134.73,
          "elevationM": -11
        },
        {
          "distanceKm": 0.169,
          "lat": 40.368044,
          "lon": 49.837665,
          "x": 127.72,
          "y": 145.37,
          "elevationM": -13
        },
        {
          "distanceKm": 0.254,
          "lat": 40.367325,
          "lon": 49.837989,
          "x": 131.47,
          "y": 156.29,
          "elevationM": -17
        },
        {
          "distanceKm": 0.338,
          "lat": 40.368528,
          "lon": 49.840818,
          "x": 164.2,
          "y": 138.01,
          "elevationM": -15
        },
        {
          "distanceKm": 0.423,
          "lat": 40.368062,
          "lon": 49.84003,
          "x": 155.08,
          "y": 145.1,
          "elevationM": -15
        },
        {
          "distanceKm": 0.507,
          "lat": 40.3676,
          "lon": 49.839238,
          "x": 145.92,
          "y": 152.12,
          "elevationM": -20
        },
        {
          "distanceKm": 0.592,
          "lat": 40.367134,
          "lon": 49.838449,
          "x": 136.79,
          "y": 159.19,
          "elevationM": -20
        },
        {
          "distanceKm": 0.676,
          "lat": 40.368736,
          "lon": 49.841167,
          "x": 168.24,
          "y": 134.87,
          "elevationM": -14
        },
        {
          "distanceKm": 0.761,
          "lat": 40.369365,
          "lon": 49.841796,
          "x": 175.51,
          "y": 125.31,
          "elevationM": -14
        },
        {
          "distanceKm": 0.845,
          "lat": 40.370257,
          "lon": 49.842747,
          "x": 186.51,
          "y": 111.77,
          "elevationM": -17
        },
        {
          "distanceKm": 0.93,
          "lat": 40.371076,
          "lon": 49.845012,
          "x": 212.71,
          "y": 99.33,
          "elevationM": -13
        },
        {
          "distanceKm": 1.015,
          "lat": 40.370769,
          "lon": 49.844099,
          "x": 202.16,
          "y": 104,
          "elevationM": -13
        },
        {
          "distanceKm": 1.099,
          "lat": 40.372098,
          "lon": 49.844598,
          "x": 207.92,
          "y": 83.81,
          "elevationM": -19
        },
        {
          "distanceKm": 1.184,
          "lat": 40.3714,
          "lon": 49.844992,
          "x": 212.48,
          "y": 94.42,
          "elevationM": -16
        },
        {
          "distanceKm": 1.268,
          "lat": 40.372676,
          "lon": 49.844308,
          "x": 204.57,
          "y": 75.04,
          "elevationM": -18
        },
        {
          "distanceKm": 1.353,
          "lat": 40.373202,
          "lon": 49.844519,
          "x": 207.01,
          "y": 67.06,
          "elevationM": -18
        },
        {
          "distanceKm": 1.437,
          "lat": 40.373519,
          "lon": 49.845426,
          "x": 217.5,
          "y": 62.24,
          "elevationM": -17
        },
        {
          "distanceKm": 1.522,
          "lat": 40.373836,
          "lon": 49.846333,
          "x": 227.99,
          "y": 57.42,
          "elevationM": -11
        },
        {
          "distanceKm": 1.606,
          "lat": 40.37415,
          "lon": 49.847242,
          "x": 238.51,
          "y": 52.65,
          "elevationM": -16
        },
        {
          "distanceKm": 1.691,
          "lat": 40.374464,
          "lon": 49.848151,
          "x": 249.03,
          "y": 47.88,
          "elevationM": -12
        },
        {
          "distanceKm": 1.775,
          "lat": 40.374778,
          "lon": 49.84906,
          "x": 259.54,
          "y": 43.11,
          "elevationM": -11
        },
        {
          "distanceKm": 1.86,
          "lat": 40.375084,
          "lon": 49.849974,
          "x": 270.11,
          "y": 38.47,
          "elevationM": -10
        },
        {
          "distanceKm": 1.945,
          "lat": 40.37537,
          "lon": 49.850898,
          "x": 280.81,
          "y": 34.13,
          "elevationM": -11
        },
        {
          "distanceKm": 2.029,
          "lat": 40.375658,
          "lon": 49.851822,
          "x": 291.49,
          "y": 29.75,
          "elevationM": -16
        },
        {
          "distanceKm": 2.114,
          "lat": 40.375925,
          "lon": 49.852756,
          "x": 302.3,
          "y": 25.69,
          "elevationM": -19
        },
        {
          "distanceKm": 2.198,
          "lat": 40.37609,
          "lon": 49.853628,
          "x": 312.38,
          "y": 23.2,
          "elevationM": -19
        },
        {
          "distanceKm": 2.283,
          "lat": 40.375392,
          "lon": 49.854023,
          "x": 316.95,
          "y": 33.8,
          "elevationM": -16
        },
        {
          "distanceKm": 2.367,
          "lat": 40.374705,
          "lon": 49.854451,
          "x": 321.91,
          "y": 44.22,
          "elevationM": -21
        },
        {
          "distanceKm": 2.452,
          "lat": 40.374014,
          "lon": 49.854868,
          "x": 326.73,
          "y": 54.71,
          "elevationM": -24
        },
        {
          "distanceKm": 2.536,
          "lat": 40.372096,
          "lon": 49.851414,
          "x": 286.78,
          "y": 83.84,
          "elevationM": -18
        },
        {
          "distanceKm": 2.621,
          "lat": 40.372395,
          "lon": 49.852332,
          "x": 297.39,
          "y": 79.3,
          "elevationM": -24
        },
        {
          "distanceKm": 2.706,
          "lat": 40.372695,
          "lon": 49.853249,
          "x": 308,
          "y": 74.75,
          "elevationM": -19
        },
        {
          "distanceKm": 2.79,
          "lat": 40.372994,
          "lon": 49.854166,
          "x": 318.61,
          "y": 70.21,
          "elevationM": -22
        },
        {
          "distanceKm": 2.875,
          "lat": 40.373293,
          "lon": 49.855084,
          "x": 329.23,
          "y": 65.66,
          "elevationM": -17
        },
        {
          "distanceKm": 2.959,
          "lat": 40.371465,
          "lon": 49.849466,
          "x": 264.24,
          "y": 93.42,
          "elevationM": -8
        },
        {
          "distanceKm": 3.044,
          "lat": 40.371761,
          "lon": 49.850386,
          "x": 274.88,
          "y": 88.93,
          "elevationM": -17
        },
        {
          "distanceKm": 3.128,
          "lat": 40.37206,
          "lon": 49.851303,
          "x": 285.49,
          "y": 84.39,
          "elevationM": -19
        },
        {
          "distanceKm": 3.213,
          "lat": 40.370486,
          "lon": 49.846462,
          "x": 229.48,
          "y": 108.29,
          "elevationM": -12
        },
        {
          "distanceKm": 3.297,
          "lat": 40.370789,
          "lon": 49.847377,
          "x": 240.07,
          "y": 103.69,
          "elevationM": -18
        },
        {
          "distanceKm": 3.382,
          "lat": 40.371086,
          "lon": 49.848296,
          "x": 250.7,
          "y": 99.18,
          "elevationM": -17
        },
        {
          "distanceKm": 3.466,
          "lat": 40.368967,
          "lon": 49.841871,
          "x": 176.38,
          "y": 131.35,
          "elevationM": -15
        },
        {
          "distanceKm": 3.551,
          "lat": 40.369283,
          "lon": 49.842779,
          "x": 186.88,
          "y": 126.56,
          "elevationM": -15
        },
        {
          "distanceKm": 3.636,
          "lat": 40.369584,
          "lon": 49.843695,
          "x": 197.48,
          "y": 121.99,
          "elevationM": -20
        },
        {
          "distanceKm": 3.72,
          "lat": 40.369882,
          "lon": 49.844613,
          "x": 208.1,
          "y": 117.46,
          "elevationM": -13
        },
        {
          "distanceKm": 3.805,
          "lat": 40.370181,
          "lon": 49.845531,
          "x": 218.72,
          "y": 112.93,
          "elevationM": -15
        },
        {
          "distanceKm": 3.889,
          "lat": 40.363904,
          "lon": 49.835813,
          "x": 106.29,
          "y": 208.22,
          "elevationM": -17
        },
        {
          "distanceKm": 3.974,
          "lat": 40.364474,
          "lon": 49.836456,
          "x": 113.74,
          "y": 199.57,
          "elevationM": -22
        },
        {
          "distanceKm": 4.058,
          "lat": 40.364988,
          "lon": 49.837191,
          "x": 122.24,
          "y": 191.76,
          "elevationM": -20
        },
        {
          "distanceKm": 4.143,
          "lat": 40.365503,
          "lon": 49.837926,
          "x": 130.74,
          "y": 183.95,
          "elevationM": -21
        },
        {
          "distanceKm": 4.227,
          "lat": 40.366211,
          "lon": 49.838223,
          "x": 134.17,
          "y": 173.21,
          "elevationM": -18
        },
        {
          "distanceKm": 4.312,
          "lat": 40.366953,
          "lon": 49.83843,
          "x": 136.57,
          "y": 161.94,
          "elevationM": -19
        },
        {
          "distanceKm": 4.396,
          "lat": 40.36744,
          "lon": 49.839188,
          "x": 145.34,
          "y": 154.55,
          "elevationM": -21
        },
        {
          "distanceKm": 4.481,
          "lat": 40.367906,
          "lon": 49.839976,
          "x": 154.46,
          "y": 147.46,
          "elevationM": -17
        },
        {
          "distanceKm": 4.566,
          "lat": 40.368372,
          "lon": 49.840764,
          "x": 163.58,
          "y": 140.38,
          "elevationM": -15
        },
        {
          "distanceKm": 4.65,
          "lat": 40.363006,
          "lon": 49.833446,
          "x": 78.92,
          "y": 221.87,
          "elevationM": -18
        },
        {
          "distanceKm": 4.735,
          "lat": 40.362687,
          "lon": 49.834352,
          "x": 89.4,
          "y": 226.7,
          "elevationM": -19
        },
        {
          "distanceKm": 4.819,
          "lat": 40.362866,
          "lon": 49.835172,
          "x": 98.89,
          "y": 223.99,
          "elevationM": -22
        },
        {
          "distanceKm": 4.904,
          "lat": 40.36346,
          "lon": 49.832261,
          "x": 65.21,
          "y": 214.97,
          "elevationM": -11
        },
        {
          "distanceKm": 4.988,
          "lat": 40.363111,
          "lon": 49.833148,
          "x": 75.47,
          "y": 220.26,
          "elevationM": -16
        },
        {
          "distanceKm": 5.073,
          "lat": 40.363957,
          "lon": 49.831079,
          "x": 51.54,
          "y": 207.43,
          "elevationM": 5
        },
        {
          "distanceKm": 5.157,
          "lat": 40.365421,
          "lon": 49.830959,
          "x": 50.14,
          "y": 185.2,
          "elevationM": 10
        },
        {
          "distanceKm": 5.242,
          "lat": 40.364662,
          "lon": 49.831024,
          "x": 50.89,
          "y": 196.72,
          "elevationM": 5
        },
        {
          "distanceKm": 5.326,
          "lat": 40.36621,
          "lon": 49.830965,
          "x": 50.22,
          "y": 173.22,
          "elevationM": 12
        },
        {
          "distanceKm": 5.411,
          "lat": 40.366937,
          "lon": 49.831254,
          "x": 53.56,
          "y": 162.17,
          "elevationM": 10
        },
        {
          "distanceKm": 5.496,
          "lat": 40.367666,
          "lon": 49.831538,
          "x": 56.84,
          "y": 151.11,
          "elevationM": 10
        },
        {
          "distanceKm": 5.58,
          "lat": 40.368186,
          "lon": 49.832224,
          "x": 64.78,
          "y": 143.22,
          "elevationM": 8
        },
        {
          "distanceKm": 5.665,
          "lat": 40.368576,
          "lon": 49.833081,
          "x": 74.69,
          "y": 137.29,
          "elevationM": 6
        },
        {
          "distanceKm": 5.749,
          "lat": 40.368905,
          "lon": 49.83398,
          "x": 85.09,
          "y": 132.29,
          "elevationM": 3
        },
        {
          "distanceKm": 5.834,
          "lat": 40.369176,
          "lon": 49.834904,
          "x": 95.78,
          "y": 128.18,
          "elevationM": -4
        },
        {
          "distanceKm": 5.918,
          "lat": 40.369401,
          "lon": 49.835852,
          "x": 106.75,
          "y": 124.77,
          "elevationM": -14
        },
        {
          "distanceKm": 6.003,
          "lat": 40.368845,
          "lon": 49.836359,
          "x": 112.62,
          "y": 133.2,
          "elevationM": -8
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
      "meanM": -13,
      "minM": -24,
      "maxM": 12,
      "rangeM": 36
    },
    "source": {
      "geometry": "OpenStreetMap relation 11266687",
      "osmName": "Baku City Circuit",
      "wayCount": 42,
      "osmLengthKm": 6.003,
      "quality": "matched",
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": 1.288701,
          "lon": 103.862841,
          "x": 311.68,
          "y": 174.92,
          "elevationM": 0
        },
        {
          "distanceKm": 0.081,
          "lat": 1.288674,
          "lon": 103.863573,
          "x": 329.91,
          "y": 175.61,
          "elevationM": 0
        },
        {
          "distanceKm": 0.163,
          "lat": 1.288944,
          "lon": 103.864164,
          "x": 344.65,
          "y": 168.87,
          "elevationM": 0
        },
        {
          "distanceKm": 0.244,
          "lat": 1.289596,
          "lon": 103.864453,
          "x": 351.83,
          "y": 152.63,
          "elevationM": 0
        },
        {
          "distanceKm": 0.326,
          "lat": 1.290324,
          "lon": 103.86437,
          "x": 349.78,
          "y": 134.5,
          "elevationM": 1
        },
        {
          "distanceKm": 0.407,
          "lat": 1.291051,
          "lon": 103.864286,
          "x": 347.68,
          "y": 116.37,
          "elevationM": 4
        },
        {
          "distanceKm": 0.489,
          "lat": 1.291778,
          "lon": 103.864199,
          "x": 345.51,
          "y": 98.26,
          "elevationM": 0
        },
        {
          "distanceKm": 0.57,
          "lat": 1.292503,
          "lon": 103.864091,
          "x": 342.81,
          "y": 80.21,
          "elevationM": 15
        },
        {
          "distanceKm": 0.651,
          "lat": 1.293227,
          "lon": 103.863982,
          "x": 340.11,
          "y": 62.17,
          "elevationM": 6
        },
        {
          "distanceKm": 0.733,
          "lat": 1.293951,
          "lon": 103.863874,
          "x": 337.41,
          "y": 44.12,
          "elevationM": 12
        },
        {
          "distanceKm": 0.814,
          "lat": 1.294358,
          "lon": 103.863455,
          "x": 326.98,
          "y": 34,
          "elevationM": 25
        },
        {
          "distanceKm": 0.896,
          "lat": 1.28876,
          "lon": 103.862228,
          "x": 296.42,
          "y": 173.45,
          "elevationM": 0
        },
        {
          "distanceKm": 0.977,
          "lat": 1.289616,
          "lon": 103.851709,
          "x": 34.42,
          "y": 152.12,
          "elevationM": 14
        },
        {
          "distanceKm": 1.059,
          "lat": 1.28907,
          "lon": 103.85148,
          "x": 28.72,
          "y": 165.73,
          "elevationM": 10
        },
        {
          "distanceKm": 1.14,
          "lat": 1.28851,
          "lon": 103.85223,
          "x": 47.39,
          "y": 179.69,
          "elevationM": 24
        },
        {
          "distanceKm": 1.221,
          "lat": 1.288119,
          "lon": 103.852378,
          "x": 51.08,
          "y": 189.42,
          "elevationM": 17
        },
        {
          "distanceKm": 1.303,
          "lat": 1.287383,
          "lon": 103.85292,
          "x": 64.58,
          "y": 207.75,
          "elevationM": -8
        },
        {
          "distanceKm": 1.384,
          "lat": 1.286877,
          "lon": 103.85344,
          "x": 77.52,
          "y": 220.38,
          "elevationM": 7
        },
        {
          "distanceKm": 1.466,
          "lat": 1.289398,
          "lon": 103.854316,
          "x": 99.35,
          "y": 157.57,
          "elevationM": 8
        },
        {
          "distanceKm": 1.547,
          "lat": 1.290085,
          "lon": 103.854568,
          "x": 105.63,
          "y": 140.44,
          "elevationM": 4
        },
        {
          "distanceKm": 1.629,
          "lat": 1.287089,
          "lon": 103.853854,
          "x": 87.84,
          "y": 215.08,
          "elevationM": 5
        },
        {
          "distanceKm": 1.71,
          "lat": 1.287809,
          "lon": 103.853991,
          "x": 91.24,
          "y": 197.15,
          "elevationM": 6
        },
        {
          "distanceKm": 1.792,
          "lat": 1.288528,
          "lon": 103.854127,
          "x": 94.64,
          "y": 179.23,
          "elevationM": 4
        },
        {
          "distanceKm": 1.873,
          "lat": 1.289248,
          "lon": 103.854263,
          "x": 98.04,
          "y": 161.3,
          "elevationM": 9
        },
        {
          "distanceKm": 1.954,
          "lat": 1.290404,
          "lon": 103.854685,
          "x": 108.54,
          "y": 132.5,
          "elevationM": 5
        },
        {
          "distanceKm": 2.036,
          "lat": 1.291076,
          "lon": 103.855299,
          "x": 123.84,
          "y": 115.76,
          "elevationM": 26
        },
        {
          "distanceKm": 2.117,
          "lat": 1.290433,
          "lon": 103.856047,
          "x": 142.46,
          "y": 131.79,
          "elevationM": 8
        },
        {
          "distanceKm": 2.199,
          "lat": 1.289873,
          "lon": 103.856748,
          "x": 159.92,
          "y": 145.72,
          "elevationM": 8
        },
        {
          "distanceKm": 2.28,
          "lat": 1.289768,
          "lon": 103.857158,
          "x": 170.13,
          "y": 148.34,
          "elevationM": 2
        },
        {
          "distanceKm": 2.362,
          "lat": 1.289719,
          "lon": 103.85797,
          "x": 190.36,
          "y": 149.55,
          "elevationM": 12
        },
        {
          "distanceKm": 2.443,
          "lat": 1.289702,
          "lon": 103.858303,
          "x": 198.66,
          "y": 150,
          "elevationM": 15
        },
        {
          "distanceKm": 2.524,
          "lat": 1.289647,
          "lon": 103.859361,
          "x": 225.01,
          "y": 151.37,
          "elevationM": 21
        },
        {
          "distanceKm": 2.606,
          "lat": 1.289585,
          "lon": 103.860506,
          "x": 253.53,
          "y": 152.91,
          "elevationM": 25
        },
        {
          "distanceKm": 2.687,
          "lat": 1.289576,
          "lon": 103.860678,
          "x": 257.82,
          "y": 153.14,
          "elevationM": 28
        },
        {
          "distanceKm": 2.769,
          "lat": 1.289218,
          "lon": 103.861277,
          "x": 272.73,
          "y": 162.04,
          "elevationM": 22
        },
        {
          "distanceKm": 2.85,
          "lat": 1.28881,
          "lon": 103.861762,
          "x": 284.8,
          "y": 172.22,
          "elevationM": 10
        },
        {
          "distanceKm": 2.932,
          "lat": 1.294837,
          "lon": 103.862652,
          "x": 306.98,
          "y": 22.05,
          "elevationM": 16
        },
        {
          "distanceKm": 3.013,
          "lat": 1.293914,
          "lon": 103.862351,
          "x": 299.49,
          "y": 45.06,
          "elevationM": 14
        },
        {
          "distanceKm": 3.094,
          "lat": 1.293565,
          "lon": 103.862434,
          "x": 301.55,
          "y": 53.74,
          "elevationM": 21
        },
        {
          "distanceKm": 3.176,
          "lat": 1.29209,
          "lon": 103.862884,
          "x": 312.77,
          "y": 90.5,
          "elevationM": 24
        },
        {
          "distanceKm": 3.257,
          "lat": 1.292804,
          "lon": 103.86273,
          "x": 308.92,
          "y": 72.7,
          "elevationM": 17
        },
        {
          "distanceKm": 3.339,
          "lat": 1.291359,
          "lon": 103.862658,
          "x": 307.14,
          "y": 108.71,
          "elevationM": 14
        },
        {
          "distanceKm": 3.42,
          "lat": 1.291259,
          "lon": 103.862325,
          "x": 298.84,
          "y": 111.19,
          "elevationM": 12
        },
        {
          "distanceKm": 3.502,
          "lat": 1.291341,
          "lon": 103.861383,
          "x": 275.38,
          "y": 109.15,
          "elevationM": 29
        },
        {
          "distanceKm": 3.583,
          "lat": 1.291355,
          "lon": 103.860603,
          "x": 255.95,
          "y": 108.8,
          "elevationM": 30
        },
        {
          "distanceKm": 3.664,
          "lat": 1.291423,
          "lon": 103.859745,
          "x": 234.58,
          "y": 107.12,
          "elevationM": 19
        },
        {
          "distanceKm": 3.746,
          "lat": 1.291472,
          "lon": 103.85904,
          "x": 217.01,
          "y": 105.89,
          "elevationM": 15
        },
        {
          "distanceKm": 3.827,
          "lat": 1.291721,
          "lon": 103.85834,
          "x": 199.59,
          "y": 99.68,
          "elevationM": 26
        },
        {
          "distanceKm": 3.909,
          "lat": 1.29232,
          "lon": 103.857295,
          "x": 173.54,
          "y": 84.76,
          "elevationM": 12
        },
        {
          "distanceKm": 3.99,
          "lat": 1.292477,
          "lon": 103.85703,
          "x": 166.95,
          "y": 80.87,
          "elevationM": 13
        },
        {
          "distanceKm": 4.072,
          "lat": 1.292882,
          "lon": 103.856334,
          "x": 149.61,
          "y": 70.76,
          "elevationM": 18
        },
        {
          "distanceKm": 4.153,
          "lat": 1.292562,
          "lon": 103.855451,
          "x": 127.62,
          "y": 78.73,
          "elevationM": 20
        },
        {
          "distanceKm": 4.235,
          "lat": 1.292305,
          "lon": 103.855302,
          "x": 123.92,
          "y": 85.14,
          "elevationM": 25
        },
        {
          "distanceKm": 4.316,
          "lat": 1.291906,
          "lon": 103.855093,
          "x": 118.69,
          "y": 95.07,
          "elevationM": 42
        },
        {
          "distanceKm": 4.397,
          "lat": 1.291664,
          "lon": 103.854654,
          "x": 107.78,
          "y": 101.12,
          "elevationM": 14
        },
        {
          "distanceKm": 4.479,
          "lat": 1.292187,
          "lon": 103.854142,
          "x": 95.02,
          "y": 88.08,
          "elevationM": 17
        },
        {
          "distanceKm": 4.56,
          "lat": 1.292429,
          "lon": 103.853296,
          "x": 73.95,
          "y": 82.05,
          "elevationM": 22
        },
        {
          "distanceKm": 4.642,
          "lat": 1.292009,
          "lon": 103.853044,
          "x": 67.67,
          "y": 92.51,
          "elevationM": 16
        },
        {
          "distanceKm": 4.723,
          "lat": 1.29176,
          "lon": 103.852905,
          "x": 64.21,
          "y": 98.72,
          "elevationM": 12
        },
        {
          "distanceKm": 4.805,
          "lat": 1.289782,
          "lon": 103.851802,
          "x": 36.73,
          "y": 147.98,
          "elevationM": 15
        },
        {
          "distanceKm": 4.886,
          "lat": 1.290423,
          "lon": 103.852158,
          "x": 45.59,
          "y": 132.04,
          "elevationM": 21
        },
        {
          "distanceKm": 4.967,
          "lat": 1.291989,
          "lon": 103.857878,
          "x": 188.06,
          "y": 93,
          "elevationM": 24
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
      "meanM": 14,
      "minM": -8,
      "maxM": 42,
      "rangeM": 50
    },
    "source": {
      "geometry": "OpenStreetMap relation 421263",
      "osmName": "Marina Bay Street Circuit",
      "wayCount": 99,
      "osmLengthKm": 4.967,
      "quality": "matched",
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": 30.134208,
          "lon": -97.643248,
          "x": 25.57,
          "y": 135.94,
          "elevationM": 150
        },
        {
          "distanceKm": 0.081,
          "lat": 30.133761,
          "lon": -97.642584,
          "x": 37.33,
          "y": 145.08,
          "elevationM": 154
        },
        {
          "distanceKm": 0.162,
          "lat": 30.133313,
          "lon": -97.641921,
          "x": 49.07,
          "y": 154.25,
          "elevationM": 157
        },
        {
          "distanceKm": 0.243,
          "lat": 30.132864,
          "lon": -97.641259,
          "x": 60.78,
          "y": 163.45,
          "elevationM": 158
        },
        {
          "distanceKm": 0.324,
          "lat": 30.132415,
          "lon": -97.640597,
          "x": 72.5,
          "y": 172.65,
          "elevationM": 156
        },
        {
          "distanceKm": 0.405,
          "lat": 30.131965,
          "lon": -97.639935,
          "x": 84.21,
          "y": 181.85,
          "elevationM": 161
        },
        {
          "distanceKm": 0.485,
          "lat": 30.131516,
          "lon": -97.639273,
          "x": 95.94,
          "y": 191.03,
          "elevationM": 160
        },
        {
          "distanceKm": 0.566,
          "lat": 30.131068,
          "lon": -97.63861,
          "x": 107.67,
          "y": 200.21,
          "elevationM": 165
        },
        {
          "distanceKm": 0.647,
          "lat": 30.130619,
          "lon": -97.637948,
          "x": 119.4,
          "y": 209.39,
          "elevationM": 175
        },
        {
          "distanceKm": 0.728,
          "lat": 30.130192,
          "lon": -97.637268,
          "x": 131.44,
          "y": 218.15,
          "elevationM": 183
        },
        {
          "distanceKm": 0.809,
          "lat": 30.130359,
          "lon": -97.63682,
          "x": 139.37,
          "y": 214.72,
          "elevationM": 183
        },
        {
          "distanceKm": 0.89,
          "lat": 30.131048,
          "lon": -97.637091,
          "x": 134.56,
          "y": 200.62,
          "elevationM": 175
        },
        {
          "distanceKm": 0.971,
          "lat": 30.131743,
          "lon": -97.637335,
          "x": 130.25,
          "y": 186.4,
          "elevationM": 172
        },
        {
          "distanceKm": 1.052,
          "lat": 30.132429,
          "lon": -97.637114,
          "x": 134.17,
          "y": 172.34,
          "elevationM": 168
        },
        {
          "distanceKm": 1.133,
          "lat": 30.13287,
          "lon": -97.636453,
          "x": 145.86,
          "y": 163.33,
          "elevationM": 169
        },
        {
          "distanceKm": 1.214,
          "lat": 30.133248,
          "lon": -97.635734,
          "x": 158.59,
          "y": 155.58,
          "elevationM": 167
        },
        {
          "distanceKm": 1.295,
          "lat": 30.133683,
          "lon": -97.635068,
          "x": 170.39,
          "y": 146.68,
          "elevationM": 169
        },
        {
          "distanceKm": 1.376,
          "lat": 30.134337,
          "lon": -97.634708,
          "x": 176.76,
          "y": 133.3,
          "elevationM": 167
        },
        {
          "distanceKm": 1.456,
          "lat": 30.134685,
          "lon": -97.633982,
          "x": 189.6,
          "y": 126.17,
          "elevationM": 167
        },
        {
          "distanceKm": 1.537,
          "lat": 30.135336,
          "lon": -97.633683,
          "x": 194.9,
          "y": 112.84,
          "elevationM": 166
        },
        {
          "distanceKm": 1.618,
          "lat": 30.135946,
          "lon": -97.633273,
          "x": 202.17,
          "y": 100.36,
          "elevationM": 165
        },
        {
          "distanceKm": 1.699,
          "lat": 30.1362,
          "lon": -97.6325,
          "x": 215.84,
          "y": 95.16,
          "elevationM": 169
        },
        {
          "distanceKm": 1.78,
          "lat": 30.135945,
          "lon": -97.631718,
          "x": 229.69,
          "y": 100.37,
          "elevationM": 169
        },
        {
          "distanceKm": 1.861,
          "lat": 30.135818,
          "lon": -97.630942,
          "x": 243.42,
          "y": 102.99,
          "elevationM": 166
        },
        {
          "distanceKm": 1.942,
          "lat": 30.136307,
          "lon": -97.630327,
          "x": 254.31,
          "y": 92.98,
          "elevationM": 167
        },
        {
          "distanceKm": 2.023,
          "lat": 30.136627,
          "lon": -97.62964,
          "x": 266.47,
          "y": 86.42,
          "elevationM": 171
        },
        {
          "distanceKm": 2.104,
          "lat": 30.136181,
          "lon": -97.629015,
          "x": 277.54,
          "y": 95.54,
          "elevationM": 177
        },
        {
          "distanceKm": 2.185,
          "lat": 30.136307,
          "lon": -97.628191,
          "x": 292.14,
          "y": 92.97,
          "elevationM": 181
        },
        {
          "distanceKm": 2.266,
          "lat": 30.136462,
          "lon": -97.627369,
          "x": 306.69,
          "y": 89.79,
          "elevationM": 176
        },
        {
          "distanceKm": 2.347,
          "lat": 30.136847,
          "lon": -97.626698,
          "x": 318.56,
          "y": 81.91,
          "elevationM": 169
        },
        {
          "distanceKm": 2.427,
          "lat": 30.137408,
          "lon": -97.626163,
          "x": 328.04,
          "y": 70.43,
          "elevationM": 164
        },
        {
          "distanceKm": 2.508,
          "lat": 30.137969,
          "lon": -97.625627,
          "x": 337.52,
          "y": 58.94,
          "elevationM": 165
        },
        {
          "distanceKm": 2.589,
          "lat": 30.138531,
          "lon": -97.625091,
          "x": 347,
          "y": 47.45,
          "elevationM": 170
        },
        {
          "distanceKm": 2.67,
          "lat": 30.139095,
          "lon": -97.62456,
          "x": 356.41,
          "y": 35.9,
          "elevationM": 172
        },
        {
          "distanceKm": 2.751,
          "lat": 30.139369,
          "lon": -97.624961,
          "x": 349.3,
          "y": 30.29,
          "elevationM": 170
        },
        {
          "distanceKm": 2.832,
          "lat": 30.139148,
          "lon": -97.625763,
          "x": 335.11,
          "y": 34.81,
          "elevationM": 164
        },
        {
          "distanceKm": 2.913,
          "lat": 30.138932,
          "lon": -97.626567,
          "x": 320.89,
          "y": 39.24,
          "elevationM": 163
        },
        {
          "distanceKm": 2.994,
          "lat": 30.138734,
          "lon": -97.627376,
          "x": 306.55,
          "y": 43.29,
          "elevationM": 163
        },
        {
          "distanceKm": 3.075,
          "lat": 30.138544,
          "lon": -97.628189,
          "x": 292.17,
          "y": 47.17,
          "elevationM": 166
        },
        {
          "distanceKm": 3.156,
          "lat": 30.138372,
          "lon": -97.629006,
          "x": 277.7,
          "y": 50.69,
          "elevationM": 167
        },
        {
          "distanceKm": 3.237,
          "lat": 30.138209,
          "lon": -97.629826,
          "x": 263.18,
          "y": 54.03,
          "elevationM": 164
        },
        {
          "distanceKm": 3.318,
          "lat": 30.138068,
          "lon": -97.630652,
          "x": 248.57,
          "y": 56.93,
          "elevationM": 161
        },
        {
          "distanceKm": 3.398,
          "lat": 30.137936,
          "lon": -97.631479,
          "x": 233.92,
          "y": 59.62,
          "elevationM": 163
        },
        {
          "distanceKm": 3.479,
          "lat": 30.137818,
          "lon": -97.632309,
          "x": 219.22,
          "y": 62.05,
          "elevationM": 163
        },
        {
          "distanceKm": 3.56,
          "lat": 30.137718,
          "lon": -97.633143,
          "x": 204.47,
          "y": 64.09,
          "elevationM": 162
        },
        {
          "distanceKm": 3.641,
          "lat": 30.137632,
          "lon": -97.633978,
          "x": 189.68,
          "y": 65.85,
          "elevationM": 161
        },
        {
          "distanceKm": 3.722,
          "lat": 30.137551,
          "lon": -97.634814,
          "x": 174.87,
          "y": 67.5,
          "elevationM": 162
        },
        {
          "distanceKm": 3.803,
          "lat": 30.137471,
          "lon": -97.635651,
          "x": 160.07,
          "y": 69.14,
          "elevationM": 159
        },
        {
          "distanceKm": 3.884,
          "lat": 30.137387,
          "lon": -97.636486,
          "x": 145.27,
          "y": 70.87,
          "elevationM": 158
        },
        {
          "distanceKm": 3.965,
          "lat": 30.136829,
          "lon": -97.636256,
          "x": 149.35,
          "y": 82.29,
          "elevationM": 158
        },
        {
          "distanceKm": 4.046,
          "lat": 30.136238,
          "lon": -97.635765,
          "x": 158.05,
          "y": 94.37,
          "elevationM": 162
        },
        {
          "distanceKm": 4.127,
          "lat": 30.135598,
          "lon": -97.635462,
          "x": 163.42,
          "y": 107.48,
          "elevationM": 163
        },
        {
          "distanceKm": 4.208,
          "lat": 30.135547,
          "lon": -97.636263,
          "x": 149.22,
          "y": 108.53,
          "elevationM": 163
        },
        {
          "distanceKm": 4.288,
          "lat": 30.136136,
          "lon": -97.636695,
          "x": 141.57,
          "y": 96.47,
          "elevationM": 165
        },
        {
          "distanceKm": 4.369,
          "lat": 30.136578,
          "lon": -97.637336,
          "x": 130.23,
          "y": 87.42,
          "elevationM": 163
        },
        {
          "distanceKm": 4.45,
          "lat": 30.136238,
          "lon": -97.63766,
          "x": 124.5,
          "y": 94.37,
          "elevationM": 168
        },
        {
          "distanceKm": 4.531,
          "lat": 30.135608,
          "lon": -97.63724,
          "x": 131.93,
          "y": 107.28,
          "elevationM": 167
        },
        {
          "distanceKm": 4.612,
          "lat": 30.134968,
          "lon": -97.636841,
          "x": 139,
          "y": 120.37,
          "elevationM": 167
        },
        {
          "distanceKm": 4.693,
          "lat": 30.134265,
          "lon": -97.63694,
          "x": 137.24,
          "y": 134.77,
          "elevationM": 170
        },
        {
          "distanceKm": 4.774,
          "lat": 30.133807,
          "lon": -97.637551,
          "x": 126.43,
          "y": 144.15,
          "elevationM": 170
        },
        {
          "distanceKm": 4.855,
          "lat": 30.133654,
          "lon": -97.638354,
          "x": 112.21,
          "y": 147.28,
          "elevationM": 168
        },
        {
          "distanceKm": 4.936,
          "lat": 30.133909,
          "lon": -97.639134,
          "x": 98.39,
          "y": 142.06,
          "elevationM": 164
        },
        {
          "distanceKm": 5.017,
          "lat": 30.134484,
          "lon": -97.639645,
          "x": 89.35,
          "y": 130.29,
          "elevationM": 160
        },
        {
          "distanceKm": 5.098,
          "lat": 30.135066,
          "lon": -97.640149,
          "x": 80.44,
          "y": 118.37,
          "elevationM": 161
        },
        {
          "distanceKm": 5.179,
          "lat": 30.135522,
          "lon": -97.640763,
          "x": 69.57,
          "y": 109.03,
          "elevationM": 157
        },
        {
          "distanceKm": 5.259,
          "lat": 30.135278,
          "lon": -97.641551,
          "x": 55.61,
          "y": 114.03,
          "elevationM": 153
        },
        {
          "distanceKm": 5.34,
          "lat": 30.134984,
          "lon": -97.64232,
          "x": 41.99,
          "y": 120.06,
          "elevationM": 153
        },
        {
          "distanceKm": 5.421,
          "lat": 30.13469,
          "lon": -97.64309,
          "x": 28.36,
          "y": 126.08,
          "elevationM": 150
        },
        {
          "distanceKm": 5.502,
          "lat": 30.134208,
          "lon": -97.643248,
          "x": 25.57,
          "y": 135.94,
          "elevationM": 150
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
      "meanM": 165,
      "minM": 150,
      "maxM": 183,
      "rangeM": 33
    },
    "source": {
      "geometry": "OpenStreetMap relation 6537729",
      "osmName": "Circuit of the Americas",
      "wayCount": 29,
      "osmLengthKm": 5.502,
      "quality": "open-data",
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": 19.405394,
          "lon": -99.09687,
          "x": 46.73,
          "y": 44.11,
          "elevationM": 2238
        },
        {
          "distanceKm": 0.081,
          "lat": 19.406048,
          "lon": -99.09655,
          "x": 53.38,
          "y": 29.7,
          "elevationM": 2245
        },
        {
          "distanceKm": 0.163,
          "lat": 19.406395,
          "lon": -99.095894,
          "x": 67.01,
          "y": 22.06,
          "elevationM": 2241
        },
        {
          "distanceKm": 0.244,
          "lat": 19.406316,
          "lon": -99.095124,
          "x": 83,
          "y": 23.79,
          "elevationM": 2237
        },
        {
          "distanceKm": 0.325,
          "lat": 19.406214,
          "lon": -99.094356,
          "x": 98.95,
          "y": 26.05,
          "elevationM": 2234
        },
        {
          "distanceKm": 0.407,
          "lat": 19.406112,
          "lon": -99.093588,
          "x": 114.9,
          "y": 28.29,
          "elevationM": 2236
        },
        {
          "distanceKm": 0.488,
          "lat": 19.406009,
          "lon": -99.09282,
          "x": 130.85,
          "y": 30.56,
          "elevationM": 2237
        },
        {
          "distanceKm": 0.569,
          "lat": 19.405913,
          "lon": -99.092051,
          "x": 146.82,
          "y": 32.67,
          "elevationM": 2235
        },
        {
          "distanceKm": 0.651,
          "lat": 19.405821,
          "lon": -99.091281,
          "x": 162.8,
          "y": 34.7,
          "elevationM": 2235
        },
        {
          "distanceKm": 0.732,
          "lat": 19.405725,
          "lon": -99.090513,
          "x": 178.76,
          "y": 36.83,
          "elevationM": 2238
        },
        {
          "distanceKm": 0.814,
          "lat": 19.40564,
          "lon": -99.089742,
          "x": 194.76,
          "y": 38.68,
          "elevationM": 2239
        },
        {
          "distanceKm": 0.895,
          "lat": 19.405562,
          "lon": -99.088971,
          "x": 210.78,
          "y": 40.41,
          "elevationM": 2234
        },
        {
          "distanceKm": 0.976,
          "lat": 19.40548,
          "lon": -99.0882,
          "x": 226.78,
          "y": 42.22,
          "elevationM": 2230
        },
        {
          "distanceKm": 1.058,
          "lat": 19.405379,
          "lon": -99.087432,
          "x": 242.74,
          "y": 44.43,
          "elevationM": 2230
        },
        {
          "distanceKm": 1.139,
          "lat": 19.405279,
          "lon": -99.086663,
          "x": 258.7,
          "y": 46.64,
          "elevationM": 2235
        },
        {
          "distanceKm": 1.22,
          "lat": 19.405179,
          "lon": -99.085895,
          "x": 274.65,
          "y": 48.85,
          "elevationM": 2239
        },
        {
          "distanceKm": 1.302,
          "lat": 19.405078,
          "lon": -99.085127,
          "x": 290.61,
          "y": 51.06,
          "elevationM": 2238
        },
        {
          "distanceKm": 1.383,
          "lat": 19.404959,
          "lon": -99.084361,
          "x": 306.5,
          "y": 53.67,
          "elevationM": 2237
        },
        {
          "distanceKm": 1.464,
          "lat": 19.404825,
          "lon": -99.083599,
          "x": 322.33,
          "y": 56.63,
          "elevationM": 2228
        },
        {
          "distanceKm": 1.546,
          "lat": 19.404189,
          "lon": -99.083497,
          "x": 324.45,
          "y": 70.63,
          "elevationM": 2237
        },
        {
          "distanceKm": 1.627,
          "lat": 19.40369,
          "lon": -99.083073,
          "x": 333.25,
          "y": 81.62,
          "elevationM": 2242
        },
        {
          "distanceKm": 1.708,
          "lat": 19.402974,
          "lon": -99.08322,
          "x": 330.19,
          "y": 97.39,
          "elevationM": 2232
        },
        {
          "distanceKm": 1.79,
          "lat": 19.402303,
          "lon": -99.083526,
          "x": 323.84,
          "y": 112.16,
          "elevationM": 2234
        },
        {
          "distanceKm": 1.871,
          "lat": 19.401674,
          "lon": -99.083922,
          "x": 315.62,
          "y": 126.01,
          "elevationM": 2234
        },
        {
          "distanceKm": 1.952,
          "lat": 19.401046,
          "lon": -99.084322,
          "x": 307.32,
          "y": 139.82,
          "elevationM": 2234
        },
        {
          "distanceKm": 2.034,
          "lat": 19.40042,
          "lon": -99.084722,
          "x": 299.01,
          "y": 153.62,
          "elevationM": 2233
        },
        {
          "distanceKm": 2.115,
          "lat": 19.399791,
          "lon": -99.085119,
          "x": 290.77,
          "y": 167.46,
          "elevationM": 2232
        },
        {
          "distanceKm": 2.197,
          "lat": 19.39917,
          "lon": -99.085528,
          "x": 282.27,
          "y": 181.14,
          "elevationM": 2231
        },
        {
          "distanceKm": 2.278,
          "lat": 19.398561,
          "lon": -99.085957,
          "x": 273.36,
          "y": 194.55,
          "elevationM": 2235
        },
        {
          "distanceKm": 2.359,
          "lat": 19.397998,
          "lon": -99.08594,
          "x": 273.72,
          "y": 206.93,
          "elevationM": 2233
        },
        {
          "distanceKm": 2.441,
          "lat": 19.397516,
          "lon": -99.085902,
          "x": 274.51,
          "y": 217.55,
          "elevationM": 2238
        },
        {
          "distanceKm": 2.522,
          "lat": 19.397083,
          "lon": -99.086527,
          "x": 261.52,
          "y": 227.08,
          "elevationM": 2232
        },
        {
          "distanceKm": 2.603,
          "lat": 19.397528,
          "lon": -99.086848,
          "x": 254.86,
          "y": 217.28,
          "elevationM": 2242
        },
        {
          "distanceKm": 2.685,
          "lat": 19.398254,
          "lon": -99.086749,
          "x": 256.91,
          "y": 201.31,
          "elevationM": 2236
        },
        {
          "distanceKm": 2.766,
          "lat": 19.398979,
          "lon": -99.086646,
          "x": 259.05,
          "y": 185.34,
          "elevationM": 2239
        },
        {
          "distanceKm": 2.847,
          "lat": 19.399704,
          "lon": -99.086546,
          "x": 261.14,
          "y": 169.37,
          "elevationM": 2225
        },
        {
          "distanceKm": 2.929,
          "lat": 19.400282,
          "lon": -99.086853,
          "x": 254.75,
          "y": 156.65,
          "elevationM": 2224
        },
        {
          "distanceKm": 3.01,
          "lat": 19.40076,
          "lon": -99.087419,
          "x": 243,
          "y": 146.12,
          "elevationM": 2235
        },
        {
          "distanceKm": 3.091,
          "lat": 19.401353,
          "lon": -99.08784,
          "x": 234.26,
          "y": 133.08,
          "elevationM": 2238
        },
        {
          "distanceKm": 3.173,
          "lat": 19.40151,
          "lon": -99.088592,
          "x": 218.65,
          "y": 129.61,
          "elevationM": 2238
        },
        {
          "distanceKm": 3.254,
          "lat": 19.401613,
          "lon": -99.089359,
          "x": 202.71,
          "y": 127.34,
          "elevationM": 2233
        },
        {
          "distanceKm": 3.335,
          "lat": 19.402213,
          "lon": -99.08972,
          "x": 195.23,
          "y": 114.14,
          "elevationM": 2238
        },
        {
          "distanceKm": 3.417,
          "lat": 19.402697,
          "lon": -99.09026,
          "x": 184.01,
          "y": 103.48,
          "elevationM": 2237
        },
        {
          "distanceKm": 3.498,
          "lat": 19.403049,
          "lon": -99.09094,
          "x": 169.88,
          "y": 95.74,
          "elevationM": 2237
        },
        {
          "distanceKm": 3.58,
          "lat": 19.403292,
          "lon": -99.091667,
          "x": 154.79,
          "y": 90.39,
          "elevationM": 2232
        },
        {
          "distanceKm": 3.661,
          "lat": 19.403397,
          "lon": -99.092435,
          "x": 138.85,
          "y": 88.08,
          "elevationM": 2235
        },
        {
          "distanceKm": 3.742,
          "lat": 19.403502,
          "lon": -99.093202,
          "x": 122.91,
          "y": 85.77,
          "elevationM": 2232
        },
        {
          "distanceKm": 3.824,
          "lat": 19.403606,
          "lon": -99.09397,
          "x": 106.97,
          "y": 83.46,
          "elevationM": 2235
        },
        {
          "distanceKm": 3.905,
          "lat": 19.403711,
          "lon": -99.094738,
          "x": 91.02,
          "y": 81.16,
          "elevationM": 2239
        },
        {
          "distanceKm": 3.986,
          "lat": 19.404255,
          "lon": -99.095045,
          "x": 84.63,
          "y": 69.17,
          "elevationM": 2239
        },
        {
          "distanceKm": 4.068,
          "lat": 19.404984,
          "lon": -99.09511,
          "x": 83.29,
          "y": 53.14,
          "elevationM": 2231
        },
        {
          "distanceKm": 4.149,
          "lat": 19.405207,
          "lon": -99.095518,
          "x": 74.81,
          "y": 48.22,
          "elevationM": 2229
        },
        {
          "distanceKm": 4.23,
          "lat": 19.405179,
          "lon": -99.09619,
          "x": 60.85,
          "y": 48.84,
          "elevationM": 2239
        },
        {
          "distanceKm": 4.312,
          "lat": 19.405394,
          "lon": -99.09687,
          "x": 46.73,
          "y": 44.11,
          "elevationM": 2238
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
      "meanM": 2235,
      "minM": 2224,
      "maxM": 2245,
      "rangeM": 21
    },
    "source": {
      "geometry": "OpenStreetMap relation 16251935",
      "osmName": "Mexican Grand Prix",
      "wayCount": 9,
      "osmLengthKm": 4.312,
      "quality": "matched",
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": -23.702192,
          "lon": -46.700419,
          "x": 128.38,
          "y": 135.35,
          "elevationM": 784
        },
        {
          "distanceKm": 0.081,
          "lat": -23.702899,
          "lon": -46.700219,
          "x": 132.36,
          "y": 150.78,
          "elevationM": 783
        },
        {
          "distanceKm": 0.163,
          "lat": -23.703607,
          "lon": -46.700019,
          "x": 136.35,
          "y": 166.21,
          "elevationM": 788
        },
        {
          "distanceKm": 0.244,
          "lat": -23.704315,
          "lon": -46.69982,
          "x": 140.34,
          "y": 181.65,
          "elevationM": 786
        },
        {
          "distanceKm": 0.325,
          "lat": -23.705023,
          "lon": -46.699621,
          "x": 144.31,
          "y": 197.08,
          "elevationM": 787
        },
        {
          "distanceKm": 0.406,
          "lat": -23.70573,
          "lon": -46.699422,
          "x": 148.29,
          "y": 212.52,
          "elevationM": 788
        },
        {
          "distanceKm": 0.488,
          "lat": -23.706367,
          "lon": -46.699061,
          "x": 155.49,
          "y": 226.4,
          "elevationM": 787
        },
        {
          "distanceKm": 0.569,
          "lat": -23.706136,
          "lon": -46.698411,
          "x": 168.46,
          "y": 221.38,
          "elevationM": 782
        },
        {
          "distanceKm": 0.65,
          "lat": -23.70616,
          "lon": -46.697725,
          "x": 182.17,
          "y": 221.89,
          "elevationM": 778
        },
        {
          "distanceKm": 0.731,
          "lat": -23.706319,
          "lon": -46.69696,
          "x": 197.44,
          "y": 225.36,
          "elevationM": 774
        },
        {
          "distanceKm": 0.813,
          "lat": -23.706074,
          "lon": -46.696221,
          "x": 212.21,
          "y": 220.02,
          "elevationM": 772
        },
        {
          "distanceKm": 0.894,
          "lat": -23.705511,
          "lon": -46.695729,
          "x": 222.03,
          "y": 207.73,
          "elevationM": 769
        },
        {
          "distanceKm": 0.975,
          "lat": -23.704814,
          "lon": -46.69549,
          "x": 226.8,
          "y": 192.53,
          "elevationM": 767
        },
        {
          "distanceKm": 1.057,
          "lat": -23.704112,
          "lon": -46.695266,
          "x": 231.27,
          "y": 177.23,
          "elevationM": 762
        },
        {
          "distanceKm": 1.138,
          "lat": -23.703407,
          "lon": -46.695056,
          "x": 235.47,
          "y": 161.85,
          "elevationM": 761
        },
        {
          "distanceKm": 1.219,
          "lat": -23.702696,
          "lon": -46.69487,
          "x": 239.18,
          "y": 146.35,
          "elevationM": 761
        },
        {
          "distanceKm": 1.3,
          "lat": -23.70199,
          "lon": -46.694665,
          "x": 243.28,
          "y": 130.95,
          "elevationM": 755
        },
        {
          "distanceKm": 1.382,
          "lat": -23.701284,
          "lon": -46.694458,
          "x": 247.42,
          "y": 115.55,
          "elevationM": 755
        },
        {
          "distanceKm": 1.463,
          "lat": -23.70058,
          "lon": -46.694245,
          "x": 251.66,
          "y": 100.19,
          "elevationM": 755
        },
        {
          "distanceKm": 1.544,
          "lat": -23.699871,
          "lon": -46.694059,
          "x": 255.37,
          "y": 84.74,
          "elevationM": 751
        },
        {
          "distanceKm": 1.625,
          "lat": -23.699454,
          "lon": -46.694615,
          "x": 244.27,
          "y": 75.64,
          "elevationM": 746
        },
        {
          "distanceKm": 1.707,
          "lat": -23.699346,
          "lon": -46.695404,
          "x": 228.52,
          "y": 73.28,
          "elevationM": 745
        },
        {
          "distanceKm": 1.788,
          "lat": -23.699587,
          "lon": -46.696139,
          "x": 213.83,
          "y": 78.55,
          "elevationM": 746
        },
        {
          "distanceKm": 1.869,
          "lat": -23.700143,
          "lon": -46.696655,
          "x": 203.54,
          "y": 90.66,
          "elevationM": 746
        },
        {
          "distanceKm": 1.951,
          "lat": -23.700736,
          "lon": -46.697121,
          "x": 194.23,
          "y": 103.6,
          "elevationM": 747
        },
        {
          "distanceKm": 2.032,
          "lat": -23.701328,
          "lon": -46.697589,
          "x": 184.89,
          "y": 116.52,
          "elevationM": 756
        },
        {
          "distanceKm": 2.113,
          "lat": -23.701919,
          "lon": -46.698058,
          "x": 175.51,
          "y": 129.41,
          "elevationM": 755
        },
        {
          "distanceKm": 2.194,
          "lat": -23.702392,
          "lon": -46.698639,
          "x": 163.92,
          "y": 139.72,
          "elevationM": 766
        },
        {
          "distanceKm": 2.276,
          "lat": -23.702295,
          "lon": -46.699416,
          "x": 148.4,
          "y": 137.6,
          "elevationM": 768
        },
        {
          "distanceKm": 2.357,
          "lat": -23.70173,
          "lon": -46.699857,
          "x": 139.6,
          "y": 125.27,
          "elevationM": 773
        },
        {
          "distanceKm": 2.438,
          "lat": -23.701009,
          "lon": -46.699988,
          "x": 136.97,
          "y": 109.55,
          "elevationM": 771
        },
        {
          "distanceKm": 2.52,
          "lat": -23.700537,
          "lon": -46.69962,
          "x": 144.33,
          "y": 99.25,
          "elevationM": 768
        },
        {
          "distanceKm": 2.601,
          "lat": -23.70079,
          "lon": -46.698906,
          "x": 158.59,
          "y": 104.78,
          "elevationM": 763
        },
        {
          "distanceKm": 2.682,
          "lat": -23.700201,
          "lon": -46.698669,
          "x": 163.31,
          "y": 91.93,
          "elevationM": 761
        },
        {
          "distanceKm": 2.763,
          "lat": -23.699675,
          "lon": -46.699223,
          "x": 152.25,
          "y": 80.47,
          "elevationM": 767
        },
        {
          "distanceKm": 2.845,
          "lat": -23.699033,
          "lon": -46.699576,
          "x": 145.21,
          "y": 66.46,
          "elevationM": 772
        },
        {
          "distanceKm": 2.926,
          "lat": -23.69844,
          "lon": -46.699393,
          "x": 148.86,
          "y": 53.52,
          "elevationM": 775
        },
        {
          "distanceKm": 3.007,
          "lat": -23.698918,
          "lon": -46.69881,
          "x": 160.51,
          "y": 63.95,
          "elevationM": 768
        },
        {
          "distanceKm": 3.088,
          "lat": -23.699354,
          "lon": -46.698184,
          "x": 172.99,
          "y": 73.46,
          "elevationM": 761
        },
        {
          "distanceKm": 3.17,
          "lat": -23.699287,
          "lon": -46.697409,
          "x": 188.47,
          "y": 72.01,
          "elevationM": 755
        },
        {
          "distanceKm": 3.251,
          "lat": -23.698747,
          "lon": -46.696888,
          "x": 198.89,
          "y": 60.22,
          "elevationM": 752
        },
        {
          "distanceKm": 3.332,
          "lat": -23.698126,
          "lon": -46.696466,
          "x": 207.31,
          "y": 46.69,
          "elevationM": 751
        },
        {
          "distanceKm": 3.414,
          "lat": -23.697476,
          "lon": -46.696157,
          "x": 213.48,
          "y": 32.5,
          "elevationM": 755
        },
        {
          "distanceKm": 3.495,
          "lat": -23.697134,
          "lon": -46.696843,
          "x": 199.77,
          "y": 25.05,
          "elevationM": 759
        },
        {
          "distanceKm": 3.576,
          "lat": -23.697021,
          "lon": -46.697615,
          "x": 184.36,
          "y": 22.59,
          "elevationM": 761
        },
        {
          "distanceKm": 3.657,
          "lat": -23.697178,
          "lon": -46.698393,
          "x": 168.82,
          "y": 26,
          "elevationM": 770
        },
        {
          "distanceKm": 3.739,
          "lat": -23.697484,
          "lon": -46.699118,
          "x": 154.35,
          "y": 32.67,
          "elevationM": 778
        },
        {
          "distanceKm": 3.82,
          "lat": -23.697943,
          "lon": -46.699732,
          "x": 142.1,
          "y": 42.68,
          "elevationM": 781
        },
        {
          "distanceKm": 3.901,
          "lat": -23.698613,
          "lon": -46.700035,
          "x": 136.04,
          "y": 57.3,
          "elevationM": 783
        },
        {
          "distanceKm": 3.982,
          "lat": -23.699323,
          "lon": -46.700224,
          "x": 132.27,
          "y": 72.78,
          "elevationM": 789
        },
        {
          "distanceKm": 4.064,
          "lat": -23.700034,
          "lon": -46.700409,
          "x": 128.57,
          "y": 88.29,
          "elevationM": 785
        },
        {
          "distanceKm": 4.145,
          "lat": -23.700748,
          "lon": -46.700579,
          "x": 125.18,
          "y": 103.85,
          "elevationM": 781
        },
        {
          "distanceKm": 4.226,
          "lat": -23.701476,
          "lon": -46.700578,
          "x": 125.19,
          "y": 119.74,
          "elevationM": 785
        },
        {
          "distanceKm": 4.308,
          "lat": -23.702192,
          "lon": -46.700419,
          "x": 128.38,
          "y": 135.35,
          "elevationM": 784
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
      "meanM": 768,
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
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": 36.109284,
          "lon": -115.161882,
          "x": 234.89,
          "y": 212.37,
          "elevationM": 639
        },
        {
          "distanceKm": 0.087,
          "lat": 36.109873,
          "lon": -115.161236,
          "x": 240.99,
          "y": 205.48,
          "elevationM": 634
        },
        {
          "distanceKm": 0.175,
          "lat": 36.110462,
          "lon": -115.160591,
          "x": 247.09,
          "y": 198.59,
          "elevationM": 634
        },
        {
          "distanceKm": 0.262,
          "lat": 36.111096,
          "lon": -115.160596,
          "x": 247.03,
          "y": 191.17,
          "elevationM": 630
        },
        {
          "distanceKm": 0.35,
          "lat": 36.111066,
          "lon": -115.16153,
          "x": 238.21,
          "y": 191.52,
          "elevationM": 635
        },
        {
          "distanceKm": 0.437,
          "lat": 36.110569,
          "lon": -115.162279,
          "x": 231.13,
          "y": 197.34,
          "elevationM": 637
        },
        {
          "distanceKm": 0.525,
          "lat": 36.11052,
          "lon": -115.163202,
          "x": 222.41,
          "y": 197.91,
          "elevationM": 637
        },
        {
          "distanceKm": 0.612,
          "lat": 36.111064,
          "lon": -115.163869,
          "x": 216.1,
          "y": 191.55,
          "elevationM": 637
        },
        {
          "distanceKm": 0.7,
          "lat": 36.111838,
          "lon": -115.163941,
          "x": 215.43,
          "y": 182.49,
          "elevationM": 639
        },
        {
          "distanceKm": 0.787,
          "lat": 36.112625,
          "lon": -115.163941,
          "x": 215.43,
          "y": 173.29,
          "elevationM": 636
        },
        {
          "distanceKm": 0.875,
          "lat": 36.113411,
          "lon": -115.163956,
          "x": 215.29,
          "y": 164.09,
          "elevationM": 633
        },
        {
          "distanceKm": 0.962,
          "lat": 36.114198,
          "lon": -115.163966,
          "x": 215.19,
          "y": 154.89,
          "elevationM": 638
        },
        {
          "distanceKm": 1.05,
          "lat": 36.114985,
          "lon": -115.163968,
          "x": 215.17,
          "y": 145.69,
          "elevationM": 638
        },
        {
          "distanceKm": 1.137,
          "lat": 36.115771,
          "lon": -115.163964,
          "x": 215.21,
          "y": 136.49,
          "elevationM": 639
        },
        {
          "distanceKm": 1.225,
          "lat": 36.116558,
          "lon": -115.163973,
          "x": 215.12,
          "y": 127.29,
          "elevationM": 643
        },
        {
          "distanceKm": 1.312,
          "lat": 36.117344,
          "lon": -115.163982,
          "x": 215.04,
          "y": 118.09,
          "elevationM": 638
        },
        {
          "distanceKm": 1.399,
          "lat": 36.118131,
          "lon": -115.163989,
          "x": 214.98,
          "y": 108.89,
          "elevationM": 637
        },
        {
          "distanceKm": 1.487,
          "lat": 36.118917,
          "lon": -115.163994,
          "x": 214.92,
          "y": 99.69,
          "elevationM": 633
        },
        {
          "distanceKm": 1.574,
          "lat": 36.119182,
          "lon": -115.1618,
          "x": 235.66,
          "y": 96.59,
          "elevationM": 633
        },
        {
          "distanceKm": 1.662,
          "lat": 36.119201,
          "lon": -115.162773,
          "x": 226.46,
          "y": 96.38,
          "elevationM": 632
        },
        {
          "distanceKm": 1.749,
          "lat": 36.119207,
          "lon": -115.163747,
          "x": 217.26,
          "y": 96.3,
          "elevationM": 637
        },
        {
          "distanceKm": 1.837,
          "lat": 36.119548,
          "lon": -115.160631,
          "x": 246.7,
          "y": 92.32,
          "elevationM": 635
        },
        {
          "distanceKm": 1.924,
          "lat": 36.120232,
          "lon": -115.160177,
          "x": 251,
          "y": 84.31,
          "elevationM": 638
        },
        {
          "distanceKm": 2.012,
          "lat": 36.120804,
          "lon": -115.160442,
          "x": 248.49,
          "y": 77.62,
          "elevationM": 632
        },
        {
          "distanceKm": 2.099,
          "lat": 36.121468,
          "lon": -115.160642,
          "x": 246.6,
          "y": 69.86,
          "elevationM": 633
        },
        {
          "distanceKm": 2.187,
          "lat": 36.122213,
          "lon": -115.160407,
          "x": 248.82,
          "y": 61.14,
          "elevationM": 637
        },
        {
          "distanceKm": 2.274,
          "lat": 36.122285,
          "lon": -115.162743,
          "x": 226.75,
          "y": 60.29,
          "elevationM": 633
        },
        {
          "distanceKm": 2.362,
          "lat": 36.122259,
          "lon": -115.161769,
          "x": 235.95,
          "y": 60.6,
          "elevationM": 634
        },
        {
          "distanceKm": 2.449,
          "lat": 36.122242,
          "lon": -115.160796,
          "x": 245.15,
          "y": 60.8,
          "elevationM": 637
        },
        {
          "distanceKm": 2.536,
          "lat": 36.122454,
          "lon": -115.164151,
          "x": 213.44,
          "y": 58.32,
          "elevationM": 636
        },
        {
          "distanceKm": 2.624,
          "lat": 36.122554,
          "lon": -115.165105,
          "x": 204.43,
          "y": 57.15,
          "elevationM": 642
        },
        {
          "distanceKm": 2.711,
          "lat": 36.122987,
          "lon": -115.165896,
          "x": 196.95,
          "y": 52.08,
          "elevationM": 641
        },
        {
          "distanceKm": 2.799,
          "lat": 36.123673,
          "lon": -115.166354,
          "x": 192.62,
          "y": 44.06,
          "elevationM": 647
        },
        {
          "distanceKm": 2.886,
          "lat": 36.12441,
          "lon": -115.166695,
          "x": 189.4,
          "y": 35.44,
          "elevationM": 648
        },
        {
          "distanceKm": 2.974,
          "lat": 36.125021,
          "lon": -115.167284,
          "x": 183.84,
          "y": 28.29,
          "elevationM": 635
        },
        {
          "distanceKm": 3.061,
          "lat": 36.125368,
          "lon": -115.168141,
          "x": 175.74,
          "y": 24.24,
          "elevationM": 634
        },
        {
          "distanceKm": 3.149,
          "lat": 36.125523,
          "lon": -115.169095,
          "x": 166.72,
          "y": 22.41,
          "elevationM": 636
        },
        {
          "distanceKm": 3.236,
          "lat": 36.125063,
          "lon": -115.169687,
          "x": 161.13,
          "y": 27.8,
          "elevationM": 635
        },
        {
          "distanceKm": 3.324,
          "lat": 36.124363,
          "lon": -115.170132,
          "x": 156.92,
          "y": 35.99,
          "elevationM": 638
        },
        {
          "distanceKm": 3.411,
          "lat": 36.123668,
          "lon": -115.170588,
          "x": 152.62,
          "y": 44.12,
          "elevationM": 643
        },
        {
          "distanceKm": 3.499,
          "lat": 36.12298,
          "lon": -115.171059,
          "x": 148.17,
          "y": 52.17,
          "elevationM": 646
        },
        {
          "distanceKm": 3.586,
          "lat": 36.122298,
          "lon": -115.171544,
          "x": 143.59,
          "y": 60.15,
          "elevationM": 646
        },
        {
          "distanceKm": 3.674,
          "lat": 36.121582,
          "lon": -115.171946,
          "x": 139.79,
          "y": 68.52,
          "elevationM": 645
        },
        {
          "distanceKm": 3.761,
          "lat": 36.120836,
          "lon": -115.172253,
          "x": 136.89,
          "y": 77.25,
          "elevationM": 647
        },
        {
          "distanceKm": 3.848,
          "lat": 36.120081,
          "lon": -115.172528,
          "x": 134.29,
          "y": 86.07,
          "elevationM": 652
        },
        {
          "distanceKm": 3.936,
          "lat": 36.119315,
          "lon": -115.172748,
          "x": 132.21,
          "y": 95.03,
          "elevationM": 656
        },
        {
          "distanceKm": 4.023,
          "lat": 36.118537,
          "lon": -115.172884,
          "x": 130.93,
          "y": 104.14,
          "elevationM": 654
        },
        {
          "distanceKm": 4.111,
          "lat": 36.117753,
          "lon": -115.172965,
          "x": 130.16,
          "y": 113.31,
          "elevationM": 652
        },
        {
          "distanceKm": 4.198,
          "lat": 36.116967,
          "lon": -115.172987,
          "x": 129.95,
          "y": 122.5,
          "elevationM": 650
        },
        {
          "distanceKm": 4.286,
          "lat": 36.116181,
          "lon": -115.172991,
          "x": 129.92,
          "y": 131.7,
          "elevationM": 650
        },
        {
          "distanceKm": 4.373,
          "lat": 36.115394,
          "lon": -115.172988,
          "x": 129.95,
          "y": 140.9,
          "elevationM": 648
        },
        {
          "distanceKm": 4.461,
          "lat": 36.114608,
          "lon": -115.172993,
          "x": 129.89,
          "y": 150.1,
          "elevationM": 650
        },
        {
          "distanceKm": 4.548,
          "lat": 36.113822,
          "lon": -115.173034,
          "x": 129.51,
          "y": 159.29,
          "elevationM": 645
        },
        {
          "distanceKm": 4.636,
          "lat": 36.113035,
          "lon": -115.173048,
          "x": 129.37,
          "y": 168.49,
          "elevationM": 650
        },
        {
          "distanceKm": 4.723,
          "lat": 36.112249,
          "lon": -115.173082,
          "x": 129.06,
          "y": 177.69,
          "elevationM": 648
        },
        {
          "distanceKm": 4.811,
          "lat": 36.111463,
          "lon": -115.173114,
          "x": 128.75,
          "y": 186.88,
          "elevationM": 652
        },
        {
          "distanceKm": 4.898,
          "lat": 36.110677,
          "lon": -115.173137,
          "x": 128.53,
          "y": 196.08,
          "elevationM": 652
        },
        {
          "distanceKm": 4.985,
          "lat": 36.10989,
          "lon": -115.173145,
          "x": 128.46,
          "y": 205.28,
          "elevationM": 651
        },
        {
          "distanceKm": 5.073,
          "lat": 36.109104,
          "lon": -115.173142,
          "x": 128.48,
          "y": 214.48,
          "elevationM": 644
        },
        {
          "distanceKm": 5.16,
          "lat": 36.10846,
          "lon": -115.172722,
          "x": 132.45,
          "y": 222.01,
          "elevationM": 650
        },
        {
          "distanceKm": 5.248,
          "lat": 36.107992,
          "lon": -115.171959,
          "x": 139.67,
          "y": 227.47,
          "elevationM": 653
        },
        {
          "distanceKm": 5.335,
          "lat": 36.107969,
          "lon": -115.170987,
          "x": 148.85,
          "y": 227.74,
          "elevationM": 651
        },
        {
          "distanceKm": 5.423,
          "lat": 36.107962,
          "lon": -115.170013,
          "x": 158.05,
          "y": 227.83,
          "elevationM": 651
        },
        {
          "distanceKm": 5.51,
          "lat": 36.107953,
          "lon": -115.169039,
          "x": 167.25,
          "y": 227.93,
          "elevationM": 655
        },
        {
          "distanceKm": 5.598,
          "lat": 36.107953,
          "lon": -115.168066,
          "x": 176.45,
          "y": 227.93,
          "elevationM": 649
        },
        {
          "distanceKm": 5.685,
          "lat": 36.107953,
          "lon": -115.167092,
          "x": 185.65,
          "y": 227.93,
          "elevationM": 652
        },
        {
          "distanceKm": 5.773,
          "lat": 36.107953,
          "lon": -115.166119,
          "x": 194.85,
          "y": 227.94,
          "elevationM": 645
        },
        {
          "distanceKm": 5.86,
          "lat": 36.107948,
          "lon": -115.165145,
          "x": 204.05,
          "y": 227.99,
          "elevationM": 643
        },
        {
          "distanceKm": 5.948,
          "lat": 36.107952,
          "lon": -115.164172,
          "x": 213.25,
          "y": 227.95,
          "elevationM": 641
        },
        {
          "distanceKm": 6.035,
          "lat": 36.108184,
          "lon": -115.163252,
          "x": 221.93,
          "y": 225.23,
          "elevationM": 641
        },
        {
          "distanceKm": 6.123,
          "lat": 36.108695,
          "lon": -115.162527,
          "x": 228.79,
          "y": 219.26,
          "elevationM": 644
        },
        {
          "distanceKm": 6.21,
          "lat": 36.109284,
          "lon": -115.161882,
          "x": 234.89,
          "y": 212.37,
          "elevationM": 639
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
      "minM": 630,
      "maxM": 656,
      "rangeM": 26
    },
    "source": {
      "geometry": "OpenStreetMap relation 16696508",
      "osmName": "Las Vegas Strip Circuit",
      "wayCount": 79,
      "osmLengthKm": 6.21,
      "quality": "matched",
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": 25.489716,
          "lon": 51.449334,
          "x": 127.98,
          "y": 136.94,
          "elevationM": 13
        },
        {
          "distanceKm": 0.081,
          "lat": 25.490356,
          "lon": 51.448948,
          "x": 122.58,
          "y": 127.03,
          "elevationM": 11
        },
        {
          "distanceKm": 0.162,
          "lat": 25.490984,
          "lon": 51.448542,
          "x": 116.89,
          "y": 117.29,
          "elevationM": 12
        },
        {
          "distanceKm": 0.243,
          "lat": 25.491621,
          "lon": 51.448153,
          "x": 111.46,
          "y": 107.41,
          "elevationM": 13
        },
        {
          "distanceKm": 0.324,
          "lat": 25.492265,
          "lon": 51.447777,
          "x": 106.19,
          "y": 97.42,
          "elevationM": 12
        },
        {
          "distanceKm": 0.405,
          "lat": 25.492941,
          "lon": 51.447538,
          "x": 102.85,
          "y": 86.95,
          "elevationM": 12
        },
        {
          "distanceKm": 0.486,
          "lat": 25.493389,
          "lon": 51.4481,
          "x": 110.71,
          "y": 80,
          "elevationM": 15
        },
        {
          "distanceKm": 0.567,
          "lat": 25.493107,
          "lon": 51.448826,
          "x": 120.87,
          "y": 84.37,
          "elevationM": 12
        },
        {
          "distanceKm": 0.648,
          "lat": 25.492722,
          "lon": 51.449511,
          "x": 130.46,
          "y": 90.34,
          "elevationM": 13
        },
        {
          "distanceKm": 0.729,
          "lat": 25.492472,
          "lon": 51.450244,
          "x": 140.71,
          "y": 94.22,
          "elevationM": 12
        },
        {
          "distanceKm": 0.81,
          "lat": 25.492974,
          "lon": 51.450741,
          "x": 147.67,
          "y": 86.43,
          "elevationM": 10
        },
        {
          "distanceKm": 0.891,
          "lat": 25.493702,
          "lon": 51.45074,
          "x": 147.66,
          "y": 75.15,
          "elevationM": 12
        },
        {
          "distanceKm": 0.972,
          "lat": 25.494427,
          "lon": 51.450768,
          "x": 148.04,
          "y": 63.91,
          "elevationM": 11
        },
        {
          "distanceKm": 1.053,
          "lat": 25.495021,
          "lon": 51.451218,
          "x": 154.34,
          "y": 54.71,
          "elevationM": 11
        },
        {
          "distanceKm": 1.134,
          "lat": 25.495559,
          "lon": 51.451761,
          "x": 161.95,
          "y": 46.36,
          "elevationM": 12
        },
        {
          "distanceKm": 1.215,
          "lat": 25.496097,
          "lon": 51.452305,
          "x": 169.55,
          "y": 38.01,
          "elevationM": 9
        },
        {
          "distanceKm": 1.296,
          "lat": 25.496637,
          "lon": 51.452847,
          "x": 177.14,
          "y": 29.66,
          "elevationM": 9
        },
        {
          "distanceKm": 1.377,
          "lat": 25.49711,
          "lon": 51.453443,
          "x": 185.48,
          "y": 22.31,
          "elevationM": 9
        },
        {
          "distanceKm": 1.458,
          "lat": 25.496867,
          "lon": 51.454156,
          "x": 195.46,
          "y": 26.08,
          "elevationM": 11
        },
        {
          "distanceKm": 1.539,
          "lat": 25.496344,
          "lon": 51.454708,
          "x": 203.19,
          "y": 34.19,
          "elevationM": 8
        },
        {
          "distanceKm": 1.62,
          "lat": 25.495684,
          "lon": 51.454522,
          "x": 200.57,
          "y": 44.43,
          "elevationM": 13
        },
        {
          "distanceKm": 1.701,
          "lat": 25.495145,
          "lon": 51.453979,
          "x": 192.98,
          "y": 52.79,
          "elevationM": 12
        },
        {
          "distanceKm": 1.782,
          "lat": 25.494606,
          "lon": 51.453437,
          "x": 185.39,
          "y": 61.14,
          "elevationM": 14
        },
        {
          "distanceKm": 1.863,
          "lat": 25.493995,
          "lon": 51.453173,
          "x": 181.7,
          "y": 70.61,
          "elevationM": 15
        },
        {
          "distanceKm": 1.944,
          "lat": 25.494034,
          "lon": 51.453908,
          "x": 191.99,
          "y": 70,
          "elevationM": 13
        },
        {
          "distanceKm": 2.024,
          "lat": 25.494305,
          "lon": 51.454657,
          "x": 202.47,
          "y": 65.81,
          "elevationM": 11
        },
        {
          "distanceKm": 2.105,
          "lat": 25.494576,
          "lon": 51.455406,
          "x": 212.95,
          "y": 61.61,
          "elevationM": 13
        },
        {
          "distanceKm": 2.186,
          "lat": 25.494847,
          "lon": 51.456155,
          "x": 223.43,
          "y": 57.4,
          "elevationM": 13
        },
        {
          "distanceKm": 2.267,
          "lat": 25.494631,
          "lon": 51.456865,
          "x": 233.36,
          "y": 60.76,
          "elevationM": 11
        },
        {
          "distanceKm": 2.348,
          "lat": 25.493959,
          "lon": 51.456802,
          "x": 232.49,
          "y": 71.17,
          "elevationM": 10
        },
        {
          "distanceKm": 2.429,
          "lat": 25.493442,
          "lon": 51.456237,
          "x": 224.57,
          "y": 79.18,
          "elevationM": 14
        },
        {
          "distanceKm": 2.51,
          "lat": 25.4928,
          "lon": 51.455863,
          "x": 219.35,
          "y": 89.14,
          "elevationM": 16
        },
        {
          "distanceKm": 2.591,
          "lat": 25.4921,
          "lon": 51.455654,
          "x": 216.42,
          "y": 99.99,
          "elevationM": 12
        },
        {
          "distanceKm": 2.672,
          "lat": 25.49177,
          "lon": 51.454967,
          "x": 206.8,
          "y": 105.11,
          "elevationM": 9
        },
        {
          "distanceKm": 2.753,
          "lat": 25.491602,
          "lon": 51.454181,
          "x": 195.81,
          "y": 107.71,
          "elevationM": 11
        },
        {
          "distanceKm": 2.834,
          "lat": 25.491217,
          "lon": 51.453561,
          "x": 187.13,
          "y": 113.68,
          "elevationM": 14
        },
        {
          "distanceKm": 2.915,
          "lat": 25.490604,
          "lon": 51.453918,
          "x": 192.13,
          "y": 123.19,
          "elevationM": 15
        },
        {
          "distanceKm": 2.996,
          "lat": 25.490167,
          "lon": 51.454561,
          "x": 201.13,
          "y": 129.95,
          "elevationM": 15
        },
        {
          "distanceKm": 3.077,
          "lat": 25.489888,
          "lon": 51.455304,
          "x": 211.53,
          "y": 134.28,
          "elevationM": 13
        },
        {
          "distanceKm": 3.158,
          "lat": 25.489782,
          "lon": 51.456101,
          "x": 222.67,
          "y": 135.92,
          "elevationM": 14
        },
        {
          "distanceKm": 3.239,
          "lat": 25.489836,
          "lon": 51.456904,
          "x": 233.91,
          "y": 135.08,
          "elevationM": 15
        },
        {
          "distanceKm": 3.32,
          "lat": 25.489925,
          "lon": 51.457705,
          "x": 245.12,
          "y": 133.71,
          "elevationM": 14
        },
        {
          "distanceKm": 3.401,
          "lat": 25.490014,
          "lon": 51.458506,
          "x": 256.32,
          "y": 132.33,
          "elevationM": 12
        },
        {
          "distanceKm": 3.482,
          "lat": 25.489812,
          "lon": 51.459254,
          "x": 266.8,
          "y": 135.46,
          "elevationM": 12
        },
        {
          "distanceKm": 3.563,
          "lat": 25.489202,
          "lon": 51.459688,
          "x": 272.86,
          "y": 144.91,
          "elevationM": 12
        },
        {
          "distanceKm": 3.644,
          "lat": 25.488542,
          "lon": 51.460007,
          "x": 277.34,
          "y": 155.15,
          "elevationM": 10
        },
        {
          "distanceKm": 3.725,
          "lat": 25.487889,
          "lon": 51.459683,
          "x": 272.8,
          "y": 165.26,
          "elevationM": 10
        },
        {
          "distanceKm": 3.806,
          "lat": 25.487274,
          "lon": 51.459251,
          "x": 266.76,
          "y": 174.8,
          "elevationM": 16
        },
        {
          "distanceKm": 3.887,
          "lat": 25.486892,
          "lon": 51.45862,
          "x": 257.92,
          "y": 180.72,
          "elevationM": 17
        },
        {
          "distanceKm": 3.968,
          "lat": 25.487029,
          "lon": 51.457828,
          "x": 246.83,
          "y": 178.6,
          "elevationM": 16
        },
        {
          "distanceKm": 4.049,
          "lat": 25.487171,
          "lon": 51.457037,
          "x": 235.76,
          "y": 176.39,
          "elevationM": 15
        },
        {
          "distanceKm": 4.13,
          "lat": 25.487314,
          "lon": 51.456245,
          "x": 224.69,
          "y": 174.18,
          "elevationM": 14
        },
        {
          "distanceKm": 4.211,
          "lat": 25.48712,
          "lon": 51.45552,
          "x": 214.54,
          "y": 177.19,
          "elevationM": 14
        },
        {
          "distanceKm": 4.292,
          "lat": 25.486475,
          "lon": 51.455145,
          "x": 209.29,
          "y": 187.18,
          "elevationM": 15
        },
        {
          "distanceKm": 4.373,
          "lat": 25.485827,
          "lon": 51.454777,
          "x": 204.14,
          "y": 197.23,
          "elevationM": 15
        },
        {
          "distanceKm": 4.454,
          "lat": 25.485179,
          "lon": 51.454409,
          "x": 199,
          "y": 207.27,
          "elevationM": 15
        },
        {
          "distanceKm": 4.535,
          "lat": 25.484531,
          "lon": 51.454041,
          "x": 193.85,
          "y": 217.32,
          "elevationM": 14
        },
        {
          "distanceKm": 4.616,
          "lat": 25.48393,
          "lon": 51.453604,
          "x": 187.74,
          "y": 226.64,
          "elevationM": 11
        },
        {
          "distanceKm": 4.697,
          "lat": 25.483989,
          "lon": 51.452857,
          "x": 177.28,
          "y": 225.73,
          "elevationM": 14
        },
        {
          "distanceKm": 4.778,
          "lat": 25.484612,
          "lon": 51.452445,
          "x": 171.52,
          "y": 216.07,
          "elevationM": 16
        },
        {
          "distanceKm": 4.859,
          "lat": 25.48525,
          "lon": 51.452058,
          "x": 166.1,
          "y": 206.17,
          "elevationM": 13
        },
        {
          "distanceKm": 4.94,
          "lat": 25.485888,
          "lon": 51.451669,
          "x": 160.65,
          "y": 196.28,
          "elevationM": 14
        },
        {
          "distanceKm": 5.021,
          "lat": 25.486526,
          "lon": 51.45128,
          "x": 155.21,
          "y": 186.39,
          "elevationM": 13
        },
        {
          "distanceKm": 5.102,
          "lat": 25.487164,
          "lon": 51.450891,
          "x": 149.76,
          "y": 176.5,
          "elevationM": 14
        },
        {
          "distanceKm": 5.183,
          "lat": 25.487802,
          "lon": 51.450501,
          "x": 144.32,
          "y": 166.61,
          "elevationM": 12
        },
        {
          "distanceKm": 5.264,
          "lat": 25.48844,
          "lon": 51.450112,
          "x": 138.87,
          "y": 156.72,
          "elevationM": 13
        },
        {
          "distanceKm": 5.345,
          "lat": 25.489078,
          "lon": 51.449723,
          "x": 133.43,
          "y": 146.83,
          "elevationM": 12
        },
        {
          "distanceKm": 5.426,
          "lat": 25.489716,
          "lon": 51.449334,
          "x": 127.98,
          "y": 136.94,
          "elevationM": 13
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
      "minM": 8,
      "maxM": 17,
      "rangeM": 9
    },
    "source": {
      "geometry": "OpenStreetMap raceway ways",
      "osmName": null,
      "wayCount": 1,
      "osmLengthKm": 5.426,
      "quality": "matched",
      "generatedOn": "2026-06-07"
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
    "profile": {
      "dataset": "SRTM30m",
      "samples": [
        {
          "distanceKm": 0,
          "lat": 24.471967,
          "lon": 54.602731,
          "x": 155.95,
          "y": 110.84,
          "elevationM": -1
        },
        {
          "distanceKm": 0.081,
          "lat": 24.471265,
          "lon": 54.602502,
          "x": 153.18,
          "y": 120.18,
          "elevationM": -1
        },
        {
          "distanceKm": 0.163,
          "lat": 24.470562,
          "lon": 54.602275,
          "x": 150.43,
          "y": 129.53,
          "elevationM": -2
        },
        {
          "distanceKm": 0.244,
          "lat": 24.469866,
          "lon": 54.602021,
          "x": 147.35,
          "y": 138.78,
          "elevationM": -1
        },
        {
          "distanceKm": 0.326,
          "lat": 24.469171,
          "lon": 54.601767,
          "x": 144.28,
          "y": 148.03,
          "elevationM": 0
        },
        {
          "distanceKm": 0.407,
          "lat": 24.468475,
          "lon": 54.601557,
          "x": 141.74,
          "y": 157.28,
          "elevationM": 2
        },
        {
          "distanceKm": 0.489,
          "lat": 24.468374,
          "lon": 54.602261,
          "x": 150.26,
          "y": 158.62,
          "elevationM": -1
        },
        {
          "distanceKm": 0.57,
          "lat": 24.467667,
          "lon": 54.60247,
          "x": 152.79,
          "y": 168.03,
          "elevationM": -1
        },
        {
          "distanceKm": 0.652,
          "lat": 24.466984,
          "lon": 54.602749,
          "x": 156.17,
          "y": 177.11,
          "elevationM": 3
        },
        {
          "distanceKm": 0.733,
          "lat": 24.466409,
          "lon": 54.603243,
          "x": 162.15,
          "y": 184.77,
          "elevationM": 2
        },
        {
          "distanceKm": 0.815,
          "lat": 24.465931,
          "lon": 54.603853,
          "x": 169.53,
          "y": 191.11,
          "elevationM": 2
        },
        {
          "distanceKm": 0.896,
          "lat": 24.465484,
          "lon": 54.604491,
          "x": 177.25,
          "y": 197.06,
          "elevationM": 5
        },
        {
          "distanceKm": 0.978,
          "lat": 24.465028,
          "lon": 54.605121,
          "x": 184.88,
          "y": 203.13,
          "elevationM": 4
        },
        {
          "distanceKm": 1.059,
          "lat": 24.464584,
          "lon": 54.605761,
          "x": 192.64,
          "y": 209.04,
          "elevationM": 1
        },
        {
          "distanceKm": 1.141,
          "lat": 24.464168,
          "lon": 54.606423,
          "x": 200.65,
          "y": 214.57,
          "elevationM": 1
        },
        {
          "distanceKm": 1.222,
          "lat": 24.463822,
          "lon": 54.607133,
          "x": 209.24,
          "y": 219.16,
          "elevationM": 2
        },
        {
          "distanceKm": 1.304,
          "lat": 24.463525,
          "lon": 54.607869,
          "x": 218.15,
          "y": 223.12,
          "elevationM": 0
        },
        {
          "distanceKm": 1.385,
          "lat": 24.463228,
          "lon": 54.608604,
          "x": 227.06,
          "y": 227.07,
          "elevationM": -1
        },
        {
          "distanceKm": 1.467,
          "lat": 24.463328,
          "lon": 54.609346,
          "x": 236.03,
          "y": 225.74,
          "elevationM": -2
        },
        {
          "distanceKm": 1.548,
          "lat": 24.464014,
          "lon": 54.609524,
          "x": 238.19,
          "y": 216.62,
          "elevationM": -3
        },
        {
          "distanceKm": 1.63,
          "lat": 24.464533,
          "lon": 54.609006,
          "x": 231.91,
          "y": 209.71,
          "elevationM": -3
        },
        {
          "distanceKm": 1.711,
          "lat": 24.464616,
          "lon": 54.608208,
          "x": 222.25,
          "y": 208.61,
          "elevationM": -3
        },
        {
          "distanceKm": 1.793,
          "lat": 24.464667,
          "lon": 54.607405,
          "x": 212.53,
          "y": 207.93,
          "elevationM": 3
        },
        {
          "distanceKm": 1.874,
          "lat": 24.464791,
          "lon": 54.60662,
          "x": 203.03,
          "y": 206.28,
          "elevationM": -2
        },
        {
          "distanceKm": 1.956,
          "lat": 24.465186,
          "lon": 54.605942,
          "x": 194.82,
          "y": 201.02,
          "elevationM": -4
        },
        {
          "distanceKm": 2.037,
          "lat": 24.465754,
          "lon": 54.605497,
          "x": 189.43,
          "y": 193.47,
          "elevationM": 1
        },
        {
          "distanceKm": 2.119,
          "lat": 24.466469,
          "lon": 54.60532,
          "x": 187.3,
          "y": 183.96,
          "elevationM": 0
        },
        {
          "distanceKm": 2.2,
          "lat": 24.466687,
          "lon": 54.605986,
          "x": 195.36,
          "y": 181.07,
          "elevationM": 0
        },
        {
          "distanceKm": 2.282,
          "lat": 24.467115,
          "lon": 54.606493,
          "x": 201.5,
          "y": 175.38,
          "elevationM": 2
        },
        {
          "distanceKm": 2.363,
          "lat": 24.467829,
          "lon": 54.606392,
          "x": 200.27,
          "y": 165.88,
          "elevationM": 1
        },
        {
          "distanceKm": 2.445,
          "lat": 24.467923,
          "lon": 54.605611,
          "x": 190.82,
          "y": 164.62,
          "elevationM": 1
        },
        {
          "distanceKm": 2.526,
          "lat": 24.467818,
          "lon": 54.604815,
          "x": 181.18,
          "y": 166.02,
          "elevationM": 0
        },
        {
          "distanceKm": 2.608,
          "lat": 24.467716,
          "lon": 54.604017,
          "x": 171.52,
          "y": 167.38,
          "elevationM": 0
        },
        {
          "distanceKm": 2.689,
          "lat": 24.467981,
          "lon": 54.603322,
          "x": 163.1,
          "y": 163.85,
          "elevationM": 0
        },
        {
          "distanceKm": 2.771,
          "lat": 24.468617,
          "lon": 54.602921,
          "x": 158.25,
          "y": 155.4,
          "elevationM": 0
        },
        {
          "distanceKm": 2.852,
          "lat": 24.46928,
          "lon": 54.602606,
          "x": 154.44,
          "y": 146.58,
          "elevationM": -3
        },
        {
          "distanceKm": 2.934,
          "lat": 24.469663,
          "lon": 54.603127,
          "x": 160.74,
          "y": 141.48,
          "elevationM": 0
        },
        {
          "distanceKm": 3.015,
          "lat": 24.469767,
          "lon": 54.603924,
          "x": 170.39,
          "y": 140.1,
          "elevationM": 4
        },
        {
          "distanceKm": 3.097,
          "lat": 24.469872,
          "lon": 54.604721,
          "x": 180.04,
          "y": 138.7,
          "elevationM": 0
        },
        {
          "distanceKm": 3.178,
          "lat": 24.469977,
          "lon": 54.605518,
          "x": 189.69,
          "y": 137.31,
          "elevationM": -1
        },
        {
          "distanceKm": 3.26,
          "lat": 24.47008,
          "lon": 54.606315,
          "x": 199.34,
          "y": 135.94,
          "elevationM": -3
        },
        {
          "distanceKm": 3.341,
          "lat": 24.470183,
          "lon": 54.607112,
          "x": 208.99,
          "y": 134.56,
          "elevationM": 1
        },
        {
          "distanceKm": 3.423,
          "lat": 24.470298,
          "lon": 54.607906,
          "x": 218.6,
          "y": 133.04,
          "elevationM": 1
        },
        {
          "distanceKm": 3.504,
          "lat": 24.470954,
          "lon": 54.608028,
          "x": 220.08,
          "y": 124.31,
          "elevationM": 4
        },
        {
          "distanceKm": 3.586,
          "lat": 24.471666,
          "lon": 54.607839,
          "x": 217.79,
          "y": 114.84,
          "elevationM": -1
        },
        {
          "distanceKm": 3.667,
          "lat": 24.472378,
          "lon": 54.60765,
          "x": 215.5,
          "y": 105.37,
          "elevationM": -4
        },
        {
          "distanceKm": 3.749,
          "lat": 24.472751,
          "lon": 54.606996,
          "x": 207.58,
          "y": 100.41,
          "elevationM": 0
        },
        {
          "distanceKm": 3.83,
          "lat": 24.473041,
          "lon": 54.606262,
          "x": 198.69,
          "y": 96.56,
          "elevationM": 0
        },
        {
          "distanceKm": 3.912,
          "lat": 24.47361,
          "lon": 54.605773,
          "x": 192.78,
          "y": 88.99,
          "elevationM": 1
        },
        {
          "distanceKm": 3.993,
          "lat": 24.474331,
          "lon": 54.605802,
          "x": 193.12,
          "y": 79.39,
          "elevationM": 2
        },
        {
          "distanceKm": 4.075,
          "lat": 24.47504,
          "lon": 54.606006,
          "x": 195.6,
          "y": 69.96,
          "elevationM": 0
        },
        {
          "distanceKm": 4.156,
          "lat": 24.475769,
          "lon": 54.606066,
          "x": 196.33,
          "y": 60.27,
          "elevationM": 1
        },
        {
          "distanceKm": 4.238,
          "lat": 24.476498,
          "lon": 54.605981,
          "x": 195.3,
          "y": 50.58,
          "elevationM": -2
        },
        {
          "distanceKm": 4.319,
          "lat": 24.477226,
          "lon": 54.605889,
          "x": 194.18,
          "y": 40.89,
          "elevationM": 1
        },
        {
          "distanceKm": 4.401,
          "lat": 24.477953,
          "lon": 54.60579,
          "x": 192.99,
          "y": 31.22,
          "elevationM": -1
        },
        {
          "distanceKm": 4.482,
          "lat": 24.47861,
          "lon": 54.605519,
          "x": 189.7,
          "y": 22.48,
          "elevationM": 1
        },
        {
          "distanceKm": 4.564,
          "lat": 24.478237,
          "lon": 54.604976,
          "x": 183.13,
          "y": 27.45,
          "elevationM": 1
        },
        {
          "distanceKm": 4.645,
          "lat": 24.477531,
          "lon": 54.60476,
          "x": 180.51,
          "y": 36.83,
          "elevationM": -1
        },
        {
          "distanceKm": 4.727,
          "lat": 24.47683,
          "lon": 54.604525,
          "x": 177.67,
          "y": 46.15,
          "elevationM": 2
        },
        {
          "distanceKm": 4.808,
          "lat": 24.476134,
          "lon": 54.604273,
          "x": 174.62,
          "y": 55.41,
          "elevationM": -1
        },
        {
          "distanceKm": 4.889,
          "lat": 24.475439,
          "lon": 54.604017,
          "x": 171.52,
          "y": 64.65,
          "elevationM": 0
        },
        {
          "distanceKm": 4.971,
          "lat": 24.474745,
          "lon": 54.603759,
          "x": 168.4,
          "y": 73.89,
          "elevationM": -2
        },
        {
          "distanceKm": 5.052,
          "lat": 24.474051,
          "lon": 54.603502,
          "x": 165.29,
          "y": 83.12,
          "elevationM": 0
        },
        {
          "distanceKm": 5.134,
          "lat": 24.473357,
          "lon": 54.603242,
          "x": 162.14,
          "y": 92.35,
          "elevationM": 2
        },
        {
          "distanceKm": 5.215,
          "lat": 24.472663,
          "lon": 54.602982,
          "x": 159,
          "y": 101.58,
          "elevationM": 1
        },
        {
          "distanceKm": 5.297,
          "lat": 24.471967,
          "lon": 54.602731,
          "x": 155.95,
          "y": 110.84,
          "elevationM": -1
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
      "maxM": 5,
      "rangeM": 9
    },
    "source": {
      "geometry": "OpenStreetMap relation 11378665",
      "osmName": "Yas Marina Circuit",
      "wayCount": 6,
      "osmLengthKm": 5.297,
      "quality": "matched",
      "generatedOn": "2026-06-07"
    }
  }
]
