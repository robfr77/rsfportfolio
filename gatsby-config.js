module.exports = {
  siteMetadata: {
    title: `Cybersecurity Analyst | Web Developer`,
    description: `Rob Friedman portfolio page`,
    author: `Rob Friedman`,
    siteUrl: `https://www.rsfportfolio.com`,
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://www.rsfportfolio.com`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rob Friedman portfolio`,
        short_name: `RF portfolio`,
        start_url: `/`,
        background_color: `#F1ECE6`,
        theme_color: `#4C6D8D`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
