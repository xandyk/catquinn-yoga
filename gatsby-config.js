module.exports = {
    pathPrefix: '/gatsby-react-bootstrap-starter',
    siteMetadata: {
        title: `Cat Quinn Yoga`,
        description: `A re-design project`,
        author: `Sandy`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: 'gatsby-background-image-es5',
            options: {
                specialChars: '/:'
            }
        },
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-react-bootstrap`,
                short_name: `react-bootstrap`,
                start_url: `/`,
                background_color: `#20232a`,
                theme_color: `#20232a`,
                display: `minimal-ui`,
                icon: `src/images/`
            }
        }
    ]
}
