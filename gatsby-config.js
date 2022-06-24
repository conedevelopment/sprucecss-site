module.exports = {
  siteMetadata: {
    description: 'Spruce CSS is a modern, minimal CSS Framework built on Sass.',
    github: 'conedevelopment',
    version: '0.9.0',
    siteUrl: 'https://sprucecss.com',
    slogan: [
      '🎉 Another CSS Framework',
      '😳 Yesterday I liked it',
      '🤨 It could be worse, I think',
      '👔 It is far from elegant'
    ],
    title: 'Spruce CSS',
    twitter: 'conedevelopment'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/docs`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe'
          }
        ]
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/
        }
      }
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          cookieName: 'spruce-gdpr-cookies',
          trackingId: 'UA-91043380-5',
          anonymize: true
        },
        environments: ['production', 'development']
      },
    },
  ],
};
