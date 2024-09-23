import { defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Drupal Study Guide',
  description:
    'Acquia Drupal certification study guide',
  base: '/studyguide/',
  srcDir: './docs',
  outDir: './dist',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/docs/images/favicon.ico' }],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-8V22RQEJ71',
      },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ZZZZZZZZ');`,
    ],
  ],
  //rewrites: {
  //'nodes_n_fields.md': 'nodes-and-fields.md',
  //'off_the_island.md': 'off-island.md',
  //},

  vite: {
    ssr: {
      noExternal: ['@nolebase/vitepress-plugin-enhanced-readabilities'],
    },
  },
  themeConfig: {
    logo: '/images/d9book.svg',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Attribution', link: '/attribution' },
      { text: 'Contribute', link: '/contribute' },
      { text: 'Fork me', link: 'https://github.com/selwynpolit/studyguide/fork' },
    ],

    outline: {
      level: [2, 3],
    },

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/selwynpolit/studyguide/edit/gh-pages/docs/:path',
      text: 'Edit this page on GitHub',
    },

    sidebar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Developer',
        items: [
          {text: 'Introduction', link: '/developer/intro.md'},
          {
            text: '1.0 Fundamental Web Development Concepts', link: '/developer/fundamental-web-dev-concepts.md',
            collapsed: true,
            items: [
              {text: '1.1 HTML/CSS', link: '/developer/1.1-html-css'},
              {text: '1.2 Javascript/jQuery', link: '/developer/1.2-javascript-jquery'},
              {text: '1.3 Source code control with git', link: '/developer/1.3-git'},
              ]
          },
          {text: '2.0 Site Building', link: '/developer/site-building.md'},
          {text: '3.0 Front end Development (Theming)', link: '/developer/front-end-dev-theming.md'},
          {text: '4.0 Back end Development (Coding)', link: '/developer/back-end-dev-coding/intro.md'},
        ]
      },
      {
        text: 'Backend Specialist',
        items: [
          {text: 'Introduction', link: '/backend-specialist/intro.md'},
          {
            text: 'Section 2: Drupal core API',
            link: '/backend-specialist/2-drupal-core-api.md',
            items: [
              { text: '2.2 Form API', link: '/backend-specialist/2.2-form-api.md' },
              { text: '2.3 Entity API', link: '/backend-specialist/2.2-entity-api.md' },
            ]
          },
        ]
      }

    ],

    socialLinks: [
      { icon: 'x', link: '//twitter.com/selwynpolit' },
      { icon: 'github', link: '//github.com/selwynpolit' },
    ],

    footer: {
      message:
        '<span>\n' +
        '  <a property="dct:title" rel="cc:attributionURL" href="//selwynpolit.github.io/d9book">Drupal at your fingertips</a>\n' +
        '  by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="//drupal.org/u/selwynpolit">Selwyn Polit</a>\n' +
        '  is licensed under <a href="//creativecommons.org/licenses/by/4.0/" target="_blank" rel="license noopener noreferrer">CC BY 4.0\n' +
        '  </a><br>Drupal is a registered trademark of Dries Buytaert</span>',
    },
  },
});
