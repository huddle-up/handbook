/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
  title: 'HuddleUp',
  tagline: 'A place to discuss, meet and get to know each other online',
  url: 'https://huddle-up.github.io',
  baseUrl: '/handbook/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'huddle-up', // GitHub org name.
  projectName: 'handbook', // Repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'HuddleUp Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/huddle-up/huddle-up',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'User Guide',
              to: '/docs/use/intro',
            },
            {
              label: 'Hosting Guide',
              to: '/docs/host/intro',
            },
            {
              label: 'Developer Guide',
              to: '/docs/develop/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/huddle-up/huddle-up',
            },
            {
              label: 'GitHub (Handbook)',
              href: 'https://github.com/huddle-up/handbook',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HuddleUp. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/huddle-up/handbook/edit/master/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
