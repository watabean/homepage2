module.exports = {
  locales: {
    '/': {
      lang: 'ja',
      title: 'わたなべ歯科',
      description: '多治見市金岡町に開業して20年以上の歯科医院です。患者様の意思を尊重した診療を心がけています。'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/img/favicon2.png' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Quicksand' }],
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.1.0/css/all.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/musubii@6.2.0/docs/css/musubii.min.css' }],
    ['meta', { name: 'theme-color', content: '#1cb4c7' }],
    ['meta', { property: 'og:title', content: 'わたなべ歯科' }],
    ['meta', { property: 'og:description', content: '多治見市金岡町に開業して20年以上の歯医者です。' }],
    ['meta', { property: 'og:url', content: '' }],
    ['meta', { property: 'og:image', content: 'https://qrac.github.io/musubii/img/ogp.png' }],
    ['meta', { property: 'og:site_name', content: 'わたなべ歯科' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ],
  themeConfig: {
    docsDir: 'docs',
    logo: '/img/teeth.svg',
    search: false,
    sidebarDepth: 2,
    nav: [
      {
        text: '治療内容',
        link: '/#feature'
      },
      {
        text: 'ドクター紹介',
        link: '/#introduce'
      },
      {
        text: 'アクセス',
        link: '/#access'
      }
    ],
    sidebar: {
      '/#feature': [
        {
          collapsable: false,
          children: [
            '/#feature'
          ]
        }
      ],
      '/#introduce': [
        {
          collapsable: false,
          children: [
            '/#introduce'
          ]
        }
      ],
      '/#access': [
        {
          collapsable: false,
          children: [
            '/#access'
          ]
        }
      ]
    }
  }
}