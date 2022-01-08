module.exports = {
  siteMetadata: {
    description: 'Spruce is a minimalistic CSS starter Framework on Sass.',
    icon: 'src/images/icon.svg',
    github: 'conedevelopment',
    version: '0.1.3',
    siteUrl: 'https://sprucecss.com',
    slogen: [
      '🎉 Another CSS Framework',
      '😳 Yesterday I liked it.',
      '🤨 It could be worse, I think.'
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
