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
    id: 'hpe-morpheus-vm-essentials',
    path: 'docs/hpe-morpheus-vm-essentials',
    routeBasePath: '/hpe-morpheus-vm-essentials',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RiverMeadow Learning Hub',
  tagline: 'Start your learning journey on how to migrate, optimize, and modernize workloads using the RiverMeadow Workload Mobility Platform.',
  favicon: 'img/favicon.png',
  staticDirectories: ['static'],

  // Set the production url of your site here
  url: `https://rivermeadow-software.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rivermeadow-software', // Usually your GitHub org/user name.
  projectName: 'enablement-docs', // Usually your repo name.
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

  clientModules: [require.resolve('./src/clientModules/imageLightbox.js')],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides',
        path: 'guides',
        routeBasePath: 'guides',
        sidebarPath: './sidebarsGuides.js',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'workshops',
        path: 'workshops',
        routeBasePath: 'workshops',
        sidebarPath: './sidebarsWorkshops.js',
      },
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
            // Rendered by src/components/NavbarMegaMenu. The first section uses
            // the plain panel; later sections use the tinted panel. `columns`
            // sets how many columns of items a section shows.
            type: 'custom-megaMenu',
            label: 'Courses',
            position: 'left',
            activeBasePath: '/courses',
            sections: [
              {
                title: 'General',
                items: [
                  {
                    label: 'RiverMeadow Fundamentals',
                    description: 'Learn how the platform migrates, optimizes and modernizes workloads',
                    to: '/courses/fundamentals/introduction',
                    icon: 'compass',
                  },
/*                  {
                    label: 'RiverMeadow Advanced',
                    description: 'Go deeper on platform capabilities',
                    to: '/courses/advanced/introduction',
                    icon: 'layers',
                  },
*/
                ],
              },
              {
                title: 'By platform',
                columns: 2,
                items: [
                  {
                    label: 'Amazon Web Services (AWS)',
                    description: 'Migrate, optimize, and modernize servers on Amazon EC2',
                    to: '/courses/aws/introduction',
                    icon: 'cloud',
                  },
                  {
                    label: 'HPE Morpheus VM Essentials',
                    description: 'Migrate workloads from any source to the HVM hypervisor',
                    to: '/courses/hpe-morpheus-vm-essentials/introduction',
                    icon: 'server',
                  },
/*                  {
                    label: 'Microsoft Azure',
                    description: 'Migrate and modernize workloads on Azure',
                    to: '/courses/azure/introduction',
                    icon: 'cloud',
                  },
                  {
                    label: 'Red Hat OpenShift',
                    description: 'Migrate virtual machines to OpenShift',
                    to: '/courses/red-hat-openshift/introduction',
                    icon: 'box',
                  },
*/
                ],
              },
            ],
          },
          {
            label: 'Guides',
            to: 'guides/introduction',
            position: 'left',
            docsPluginId: 'guides',
            activeBasePath: 'guides',
          },
        {
          position: 'left',
          to: '/demos',
          label: 'Demos',
        },
        // Right-side actions, styled as pill buttons in src/css/custom.css.
        {
          position: 'right',
          href: 'https://docs.rivermeadow.com',
          label: 'Documentation',
          className: 'navbar-cta navbar-cta--secondary',
        },
        {
          position: 'right',
          href: 'https://www.rivermeadow.com/contact-us',
          label: 'Schedule a demo',
          className: 'navbar-cta navbar-cta--primary',
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
