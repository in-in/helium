const path = require(`path`)
const autoprefixer = require(`autoprefixer`)
const postcssNormalize = require(`postcss-normalize`)
const postcssLogical = require(`postcss-logical`)

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
				// eslint-disable-next-line global-require
				implementation: require(`sass`),
				data: `@use "styles/config" as *;`,
				includePaths: [path.resolve(__dirname, `src`)],
				cssLoaderOptions: {
					localIdentName: `[local]--[hash:base64:5]`,
					camelCase: false,
				},
				postCssPlugins: [
					autoprefixer(),
					postcssNormalize(),
					postcssLogical({
						dir: `ltr`,
					}),
				],
			},
		},
		{
			resolve: `@danbruegge/gatsby-plugin-stylelint`,
			options: {
				files: [`src/**/*.{css,scss}`],
				fix: true,
			},
		},
	],
}
