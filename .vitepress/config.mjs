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
        collapsed: true,
        items: [
          {text: 'Introduction', link: '/developer/intro.md'},
          {
            text: '1.0 Fundamentals ',
            collapsed: true,
            items: [
              {text: '1.1 HTML/CSS', link: '/developer/fundamentals/1.1-html-css'},
              {text: '1.2 Javascript/jQuery', link: '/developer/fundamentals/1.2-javascript-jquery'},
              {text: '1.3 Source code control with git', link: '/developer/fundamentals/1.3-git'},
              ]
          },
          {
            text: '2.0 Site Building',
            collapsed: true,
            items: [
              {text: '2.1 Content Types', link: '/developer/site-building/2.1-content-types'},
              {text: '2.2 Display Modes', link: '/developer/site-building/2.2-display-modes'},
              {text: '2.3 Taxonomies', link: '/developer/site-building/2.3-taxonomies'},
              {text: '2.4 Blocks', link: '/developer/site-building/2.4-blocks'},
              {text: '2.5 Menus', link: '/developer/site-building/2.5-menus'},
              {text: '2.6 Views', link: '/developer/site-building/2.6-views'},
              {text: '2.7 Configuration Management', link: '/developer/site-building/2.7-configuration-management'},
              {text: '2.8 Multilingual', link: '/developer/site-building/2.8-multilingual'},
              {text: '2.9 Web Services', link: '/developer/site-building/2.9-web-services'},
            ]
          },
          {
            text: '3.0 Front-end Dev)',
            collapsed: true,
            items: [
              { text: '3.1 Creating Themes', link: '/developer/front-end/placeholder.md' },
              { text: '3.2 Theming Concepts', link: '/developer/front-end/placeholder.md' },
              { text: '3.3 Twig Syntax', link: '/developer/front-end/placeholder.md' },
              { text: '3.4 Twig Templates', link: '/developer/front-end/placeholder.md' },
              { text: '3.5 Preprocessors', link: '/developer/front-end/placeholder.md' },
            ]
          },
          {
            text: '4.0 Back end Dev',
            collapsed: true,
            items: [
              {text: '4.1 OOP', link: '/developer/back-end/4.1-oop.md'},
              {text: '4.2 Custom Modules', link: '/developer/back-end/4.2-custom-modules.md'},
              {text: '4.3 Data Storage', link: '/developer/back-end/4.3-data-storage.md'},
              {text: '4.4 Blocks', link: '/developer/back-end/4.4-essential-apis-block.md'},
              {text: '4.4 Configuration', link: '/developer/back-end/4.4-essential-apis-configuration.md'},
              {text: '4.5 Coding Standards', link: '/developer/back-end/4.5-coding-standards.md'},
              {text: '4.6 Performance', link: '/developer/back-end/4.6-performance.md'},
              {text: '4.7 Security', link: '/developer/back-end/4.7-security.md'},
            ]
          },

        ]
      },
      {
        text: 'Backend Specialist',
        collapsed: true,
        items: [
          {text: 'Introduction', link: '/backend-specialist/intro.md'},
          {text: '1.0 Fundamental Web Development Concepts', link: '/backend-specialist/fundamental-web-dev-concepts.md'},
          {
            text: '2.0 Drupal Core API', link: '/backend-specialist/2-drupal-core-api.md',
            items: [
              { text: '2.2 Form API', link: '/backend-specialist/2.2-form-api.md' },
            ]
          },
          {text: '3.0 Debug Code and Troubleshooting', link: '/backend-specialist/3-debug-code-troubleshooting.md'},
          {text: '4.0 Theme Integration', link: '/backend-specialist/backend-specialist/theme-integration.md'},
          {text: '6.0 Security', link: '/backend-specialist/backend-specialist/security.md'},
          {text: '7.0 Leveraging Community', link: '/backend-specialist/leverage-community.md'},
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
