// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Entria Jobs',
  tagline: 'Solve problems at Scale',
  url: 'http://entria.github.io',
  baseUrl: '/jobs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'entria', // Usually your GitHub org/user name.
  projectName: 'jobs', // Usually your repo name.
  trailingSlash: false,
  plugins: [
    require.resolve('@cmfcmf/docusaurus-search-local'),
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/entria/jobs/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/entria/jobs/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Entria Jobs',
        logo: {
          alt: 'Entria Jobs',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'software-engineer',
            position: 'left',
            label: 'Software Engineer',
          },
          {
            href: 'https://github.com/entria',
            label: 'Entria',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Projects',
            items: [
              {
                label: 'Entria',
                href: 'https://entria.com.br',
              },
              {
                label: 'OpenPix',
                href: 'https://openpix.com.br',
              },
              {
                label: 'Feedback House',
                href: 'https://feedback.house',
              },
              {
                label: 'Log.iD',
                href: 'https://logid.com.br',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Entria / OpenPix`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
