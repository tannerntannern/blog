module.exports = {
	siteMetadata: {
		siteTitleAlt: `Tanner's Blog`,
	},
	plugins: [
		{
			resolve: `@lekoarts/gatsby-theme-minimal-blog`,
			options: {
				navigation: [
					{
						title: `Posts`,
						slug: `/`,
					},
					{
						title: `Tags`,
						slug: `/tags`
					}
				],
				externalLinks: [
					{
						name: `GitHub`,
						url: `https://github.com/tannerntannern`,
					},
				],
			},
		},
		// {
		// 	resolve: `gatsby-plugin-google-analytics`,
		// 	options: {
		// 		trackingId: process.env.GOOGLE_ANALYTICS_ID,
		// 	},
		// },
		`gatsby-plugin-sitemap`,
	],
};
