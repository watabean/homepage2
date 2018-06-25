module.exports = {
  themeConfig: {
    docsDir: 'docs',
    logo: '/img/logo-set-yoko-musubii.svg',
    astUpdated: 'Last Updated',
    search: false,
    head: [
      ['link', { rel: 'style-sheet', href: 'https://cdn.jsdelivr.net/npm/musubii@6.1.0/docs/css/musubii.min.css'}],
    ],
    nav: [
      {
        text: 'トップ',
        link: '/'
      },
      {
        text: '当医院について',
        link: '/about'
      },
      {
        text: '院長あいさつ',
        link: '/introduce'
      },
      {
        text: 'アクセス',
        link: '/access'
      }
    ],
    sidebar: {
      '/about': [
        {
          title: '当医院について',
          collapsable: true
        }
      ],
      '/introduce': [
        {
          title: '院長あいさつ',
          collapsable: true
        }
      ],
      '/acccess': [
        {
          title: 'アクセス',
          collapsable: true
        }
      ]
    }
  }
}