// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: true,
  showLastUpdateTime: true,
  sidebarCollapsible: true,
//  remarkPlugins: [
//    [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
//  ],
  sidebarPath: require.resolve('./sidebars.js'),
};

const docs = [
  {
    id: 'hpe-vm-essentials',
    path: 'docs/hpe-vm-essentials',
    routeBasePath: '/hpe-vm-essentials',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RiverMeadow Self-Paced Enablement',
  tagline: 'Start your learning journey learning on how to migrate, optimize, and modernize workloads using the RiverMeadow Workload Mobility Platform.',
  favicon: 'img/favicon.png',
  staticDirectories: ['static'],

  // Set the production url of your site here
  url: `https://martezr.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/rivermeadow-labs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'martezr', // Usually your GitHub org/user name.
  projectName: 'rivermeadow-labs', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/courses', // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        gtag: {
          trackingID: 'G-KGV615EMB1',
          anonymizeIP: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/favicon.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: false,
        },
      },
      navbar: {
        logo: {
          alt: 'RiverMeadow Software Logo',
          src: 'img/rivermeadow_logo.png',
          srcDark: 'img/full-logo_white@rgb.svg',
        },
        items: [
/*        {
          position: 'left',
          to: '/',
          label: 'Home',
        },
*/
          {
            type: 'dropdown',
            label: 'Courses',
            position: 'left',
            items: [
              {
                label: 'RiverMeadow Fundamentals',
                to: '/courses/fundamentals/introduction',
              },
/*              {
                label: 'RiverMeadow Advanced',
                to: '/courses/advanced/introduction',
              },
              {
                label: 'Amazon Web Services (AWS)',
                to: '/courses/aws/introduction',
              },
              {
                label: 'Microsoft Azure',
                to: '/courses/azure/introduction',
              },
              {
                label: 'Red Hat OpenShift',
                to: '/courses/red-hat-openshift/introduction',
              },
              {
                label: 'HPE Morpheus VM Essentials',
                to: '/courses/hpe-vm-essentials/introduction',
              },
*/
            ],
          },
/*        {
          position: 'left',
          to: '/guides',
          label: 'Guides',
        },
*/
        {
          position: 'left',
          to: '/demos',
          label: 'Demos',
        },
        ],
      },
      footer: {
        links: [
        ],
        copyright: `© ${new Date().getFullYear()} RiverMeadow Software Inc. All Rights Reserved`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
