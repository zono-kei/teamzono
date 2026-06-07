import { Product } from './types';
import zono1 from './components/zono1.JPG';
import zono11 from './components/zono11.jpg';
import zono3 from './components/zono3.jpg';
import zono31 from './components/zono31.jpg';
import zono4 from './components/zono4.JPG';
import zono41 from './components/zono41.jpg';
import zono42 from './components/zono42.jpg';
import zono43 from './components/zono43.jpg';
import zono5 from './components/zono5.jpeg';
import zono51 from './components/zono51.jpg';
import zono52 from './components/zono52.jpg';
import zono53 from './components/zono53.jpg';
import daruma from './components/DARUMA.JPG';
import zono7 from './components/zono7.JPG';
import zono71 from './components/zono71.jpg';
import zono72 from './components/zono72.jpg';
import zono73 from './components/zono73.jpg';
import zono200 from './components/zono200.jpg';
import zono201 from './components/zono201.jpg';
import zono203 from './components/zono203.jpg';
import zonozono from './components/zonozono.jpg';
import zonozono3 from './components/zonozono3.jpg';
import zono100 from './components/zono100.jpg';
import zono101 from './components/zono101.jpg';
import zono102 from './components/zono102.jpg';
import zono103 from './components/zono103.jpg';
import zono400 from './components/zono400.jpg';
import zono401 from './components/zono401.jpg';
import zono9 from './components/zono9.jpg';
import zono91 from './components/zono91.jpg';
import zono8 from './components/zono8.jpg';
import zono82 from './components/zono82.jpg';
import zono83 from './components/zono83.jpg';
import zono300 from './components/zono300.jpg';
import zono301 from './components/zono301.jpg';
import zono303 from './components/zono303.jpg';
import img_5117 from './assets/images/IMG_5117.jpg';
import img_5094 from './assets/images/IMG_5094.jpg';
import img_5047 from './assets/images/IMG_5047.jpg';
import img_5051 from './assets/images/IMG_5051.jpg';
import img_9a2d78ef from './assets/images/IMG_9A2D78EF-4001-485E-93E2-0FBA6EE572F9.jpg';
import img_5134 from './assets/images/IMG_5134.jpg';
import img_5135 from './assets/images/IMG_5135.jpg';
import img_5143 from './assets/images/IMG_5143.PNG';
import img_5144 from './assets/images/IMG_5144.PNG';
import img_5145 from './assets/images/IMG_5145.PNG';
import img_5146 from './assets/images/IMG_5146.PNG';
import img_5147 from './assets/images/IMG_5147.PNG';
import img_5148 from './assets/images/IMG_5148.PNG';
import img_b85a2cea from './assets/images/IMG_B85A2CEA-86CF-4F9B-97FC-ADB66AD2F4AD.jpg';
import img_10 from './assets/images/10.png';
import zono21 from './components/zono21.jpg';
import zono22 from './components/zono22.jpg';
import zono23 from './components/zono23.jpg';
import zono2 from './components/zono2.PNG';
import zono24 from './components/zono24.jpg';
import zono25 from './components/zono25.jpg';
import zono26 from './components/zono26.PNG';
import zono27 from './components/zono27.JPG';
import zono28 from './components/zono28.jpg';
import zono29 from './components/zono29.jpg';
import zono299 from './components/zono299.jpg';

export const products: Product[] = [
  {
    id: '15',
    name: 'DEEP WEST JAPAN BANTAM WEIGHT GP 『ZONO』　T-Shirt',
    description: 'DEEP WEST JAPAN BANTAM WEIGHT GP 2026トーナメントの際に着用する応援Tシャツ\nこれを着て一緒に戦ってください！！',
    price: 4000,
    imageUrl: img_5117,
    imageUrls: [img_5094, img_5047, img_5051],
    category: 'Dry T-Shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOutSizes: ['S'],
    series: 'TEAM ZONO'
  },
  {
    id: '1',
    name: '『ANIME』vintage T-Shirt',
    description: '中国のWKGでフェザー級のタイトルマッチの際に作ったビンテージ風Tシャツ',
    price: 4000,
    imageUrl: img_b85a2cea,
    imageUrls: [zono1, zono11],
    category: 'vintage T-Shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOutSizes: ['L'],
    series: 'TEAM ZONO'
  },
  {
    id: '5',
    name: '『仏』Dry T-Shirt',
    description: 'ONE Champion Shipに出場した際に日本の精神を忘れないようにデザインされたTシャツ',
    price: 4000,
    imageUrl: img_10,
    imageUrls: [zono100, zono103, zono101, zono102],
    category: 'Dry T-Shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOutSizes: ['L', 'XL'],
    series: 'TEAM ZONO'
  },
  {
    id: '3',
    name: '『TEAM ZONO』T-Shirt',
    description: '応援Tシャツとして初めて作った後ろに大きいロゴが入ったTシャツ',
    price: 4000,
    imageUrl: zono203,
    imageUrls: [zono201, zono200],
    category: 'T-Shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOutSizes: ['S', 'M'],
    series: 'TEAM ZONO'
  },
  {
    id: '4',
    name: '『LION』Dry T-Shirt',
    description: 'DEEP OSAKA IMPACT 2024 2nd ROUNDにて着用したドライTシャツ',
    price: 4000,
    imageUrl: img_5143,
    imageUrls: [zono4, zono42, zono43, zonozono, zonozono3, zono41],
    category: 'Dry T-Shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOutSizes: ['S', 'XL'],
    series: 'TEAM ZONO'
  },
  {
    id: '2',
    name: '『BLUE ROSE』T-Shirt',
    description: 'DEEP TOKYO IMPACT 2024 6th ROUND of 際のTシャツ',
    price: 4000,
    imageUrl: zono3,
    imageUrls: [zono31],
    category: 'T-Shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOutSizes: ['M', 'L'],
    series: 'TEAM ZONO'
  },
  {
    id: '6',
    name: '『butterfly』Dry T-Shirt',
    description: 'DEEP TOKYO IMPACT 2024 1st ROUNDの応援Tシャツ',
    price: 4000,
    imageUrl: img_5146,
    imageUrls: [zono5, zono51, zono52, zono53, zonozono, zonozono3],
    category: 'Dry T-Shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOutSizes: ['S', 'M', 'L', 'XL'],
    isSoldOut: true,
    series: 'TEAM ZONO'
  },
  {
    id: '7',
    name: '『DARUMA』Dry T-Shirt',
    description: 'DEEP OSAKA IMPACT 2023 3nd ROUNDの応援Tシャツ',
    price: 4000,
    imageUrl: img_5147,
    imageUrls: [daruma, zono7, zono71, zono72, zono73],
    category: 'Dry T-Shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOutSizes: ['S', 'M', 'L', 'XL'],
    isSoldOut: true,
    series: 'TEAM ZONO'
  },
  {
    id: '8',
    name: 'GOAT Logo T-Shirt',
    description: 'GOAT apparel定番のロゴTシャツ',
    price: 4000,
    imageUrl: img_5144,
    imageUrls: [zono400, zono401],
    category: 'T-Shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOutSizes: ['S', 'M', 'L', 'XL'],
    isSoldOut: true,
    series: 'GOAT apparel'
  },
  {
    id: '9',
    name: 'GOAT ZONO color Long T-Shirt',
    description: 'GOATジムのヤギマークとTEAM ZONOのコラボデザインのロンTです。',
    price: 4500,
    imageUrl: img_9a2d78ef,
    imageUrls: [zono9, zono91],
    category: 'Long Sleeve',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOutSizes: ['S', 'M', 'L', 'XL'],
    isSoldOut: true,
    series: 'GOAT apparel'
  },
  {
    id: '10',
    name: 'GOAT TEAM ZONO Cap',
    description: 'GOATジムのヤギマークとTEAM ZONOのコラボデザインの帽子です。',
    price: 4500,
    imageUrl: zono8,
    imageUrls: [zono82, zono83],
    category: 'Cap',
    sizes: ['Free'],
    soldOutSizes: ['Free'],
    isSoldOut: true,
    series: 'GOAT apparel'
  },
  {
    id: '11',
    name: '『COVID-19』Dry T-Shirt(BLACK)',
    description: 'コロナの時期に作った頑張ろうという意味を込めて作ったドライTシャツ',
    price: 4000,
    imageUrl: img_5134,
    imageUrls: [zono21, zono22, zono23],
    category: 'Dry T-Shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    series: 'notorious qupid'
  },
  {
    id: '12',
    name: '『COVID-19』Dry T-Shirt(WHITE)',
    description: 'コロナの時期に作った頑張ろうという意味を込めて作ったドライTシャツ',
    price: 4000,
    imageUrl: zono2,
    imageUrls: [zono26, zono24, zono25],
    category: 'Dry T-Shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    series: 'notorious qupid'
  },
  {
    id: '13',
    name: '『DARUMA』Hooded Sweatshirt',
    description: '背面に大きなオリジナルのダルマをデザインしたフード付きトレーナー。',
    price: 8800,
    imageUrl: zono27,
    imageUrls: [zono28, zono29, zono24, zono299],
    category: 'Hoodie',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOutSizes: ['S', 'M', 'L', 'XL'],
    isSoldOut: true,
    series: 'notorious qupid'
  },
  {
    id: '14',
    name: '『ANIME』Dry T-Shirt',
    description: 'DEEP OSAKA IMPACT 2025 4th ROUNDの際に着用したドライTシャツ',
    price: 4000,
    imageUrl: img_5148,
    imageUrls: [zono300, zono301, zono303],
    category: 'Dry T-Shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    soldOutSizes: ['S', 'M', 'L', 'XL'],
    isSoldOut: true,
    series: 'TEAM ZONO'
  },
  {
    id: '16',
    name: 'Qupid Logo T-Shirt',
    description: 'Notoious Qupid定番のロゴTシャツ',
    price: 4000,
    imageUrl: img_5145,
    imageUrls: [img_5145, img_5135],
    category: 'T-Shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    series: 'notorious qupid'
  }
];
