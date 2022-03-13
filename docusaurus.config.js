// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const path = require('path');

const math = require('remark-math')
const katex = require('rehype-katex')


/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'MORE NFT DOCS',
    tagline: 'The Future Is Here',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'more-nft-docs', // Usually your repo name
    plugins: [
        path.resolve(__dirname, './node_modules/docusaurus-lunr-search/'),
        'docusaurus-plugin-sass'
    ],
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    routeBasePath: '/',
                    editLocalizedFiles: false,
                    editCurrentVersion: false,
                    remarkPlugins: [math],
                    rehypePlugins: [katex],
                    // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
                },
            }),
        ],
    ],
    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity:
                'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                disableSwitch: true,
            },
            navbar: {
                title: '',
                logo: {
                    alt: 'My Site Logo',
                    src: '/img/Logo_per_doc.svg',
                },
                items: [
                    {
                        type: 'docSidebar',  // docSidebar
                        position: 'left',
                        sidebarId: 'docsAbout', // foldername
                        label: 'About',     // navbar title
                    },

                    {
                        type: 'docSidebar',  // docSidebar
                        position: 'left',
                        sidebarId: 'docsGuides', // foldername
                        label: 'Guides',     // navbar title
                    },

                    {to: '/ourTeam', label: 'Team', position: 'right'},

                    {
                        href: 'https://medium.com/coinmonks/6-more-nft-podcasts-for-your-2021-playlist-1a0f761e6a2f',
                        label: 'Blog',
                        position: 'right'
                    },

                    {
                        href: 'https://discord.com/invite/UdnR74tQ2c',
                        label: 'Discord',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'About',
                        items: [
                            {
                                label: 'About',
                                to: '/',
                            },

                        ],
                    },
                    {
                        title: 'Guides',
                        items: [
                            {
                                label: 'Guides',
                                to: '/docs-guides/welcome',
                            },
                        ]
                    },
                    {
                        title: 'Team',
                        items: [
                            {
                                label: 'Team',
                                to: '/ourTeam',
                            },
                        ]
                    },
                    {
                        title: 'Follow Us',
                        items: [
                            {
                                label: 'Facebook',
                                href: 'https://www.facebook.com/morenftofficial',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/MoreNFT_'
                            },
                            {
                                label: 'Instagram',
                                href: 'https://www.instagram.com/morenft_/?utm_medium=copy_link'
                            },
                            {
                                label: 'Discord',
                                href: 'https://discord.com/invite/UdnR74tQ2c',
                            },
                            {
                                label: 'Telegram',
                                href: 'https://t.me/morenft'
                            },
                            {
                                label: 'Blog',
                                href: 'https://morenft.medium.com/',
                            },
                        ],
                    },
                ],
                // copyright: `Copyright © ${new Date().getFullYear()} made by Vitali Passaro with &#128154; for MORE NFT DOCS.`,
            },
            prism: {
                theme: lightCodeTheme,
                // darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
