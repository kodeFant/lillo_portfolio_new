function mapPortfolioToTech({ entities }) {
  const tech = entities.filter(e => e.__type === `wordpress__wp_tech`)

  return entities.map(e => {
    if (e.__type === `wordpress__wp_portfolio`) {
      let hasTech = e.tech && Array.isArray(e.tech)
      // Replace genres with links to their nodes.
      if (hasTech) {
        e.tech___NODE = e.tech.map(
          c => tech.find(gObj => c === gObj.wordpress_id).id
        )
        delete e.tech
      }
    }
    return e
  })
}

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
         * Example : 'gatsbyjswpexample.wordpress.com' or 'www.example-site.com'
         */
        baseUrl: `portfolio.kodefant.space`,
        // The protocol. This can be http or https.
        protocol: `https`,
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the asumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
        // This feature is untested for sites hosted on Wordpress.com
        useACF: true,
        includedRoutes: [
          '/*/*/posts',
          '/*/*/media',
          // "/*/*/categories",
          // "/*/*/tags",
          // "/*/*/taxonomies",
          '/wp-api-menus/v2/*',
          '/*/*/pages',
          '/*/*/portfolio',
          '/*/*/tech',
        ],
        normalizer: mapPortfolioToTech,
      },
    },
    `gatsby-plugin-sass`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'lars-lillo-ulvestad-webutvikler',
        short_name: 'lillo-webutvikler',
        start_url: '/',
        background_color: '#344',
        theme_color: '#ddd',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Raleway'],
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
