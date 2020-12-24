const siteName = `Tanner's Blog`;
const description = `Articles about programming, DIY projects, music, and more`;

const novelaThemeConfig = require('@narative/gatsby-theme-novela/gatsby-config');

module.exports = {
  siteMetadata: {
    title: siteName,
    name: siteName,
    siteUrl: `https://blog.tannernielsen.com`,
    description: description,
    hero: {
      heading: `Welcome to ${siteName}: ${description}`,
      maxWidth: 1000,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/tannerntannern`,
      },
    ],
  },
  plugins: [
    {
      resolve: `@narative/gatsby-theme-novela`,
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
        },
        articlePermalinkFormat: ':year/:month/:day/:slug',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteName,
        short_name: siteName,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    'gatsby-plugin-meta-redirect', // make sure this is always the last one
  ],
};
