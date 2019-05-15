const autoprefixer = require(`autoprefixer`)
const postcssNormalize = require(`postcss-normalize`)

module.exports = {
  siteMetadata: {
    siteUrl: `http://localhost/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
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
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: `@import "styles/helpers";`,
        includePaths: [`src/`],
        precision: 10,
        cssLoaderOptions: {
          localIdentName: `[local]_[hash:base64:5]`,
        },
        postCssPlugins: [autoprefixer(), postcssNormalize()],
      },
    },
    `gatsby-plugin-react-svg`,
  ],
}
