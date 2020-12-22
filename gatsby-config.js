const siteName = `Tanner's Blog`;

module.exports = {
  siteMetadata: {
    title: siteName,
    name: siteName,
    siteUrl: `https://blog.tannernielsen.com`,
    description: `Articles about programming, DIY projects, music, and more`,
    hero: {
      heading: `Welcome to Tanner's Blog, articles about programming, DIY projects, music, and more.`,
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
          // contentful: true,
        },
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
  ],
};
