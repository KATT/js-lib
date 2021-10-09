module.exports = {
  base: '/js-lib/',
  title: 'js-lib',

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: 'Config Reference',
        link: '/config/basics',
        activeMatch: '^/config/',
      },
      {
        text: 'Release Notes',
        link: 'https://github.com/vuejs/vitepress/releases',
      },
    ],

    sidebar: [
      { text: 'js-lib', link: '/' },
      { text: 'Promise', link: '/promise' },
      { text: 'Object', link: '/object' },
      { text: 'Array', link: '/array' },
      { text: 'String', link: '/string' },
      { text: 'Number', link: '/number' },
      { text: 'Math', link: '/math' },
      { text: 'Json', link: '/json' },
      { text: 'Time', link: '/time' },
      { text: 'Units', link: '/units' },
      { text: 'Decorators', link: '/decorators' },
      { text: 'Error', link: '/error' },
      { text: 'Types', link: '/types' },
    ],
  },
}
