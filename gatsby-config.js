const path = require(`path`)
const autoprefixer = require(`autoprefixer`)
const postcssNormalize = require(`postcss-normalize`)

module.exports = {
	siteMetadata: {
		siteUrl: `http://localhost/`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-robots-txt`,
		`gatsby-plugin-react-svg`,
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `helium`,
				short_name: `helium`,
				start_url: `/`,
				background_color: `#3c4e9f`,
				theme_color: `#3c4e9f`,
				display: `standalone`,
				icon: `src/images/favicon/favicon.png`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: path.join(__dirname, `src`, `data`),
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: path.join(__dirname, `src`, `images`),
			},
		},
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				data: `@import "styles/helpers";`,
				includePaths: [`src/`],
				precision: 10,
				cssLoaderOptions: {
					localIdentName: `[local]--[hash:base64:5]`,
					camelCase: false,
				},
				postCssPlugins: [autoprefixer(), postcssNormalize()],
			},
		},
	],
}
